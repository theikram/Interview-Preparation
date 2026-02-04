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

  // ========== A-Z SUMMARY ==========
  "🔥 A-Z Interview Questions": {
    concept: `
<p><strong>🎓 Rapid Fire MERN Interview Questions</strong></p>
<p><em>(Click the specific buttons below for detailed answers with code!)</em></p>

<h3>🟢 Node.js</h3>
<p><strong>Q: Event Loop?</strong> System that handles tasks. Heavy tasks go to workers, lightweight stay on main thread.</p>
<p><strong>Q: package.json?</strong> Application ID card. Dependencies, scripts, version.</p>

<h3>⚡ Express</h3>
<p><strong>Q: Middleware?</strong> Functions that run between request and response. (See detailed section below)</p>
<p><strong>Q: CORS?</strong> Security rule. Allows React (port 3000) to talk to Express (port 5000).</p>

<h3>🍃 MongoDB</h3>
<p><strong>Q: SQL vs NoSQL?</strong> SQL = Tables/Rows. NoSQL = Documents/JSON. (See detailed section below)</p>
<p><strong>Q: Indexing?</strong> Makes search fast. Like a book index.</p>

<h3>⚛️ React</h3>
<p><strong>Q: Virtual DOM?</strong> Memory copy of UI. Updates only changed parts. Fast!</p>
<p><strong>Q: Props vs State?</strong> Props = Passed down (read-only). State = Internal memory (changeable).</p>
`
  },

  // ========== DETAILED INTERVIEW QUESTIONS (THE 9 QUESTIONS) ==========
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

<p><strong>Why MongoDB for MERN?</strong></p>
<ul>
<li>✅ JavaScript everywhere - MongoDB uses JSON format</li>
<li>✅ Fast to build - no need to plan complex tables</li>
</ul>
`
  },

  "2. REST vs GraphQL": {
    concept: `
<p><strong>🔌 REST vs GraphQL</strong></p>

<p><strong>REST:</strong> Many URLs, fixed responses. (Simple)</p>
<p><strong>GraphQL:</strong> One URL, you choose what data. (Efficient)</p>

<pre class="language-javascript">
// REST - Get user
GET /api/user/1
// Returns everything: { id, name, email, age, address... }

// GraphQL - Get ONLY name
query { user(id: 1) { name } }
// Returns: { name: "Ali" }
</pre>
`
  },

  "3. What is Express.js?": {
    concept: `
<p><strong>⚡ Express.js - Why use it?</strong></p>
<p>It makes Node.js easier!</p>

<p><strong>Without Express:</strong> You have to manually check every URL and parsing data is hard.</p>
<p><strong>With Express:</strong></p>
<pre class="language-javascript">
// Easy Routing
app.get('/home', (req, res) => res.send('Home'));

// Easy JSON
app.use(express.json());

// Easy Middleware
app.use(cors());
</pre>
`
  },

  "4. How Middleware Works": {
    concept: `
<p><strong>🔗 Middleware = Checkpoints</strong></p>
<p>Think of it as security guards checking before you enter a building.</p>

<pre class="language-javascript">
Request → [Guard 1] → [Guard 2] → Your Code → Response

// Example: Check if logged in
const auth = (req, res, next) => {
  if (!req.headers.token) return res.send('Stop!');
  next(); // Go to next step!
};

app.get('/profile', auth, (req, res) => {
  res.send('Welcome User');
});
</pre>
`
  },

  "5. Async/Await vs Promises": {
    concept: `
<p><strong>⏱️ Handling Async (Slow) Code</strong></p>

<p><strong>1. Callbacks (Old):</strong> functions inside functions. Messy.</p>
<p><strong>2. Promises (Better):</strong> Uses <code>.then()</code>.</p>
<pre class="language-javascript">
getData().then(data => console.log(data));
</pre>

<p><strong>3. Async/Await (Best):</strong> Looks like normal code!</p>
<pre class="language-javascript">
async function start() {
    const data = await getData();
    console.log(data);
}
</pre>
`
  },

  "6. What is Mongoose?": {
    concept: `
<p><strong>🔷 Mongoose = MongoDB + Rules</strong></p>
<p>MongoDB by default accepts ANYTHING. Mongoose adds rules (Schemas).</p>

<pre class="language-javascript">
// Define Rules
const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    age: { type: Number, min: 18 } // Must be 18+
});

// Now if you try to save age: 10, Mongoose stops you!
</pre>
`
  },

  "7. Authentication Flow": {
    concept: `
<p><strong>🔐 Auth - How it works</strong></p>
<ol>
<li><strong>Register:</strong> User sends password. Server scrambles it (bcrypt) and saves.</li>
<li><strong>Login:</strong> User sends password. Server checks hash. If good, gives a <strong>Token</strong> (JWT).</li>
<li><strong>Access:</strong> User shows Token to enter private pages.</li>
</ol>

<pre class="language-javascript">
// Hash Password
const hash = await bcrypt.hash('123456', 10);

// Create Token
const token = jwt.sign({ id: user._id }, 'SECRET_KEY');
</pre>
`
  },

  "8. CRUD Operations": {
    concept: `
<p><strong>📝 CRUD with Mongoose</strong></p>

<pre class="language-javascript">
// CREATE
await User.create({ name: 'Ali' });

// READ
const users = await User.find();
const oneUser = await User.findById('123...');

// UPDATE
await User.findByIdAndUpdate('123...', { name: 'New Name' });

// DELETE
await User.findByIdAndDelete('123...');
</pre>
`
  },

  "9. HTTP Status Codes": {
    concept: `
<p><strong>📊 Status Codes Cheat Sheet</strong></p>
<ul>
<li><strong>200:</strong> OK (Success)</li>
<li><strong>201:</strong> Created (New thing made)</li>
<li><strong>400:</strong> Bad Request (User sent wrong data)</li>
<li><strong>401:</strong> Unauthorized (Login failed)</li>
<li><strong>404:</strong> Not Found (Wrong URL)</li>
<li><strong>500:</strong> Server Error (Our code broke)</li>
</ul>
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = mernData;
}
