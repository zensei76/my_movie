import { useState } from "react";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import IconButton from "@mui/material/IconButton";
// import useWindowSize from 'react-use/lib/useWindowSize'

import Confetti from "react-confetti";
export function TicTacToe() {
  return (
    <div>
      <h1>Fun Game</h1>
      <Board />
    </div>
  );
}

function Board() {
  const INITIAL_BOARD = [null, null, null, null, null, null, null, null, null];
  // const { width, height } = useWindowSize()
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [isXTurn, setIsXTurn] = useState(true);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] != null && board[a] === board[b] && board[b] === board[c]) {
        console.log("winer is", board[a]);
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWinner(board);
  const handleClick = (index) => {
    console.log(index);
    //Allow updating in untouched boxes ; null means untouched
    //in no winner & if its untouched update
    if (!board[index] && !winner) {
      const boardCopy = [...board];
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      //Changing turn
      setIsXTurn(!isXTurn);
    }
  };
  
  return (
    <div>
      <div className='board'>
        {winner ? <Confetti  /> : null}
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
      </div>
      {winner ? <h2>Winner is : {winner}</h2> : null}
      <IconButton
        onClick={() => {
          setBoard(INITIAL_BOARD);
          setIsXTurn(true);
        }}
      >
        <RestartAltIcon>Restart</RestartAltIcon>
      </IconButton>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  const styles = {
    color: val === "O" ? "red" : "green",
  };

  return (
    <div className='game-box' style={styles} onClick={onPlayerClick}>
      {val}
    </div>
  );
}
