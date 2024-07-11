import { useState } from "react";
import "./Board.css";
import { shuffle } from "../../helper";
import Tile from "../Tile/Tile";
import { TileType } from "../Tile/type";
import Overlay from "../Overlay/Overlay";

const Board = () => {
  const [tiles, setTiles] = useState<TileType[]>(shuffle());
  const [animating, setAnimating] = useState(false);

  const moveTile = (tile: TileType) => {
    const i16 = tiles.find((tile) => tile.value === 16)!.index;
    if (![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) || animating)
      return;

    const newNumbers = [...tiles].map((number) => {
      if (number.index !== i16 && number.index !== tile.index) return number;
      else if (number.value === 16) return { value: 16, index: tile.index };

      return { value: tile.value, index: i16 };
    });
    setAnimating(true);
    setTiles(newNumbers);
    setTimeout(() => setAnimating(false), 200);
  };

  return (
    <div className="game">
      <div className="board">
        {tiles.map((tile, i) => {
          return <Tile key={i} tile={tile} moveTile={moveTile} />;
        })}
        <Overlay />
      </div>
    </div>
  );
};

export default Board;
