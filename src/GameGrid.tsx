import React from 'react';

interface Props {
  grid: string[];
  currentPlayer: number;
  players: { name: string; trapLocation: number | null }[];
  phase: 'placement' | 'playing';
  placeBomb: (index: number) => void;
  handleCellClick: (index: number) => void;
}

export const GameGrid: React.FC<Props> = ({
  grid,
  currentPlayer,
  players,
  phase,
  placeBomb,
  handleCellClick
}) => {
  return (
    <div className="grid">
      {grid.map((cell, index) => {
        const isCurrentPlayerBomb =
          phase === 'placement' &&
          players[currentPlayer]?.trapLocation === index;

        return (
          <button
            key={index}
            className="cell"
            onClick={() => {
              if (phase === 'placement') placeBomb(index);
              else if (phase === 'playing') handleCellClick(index);
            }}
            disabled={cell !== ''}
          >
            {isCurrentPlayerBomb ? '💣' : cell}
          </button>
        );
      })}
    </div>
  );
};
