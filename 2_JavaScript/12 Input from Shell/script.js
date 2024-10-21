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

console.log("Enter your name");
let inputOfUser = await readLineAsync();
console.log("Your name is " + inputOfUser);

console.log("Gib jetzt dein Alter ein")
inputOfUser = await readLineAsync();
console.log("Du bist " + inputOfUser + " Jahre alt");

readline.close();