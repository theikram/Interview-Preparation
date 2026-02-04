// MERN STACK - Ultimate Deep Dive & Interview Prep
const mernData = {
  // =========================================================================
  // 🟢 NODE.JS DEEP DIVE
  // =========================================================================

  "1. Node.js Architecture & Internals": {
    concept: `
<p><strong>🏗️ How Node.js Actually Works</strong></p>
<p>Node.js is not just "JS on Server". It's a runtime built on Chrome's V8 engine that uses a <strong>Single-Threaded Event Loop</strong> model.</p>

<p><strong>The "Chef" Analogy:</strong></p>
<ul>
<li><strong>Traditional Server (Java/PHP):</strong> Like a restaurant where every customer gets their own personal waiter. If 1000 customers come, you need 1000 waiters. Heavy on memory!</li>
<li><strong>Node.js:</strong> One super-fast waiter (The Event Loop) handling everyone. He takes an order, passes it to the Kitchen (System Workers), and immediately takes the next order. When food is ready, he serves it.</li>
</ul>

<p><strong>Key Components:</strong></p>
<ul>
<li><strong>Call Stack:</strong> Executes JS code line-by-line.</li>
<li><strong>Node APIs (C++):</strong> Handles heavy lifting (File I/O, Network).</li>
<li><strong>Callback Queue:</strong> Holds tasks that are "ready" to run (like a timer finishing).</li>
<li><strong>Event Loop:</strong> The manager that continuously checks: "Is the Stack empty? Do we have callbacks waiting?"</li>
</ul>

<p><strong>Blocking vs Non-Blocking:</strong></p>
<pre>
// Blocking (Bad): Freezes the whole app!
const data = fs.readFileSync('/file.txt'); 
console.log(data);

// Non-Blocking (Good): App keeps running!
fs.readFile('/file.txt', (err, data) => {
    console.log('File read!');
});
console.log('I run first!');
</pre>
`
  },

  "2. Modules & File System": {
    concept: `
<p><strong>📦 The Module System</strong></p>
<p>Node.js treats every file as a "Module". This keeps code isolated and organized.</p>

<p><strong>CJS vs ESM:</strong></p>
<ul>
<li><strong>CommonJS (CJS):</strong> The old standard. Uses <code>require()</code> and <code>module.exports</code>. Synchronous loading.</li>
<li><strong>ES Modules (ESM):</strong> The modern standard. Uses <code>import</code> and <code>export</code>. Asynchronous. Use <code>"type": "module"</code> in package.json.</li>
</ul>

<p><strong>Core Modules (Built-in):</strong></p>
<ul>
<li><code>fs</code>: File System (Read/Write files)</li>
<li><code>http</code>: Create servers</li>
<li><code>path</code>: Handle file paths (Windows vs Mac slashes)</li>
<li><code>os</code>: Info about the computer (CPU, Memory)</li>
<li><code>crypto</code>: Hashing and Security</li>
</ul>

<pre>
const path = require('path');
const fullPath = path.join(__dirname, 'data', 'user.json');
// Works on Windows (\\) and Mac (/) automatically!
</pre>
`
  },

  // =========================================================================
  // ⚡ EXPRESS.JS MASTERY
  // =========================================================================

  "3. Express Routing Masterclass": {
    concept: `
<p><strong>🛣️ Advanced Routing Patterns</strong></p>
<p>Routing is how your app decides which code to run for a URL.</p>

<p><strong>1. URL Parameters (Variables in URL):</strong></p>
<p>Used for specific resources (IDs, usernames).</p>
<pre>
// Route: /users/123
app.get('/users/:id', (req, res) => {
    console.log(req.params.id); // "123"
});
</pre>

<p><strong>2. Query Strings (Filtering):</strong></p>
<p>Used for sorting, pagination, searching.</p>
<pre>
// URL: /search?term=laptop&sort=price
app.get('/search', (req, res) => {
    const { term, sort } = req.query;
    // Search DB for 'laptop' sorted by 'price'
});
</pre>

<p><strong>3. Route Grouping (cleaner code):</strong></p>
<pre>
const router = express.Router();
router.get('/', getAllUsers);
router.post('/', createUser);
app.use('/api/users', router); // Prefixes all with /api/users
</pre>
`
  },

  "4. Middleware Architecture": {
    concept: `
<p><strong>🛡️ Middleware: The Heart of Express</strong></p>
<p>Middleware creates a "Pipeline". Request enters -> Passes through stages -> Response leaves.</p>

<p><strong>Types of Middleware:</strong></p>
<ol>
<li><strong>Application Level:</strong> <code>app.use(logic)</code> - Runs everywhere.</li>
<li><strong>Router Level:</strong> <code>router.use(logic)</code> - Runs for a group of routes.</li>
<li><strong>Built-in:</strong> <code>express.json()</code>, <code>express.static()</code>.</li>
<li><strong>Error Handling:</strong> Takes 4 args <code>(err, req, res, next)</code>.</li>
</ol>

<p><strong>Common Use Cases:</strong></p>
<ul>
<li><strong>Logging:</strong> Record every visit.</li>
<li><strong>Auth:</strong> Check if user sends a valid Token.</li>
<li><strong>Sanitization:</strong> Clean malicious data from input.</li>
</ul>

<pre>
// Custom Auth Middleware
const protect = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ error: 'Stop right there!' });
    }
    next(); // Valid? Pass to the route handler.
};
</pre>
`
  },

  // =========================================================================
  // 🍃 MONGODB & MONGOOSE DEEP DIVE
  // =========================================================================

  "5. Schema Design & Data Modeling": {
    concept: `
<p><strong>📐 Designing Data for NoSQL</strong></p>
<p>In SQL you Normalize (split data). In MongoDB, you logically <strong>Embed</strong> or <strong>Reference</strong>.</p>

<p><strong>1. Embedding (Nesting):</strong></p>
<p>Store related data INSIDE the document. Good for "One-to-Few" relationships.</p>
<pre>
{
  name: "Ikram",
  addresses: [
     { city: "New York", zip: "10001" }, // Data lives here
     { city: "London", zip: "SW1" }
  ]
}
// Pros: Fast read (1 query). Cons: Hard to query addresses alone.
</pre>

<p><strong>2. Referencing (Normalization):</strong></p>
<p>Store IDs linking to other documents. Good for "One-to-Many" or "Many-to-Many".</p>
<pre>
// User Doc
{ _id: 1, name: "Ikram" }

// Post Doc
{ title: "React Guide", author_id: 1 } 
// Use .populate('author_id') to link them!
</pre>
`
  },

  "6. Advanced Mongoose & Aggregation": {
    concept: `
<p><strong>🔍 Power Querying</strong></p>

<p><strong>Advanced Operators:</strong></p>
<ul>
<li><code>$gt / $lt</code>: Greater/Less than (Prices, Dates).</li>
<li><code>$in</code>: Match any value in an array (Find products in [Red, Blue]).</li>
<li><code>$regex</code>: Partial text search ("iphone" finds "Apple iPhone").</li>
</ul>

<p><strong>The Aggregation Pipeline (MapReduce's successor):</strong></p>
<p>Powerful multi-stage data processing. Think of a conveyor belt.</p>
<pre>
await Order.aggregate([
  { $match: { status: "completed" } },      // Stage 1: Filter
  { $group: { _id: "$userId", total: { $sum: "$amount" } } }, // Stage 2: Sum
  { $sort: { total: -1 } }                  // Stage 3: Sort highest
]);
</pre>

<p><strong>Mongoose Virtuals:</strong></p>
<p>Fields that don't exist in DB but exist in Code. (e.g., <code>fullName</code> generated from <code>firstName + lastName</code>).</p>
`
  },

  // =========================================================================
  // ⚛️ REACT.JS ADVANCED CONCEPTS
  // =========================================================================

  "7. React Core & Reconciliation": {
    concept: `
<p><strong>🧠 How React Updates the UI</strong></p>
<p>React is fast because it hates touching the Browser DOM (which is slow).</p>

<p><strong>The Virtual DOM:</strong></p>
<p>A lightweight JavaScript object copy of the UI. When you call <code>setState</code>, React:</p>
<ol>
<li>Creates a NEW Virtual DOM tree.</li>
<li>Compares it with the OLD tree (<strong>Diffing Algorithm</strong>).</li>
<li>Identify ONLY what changed (e.g., just one text node).</li>
<li>Updates the Real DOM with ONLY those changes (<strong>Reconciliation</strong>).</li>
</ol>

<p><strong>React Fiber:</strong></p>
<p>The new engine (since React 16) that can pause and resume rendering work, allowing for smoother animations and "Concurrent Mode".</p>
`
  },

  "8. Hooks Mastery (Beyond Basics)": {
    concept: `
<p><strong>🪝 Deep Dive into Hooks</strong></p>

<p><strong>useRef:</strong></p>
<p>Like a "Box" to store values that persist between renders BUT don't cause re-renders. Also used to access DOM elements directly (inputs).</p>

<p><strong>useMemo:</strong></p>
<p><strong>Caches a calculated value.</strong> "Don't re-calculate 'Expensive Math' unless numbers change."</p>
<pre>const total = useMemo(() => heavyMath(a, b), [a, b]);</pre>

<p><strong>useCallback:</strong></p>
<p><strong>Caches a function definition.</strong> "Don't re-create this function object on every render." Vital when passing functions to child components to prevent their unnecessary re-renders.</p>

<p><strong>Custom Hooks:</strong></p>
<p>Extracting component logic into reusable functions. (e.g., <code>useFetch</code>, <code>useLocalStorage</code>).</p>
`
  },

  "9. State Management Patterns": {
    concept: `
<p><strong>💾 Managing Data Across the App</strong></p>

<p><strong>1. Prop Drilling (The Problem):</strong></p>
<p>Passing data: Grandparent -> Parent -> Child -> Grandchild. Messy and hard to maintain.</p>

<p><strong>2. Context API (The Native Solution):</strong></p>
<p>Create a "Provider" that wraps the app. Any child, anywhere, can "Consume" the data. Great for: Themes, User Auth, Language.</p>

<p><strong>3. Redux / Zustand (External Libraries):</strong></p>
<p>For complex global state. Separation of concerns:</p>
<ul>
<li><strong>Store:</strong> The single source of truth (Database for frontend).</li>
<li><strong>Action:</strong> Description of event ("USER_LOGGED_IN").</li>
<li><strong>Reducer:</strong> Pure function that calculates new state based on Action.</li>
</ul>
`
  },

  // =========================================================================
  // 🔐 FULL STACK & AUTHENTICATION
  // =========================================================================

  "10. Authentication Strategy": {
    concept: `
<p><strong>🔐 Modern Auth: JWT vs Sessions</strong></p>

<p><strong>Session Based (Old, Stateful):</strong></p>
<p>Server creates a session ID, stores it in memory/DB, and sends cookie. User sends cookie, server looks up ID in memory. Hard to scale (multiple servers need to share memory).</p>

<p><strong>JWT Based (Modern, Stateless):</strong></p>
<p>Server signs a token with a Secret Key. The Token contains data (<code>user_id: 123</code>). Server verifies signature. No memory lookup needed! Scales infinitely.</p>

<p><strong>Where to store JWT?</strong></p>
<ul>
<li><strong>LocalStorage:</strong> Easy (<code>localStorage.getItem</code>), but vulnerable to XSS attacks (JS can read it).</li>
<li><strong>HttpOnly Cookie:</strong> Secure. JS cannot read it. Vulnerable to CSRF (needs protection). Best practice for sensitive apps.</li>
</ul>
`
  },

  // =========================================================================
  // 🔥 ESSENTIAL MERN QUESTIONS (USER REQUESTED)
  // =========================================================================
  "🔥 Essential MERN Questions": {
    concept: `
<p><strong>🏆 The 9 Must-Know Questions (Master These!)</strong></p>

<p><strong>1. Difference between SQL and NoSQL</strong></p>
<ul>
<li><strong>SQL (MySQL):</strong> Relational, Tables/Rows, Fixed Schema, Vertically Scalable (Better Hardware). Good for: Finance, Complex Relations.</li>
<li><strong>NoSQL (MongoDB):</strong> Non-relational, Documents (JSON), Dynamic Schema, Horizontally Scalable (More Servers). Good for: Big Data, Rapid Dev.</li>
<li><strong>Fit for MERN:</strong> JS end-to-end. MongoDB stores BSON (Binary JSON), Node/React speak JSON. seamless data flow.</li>
</ul>

<p><strong>2. Explain REST vs GraphQL</strong></p>
<ul>
<li><strong>REST:</strong> Multiple Endpoints (<code>/users</code>, <code>/posts</code>). Fixed data structure. Over-fetching (getting too much) or Under-fetching (too little).</li>
<li><strong>GraphQL:</strong> Single Endpoint (<code>/graphql</code>). Client queries exactly what fields it needs. No waste. Flexible.</li>
</ul>

<p><strong>3. What is Express.js & Why use it?</strong></p>
<p>Minimal Node.js framework. It abstracts low-level server logic. Features: Robust Routing, Middleware support, Template rendering. Without it, handling POST bodies and URL params in raw Node is painful.</p>

<p><strong>4. How does Middleware work?</strong></p>
<p>Functions that execute during the request-response cycle. They have access to <code>req</code>, <code>res</code>, and <code>next</code>.</p>
<p><em>Flow:</em> Request -> Middleware1 (Log) -> Middleware2 (Auth) -> Route Handler -> Response.</p>

<p><strong>5. Callback vs Promises vs Async/Await</strong></p>
<ul>
<li><strong>Callback:</strong> Function passed as argument. Risk: "Callback Hell" (nesting).</li>
<li><strong>Promise:</strong> Object representing future completion. Chaining <code>.then()</code>. Cleaner errors <code>.catch()</code>.</li>
<li><strong>Async/Await:</strong> Syntactic sugar over Promises. Code looks synchronous/linear. Uses <code>try/catch</code> block. Best readability.</li>
</ul>

<p><strong>6. What is Mongoose?</strong></p>
<p>ODM (Object Data Modeling) library for Mongo. It imposes structure (Schemas) on schema-less MongoDB. Handles Validation, Type Casting, Hooks (pre-save), and relationships.</p>

<p><strong>7. Auth & Authz?</strong></p>
<ul>
<li><strong>Authentication:</strong> Identity Verification (Login). Method: Passwords (bcrypt), OAuth.</li>
<li><strong>Authorization:</strong> Access Control (Permissions). Method: JWT Scopes, User Roles (Admin/User).</li>
</ul>

<p><strong>8. CRUD Operations?</strong></p>
<p>The 4 pillars of persistent storage apps. Mapping to HTTP: Create(POST), Read(GET), Update(PUT/PATCH), Delete(DELETE).</p>

<p><strong>9. Error Handling & Status Codes</strong></p>
<p>Communicating results to client clearly.</p>
<ul>
<li>2xx: Success (200 OK, 201 Created)</li>
<li>4xx: Client Error (400 Bad Request, 401 Unauth, 403 Forbidden, 404 Not Found)</li>
<li>5xx: Server Error (500 Internal Error, 503 Unavailable)</li>
</ul>
`
  },

  // =========================================================================
  // 🚀 A-Z RAPID FIRE (EXTRA CREDIT)
  // =========================================================================
  "🚀 A-Z Interview Questions": {
    concept: `
<p><strong>🎓 Rapid Fire Knowledge Check</strong></p>

<p><strong>Q: What is a Pure Function?</strong></p>
<p>A function that always returns the same output for the same input and has no side effects. React Reducers must be pure.</p>

<p><strong>Q: What is "Lifting State Up"?</strong></p>
<p>Moving state from a child component to a common parent so sibling components can share data.</p>

<p><strong>Q: What is a Thunk?</strong></p>
<p>Middleware in Redux that allows you to write action creators that return a function instead of an action. Used for Async logic (API calls).</p>

<p><strong>Q: What is Tree Shaking?</strong></p>
<p>Removing unused code during build process (Webpack) to make the bundle smaller.</p>

<p><strong>Q: What is CORS preflight?</strong></p>
<p>An <code>OPTIONS</code> request sent by browser before the actual request to check if the server allows the action.</p>

<p><strong>Q: SQL Injection vs NoSQL Injection?</strong></p>
<p>Both are attacks where malicious code is inserted into queries. Prevention: Sanitize inputs, use OM/ODM (Mongoose/Sequelize) which escape queries automatically.</p>
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = mernData;
}
