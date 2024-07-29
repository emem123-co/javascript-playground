let first = "Emily"; //this is a string, can use double or single quotes
//variable name is 'identifier'
//equal sign is an assignment
//togehter, it is an expression

console.log(typeof(first));
//screen print

let age = 31; //number, no quotations 
console.log(typeof(age));

let x; //declaration
console.log(typeof x); //lack of any assigned value
x = 2; //initializing

let y = null;//declare and assign (or initializing)
console.log(typeof y); //intentionally no value

//can use "var" and "const", but use "let" most of the time. 
//use const for things you want to be immutable (unchanging).

console.log("Hi " + first);



let condition = true;
if(condition) { //can just say 'condition' instead of typing out 'condition == true'. 
     console.log("got here");
}