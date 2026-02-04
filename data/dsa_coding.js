// DSA & CODING - Interview Prep (Basics to Advanced)
const dsaCodingData = {
    // ========== BIG O NOTATION ==========
    "Big O Notation": {
        concept: `
<p><strong>⏱️ What is Big O?</strong></p>
<p>Measures how algorithm performance scales as input grows. Focus on WORST case.</p>

<p><strong>Common Complexities (Best to Worst):</strong></p>
<table>
<tr><th>Notation</th><th>Name</th><th>Example</th></tr>
<tr><td>O(1)</td><td>Constant</td><td>Array access arr[0]</td></tr>
<tr><td>O(log n)</td><td>Logarithmic</td><td>Binary search</td></tr>
<tr><td>O(n)</td><td>Linear</td><td>Loop through array</td></tr>
<tr><td>O(n log n)</td><td>Linearithmic</td><td>Merge sort</td></tr>
<tr><td>O(n²)</td><td>Quadratic</td><td>Nested loops</td></tr>
<tr><td>O(2^n)</td><td>Exponential</td><td>Recursive fibonacci</td></tr>
</table>

<p><strong>Examples:</strong></p>
<pre>
// O(1) - Constant: Same time always
function getFirst(arr) {
    return arr[0];  // 1 operation
}

// O(n) - Linear: Time grows with input
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {  // n operations
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

// O(n²) - Quadratic: Nested loops
function printPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);  // n × n operations
        }
    }
}

// O(log n) - Halving: Binary search
// 1000 items = ~10 steps (2^10 = 1024)
</pre>

<p><strong>Space Complexity:</strong> Same idea but for memory usage.</p>
`
    },

    // ========== ARRAY ==========
    "Array": {
        concept: `
<p><strong>📦 What is an Array?</strong></p>
<p>Ordered collection stored in contiguous memory. Access by index (0-based).</p>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Fast access by index: O(1)</li>
<li>✅ Simple and intuitive</li>
<li>✅ Built-in methods (push, pop, map, filter)</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Insert/delete at start: O(n)</li>
<li>❌ Search unsorted: O(n)</li>
</ul>

<p><strong>Time Complexity:</strong></p>
<table>
<tr><th>Operation</th><th>Time</th></tr>
<tr><td>Access arr[i]</td><td>O(1)</td></tr>
<tr><td>Push (end)</td><td>O(1)</td></tr>
<tr><td>Pop (end)</td><td>O(1)</td></tr>
<tr><td>Shift (start)</td><td>O(n)</td></tr>
<tr><td>Search</td><td>O(n)</td></tr>
</table>

<p><strong>JavaScript Code:</strong></p>
<pre>
// Create
const arr = [1, 2, 3, 4, 5];

// Access - O(1)
arr[0];      // 1
arr[4];      // 5

// Add - O(1)
arr.push(6);      // [1,2,3,4,5,6]

// Remove - O(1)
arr.pop();        // [1,2,3,4,5], returns 6

// Add to start - O(n) SLOW!
arr.unshift(0);   // [0,1,2,3,4,5]

// Remove from start - O(n) SLOW!
arr.shift();      // [1,2,3,4,5]

// Search - O(n)
arr.indexOf(3);   // 2
arr.includes(3);  // true

// Loop - O(n)
arr.forEach(x => console.log(x));
arr.map(x => x * 2);       // [2,4,6,8,10]
arr.filter(x => x > 2);    // [3,4,5]
</pre>

<p><strong>Python Code:</strong></p>
<pre>
# Create
arr = [1, 2, 3, 4, 5]

# Access
arr[0]      # 1
arr[-1]     # 5 (last item)

# Add
arr.append(6)     # [1,2,3,4,5,6]

# Remove
arr.pop()         # removes last

# Search
3 in arr          # True
arr.index(3)      # 2
</pre>
`
    },

    // ========== STRING ==========
    "String": {
        concept: `
<p><strong>📝 What is a String?</strong></p>
<p>Sequence of characters. In JS/Python, strings are immutable (can't change in place).</p>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Access by index: O(1)</li>
<li>✅ Rich built-in methods</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ Immutable: changes create new string</li>
<li>❌ Concatenation can be O(n)</li>
</ul>

<p><strong>JavaScript Code:</strong></p>
<pre>
const str = "hello world";

// Access
str[0];           // 'h'
str.length;       // 11

// Methods - return NEW string
str.toUpperCase();     // 'HELLO WORLD'
str.toLowerCase();     // 'hello world'
str.slice(0, 5);       // 'hello'
str.split(' ');        // ['hello', 'world']
str.includes('world'); // true
str.indexOf('o');      // 4
str.replace('hello', 'hi');  // 'hi world'
str.trim();            // remove whitespace

// Reverse a string
str.split('').reverse().join('');  // 'dlrow olleh'
</pre>

<p><strong>Python Code:</strong></p>
<pre>
s = "hello world"

# Access
s[0]          # 'h'
len(s)        # 11

# Methods
s.upper()           # 'HELLO WORLD'
s.lower()           # 'hello world'
s.split(' ')        # ['hello', 'world']
'world' in s        # True
s.replace('hello', 'hi')  # 'hi world'

# Reverse
s[::-1]             # 'dlrow olleh'
</pre>
`
    },

    // ========== HASH MAP / OBJECT ==========
    "Hash Map / Dictionary": {
        concept: `
<p><strong>🗂️ What is a Hash Map?</strong></p>
<p>Key-value storage with O(1) average lookup. Uses hash function.</p>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Fast lookup: O(1) average</li>
<li>✅ Fast insert/delete: O(1)</li>
<li>✅ Great for counting, caching</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ No order (Object) or insertion order (Map)</li>
<li>❌ Extra memory</li>
<li>❌ O(n) worst case (collisions)</li>
</ul>

<p><strong>Time Complexity:</strong></p>
<table>
<tr><th>Operation</th><th>Average</th><th>Worst</th></tr>
<tr><td>Get</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Set</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Delete</td><td>O(1)</td><td>O(n)</td></tr>
</table>

<p><strong>JavaScript Code:</strong></p>
<pre>
// Object (simple)
const obj = { name: 'Ali', age: 25 };
obj.name;          // 'Ali'
obj['age'];        // 25
obj.city = 'LHR';  // add
delete obj.age;    // remove
'name' in obj;     // true

// Map (more features)
const map = new Map();
map.set('a', 1);
map.get('a');      // 1
map.has('a');      // true
map.delete('a');
map.size;          // 0
</pre>

<p><strong>Common Pattern - Count Frequency:</strong></p>
<pre>
function countChars(str) {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

countChars("hello");  // {h:1, e:1, l:2, o:1}
</pre>

<p><strong>Python Code:</strong></p>
<pre>
# Dictionary
d = {'name': 'Ali', 'age': 25}
d['name']          # 'Ali'
d['city'] = 'LHR'  # add
del d['age']       # remove
'name' in d        # True

# Counter
from collections import Counter
Counter("hello")   # {'l': 2, 'h': 1, 'e': 1, 'o': 1}
</pre>
`
    },

    // ========== STACK ==========
    "Stack": {
        concept: `
<p><strong>📚 What is a Stack?</strong></p>
<p><strong>LIFO</strong> = Last In, First Out. Like a stack of plates!</p>

<p><strong>Operations:</strong></p>
<ul>
<li><strong>Push:</strong> Add to top</li>
<li><strong>Pop:</strong> Remove from top</li>
<li><strong>Peek:</strong> Look at top (don't remove)</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ All operations O(1)</li>
<li>✅ Simple, predictable</li>
</ul>

<p><strong>Use Cases:</strong> Undo/redo, browser back, parentheses matching, DFS.</p>

<p><strong>JavaScript Code:</strong></p>
<pre>
// Stack using array
const stack = [];

// Push - add to top
stack.push(1);     // [1]
stack.push(2);     // [1, 2]
stack.push(3);     // [1, 2, 3]

// Pop - remove from top
stack.pop();       // returns 3, stack = [1, 2]

// Peek - see top
stack[stack.length - 1];  // 2
</pre>

<p><strong>Example: Valid Parentheses</strong></p>
<pre>
function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    
    for (const char of s) {
        if ('({['.includes(char)) {
            stack.push(char);    // Opening: push
        } else {
            if (stack.pop() !== pairs[char]) {
                return false;    // Mismatch!
            }
        }
    }
    return stack.length === 0;   // Should be empty
}

isValid("(){}[]");   // true
isValid("([)]");     // false
</pre>

<p><strong>Python Code:</strong></p>
<pre>
stack = []
stack.append(1)    # push
stack.pop()        # pop, returns 1
stack[-1]          # peek (last item)
</pre>
`
    },

    // ========== QUEUE ==========
    "Queue": {
        concept: `
<p><strong>🚶 What is a Queue?</strong></p>
<p><strong>FIFO</strong> = First In, First Out. Like a line at a store!</p>

<p><strong>Operations:</strong></p>
<ul>
<li><strong>Enqueue:</strong> Add to back</li>
<li><strong>Dequeue:</strong> Remove from front</li>
</ul>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Fair ordering</li>
<li>✅ Good for BFS, scheduling</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ JS array.shift() is O(n)!</li>
</ul>

<p><strong>JavaScript Code (Simple):</strong></p>
<pre>
const queue = [];

// Enqueue - add to back
queue.push(1);     // [1]
queue.push(2);     // [1, 2]

// Dequeue - remove from front
queue.shift();     // returns 1, queue = [2]
// Note: shift() is O(n) - slow for large queues!
</pre>

<p><strong>JavaScript Code (Efficient):</strong></p>
<pre>
class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
    
    enqueue(item) {
        this.items[this.tail++] = item;
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        const item = this.items[this.head];
        delete this.items[this.head++];
        return item;
    }
    
    isEmpty() {
        return this.head === this.tail;
    }
}
</pre>

<p><strong>Python Code:</strong></p>
<pre>
from collections import deque

q = deque()
q.append(1)        # enqueue
q.popleft()        # dequeue - O(1)
</pre>
`
    },

    // ========== LINKED LIST ==========
    "Linked List": {
        concept: `
<p><strong>🔗 What is a Linked List?</strong></p>
<p>Chain of nodes, each pointing to next. Not contiguous in memory.</p>

<p><strong>Advantages:</strong></p>
<ul>
<li>✅ Insert/delete at known position: O(1)</li>
<li>✅ Dynamic size</li>
</ul>

<p><strong>Disadvantages:</strong></p>
<ul>
<li>❌ No random access: O(n) to find</li>
<li>❌ Extra memory for pointers</li>
</ul>

<p><strong>Comparison with Array:</strong></p>
<table>
<tr><th>Operation</th><th>Array</th><th>Linked List</th></tr>
<tr><td>Access [i]</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Insert at start</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Insert at end</td><td>O(1)</td><td>O(n)*</td></tr>
<tr><td>Search</td><td>O(n)</td><td>O(n)</td></tr>
</table>

<p><strong>JavaScript Implementation:</strong></p>
<pre>
// Node structure
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Linked List
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    // Add to front - O(1)
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    
    // Print list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// Usage
const list = new LinkedList();
list.prepend(3);
list.prepend(2);
list.prepend(1);
// list: 1 -> 2 -> 3 -> null
</pre>
`
    },

    // ========== BINARY SEARCH ==========
    "Binary Search": {
        concept: `
<p><strong>🔍 What is Binary Search?</strong></p>
<p>Search sorted array by halving each step. O(log n)!</p>

<p><strong>Requirements:</strong> Array must be SORTED.</p>

<p><strong>Speed Comparison:</strong></p>
<table>
<tr><th>Items</th><th>Linear O(n)</th><th>Binary O(log n)</th></tr>
<tr><td>100</td><td>100 steps</td><td>7 steps</td></tr>
<tr><td>1,000</td><td>1,000 steps</td><td>10 steps</td></tr>
<tr><td>1,000,000</td><td>1,000,000 steps</td><td>20 steps</td></tr>
</table>

<p><strong>JavaScript Code:</strong></p>
<pre>
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;          // Found!
        }
        if (arr[mid] < target) {
            left = mid + 1;      // Search right half
        } else {
            right = mid - 1;     // Search left half
        }
    }
    return -1;                   // Not found
}

// Example
const arr = [1, 3, 5, 7, 9, 11, 13];
binarySearch(arr, 7);   // 3 (index)
binarySearch(arr, 4);   // -1 (not found)
</pre>

<p><strong>Python Code:</strong></p>
<pre>
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
</pre>
`
    },

    // ========== SORTING ==========
    "Sorting Algorithms": {
        concept: `
<p><strong>📊 Common Sorting Algorithms</strong></p>

<table>
<tr><th>Algorithm</th><th>Time (Avg)</th><th>Space</th><th>Stable?</th></tr>
<tr><td>Bubble Sort</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Selection Sort</td><td>O(n²)</td><td>O(1)</td><td>No</td></tr>
<tr><td>Insertion Sort</td><td>O(n²)</td><td>O(1)</td><td>Yes</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n)</td><td>Yes</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>O(log n)</td><td>No</td></tr>
</table>

<p><strong>Stable:</strong> Equal elements keep original order.</p>

<p><strong>JavaScript Built-in:</strong></p>
<pre>
const arr = [3, 1, 4, 1, 5, 9];
arr.sort((a, b) => a - b);  // [1, 1, 3, 4, 5, 9]
arr.sort((a, b) => b - a);  // [9, 5, 4, 3, 1, 1]
</pre>

<p><strong>Merge Sort (JavaScript):</strong></p>
<pre>
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    
    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    
    return [...result, ...left.slice(i), ...right.slice(j)];
}
</pre>

<p><strong>Python Built-in:</strong></p>
<pre>
arr = [3, 1, 4, 1, 5, 9]
sorted(arr)           # returns new list
arr.sort()            # sorts in place
arr.sort(reverse=True)  # descending
</pre>
`
    },

    // ========== TWO SUM ==========
    "Two Sum Problem": {
        concept: `
<p><strong>🎯 Classic Interview Problem</strong></p>
<p>Find two numbers in array that add to target. Return indices.</p>

<p><strong>Approaches:</strong></p>
<table>
<tr><th>Method</th><th>Time</th><th>Space</th></tr>
<tr><td>Brute Force</td><td>O(n²)</td><td>O(1)</td></tr>
<tr><td>Hash Map</td><td>O(n)</td><td>O(n)</td></tr>
</table>

<p><strong>JavaScript - Brute Force O(n²):</strong></p>
<pre>
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;
}
</pre>

<p><strong>JavaScript - Hash Map O(n):</strong></p>
<pre>
function twoSum(nums, target) {
    const seen = {};  // value -> index
    
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i];
        
        if (need in seen) {
            return [seen[need], i];
        }
        
        seen[nums[i]] = i;
    }
    return null;
}

// Example
twoSum([2, 7, 11, 15], 9);  // [0, 1]
// 2 + 7 = 9
</pre>

<p><strong>Python - Hash Map O(n):</strong></p>
<pre>
def two_sum(nums, target):
    seen = {}
    for i, num in enumerate(nums):
        need = target - num
        if need in seen:
            return [seen[need], i]
        seen[num] = i
    return None
</pre>
`
    },

    // ========== FIZZBUZZ ==========
    "FizzBuzz": {
        concept: `
<p><strong>🎮 Classic Interview Problem</strong></p>
<p>Print 1 to 100. If divisible by 3 → "Fizz", by 5 → "Buzz", by both → "FizzBuzz".</p>

<p><strong>JavaScript Solution:</strong></p>
<pre>
for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
</pre>

<p><strong>JavaScript - Better Approach:</strong></p>
<pre>
for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}
</pre>

<p><strong>Python Solution:</strong></p>
<pre>
for i in range(1, 101):
    if i % 15 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
</pre>

<p><strong>Python One-Liner:</strong></p>
<pre>
print(['FizzBuzz' if i%15==0 else 'Fizz' if i%3==0 else 'Buzz' if i%5==0 else i for i in range(1,101)])
</pre>

<p><strong>Key Point:</strong> Check divisible by 15 FIRST (or build string). Order matters!</p>
`
    },

    // ========== RECURSION ==========
    "Recursion": {
        concept: `
<p><strong>🔄 What is Recursion?</strong></p>
<p>Function calling itself. Must have base case to stop.</p>

<p><strong>Two Parts:</strong></p>
<ol>
<li><strong>Base case:</strong> When to stop</li>
<li><strong>Recursive case:</strong> Call itself with smaller input</li>
</ol>

<p><strong>Factorial Example:</strong></p>
<pre>
// JavaScript
function factorial(n) {
    if (n <= 1) return 1;        // Base case
    return n * factorial(n - 1); // Recursive case
}

factorial(5);  // 5 * 4 * 3 * 2 * 1 = 120
</pre>

<pre>
# Python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)
</pre>

<p><strong>Fibonacci (Naive - O(2^n) SLOW!):</strong></p>
<pre>
function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}
</pre>

<p><strong>Fibonacci (Memoization - O(n) FAST!):</strong></p>
<pre>
function fib(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
</pre>

<p><strong>Pros:</strong> Elegant for trees, divide & conquer.</p>
<p><strong>Cons:</strong> Stack overflow risk, can be slower than loops.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = dsaCodingData;
}
