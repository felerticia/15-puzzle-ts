export const shuffle = () => {
  return new Array(16)
    .fill(0)
    .map((_, i) => i + 1)
    .sort(() => Math.random() - 0.5);
};
