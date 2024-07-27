import React from 'react'
import './index.css'

const Navbar = ({ propsList }) => {
  const { score, timer } = propsList

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        className="logo"
        alt="website logo"
      />
      <div className="navbar-inner">
        <div className="navbar-inner-1">
          <p className="navbar-para1">Score:</p>
          <p className="navbar-para2">{score}</p>
        </div>
        <div className="navbar-inner-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer"
          />
          <p className="navbar-para2">{timer} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar