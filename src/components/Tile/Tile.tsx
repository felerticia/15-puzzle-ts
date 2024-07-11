import "./Tile.css";
import { TileType } from "./type";

type TileProps = {
  tile: TileType;
};

const getPosition = (index: number) => {
  const left = (index % 4) * 100 + "px";
  const top = Math.floor(index / 4) * 100 + "px";
  return { left, top };
};

const getClassName = (tile: TileType) => {
  let c = "tile";
  if (tile.value === tile.index + 1) c += " correct";
  if (tile.value === 16) c += " disabled";

  return c;
};

const Tile = ({ tile }: TileProps) => (
  <div className={getClassName(tile)} style={getPosition(tile.index)}>
    {tile.value === 16 ? "" : tile.value}
  </div>
);

export default Tile;
