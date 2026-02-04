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
`
  },

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
`
  },

  "Express.js Setup": {
    concept: `
<p><strong>⚡ Express.js Setup</strong></p>
<p>Fast, unopinionated, minimalist web framework for Node.js.</p>
<pre>
const express = require('express');
const app = express();
app.use(express.json()); // Allow JSON data
app.get('/', (req, res) => res.send('API Running'));
app.listen(5000);
</pre>
`
  },

  "Express Routes (CRUD)": {
    concept: `
<p><strong>🛣️ Express Routes</strong></p>
<pre>
// GET: Fetch data
app.get('/api/users', (req, res) => res.json({ name: 'Ali' }));

// POST: Create data
app.post('/api/users', (req, res) => {
    // req.body has data from client
    res.status(201).json({ msg: 'Created' });
});
</pre>
`
  },

  "Express Middleware": {
    concept: `
<p><strong>🛡️ Middleware</strong></p>
<p>Functions that run <strong>between</strong> the request and the response. Like security guards.</p>
<pre>
const logger = (req, res, next) => {
    console.log(req.url);
    next(); // Move to next step!
};
app.use(logger);
</pre>
`
  },

  "MongoDB Basics": {
    concept: `
<p><strong>🍃 MongoDB Basics</strong></p>
<p>NoSQL Database. Stores data in JSON-like documents.</p>
<pre>
{
    "_id": "64f8a...",
    "name": "Ikram",
    "skills": ["React", "Node"]
}
</pre>
`
  },

  "Mongoose Basics": {
    concept: `
<p><strong>🔷 What is Mongoose?</strong></p>
<p>Library that adds <strong>Schemas</strong> (rules) to MongoDB.</p>
<pre>
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true }
});
const User = mongoose.model('User', userSchema);
</pre>
`
  },

  "React Basics": {
    concept: `
<p><strong>⚛️ React Quick Overview</strong></p>
<p>Library for building UI with reusable components and Virtual DOM.</p>
<pre>
function App() {
    const [count, setCount] = useState(0);
    return <button onClick={() => setCount(count+1)}>{count}</button>;
}
</pre>
`
  },

  "JWT Authentication": {
    concept: `
<p><strong>🔒 JWT (JSON Web Token)</strong></p>
<p>Stateless auth. Server gives a signed "ticket" (token) to user.</p>
<ol>
<li>User logs in</li>
<li>Server creates Token (jwt.sign)</li>
<li>User sends Token in Header (Authorization: Bearer ...)</li>
<li>Server verifies Token (jwt.verify)</li>
</ol>
`
  },

  // ========== A-Z INTERVIEW QUESTIONS ==========
  "🔥 A-Z Interview Questions": {
    concept: `
<p><strong>🎓 Complete MERN Interview Guide (Easy Answers)</strong></p>

<h3>🟢 Node.js & General</h3>

<p><strong>Q1: What is the Event Loop?</strong></p>
<p>Node.js is single-threaded (one chef). The Event Loop is the system that handles tasks continuously. If a task is heavy (like reading a file), Node sends it to a "worker" and moves to the next task. When the worker is done, the result comes back to the main thread. This makes Node fast.</p>

<p><strong>Q2: Thread-based vs Event-driven?</strong></p>
<p><strong>Thread-based (Java/PHP):</strong> Creates a new thread for every user. Memory heavy.</p>
<p><strong>Event-driven (Node.js):</strong> One thread for everyone. Uses events to switch tasks quickly. Light & fast.</p>

<p><strong>Q3: What is package.json?</strong></p>
<p>The ID card of your project. It lists:</p>
<ul>
<li>Project name & version</li>
<li>Dependencies (libraries you installed)</li>
<li>Scripts (like <code>npm start</code>)</li>
</ul>

<p><strong>Q4: require() vs import?</strong></p>
<p><code>require()</code> is old Node.js (CommonJS). <code>import</code> is new modern JS (ES Modules). Node supports both now.</p>

<hr>

<h3>⚡ Express.js</h3>

<p><strong>Q5: What is Middleware?</strong></p>
<p>Functions that sit in the middle of the request. Think of an airport security check. You pass security (middleware) before you get to your gate (route). Examples: <code>express.json()</code>, <code>cors()</code>, <code>auth</code>.</p>

<p><strong>Q6: App.use() vs App.get()?</strong></p>
<p><code>app.use()</code> runs for ALL requests (global settings). <code>app.get()</code> only runs for GET requests on a specific URL.</p>

<p><strong>Q7: What is CORS?</strong></p>
<p><strong>Cross-Origin Resource Sharing.</strong> By default, browsers block requests from frontend (localhost:3000) to backend (localhost:5000) for security. CORS middleware allows them to talk.</p>

<p><strong>Q8: How to handle errors?</strong></p>
<p>Use a special middleware at the end with 4 arguments: <code>(err, req, res, next)</code>. If any route calls <code>next(err)</code>, this function catches it!</p>

<hr>

<h3>🍃 MongoDB</h3>

<p><strong>Q9: SQL vs NoSQL?</strong></p>
<p><strong>SQL:</strong> Tables, Rows, Fixed columns. Good for strict data (Banking).</p>
<p><strong>NoSQL:</strong> Documents, JSON, Flexible. Good for fast changing apps (Social Media).</p>

<p><strong>Q10: What is an Index?</strong></p>
<p>Like the index at the back of a book. Without it, MongoDB scans every document (slow). WITH it, MongoDB goes straight to the data (fast).</p>

<p><strong>Q11: What is Replication?</strong></p>
<p>Saving copies of data on multiple servers. If one server dies, the data is safe on another.</p>

<p><strong>Q12: Aggregation Pipeline?</strong></p>
<p>Advanced filtering. Think of it like a factory line: Filter data → Group it → Calculate sum → Sort it.</p>

<hr>

<h3>⚛️ React.js</h3>

<p><strong>Q13: What is the Virtual DOM?</strong></p>
<p>React keeps a "blueprint" (copy) of the page in memory. When data changes, it updates the blueprint first, compares it to the real page, and only updates the *exact* part that changed. This makes it super fast.</p>

<p><strong>Q14: State vs Props?</strong></p>
<p><strong>Props:</strong> Passed down from parent. Read-only. (Like DNA given by parents)</p>
<p><strong>State:</strong> Private data inside component. Can change. (Like your mood)</p>

<p><strong>Q15: What is JSX?</strong></p>
<p>JavaScript XML. Syntax that lets us write HTML inside JavaScript. <code>const tag = &lt;h1&gt;Hi&lt;/h1&gt;</code>.</p>

<p><strong>Q16: useEffect Hook?</strong></p>
<p>Handles "side effects" - things that happen *after* render. Examples: Fetching data, changing document title, setting timers.</p>

<p><strong>Q17: What is Prop Drilling?</strong></p>
<p>Passing data through many layers of components (Grandparent → Parent → Child → Grandchild). Bad! Fix it using <strong>Context API</strong> or <strong>Redux</strong>.</p>

<p><strong>Q18: Class vs Functional Components?</strong></p>
<p><strong>Class:</strong> Old way, confusing <code>this</code> keyword, lifecycle methods (componentDidMount).</p>
<p><strong>Functional:</strong> New way, simple functions, uses Hooks. Preferred!</p>

<hr>

<h3>🔐 MERN Full Stack</h3>

<p><strong>Q19: What is MVC?</strong></p>
<p>Model, View, Controller.</p>
<ul>
<li><strong>Model:</strong> Database structure (Mongoose Schema)</li>
<li><strong>View:</strong> What user sees (React)</li>
<li><strong>Controller:</strong> Logic (Express functions)</li>
</ul>

<p><strong>Q20: How does Login work? (JWT)</strong></p>
<p>User sends password -> Server checks hash -> Server signs a 'Token' -> User saves token -> User shows token for next requests.</p>

<p><strong>Q21: Secure a password?</strong></p>
<p>NEVER store plain text. Use <strong>bcrypt</strong> to hash (scramble) it. 123456 → $2b$10$X8...</p>

<p><strong>Q22: HTTP Status Codes?</strong></p>
<ul>
<li>200: Success</li>
<li>201: Created</li>
<li>400: Bad Data</li>
<li>401: Unauthorized (Login needed)</li>
<li>404: Not Found</li>
<li>500: Server Error</li>
</ul>
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = mernData;
}
