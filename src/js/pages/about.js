import React from 'react'

const About = () => {
  return (
    <div className="container">
      <h2>About Golf Scoreboard</h2>
      <p>Golf Scoreboard was made to easily allow players to keep track of their golf game score. To start, simply add the desired number of players and then click 'start game'. From there you will be able to edit the individual scores per player and the site will automatically tally them up.</p>
      <h2>How to Play the Golf Card Game</h2>
      <h3>You will need:</h3>
      <ul>
        <li>At least 2 players</li>
        <li>1 - 3 decks of cards, depending on how many players there are</li>
      </ul>
      <h3>Objective</h3>
      <p>Have the lowest total number of points at the end of nine rounds.</p>
      <h3>Directions</h3>
      <p>Starting to the left of the dealer and one at a time, deal 4 cards per player face down in the shape of a square. Once all the cards are dealt, place the remaing deck in the middle and flip the top card over to reveal what it is. All players can now look, only once, at the two cards closest to them. Do not share these cards with any other players.</p>
      <p>The player to the left of the dealer may now begin the game by either:
        <ul>
          <li>Select the face up card that was placed next to the deck.</li>
          <li>Take the card from the top of the deck.</li>
        </ul>
        Once the player has selected a card, they must decide to either keep it and place it face up in place of one of the 4 cards in front of them. Or they made discard it back to the face up pile next to the deck. The end of every players turn must end with the player flipping over and "locking in" one of their 4 cards.
      </p>
      <p>This continues with each player for 9 rounds. At the end of each round you must tally up your score from your 4 cards and mark it down. At the end of the 9 rounds, tally up the score from each round. The player with the lowest score is the winner.</p>
      <h3>Scoring</h3>
      <p>Tally up your points using the following guide:</p>
      <ul>
        <li>Ace: -2</li>
        <li>King: 0</li>
        <li>number cards are equal to their face value</li>
        <li>Jack and Queen: 10</li>
        <li>2 of a kind: 0</li>
        <li>3 of a kind: -3</li>
        <li>4 of a kind: -4</li>
      </ul>
      <p>Always take the lowest score that you can get. For example, if you had 4 Aces, you would take a score of -8 rather than -4.</p>
    </div>
  )
}

export default About