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

<pre>
// Simple Node.js Server
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello from Node.js!');
});

server.listen(5000);
</pre>
`
    },

    // ========== EXPRESS.JS ==========
    "Express.js Setup": {
        concept: `
<p><strong>⚡ Express.js Setup</strong></p>
<p>Fast, unopinionated, minimalist web framework for Node.js.</p>

<p><strong>1. Install:</strong></p>
<pre>npm install express cors dotenv mongoose</pre>

<p><strong>2. Basic Server (server.js):</strong></p>
<pre>
const express = require('express');
const app = express();

// Middleware
app.use(express.json()); // Allow JSON data

// Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
</pre>
`
    },

    "Express Routes (CRUD)": {
        concept: `
<p><strong>🛣️ Express Routes</strong></p>
<p>How the server responds to different URLs.</p>

<pre>
// GET: Fetch data
app.get('/api/users', (req, res) => {
    res.json({ name: 'Ikram', role: 'Dev' });
});

// POST: Create data
app.post('/api/users', (req, res) => {
    const newUser = req.body; // Data from client
    console.log(newUser);
    res.status(201).json({ message: 'User created' });
});

// PUT: Update data
app.put('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} updated\` });
});

// DELETE: Remove data
app.delete('/api/users/:id', (req, res) => {
    res.json({ message: \`User \${req.params.id} deleted\` });
});
</pre>
`
    },

    "Express Middleware": {
        concept: `
<p><strong>🛡️ Middleware</strong></p>
<p>Functions that run <strong>between</strong> the request and the response. Can modify request object.</p>

<pre>
// Custom Middleware (Logger)
const logger = (req, res, next) => {
    console.log(\`\${req.method} \${req.url}\`);
    next(); // Move to next middleware
};

app.use(logger); // Apply to all routes
</pre>

<p><strong>Common Middleware:</strong></p>
<ul>
<li><code>express.json()</code> - Parses incoming JSON</li>
<li><code>cors()</code> - Allows cross-origin requests</li>
<li><code>dotenv</code> - Manages environment variables</li>
</ul>
`
    },

    // ========== MONGODB & MONGOOSE ==========
    "MongoDB Basics": {
        concept: `
<p><strong>🍃 MongoDB Basics</strong></p>
<p>NoSQL Database. Stores data in JSON-like documents.</p>

<p><strong>SQL vs NoSQL:</strong></p>
<table>
<tr><th>SQL (MySQL)</th><th>NoSQL (MongoDB)</th></tr>
<tr><td>Tables</td><td>Collections</td></tr>
<tr><td>Rows</td><td>Documents</td></tr>
<tr><td>Columns</td><td>Fields</td></tr>
</table>

<pre>
// MongoDB Document Example
{
    "_id": "64f8a...",
    "name": "Ikram",
    "skills": ["React", "Node"],
    "active": true
}
</pre>
`
    },

    "Mongoose Connection": {
        concept: `
<p><strong>🔗 Connecting Mongoose</strong></p>
<p>Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js.</p>

<pre>
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
};

connectDB();
</pre>
`
    },

    "Mongoose Schema & Model": {
        concept: `
<p><strong>📝 Schema & Model</strong></p>
<p>Schema defines the structure. Model wraps the schema to interact with DB.</p>

<pre>
const mongoose = require('mongoose');

// 1. Define Schema
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
}, { timestamps: true });

// 2. Create Model
const User = mongoose.model('User', userSchema);

module.exports = User;
</pre>
`
    },

    "Mongoose CRUD Operations": {
        concept: `
<p><strong>⚙️ Mongoose CRUD</strong></p>

<pre>
// Create (Insert)
const user = await User.create({ 
    name: 'Ali', 
    email: 'ali@test.com' 
});

// Read (Find)
const allUsers = await User.find({});
const oneUser = await User.findById('64f8...');
const filterUser = await User.findOne({ email: 'ali@test.com' });

// Update
const updatedUser = await User.findByIdAndUpdate(
    '64f8...', 
    { name: 'Updated Name' },
    { new: true } // Return updated doc
);

// Delete
await User.findByIdAndDelete('64f8...');
</pre>
`
    },

    // ========== FULL STACK INTEGRATION ==========
    "React Basics": {
        concept: `
<p><strong>⚛️ React Quick Overview</strong></p>
<p>Library for building UI based on components.</p>

<pre>
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        &lt;div&gt;
            &lt;h1&gt;Count: {count}&lt;/h1&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;+&lt;/button&gt;
        &lt;/div&gt;
    );
};

export default Counter;
</pre>
`
    },

    "React Hooks": {
        concept: `
<p><strong>🪝 Important React Hooks</strong></p>

<ul>
<li><code>useState</code>: Manage local state</li>
<li><code>useEffect</code>: Side effects (API calls, subscriptions)</li>
<li><code>useContext</code>: Global state (Auth, Theme)</li>
<li><code>useRef</code>: Reference DOM elements</li>
</ul>

<pre>
// API Call with useEffect
useEffect(() => {
    const fetchUsers = async () => {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    };
    fetchUsers();
}, []); // Empty array = run once on mount
</pre>
`
    },

    "React + Express API": {
        concept: `
<p><strong>🌐 Connecting React to Express</strong></p>

<p><strong>1. Express (Backend):</strong></p>
<pre>
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Server!' });
});
</pre>

<p><strong>2. React (Frontend):</strong></p>
<pre>
useEffect(() => {
    fetch('http://localhost:5000/api/message')
        .then(res => res.json())
        .then(data => console.log(data.message));
        // Output: "Hello from Server!"
}, []);
</pre>
`
    },

    "JWT Authentication": {
        concept: `
<p><strong>🔒 JWT Authentication</strong></p>

<p><strong>What is JWT?</strong></p>
<p>JSON Web Token - stateless authentication. Server creates token, client stores it.</p>

<p><strong>JWT Structure:</strong></p>
<pre>
header.payload.signature

eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQ...abc123signature
</pre>

<p><strong>Flow:</strong></p>
<ol>
<li>User sends login (email/password)</li>
<li>Server verifies, creates JWT</li>
<li>Client stores JWT (localStorage)</li>
<li>Client sends JWT in Headers for protected routes</li>
</ol>

<p><strong>Node.js (Generate Token):</strong></p>
<pre>
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};
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
    },

    // ========== 9 NEW MERN INTERVIEW QUESTIONS ==========
    "1. SQL vs NoSQL": {
        concept: `
<p><strong>🗄️ SQL vs NoSQL - Simple Explanation</strong></p>

<p><strong>SQL (Like MySQL, PostgreSQL):</strong></p>
<ul>
<li>Data stored in <strong>tables</strong> with rows and columns (like Excel)</li>
<li>Need to define structure BEFORE adding data</li>
<li>Good for: Banking, complex relationships</li>
</ul>

<p><strong>NoSQL (Like MongoDB):</strong></p>
<ul>
<li>Data stored as <strong>documents</strong> (like JSON objects)</li>
<li>Flexible - can add any fields anytime</li>
<li>Good for: Fast development, changing data</li>
</ul>

<p><strong>Example:</strong></p>
<pre>
// SQL - Rigid table structure
| id | name | email          |
|----|------|----------------|
| 1  | Ali  | ali@gmail.com  |

// MongoDB - Flexible document
{
  "_id": 1,
  "name": "Ali",
  "email": "ali@gmail.com",
  "hobbies": ["coding", "gaming"]  // Can add extra fields!
}
</pre>

<p><strong>Why MongoDB for MERN?</strong></p>
<ul>
<li>✅ JavaScript everywhere - MongoDB uses JSON format</li>
<li>✅ Fast to build - no need to plan complex tables</li>
<li>✅ Easy to change - add new fields anytime</li>
</ul>
`
    },

    "2. REST vs GraphQL": {
        concept: `
<p><strong>🔌 REST vs GraphQL - Easy Explanation</strong></p>

<p><strong>REST API:</strong></p>
<ul>
<li>Multiple URLs for different data (like many doors)</li>
<li>/users, /posts, /comments - each URL gives fixed data</li>
<li>Simple but might give MORE data than you need</li>
</ul>

<p><strong>GraphQL:</strong></p>
<ul>
<li>ONE URL for everything (/graphql)</li>
<li>YOU choose exactly what data you want</li>
<li>More complex but efficient</li>
</ul>

<p><strong>Real Example:</strong></p>
<pre>
// REST - You get EVERYTHING (even what you don't need)
GET /api/user/1
Response: { id, name, email, phone, address, age, job... }

// GraphQL - You ask for ONLY what you need
query {
  user(id: 1) {
    name    // Only get name
    email   // Only get email
  }
}
</pre>

<p><strong>When to use which?</strong></p>
<table>
<tr><th>Use REST</th><th>Use GraphQL</th></tr>
<tr><td>Simple CRUD apps</td><td>Mobile apps (save data)</td></tr>
<tr><td>Caching needed</td><td>Complex data needs</td></tr>
<tr><td>Quick to build</td><td>Frontend keeps changing</td></tr>
</table>
`
    },

    "3. What is Express.js?": {
        concept: `
<p><strong>⚡ Express.js - Simple Explanation</strong></p>

<p><strong>What is it?</strong></p>
<p>Express is a small helper library that makes building web servers in Node.js EASY.</p>

<p><strong>Without Express (Hard way):</strong></p>
<pre>
const http = require('http');

http.createServer((req, res) => {
  // Manually check every URL
  if (req.url === '/') {
    res.end('Home');
  } else if (req.url === '/about') {
    res.end('About');
  }
  // Gets messy fast!
}).listen(3000);
</pre>

<p><strong>With Express (Easy way):</strong></p>
<pre>
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Home'));
app.get('/about', (req, res) => res.send('About'));

app.listen(3000);
// Clean and simple!
</pre>

<p><strong>Why use Express?</strong></p>
<ul>
<li>✅ <strong>Easy routing:</strong> app.get(), app.post() - simple!</li>
<li>✅ <strong>Middleware:</strong> Add features like login, logging easily</li>
<li>✅ <strong>JSON handling:</strong> app.use(express.json()) - done!</li>
<li>✅ <strong>Huge community:</strong> Lots of plugins available</li>
</ul>
`
    },

    "4. How Middleware Works": {
        concept: `
<p><strong>🔗 Middleware - Super Easy Explanation</strong></p>

<p><strong>What is Middleware?</strong></p>
<p>Think of it as <strong>checkpoints</strong> before your main code runs.</p>
<p>Like security guards at a building - they check things before you enter.</p>

<pre>
Request → [Guard 1] → [Guard 2] → Your Code → Response
</pre>

<p><strong>Simple Example:</strong></p>
<pre>
// This middleware logs every request
const logger = (req, res, next) => {
  console.log('Someone visited:', req.url);
  next();  // Let them pass to next step!
};

app.use(logger);  // Apply to ALL routes

// Now this runs: logger → then route
app.get('/', (req, res) => {
  res.send('Welcome!');
});
</pre>

<p><strong>Real Uses:</strong></p>
<table>
<tr><th>Middleware</th><th>What it does</th></tr>
<tr><td>express.json()</td><td>Reads JSON from requests</td></tr>
<tr><td>cors()</td><td>Allows other websites to connect</td></tr>
<tr><td>auth()</td><td>Checks if user is logged in</td></tr>
<tr><td>errorHandler()</td><td>Catches errors nicely</td></tr>
</table>

<p><strong>Key point:</strong> Always call <code>next()</code> to continue, or send response!</p>
`
    },

    "5. Callbacks vs Promises vs Async/Await": {
        concept: `
<p><strong>⏱️ Async Code - Easy Explanation</strong></p>

<p>JavaScript doesn't wait for slow things (like API calls). We need ways to handle this:</p>

<p><strong>1. Callbacks (Old Way) 😵</strong></p>
<pre>
// Nested callbacks = "Callback Hell"
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMore(b, function(c) {
      // Too many levels! Hard to read!
    });
  });
});
</pre>

