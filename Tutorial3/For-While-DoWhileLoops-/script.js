// Control flow consists of Conditions and Loops 

// For Loops 

for(let i = 0; i < 5; i++){

    console.log('in loop', i);
}

console.log('loop finished')

// let i = 0 is a initialisation variable,keeps track of how many times we cycle through the loop
// i < 5 is a condition that will evaluate to true or false
// i++ final expression, executes everytime at end of codeblock
// loop will stop executing once i = 4

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
    //let html = `<div>${names[i]}</div>`;
    //console.log(html);
}

// an iteration is one cycle through a loop




// While Loops 
let a = 0;
while(a < 5){

    console.log('in loop', a);
    a++;
}

const names1 = ['shuan', 'mario', 'luigi' ];

let b = 0;
while(b < names1.length){
    console.log(names1[b]);
    a++;
}


// Do While Loops

// forces loop to execute code regardless whether condition true or fase
let c = 5;

do{
    console.log('val of i is: ', c);
    c++;
} // do this code regardless of condition being true or false
while(c < 5);
