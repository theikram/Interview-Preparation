// EXPRESS.JS - Complete Interview Prep (Routes, Middleware, APIs, CRUD)
const expressData = {
    // ========== WHAT IS EXPRESS ==========
    "What is Express.js?": {
        concept: `
<p><strong>🚂 Understanding Express.js</strong></p>

<p>Remember how we built a server with Node.js and had to manually check URLs with if-else statements? That was tedious! Express.js makes building servers MUCH easier.</p>

<p><strong>Express.js is a framework for Node.js</strong> that provides simple, clean ways to:</p>
<ul>
<li>Handle different routes (URLs)</li>
<li>Process incoming data</li>
<li>Send responses</li>
<li>Use middleware (we'll explain this!)</li>
<li>Build REST APIs</li>
</ul>

<p><strong>Analogy:</strong></p>
<p>If Node.js is like having a kitchen (basic tools), Express.js is like having a fully organized kitchen with labeled drawers, pre-set recipes, and helpful gadgets. Same ingredients, but MUCH easier to cook!</p>

<hr>
<p><strong>📋 Basic Express Server:</strong></p>
<pre>
// Step 1: Install Express
// npm install express

// Step 2: Create server
const express = require('express');
const app = express();

// Step 3: Define a route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Step 4: Start server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
</pre>

<p><strong>Compare to Pure Node.js:</strong></p>
<p>With Express: 10 lines of clean code<br>
Without Express: 25+ lines with manual URL parsing</p>
`
    },

    // ========== ROUTES ==========
    "Routes (URL Handling)": {
        concept: `
<p><strong>🛣️ Understanding Routes in Express</strong></p>

<p>A route is the combination of a URL path and an HTTP method. When users visit different URLs, different code runs.</p>

<p><strong>Route = HTTP Method + Path + Handler Function</strong></p>

<hr>
<p><strong>📋 Basic Routes:</strong></p>
<pre>
const express = require('express');
const app = express();

// GET request to home page
app.get('/', (req, res) => {
    res.send('Home Page');
});

// GET request to about page
app.get('/about', (req, res) => {
    res.send('About Us');
});

// POST request (usually for forms/creating data)
app.post('/contact', (req, res) => {
    res.send('Message received!');
});

// PUT request (update data)
app.put('/user', (req, res) => {
    res.send('User updated!');
});

// DELETE request
app.delete('/user', (req, res) => {
    res.send('User deleted!');
});

app.listen(3000);
</pre>

<hr>
<p><strong>📋 Route Parameters (Dynamic URLs):</strong></p>
<pre>
// :id is a parameter - it can be any value
// /users/1, /users/42, /users/ali all match this route

app.get('/users/:id', (req, res) => {
    const userId = req.params.id;  // Get the value
    res.send('User ID: ' + userId);
});

// Multiple parameters
app.get('/posts/:year/:month', (req, res) => {
    const year = req.params.year;
    const month = req.params.month;
    res.send('Posts from ' + month + '/' + year);
});

// Example:
// /posts/2024/01 → "Posts from 01/2024"
</pre>

<hr>
<p><strong>📋 Query Strings (?key=value):</strong></p>
<pre>
// URL: /search?keyword=phone&sort=price

app.get('/search', (req, res) => {
    const keyword = req.query.keyword;  // "phone"
    const sort = req.query.sort;        // "price"
    
    res.send('Searching for: ' + keyword);
});

// When to use what:
// Route params (/users/:id) → Required, identifies a resource
// Query strings (?sort=new) → Optional, filters/options
</pre>
`
    },

    // ========== REQUEST & RESPONSE ==========
    "Request & Response Objects": {
        concept: `
<p><strong>📬 Understanding req and res</strong></p>

<p>Every route handler receives two objects:</p>
<ul>
<li><strong>req (request)</strong> - Information about the incoming request</li>
<li><strong>res (response)</strong> - Methods to send back a response</li>
</ul>

<hr>
<p><strong>📋 The Request Object (req):</strong></p>
<pre>
app.post('/users', (req, res) => {
    // URL path
    console.log(req.path);       // "/users"
    
    // HTTP method
    console.log(req.method);     // "POST"
    
    // Route parameters (:id)
    console.log(req.params);     // { id: "123" }
    
    // Query string (?sort=new)
    console.log(req.query);      // { sort: "new" }
    
    // Request body (POST/PUT data)
    console.log(req.body);       // { name: "Ali", email: "..." }
    
    // Headers
    console.log(req.headers);    // { "content-type": "...", ... }
    
    // Cookies
    console.log(req.cookies);    // { token: "abc123" }
});
</pre>

<hr>
<p><strong>📋 The Response Object (res):</strong></p>
<pre>
app.get('/example', (req, res) => {
    // Send plain text
    res.send('Hello World');
    
    // Send JSON (most common for APIs)
    res.json({ message: 'Success', data: users });
    
    // Send with status code
    res.status(201).json({ message: 'Created!' });
    
    // Send error
    res.status(404).json({ error: 'Not found' });
    
    // Redirect to another URL
    res.redirect('/login');
    
    // Send a file
    res.sendFile('/path/to/file.pdf');
});

// Common Status Codes:
// 200 - OK (success)
// 201 - Created (new resource made)
// 400 - Bad Request (client error)
// 401 - Unauthorized (not logged in)
// 403 - Forbidden (no permission)
// 404 - Not Found
// 500 - Server Error
</pre>
`
    },

    // ========== MIDDLEWARE ==========
    "Middleware (The Magic of Express)": {
        concept: `
<p><strong>🔗 Understanding Middleware</strong></p>

<p>Middleware is code that runs BETWEEN receiving a request and sending a response. Think of it as checkpoints the request passes through.</p>

<p><strong>Analogy - Airport Security:</strong></p>
<p>When you fly, you don't go directly to the plane. You pass through:</p>
<ol>
<li>Check-in counter (verify ticket)</li>
<li>Security screening (check bags)</li>
<li>Passport control (verify identity)</li>
<li>Finally, board the plane</li>
</ol>
<p>Each step is like middleware - it processes you and either lets you continue or stops you!</p>

<p><strong>Common Uses of Middleware:</strong></p>
<ul>
<li>Logging every request</li>
<li>Checking if user is logged in</li>
<li>Parsing JSON from request body</li>
<li>Handling errors</li>
<li>Adding CORS headers</li>
</ul>

<hr>
<p><strong>📋 Creating Middleware:</strong></p>
<pre>
// Middleware signature: (req, res, next)
// next() passes control to the next middleware/route

const express = require('express');
const app = express();

// GLOBAL MIDDLEWARE - runs for EVERY request
app.use((req, res, next) => {
    console.log('Request received at:', new Date());
    console.log('Method:', req.method, 'Path:', req.path);
    
    next();  // IMPORTANT: Call next() to continue!
});

// ROUTE-SPECIFIC MIDDLEWARE
const checkAuth = (req, res, next) => {
    if (req.headers.authorization) {
        next();  // User has token, continue
    } else {
        res.status(401).json({ error: 'Please login first' });
        // No next() = request stops here!
    }
};

// Apply middleware to specific route
app.get('/dashboard', checkAuth, (req, res) => {
    res.send('Welcome to dashboard!');
});

// This route has no checkAuth, anyone can access
app.get('/public', (req, res) => {
    res.send('Public page - no login needed');
});
</pre>

<hr>
<p><strong>📋 Built-in Middleware:</strong></p>
<pre>
// Parse JSON bodies (ESSENTIAL for APIs!)
app.use(express.json());

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));
</pre>
`
    },

    // ========== CRUD API ==========
    "Building a CRUD API": {
        concept: `
<p><strong>🔄 CRUD = Create, Read, Update, Delete</strong></p>

<p>These are the four basic operations for any data. Almost every app does these:</p>
<ul>
<li><strong>Create</strong> - Add new data (POST)</li>
<li><strong>Read</strong> - Get data (GET)</li>
<li><strong>Update</strong> - Change data (PUT/PATCH)</li>
<li><strong>Delete</strong> - Remove data (DELETE)</li>
</ul>

<hr>
<p><strong>📋 Complete CRUD API Example (Simple):</strong></p>
<pre>
const express = require('express');
const app = express();
app.use(express.json());

// Fake database (array in memory)
let users = [
    { id: 1, name: 'Ali', email: 'ali@test.com' },
    { id: 2, name: 'Sara', email: 'sara@test.com' }
];

// CREATE - Add new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// READ - Get one user by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});

// UPDATE - Change user data
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE - Remove user
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
});

app.listen(3000);
</pre>
`
    },

    // ========== VALIDATION ==========
    "Input Validation": {
        concept: `
<p><strong>✅ Validating User Input</strong></p>

<p>Never trust user input! Users can send invalid or malicious data. Always validate before using.</p>

<p><strong>What to Validate:</strong></p>
<ul>
<li>Required fields are present</li>
<li>Data types are correct (string, number, etc.)</li>
<li>Values are within allowed range</li>
<li>Email format is valid</li>
<li>Password meets requirements</li>
</ul>

<hr>
<p><strong>📋 Manual Validation:</strong></p>
<pre>
app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    
    // Check required fields
    if (!name || !email || !password) {
        return res.status(400).json({
            error: 'Name, email, and password are required'
        });
    }
    
    // Check email format
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Invalid email format'
        });
    }
    
    // Check password length
    if (password.length < 6) {
        return res.status(400).json({
            error: 'Password must be at least 6 characters'
        });
    }
    
    // All valid - proceed!
    res.json({ message: 'User registered!' });
});
</pre>

<hr>
<p><strong>📋 Using express-validator (Cleaner):</strong></p>
<pre>
// npm install express-validator

const { body, validationResult } = require('express-validator');

app.post('/register',
    // Validation rules
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password too short'),
    
    // Handler
    (req, res) => {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        res.json({ message: 'Valid!' });
    }
);
</pre>
`
    },

    // ========== ERROR HANDLING ==========
    "Error Handling": {
        concept: `
<p><strong>⚠️ Handling Errors Properly</strong></p>

<p>Things go wrong! Databases fail, users send bad data, network issues occur. Good error handling keeps your app running and helps debugging.</p>

<hr>
<p><strong>📋 Try-Catch for Async Routes:</strong></p>
<pre>
// Without error handling - server crashes!
app.get('/users', async (req, res) => {
    const users = await database.getUsers();  // What if this fails?
    res.json(users);
});

// With try-catch - graceful error handling
app.get('/users', async (req, res) => {
    try {
        const users = await database.getUsers();
        res.json(users);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
</pre>

<hr>
<p><strong>📋 Global Error Handler (Express Pattern):</strong></p>
<pre>
// Create custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Use in routes
app.get('/users/:id', (req, res, next) => {
    const user = findUser(req.params.id);
    
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    
    res.json(user);
});

// Global error handler (must have 4 parameters!)
app.use((err, req, res, next) => {
    console.error(err.stack);
    
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
});
</pre>

<hr>
<p><strong>📋 Handle 404 (No Route Found):</strong></p>
<pre>
// Put this AFTER all other routes
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});
</pre>
`
    },

    // ========== CORS ==========
    "CORS Explained": {
        concept: `
<p><strong>🌐 What is CORS?</strong></p>

<p>CORS stands for <strong>Cross-Origin Resource Sharing</strong>. It's a security feature in browsers.</p>

<p><strong>The Problem:</strong></p>
<p>Your frontend is at <code>http://localhost:3000</code><br>
Your API is at <code>http://localhost:5000</code><br>
These are different "origins" - browser blocks the request by default!</p>

<p><strong>Why This Security Exists:</strong></p>
<p>Imagine you're logged into your bank. A malicious website could make requests to your bank's API using YOUR cookies. CORS prevents this by requiring the server to explicitly allow requests from other origins.</p>

<hr>
<p><strong>📋 Enabling CORS:</strong></p>
<pre>
// npm install cors

const cors = require('cors');
const app = express();

// Allow ALL origins (development only!)
app.use(cors());

// Allow specific origins (production)
app.use(cors({
    origin: 'https://yourfrontend.com'
}));

// Allow multiple origins
app.use(cors({
    origin: ['http://localhost:3000', 'https://yourfrontend.com']
}));

// With credentials (cookies)
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
</pre>
`
    },

    // ========== ROUTER ==========
    "Express Router (Organizing Routes)": {
        concept: `
<p><strong>📁 Organizing Routes with Express Router</strong></p>

<p>As your app grows, putting all routes in one file becomes messy. Express Router lets you split routes into separate files.</p>

<hr>
<p><strong>📋 Project Structure:</strong></p>
<pre>
project/
├── app.js              (main file)
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── authRoutes.js
</pre>

<hr>
<p><strong>📋 Creating a Router:</strong></p>
<pre>
// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// These routes are relative to where we mount the router
router.get('/', (req, res) => {
    res.json({ message: 'All users' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'User ' + req.params.id });
});

router.post('/', (req, res) => {
    res.json({ message: 'Create user' });
});

module.exports = router;
</pre>

<hr>
<p><strong>📋 Using the Router:</strong></p>
<pre>
// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Mount routers at specific paths
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

// Now:
// GET /api/users      → userRoutes '/'
// GET /api/users/123  → userRoutes '/:id'
// GET /api/products   → productRoutes '/'

app.listen(3000);
</pre>
`
    },

    // ========== REST API DESIGN ==========
    "RESTful API Design": {
        concept: `
<p><strong>🏗️ Designing Clean APIs</strong></p>

<p>REST (Representational State Transfer) is a set of conventions for designing APIs. Following these makes your API predictable and easy to use.</p>

<p><strong>REST Principles:</strong></p>
<ul>
<li>Use nouns for endpoints, not verbs</li>
<li>Use HTTP methods to define actions</li>
<li>Use proper status codes</li>
<li>Return consistent response format</li>
</ul>

<hr>
<p><strong>📋 Good vs Bad Endpoints:</strong></p>
<table>
<tr><th>❌ Bad</th><th>✅ Good</th><th>Why</th></tr>
<tr><td>GET /getUsers</td><td>GET /users</td><td>GET already means 'get'</td></tr>
<tr><td>POST /createUser</td><td>POST /users</td><td>POST already means 'create'</td></tr>
<tr><td>DELETE /deleteUser/1</td><td>DELETE /users/1</td><td>DELETE means 'delete'</td></tr>
<tr><td>GET /user</td><td>GET /users</td><td>Use plural nouns</td></tr>
</table>

<hr>
<p><strong>📋 Standard CRUD Endpoints:</strong></p>
<pre>
GET    /api/users       → Get all users
GET    /api/users/:id   → Get one user
POST   /api/users       → Create user
PUT    /api/users/:id   → Update user (replace)
PATCH  /api/users/:id   → Update user (partial)
DELETE /api/users/:id   → Delete user

// Nested resources
GET    /api/users/:id/posts    → Get user's posts
POST   /api/users/:id/posts    → Create post for user
</pre>

<hr>
<p><strong>📋 Consistent Response Format:</strong></p>
<pre>
// Success response
{
    "status": "success",
    "data": {
        "users": [...]
    }
}

// Error response
{
    "status": "error",
    "message": "User not found"
}
</pre>
`
    },

    // ========== EXPRESS INTERVIEW QUESTIONS ==========
    "Express.js Interview Questions": {
        concept: `
<p><strong>❓ Common Express.js Interview Questions</strong></p>

<p><strong>Q1: What is Express.js?</strong></p>
<p>Express.js is a minimal web framework for Node.js that provides features for building web applications and APIs. It simplifies routing, middleware, and request handling.</p>

<p><strong>Q2: What is middleware in Express?</strong></p>
<p>Middleware is a function that has access to req, res, and next. It runs between receiving a request and sending a response. Used for logging, authentication, parsing data, etc.</p>

<p><strong>Q3: What is the difference between app.use() and app.get()?</strong></p>
<p>app.use() handles ALL HTTP methods and can match partial paths. app.get() only handles GET requests and matches exact paths. app.use() is typically for middleware.</p>

<p><strong>Q4: How do you handle errors in Express?</strong></p>
<p>Using try-catch blocks in routes, passing errors to next(), and creating a global error handler middleware with 4 parameters (err, req, res, next).</p>

<p><strong>Q5: What is req.params vs req.query vs req.body?</strong></p>
<p>req.params contains route parameters (/users/:id). req.query contains query string values (?sort=new). req.body contains POST/PUT data from the request body.</p>

<p><strong>Q6: What is CORS and how do you enable it?</strong></p>
<p>CORS (Cross-Origin Resource Sharing) controls which domains can access your API. Enable with the cors npm package: app.use(cors()).</p>

<p><strong>Q7: What is Express Router?</strong></p>
<p>Express Router is a mini-app that lets you organize routes into separate modules. Create with express.Router(), define routes, then mount with app.use('/path', router).</p>

<p><strong>Q8: How do you serve static files?</strong></p>
<p>Use express.static() middleware: app.use(express.static('public')). Files in the 'public' folder will be served at root URL.</p>

<p><strong>Q9: What are the differences between PUT and PATCH?</strong></p>
<p>PUT replaces the entire resource with new data. PATCH updates only the specified fields. PUT is idempotent (same result every time).</p>

<p><strong>Q10: How do you parse JSON in Express?</strong></p>
<p>Use the built-in middleware: app.use(express.json()). This parses JSON bodies and populates req.body.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = expressData;
}
