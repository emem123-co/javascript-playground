// //function declaration
// function multiply1(x, y) {
//      return x * y;
// }

// console.log(multiply1(10, 2));



// //function expression assigning an anonymous function into a variable
// let multiply2 = function (x, y) {
//      return x * y;
// }

// console.log(multiply2(5, 5));


//arrow function (aka lamba in C#)
let multiply3 = (x, y) =>  x * y; //remove 'function' and if there is only one line within the function, you also remove curly braces and "return" word. 

console.log(multiply3(2, 5));