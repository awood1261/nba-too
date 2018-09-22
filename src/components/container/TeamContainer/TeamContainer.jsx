import React from 'react';
import './TeamContainer.css';
import PlayerCard from '../../presentation/PlayerCard/PlayerCard.jsx';

const TeamContainer = ( {teamPlayers} ) => {
  return (
    <div className="n-team-container">
        {teamPlayers.map((teamPlayer, index) => 
            <PlayerCard teamPlayer={teamPlayer} key={index} />
        )}
    </div>
  );
}

export default TeamContainer;