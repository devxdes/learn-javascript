///// Nullish coalescing operator '??'

// The nullish coalescing operator is written as two question marks ??.

/* 
    The result of a ?? b is:

    1. if a is defined, then a,
    2. if a isn’t defined, then b.

    In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

    We can rewrite result = a ?? b using the operators that we already know, like this:

*/

let result = (a !== null && a !== undefined) ? a : b;

// For example, here we show user if its value isn’t null/undefined, otherwise Anonymous:

let user;
console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

// We can also use a sequence of ?? to select the first value from a list that isn’t null/undefined.

let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

// shows the first defined value:
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

///// Comparison with ||

// The OR || operator can be used in the same way as ??, as it was described in the previous chapter.

// shows the first truthy value:
console.log(firstName || lastName || nickName || "Anonymous"); // SuperCoder


/* 
    The important difference between them is that:

    1. || returns the first truthy value.
    2. ?? returns the first defined value.

    In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values. If any of these is the first argument of ||, then we’ll get the second argument as the result.

*/
let value = 0;

console.log(value || 100); // 100
console.log(value ?? 100); // 0

/*
    The value || 100 checks value for being a falsy value, and it’s 0, falsy indeed.
    so the result of || is the second argument, 100.

    The value ?? 100 checks value for being null/undefined, and it’s not,
    so the result is height “as is”, that is 0.

*/


///// Precedence

/* 
    The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.

    That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, but after most other operations, such as +, *.

    So we may need to add parentheses in expressions like this:
 */

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000

// Otherwise, if we omit parentheses, then as * has the higher precedence than ??, it would execute first, leading to incorrect results.

///// Using ?? with && or ||

// Due to safety reasons, JavaScript forbids using ?? together with && and || operators, unless the precedence is explicitly specified with parentheses.

let x = 1 && 2 ?? 3; // Syntax error


let y = (1 && 2) ?? 3; // Works

alert(y); // 2


// The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

// It’s used to assign default values to variables:

// The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

// It’s forbidden to use it with || or && without explicit parentheses.


