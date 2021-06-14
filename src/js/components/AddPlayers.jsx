import React, { useState } from 'react'

import Player from './Player'

const AddPlayers = ({ players, handlePlayerAdd, handlePlayerRemove, handleStartGame }) => {
  const [player, setPlayer] = useState('')
  const playerInput = React.createRef();

  const handlePlayerInput = (e) => setPlayer(e.target.value)

  const addPlayerClick = () => {
    handlePlayerAdd(player)
    setPlayer('')
    playerInput.current.focus()
  }

  return (
    <div className="container">
      <div className="add-players">
        <h2>Add Players</h2>
        <div className="add-player flex flex-align-center">
          <label htmlFor="add-player" className="sr-only">Enter the player's name</label>
          <input id="add-player" ref={playerInput} type="text" placeholder="Name" value={player} onChange={handlePlayerInput} />
          <button className="player-btn add-player-btn" onClick={addPlayerClick}>+<span className="sr-only"> Add Player</span></button>
        </div>
        <ul className="list-reset">
          {players.map(player => <Player key={player.name} player={player} handlePlayerRemove={handlePlayerRemove} />)}
        </ul>
        {players.length > 0 && <button className="start-game" onClick={handleStartGame}>Start Game</button>}
      </div>
    </div>
  )
}

export default AddPlayers