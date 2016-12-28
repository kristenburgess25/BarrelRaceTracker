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

  pushEvent(e) {
    e.preventDefault()

    let newContact = {
      title: this.state.title,
      date:  this.state.date,
      location:   this.state.location,
      city:   this.state.city,
      state:     this.state.state,
      sanction:     this.state.sanction,
      addedmoney:     this.state.addedmoney,
      time: this.state.time,
      entryfree: this.state.entryfree,
      payout:  this.state.payout,
      contactName:   this.state.contactName,
      contactNumber:    this.state.contactNumber,
      description: this.state.description,
    }
    return(this.props.createEvent(
      newContact
    ),
    this.setInitialState()
    )
  }

  setInitialState() {
    this.setState ({
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
            className='input-form-field'
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
              className='input-form-field date'
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
              className='input-form-field location'
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
              className='input-form-field city'
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
              className='input-form-field state'
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
              className='input-form-field sanction'
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
              className='input-form-field addedmoney'
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
              className='input-form-field time'
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
              className='input-form-field entryfee'
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
              className='input-form-field payout'
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
              className='input-form-field contactName'
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
            className='input-form-field contactNumber'
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
            onClick={(e) => this.pushContact(e)}
            >Save Event
          </button>
        </form>
      </section>
      )
    }
  }

  export default NewEvent;
