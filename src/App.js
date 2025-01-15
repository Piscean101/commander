import './App.css';
import Player from './components/player.js';
import Header from './components/header.js';
import Coin from './components/coin.js';
import Dice from './components/dice.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Player start={20} name="Player 1"/>
      <Player start={20} name="Player 2"/>
      <Player start={20} name="Player 3"/>
      <Player start={20} name="Player 4"/>
      <Coin />
      <Dice />
    </div>
  );
}

export default App;
