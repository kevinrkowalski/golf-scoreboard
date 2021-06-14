import React, { useState } from 'react'
import ReactDom from 'react-dom'

// Components
import Header from './components/Header'
import AddPlayers from './components/AddPlayers'
import Scoreboard from './components/Scoreboard'
import Error from './components/Error'

const App = () => {
  const [players, setPlayers] = useState([])
  const [errors, setErrors] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)

  const handlePlayerAdd = (name) => {
    if (name === '') {
      handleError('You must enter a name.')
      return
    }

    for (const player of players) {
      if (player.name.toLowerCase() === name.toLowerCase()) {
        handleError('There is already another player with that name.')
        return
      }
    }

    const player = {
      'name': name,
      'score': 0
    }
    setPlayers(oldPlayersArray => [...oldPlayersArray, player])
  }

  const handlePlayerRemove = (name) => {
    setPlayers(oldPlayersArray => [...oldPlayersArray].filter(player => player.name !== name))
  }

  const handleError = (error) => {
    setErrors(previousErrorsArray => [...previousErrorsArray, error])
    // wait 3 secs, remove last error messages
    setTimeout(() => {
      setErrors([])
    }, 3000)
  }

  const handleStartGame = () => setIsGameStarted(true)

  const handleScoreChange = (scores) => {
    setPlayers(previousPlayersArray => {
      const newPlayersArray = [...previousPlayersArray]
      newPlayersArray.map(player => {
        player.score = scores[player.name]
      })
      return newPlayersArray
    })
  }

  const handleNewGame = () => {
    setIsGameStarted(false)
    setPlayers([])
  }

  return (
    <>
      <Header handleNewGame={handleNewGame} />
      {errors.length > 0 && <Error errors={errors} />}
      {isGameStarted === false
        ?
        <AddPlayers
          players={players}
          handlePlayerAdd={handlePlayerAdd}
          handlePlayerRemove={handlePlayerRemove}
          handleStartGame={handleStartGame}
        />
        :
        <Scoreboard
          players={players}
          handleScoreChange={handleScoreChange}
        />
      }
    </>
  )
}

ReactDom.render(<App />, document.getElementById('app'))