<p><strong>2. Promises (Better) 😊</strong></p>
<pre>
// Chain with .then()
getData()
  .then(a => getMoreData(a))
  .then(b => getEvenMore(b))
  .then(c => console.log(c))
  .catch(err => console.log(err));
// Cleaner but still chains
</pre>

<p><strong>3. Async/Await (Best!) 🎉</strong></p>
<pre>
// Looks like normal code!
async function fetchData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMore(b);
    console.log(c);
  } catch (err) {
    console.log(err);
  }
}
// Easy to read and write!
</pre>

<p><strong>Remember:</strong></p>
<ul>
<li><code>await</code> only works inside <code>async</code> functions</li>
<li>Always use <code>try/catch</code> for errors</li>
<li><code>await</code> pauses until the promise finishes</li>
</ul>
`
    },

    "6. What is Mongoose?": {
        concept: `
<p><strong>🔷 Mongoose - Simple Explanation</strong></p>

<p><strong>What is it?</strong></p>
<p>Mongoose is a helper that makes MongoDB easier to use. It adds RULES to your data.</p>

<p><strong>Without Mongoose:</strong></p>
<pre>
// MongoDB accepts ANYTHING - no rules!
db.users.insertOne({
  name: 123,        // Should be string but no error
  email: "not an email",  // Invalid but saves anyway
});
</pre>

