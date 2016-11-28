import React, {PropTypes} from 'react';
import PostListRow from './PostListRow';

const PostList = ({posts, onDelete}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
        <th>ID</th>
        <th>Title</th>
        <th>Author</th>
        <th>Date</th>
      </tr>
      </thead>
      <tbody>
      {posts.map(post =>
        <PostListRow key={post.id} post={post} onDelete={onDelete}/>
      )}
      </tbody>
    </table>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostList;
