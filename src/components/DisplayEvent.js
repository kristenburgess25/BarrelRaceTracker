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

          <section
            hidden={this.state.hideDisplay}
            className='hiddeninfo'
          >

        <h4> Details </h4>
          <div className='labels-container'>
            <p className='details labels'>Location: </p>
            <p className='details labels'>Added $$: </p>
            <p className='details labels'>Time: </p>

          </div>

          <div className='values-container'>
          <p className='details values'>  {event.location} </p>
          <p className='details values'>  {event.addedmoney} </p>
          <p className='details values'>{event.time} </p>

          </div>


        <h4> Entries </h4>
          <div className='labels-container'>
            <p className='labels'>Fee/Horse: $</p>
            <p className='labels'>Payout:</p>
          </div>
          <div className='values-container'>
            <p className='values'>{event.entryfee} </p>
            <p className='values'> {event.payout} </p>
          </div>


        <h4> Contact Info </h4>
          <p> {event.contactName} </p>
          <p> {event.contactNumber} </p>

          <h4> Description </h4>
          <p> {event.description}</p>
      </section>
    </section>
    );
  }
}

export default DisplayEvent;
