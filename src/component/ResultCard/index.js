import React from 'react'
import './index.css'

const ResultCard = ({ propsList, resetIt }) => {
  const { score } = propsList

  const resetGame = () => {
    resetIt()
  }

  return (
    <div className="resultcard">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy"
      />
      <p className="resultp1">YOUR SCORE</p>
      <p className="resultp2">{score}</p>
      <button className="resultbtn" onClick={resetGame}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ResultCard
