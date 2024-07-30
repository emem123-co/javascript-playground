//function declaration
function multiply1(x, y) {
     return x * y;
}

// console.log(multiply1(10, 2));



//function expression assigning an anonymous function into a variable
let multiply2 = function (x, y) {
     return x * y;
}

// console.log(multiply2(5, 5));


//arrow function (aka lamba in C#)
let multiply3 = (x, y) => x * y; //remove 'function' and if there is only one line within the function, you also remove curly braces and "return" word. 

console.log(multiply3(2, 5));


//arrow function (aka lamba in C#)
let multiply4 = (x, y) => {
     console.log(x, y);
     return x * y;
}
     //if you have more than one line within the function, you do need the curly braces and "return" because it is no longer implicitly returning anything.

console.log(multiply4(2, 5));


//additional arrow function.  if there is only one argument, you can remove parenthesis there too. 
let greeter1 = (firstName1) => console.log("Hi " + firstName1);

greeter1("Emily");

//additional arrow function.  if there is only one argument, you can remove parenthesis there too. 
let greeter = firstName1 => console.log("Hi " + firstName1);

greeter("Emily");

