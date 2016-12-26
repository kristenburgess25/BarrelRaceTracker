
import { createStore, compose } from 'redux'
import rootReducer from './reducers/firebasereducer.js'
import { firebase as fbConfig } from './firebase.config.js'
import { reactReduxFirebase } from 'react-redux-firebase'

export default function configureStore (initialState, history) {
  const createStoreWithMiddleware = compose(
    reactReduxFirebase(fbConfig,
      {
        userProfile: 'users',
        enableLogging: false
      }
    ),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)
  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/firebasereducer.js', () => {
      const nextRootReducer = require('./reducers/firebasereducer.js')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
