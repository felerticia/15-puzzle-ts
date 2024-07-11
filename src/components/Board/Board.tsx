import { useCallback, useEffect, useState } from "react";
import "./Board.css";
import { shuffle } from "../../helper";
import Tile from "../Tile/Tile";
import { TileType } from "../Tile/type";
import Overlay from "../Overlay/Overlay";

const Board = () => {
  const [tiles, setTiles] = useState<TileType[]>(shuffle());
  const [animating, setAnimating] = useState(false);

  const moveTile = useCallback(
    (tile: TileType) => {
      const i16 = tiles.find((tile) => tile.value === 16)!.index;
      if (
        ![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index) ||
        animating
      )
        return;

      const newNumbers = [...tiles].map((number) => {
        if (number.index !== i16 && number.index !== tile.index) return number;
        else if (number.value === 16) return { value: 16, index: tile.index };

        return { value: tile.value, index: i16 };
      });
      setAnimating(true);
      setTiles(newNumbers);
      setTimeout(() => setAnimating(false), 200);
    },
    [tiles, animating]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const i16 = tiles.find((n) => n.value === 16)!.index;
      if (e.key === "ArrowLeft" && !(i16 % 4 === 3))
        moveTile(tiles.find((n) => n.index === i16 + 1)!);
      else if (e.key === "ArrowUp" && !(i16 > 11))
        moveTile(tiles.find((n) => n.index === i16 + 4)!);
      else if (e.key === "ArrowRight" && !(i16 % 4 === 0))
        moveTile(tiles.find((n) => n.index === i16 - 1)!);
      else if (e.key === "ArrowDown" && !(i16 < 4))
        moveTile(tiles.find((n) => n.index === i16 - 4)!);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [tiles, moveTile]);

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
