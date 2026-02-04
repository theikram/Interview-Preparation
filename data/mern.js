// MERN STACK - Complete Interview Prep (Deep Dive & Interview Questions)
const mernData = {
  // ========== DETAILED CONCEPTS (Basic to One Step Further) ==========

  "Node.js Architecture": {
    concept: `
<p><strong>🏗️ Node.js Architecture: Under the Hood</strong></p>
<p>Node.js is not just "JavaScript on the server". It has a unique architecture that makes it special.</p>

<p><strong>1. Single-Threaded Event Loop:</strong></p>
<p>Unlike Java or PHP which create a new "thread" (worker) for every request, Node.js uses <strong>one single thread</strong> for everything. It's like a Starbucks with one super-fast cashier.</p>

<p><strong>2. Non-Blocking I/O:</strong></p>
<p>When the cashier (Node) takes an order (Request) that takes time (like "make a latte" or "query database"), they don't wait. They pass the order to the kitchen (System Kernel/Worker Pool) and immediately take the next customer's order. When the latte is ready, a "callback" alerts the cashier.</p>

<p><strong>3. Libuv:</strong></p>
<p>The magic library written in C++ that gives Node.js its event loop and ability to talk to the OS (file system, network).</p>

<pre>
// Simple Non-Blocking Example
console.log('1. Start');

setTimeout(() => {
    console.log('2. Timer Done (Latte Ready)');
}, 2000);

console.log('3. End');

// Output:
// 1. Start
// 3. End
// 2. Timer Done (Latte Ready)
</pre>
`
  },

  "Express.js Deep Dive": {
    concept: `
<p><strong>⚡ Express.js: More Than Just Routing</strong></p>
<p>Express hides the ugly parts of Node's built-in <code>http</code> module.</p>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Routing:</strong> Defining what happens when a user visits <code>/home</code> or <code>/api/users</code>.</li>
<li><strong>Middleware:</strong> The backbone of Express. Functions that run in a chain.</li>
<li><strong>Template Engines:</strong> (Optional) Rendering HTML on the server (EJS, Pug).</li>
</ul>

<p><strong>Project Structure Best Practices:</strong></p>
<pre>
/project
  /controllers (Logic)
  /models      (Database Schemas)
  /routes      (URL definitions)
  /middleware  (Auth, validation)
  server.js    (Entry point)
</pre>
`
  },

  "MongoDB Advanced": {
    concept: `
<p><strong>🍃 MongoDB: Indexing & Relations</strong></p>
<p>Going beyond basic CRUD.</p>

<p><strong>1. Indexing (Speed):</strong></p>
<p>Without an index, MongoDB scans <strong>every</strong> document to find one (Collection Scan). With an index, it jumps straight to the data (Index Scan). Always index fields you search by (email, username).</p>
<pre>userSchema.index({ email: 1 }); // 1 = Ascending</pre>

<p><strong>2. Population (Relations):</strong></p>
<p>MongoDB is not relational, but <code>populate()</code> lets us simulate it. It replaces an ID with the actual document from another collection.</p>
<pre>
// User has many Posts
const postSchema = new mongoose.Schema({
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// Get post AND the author's details
const post = await Post.findById(id).populate('author');
console.log(post.author.name); // Prints name, not just ID!
</pre>
`
  },

  "React Data Flow": {
    concept: `
<p><strong>⚛️ React: Data Flow & Lifecycle</strong></p>

<p><strong>Unidirectional Data Flow:</strong></p>
<p>Data only flows <strong>DOWN</strong> (Parent → Child). To communicate UP, we pass a function down.</p>

<p><strong>Component Lifecycle (Hooks Equivalent):</strong></p>
<ul>
<li><strong>Mounting (Birth):</strong> <code>useEffect(() => {}, [])</code></li>
<li><strong>Updating (Growth):</strong> <code>useEffect(() => {}, [count])</code></li>
<li><strong>Unmounting (Death):</strong> <code>useEffect(() => { return () => cleanup() }, [])</code></li>
</ul>

<p><strong>Virtual DOM vs Real DOM:</strong></p>
<p>React creates a virtual copy. When state changes, it calculates the difference (diffing) and updates the minimum necessary parts of the Real DOM (reconciliation). This is why React is fast.</p>
`
  },

  // ========== 🔥 ESSENTIAL MERN QUESTIONS (The Top 9) ==========
  "🔥 Essential MERN Questions": {
    concept: `
<p><strong>🏆 Top 9 Must-Know MERN Questions</strong></p>

<p><strong>1. Difference between SQL and NoSQL</strong></p>
<ul>
<li><strong>SQL (MySQL):</strong> Rigid tables (rows/columns). Good for strict relationships.</li>
<li><strong>NoSQL (MongoDB):</strong> Flexible documents (JSON). Good for rapid growth and changing data.</li>
<li><strong>Why MERN?</strong> MongoDB stores JSON. React & Node use JSON. It's one language (JS) everywhere.</li>
</ul>

<p><strong>2. Explain REST vs GraphQL</strong></p>
<ul>
<li><strong>REST:</strong> Multiple URLs (<code>/users</code>, <code>/posts</code>). Server decides what data to send. Easy to cache.</li>
<li><strong>GraphQL:</strong> One URL (<code>/graphql</code>). Client asks for exactly what it needs (<code>{ user { name } }</code>). No over-fetching.</li>
</ul>

<p><strong>3. What is Express.js and why use it?</strong></p>
<p>It's a framework that runs on Node.js. It simplifies: 1. Routing (URL handling), 2. Middleware support, 3. API creation. Without it, you'd have to write raw HTTP code (messy).</p>

<p><strong>4. How does Middleware work in Express?</strong></p>
<p>It's a function that runs <strong>in the middle</strong> of a request. <code>req -> middleware -> res</code>. Used for: Checking tokens (Auth), Logging, Parsing JSON errors.</p>

<p><strong>5. Callback vs Promises vs Async/Await</strong></p>
<ul>
<li><strong>Callback:</strong> Old way. Can lead to "Callback Hell" (nested code).</li>
<li><strong>Promise:</strong> Better. Uses <code>.then()</code> and <code>.catch()</code>.</li>
<li><strong>Async/Await:</strong> Modern Best Practice. Looks like synchronous code. Readable and clean.</li>
</ul>

<p><strong>6. What is Mongoose and why use it?</strong></p>
<p>It's an ODM (Object Data Modeler). It adds <strong>Schemas</strong> (rules) to MongoDB. It ensures your data looks correct (e.g., "Email is required") before saving.</p>

<p><strong>7. How to handle Auth (Authentication vs Authorization)?</strong></p>
<ul>
<li><strong>Authentication (Who are you?):</strong> Login using email/password. Use <strong>bcrypt</strong> to hash passwords.</li>
<li><strong>Authorization (What can you do?):</strong> Send a <strong>JWT</strong> (Token) to client on login. Client sends it back in headers. Server verifies it.</li>
</ul>

<p><strong>8. Meaning of CRUD?</strong></p>
<ul>
<li><strong>C</strong>reate (POST)</li>
<li><strong>R</strong>ead (GET)</li>
<li><strong>U</strong>pdate (PUT/PATCH)</li>
<li><strong>D</strong>elete (DELETE)</li>
</ul>

<p><strong>9. Error Handling & Status Codes</strong></p>
<ul>
<li><strong>200:</strong> OK (Success)</li>
<li><strong>201:</strong> Created (New Record)</li>
<li><strong>400:</strong> Bad Request (User sent wrong data)</li>
<li><strong>401:</strong> Unauthorized (Login required)</li>
<li><strong>404:</strong> Not Found</li>
<li><strong>500:</strong> Server Error (Our fault)</li>
</ul>
`
  },

  // ========== A-Z INTERVIEW QUESTIONS (Comprehensive) ==========
  "🚀 A-Z Interview Questions": {
    concept: `
<p><strong>🎓 Complete MERN Interview Guide (Additional Concepts)</strong></p>

<h3>🟢 Node.js</h3>
<p><strong>Q: What is REPL?</strong></p>
<p>Read-Eval-Print-Loop. The interactive console you get when you type <code>node</code> in terminal.</p>
<p><strong>Q: What are Streams?</strong></p>
<p>Handling large data (like videos) chunk by chunk, without loading the whole file into memory.</p>

<h3>⚡ Express.js</h3>
<p><strong>Q: What is Body Parser?</strong></p>
<p>Middleware (now <code>express.json()</code>) that reads the "body" of a POST request so you can use <code>req.body</code>.</p>
<p><strong>Q: How do you handle file uploads?</strong></p>
<p>Using middleware like <code>multer</code>.</p>

<h3>🍃 MongoDB</h3>
<p><strong>Q: What is Aggregation?</strong></p>
<p>Advanced filtering. Process data records and return computed results (like Sum, Average).</p>
<p><strong>Q: What is Sharding?</strong></p>
<p>Splitting data across multiple servers to handle huge amounts of data.</p>

<h3>⚛️ React.js</h3>
<p><strong>Q: What is Higher Order Component (HOC)?</strong></p>
<p>A function that takes a component and returns a new component (e.g., adding Auth protection).</p>
<p><strong>Q: What is Context API?</strong></p>
<p>Way to pass data globally (like Theme or User) without "Prop Drilling".</p>

<h3>🔐 Security</h3>
<p><strong>Q: What is XSS?</strong></p>
<p>Cross-Site Scripting. Attackers injecting scripts into your site. Prevent by escaping input (React does this automatically).</p>
<p><strong>Q: What is Environment Variables?</strong></p>
<p>Storing secrets (API keys, DB Passwords) in a <code>.env</code> file, not in code.</p>
`
  }
};

if (typeof module !== 'undefined') {
  module.exports = mernData;
}
