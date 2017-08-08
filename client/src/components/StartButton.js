import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './StartButton.css'

class StartButton extends Component {
    render() {
        return (
          <div className='start-button-box'>
            <Link to="/login" className='start-button-link'>
              <span>Start!</span>
            </Link>
          </div>
        );
    }
}

export default StartButton
