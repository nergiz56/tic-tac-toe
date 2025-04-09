import Player from "./components/Player.jsx"
import GameBoard from './components/GameBoard.jsx'
import { useState } from "react"

function App() {
  
  const [activePlayer, setActivePlayer] = useState('X') 

  function handleSelectSquare(){// ızgaramızda bir kare seçtıkten sonra dönüşleri değiştirmek istiyoruz, 
    setActivePlayer((curActivePlayer) => curActivePlayer  === 'X' ? 'O' : 'X'); // aktif olan oyuncumuzu otomotik olarak bir girdi olarak alıyoruz.

  }

  return (

    <main> 
      <div id="game-container">
        <ol id="players" className="highlight-player" >
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X' } />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
         
      </div>
    </main>
  )
}

export default App
