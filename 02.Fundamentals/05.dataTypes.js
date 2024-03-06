// A value in JavaScript is always of a certain type. For example, a string or a number.


/*
There are total 7 types of primitive data types:
1. Number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
2. Bigint for integer numbers of arbitrary length.
3. String for strings. A string may have zero or more characters, there’s no separate single-character type.
4. Boolean for true/false.
5. Null for unknown values – a standalone type that has a single value null.
6. Undefined for unassigned values – a standalone type that has a single value undefined.
7. Symbol for unique identifiers.
,
and one non-primitive data type:
8. Object for more complex data structures.

*/
let age = 24;
let message = "hello world";
let value = BigInt(23341414);
let valid = true;
let children = null;
let salary = undefined;
let items = [1, 2, 3, 4, 5]
let car = {
    name: "Audi",
    model: 'v8',
    topSpeed: 240,
}

// To check type of a variable, we can use typeof operator, which returns the type of the variable/operand.

console.log(typeof age)
// can also be written as console.log(typeof(age))

console.log(typeof message)
console.log(typeof value)
console.log(typeof valid)
console.log(typeof children)
console.log(typeof salary)
console.log(typeof items) // will give object
console.log(typeof car)

