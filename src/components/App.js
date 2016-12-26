import React, {Component, PropTypes} from 'react'
import { Provider } from 'react-redux'
import {connect} from 'react-redux'
import {firebase, helpers} from 'redux-react-firebase'
import _ from 'lodash'


const {isLoaded, isEmpty, dataToJS} = helpers

@firebase()
class IndividualEvent extends Component {
  render(){
    const {firebase, barrelraces, id} = this.props

    const deleteEvent = (barrelrace) => {
       firebase.remove(`/barrelraces/${id}`)
    }
    return (
      <li>
        {barrelrace.name}
        <button onClick={deleteEvent}>Delete</button>
      </li>)
  }
}


@firebase( [
  '/barrelraces', // if list is too large you can use ['/todos']
])
@connect(
  ({firebase}) => ({
    barrelraces: dataToJS(firebase, '/barrelraces'),
  })
)
class EventList extends Component {

  render() {
    const {firebase, barrelraces} = this.props;

    const handleAdd = () => {
      const {newEvent} = this.refs
      firebase.push('/barrelraces', {text:newEvent.value})
      newEvent.value = ''
    }

    const eventList = (!isLoaded(barrelraces)) ?
                          'Loading'
                        : (isEmpty(barrelraces)) ?
                               'list is empty'
                             : _.map(barrelraces, (barrelrace, id) => (<IndividualEvent key={id} id={id} barrelrace={barrelrace}/>) )

    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {EventList}
        </ul>
        <input type="text" ref="newEvent" />
        <button onClick={handleAdd}>Add</button>
      </div>
    )
  }

}


export default class App extends Component {

  render () {
    return (
        <Provider store={this.props.store}>
          <EventList/>
        </Provider>
    );
  }
}
