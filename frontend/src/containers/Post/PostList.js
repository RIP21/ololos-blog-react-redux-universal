import React, { PropTypes } from 'react';
import PostListRow from './PostListRow';

const PostList = ({ posts, onDelete }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Заголовок</th>
        <th>Автор</th>
        <th>Дата публикации</th>
        <th>Статус</th>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      {posts.map(post =>
        <PostListRow key={post.id} post={post} onDelete={onDelete} />
      )}
    </tbody>
  </table>
  );

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostList;
