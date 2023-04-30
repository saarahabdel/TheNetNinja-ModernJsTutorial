// IF STATEMENTS
const age = 21;

if(age > 20){
    console.log('you are over 20 years old');
}


const ninjas = ['shuan', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3){
    console.log("that's a lot of ninjas");
}


// ELSE IF STATEMENTS
const password = 'password1234'; // user inputs this password

if(password.length >= 12){
    console.log('that password is mighty strong');
} else if(password.length >= 8){
    console.log('that password is long enough!');
} else{
    console.log('password is not long enough');
}



// MULTIPLE CONDITIONS 
// logical operators - OR || and AND &&
const password1 = 'p@ss'

if(password1.length >= 12 && password1.includes('@')){
    console.log('that password is mighty strong');
} else if(password1.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is strong enough!');
} else{
    console.log('password is not strong enough');
}


// logical NOT (!)

// only want the code block to run when the user is false. 

let user = false;

if(!user){
    console.log('you must be logged in to continue');
}

// To switch a Boolean value, place ! 
console.log(!true);
console.log(!false);


// BREAK AND CONTINUE 
const scores = [50, 25, 0, 30, 100, 20, 10]

for(let i = 0; i < scores.length; i++){

    if(scores[i] === 0){
        continue;
    } // dont want 0 to be logged to console 
    
    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats, you got the top score!');
        break;
    }
}



// SWITCH STATEMENTS 

// we want to output a message to user depending on the grade

const grade = '50';

switch(grade){
    case '50':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'E':
        console.log('you got a E!');
        break;
    default:
        console.log('not a valid grade');         
}

// without the 'break' in between, console wouldve run D and everything after D
// case 50 would have to be a string to match grade 50 string


// Variables and Block Scope 

// Scope: area in which a variable value is relevant

// age1 can be accessed anywhere
let age1 = 30; 



if(true){
    let age1 = 40; // creating local scope for age1
    let name = 'shaun';
    console.log('inside 1st code block: ', age1, name);

    if(true){
        console.log('inside 2nd code block: ', age1);
    } // age1 takes the most immediate scope outside of its code block which is ag1 = 40
}

console.log('outside code block: ', age1, name) // name doesnt log bc we cant access it out of its scope above

// NB: the same rules apply to Const as they do to Let Variables


