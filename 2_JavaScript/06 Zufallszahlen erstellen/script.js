//die Zahl mit der die Zufallszahl (zwischen 0 und 1) multipliziert wird bestimmt wie viele verschiedene Werte es gibt
//Mit Math.floor wird der Nachkommateil abgeschnitten
//Mit + und - kann der Bereich angegeben werden 
//Beispiel: Zufallszahl * 15 -100;      Es gibt Werte zwischen -100 und -85

let randomNumber = Math.random() * 100;
let random = Math.floor(randomNumber);

console.log(randomNumber);
console.log(random);


//1 2 3 4 5 6 7 8 9 10 11 12 ... 19 20
//Zufallszahl zwischen 10 und 20

randomNumber = Math.random() * 10 + 10;
random = Math.floor(randomNumber);

console.log(randomNumber);
console.log(random);
