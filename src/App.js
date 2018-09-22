import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamContainer from './components/container/TeamContainer/TeamContainer.jsx';
import okcRoster from './mock/commonTeamRoster/okc.js';
import SelectComponent from './components/presentation/SelectComponent/SelectComponent.jsx';
const NBA = require("nba");

class App extends Component {
  getTeams() {
    const teamObj = NBA.teams;
    let filteredTeams = [];
    teamObj.forEach((team) => {
      filteredTeams.push({
        option: team.teamName,
        value: team.teamId.toString()
      })
    });
    return filteredTeams;
  }
  getTeamRoster(e) {
    const teamID = e.target.value;
    NBA.stats.commonTeamRoster({ TeamID: teamID }).then(response => {
      // console.log(response.commonTeamRoster);
      response.commonTeamRoster.forEach(teamPlayer => {
        const { playerId, player, teamID, num, position } = teamPlayer;
        // console.log({"playerId": playerId, "playerName": player, "teamID": teamID, "playerNumber": num, "playerPostion": position});
      });
    });
  }
  render() {
    return (
      <div className="App">
        <SelectComponent selectData={this.getTeams()} onChange={this.getTeamRoster} />
        <TeamContainer teamPlayers={okcRoster} />
      </div>
    );
  }
}

export default App;
