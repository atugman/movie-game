import React from 'react'
import './CurrentScore.css'

const CurrentScore = (props) => (
  <div className="score">
    Current Game Score: {props.currentScore}
  </div>
)

export default CurrentScore
