import { connect } from 'react-redux';
import objectAssign from 'object-assign';
import React, { PropTypes } from 'react';
import { push } from 'react-router-redux';
import { getById } from '../../utils/helpers';
import {postsSelector, authorsSelector } from '../../selector/selectors';
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

  setPostField(name, value) {
    return this.setState({post: objectAssign({}, this.state.post, {[name]: value})});
  }

  updatePostState(event) {
    const {checked, type, value, name} = event.target;
    const isCheckbox = type === 'checkbox';
    const valueToSet = isCheckbox ? checked : value;
    this.setPostField(name, valueToSet);
  }

  handleEditorChange(value, field) {
    this.setPostField(field, value);
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
  const {userName} = state.auth.user;

  return {
    author: getById(authorsSelector(state), userName, Empty.AUTHOR),
    post: getById(postsSelector(state), ownProps.params.id, Empty.POST),
    loading: state.posts.loading
  };
}

export default connect(mapStateToProps, {...postActions, push})(EditPostPage);
