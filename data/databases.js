// DATABASES - Complete Interview Prep (Detailed Explanations + Cheatsheets)
const databasesData = {
    // ========== SQL CHEATSHEET ==========
    "SQL Commands Cheatsheet": {
        concept: `
<p><strong>📋 Understanding SQL Command Categories</strong></p>

<p>SQL (Structured Query Language) is the language you use to talk to relational databases like MySQL, PostgreSQL, or SQL Server. Before diving into specific commands, it's important to understand that SQL commands are organized into categories based on what they do. This isn't just academic knowledge - interviewers love asking about these categories!</p>

<p><strong>DDL - Data Definition Language:</strong> These commands define the STRUCTURE of your database - creating tables, modifying columns, deleting tables. Think of it as the architect's blueprint. When you use DDL commands, you're building the containers that will hold your data. Changes made with DDL are permanent and affect the database schema.</p>

<p><strong>DQL - Data Query Language:</strong> The SELECT statement and its friends. This is what you'll use 90% of the time - asking questions of your data. "Show me all users", "Find orders from last week", "Calculate total sales by region". DQL is read-only - it doesn't change any data.</p>

<p><strong>DML - Data Manipulation Language:</strong> These commands work with the actual DATA inside tables - inserting new records, updating existing ones, deleting records. While DDL is about structure, DML is about content.</p>

<p><strong>DCL - Data Control Language:</strong> Security commands that control WHO can do WHAT. In production databases, you don't want every user to have full access. DCL commands let you grant specific permissions to specific users.</p>

<p><strong>TCL - Transaction Control Language:</strong> Commands that group multiple operations into a single unit. Either ALL the operations succeed, or NONE of them do. Essential for maintaining data integrity when doing things like transferring money between accounts.</p>

<hr>
<p><strong>📋 DDL Commands Cheatsheet:</strong></p>
<pre>
-- CREATE: Build a new table from scratch
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE,
    age INT DEFAULT 18,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ALTER: Add, modify, or remove columns
ALTER TABLE users ADD COLUMN phone VARCHAR(20);
ALTER TABLE users MODIFY COLUMN name VARCHAR(200);
ALTER TABLE users DROP COLUMN phone;

-- DROP: Delete entire table (DANGEROUS!)
DROP TABLE users;

-- TRUNCATE: Delete all data but keep structure
TRUNCATE TABLE users;
</pre>

<hr>
<p><strong>📋 DML Commands Cheatsheet:</strong></p>
<pre>
-- INSERT: Add new records
INSERT INTO users (name, email, age) 
VALUES ('Ali', 'ali@test.com', 25);

-- UPDATE: Change existing records
UPDATE users SET age = 26 WHERE name = 'Ali';

-- DELETE: Remove records (always use WHERE!)
DELETE FROM users WHERE id = 5;
</pre>
`
    },

    // ========== SELECT DEEP DIVE ==========
    "SELECT (Reading Data)": {
        concept: `
<p><strong>🔍 The SELECT Statement - Your Most Important SQL Tool</strong></p>

<p>If you only master one SQL concept, make it SELECT. You'll use it constantly. SELECT is how you ask questions of your database: "Show me all active users", "Find products under $50", "Count orders by month". Let me break down how it works piece by piece.</p>

<p><strong>The Basic Structure:</strong></p>
<p>A SELECT statement follows a logical order. First, you specify WHAT columns you want (SELECT). Then, WHERE the data lives (FROM). Then, you can filter rows (WHERE), group them (GROUP BY), filter groups (HAVING), sort results (ORDER BY), and limit how many you get (LIMIT). Understanding this order helps you build complex queries step by step.</p>

<p><strong>Filtering with WHERE:</strong></p>
<p>The WHERE clause is how you filter ROWS. It runs before any grouping happens. You can use comparison operators (=, !=, <, >, <=, >=), pattern matching (LIKE), range checks (BETWEEN), and list checks (IN). You can combine conditions with AND and OR.</p>

<p><strong>Aggregation Functions:</strong></p>
<p>Sometimes you don't want individual rows - you want summary data. "How MANY users?" (COUNT), "What's the TOTAL sales?" (SUM), "What's the AVERAGE age?" (AVG), "What's the HIGHEST price?" (MAX). These are aggregate functions, and they collapse multiple rows into a single value.</p>

<p><strong>GROUP BY - Aggregate Per Category:</strong></p>
<p>What if you want to count users PER CITY, not all users? This is where GROUP BY shines. It divides your data into groups based on a column, then applies aggregate functions to each group separately. "Count users GROUP BY city" gives you a count for Lahore, a count for Karachi, etc.</p>

<p><strong>HAVING vs WHERE:</strong></p>
<p>Here's a common interview question! WHERE filters ROWS before grouping. HAVING filters GROUPS after grouping. So if you want "cities with more than 100 users", you need HAVING because the count happens after grouping.</p>

<hr>
<p><strong>📋 SELECT Examples:</strong></p>
<pre>
-- Basic: Get all columns
SELECT * FROM users;

-- Choose specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE age > 18;
SELECT * FROM users WHERE city = 'Lahore' AND age >= 21;

-- Pattern matching with LIKE
SELECT * FROM users WHERE name LIKE 'A%';     -- Starts with A
SELECT * FROM users WHERE email LIKE '%gmail%'; -- Contains gmail

-- Check multiple values with IN
SELECT * FROM users WHERE city IN ('Lahore', 'Karachi', 'Islamabad');

-- Range with BETWEEN
SELECT * FROM users WHERE age BETWEEN 18 AND 30;

-- Sorting with ORDER BY
SELECT * FROM users ORDER BY age ASC;          -- Youngest first
SELECT * FROM users ORDER BY created_at DESC;  -- Newest first

-- Limiting results
SELECT * FROM users LIMIT 10;                  -- First 10 rows
SELECT * FROM users LIMIT 10 OFFSET 20;        -- Skip 20, get next 10

-- Aggregate functions
SELECT COUNT(*) AS total_users FROM users;
SELECT AVG(age) AS average_age FROM users;
SELECT city, COUNT(*) AS user_count FROM users GROUP BY city;

-- HAVING: Filter groups
SELECT city, COUNT(*) AS user_count
FROM users
GROUP BY city
HAVING COUNT(*) > 100;      -- Only cities with 100+ users
</pre>
`
    },

    // ========== JOINS ==========
    "JOINs (Combining Tables)": {
        concept: `
<p><strong>🔗 JOINs - Connecting Related Data</strong></p>

<p>In real databases, data is split across multiple tables to avoid duplication. You don't store the customer's full address in every order - you store a customer_id that references the customers table. But when you need to display "Ali ordered a Laptop", you need data from BOTH tables. This is where JOINs come in.</p>

<p><strong>Understanding Why We Need JOINs:</strong></p>

<p>Imagine you have two tables: USERS (id, name, email) and ORDERS (id, user_id, product, amount). When you want to answer "What did each user order?", you need to connect these tables. The user_id in ORDERS is a "foreign key" - it points to the id in USERS. JOINs use this relationship to combine the data.</p>

<p><strong>Types of JOINs Explained:</strong></p>

<p><strong>INNER JOIN:</strong> The most common type. Returns only rows where there's a match in BOTH tables. If a user has never ordered anything, they won't appear in the results. If an order somehow has an invalid user_id, it won't appear either. Think of it as the intersection of two circles in a Venn diagram.</p>

<p><strong>LEFT JOIN:</strong> Returns ALL rows from the left table (the one mentioned first), plus matching rows from the right table. If there's no match, you still get the left row, but the right columns will be NULL. Use this when you want "all users and their orders if they have any".</p>

<p><strong>RIGHT JOIN:</strong> The opposite - all rows from the right table, matching rows from the left. Less commonly used since you can usually rewrite it as a LEFT JOIN by swapping table order.</p>

<p><strong>FULL OUTER JOIN:</strong> All rows from both tables. If there's a match, they're combined. If not, you still get the row with NULLs for the missing side. Not supported in MySQL, but works in PostgreSQL.</p>

<hr>
<p><strong>📋 JOIN Examples:</strong></p>
<pre>
-- Sample data visualization:
-- USERS: {1, Ali}, {2, Sara}, {3, Ahmed}
-- ORDERS: {1, user_id:1, Phone}, {2, user_id:1, Laptop}, {3, user_id:2, Tablet}

-- INNER JOIN: Only users who have orders
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;
-- Result: Ali-Phone, Ali-Laptop, Sara-Tablet
-- Ahmed doesn't appear (no orders)

-- LEFT JOIN: All users, with their orders (or NULL)
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
-- Result: Ali-Phone, Ali-Laptop, Sara-Tablet, Ahmed-NULL

-- Joining multiple tables
SELECT 
    users.name,
    orders.product,
    payments.method
FROM users
INNER JOIN orders ON users.id = orders.user_id
INNER JOIN payments ON orders.id = payments.order_id;

-- Using table aliases for cleaner code
SELECT u.name, o.product, o.amount
FROM users AS u
INNER JOIN orders AS o ON u.id = o.user_id
WHERE o.amount > 100;
</pre>

<hr>
<p><strong>📋 Quick JOIN Reference:</strong></p>
<table>
<tr><th>JOIN Type</th><th>Returns</th><th>Use Case</th></tr>
<tr><td>INNER</td><td>Only matching rows</td><td>Orders with valid users</td></tr>
<tr><td>LEFT</td><td>All left + matching right</td><td>All users, orders if exist</td></tr>
<tr><td>RIGHT</td><td>All right + matching left</td><td>All orders, users if valid</td></tr>
</table>
`
    },

    // ========== MONGODB BASICS ==========
    "MongoDB Basics": {
        concept: `
<p><strong>🍃 Understanding MongoDB - A Different Way to Store Data</strong></p>

<p>MongoDB is what's called a "NoSQL" database, and it works completely differently from SQL databases like MySQL. Instead of tables with rigid rows and columns, MongoDB stores data as flexible JSON-like documents in collections. This might seem like a small difference, but it changes how you think about data entirely.</p>

<p><strong>Why Would You Choose MongoDB?</strong></p>

<p>Imagine you're building a social media app. A user might have 0 posts or 10,000 posts. Some posts have images, some have videos, some have polls. In SQL, you'd need multiple tables with complex relationships. In MongoDB, each user document can have a posts array right inside it, and each post can have different structures. This flexibility is powerful for certain use cases.</p>

<p><strong>Key Differences from SQL Databases:</strong></p>

<p><strong>Schema Flexibility:</strong> In SQL, you define your columns upfront - every row must have those columns. In MongoDB, each document can have different fields. Document 1 might have a "phone" field, Document 2 might not. This is great for evolving applications, but requires discipline to avoid chaos.</p>

<p><strong>Embedded Data:</strong> Instead of joining tables, MongoDB lets you embed related data inside a document. A user document can contain their entire address as a nested object, their recent orders as an array. This means faster reads (one query instead of multiple joins) but requires careful design for data that changes frequently.</p>

<p><strong>Horizontal Scaling:</strong> MongoDB is designed to spread data across multiple servers (called sharding). SQL databases typically scale vertically (bigger server). This makes MongoDB good for massive datasets.</p>

<p><strong>The Terminology Map:</strong></p>
<table>
<tr><th>SQL Term</th><th>MongoDB Term</th><th>What It Is</th></tr>
<tr><td>Database</td><td>Database</td><td>Container for collections</td></tr>
<tr><td>Table</td><td>Collection</td><td>Group of documents</td></tr>
<tr><td>Row</td><td>Document</td><td>Single record (JSON)</td></tr>
<tr><td>Column</td><td>Field</td><td>Property in document</td></tr>
<tr><td>Primary Key</td><td>_id</td><td>Unique identifier</td></tr>
</table>

<hr>
<p><strong>📋 MongoDB Shell Basics:</strong></p>
<pre>
// Connect to MongoDB
mongosh

// Show all databases
show dbs

// Use (or create) a database
use myapp

// Show collections in current database
show collections

// Sample document structure
{
    "_id": ObjectId("507f1f77bcf86cd799439011"),
    "name": "Ali",
    "email": "ali@test.com",
    "age": 25,
    "isAdmin": false,
    "hobbies": ["coding", "gaming"],     // Array
    "address": {                          // Nested object
        "city": "Lahore",
        "country": "Pakistan"
    },
    "createdAt": ISODate("2024-01-15")
}
</pre>
`
    },

    // ========== MONGODB CRUD ==========
    "MongoDB CRUD Operations": {
        concept: `
<p><strong>📝 CRUD Operations in MongoDB</strong></p>

<p>CRUD stands for Create, Read, Update, Delete - the four basic operations you can do with data. MongoDB's syntax is JavaScript-based, which makes it feel familiar if you're coming from a web development background. Let me explain each operation in detail.</p>

<p><strong>Create (Insert):</strong></p>
<p>In MongoDB, you insert documents into collections. A document is just a JSON object. If the collection doesn't exist, MongoDB creates it automatically. Each document gets a unique _id field if you don't provide one. You can insert one document or many at once.</p>

<p><strong>Read (Find):</strong></p>
<p>The find method is how you query documents. With no arguments, it returns everything. With a filter object, it returns matching documents. MongoDB uses comparison operators like $gt (greater than), $lt (less than), $in (in array), etc. These look strange at first but become natural quickly.</p>

<p><strong>Update:</strong></p>
<p>Updating in MongoDB requires two things: a filter (which documents to update) and an update operation (what to change). The $set operator sets specific fields without touching others. The $inc operator increments numbers. The $push operator adds to arrays. You can update one document or many.</p>

<p><strong>Delete:</strong></p>
<p>Similar to update - you provide a filter to match documents, then delete one or many. There's no undo, so be careful! deleteMany({}) with an empty filter deletes EVERYTHING in the collection.</p>

<hr>
<p><strong>📋 MongoDB CRUD Examples:</strong></p>
<pre>
// ===== CREATE =====

// Insert one document
db.users.insertOne({
    name: "Ali",
    email: "ali@test.com",
    age: 25,
    hobbies: ["coding", "reading"]
});

// Insert multiple documents at once
db.users.insertMany([
    { name: "Sara", email: "sara@test.com", age: 23 },
    { name: "Ahmed", email: "ahmed@test.com", age: 28 }
]);


// ===== READ =====

// Find all documents
db.users.find();

// Pretty print (more readable)
db.users.find().pretty();

// Find with filter (like WHERE clause)
db.users.find({ name: "Ali" });

// Comparison operators
db.users.find({ age: { $gt: 18 } });     // age > 18
db.users.find({ age: { $gte: 18 } });    // age >= 18
db.users.find({ age: { $lt: 30 } });     // age < 30
db.users.find({ age: { $ne: 25 } });     // age != 25

// Multiple conditions (AND)
db.users.find({ age: { $gt: 18 }, city: "Lahore" });

// OR condition
db.users.find({ $or: [{ city: "Lahore" }, { city: "Karachi" }] });

// IN operator (match any in array)
db.users.find({ city: { $in: ["Lahore", "Karachi", "Islamabad"] } });

// Select specific fields (projection)
db.users.find({}, { name: 1, email: 1, _id: 0 });
// 1 = include, 0 = exclude


// ===== UPDATE =====

// Update one document
db.users.updateOne(
    { name: "Ali" },                    // Filter
    { $set: { age: 26, city: "Lahore" } } // Update
);

// Update multiple documents
db.users.updateMany(
    { city: "Lahore" },
    { $set: { country: "Pakistan" } }
);

// Increment a number
db.users.updateOne(
    { name: "Ali" },
    { $inc: { age: 1 } }    // age = age + 1
);

// Add item to array
db.users.updateOne(
    { name: "Ali" },
    { $push: { hobbies: "gaming" } }
);


// ===== DELETE =====

// Delete one document
db.users.deleteOne({ name: "Ali" });

// Delete multiple documents
db.users.deleteMany({ age: { $lt: 18 } });

// Delete ALL documents (be careful!)
db.users.deleteMany({});
</pre>
`
    },

    // ========== INDEXES ==========
    "Database Indexes": {
        concept: `
<p><strong>🚀 Indexes - Making Queries Lightning Fast</strong></p>

<p>Imagine you have a book with 1000 pages and you need to find every mention of "database". Without an index, you'd have to read every single page. With an index (like the one at the back of textbooks), you jump directly to the relevant pages. Database indexes work the same way!</p>

<p><strong>How Indexes Work:</strong></p>

<p>When you create an index on a column (like email), the database builds a sorted data structure that maps values to their row locations. When you search WHERE email = 'ali@test.com', instead of checking every row (which could be millions), the database uses the index to find the exact location instantly. The difference can be dramatic - a query that took 10 seconds might take 10 milliseconds.</p>

<p><strong>Types of Indexes:</strong></p>

<p><strong>Single-column Index:</strong> Index on one column. Perfect for queries that filter by that column. CREATE INDEX idx_email ON users(email).</p>

<p><strong>Composite Index:</strong> Index on multiple columns together. The order matters! An index on (city, age) helps queries filtering by city, or by city AND age, but NOT queries filtering only by age. Think of it like a phone book sorted by last name, then first name - you can find all Khans easily, but not all people named Ali.</p>

<p><strong>Unique Index:</strong> Ensures no duplicate values. Often used on emails, usernames. Also improves query speed.</p>

<p><strong>The Trade-offs:</strong></p>

<p>Indexes aren't free. They take storage space, and they slow down INSERT/UPDATE/DELETE operations because the index must be updated too. Adding 10 indexes to a table means 10 data structures to maintain on every write. The key is to index columns you query frequently, not every column.</p>

<p><strong>When to Index:</strong></p>
<ul>
<li>Columns used in WHERE clauses frequently</li>
<li>Columns used in JOIN conditions</li>
<li>Columns used in ORDER BY</li>
</ul>

<p><strong>When NOT to Index:</strong></p>
<ul>
<li>Small tables (full scan is fast enough)</li>
<li>Columns that change very frequently</li>
<li>Columns with little variety (like boolean flags)</li>
</ul>

<hr>
<p><strong>📋 Index Commands:</strong></p>
<pre>
-- SQL: Create index
CREATE INDEX idx_email ON users(email);

-- SQL: Create unique index
CREATE UNIQUE INDEX idx_email ON users(email);

-- SQL: Create composite index
CREATE INDEX idx_city_age ON users(city, age);

-- SQL: Show indexes
SHOW INDEX FROM users;

-- SQL: Drop index
DROP INDEX idx_email ON users;


// MongoDB: Create index
db.users.createIndex({ email: 1 });    // 1 = ascending

// MongoDB: Create unique index
db.users.createIndex({ email: 1 }, { unique: true });

// MongoDB: Create compound index
db.users.createIndex({ city: 1, age: -1 });

// MongoDB: Show indexes
db.users.getIndexes();

// MongoDB: Drop index
db.users.dropIndex("email_1");
</pre>
`
    },

    // ========== RELATIONSHIPS ==========
    "Database Relationships": {
        concept: `
<p><strong>🔗 Understanding Table Relationships</strong></p>

<p>In a well-designed database, data is organized across multiple tables that relate to each other. This avoids storing redundant information and makes updates easier. There are three types of relationships, and understanding them is crucial for both database design and interview success.</p>

<p><strong>One-to-One Relationship:</strong></p>

<p>One record in Table A is linked to exactly one record in Table B, and vice versa. This is the least common relationship. You might use it when you have a Users table and want to separate sensitive data (like SSN or credit card) into a separate UserProfiles table for security reasons. Each user has exactly one profile, each profile belongs to exactly one user.</p>

<p><strong>Implementation:</strong> Put a foreign key in either table pointing to the other. Add a UNIQUE constraint to ensure the one-to-one nature.</p>

<p><strong>One-to-Many Relationship:</strong></p>

<p>This is the most common relationship. One record in Table A can relate to many records in Table B, but each record in B relates to only one record in A. Examples: One customer has many orders. One author has many books. One department has many employees.</p>

<p><strong>Implementation:</strong> Put a foreign key in the "many" table pointing to the "one" table. So the Orders table has a customer_id column pointing to Customers.</p>

<p><strong>Many-to-Many Relationship:</strong></p>

<p>Records in Table A can relate to many records in Table B, AND records in Table B can relate to many in Table A. Examples: Students and Courses (a student takes many courses, a course has many students). Actors and Movies. Tags and Articles.</p>

<p><strong>Implementation:</strong> You cannot directly link two tables in a many-to-many. You need a third "junction table" (also called bridge table or linking table) that has foreign keys to both tables. For Students-Courses, you create an Enrollments table with student_id and course_id columns.</p>

<hr>
<p><strong>📋 Relationship Examples:</strong></p>
<pre>
-- ONE-TO-ONE: User and Profile
CREATE TABLE users (
    id INT PRIMARY KEY,
    username VARCHAR(50)
);

CREATE TABLE profiles (
    id INT PRIMARY KEY,
    user_id INT UNIQUE,        -- UNIQUE ensures one-to-one
    bio TEXT,
    avatar_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- ONE-TO-MANY: User and Orders
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,               -- Many orders can have same user_id
    product VARCHAR(100),
    amount DECIMAL(10,2),
    FOREIGN KEY (user_id) REFERENCES users(id)
);


-- MANY-TO-MANY: Students and Courses
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE courses (
    id INT PRIMARY KEY,
    title VARCHAR(200)
);

-- Junction table connects them
CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrolled_date DATE,
    PRIMARY KEY (student_id, course_id),  -- Composite primary key
    FOREIGN KEY (student_id) REFERENCES students(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);

-- Query: Which courses is Ali enrolled in?
SELECT c.title
FROM students s
JOIN enrollments e ON s.id = e.student_id
JOIN courses c ON e.course_id = c.id
WHERE s.name = 'Ali';
</pre>
`
    },

    // ========== INTERVIEW QUESTIONS ==========
    "Database Interview Questions": {
        concept: `
<p><strong>❓ Database Interview Questions with Detailed Answers</strong></p>

<p><strong>Q1: What is a Primary Key?</strong></p>
<p>A Primary Key is a column (or combination of columns) that uniquely identifies each row in a table. It cannot contain NULL values and must be unique across all rows. Every table should have a primary key. Common choices include auto-incrementing integers (id), UUIDs, or natural identifiers like email or username if they're guaranteed unique.</p>

<p><strong>Q2: What is a Foreign Key?</strong></p>
<p>A Foreign Key is a column in one table that refers to the Primary Key of another table. It creates a link between the tables. Foreign keys enforce referential integrity - you can't insert an order with a customer_id that doesn't exist in the customers table. They can be NULL (an order without a customer) unless you add a NOT NULL constraint.</p>

<p><strong>Q3: What's the difference between DELETE and TRUNCATE?</strong></p>
<p>DELETE removes specific rows based on a WHERE clause, logs each deletion, can be rolled back in a transaction, and triggers any defined triggers. TRUNCATE removes ALL rows, is faster because it doesn't log individual rows, cannot be rolled back (in most databases), resets auto-increment counters, and doesn't fire triggers. Use DELETE for selective removal, TRUNCATE to empty a table quickly.</p>

<p><strong>Q4: What is database normalization?</strong></p>
<p>Normalization is the process of organizing data to reduce redundancy and improve integrity. Instead of storing "New York, USA" in every row, you'd have a separate cities table and reference it by ID. First Normal Form (1NF) requires atomic values and no repeating groups. Second Normal Form (2NF) removes partial dependencies. Third Normal Form (3NF) removes transitive dependencies. The goal is to ensure each piece of data is stored in only one place.</p>

<p><strong>Q5: Explain ACID properties.</strong></p>
<p><strong>Atomicity:</strong> A transaction is all-or-nothing. If any part fails, the entire transaction rolls back. Transferring $100 between accounts either completes fully or doesn't happen at all - you never lose money in between.</p>
<p><strong>Consistency:</strong> The database moves from one valid state to another. All rules, constraints, and triggers are satisfied before and after the transaction.</p>
<p><strong>Isolation:</strong> Concurrent transactions don't interfere with each other. It appears as if transactions run sequentially, even when they're parallel.</p>
<p><strong>Durability:</strong> Once a transaction commits, it stays committed even if the system crashes. Data is written to persistent storage.</p>

<p><strong>Q6: When would you use SQL vs NoSQL?</strong></p>
<p>Use SQL (MySQL, PostgreSQL) when: you need complex queries with joins, data has a clear structure, ACID compliance is critical, or you're building financial/inventory systems. Use NoSQL (MongoDB, Redis) when: your schema changes frequently, you're storing documents or semi-structured data, you need horizontal scaling, or you're building real-time apps with simple query patterns.</p>

<p><strong>Q7: What is an index and why use it?</strong></p>
<p>An index is a data structure (usually B-tree) that speeds up data retrieval at the cost of slower writes and additional storage. It's like a book's index - instead of reading every page, you jump directly to relevant ones. Index columns used in WHERE, JOIN, and ORDER BY clauses. Don't over-index - each index must be updated on every INSERT/UPDATE/DELETE.</p>

<p><strong>Q8: Explain the difference between INNER JOIN and LEFT JOIN.</strong></p>
<p>INNER JOIN returns only rows where there's a match in BOTH tables. If a customer has no orders, they won't appear. LEFT JOIN returns ALL rows from the left table, plus matching rows from the right table. If there's no match, you still get the left row with NULL for the right columns. Use INNER when you only want related data, LEFT when you want all primary records regardless of related data.</p>

<p><strong>Q9: What is a database transaction?</strong></p>
<p>A transaction is a sequence of operations treated as a single unit. Either all operations succeed (COMMIT) or all are undone (ROLLBACK). Classic example: transferring money - debit one account and credit another. If the credit fails, the debit must be rolled back. Transactions ensure data integrity in multi-step operations.</p>

<p><strong>Q10: How would you optimize a slow query?</strong></p>
<p>1) Use EXPLAIN to see the query execution plan. 2) Add indexes on columns in WHERE, JOIN, and ORDER BY. 3) Avoid SELECT * - only request needed columns. 4) Limit results when possible. 5) Avoid functions on indexed columns in WHERE (this prevents index use). 6) For large JOINs, ensure join columns are indexed. 7) Consider denormalization for read-heavy workloads. 8) Use query caching where appropriate.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = databasesData;
}
