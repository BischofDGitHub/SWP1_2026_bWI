/*const getData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            return data;
        });
        
    })
}*/

const getData = async () => {
    const result = await fetch("https://api.openligadb.de/getmatchdata/bl1/2022");
    const data = await result.json();
    return data;
}

const calculateGames = (data, team) => {
    let games = 0;
    let losses = 0;
    let wins = 0;
    let draws = 0;
    let goals = 0;
    let enemyPoints = 0;
    data.forEach(element => {
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
    });
    console.log([games, wins, losses, draws, goals, enemyPoints, 3 * wins + draws]);
    return [games, wins, losses, draws, goals, enemyPoints, 3 * wins + draws];	
}


const createTeamInfo = async (team, index) => {
    data = await getData();
    let games = calculateGames(data, team);

    return {
        id: index + 1,
        name: team,
        games: games[0],
        wins: games[1],
        draws: games[3],
        losses: games[2],
        goals: `${games[4]}:${games[5]}`,
        diff: games[4] - games[5],
        points: games[6]
    }
}

const getTeamInfo = async (data) => {
    let teams = [];
    data.forEach(element => {
        teams.push(element.team1.teamName);
        teams.push(element.team2.teamName);
    });

    let uniqueTeams = Array.from(new Set(teams));
    
    let teamInfo = await Promise.all(
        uniqueTeams.map(async (team, index) => {
            return await createTeamInfo(team, index, data);
        })
    );
    
    return teamInfo;
}

const printTeams = async() => {
    let html = "";
    let data = await getData();
    let teams = await getTeamInfo(data);
    /*teams.forEach(element => {
        html += "<ul class=\"list\"> <li>" + element + "</li><li>" + element + "</li></ul>";
    });*/

    teams.forEach(element => {
        html += "<tr class=\"team\"><th>" + element.id + "</th>";
        html += "<th>" + element.name + "</th>";
        html += "<th>" + element.games + "</th>";
        html += "<th>" + element.wins + "</th>";
        html += "<th>" + element.draws + "</th>";
        html += "<th>" + element.losses + "</th>";
        html += "<th>" + element.goals + "</th>";
        if (element.diff < 0) html += "<th style=\"color: red\">" + element.diff + "</th>"; else { html += "<th style=\"color: green\">+" + element.diff + "</th>" };
        html += "<th>" + element.points + "</th></tr>";
    });

    document.getElementById("output").innerHTML = html; 
}

document.getElementById("expand").addEventListener("click", () => {
    let output = document.getElementById("output");
    let expand = document.getElementById("expand");
    if (output.style.display == "none") {
        output.style.display = "";
        expand.style.transform = "scaleY(-1)";
    }
    else {
        output.style.display = "none";
        expand.style.transform = "scaleY(1)";
    }
});

printTeams();
