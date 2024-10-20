/*console.log("Willkommen Raphi");
console.log("Drücke ");
console.log("1 für Start");
console.log("2 für Statistik");
console.log("3 für Ende");

// DRY - don't repeat yourself

console.log("Willkommen Raphi");
console.log("Drücke ");
console.log("1 für Start");
console.log("2 für Statistik");
console.log("3 für Ende");*/


function printMenu(name, age, place) {
    console.log("Willkommen " + name + "! You are " + age + " years old and you come from " + place);
    console.log("Drücke ");
    console.log("1 für Start");
    console.log("2 für Statistik");
    console.log("3 für Ende");
}   

/*Baue folgende Funktionen:

add(a,b)
subtract(a,b)
mulitply(a,b)
supercalculation(a,b) -> Formel: (a+b)/2 * a
printEasterDate(year) -> Diese Funktion bekommt das gewünschte Jahr und schreibt das Datum von Ostern.



Anbei ist die Formel zur Berechnung on Ostern.*/



function add(a, b) {
    return a + b;   
}


function subtract(a, b) {
    return a - b;
}


function mulitply(a, b) {
    return a * b;
}


function supercalculation(a, b) {
    return (a + b) / 2 * a;
}


function printEasterDate(year) {
    let N = year - 1900;
    let A = N % 19;
    let B = [(7 * A + 1) / 19];       //die eckigen Klammern [] funktionieren ähnlich wie Math.floor, (hier: Math.floor((7 * A + 1) / 19))
    let M = (11 * A + 4 - B) % 29;
    let Q = [N / 4];
    let W = (N + Q + 31 - M) % 7;
    let P = 25 - M - W;

    if(P > 0) {
        console.log("Ostersonntag im Jahr " + year + " ist am " + P + ". April " + year);
    }
    else {
        console.log("Ostersonntag im Jahr " + year + " ist am " + P + 31 + ". März " + year);
    }
    
}
    
let a = 10;
let b = 24;
let year = 2025;

printMenu("Raphi", 17, "Lustenau");
printMenu("Nisl", 17, "Höchst");
console.log("Das Ergebnis von " + a + " + " + b + " ist " + add(a, b));
console.log("Das Ergebnis von " + a + " - " + b + " ist " + subtract(a, b));
console.log("Das Ergebnis von " + a + " * " + b + " ist " + mulitply(a, b));
console.log("Das Ergebnis von (" + a + " + " + b + ") / 2 * " + a + " ist " + supercalculation(a, b));
printEasterDate(year);
