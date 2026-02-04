// EXPRESS.JS - Complete Interview Prep (Routes, Middleware, APIs, CRUD)
const expressData = {
    // ========== WHAT IS EXPRESS ==========
    "What is Express.js?": {
        concept: `
&lt;p&gt;&lt;strong&gt;🚂 Understanding Express.js&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Remember how we built a server with Node.js and had to manually check URLs with if-else statements? That was tedious! Express.js makes building servers MUCH easier.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Express.js is a framework for Node.js&lt;/strong&gt; that provides simple, clean ways to:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Handle different routes (URLs)&lt;/li&gt;
&lt;li&gt;Process incoming data&lt;/li&gt;
&lt;li&gt;Send responses&lt;/li&gt;
&lt;li&gt;Use middleware (we'll explain this!)&lt;/li&gt;
&lt;li&gt;Build REST APIs&lt;/li&gt;
&lt;/ul&gt;

&lt;p&gt;&lt;strong&gt;Analogy:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;If Node.js is like having a kitchen (basic tools), Express.js is like having a fully organized kitchen with labeled drawers, pre-set recipes, and helpful gadgets. Same ingredients, but MUCH easier to cook!&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Basic Express Server:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Step 1: Install Express
// npm install express

// Step 2: Create server
const express = require('express');
const app = express();

// Step 3: Define a route
app.get('/', (req, res) =&gt; {
    res.send('Hello from Express!');
});

// Step 4: Start server
app.listen(3000, () =&gt; {
    console.log('Server running on port 3000');
});
&lt;/pre&gt;

&lt;p&gt;&lt;strong&gt;Compare to Pure Node.js:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;With Express: 10 lines of clean code&lt;br&gt;
Without Express: 25+ lines with manual URL parsing&lt;/p&gt;
`
    },

    // ========== ROUTES ==========
    "Routes (URL Handling)": {
        concept: `
&lt;p&gt;&lt;strong&gt;🛣️ Understanding Routes in Express&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;A route is the combination of a URL path and an HTTP method. When users visit different URLs, different code runs.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Route = HTTP Method + Path + Handler Function&lt;/strong&gt;&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Basic Routes:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
const express = require('express');
const app = express();

// GET request to home page
app.get('/', (req, res) =&gt; {
    res.send('Home Page');
});

// GET request to about page
app.get('/about', (req, res) =&gt; {
    res.send('About Us');
});

// POST request (usually for forms/creating data)
app.post('/contact', (req, res) =&gt; {
    res.send('Message received!');
});

// PUT request (update data)
app.put('/user', (req, res) =&gt; {
    res.send('User updated!');
});

// DELETE request
app.delete('/user', (req, res) =&gt; {
    res.send('User deleted!');
});

app.listen(3000);
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Route Parameters (Dynamic URLs):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// :id is a parameter - it can be any value
// /users/1, /users/42, /users/ali all match this route

app.get('/users/:id', (req, res) =&gt; {
    const userId = req.params.id;  // Get the value
    res.send('User ID: ' + userId);
});

// Multiple parameters
app.get('/posts/:year/:month', (req, res) =&gt; {
    const year = req.params.year;
    const month = req.params.month;
    res.send('Posts from ' + month + '/' + year);
});

// Example:
// /posts/2024/01 → "Posts from 01/2024"
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Query Strings (?key=value):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// URL: /search?keyword=phone&amp;sort=price

app.get('/search', (req, res) =&gt; {
    const keyword = req.query.keyword;  // "phone"
    const sort = req.query.sort;        // "price"
    
    res.send('Searching for: ' + keyword);
});

// When to use what:
// Route params (/users/:id) → Required, identifies a resource
// Query strings (?sort=new) → Optional, filters/options
&lt;/pre&gt;
`
    },

    // ========== REQUEST & RESPONSE ==========
    "Request &amp; Response Objects": {
        concept: `
&lt;p&gt;&lt;strong&gt;📬 Understanding req and res&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Every route handler receives two objects:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;req (request)&lt;/strong&gt; - Information about the incoming request&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;res (response)&lt;/strong&gt; - Methods to send back a response&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 The Request Object (req):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
app.post('/users', (req, res) =&gt; {
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
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 The Response Object (res):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
app.get('/example', (req, res) =&gt; {
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
&lt;/pre&gt;
`
    },

    // ========== MIDDLEWARE ==========
    "Middleware (The Magic of Express)": {
        concept: `
&lt;p&gt;&lt;strong&gt;🔗 Understanding Middleware&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Middleware is code that runs BETWEEN receiving a request and sending a response. Think of it as checkpoints the request passes through.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Analogy - Airport Security:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;When you fly, you don't go directly to the plane. You pass through:&lt;/p&gt;
&lt;ol&gt;
&lt;li&gt;Check-in counter (verify ticket)&lt;/li&gt;
&lt;li&gt;Security screening (check bags)&lt;/li&gt;
&lt;li&gt;Passport control (verify identity)&lt;/li&gt;
&lt;li&gt;Finally, board the plane&lt;/li&gt;
&lt;/ol&gt;
&lt;p&gt;Each step is like middleware - it processes you and either lets you continue or stops you!&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Common Uses of Middleware:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Logging every request&lt;/li&gt;
&lt;li&gt;Checking if user is logged in&lt;/li&gt;
&lt;li&gt;Parsing JSON from request body&lt;/li&gt;
&lt;li&gt;Handling errors&lt;/li&gt;
&lt;li&gt;Adding CORS headers&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Creating Middleware:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Middleware signature: (req, res, next)
// next() passes control to the next middleware/route

const express = require('express');
const app = express();

// GLOBAL MIDDLEWARE - runs for EVERY request
app.use((req, res, next) =&gt; {
    console.log('Request received at:', new Date());
    console.log('Method:', req.method, 'Path:', req.path);
    
    next();  // IMPORTANT: Call next() to continue!
});

// ROUTE-SPECIFIC MIDDLEWARE
const checkAuth = (req, res, next) =&gt; {
    if (req.headers.authorization) {
        next();  // User has token, continue
    } else {
        res.status(401).json({ error: 'Please login first' });
        // No next() = request stops here!
    }
};

// Apply middleware to specific route
app.get('/dashboard', checkAuth, (req, res) =&gt; {
    res.send('Welcome to dashboard!');
});

// This route has no checkAuth, anyone can access
app.get('/public', (req, res) =&gt; {
    res.send('Public page - no login needed');
});
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Built-in Middleware:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Parse JSON bodies (ESSENTIAL for APIs!)
app.use(express.json());

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));
&lt;/pre&gt;
`
    },

    // ========== CRUD API ==========
    "Building a CRUD API": {
        concept: `
&lt;p&gt;&lt;strong&gt;🔄 CRUD = Create, Read, Update, Delete&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;These are the four basic operations for any data. Almost every app does these:&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;&lt;strong&gt;Create&lt;/strong&gt; - Add new data (POST)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Read&lt;/strong&gt; - Get data (GET)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Update&lt;/strong&gt; - Change data (PUT/PATCH)&lt;/li&gt;
&lt;li&gt;&lt;strong&gt;Delete&lt;/strong&gt; - Remove data (DELETE)&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Complete CRUD API Example (Simple):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
const express = require('express');
const app = express();
app.use(express.json());

// Fake database (array in memory)
let users = [
    { id: 1, name: 'Ali', email: 'ali@test.com' },
    { id: 2, name: 'Sara', email: 'sara@test.com' }
];

// CREATE - Add new user
app.post('/users', (req, res) =&gt; {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) =&gt; {
    res.json(users);
});

// READ - Get one user by ID
app.get('/users/:id', (req, res) =&gt; {
    const user = users.find(u =&gt; u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
});

// UPDATE - Change user data
app.put('/users/:id', (req, res) =&gt; {
    const user = users.find(u =&gt; u.id === parseInt(req.params.id));
    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    user.name = req.body.name;
    user.email = req.body.email;
    res.json(user);
});

// DELETE - Remove user
app.delete('/users/:id', (req, res) =&gt; {
    const index = users.findIndex(u =&gt; u.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: 'User not found' });
    }
    
    users.splice(index, 1);
    res.json({ message: 'User deleted' });
});

app.listen(3000);
&lt;/pre&gt;
`
    },

    // ========== VALIDATION ==========
    "Input Validation": {
        concept: `
&lt;p&gt;&lt;strong&gt;✅ Validating User Input&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Never trust user input! Users can send invalid or malicious data. Always validate before using.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;What to Validate:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Required fields are present&lt;/li&gt;
&lt;li&gt;Data types are correct (string, number, etc.)&lt;/li&gt;
&lt;li&gt;Values are within allowed range&lt;/li&gt;
&lt;li&gt;Email format is valid&lt;/li&gt;
&lt;li&gt;Password meets requirements&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Manual Validation:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
app.post('/register', (req, res) =&gt; {
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
    if (password.length &lt; 6) {
        return res.status(400).json({
            error: 'Password must be at least 6 characters'
        });
    }
    
    // All valid - proceed!
    res.json({ message: 'User registered!' });
});
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Using express-validator (Cleaner):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// npm install express-validator

const { body, validationResult } = require('express-validator');

app.post('/register',
    // Validation rules
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({ min: 6 }).withMessage('Password too short'),
    
    // Handler
    (req, res) =&gt; {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        
        res.json({ message: 'Valid!' });
    }
);
&lt;/pre&gt;
`
    },

    // ========== ERROR HANDLING ==========
    "Error Handling": {
        concept: `
&lt;p&gt;&lt;strong&gt;⚠️ Handling Errors Properly&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;Things go wrong! Databases fail, users send bad data, network issues occur. Good error handling keeps your app running and helps debugging.&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Try-Catch for Async Routes:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Without error handling - server crashes!
app.get('/users', async (req, res) =&gt; {
    const users = await database.getUsers();  // What if this fails?
    res.json(users);
});

// With try-catch - graceful error handling
app.get('/users', async (req, res) =&gt; {
    try {
        const users = await database.getUsers();
        res.json(users);
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
});
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Global Error Handler (Express Pattern):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Create custom error class
class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Use in routes
app.get('/users/:id', (req, res, next) =&gt; {
    const user = findUser(req.params.id);
    
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    
    res.json(user);
});

// Global error handler (must have 4 parameters!)
app.use((err, req, res, next) =&gt; {
    console.error(err.stack);
    
    res.status(err.statusCode || 500).json({
        status: 'error',
        message: err.message || 'Internal server error'
    });
});
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Handle 404 (No Route Found):&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// Put this AFTER all other routes
app.use((req, res) =&gt; {
    res.status(404).json({ error: 'Route not found' });
});
&lt;/pre&gt;
`
    },

    // ========== CORS ==========
    "CORS Explained": {
        concept: `
&lt;p&gt;&lt;strong&gt;🌐 What is CORS?&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;CORS stands for &lt;strong&gt;Cross-Origin Resource Sharing&lt;/strong&gt;. It's a security feature in browsers.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;The Problem:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Your frontend is at &lt;code&gt;http://localhost:3000&lt;/code&gt;&lt;br&gt;
Your API is at &lt;code&gt;http://localhost:5000&lt;/code&gt;&lt;br&gt;
These are different "origins" - browser blocks the request by default!&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Why This Security Exists:&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Imagine you're logged into your bank. A malicious website could make requests to your bank's API using YOUR cookies. CORS prevents this by requiring the server to explicitly allow requests from other origins.&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Enabling CORS:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== ROUTER ==========
    "Express Router (Organizing Routes)": {
        concept: `
&lt;p&gt;&lt;strong&gt;📁 Organizing Routes with Express Router&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;As your app grows, putting all routes in one file becomes messy. Express Router lets you split routes into separate files.&lt;/p&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Project Structure:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
project/
├── app.js              (main file)
├── routes/
│   ├── userRoutes.js
│   ├── productRoutes.js
│   └── authRoutes.js
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Creating a Router:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// These routes are relative to where we mount the router
router.get('/', (req, res) =&gt; {
    res.json({ message: 'All users' });
});

router.get('/:id', (req, res) =&gt; {
    res.json({ message: 'User ' + req.params.id });
});

router.post('/', (req, res) =&gt; {
    res.json({ message: 'Create user' });
});

module.exports = router;
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Using the Router:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== REST API DESIGN ==========
    "RESTful API Design": {
        concept: `
&lt;p&gt;&lt;strong&gt;🏗️ Designing Clean APIs&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;REST (Representational State Transfer) is a set of conventions for designing APIs. Following these makes your API predictable and easy to use.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;REST Principles:&lt;/strong&gt;&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Use nouns for endpoints, not verbs&lt;/li&gt;
&lt;li&gt;Use HTTP methods to define actions&lt;/li&gt;
&lt;li&gt;Use proper status codes&lt;/li&gt;
&lt;li&gt;Return consistent response format&lt;/li&gt;
&lt;/ul&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Good vs Bad Endpoints:&lt;/strong&gt;&lt;/p&gt;
&lt;table&gt;
&lt;tr&gt;&lt;th&gt;❌ Bad&lt;/th&gt;&lt;th&gt;✅ Good&lt;/th&gt;&lt;th&gt;Why&lt;/th&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;GET /getUsers&lt;/td&gt;&lt;td&gt;GET /users&lt;/td&gt;&lt;td&gt;GET already means 'get'&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;POST /createUser&lt;/td&gt;&lt;td&gt;POST /users&lt;/td&gt;&lt;td&gt;POST already means 'create'&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;DELETE /deleteUser/1&lt;/td&gt;&lt;td&gt;DELETE /users/1&lt;/td&gt;&lt;td&gt;DELETE means 'delete'&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td&gt;GET /user&lt;/td&gt;&lt;td&gt;GET /users&lt;/td&gt;&lt;td&gt;Use plural nouns&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Standard CRUD Endpoints:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
GET    /api/users       → Get all users
GET    /api/users/:id   → Get one user
POST   /api/users       → Create user
PUT    /api/users/:id   → Update user (replace)
PATCH  /api/users/:id   → Update user (partial)
DELETE /api/users/:id   → Delete user

// Nested resources
GET    /api/users/:id/posts    → Get user's posts
POST   /api/users/:id/posts    → Create post for user
&lt;/pre&gt;

&lt;hr&gt;
&lt;p&gt;&lt;strong&gt;📋 Consistent Response Format:&lt;/strong&gt;&lt;/p&gt;
&lt;pre&gt;
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
&lt;/pre&gt;
`
    },

    // ========== EXPRESS INTERVIEW QUESTIONS ==========
    "Express.js Interview Questions": {
        concept: `
&lt;p&gt;&lt;strong&gt;❓ Common Express.js Interview Questions&lt;/strong&gt;&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q1: What is Express.js?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Express.js is a minimal web framework for Node.js that provides features for building web applications and APIs. It simplifies routing, middleware, and request handling.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q2: What is middleware in Express?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Middleware is a function that has access to req, res, and next. It runs between receiving a request and sending a response. Used for logging, authentication, parsing data, etc.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q3: What is the difference between app.use() and app.get()?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;app.use() handles ALL HTTP methods and can match partial paths. app.get() only handles GET requests and matches exact paths. app.use() is typically for middleware.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q4: How do you handle errors in Express?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Using try-catch blocks in routes, passing errors to next(), and creating a global error handler middleware with 4 parameters (err, req, res, next).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q5: What is req.params vs req.query vs req.body?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;req.params contains route parameters (/users/:id). req.query contains query string values (?sort=new). req.body contains POST/PUT data from the request body.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q6: What is CORS and how do you enable it?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;CORS (Cross-Origin Resource Sharing) controls which domains can access your API. Enable with the cors npm package: app.use(cors()).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q7: What is Express Router?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Express Router is a mini-app that lets you organize routes into separate modules. Create with express.Router(), define routes, then mount with app.use('/path', router).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q8: How do you serve static files?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Use express.static() middleware: app.use(express.static('public')). Files in the 'public' folder will be served at root URL.&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q9: What are the differences between PUT and PATCH?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;PUT replaces the entire resource with new data. PATCH updates only the specified fields. PUT is idempotent (same result every time).&lt;/p&gt;

&lt;p&gt;&lt;strong&gt;Q10: How do you parse JSON in Express?&lt;/strong&gt;&lt;/p&gt;
&lt;p&gt;Use the built-in middleware: app.use(express.json()). This parses JSON bodies and populates req.body.&lt;/p&gt;
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = expressData;
}
