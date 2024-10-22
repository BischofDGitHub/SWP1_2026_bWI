/*
let field = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
*/

let field = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
]   

field[0][1] = 1;
field[1][1] = 2;

function printField() {
    for (let row = 0; row < field.length; row++) {
        let actualRow = field[row];
        let output = "";
        for (let col = 0; col < actualRow.length; col++) {
            let sign = " ";
            if (actualRow[col] == 1) {
                sign = "X";
            }
            else if (actualRow[col] == 2) {
                sign = "O";
            }
            output += sign + " | ";
        }
        console.log(output);
    }
}

printField();