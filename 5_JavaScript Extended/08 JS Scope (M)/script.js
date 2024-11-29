console.log(varVariable);   //output: undefined
//console.log(letVariable);   output: fehler



if (true) {
    var varVariable = "This is true";
}

var varVariable = "false";
var varVariable = "true";       // var kann neu deklariert werden

console.log(varVariable);


if (true) { 
    let letVariable = "This is true";
    console.log(letVariable);
}

let letVariable = "true";       //block-scope
//let letVariable = "false";    let kann nicht neu deklariert werden!

console.log(letVariable);




const constVariable = 1;    //block-scope
var varVariable = 1;        //function-scope

//constVariable = 2;        const Werte können nicht geändert werden (Ausnahme: Objekte)	
varVariable = 2;