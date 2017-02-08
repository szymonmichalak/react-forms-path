import React, { PropTypes } from 'react'

const Input = ({ name, label, errors, ...inputProps }) => (
  <div>
    { label ? <label htmlFor={name}>{label}</label> : null }
    <input id={name} {...inputProps} />
    { errors ? <span>{errors}</span> : null }
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  value: '',
  label: null,
  errors: null,
  type: 'text',
  onChange() {},
  onBlur() {},
}

export default Input
