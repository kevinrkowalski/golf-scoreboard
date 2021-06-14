import React from 'react'

const Header = ({ handleNewGame }) => {
  return (
    <header className="header">
      <div className="header-container container flex">
        <h1>Golf Scoreboard</h1>
        <nav className="main-nav">
          <ul className="flex list-reset">
            <li><a href="#" onClick={handleNewGame}>New Game</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header