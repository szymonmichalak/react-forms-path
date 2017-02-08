import React, { Component, PropTypes } from 'react'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import isEmail from '../helpers/isEmail'

class Form extends Component {
  constructor(props) {
    super(props)
    this.requiredFields = ['name', 'email']
    this.state = {
      errors: {}
    }
    // Need to bind `this` to `handleInputChange` in order to be able to access `this` inside it
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateFields = this.validateFields.bind(this)
  }

  handleInputChange(inputName) {
    return (event) => {
      // Get `value` from `onChange` event (it is triggered on input when user types in the input)
      const { value } = event.target
      // Now, instead of saving to component's state, update value in `Form` reducer, by using `updateValue` action:
      this.props.actions.updateValue(inputName, value)
    }
  }

  validateFields(fieldName) {
    const { form } = this.props
    const fields = fieldName ? [fieldName] : Object.keys(form) // get all field names if field argument is not there
    const errors = {}
    let isValid = true

    fields.forEach((field) => {
      // General check for required fields
      if (this.requiredFields.includes(field) && !form[field]) {
        errors[field] = 'Required'
        isValid = false
      // specific validation check
      } else if (field === 'email' && !isEmail(form[field])) {
        errors[field] = 'Please provide valid email address'
        isValid = false
      // reset error in case user corrected the input
      } else {
        errors[field] = null
      }
    })

    this.setState({
      errors: {
        ...this.state.errors,
        ...errors
      }
    })

    return isValid
  }

  handleSubmit(event) {
    event.preventDefault() // stop submitting the form
    const isValid = this.validateFields()
    if (isValid) {
      console.log('Form is valid, submit!')
    } else {
      // Validation Errors displayed to the user
    }
  }

  render() {
    const { form } = this.props
    const { errors } = this.state
    return (
      <div>
        <h1>Hello React Forms - part 6</h1>
        <p>
          {
            `What about validation? I would like to add some required fields,
            validate if email is in correct format, etc.`
          }
        </p>
        <form onSubmit={this.handleSubmit} noValidate>
          <Input
            name="name"
            label="Your name:"
            value={form.name}
            error={errors.name}
            onChange={this.handleInputChange('name')}
            onBlur={() => this.validateFields('name')}
          />
          <Input
            name="email"
            type="email"
            label="Your email:"
            value={form.email}
            error={errors.email}
            onChange={this.handleInputChange('email')}
            onBlur={() => this.validateFields('email')}
          />
          <Checkbox
            name="checkbox"
            label="Checkbox example"
            value={form.checkbox}
            error={errors.checkbox}
            onChange={this.handleInputChange('checkbox')}
            onBlur={() => this.validateFields('checkbox')}
          />
          <Radio
            name="radio"
            value={form.radio}
            options={['option1', 'option2', 'option3']}
            error={errors.radio}
            onChange={this.handleInputChange('radio')}
            onBlur={() => this.validateFields('radio')}
          />
          <Input
            type="date"
            name="date"
            label="Date example:"
            value={form.date}
            error={errors.date}
            onChange={this.handleInputChange('date')}
            onBlur={() => this.validateFields('date')}
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
