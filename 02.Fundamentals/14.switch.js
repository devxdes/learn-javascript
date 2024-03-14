///// The "switch" statement

/* 
    A switch statement can replace multiple if checks.

    It gives a more descriptive way to compare a value with multiple variants.

    The switch has one or more case blocks and an optional default.

*/

// The syntax

/* 
    switch (x) {
    case 'value1':  // if (x === 'value1')
    //   ...
    //     [break]

    case 'value2':  // if (x === 'value2')
    //   ...
    //     [break]

    default:
    //   ...
    //     [break]
} 
*/

// An Example 

let value = 2 + 2;

switch (value) {
    case 3:
        console.log('Too small');
        break;
    case 4:
        console.log('Exactly!');
        break;
    case 5:
        console.log('Too big');
        break;
    default:
        console.log("I don't know such values");
}


// Any expression can be a switch/case argument

let a = "1";
let b = 0;

switch (+a) {
    case b + 1:
        console.log("this runs, because +a is 1, exactly equals b+1");
        break;

    default:
        console.log("this doesn't run");
}


// Grouping of “case”

let sum = 3;

switch (a) {
    case 4:
        console.log('Right!');
        break;

    case 3: // (*) grouped two cases
    case 5:
        console.log('Wrong!');
        console.log("Why don't you take a math class?");
        break;

    default:
        console.log('The result is strange. Really.');
} // Now both 3 and 5 show the same message.


// Type matters

// Let’s emphasize that the equality check is always strict. The values must be of the same type to match.

let arg = console.log("Enter a value?");
switch (arg) {
    case '0': // type string
    case '1': // type string
        console.log('One or zero');
        break;

    case '2': // type string
        console.log('Two');
        break;

    case 3: // type number
        console.log('Never executes!');
        break;
    default:
        console.log('An unknown value');
}