import React from 'react'

import Link from './Link'

const Header = ({ isGameStarted, handleNewGame }) => {
  return (
    <header className="header">
      <div className="header-container container flex">
        <h1><Link href="/">Golf Scoreboard</Link></h1>
        <nav className="main-nav">
          <ul className="flex list-reset">
            {isGameStarted
              ? <li><a href="#" onClick={handleNewGame}>New Game</a></li>
              : null
            }
            <li><Link href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header