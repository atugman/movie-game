import React from 'react';
import {connect} from 'react-redux';

import {toggleInfoModal} from '../actions';

import './InfoModal.css';

export class InfoModal extends React.Component {
    hide(event) {
        event.preventDefault();
        this.props.dispatch(toggleInfoModal());
    }

    render() {
        return (
            <div className="overlay" id="modal">
                <div className="content">
                    <h3>What do I do?</h3>
                    <div>
                        <p>This is the Movie Game. The game goes like this: </p>
                        <ul>
                            <li>1. Start with a letter, let's say 'A.'</li>
                            <li>2. Think of a movie that starts with the letter 'A,' type it into the box and click 'Submit'.</li>
                            <li>3. If you thought of a movie, your score will increase by 1!</li>
                            <li>4. Now think of another movie - <strong>BUT!</strong> It has to start with the specified letter, which is either the first letter of the last word of your last movie, or the last letter of the only word.</li>
                        </ul>
                        <p>So, Are you ready?</p>
                        <a className="close" href="#" onClick={e => this.hide(e)}>Got It!</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(InfoModal);
