import React, { Component, PropTypes } from 'react'

class Radio extends Component {
  constructor(props) {
    super(props)
    this.renderSingle = this.renderSingle.bind(this)
  }

  renderSingle(option, index) {
    const { name, value, onChange, onBlur } = this.props
    return (
      <label key={`${name}-${index}`} htmlFor={option}>
        <input
          type="radio"
          id={option}
          name={name}
          value={option}
          checked={value === option}
          onChange={onChange}
          onBlur={onBlur}
        />
        {option}
      </label>
    )
  }

  render() {
    const { options, error } = this.props
    return (
      <div>
        { options.map(this.renderSingle) }
        { error ? <span>{error}</span> : null }
      </div>
    )
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func
}

Radio.defaultProps = {
  value: '',
  error: null,
  onChange() {},
  onBlur() {}
}

export default Radio
