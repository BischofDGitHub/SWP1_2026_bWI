/*
Write a program that prints the temperature closest to 0 among input data. If two numbers are equally close to zero, positive integer has to be considered closest to zero (for instance, if the temperatures are -5 and 5, then display 5).

Input
5 1 -2 -8 4 5
Output
1
*/



let arr = [0, 5, -2, 2, -8, 4, 5, -1];
let lowest = arr[0];

for (let index = 0; index < arr.length; index++) {
    if(Math.abs(arr[index]) == Math.abs(lowest)) {
        if(arr[index] > 0) {
            lowest = arr[index];
        }
    }
    else if(Math.abs(arr[index]) < Math.abs(lowest)) { 
        lowest = arr[index];
    }   
}

console.log(lowest);