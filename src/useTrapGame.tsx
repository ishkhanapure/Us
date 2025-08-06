import { useState } from 'react';

type Player = {
  name: string;
  trapLocation: number | null;
};

export const useTrapGame = () => {
  const [players, setPlayers] = useState<Player[] | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [grid, setGrid] = useState<string[]>(Array(25).fill(''));
  const [winner, setWinner] = useState<string | null>(null);
  const [phase, setPhase] = useState<'placement' | 'playing'>('placement');

  const placeBomb = (index: number) => {
    if (!players) return;
    if (players[currentPlayer].trapLocation !== null) return;

    const updatedPlayers = [...players];
    updatedPlayers[currentPlayer].trapLocation = index;

    if (currentPlayer === 0) {
      setPlayers(updatedPlayers);
      setCurrentPlayer(1);
    } else {
      setPlayers(updatedPlayers);
      setPhase('playing');
      setCurrentPlayer(0);
    }
  };

  const handleCellClick = (index: number) => {
    if (!players || winner || phase !== 'playing') return;

    const opponent = players[1 - currentPlayer];
    const newGrid = [...grid];

    if (index === opponent.trapLocation) {
      newGrid[index] = '💥';
      setGrid(newGrid);
      setWinner(opponent.name);
    } else {
      newGrid[index] = '✅';
      setGrid(newGrid);
      setCurrentPlayer(1 - currentPlayer);
    }
  };

  const resetGame = () => {
    setPlayers(null);
    setGrid(Array(25).fill(''));
    setCurrentPlayer(0);
    setWinner(null);
    setPhase('placement');
  };

  return {
    players,
    currentPlayer,
    winner,
    grid,
    phase,
    placeBomb,
    handleCellClick,
    resetGame,
    setPlayers,
  };
};
