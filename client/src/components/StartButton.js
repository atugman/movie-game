import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class StartButton extends Component {
    render() {
        return (
          <div>
            <Link to="login">
              <h1>Start Game!</h1>
            </Link>
          </div>
        );
    }
}

export default StartButton
