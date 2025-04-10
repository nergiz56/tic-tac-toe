import Player from "./components/Player.jsx"
import GameBoard from './components/GameBoard.jsx'
import { useState } from "react"
import Log from './components/Log.jsx'

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X') 
  const [gameTurns, setGameTurns] = useState([]);   //oyun dönüşlerini ayarlama işlevleri, kare seçtğmizde bu diziye dönüş eklemek istiyoruz

  function handleSelectSquare(rowIndex, colIndex){// ızgaramızda bir kare seçtıkten sonra dönüşleri değiştirmek istiyoruz, 
    setActivePlayer((curActivePlayer) => curActivePlayer  === 'X' ? 'O' : 'X'); // aktif olan oyuncumuzu otomotik olarak bir girdi olarak alıyoruz.
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if(prevTurns.length>0 &&  prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: currentPlayer}, ...prevTurns,
      ];
      return updatedTurns;
    });

  }


  return (

    <main> 
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X' } />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
         
      </div>
      <Log/>
    </main>
  )
}

export default App
