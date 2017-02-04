import React, { Component } from 'react'

/*
  Let's change App to a full class Component instead of state-less functional Component
  (to be able to store some values in state)
 */
class App extends Component {
  constructor(props) {
    super(props)
    // Let's store the value of `name` in component's state
    this.state = {
      name: '',
      email: '',
      checkbox: '',
      radio: 'option1',
      date: ''
    }
    // Need to bind `this` to `handleInputChange` in order to be able to access `this` inside it
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(inputName) {
    return (event) => {
      // Get `value` from `onChange` event (it is triggered on input when user types in the input)
      const { value } = event.target
      // Save this value to our state
      this.setState({
        [inputName]: value
      })
    }
  }

  render() {
    const alertMsg = this.state.name ? `Hi ${this.state.name}!` : 'Hi! What\'s your name?'
    return (
      <div>
        <h1>Hello React Forms - part 3</h1>
        <p>
          {
            'Ok, you probably came here for more advanced example. Let\'s add some inputs to our form...'
          }
        </p>
        <form onSubmit={() => alert(alertMsg)}>
          <div>
            <label htmlFor="name">Your name:</label>
            <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange('name')} />
          </div>
          <div>
            <label htmlFor="email">Your email:</label>
            <input type="email" id="email" value={this.state.email} onChange={this.handleInputChange('email')} />
          </div>
          <div>
            <label htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                value={this.state.checkbox}
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
                checked={this.state.radio === 'option1'}
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
                checked={this.state.radio === 'option2'}
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
                checked={this.state.radio === 'option3'}
                onChange={this.handleInputChange('radio')}
              />
              Option 3
            </label>
          </div>
          <div>
            <label htmlFor="date">Date example:</label>
            <input type="date" id="date" value={this.state.date} onChange={this.handleInputChange('date')} />
          </div>
          <button type="submit">Say hi!</button>
        </form>
      </div>
    )
  }
}

export default App
