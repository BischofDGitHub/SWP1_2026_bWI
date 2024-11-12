/*
let data = ["Hans", "Paul"];
*/
  
let person = { firstname: "Hans", lastname: "Huber", points: 30}

let data = [
    { firstname: "Hans", lastname: "Huber", points: 30 },
    { firstname: "Paul", lastname: "Müller", points: 34 },
    { firstname: "Franz", lastname: "Maier", points: 35 }
];

/*
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.firstname);
    
}
    
for Schleife kann verwendet werden jedoch ist array.foreach einfacher und praktischer
|
V

data.forEach(element => {
    console.log(element.firstname);
});
*/



function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div>" + element.firstname + " " + element.lastname + "</div>";
    });

    document.getElementById("content").innerHTML = html;        
}

loadPeople();

/*

*/