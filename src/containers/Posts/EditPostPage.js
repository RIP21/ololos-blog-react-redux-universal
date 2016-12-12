import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import React, { PropTypes } from 'react';
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
    return post.id ? updatePost(post) : createPost(post);
  }

  savePost(event) {
    const post = this.state.post;
    event.preventDefault();
    this.updateOrCreate(post);
    this.context.router.push('/admin/posts');
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
};

EditPostPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const {posts} = state.posts;

  const postId = ownProps.params.id;
  let post = Empty.POST;

  if (postId && posts.length > 0) {
    post = getById(posts, postId);
  }
  return {
    post,
    posts,
    loading: state.posts.loading,
  };
}

export default connect(mapStateToProps, {...postActions})(EditPostPage);
