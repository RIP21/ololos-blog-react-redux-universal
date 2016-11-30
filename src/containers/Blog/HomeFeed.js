import React, { PropTypes } from 'react';
import BlogPost from '../../common/BlogPost';

const HomeFeed = ({ posts }) => (
  <div className="col-sm-8 blog-main">
    {posts.map(
        post => <BlogPost key={post.id} post={post} />
      )}
  </div>
  );

HomeFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default HomeFeed;
