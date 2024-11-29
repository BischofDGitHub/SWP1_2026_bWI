/*
Classes are the new syntactic sugar in JavaScript.

Everything works just as it did before with prototype only it now looks different and you should prefer them over 
ES5 plain functions.
*/



const Product = function (name) {
if (!(this instanceof Product)) {
    throw new Error("Instantiate Product with `new` keyword");
}
this.name = name;
};

Product.prototype.getSize = function getSize() { /**/ };

const Tshirt = function(name, color) {
if (!(this instanceof Tshirt)) {
    throw new Error("Instantiate Tshirt with `new` keyword");
}
Product.call(this, name);
this.color = color;
};

Tshirt.prototype = Object.create(Product.prototype);
Tshirt.prototype.constructor = Tshirt;
Tshirt.prototype.printColor = function printColor() { /**/ };
  
// bad example





class Product2 {

constructor(name) {
    this.name = name;
}

getDiscount() {
    /* ... */
}
}

class Tshirt2 extends Product2 {

constructor(name, color) {
    super(name);
    this.color = color;
}

getSize() {
    /* ... */
}
}


// good example







/*
Use method chaining
Many libraries such as jQuery and Lodash use this pattern.

As a result, your code will be less verbose.

In your class, simply return this at the end of every function, and you can chain further class methods onto it.
*/

class Product3 {

    constructor(name) {
        this.name = name;
    }

    setPrice(price) {
        this.price = price;
    }

    setUnits(units) {
        this.units = units;
    }

    save() {
        console.log(this.name, this.price, this.units);
    }
}

const product3 = new Product3("Bag");

product3.setPrice(23.99);
product3.setUnits(12);
product3.save();
// bad example








class Product4 {

constructor(name) {
    this.name = name;
}

setName(name) {
    this.name = name;
    // Return this for chaining
    return this;
}

setPrice(price) {
    this.price = price;
    // Return this for chaining
    return this;
}

save() {
    console.log(this.name, this.price, this.units);
    // Return this for chaining
    return this;
}
}

const product4 = new Product4("T-Shirt")
    .setName("Jeans")
    .setAge(31.99)
    .save();
// good example