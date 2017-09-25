import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import DisqusThread from 'react-disqus-comments'
import { getById } from 'utils/helpers'
import { postsSelector } from 'selector/selectors'
import * as Constants from 'constants/constants'
import { BlogPost } from 'components'
import { loadAuthorsAndPosts } from 'helpers/fetching'

class PostPage extends Component {
  componentDidMount() {
    this.props.loadAuthorsAndPosts()
  }

  render() {
    const { id, title, description, previewPic } = this.props.post
    const postHelmet = {
      title,
      meta: [
        { name: 'description', content: description },
        {
          name: 'article:author',
          content: 'https://www.facebook.com/OlolosBlog/',
        },
        { name: 'twitter:account_id', content: '828735737327734788' },
        { name: 'twitter:title', property: 'og:title', content: title },
        { name: 'twitter:site', content: '@OlolosBlog' },
        {
          name: 'twitter:description',
          property: 'og:description',
          content: description,
        },
        {
          name: 'twitter:image',
          property: 'og:image',
          content: `${Constants.ABSOLUTE_HOST_PATH}${previewPic}`,
        },
        {
          property: 'og:url',
          content: `${Constants.ABSOLUTE_HOST_PATH}/post/${id}`,
        },
        { property: 'og:type', content: 'article' },
        { property: 'og:locale', content: 'ru_RU' },
      ],
    }

    return (
      <div>
        <Helmet {...postHelmet} />
        <BlogPost post={this.props.post} open />
        <DisqusThread shortname="ololos" identifier={id} title={title} />
      </div>
    )
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
}

function mapStateToProps(state, ownProps) {
  return {
    post: getById(
      postsSelector(state),
      ownProps.params.id,
      Constants.EMPTY_POST,
    ),
  }
}

export default connect(mapStateToProps, { loadAuthorsAndPosts })(PostPage)