<p><strong>With Mongoose:</strong></p>
<pre>
// Define RULES (Schema)
const userSchema = new mongoose.Schema({
  name: {
    type: String,       // Must be text
    required: true      // Must have value
  },
  email: {
    type: String,
    required: true,
    match: /@/          // Must contain @
  },
  age: {
    type: Number,
    min: 0,             // Can't be negative
    max: 120
  }
});

const User = mongoose.model('User', userSchema);

// Now MongoDB has RULES!
await User.create({ name: 123 });  // ERROR! Must be string
</pre>
`
    },

    "7. Authentication & Authorization": {
        concept: `
<p><strong>🔐 Auth - Simple Explanation</strong></p>

<p><strong>Authentication:</strong> WHO are you? (Login)</p>
<p><strong>Authorization:</strong> WHAT can you do? (Permissions)</p>

<p><strong>Simple Flow:</strong></p>
<pre>
1. User sends email + password
2. Server checks if correct
3. Server creates a "ticket" (JWT token)
4. User saves ticket in browser
5. User shows ticket for protected pages
6. Server checks ticket is valid
</pre>

<p><strong>Key Tools:</strong></p>
<table>
<tr><th>Tool</th><th>What it does</th></tr>
<tr><td>bcrypt</td><td>Scrambles passwords (hash)</td></tr>
<tr><td>JWT</td><td>Creates secure tickets (tokens)</td></tr>
</table>

