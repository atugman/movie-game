import React from 'react';
import {connect} from 'react-redux';

import {fetchLoggedInUserProfile} from '../actions';

import './SavedScoreBox.css'

export class LoggedInAs extends React.Component {

render() {
  return (
    <div className="saved-score-box">
      <table>
        <tbody>
          <tr>
            <th>
      Logged in as:<br></br>
        {this.props.loggedInUser}
      </th>
    </tr>
  </tbody>
  </table>
    </div>
  )
}
}

const mapStateToProps = state => ({
  loggedInUser: state.movieData.loggedInUser,
  message: state.movieData.message
});

// export default connect(mapStateToProps)(LoggedInAs);
export default connect(mapStateToProps)(LoggedInAs)
