import React, { PropTypes } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import SimpleMDE from 'react-simplemde-editor';
import TextInput from '../../components/Inputs/TextInput';
import '../../../node_modules/simplemde/dist/simplemde.min.css';

class EditPostForm extends React.Component {

  render() {
    const {loading, onSave, post, onChange, handleEditorChange} = this.props;
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

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Короткое описание</ControlLabel>
          <SimpleMDE
            id={`description-${post.id}`}
            value={post.description}
            onChange={value => handleEditorChange(value, 'description')}
            options={{
              placeholder: 'Введите короткое описание {Markdown синтаксис поддерживается}',
              spellChecker: false,
              toolbar: [
                'bold', 'italic', 'strikethrough', '|',
                'heading-1', 'heading-2', 'heading-3', '|',
                'heading-smaller', 'heading-bigger', '|',
                'code', 'quote', 'unordered-list', 'ordered-list', 'link', 'image', '|',
                'table', 'horizontal-rule', '|',
                'preview', '|',
                'guide'
              ],
            }}
          />
        </FormGroup>

        <SimpleMDE
          id={`body-${post.id}`}
          onChange={value => handleEditorChange(value, 'body')}
          value={post.body}
          options={{
            spellChecker: false,
            toolbar: [
              'bold', 'italic', 'strikethrough', '|',
              'heading-1', 'heading-2', 'heading-3', '|',
              'heading-smaller', 'heading-bigger', '|',
              'code', 'quote', 'unordered-list', 'ordered-list', 'link', 'image', '|',
              'table', 'horizontal-rule', '|',
              'preview', '|',
              'guide'
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
    );
  }
}

EditPostForm.propTypes = {
  loading: PropTypes.bool,
  onSave: PropTypes.func,
  post: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
};

export default EditPostForm;
