import React, { Component } from 'react';
import '../styles/DisplayEvent.css'
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

    return (
        <section className="event-card">
        <div
          >
          <h4> {event.title}</h4>
            <p className='date event-month'> {month} </p>
            <br></br>
            <p className='date event-day'> {day} </p>
            <p> {event.location} </p>
            <p> {event.city}, {event.state}</p>
              <button
                className='favorite-btn'
                onClick={() => {this.toggleFavorite()}}>
                ☆
              </button>
            <button className='showmore-btn'
              onClick={this.toggleHideDisplay.bind(this)}
            >
            See More Info
            </button>
          </div>

          <div
            hidden={this.state.hideDisplay}
            className='hiddeninfo'
          >
        <h4> Details </h4>
          <p> Sanction: {event.saction}</p>
          <p> Added $$: {event.addedmoney} </p>
          <p> Time: {event.time} </p>

        <h4> Entries </h4>
          <p>Fee/Horse: ${event.entryfee} </p>
          <p> Payout: {event.payout} </p>

        <h4> Contact Info </h4>
          <p> {event.contactName} </p>
          <p> {event.contactNumber} </p>

          <h4> Description </h4>
          <p> {event.description}</p>
      </div>
    </section>
    );
  }
}

export default DisplayEvent;
