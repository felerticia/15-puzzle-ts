import { useState } from "react";
import "./Board.css";
import { shuffle } from "../../helper";
import Tile from "../Tile/Tile";
import { TileType } from "../Tile/type";
import Overlay from "../Overlay/Overlay";

const Board = () => {
  const [tiles, setTiles] = useState<TileType[]>(shuffle());
  return (
    <div className="game">
      <div className="board">
        {tiles.map((tile, i) => {
          return <Tile key={i} tile={tile} />;
        })}
        <Overlay />
      </div>
    </div>
  );
};

export default Board;
