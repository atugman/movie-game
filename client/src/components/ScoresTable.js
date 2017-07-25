import React from 'react';
import {connect} from 'react-redux';

import {fetchScores} from '../actions';

import './ScoresTable.css';

export class ScoresTable extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchScores());
  }

  render() {
      return (
        <div className="high-scores-column col-lg-3">
          <strong>
            <table className='scores-table'>
              <th colspan="2">Leaderboard
              <li>{this.props.username}</li>
              </th>

            </table>
          </strong>
        </div>
      )
    }
  }

const mapStateToProps = state => ({
  username: state.movieData.username,
  score: state.movieData.score
});

// export default connect(mapStateToProps)(ScoresTable);
export default connect(mapStateToProps)(ScoresTable)
