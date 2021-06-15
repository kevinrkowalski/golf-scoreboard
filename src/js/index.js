import React, { useState } from 'react'
import ReactDom from 'react-dom'

// Components
import Header from './components/Header'
import AddPlayers from './components/AddPlayers'
import Scoreboard from './components/Scoreboard'
import Error from './components/Error'
import Modal from './components/Modal'

const App = () => {
  const [players, setPlayers] = useState([])
  const [errors, setErrors] = useState([])
  const [isGameStarted, setIsGameStarted] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

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
      setErrors(previousErrorsArray => {
        const newErrorsArray = [...previousErrorsArray]
        newErrorsArray.shift()
        return newErrorsArray
      })
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
    if (players.length > 0) {
      setModalOpen(true)
    }
  }

  const handleKeepPlayerClick = (e) => {
    const keepPlayers = e.target.dataset.keepPlayers
    if (keepPlayers === 'true') {
      setPlayers(oldPlayersArray => {
        let newPlayersArray = [...oldPlayersArray]
        newPlayersArray.forEach(player => player.score = 0)
        return newPlayersArray
      })
    } else {
      setPlayers([])
    }
    setModalOpen(false)
  }

  return (
    <>
      <Header handleNewGame={handleNewGame} />
      <Error errors={errors} />
      <Modal showModal={modalOpen}>
        <p>Would you like to keep the same players?</p>
        <button data-keep-players="true" onClick={handleKeepPlayerClick}>Yes</button>
        <button data-keep-players="false" onClick={handleKeepPlayerClick}>No</button>
      </Modal>
      {isGameStarted
        ?
        <Scoreboard
          players={players}
          handleScoreChange={handleScoreChange}
          handleError={handleError}
        />
        :
        <AddPlayers
          players={players}
          handlePlayerAdd={handlePlayerAdd}
          handlePlayerRemove={handlePlayerRemove}
          handleStartGame={handleStartGame}
        />
      }
    </>
  )
}

ReactDom.render(<App />, document.getElementById('app'))