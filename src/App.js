import { useState, useEffect } from "react";
import Cell from "./components/Cell";
import { Patterns } from "./components/Patterns";
import "./App.css";

function App() {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [player, setPlayer] = useState("x");
  const [result, setResult] = useState({ winner: null, state: null });

  useEffect(() => {
    checkWinner();
    checkDraw();
    setPlayer((prev) => (prev === "x" ? "o" : "x"));
  }, [cells]);

  useEffect(() => {
    if (result.state) {
      alert(`Game Finished! ${result.winner} won the game!`);
      restart();
    }
  }, [result]);

  const chooseCell = (index) => {
    if (cells[index] !== "") return;

    const newCells = [...cells];
    newCells[index] = player;
    setCells(newCells);
  };

  const checkWinner = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = cells[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinner = true;
      currPattern.forEach((idx) => {
        if (cells[idx] !== firstPlayer) {
          foundWinner = false;
        }
      });
      if (foundWinner) {
        setResult({ winner: player, state: "won" });
      }
    });
  };

  const checkDraw = () => {
    let filled = true;
    cells.forEach((cell) => {
      if (cell === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "no one", state: "draw" });
    }
  };

  const restart = () => {
    setCells(Array(9).fill(""));
    setPlayer("x");
  };

  const boardRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  return (
    <div className="d-flex flex-column vw-100 vh-100 justify-content-center align-items-center">
      <div className="board d-flex flex-column">
        {boardRows.map((row, rowIndex) => (
          <div key={rowIndex} className="board-row d-flex w-100">
            {row.map((cellIndex) => (
              <Cell
                key={cellIndex}
                val={cells[cellIndex]}
                style={`cell-${cellIndex}`}
                chooseCell={() => chooseCell(cellIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="p-5 w-100 d-flex justify-content-center">
        <button
          className="btn btn-primary px-5 text-white fs-4 fw-bold"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  );
}

export default App;
