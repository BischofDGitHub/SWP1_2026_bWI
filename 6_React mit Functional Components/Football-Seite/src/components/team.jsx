import React from 'react'

const calculateGames = (element, team) => {
  let games = 0;
  let losses = 0;
  let wins = 0;
  let draws = 0;
  let goals = 0;
  let enemyPoints = 0;

  console.log(`Skibidi Gyatt: ${element}`);

  if(element.team1.teamName == team) {
    games++;
    if(element.matchResults[0].pointsTeam1 > element.matchResults[0].pointsTeam2) {
      wins++;
    }
    else if(element.matchResults[0].pointsTeam1 < element.matchResults[0].pointsTeam2) {
      losses++;
    }
    else {
      draws++;
    }
    goals += element.matchResults[0].pointsTeam1;
    enemyPoints += element.matchResults[0].pointsTeam2;
  }     
  else if(element.team2.teamName == team) {
    games++;
    if(element.matchResults[0].pointsTeam1 > element.matchResults[0].pointsTeam2) {
      losses++;
    }
    else if(element.matchResults[0].pointsTeam1 < element.matchResults[0].pointsTeam2) {
      wins++;
    }
    else {
      draws++;
    }
    goals += element.matchResults[0].pointsTeam2;
    enemyPoints += element.matchResults[0].pointsTeam1;
  }

  return {
    "games": games,
    "wins": wins,
    "losses": losses,
    "draws": draws,
    "goals": goals,
    "diff": goals - enemyPoints,
    "points": 3 * wins + draws
  };	
}


export default function team({element} ) {
  let el = calculateGames(element, element.name);
  let color = el.diff < 0 ? "red" : "green";

  return (
    <tr>
        <th>{el.id}</th>
        <th>{el.name}</th>
        <th>{el.games}</th>
        <th>{el.wins}</th>
        <th>{el.draws}</th>
        <th>{el.losses}</th>
        <th>{el.goals}</th>
        <th style={{color: color}}>{el.diff}</th>
        <th>{el.points}</th>
    </tr>
  )
}
