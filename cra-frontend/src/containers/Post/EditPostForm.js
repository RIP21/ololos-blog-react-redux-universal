import React from 'react'
import PropTypes from 'prop-types'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import SimpleMDE from 'react-simplemde-editor'
import TextInput from 'components/Inputs/TextInput'
import 'simplemde/dist/simplemde.min.css'
import './SimpleMDE.css'

class EditPostForm extends React.PureComponent {
  handleEditorChange = fieldName => e => {
    this.props.handleEditorChange(e.target.value, fieldName)
  }

  onDescriptionChange = this.handleEditorChange('description')
  onBodyChange = this.handleEditorChange('body')

  render() {
    const { loading, onSave, post, onChange } = this.props
    return (
      <form>
        {post.id === '' ? <h1>Создать пост</h1> : <h1>Редактировать пост</h1>}

        <TextInput
          name="title"
          label="Заголовок"
          value={post.title}
          onChange={onChange}
          placeholder="Введите заголовок"
        />

        <TextInput
          name="previewPic"
          label="Превью картинка"
          value={post.previewPic}
          onChange={onChange}
          placeholder="Ссылка на фотографию. Будет показана на главной странице."
        />
        <div>
          <input
            type="checkbox"
            name="published"
            checked={post.published}
            onChange={onChange}
          />{' '}
          Опубликован
        </div>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Короткое описание</ControlLabel>
          <SimpleMDE
            className="description"
            id={`description-${post.id}`}
            value={post.description}
            onChange={this.onDescriptionChange}
            options={{
              placeholder:
                'Введите короткое описание {Markdown синтаксис поддерживается}',
              spellChecker: false,
              toolbar: ['bold'],
              hideIcons: ['bold'],
              status: false,
            }}
          />
        </FormGroup>

        <SimpleMDE
          id={`body-${post.id}`}
          onChange={this.onBodyChange}
          value={post.body}
          options={{
            spellChecker: false,
            toolbar: [
              'bold',
              'italic',
              'strikethrough',
              '|',
              'heading-1',
              'heading-2',
              'heading-3',
              '|',
              'heading-smaller',
              'heading-bigger',
              '|',
              'code',
              'quote',
              'unordered-list',
              'ordered-list',
              'link',
              'image',
              '|',
              'table',
              'horizontal-rule',
              '|',
              'preview',
              '|',
              'guide',
            ],
          }}
        />

        <input
          type="submit"
          disabled={loading}
          value={loading ? 'Сохраняю...' : 'Сохранить'}
          className="btn btn-success"
          onClick={onSave}
        />
      </form>
    )
  }
}

EditPostForm.propTypes = {
  handleEditorChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  post: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func,
}

export default EditPostForm
