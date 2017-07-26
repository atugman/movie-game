import React from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions';

import './ScoresTable.css';

export class ScoresTable extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchUsers());
    console.log(this.props.users);
  }


render() {
  const characters = this.props.users.map((character, index) => (
    <li key={index}>
        <strong>{character.name}</strong> ({character.actor}) - {character.description}
      </li>
  ))


      return (
        <div className="high-scores-column col-lg-3">
          <strong>
            <table className='scores-table'>
              <tbody>
                <tr>
                  <th colSpan="2">Leaderboard
                    <span>{this.props.username}</span>
                  </th>
                </tr>
              </tbody>
            </table>
          </strong>
        </div>
      )
    }
  }

const mapStateToProps = state => ({
  username: state.movieData.username,
  score: state.movieData.score,
  users: state.movieData.users
});

// export default connect(mapStateToProps)(ScoresTable);
export default connect(mapStateToProps)(ScoresTable)
