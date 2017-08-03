import React, { Component } from 'react';
import './load-save-buttons.css'
import { connect } from 'react-redux';
import {fetchLoadScore} from '../actions'

class LoadButton extends Component {
//onClick
onClick = () => {
  this.props.dispatch(fetchLoadScore())
}
  //take this.props.score as argument in dispatch
    render() {
        return (
          <button onClick={this.onClick} className='load'>Load</button>
        );
    }
}

export default connect()(LoadButton)
