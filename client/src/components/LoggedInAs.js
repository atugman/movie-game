import React from 'react';
import {connect} from 'react-redux';

import {fetchLoggedInUserProfile} from '../actions';

import './SavedScoreBox.css'

export class LoggedInAs extends React.Component {
  // componentDidMount() {
  //   this.props.dispatch(fetchLoggedInUserProfile());
  //   console.log('hi ', this.props);
  // }

  // determineMessage() {
  //   if (typeof this.props.loggedInUser !== undefined) {
  //     return this.props.loggedInUser
  //   } else {
  //     // <Message />
  //     return this.props.message
  //   }
  // }

render() {
  return (
    <div className="saved-score-box">
      <table>
        <tbody>
          <tr>
            <th>
      Logged In As: 
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
