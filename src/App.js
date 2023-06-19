// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const  resetState=()=>{
    setXIsNext(true);
    setSquares(Array(9).fill(null));
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = " X";
    }
    else {
      nextSquares[i] = " O ";
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = " Winner: " + winner;
  }

  else {
    status = " Next player: " + (xIsNext ? " X " : " O ");
  }
  check();
  function check() {
    for (let j = 0; j <= 8; j++) {
      if ((squares[j])) {
        continue;
      }
      else {
        return;
      }
    }
    if (winner == null) {
      status = " GAME DRAW !!!";
    }
  }


  return (
    <>
      {/* to declare winner we used another  usestate and parent 
    function needs to know the value of all boxes */}

      <div className=" welcome "> Tic Tac Toe - </div>
      <div className="status">{status}</div>

      <div className="board-row">
        < Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        < Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        < Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        < Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        < Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        < Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        < Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        < Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        < Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>

        <div>
          <button className="button" onClick={resetState}> Play Again</button>
        </div>
    </>
  );

}


function Square({ value, onSquareClick })
 {
  return(
    <button className="square" onClick={onSquareClick}>{value}</button>
  );

  }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];



  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

  }
  return null;

}

// function Play(squares)
// {
//   while(squares.length>0)
//   {
//     squares.pop();
//   }
//   Board();
  
// }






