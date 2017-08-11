import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchLoadScore} from '../actions'

class LoadButton extends Component {
  onClick = () => {
    this.props.dispatch(fetchLoadScore())
  }

  render() {
      return (
        <button onClick={this.onClick} className='load'>Load</button>
      );
    }
  }

export default connect()(LoadButton)
