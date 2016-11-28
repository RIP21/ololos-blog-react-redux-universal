import toastr from 'toastr';
import {connect} from 'react-redux';
import objectAssign from 'object-assign';
import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {getById} from '../../selector/selectors';
import * as Empty from '../../constants/emptyEntities';
import * as postActions from '../../redux/modules/posts';
import EditPostForm from './EditPostForm';

class EditPostPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      post: objectAssign({}, props.post),
      errors: {},
      saving: false
    };

    this.updatePostState = this.updatePostState.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  componentDidMount() {
    this.setState({post: objectAssign({}, this.props.post)}); // eslint-disable-line
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
    const {updatePost, createPost} = this.props.actions;
    return post.id ? updatePost : createPost;
  }


  savePost(event) {
    const post = this.state.post;
    event.preventDefault();
    this.setState({saving: true});
    this.updateOrCreate(post)(post)
      .then(() => this.redirect())
      .catch((error) => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Post saved');
    this.context.router.push('/admin/posts');
  }

  render() {
    return (
      <EditPostForm post={this.state.post}
                    saving={this.state.saving}
                    errors={this.state.errors}
                    onChange={this.updatePostState}
                    handleEditorChange={this.handleEditorChange}
                    onSave={this.savePost}
      />
    );
  }
}

EditPostPage.propTypes = {
  actions: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool,
};

EditPostPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id;
  let post = Empty.POST;

  if (postId && state.posts.length > 0) {
    post = getById(state.posts, postId);
  }
  return {
    post,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostPage);

