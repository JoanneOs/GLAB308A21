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
// Create the adventurer object named "Robin"
const adventurer = {
    name: "Robin", // Adventurer's name
    health: 10, // Adventurer's health points
    inventory: ["sword", "potion", "artifact"], // Adventurer's inventory (array of items)
    companion: { // Nested object for Robin's companion
        name: "Leo", // Companion's name
        type: "Cat", // Companion's type (a cat)
        companion: { // Nested object for Leo's companion
            name: "Frank", // Frank's name
            type: "Flea", // Frank's type (a flea)
            belongings: ["small hat", "sunglasses"] // Frank's belongings (array of items)
        }
    },
    // Method for rolling dice (common in adventuring games)
    roll(mod = 0) {
        // Generate a random number between 1 and 20, then add the modifier
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        // Log the result to the console
        console.log(`${this.name} rolled a ${result}.`);
    }
};

// Log each item in Robin's inventory using a loop
console.log("Robin's inventory:");
for (let item of adventurer.inventory) {
    console.log(item); // Prints each item in the inventory
}

// Access and log Leo's name
console.log(`Robin's companion is named ${adventurer.companion.name}.`); // Output: "Robin's companion is named Leo."

// Access and log Frank's belongings
console.log(`Frank has the following items: ${adventurer.companion.companion.belongings.join(", ")}.`); // Output: "Frank has the following items: small hat, sunglasses."

// Test the roll method a few times
console.log("Testing Robin's roll method:");
adventurer.roll(); // Example output: "Robin rolled a 12."
adventurer.roll(3); // Example output: "Robin rolled a 18." (with a modifier of 3)
adventurer.roll(-2); // Example output: "Robin rolled a 5." (with a modifier of -2)


//Part 2: Class Fantasy
// Define the base Character class
class Character {
    constructor(name) {
        this.name = name; // Character's name
        this.health = 100; // Default health
        this.inventory = []; // Default empty inventory
    }

    // Roll method for dice rolls
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Define the Companion class, extending Character
class Companion extends Character {
    constructor(name, type) {
        super(name); // Call the parent class constructor
        this.type = type; // Add type property (e.g., "Cat" or "Flea")
    }
}

// Create Robin using the Character class
const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"]; // Add Robin's inventory

// Create Robin's companion, Leo, using the Companion class
robin.companion = new Companion("Leo", "Cat");

// Create Leo's companion, Frank, using the Companion class
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory = ["small hat", "sunglasses"]; // Add Frank's inventory

// Test the roll method for all characters
console.log("Testing roll method:");
robin.roll(); // Example: "Robin rolled a 15."
robin.companion.roll(); // Example: "Leo rolled a 12."
robin.companion.companion.roll(); // Example: "Frank rolled a 18."

// Log Robin's inventory
console.log("Robin's inventory:");
for (let item of robin.inventory) {
    console.log(item); // Prints each item in Robin's inventory
}

// Log Frank's belongings
console.log("Frank's belongings:");
for (let item of robin.companion.companion.inventory) {
    console.log(item); // Prints each item in Frank's inventory
}

//Part 3: Class Features
// Base Character class
class Character {
    constructor(name) {
        this.name = name; // Character's name
        this.health = 100; // Default health
        this.inventory = []; // Default empty inventory
    }

    // Roll method for dice rolls
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Adventurer class extending Character
class Adventurer extends Character {
    constructor(name, role) {
        super(name); // Call the parent class constructor
        this.role = role; // Adventurer's specialized role (e.g., "Fighter", "Healer")
        this.inventory.push("bedroll", "50 gold coins"); // Default items for adventurers
    }

    // Method for scouting ahead
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll(); // Use the roll method from the parent class
    }

    // Additional method for adventurers (example: rest to recover health)
    rest() {
        this.health = 100; // Restore health to full
        console.log(`${this.name} rested and recovered full health.`);
    }
}

// Companion class extending Character
class Companion extends Character {
    constructor(name, type, job) {
        super(name); // Call the parent class constructor
        this.type = type; // Companion's type (e.g., "Cat", "Flea")
        this.job = job; // Companion's job (e.g., "Support", "Entertainer")
    }

