import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions';

import './ScoresTable.css';

export class ScoresTable extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
    console.log('hi ', this.props.users);
  }


render() {
  const users = this.props.users.map((user, index) => (
  <div key={index}>
    <td>
      {user.username}
    </td>
    <td>
      {user.score}
    </td>
  </div>
  ))



      return (
        <div className="high-scores-column col-lg-3">
          <table className='scores-table'>
            <tbody>
              <tr>
                <th colSpan="2">Leaderboard</th>
              </tr>
              <tr>
                {users}
              </tr>
            </tbody>
          </table>
        </div>
      )
    }
  }

const mapStateToProps = state => ({
  users: state.movieData.users
});

// export default connect(mapStateToProps)(ScoresTable);
export default connect(mapStateToProps)(ScoresTable)
