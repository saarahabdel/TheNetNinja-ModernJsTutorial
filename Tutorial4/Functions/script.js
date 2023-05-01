// FUNCTIONS 
// create reusable blocks of code 

// function declaration 
function greet(){
    console.log('hello there');
}

// call/invoke function 
greet();
greet();
greet();

// function expression 

// always place semi colon after an expression
const speak = function(){
    console.log('good day!');

};

speak();

// HOISTING IN JS
// you can declare a function declaration after calling it (hoisting)
// you cant declare a function expression after calling it 


// arguments & parameters 

// 'name' is a value we want to receive
// creates a local variable called 'name' that we can use inside the code block
const speak1 = function(name = 'luigi', time = 'night'){  // the word 'name' is a parameter
    console.log(`good ${time} ${name}`);
};

speak1(); // returns:  good day undefined 
// to combat this we can give parameters default values

// the word in brackets is an argument
speak1('mario', 'morning'); // returns: good day mario
console.log(name); // wont be accessible bc its outside local scope


// returning values 
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    // return 3.14 * radius**2; (if you dont wanna store in local variable first like above)
    return area; // function returns the area value
};
const a = calcArea(5);
console.log(a);

// reuse value function gives us in another function
const calcVol = function(a){

};

calcVol(a); 


// ARROW FUNCTIONS 

// arrow function version of above calcArea
const calcArea1 = (radius1) => {  // can take away () if there is only one parameter. Leave () if there are no parameters or more than 1
    return 3.14 * radius1**2;
};

// can also be written like this: 
// const calcArea1 = radius1 => 3.14 * radius1**2;

const area1 = calcArea1(5);
console.log('area is:', area1);


// practice arrow functions 

const greet1 = function(){
    return 'hello, world';
};

const greet2 = () => {
    return 'hello, world';
};
const result = greet2();
console.log(result);

// ------------------------------------------- //

// const bill = function(products, tax){
//     let total = 0;
//     for(let i=0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30], 0.2));

// convert to arrow function: 

const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));

// ------------------------------------------ //

// DIFFERENCE BETWEEN FUNCTIONS AND METHODS

// difference in how we call them and where they are defined

const name1 = 'shuan';

// functions 

const greet5 = () => 'hello';
let resultOne = greet5();
console.log(resultOne);

// methods 

// main difference is that we use dot notation
// methods are functions 
// but are associated with an object or data type like a string
// they're defined on a data type or object , functions are not
let resultTwo = name1.toUpperCase();
console.log(resultTwo);

// ------------------------------------------- //

// callbacks & foreach
// passing a function as an argument

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){ // passing a function as an argument
    // do something
    console.log(value);
});

// above as an arrow function:
// myFunc(value => {
//     // do something
//     console.log(value);
// });

// ------------------------------------------------ //

// Using A Built In Array Method (Methods are functions)

let people1 = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// forEach is a method that itterates over an array
// forEach method expects a call back function as an argument in ()

// for each element in the array, the function will run
people1.forEach(function(){
    console.log('something');
});

people1.forEach(function(person1){
    console.log(person1);
});

// above as arrow function:
people1.forEach((person1, index) => {
    console.log(index, person1);
});


// instead of writing the above 
// we can use this callback function as a callback function for the 'forEach' method
// instead of defining it in the method we can define it in a separate function then call the function back, inside a method
const logPerson = (person1, index) => {
    console.log(`${index} - hello ${person1}`);
};
people1.forEach(logPerson);


// ------------------------------------------------- //

// get a reference to the 'ul'

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

let html = ``; // an empty template string

people.forEach(function(person){
    // create html template for each person
    html += `<li style="color: purple">${person}</li>` // for each person we're adding this template on html
});

// above as a function
people.forEach(person => {
    // create html template for each person
    html += `<li style="color: purple">${person}</li>` // for each person we're adding this template on html
});

console.log(html);

// to output to browser: 
const ul = document.querySelector('.people');
ul.innerHTML = html;





