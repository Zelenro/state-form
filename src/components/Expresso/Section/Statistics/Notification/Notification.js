import React, { Component } from 'react';

class Notification extends Component {
  render() {
    return <h6>{this.props.message}</h6>;
  }
}

export default Notification;
