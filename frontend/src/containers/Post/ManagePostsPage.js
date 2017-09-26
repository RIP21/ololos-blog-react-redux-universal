import { connect } from 'react-redux'
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { browserHistory } from 'react-router'
import PostList from './PostList'
import * as postsActions from '../../redux/posts'
import { sortNewPostsFirstSelector } from '../../selector/selectors'
import { loadAuthorsAndPosts } from 'helpers/fetching'

class ManagePostsPage extends React.Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  deletePost = (event, post) => {
    event.preventDefault()
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Вы уверены что хотите удалить пост?')) {
      //eslint-disable-line
      this.props.deletePost(post.id)
    }
  }

  redirectToAddPostPage = () => {
    browserHistory.push('/admin/create/post')
  }

  render() {
    const { posts } = this.props
    return (
      <div className="container">
        <Helmet title="Посты" />
        <h1>Посты</h1>
        <PostList posts={posts} onDelete={this.deletePost} />
        <input
          type="submit"
          value="Создать новый"
          className="btn btn-primary"
          onClick={this.redirectToAddPostPage}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: sortNewPostsFirstSelector(state),
  }
}

export default connect(mapStateToProps, {
  ...postsActions,
  loadAuthorsAndPosts,
})(ManagePostsPage)
