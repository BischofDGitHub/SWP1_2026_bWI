// Erstelle eine Variable banana mit dem Wert "Banane"
// Erstelle eine Variable apple mit dem Wert "Apple"

let banana = "Banana"
let apple = "Apple"

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo

let bananaAvgWeight = 0.34;
let appleAvgWeight = 0.22;

let avgBananasPerKilo = 1/bananaAvgWeight;
let avgApplesPerKilo = 1/appleAvgWeight;

let pricePerBanana = bananaPricePerKilo/avgBananasPerKilo;
let pricePerApple = applePricePerKilo/avgApplesPerKilo;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel

console.log("Äpfel pro Kilo: " + avgApplesPerKilo)
console.log("Bananen pro Kilo: " + avgBananasPerKilo)

console.log("Preis pro Apfel: " + pricePerApple)
console.log("Preis pro Banane: " + pricePerBanana)

// Preis von 8 Äpfeln

let result = 8 * pricePerApple;
console.log("Preis von 8 Äpfeln: " + result);

// Preis von 17 Bananen

result = 17 * pricePerBanana;
console.log("Preis von 17 Bananen: " + result);

// Preis von 1 Tonne Äpfel

result = 1000 * applePricePerKilo;
console.log("Preis von einer Tonne Äpfeln: " + result);

// Preis von 1 Tonne Bananen

result = 1000 * bananaPricePerKilo;
console.log("Preis von einer Tonne Bananen: " + result);