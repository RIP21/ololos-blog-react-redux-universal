import React, {PropTypes} from 'react';
import BlogPost from '../../common/BlogPost';
import Pager from '../../common/Pager';

const HomeFeed = ({posts}) => {
  return (
    <div className="col-sm-8 blog-main">
      {posts.map(
        post => <BlogPost key={post.id} post={post}/>
      )}
      <Pager/>
    </div>
  );
};

HomeFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default HomeFeed;
