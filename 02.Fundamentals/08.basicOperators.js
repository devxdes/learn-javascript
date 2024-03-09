/* 
 We know many operators from school.They are things like addition +, multiplication *, subtraction -, and so on.


 In this chapter, we’ll start with simple operators, then concentrate on JavaScript - specific aspects, not covered by school arithmetic.

    Terms: “unary”, “binary”, “operand”
 */


// An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.


// An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:


let value = 1;
value = -value;
console.log(value); // -1, unary negation was applied



// An operator is binary if it has two operands. The same minus exists in binary form as well:

let x = 1, y = 3;
console.log(y - x); // 2, binary minus subtracts values


///// Maths

/* 
The following math operations are supported:

1.Addition +,
2.Subtraction -,
3.Multiplication *,
4.Division /,
5.Remainder %,
6.Exponentiation **.


The first four are straightforward, while % and ** need a few words about them.

*/

///// Remainder %

console.log(5 % 2); // 1, the remainder of 5 divided by 2
console.log(8 % 3); // 2, the remainder of 8 divided by 3
console.log(8 % 4); // 0, the remainder of 8 divided by 4



///// Exponentiation **

console.log(2 ** 2); // 2² = 4
console.log(2 ** 3); // 2³ = 8
console.log(2 ** 4); // 2⁴ = 16


///// String concatenation with binary +

let text = "my" + "string";
console.log(text); // Output : mystring

// Note that if any of the operands is a string, then the other one is converted to a string too.

console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"


console.log(2 + 2 + '1'); // "41" and not "221"

console.log('1' + 2 + 2); // "122" and not "14"


///// Numeric conversion, unary +

// No effect on numbers
let num1 = 1;
console.log(+num1); // 1

let num2 = -2;
console.log(+num2); // -2

// Converts non-numbers - It actually does the same thing as Number(...), but is shorter.

console.log(+true); // 1
console.log(+"");   // 0


let apples = "2";
let oranges = "3";

console.log(apples + oranges); // "23", the binary plus concatenates strings

// both values converted to numbers before the binary plus
console.log(+apples + +oranges); // 5

// the longer variant
// console.log( Number(apples) + Number(oranges) ); // 5


///// Assignment

let val = 2 * 2 + 1;

console.log(val); // 5

// Assignment = returns a value

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

// Chaining Assignments

let n1, n2, n3;

n1 = n2 = n3 = 2 + 2;

console.log(n1); // 4
console.log(n2); // 4
console.log(n3); // 4


// Modify-in-place

// We often need to apply an operator to a variable and store the new result in that same variable.

let nx = 2;
nx = nx + 5;
nx = nx * 2;

// Th3 above notation can be shortened using the operators += and *=:

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

console.log(n); // 14

// Short “modify-and-assign” operators exist for all arithmetical and bitwise operators: /=, -=, etc.


///// Increment/decrement

// Increment ++ increases a variable by 1:
let counter = 2;
counter++;        // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

// Decrement -- decreases a variable by 1:
counter--;        // works the same as counter = counter - 1, but is shorter
console.log(counter); // 1

/* 
   Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

   The operators ++ and -- can be placed either before or after a variable.

   When the operator goes after the variable, it is in “postfix form”: counter++.

   The “prefix form” is when the operator goes before the variable: ++counter.

 */
// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:


let count = 0;

// If we’d like to increase a value and immediately use the result of the operator, we need the prefix form:
console.log(++counter); // 1


// If we’d like to increment a value but use its previous value, we need the postfix form:
console.log(counter++); // 0


///// Bitwise operators

/*
   Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

   These operators are not JavaScript-specific. They are supported in most programming languages.


   The list of operators:

   - AND ( & )
   - OR ( | )
   - XOR ( ^ )
   - NOT ( ~ )
   - LEFT SHIFT ( << )
   - RIGHT SHIFT ( >> )
   - ZERO-FILL RIGHT SHIFT ( >>> )

*/


///// Comma

// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

let val_xyz = (1 + 2, 3 + 4);
console.log(val_xyz); // 7 (the result of 3 + 4)


// three operations in one line
for (a = 1, b = 3, c = a * b; a < 10; a++) {
   /// Piece of code here  
}