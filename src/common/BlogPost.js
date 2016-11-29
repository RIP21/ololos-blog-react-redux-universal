/* eslint-disable react/no-danger */
import { Link } from 'react-router';
import Remarkable from 'remarkable';
import React, { PropTypes } from 'react';
import BlogPostBody from '../common/BlogPostBody';
import BlogPostHeader from '../common/BlogPostHeader';


const BlogPost = ({ post, open }) => (
  <div className="blog-post">
    <BlogPostHeader post={post} open={open} />
    {open ? <BlogPostBody post={post} /> :
    <div>
      <img className="img-responsive img-rounded" src={post.previewPic} />
      <div dangerouslySetInnerHTML={{ __html: new Remarkable().render(post.description) }} />
      <Link to={`/post/${post.id}`}>Читать далее...</Link>
    </div>}
  </div>
  );

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default BlogPost;
