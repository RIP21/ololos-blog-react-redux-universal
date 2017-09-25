import React from 'react'
import PropTypes from 'prop-types'

const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  type = 'text',
  className,
}) => (
  <div className={className}>
    {label ? <label htmlFor={name}>{label}</label> : null}
    <input
      type={type}
      name={name}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
}

export default TextInput
