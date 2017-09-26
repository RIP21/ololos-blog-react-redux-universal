import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({
  name,
  label,
  onChange,
  defaultOption,
  value,
  error,
  options,
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <div className="field">
      {/* Note, value is set here rather than on the option - docs: https://facebook.github.io/react/docs/forms.html */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      >
        <option value="">{defaultOption}</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
)

SelectInput.propTypes = {
  defaultOption: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default SelectInput
