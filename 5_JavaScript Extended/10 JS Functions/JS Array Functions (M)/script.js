const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 200 },
  { name: 'Album', price: 10 },
  { name: 'Book', price: 5 },
  { name: 'Phone', price: 500 },
  { name: 'Computer', price: 1000 },
  { name: 'Keyboard', price: 25 }
];

const filterItems = items.filter((item) => {
    console.log(item.price<=100);
    return item.price <= 100;
});
// array.filter erstellt ein neues Array mit allen Werten, die bei der angegebenen Funktion true zurückgeben
// hier: alle items mit einem price unter 101
// array.filter ändert nicht das urprüngliche Array, sondern gibt nur ein neues aus
console.log(filterItems);



const itemNames = items.map((item) => {
    return item.name;
});
// ähnlich wie array.filter gibt array.map ein neues Array mit den Werten der angegebenen Funktion zurück
// hier: ein Array mit allen Namen der items
// auch ähnlich wie bei array.filter wird eine übergabeparameter angefordert, welches jeweils ein Objekt des Arrays ist
console.log(itemNames);



const foundItems = items.find((item) => {
    return item.name === "Book";
});
// Gibt nur das erste Objekt zurück, bei dem die Bedingung erfüllt wird
console.log(foundItems);



items.forEach((item) => {
    console.log(item.name);
});
// array.forEach geht durch jedes Objekt des Arrays und führt die angegebene Funktion für jedes Objekt aus



const hasInexpensiveItems = items.some((item) => {
    return item.name <= 0;
});
// gibt true zurück, wenn mindestens ein Objekt der Bedingung entspricht
// Es kann zum Beispiel überprüft werden, ob das Array Gegenstände hat, die weniger als 100 Euro kosten
console.log(hasInexpensiveItems);




const hasOnlyInexpensiveItems = items.every((item) => {
    return item.price <= 1000;
});
// gibt true terug, wenn alle Objekte der Bedingung entsprechen
// gibt hier also false aus
console.log(hasOnlyInexpensiveItems);




const total = items.reduce((currentTotal, item) => {
    return currentTotal + item.price;
}, 0);
// 0 ist der zweite Parameter von reduce und dient als Startwert
// .reduce iteriert durch jedes Objekt des Arrays und ändert einen einzigen Wert anhand der Funktion,
// die als Parameter angegeben wird
console.log(total);





const numbers = [1, 2, 3, 4, 5];

const includesTwo = numbers.includes(2);
// gibt true zurück, wenn der Wert im Array vorhanden ist und false wenn nicht
console.log(includesTwo);