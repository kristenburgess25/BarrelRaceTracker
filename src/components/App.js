import React, { Component, PropTypes } from 'react';

class App extends Component {

  render() {
    return (
      <div>
        <h2> BARREL RACING FO LIFE </h2>
        { this.props.children }
      </div>
    );
  }
}

module.exports = App;
