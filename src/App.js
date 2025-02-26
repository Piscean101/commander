import './App.css';
// import { useState } from 'react'; 
import Player from './components/player.js';
// import Header from './components/header.js';
import Coin from './components/coin.js';
import Dice from './components/dice.js';
// import VotePage from './components/votePage.js';
// import { useEffect } from 'react';

function App() {
  var start = 40;
  // var display = {
  //   display: 'none',
  // }
  // function handleDisplay(display) {
  //   display.display === 'none' ? display.display = 'flex' : display.display = 'none';
  // }
  return (
    <div className="App">

      {/* <form className="resetLife">
        <button type="submit">Reset Starting Life</button>
        <input type="range" name="resetLife" id="range" min="20" max="100" step="10" defaultValue={start} onChange={(e) => handleStart(e.target.value)}></input>
        <p>{start}</p>
      </form> */}

      <div className="playerboard pboard1">
      <Player start={start} name="Player 1"/>
      <Player start={start} name="Player 2"/>
      </div>
      <div className="playerboard pboard2">
      <Player start={start} name="Player 3"/>
      <Player start={start} name="Player 4"/>
      </div>
      <Coin />
      <Dice />
      {/* <button onClick={() => {handleDisplay(display)}}>VOTE</button> */}
      {/* <VotePage style={display}/> */}
    </div>
  );
}

export default App;
