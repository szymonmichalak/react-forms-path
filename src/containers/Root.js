import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'

function Root(props) {
  const { store } = props
  // Pass `store` further down
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
}

export default Root
