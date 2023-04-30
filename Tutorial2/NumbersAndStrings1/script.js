// alert('hello, world'); // ; marks the end of a js statement

console.log(1);
console.log(2);

// --------------------------------------------------

// VARIABLES 
// - no spaces between variables
// - only contains letters, numbers, _ , $ 
// - cant start with a number 
// - there are reserved keywords in js like const and let

let age = 25;
let year = 2019;

// log multiple variables at a time
console.log(age, year); 

// reset value of variable 
age = 30;
console.log(age);

// cant reassign value if use const
const points = 100;
console.log(points);


// JAVASCRIPT DATA TYPES (7)

// - number
// - string 
// - boolean 
// - null (explicitly set a variable with no value)
// - undefined (for variables that have not yet been defined) 
// - object (complex data structures, arrays dates literals etc)
// - symbol

// - a variable can hold any data type 

// STRINGS 
console.log('hello, world');

let email1 = 'saarahabdel15@gmail.com';
console.log(email1);

// STRING CONCATENATION 
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// GETTING CHARACTERS

// to get single character from the name 
console.log(fullName[0]);

// STRING PROPERTIES 
// - eg of property would be length 

// string length
console.log(fullName.length);

// STRING METHODS/FUNCTIONS
// - eg. toUpperCase 
// - if you see dot and () , means its a method
console.log(fullName.toUpperCase())

// we can store values returned , in variables
let result1 = fullName.toLowerCase(); 
console.log(result1);

// finds the index of @ inside the string , email
// and returns a value stored inside the variable index
let index = email1.indexOf('@');
console.log(index);

// MORE METHODS 

let email = 'mario@thenetninja.co.uk';

// finds the last intance of n
let result = email.lastIndexOf('n');
console.log(result);

let result2 = email.slice(0,10); // (from which position,to which position)
console.log(result2);

let result3 = email.substring(4,10); // (from which position, count until 10 characters passed) (ie: to character 14)
console.log(result3);

let result4 = email.replace('m', 'w'); // replaces first m with w
console.log(result4);



// NUMBERS 
let radius = 10;
const pi = 3.14;
console.log(radius, pi);

console.log(10 / 2);

let result5 =  radius % 3;
console.log(result5);

let result6 = pi * radius**2;
console.log(result6);

let likes = 10;
likes ++; // adds 1 to likes 
likes --; // minus 1 to likes 
likes += 10; // adds 10 to likes
console.log(likes); 

// NaN - not a number 
console.log(5 / 'hello');

// Concatenate Numbers 
let result7 = 'the blog has ' + likes + ' likes';
console.log(result7);


// TEMPLATE STRINGS/LITERALS
const title = 'Best reads of 2019';
const author = 'Mario';
const likes1 = 30;

// concatenation way 
let result8 = 'The blog called ' + title + ' + author + ' + ' has ' + likes1 + ' likes';
console.log(result8);


// template string way 
let result9 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result9);

// creating html templates 
let html = `
  <h2>${title}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;
console.log(html);








