// Task 1:
// Implement the removeProperty function which takes an object and property name, and does the following:
// If the object obj has a property prop, the function removes the property from the object and returns true; in all other cases it returns false.
// Create test functions that print out the result, state the expected result in a comment with the printout call.

function removeProperty(obj, prop) {
  if(obj.hasOwnProperty(prop)){
    delete obj[prop];
    return true;
  }
    return false;
  }
 let person = {name : "hi", sex : "male"};

  console.log(removeProperty(person,"h"));
  console.log(person);