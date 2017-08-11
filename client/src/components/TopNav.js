import React from 'react';
import {connect} from 'react-redux';

import {fetchNewGame, toggleInfoModal, fetchLogout} from '../actions';

import './TopNav.css';

export class TopNav extends React.Component {
    newGame(event) {
        this.props.dispatch(fetchNewGame());
    }

    toggleInfoModal(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    logout(event) {
      console.log('fetch logout');
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
                      <a className="logout" href="#" onClick={e => this.logout(e)}>
                        Logout
                      </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
