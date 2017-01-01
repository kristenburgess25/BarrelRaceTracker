import React, { Component } from 'react'
import firebase, { reference } from './firebase'


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
      let keys = (Object.keys(this.state))
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

    return (
      <section className='new-event'>
        <form className='new-event-form'
          aria-label='new event form'>

          <div className='title'>
            <input
            className='input-form-field title-input'
              value={this.state.title}
              aria-label="event title"
              placeholder='event title ...'
              onChange={(e) => this.setState({
                  title: e.target.value
                })
              }
            />
          </div>

          <div className='date'>
            <input
              className='input-form-field date-input'
              value={this.state.date}
              aria-label="event date"
              placeholder='date ...'
              onChange={(e) => this.setState({
                  date: e.target.value
                })
              }
            />
          </div>

          <div className='location'>
            <input
              className='input-form-field location-input'
              value={this.state.location}
              aria-label="event location"
              placeholder='location/venue ...'
              onChange={(e) => this.setState({
                  location: e.target.value
                })
              }
            />
          </div>

          <div className='city'>
            <input
              className='input-form-field city-input'
              value={this.state.city}
              aria-label="event city"
              placeholder='city ...'
              onChange={(e) => this.setState({
                  city: e.target.value
                })
              }
            />
          </div>

          <div className='state'>
            <input
              className='input-form-field state-input'
              value={this.state.state}
              aria-label="event state"
              placeholder='state ...'
              onChange={(e) => this.setState({
                  state: e.target.value
                })
              }
            />
          </div>

          <div className='sanction'>
            <input
              className='input-form-field sanction-input'
              value={this.state.sanction}
              aria-label="sanctioning organizations"
              placeholder='sanctioning organizations ...'
              onChange={(e) => this.setState({
                  sanction: e.target.value
                })
              }
            />
          </div>

          <div className='addedmoney'>
            <input
              className='input-form-field addedmoney-input'
              value={this.state.addedmoney}
              aria-label="added money for event"
              placeholder='added money ...'
              onChange={(e) => this.setState({
                  addedmoney: e.target.value
                })
              }
            />
          </div>

          <div className='time'>
            <input
              className='input-form-field time-input'
              value={this.state.time}
              aria-label='time of event'
              placeholder='event time ...'
              onChange={(e) => this.setState({
                  time: e.target.value
                })
              }
            />
          </div>

          <div className='entryfee'>
            <input
              className='input-form-field entryfee-input'
              value={this.state.entryfee}
              aria-label='event entry fee'
              placeholder='entry fee per horse ...'
              onChange={(e) => this.setState({
                  entryfee: e.target.value
                })
              }
            />
          </div>

          <div className='payout'>
            <input
              className='input-form-field payout-input'
              value={this.state.payout}
              aria-label='payout percentage'
              placeholder='payout percentage ...'
              onChange={(e) => this.setState({
                  payout: e.target.value
                })
              }
            />
          </div>

          <div className='contactName'>
            <input
              className='input-form-field contactName-input'
              value={this.state.contactName}
              aria-label='event contact name'
              placeholder='main contact for event ...'
              onChange={(e) => this.setState({
                  contactName: e.target.value
                })
              }
            />
          </div>

          <div className='contactNumber'>
            <input
            className='input-form-field contactNumber-input'
            value={this.state.contactNumber}
            aria-label='event contact number'
            placeholder='main contact number ...'
            onChange={(e) => this.setState({
                contactNumber: e.target.value
              })
            }
          />
          </div>

          <div className='description'>
          <textarea
            className='description-text-area'
            value={this.state.description}
            aria-label='further event description'
            placeholder='further event description ...'
            onChange={(e) => this.setState({
                description: e.target.value
              })
            }>
          </textarea>
        </div>

          <button
            disabled={this.toggleSaveButton()}
            className='save-event-button'
            onClick={(e) => this.addNewEvent(e)}
            >Save Event
          </button>
        </form>
      </section>
      )
    }
  }

  export default NewEvent;
