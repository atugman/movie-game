import React from 'react';
import {connect} from 'react-redux';

import TopNav from './TopNav';
import InfoModal from './InfoModal';

import './Header.css';
import './App.css';
import vhs from './vhs.png';


export function Header(props) {
    let infoModal;
    if (props.infoModal) {
        infoModal = <InfoModal />;
    }

    return (
        <header>
            <TopNav />
            {infoModal}
            <div className="App-header animated slideInRight">
              <img src={vhs} className="App-logo" alt="logo" />
              <h2 className='animated bounce'>The Movie Game!</h2>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    showInfoModal: state.showInfoModal
});

export default connect(mapStateToProps)(Header);
