import React, { PropTypes } from 'react'

const Input = ({ name, value, label, type, onChange, ...inputProps }) => (
  <div>
    { label ? <label htmlFor={name}>{label}</label> : null }
    <input type={type} id={name} value={value} onChange={onChange} {...inputProps} />
  </div>
)

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
}

Input.defaultProps = {
  value: '',
  label: null,
  type: 'text',
  onChange() {}
}

export default Input
