import React, {PropTypes} from 'react';
import Remarkable from 'remarkable';

const BlogPostBody = ({post}) => {
  function addImgBootstrapClasses(htmlBody) {
    return htmlBody.replace(new RegExp('<img', 'g'), '<img class="img-responsive img-rounded"');
  }

  return (
    <div dangerouslySetInnerHTML={{__html: addImgBootstrapClasses(new Remarkable().render(post.body))}}></div> // eslint-disable-line
  );
};

BlogPostBody.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostBody;
