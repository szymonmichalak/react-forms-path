import React, { PropTypes } from 'react'

const Input = ({ name, label, error, ...inputProps }) => (
  <div>
    { label ? <label htmlFor={name}>{label}</label> : null }
    <input id={name} {...inputProps} />
    { error ? <span>{error}</span> : null }
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Input.defaultProps = {
  value: '',
  label: null,
  error: null,
  type: 'text',
  onChange() {},
  onBlur() {},
}

export default Input
