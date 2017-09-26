import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import moment from 'moment'

moment.locale('ru')

const BlogPostHeader = ({ post, open = false }) => (
  <div>
    {!open ? (
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
    ) : (
      <h2> {post.title}</h2>
    )}
    <p>
      {moment(post.postdate).format('llll')}
      <Link to={`/author/${post.author.id}`}> {post.author.id}</Link>
    </p>
  </div>
)

BlogPostHeader.propTypes = {
  open: PropTypes.bool,
  post: PropTypes.object.isRequired,
}

export default BlogPostHeader
