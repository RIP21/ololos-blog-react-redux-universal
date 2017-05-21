import React, { PropTypes } from "react";
import PostListRow from "./PostListRow";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 20px;
  border-collapse: collapse;
  border-spacing: 0;
  th {
    border-top: 0;
    vertical-align: bottom;
    text-align: left;
    padding: 8px;
    line-height: 1.42857;
    border-bottom: 2px solid #ddd;
  }
  td {
    padding: 8px;
    line-height: 1.42857;
    vertical-align: top;
    border-top: 1px solid #ddd;
  }
`;

const PostList = ({ posts, onDelete }) => (
  <Table>
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
      {posts.map(post => <PostListRow key={post.id} post={post} onDelete={onDelete} />)}
    </tbody>
  </Table>
);

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostList;
