/*Write a program that prints the numbers from 1 to 222 except for multiples of 5 where you have to print "Foo"
and for the multiples of 7 where you have to print "Bar". For numbers which are multiples of both 5 and 7 print "FooBar".*/


value = 36;

for (let index = 0; index <= value; index++) {
    if(index % 5 == 0 && index % 7 == 0){
        console.log("FooBar");
    }
    else if(index % 7 == 0){
        console.log("Bar");
    }
    else if(index % 5 == 0){
        console.log("Foo");
    }
    else {
        console.log(index);
    }
}




/*
for (let index = 0; index <= value; index++) {
    switch (true) {
        case (index % 5 == 0 && index % 7 == 0):
            console.log("FooBar");
            break;
        case (index % 7 == 0):
            console.log("Bar");
            break;
        case (index % 5 == 0):
            console.log("Foo");
            break;
        default:
            console.log(index);
    }
}
*/