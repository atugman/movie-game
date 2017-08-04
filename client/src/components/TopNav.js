import React from 'react';
import {connect} from 'react-redux';

import {newGame, toggleInfoModal, fetchLogout} from '../actions';

import './TopNav.css';

export class TopNav extends React.Component {
    newGame(event) {
        event.preventDefault();
        this.props.dispatch(newGame());
    }

    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    logout(event) {
      console.log('hello old friend');
      this.props.dispatch(fetchLogout());
    }

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.toggleInfoModal(e)}>
                            Instructions
                        </a>
                    </li>
                    <li className="new-game">
                        <a className="new" href="#" onClick={e => this.newGame(e)}>
                            New Game
                        </a>
                    </li>
                    <li>
                      <a className="logout" onClick={e => this.logout(e)}>
                        Logout
                      </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
