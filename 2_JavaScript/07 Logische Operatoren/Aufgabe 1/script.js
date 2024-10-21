//Gib Werte zwichen -100 und 100 ein
let value1 = 23124;
let value2 = 0;
let sum = 0;

/*do {
    value1 = prompt("Enter number between -100 and 100: ",  1)
}    
while(value1 < 101 && value1 > -101);

do {
    value2 = prompt("Enter number between -100 and 100: ",  4)
}    
while(value1 < 101 && value1 > -101);*/

if (value1 < -100){
    value1 = -100;
}
else if (value1 > 100){
    value1 = 100;
}

if (value2 < -100){
    value2 = -100;
}
else if (value2 > 100){
    value2 = 100;
}


if (value1 < value2){
    for (count = value1; count <= value2; count++){
        if (count % 2 == 0)
        {
            sum = sum + count;
        }
    }
    console.log("The sum of all numbers divisible by 2 between " + value1 + " and " + value2 + " is " + sum);
}
else if (value1 > value2){
    for (count = value2; count <= value1; count++){
        if (count % 2 == 0)
        {
            sum = sum + count;
        }
    }
    console.log("The sum of all numbers divisible by 2 between " + value2 + " and " + value1 + " is " + sum);
}
else {
    if (value1 % 2 == 0)
    {
        sum = value1;
        console.log(value1 + " is divisible by 2 so the sum is " + sum);
    }
    else {
        console.log(value1 + " is not divisible by 2 so the sum is " + sum);
    }
}
