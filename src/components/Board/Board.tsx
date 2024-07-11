import { useState } from "react";
import "./Board.css";
import { shuffle } from "../../helper";

const Board = () => {
  const [tiles, setTiles] = useState(shuffle());
  return (
    <div className="game">
      <div className="board">{tiles}</div>
    </div>
  );
};

export default Board;
