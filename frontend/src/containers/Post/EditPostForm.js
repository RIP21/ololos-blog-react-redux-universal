import React, { PropTypes } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import SimpleMDE from 'react-simplemde-editor';
import TextInput from '../../components/Inputs/TextInput';
import '../../../node_modules/simplemde/dist/simplemde.min.css';


class EditPostForm extends React.Component {


  render() {
    const { loading, onSave, post, onChange, handleEditorChange } = this.props;
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
          <FormControl
            name="description" componentClass="textarea"
            placeholder="Введите короткое описание {Markdown syntax supported}" value={post.description}
            onChange={onChange}
          />
        </FormGroup>

        <SimpleMDE
          name="body" id={`SimpleMDE-${post.id}`} onChange={handleEditorChange} value={post.body} options={{
            autofocus: true,
            spellChecker: false
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
