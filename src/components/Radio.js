import React, { Component, PropTypes } from 'react'

class Radio extends Component {
  constructor(props) {
    super(props)
    this.renderSingle = this.renderSingle.bind(this)
  }

  renderSingle(option, index) {
    const { name, value, onChange } = this.props
    return (
      <label key={`${name}-${index}`} htmlFor={option}>
        <input type="radio" id={option} name={name} value={option} checked={value === option} onChange={onChange} />
        {option}
      </label>
    )
  }

  render() {
    const { options } = this.props
    return (
      <div>
        { options.map(this.renderSingle) }
      </div>
    )
  }
}

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func
}

Radio.defaultProps = {
  value: '',
  onChange() {}
}

export default Radio
