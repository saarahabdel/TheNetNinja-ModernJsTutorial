// browser automatically gives a value of undefined bc we havent given the variable a value
let age; 

console.log(age, age + 3, `the age is ${age}`);

// we explicitly say the variable doesnt have a value (or it has a value of null)
// null equates to 0 as a number
let age1 = null;
console.log(age1, age1 + 3, `the age is ${age1}`);