type Props = {
  playerKey: number;
  onClick(event: unknown): void;
  player?: string;
};

function Board({ playerKey, player, onClick }: Props) {
  const playerActive = player ? "scale-100" : "scale-0";
  const playerColor = player === "X" ? "text-lime-300" : "text-fuchsia-300";
  const playerHover = "transition duration-500 hover:scale-105 transform";
  return (
    <div
      data-square={playerKey}
      className={`h-36 border-solid border-2 border-slate-200 font-display text-8xl text-center flex justify-center items-center cursor-pointer ${playerHover}`}
      {...{ onClick }}
    >
      <span
        className={`transform transition-all duration-150 ease-out ${playerActive}, ${playerColor}`}
      >
        {player}
      </span>
    </div>
  );
}

export default Board;
