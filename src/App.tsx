import { useState, useEffect } from "react";
import "./App.css";
import Board from "./Board";

type Scores = {
  [key: string]: number;
};

const GAME_STARTER = ["", "", "", "", "", "", "", "", ""];
const SCORES_STARTER: Scores = {
  X: 0,
  O: 0,
};
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
  const [scores, setScores] = useState(SCORES_STARTER);

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
    const currentPlayerScore = scores[currentPlayer] + 1;
    const newScores = { ...scores };
    newScores[currentPlayer] = currentPlayerScore;
    setScores(newScores);
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

      const a = gamePlay[winCombo[0]];
      const b = gamePlay[winCombo[1]];
      const c = gamePlay[winCombo[2]];

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

  const resetScores = () => {
    resetGame();
    setScores(SCORES_STARTER);
    setTimeout(() => {
      window.alert("Scores resetted");
    }, 100);
  };

  const playerColor =
    currentPlayer === "X" ? "text-lime-300" : "text-fuchsia-300";

  return (
    <div
      className="h-full sm:h-screen p-2 sm:p-4 text-fun-pink-light flex flex-col items-center sm:grid sm:grid-rows-1 sm:grid-cols-3 gap-2"
      id="bground"
    >
      <div className="sm:justify-self-center text-2xl sm:text-3xl max-sm:p-2 max-sm:items-center grid grid-cols-2 sm:flex sm:flex-col sm:gap-2 justify-center max-sm:order-last">
        <div>
          <h3 className="font-display">Scores</h3>
          <p>
            <span className="text-lime-300 font-display">X:</span>{" "}
            <span>{scores["X"]}</span>
          </p>
          <p>
            <span className="text-fuchsia-300 font-display">O:</span>{" "}
            <span>{scores["O"]}</span>
          </p>
        </div>
        <div className="text-xl">
          <button
            type="button"
            className="bg-transparent border-2 border-fun-pink text-fun-pink-light font-display px-4 py-2 rounded-xl hover:bg-fun-pink-light hover:border-transparent hover:text-bg"
            onClick={resetScores}
          >
            Reset Scores
          </button>
        </div>
      </div>
      <div className="sm:col-span-2 sm:justify-self-start max-sm:p-2">
        <h1 className="text-4xl sm:text-5xl text-center font-display">
          Kamil-Tac-Toe
        </h1>
        <p className="mt-1 text-center font-display text-xl sm:text-2xl">
          A game by{" "}
          <a
            href="https://muhasyraf.github.io"
            rel="noopener"
            target="_blank"
            className="text-fun-pink hover:text-fun-pink-light"
          >
            Asyraf
          </a>
        </p>
        <div className="mt-8 grid grid-cols-3 gap-3 mx-auto w-72 sm:w-96">
          {gamePlay.map((player, playerKey) => (
            <Board
              key={playerKey}
              onClick={handleBoardClick}
              {...{ playerKey, player }}
            />
          ))}
        </div>
        <p className="mt-2 font-display text-center text-xl sm:text-3xl">
          Let's go{" "}
          <span className={`font-display ${playerColor} `}>
            {currentPlayer}!{" "}
          </span>
          This is your turn
        </p>
      </div>
    </div>
  );
}

export default App;