<p><strong>Code Example:</strong></p>
<pre>
// Register - Save scrambled password
const hash = await bcrypt.hash(password, 10);
await User.create({ email, password: hash });

// Login - Check password, give ticket
const user = await User.findOne({ email });
const valid = await bcrypt.compare(password, user.password);
if (valid) {
  const token = jwt.sign({ userId: user._id }, 'secret');
  res.json({ token });
}

// Protected route - Check ticket
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Login first!' });
  
  const decoded = jwt.verify(token, 'secret');
  req.userId = decoded.userId;
  next();
};
</pre>
`
    },

    "8. CRUD with MongoDB": {
        concept: `
<p><strong>📝 CRUD - The 4 Basic Operations</strong></p>

<p><strong>C</strong>reate, <strong>R</strong>ead, <strong>U</strong>pdate, <strong>D</strong>elete</p>

<table>
<tr><th>CRUD</th><th>HTTP Method</th><th>What it does</th></tr>
<tr><td>Create</td><td>POST</td><td>Add new data</td></tr>
<tr><td>Read</td><td>GET</td><td>Get data</td></tr>
<tr><td>Update</td><td>PUT/PATCH</td><td>Change data</td></tr>
<tr><td>Delete</td><td>DELETE</td><td>Remove data</td></tr>
</table>

<p><strong>Easy Examples:</strong></p>
<pre>
// CREATE - Add new user
app.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);  // 201 = Created
});

// READ - Get all users
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);  // 200 = OK
});

// READ - Get one user
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

// UPDATE - Change user
app.put('/users/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }  // Return updated version
  );
  res.json(user);
});

// DELETE - Remove user
app.delete('/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();  // 204 = Deleted, no content
});
</pre>
`
    },

    "9. HTTP Status Codes": {
        concept: `
<p><strong>📊 Status Codes - Easy Guide</strong></p>

<p>Status codes tell the client what happened. Think of them as response grades:</p>

<table>
<tr><th>Code</th><th>Name</th><th>When to Use</th></tr>
<tr><td><strong>200</strong></td><td>OK</td><td>Everything worked! (GET, PUT)</td></tr>
<tr><td><strong>201</strong></td><td>Created</td><td>New thing made! (POST)</td></tr>
<tr><td><strong>204</strong></td><td>No Content</td><td>Deleted successfully! (DELETE)</td></tr>
<tr><td><strong>400</strong></td><td>Bad Request</td><td>You sent wrong data</td></tr>
<tr><td><strong>401</strong></td><td>Unauthorized</td><td>Please login first!</td></tr>
<tr><td><strong>403</strong></td><td>Forbidden</td><td>You're logged in but can't do this</td></tr>
<tr><td><strong>404</strong></td><td>Not Found</td><td>This doesn't exist</td></tr>
<tr><td><strong>500</strong></td><td>Server Error</td><td>Something broke on server</td></tr>
</table>

<p><strong>Easy Code Examples:</strong></p>
<pre>
// 200 - Success
res.status(200).json({ users });

// 201 - Created something new
res.status(201).json({ newUser });

// 400 - Bad data from user
if (!email) {
  return res.status(400).json({ error: 'Email required!' });
}

// 401 - Not logged in
if (!token) {
  return res.status(401).json({ error: 'Please login!' });
}

// 403 - Not allowed
if (user.role !== 'admin') {
  return res.status(403).json({ error: 'Admins only!' });
}

// 404 - Not found
if (!user) {
  return res.status(404).json({ error: 'User not found!' });
}

// 500 - Server crashed
app.use((err, req, res, next) => {
  res.status(500).json({ error: 'Something went wrong!' });
});
</pre>

<p><strong>Quick Memory Trick:</strong></p>
<ul>
<li><strong>2xx</strong> = Success! 😊</li>
<li><strong>4xx</strong> = Your fault (client error)</li>
<li><strong>5xx</strong> = Our fault (server error)</li>
</ul>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = mernData;
}
