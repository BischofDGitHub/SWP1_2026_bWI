// avoid negative conditions
function isPostNotPublished(post) {
    // implementation
  }
if (!isPostNotPublished(post)) {
    // implementation
}
// bad example  



function isPostPublished(user) {
    // implementation
  }
  if (isPostPublished(user)) {
    // implementation
}
// good example




// Use this approach only for boolean values and if you are sure that the value will not be undefined or null
if (isValid === true) {
    // do something...
  }
  if (isValid === false) {
    // do something...
}
// bad example


if (isValid) {
    // do something...
  }
  if (!isValid) {
    // do something...
}
// good example





//Avoid conditionals whenever possible
//Use polymorphism and inheritance instead.
class Dog {
    // ...
    getBreed() {
      switch (this.type) {
        case "GermanShepherd":
          return this.getStandardSize("GermanShepherd");
        case "JackRussellTerrier":
          return this.getStandardSize("JackRussellTerrier");
        case "ShibaInu":
          return this.getStandardSize("ShibaInu");
      }
    }
}
// bad example







class Doggo {
    // ...
  }
  
  class GermanShepherd extends Doggo {
    // ...
    getStandardSize() {
      return this.standardSize;
    }
  }
  
  class JackRussellTerrier extends Doggo {
    // ...
    getSize() {
      return this.standardSize;
    }
  }
  
  class ShibaInu extends Doggo {
    // ...
    getSize() {
      return this.standardSize;
    }
}
  
// good example