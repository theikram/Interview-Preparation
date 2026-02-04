// TAILWIND CSS - Interview Prep (Popular Classes & Patterns)
const tailwindData = {
    // ========== WHAT IS TAILWIND ==========
    "What is Tailwind CSS?": {
        concept: `
<p><strong>🎨 Understanding Tailwind CSS</strong></p>

<p>Tailwind is a <strong>utility-first CSS framework</strong>. Instead of pre-made components, you build designs using small, single-purpose classes.</p>

<p><strong>Traditional CSS vs Tailwind:</strong></p>
<pre>
// Traditional CSS
.primary-btn {
    background-color: blue;
    color: white;
    padding: 8px 16px;
    border-radius: 4px;
}

// Tailwind CSS - classes in HTML
bg-blue-500 text-white px-4 py-2 rounded
</pre>

<p><strong>Benefits:</strong></p>
<ul>
<li><strong>Faster development</strong> - No switching between HTML and CSS files</li>
<li><strong>Consistent design</strong> - Built-in design system (spacing, colors)</li>
<li><strong>Smaller CSS</strong> - Only includes classes you use</li>
<li><strong>Responsive</strong> - Easy responsive design with prefixes</li>
</ul>

<p><strong>Drawbacks:</strong></p>
<ul>
<li>HTML can get long with many classes</li>
<li>Learning curve for class names</li>
<li>Harder to read at first</li>
</ul>
`
    },

    // ========== MOST USED CLASSES ==========
    "Most Used Classes": {
        concept: `
<p><strong>📋 Essential Tailwind Classes</strong></p>

<p><strong>🎨 Colors:</strong></p>
<pre>
// Background
bg-white        bg-black        bg-gray-100
bg-blue-500     bg-red-500      bg-green-500
bg-transparent

// Text Color
text-white      text-black      text-gray-700
text-blue-500   text-red-500    text-green-500

// Border Color
border-gray-300  border-blue-500  border-red-500

// Colors go from 50 (light) to 950 (dark)
bg-blue-50    (very light)
bg-blue-500   (medium - default)
bg-blue-950   (very dark)
</pre>

<p><strong>📏 Spacing (margin/padding):</strong></p>
<pre>
// Padding (all sides)
p-0   p-1   p-2   p-4   p-6   p-8   p-10   p-12

// Padding (specific sides)
pt-4  (top)       pb-4  (bottom)
pl-4  (left)      pr-4  (right)
px-4  (left+right)  py-4  (top+bottom)

// Margin (same pattern)
m-4   mt-4   mb-4   ml-4   mr-4   mx-4   my-4

// Negative margin
-m-4   -mt-2

// Auto margin
mx-auto  (center horizontally)
</pre>

<p><strong>📦 Width & Height:</strong></p>
<pre>
// Fixed sizes
w-4      h-4       (1rem = 16px)
w-10     h-10      (2.5rem = 40px)
w-64     h-64      (16rem = 256px)

// Percentage/Full
w-full   (100%)    w-1/2   (50%)    w-1/3   (33%)
h-full   h-screen  (100vh)

// Max width (for responsive)
max-w-sm   max-w-md   max-w-lg   max-w-xl
</pre>

<p><strong>✏️ Typography:</strong></p>
<pre>
// Font Size
text-xs   text-sm   text-base   text-lg   text-xl
text-2xl  text-3xl  text-4xl    text-5xl

// Font Weight
font-thin   font-normal   font-medium
font-semibold   font-bold   font-extrabold

// Text Align
text-left   text-center   text-right   text-justify
</pre>
`
    },

    // ========== FLEXBOX ==========
    "Flexbox Classes": {
        concept: `
<p><strong>📐 Tailwind Flexbox</strong></p>

<pre>
// Enable Flex
class="flex"
class="inline-flex"

// Direction
flex-row        (default - horizontal)
flex-col        (vertical)
flex-row-reverse
flex-col-reverse

// Justify Content (main axis)
justify-start     (items to start)
justify-center    (center)
justify-end       (items to end)
justify-between   (space between)
justify-around    (space around)
justify-evenly    (equal space)

// Align Items (cross axis)
items-start       (top)
items-center      (center vertically)
items-end         (bottom)
items-stretch     (stretch to fill)

// Gap (spacing between items)
gap-2   gap-4   gap-6   gap-8
gap-x-4  (horizontal only)
gap-y-4  (vertical only)

// Flex Wrap
flex-wrap         (wrap to new line)
flex-nowrap       (no wrap)

// Flex Grow/Shrink
flex-1            (grow to fill)
flex-grow         (can grow)
flex-shrink-0     (don't shrink)
</pre>

<p><strong>📋 Common Patterns:</strong></p>
<pre>
// Center everything
class="flex items-center justify-center"

// Space between (navbar style)
class="flex justify-between items-center"

// Vertical stack with gap
class="flex flex-col gap-4"
</pre>
`
    },

    // ========== GRID ==========
    "Grid Classes": {
        concept: `
<p><strong>🔲 Tailwind Grid</strong></p>

<pre>
// Enable Grid
class="grid"

// Grid Columns
grid-cols-1     (1 column)
grid-cols-2     (2 columns)
grid-cols-3     (3 columns)
grid-cols-4     (4 columns)
grid-cols-12    (12 columns)

// Grid Rows
grid-rows-2     grid-rows-3     grid-rows-4

// Gap
gap-4           (all directions)
gap-x-4         (horizontal)
gap-y-4         (vertical)

// Span columns
col-span-2      (take 2 columns)
col-span-3      (take 3 columns)
col-span-full   (take all columns)

// Start/End positions
col-start-2     (start at column 2)
col-end-4       (end at column 4)
</pre>

<p><strong>📋 Common Patterns:</strong></p>
<pre>
// 3-column product grid
class="grid grid-cols-3 gap-4"

// Responsive grid
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
// 1 col mobile, 2 cols tablet, 3 cols desktop
</pre>
`
    },

    // ========== RESPONSIVE DESIGN ==========
    "Responsive Design": {
        concept: `
<p><strong>📱 Tailwind Responsive Breakpoints</strong></p>

<p>Tailwind uses <strong>mobile-first</strong> approach. Default styles apply to all sizes, then add breakpoint prefixes for larger screens.</p>

<p><strong>Breakpoints:</strong></p>
<pre>
sm:     640px   (small tablets)
md:     768px   (tablets)
lg:     1024px  (laptops)
xl:     1280px  (desktops)
2xl:    1536px  (large screens)
</pre>

<p><strong>How to Use:</strong></p>
<pre>
// Mobile first: default is for mobile
class="text-sm md:text-base lg:text-lg"
// Small text on mobile, Normal on tablet, Large on desktop

// Hide/Show based on screen size
class="hidden md:block"   // Only visible on tablet+
class="block md:hidden"   // Only visible on mobile

// Responsive padding
class="p-4 md:p-6 lg:p-8"

// Responsive flexbox
class="flex flex-col md:flex-row"
// Stacked on mobile, side-by-side on tablet+

// Responsive grid
class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
</pre>
`
    },

    // ========== HOVER, FOCUS STATES ==========
    "Hover, Focus & States": {
        concept: `
<p><strong>🎯 Interactive States</strong></p>

<pre>
// Hover
class="bg-blue-500 hover:bg-blue-600"

// Focus (keyboard/click)
class="border focus:border-blue-500 focus:ring-2"

// Active (while clicking)
class="bg-blue-500 active:bg-blue-700"

// Disabled
class="bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"

// Group hover (parent hover affects child)
// Parent: class="group"
// Child: class="group-hover:text-blue-500"
</pre>

<p><strong>📋 Complete Button Example:</strong></p>
<pre>
class="
    bg-blue-500 
    text-white 
    px-4 py-2 
    rounded-lg
    hover:bg-blue-600
    active:bg-blue-700
    focus:outline-none
    focus:ring-2
    transition-colors
    duration-200
"
</pre>
`
    },

    // ========== COMMON COMPONENTS ==========
    "Common Component Patterns": {
        concept: `
<p><strong>🧩 Ready-to-Use Patterns</strong></p>

<p><strong>📋 Card:</strong></p>
<pre>
class="bg-white rounded-lg shadow-md p-6"
</pre>

<p><strong>📋 Input Field:</strong></p>
<pre>
class="w-full px-4 py-2 border border-gray-300 rounded-lg
       focus:outline-none focus:border-blue-500 focus:ring-1"
</pre>

<p><strong>📋 Badge:</strong></p>
<pre>
// Success badge
class="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full"

// Error badge
class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full"
</pre>

<p><strong>📋 Avatar:</strong></p>
<pre>
class="w-10 h-10 rounded-full object-cover"
</pre>

<p><strong>📋 Centered Container:</strong></p>
<pre>
class="max-w-4xl mx-auto px-4"
</pre>

<p><strong>📋 Full-height Page:</strong></p>
<pre>
class="min-h-screen flex flex-col"
// Header, main with flex-1, footer
</pre>
`
    },

    // ========== INTERVIEW QUESTIONS ==========
    "Tailwind Interview Questions": {
        concept: `
<p><strong>❓ Common Tailwind Interview Questions</strong></p>

<p><strong>Q1: What is Tailwind CSS?</strong></p>
<p>Tailwind is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in HTML, without writing custom CSS.</p>

<p><strong>Q2: What is "utility-first"?</strong></p>
<p>Instead of pre-built components, you combine small utility classes (like p-4, text-center, bg-blue-500) to build your design.</p>

<p><strong>Q3: What's the difference between px-4 and p-4?</strong></p>
<p>p-4 applies padding to all 4 sides. px-4 applies padding only to left and right (x-axis: horizontal).</p>

<p><strong>Q4: How does responsive design work in Tailwind?</strong></p>
<p>Use breakpoint prefixes: sm:, md:, lg:, xl:. Example: text-sm md:text-lg makes text small on mobile, large on tablet+. It's mobile-first.</p>

<p><strong>Q5: What is the "group" class?</strong></p>
<p>group lets you style children based on parent state. Parent has class="group", child has class="group-hover:text-blue-500" - child changes color when parent is hovered.</p>

<p><strong>Q6: How do you center an element horizontally?</strong></p>
<p>Use mx-auto for block elements. For flex, use justify-center. items-center centers vertically.</p>

<p><strong>Q7: What's the difference between hidden and invisible?</strong></p>
<p>hidden removes element from layout (display: none). invisible hides it but still takes space (visibility: hidden).</p>

<p><strong>Q8: How does Tailwind handle dark mode?</strong></p>
<p>Use dark: prefix. Example: bg-white dark:bg-gray-900. Enable in config with darkMode: 'class' or 'media'.</p>

<p><strong>Q9: What is purging in Tailwind?</strong></p>
<p>Tailwind removes unused CSS in production builds to minimize file size. Configure content paths in tailwind.config.js.</p>

<p><strong>Q10: Pros and cons of Tailwind?</strong></p>
<p>Pros: Fast development, consistent design, small CSS bundle. Cons: Long class strings, learning curve, harder to read initially.</p>
`
    }
};

if (typeof module !== 'undefined') {
    module.exports = tailwindData;
}
