/*
    We know many comparison operators from maths.

    In JavaScript they are written like this:

    - Greater/less than: a > b, a < b.
    - Greater/less than or equals: a >= b, a <= b.
    - Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
    - Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

    Boolean is the result
    All comparison operators return a boolean value:

    - true – means “yes”, “correct” or “the truth”.
    - false – means “no”, “wrong” or “not the truth”.
 */

console.log(2 > 1);  // true (correct)
console.log(2 == 1); // false (wrong)
console.log(2 != 1); // true (correct)

// A comparison result can be assigned to a variable, just like any value:

let result = 5 > 4; // assign the result of the comparison
console.log(result); // true

///// String comparison

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter

/* 
    The algorithm to compare two strings is simple:

    1. Compare the first character of both strings.
    2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
    3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
    4. Repeat until the end of either string.
    5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

*/

console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true
/* 

In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

G is the same as G.
l is the same as l.
o is greater than e. Stop here. The first string is greater.

*/


///// Comparison of different types

console.log('2' > 1); // true, string '2' becomes a number 2
console.log('01' == 1); // true, string '01' becomes a number 1

///// Strict equality

// A regular equality check == has a problem. It cannot differentiate 0 from false:

console.log(0 == false); // true
console.log('' == false); // true

// A strict equality operator === checks the equality without type conversion.

console.log(0 === false); // false, because the types are different


///// Comparison with null and undefined

// For a strict equality check ===
console.log(null === undefined); // false

// For a non-strict check ==
console.log(null == undefined); // true


// For maths and other comparisons < > <= >=
console.log(null > 0);  // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

// An incomparable undefined
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

/* 
    Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
    
    The equality check (3) returns false because undefined only equals null, undefined, and no other value.

*/
