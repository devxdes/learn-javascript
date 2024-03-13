///// Loops: while and for

/*
    We often need to repeat actions.
    Loops are a way to repeat the same code multiple times.
 */

///// The “while” loop

// The while loop has the following syntax:

while (condition) {
    // code
    // so-called "loop body"
}

// While the condition is truthy, the code from the loop body is executed.

// For instance, the loop below outputs i while i < 3:
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
    console.log(i);
    i++;
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

// If i++ was missing from the example above, the loop would repeat (in theory) forever. In practice, the browser provides ways to stop such loops, and in server-side JavaScript, we can kill the process.

// Any expression or variable can be a loop condition, not just comparisons: the condition is evaluated and converted to a boolean by while.

// For instance, a shorter way to write while (i != 0) is while (i):
let index = 3;
while (index) { // when i becomes 0, the condition becomes falsy, and the loop stops
    console.log(index);
    index--;
}

// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:
while (index) console.log(i--);


///// The “do…while” loop

// The condition check can be moved below the loop body using the do..while syntax:

do {
    // loop body
} while (condition);

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

let value = 0;
do {
    console.log(value);
    value++;
} while (value < 3);

// This form of syntax should only be used when you want the body of the loop to execute at least once regardless of the condition being truthy. Usually, the other form is preferred: while(…) {…}.

///// The “for” loop

// The for loop is more complex, but it’s also the most commonly used loop.

// The “for” loop syntax:
for (begin; condition; step) {
    // ... loop body ...
}

// Let’s learn the meaning of these parts by example.The loop below runs console.log(i) for i from 0 up to(but not including) 3:

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    console.log(i);
}

/* 
    Let’s examine the for statement part-by-part:

    begin	    let i = 0	Executes once upon entering the loop.
    condition	i < 3	Checked before every loop iteration. If false, the loop stops.
    body	    console.log(i)	Runs again and again while the condition is truthy.
    step	    i++	Executes after the body on each iteration.

*/

// Inline variable declaration
// Here, the “counter” variable i is declared right in the loop. This is called an “inline” variable declaration. Such variables are visible only inside the loop.

// Instead of defining a variable, we could use an existing one:

for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}
console.log(i); // error, no such variable

// Skipping parts

// Any part of for can be skipped.

// For example, we can omit begin if we don’t need to do anything at the loop start.

for (; i < 3; i++) { // no need for "begin"
    console.log(i); // 0, 1, 2
}

// We can also remove the step part:

for (; i < 3;) {
    console.log(i++);
}

// We can actually remove everything, creating an infinite loop:

/* 
for (; ;) {
    // repeats without limits
    }
 */


///// Breaking the loop

// Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

let sum = 0;

while (true) {

    let value = +prompt("Enter a number", '');

    if (!value) break; // (*)

    sum += value;

}
alert('Sum: ' + sum);

// The break directive is activated at the line (*) if the user enters an empty line or cancels the input. It stops the loop immediately, passing control to the first line after the loop. Namely, alert.

///// Continue to the next iteration

// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;

    alert(i); // 1, then 3, 5, 7, 9
}
// The continue directive helps decrease nesting

/* 
    No break/continue to the right side of ‘?’

    Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.
*/


///// Labels for break/continue

// Sometimes we need to break out from multiple nested loops at once.

for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // what if we want to exit from here to Done (below)?
    }
}

alert('Done!');

/* 
    The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

    A label is an identifier with a colon before a loop:
    labelName: for (...) {
     ...
}
*/

// The break <labelName> statement in the loop below breaks out to the label:

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');

        // if an empty string or canceled, then break out of both loops
        if (!input) break outer; // (*)

        // do something with the value...
    }
}

alert('Done!');


/// Summary

/* 
    We covered 3 types of loops:

    while       – The condition is checked before each iteration.
    do..while   – The condition is checked after each iteration.
    for (;;)    – The condition is checked before each iteration, additional settings available.


    To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

    If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

    break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.
*/
