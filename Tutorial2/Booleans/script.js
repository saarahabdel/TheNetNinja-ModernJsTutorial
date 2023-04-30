// booleans & comparisons 
console.log(true, false, "true", "false");

// use booleans to evaluate conditions 

// methods can return booleans 
let email = 'luigi@thenetninja.co.uk';

// will return true if email contains @ symbol
let result = email.includes('@');
console.log(result);

// will return false if email doesnt contain '!'
let result1 =  email.includes('!');
console.log(result1);

// check if a name is in an array
let names = ['mario', 'luigi', 'toad'];
let result2 = names.includes('luigi');
console.log(result2);



// Comparison Operators 
let age = 25;

// evaluates to true
console.log(age == 25);

// evaluates to false 
console.log(age == 30);

// evaluates to true 
console.log(age != 30);

// evaluates to true 
console.log(age > 20);

// evaluates to false 
console.log(age < 20);

// evaluates to true 
console.log(age <= 25);

// evaluates to true 
console.log(age >= 25);


let name = 'shaun';
console.log(name == 'shaun');
console.log(name == 'Shaun');

// evaluates to true because s comes after c in alphabet
console.log(name > 'crystal');

// evaluates to true bc a lowercase letter is greater than uppercase letter
console.log(name > 'Shaun');

// evaluates to true bc s still comes before c even though c is capital
console.log(name > 'Crystal');


let age1 = 25;

// Loose Comparison (diff types can still be equal)

console.log(age1 == 25);
// js converts the string 25 into a number before it evaluates it
console.log(age1 == '25');

// Strict Comparison (diff types cant be equal)

console.log(age1 === 25);
// no type conversion
console.log(age1 === '25'); 


// Type Conversion 
let score = '100';
console.log(score + 1);

score = Number(score);
console.log(score + 1);

console.log(typeof score);


let result3 = String(50);
console.log(result3, typeof result3);

// 100 is a truthy value (positive and negative numbers are all truthy numbers)
// 0 is a falsey value 
let result4 = Boolean(100);
console.log(result4, typeof result4);

// all strings are truthys 
// empty strings are falsys 
let result5 = Boolean('0');
console.log(result5, typeof result5);
