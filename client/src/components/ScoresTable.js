import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions';

import './ScoresTable.css';

export class ScoresTable extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
  }


render() {
  const users = this.props.users.map((user, index) => (
  <div key={index}>
    <tr className="tr-username-score">
      <td className="td-score">
        {user.score}
      </td>
      <td className="td-username">
        {user.username}
      </td>
    </tr>
  </div>
  ))



  return (
  <div className="high-scores-column">
    <table className='scores-table'>
      <tbody>
        <tr>
          <th colSpan="2">Leaderboard</th>
        </tr>
          {users}
      </tbody>
    </table>
  </div>
      )
    }
  }

const mapStateToProps = state => ({
  users: state.movieData.users
});

export default connect(mapStateToProps)(ScoresTable)
