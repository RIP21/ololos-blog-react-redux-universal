import React, { PropTypes } from "react";
import Remarkable from "remarkable";

const BlogPostBody = ({ post }) => {
  return <div dangerouslySetInnerHTML={{ __html: new Remarkable().render(post.body) }} />; // eslint-disable-line
};

BlogPostBody.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostBody;
