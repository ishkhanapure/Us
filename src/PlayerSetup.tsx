import React, { useState } from 'react';

interface PlayerSetupProps {
  onStart: (players: { name: string; trapLocation: number | null }[]) => void;
}

export const PlayerSetup: React.FC<PlayerSetupProps> = ({ onStart }) => {
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player1 && player2) {
      onStart([
        { name: player1, trapLocation: null },
        { name: player2, trapLocation: null }
      ]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="setup-form">
      <input
        type="text"
        placeholder="Player 1 name"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Player 2 name"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        required
      />
      <button type="submit">Start Game</button>
    </form>
  );
};
