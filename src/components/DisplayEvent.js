import React, { Component } from 'react';
// import Location from './Location.js';
// import Map from './Map.js'
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
    const weekday = moment(event.date).format('dddd')
    const day = event.date.split('-')[2]
    const time = moment(event.time).format('h:mm a')
    const sanctions = event.sanction

    return (
        <section className="main-card-container">
          <div className='event-card'
            onClick={this.toggleHideDisplay.bind(this)}
          >
            <div className='date-container horiz-block'>
              <p className='month'>{month}</p>
              <p className='day'>{day}</p>
            </div>
            <div className='horiz-block main-block'>
              <div className='top-block'>
              <span className='sanctions'> {sanctions}</span>
              <span className='location'> {event.city}, {event.state}</span>
              </div>
            <h5

              >{event.title}
            </h5>
            </div>
            <div className={`${event.favorite} mark-favorite-container horiz-block`}
            onClick={() => {this.toggleFavorite()}}>
            </div>
          </div>

          <section
            hidden={this.state.hideDisplay}
            className='hiddeninfo'
          >

        <h4> Details </h4>
          <div className='labels-container'>
            <p className='labels'>Location: </p>
            <p className='labels'>Added $: </p>
            <p className='labels'>Time: </p>
          </div>
          <div className='values-container'>
          <p className='values'>  {event.location?event.location:'N/A'} </p>
          <p className='values'>  $ {event.addedmoney?event.addedmoney:'N/A'} </p>
          <p className='values'>{time?time:'N/A'} </p>
          </div>


        <h4> Entries </h4>
          <div className='labels-container'>
            <p className='labels'>Fee/Horse: </p>
            <p className='labels'>Payout:</p>
          </div>
          <div className='values-container'>
            <p className='values'> $ {event.entryfee?event.entryfee:'N/A'} </p>
            <p className='values'> {event.payout? event.payout: 'N/A'} </p>
          </div>


        <h4> Contact Info </h4>
          <div className='labels-container'>
            <p className='labels'>Name </p>
            <p className='labels'>Number </p>
          </div>
          <div className='values-container'>
            <p className='values'> {event.contactName} </p>
            <p className='values'> {event.contactNumber?event.contactNumber:'N/A'} </p>
          </div>


          <h4> Description </h4>
          <p className='description-text'> {event.description}</p>

      </section>
    </section>
    );
  }
}

export default DisplayEvent;
