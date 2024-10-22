import { log } from "console";
import { read } from "fs";
import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
    input: process.stdin,
    output: process.stdout,
});
const readLineAsync = () => {
    return new Promise((resolve) => {
        readline.question("", (userRes) => {
            resolve(userRes);
            
        });
    });
};

/// here cocmes your code

/*
console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);
*/


function selection() {
    console.log("Wählen Sie die gewünschte Funktion");
    console.log("1. Einzahlen");
    console.log("2. Abheben");
    console.log("3. Kontostand");
    console.log("4. Ende");
}

function deposit(balance, value) {
    balance = balance + value;
    console.log("Sie haben " + value + " Euro eingezahlt!");
    return balance;
}

function withdraw(balance, value) {
    balance = balance - value;
    console.log("Sie haben " + value + " Euro abgehoben!");
    return balance;
}

function showBalance(balance) {
    console.log("Dein Kontostand beträgt: " + balance);
}

let selector = 0;
let balance = 0;

selection();


do {   
    selector = parseInt(await readLineAsync(), 10);     //,10 steht hier für das Zahlensystem 
                                                        //(,2 würde bedeuten, dass das die Basis 2 verwendet wird)
    switch (selector) {
        case 1:
            console.log("Geben Sie den Betrag ein, den Sie einzahlen möchten: ");
            balance = deposit(balance, parseInt(await readLineAsync(), 10));
            break;
        case 2:
            console.log("Geben Sie den Betrag ein, den Sie abheben möchten: ");
            balance = withdraw(balance, parseInt(await readLineAsync(), 10));
            break;
        case 3:
            showBalance(balance);
            break;
        case 4:
            console.log("Programm wird beendet!");
            break;
        default:
            break;
    }

}
while(selector != 4)

readline.close();