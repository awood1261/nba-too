import React, { Component } from "react";
import PlayerCard from '../PlayerCard/PlayerCard.jsx';
const NBA = require("nba");

class PlayerDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      personId: "",
      teamID: ""
    };
  }

  getPlayerInfo() {
    const player = NBA.findPlayer("Ben Simmons");
    NBA.stats.playerInfo({ PlayerID: player.playerId }).then(response => {
      response.commonPlayerInfo.forEach(player => {
        const { displayFirstLast, personId, teamId } = player;
        this.setState({
          name: displayFirstLast,
          personId: personId,
          teamId: teamId
        })
      });
    });
  }

  

  

  componentDidMount() {
    this.getPlayerInfo();
  }

  render() {
    return (
      <div>
        
        <PlayerCard />
        {/* <ul>
          <li>Player: {this.state.name}</li>
          <li>Player ID: {this.state.playerId}</li>
          <li>Team ID: {this.state.teamId}</li>
        </ul> */}
      </div>
    );
  }
}

export default PlayerDetail;
