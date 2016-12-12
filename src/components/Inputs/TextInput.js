import React, { PropTypes } from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, type = 'text', className}) => {
  let wrapperClass = '';
  if (error && error.length > 0) {
    wrapperClass += 'has-error';
  }

  return (
    <div className={wrapperClass}>
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input
        type={type}
        name={name}
        className={className || 'form-control'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string
};

export default TextInput;
