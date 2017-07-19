import React from 'react';
import {connect} from 'react-redux';

import {newGame, toggleInfoModal} from '../actions';

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

    render() {
        return (
            <nav>
                <ul className="clearfix">
                    <li>
                        <a className="what" href="#" onClick={e => this.toggleInfoModal(e)}>
                            Instructions
                        </a>
                    </li>
                    <li>
                        <a className="new" href="#" onClick={e => this.newGame(e)}>
                            New Game
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect()(TopNav);
