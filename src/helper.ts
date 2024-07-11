import { TileType } from "./components/Tile/type";

export const shuffle = (): TileType[] => {
  const arr = new Array(16)
    .fill(0)
    .map((_, i) => i + 1)
    //  .sort(() => Math.random() - 0.5)
    .map((x, i) => ({ value: x, index: i }));
  return arr;
};
