/*Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren): 
X X X X 
O O O O 
X X X X 
O O O O 

2. Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒
Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)*/ 


let switcher = true;

for (let index = 0; index < 16; index++) {
    if (index % 4 == 0 && index != 0){
        switcher = !switcher;
        console.log(" ");
    }

    if (switcher){
        process.stdout.write("X ");
    }
    else {
        process.stdout.write("O ");
    }
}

let value1 = 1;
let value2 = 100;
let sum = 0;
console.log("");

for (count = value1; count <= value2; count++){
    if (count % 2 == 0)
    {
        sum = sum + count;
    }
}
console.log("The sum of all numbers divisible by 2 between " + value1 + " and " + value2 + " is " + sum);