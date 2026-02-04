// Python, Flask, FastAPI & AI - Interview Prep
const pythonAiData = {
    "Python Basics": {
        concept: `<p><strong>Python Features:</strong></p>
<ul>
<li>Interpreted, high-level, dynamically typed</li>
<li>Readable syntax with significant whitespace</li>
<li>Extensive standard library</li>
<li>Great for scripting, web, data science, AI</li>
</ul>

<p><strong>Data Types:</strong></p>
<ul>
<li><strong>int, float, complex</strong> - Numbers</li>
<li><strong>str</strong> - Strings (immutable)</li>
<li><strong>list</strong> - Ordered, mutable [1, 2, 3]</li>
<li><strong>tuple</strong> - Ordered, immutable (1, 2, 3)</li>
<li><strong>dict</strong> - Key-value pairs {key: value}</li>
<li><strong>set</strong> - Unordered unique values {1, 2, 3}</li>
<li><strong>bool</strong> - True, False</li>
<li><strong>None</strong> - Null equivalent</li>
</ul>

<p><strong>Interview Q: List vs Tuple?</strong></p>
<p>A: List is mutable (can change), tuple is immutable. Tuples are faster, hashable (can be dict keys), use for fixed data.</p>`,
        example: `<pre># Variables (no declaration needed)
name = "Ali"
age = 25
height = 5.9
is_student = True

# Type checking
type(name)      # <class 'str'>
isinstance(age, int)  # True

# Strings
greeting = f"Hello, {name}!"  # f-string
text = "hello".upper()        # "HELLO"
words = "a,b,c".split(",")    # ["a", "b", "c"]

# Lists
nums = [1, 2, 3]
nums.append(4)       # [1, 2, 3, 4]
nums.extend([5, 6])  # [1, 2, 3, 4, 5, 6]
nums.pop()           # 6, list = [1, 2, 3, 4, 5]
nums[1:3]            # [2, 3] (slicing)

# List comprehension
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]
evens = [x for x in nums if x % 2 == 0]

# Dictionary
user = {"name": "Ali", "age": 25}
user["email"] = "ali@test.com"  # Add key
user.get("phone", "N/A")        # Safe access with default
for key, value in user.items(): # Iterate
    print(f"{key}: {value}")

# Dict comprehension
squares_dict = {x: x**2 for x in range(5)}

# Functions
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

greet("Ali")              # "Hello, Ali!"
greet("Ali", "Hi")        # "Hi, Ali!"

# *args and **kwargs
def func(*args, **kwargs):
    print(args)   # Tuple of positional args
    print(kwargs) # Dict of keyword args</pre>`
    },

    "Flask Basics": {
        concept: `<p><strong>What is Flask?</strong></p>
<p>Lightweight Python web framework. "Micro" framework - simple core, add what you need.</p>

<p><strong>Key Features:</strong></p>
<ul>
<li>Simple routing with decorators</li>
<li>Jinja2 templating</li>
<li>Development server included</li>
<li>Extensions for everything (SQLAlchemy, JWT, etc.)</li>
</ul>

<p><strong>When to use Flask:</strong></p>
<ul>
<li>Simple APIs and microservices</li>
<li>Small to medium web apps</li>
<li>Prototyping and MVPs</li>
<li>Learning web development</li>
</ul>

<p><strong>Flask vs Django:</strong></p>
<p>Flask is lightweight, flexible, minimal. Django is "batteries included" - ORM, admin, auth built-in. Use Flask for APIs, Django for full web apps.</p>`,
        example: `<pre># Basic Flask app
from flask import Flask, request, jsonify

app = Flask(__name__)

# Routes
@app.route('/')
def home():
    return "Hello, World!"

@app.route('/api/users', methods=['GET'])
def get_users():
    users = [{"id": 1, "name": "Ali"}]
    return jsonify(users)

@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.json
    # Create user logic
    return jsonify({"message": "Created", "user": data}), 201

@app.route('/api/users/<int:id>')
def get_user(id):
    # Fetch user by id
    return jsonify({"id": id, "name": "User"})

# Query parameters
@app.route('/search')
def search():
    query = request.args.get('q', '')
    page = request.args.get('page', 1, type=int)
    return jsonify({"query": query, "page": page})

# Error handling
@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Not found"}), 404

# Run
if __name__ == '__main__':
    app.run(debug=True, port=5000)

# With Flask-CORS for cross-origin
from flask_cors import CORS
CORS(app)

# Environment config
import os
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY')

# Blueprint for organization
from flask import Blueprint
api = Blueprint('api', __name__)

@api.route('/users')
def users():
    return jsonify([])

app.register_blueprint(api, url_prefix='/api')</pre>`
    },

    "FastAPI Basics": {
        concept: `<p><strong>What is FastAPI?</strong></p>
<p>Modern, high-performance Python web framework. Built on Starlette and Pydantic.</p>

<p><strong>Key Features:</strong></p>
<ul>
<li><strong>Fast</strong> - One of the fastest Python frameworks (async)</li>
<li><strong>Type hints</strong> - Uses Python type hints for validation</li>
<li><strong>Auto documentation</strong> - Swagger UI and ReDoc built-in</li>
<li><strong>Async support</strong> - Native async/await</li>
<li><strong>Pydantic validation</strong> - Automatic request/response validation</li>
</ul>

<p><strong>FastAPI vs Flask:</strong></p>
<ul>
<li>FastAPI is faster (async native)</li>
<li>FastAPI has auto-documentation</li>
<li>FastAPI has built-in validation</li>
<li>Flask has larger ecosystem, more tutorials</li>
</ul>

<p><strong>Use FastAPI for:</strong> APIs, microservices, ML model serving, async operations.</p>`,
        example: `<pre># FastAPI basics
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()

# Pydantic model for validation
class User(BaseModel):
    id: Optional[int] = None
    name: str
    email: str
    age: Optional[int] = None

class UserResponse(BaseModel):
    id: int
    name: str
    email: str

# Routes
@app.get("/")
def home():
    return {"message": "Hello, World!"}

@app.get("/users", response_model=List[UserResponse])
def get_users():
    return [{"id": 1, "name": "Ali", "email": "ali@test.com"}]

@app.post("/users", response_model=UserResponse, status_code=201)
def create_user(user: User):
    # Validation automatic from Pydantic
    return {**user.dict(), "id": 1}

@app.get("/users/{user_id}")
def get_user(user_id: int):
    if user_id > 100:
        raise HTTPException(status_code=404, detail="User not found")
    return {"id": user_id, "name": "User"}

# Query parameters (auto-parsed)
@app.get("/search")
def search(q: str, page: int = 1, limit: int = 10):
    return {"query": q, "page": page, "limit": limit}

# Async endpoint
@app.get("/async-data")
async def get_async_data():
    # Can use await here
    data = await fetch_from_database()
    return data

# Run with: uvicorn main:app --reload
# Docs at: http://localhost:8000/docs (Swagger)
# Docs at: http://localhost:8000/redoc (ReDoc)

# Dependency injection
from fastapi import Depends

def get_db():
    db = Database()
    try:
        yield db
    finally:
        db.close()

@app.get("/items")
def get_items(db = Depends(get_db)):
    return db.get_items()</pre>`
    },

    "ML/AI Overview": {
        concept: `<p><strong>Machine Learning Types:</strong></p>
<ul>
<li><strong>Supervised</strong> - Learn from labeled data (classification, regression)</li>
<li><strong>Unsupervised</strong> - Find patterns in unlabeled data (clustering)</li>
<li><strong>Reinforcement</strong> - Learn through rewards/penalties</li>
</ul>

<p><strong>Deep Learning:</strong></p>
<ul>
<li>Neural networks with many layers</li>
<li>Excellent for images, text, audio</li>
<li>Requires lots of data and compute</li>
</ul>

<p><strong>Key Terms:</strong></p>
<ul>
<li><strong>Model</strong> - Trained algorithm that makes predictions</li>
<li><strong>Training</strong> - Process of learning from data</li>
<li><strong>Inference</strong> - Making predictions with trained model</li>
<li><strong>Epoch</strong> - One pass through entire dataset</li>
<li><strong>Loss</strong> - How wrong predictions are</li>
</ul>

<p><strong>LLMs (Large Language Models):</strong></p>
<p>GPT, Gemini, Claude - trained on massive text data. Generate human-like text, answer questions, code.</p>`,
        example: `<pre># Common ML libraries
import numpy as np          # Numerical computing
import pandas as pd         # Data manipulation
import matplotlib.pyplot as plt  # Visualization

# Scikit-learn example
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Prepare data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = LogisticRegression()
model.fit(X_train, y_train)

# Predict
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

# Using pre-trained LLM API
import google.generativeai as genai

genai.configure(api_key="YOUR_API_KEY")
model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("Explain Python in 3 sentences")
print(response.text)

# PyTorch basic neural network
import torch
import torch.nn as nn

class SimpleNN(nn.Module):
    def __init__(self):
        super().__init__()
        self.layer1 = nn.Linear(784, 128)
        self.layer2 = nn.Linear(128, 10)
        self.relu = nn.ReLU()
    
    def forward(self, x):
        x = self.relu(self.layer1(x))
        x = self.layer2(x)
        return x

# Interview Q&A:
# - Overfitting: Model too specific to training data
# - Underfitting: Model too simple, misses patterns
# - Cross-validation: Split data multiple ways to evaluate</pre>`
    },

    "Embeddings & Vector DBs": {
        concept: `<p><strong>What are Embeddings?</strong></p>
<p>Numerical representations (vectors) of data like text or images. Similar items have similar vectors.</p>

<p><strong>How they work:</strong></p>
<ol>
<li>Input (text, image) goes into embedding model</li>
<li>Model outputs fixed-size vector of numbers</li>
<li>Similar meanings → vectors close in space</li>
</ol>

<p><strong>Vector Databases:</strong></p>
<p>Specialized databases for storing and searching vectors efficiently (similarity search).</p>

<p><strong>Popular Vector DBs:</strong></p>
<ul>
<li><strong>Pinecone</strong> - Managed, easy to use</li>
<li><strong>FAISS</strong> - Facebook's library (local)</li>
<li><strong>Weaviate</strong> - Open source, full-featured</li>
<li><strong>Chroma</strong> - Simple, good for prototyping</li>
</ul>

<p><strong>Use Cases:</strong></p>
<ul>
<li>Semantic search (meaning, not keywords)</li>
<li>Recommendation systems</li>
<li>RAG (Retrieval-Augmented Generation)</li>
<li>Image/face similarity</li>
</ul>`,
        example: `<pre># Generate embeddings (OpenAI)
from openai import OpenAI
client = OpenAI()

response = client.embeddings.create(
    input="Hello, world!",
    model="text-embedding-ada-002"
)
embedding = response.data[0].embedding  # Vector of 1536 floats

# FAISS example (local vector search)
import faiss
import numpy as np

# Create index
dimension = 1536  # Embedding size
index = faiss.IndexFlatL2(dimension)  # L2 distance

# Add vectors
vectors = np.array([embedding1, embedding2, embedding3])
index.add(vectors)

# Search for similar
query_vector = np.array([query_embedding])
k = 5  # Top 5 results
distances, indices = index.search(query_vector, k)

# Chroma (simple vector DB)
import chromadb

client = chromadb.Client()
collection = client.create_collection("my_collection")

# Add documents (auto-embeds)
collection.add(
    documents=["doc1 content", "doc2 content"],
    ids=["id1", "id2"],
    metadatas=[{"source": "web"}, {"source": "pdf"}]
)

# Query
results = collection.query(
    query_texts=["search query"],
    n_results=5
)

# Cosine similarity (commonly used)
from numpy.linalg import norm

def cosine_similarity(a, b):
    return np.dot(a, b) / (norm(a) * norm(b))

# Similar vectors → similarity close to 1
# Different vectors → similarity close to 0 or negative</pre>`
    },

    "RAG Basics": {
        concept: `<p><strong>What is RAG?</strong></p>
<p>Retrieval-Augmented Generation - combining LLMs with external knowledge retrieval.</p>

<p><strong>Problem RAG Solves:</strong></p>
<ul>
<li>LLMs have knowledge cutoff</li>
<li>Can't access your private data</li>
<li>May "hallucinate" facts</li>
</ul>

<p><strong>How RAG Works:</strong></p>
<ol>
<li><strong>Index:</strong> Chunk documents, create embeddings, store in vector DB</li>
<li><strong>Retrieve:</strong> User asks question → find relevant chunks</li>
<li><strong>Generate:</strong> Pass retrieved context + question to LLM</li>
</ol>

<p><strong>RAG Pipeline:</strong></p>
<p>Documents → Chunking → Embeddings → Vector DB → Query → Retrieval → LLM → Response</p>

<p><strong>Benefits:</strong></p>
<ul>
<li>Up-to-date information</li>
<li>Grounded in your data</li>
<li>Reduced hallucinations</li>
<li>Source citations possible</li>
</ul>`,
        example: `<pre># Basic RAG implementation
from langchain.document_loaders import TextLoader
from langchain.text_splitter import CharacterTextSplitter
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import Chroma
from langchain.chat_models import ChatOpenAI
from langchain.chains import RetrievalQA

# 1. Load documents
loader = TextLoader('data.txt')
documents = loader.load()

# 2. Split into chunks
text_splitter = CharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = text_splitter.split_documents(documents)

# 3. Create embeddings and store
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(chunks, embeddings)

# 4. Create retrieval chain
llm = ChatOpenAI(model="gpt-3.5-turbo")
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever(search_kwargs={"k": 3}),
    return_source_documents=True
)

# 5. Query
result = qa_chain({"query": "What is the return policy?"})
print(result["result"])
print(result["source_documents"])

# Manual RAG (without LangChain)
def rag_query(question, vectorstore, llm_client):
    # Retrieve relevant chunks
    results = vectorstore.query(query_texts=[question], n_results=3)
    context = "\\n\\n".join(results['documents'][0])
    
    # Generate response with context
    prompt = f"""Answer based on the context below.
    
Context:
{context}

Question: {question}

Answer:"""
    
    response = llm_client.generate(prompt)
    return response

# Chunking strategies matter:
# - Too small: loses context
# - Too big: too much noise
# - Overlap helps maintain context across chunks</pre>`
    },

    // ========== PYTHON LOOPS ==========
    "Python Loops (Complete Guide)": {
        concept: `
<p><strong>🔄 Understanding ALL Python Loops</strong></p>

<p>Python makes loops very readable and simple. Let's learn all types with real examples.</p>

<hr>
<p><strong>📋 1. FOR Loop:</strong></p>
<p>Python's for loop is different - it loops through items directly (no index needed).</p>
<pre>
# Basic: Print each item
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)
# apple
# banana
# orange

# SHOPPING: Calculate total price
cart = [
    {"name": "Phone", "price": 500},
    {"name": "Case", "price": 20},
    {"name": "Charger", "price": 30}
]

total = 0
for item in cart:
    total = total + item["price"]
print(f"Total: $\{total\}")  # Total: $550

# range() - when you need numbers
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 6):    # 1, 2, 3, 4, 5
    print(i)

for i in range(0, 10, 2): # 0, 2, 4, 6, 8 (step by 2)
    print(i)

# Counting backwards
for i in range(5, 0, -1): # 5, 4, 3, 2, 1
    print(i)
</pre>

<hr>
<p><strong>📋 2. WHILE Loop:</strong></p>
<p>Keep looping while a condition is true.</p>
<pre>
# Password attempt example
attempts = 0
max_attempts = 3

while attempts < max_attempts:
    password = input("Enter password: ")
    if password == "secret123":
        print("Welcome!")
        break
    attempts += 1
    print(f"Wrong! {max_attempts - attempts} attempts left")

# SHOPPING: Add items until budget runs out
budget = 100
item_price = 25
items_bought = 0

while budget >= item_price:
    budget -= item_price
    items_bought += 1
    
print(f"Bought \{items_bought\} items, $\{budget\} left")
# Bought 4 items, \\$0 left
</pre>

<hr>
<p><strong>📋 3. Loop with enumerate() and zip():</strong></p>
<pre>
# enumerate - get index AND value
products = ["Phone", "Laptop", "Tablet"]

for index, product in enumerate(products):
    print(f"{index}: {product}")
# 0: Phone
# 1: Laptop
# 2: Tablet

# Start index from 1
for num, product in enumerate(products, start=1):
    print(f"{num}. {product}")
# 1. Phone
# 2. Laptop
# 3. Tablet

# zip - loop through multiple lists together
names = ["Ali", "Sara", "Ahmed"]
scores = [85, 92, 78]

for name, score in zip(names, scores):
    print(f"{name}: {score}")
# Ali: 85
# Sara: 92
# Ahmed: 78
</pre>

<hr>
<p><strong>📋 4. Loop through Dictionaries:</strong></p>
<pre>
user = {"name": "Ali", "age": 25, "city": "Lahore"}

# Keys only
for key in user:
    print(key)

# Keys and values
for key, value in user.items():
    print(f"{key}: {value}")

# Values only
for value in user.values():
    print(value)

# SHOPPING: Display order
order = {
    "order_id": "12345",
    "status": "Shipped",
    "total": 550
}
for key, value in order.items():
    print(f"{key.upper()}: {value}")
</pre>

<hr>
<p><strong>📋 5. List Comprehension (One-Line Loop):</strong></p>
<pre>
# Create list of squares
squares = [x**2 for x in range(5)]  # [0, 1, 4, 9, 16]

# With condition
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]

# SHOPPING: Get product names
cart = [{"name": "Phone"}, {"name": "Case"}, {"name": "Charger"}]
names = [item["name"] for item in cart]  # ["Phone", "Case", "Charger"]

# Get expensive items (price > 100)
products = [{"name": "Phone", "price": 500}, {"name": "Case", "price": 20}]
expensive = [p for p in products if p["price"] > 100]
</pre>

<hr>
<p><strong>📋 Loop Control: break & continue</strong></p>
<pre>
# break - exit loop completely
for i in range(10):
    if i == 5:
        break
    print(i)  # 0, 1, 2, 3, 4

# continue - skip current iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # 0, 1, 3, 4

# SHOPPING: Find product (stop when found)
inventory = ["shirt", "pants", "shoes", "hat"]
for item in inventory:
    if item == "shoes":
        print("Found shoes!")
        break
</pre>
`,
    },

    // ========== PYTHON CONDITIONALS ==========
    "Python Conditionals": {
        concept: `
<p><strong>🔀 Understanding Python Conditionals</strong></p>

<p>Python conditionals are clean and readable. Indentation matters!</p>

<hr>
<p><strong>📋 1. if / elif / else:</strong></p>
<pre>
age = 18

# Simple if
if age >= 18:
    print("You can vote!")

# if-else
if age >= 18:
    print("Adult")
else:
    print("Minor")

# if-elif-else
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")  # Grade: B

# SHOPPING: Discount based on cart value
total = 120

if total >= 200:
    discount = 20
elif total >= 100:
    discount = 10
elif total >= 50:
    discount = 5
else:
    discount = 0

print(f"You get {discount}% discount!")
</pre>

<hr>
<p><strong>📋 2. Logical Operators:</strong></p>
<pre>
# and - ALL must be True
age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive!")

# or - ANY can be True
is_admin = False
is_owner = True

if is_admin or is_owner:
    print("You have access")

# not - reverses boolean
is_logged_in = False

if not is_logged_in:
    print("Please login")

# SHOPPING: Checkout validation
has_items = True
has_payment = True
has_address = False

if has_items and has_payment and has_address:
    print("Proceeding to checkout...")
else:
    print("Please complete all fields")
</pre>

<hr>
<p><strong>📋 3. Ternary (One-Line if-else):</strong></p>
<pre>
age = 20

# Long way
if age >= 18:
    status = "Adult"
else:
    status = "Minor"

# Short way (ternary)
status = "Adult" if age >= 18 else "Minor"

# SHOPPING examples
in_stock = True
button_text = "Add to Cart" if in_stock else "Out of Stock"

is_member = True
price = 90 if is_member else 100  # Members get discount
</pre>

<hr>
<p><strong>📋 4. match-case (Python 3.10+):</strong></p>
<p>Python's version of switch statement.</p>
<pre>
# Payment method example
payment = "card"

match payment:
    case "card":
        print("Processing card payment...")
    case "paypal":
        print("Redirecting to PayPal...")
    case "cod":
        print("Cash on Delivery selected")
    case _:  # default (underscore)
        print("Invalid payment method")

# HTTP status code
status_code = 404

match status_code:
    case 200:
        message = "OK"
    case 404:
        message = "Not Found"
    case 500:
        message = "Server Error"
    case _:
        message = "Unknown"
</pre>

<hr>
<p><strong>📋 5. Truthy and Falsy:</strong></p>
<pre>
# Falsy values in Python:
# False, 0, 0.0, "", [], {}, None

# These all evaluate to False
if not []:
    print("Empty list is falsy")

if not "":
    print("Empty string is falsy")

if not None:
    print("None is falsy")

# Practical use - check if list has items
cart = []
if cart:
    print("Cart has items")
else:
    print("Cart is empty")

# Check if string has value
name = ""
if name:
    print(f"Hello, {name}")
else:
    print("Name is required")
</pre>
`,
    }
,

    "Fibonacci Sequence (Python)": {
        concept: `
<p><strong>🔢 Fibonacci in Python</strong></p>

<p>Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21...</p>

<pre>
# Method 1: Loop (Fast and efficient)
def fibonacci(n):
    if n <= 1:
        return n
    
    a, b = 0, 1  # First two numbers
    
    for i in range(2, n + 1):
        a, b = b, a + b  # Python swap: b becomes new, a becomes old b
    
    return b

print(fibonacci(6))  # 8
# Steps: 0→1→1→2→3→5→8


# Method 2: Recursive (Simple but slow)
def fib_recursive(n):
    if n <= 1:
        return n
    return fib_recursive(n - 1) + fib_recursive(n - 2)


# Print first N Fibonacci numbers
def print_fibonacci(n):
    for i in range(n):
        print(fibonacci(i), end=" ")
    print()  # New line

print_fibonacci(7)
# Output: 0 1 1 2 3 5 8


# Method 3: Using List (Store all values)
def fibonacci_list(n):
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[i-1] + fib[i-2])
    return fib

print(fibonacci_list(7))
# Output: [0, 1, 1, 2, 3, 5, 8]
</pre>
`
    },

    "Pattern Printing (Python)": {
        concept: `
<p><strong>📐 Pattern Programs in Python</strong></p>

<p><strong>Pattern 1: Right Triangle</strong></p>
<pre>
def print_triangle(n):
    for i in range(1, n + 1):
        print('* ' * i)

print_triangle(5)
# Output:
# * 
# * * 
# * * * 
# * * * * 
# * * * * * 
</pre>

<p><strong>Pattern 2: Pyramid</strong></p>
<pre>
def print_pyramid(n):
    for i in range(1, n + 1):
        spaces = ' ' * (n - i)  # Leading spaces
        stars = '* ' * i         # Stars
        print(spaces + stars)

print_pyramid(5)
# Output:
#     * 
#    * * 
#   * * * 
#  * * * * 
# * * * * * 
</pre>

<p><strong>Pattern 3: Number Triangle</strong></p>
<pre>
def print_number_triangle(n):
    for i in range(1, n + 1):
        for j in range(1, i + 1):
            print(j, end=' ')
        print()  # New line

print_number_triangle(5)
# Output:
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4 
# 1 2 3 4 5 
</pre>

<p><strong>Pattern 4: Inverted Triangle</strong></p>
<pre>
def print_inverted_triangle(n):
    for i in range(n, 0, -1):
        print('* ' * i)

print_inverted_triangle(5)
# Output:
# * * * * * 
# * * * * 
# * * * 
# * * 
# * 
</pre>

<p><strong>Pattern 5: Diamond</strong></p>
<pre>
def print_diamond(n):
    # Upper half (pyramid)
    for i in range(1, n + 1):
        print(' ' * (n - i) + '* ' * i)
    
    # Lower half (inverted pyramid)
    for i in range(n - 1, 0, -1):
        print(' ' * (n - i) + '* ' * i)

print_diamond(5)
# Output:
#     * 
#    * * 
#   * * * 
#  * * * * 
# * * * * * 
#  * * * * 
#   * * * 
#    * * 
#     * 
</pre>

<p><strong>Pattern 6: Number Pyramid</strong></p>
<pre>
def print_number_pyramid(n):
    for i in range(1, n + 1):
        # Print spaces
        print(' ' * (n - i), end='')
        
        # Print ascending numbers
        for j in range(1, i + 1):
            print(j, end=' ')
        
        print()  # New line

print_number_pyramid(5)
# Output:
#     1 
#    1 2 
#   1 2 3 
#  1 2 3 4 
# 1 2 3 4 5 
</pre>
`
    },

};

if (typeof module !== 'undefined') {
    module.exports = pythonAiData;
}
