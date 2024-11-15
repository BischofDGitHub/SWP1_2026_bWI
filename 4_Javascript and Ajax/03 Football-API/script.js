let scorers = {             //Objekt, welches als key-value array agiert
    //82371: "Hans Günter",
    //92382: "Lisa Müller"          //Bsp. wie Daten in diesem Objekt aussehen könnten
}

//console.log(scorers[82371])   -->Ausgabe: "Hans Günter"


let teams = [];
let uniqueTeams = [];

const loadData = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2022").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
            })
        
    })
}

const fillTable = (data) => {
    

    data.forEach(element => {
        teams.push(element.team1.teamName);
        teams.push(element.team2.teamName);
    });

    uniqueTeams = Array.from(new Set(teams));
    
    printTeams(uniqueTeams);
}

const printTeams = (teams) => {
    let html = "";
    teams.forEach(element => {
        html += "<div class=\"team\">" + element + "</div>";
    });

    document.getElementById("output").innerHTML = html; 
}

const getScorer = (scorerId) => {
    if (scorers[scorerId]);
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let element = document.getElementById("dropbtn");
element.addEventListener("click", () => { 
    
    document.getElementById("myDropdown").classList.toggle("show");
});


// document.getElementsByClassName("dropbtn").forEach((element) => {
//     element.addEventListener("click", () => {
//         document.getElementById("myDropdown").classList.toggle("show");
//     });
// });


loadData();

/*function loadData1() {
    
}*/
//funktion ist identisch wenn sie mit function gemacht wird oder mit dem pfeil