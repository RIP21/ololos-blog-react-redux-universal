import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import { BlogPost } from '../../components'
import { sortNewPostsFirstSelector } from '../../selector/selectors'
import { loadAuthorsAndPosts } from 'helpers/fetching'

class Home extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  componentDidMount() {
    this.props.loadAuthorsAndPosts()
  }

  render() {
    // require the logo image both from client and server
    return (
      <div>
        <Helmet title="Ололось блог" />
        {this.props.posts.map(
          post =>
            post.published ? <BlogPost key={post.id} post={post} /> : null,
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: sortNewPostsFirstSelector(state),
  }
}

export default connect(mapStateToProps, { loadAuthorsAndPosts })(Home)
