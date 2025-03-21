// Part 1: Humble Beginnings
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


// Part 2: Class Fantasy
// Define the base Character class
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