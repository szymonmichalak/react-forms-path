import React, { PropTypes } from 'react'

const Checkbox = ({ name, value, label, onChange, ...inputProps }) => {
  const input = (
    <input type="checkbox" id={name} value={value} onChange={onChange} {...inputProps} />
  )
  return (
    <div>
      { label ? <label htmlFor={name}>{input}{label}</label> : input }
    </div>
  )
}

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func
}

Checkbox.defaultProps = {
  value: '',
  label: null,
  onChange() {}
}

export default Checkbox
