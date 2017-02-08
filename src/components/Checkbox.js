import React, { PropTypes } from 'react'

const Checkbox = ({ name, label, error, ...inputProps }) => {
  const input = (
    <input type="checkbox" id={name} {...inputProps} />
  )
  return (
    <div>
      { label ? <label htmlFor={name}>{input}{label}</label> : input }
      { error ? <span>{error}</span> : null }
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Checkbox.defaultProps = {
  value: '',
  label: null,
  error: null,
  onChange() {},
  onBlur() {}
}

export default Checkbox
