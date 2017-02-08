import React, { Component, PropTypes } from 'react'
import Joi from 'joi'
import validation from 'react-validation-mixin'
import strategy from 'joi-validation-strategy'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'

class Form extends Component {
  constructor(props) {
    super(props)
    // Define your validation rules in the form of object
    this.validatorTypes = {
      name: Joi.string().min(3).max(30).required().label('Name'),
      email: Joi.string().email().required().label('Email')
    }
    // Need to bind `this` to `handleInputChange` in order to be able to access `this` inside it
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getValidatorData = this.getValidatorData.bind(this)
  }

  getValidatorData() {
    // return data we want to validate
    return this.props.form
  }

  handleInputChange(inputName) {
    return (event) => {
      // Get `value` from `onChange` event (it is triggered on input when user types in the input)
      const { value } = event.target
      // Now, instead of saving to component's state, update value in `Form` reducer, by using `updateValue` action:
      this.props.actions.updateValue(inputName, value)
    }
  }

  handleSubmit(event) {
    event.preventDefault() // stop submitting the form
    const onValidate = error => {
      if (error) {
        // Validation Errors displayed to the user
      } else {
        console.log('Form is valid, submit!')
      }
    }
    // Run `validate` method from `react-validation-mixin`
    this.props.validate(onValidate)
  }

  render() {
    const { form, getValidationMessages, handleValidation } = this.props
    return (
      <div>
        <h1>Hello React Forms - part 7</h1>
        <p>
          {
            `Instead of reinventing the wheel and creating our own validation checks, let’s use some ready
            validation methods`
          }
        </p>
        <form onSubmit={this.handleSubmit} noValidate>
          <Input
            name="name"
            label="Your name:"
            value={form.name}
            errors={getValidationMessages('name')}
            onChange={this.handleInputChange('name')}
            onBlur={handleValidation('name')}
          />
          <Input
            name="email"
            type="email"
            label="Your email:"
            value={form.email}
            errors={getValidationMessages('email')}
            onChange={this.handleInputChange('email')}
            onBlur={handleValidation('email')}
          />
          <Checkbox
            name="checkbox"
            label="Checkbox example"
            value={form.checkbox}
            errors={getValidationMessages('checkbox')}
            onChange={this.handleInputChange('checkbox')}
            onBlur={handleValidation('checkbox')}
          />
          <Radio
            name="radio"
            value={form.radio}
            options={['option1', 'option2', 'option3']}
            errors={getValidationMessages('radio')}
            onChange={this.handleInputChange('radio')}
            onBlur={handleValidation('radio')}
          />
          <Input
            type="date"
            name="date"
            label="Date example:"
            value={form.date}
            errors={getValidationMessages('date')}
            onChange={this.handleInputChange('date')}
            onBlur={handleValidation('date')}
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
  }).isRequired,
  // Received from `react-validation-mixin` HoC
  errors: PropTypes.object,
  validate: PropTypes.func,
  isValid: PropTypes.func,
  getValidationMessages: PropTypes.func,
  clearValidations: PropTypes.func
}

// Use `validation` Higher-Order Component to validate this component using `Joi` strategy
export default validation(strategy)(Form)
