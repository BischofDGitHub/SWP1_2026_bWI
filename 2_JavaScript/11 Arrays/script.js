let a = 4;
let b = 9;
let c = 8;

let arr = [a, b, c];
let arr2 = [500, 251];
console.log(arr[1]);

let arr3 = arr.concat(arr2);

arr.push(10);
arr.push(3);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}



for (let index = 0; index < arr3.length; index++) {
    console.log("Array 3: " + arr3[index]);
}





/*
Aufgabe 1

	Erstelle ein Array mit folgenden Werten:
	4,1,2,3
	Füge die Werte 17 und 199 dazu
	
		a. Gib alle Werte in einer Schleife aus!
		b. Zähle alle Werte zusammen und gib das Ergebnis aus
		c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
*/


let array = [4, 1, 2, 3];

array.push(17);
array.push(199);

for(let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

let sum = 0;

for (let index = 0; index < array.length; index++) {
    sum = sum + array[index];
}

console.log("Die Summe ist: " + sum);

sum = sum / array.length;

console.log("Der Mittelwert ist: " + sum);



/*
Aufgabe 2

	Erstelle ein Array mit folgenden Strings:
	"Susi", "Paula", "Hans"
	
	Gib folgenden Satz aus:
	"Meine Freunde sind Susi, Paula und Hans
	
	Füge "Sepp" dazu. Nun soll die ausgabe folgendermaßen lauten:
"Meine Freunde sind Susi, Paula, Hans und Sepp"
*/

array = ["Susi", "Paula", "Hans"];

console.log("Meine Freunde sind " + array[0] + ", " + array[1] + " und " + array[2]);

array.push("Sepp");

console.log("Meine Freunde sind " + array[0] + ", " + array[1] + ", " + array[2] + " und " + array[3]);