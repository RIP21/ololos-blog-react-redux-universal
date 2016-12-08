import React, { PropTypes } from 'react';
import HomeFeed from './HomeFeed';


const HomePageRow = ({ posts }) => (
  <div className="row">
    <HomeFeed posts={posts} />
  </div>
  );

HomePageRow.propTypes = {
  posts: PropTypes.array.isRequired
};

export default HomePageRow;
