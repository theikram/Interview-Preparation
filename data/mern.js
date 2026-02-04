// MERN STACK - Complete Interview Prep (Basics to Advanced)
const mernData = {
    // ========== MERN OVERVIEW ==========
    "What is MERN?": {
        concept: `
<p><strong>🚀 MERN Stack Definition</strong></p>
<p>Full-stack JavaScript framework for building web apps. One language (JS) for everything!</p>

<table>
<tr><th>Letter</th><th>Technology</th><th>Role</th></tr>
<tr><td>M</td><td>MongoDB</td><td>Database (stores data)</td></tr>
<tr><td>E</td><td>Express.js</td><td>Backend framework (handles requests)</td></tr>
<tr><td>R</td><td>React</td><td>Frontend (user interface)</td></tr>
<tr><td>N</td><td>Node.js</td><td>Runtime (runs JS on server)</td></tr>
</table>

<p><strong>How they connect:</strong></p>
<pre>
User Browser (React)
    ↓ HTTP Request (fetch/axios)
Express Server (Node.js)
    ↓ Database Query (Mongoose)
MongoDB
    ↓ Returns Data
Express → React → Shows to User
</pre>

<p><strong>Why use MERN?</strong></p>
<ul>
<li>✅ One language (JavaScript) everywhere</li>
<li>✅ JSON data format throughout</li>
<li>✅ Large community & job market</li>
<li>✅ Fast development with reusable components</li>
</ul>
`
    },

    // ========== NODE.JS BASICS ==========
    "Node.js Basics": {
        concept: `
<p><strong>📦 What is Node.js?</strong></p>
<p>JavaScript runtime that runs on servers. Built on Chrome's V8 engine.</p>

<p><strong>Key Features:</strong></p>
<ul>
<li><strong>Non-blocking I/O:</strong> Handles many requests without waiting</li>
<li><strong>Event-driven:</strong> Uses callbacks/promises</li>
<li><strong>NPM:</strong> Package manager with 1M+ packages</li>
</ul>

<p><strong>Basic Commands:</strong></p>
<pre>
# Check version
node --version

# Run a file
node app.js

# Initialize project (creates package.json)
npm init -y

# Install package
npm install express

# Install dev dependency
npm install nodemon --save-dev
</pre>

<p><strong>Simple Node.js Server:</strong></p>
<pre>
// server.js - Basic HTTP server without Express
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Run: node server.js
// Visit: http://localhost:3000
</pre>
`
    },

    // ========== EXPRESS.JS BASICS ==========
    "Express.js Setup": {
        concept: `
<p><strong>⚡ What is Express.js?</strong></p>
<p>Minimal web framework for Node.js. Makes building APIs easy.</p>

<p><strong>Installation:</strong></p>
<pre>
npm install express
</pre>

<p><strong>Basic Express Server:</strong></p>
<pre>
// app.js
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
</pre>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>app.get():</strong> Handle GET requests</li>
<li><strong>app.post():</strong> Handle POST requests</li>
<li><strong>req:</strong> Request object (incoming data)</li>
<li><strong>res:</strong> Response object (send data back)</li>
</ul>
`
    },

    // ========== EXPRESS ROUTES ==========
    "Express Routes (CRUD)": {
        concept: `
<p><strong>🛣️ REST API Routes</strong></p>
<p>CRUD = Create, Read, Update, Delete</p>

<table>
<tr><th>Operation</th><th>HTTP Method</th><th>Route Example</th></tr>
<tr><td>Create</td><td>POST</td><td>/api/users</td></tr>
<tr><td>Read All</td><td>GET</td><td>/api/users</td></tr>
<tr><td>Read One</td><td>GET</td><td>/api/users/:id</td></tr>
<tr><td>Update</td><td>PUT/PATCH</td><td>/api/users/:id</td></tr>
<tr><td>Delete</td><td>DELETE</td><td>/api/users/:id</td></tr>
</table>

<p><strong>Complete CRUD Example:</strong></p>
<pre>
const express = require('express');
const app = express();
app.use(express.json());

// Fake database
let users = [
    { id: 1, name: 'Ali' },
    { id: 2, name: 'Sara' }
];

// GET all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// GET one user by ID
app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
});

// POST create new user
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update user
app.put('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ error: 'Not found' });
    user.name = req.body.name;
    res.json(user);
});

// DELETE user
app.delete('/api/users/:id', (req, res) => {
    users = users.filter(u => u.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(5000);
</pre>
`
    },

    // ========== EXPRESS MIDDLEWARE ==========
    "Express Middleware": {
        concept: `
<p><strong>🔗 What is Middleware?</strong></p>
<p>Functions that run BETWEEN request and response. Can modify req/res.</p>

<p><strong>Flow:</strong></p>
<pre>
Request → Middleware1 → Middleware2 → Route Handler → Response
</pre>

<p><strong>Common Middleware Examples:</strong></p>
<pre>
const express = require('express');
const app = express();

// BUILT-IN: Parse JSON body
app.use(express.json());

// CUSTOM: Logger middleware
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next();  // MUST call next() to continue!
};
app.use(logger);

// CUSTOM: Auth middleware
const auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'No token' });
    }
    // Verify token here...
    next();
};

// Use on specific route
app.get('/api/protected', auth, (req, res) => {
    res.json({ message: 'You have access!' });
});

// ERROR middleware (4 parameters!)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
});
</pre>
`
    },

    // ========== MONGODB BASICS ==========
    "MongoDB Basics": {
        concept: `
<p><strong>🗄️ What is MongoDB?</strong></p>
<p>NoSQL document database. Stores data as JSON-like documents.</p>

<p><strong>SQL vs MongoDB Terms:</strong></p>
<table>
<tr><th>SQL</th><th>MongoDB</th></tr>
<tr><td>Database</td><td>Database</td></tr>
<tr><td>Table</td><td>Collection</td></tr>
<tr><td>Row</td><td>Document</td></tr>
<tr><td>Column</td><td>Field</td></tr>
</table>

<p><strong>Document Example:</strong></p>
<pre>
{
    "_id": "507f1f77bcf86cd799439011",
    "name": "Ali",
    "email": "ali@test.com",
    "age": 25,
    "hobbies": ["coding", "gaming"],
    "address": {
        "city": "Lahore",
        "country": "Pakistan"
    }
}
</pre>

<p><strong>Basic MongoDB Commands (mongo shell):</strong></p>
<pre>
# Show databases
show dbs

# Use/create database
use myapp

# Show collections
show collections

# Insert document
db.users.insertOne({ name: "Ali", age: 25 })

# Find all
db.users.find()

# Find with condition
db.users.find({ age: { $gt: 18 } })

# Update
db.users.updateOne({ name: "Ali" }, { $set: { age: 26 } })

# Delete
db.users.deleteOne({ name: "Ali" })
</pre>
`
    },

    // ========== MONGOOSE ODM ==========
    "Mongoose Connection": {
        concept: `
<p><strong>🔷 What is Mongoose?</strong></p>
<p>ODM (Object Document Mapper) for MongoDB. Adds schemas and validation.</p>

<p><strong>Installation:</strong></p>
<pre>
npm install mongoose
</pre>

<p><strong>Connect to MongoDB:</strong></p>
<pre>
// db.js
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myapp');
        console.log('MongoDB connected!');
    } catch (err) {
        console.error('Connection failed:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
</pre>

<p><strong>Use in app.js:</strong></p>
<pre>
const express = require('express');
const connectDB = require('./db');

const app = express();

// Connect to database
connectDB();

app.listen(5000);
</pre>
`
    },

    // ========== MONGOOSE SCHEMA ==========
    "Mongoose Schema & Model": {
        concept: `
<p><strong>📋 Schema = Structure of Document</strong></p>
<p>Defines fields, types, and validation rules.</p>

<p><strong>Schema Types:</strong></p>
<ul>
<li>String, Number, Boolean, Date</li>
<li>Array, ObjectId (for references)</li>
<li>Mixed (any type)</li>
</ul>

<p><strong>Complete Example:</strong></p>
<pre>
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,      // Must have
        trim: true           // Remove whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,        // No duplicates
        lowercase: true      // Auto lowercase
    },
    age: {
        type: Number,
        min: 0,              // Minimum value
        max: 120
    },
    role: {
        type: String,
        enum: ['user', 'admin'],  // Only these values
        default: 'user'
    },
    createdAt: {
        type: Date,
        default: Date.now    // Auto-set date
    }
});

// Create Model from Schema
const User = mongoose.model('User', userSchema);

module.exports = User;
</pre>
`
    },

    // ========== MONGOOSE CRUD ==========
    "Mongoose CRUD Operations": {
        concept: `
<p><strong>📝 CRUD with Mongoose</strong></p>

<pre>
const User = require('./models/User');

// CREATE - Single
const user = await User.create({
    name: 'Ali',
    email: 'ali@test.com'
});

// CREATE - Multiple
await User.insertMany([
    { name: 'Sara', email: 'sara@test.com' },
    { name: 'Ahmed', email: 'ahmed@test.com' }
]);

// READ - All
const users = await User.find();

// READ - With filter
const adults = await User.find({ age: { $gte: 18 } });

// READ - One by ID
const user = await User.findById('507f1f77bcf86cd799439011');

// READ - One by condition
const admin = await User.findOne({ role: 'admin' });

// UPDATE - Find and update
const updated = await User.findByIdAndUpdate(
    id,
    { name: 'New Name' },
    { new: true }  // Return updated doc
);

// DELETE - By ID
await User.findByIdAndDelete(id);

// DELETE - By condition
await User.deleteMany({ role: 'user' });
</pre>

<p><strong>Common Query Operators:</strong></p>
<table>
<tr><th>Operator</th><th>Meaning</th><th>Example</th></tr>
<tr><td>$gt</td><td>Greater than</td><td>{ age: { $gt: 18 } }</td></tr>
<tr><td>$gte</td><td>Greater or equal</td><td>{ age: { $gte: 18 } }</td></tr>
<tr><td>$lt</td><td>Less than</td><td>{ age: { $lt: 65 } }</td></tr>
<tr><td>$in</td><td>In array</td><td>{ role: { $in: ['admin', 'mod'] } }</td></tr>
</table>
`
    },

    // ========== REACT BASICS ==========
    "React Basics": {
        concept: `
<p><strong>⚛️ What is React?</strong></p>
<p>JavaScript library for building user interfaces with reusable components.</p>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Component:</strong> Reusable UI piece (function returning JSX)</li>
<li><strong>JSX:</strong> HTML-like syntax in JavaScript</li>
<li><strong>Props:</strong> Data passed from parent (read-only)</li>
<li><strong>State:</strong> Data managed inside component (can change)</li>
</ul>

<p><strong>Create React App:</strong></p>
<pre>
npx create-react-app my-app
cd my-app
npm start
</pre>

<p><strong>Basic Component:</strong></p>
<pre>
// App.js
function App() {
    return (
        &lt;div&gt;
            &lt;h1&gt;Hello World!&lt;/h1&gt;
            &lt;p&gt;This is JSX&lt;/p&gt;
        &lt;/div&gt;
    );
}

export default App;
</pre>

<p><strong>Component with Props:</strong></p>
<pre>
// Greeting.js
function Greeting({ name, age }) {
    return (
        &lt;div&gt;
            &lt;h2&gt;Hello, {name}!&lt;/h2&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
        &lt;/div&gt;
    );
}

// Usage
&lt;Greeting name="Ali" age={25} /&gt;
</pre>
`
    },

    // ========== REACT HOOKS ==========
    "React Hooks": {
        concept: `
<p><strong>🪝 What are Hooks?</strong></p>
<p>Functions that let you use state and lifecycle in functional components.</p>

<p><strong>Common Hooks:</strong></p>
<table>
<tr><th>Hook</th><th>Purpose</th></tr>
<tr><td>useState</td><td>Manage local state</td></tr>
<tr><td>useEffect</td><td>Side effects (fetch, timers)</td></tr>
<tr><td>useContext</td><td>Access context data</td></tr>
<tr><td>useRef</td><td>DOM references</td></tr>
</table>

<p><strong>useState Example:</strong></p>
<pre>
import { useState } from 'react';

function Counter() {
    // [value, setterFunction] = useState(initialValue)
    const [count, setCount] = useState(0);
    
    return (
        &lt;div&gt;
            &lt;p&gt;Count: {count}&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
                Add
            &lt;/button&gt;
        &lt;/div&gt;
    );
}
</pre>

<p><strong>useEffect Example:</strong></p>
<pre>
import { useState, useEffect } from 'react';

function UserList() {
    const [users, setUsers] = useState([]);
    
    // Runs after component mounts
    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);  // Empty array = run once
    
    return (
        &lt;ul&gt;
            {users.map(user => (
                &lt;li key={user._id}&gt;{user.name}&lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}
</pre>

<p><strong>useEffect Dependency Array:</strong></p>
<ul>
<li><code>[]</code> = Run once on mount</li>
<li><code>[value]</code> = Run when value changes</li>
<li>No array = Run every render (avoid!)</li>
</ul>
`
    },

    // ========== REACT + EXPRESS CONNECTION ==========
    "React + Express API": {
        concept: `
<p><strong>🔌 Connecting Frontend to Backend</strong></p>

<p><strong>Project Structure:</strong></p>
<pre>
my-project/
├── client/          # React app
│   ├── src/
│   └── package.json
├── server/          # Express app
│   ├── models/
│   ├── routes/
│   └── app.js
└── package.json
</pre>

<p><strong>React: Fetch Data (GET):</strong></p>
<pre>
const [todos, setTodos] = useState([]);

useEffect(() => {
    const fetchTodos = async () => {
        const res = await fetch('http://localhost:5000/api/todos');
        const data = await res.json();
        setTodos(data);
    };
    fetchTodos();
}, []);
</pre>

<p><strong>React: Send Data (POST):</strong></p>
<pre>
const addTodo = async (text) => {
    const res = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
};
</pre>

<p><strong>Express: Enable CORS:</strong></p>
<pre>
npm install cors
</pre>
<pre>
const cors = require('cors');
app.use(cors());  // Allow React to connect
</pre>
`
    },

    // ========== JWT AUTHENTICATION ==========
    "JWT Authentication": {
        concept: `
<p><strong>🔐 What is JWT?</strong></p>
<p>JSON Web Token - stateless authentication. Server creates token, client stores it.</p>

<p><strong>JWT Structure:</strong></p>
<pre>
header.payload.signature

eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.abc123signature
</pre>

<p><strong>Flow:</strong></p>
<ol>
<li>User sends login (email/password)</li>
<li>Server verifies, creates JWT</li>
<li>Client stores JWT (localStorage)</li>
<li>Client sends JWT in headers</li>
<li>Server verifies JWT, allows access</li>
</ol>

<p><strong>Installation:</strong></p>
<pre>
npm install jsonwebtoken bcrypt
</pre>

<p><strong>Express: Login Route:</strong></p>
<pre>
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({ error: 'Invalid email' });
    }
    
    // Check password
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return res.status(401).json({ error: 'Invalid password' });
    }
    
    // Create token
    const token = jwt.sign(
        { userId: user._id },
        'your-secret-key',
        { expiresIn: '7d' }
    );
    
    res.json({ token });
});
</pre>

<p><strong>Express: Protect Route:</strong></p>
<pre>
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'No token' });
    }
    
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};

app.get('/api/profile', auth, async (req, res) => {
    const user = await User.findById(req.userId);
    res.json(user);
});
</pre>

<p><strong>React: Store & Use Token:</strong></p>
<pre>
// After login
localStorage.setItem('token', data.token);

// Use in requests
fetch('/api/profile', {
    headers: {
        'Authorization': \`Bearer \${localStorage.getItem('token')}\`
    }
});
</pre>
`
    }
,

    // ========== ADDITIONAL INTERVIEW QUESTIONS ==========
    "SQL vs NoSQL": {
        concept: `
<p><strong>🗄️ SQL vs NoSQL - Which to Choose?</strong></p>

<table>
<tr><th>Feature</th><th>SQL (MySQL, PostgreSQL)</th><th>NoSQL (MongoDB)</th></tr>
<tr><td>Structure</td><td>Fixed schema (tables, rows)</td><td>Flexible (documents, JSON)</td></tr>
<tr><td>Relationships</td><td>JOINs between tables</td><td>Embedded or referenced</td></tr>
<tr><td>Scaling</td><td>Vertical (bigger server)</td><td>Horizontal (more servers)</td></tr>
<tr><td>Best For</td><td>Complex queries, transactions</td><td>Flexible data, fast development</td></tr>
</table>

<p><strong>Why MongoDB fits MERN:</strong></p>
<ul>
<li>✅ JSON everywhere (MongoDB stores JSON, Express/React use JSON)</li>
<li>✅ Flexible schema - easy to change structure during development</li>
<li>✅ JavaScript-friendly - Mongoose uses JS syntax</li>
<li>✅ Fast prototyping - no need to design complex schemas upfront</li>
</ul>

<p><strong>Example Comparison:</strong></p>
<pre>
// SQL (Multiple tables with JOINs)
users table: id, name, email
posts table: id, user_id, title, content

SELECT users.name, posts.title 
FROM users 
JOIN posts ON users.id = posts.user_id;

// MongoDB (Embedded document)
{
  "_id": 1,
  "name": "Ali",
  "email": "ali@test.com",
  "posts": [
    { "title": "My First Post", "content": "..." },
    { "title": "Second Post", "content": "..." }
  ]
}
</pre>
`
    },

    "Fibonacci & Patterns": {
        concept: `
<p><strong>🔢 Fibonacci Sequence - Easy Explanation</strong></p>

<p>Fibonacci: Each number is the sum of the previous two numbers.</p>
<p>Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...</p>

<p><strong>JavaScript Implementation:</strong></p>
<pre>
// Method 1: Simple Loop (Best for beginners)
function fibonacci(n) {
    if (n <= 1) return n;
    
    let a = 0, b = 1;
    
    for (let i = 2; i <= n; i++) {
        let temp = a + b;  // Add previous two
        a = b;             // Move forward
        b = temp;
    }
    
    return b;
}

console.log(fibonacci(6));  // 8
// Steps: 0, 1, 1, 2, 3, 5, 8

// Method 2: Recursive (Elegant but slower)
function fibRecursive(n) {
    if (n <= 1) return n;
    return fibRecursive(n - 1) + fibRecursive(n - 2);
}

// Print first N numbers
function printFibonacci(n) {
    for (let i = 0; i < n; i++) {
        console.log(fibonacci(i));
    }
}

printFibonacci(7);  // 0, 1, 1, 2, 3, 5, 8
</pre>

<p><strong>Python Implementation:</strong></p>
<pre>
# Method 1: Simple Loop
def fibonacci(n):
    if n <= 1:
        return n
    
    a, b = 0, 1
    
    for i in range(2, n + 1):
        a, b = b, a + b  # Swap and add
    
    return b

print(fibonacci(6))  # 8

# Method 2: Recursive
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)

# Print first N numbers
def print_fibonacci(n):
    for i in range(n):
        print(fibonacci(i), end=" ")

print_fibonacci(7)  # 0 1 1 2 3 5 8
</pre>

<p><strong>📐 Pattern Printing</strong></p>

<p><strong>Pattern 1: Right Triangle</strong></p>
<pre>
// JavaScript
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

# Python
def print_triangle(n):
    for i in range(1, n + 1):
        print('* ' * i)

print_triangle(5)
</pre>

<p><strong>Pattern 2: Pyramid</strong></p>
<pre>
// JavaScript
function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '* '.repeat(i);
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

# Python
def print_pyramid(n):
    for i in range(1, n + 1):
        print(' ' * (n - i) + '* ' * i)

print_pyramid(5)
</pre>

<p><strong>Pattern 3: Number Triangle</strong></p>
<pre>
// JavaScript
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

# Python
def print_number_triangle(n):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(j, end=' ')
        print()

print_number_triangle(5)
</pre>
`
    },

    "More Interview Questions": {
        concept: `
<p><strong>📚 Additional MERN Questions</strong></p>

<p>See the complete list of 9 questions in the MERN Stack category including:</p>
<ul>
<li>SQL vs NoSQL</li>
<li>REST vs GraphQL</li>
<li>What is Express.js?</li>
<li>How Middleware Works</li>
<li>Callbacks vs Promises vs Async/Await</li>
<li>What is Mongoose?</li>
<li>Authentication & Authorization</li>
<li>CRUD with MongoDB</li>
<li>HTTP Status Codes</li>
</ul>
`
    },

};

if (typeof module !== 'undefined') {
    module.exports = mernData;
}
