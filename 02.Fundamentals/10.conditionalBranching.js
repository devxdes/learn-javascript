///// Conditional branching: if, '?'

/* 
    Sometimes, we need to perform different actions based on different conditions.
    
    To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.
*/

///// The “if” statement

let prompt = 'In which year was ECMAScript-2015 specification published?';
let year = 2015;

console.log(prompt);
console.log(year);

if (year == 2015) console.log('You are right!');

if (year == 2015) {
    console.log("That's correct!");
    console.log("You're so smart!");
}

///// Boolean conversion

/* 
    The if (…) statement evaluates the expression in its parentheses and converts the result to a boolean. 

    A number 0, an empty string "", null, undefined, and NaN all become false. Because of that they are called “falsy” values.

    Other values become true, so they are called “truthy”.

*/

// So, the code under this condition would never execute:
if (0) { // 0 is falsy
    /// piece of code here
}

// …and inside this condition – it always will:
if (1) { // 1 is truthy
    /// piece of code here
}


// We can also pass a pre-evaluated boolean value to if, like this:
let cond = (year == 2015); // equality evaluates to true or false

if (cond) {
    /// piece of code here
}

///// The “else” clause

// The if statement may contain an optional else block. It executes when the condition is falsy.

if (year == 2015) {
    console.log('You guessed it right!');
} else {
    console.log('How can you be so wrong?'); // any value except 2015
}


///// Several conditions: “else if”

// Sometimes, we’d like to test several variants of a condition. The else if clause lets us do that.

if (year < 2015) {
    console.log('Too early...');
} else if (year > 2015) {
    console.log('Too late');
} else {
    console.log('Exactly!');
}
// In the code above, JavaScript first checks year < 2015. If that is falsy, it goes to the next condition year > 2015. If that is also falsy, it shows the last console.log.



///// Conditional operator ‘?’

// Sometimes, we need to assign a variable depending on a condition.

let accessAllowed;
let msg = 'How old are you?';
let age = 21;

if (age > 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

console.log(accessAllowed);


// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.

// The syntax is
// let result = condition ? value1 : value2;


// The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

// the comparison operator "age > 18" executes first anyway
// (no need to wrap it into parentheses)
accessAllowed = (age > 18) ? true : false;

console.log(accessAllowed);


// Multiple ‘?’

let ageGroup = 18;

let message = (ageGroup < 3) ? 'Hi, baby!' :
    (ageGroup < 18) ? 'Hello!' :
        (ageGroup < 100) ? 'Greetings!' :
            'What an unusual age!';

console.log(message);


/* 
    It may be difficult at first to grasp what’s going on. But after a closer look, we can see that it’s just an ordinary sequence of tests:

    1. The first question mark checks whether age < 3.
    2. If true – it returns 'Hi, baby!'. Otherwise, it continues to the expression after the colon “:”, checking age < 18.
    3. If that’s true – it returns 'Hello!'. Otherwise, it continues to the expression after the next colon “:”, checking age < 100.
    4. If that’s true – it returns 'Greetings!'. Otherwise, it continues to the expression after the last colon “:”, returning 'What an unusual age!'.

*/


// Non-traditional use of ‘?’
let quiz = 'Which company created JavaScript?';
let company = 'Which company created JavaScript?';

// It’s not recommended to use the question mark operator in this way.
(company == 'Netscape') ?
    console.log('Right!') : console.log('Wrong.');


// Here is the same code using if for comparison:
let question = 'Which company created JavaScript';
let answer = 'Netscape';

if (answer == 'Netscape') {
    console.log('Right!');
} else {
    console.log('Wrong.');
}

// Our eyes scan the code vertically. Code blocks which span several lines are easier to understand than a long, horizontal instruction set.

