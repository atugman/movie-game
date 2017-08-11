import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchSaveScoreOnClick} from '../actions'

class SaveButton extends Component {
  onClick = () => {
    this.props.dispatch(fetchSaveScoreOnClick(this.props.score, this.props.loggedInUser))
  }

  render() {
    return (
      <button className='save' onClick={this.onClick}>Save</button>
    );
  }
}

const mapStateToProps = state => ({
  savedScore: state.movieData.savedScore,
  loggedInUser: state.movieData.loggedInUser
})

export default connect(mapStateToProps)(SaveButton)
