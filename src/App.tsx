import { useState, useEffect } from "react";
import "./App.css";
import Board from "./Board";

const GAME_STARTER = ["", "", "", "", "", "", "", "", ""];
const WINNING_CONDITION = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [gamePlay, setGamePlay] = useState(GAME_STARTER);
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const newTurn = () => {
    setCurrentPlayer(currentPlayer == "X" ? "O" : "X");
  };

  useEffect(() => {
    checkIfWin();
  }, [gamePlay]);

  const resetGame = () => setGamePlay(GAME_STARTER);

  const gratsWin = () => {
    window.alert(
      `Grats dawg u killing it, all the praise due to ${currentPlayer}`
    );
    resetGame();
  };

  const lmaoDraw = () => {
    window.alert(`Draw XD`);
    resetGame();
  };

  const checkIfWin = () => {
    let roundWon = false;

    for (let index = 0; index < WINNING_CONDITION.length; index++) {
      const winCombo = WINNING_CONDITION[index];

      let a = gamePlay[winCombo[0]];
      let b = gamePlay[winCombo[1]];
      let c = gamePlay[winCombo[2]];

      if ([a, b, c].includes("")) {
        continue;
      }

      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }
    if (roundWon) {
      setTimeout(() => {
        gratsWin();
      }, 500);
      return;
    }
    if (!gamePlay.includes("")) {
      setTimeout(() => {
        lmaoDraw();
      }, 500);
      return;
    }
    newTurn();
  };

  const handleBoardClick = (event: any) => {
    const pressedSquare = Number(event.target.getAttribute("data-square"));
    const currentAct = gamePlay[pressedSquare];
    if (currentAct) {
      return;
    }
    const newAct = [...gamePlay];
    newAct[pressedSquare] = currentPlayer;
    setGamePlay(newAct);
  };

  return (
    <div className="h-full p-4 bg-cyan-950 text-cyan-100" id="bground">
      <h1 className="text-5xl text-center font-display">Miltactoe</h1>
      <div className="mt-8 grid grid-cols-3 gap-3 mx-auto w-96">
        {gamePlay.map((player, playerKey) => (
          <Board
            key={playerKey}
            onClick={handleBoardClick}
            {...{ playerKey, player }}
          />
        ))}
      </div>
      <div>Scores</div>
    </div>
  );
}

export default App;
