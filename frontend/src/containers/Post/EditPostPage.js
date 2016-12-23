import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { getById } from '../../selector/selectors';
import * as Empty from '../../constants/emptyEntities';
import * as postActions from '../../redux/modules/posts';
import EditPostForm from './EditPostForm';

class EditPostPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: objectAssign({}, props.post),
    };

    this.updatePostState = this.updatePostState.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id !== nextProps.post.id) {
      // Necessary to populate form when existing post is loaded directly.
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  updatePostState(event) {
    const field = event.target.name;
    const post = this.state.post;
    post[field] = event.target.value;
    return this.setState({post});
  }

  handleEditorChange(value) {
    return this.setState({post: objectAssign(this.state.post, {body: value})});
  }

  updateOrCreate(post) {
    const {updatePost, createPost} = this.props;
    if (post.id) {
      return updatePost(post);
    }
    post.author = this.props.author; //eslint-disable-line
    return createPost(post);
  }

  savePost(event) {
    const post = this.state.post;
    event.preventDefault();
    this.updateOrCreate(post); //TODO: Add NO REDIRECT in case of error.
    this.props.push('/admin/posts');
  }

  render() {
    return (
      <div className="container">
        <EditPostForm
          post={this.state.post}
          loading={this.state.loading}
          onChange={this.updatePostState}
          handleEditorChange={this.handleEditorChange}
          onSave={this.savePost}
        />
      </div>
    );
  }
}

EditPostPage.propTypes = {
  createPost: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  author: PropTypes.object.isRequired,
  push: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  const {posts} = state.posts;
  const {authors} = state.authors;
  const {userName} = state.auth.user;

  const postId = ownProps.params.id;
  let post = Empty.POST;
  let author = Empty.AUTHOR;

  //TODO: Put this copypaste code to some sort of utils/selectors
  if (userName && authors.length > 0) {
    author = getById(authors, userName);
  }

  if (postId && posts.length > 0) {
    post = getById(posts, postId);
  }
  return {
    author,
    post,
    loading: state.posts.loading
  };
}

export default connect(mapStateToProps, {...postActions, push})(EditPostPage);
