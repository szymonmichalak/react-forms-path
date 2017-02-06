import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const logger = createLogger()
const storeWithMiddleware = compose(applyMiddleware(logger, thunk))(createStore)

function configureStore(initialState) {
  const store = storeWithMiddleware(rootReducer, initialState)

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(rootReducer)
    )
  }

  return store
}

export default configureStore
