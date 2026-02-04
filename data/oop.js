// OOP - Complete Interview Prep (Beginner-Friendly with All Concepts)
const oopData = {
    // ========== WHAT IS OOP ==========
    "What is OOP?": {
        concept: `
<p><strong>🧱 Object-Oriented Programming Explained Simply</strong></p>

<p>OOP is a way of organizing code that models real-world things. Instead of writing a bunch of separate functions and variables, you group related data and functions into "objects".</p>

<p><strong>Real-Life Analogy:</strong></p>
<p>Think about a <strong>Car</strong>. A car has:</p>
<ul>
<li><strong>Properties (data):</strong> color, brand, speed, fuel level</li>
<li><strong>Methods (actions):</strong> start(), accelerate(), brake(), honk()</li>
</ul>
<p>In OOP, we create a "Car" class that bundles all these together. Then we can create many car objects (my car, your car) from this template.</p>

<p><strong>The 4 Pillars of OOP:</strong></p>
<ol>
<li><strong>Encapsulation</strong> - Hide internal details, expose only what's needed</li>
<li><strong>Inheritance</strong> - Create new classes based on existing ones</li>
<li><strong>Polymorphism</strong> - Same method name, different behaviors</li>
<li><strong>Abstraction</strong> - Hide complex details, show simple interface</li>
</ol>

<p><strong>Benefits of OOP:</strong></p>
<ul>
<li>Code is organized and reusable</li>
<li>Easy to maintain and modify</li>
<li>Models real-world problems naturally</li>
<li>Promotes code reuse through inheritance</li>
</ul>
`
    },

    // ========== CLASSES & OBJECTS ==========
    "Classes and Objects": {
        concept: `
<p><strong>📦 Understanding Classes and Objects</strong></p>

<p><strong>What is a Class?</strong></p>
<p>A class is like a <strong>blueprint</strong> or <strong>template</strong>. Think of a cookie cutter - it's not a cookie itself, but it defines the shape of cookies you'll make.</p>

<p><strong>What is an Object?</strong></p>
<p>An object is an <strong>instance</strong> created from a class - an actual thing. Using our cookie cutter, each cookie you make is an object. Same shape (class), but each cookie is separate (different object).</p>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
// CLASS - The blueprint
class Car {
    // Constructor - runs when creating a new object
    constructor(brand, color) {
        this.brand = brand;     // Property
        this.color = color;     // Property
        this.speed = 0;         // Default property
    }
    
    // Method (function inside class)
    accelerate() {
        this.speed += 10;
        console.log(this.brand + ' is now going ' + this.speed + ' km/h');
    }
    
    // Another method
    brake() {
        this.speed = 0;
        console.log(this.brand + ' stopped');
    }
}

// OBJECTS - Instances created from the class
const myCar = new Car('Toyota', 'Red');
const yourCar = new Car('Honda', 'Blue');

// Using the objects
myCar.accelerate();   // "Toyota is now going 10 km/h"
myCar.accelerate();   // "Toyota is now going 20 km/h"
yourCar.accelerate(); // "Honda is now going 10 km/h"

console.log(myCar.color);    // "Red"
console.log(yourCar.color);  // "Blue"
</pre>

<p><strong>Key Points:</strong></p>
<ul>
<li><code>class</code> - keyword to define a class</li>
<li><code>constructor()</code> - special method that runs when creating object</li>
<li><code>this</code> - refers to the current object</li>
<li><code>new</code> - keyword to create an instance</li>
</ul>
`
    },

    // ========== INHERITANCE ==========
    "Inheritance": {
        concept: `
<p><strong>👨‍👧 Inheritance - Classes Learning from Parents</strong></p>

<p>Inheritance lets you create a new class based on an existing class. The new class (child) inherits all properties and methods from the parent class, and can add its own.</p>

<p><strong>Real-Life Analogy:</strong></p>
<p>Think about animals:</p>
<ul>
<li><strong>Animal</strong> (parent): All animals eat, sleep, move</li>
<li><strong>Dog</strong> (child): Has all Animal abilities PLUS can bark, fetch</li>
<li><strong>Cat</strong> (child): Has all Animal abilities PLUS can meow, climb</li>
</ul>
<p>You don't rewrite eat/sleep for Dog and Cat - they INHERIT it from Animal!</p>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
// PARENT CLASS
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    eat() {
        console.log(this.name + ' is eating');
    }
    
    sleep() {
        console.log(this.name + ' is sleeping');
    }
}

// CHILD CLASS - extends parent
class Dog extends Animal {
    constructor(name, breed) {
        super(name);         // Call parent constructor!
        this.breed = breed;  // Add new property
    }
    
    // New method only for Dog
    bark() {
        console.log(this.name + ' says: Woof!');
    }
    
    // New method only for Dog
    fetch() {
        console.log(this.name + ' is fetching the ball');
    }
}

// Using it
const buddy = new Dog('Buddy', 'Golden Retriever');

buddy.eat();    // "Buddy is eating" (inherited from Animal)
buddy.sleep();  // "Buddy is sleeping" (inherited from Animal)
buddy.bark();   // "Buddy says: Woof!" (Dog's own method)
buddy.fetch();  // "Buddy is fetching the ball" (Dog's own method)

console.log(buddy.breed);  // "Golden Retriever"
</pre>

<p><strong>Key Points:</strong></p>
<ul>
<li><code>extends</code> - keyword to inherit from parent</li>
<li><code>super()</code> - calls the parent's constructor (MUST be first in child constructor)</li>
<li>Child gets all parent's properties and methods automatically</li>
<li>Child can add its own properties and methods</li>
</ul>
`
    },

    // ========== METHOD OVERRIDING ==========
    "Method Overriding": {
        concept: `
<p><strong>🔄 Method Overriding - Same Name, Different Behavior</strong></p>

<p>Sometimes a child class needs to do something differently than its parent. <strong>Overriding</strong> means redefining a parent's method in the child class.</p>

<p><strong>Real-Life Example:</strong></p>
<p>All animals make sounds, but:</p>
<ul>
<li>Dog's makeSound() → "Woof!"</li>
<li>Cat's makeSound() → "Meow!"</li>
<li>Cow's makeSound() → "Moo!"</li>
</ul>
<p>Same method name, different implementation in each child!</p>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    // Parent's method
    makeSound() {
        console.log(this.name + ' makes a generic sound');
    }
    
    describe() {
        console.log('I am an animal named ' + this.name);
    }
}

class Dog extends Animal {
    // OVERRIDE - same method name, different code
    makeSound() {
        console.log(this.name + ' says: Woof! Woof!');
    }
}

class Cat extends Animal {
    // OVERRIDE - different implementation
    makeSound() {
        console.log(this.name + ' says: Meow!');
    }
}

// Using it
const animal = new Animal('Generic');
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');

animal.makeSound();  // "Generic makes a generic sound"
dog.makeSound();     // "Buddy says: Woof! Woof!"
cat.makeSound();     // "Whiskers says: Meow!"

// describe() was NOT overridden, so all use parent's version
dog.describe();      // "I am an animal named Buddy"
</pre>

<hr>
<p><strong>Using super to Call Parent's Method:</strong></p>
<pre>
class Dog extends Animal {
    makeSound() {
        // First do what parent does
        super.makeSound();
        
        // Then add extra behavior
        console.log('And also: Woof!');
    }
}

const buddy = new Dog('Buddy');
buddy.makeSound();
// "Buddy makes a generic sound"
// "And also: Woof!"
</pre>
`
    },

    // ========== POLYMORPHISM ==========
    "Polymorphism": {
        concept: `
<p><strong>🎭 Polymorphism - Many Forms</strong></p>

<p>"Poly" means many, "morph" means forms. Polymorphism lets you treat different objects the same way, even though they behave differently.</p>

<p><strong>Real-Life Example:</strong></p>
<p>A "Play" button on different apps:</p>
<ul>
<li>Music app → plays music</li>
<li>Video app → plays video</li>
<li>Game → starts the game</li>
</ul>
<p>Same action (press play), different behavior based on what you're using!</p>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
class Shape {
    calculateArea() {
        return 0;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    calculateArea() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super();
        this.base = base;
        this.height = height;
    }
    
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

// THE POWER OF POLYMORPHISM:
// We can treat all shapes the same way!

const shapes = [
    new Rectangle(4, 5),
    new Circle(3),
    new Triangle(6, 4)
];

// Same method call, different results!
shapes.forEach(shape => {
    console.log('Area:', shape.calculateArea());
});

// Output:
// Area: 20           (rectangle: 4*5)
// Area: 28.27...     (circle: π*3²)
// Area: 12           (triangle: 0.5*6*4)
</pre>

<p><strong>Why This Matters:</strong></p>
<p>You can write code that works with the parent class, and it automatically works with ALL child classes!</p>
`
    },

    // ========== ENCAPSULATION ==========
    "Encapsulation": {
        concept: `
<p><strong>🔒 Encapsulation - Protecting Your Data</strong></p>

<p>Encapsulation means bundling data with the methods that work on that data, and restricting direct access to some components.</p>

<p><strong>Real-Life Example:</strong></p>
<p>Think of a TV:</p>
<ul>
<li><strong>Public (exposed):</strong> Power button, volume buttons, channel buttons</li>
<li><strong>Private (hidden):</strong> Circuit boards, wiring, internal components</li>
</ul>
<p>You interact with the TV through simple buttons. You don't need to (and shouldn't) mess with the internal circuits!</p>

<hr>
<p><strong>📋 JavaScript Example (Private Fields):</strong></p>
<pre>
class BankAccount {
    // Private field (# prefix) - cannot access from outside
    #balance;
    #pin;
    
    constructor(initialBalance, pin) {
        this.#balance = initialBalance;
        this.#pin = pin;
        this.accountHolder = 'Ali';  // Public - can access
    }
    
    // Public method to interact with private data
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log('Deposited: ' + amount);
        }
    }
    
    // Check balance (but require PIN)
    getBalance(enteredPin) {
        if (enteredPin === this.#pin) {
            return this.#balance;
        } else {
            console.log('Wrong PIN!');
            return null;
        }
    }
    
    withdraw(amount, enteredPin) {
        if (enteredPin !== this.#pin) {
            console.log('Wrong PIN!');
            return;
        }
        
        if (amount > this.#balance) {
            console.log('Insufficient funds!');
            return;
        }
        
        this.#balance -= amount;
        console.log('Withdrawn: ' + amount);
    }
}

const account = new BankAccount(1000, '1234');

// Can access public property
console.log(account.accountHolder);  // "Ali"

// Cannot access private field directly!
// console.log(account.#balance);  // ERROR!

// Must use public methods
account.deposit(500);
console.log(account.getBalance('1234'));  // 1500
console.log(account.getBalance('0000'));  // "Wrong PIN!" null
</pre>

<p><strong>Benefits:</strong></p>
<ul>
<li>Protects data from invalid changes</li>
<li>Can add validation in methods</li>
<li>Can change internal implementation without breaking other code</li>
</ul>
`
    },

    // ========== ABSTRACTION ==========
    "Abstraction": {
        concept: `
<p><strong>🎭 Abstraction - Hiding Complexity</strong></p>

<p>Abstraction means showing only essential features while hiding the complex implementation details.</p>

<p><strong>Real-Life Example:</strong></p>
<p>When you drive a car:</p>
<ul>
<li>You use: steering wheel, accelerator, brake</li>
<li>You don't think about: how fuel combusts, how gears work, how the engine turns wheels</li>
</ul>
<p>The car ABSTRACTS away the complex mechanics and gives you a simple interface!</p>

<p><strong>Difference from Encapsulation:</strong></p>
<ul>
<li><strong>Encapsulation</strong> = Protecting data (using private fields)</li>
<li><strong>Abstraction</strong> = Simplifying interface (hiding complexity)</li>
</ul>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
// Complex implementation hidden inside
class EmailService {
    #smtpServer;
    #port;
    #credentials;
    
    constructor() {
        this.#smtpServer = 'smtp.example.com';
        this.#port = 587;
        this.#credentials = { user: 'api', key: 'secret' };
    }
    
    // Hidden complex methods
    #connectToServer() {
        console.log('Connecting to SMTP server...');
        // Complex connection logic
    }
    
    #authenticate() {
        console.log('Authenticating...');
        // Complex auth logic
    }
    
    #formatEmail(to, subject, body) {
        // Complex formatting
        return { to, subject, body, headers: {...} };
    }
    
    #transmit(email) {
        console.log('Transmitting...');
        // Complex transmission logic
    }
    
    // SIMPLE PUBLIC INTERFACE - This is abstraction!
    // User doesn't need to know the complex stuff above
    sendEmail(to, subject, body) {
        this.#connectToServer();
        this.#authenticate();
        const email = this.#formatEmail(to, subject, body);
        this.#transmit(email);
        console.log('Email sent to ' + to);
    }
}

// Using it - SO SIMPLE!
const emailer = new EmailService();
emailer.sendEmail('friend@email.com', 'Hello', 'How are you?');

// User just calls ONE method
// All the complexity is hidden inside
</pre>
`
    },

    // ========== GETTERS & SETTERS ==========
    "Getters and Setters": {
        concept: `
<p><strong>📥📤 Getters and Setters</strong></p>

<p>Getters and setters are special methods that let you control how properties are read and written.</p>

<p><strong>Why Use Them?</strong></p>
<ul>
<li>Add validation when setting values</li>
<li>Compute values on the fly when getting</li>
<li>Make properties look like regular variables but with logic behind them</li>
</ul>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
class User {
    constructor(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._birthYear = birthYear;  // Convention: _ prefix for "private"
    }
    
    // GETTER - called when reading user.fullName
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    
    // SETTER - called when writing user.fullName = "..."
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    
    // Computed getter - calculates age dynamically
    get age() {
        return new Date().getFullYear() - this._birthYear;
    }
    
    // Setter with validation
    set age(value) {
        if (value < 0 || value > 150) {
            console.log('Invalid age!');
            return;
        }
        this._birthYear = new Date().getFullYear() - value;
    }
}

const user = new User('Ali', 'Khan', 2000);

// Using getter (looks like a property!)
console.log(user.fullName);  // "Ali Khan"
console.log(user.age);       // 24 (or current year - 2000)

// Using setter (looks like assignment!)
user.fullName = 'Sara Ahmed';
console.log(user.firstName);  // "Sara"
console.log(user.lastName);   // "Ahmed"

// Setter with validation
user.age = 200;   // "Invalid age!"
user.age = 25;    // Works, updates birthYear
</pre>
`
    },

    // ========== STATIC ==========
    "Static Methods & Properties": {
        concept: `
<p><strong>📌 Static - Belongs to Class, Not Objects</strong></p>

<p>Normal methods/properties belong to objects. Static methods/properties belong to the CLASS itself - you don't need to create an object to use them.</p>

<p><strong>When to Use Static:</strong></p>
<ul>
<li>Utility/helper functions</li>
<li>Factory methods (create objects)</li>
<li>Constants shared across all instances</li>
<li>Counting total instances created</li>
</ul>

<hr>
<p><strong>📋 JavaScript Example:</strong></p>
<pre>
class MathHelper {
    // Static property - shared by all, belongs to class
    static PI = 3.14159;
    
    // Static method - call without creating object
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static circleArea(radius) {
        return MathHelper.PI * radius * radius;
    }
}

// Using static - NO object creation needed!
console.log(MathHelper.PI);           // 3.14159
console.log(MathHelper.add(5, 3));    // 8
console.log(MathHelper.circleArea(5)); // 78.54

// This would NOT work:
// const math = new MathHelper();
// math.add(5, 3);  // Error - add is static, not on instances
</pre>

<hr>
<p><strong>📋 Counting Instances Example:</strong></p>
<pre>
class User {
    static totalUsers = 0;  // Shared counter
    
    constructor(name) {
        this.name = name;
        User.totalUsers++;  // Increment when new user created
    }
    
    static getCount() {
        return User.totalUsers;
    }
}

const ali = new User('Ali');
const sara = new User('Sara');
const ahmed = new User('Ahmed');

console.log(User.totalUsers);  // 3
console.log(User.getCount());  // 3
</pre>
`
    },

    // ========== OOP INTERVIEW QUESTIONS ==========
    "OOP Interview Questions": {
        concept: `
<p><strong>❓ Common OOP Interview Questions</strong></p>

<p><strong>Q1: What are the 4 pillars of OOP?</strong></p>
<p>Encapsulation (bundling data + methods, hiding internals), Inheritance (creating child classes from parent), Polymorphism (same method behaving differently), Abstraction (hiding complexity, showing simple interface).</p>

<p><strong>Q2: What is the difference between a class and an object?</strong></p>
<p>A class is a blueprint/template that defines properties and methods. An object is an instance created from a class - an actual thing with specific values.</p>

<p><strong>Q3: What is inheritance? Give an example.</strong></p>
<p>Inheritance lets a child class (Dog) inherit properties and methods from a parent class (Animal). The child can also add its own features (bark()).</p>

<p><strong>Q4: What is method overriding?</strong></p>
<p>When a child class defines a method with the same name as the parent's method, replacing the parent's implementation with its own.</p>

<p><strong>Q5: What is polymorphism?</strong></p>
<p>Polymorphism means "many forms". It allows objects of different classes to be treated as objects of a common parent class. Each child can implement methods differently.</p>

<p><strong>Q6: What is encapsulation and why is it important?</strong></p>
<p>Encapsulation is hiding internal state and requiring all interaction through methods. It prevents invalid data, allows internal changes without breaking external code, and improves security.</p>

<p><strong>Q7: What is abstraction?</strong></p>
<p>Abstraction hides complex implementation details and shows only necessary features. Like using a car without knowing how the engine works.</p>

<p><strong>Q8: What is the difference between abstraction and encapsulation?</strong></p>
<p>Encapsulation is about data protection (private fields). Abstraction is about design simplification (hiding complexity behind simple interface).</p>

<p><strong>Q9: What is a constructor?</strong></p>
<p>A special method that runs automatically when creating a new object. Used to initialize properties with values.</p>

<p><strong>Q10: What is the super keyword?</strong></p>
<p>super is used to call the parent class's constructor or methods from within a child class. super() must be called first in a child's constructor.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = oopData;
}
