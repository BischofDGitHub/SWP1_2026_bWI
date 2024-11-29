//assign meaningful names that your future self or another person can easily understand
let daysSLV = 10;

let y = new Date().getFullYear();

let ok;

if (user.age > 30) {
  ok = true;
}
//bad example



const MAX_AGE = 30;

let daysSinceLastVisit = 10;

let currentYear = new Date().getFullYear();


const isUserOlderThanAllowed = user.age > MAX_AGE;
//good example




//dont use more words than needed
let nameValue;
let theProduct;
//bad example


let name;
let product;
//good example





//Don’t enforce the need for memorizing the variable context
const Products = ["T-Shirt", "Shoes", "Watches", "Bags"];

Products.forEach(p => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  // ...
  // What is `p` for?
  register(p);
});
//bad example



const products = ["T-Shirt", "Shoes", "Watches", "Bags"];

products.forEach(product => {
  doSomething();
  doSomethingElse();
  // ...
  // ...
  // ...
  register(product);
});
//good example



//Don’t add unnecessary context

const Prod = {
    productId: 1,
    productName: "T-Shirt",
    productPrice: 8.99,
    productUnits: 12
  };
  
  //...
  
Prod.productName;
//bad example




const prod = {
    id: 1,
    name: "T-Shirt",
    price: 8.99,
    units: 12
  };
  
  //...
  
prod.name;
//good example





//use the same vocabulary for the same type of variable
getUserInfo();
getClientData();
getCustomerRecord();
//bad example





getProduct();
//good example