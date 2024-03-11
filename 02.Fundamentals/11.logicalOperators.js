///// Logical operators


/* 
    There are four logical operators in JavaScript: 
    || (OR), 
    && (AND), 
    ! (NOT), 
    ?? (Nullish Coalescing)
    
    Here we cover the first three, the ?? operator is in the next article.
*/


///// || (OR)

// The “OR” operator is represented with two vertical line symbols:
let result;

result = a || b;

/* 
    In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

    In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.


*/

// There are four possible logical combinations:

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false

// As we can see, the result is always true except for the case when both operands are false.


// If an operand is not a boolean, it’s converted to a boolean for the evaluation. For instance, the number 1 is treated as true, the number 0 as false:

if (1 || 0) { // works just like if( true || false )
    console.log('truthy!');
}

// Most of the time, OR || is used in an if statement to test if any of the given conditions is true.

let hour = 9;

if (hour < 10 || hour > 18) {
    console.log('The office is closed.');
}

// OR "||" finds the first truthy value
result = value1 || value2 || value3;

/* 
    The OR || operator does the following:

    1. Evaluates operands from left to right.
    2. For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
    3. If all operands have been evaluated (i.e. all were false), returns the last operand.
*/

console.log(1 || 0); // 1 (1 is truthy)

console.log(null || 1); // 1 (1 is the first truthy value)
console.log(null || 0 || 1); // 1 (the first truthy value)

console.log(undefined || null || 0); // 0 (all falsy, returns the last value)


// This leads to some interesting usage compared to a “pure, classical, boolean-only OR”.

// 1.Getting the first truthy value from a list of variables or expressions.

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder


// 2.Short-circuit evaluation.

// Another feature of OR || operator is the so-called “short-circuit” evaluation.

/* 
    It means that || processes its arguments until the first truthy value is reached, and then the value is returned immediately, without even touching the other argument.

    The importance of this feature becomes obvious if an operand isn’t just a value, but an expression with a side effect, such as a variable assignment or a function call.

*/

true || console.log("not printed");
false || console.log("printed");



////// && (AND)
// The AND operator is represented with two ampersands &&:

// In classical programming, AND returns true if both operands are truthy and false otherwise:

console.log(true && true);   // true
console.log(false && true);  // false
console.log(true && false);  // false
console.log(false && false); // false


// An example with if:

let currentHour = 12;
let currentMinute = 30;

if (currentHour == 12 && currentMinute == 30) {
    console.log('The time is 12:30');
}

// Just as with OR, any value is allowed as an operand of AND:

if (1 && 0) { // evaluated as true && false
    console.log("won't work, because the result is falsy");
}

///// AND “&&” finds the first falsy value
// result = value1 && value2 && value3;

// if the first operand is truthy,
// AND returns the second operand:
console.log(1 && 0); // 0
console.log(1 && 5); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
console.log(null && 5); // null
console.log(0 && "no matter what"); // 0

// We can also pass several values in a row. See how the first falsy one is returned:
console.log(1 && 2 && null && 3); // null

// When all values are truthy, the last value is returned:
console.log(1 && 2 && 3); // 3, the last one

// Precedence of AND && is higher than OR ||

/* 
    The precedence of AND && operator is higher than OR ||.

    So the code a && b || c && d is essentially the same as if the && expressions were in parentheses: (a && b) || (c && d).
*/

// Don’t replace if with || or &&

// Sometimes, people use the AND && operator as a "shorter way to write if".

let x = 1;

(x > 0) && console.log('Greater than zero!');

if (x > 0) console.log('Greater than zero!');

// ! (NOT)

// The boolean NOT operator is represented with an exclamation sign !.

// The syntax is pretty simple:
// result = !value;


/* 
    The operator accepts a single argument and does the following:
    1. Converts the operand to boolean type: true/false.
    2. Returns the inverse value.

*/

// For instance:

console.log(!true); // false
console.log(!0); // true

// A double NOT !! is sometimes used for converting a value to boolean type:

console.log(!!"non-empty string"); // true
console.log(!!null); // false

// There’s a little more verbose way to do the same thing – a built-in Boolean function:
console.log( Boolean("non-empty string") ); // true
console.log( Boolean(null) ); // false

// The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.
