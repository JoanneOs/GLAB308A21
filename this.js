// // //this behaves differently in different contexts, and we are only going to examine it in a function or constructor context during this lesson. For further learning
// // //on how the this keyword behaves in other situations, read through the MDN documentation.

// // // const obj = {1
// // // function{
// // // console. log (this)
// // // }}
// // // obj.test();

// // const person = {
// //     name: {
// //       first: 'Elyan',
// //       last: 'Kemble',
// //     },
// //     age: 32,
// //     location: {
// //       city: 'Garland',
// //       state: 'Texas',
// //       zip: 75040
// //     },
// //     occupation: 'Front-End Developer'
// //   }
  
// //   function introduce() {
// //     console.log(`Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`);
// //   }


// //   //Human class that inherits from the Animal class

// //   // Child class: Human (extends Animal)

// // class Human extends Animal {
// //     constructor(firstName, lastName, age, city, state, zip, occupation, isAwake, isMoving) {
// //       super(2, 2, isAwake, isMoving); // Inherit eyes, legs, isAwake, and isMoving from Animal
// //   this.firstName = firstName;
// //       this.lastName = lastName;
// //      this.age = age;
// //       this.location = { city, state, zip };
// //       this.work = work;
// //     }
  

// addGrades(...grades) {
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         this.#grades.push(grade);
//       }
//     });
// }
// get average() {
//     const arr = [...this.#grades];
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }



//////////////
////////////

////////////////////////
// The 'this' Keyword //
////////////////////////

// const obj = {
//   test: function() { // function declaration
//     console.log(this)
//   }
// }

// const obj2 = {
//   test: () => { // arrow function
//     console.log(this)
//   }
// };

// obj.test(); // the 'this' keyword will represent the current object calling the method
// obj2.test(); // the 'this' keyword will NOT represent the current object calling the method

//////////////
// Classess //
//////////////

// class Animal {
//   constructor(eyes, legs, isAwake, isMoving) {
//     this.eyes = eyes,
//     this.legs = legs,
//     this.isAwake = isAwake,
//     this.isMoving = isMoving
//   }
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
// }

// const cat1 = new Animal(2, 4, true, false);
// const cat2 = new Animal(2, 4, false, false);
// const dog1 = new Animal(2, 4, true, true);
// const cow1 = new Animal(2, 4, true, false);
// console.log(cat1)
// console.log(cat2)
// console.log(dog1)
// console.log(cow1)

/////////////////
// Inheritance //
/////////////////

// class Animal {
//   constructor(eyes, legs, isAwake, isMoving) { // Calls the constructor of the parent
//     this.eyes = eyes,
//     this.legs = legs,
//     this.isAwake = isAwake,
//     this.isMoving = isMoving
//   }
//   sleep() {
//     this.isAwake = false;
//   }
//   wake() {
//     this.isAwake = true;
//   }
//   sit() {
//     this.isMoving = false;
//   }
//   walk() {
//     this.isMoving = true;
//   }
//   speak(sound) {
//     console.log(sound);
//   }
//   toString(animal = 'Animal') {
//     return `This ${animal} has ${this.eyes} eyes and ${this.legs} legs. It ${this.isAwake ? 'is' : 'is not'} awake, and ${this.isMoving ? 'is' : 'is not'} moving.`;
//   }
// }

// class Cat extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Meow..."); // Calls the method specified on the parent
//   }
//   toString() {
//     return super.toString("Cat");
//   }
// }

// class Dog extends Animal {
//   constructor(fur, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.fur = fur;
//   }
//   speak() {
//     super.speak("Woof!");
//   }
//   toString() {
//     return super.toString("Dog");
//   }
// }

// class Cow extends Animal {
//   constructor(hair, isAwake, isMoving) {
//     super(2, 4, isAwake, isMoving);
//     this.hair = hair;
//   }
//   speak() {
//     super.speak("Moo.");
//   }
//   toString() {
//     return super.toString("Cow");
//   }
// }

// const cat1 = new Cat("Orange", true, false);
// const cat2 = new Cat("Black and White", false, false);
// const dog1 = new Dog("Gold", true, true);
// const cow1 = new Cow("Brown", true, false);

//////////////////////////////////
// Encapsulation  & Abstraction //
//////////////////////////////////

// class Learner {
//   #grades = [];
//   #name = {
//     first: '',
//     last: '',
//   }
//   #age;

