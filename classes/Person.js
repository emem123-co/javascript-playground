//capital class title because it is THE main person (or blueprint).
class Person {
     first; //class field members
     last; //can assign values to these feild members
     age;

     constructor(first, last, age) { //this is a function. you will pass in parameters. best practice to put it at the top. 
          this.first = first; //this sets the object equal to the parameter that is passing through
          this.last = last;
          this.age = age;
     }
}
//no method overloading aka you can only have one constructor per class
let person = new Person("Emily", "Morgan", 40); //this calls the constructor function
console.log(person.first + " " + person.last + " " + person.age);

