// OOP - Complete Interview Prep (Beginner-Friendly with All Concepts)
const oopData = {
    // ========== WHAT IS OOP ==========
    "What is OOP?": {
        concept: `
&lt;p&gt;&lt;strong&gt;🧱 Object-Oriented Programming Explained Simply&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;OOP is a way of organizing code that models real-world things. Instead of writing a bunch of separate functions and variables, you group related data and functions into "objects".&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Think about a &lt;strong&gt;Car&lt;/strong&gt;. A car has:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Properties (data):&lt;/strong&gt; color, brand, speed, fuel level&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Methods (actions):&lt;/strong&gt; start(), accelerate(), brake(), honk()&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;In OOP, we create a "Car" class that bundles all these together. Then we can create many car objects (my car, your car) from this template.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;The 4 Pillars of OOP:&lt;/strong&gt;&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;&lt;strong&gt;Encapsulation&lt;/strong&gt; - Hide internal details, expose only what's needed&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Inheritance&lt;/strong&gt; - Create new classes based on existing ones&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Polymorphism&lt;/strong&gt; - Same method name, different behaviors&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Abstraction&lt;/strong&gt; - Hide complex details, show simple interface&lt;/li&gt;
&lt;/ol&gt;

&lt;p&gt;&lt;strong&gt;Benefits of OOP:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Code is organized and reusable&lt;/li&gt;
&lt;li&gt;Easy to maintain and modify&lt;/li&gt;
&lt;li&gt;Models real-world problems naturally&lt;/li&gt;
&lt;li&gt;Promotes code reuse through inheritance&lt;/li&gt;
&lt;/ul&gt;
`
    },

    // ========== CLASSES & OBJECTS ==========
    "Classes and Objects": {
        concept: `
&lt;p&gt;&lt;strong&gt;📦 Understanding Classes and Objects&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;What is a Class?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;A class is like a &lt;strong&gt;blueprint&lt;/strong&gt; or &lt;strong&gt;template&lt;/strong&gt;. Think of a cookie cutter - it's not a cookie itself, but it defines the shape of cookies you'll make.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;What is an Object?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;An object is an &lt;strong&gt;instance&lt;/strong&gt; created from a class - an actual thing. Using our cookie cutter, each cookie you make is an object. Same shape (class), but each cookie is separate (different object).&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Key Points:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;class&lt;/code&gt; - keyword to define a class&lt;/li&gt;
&lt;li&gt;&lt;code&gt;constructor()&lt;/code&gt; - special method that runs when creating object&lt;/li&gt;
&lt;li&gt;&lt;code&gt;this&lt;/code&gt; - refers to the current object&lt;/li&gt;
&lt;li&gt;&lt;code&gt;new&lt;/code&gt; - keyword to create an instance&lt;/li&gt;
&lt;/ul&gt;
`
    },

    // ========== INHERITANCE ==========
    "Inheritance": {
        concept: `
&lt;p&gt;&lt;strong&gt;👨‍👧 Inheritance - Classes Learning from Parents&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Inheritance lets you create a new class based on an existing class. The new class (child) inherits all properties and methods from the parent class, and can add its own.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Think about animals:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Animal&lt;/strong&gt; (parent): All animals eat, sleep, move&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Dog&lt;/strong&gt; (child): Has all Animal abilities PLUS can bark, fetch&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Cat&lt;/strong&gt; (child): Has all Animal abilities PLUS can meow, climb&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;You don't rewrite eat/sleep for Dog and Cat - they INHERIT it from Animal!&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Key Points:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;extends&lt;/code&gt; - keyword to inherit from parent&lt;/li&gt;
&lt;li&gt;&lt;code&gt;super()&lt;/code&gt; - calls the parent's constructor (MUST be first in child constructor)&lt;/li&gt;
&lt;li&gt;Child gets all parent's properties and methods automatically&lt;/li&gt;
&lt;li&gt;Child can add its own properties and methods&lt;/li&gt;
&lt;/ul&gt;
`
    },

    // ========== METHOD OVERRIDING ==========
    "Method Overriding": {
        concept: `
&lt;p&gt;&lt;strong&gt;🔄 Method Overriding - Same Name, Different Behavior&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Sometimes a child class needs to do something differently than its parent. &lt;strong&gt;Overriding&lt;/strong&gt; means redefining a parent's method in the child class.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Example:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;All animals make sounds, but:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Dog's makeSound() → "Woof!"&lt;/li&gt;
&lt;li&gt;Cat's makeSound() → "Meow!"&lt;/li&gt;
&lt;li&gt;Cow's makeSound() → "Moo!"&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;Same method name, different implementation in each child!&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;Using super to Call Parent's Method:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== POLYMORPHISM ==========
    "Polymorphism": {
        concept: `
&lt;p&gt;&lt;strong&gt;🎭 Polymorphism - Many Forms&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;"Poly" means many, "morph" means forms. Polymorphism lets you treat different objects the same way, even though they behave differently.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Example:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;A "Play" button on different apps:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Music app → plays music&lt;/li&gt;
&lt;li&gt;Video app → plays video&lt;/li&gt;
&lt;li&gt;Game → starts the game&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;Same action (press play), different behavior based on what you're using!&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
shapes.forEach(shape =&gt; {
    console.log('Area:', shape.calculateArea());
});

// Output:
// Area: 20           (rectangle: 4*5)
// Area: 28.27...     (circle: π*3²)
// Area: 12           (triangle: 0.5*6*4)
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Why This Matters:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;You can write code that works with the parent class, and it automatically works with ALL child classes!&lt;/p&gt;
`
    },

    // ========== ENCAPSULATION ==========
    "Encapsulation": {
        concept: `
&lt;p&gt;&lt;strong&gt;🔒 Encapsulation - Protecting Your Data&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Encapsulation means bundling data with the methods that work on that data, and restricting direct access to some components.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Example:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Think of a TV:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Public (exposed):&lt;/strong&gt; Power button, volume buttons, channel buttons&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Private (hidden):&lt;/strong&gt; Circuit boards, wiring, internal components&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;You interact with the TV through simple buttons. You don't need to (and shouldn't) mess with the internal circuits!&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example (Private Fields):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
        if (amount &gt; 0) {
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
        
        if (amount &gt; this.#balance) {
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Benefits:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Protects data from invalid changes&lt;/li&gt;
&lt;li&gt;Can add validation in methods&lt;/li&gt;
&lt;li&gt;Can change internal implementation without breaking other code&lt;/li&gt;
&lt;/ul&gt;
`
    },

    // ========== ABSTRACTION ==========
    "Abstraction": {
        concept: `
&lt;p&gt;&lt;strong&gt;🎭 Abstraction - Hiding Complexity&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Abstraction means showing only essential features while hiding the complex implementation details.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Example:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;When you drive a car:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;You use: steering wheel, accelerator, brake&lt;/li&gt;
&lt;li&gt;You don't think about: how fuel combusts, how gears work, how the engine turns wheels&lt;/li&gt;
&lt;/ul&gt;
&lt;p&gt;The car ABSTRACTS away the complex mechanics and gives you a simple interface!&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Difference from Encapsulation:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Encapsulation&lt;/strong&gt; = Protecting data (using private fields)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Abstraction&lt;/strong&gt; = Simplifying interface (hiding complexity)&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== GETTERS & SETTERS ==========
    "Getters and Setters": {
        concept: `
&lt;p&gt;&lt;strong&gt;📥📤 Getters and Setters&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Getters and setters are special methods that let you control how properties are read and written.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Why Use Them?&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Add validation when setting values&lt;/li&gt;
&lt;li&gt;Compute values on the fly when getting&lt;/li&gt;
&lt;li&gt;Make properties look like regular variables but with logic behind them&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
        if (value &lt; 0 || value &gt; 150) {
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
&lt;/pre&gt;
`
    },

    // ========== STATIC ==========
    "Static Methods &amp; Properties": {
        concept: `
&lt;p&gt;&lt;strong&gt;📌 Static - Belongs to Class, Not Objects&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Normal methods/properties belong to objects. Static methods/properties belong to the CLASS itself - you don't need to create an object to use them.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;When to Use Static:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Utility/helper functions&lt;/li&gt;
&lt;li&gt;Factory methods (create objects)&lt;/li&gt;
&lt;li&gt;Constants shared across all instances&lt;/li&gt;
&lt;li&gt;Counting total instances created&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 JavaScript Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Counting Instances Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== OOP INTERVIEW QUESTIONS ==========
    "OOP Interview Questions": {
        concept: `
&lt;p&gt;&lt;strong&gt;❓ Common OOP Interview Questions&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q1: What are the 4 pillars of OOP?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Encapsulation (bundling data + methods, hiding internals), Inheritance (creating child classes from parent), Polymorphism (same method behaving differently), Abstraction (hiding complexity, showing simple interface).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q2: What is the difference between a class and an object?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;A class is a blueprint/template that defines properties and methods. An object is an instance created from a class - an actual thing with specific values.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q3: What is inheritance? Give an example.&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Inheritance lets a child class (Dog) inherit properties and methods from a parent class (Animal). The child can also add its own features (bark()).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q4: What is method overriding?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;When a child class defines a method with the same name as the parent's method, replacing the parent's implementation with its own.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q5: What is polymorphism?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Polymorphism means "many forms". It allows objects of different classes to be treated as objects of a common parent class. Each child can implement methods differently.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q6: What is encapsulation and why is it important?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Encapsulation is hiding internal state and requiring all interaction through methods. It prevents invalid data, allows internal changes without breaking external code, and improves security.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q7: What is abstraction?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Abstraction hides complex implementation details and shows only necessary features. Like using a car without knowing how the engine works.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q8: What is the difference between abstraction and encapsulation?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Encapsulation is about data protection (private fields). Abstraction is about design simplification (hiding complexity behind simple interface).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q9: What is a constructor?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;A special method that runs automatically when creating a new object. Used to initialize properties with values.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q10: What is the super keyword?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;super is used to call the parent class's constructor or methods from within a child class. super() must be called first in a child's constructor.&lt;/p&gt;
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = oopData;
}
