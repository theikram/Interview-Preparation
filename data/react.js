// REACT - Complete Interview Prep (Detailed Explanations + Cheatsheets)
const reactData = {
    // ========== WHAT IS REACT ==========
    "What is React?": {
        concept: `
<p><strong>⚛️ Understanding React from Scratch</strong></p>

<p>Let me explain React in a way that actually makes sense. Imagine you're building a website the traditional way - you have HTML for structure, CSS for styling, and JavaScript to make things interactive. Every time you want to update something on the page (like showing a new message or updating a counter), you have to manually find that element in the DOM and change it. This gets messy and error-prone very quickly!</p>

<p><strong>React solves this problem completely.</strong> Instead of telling the browser "find this element and change it," you simply describe what the page SHOULD look like based on your data. When the data changes, React automatically figures out what needs to update and does it for you. It's like having a smart assistant who watches your data and keeps the screen in sync.</p>

<p><strong>The Key Concepts You Need to Understand:</strong></p>

<p><strong>1. Components - The Building Blocks:</strong></p>
<p>Think of components like LEGO pieces. Each piece of your website (a button, a navigation bar, a user card, a comment section) is a separate component. You build them once, and you can reuse them anywhere. A Facebook page isn't one giant piece of code - it's hundreds of small components working together. The header is a component. Each post is a component. The like button is a component. This makes code organized and reusable.</p>

<p><strong>2. Virtual DOM - Why React is Fast:</strong></p>
<p>Updating the real webpage (DOM) is slow. Every time you change something, the browser has to recalculate layouts and repaint pixels. React is clever - it keeps a lightweight copy of the page in memory (Virtual DOM). When something changes, React first updates this copy, compares it with the previous version, finds the minimum changes needed, and only updates those specific parts on the real page. This is called "reconciliation" and it's why React apps feel snappy.</p>

<p><strong>3. One-Way Data Flow:</strong></p>
<p>Data in React flows in one direction: from parent components to child components (top to bottom). This might seem limiting at first, but it makes your app predictable and easier to debug. If something goes wrong, you always know where to look - follow the data trail upward.</p>

<p><strong>Why is React So Popular?</strong></p>
<ul>
<li><strong>Huge Job Market:</strong> Almost every tech company uses React - Facebook, Instagram, Netflix, Airbnb, Uber, and thousands more. Learning React opens many doors.</li>
<li><strong>One Language Everywhere:</strong> With React and React Native, you can build websites AND mobile apps using the same knowledge.</li>
<li><strong>Strong Community:</strong> Millions of developers, thousands of tutorials, and solutions to almost any problem you'll face.</li>
<li><strong>Developer Experience:</strong> Great error messages, browser dev tools, and fast refresh make development enjoyable.</li>
</ul>

<hr>
<p><strong>📋 Quick Start Cheatsheet:</strong></p>
<pre>
// Create new React project
npx create-react-app my-app
cd my-app
npm start

// Basic component structure
function MyComponent() {
    return &lt;h1&gt;Hello World!&lt;/h1&gt;;
}
</pre>
`
    },

    // ========== COMPONENTS ==========
    "Components": {
        concept: `
<p><strong>🧱 Components - The Heart of React</strong></p>

<p>If you understand one thing about React, let it be this: <strong>everything is a component.</strong> A component is simply a JavaScript function that returns what should appear on the screen. That's it! But this simple idea is incredibly powerful.</p>

<p><strong>Why Components Matter:</strong></p>

<p>Imagine building a house. You could try to make the entire house as one solid piece, but that would be impossible to modify, repair, or reuse. Instead, houses are built from components: walls, windows, doors, roof sections. Each component can be manufactured separately, tested, and replaced if needed. React works the same way!</p>

<p>Let's say you're building Instagram. Without components, you'd have one massive file with thousands of lines of code for everything - the header, posts, stories, comments, likes. Finding bugs would be a nightmare. With components:</p>
<ul>
<li><strong>Header</strong> is one component (contains logo, search, icons)</li>
<li><strong>StoryBar</strong> is one component (contains many StoryCircle components)</li>
<li><strong>Post</strong> is one component (contains image, LikeButton, CommentSection components)</li>
<li><strong>LikeButton</strong> is one component (can be reused in posts, comments, stories)</li>
</ul>

<p>Each component lives in its own file, does one thing well, and can be understood in isolation. When there's a bug in the like functionality, you know exactly where to look!</p>

<p><strong>How to Create a Component:</strong></p>

<p>A component is just a function that returns JSX (HTML-like code). There are two rules you must follow:</p>
<ol>
<li><strong>Name must start with a CAPITAL letter.</strong> This is how React knows it's a component, not a regular HTML tag. <code>Button</code> is a component, <code>button</code> is HTML.</li>
<li><strong>Must return a single parent element.</strong> You can't return two siblings directly - wrap them in a <code>&lt;div&gt;</code> or use <code>&lt;&gt;...&lt;/&gt;</code> (Fragment).</li>
</ol>

<hr>
<p><strong>📋 Component Examples:</strong></p>
<pre>
// The simplest possible component
// It's just a function that returns some HTML-like code
function Greeting() {
    return &lt;h1&gt;Hello World!&lt;/h1&gt;;
}


// A component with some logic
// You can use any JavaScript before the return
function WelcomeMessage() {
    const currentHour = new Date().getHours();
    let greeting;
    
    if (currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    
    return &lt;h1&gt;{greeting}, welcome to our site!&lt;/h1&gt;;
}


// Using components inside other components
// This is called "composition" - building complex UI from simple pieces
function App() {
    return (
        &lt;div&gt;
            &lt;Greeting /&gt;           {/* Using our component */}
            &lt;WelcomeMessage /&gt;     {/* Using another component */}
            &lt;Greeting /&gt;           {/* We can reuse it! */}
        &lt;/div&gt;
    );
}


// Putting components in separate files (best practice)
// --- Greeting.js ---
function Greeting() {
    return &lt;h1&gt;Hello!&lt;/h1&gt;;
}
export default Greeting;

// --- App.js ---
import Greeting from './Greeting';

function App() {
    return &lt;Greeting /&gt;;
}
</pre>
`
    },

    // ========== PROPS ==========
    "Props (Passing Data)": {
        concept: `
<p><strong>📦 Props - How Components Talk to Each Other</strong></p>

<p>So you've built a beautiful Button component. But what if you need buttons with different labels? "Submit", "Cancel", "Add to Cart"? You could create three different components, but that would be wasteful. This is exactly what props solve!</p>

<p><strong>Props (short for "properties") are how you pass data from a parent component to a child component.</strong> Think of props like the settings or inputs for a component. Just like a function takes arguments, a component takes props.</p>

<p><strong>A Real-World Analogy:</strong></p>
<p>Imagine you're at a coffee shop. You don't just say "coffee" - you specify what you want: size (props.size = "large"), type (props.type = "latte"), extras (props.extras = ["extra shot", "oat milk"]). The barista (component) takes these props and makes your specific drink. Same component, different output based on props!</p>

<p><strong>The Golden Rule of Props:</strong></p>
<p>Props are <strong>READ-ONLY</strong>. A child component can never modify the props it receives. This is crucial! If a child could change props, you'd never know where changes came from, making debugging impossible. If a child needs to "change" something, it asks the parent to do it (we'll cover this with state and callbacks).</p>

<p><strong>Types of Data You Can Pass as Props:</strong></p>
<ul>
<li><strong>Strings:</strong> &lt;Button text="Click me" /&gt;</li>
<li><strong>Numbers:</strong> &lt;Counter initialCount={0} /&gt; (use curly braces!)</li>
<li><strong>Booleans:</strong> &lt;Modal isOpen={true} /&gt;</li>
<li><strong>Arrays:</strong> &lt;List items={['Apple', 'Banana']} /&gt;</li>
<li><strong>Objects:</strong> &lt;UserCard user={{name: 'Ali', age: 25}} /&gt;</li>
<li><strong>Functions:</strong> &lt;Button onClick={handleClick} /&gt; (very important for events!)</li>
<li><strong>Other components:</strong> &lt;Layout header={&lt;Header /&gt;} /&gt;</li>
</ul>

<hr>
<p><strong>📋 Props Examples:</strong></p>
<pre>
// RECEIVING PROPS - Method 1: props object
// The component receives all props as one object
function UserCard(props) {
    return (
        &lt;div className="card"&gt;
            &lt;h2&gt;{props.name}&lt;/h2&gt;
            &lt;p&gt;Age: {props.age}&lt;/p&gt;
            &lt;p&gt;City: {props.city}&lt;/p&gt;
        &lt;/div&gt;
    );
}


// RECEIVING PROPS - Method 2: destructuring (cleaner!)
// Pull out exactly what you need from props
function UserCard({ name, age, city }) {
    return (
        &lt;div className="card"&gt;
            &lt;h2&gt;{name}&lt;/h2&gt;
            &lt;p&gt;Age: {age}&lt;/p&gt;
            &lt;p&gt;City: {city}&lt;/p&gt;
        &lt;/div&gt;
    );
}


// PASSING PROPS - Just like HTML attributes!
function App() {
    return (
        &lt;div&gt;
            &lt;UserCard name="Ali" age={25} city="Lahore" /&gt;
            &lt;UserCard name="Sara" age={23} city="Karachi" /&gt;
            &lt;UserCard name="Ahmed" age={28} city="Islamabad" /&gt;
        &lt;/div&gt;
    );
}


// DEFAULT PROPS - What if a prop isn't passed?
// You can set default values using = in destructuring
function Button({ text = "Click Me", color = "blue", size = "medium" }) {
    return (
        &lt;button 
            style={{ backgroundColor: color }}
            className={size}
        &gt;
            {text}
        &lt;/button&gt;
    );
}

// Usage - any missing props use defaults
&lt;Button /&gt;                          // "Click Me", blue, medium
&lt;Button text="Submit" /&gt;            // "Submit", blue, medium
&lt;Button text="Delete" color="red" /&gt; // "Delete", red, medium


// CHILDREN PROP - Special prop for nested content
// Whatever you put BETWEEN the opening and closing tags
// becomes available as props.children
function Card({ title, children }) {
    return (
        &lt;div className="card"&gt;
            &lt;h2&gt;{title}&lt;/h2&gt;
            &lt;div className="card-body"&gt;
                {children}    {/* This is whatever is nested inside */}
            &lt;/div&gt;
        &lt;/div&gt;
    );
}

// Usage - content between tags becomes children
&lt;Card title="Welcome"&gt;
    &lt;p&gt;This paragraph is the children prop!&lt;/p&gt;
    &lt;button&gt;So is this button!&lt;/button&gt;
&lt;/Card&gt;
</pre>
`
    },

    // ========== STATE (useState) ==========
    "State (useState Hook)": {
        concept: `
<p><strong>🔄 State - Making Things Interactive</strong></p>

<p>Here's the thing about props - they're read-only. You can't change them. But what if you're building a counter and need the number to increase when clicked? What if you have a form where the user types their name? You need data that CAN change. That's state!</p>

<p><strong>State is data that belongs to a component and can change over time.</strong> When state changes, React automatically re-renders the component to show the new values. This is the magic of React - you don't manually update the DOM, you just update state and React handles the rest.</p>

<p><strong>Understanding the Difference:</strong></p>
<table>
<tr><th>Props</th><th>State</th></tr>
<tr><td>Passed FROM parent component</td><td>Created and managed INSIDE the component</td></tr>
<tr><td>Read-only (component can't change them)</td><td>Can be updated using setter function</td></tr>
<tr><td>Controlled by parent</td><td>Controlled by the component itself</td></tr>
<tr><td>Like function parameters</td><td>Like local variables that persist between renders</td></tr>
</table>

<p><strong>The useState Hook Explained:</strong></p>
<p>In React, we use <code>useState</code> to create state. It returns two things in an array:</p>
<ol>
<li><strong>The current value</strong> - whatever the state holds right now</li>
<li><strong>A setter function</strong> - the ONLY way to update that value</li>
</ol>

<p><strong>Why Can't You Just Change State Directly?</strong></p>
<p>You might wonder why you can't just do <code>count = count + 1</code>. The reason is that React wouldn't know the value changed! React only re-renders when you call the setter function. The setter function tells React: "Hey, this value changed, please update the screen!"</p>

<hr>
<p><strong>📋 useState Examples:</strong></p>
<pre>
import { useState } from 'react';

// BASIC SYNTAX
// const [currentValue, setterFunction] = useState(initialValue);


// COUNTER EXAMPLE - The React "Hello World"
function Counter() {
    // We're creating state called 'count', starting at 0
    // setCount is the function we'll use to update it
    const [count, setCount] = useState(0);
    
    // When button is clicked, we call setCount with the new value
    // React then re-renders this component with the new count
    return (
        &lt;div&gt;
            &lt;h1&gt;Count: {count}&lt;/h1&gt;
            &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
                Add 1
            &lt;/button&gt;
            &lt;button onClick={() =&gt; setCount(count - 1)}&gt;
                Subtract 1
            &lt;/button&gt;
            &lt;button onClick={() =&gt; setCount(0)}&gt;
                Reset
            &lt;/button&gt;
        &lt;/div&gt;
    );
}


// INPUT EXAMPLE - Controlled form input
// The input's value is controlled by React state
function NameInput() {
    const [name, setName] = useState('');
    
    // When user types, onChange fires, we update state
    // State updates, React re-renders, input shows new value
    return (
        &lt;div&gt;
            &lt;input
                type="text"
                value={name}
                onChange={(e) =&gt; setName(e.target.value)}
                placeholder="Enter your name"
            /&gt;
            &lt;p&gt;Hello, {name || 'stranger'}!&lt;/p&gt;
        &lt;/div&gt;
    );
}


// TOGGLE EXAMPLE - Boolean state
function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    return (
        &lt;div className={isDarkMode ? 'dark' : 'light'}&gt;
            &lt;button onClick={() =&gt; setIsDarkMode(!isDarkMode)}&gt;
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            &lt;/button&gt;
        &lt;/div&gt;
    );
}


// OBJECT STATE - Updating objects requires spread operator
function UserForm() {
    const [user, setUser] = useState({
        name: '',
        email: '',
        age: 0
    });
    
    // WRONG: user.name = 'Ali';  ❌ (mutating state directly)
    
    // CORRECT: Create new object with updated value ✅
    const updateName = (newName) =&gt; {
        setUser({
            ...user,        // Keep all existing properties
            name: newName   // Override just name
        });
    };
    
    return (
        &lt;input
            value={user.name}
            onChange={(e) =&gt; updateName(e.target.value)}
        /&gt;
    );
}


// ARRAY STATE - Adding/removing items
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    const addTodo = () =&gt; {
        // WRONG: todos.push(input); ❌ (mutating array)
        
        // CORRECT: Create new array with new item ✅
        setTodos([...todos, input]);
        setInput('');
    };
    
    const removeTodo = (index) =&gt; {
        // Filter creates a new array without the removed item
        setTodos(todos.filter((_, i) =&gt; i !== index));
    };
    
    return (
        &lt;div&gt;
            &lt;input value={input} onChange={(e) =&gt; setInput(e.target.value)} /&gt;
            &lt;button onClick={addTodo}&gt;Add&lt;/button&gt;
            
            &lt;ul&gt;
                {todos.map((todo, index) =&gt; (
                    &lt;li key={index}&gt;
                        {todo}
                        &lt;button onClick={() =&gt; removeTodo(index)}&gt;Delete&lt;/button&gt;
                    &lt;/li&gt;
                ))}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}
</pre>

<hr>
<p><strong>⚠️ Common Mistakes to Avoid:</strong></p>
<ul>
<li>❌ <code>count = count + 1</code> - Doesn't trigger re-render!</li>
<li>❌ <code>todos.push(item)</code> - Mutates array, React won't detect change!</li>
<li>❌ <code>user.name = "Ali"</code> - Mutates object, React won't detect change!</li>
<li>✅ Always use the setter function with a new value/array/object</li>
</ul>
`
    },

    // ========== useEffect ==========
    "Side Effects (useEffect Hook)": {
        concept: `
<p><strong>🔌 useEffect - Doing Things Beyond Rendering</strong></p>

<p>So far, we've learned that components are functions that return JSX, and state makes them interactive. But what about things that happen OUTSIDE the component? What if you need to:</p>
<ul>
<li>Fetch data from an API when the component loads?</li>
<li>Start a timer that updates every second?</li>
<li>Save something to localStorage?</li>
<li>Subscribe to a WebSocket connection?</li>
<li>Change the browser's title?</li>
</ul>

<p>These are called <strong>"side effects"</strong> - things that affect something outside the scope of the current function. And that's exactly what useEffect is for!</p>

<p><strong>How useEffect Works:</strong></p>
<p>The useEffect hook runs AFTER your component renders. Think of it as saying: "React, after you've put this on the screen, also do THIS." It takes two arguments:</p>
<ol>
<li><strong>A function</strong> - the code to run (your effect)</li>
<li><strong>A dependency array</strong> - tells React WHEN to run it again</li>
</ol>

<p><strong>Understanding the Dependency Array (CRUCIAL!):</strong></p>
<p>This is where most people get confused. The dependency array controls when your effect re-runs:</p>
<ul>
<li><strong>No array:</strong> Effect runs after EVERY render. Usually wrong - can cause infinite loops!</li>
<li><strong>Empty array [ ]:</strong> Effect runs ONCE when component first appears (mounts). Perfect for fetching initial data.</li>
<li><strong>Array with values [a, b]:</strong> Effect runs when any value in the array changes. Use for effects that depend on specific state/props.</li>
</ul>

<hr>
<p><strong>📋 useEffect Examples:</strong></p>
<pre>
import { useState, useEffect } from 'react';


// RUN ONCE ON MOUNT - Fetch data when component loads
function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Empty array = run once when component mounts
    useEffect(() =&gt; {
        console.log('Fetching users...');
        
        fetch('https://api.example.com/users')
            .then(response =&gt; response.json())
            .then(data =&gt; {
                setUsers(data);
                setLoading(false);
            });
    }, []);  // Empty array = run only once!
    
    if (loading) return &lt;p&gt;Loading...&lt;/p&gt;;
    
    return (
        &lt;ul&gt;
            {users.map(user =&gt; &lt;li key={user.id}&gt;{user.name}&lt;/li&gt;)}
        &lt;/ul&gt;
    );
}


// RUN WHEN VALUE CHANGES - Update document title
function Counter() {
    const [count, setCount] = useState(0);
    
    // Runs whenever 'count' changes
    useEffect(() =&gt; {
        document.title = \`Count: \${count}\`;
        console.log('Count changed to:', count);
    }, [count]);  // <-- count is a dependency
    
    return (
        &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
            Count: {count}
        &lt;/button&gt;
    );
}


// TIMER WITH CLEANUP - Set up and tear down
function Timer() {
    const [seconds, setSeconds] = useState(0);
    
    useEffect(() =&gt; {
        // Setup: start the timer
        const interval = setInterval(() =&gt; {
            setSeconds(s =&gt; s + 1);  // Use function form to get latest value
        }, 1000);
        
        // Cleanup: stop timer when component unmounts
        // This function runs when component is removed from screen
        return () =&gt; {
            clearInterval(interval);
            console.log('Timer cleaned up!');
        };
    }, []);  // Empty array = setup once, cleanup when unmounting
    
    return &lt;p&gt;Seconds: {seconds}&lt;/p&gt;;
}


// SEARCH WITH DEBOUNCE - Wait for user to stop typing
function SearchBox() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    
    useEffect(() =&gt; {
        // Don't search if query is empty
        if (!query) {
            setResults([]);
            return;
        }
        
        // Wait 500ms after user stops typing
        const timer = setTimeout(() =&gt; {
            fetch(\`/api/search?q=\${query}\`)
                .then(res =&gt; res.json())
                .then(data =&gt; setResults(data));
        }, 500);
        
        // Cleanup: cancel timer if query changes before 500ms
        return () =&gt; clearTimeout(timer);
    }, [query]);  // Re-run when query changes
    
    return (
        &lt;div&gt;
            &lt;input 
                value={query}
                onChange={(e) =&gt; setQuery(e.target.value)}
                placeholder="Search..."
            /&gt;
            &lt;ul&gt;
                {results.map(r =&gt; &lt;li key={r.id}&gt;{r.name}&lt;/li&gt;)}
            &lt;/ul&gt;
        &lt;/div&gt;
    );
}


// ASYNC/AWAIT VERSION - Modern syntax
useEffect(() =&gt; {
    const fetchData = async () =&gt; {
        const response = await fetch('/api/data');
        const data = await response.json();
        setData(data);
    };
    
    fetchData();
}, []);
</pre>

<hr>
<p><strong>📋 Quick Reference - When to Use What:</strong></p>
<table>
<tr><th>Scenario</th><th>Dependency Array</th></tr>
<tr><td>Fetch data on load</td><td><code>[]</code> empty</td></tr>
<tr><td>React to state change</td><td><code>[stateValue]</code></td></tr>
<tr><td>React to multiple changes</td><td><code>[value1, value2]</code></td></tr>
<tr><td>Setup subscription + cleanup</td><td><code>[]</code> with return function</td></tr>
</table>
`
    },

    // ========== CONDITIONAL RENDERING ==========
    "Conditional Rendering": {
        concept: `
<p><strong>❓ Showing Different Things Based on Conditions</strong></p>

<p>Real apps aren't static - they show different content based on what's happening. When a user is logged in, show "Welcome, Ali!" When they're not, show "Please login." When data is loading, show a spinner. When there's an error, show an error message. This is conditional rendering!</p>

<p><strong>The Core Idea:</strong></p>
<p>Since JSX is just JavaScript, you can use regular JavaScript logic to decide what to render. There are several patterns, and which one you use depends on the situation.</p>

<hr>
<p><strong>📋 All Conditional Rendering Patterns:</strong></p>
<pre>
// ===== PATTERN 1: IF/ELSE BEFORE RETURN =====
// Best for: Complex logic with multiple conditions
// The condition is checked BEFORE the return statement

function Dashboard({ user }) {
    // Check conditions before returning JSX
    if (!user) {
        return &lt;p&gt;Please log in to view the dashboard.&lt;/p&gt;;
    }
    
    if (user.role === 'admin') {
        return &lt;AdminDashboard user={user} /&gt;;
    }
    
    if (user.role === 'moderator') {
        return &lt;ModeratorDashboard user={user} /&gt;;
    }
    
    // Default case
    return &lt;UserDashboard user={user} /&gt;;
}


// ===== PATTERN 2: TERNARY OPERATOR (? :) =====
// Best for: Either show A or show B
// condition ? showIfTrue : showIfFalse

function Greeting({ isLoggedIn, userName }) {
    return (
        &lt;header&gt;
            {isLoggedIn ? (
                // If logged in, show this
                &lt;div&gt;
                    &lt;h1&gt;Welcome back, {userName}!&lt;/h1&gt;
                    &lt;button&gt;Logout&lt;/button&gt;
                &lt;/div&gt;
            ) : (
                // If NOT logged in, show this
                &lt;div&gt;
                    &lt;h1&gt;Welcome, Guest!&lt;/h1&gt;
                    &lt;button&gt;Login&lt;/button&gt;
                &lt;/div&gt;
            )}
        &lt;/header&gt;
    );
}


// ===== PATTERN 3: && OPERATOR (Short-circuit) =====
// Best for: Show something OR nothing
// If condition is true, show element. If false, show nothing.

function Notification({ hasNewMessages, messageCount }) {
    return (
        &lt;div&gt;
            {/* If hasNewMessages is true, show the badge */}
            {hasNewMessages && (
                &lt;span className="badge"&gt;
                    {messageCount} new messages!
                &lt;/span&gt;
            )}
            
            {/* Multiple conditions */}
            {messageCount &gt; 0 && &lt;p&gt;You have messages.&lt;/p&gt;}
            {messageCount &gt; 10 && &lt;p&gt;Lots of messages!&lt;/p&gt;}
            {messageCount === 0 && &lt;p&gt;Inbox is empty.&lt;/p&gt;}
        &lt;/div&gt;
    );
}


// ===== COMMON PATTERN: LOADING, ERROR, SUCCESS =====
// This is used constantly in real apps!

function DataDisplay() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() =&gt; {
        fetch('/api/data')
            .then(res =&gt; res.json())
            .then(data =&gt; {
                setData(data);
                setLoading(false);
            })
            .catch(err =&gt; {
                setError(err.message);
                setLoading(false);
            });
    }, []);
    
    // Loading state
    if (loading) {
        return (
            &lt;div className="spinner"&gt;
                Loading... Please wait...
            &lt;/div&gt;
        );
    }
    
    // Error state
    if (error) {
        return (
            &lt;div className="error"&gt;
                &lt;h2&gt;Something went wrong!&lt;/h2&gt;
                &lt;p&gt;{error}&lt;/p&gt;
                &lt;button onClick={() =&gt; window.location.reload()}&gt;
                    Try Again
                &lt;/button&gt;
            &lt;/div&gt;
        );
    }
    
    // Success state - show data
    return (
        &lt;div&gt;
            &lt;h1&gt;{data.title}&lt;/h1&gt;
            &lt;p&gt;{data.content}&lt;/p&gt;
        &lt;/div&gt;
    );
}


// ===== SHOWING/HIDING ELEMENTS =====
function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        &lt;div className="accordion"&gt;
            &lt;button onClick={() =&gt; setIsOpen(!isOpen)}&gt;
                {title} {isOpen ? '▼' : '▶'}
            &lt;/button&gt;
            
            {isOpen && (
                &lt;div className="content"&gt;
                    {content}
                &lt;/div&gt;
            )}
        &lt;/div&gt;
    );
}
</pre>

<hr>
<p><strong>📋 Quick Decision Guide:</strong></p>
<table>
<tr><th>Situation</th><th>Pattern to Use</th></tr>
<tr><td>Show A or show B</td><td><code>condition ? A : B</code></td></tr>
<tr><td>Show A or show nothing</td><td><code>condition && A</code></td></tr>
<tr><td>Multiple complex conditions</td><td>if/else before return</td></tr>
<tr><td>Loading → Error → Success</td><td>Multiple if statements</td></tr>
</table>
`
    },

    // ========== LISTS AND KEYS ==========
    "Lists and Keys": {
        concept: `
<p><strong>📋 Displaying Lists of Data</strong></p>

<p>Almost every app displays lists: lists of products, users, messages, comments, search results. In React, you use the <code>.map()</code> array method to transform an array of data into an array of JSX elements.</p>

<p><strong>Why Keys Matter (Important Interview Topic!):</strong></p>

<p>When you render a list, React needs a way to identify each item uniquely. This is what the <code>key</code> prop does. Without keys, if you add an item to the middle of a list, React doesn't know which items shifted - it might re-render everything. With keys, React knows exactly which items are new, moved, or removed.</p>

<p><strong>Key Rules:</strong></p>
<ul>
<li><strong>Keys must be unique among siblings</strong> - but can repeat in different lists</li>
<li><strong>Keys should be stable</strong> - use IDs from data, not random numbers</li>
<li><strong>Avoid using array index as key</strong> if items can be added/removed/reordered (causes bugs!)</li>
<li><strong>Index is OK</strong> only for static lists that never change</li>
</ul>

<hr>
<p><strong>📋 Complete List Examples:</strong></p>
<pre>
// ===== BASIC LIST =====
function FruitList() {
    const fruits = ['Apple', 'Banana', 'Cherry', 'Date'];
    
    return (
        &lt;ul&gt;
            {fruits.map((fruit, index) =&gt; (
                // For static lists, index as key is acceptable
                &lt;li key={index}&gt;{fruit}&lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}


// ===== LIST WITH OBJECTS (Use ID as key!) =====
function UserList() {
    const users = [
        { id: 1, name: 'Ali', email: 'ali@test.com' },
        { id: 2, name: 'Sara', email: 'sara@test.com' },
        { id: 3, name: 'Ahmed', email: 'ahmed@test.com' }
    ];
    
    return (
        &lt;div className="user-list"&gt;
            {users.map(user =&gt; (
                // Use the unique ID from data as key!
                &lt;div key={user.id} className="user-card"&gt;
                    &lt;h3&gt;{user.name}&lt;/h3&gt;
                    &lt;p&gt;{user.email}&lt;/p&gt;
                &lt;/div&gt;
            ))}
        &lt;/div&gt;
    );
}


// ===== LIST WITH SEPARATE COMPONENT =====
// Clean way to organize - extract item into its own component

function ProductCard({ product }) {
    return (
        &lt;div className="product"&gt;
            &lt;img src={product.image} alt={product.name} /&gt;
            &lt;h3&gt;{product.name}&lt;/h3&gt;
            &lt;p&gt;&#36;{product.price}&lt;/p&gt;
            &lt;button&gt;Add to Cart&lt;/button&gt;
        &lt;/div&gt;
    );
}

function ProductList({ products }) {
    return (
        &lt;div className="product-grid"&gt;
            {products.map(product =&gt; (
                // Pass the whole product object as a prop
                // Key is on the component, not inside it!
                &lt;ProductCard key={product.id} product={product} /&gt;
            ))}
        &lt;/div&gt;
    );
}


// ===== FULL TODO LIST - Add, Delete, Toggle =====
function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', done: false },
        { id: 2, text: 'Build a project', done: false }
    ]);
    const [inputValue, setInputValue] = useState('');
    
    // Add new todo
    const addTodo = () =&gt; {
        if (!inputValue.trim()) return;
        
        const newTodo = {
            id: Date.now(),  // Simple way to get unique ID
            text: inputValue,
            done: false
        };
        
        setTodos([...todos, newTodo]);
        setInputValue('');
    };
    
    // Toggle done status
    const toggleTodo = (id) =&gt; {
        setTodos(todos.map(todo =&gt;
            todo.id === id 
                ? { ...todo, done: !todo.done }  // Toggle this one
                : todo  // Keep others unchanged
        ));
    };
    
    // Delete todo
    const deleteTodo = (id) =&gt; {
        setTodos(todos.filter(todo =&gt; todo.id !== id));
    };
    
    return (
        &lt;div&gt;
            &lt;input
                value={inputValue}
                onChange={(e) =&gt; setInputValue(e.target.value)}
                placeholder="What needs to be done?"
            /&gt;
            &lt;button onClick={addTodo}&gt;Add Todo&lt;/button&gt;
            
            &lt;ul&gt;
                {todos.map(todo =&gt; (
                    &lt;li key={todo.id} className={todo.done ? 'done' : ''}&gt;
                        &lt;input
                            type="checkbox"
                            checked={todo.done}
                            onChange={() =&gt; toggleTodo(todo.id)}
                        /&gt;
                        &lt;span&gt;{todo.text}&lt;/span&gt;
                        &lt;button onClick={() =&gt; deleteTodo(todo.id)}&gt;
                            Delete
                        &lt;/button&gt;
                    &lt;/li&gt;
                ))}
            &lt;/ul&gt;
            
            &lt;p&gt;
                {todos.filter(t =&gt; !t.done).length} items remaining
            &lt;/p&gt;
        &lt;/div&gt;
    );
}
</pre>
`
    },

    // Additional topics with detailed explanations...
    "Event Handling": {
        concept: `
<p><strong>🖱️ Handling User Interactions</strong></p>

<p>What makes apps interactive? Events! When a user clicks a button, types in an input, hovers over an element, or presses a key - these are all events. React makes handling events straightforward, but there are some differences from plain HTML that you need to know.</p>

<p><strong>Key Differences from HTML:</strong></p>
<ul>
<li><strong>CamelCase naming:</strong> <code>onclick</code> becomes <code>onClick</code>, <code>onmouseover</code> becomes <code>onMouseOver</code></li>
<li><strong>Pass a function, not a string:</strong> <code>onClick={handleClick}</code> not <code>onclick="handleClick()"</code></li>
<li><strong>Prevent default explicitly:</strong> Call <code>e.preventDefault()</code> instead of returning false</li>
</ul>

<hr>
<p><strong>📋 Event Handling Examples:</strong></p>
<pre>
// ===== BASIC CLICK HANDLER =====
function Button() {
    // Define the handler function
    const handleClick = () =&gt; {
        alert('Button was clicked!');
    };
    
    // Pass the function reference (no parentheses!)
    return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
}


// ===== INLINE HANDLER (for simple cases) =====
function Button() {
    return (
        &lt;button onClick={() =&gt; alert('Clicked!')}&gt;
            Click Me
        &lt;/button&gt;
    );
}


// ===== PASSING ARGUMENTS TO HANDLERS =====
function ItemList() {
    const items = ['Apple', 'Banana', 'Cherry'];
    
    const handleDelete = (itemName) =&gt; {
        console.log('Deleting:', itemName);
    };
    
    return (
        &lt;ul&gt;
            {items.map(item =&gt; (
                &lt;li key={item}&gt;
                    {item}
                    {/* Wrap in arrow function to pass argument */}
                    &lt;button onClick={() =&gt; handleDelete(item)}&gt;
                        Delete
                    &lt;/button&gt;
                &lt;/li&gt;
            ))}
        &lt;/ul&gt;
    );
}


// ===== EVENT OBJECT =====
function TextInput() {
    const handleChange = (event) =&gt; {
        // event.target is the DOM element that triggered the event
        // event.target.value is the current value of the input
        console.log('You typed:', event.target.value);
    };
    
    return &lt;input type="text" onChange={handleChange} /&gt;;
}


// ===== PREVENT DEFAULT BEHAVIOR =====
function Form() {
    const handleSubmit = (event) =&gt; {
        // Prevent the form from refreshing the page
        event.preventDefault();
        console.log('Form submitted!');
    };
    
    return (
        &lt;form onSubmit={handleSubmit}&gt;
            &lt;input type="text" /&gt;
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
        &lt;/form&gt;
    );
}


// ===== COMMON EVENTS REFERENCE =====
// Mouse events
&lt;button onClick={handleClick}&gt;
&lt;div onDoubleClick={handleDoubleClick}&gt;
&lt;div onMouseEnter={handleHover}&gt;
&lt;div onMouseLeave={handleLeave}&gt;

// Form events
&lt;input onChange={handleChange}&gt;
&lt;input onFocus={handleFocus}&gt;
&lt;input onBlur={handleBlur}&gt;
&lt;form onSubmit={handleSubmit}&gt;

// Keyboard events
&lt;input onKeyDown={handleKeyDown}&gt;
&lt;input onKeyUp={handleKeyUp}&gt;
&lt;input onKeyPress={handleKeyPress}&gt;
</pre>
`
    },

    // ========== INTERVIEW QUESTIONS ==========
    "React Interview Questions": {
        concept: `
<p><strong>❓ Top React Interview Questions with Detailed Answers</strong></p>

<p><strong>Q1: What is the Virtual DOM and why is it faster?</strong></p>
<p>The Virtual DOM is a lightweight JavaScript copy of the actual DOM that React keeps in memory. When state changes, React creates a new Virtual DOM, compares it with the previous version (called "diffing"), and calculates the minimum number of changes needed. Then it updates only those specific parts of the real DOM. This is faster because real DOM operations are expensive - they trigger browser reflows and repaints. By batching changes and minimizing DOM updates, React significantly improves performance.</p>

<p><strong>Q2: What's the difference between state and props?</strong></p>
<p>Props are passed from parent components and are read-only - the receiving component cannot modify them. State is internal data that a component creates and manages itself, and it can be changed using setter functions. Both trigger re-renders when changed, but they serve different purposes: props are for component configuration and passing data down, while state is for dynamic data that changes over time based on user interaction or async operations.</p>

<p><strong>Q3: Why do we need keys in lists?</strong></p>
<p>Keys help React identify which items in a list have changed, been added, or removed. Without keys, React would have to re-render the entire list when any item changes. With keys, React can match old and new elements and only update what's necessary. Keys should be stable identifiers (like database IDs), not array indices, because reordering items would cause incorrect matching if using indices.</p>

<p><strong>Q4: What happens during a React component lifecycle?</strong></p>
<p>A component goes through three phases: Mounting (component is created and inserted into DOM), Updating (component re-renders due to state/props changes), and Unmounting (component is removed from DOM). In functional components with hooks: useEffect with [] runs on mount, useEffect with dependencies runs on updates, and the cleanup function returned from useEffect runs before each re-run and on unmount.</p>

<p><strong>Q5: What is "lifting state up"?</strong></p>
<p>When multiple components need to share and sync the same data, you move that state to their closest common parent component. The parent then passes the state down as props and passes setter functions to allow children to request updates. This ensures a single source of truth and keeps data synchronized across components.</p>

<p><strong>Q6: What is prop drilling and how to solve it?</strong></p>
<p>Prop drilling is when you pass props through many levels of components just to get data to a deeply nested child. This makes code hard to maintain. Solutions include: useContext for global data like themes or user info, state management libraries like Redux or Zustand, or component composition where you pass components as children instead of data.</p>

<p><strong>Q7: What are controlled vs uncontrolled components?</strong></p>
<p>In controlled components, React state is the "single source of truth" for form inputs - the input value is controlled by React state and updates via onChange. In uncontrolled components, the DOM itself holds the value, and you access it via refs. Controlled components are preferred because they make validation, conditional disabling, and form handling easier.</p>

<p><strong>Q8: When should you use useEffect?</strong></p>
<p>Use useEffect for side effects: operations that affect something outside the component like API calls, subscriptions, timers, or DOM manipulation. Don't use it for transforming data for rendering (do that directly) or for responding to events (use event handlers). Always specify dependencies correctly to avoid stale closures and infinite loops.</p>

<p><strong>Q9: What is useRef and when would you use it?</strong></p>
<p>useRef creates a mutable reference that persists across renders without causing re-renders when changed. Common uses: accessing DOM elements directly (like focusing an input), storing previous values, keeping mutable values that don't need to trigger re-renders (like timer IDs).</p>

<p><strong>Q10: How would you optimize a slow React app?</strong></p>
<p>Key optimization strategies: Use React.memo to prevent unnecessary re-renders of components, use useMemo for expensive calculations, use useCallback to memoize functions passed to children, implement code splitting with React.lazy and Suspense, virtualize long lists with react-window, avoid creating objects/arrays inline in JSX, and ensure proper key usage in lists.</p>
`
    }
,
    // ========== OUTPUT-BASED & SCENARIO QUESTIONS ==========
    "What's the Output? (React)": {
        concept: `
<p><strong>🎯 Output-Based Interview Questions</strong></p>

<p><strong>Q1: What will this output?</strong></p>
<pre class="language-javascript">
function Counter() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  
  return &lt;button onClick={handleClick}&gt;{count}&lt;/button&gt;;
}
// Click button once. What is count?
</pre>
<p><strong>Answer:</strong> <code>1</code> (not 3!)</p>
<p><strong>Why?</strong> All three setCount use the SAME count value (0). State updates are batched. To fix, use functional update: <code>setCount(prev => prev + 1)</code></p>

<hr>

<p><strong>Q2: What happens here?</strong></p>
<pre class="language-javascript">
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
  }, []);
  
  return &lt;div&gt;{seconds}&lt;/div&gt;;
}
</pre>
<p><strong>Answer:</strong> Shows <code>1</code> forever</p>
<p><strong>Why?</strong> Empty dependency array = runs once. <code>seconds</code> is captured as 0. Fix: <code>setSeconds(s => s + 1)</code></p>

<hr>

<p><strong>Q3: Will this component re-render?</strong></p>
<pre class="language-javascript">
function App() {
  const [count, setCount] = useState(0);
  
  return (
    &lt;div&gt;
      &lt;Child name="Ali" /&gt;
      &lt;button onClick={() => setCount(count + 1)}&gt;Click&lt;/button&gt;
    &lt;/div&gt;
  );
}

function Child({ name }) {
  console.log("Child rendered");
  return &lt;p&gt;{name}&lt;/p&gt;;
}
</pre>
<p><strong>Answer:</strong> Yes, Child re-renders every click</p>
<p><strong>Why?</strong> When parent re-renders, children re-render too</p>
<p><strong>Fix:</strong> Use <code>React.memo(Child)</code></p>
`
    },

    "Code Scenarios (React)": {
        concept: `
<p><strong>📝 Scenario-Based Questions</strong></p>

<p><strong>Scenario 1: Fix this code</strong></p>
<pre class="language-javascript">
function UserList() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch('/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  });  // ← Problem here!
  
  return &lt;ul&gt;{users.map(u => &lt;li&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;
}
</pre>
<p><strong>Problem:</strong> Infinite loop! No dependency array = runs every render</p>
<p><strong>Fix:</strong> Add <code>[]</code> to run once: <code>useEffect(() => {...}, [])</code></p>

<hr>

<p><strong>Scenario 2: Why doesn't this work?</strong></p>
<pre class="language-javascript">
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  const handleChange = (e) => {
    formData.name = e.target.value;  // ← Problem!
    setFormData(formData);
  };
}
</pre>
<p><strong>Problem:</strong> Mutating state directly! React doesn't detect changes</p>
<p><strong>Fix:</strong> Create new object: <code>setFormData({ ...formData, name: e.target.value })</code></p>

<hr>

<p><strong>Scenario 3: Why is key important?</strong></p>
<pre class="language-javascript">
// BAD - using index
{items.map((item, index) => &lt;Item key={index} data={item} /&gt;)}

// GOOD - using unique id
{items.map(item => &lt;Item key={item.id} data={item} /&gt;)}
</pre>
<p><strong>Why?</strong> When items are added/removed/reordered, index keys cause wrong items to update. Use unique IDs!</p>

<hr>

<p><strong>Scenario 4: What's wrong?</strong></p>
<pre class="language-javascript">
function App() {
  if (someCondition) {
    const [state, setState] = useState(0);  // ← Problem!
  }
}
</pre>
<p><strong>Problem:</strong> Hooks can't be inside conditions/loops</p>
<p><strong>Rule:</strong> Always call hooks at the top level!</p>
`
    },

    "Debug This Code (React)": {
        concept: `
<p><strong>🔧 Debug These Common Mistakes</strong></p>

<p><strong>Bug 1: Nothing shows on screen</strong></p>
<pre class="language-javascript">
function App() {
  const items = ['a', 'b', 'c'];
  
  return (
    &lt;ul&gt;
      {items.map(item => {
        &lt;li&gt;{item}&lt;/li&gt;  // ← Bug!
      })}
    &lt;/ul&gt;
  );
}
</pre>
<p><strong>Problem:</strong> Missing return statement (using { } instead of ( ))</p>
<p><strong>Fix:</strong> Use <code>items.map(item => &lt;li&gt;{item}&lt;/li&gt;)</code> or add return</p>

<hr>

<p><strong>Bug 2: State not updating</strong></p>
<pre class="language-javascript">
const [items, setItems] = useState([1, 2, 3]);

const addItem = () => {
  items.push(4);  // ← Bug!
  setItems(items);
};
</pre>
<p><strong>Problem:</strong> Mutating array directly</p>
<p><strong>Fix:</strong> <code>setItems([...items, 4])</code></p>

<hr>

<p><strong>Bug 3: Event handler runs immediately</strong></p>
<pre class="language-javascript">
&lt;button onClick={handleClick(5)}&gt;Click&lt;/button&gt;  // ← Bug!
</pre>
<p><strong>Problem:</strong> <code>handleClick(5)</code> runs on render!</p>
<p><strong>Fix:</strong> <code>onClick={() => handleClick(5)}</code></p>

<hr>

<p><strong>Bug 4: Stale data in setTimeout</strong></p>
<pre class="language-javascript">
const [count, setCount] = useState(0);

const handleClick = () => {
  setTimeout(() => {
    alert(count);  // Shows old value!
  }, 3000);
};
</pre>
<p><strong>Problem:</strong> count is captured when function was created</p>
<p><strong>Fix:</strong> Use useRef or functional update</p>
`
    }

};

if (typeof module !== 'undefined') {
    module.exports = reactData;
}
