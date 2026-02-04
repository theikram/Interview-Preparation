// TYPESCRIPT - Basic Interview Prep (for Next.js Context)
const typescriptData = {
    // ========== WHAT IS TYPESCRIPT ==========
    "What is TypeScript?": {
        concept: `
<p><strong>📘 Understanding TypeScript</strong></p>

<p>TypeScript is <strong>JavaScript with types</strong>. It's a superset of JavaScript that adds optional type checking. All valid JavaScript is valid TypeScript.</p>

<p><strong>Why TypeScript?</strong></p>
<p>JavaScript doesn't check types:</p>
<pre>
// JavaScript - no error, but broken!
function add(a, b) {
    return a + b;
}
add("5", 3);  // Returns "53" (string concat, not 8!)
</pre>

<p>TypeScript catches this:</p>
<pre>
// TypeScript - error during development!
function add(a: number, b: number): number {
    return a + b;
}
add("5", 3);  // Error: string is not number
</pre>

<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Catch errors early</strong> - Before running code</li>
<li><strong>Better autocomplete</strong> - IDE knows what methods exist</li>
<li><strong>Self-documenting</strong> - Types show what data looks like</li>
<li><strong>Easier refactoring</strong> - Find all usages, type-safe changes</li>
</ul>

<p><strong>TypeScript in Next.js:</strong></p>
<p>Next.js has built-in TypeScript support. Just use .tsx files instead of .jsx!</p>
`
    },

    // ========== BASIC TYPES ==========
    "Basic Types": {
        concept: `
<p><strong>📋 TypeScript Basic Types</strong></p>

<pre>
// ===== PRIMITIVE TYPES =====

// String
let name: string = "Ali";

// Number (integers and floats)
let age: number = 25;
let price: number = 99.99;

// Boolean
let isActive: boolean = true;

// Null and Undefined
let nothing: null = null;
let notDefined: undefined = undefined;


// ===== ARRAYS =====

// Array of strings
let names: string[] = ["Ali", "Sara", "Ahmed"];

// Array of numbers
let scores: number[] = [85, 92, 78];

// Alternative syntax
let fruits: Array&lt;string&gt; = ["apple", "banana"];


// ===== OBJECTS =====

// Inline object type
let user: { name: string; age: number } = {
    name: "Ali",
    age: 25
};


// ===== SPECIAL TYPES =====

// any - turns off type checking (avoid if possible!)
let anything: any = "hello";
anything = 42;  // No error

// unknown - safer than any, must check type before using
let mystery: unknown = "hello";
if (typeof mystery === "string") {
    console.log(mystery.toUpperCase());  // OK - we checked!
}

// void - function returns nothing
function logMessage(message: string): void {
    console.log(message);
}

// never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}
</pre>
`
    },

    // ========== INTERFACES ==========
    "Interfaces": {
        concept: `
<p><strong>📋 Interfaces - Define Object Shapes</strong></p>

<p>An interface is like a contract - it says what properties an object must have.</p>

<pre>
// Define interface
interface User {
    id: number;
    name: string;
    email: string;
    age?: number;        // Optional (?)
    readonly createdAt: Date;  // Can't change after creation
}

// Use the interface
const user: User = {
    id: 1,
    name: "Ali",
    email: "ali@test.com",
    createdAt: new Date()
};

// Missing required property = Error!
// const badUser: User = { id: 1 };  // Missing name, email

// Optional property is fine to omit
// age is optional, so this is OK


// ===== INTERFACE FOR FUNCTIONS =====

interface GreetFunction {
    (name: string): string;
}

const greet: GreetFunction = (name) => {
    return "Hello, " + name;
};


// ===== EXTENDING INTERFACES =====

interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const employee: Employee = {
    name: "Sara",
    age: 30,
    employeeId: 12345,
    department: "Engineering"
};
</pre>
`
    },

    // ========== TYPE VS INTERFACE ==========
    "Type vs Interface": {
        concept: `
<p><strong>📋 Type Aliases vs Interfaces</strong></p>

<p>Both can define object shapes, but have small differences.</p>

<pre>
// TYPE ALIAS
type User = {
    id: number;
    name: string;
};

// INTERFACE
interface IUser {
    id: number;
    name: string;
}

// Both work similarly for objects
const user1: User = { id: 1, name: "Ali" };
const user2: IUser = { id: 2, name: "Sara" };


// ===== KEY DIFFERENCES =====

// 1. Types can be primitives, interfaces can't
type ID = string | number;  // Union type
type Status = "pending" | "active" | "done";  // Literal type

// 2. Interfaces can be extended/merged
interface Animal {
    name: string;
}
interface Animal {  // Same name - merges!
    age: number;
}
// Now Animal has both name AND age

// 3. Types use & for intersection
type PersonType = { name: string };
type EmployeeType = PersonType & { employeeId: number };


// ===== WHEN TO USE WHICH =====

// Use Interface for:
// - Object shapes
// - Class definitions
// - When you might extend later

// Use Type for:
// - Union types (A | B)
// - Primitive aliases
// - Tuple types
// - Complex type manipulations

// In Next.js, both work fine - be consistent!
</pre>
`
    },

    // ========== GENERICS ==========
    "Generics (Basics)": {
        concept: `
<p><strong>📋 Generics - Reusable Types</strong></p>

<p>Generics let you create flexible, reusable components that work with any type.</p>

<pre>
// Problem: Want one function that works with any type
// Without generics - have to make many functions
function getFirstString(arr: string[]): string {
    return arr[0];
}
function getFirstNumber(arr: number[]): number {
    return arr[0];
}

// WITH GENERICS - one function for all types!
function getFirst&lt;T&gt;(arr: T[]): T {
    return arr[0];
}

// TypeScript figures out T automatically
getFirst(["a", "b", "c"]);  // T is string, returns "a"
getFirst([1, 2, 3]);        // T is number, returns 1

// Or specify explicitly
getFirst&lt;string&gt;(["a", "b"]);


// ===== GENERIC INTERFACES =====

interface ApiResponse&lt;T&gt; {
    data: T;
    status: number;
    message: string;
}

// Use with different data types
const userResponse: ApiResponse&lt;User&gt; = {
    data: { id: 1, name: "Ali", email: "ali@test.com" },
    status: 200,
    message: "Success"
};

const numbersResponse: ApiResponse&lt;number[]&gt; = {
    data: [1, 2, 3],
    status: 200,
    message: "Success"
};


// ===== IN REACT/NEXT.JS =====

// Generic component props
interface ListProps&lt;T&gt; {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}
</pre>
`
    },

    // ========== TYPESCRIPT IN NEXT.JS ==========
    "TypeScript in Next.js": {
        concept: `
<p><strong>⚡ TypeScript in Next.js</strong></p>

<p>Next.js has built-in TypeScript support. Here are the most common patterns:</p>

<pre>
// ===== PAGE COMPONENT =====

// app/page.tsx
export default function HomePage() {
    return &lt;h1&gt;Home&lt;/h1&gt;;
}


// ===== COMPONENT WITH PROPS =====

interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
}

function Button({ text, onClick, disabled = false }: ButtonProps) {
    return (
        &lt;button onClick={onClick} disabled={disabled}&gt;
            {text}
        &lt;/button&gt;
    );
}


// ===== API ROUTE (Route Handler) =====

// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface User {
    id: number;
    name: string;
}

export async function GET(request: NextRequest) {
    const users: User[] = [
        { id: 1, name: "Ali" },
        { id: 2, name: "Sara" }
    ];
    return NextResponse.json(users);
}


// ===== SERVER COMPONENT DATA FETCHING =====

interface Post {
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise&lt;Post[]&gt; {
    const res = await fetch('https://api.example.com/posts');
    return res.json();
}


// ===== DYNAMIC ROUTE PARAMS =====

interface PageProps {
    params: { id: string };
    searchParams: { [key: string]: string | undefined };
}

export default function ProductPage({ params }: PageProps) {
    return &lt;h1&gt;Product {params.id}&lt;/h1&gt;;
}


// ===== USE STATE WITH TYPES =====

import { useState } from 'react';

interface FormData {
    name: string;
    email: string;
}

function Form() {
    const [data, setData] = useState&lt;FormData&gt;({
        name: '',
        email: ''
    });
    
    // TypeScript knows data.name and data.email exist
}
</pre>
`
    },

    // ========== COMMON INTERVIEW QUESTIONS ==========
    "TypeScript Interview Questions": {
        concept: `
<p><strong>❓ Common TypeScript Interview Questions</strong></p>

<p><strong>Q1: What is TypeScript?</strong></p>
<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing, classes, and interfaces.</p>

<p><strong>Q2: What's the difference between interface and type?</strong></p>
<p>Both define object shapes. Interfaces can be extended and merged, types are better for unions and primitives. For objects, use either consistently.</p>

<p><strong>Q3: What is "any" type and why should you avoid it?</strong></p>
<p>"any" disables type checking entirely. It defeats the purpose of TypeScript. Use "unknown" instead if you don't know the type.</p>

<p><strong>Q4: What are Generics?</strong></p>
<p>Generics allow you to create reusable components that work with multiple types while maintaining type safety. Example: Array&lt;T&gt; works with any type.</p>

<p><strong>Q5: What is the difference between "unknown" and "any"?</strong></p>
<p>"any" allows any operation without checking. "unknown" is safer - you must narrow the type before using it.</p>

<p><strong>Q6: What is a union type?</strong></p>
<p>A type that can be one of several types. Example: string | number means the value can be either string or number.</p>

<p><strong>Q7: What is type narrowing?</strong></p>
<p>Using conditions to narrow a type to a more specific type. If you check typeof x === "string", TypeScript knows x is a string in that block.</p>

<p><strong>Q8: How do you make a property optional?</strong></p>
<p>Add ? after the property name: { name: string; age?: number }. age is optional.</p>

<p><strong>Q9: What is readonly in TypeScript?</strong></p>
<p>readonly marks a property as immutable - can only be set during initialization, can't be changed later.</p>

<p><strong>Q10: Does TypeScript run in the browser?</strong></p>
<p>No. TypeScript compiles to JavaScript, which then runs in the browser. Types are only checked at compile time.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = typescriptData;
}
