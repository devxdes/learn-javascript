///// String Conversion
let value = true;
console.log(typeof value); // boolean

value = String(value); // now value is a string

console.log(typeof value); // string  

// String conversion is mostly obvious. A false becomes "false", null becomes "null", etc.



///// Numeric Conversion

let string = "123";
console.log(typeof string); // string

let num = Number(string); // becomes a number 123

console.log(typeof num); // number


// If the string is not a valid number, the result of such a conversion is NaN. For instance:

let age = Number("an arbitrary string instead of a number");

console.log(age); // NaN, conversion failed


///// Boolean Conversion


console.log(Boolean(1)); // true
console.log(Boolean(0)); // false

console.log(Boolean("hello")); // true
console.log(Boolean("")); // false






