import React, { useState, useEffect } from 'react'
import Team from './team'


export default function teamlist() {

  const [teams, setTeams] = useState([]); 

  useEffect(() => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2022").then((result) => {
      result.json().then((data) => {
        setTeams(data);
        console.log(teams);
      });
    })
  }, []);

  return (
      <div>
        <table className="wrapper">
          <thead className="head">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Games</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Goals</th>
                <th>Diff</th>
                <th>PTS</th>
                <th id="expand"></th>
              </tr>
          </thead>
        <tbody id="output">
          {teams.map((team, index) => {
              console.log(team);
              return <Team element={team} key={index}/>
            })}
          </tbody>
        </table>
    </div>
  )
}
