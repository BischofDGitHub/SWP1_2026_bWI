//Use long and descriptive names. Their name should say what they do.

function email(user) {
    // implementation
}
//bad example



function sendEmailUser(emailAddress) {
    // implementation
}
//good example



//Avoid a long number of arguments
function getProducts(fields, fromDate, toDate) {
    // implementation
}
//bad example
  


function getProducts({ fields, fromDate, toDate }) {
    // implementation
}
  
  getProducts({
    fields: ['id', 'name', 'price', 'units'],
    fromDate: '2020-07-01',
    toDate: '2020-07-22'
  });
//good example
  


//use default arguments
function multiply(a, b = 1) {
    return a * b;
  }
  
  console.log(multiply(5, 2));
  // Expected output: 10
  
  console.log(multiply(5));
// Expected output: 5

//ein default argument ist ein argument mit einem default wert, wenn kein wert zugeteilt wird
//oder wenn ein argument undefined ist




//Avoid executing multiple actions within a single function
function notifyUsers(users) {
    users.forEach(user => {
      const userRecord = database.lookup(user);
      if (userRecord.isVerified()) {
        notify(user);
      }
    });
}
//bad example
  


function notifyVerifiedUsers(users) {
    users.filter(isUserVerified).forEach(notify);
  }
  
  function isUserVerified(user) {
    const userRecord = database.lookup(user);
    return userRecord.isVerified();
}
//good example
  



//Use 'Object.assign’ to set default objects
const shapeConfig = {
    type: "circle",
    width: 150,
    height: null
  };
  
  function createShape(config) {
    config.type = config.type || "circle";
    config.width = config.width || 300;
    config.height = config.height || 300;
  }
  
createShape(shapeConfig);
//bad example
  



const shapeConfiguration = {
    type: "circle",
    width: 150
    // Exclude the 'height' key
  };
  
  function createShape(config) {
    config = Object.assign(
      {
        type: "circle",
        width: 300,
        height: 300
      },
      config
    );
    //...
  }
    
createShape(shapeConfiguration);
//good example
  



//Don’t use flags as parameters because they are telling you that the function is doing more than it should
function createFile(name, isPublic) {
    if (isPublic) {
      fs.create(`./public/${name}`);
    } else {
      fs.create(name);
    }
}
//bad example




function createFile(name) {
    fs.create(name);
  }
  
  function createPublicFile(name) {
    createFile(`./public/${name}`);
}
//good example
  



//Don’t pollute the Globals
//If you need to extend an existing object use ES Classes and inheritance instead of creating the function
//on the prototype chain of the native object.
Array.prototype.myFunction = function myFunction() {
    // implementation
};
//bad example
  



class SuperArray extends Array {
    myFunc() {
      // implementation
    }
}
//good example
  
