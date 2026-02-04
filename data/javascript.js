// JAVASCRIPT - Complete Interview Prep (Basics to Advanced)
const javascriptData = {
    "Variables: var, let, const": {
        concept: `<p><strong>Three ways to declare variables:</strong></p>

<p><strong>var (legacy - avoid):</strong></p>
<ul>
<li>Function-scoped (not block-scoped)</li>
<li>Hoisted with undefined value</li>
<li>Can be redeclared</li>
<li>Creates window property (global scope)</li>
</ul>

<p><strong>let (use for changing values):</strong></p>
<ul>
<li>Block-scoped { }</li>
<li>Hoisted but in Temporal Dead Zone (TDZ)</li>
<li>Cannot be redeclared in same scope</li>
<li>Can be reassigned</li>
</ul>

<p><strong>const (default choice):</strong></p>
<ul>
<li>Block-scoped { }</li>
<li>Must be initialized when declared</li>
<li>Cannot be reassigned</li>
<li>For objects/arrays: reference is constant, contents can change!</li>
</ul>

<p><strong>Best Practice:</strong> Use const by default. Use let only when you need to reassign. Never use var.</p>

<p><strong>Interview Q: const object can be modified?</strong></p>
<p>A: Yes! const prevents reassignment of the variable, not mutation of the value. const obj = {} means you can't do obj = newObj, but obj.prop = value works.</p>`,
        example: `<pre>// var - function scoped, hoisted
function varExample() {
    console.log(x); // undefined (hoisted)
    var x = 10;
    
    if (true) {
        var x = 20; // Same variable!
    }
    console.log(x); // 20
}

// let - block scoped, TDZ
function letExample() {
    // console.log(y); // ReferenceError (TDZ)
    let y = 10;
    
    if (true) {
        let y = 20; // Different variable
        console.log(y); // 20
    }
    console.log(y); // 10
}

// const - can't reassign
const PI = 3.14159;
// PI = 3; // TypeError: Assignment to constant

// const with objects/arrays - contents can change!
const user = { name: 'Ali' };
user.name = 'Ahmed';  // OK - modifying content
user.age = 25;        // OK - adding property
// user = {};         // TypeError - can't reassign

const numbers = [1, 2, 3];
numbers.push(4);      // OK - [1, 2, 3, 4]
numbers[0] = 10;      // OK - [10, 2, 3, 4]
// numbers = [];      // TypeError - can't reassign

// To prevent mutation, use Object.freeze
const frozen = Object.freeze({ name: 'Ali' });
frozen.name = 'Ahmed'; // Silently fails (or error in strict mode)
console.log(frozen.name); // 'Ali'

// var creates window property
var globalVar = 'hello';
console.log(window.globalVar); // 'hello'

let globalLet = 'world';
console.log(window.globalLet); // undefined</pre>`
    },

    "Scope: Global, Local, Block": {
        concept: `<p><strong>Scope determines where variables are accessible.</strong></p>

<p><strong>Global Scope:</strong></p>
<ul>
<li>Variables declared outside any function</li>
<li>Accessible everywhere</li>
<li>Attached to window object (var only)</li>
<li>Avoid polluting global scope!</li>
</ul>

<p><strong>Function/Local Scope:</strong></p>
<ul>
<li>Variables declared inside function</li>
<li>Only accessible inside that function</li>
<li>var, let, const all respect function scope</li>
</ul>

<p><strong>Block Scope:</strong></p>
<ul>
<li>Variables declared inside { } (if, for, while)</li>
<li>Only let and const are block-scoped</li>
<li>var ignores block boundaries!</li>
</ul>

<p><strong>Scope Chain:</strong></p>
<p>When variable not found in current scope, JS looks up the chain to outer scopes until global scope.</p>

<p><strong>Lexical Scope:</strong></p>
<p>Inner functions have access to outer function's variables. Scope is determined by where function is WRITTEN, not called.</p>`,
        example: `<pre>// Global scope
var globalVar = 'I am global';
let globalLet = 'Also global';

function outer() {
    // Function scope
    var outerVar = 'I am outer';
    let outerLet = 'Also outer';
    
    function inner() {
        // Inner function can access outer
        console.log(outerVar);  // Works - scope chain
        console.log(globalVar); // Works - scope chain
        
        let innerVar = 'I am inner';
    }
    
    inner();
    // console.log(innerVar); // ReferenceError
}

// Block scope difference
if (true) {
    var blockVar = 'var escapes block';
    let blockLet = 'let stays in block';
    const blockConst = 'const stays in block';
}
console.log(blockVar);   // Works (var ignores block)
// console.log(blockLet); // ReferenceError

// For loop classic problem
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3 (var is function-scoped)

for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100);
}
// Prints: 0, 1, 2 (let creates new binding each iteration)

// Lexical scope - determined at write time
function createCounter() {
    let count = 0;
    return function() {
        count++;       // Accesses count from outer scope
        return count;
    };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2</pre>`
    },

    "Data Types & Type Coercion": {
        concept: `<p><strong>Primitive Types (7):</strong></p>
<ul>
<li><strong>string</strong> - "hello", 'world', \`template\`</li>
<li><strong>number</strong> - 42, 3.14, NaN, Infinity</li>
<li><strong>boolean</strong> - true, false</li>
<li><strong>undefined</strong> - declared but not assigned</li>
<li><strong>null</strong> - intentional absence of value</li>
<li><strong>symbol</strong> - unique identifier</li>
<li><strong>bigint</strong> - large integers (123n)</li>
</ul>

<p><strong>Reference Types:</strong></p>
<ul>
<li><strong>object</strong> - { key: value }</li>
<li><strong>array</strong> - [1, 2, 3] (special object)</li>
<li><strong>function</strong> - (special object)</li>
</ul>

<p><strong>Type Coercion:</strong></p>
<p>JavaScript automatically converts types in certain operations.</p>
<ul>
<li><strong>Implicit:</strong> Automatic (5 + "5" = "55")</li>
<li><strong>Explicit:</strong> Manual (Number("5"), String(5))</li>
</ul>

<p><strong>Truthy vs Falsy:</strong></p>
<p>Falsy: false, 0, "", null, undefined, NaN</p>
<p>Everything else is truthy (including "0", [], {})</p>`,
        example: `<pre>// typeof operator
typeof "hello"      // "string"
typeof 42           // "number"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // "object" (famous bug!)
typeof []           // "object"
typeof {}           // "object"
typeof function(){} // "function"

// Check array
Array.isArray([])   // true
Array.isArray({})   // false

// Type coercion examples
5 + "5"             // "55" (number to string)
"5" - 2             // 3 (string to number)
"5" * "2"           // 10
true + true         // 2
[] + []             // "" (empty string)
[] + {}             // "[object Object]"
{} + []             // 0 (block + array)

// Explicit conversion
Number("42")        // 42
Number("hello")     // NaN
String(42)          // "42"
Boolean(0)          // false
Boolean("0")        // true (non-empty string)
parseInt("42px")    // 42
parseFloat("3.14")  // 3.14

// Truthy/Falsy
if ("") console.log("truthy");  // doesn't run
if ("0") console.log("truthy"); // runs! ("0" is truthy)
if ([]) console.log("truthy");  // runs! (empty array is truthy)

// Common pattern - default value
const name = input || "default";

// Nullish coalescing (better for "" and 0)
const name = input ?? "default"; // Only null/undefined trigger default

// == vs === (see later topic)
"5" == 5   // true (coercion)
"5" === 5  // false (strict)</pre>`
    },

    "Operators & Control Flow": {
        concept: `<p><strong>Arithmetic Operators:</strong></p>
<p>+ - * / % ** (exponent) ++ --</p>

<p><strong>Comparison Operators:</strong></p>
<ul>
<li><strong>==</strong> - Loose equality (coerces types)</li>
<li><strong>===</strong> - Strict equality (no coercion)</li>
<li><strong>!=</strong> and <strong>!==</strong> - Inequality versions</li>
<li>< > <= >=</li>
</ul>

<p><strong>Logical Operators:</strong></p>
<ul>
<li><strong>&&</strong> - AND (returns first falsy or last value)</li>
<li><strong>||</strong> - OR (returns first truthy or last value)</li>
<li><strong>!</strong> - NOT (inverts boolean)</li>
<li><strong>??</strong> - Nullish coalescing (returns right if left is null/undefined)</li>
</ul>

<p><strong>Control Flow:</strong></p>
<ul>
<li><strong>if / else if / else</strong></li>
<li><strong>switch / case / default</strong></li>
<li><strong>ternary:</strong> condition ? true : false</li>
</ul>

<p><strong>Interview Q: == vs ===?</strong></p>
<p>A: == coerces types first (1 == "1" is true). === checks type AND value (1 === "1" is false). Always use === to avoid unexpected behavior.</p>`,
        example: `<pre>// == vs ===
1 == "1"      // true (string coerced to number)
1 === "1"     // false (different types)
null == undefined  // true
null === undefined // false
0 == false    // true
0 === false   // false

// Logical operators as conditionals
const user = null;
const name = user && user.name;  // null (short-circuit)
const defaultName = name || "Guest";  // "Guest"

// Optional chaining (modern)
const name = user?.name;  // undefined (no error)

// Nullish coalescing
const count = 0;
count || 10   // 10 (0 is falsy)
count ?? 10   // 0 (only null/undefined trigger default)

// Short-circuit for function calls
isAdmin && showAdminPanel();  // Only calls if isAdmin true
callback && callback();       // Only calls if callback exists

// Ternary operator
const status = age >= 18 ? "adult" : "minor";

// Nested ternary (avoid - hard to read)
const grade = score >= 90 ? 'A' : score >= 80 ? 'B' : 'C';

// Switch statement
switch (day) {
    case 'Monday':
    case 'Tuesday':
        console.log('Work day');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend');
        break;
    default:
        console.log('Unknown');
}

// Object lookup (often cleaner than switch)
const handlers = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
};
const result = handlers[operation]?.(5, 3);</pre>`
    },

    "Functions & Arrow Functions": {
        concept: `<p><strong>Function Declaration:</strong></p>
<ul>
<li>Hoisted (can call before definition)</li>
<li>Has own 'this' binding</li>
<li>Can be named for recursion</li>
</ul>

<p><strong>Function Expression:</strong></p>
<ul>
<li>Not hoisted</li>
<li>Can be anonymous or named</li>
<li>Treated as a value</li>
</ul>

<p><strong>Arrow Functions (=>):</strong></p>
<ul>
<li>Shorter syntax</li>
<li>NO own 'this' (inherits from enclosing scope)</li>
<li>NO arguments object</li>
<li>Cannot be used as constructor</li>
<li>Implicit return for single expressions</li>
</ul>

<p><strong>Parameters:</strong></p>
<ul>
<li><strong>Default parameters:</strong> function(x = 10)</li>
<li><strong>Rest parameters:</strong> function(...args)</li>
<li><strong>Destructuring:</strong> function({ name, age })</li>
</ul>

<p><strong>Interview Q: When NOT to use arrow functions?</strong></p>
<p>A: Object methods (this would be undefined), event handlers (need this), constructors (can't use new), when you need arguments object.</p>`,
        example: `<pre>// Function declaration (hoisted)
console.log(add(2, 3)); // 5 - works!
function add(a, b) {
    return a + b;
}

// Function expression (not hoisted)
// console.log(subtract(5, 2)); // Error!
const subtract = function(a, b) {
    return a - b;
};

// Arrow function
const multiply = (a, b) => {
    return a * b;
};

// Arrow - implicit return (single expression)
const divide = (a, b) => a / b;
const square = x => x * x;  // One param, no parens needed

// Arrow - returning object (wrap in parentheses)
const createUser = (name) => ({ name: name, id: Date.now() });

// Default parameters
function greet(name = "Guest", greeting = "Hello") {
    return \`\${greeting}, \${name}!\`;
}
greet();           // "Hello, Guest!"
greet("Ali");      // "Hello, Ali!"

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4);  // 10

// Destructuring in parameters
function printUser({ name, age, city = "Unknown" }) {
    console.log(\`\${name}, \${age}, from \${city}\`);
}
printUser({ name: "Ali", age: 25 });

// 'this' difference
const obj = {
    name: "Object",
    regular: function() {
        console.log(this.name); // "Object"
    },
    arrow: () => {
        console.log(this.name); // undefined (window.name)
    }
};

// Arrow function useful for callbacks
const numbers = [1, 2, 3];
numbers.map(n => n * 2);
numbers.filter(n => n > 1);
numbers.forEach(n => console.log(n));</pre>`
    },

    "Hoisting & Temporal Dead Zone": {
        concept: `<p><strong>Hoisting:</strong></p>
<p>JavaScript moves declarations to top of their scope before execution. Only declarations, not initializations.</p>

<p><strong>var hoisting:</strong></p>
<ul>
<li>Declaration hoisted</li>
<li>Initialized with undefined</li>
<li>Can access before declaration (gets undefined)</li>
</ul>

<p><strong>let/const hoisting:</strong></p>
<ul>
<li>Declaration hoisted</li>
<li>NOT initialized (Temporal Dead Zone)</li>
<li>ReferenceError if accessed before declaration</li>
</ul>

<p><strong>Function hoisting:</strong></p>
<ul>
<li>Function declarations fully hoisted (can call before def)</li>
<li>Function expressions follow their variable rules (var/let/const)</li>
</ul>

<p><strong>Temporal Dead Zone (TDZ):</strong></p>
<p>The zone between start of scope and variable declaration where let/const cannot be accessed.</p>

<p><strong>Interview Q: What is TDZ?</strong></p>
<p>A: The period between entering scope and the line where let/const is declared. Accessing variable in TDZ throws ReferenceError. Exists because let/const are hoisted but not initialized.</p>`,
        example: `<pre>// var hoisting
console.log(varVariable); // undefined (hoisted but not initialized)
var varVariable = "hello";
console.log(varVariable); // "hello"

// What JS actually does:
// var varVariable;
// console.log(varVariable); // undefined
// varVariable = "hello";

// let/const - TDZ
console.log(letVariable); // ReferenceError!
let letVariable = "hello";

// TDZ example
let x = 10;
function example() {
    console.log(x); // ReferenceError!
    // TDZ starts here, x in this scope shadows outer x
    let x = 20;
}

// Function declaration hoisting
sayHello(); // "Hello!" - works
function sayHello() {
    console.log("Hello!");
}

// Function expression - not hoisted
sayGoodbye(); // TypeError: not a function
var sayGoodbye = function() {
    console.log("Goodbye!");
};

// Arrow function - not hoisted
greet(); // ReferenceError
const greet = () => console.log("Hi");

// Class hoisting - TDZ
const p = new Person(); // ReferenceError
class Person {}

// Only declarations hoist, not initializations
console.log(a); // undefined
var a = 1;
var b = 2;
console.log(b); // 2

// Hoisting in functions
function test() {
    console.log(inner); // undefined
    var inner = "inside";
    
    innerFunc(); // works - function hoisted
    function innerFunc() {}
}</pre>`
    },

    "Closures": {
        concept: `<p><strong>What is a Closure?</strong></p>
<p>A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.</p>

<p><strong>How it works:</strong></p>
<ol>
<li>Inner function is created inside outer function</li>
<li>Inner function references variables from outer function</li>
<li>When inner function is returned/used later, it still has access to those variables</li>
<li>The variables are "closed over" - preserved in memory</li>
</ol>

<p><strong>Use cases:</strong></p>
<ul>
<li>Data privacy (private variables)</li>
<li>Function factories</li>
<li>Maintaining state</li>
<li>Callbacks and event handlers</li>
<li>Currying and partial application</li>
</ul>

<p><strong>Interview Q: What will this log?</strong></p>
<pre>for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}</pre>
<p>A: Logs 3, 3, 3. Closure captures reference to i, not value. When setTimeout runs, loop is done, i is 3. Fix: use let, or IIFE.</p>`,
        example: `<pre>// Basic closure
function outer() {
    const secret = "hidden";
    
    function inner() {
        console.log(secret); // Can access outer's variable
    }
    
    return inner;
}

const fn = outer();
fn(); // "hidden" - still has access!

// Data privacy
function createCounter() {
    let count = 0;  // Private variable
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
counter.increment(); // 1
counter.increment(); // 2
counter.getCount();  // 2
// count is not directly accessible!

// Function factory
function createMultiplier(factor) {
    return (number) => number * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15

// Classic interview problem
// BAD - var and closure
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Logs: 3, 3, 3

// FIX 1: Use let (block scope creates new binding)
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Logs: 0, 1, 2

// FIX 2: IIFE (creates new scope per iteration)
for (var i = 0; i < 3; i++) {
    ((j) => {
        setTimeout(() => console.log(j), 100);
    })(i);
}
// Logs: 0, 1, 2

// Practical example - event handler
function setupButton(buttonId, message) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', () => {
        alert(message); // Closure over message
    });
}</pre>`
    },

    "this Keyword": {
        concept: `<p><strong>What is 'this'?</strong></p>
<p>'this' refers to the context in which a function is executed. Its value depends on HOW the function is called, not where it's defined.</p>

<p><strong>Rules (in order of precedence):</strong></p>
<ol>
<li><strong>new binding:</strong> new Constructor() → this = new object</li>
<li><strong>Explicit binding:</strong> call/apply/bind → this = specified object</li>
<li><strong>Implicit binding:</strong> obj.method() → this = obj</li>
<li><strong>Default binding:</strong> standalone call → this = window (or undefined in strict mode)</li>
</ol>

<p><strong>Arrow functions:</strong></p>
<p>Don't have own 'this'. Inherit from enclosing lexical scope (where they're written).</p>

<p><strong>Interview Q: Why is 'this' undefined in my callback?</strong></p>
<p>A: When you pass obj.method as a callback, it loses context. 'this' becomes undefined (strict) or window. Use arrow function or .bind().</p>`,
        example: `<pre>// Default binding
function showThis() {
    console.log(this);
}
showThis(); // window (or undefined in strict mode)

// Implicit binding
const obj = {
    name: "Object",
    greet() {
        console.log(this.name);
    }
};
obj.greet(); // "Object"

// Lost context problem
const greet = obj.greet;
greet(); // undefined (lost 'obj' context)

// Explicit binding
function introduce(greeting) {
    console.log(\`\${greeting}, I'm \${this.name}\`);
}

const person = { name: "Ali" };

introduce.call(person, "Hello");    // "Hello, I'm Ali"
introduce.apply(person, ["Hi"]);    // "Hi, I'm Ali"

const boundIntro = introduce.bind(person);
boundIntro("Hey"); // "Hey, I'm Ali"

// new binding
function Person(name) {
    this.name = name;
}
const p = new Person("Ali");
console.log(p.name); // "Ali"

// Arrow function - inherits this
const user = {
    name: "Ali",
    regular() {
        console.log(this.name); // "Ali"
    },
    arrow: () => {
        console.log(this.name); // undefined (inherits from global)
    },
    delayed() {
        setTimeout(function() {
            console.log(this.name); // undefined
        }, 100);
        
        setTimeout(() => {
            console.log(this.name); // "Ali" (arrow inherits)
        }, 100);
    }
};

// Fixing callback 'this' issues
class Button {
    constructor(text) {
        this.text = text;
    }
    
    handleClick = () => {  // Arrow = bound to instance
        console.log(this.text);
    }
    
    // Or bind in constructor
    // this.handleClick = this.handleClick.bind(this);
}</pre>`
    },

    "Array Methods": {
        concept: `<p><strong>Non-mutating (return new array):</strong></p>
<ul>
<li><strong>map(fn)</strong> - Transform each element</li>
<li><strong>filter(fn)</strong> - Keep elements that pass test</li>
<li><strong>reduce(fn, init)</strong> - Reduce to single value</li>
<li><strong>slice(start, end)</strong> - Copy portion of array</li>
<li><strong>concat(arr)</strong> - Merge arrays</li>
<li><strong>flat(depth)</strong> - Flatten nested arrays</li>
<li><strong>flatMap(fn)</strong> - Map then flatten</li>
</ul>

<p><strong>Mutating (change original):</strong></p>
<ul>
<li><strong>push/pop</strong> - Add/remove at end</li>
<li><strong>shift/unshift</strong> - Remove/add at start</li>
<li><strong>splice(idx, del, ...add)</strong> - Remove/add at position</li>
<li><strong>sort(fn)</strong> - Sort in place</li>
<li><strong>reverse()</strong> - Reverse in place</li>
</ul>

<p><strong>Search methods:</strong></p>
<ul>
<li><strong>find(fn)</strong> - First element that passes</li>
<li><strong>findIndex(fn)</strong> - Index of first match</li>
<li><strong>includes(val)</strong> - Check if exists</li>
<li><strong>indexOf(val)</strong> - Index of value</li>
<li><strong>some(fn)</strong> - Any element passes?</li>
<li><strong>every(fn)</strong> - All elements pass?</li>
</ul>`,
        example: `<pre>const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// filter - keep elements passing test
const even = numbers.filter(n => n % 2 === 0);
// [2, 4]

// reduce - combine to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// find - first matching element
const found = numbers.find(n => n > 3);
// 4

// some/every - test conditions
numbers.some(n => n > 4);  // true
numbers.every(n => n > 0); // true

// Chaining
const result = numbers
    .filter(n => n > 2)
    .map(n => n * 2)
    .reduce((a, b) => a + b, 0);
// (3+4+5) * 2 = 24

// Mutating methods
const arr = [3, 1, 4, 1, 5];
arr.push(9);     // [3, 1, 4, 1, 5, 9]
arr.pop();       // 9, arr = [3, 1, 4, 1, 5]
arr.shift();     // 3, arr = [1, 4, 1, 5]
arr.unshift(0);  // arr = [0, 1, 4, 1, 5]

// splice - remove 2 elements at index 1, add 'a', 'b'
arr.splice(1, 2, 'a', 'b');

// slice vs splice
const original = [1, 2, 3, 4, 5];
original.slice(1, 3);   // [2, 3] - doesn't modify
original.splice(1, 2);  // [2, 3] - MODIFIES original

// Sort (mutates, uses string comparison by default!)
[10, 2, 5, 1].sort();  // [1, 10, 2, 5] - WRONG
[10, 2, 5, 1].sort((a, b) => a - b); // [1, 2, 5, 10]

// Sort without mutating
const sorted = [...original].sort((a, b) => a - b);</pre>`
    },

    "Spread & Rest Operators": {
        concept: `<p><strong>Spread (...) - Expands iterable into individual elements:</strong></p>
<ul>
<li>Copy arrays: [...arr]</li>
<li>Merge arrays: [...arr1, ...arr2]</li>
<li>Copy objects: {...obj}</li>
<li>Merge objects: {...obj1, ...obj2}</li>
<li>Function calls: fn(...args)</li>
</ul>

<p><strong>Rest (...) - Collects remaining elements:</strong></p>
<ul>
<li>Function parameters: function(...args)</li>
<li>Array destructuring: [first, ...rest]</li>
<li>Object destructuring: {name, ...rest}</li>
</ul>

<p><strong>Key difference:</strong></p>
<p>Spread = "unpack" (spreading OUT). Rest = "collect" (gathering IN).</p>

<p><strong>Interview Q: Spread creates shallow or deep copy?</strong></p>
<p>A: SHALLOW copy. Nested objects/arrays are still references. For deep copy, use structuredClone() or JSON.parse(JSON.stringify(obj)).</p>`,
        example: `<pre>// SPREAD - Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const copy = [...arr1];           // [1, 2, 3]
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const withNew = [...arr1, 10, 20]; // [1, 2, 3, 10, 20]

// SPREAD - Objects
const user = { name: "Ali", age: 25 };
const copy = { ...user };
const updated = { ...user, age: 26 };  // Override age
const merged = { ...user, ...{ city: "NYC" } };

// SPREAD - Function arguments
const numbers = [1, 2, 3];
Math.max(...numbers); // 3 (same as Math.max(1, 2, 3))

// REST - Function parameters
function sum(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3, 4); // 10

// REST - After required params
function greet(greeting, ...names) {
    names.forEach(name => console.log(\`\${greeting}, \${name}\`));
}
greet("Hello", "Ali", "Ahmed", "Sara");

// REST - Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
// first = 1, second = 2, rest = [3, 4, 5]

// REST - Object destructuring
const { name, ...otherProps } = { name: "Ali", age: 25, city: "NYC" };
// name = "Ali", otherProps = { age: 25, city: "NYC" }

// SHALLOW copy warning
const obj = { a: { b: 1 } };
const copy = { ...obj };
copy.a.b = 2;
console.log(obj.a.b); // 2 - original changed!

// Deep copy solutions
const deep1 = JSON.parse(JSON.stringify(obj)); // Limited (no functions)
const deep2 = structuredClone(obj); // Modern, recommended</pre>`
    },

    "Destructuring": {
        concept: `<p><strong>Destructuring extracts values from arrays/objects into variables.</strong></p>

<p><strong>Array Destructuring:</strong></p>
<ul>
<li>Based on position/index</li>
<li>Can skip elements with commas</li>
<li>Can set default values</li>
<li>Can use rest operator</li>
</ul>

<p><strong>Object Destructuring:</strong></p>
<ul>
<li>Based on property names</li>
<li>Can rename variables</li>
<li>Can set defaults</li>
<li>Can destructure nested objects</li>
</ul>

<p><strong>Common Use Cases:</strong></p>
<ul>
<li>Function parameters</li>
<li>Importing from modules</li>
<li>Swapping variables</li>
<li>Working with API responses</li>
</ul>`,
        example: `<pre>// Array destructuring
const [a, b, c] = [1, 2, 3];
// a = 1, b = 2, c = 3

// Skip elements
const [first, , third] = [1, 2, 3];
// first = 1, third = 3

// Default values
const [x = 10, y = 20] = [5];
// x = 5, y = 20

// Rest
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];
// a = 2, b = 1

// Object destructuring
const user = { name: "Ali", age: 25, city: "NYC" };

const { name, age } = user;
// name = "Ali", age = 25

// Rename
const { name: userName, age: userAge } = user;
// userName = "Ali", userAge = 25

// Defaults
const { name, country = "USA" } = user;
// country = "USA"

// Nested destructuring
const data = {
    user: {
        profile: {
            name: "Ali",
            avatar: "pic.jpg"
        }
    }
};

const { user: { profile: { name } } } = data;
// name = "Ali"

// Function parameters
function greet({ name, age = 0 }) {
    console.log(\`\${name} is \${age}\`);
}
greet({ name: "Ali", age: 25 });

// Combining with rest
function updateUser({ id, ...updates }) {
    // id extracted, updates = rest of properties
    database.update(id, updates);
}

// From imports
import { useState, useEffect } from 'react';</pre>`
    },

    "Promises & Async/Await": {
        concept: `<p><strong>Promise:</strong></p>
<p>An object representing eventual completion or failure of an async operation.</p>

<p><strong>Promise States:</strong></p>
<ul>
<li><strong>pending</strong> - Initial state</li>
<li><strong>fulfilled</strong> - Operation completed</li>
<li><strong>rejected</strong> - Operation failed</li>
</ul>

<p><strong>Promise Methods:</strong></p>
<ul>
<li><strong>.then(onFulfilled, onRejected)</strong> - Handle result</li>
<li><strong>.catch(onRejected)</strong> - Handle errors</li>
<li><strong>.finally(callback)</strong> - Always runs</li>
</ul>

<p><strong>Async/Await:</strong></p>
<ul>
<li>Syntactic sugar over Promises</li>
<li>async function returns Promise</li>
<li>await pauses until Promise resolves</li>
<li>Use try/catch for error handling</li>
</ul>

<p><strong>Interview Q: forEach with async doesn't work properly?</strong></p>
<p>A: forEach doesn't await. Use for...of loop or Promise.all(array.map(async fn)).</p>`,
        example: `<pre>// Creating a Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Data loaded!");
        } else {
            reject(new Error("Failed"));
        }
    }, 1000);
});

// Using Promise
promise
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => console.log("Done"));

// Promise chaining
fetch('/api/user')
    .then(response => response.json())
    .then(user => fetch('/api/posts/' + user.id))
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.error(error));

// Async/Await (same as above, cleaner)
async function fetchUserPosts() {
    try {
        const userResponse = await fetch('/api/user');
        const user = await userResponse.json();
        
        const postsResponse = await fetch('/api/posts/' + user.id);
        const posts = await postsResponse.json();
        
        return posts;
    } catch (error) {
        console.error(error);
    }
}

// Parallel execution
const results = await Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
]);

// Promise.allSettled - get all results even if some fail
const results = await Promise.allSettled([
    fetch('/api/users'),
    fetch('/api/bad-url')
]);
// Returns: [{ status: 'fulfilled', value: ... }, { status: 'rejected', reason: ... }]

// DON'T use forEach with async
// BAD - forEach doesn't await
items.forEach(async (item) => {
    await processItem(item);
});

// GOOD - for...of awaits
for (const item of items) {
    await processItem(item);
}

// GOOD - parallel processing
await Promise.all(items.map(item => processItem(item)));</pre>`
    },

    "Event Loop & Call Stack": {
        concept: `<p><strong>JavaScript is single-threaded with an event loop.</strong></p>

<p><strong>Components:</strong></p>
<ul>
<li><strong>Call Stack:</strong> Where function execution happens (LIFO)</li>
<li><strong>Web APIs:</strong> Browser APIs (setTimeout, fetch, DOM events)</li>
<li><strong>Task Queue (Macrotask):</strong> setTimeout, setInterval, I/O</li>
<li><strong>Microtask Queue:</strong> Promises, queueMicrotask, MutationObserver</li>
</ul>

<p><strong>Event Loop Process:</strong></p>
<ol>
<li>Execute synchronous code on call stack</li>
<li>When stack empty, check microtask queue - execute ALL</li>
<li>Execute ONE macrotask</li>
<li>Repeat: check microtasks, then one macrotask...</li>
</ol>

<p><strong>Priority:</strong> Microtasks > Macrotasks</p>
<p>Promises (microtasks) always run before setTimeout (macrotask).</p>

<p><strong>Interview Q: What's the output order?</strong></p>
<pre>console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve().then(() => console.log(3));
console.log(4);</pre>
<p>A: 1, 4, 3, 2. Sync first, then microtask (promise), then macrotask (timeout).</p>`,
        example: `<pre>// Execution order example
console.log('Start');           // 1. Sync

setTimeout(() => {
    console.log('Timeout');     // 5. Macrotask (last)
}, 0);

Promise.resolve()
    .then(() => console.log('Promise 1'))  // 3. Microtask
    .then(() => console.log('Promise 2')); // 4. Microtask

console.log('End');             // 2. Sync

// Output: Start, End, Promise 1, Promise 2, Timeout

// Why setTimeout 0 isn't immediate
console.log('A');
setTimeout(() => console.log('B'), 0);
console.log('C');
// Output: A, C, B (B goes to task queue)

// Microtasks keep running until queue empty
Promise.resolve().then(() => {
    console.log('Micro 1');
    Promise.resolve().then(() => console.log('Micro 2'));
});
setTimeout(() => console.log('Timeout'), 0);
// Output: Micro 1, Micro 2, Timeout

// Blocking the event loop (BAD)
function blockFor(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {} // Blocks!
}

setTimeout(() => console.log('Timeout'), 100);
blockFor(2000); // Blocks for 2 seconds
// Timeout runs after 2+ seconds, not 100ms

// Don't block - use async/setTimeout for heavy work
async function processInChunks(data) {
    for (let i = 0; i < data.length; i++) {
        processItem(data[i]);
        if (i % 100 === 0) {
            // Yield to event loop every 100 items
            await new Promise(r => setTimeout(r, 0));
        }
    }
}</pre>`
    },

    "DOM Manipulation": {
        concept: `<p><strong>Selecting Elements:</strong></p>
<ul>
<li><strong>getElementById(id)</strong> - Single element by ID</li>
<li><strong>querySelector(css)</strong> - First match (CSS selector)</li>
<li><strong>querySelectorAll(css)</strong> - All matches (NodeList)</li>
<li><strong>getElementsByClassName(class)</strong> - Live HTMLCollection</li>
<li><strong>getElementsByTagName(tag)</strong> - Live HTMLCollection</li>
</ul>

<p><strong>Modifying Elements:</strong></p>
<ul>
<li><strong>textContent</strong> - Text only (safer)</li>
<li><strong>innerHTML</strong> - HTML content (XSS risk!)</li>
<li><strong>classList</strong> - add, remove, toggle, contains</li>
<li><strong>style</strong> - Inline styles (element.style.color)</li>
<li><strong>setAttribute/getAttribute</strong> - Attributes</li>
</ul>

<p><strong>Creating & Inserting:</strong></p>
<ul>
<li><strong>createElement(tag)</strong> - Create element</li>
<li><strong>appendChild(child)</strong> - Add at end</li>
<li><strong>insertBefore(new, ref)</strong> - Add before element</li>
<li><strong>append/prepend</strong> - Modern, accepts strings</li>
</ul>

<p><strong>Interview Q: innerHTML vs textContent?</strong></p>
<p>A: innerHTML parses HTML (XSS risk with user input). textContent is plain text (safe). Use textContent for user-provided content.</p>`,
        example: `<pre>// Selecting elements
const byId = document.getElementById('myId');
const byQuery = document.querySelector('.class');  // First match
const allMatches = document.querySelectorAll('div.item');  // NodeList

// Modifying text (safe)
element.textContent = 'Hello World';

// Modifying HTML (careful with user input!)
element.innerHTML = '<strong>Bold</strong>';

// DANGER - XSS vulnerability
const userInput = '<script>alert("hacked")</script>';
element.innerHTML = userInput; // DON'T DO THIS!
element.textContent = userInput; // Safe - escapes HTML

// Classes
element.classList.add('active', 'visible');
element.classList.remove('hidden');
element.classList.toggle('dark-mode');
element.classList.contains('active'); // true/false

// Styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';  // camelCase
element.style.cssText = 'color: red; background: blue;';

// Attributes
element.setAttribute('data-id', '123');
element.getAttribute('href');
element.removeAttribute('disabled');
element.dataset.id; // Access data-* attributes

// Creating elements
const div = document.createElement('div');
div.className = 'card';
div.textContent = 'New card';

// Inserting
parent.appendChild(div);               // Add at end
parent.insertBefore(div, reference);   // Before reference
parent.append(div, 'text', div2);      // Modern, multiple
parent.prepend(div);                   // At beginning

// Remove
element.remove();                      // Modern
parent.removeChild(element);           // Old way

// Clone
const clone = element.cloneNode(true); // true = deep clone

// Document fragment (performance)
const fragment = document.createDocumentFragment();
items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    fragment.appendChild(li);
});
list.appendChild(fragment); // Single DOM update</pre>`
    },

    "Events & Event Delegation": {
        concept: `<p><strong>Adding Event Listeners:</strong></p>
<p>element.addEventListener(type, handler, [options])</p>

<p><strong>Event Object Properties:</strong></p>
<ul>
<li><strong>e.target</strong> - Element that triggered event</li>
<li><strong>e.currentTarget</strong> - Element listener is on</li>
<li><strong>e.type</strong> - Event type ('click', etc.)</li>
<li><strong>e.preventDefault()</strong> - Stop default action</li>
<li><strong>e.stopPropagation()</strong> - Stop bubbling</li>
</ul>

<p><strong>Event Phases:</strong></p>
<ol>
<li><strong>Capturing</strong> - From window down to target</li>
<li><strong>Target</strong> - At the target element</li>
<li><strong>Bubbling</strong> - From target up to window</li>
</ol>

<p><strong>Event Delegation:</strong></p>
<p>Attach single listener to parent, use e.target to identify clicked child. Efficient for dynamic lists.</p>

<p><strong>Interview Q: What is event bubbling?</strong></p>
<p>A: When event on child also triggers handlers on all ancestors. Click on button inside div → button handler runs, then div handler runs, up to document.</p>`,
        example: `<pre>// Adding event listener
const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    console.log('Clicked!');
    console.log(e.target);        // Element clicked
    console.log(e.currentTarget); // Element with listener
});

// Remove listener
const handler = (e) => console.log('click');
button.addEventListener('click', handler);
button.removeEventListener('click', handler);

// Prevent default
document.querySelector('a').addEventListener('click', (e) => {
    e.preventDefault();  // Don't navigate
    console.log('Link clicked');
});

// Stop propagation
child.addEventListener('click', (e) => {
    e.stopPropagation();  // Parent handler won't run
});

// Event delegation
document.querySelector('ul').addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log('Clicked:', e.target.textContent);
    }
    
    // Or with data attributes
    if (e.target.dataset.action === 'delete') {
        const id = e.target.dataset.id;
        deleteItem(id);
    }
});

// Common events
element.addEventListener('click', fn);
element.addEventListener('dblclick', fn);
element.addEventListener('mouseenter', fn);  // No bubble
element.addEventListener('mouseleave', fn);
element.addEventListener('mouseover', fn);   // Bubbles
element.addEventListener('mouseout', fn);

input.addEventListener('focus', fn);
input.addEventListener('blur', fn);
input.addEventListener('input', fn);    // Every change
input.addEventListener('change', fn);   // On blur

document.addEventListener('keydown', fn);
document.addEventListener('keyup', fn);

window.addEventListener('load', fn);
document.addEventListener('DOMContentLoaded', fn);  // Faster
window.addEventListener('scroll', fn);
window.addEventListener('resize', fn);

// Once option
button.addEventListener('click', fn, { once: true });

// Capture phase (runs before bubbling)
parent.addEventListener('click', fn, { capture: true });</pre>`
    },

    "Debounce & Throttle": {
        concept: `<p><strong>Both limit how often a function runs. Used for performance.</strong></p>

<p><strong>Debounce:</strong></p>
<ul>
<li>Wait until activity stops, then fire</li>
<li>If called again, restart the timer</li>
<li>Use for: Search input, resize, save draft</li>
</ul>

<p><strong>Throttle:</strong></p>
<ul>
<li>Fire at most once per time period</li>
<li>Ignores calls during cooldown</li>
<li>Use for: Scroll, mousemove, rate limiting</li>
</ul>

<p><strong>Key Difference:</strong></p>
<p>Debounce: "Wait until user stops typing (300ms) then search."</p>
<p>Throttle: "Update scroll position at most every 100ms."</p>

<p><strong>Interview Q: When use debounce vs throttle?</strong></p>
<p>A: Debounce when you only care about final state (search input). Throttle when you need regular updates (scroll position, game loops).</p>`,
        example: `<pre>// Debounce implementation
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage - search input
const searchInput = document.getElementById('search');
const debouncedSearch = debounce((query) => {
    console.log('Searching for:', query);
    // API call here
}, 300);

searchInput.addEventListener('input', (e) => {
    debouncedSearch(e.target.value);
});

// Throttle implementation
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage - scroll handler
const throttledScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', throttledScroll);

// Using lodash/underscore (recommended in production)
import { debounce, throttle } from 'lodash';

const debouncedFn = debounce(fn, 300);
const throttledFn = throttle(fn, 100);

// Leading vs trailing execution
// Debounce with leading edge (fires immediately, then waits)
function debounceLeading(func, delay) {
    let timeoutId;
    let leadingCall = true;
    
    return function(...args) {
        if (leadingCall) {
            func.apply(this, args);
            leadingCall = false;
        }
        
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            leadingCall = true;
        }, delay);
    };
}</pre>`
    },

    "JavaScript Interview Q&A": {
        concept: `<p><strong>Q: == vs === ?</strong></p>
<p>A: == coerces types (1 == "1" true). === checks type and value (1 === "1" false). Always use ===.</p>

<p><strong>Q: null vs undefined?</strong></p>
<p>A: undefined = declared but not assigned. null = intentionally empty. typeof null is "object" (bug).</p>

<p><strong>Q: What is a closure?</strong></p>
<p>A: Function that remembers variables from outer scope even after outer function returns.</p>

<p><strong>Q: Explain event loop.</strong></p>
<p>A: Executes sync code, then all microtasks (promises), then one macrotask (setTimeout), repeat.</p>

<p><strong>Q: map vs forEach?</strong></p>
<p>A: map returns new array. forEach returns undefined. Use map for transformation, forEach for side effects.</p>

<p><strong>Q: What is hoisting?</strong></p>
<p>A: Declarations moved to top of scope. var initialized as undefined, let/const in TDZ.</p>

<p><strong>Q: Deep vs shallow copy?</strong></p>
<p>A: Shallow copies references (nested objects shared). Deep copies everything (truly independent).</p>

<p><strong>Q: What is prototypal inheritance?</strong></p>
<p>A: Objects inherit directly from other objects via prototype chain. Different from class-based inheritance.</p>`,
        example: `<pre>// == vs ===
1 == "1"     // true
1 === "1"    // false
null == undefined   // true
null === undefined  // false

// typeof quirks
typeof null        // "object" (bug)
typeof []          // "object"
typeof function(){}// "function"
typeof NaN         // "number"

// NaN is special
NaN === NaN        // false!
Number.isNaN(NaN)  // true (correct way)

// map vs forEach
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);  // [2, 4, 6]
const result = nums.forEach(n => n * 2);  // undefined

// Truthy/Falsy surprises
Boolean("")        // false
Boolean("0")       // true (non-empty string)
Boolean([])        // true (object)
Boolean({})        // true (object)
Boolean(0)         // false
Boolean(-1)        // true

// Short circuit
const name = user && user.name;  // name if user exists
const value = input || "default"; // input or default
const val = count ?? 10;  // 10 only if null/undefined

// Prototype chain
const obj = {};
obj.toString();  // Works - inherited from Object.prototype

// Deep copy
const deep = JSON.parse(JSON.stringify(obj)); // Limited
const deep2 = structuredClone(obj);  // Modern

// Check array
Array.isArray([]);  // true
Array.isArray({});  // false</pre>`
    },

    // ========== LOOPS COMPREHENSIVE ==========
    "All Loops (Complete Guide)": {
        concept: `
<p><strong>🔄 Understanding ALL JavaScript Loops</strong></p>

<p>Loops let you repeat code. Instead of writing the same thing 100 times, you write it once and loop 100 times!</p>

<p><strong>Real-Life Example:</strong></p>
<p>You have 50 products. To display each product on a website, you don't write 50 separate blocks of code - you loop through all products!</p>

<hr>
<p><strong>📋 1. FOR Loop (Most Common):</strong></p>
<p>Use when you know exactly how many times to loop.</p>
<pre>
// Structure: for (start; condition; increment)

// Basic: Print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);  // 1, 2, 3, 4, 5
}

// SHOPPING CART: Calculate total price
const cart = [
    { name: 'Phone', price: 500 },
    { name: 'Case', price: 20 },
    { name: 'Charger', price: 30 }
];

let total = 0;
for (let i = 0; i < cart.length; i++) {
    total = total + cart[i].price;
}
console.log('Total: $' + total);  // Total: $550

// Counting backwards
for (let i = 5; i >= 1; i--) {
    console.log(i);  // 5, 4, 3, 2, 1
}
</pre>

<hr>
<p><strong>📋 2. WHILE Loop:</strong></p>
<p>Use when you don't know how many times to loop, but know when to stop.</p>
<pre>
// Keep asking until correct password
let attempts = 0;
let correct = false;

while (!correct && attempts < 3) {
    const guess = prompt('Enter password:');
    if (guess === 'secret123') {
        correct = true;
        console.log('Welcome!');
    } else {
        attempts++;
        console.log('Wrong! Attempts left: ' + (3 - attempts));
    }
}

// SHOPPING: Add items until budget runs out
let budget = 100;
let itemsBought = 0;
const itemPrice = 25;

while (budget >= itemPrice) {
    budget = budget - itemPrice;
    itemsBought++;
}
console.log('Bought ' + itemsBought + ' items, $' + budget + ' left');
// Bought 4 items, $0 left
</pre>

<hr>
<p><strong>📋 3. DO-WHILE Loop:</strong></p>
<p>Like while, but guaranteed to run AT LEAST once.</p>
<pre>
// Always show menu at least once
let choice;
do {
    console.log('1. View Cart');
    console.log('2. Add Item');
    console.log('3. Checkout');
    console.log('4. Exit');
    choice = prompt('Choose option:');
    
    // Handle choice...
} while (choice !== '4');

console.log('Goodbye!');
</pre>

<hr>
<p><strong>📋 4. FOR...OF Loop (Arrays/Strings):</strong></p>
<p>Cleaner way to loop through array values.</p>
<pre>
const products = ['Phone', 'Laptop', 'Tablet'];

// Old way (for loop)
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

// New way (for...of) - CLEANER!
for (const product of products) {
    console.log(product);
}

// SHOPPING: Display each item in cart
const cartItems = ['iPhone', 'AirPods', 'Case'];
for (const item of cartItems) {
    console.log('🛒 ' + item);
}
// 🛒 iPhone
// 🛒 AirPods
// 🛒 Case

// Loop through string characters
for (const char of 'Hello') {
    console.log(char);  // H, e, l, l, o
}
</pre>

<hr>
<p><strong>📋 5. FOR...IN Loop (Object Properties):</strong></p>
<p>Use to loop through object keys.</p>
<pre>
const user = {
    name: 'Ali',
    age: 25,
    city: 'Lahore'
};

// Loop through object properties
for (const key in user) {
    console.log(key + ': ' + user[key]);
}
// name: Ali
// age: 25
// city: Lahore

// SHOPPING: Show order details
const order = {
    orderId: '12345',
    status: 'Shipped',
    total: 550
};

for (const key in order) {
    console.log(key.toUpperCase() + ' → ' + order[key]);
}
</pre>

<hr>
<p><strong>📋 Loop Control: break & continue</strong></p>
<pre>
// break - Exit loop completely
const numbers = [1, 2, 3, 4, 5, 6, 7];
for (const num of numbers) {
    if (num === 5) break;  // Stop at 5
    console.log(num);  // 1, 2, 3, 4
}

// continue - Skip current iteration
for (const num of numbers) {
    if (num === 3) continue;  // Skip 3
    console.log(num);  // 1, 2, 4, 5, 6, 7
}

// SHOPPING: Find product (stop when found)
const inventory = ['shirt', 'pants', 'shoes', 'hat'];
for (const item of inventory) {
    if (item === 'shoes') {
        console.log('Found shoes!');
        break;  // No need to keep searching
    }
}
</pre>
`
    },

    // ========== CONDITIONALS COMPREHENSIVE ==========
    "All Conditionals (if, switch, ternary)": {
        concept: `
<p><strong>🔀 Understanding ALL Conditionals</strong></p>

<p>Conditionals let your code make decisions. "IF this is true, do this. ELSE, do that."</p>

<p><strong>Real-Life Example:</strong></p>
<p>IF user is logged in → show dashboard. ELSE → show login page.</p>

<hr>
<p><strong>📋 1. IF Statement:</strong></p>
<pre>
const age = 18;

// Simple if
if (age >= 18) {
    console.log('You can vote!');
}

// SHOPPING: Free shipping check
const cartTotal = 75;
if (cartTotal >= 50) {
    console.log('✅ You get FREE shipping!');
}
</pre>

<hr>
<p><strong>📋 2. IF-ELSE:</strong></p>
<pre>
const isLoggedIn = false;

if (isLoggedIn) {
    console.log('Welcome back!');
} else {
    console.log('Please login first');
}

// SHOPPING: Stock check
const stock = 0;
if (stock > 0) {
    console.log('Add to Cart');
} else {
    console.log('Out of Stock');
}
</pre>

<hr>
<p><strong>📋 3. IF-ELSE IF-ELSE (Multiple Conditions):</strong></p>
<pre>
const score = 85;

if (score >= 90) {
    console.log('Grade: A');
} else if (score >= 80) {
    console.log('Grade: B');
} else if (score >= 70) {
    console.log('Grade: C');
} else if (score >= 60) {
    console.log('Grade: D');
} else {
    console.log('Grade: F');
}

// SHOPPING: Discount based on cart value
const total = 120;
let discount;

if (total >= 200) {
    discount = 20;  // 20% off
} else if (total >= 100) {
    discount = 10;  // 10% off
} else if (total >= 50) {
    discount = 5;   // 5% off
} else {
    discount = 0;
}
console.log('You get ' + discount + '% discount!');
</pre>

<hr>
<p><strong>📋 4. SWITCH Statement (Many Options):</strong></p>
<p>Better than many if-else when checking ONE variable against many values.</p>
<pre>
const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Start of work week');
        break;
    case 'Friday':
        console.log('TGIF!');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Weekend!');
        break;
    default:
        console.log('Regular day');
}

// SHOPPING: Payment method
const paymentMethod = 'card';

switch (paymentMethod) {
    case 'card':
        console.log('Processing card payment...');
        break;
    case 'paypal':
        console.log('Redirecting to PayPal...');
        break;
    case 'cod':
        console.log('Cash on Delivery selected');
        break;
    default:
        console.log('Invalid payment method');
}
</pre>

<hr>
<p><strong>📋 5. TERNARY Operator (Shorthand if-else):</strong></p>
<p>condition ? valueIfTrue : valueIfFalse</p>
<pre>
const age = 20;

// Long way
let canVote;
if (age >= 18) {
    canVote = 'Yes';
} else {
    canVote = 'No';
}

// Short way (ternary)
const canVote = age >= 18 ? 'Yes' : 'No';

// SHOPPING: Show price display
const inStock = true;
const buttonText = inStock ? 'Add to Cart' : 'Out of Stock';

const isMember = true;
const price = isMember ? 90 : 100;  // Members get discount

// Nested ternary (use sparingly!)
const score = 85;
const grade = score >= 90 ? 'A' 
            : score >= 80 ? 'B' 
            : score >= 70 ? 'C' : 'F';
</pre>

<hr>
<p><strong>📋 6. Logical Operators in Conditions:</strong></p>
<pre>
// AND (&&) - ALL conditions must be true
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log('You can drive!');
}

// OR (||) - ANY condition can be true
const isAdmin = false;
const isOwner = true;

if (isAdmin || isOwner) {
    console.log('You have access');
}

// NOT (!) - Reverses boolean
const isLoggedIn = false;

if (!isLoggedIn) {
    console.log('Please login');  // This runs
}

// SHOPPING: Checkout validation
const hasItems = true;
const hasPayment = true;
const hasAddress = false;

if (hasItems && hasPayment && hasAddress) {
    console.log('Proceeding to checkout...');
} else {
    console.log('Please complete all fields');
}
</pre>
`
    },

    // ========== REAL SHOPPING APP EXAMPLES ==========
    "Loops & Conditionals: Shopping App": {
        concept: `
<p><strong>🛒 Real Shopping App Examples</strong></p>

<p>Here are practical examples showing how loops and conditionals work together in a real shopping app.</p>

<hr>
<p><strong>📋 Example 1: Display Product List with Stock Status</strong></p>
<pre>
const products = [
    { name: 'iPhone', price: 999, stock: 5 },
    { name: 'MacBook', price: 1299, stock: 0 },
    { name: 'AirPods', price: 199, stock: 12 }
];

for (const product of products) {
    console.log('--- ' + product.name + ' ---');
    console.log('Price: $' + product.price);
    
    if (product.stock > 10) {
        console.log('Status: In Stock ✅');
    } else if (product.stock > 0) {
        console.log('Status: Low Stock ⚠️ Only ' + product.stock + ' left!');
    } else {
        console.log('Status: Out of Stock ❌');
    }
    console.log('');
}
</pre>

<hr>
<p><strong>📋 Example 2: Calculate Cart Total with Discount</strong></p>
<pre>
const cart = [
    { name: 'Shirt', price: 30, quantity: 2 },
    { name: 'Pants', price: 50, quantity: 1 },
    { name: 'Hat', price: 20, quantity: 3 }
];

// Calculate subtotal
let subtotal = 0;
for (const item of cart) {
    subtotal += item.price * item.quantity;
}

// Apply discount based on subtotal
let discount = 0;
if (subtotal >= 200) {
    discount = 20;
} else if (subtotal >= 100) {
    discount = 10;
}

const discountAmount = subtotal * (discount / 100);
const total = subtotal - discountAmount;

console.log('Subtotal: $' + subtotal);
console.log('Discount: ' + discount + '% (-$' + discountAmount + ')');
console.log('Total: $' + total);
</pre>

<hr>
<p><strong>📋 Example 3: Search Products</strong></p>
<pre>
const products = ['iPhone', 'iPad', 'MacBook', 'iMac', 'Apple Watch'];
const searchTerm = 'mac';

console.log('Searching for: ' + searchTerm);
const results = [];

for (const product of products) {
    if (product.toLowerCase().includes(searchTerm.toLowerCase())) {
        results.push(product);
    }
}

if (results.length > 0) {
    console.log('Found ' + results.length + ' products:');
    for (const result of results) {
        console.log('  - ' + result);
    }
} else {
    console.log('No products found');
}
</pre>

<hr>
<p><strong>📋 Example 4: Validate Checkout Form</strong></p>
<pre>
const formData = {
    name: 'Ali',
    email: 'ali@test.com',
    address: '',
    phone: '0300-1234567'
};

const errors = [];

// Check each field
for (const field in formData) {
    if (formData[field] === '') {
        errors.push(field + ' is required');
    }
}

// Show results
if (errors.length === 0) {
    console.log('✅ Form is valid! Processing order...');
} else {
    console.log('❌ Please fix these errors:');
    for (const error of errors) {
        console.log('  - ' + error);
    }
}
</pre>

<hr>
<p><strong>📋 Example 5: Filter Products by Price Range</strong></p>
<pre>
const products = [
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Watch', price: 200 },
    { name: 'Laptop', price: 1200 },
    { name: 'Earbuds', price: 100 }
];

const minPrice = 200;
const maxPrice = 600;

console.log('Products between $' + minPrice + ' - $' + maxPrice + ':');

for (const product of products) {
    if (product.price >= minPrice && product.price <= maxPrice) {
        console.log(product.name + ' - $' + product.price);
    }
}
</pre>
`
    }
,

    "Fibonacci Sequence": {
        concept: `
<p><strong>🔢 Fibonacci - Each number is sum of previous two</strong></p>

<p>Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...</p>

<pre>
// Method 1: Loop (Recommended - Fast)
function fibonacci(n) {
    if (n <= 1) return n;  // Base case
    
    let a = 0, b = 1;  // First two numbers
    
    for (let i = 2; i <= n; i++) {
        let temp = a + b;  // Add previous two
        a = b;             // Shift: a becomes b
        b = temp;          // Shift: b becomes sum
    }
    
    return b;
}

console.log(fibonacci(6));  // 8
// Steps: 0→1→1→2→3→5→8


// Method 2: Recursive (Elegant but slow)
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}


// Print first N Fibonacci numbers
function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}

printFibonacci(7);
// Output: 0, 1, 1, 2, 3, 5, 8
</pre>
`
    },

    "Pattern Printing": {
        concept: `
<p><strong>📐 Common Pattern Programs</strong></p>

<p><strong>Pattern 1: Right Triangle</strong></p>
<pre>
function printTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

printTriangle(5);
// Output:
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
</pre>

<p><strong>Pattern 2: Pyramid</strong></p>
<pre>
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);  // Leading spaces
        let stars = '* '.repeat(i);       // Stars
        console.log(spaces + stars);
    }
}

printPyramid(5);
// Output:
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
</pre>

<p><strong>Pattern 3: Number Triangle</strong></p>
<pre>
function printNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printNumberTriangle(5);
// Output:
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5 
</pre>

<p><strong>Pattern 4: Inverted Triangle</strong></p>
<pre>
function printInvertedTriangle(n) {
    for (let i = n; i >= 1; i--) {
        console.log('* '.repeat(i));
    }
}

printInvertedTriangle(5);
// Output:
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
</pre>

<p><strong>Pattern 5: Diamond</strong></p>
<pre>
function printDiamond(n) {
    // Upper half (pyramid)
    for (let i = 1; i <= n; i++) {
        console.log(' '.repeat(n - i) + '* '.repeat(i));
    }
    
    // Lower half (inverted pyramid)
    for (let i = n - 1; i >= 1; i--) {
        console.log(' '.repeat(n - i) + '* '.repeat(i));
    }
}

printDiamond(5);
// Output:
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 
</pre>
`
    },

};

if (typeof module !== 'undefined') {
    module.exports = javascriptData;
}
