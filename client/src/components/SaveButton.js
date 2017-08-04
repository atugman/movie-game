import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSaveScoreOnClick} from '../actions'

class SaveButton extends Component {
  onClick = () => {
    console.log(this.props);
    this.props.dispatch(fetchSaveScoreOnClick(this.props.score))
  }

    render() {
        return (
          <button className='save' onClick={this.onClick}>Save</button>
        );
    }
}

export default connect()(SaveButton)
