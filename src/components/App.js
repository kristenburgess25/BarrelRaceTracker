import React, { Component, PropTypes } from 'react'
import './App.css'
import BarrelRace from './BarrelRace'

// redux/firebase
import { connect } from 'react-redux'
import { firebaseConnect, helpers } from 'react-redux-firebase'
const { isLoaded, isEmpty, pathToJS, dataToJS } = helpers

class App extends Component {
  static propTypes = {
    barrelraces: PropTypes.object,
    firebase: PropTypes.shape({
      push: PropTypes.func.isRequired
    })
  }

  handleAdd = () => {
    const { firebase } = this.props
    const { newRace } = this.refs
    firebase.push('/barrelraces', { title: newRace.value })
    newRace.value = ''
  }

  render () {
    const { barrelraces } = this.props

    console.log('barrelraces:', barrelraces)

    const barrelracesList = (!isLoaded(barrelraces))
                        ? 'Loading'
                        : (isEmpty(barrelraces))
                          ? 'No races to show'
                          : Object.keys(barrelraces).map((key) => (
                            <BarrelRace key={key} id={key} barrelrace={barrelraces[key]} />
                          ))
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>BarrelBash</h2>
        </div>
        <div className='App-barrelraces'>
          <h4>Todos List</h4>
          {barrelracesList}
          <h4>New Race</h4>
          <input type='text' ref='newRace' />
          <button onClick={this.handleAdd}>
            Add
          </button>
        </div>
      </div>
    )
  }
}
const fbWrappedComponent = firebaseConnect([
  // '/barrelraces'
  // { type: 'once', path: '/barrelraces' } // for loading once instead of binding
  // '/barrelraces#populate=owner:displayNames' // for populating owner parameter from id into string loaded from /displayNames root
  // '/barrelraces#populate=collaborators:users' // for populating owner parameter from id to user object loaded from /users root
  { path: 'barrelraces', populates: [{ child: 'collaborators', root: 'users' }] } // object notation
  // '/barrelraces#populate=owner:users:displayName' // for populating owner parameter from id within to displayName string from user object within users root
])(App)

export default connect(
  ({ firebase }) => ({
    barrelraces: dataToJS(firebase, 'barrelraces'),
    profile: pathToJS(firebase, 'profile'),
    auth: pathToJS(firebase, 'auth')
  })
)(fbWrappedComponent)
