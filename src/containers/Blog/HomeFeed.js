import React, { PropTypes } from 'react';
import BlogPost from '../../components/BlogPost/BlogPost';

const HomeFeed = ({ posts }) => (
  <div className="blog-main">
    {posts.map(
        post => <BlogPost key={post.id} post={post} />
      )}
  </div>
  );

HomeFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default HomeFeed;
