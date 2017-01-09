import React, { Component } from 'react';
// import Location from './Location.js';
import Map from './Map.js'
import '../styles/DisplayEvent.css';
import moment from 'moment';

class DisplayEvent extends Component {
  constructor() {
  super()
  this.state = {
    hideDisplay: true,
  }
}

toggleHideDisplay() {
  this.setState({
    hideDisplay: !this.state.hideDisplay
  })
}

toggleFavorite() {
  const { event }  = this.props;
  this.props.toggleFavorite(event.key, event.favorite)
}


  render() {
    const { event }  = this.props;
    const month = moment(event.date).format('MMM')
    const day = event.date.split('-')[2]
    const time = moment(event.time).format('h:mm a')
    const sanctions = event.sanction

    return (
        <section className="event-card">
        <div className='main-card container'
          onClick={this.toggleHideDisplay.bind(this)}
          >
            <p className='sanctions'> {sanctions}</p>
            <h5>{event.title}</h5>
            <div className='container'>
            <p className='date event-month'> {month} </p>
            <br></br>
            <p className='date event-day'> {day} </p>
            </div>
            <p className='location'> {event.city}, {event.state}</p>
            <br></br>
            <button
              className='mark-favorite container'
              onClick={() => {this.toggleFavorite()}}>
                ♡
              </button>
          </div>

          <section
            hidden={this.state.hideDisplay}
            className='hiddeninfo'
          >

        <h4> Details </h4>
          <div className='labels-container'>
            <p className='labels'>Location: </p>
            <p className='labels'>Added $$: </p>
            <p className='labels'>Time: </p>

          </div>

          <div className='values-container'>
          <p className='values'>  {event.location} </p>
          <p className='values'>  {event.addedmoney} </p>
          <p className='values'>{time} </p>

          </div>


        <h4> Entries </h4>
          <div className='labels-container'>
            <p className='labels'>Fee/Horse: </p>
            <p className='labels'>Payout:</p>
          </div>
          <div className='values-container'>
            <p className='values'>$ {event.entryfee} </p>
            <p className='values'> {event.payout} </p>
          </div>


        <h4> Contact Info </h4>
          <div className='labels-container'>
            <p className='labels'>Name </p>
            <p className='labels'>Number </p>
          </div>
          <div className='values-container'>
            <p className='values'> {event.contactName} </p>
            <p className='values'> {event.contactNumber} </p>
          </div>


          <h4> Description </h4>
          <p> {event.description}</p>

      </section>
    </section>
    );
  }
}

export default DisplayEvent;
