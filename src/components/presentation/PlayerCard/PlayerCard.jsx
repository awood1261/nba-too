import React from 'react';
import './PlayerCard.css';

const PlayerCard = ( {teamPlayer} ) => {
  return (
    <div className="n-player-card">
        <div>{teamPlayer.player}</div>
        <div>{teamPlayer.num}</div>
        <div>{teamPlayer.position}</div>
    </div>
  );
}

export default PlayerCard;