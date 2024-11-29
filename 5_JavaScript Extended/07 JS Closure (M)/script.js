let myName = "David";

function printName() {
    console.log(myName);
}

myName = "John";

printName();

myName = "Max";

printName();





/*function outerFunction(outerVariable) {
    const outer2 = "Hi";
    return function innerFunction(innerVariable) {
        console.log("outerVariable: " + outerVariable);
        console.log("innerVariable: " + innerVariable);
        console.log(outer2);
    }    
}*/



//Die innerFunction hat immer Zugriff auf die Variablen aus allen outerFunktions
function outerFunction(url) {
    fetch(url).then(() => {
        console.log(url);
    });
}

const newFunction = outerFunction("outerVariable");
newFunction("innerVariable");