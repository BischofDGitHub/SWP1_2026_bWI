/*
let element = document.getElementById("content").innerHTML = "tolle Sache";
element.innerHTML = "tolle Sache";
console.log(element);
*/


function inputClear(event) {
    document.getElementById(event.target.id).value = "";

    /* 
    let element = document.getElementById(event.target.id).value;
    if (isNaN(parseFloat(element))) {
        element = "";
    }
    */
}   

function clearNumbers() {
    document.getElementById("number1").value = "";
    //document.getElementById("number2").value = "";
}

function additionClicked() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Bitte gib Werte zur Berechnung ein!";
    }   
    else {
        let result = num1 + num2;
        document.getElementById("output").innerText = "Das Ergebnis von " + num1 + " + " + num2 + " ist " + result;
        clearNumbers();
    }

    document.getElementById("operation").innerText = "+";
}


function subtractionClicked() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Bitte gib Werte zur Berechnung ein!";
    }   
    else {
        let result = num1 - num2;
        document.getElementById("output").innerText = "Das Ergebnis von " + num1 + " - " + num2 + " ist " + result;
        clearNumbers();
    }

    document.getElementById("operation").innerText = "-";
}


function multiplicationClicked() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Bitte gib Werte zur Berechnung ein!";
    }   
    else {
        let result = num1 * num2;
        document.getElementById("output").innerText = "Das Ergebnis von " + num1 + " * " + num2 + " ist " + result;
        clearNumbers();
    }

    document.getElementById("operation").innerText = "*";
}


function divisionClicked() {
    let num1 = parseFloat(document.getElementById("number1").value);
    let num2 = parseFloat(document.getElementById("number2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("output").innerText = "Bitte gib Werte zur Berechnung ein!";
    }
    else if (num2 == 0) {
        document.getElementById("output").innerText = "Das Ergebnis von " + num1 + " / " + num2 + " ist undefiniert!";
    }
    else {
        let result = num1 / num2;
        document.getElementById("output").innerText = "Das Ergebnis von " + num1 + " / " + num2 + " ist " + result;
        clearNumbers();
    }

    document.getElementById("operation").innerText = "/";
}