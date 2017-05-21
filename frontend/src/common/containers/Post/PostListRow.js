import { Link } from "react-router";
import React, { PropTypes } from "react";
import moment from "moment";

moment.locale("ru");

const PostListRow = ({ post, onDelete }) => (
  <tr>
    <td>{post.id}</td>
    <td><Link to={`/post/${post.id}`}>{post.title}</Link></td>
    <td>{post.author.authorName}</td>
    <td>{moment(post.postdate).format("llll")}</td>
    <td>{post.published ? "Опубликован" : "Не опубликован"}</td>
    <td><Link to={`/admin/edit/post/${post.id}`}>Редактировать</Link></td>
    <td><a href="/delete" onClick={event => onDelete(event, post)}>Удалить</a></td>
  </tr>
);

PostListRow.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default PostListRow;
