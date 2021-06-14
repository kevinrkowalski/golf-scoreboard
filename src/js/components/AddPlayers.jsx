import React, { useState } from 'react'

import Player from './Player'

const AddPlayers = ({ players, handlePlayerAdd, handlePlayerRemove, handleStartGame }) => {
  const [player, setPlayer] = useState('')

  const handlePlayerInput = (e) => setPlayer(e.target.value)

  const addPlayerClick = () => {
    handlePlayerAdd(player)
    setPlayer('')
  }

  return (
    <div className="container">
      <div className="add-players">
        <h2>Add Players</h2>
        <div className="add-player flex">
          <input type="text" placeholder="Name" value={player} onChange={handlePlayerInput} />
          <button className="player-btn add-player-btn" onClick={addPlayerClick}>+</button>
        </div>
        {players.map(player => <Player key={player.name} player={player} handlePlayerRemove={handlePlayerRemove} />)}
        {players.length > 0 && <button className="start-game" onClick={handleStartGame}>Start Game</button>}
      </div>
    </div>
  )
}

export default AddPlayers