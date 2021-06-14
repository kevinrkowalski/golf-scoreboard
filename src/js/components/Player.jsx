import React, { useState } from 'react'

const Player = ({ player, handlePlayerRemove }) => {

  const removePlayerClick = () => {
    handlePlayerRemove(player.name)
  }

  return (
    <li className="player flex flex-align-center flex-between">
      <p>{player.name}</p>
      <button className="player-btn remove-player-btn" onClick={removePlayerClick}>-</button>
    </li>
  )
}

export default Player