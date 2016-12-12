import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import dateformat from 'dateformat';

const BlogPostHeader = ({ post, open = false }) => (
  <div>
    {!open ?
      <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
        : <h2> {post.title}</h2>}
    <p>{dateformat(post.postdate)} by <Link
      to={`api/author/${post.author.id}`}
    >{post.author.id}</Link>
    </p>
  </div>
  );

BlogPostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default BlogPostHeader;
