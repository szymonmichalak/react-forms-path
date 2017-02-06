import React, { Component, PropTypes } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'

class Form extends Component {
  constructor(props) {
    super(props)
    // Need to bind `this` to `handleInputChange` in order to be able to access `this` inside it
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(inputName) {
    return (event) => {
      // Get `value` from `onChange` event (it is triggered on input when user types in the input)
      const { value } = event.target
      // Now, instead of saving to component's state, update value in `Form` reducer, by using `updateValue` action:
      this.props.actions.updateValue(inputName, value)
    }
  }

  render() {
    const { form } = this.props
    return (
      <div>
        <h1>Hello React Forms - part 5</h1>
        <p>
          {
            'It\'s time to split this form into smaller components!'
          }
        </p>
        <form>
          <Input
            name="name"
            label="Your name:"
            value={form.name}
            onChange={this.handleInputChange('name')}
          />
          <Input
            name="email"
            type="email"
            label="Your email:"
            value={form.email}
            onChange={this.handleInputChange('email')}
          />
          <Checkbox
            name="checkbox"
            label="Checkbox example"
            value={form.checkbox}
            onChange={this.handleInputChange('checkbox')}
          />
          <Radio
            name="radio"
            value={form.radio}
            options={['option1', 'option2', 'option3']}
            onChange={this.handleInputChange('radio')}
          />
          <Input
            type="date"
            name="date"
            label="Date example:"
            value={form.date}
            onChange={this.handleInputChange('date')}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

Form.propTypes = {
  form: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    checkbox: PropTypes.string,
    radio: PropTypes.string,
    date: PropTypes.string
  }).isRequired,
  actions: PropTypes.shape({
    updateValue: PropTypes.function
  }).isRequired
}

export default Form
