import React from 'react'

function App() {
  return (
    <div>
      <h1>Hello React Forms!</h1>
      <p>If you see this message in the browser, you installed everything correctly!</p>
      <form onSubmit={() => alert('Hi!')}>
        <label htmlFor="name">Your name:</label>
        <input type="text" id="name" />
        <button type="submit">Say hi!</button>
      </form>
    </div>
  )
}

export default App