    // Method for companions to assist
    assist() {
        console.log(`${this.name} the ${this.type} is assisting with ${this.job}.`);
    }
}

// Create Robin using the Adventurer class
const robin = new Adventurer("Robin", "Ranger");
robin.inventory.push("sword", "potion", "artifact"); // Add Robin's inventory

// Create Robin's companion, Leo, using the Companion class
const leo = new Companion("Leo", "Cat", "Scouting");
robin.companion = leo;

// Create Leo's companion, Frank, using the Companion class
const frank = new Companion("Frank", "Flea", "Entertainment");
frank.inventory.push("small hat", "sunglasses"); // Add Frank's inventory
robin.companion.companion = frank;

// Test the new methods
console.log("Testing Adventurer and Companion methods:");
robin.scout(); // Example: "Robin is scouting ahead..." followed by a roll
robin.rest(); // Example: "Robin rested and recovered full health."
leo.assist(); // Example: "Leo the Cat is assisting with Scouting."
frank.assist(); // Example: "Frank the Flea is assisting with Entertainment."

// Log Robin's inventory
console.log("Robin's inventory:");
for (let item of robin.inventory) {
    console.log(item); // Prints each item in Robin's inventory
}

// Log Frank's belongings
console.log("Frank's belongings:");
for (let item of frank.inventory) {
    console.log(item); // Prints each item in Frank's inventory
}

//Part 4: Class Uniforms
// Base Character class
class Character {
    // Static property: Maximum health for all characters
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name; // Character's name
        this.health = Character.MAX_HEALTH; // Default health (uses static property)
        this.inventory = []; // Default empty inventory
    }

    // Roll method for dice rolls
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    }
}

// Adventurer class extending Character
class Adventurer extends Character {
    // Static property: Allowed roles for adventurers
    static ROLES = ["Fighter", "Healer", "Wizard", "Ranger"];

