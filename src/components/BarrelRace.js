import React, { PropTypes, Component } from 'react'
import { firebase } from 'react-redux-firebase'

class BarrelRace extends Component {
  static propTypes = {
    barrelrace: PropTypes.object,
    id: PropTypes.string
  }

  render(){
    const {firebase, barrelrace, id} = this.props;

    const deleteEvent = (event) => {
       firebase.remove(`/barrelraces/${id}`)
    }
    return (
      <li className="Race">
        {barrelrace.name}
        <button className="Todo-Button" onClick={deleteEvent}>
          Delete
        </button>
      </li>
    )
  }
}
export default firebase()(BarrelRace)
