const arr = [ 1, 2, 3 ];

// to get the prototype of anything
console.log(arr.__proto__);
console.log(Object.getPrototypeOf(arr));


// all types have a prototype
const str = 'hello';
const num = 111;
const bool = true;

console.log(Object.getPrototypeOf(str));
console.log(Object.getPrototypeOf(num));
console.log(Object.getPrototypeOf(bool));


// we can modify prototypes (they are just objects)
String.prototype.greet = function() {
  return 'Hello! I am string.';
}