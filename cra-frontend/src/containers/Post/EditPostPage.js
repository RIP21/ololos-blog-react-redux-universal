import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { push } from 'react-router-redux'
import { getById } from 'utils/helpers'
import { postsSelector, authorsSelector } from 'selector/selectors'
import * as Empty from 'constants/constants'
import EditPostForm from './EditPostForm'
import * as postsActions from 'redux/posts'
import { loadAuthorsAndPosts } from 'helpers/fetching'

class EditPostPage extends Component {
  static propTypes = {
    author: PropTypes.object.isRequired,
    createPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    push: PropTypes.func.isRequired,
    updatePost: PropTypes.func.isRequired,
  }

  state = {
    post: Object.assign({}, this.props.post),
  }

  componentDidMount() {
    this.props.loadAuthorsAndPosts()
  }

  setPostField = (name, value) => {
    this.setState(prevState => {
      return { post: { ...prevState.post, [name]: value } }
    })
  }

  updatePostState = event => {
    const { checked, type, value, name } = event.target
    const isCheckbox = type === 'checkbox'
    const valueToSet = isCheckbox ? checked : value
    this.setPostField(name, valueToSet)
  }

  handleEditorChange = (value, field) => {
    this.setPostField(field, value)
  }

  updateOrCreate = post => {
    const { updatePost, createPost } = this.props
    if (post.id) {
      return updatePost(post)
    }
    post.author = this.props.author; //eslint-disable-line
    return createPost(post)
  }

  savePost = event => {
    const post = this.state.post
    event.preventDefault()
    this.updateOrCreate(post).then(() => {
      this.props.push('/admin/posts')
    })
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
    )
  }
}

function mapStateToProps(state, ownProps) {
  const { userName } = state.auth.user

  return {
    author: getById(authorsSelector(state), userName, Empty.EMPTY_AUTHOR),
    post: getById(postsSelector(state), ownProps.params.id, Empty.EMPTY_POST),
    loading: state.posts.loading,
  }
}

export default connect(mapStateToProps, {
  ...postsActions,
  push,
  loadAuthorsAndPosts,
})(EditPostPage)
