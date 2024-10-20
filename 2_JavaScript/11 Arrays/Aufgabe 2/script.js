/*
The program:
Invertiere eine Bitfolge


EXAMPLE:
Input
000111000
Output
111000111
*/

function invertBitString(bitString) {
    let bitStringArr = [];
    for (let index = 0; index < bitString.length; index++) {
        bitStringArr[index] = bitString[index];    
    }

    for (let index = 0; index < bitStringArr.length; index++) {
        if (bitStringArr[index] == "0") {
            bitStringArr[index] = "1";
        }
        else {
            bitStringArr[index] = "0";
        }
    }

    bitString = "";

    for (let index = 0; index < bitStringArr.length; index++) {
        bitString = bitString + bitStringArr[index];
    }
    
    return bitString;
}

let bitString = "00101101";

console.log(bitString);
console.log(invertBitString(bitString));