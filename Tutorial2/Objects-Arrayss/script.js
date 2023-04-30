// Arrays store collections 

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);

// first position in array which is ryu
console.log(ninjas[1]); 

// override value inside of array
ninjas[1] = 'ken';

// can also store numbers in arrays
let ages = [20,25,30,35];
console.log(ages[2]);


// Arrays also have properties and methods: 

// returns 3
console.log(ninjas.length);

// Array Mathods:

// join elements in the array with a comma
let result = ninjas.join(',');
console.log(result);

// Gives the index of the value inside the array
let result1 = ninjas.indexOf('chun-li');
console.log(result1);

// concats arrays together
let result2 = ninjas.concat(['ken', 'crystal']);
console.log(result2);

// pushes a new value onto array, returns new length of the array
// this is a 'destructive method' bc it alters the original value
let result3 = ninjas.push('ken');
console.log(result3);


// removes last element in array and returns it
let result4 = ninjas.pop();
console.log(result4);
