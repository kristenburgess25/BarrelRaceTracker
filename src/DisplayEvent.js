import React, { Component } from 'react';

class DisplayEvent extends Component {
  render() {
    const { event }  = this.props;

    return (
      <div className="Event">
        <div>
          <h3>{event.city}</h3>
        </div>
      </div>
    );
  }
}

export default DisplayEvent;
