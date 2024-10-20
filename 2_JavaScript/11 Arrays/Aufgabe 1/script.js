/*
The program:
The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

Your task is to count how many times the symbols A, C, G and T appear in the string s.


INPUT:
A single line, composed of A, C, G and T.
OUTPUT:
The number of times A, C, G and T appear in the string s, separated by a space.
CONSTRAINTS:
0 < len(s) < 1000
EXAMPLE:
Input
AACT
Output
2 1 0 1
*/

function DNAcount(s) {
    let arrChars = ['A', 'C', 'G', 'T'];
    let arrCount = [0, 0, 0, 0];
    
    while(s.length > 100) {
        s = s.slice(0, -1);
    }

    for (let index = 0; index < s.length; index++) {
        switch(s[index]) {
            case arrChars[0]:
                arrCount[0]++;
                break;
            case arrChars[1]:
                arrCount[1]++;    
                break;
            case arrChars[2]:
                arrCount[2]++;
                break;
            case arrChars[3]:
                arrCount[3]++;
                break;
            default:
                break;
        }
        
    }

    console.log(arrChars[0] + " " + arrChars[1] + " " + arrChars[2] + " " + arrChars[3]);
    console.log(arrCount[0] + " " + arrCount[1] + " " + arrCount[2] + " " + arrCount[3]);
}

let s = "ATGCTTCAGAAAAGGTCAGCG";


DNAcount(s);
