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
      name: ''
    }
    // Need to bind `this` to `handleInputChange` in order to be able to access `this` inside it
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    // Get `value` from `onChange` event (it is triggered on input when user types in the input)
    const { value } = event.target
    // Save this value to our state
    this.setState({
      name: value
    })
  }

  render() {
    const alertMsg = this.state.name ? `Hi ${this.state.name}!` : 'Hi! What\'s your name?'
    return (
      <div>
        <h1>Hello React Forms - part 2</h1>
        <p>
          {
            `Now let's try to store the name user types inside the component's state, so we can re-use it!
            Type your name and hit 'Say hi!' button to check the result.`
          }
        </p>
        <form onSubmit={() => alert(alertMsg)}>
          <label htmlFor="name">Your name:</label>
          { /* Bind this.state.name to input's value and trigger our `handleInputChange` method on input change */}
          <input type="text" id="name" value={this.state.name} onChange={this.handleInputChange} />
          <button type="submit">Say hi!</button>
        </form>
      </div>
    )
  }
}

export default App
