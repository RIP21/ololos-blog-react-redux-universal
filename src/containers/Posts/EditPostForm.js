import React, {PropTypes} from 'react';
import TextInput from '../../common/TextInput';
import SimpleMDE from 'react-simplemde-editor';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

const EditPostForm = ({saving, onSave, post, onChange, errors, handleEditorChange}) => {
  return (
    <form>
      {post.id === '' ? <h1>Create post</h1> : <h1>Edit post</h1>}

      <TextInput
        name="title"
        label="Title:"
        value={post.title}
        onChange={onChange}
        error={errors.title}
      />

      <TextInput
        name="previewPic"
        label="Preview Picture link:"
        value={post.previewPic}
        onChange={onChange}
        error={errors.previewPic}
      />

      <FormGroup controlId="formControlsTextarea">
        <ControlLabel>Short Description:</ControlLabel>
        <FormControl name="description" componentClass="textarea"
                     placeholder="Short Description {Markdown syntax supported}" value={post.description}
                     onChange={onChange}/>
      </FormGroup>

      <SimpleMDE onChange={handleEditorChange} value={post.body} options={{
        autofocus: true,
        spellChecker: false
      }}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

EditPostForm.propTypes = {
  saving: PropTypes.bool,
  onSave: PropTypes.func,
  post: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default EditPostForm;
