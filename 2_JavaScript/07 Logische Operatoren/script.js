//logische Operatoren

if ((4 > 7) || (4 < 4)){
    console.log("Is true");
}
else {
    console.log("Is false")
}


// Erstelle zwei Zufallszahl zwischen 0 und 100
// Speichere diese jeweils in einer Variable

let randomNumber1 = Math.floor(Math.random() * 100);
let randomNumber2 = Math.floor(Math.random() * 100);

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

if ((randomNumber1 < randomNumber2) && (randomNumber1 < 50)){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

if ((randomNumber1 < 30) || (randomNumber2 < 30)){
    console.log("Eine der beiden ist kleiner als 30")
}

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

if ((randomNumber1 < 50) && (randomNumber2 != 50)){
    console.log("Erste Zahl klein, zweite kein 50iger")
}