//   constructor(firstName, lastName, age) {
//     this.#name.first = firstName;
//     this.#name.last = lastName;
//     this.#age = age;
//   }
//   get name() { // Data abstraction
//     return this.#name.first + ' ' + this.#name.last;
//   }
//   get age() {
//     return this.#age;
//   }
//   get grades() {
//     return this.#grades;
//   }
//   // set grades(grade) {
//   //   // change the grade to a Number, in case it was provided as a String
//   //   grade = Number(grade);
//   //   // Only accept values between 0 and 100
//   //   if (grade >= 0 && grade <= 100) {
//   //     this.#grades.push(grade);
//   //   }
//   // }
//   addGrades(...grades) { // Process Abstraction
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         this.#grades.push(grade);
//       }
//     });
//   }
//   get average() {
//     const arr = [...this.#grades];
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
// }

// const learner1 = new Learner('Leeroy', 'Jenkins', 18);
// console.log(learner1.age); 
// learner1.grades = 100; 
// learner1.addGrades(100, 75, [50]);
// console.log(learner1.grades);
// console.log(learner1.average);

//////////////////
// Polymorphism //
//////////////////

/*
Polymorphism is the ability of a single thing to take on many forms 
(poly = many; morph = change form). In the context of OOP and JavaScript, 
this means the ability for one object to have multiple realizations that 
each implement the same functionality, but work in differrent ways.

We can call the same method, speak(), on each of the intances of these 
Animal objects, but it will behave differently. This is an example of 
polymorphism - common functionality with unique behavior. toString() is 
similarly polymorphic.
*/

///////////////////////////////////
// Static Properties and Methods //
///////////////////////////////////

///////// The older way /////////
// const cat1 = new Cat('orange', true, false);
// cat1.speak();
////////////////////////////////////

// class Animal {
//   static speak(sound) {
//     console.log(sound);
//   }
// }

// class Cat extends Animal {
//   static speak() {
//     super.speak("Meow...");
//   }
// }

// class Dog extends Animal {
//   static speak() {
//     super.speak("Woof!");
//   }
// }

// class Cow extends Animal {
//   static speak() {
//     super.speak("Moo.");
//   }
// }

///////// The newer way /////////
// Cat.speak();
// Dog.speak();
////////////////////////////////////

// class Grades {
//   static getAverage(...grades) {
//     const arr = [];

//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         arr.push(grade);
//       }
//     });

//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
// }

// console.log(Grades.getAverage(100, 75, [50]))

///////////////////////////////////
// Learner and Grades Refactored //
///////////////////////////////////

// class NewLearner {
//   #grades;
//   #name = {
//     first: "",
//     last: ""
//   };
//   #age;

//   constructor(firstName, lastName, age) {
//     this.#name.first = firstName;
//     this.#name.last = lastName;
//     this.#age = age;

//     this.#grades = new NewGrades();
//   }
//   get name() {
//     return this.#name.first + " " + this.#name.last;
//   }
//   get age() {
//     return this.#age;
//   }
//   addGrades(...grades) {
//     this.#grades.addGrades(grades);
//   }
//   get grades() {
//     return this.#grades.grades;
//   }
//   get average() {
//     return this.#grades.average;
//   }
// }

// class NewGrades {
//   #grades = [];

//   constructor(initialGrades) {
//     if (initialGrades) {
//       this.addGrades(initialGrades);
//     }
//   }
//   static getAverage(...grades) {
//     const arr = [];
//     this.addToArray(arr, grades);
//     return this.avgArray(arr);
//   }
//   static addToArray(arr, grades) {
//     grades = grades.flat();
//     grades.forEach((grade) => {
//       grade = Number(grade);

//       if (grade >= 0 && grade <= 100) {
//         arr.push(grade);
//       }
//     });
//   }
//   static avgArray(gradeArray) {
//     const arr = [...gradeArray];
//     arr.sort((a, b) => a - b).shift();

//     return arr.reduce((a, b) => a + b) / arr.length;
//   }
//   addGrades(...grades) {
//     NewGrades.addToArray(this.#grades, grades.flat());
//   }
//   get grades() {
//     return this.#grades;
//   }
//   get average() {
//     return NewGrades.avgArray(this.#grades);
//   }
// }

////////////////
// Prototypes //
////////////////

// class Animal { }
// class Cat extends Animal { }
// class Tabby extends Cat { }
// class SpottedTabby extends Tabby { }

// const cat1 = new SpottedTabby();
// let object = cat1;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);



//GLAB 308A.2.1: 
//An Object-Oriented Adventure


//Part 1: Humble Beginnings



