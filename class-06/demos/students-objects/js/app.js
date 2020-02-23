'use strict';

/*
JavaScript objects are convenient & powerful ways to group data and functions. They store data as properties, which are represented as `key: value` pairs, and can have methods, which are functions associated with the object.
*/

//how to define it?
var student1 = {
  name : 'Omar',
  age : 19 ,
  study : function(){
    console.log('what is this' , this);
    console.log(`${this.name} is studying ..and his age is ${this.age}`);
  }
};
console.log('this age from outside ' , this.age);
console.log(student1.study());
console.table(student1);

var student2 = {
  name: 'yasmeen',
  age: 23
};
console.table(student2);

console.log('this outside all objects' , this);
//properties key/value pairs.


//Methods
//Contexual 'this'
//Nested Object
// Adding new props
//Dot vs Bracket Notation

//The DOM
