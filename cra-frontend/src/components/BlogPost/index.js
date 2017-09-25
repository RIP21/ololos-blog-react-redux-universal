/* eslint-disable react/no-danger */
import { Link } from 'react-router'
import Remarkable from 'remarkable'
import React from 'react'
import PropTypes from 'prop-types'
import BlogPostBody from './BlogPostBody'
import BlogPostHeader from './BlogPostHeader'
import styled from 'styled-components'

const PostContainer = styled.div`
  color: #333;
  & img {
    border-radius: 6px;
    display: block;
    max-width: 100%;
    height: auto;
    margin: auto;
    margin-bottom: 1em;
  }
  & p {
    font-size: 14px;
    line-height: 1.42857;
  }

  & blockquote p {
    font-size: 1em;
  }
`

const BlogPost = ({ post, open }) => (
  <PostContainer>
    <BlogPostHeader post={post} open={open} />
    {open ? (
      <BlogPostBody post={post} />
    ) : (
      <div>
        <img alt={post.title} src={post.previewPic} />
        <div
          dangerouslySetInnerHTML={{
            __html: new Remarkable().render(post.description),
          }}
        />
        <Link to={`/post/${post.id}`}>Читать далее...</Link>
      </div>
    )}
  </PostContainer>
)

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool,
}

export default BlogPost
