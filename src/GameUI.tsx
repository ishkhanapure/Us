import React from 'react';

interface GameUIProps {
  players: { name: string }[];
  currentPlayer: number;
  winner: string | null;
  phase: 'placement' | 'playing';
  onReset: () => void;
}

export const GameUI: React.FC<GameUIProps> = ({
  players,
  currentPlayer,
  winner,
  phase,
  onReset,
}) => {
  return (
    <div className="game-ui">
      {winner ? (
        <h2>🏆 {winner} wins!</h2>
      ) : phase === 'placement' ? (
        <h2>🧨 {players[currentPlayer].name}, place your bomb</h2>
      ) : (
        <h2>🎯 {players[currentPlayer].name}'s turn</h2>
      )}
      <button onClick={onReset}>🔁 Reset</button>
    </div>
  );
};
