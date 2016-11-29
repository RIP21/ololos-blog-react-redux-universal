import React, { PropTypes } from 'react';
import BlogSidebar from '../../common/BlogSidebar';
import HomeFeed from './HomeFeed';


const HomePageRow = ({ posts }) => (
  <div className="row">
    <HomeFeed posts={posts} />
    <BlogSidebar />
  </div>
  );

HomePageRow.propTypes = {
  posts: PropTypes.array.isRequired
};

export default HomePageRow;
