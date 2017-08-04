import React from 'react'
import './SavedScoreBox.css'
import {connect} from 'react-redux'

const SavedScoreBox = (props) => (
  <div className="saved-score-box">
    <table>
      <tbody>
        <tr>
          <th>
            Saved Score: {props.savedScore}
          </th>
        </tr>
      </tbody>
    </table>
  </div>
)

const mapStateToProps = state => ({
  savedScore: state.movieData.savedScore
})

export default connect(mapStateToProps)(SavedScoreBox)
