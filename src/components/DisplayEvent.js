import React, { Component } from 'react';
import '..styles/DisplayEvent.css'

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

    return (
      <div>
        <div className="event-card">
        <section
          >
          <h4> Event </h4>
            <p> {event.title} </p>
            <p> {event.date} </p>
            <button
              className='savefavorite-btn'
              onClick={() => {this.toggleFavorite()}}>
              Favorite
            </button>
          <h4> Location </h4>
            <p> {event.location} </p>
            <p> {event.city}, {event.state}</p>
            <button
              onClick={this.toggleHideDisplay.bind(this)}
            >
            See More Info
            </button>
          </section>

          <section
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
      </section>
      </div>
      </div>
    );
  }
}

export default DisplayEvent;