    constructor(name, role) {
        super(name); // Call the parent class constructor

        // Check if the role is valid
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(", ")}.`);
        }

        this.role = role; // Adventurer's specialized role
        this.inventory.push("bedroll", "50 gold coins"); // Default items for adventurers
    }

    // Method for scouting ahead
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll(); // Use the roll method from the parent class
    }

    // Method for resting to recover health
    rest() {
        this.health = Character.MAX_HEALTH; // Restore health to full (uses static property)
        console.log(`${this.name} rested and recovered full health.`);
    }
}

// Companion class extending Character
class Companion extends Character {
    constructor(name, type, job) {
        super(name); // Call the parent class constructor
        this.type = type; // Companion's type (e.g., "Cat", "Flea")
        this.job = job; // Companion's job (e.g., "Support", "Entertainer")
    }

    // Method for companions to assist
    assist() {
        console.log(`${this.name} the ${this.type} is assisting with ${this.job}.`);
    }
}

// Create Robin using the Adventurer class
const robin = new Adventurer("Robin", "Ranger");
robin.inventory.push("sword", "potion", "artifact"); // Add Robin's inventory

// Create Robin's companion, Leo, using the Companion class
const leo = new Companion("Leo", "Cat", "Scouting");
robin.companion = leo;

// Create Leo's companion, Frank, using the Companion class
const frank = new Companion("Frank", "Flea", "Entertainment");
frank.inventory.push("small hat", "sunglasses"); // Add Frank's inventory
robin.companion.companion = frank;

// Test the new static properties and methods
console.log("Testing static properties and methods:");
console.log(`Max health for all characters: ${Character.MAX_HEALTH}`); // Output: "Max health for all characters: 100"
console.log(`Allowed roles for adventurers: ${Adventurer.ROLES.join(", ")}`); // Output: "Allowed roles for adventurers: Fighter, Healer, Wizard, Ranger"

// Test the Adventurer and Companion methods
robin.scout(); // Example: "Robin is scouting ahead..." followed by a roll
robin.rest(); // Example: "Robin rested and recovered full health."
leo.assist(); // Example: "Leo the Cat is assisting with Scouting."
frank.assist(); // Example: "Frank the Flea is assisting with Entertainment."

// Log Robin's inventory
console.log("Robin's inventory:");
for (let item of robin.inventory) {
    console.log(item); // Prints each item in Robin's inventory
}

// Log Frank's belongings
console.log("Frank's belongings:");
for (let item of frank.inventory) {
    console.log(item); // Prints each item in Frank's inventory
}

//Part 6: Developing Skills
// Base Character class
class Character {
    // Static property: Maximum health for all characters
    static MAX_HEALTH = 100;

    constructor(name) {
        this.name = name; // Character's name
        this.health = Character.MAX_HEALTH; // Default health (uses static property)
        this.inventory = []; // Default empty inventory
    }

    // Roll method for dice rolls
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
        return result;
    }
}

// Adventurer class extending Character
class Adventurer extends Character {
    // Static property: Allowed roles for adventurers
    static ROLES = ["Fighter", "Healer", "Wizard", "Ranger"];

    constructor(name, role) {
        super(name); // Call the parent class constructor

        // Check if the role is valid
        if (!Adventurer.ROLES.includes(role)) {
            throw new Error(`Invalid role: ${role}. Must be one of ${Adventurer.ROLES.join(", ")}.`);
        }

        this.role = role; // Adventurer's specialized role
        this.inventory.push("bedroll", "50 gold coins"); // Default items for adventurers
    }

    // Method for scouting ahead
    scout() {
        console.log(`${this.name} is scouting ahead...`);
        super.roll(); // Use the roll method from the parent class
    }

    // Method for resting to recover health
    rest() {
        this.health = Character.MAX_HEALTH; // Restore health to full (uses static property)
        console.log(`${this.name} rested and recovered full health.`);
    }

    // Method for dueling another adventurer
    duel(opponent) {
        console.log(`A duel begins between ${this.name} and ${opponent.name}!`);

        while (this.health > 50 && opponent.health > 50) {
            const roll1 = this.roll(); // Roll for the current adventurer
            const roll2 = opponent.roll(); // Roll for the opponent

            if (roll1 > roll2) {
                opponent.health -= 1; // Opponent loses 1 health
                console.log(`${this.name} wins this round! ${opponent.name} now has ${opponent.health} health.`);
            } else if (roll2 > roll1) {
                this.health -= 1; // Current adventurer loses 1 health
                console.log(`${opponent.name} wins this round! ${this.name} now has ${this.health} health.`);
            } else {
                console.log("It's a tie! No one loses health this round.");
            }
        }

        // Determine the winner
        if (this.health > 50) {
            console.log(`${this.name} wins the duel with ${this.health} health remaining!`);
        } else {
            console.log(`${opponent.name} wins the duel with ${opponent.health} health remaining!`);
        }
    }

    // Additional method: Cast a spell (for Wizards)
    castSpell(spell) {
        if (this.role === "Wizard") {
            console.log(`${this.name} casts ${spell}!`);
        } else {
            console.log(`${this.name} is not a Wizard and cannot cast spells.`);
        }
    }

    // Additional method: Attack (for Fighters)
    attack(target) {
        if (this.role === "Fighter") {
            const damage = Math.floor(Math.random() * 10) + 1;
            target.health -= damage;
            console.log(`${this.name} attacks ${target.name} for ${damage} damage!`);
        } else {
            console.log(`${this.name} is not a Fighter and cannot attack.`);
        }
    }
}

// Companion class extending Character
class Companion extends Character {
    constructor(name, type, job) {
        super(name); // Call the parent class constructor
        this.type = type; // Companion's type (e.g., "Cat", "Flea")
        this.job = job; // Companion's job (e.g., "Support", "Entertainer")
    }

    // Method for companions to assist
    assist() {
        console.log(`${this.name} the ${this.type} is assisting with ${this.job}.`);
    }

    // Additional method: Entertain (for companions with the "Entertainer" job)
    entertain() {
        if (this.job === "Entertainment") {
            console.log(`${this.name} the ${this.type} is putting on a show!`);
        } else {
            console.log(`${this.name} is not an entertainer.`);
        }
    }
}

// Create two adventurers for a duel
const robin = new Adventurer("Robin", "Ranger");
const alice = new Adventurer("Alice", "Fighter");

// Create Robin's companion, Leo
const leo = new Companion("Leo", "Cat", "Scouting");
robin.companion = leo;

// Create Leo's companion, Frank
const frank = new Companion("Frank", "Flea", "Entertainment");
frank.inventory.push("small hat", "sunglasses");
robin.companion.companion = frank;

// Test the duel method
robin.duel(alice); // Example output: A duel between Robin and Alice, with rounds and a winner

// Test additional methods
robin.castSpell("Fireball"); // Example: "Robin is not a Wizard and cannot cast spells."
alice.attack(robin); // Example: "Alice attacks Robin for 7 damage!"
frank.entertain(); // Example: "Frank the Flea is putting on a show!"