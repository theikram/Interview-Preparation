// NODE.JS - Complete Interview Prep (Beginner-Friendly + APIs Explained)
const nodeData = {
  // ========== WHAT IS NODE.JS ==========
  "What is Node.js?": {
    concept: `
<p><strong>🟢 Understanding Node.js from Scratch</strong></p>

<p>Let me explain Node.js in the simplest way possible. Imagine you know JavaScript - you've used it to make buttons clickable, show/hide elements, and make websites interactive. But here's the thing: JavaScript traditionally only worked inside web browsers (Chrome, Firefox, etc.).</p>

<p><strong>Node.js changed everything.</strong> It lets you run JavaScript OUTSIDE the browser - on your computer, on a server, anywhere! This means you can now use JavaScript to:</p>
<ul>
<li>Create web servers (like the ones powering Facebook, Netflix)</li>
<li>Build APIs (we'll explain what these are!)</li>
<li>Read and write files on your computer</li>
<li>Connect to databases</li>
<li>Build command-line tools</li>
</ul>

<p><strong>Real-World Analogy:</strong></p>
<p>Think of JavaScript as a chef who could only cook in restaurant kitchens (browsers). Node.js is like giving that chef a portable kitchen - now they can cook anywhere! Same skills, more places to use them.</p>

<p><strong>Why is Node.js So Popular?</strong></p>
<ul>
<li><strong>One Language Everywhere:</strong> Use JavaScript for frontend AND backend</li>
<li><strong>Super Fast:</strong> Built on Chrome's V8 engine (same thing that makes Chrome fast)</li>
<li><strong>Non-blocking:</strong> Can handle many requests at once (we'll explain this)</li>
<li><strong>Huge Community:</strong> Millions of free packages on NPM</li>
</ul>

<hr>
<p><strong>📋 Quick Start:</strong></p>
<pre>
// Check if Node.js is installed
node --version

// Run a JavaScript file
node myfile.js

// Start Node.js interactive mode (REPL)
node
> console.log("Hello from Node!")
Hello from Node!
</pre>
`
  },

  // ========== WHAT ARE APIs ==========
  "What are APIs?": {
    concept: `
<p><strong>🔌 APIs Explained Simply</strong></p>

<p>API stands for <strong>Application Programming Interface</strong>. That sounds complicated, but it's actually a very simple concept. Let me explain with a real-life example.</p>

<p><strong>The Restaurant Analogy:</strong></p>
<p>Imagine you're at a restaurant. You (the customer) want food from the kitchen. But you can't just walk into the kitchen and make your own food! Instead:</p>
<ol>
<li>You look at the <strong>menu</strong> (available options)</li>
<li>You tell the <strong>waiter</strong> what you want</li>
<li>The waiter takes your <strong>request</strong> to the kitchen</li>
<li>The kitchen prepares the food</li>
<li>The waiter brings back your <strong>response</strong> (food!)</li>
</ol>

<p><strong>The waiter is the API!</strong> It's the middleman that takes your request, communicates with the system (kitchen), and brings back the response.</p>

<p><strong>In Programming Terms:</strong></p>
<ul>
<li><strong>You (Frontend/App)</strong> = The customer</li>
<li><strong>API</strong> = The waiter (messenger)</li>
<li><strong>Server/Database</strong> = The kitchen</li>
<li><strong>Request</strong> = Your order ("I want user data")</li>
<li><strong>Response</strong> = What you get back (the data)</li>
</ul>

<p><strong>Real Examples of APIs:</strong></p>
<ul>
<li>When you check weather on your phone → App calls Weather API</li>
<li>When you login with Google → App calls Google's Auth API</li>
<li>When you see a YouTube video → YouTube's API sends video data</li>
<li>When you pay online → Payment API (Stripe, PayPal) handles it</li>
</ul>

<p><strong>So when we build Node.js/Express servers, we're building APIs!</strong> We create endpoints (menu items) that other apps can call to get or send data.</p>

<hr>
<p><strong>📋 Simple API Call Example:</strong></p>
<pre>
// Frontend making an API call
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

// What happens:
// 1. Frontend REQUESTS data from /users endpoint
// 2. Server (API) processes the request
// 3. Server RESPONDS with user data
// 4. Frontend receives and uses the data
</pre>
`
  },

  // ========== ENDPOINTS VS ROUTES ==========
  "Endpoints, Routes & HTTP Methods": {
    concept: `
<p><strong>🛣️ Understanding Endpoints, Routes, and HTTP Methods</strong></p>

<p>These terms are often used together and can be confusing. Let me clarify each one:</p>

<p><strong>What is an ENDPOINT?</strong></p>
<p>An endpoint is a specific URL where your API can be accessed. Think of it as an address. Just like your home has an address, each API function has an endpoint.</p>

<p>Examples of endpoints:</p>
<ul>
<li><code>/users</code> - Get all users</li>
<li><code>/users/123</code> - Get user with ID 123</li>
<li><code>/products</code> - Get all products</li>
<li><code>/login</code> - Handle user login</li>
</ul>

<p><strong>What is a ROUTE?</strong></p>
<p>A route is the CODE that handles what happens when someone visits an endpoint. It's the instructions for that address.</p>

<p><strong>Endpoint vs Route:</strong></p>
<ul>
<li><strong>Endpoint</strong> = The URL address (/users)</li>
<li><strong>Route</strong> = The code that runs when that URL is called</li>
</ul>

<hr>
<p><strong>What are HTTP Methods?</strong></p>
<p>HTTP methods tell the API WHAT you want to do. Same endpoint, different actions:</p>

<table>
<tr><th>Method</th><th>What It Does</th><th>Example</th></tr>
<tr><td><strong>GET</strong></td><td>Read/Fetch data</td><td>GET /users → Get all users</td></tr>
<tr><td><strong>POST</strong></td><td>Create new data</td><td>POST /users → Create new user</td></tr>
<tr><td><strong>PUT</strong></td><td>Update ALL data</td><td>PUT /users/1 → Replace user 1</td></tr>
<tr><td><strong>PATCH</strong></td><td>Update SOME data</td><td>PATCH /users/1 → Update name only</td></tr>
<tr><td><strong>DELETE</strong></td><td>Remove data</td><td>DELETE /users/1 → Delete user 1</td></tr>
</table>

<p><strong>Real-Life Analogy - Library Book:</strong></p>
<ul>
<li><strong>GET</strong> = Read the book</li>
<li><strong>POST</strong> = Donate a new book</li>
<li><strong>PUT</strong> = Replace the entire book</li>
<li><strong>PATCH</strong> = Fix a typo in the book</li>
<li><strong>DELETE</strong> = Remove the book from library</li>
</ul>

<hr>
<p><strong>📋 Code Example:</strong></p>
<pre>
// Same endpoint (/users), different methods = different actions!

// GET /users - Fetch all users
app.get('/users', (req, res) => {
    res.json(allUsers);
});

// POST /users - Create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({ message: 'User created!' });
});

// DELETE /users/5 - Delete user with ID 5
app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    // delete user logic
    res.json({ message: 'User deleted!' });
});
</pre>
`
  },

  // ========== FIRST SERVER ==========
  "Creating Your First Server": {
    concept: `
<p><strong>🖥️ Building Your First Node.js Server</strong></p>

<p>A server is just a program that waits for requests and sends back responses. When you type a website URL, you're sending a request to a server, and it responds with the webpage.</p>

<p><strong>Let's build one step by step:</strong></p>

<p><strong>Step 1: Create a file called server.js</strong></p>
<pre>
// Import the built-in 'http' module
// Node.js comes with this - no installation needed!
const http = require('http');

// Create a server
// This function runs EVERY TIME someone visits our server
const server = http.createServer((request, response) => {
    // Set the response header (what type of content we're sending)
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body
    response.end('Hello! Welcome to my first server!');
});

// Start the server on port 3000
// Port = like an apartment number for your computer
server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});
</pre>

<p><strong>Step 2: Run it!</strong></p>
<pre>
node server.js
</pre>

<p><strong>Step 3: Visit http://localhost:3000 in your browser!</strong></p>

<hr>
<p><strong>Understanding Each Part:</strong></p>
<ul>
<li><code>require('http')</code> - Loads Node's built-in HTTP module</li>
<li><code>createServer()</code> - Creates a server that handles requests</li>
<li><code>request</code> - Contains info about incoming request (URL, method, etc.)</li>
<li><code>response</code> - Used to send data back to the client</li>
<li><code>listen(3000)</code> - Starts server on port 3000</li>
</ul>

<hr>
<p><strong>📋 Handling Different URLs:</strong></p>
<pre>
const http = require('http');

const server = http.createServer((req, res) => {
    // Check which URL the user is visiting
    if (req.url === '/') {
        res.end('Home Page');
    } else if (req.url === '/about') {
        res.end('About Page');
    } else if (req.url === '/contact') {
        res.end('Contact Page');
    } else {
        res.writeHead(404);
        res.end('Page Not Found!');
    }
});

server.listen(3000);
</pre>

<p><strong>This is basic but tedious!</strong> That's why we use Express.js - it makes routing much easier (covered in Express section).</p>
`
  },

  // ========== NPM BASICS ==========
  "NPM (Node Package Manager)": {
    concept: `
<p><strong>📦 NPM Explained Simply</strong></p>

<p>NPM stands for <strong>Node Package Manager</strong>. Think of it as an app store for JavaScript code. Instead of writing everything from scratch, you can download pre-made packages (libraries) that other developers created.</p>

<p><strong>Real-Life Analogy:</strong></p>
<p>Imagine you're baking a cake. You COULD grow your own wheat, milk your own cow, and raise chickens for eggs. OR you could just buy flour, milk, and eggs from the store! NPM is like the grocery store - you get ingredients (packages) that others have prepared.</p>

<p><strong>Popular NPM Packages:</strong></p>
<ul>
<li><strong>express</strong> - Web framework for building APIs</li>
<li><strong>mongoose</strong> - Connect to MongoDB database</li>
<li><strong>bcrypt</strong> - Hash passwords securely</li>
<li><strong>jsonwebtoken</strong> - Create login tokens</li>
<li><strong>dotenv</strong> - Manage environment variables</li>
<li><strong>cors</strong> - Handle cross-origin requests</li>
</ul>

<hr>
<p><strong>📋 Essential NPM Commands:</strong></p>
<pre>
# Initialize a new project (creates package.json)
npm init

# Quick init with defaults
npm init -y

# Install a package
npm install express
npm i express          # shortcut

# Install as dev dependency (only for development)
npm install nodemon --save-dev
npm i nodemon -D       # shortcut

# Install all packages from package.json
npm install

# Uninstall a package
npm uninstall express

# Update packages
npm update

# Run a script from package.json
npm run dev
npm start              # special - doesn't need 'run'
</pre>

<hr>
<p><strong>Understanding package.json:</strong></p>
<pre>
{
    "name": "my-app",
    "version": "1.0.0",
    "description": "My awesome app",
    "main": "index.js",
    
    "scripts": {
        "start": "node index.js",
        "dev": "nodemon index.js",
        "test": "jest"
    },
    
    "dependencies": {
        "express": "^4.18.2",
        "mongoose": "^7.0.0"
    },
    
    "devDependencies": {
        "nodemon": "^2.0.22"
    }
}
</pre>

<p><strong>Key Points:</strong></p>
<ul>
<li><code>dependencies</code> = Packages needed to RUN the app</li>
<li><code>devDependencies</code> = Packages needed only during development</li>
<li><code>scripts</code> = Custom commands you can run with npm run</li>
<li><code>node_modules</code> folder = Where packages are installed (DON'T commit to Git!)</li>
</ul>
`
  },

  // ========== ENVIRONMENT VARIABLES ==========
  "Environment Variables": {
    concept: `
<p><strong>🔐 Environment Variables Explained</strong></p>

<p>Environment variables are like secret settings that your app can read. They're perfect for storing sensitive information that shouldn't be in your code.</p>

<p><strong>Why Do We Need Them?</strong></p>
<p>Imagine you have a database password in your code:</p>
<pre>
// BAD! Never do this!
const dbPassword = "my_secret_password_123";
</pre>
<p>If you share this code on GitHub, everyone can see your password! Environment variables solve this.</p>

<p><strong>Common Things Stored in Environment Variables:</strong></p>
<ul>
<li>Database connection strings</li>
<li>API keys (Google, Stripe, etc.)</li>
<li>JWT secrets</li>
<li>Port numbers</li>
<li>Development vs Production mode</li>
</ul>

<hr>
<p><strong>📋 How to Use Environment Variables:</strong></p>
<pre>
// Step 1: Install dotenv
npm install dotenv

// Step 2: Create a .env file in your project root
// .env file:
PORT=3000
DATABASE_URL=mongodb://localhost:27017/myapp
JWT_SECRET=my_super_secret_key_12345
API_KEY=abc123xyz789

// Step 3: Load them in your code
require('dotenv').config();  // Add this at the TOP of your main file

// Step 4: Use them
const port = process.env.PORT;
const dbUrl = process.env.DATABASE_URL;
const secret = process.env.JWT_SECRET;

console.log(port);  // 3000
</pre>

<hr>
<p><strong>⚠️ CRITICAL: Add .env to .gitignore!</strong></p>
<pre>
// .gitignore file
node_modules/
.env
</pre>

<p><strong>Create a .env.example for others:</strong></p>
<pre>
// .env.example (commit this to Git)
PORT=3000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_here
</pre>
`
  },

  // ========== FILE SYSTEM ==========
  "File System Operations": {
    concept: `
<p><strong>📁 Working with Files in Node.js</strong></p>

<p>Node.js can read, write, and manage files on your computer. This is something JavaScript in browsers CAN'T do (for security reasons). Node's <code>fs</code> (file system) module handles all file operations.</p>

<hr>
<p><strong>📋 Common File Operations:</strong></p>
<pre>
const fs = require('fs');

// ====== READING FILES ======

// Synchronous (blocks code until done)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Asynchronous (non-blocking, better for servers)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err);
        return;
    }
    console.log(data);
});

// Using Promises (modern way)
const fsPromises = require('fs').promises;
const content = await fsPromises.readFile('file.txt', 'utf8');


// ====== WRITING FILES ======

// Write (creates new or overwrites existing)
fs.writeFileSync('output.txt', 'Hello World!');

// Append (add to end of file)
fs.appendFileSync('log.txt', 'New log entry\\n');

// Async write
fs.writeFile('output.txt', 'Hello!', (err) => {
    if (err) throw err;
    console.log('File saved!');
});


// ====== OTHER OPERATIONS ======

// Check if file exists
if (fs.existsSync('file.txt')) {
    console.log('File exists!');
}

// Delete a file
fs.unlinkSync('unwanted.txt');

// Create a directory
fs.mkdirSync('new-folder');

// Read directory contents
const files = fs.readdirSync('./');
console.log(files);  // ['file1.txt', 'file2.txt', ...]
</pre>

<hr>
<p><strong>Real-World Example - Simple Logger:</strong></p>
<pre>
const fs = require('fs');

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = timestamp + ' - ' + message + '\\n';
    
    fs.appendFileSync('app.log', logEntry);
}

logMessage('User logged in');
logMessage('User viewed products');
logMessage('User made purchase');
</pre>
`
  },

  // ========== EVENT LOOP ==========
  "Event Loop (How Node.js Works)": {
    concept: `
<p><strong>🔄 The Event Loop - Node's Secret Sauce</strong></p>

<p>This is what makes Node.js special and FAST. Understanding this helps in interviews and writing better code.</p>

<p><strong>The Problem with Traditional Servers:</strong></p>
<p>Imagine a restaurant with only 1 waiter. If that waiter takes an order and waits in the kitchen until food is ready, no other customers can be served! That's how some servers work - they BLOCK while waiting.</p>

<p><strong>How Node.js is Different:</strong></p>
<p>Node.js is like a smart waiter who:</p>
<ol>
<li>Takes your order</li>
<li>Gives it to the kitchen</li>
<li>Immediately goes to take the next customer's order</li>
<li>When kitchen says "food ready!", waiter delivers it</li>
</ol>
<p>The waiter NEVER waits idly. This is <strong>non-blocking, asynchronous</strong> behavior!</p>

<p><strong>The Event Loop in Simple Terms:</strong></p>
<p>The Event Loop is like a traffic controller that:</p>
<ol>
<li>Runs your synchronous code first</li>
<li>Sends async operations (file reads, API calls) to be handled separately</li>
<li>When they complete, puts their callbacks in a queue</li>
<li>Executes callbacks when main code is done</li>
</ol>

<hr>
<p><strong>📋 See It In Action:</strong></p>
<pre>
console.log('1 - Start');

setTimeout(() => {
    console.log('2 - Timeout callback');
}, 0);

console.log('3 - End');

// Output:
// 1 - Start
// 3 - End
// 2 - Timeout callback

// Why? 
// - Sync code (1, 3) runs first
// - setTimeout callback goes to queue
// - Event loop runs callback after sync code
</pre>

<p><strong>Why This Matters:</strong></p>
<ul>
<li>Node can handle thousands of connections with one thread</li>
<li>It never waits idly for I/O operations</li>
<li>Perfect for I/O heavy applications (APIs, real-time apps)</li>
</ul>
`
  },

  // ========== MODULES ==========
  "Modules (require & import)": {
    concept: `
<p><strong>📦 Understanding Modules in Node.js</strong></p>

<p>Modules let you split your code into separate files and reuse code. Instead of one giant file, you have organized, manageable pieces.</p>

<p><strong>Two Module Systems:</strong></p>
<ul>
<li><strong>CommonJS</strong> (older): Uses <code>require()</code> and <code>module.exports</code></li>
<li><strong>ES Modules</strong> (newer): Uses <code>import</code> and <code>export</code></li>
</ul>

<hr>
<p><strong>📋 CommonJS (Default in Node.js):</strong></p>
<pre>
// ===== math.js (exporting) =====
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// Export multiple things
module.exports = { add, subtract };

// Or export one thing
module.exports = add;


// ===== app.js (importing) =====
// Import what we exported
const { add, subtract } = require('./math');

// Or if single export
const add = require('./math');

console.log(add(5, 3));  // 8
</pre>

<hr>
<p><strong>📋 ES Modules (Modern):</strong></p>
<pre>
// To use ES modules, add to package.json:
// "type": "module"

// ===== math.js (exporting) =====
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}


// ===== app.js (importing) =====
import multiply, { add, subtract } from './math.js';

console.log(add(5, 3));       // 8
console.log(multiply(4, 2));  // 8
</pre>

<hr>
<p><strong>Built-in Modules:</strong></p>
<pre>
// Node.js comes with these - no install needed!
const fs = require('fs');       // File system
const path = require('path');   // File paths
const http = require('http');   // Create servers
const crypto = require('crypto'); // Encryption
const os = require('os');       // Operating system info
</pre>
`
  },

  // ========== NODE.JS INTERVIEW QUESTIONS ==========
  "Node.js Interview Questions": {
    concept: `
<p><strong>❓ Common Node.js Interview Questions</strong></p>

<p><strong>Q1: What is Node.js?</strong></p>
<p>Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser. It's used for building server-side applications, APIs, and command-line tools.</p>

<p><strong>Q2: What is the difference between Node.js and JavaScript?</strong></p>
<p>JavaScript is a programming language. Node.js is a runtime environment that lets you execute JavaScript on the server. JavaScript in browsers can manipulate DOM; Node.js can access file systems and create servers.</p>

<p><strong>Q3: What is the Event Loop?</strong></p>
<p>The Event Loop is what allows Node.js to perform non-blocking I/O operations. It continuously checks if there are callbacks to execute and runs them when the main thread is free.</p>

<p><strong>Q4: What is NPM?</strong></p>
<p>NPM (Node Package Manager) is a package manager for JavaScript that lets you install, share, and manage dependencies. It comes bundled with Node.js.</p>

<p><strong>Q5: What is the difference between require() and import?</strong></p>
<p>require() is CommonJS syntax (older, synchronous, default in Node). import is ES Modules syntax (newer, supports async loading, needs "type": "module" in package.json).</p>

<p><strong>Q6: What are callbacks?</strong></p>
<p>Callbacks are functions passed as arguments to other functions, executed after an async operation completes. They're the original way Node.js handled async code before Promises.</p>

<p><strong>Q7: What is callback hell and how to avoid it?</strong></p>
<p>Callback hell is deeply nested callbacks that make code hard to read. Avoid it using Promises, async/await, or breaking code into named functions.</p>

<p><strong>Q8: What is middleware?</strong></p>
<p>Middleware is a function that runs between receiving a request and sending a response. It can modify req/res objects, run authentication, logging, etc.</p>

<p><strong>Q9: What is the difference between process.nextTick() and setImmediate()?</strong></p>
<p>process.nextTick() runs before the next event loop iteration begins. setImmediate() runs in the next iteration. nextTick has higher priority.</p>

<p><strong>Q10: How do you handle errors in Node.js?</strong></p>
<p>Using try-catch for sync code, .catch() for Promises, error-first callbacks, and centralized error handling middleware in Express.</p>
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = nodeData;
}
