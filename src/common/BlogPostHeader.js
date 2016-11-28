import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import dateformat from 'dateformat';

const BlogPostHeader = ({post, open = false}) => {
  return (
    <div>
      {!open ?
        <h2 className="blog-post-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
        : <h2 className="blog-post-title"> {post.title}</h2>}
      <p className="blog-post-meta">{dateformat(post.postdate)} by <Link
        to={`api/author/${post.author.id}`}>{post.author.id}</Link>
      </p>
    </div>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default BlogPostHeader;
