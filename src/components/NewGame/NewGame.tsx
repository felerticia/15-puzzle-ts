import "./NewGame.css";

type NewGameProps = {
  reset: () => void;
};

const NewGame = ({ reset }: NewGameProps) => (
  <div className="button-wrapper">
    <button onClick={reset}>New Game</button>
  </div>
);

export default NewGame;
