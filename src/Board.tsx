type Props = {
  playerKey: number;
  onClick(event: any): void;
  player?: string;
};

function Board({ playerKey, player, onClick }: Props) {
  const playerActive = player ? "scale-100" : "scale-0";
  const playerColor = player === "X" ? "text-yellow-200" : "text-fuchsia-300";
  const playerHover = "transition duration-500 hover:scale-105 transform";
  return (
    <div
      data-square={playerKey}
      className={`h-36 border-solid border-4 border-slate-200 font-display text-5xl text-center flex justify-center items-center cursor-pointer ${playerHover}`}
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
