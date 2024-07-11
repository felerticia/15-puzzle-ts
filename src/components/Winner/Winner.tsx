import { TileType } from "../Tile/type";
import "./Winner.css";

type WinnerProps = {
  tiles: TileType[];
  reset: () => void;
};

const Winner = ({ tiles, reset }: WinnerProps) => {
  if (tiles.some((n) => n.value !== n.index + 1)) return null;

  return (
    <div className="winner">
      <p>You win!</p>
    </div>
  );
};

export default Winner;
