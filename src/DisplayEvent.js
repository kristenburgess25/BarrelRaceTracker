import React, { Component } from 'react';
import './DisplayEvent.css'

class DisplayEvent extends Component {
  render() {
    const { event }  = this.props;



    return (
      <div>
        <div className="Event">
          <h4> Event </h4>
          <p> {event.title} </p>
          <p> {event.date} </p>

          <h4> Location </h4>
          <p> {event.location} </p>
          <p> {event.city}, {event.state}</p>

        <h4> Details </h4>
          <p> Sanction: {event.saction}</p>
          <p> Added $$: {event.addedmoney} </p>
          <p> Time: {event.time} </p>

          <h4> Entries </h4>
          <p>Fee/Horse: {event.entryfee} </p>
          <p> Payout: {event.payout} </p>

          <h4> Contact Info </h4>
          <p> {event.contactName} </p>
          <p> {event.contactNumber} </p>

          <h4> Description </h4>
          <p> {event.description}</p>

        </div>
      </div>
    );
  }
}

export default DisplayEvent;
