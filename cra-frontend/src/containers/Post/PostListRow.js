import { Link } from 'react-router'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

moment.locale('ru')

class PostListRow extends React.PureComponent {
  onDeleteClick = e => {
    this.props.onDelete(e, this.props.post)
  }

  render() {
    const post = this.props.post
    return (
      <tr>
        <td>{post.id}</td>
        <td>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </td>
        <td>{post.author.authorName}</td>
        <td>{moment(post.postdate).format('llll')}</td>
        <td>{post.published ? 'Опубликован' : 'Не опубликован'}</td>
        <td>
          <Link to={`/admin/edit/post/${post.id}`}>Редактировать</Link>
        </td>
        <td>
          <a href="/delete" onClick={this.onDeleteClick}>
            Удалить
          </a>
        </td>
      </tr>
    )
  }
}

PostListRow.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default PostListRow
