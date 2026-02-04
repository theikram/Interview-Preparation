// NODE.JS - Complete Interview Prep (Beginner-Friendly + APIs Explained)
const nodeData = {
  // ========== WHAT IS NODE.JS ==========
  "What is Node.js?": {
    concept: `
&lt;p&gt;&lt;strong&gt;🟢 Understanding Node.js from Scratch&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Let me explain Node.js in the simplest way possible. Imagine you know JavaScript - you've used it to make buttons clickable, show/hide elements, and make websites interactive. But here's the thing: JavaScript traditionally only worked inside web browsers (Chrome, Firefox, etc.).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Node.js changed everything.&lt;/strong&gt; It lets you run JavaScript OUTSIDE the browser - on your computer, on a server, anywhere! This means you can now use JavaScript to:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Create web servers (like the ones powering Facebook, Netflix)&lt;/li&gt;
&lt;li&gt;Build APIs (we'll explain what these are!)&lt;/li&gt;
&lt;li&gt;Read and write files on your computer&lt;/li&gt;
&lt;li&gt;Connect to databases&lt;/li&gt;
&lt;li&gt;Build command-line tools&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;strong&gt;Real-World Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Think of JavaScript as a chef who could only cook in restaurant kitchens (browsers). Node.js is like giving that chef a portable kitchen - now they can cook anywhere! Same skills, more places to use them.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Why is Node.js So Popular?&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;One Language Everywhere:&lt;/strong&gt; Use JavaScript for frontend AND backend&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Super Fast:&lt;/strong&gt; Built on Chrome's V8 engine (same thing that makes Chrome fast)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Non-blocking:&lt;/strong&gt; Can handle many requests at once (we'll explain this)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Huge Community:&lt;/strong&gt; Millions of free packages on NPM&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Quick Start:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Check if Node.js is installed
node --version

// Run a JavaScript file
node myfile.js

// Start Node.js interactive mode (REPL)
node
&gt; console.log("Hello from Node!")
Hello from Node!
&lt;/pre&gt;
`
  },

  // ========== WHAT ARE APIs ==========
  "What are APIs?": {
    concept: `
&lt;p&gt;&lt;strong&gt;🔌 APIs Explained Simply&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;API stands for &lt;strong&gt;Application Programming Interface&lt;/strong&gt;. That sounds complicated, but it's actually a very simple concept. Let me explain with a real-life example.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;The Restaurant Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Imagine you're at a restaurant. You (the customer) want food from the kitchen. But you can't just walk into the kitchen and make your own food! Instead:&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;You look at the &lt;strong&gt;menu&lt;/strong&gt; (available options)&lt;/li&gt;
&lt;li&gt;You tell the &lt;strong&gt;waiter&lt;/strong&gt; what you want&lt;/li&gt;
&lt;li&gt;The waiter takes your &lt;strong&gt;request&lt;/strong&gt; to the kitchen&lt;/li&gt;
&lt;li&gt;The kitchen prepares the food&lt;/li&gt;
&lt;li&gt;The waiter brings back your &lt;strong&gt;response&lt;/strong&gt; (food!)&lt;/li&gt;
&lt;/ol&gt;

&lt;p&gt;&lt;strong&gt;The waiter is the API!&lt;/strong&gt; It's the middleman that takes your request, communicates with the system (kitchen), and brings back the response.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;In Programming Terms:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;You (Frontend/App)&lt;/strong&gt; = The customer&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;API&lt;/strong&gt; = The waiter (messenger)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Server/Database&lt;/strong&gt; = The kitchen&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Request&lt;/strong&gt; = Your order ("I want user data")&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Response&lt;/strong&gt; = What you get back (the data)&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;strong&gt;Real Examples of APIs:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;When you check weather on your phone → App calls Weather API&lt;/li&gt;
&lt;li&gt;When you login with Google → App calls Google's Auth API&lt;/li&gt;
&lt;li&gt;When you see a YouTube video → YouTube's API sends video data&lt;/li&gt;
&lt;li&gt;When you pay online → Payment API (Stripe, PayPal) handles it&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;strong&gt;So when we build Node.js/Express servers, we're building APIs!&lt;/strong&gt; We create endpoints (menu items) that other apps can call to get or send data.&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Simple API Call Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Frontend making an API call
fetch('https://api.example.com/users')
  .then(response =&gt; response.json())
  .then(data =&gt; console.log(data));

// What happens:
// 1. Frontend REQUESTS data from /users endpoint
// 2. Server (API) processes the request
// 3. Server RESPONDS with user data
// 4. Frontend receives and uses the data
&lt;/pre&gt;
`
  },

  // ========== ENDPOINTS VS ROUTES ==========
  "Endpoints, Routes &amp; HTTP Methods": {
    concept: `
&lt;p&gt;&lt;strong&gt;🛣️ Understanding Endpoints, Routes, and HTTP Methods&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;These terms are often used together and can be confusing. Let me clarify each one:&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;What is an ENDPOINT?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;An endpoint is a specific URL where your API can be accessed. Think of it as an address. Just like your home has an address, each API function has an endpoint.&lt;/p&gt;

&lt;p&gt;Examples of endpoints:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;/users&lt;/code&gt; - Get all users&lt;/li&gt;
&lt;li&gt;&lt;code&gt;/users/123&lt;/code&gt; - Get user with ID 123&lt;/li&gt;
&lt;li&gt;&lt;code&gt;/products&lt;/code&gt; - Get all products&lt;/li&gt;
&lt;li&gt;&lt;code&gt;/login&lt;/code&gt; - Handle user login&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;strong&gt;What is a ROUTE?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;A route is the CODE that handles what happens when someone visits an endpoint. It's the instructions for that address.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Endpoint vs Route:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Endpoint&lt;/strong&gt; = The URL address (/users)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Route&lt;/strong&gt; = The code that runs when that URL is called&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;What are HTTP Methods?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;HTTP methods tell the API WHAT you want to do. Same endpoint, different actions:&lt;/p&gt;

&lt;table&gt;
&lt;tr&gt;&lt;th&gt;Method&lt;/th&gt;&lt;th&gt;What It Does&lt;/th&gt;&lt;th&gt;Example&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;strong&gt;GET&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Read/Fetch data&lt;/td&gt;&lt;td&gt;GET /users → Get all users&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;strong&gt;POST&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Create new data&lt;/td&gt;&lt;td&gt;POST /users → Create new user&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;strong&gt;PUT&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Update ALL data&lt;/td&gt;&lt;td&gt;PUT /users/1 → Replace user 1&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;strong&gt;PATCH&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Update SOME data&lt;/td&gt;&lt;td&gt;PATCH /users/1 → Update name only&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;&lt;strong&gt;DELETE&lt;/strong&gt;&lt;/td&gt;&lt;td&gt;Remove data&lt;/td&gt;&lt;td&gt;DELETE /users/1 → Delete user 1&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Analogy - Library Book:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;GET&lt;/strong&gt; = Read the book&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;POST&lt;/strong&gt; = Donate a new book&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;PUT&lt;/strong&gt; = Replace the entire book&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;PATCH&lt;/strong&gt; = Fix a typo in the book&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;DELETE&lt;/strong&gt; = Remove the book from library&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Code Example:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Same endpoint (/users), different methods = different actions!

// GET /users - Fetch all users
app.get('/users', (req, res) =&gt; {
    res.json(allUsers);
});

// POST /users - Create a new user
app.post('/users', (req, res) =&gt; {
    const newUser = req.body;
    users.push(newUser);
    res.json({ message: 'User created!' });
});

// DELETE /users/5 - Delete user with ID 5
app.delete('/users/:id', (req, res) =&gt; {
    const userId = req.params.id;
    // delete user logic
    res.json({ message: 'User deleted!' });
});
&lt;/pre&gt;
`
  },

  // ========== FIRST SERVER ==========
  "Creating Your First Server": {
    concept: `
&lt;p&gt;&lt;strong&gt;🖥️ Building Your First Node.js Server&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;A server is just a program that waits for requests and sends back responses. When you type a website URL, you're sending a request to a server, and it responds with the webpage.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Let's build one step by step:&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Step 1: Create a file called server.js&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Import the built-in 'http' module
// Node.js comes with this - no installation needed!
const http = require('http');

// Create a server
// This function runs EVERY TIME someone visits our server
const server = http.createServer((request, response) =&gt; {
    // Set the response header (what type of content we're sending)
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Send the response body
    response.end('Hello! Welcome to my first server!');
});

// Start the server on port 3000
// Port = like an apartment number for your computer
server.listen(3000, () =&gt; {
    console.log('Server is running at http://localhost:3000');
});
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Step 2: Run it!&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
node server.js
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Step 3: Visit http://localhost:3000 in your browser!&lt;/strong&gt;&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;Understanding Each Part:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;require('http')&lt;/code&gt; - Loads Node's built-in HTTP module&lt;/li&gt;
&lt;li&gt;&lt;code&gt;createServer()&lt;/code&gt; - Creates a server that handles requests&lt;/li&gt;
&lt;li&gt;&lt;code&gt;request&lt;/code&gt; - Contains info about incoming request (URL, method, etc.)&lt;/li&gt;
&lt;li&gt;&lt;code&gt;response&lt;/code&gt; - Used to send data back to the client&lt;/li&gt;
&lt;li&gt;&lt;code&gt;listen(3000)&lt;/code&gt; - Starts server on port 3000&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Handling Different URLs:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
const http = require('http');

const server = http.createServer((req, res) =&gt; {
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;This is basic but tedious!&lt;/strong&gt; That's why we use Express.js - it makes routing much easier (covered in Express section).&lt;/p&gt;
`
  },

  // ========== NPM BASICS ==========
  "NPM (Node Package Manager)": {
    concept: `
&lt;p&gt;&lt;strong&gt;📦 NPM Explained Simply&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;NPM stands for &lt;strong&gt;Node Package Manager&lt;/strong&gt;. Think of it as an app store for JavaScript code. Instead of writing everything from scratch, you can download pre-made packages (libraries) that other developers created.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Real-Life Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Imagine you're baking a cake. You COULD grow your own wheat, milk your own cow, and raise chickens for eggs. OR you could just buy flour, milk, and eggs from the store! NPM is like the grocery store - you get ingredients (packages) that others have prepared.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Popular NPM Packages:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;express&lt;/strong&gt; - Web framework for building APIs&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;mongoose&lt;/strong&gt; - Connect to MongoDB database&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;bcrypt&lt;/strong&gt; - Hash passwords securely&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;jsonwebtoken&lt;/strong&gt; - Create login tokens&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;dotenv&lt;/strong&gt; - Manage environment variables&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;cors&lt;/strong&gt; - Handle cross-origin requests&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Essential NPM Commands:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;Understanding package.json:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Key Points:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;code&gt;dependencies&lt;/code&gt; = Packages needed to RUN the app&lt;/li&gt;
&lt;li&gt;&lt;code&gt;devDependencies&lt;/code&gt; = Packages needed only during development&lt;/li&gt;
&lt;li&gt;&lt;code&gt;scripts&lt;/code&gt; = Custom commands you can run with npm run&lt;/li&gt;
&lt;li&gt;&lt;code&gt;node_modules&lt;/code&gt; folder = Where packages are installed (DON'T commit to Git!)&lt;/li&gt;
&lt;/ul&gt;
`
  },

  // ========== ENVIRONMENT VARIABLES ==========
  "Environment Variables": {
    concept: `
&lt;p&gt;&lt;strong&gt;🔐 Environment Variables Explained&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Environment variables are like secret settings that your app can read. They're perfect for storing sensitive information that shouldn't be in your code.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Why Do We Need Them?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Imagine you have a database password in your code:&lt;/p&gt;
&lt;pre&gt;
// BAD! Never do this!
const dbPassword = "my_secret_password_123";
&lt;/pre&gt;
&lt;p&gt;If you share this code on GitHub, everyone can see your password! Environment variables solve this.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Common Things Stored in Environment Variables:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Database connection strings&lt;/li&gt;
&lt;li&gt;API keys (Google, Stripe, etc.)&lt;/li&gt;
&lt;li&gt;JWT secrets&lt;/li&gt;
&lt;li&gt;Port numbers&lt;/li&gt;
&lt;li&gt;Development vs Production mode&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 How to Use Environment Variables:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;⚠️ CRITICAL: Add .env to .gitignore!&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// .gitignore file
node_modules/
.env
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Create a .env.example for others:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// .env.example (commit this to Git)
PORT=3000
DATABASE_URL=your_database_url_here
JWT_SECRET=your_secret_here
&lt;/pre&gt;
`
  },

  // ========== FILE SYSTEM ==========
  "File System Operations": {
    concept: `
&lt;p&gt;&lt;strong&gt;📁 Working with Files in Node.js&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Node.js can read, write, and manage files on your computer. This is something JavaScript in browsers CAN'T do (for security reasons). Node's &lt;code&gt;fs&lt;/code&gt; (file system) module handles all file operations.&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Common File Operations:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
const fs = require('fs');

// ====== READING FILES ======

// Synchronous (blocks code until done)
const data = fs.readFileSync('file.txt', 'utf8');
console.log(data);

// Asynchronous (non-blocking, better for servers)
fs.readFile('file.txt', 'utf8', (err, data) =&gt; {
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
fs.writeFile('output.txt', 'Hello!', (err) =&gt; {
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;Real-World Example - Simple Logger:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
const fs = require('fs');

function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = timestamp + ' - ' + message + '\\n';
    
    fs.appendFileSync('app.log', logEntry);
}

logMessage('User logged in');
logMessage('User viewed products');
logMessage('User made purchase');
&lt;/pre&gt;
`
  },

  // ========== EVENT LOOP ==========
  "Event Loop (How Node.js Works)": {
    concept: `
&lt;p&gt;&lt;strong&gt;🔄 The Event Loop - Node's Secret Sauce&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;This is what makes Node.js special and FAST. Understanding this helps in interviews and writing better code.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;The Problem with Traditional Servers:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Imagine a restaurant with only 1 waiter. If that waiter takes an order and waits in the kitchen until food is ready, no other customers can be served! That's how some servers work - they BLOCK while waiting.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;How Node.js is Different:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Node.js is like a smart waiter who:&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;Takes your order&lt;/li&gt;
&lt;li&gt;Gives it to the kitchen&lt;/li&gt;
&lt;li&gt;Immediately goes to take the next customer's order&lt;/li&gt;
&lt;li&gt;When kitchen says "food ready!", waiter delivers it&lt;/li&gt;
&lt;/ol&gt;
&lt;p&gt;The waiter NEVER waits idly. This is &lt;strong&gt;non-blocking, asynchronous&lt;/strong&gt; behavior!&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;The Event Loop in Simple Terms:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;The Event Loop is like a traffic controller that:&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;Runs your synchronous code first&lt;/li&gt;
&lt;li&gt;Sends async operations (file reads, API calls) to be handled separately&lt;/li&gt;
&lt;li&gt;When they complete, puts their callbacks in a queue&lt;/li&gt;
&lt;li&gt;Executes callbacks when main code is done&lt;/li&gt;
&lt;/ol&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 See It In Action:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
console.log('1 - Start');

setTimeout(() =&gt; {
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
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Why This Matters:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Node can handle thousands of connections with one thread&lt;/li&gt;
&lt;li&gt;It never waits idly for I/O operations&lt;/li&gt;
&lt;li&gt;Perfect for I/O heavy applications (APIs, real-time apps)&lt;/li&gt;
&lt;/ul&gt;
`
  },

  // ========== MODULES ==========
  "Modules (require &amp; import)": {
    concept: `
&lt;p&gt;&lt;strong&gt;📦 Understanding Modules in Node.js&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Modules let you split your code into separate files and reuse code. Instead of one giant file, you have organized, manageable pieces.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Two Module Systems:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;CommonJS&lt;/strong&gt; (older): Uses &lt;code&gt;require()&lt;/code&gt; and &lt;code&gt;module.exports&lt;/code&gt;&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;ES Modules&lt;/strong&gt; (newer): Uses &lt;code&gt;import&lt;/code&gt; and &lt;code&gt;export&lt;/code&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 CommonJS (Default in Node.js):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 ES Modules (Modern):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;Built-in Modules:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Node.js comes with these - no install needed!
const fs = require('fs');       // File system
const path = require('path');   // File paths
const http = require('http');   // Create servers
const crypto = require('crypto'); // Encryption
const os = require('os');       // Operating system info
&lt;/pre&gt;
`
  },

  // ========== NODE.JS INTERVIEW QUESTIONS ==========
  "Node.js Interview Questions": {
    concept: `
&lt;p&gt;&lt;strong&gt;❓ Common Node.js Interview Questions&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q1: What is Node.js?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser. It's used for building server-side applications, APIs, and command-line tools.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q2: What is the difference between Node.js and JavaScript?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;JavaScript is a programming language. Node.js is a runtime environment that lets you execute JavaScript on the server. JavaScript in browsers can manipulate DOM; Node.js can access file systems and create servers.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q3: What is the Event Loop?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;The Event Loop is what allows Node.js to perform non-blocking I/O operations. It continuously checks if there are callbacks to execute and runs them when the main thread is free.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q4: What is NPM?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;NPM (Node Package Manager) is a package manager for JavaScript that lets you install, share, and manage dependencies. It comes bundled with Node.js.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q5: What is the difference between require() and import?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;require() is CommonJS syntax (older, synchronous, default in Node). import is ES Modules syntax (newer, supports async loading, needs "type": "module" in package.json).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q6: What are callbacks?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Callbacks are functions passed as arguments to other functions, executed after an async operation completes. They're the original way Node.js handled async code before Promises.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q7: What is callback hell and how to avoid it?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Callback hell is deeply nested callbacks that make code hard to read. Avoid it using Promises, async/await, or breaking code into named functions.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q8: What is middleware?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Middleware is a function that runs between receiving a request and sending a response. It can modify req/res objects, run authentication, logging, etc.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q9: What is the difference between process.nextTick() and setImmediate()?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;process.nextTick() runs before the next event loop iteration begins. setImmediate() runs in the next iteration. nextTick has higher priority.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q10: How do you handle errors in Node.js?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Using try-catch for sync code, .catch() for Promises, error-first callbacks, and centralized error handling middleware in Express.&lt;/p&gt;
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = nodeData;
}
