import React, { useState } from 'react'

const Scoreboard = ({ players, handleScoreChange }) => {
  const rounds = 9

  const generateInitialState = () => {
    const initialState = {}
    players.forEach(player => {
      for (let i = 1; i <= rounds; i++) {
        initialState[`${player.name}-${i}`] = 0
      }
    })
    return initialState
  }

  const [inputs, setInputs] = useState(generateInitialState())

  const handleInput = (e) => {
    const id = e.target.id
    const value = e.target.value
    setInputs(previousInputs => ({ ...previousInputs, [id]: value }))
  }

  const updateScore = () => {
    const scores = {}
    for (const input in inputs) {
      const name = input.split('-')[0]
      const score = Number(inputs[input])
      if (!(name in scores)) {
        scores[name] = score
      } else {
        scores[name] = scores[name] + score
      }
    }
    handleScoreChange(scores)
  }

  const buildTableHead = () => {
    let columns = []

    for (let i = 0; i < players.length; i++) {
      columns.push(<th key={`player-${i}`}>{players[i].name}</th>)
    }

    return columns
  }

  const buildColumns = (round) => {
    let columns = []

    for (let i = 0; i < players.length; i++) {
      const key = `${players[i].name}-${round}`
      columns.push(<td key={key}><input id={key} type="number" data-name={players[i].name} value={inputs[key]} onBlur={updateScore} onChange={handleInput} /></td>)
    }

    return columns
  }

  const buildTotalColumns = () => {
    let columns = []

    for (let i = 0; i < players.length; i++) {
      const key = `${players[i].name}-${rounds + 1}`
      columns.push(<td key={key}>{players[i].score}</td>)
    }

    return columns
  }

  const buildTable = () => {
    let table = []

    for (let i = 1; i <= rounds; i++) {
      table.push(
        <tr key={i}>
          <th>{i}</th>
          {buildColumns(i)}
        </tr>
      )
    }

    return table
  }

  return (
    <div className="scoreboard">
      <table>
        <thead>
          <tr>
            <th>Round</th>
            {buildTableHead()}
          </tr>
        </thead>
        <tbody>
          {buildTable()}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            {buildTotalColumns()}
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Scoreboard