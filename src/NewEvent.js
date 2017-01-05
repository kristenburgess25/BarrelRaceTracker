import React, { Component } from 'react'
import { reference } from './firebase'


class NewEvent extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      date: '',
      location: '',
      city: '',
      state: '',
      sanction: '',
      addedmoney: '',
      time: '',
      entryfee: '',
      payout: '',
      contactName: '',
      contactNumber: '',
      description: '',
      favorite: false,
    }
  }

  addNewEvent (e) {
    e.preventDefault()
    console.log(reference)
    let newEvent = this.state
    reference.push({
      newEvent
    })
    this.setInitialState();
  }


  setInitialState() {
      let keys = Object.keys(this.state)
      keys.forEach((key) => {
      this.setState({[key]: ''})
      })
  }


  toggleSaveButton () {
    if(this.state.title.length > 1){
      return false
    }else{
      return true
    }
  }

  render() {

    let inputFields = Object.keys(this.state)

const form = inputFields.map(field =>
  <div className='new-input-field'>
    <p>  {field} : </p>
           <input
           className={`${field}-input`}
            value={this.state[field]}
             placeholder='.....'
             onChange={(e) => this.setState({
                [field] : e.target.value
               })
             }
           />
         </div>)

    return (
      <section className='new-event'>
        { form }
      <button
        disabled={this.toggleSaveButton()}
        className='save-event-button'
        onClick={(e) => this.addNewEvent(e)}
     >Save Event
      </button>
      </section>
      )
    }
  }

  export default NewEvent;
