import React from 'react';
import { useTrapGame } from './useTrapGame';
import { PlayerSetup } from './PlayerSetup';
import { GameGrid } from './GameGrid';
import { GameUI } from './GameUI';

export const App: React.FC = () => {
  const {
    players,
    currentPlayer,
    winner,
    grid,
    phase,
    placeBomb,
    handleCellClick,
    resetGame,
    setPlayers,
  } = useTrapGame();

  return (
    <div className="container">
      <h1 className="title">💣 Trap Game</h1>
      {!players ? (
        <PlayerSetup onStart={setPlayers} />
      ) : (
        <>
          <GameUI
            players={players}
            currentPlayer={currentPlayer}
            winner={winner}
            phase={phase}
            onReset={resetGame}
          />
          <GameGrid
            grid={grid}
            currentPlayer={currentPlayer}
            players={players}
            phase={phase}
            placeBomb={placeBomb}
            handleCellClick={handleCellClick}
          />
        </>
      )}
    </div>
  );
};
