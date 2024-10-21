
//Berechne die Summe der geraden durch die Summe der ungeraden Zahlen

function sumDivision(data) {
    let sumUneven = 0;
    let sumEven = 0;
    
    for(index = 0; index < data.length; index++)
    {
        if(data[index] % 2 == 0) {
            sumEven = sumEven + data[index];
        }
        else {
            sumUneven = sumUneven + data[index];
        }
    }

    console.log("Die Summe der geraden Zahlen durch die Summe der ungeraden Zahlen ist: " + sumEven/sumUneven);
}

let data = [1,2,3,4,5,6,7,8,9,10,11,12];

sumDivision(data);