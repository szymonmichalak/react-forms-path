import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as FormActions from '../actions/FormActions'

/*
  Let's change App to a full class Component instead of state-less functional Component
  (to be able to store some values in state)
 */
class App extends Component {
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
    const alertMsg = form.name ? `Hi ${form.name}!` : 'Hi! What\'s your name?'
    return (
      <div>
        <h1>Hello React Forms - part 4</h1>
        <p>
          {
            'Now let\'s connect our form to Redux and store all the form values in Reducer.'
          }
        </p>
        <form onSubmit={() => alert(alertMsg)}>
          <div>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" value={form.name} onChange={this.handleInputChange('name')} />
          </div>
          <div>
            <label htmlFor="email">Your email:</label>
            <input type="email" id="email" value={form.email} onChange={this.handleInputChange('email')} />
          </div>
          <div>
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                value={form.checkbox}
                onChange={this.handleInputChange('checkbox')}
              />
              Checkbox example
            </label>
          </div>
          <div>
            <label htmlFor="radio1">
              <input
                type="radio"
                id="radio1"
                name="radio"
                value="option1"
                checked={form.radio === 'option1'}
                onChange={this.handleInputChange('radio')}
              />
              Option 1
            </label><br />
            <label htmlFor="radio2">
              <input
                type="radio"
                id="radio2"
                name="radio"
                value="option2"
                checked={form.radio === 'option2'}
                onChange={this.handleInputChange('radio')}
              />
              Option 2
            </label><br />
            <label htmlFor="radio3">
              <input
                type="radio"
                id="radio3"
                name="radio"
                value="option3"
                checked={form.radio === 'option3'}
                onChange={this.handleInputChange('radio')}
              />
              Option 3
            </label>
          </div>
          <div>
            <label htmlFor="date">Date example:</label>
            <input type="date" id="date" value={form.date} onChange={this.handleInputChange('date')} />
          </div>
          <button type="submit">Say hi!</button>
        </form>
      </div>
    )
  }
}

App.propTypes = {
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

// Now our form values will be stored in `Form` reducer and will be passed to this component in this.props.form
function mapStateToProps(state) {
  return {
    form: state.form
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
