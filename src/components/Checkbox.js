import React, { PropTypes } from 'react'

const Checkbox = ({ name, label, errors, ...inputProps }) => {
  const input = (
    <input type="checkbox" id={name} {...inputProps} />
  )
  return (
    <div>
      { label ? <label htmlFor={name}>{input}{label}</label> : input }
      { errors ? <span>{errors}</span> : null }
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Checkbox.defaultProps = {
  value: '',
  label: null,
  errors: null,
  onChange() {},
  onBlur() {}
}

export default Checkbox
