import React from 'react'
import './CurrentScore.css'

const CurrentScore = (props) => (
  <div className="current-game-score">
    <table>
      <tbody>
        <tr>
          <th>
    Current Game Score: {props.currentScore}
  </th>
</tr>
</tbody>
</table>
  </div>
)

export default CurrentScore
