import React, { Component } from 'react';
import { Link } from 'react-router'

class StartButton extends Component {
    render() {
        return (
          <div>
            <Link to="login">
              <td className='field'>Start!</td>
            </Link>
          </div>
        );
    }
}

export default StartButton
