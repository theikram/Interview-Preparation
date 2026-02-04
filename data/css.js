// CSS - Complete Interview Prep (Basics to Tricky)
const cssData = {
    "Box Model & Box Sizing": {
        concept: `<p><strong>Every element is a rectangular box with 4 layers:</strong></p>
<ol>
<li><strong>Content</strong> - The actual text, image, etc.</li>
<li><strong>Padding</strong> - Space INSIDE border, around content</li>
<li><strong>Border</strong> - The visible edge</li>
<li><strong>Margin</strong> - Space OUTSIDE border, between elements</li>
</ol>

<p><strong>box-sizing property (CRITICAL):</strong></p>
<ul>
<li><strong>content-box (default):</strong> width/height = content only. Padding and border ADD to total size.</li>
<li><strong>border-box:</strong> width/height INCLUDES padding and border. Much more intuitive!</li>
</ul>

<p><strong>Example with content-box (default):</strong></p>
<p>Set width: 200px, padding: 20px, border: 5px</p>
<p>Total width = 200 + 20*2 + 5*2 = <strong>250px</strong></p>

<p><strong>Example with border-box:</strong></p>
<p>Set width: 200px, padding: 20px, border: 5px</p>
<p>Total width = <strong>200px</strong> (content shrinks to fit)</p>

<p><strong>Interview Q: Why does my layout break when I add padding?</strong></p>
<p>A: You're using content-box (default). Padding adds to width. Use box-sizing: border-box to fix.</p>`,
        example: `<pre>/* Universal box-sizing reset (ALWAYS USE) */
*, *::before, *::after {
    box-sizing: border-box;
}

/* Box model properties */
.box {
    width: 300px;
    height: 200px;
    padding: 20px;           /* All sides */
    padding: 10px 20px;      /* Vertical | Horizontal */
    padding: 5px 10px 15px 20px; /* Top Right Bottom Left */
    border: 2px solid black;
    margin: 20px;
}

/* Margin shortcuts */
margin: 0 auto;    /* Center horizontally (block) */
margin-inline: auto; /* Modern centering */

/* Margin collapse - only vertical margins collapse */
/* If div1 has margin-bottom: 30px and div2 has margin-top: 20px,
   the gap between them is 30px (larger wins), not 50px */

/* Padding vs Margin */
/* Padding: space inside, shows background color */
/* Margin: space outside, always transparent */

/* Negative margins (yes, valid!) */
.pull-up {
    margin-top: -20px; /* Overlaps previous element */
}

/* Box model for inline elements */
/* Width/height DON'T work on inline */
/* Vertical padding/margin don't affect layout */
span {
    padding: 10px; /* Horizontal works, vertical overflows */
    display: inline-block; /* Fix: now width/height work */
}</pre>`
    },

    "Selectors & Specificity": {
        concept: `<p><strong>Selector Types (low to high specificity):</strong></p>
<ul>
<li><strong>Universal:</strong> * { } - Selects all</li>
<li><strong>Element:</strong> div, p, span { }</li>
<li><strong>Class:</strong> .classname { }</li>
<li><strong>Attribute:</strong> [type="text"] { }</li>
<li><strong>Pseudo-class:</strong> :hover, :first-child { }</li>
<li><strong>ID:</strong> #idname { } - Highest (avoid for styles)</li>
<li><strong>Inline styles:</strong> style="..." - Overrides all</li>
<li><strong>!important</strong> - Nuclear option (don't use)</li>
</ul>

<p><strong>Specificity Calculation (a, b, c, d):</strong></p>
<ul>
<li>a = inline styles</li>
<li>b = ID selectors</li>
<li>c = classes, attributes, pseudo-classes</li>
<li>d = elements, pseudo-elements</li>
</ul>

<p><strong>Combinators:</strong></p>
<ul>
<li><strong>Descendant:</strong> div p (p inside div, any level)</li>
<li><strong>Child:</strong> div &gt; p (direct child only)</li>
<li><strong>Adjacent sibling:</strong> h1 + p (p immediately after h1)</li>
<li><strong>General sibling:</strong> h1 ~ p (all p siblings after h1)</li>
</ul>

<p><strong>Interview Q: Why doesn't my style apply?</strong></p>
<p>A: Another rule has higher specificity. Check for IDs, inline styles, or !important. Use DevTools to see which rule wins.</p>`,
        example: `<pre>/* Specificity examples - calculate (a,b,c,d) */
* { }                    /* (0,0,0,0) */
li { }                   /* (0,0,0,1) */
ul li { }                /* (0,0,0,2) */
ul ol+li { }             /* (0,0,0,3) */
.class { }               /* (0,0,1,0) */
li.class { }             /* (0,0,1,1) */
ul li.class { }          /* (0,0,1,2) */
#id { }                  /* (0,1,0,0) */
#id .class { }           /* (0,1,1,0) */
style="..."              /* (1,0,0,0) */

/* Attribute selectors */
[type="text"] { }        /* Exact match */
[class^="btn-"] { }      /* Starts with */
[class$="-primary"] { }  /* Ends with */
[class*="btn"] { }       /* Contains */

/* Pseudo-classes */
a:hover { }
li:first-child { }
li:last-child { }
li:nth-child(2) { }      /* 2nd item */
li:nth-child(odd) { }    /* 1, 3, 5... */
li:nth-child(2n+1) { }   /* Same as odd */
input:focus { }
input:disabled { }
input:checked { }
:not(.class) { }         /* Negation */

/* Combinators */
div p { }       /* Descendant: any p inside div */
div > p { }     /* Child: direct p inside div */
h1 + p { }      /* Adjacent: p right after h1 */
h1 ~ p { }      /* Sibling: all p after h1, same parent */

/* Grouping */
h1, h2, h3 { font-weight: bold; }

/* BEM naming (avoids specificity wars) */
.card { }
.card__title { }
.card__body { }
.card--featured { }
.card--disabled { }</pre>`
    },

    "Position Property": {
        concept: `<p><strong>Position values:</strong></p>

<p><strong>static (default):</strong></p>
<ul>
<li>Normal document flow</li>
<li>top/left/right/bottom have no effect</li>
<li>z-index doesn't work</li>
</ul>

<p><strong>relative:</strong></p>
<ul>
<li>Stays in normal flow (space preserved)</li>
<li>Can offset from original position</li>
<li>Creates positioning context for absolute children</li>
</ul>

<p><strong>absolute:</strong></p>
<ul>
<li>Removed from flow (no space taken)</li>
<li>Positioned relative to nearest positioned ancestor</li>
<li>If no positioned ancestor, uses viewport</li>
</ul>

<p><strong>fixed:</strong></p>
<ul>
<li>Removed from flow</li>
<li>Positioned relative to viewport</li>
<li>Stays in place when scrolling</li>
</ul>

<p><strong>sticky:</strong></p>
<ul>
<li>Hybrid of relative and fixed</li>
<li>Relative until scroll threshold, then fixed</li>
<li>Must specify top/left/right/bottom</li>
</ul>

<p><strong>Interview Q: Why doesn't z-index work?</strong></p>
<p>A: Element must be positioned (not static). Also check for stacking context created by parent.</p>`,
        example: `<pre>/* Static - default, can't position */
.static {
    position: static;
    top: 20px; /* Does nothing! */
}

/* Relative - offset from original, space kept */
.relative {
    position: relative;
    top: 20px;  /* Moves DOWN 20px */
    left: 20px; /* Moves RIGHT 20px */
}

/* Absolute - positioned to ancestor */
.parent {
    position: relative; /* Create context */
}
.child {
    position: absolute;
    top: 0;
    right: 0; /* Top-right corner of parent */
}

/* Center with absolute */
.center-absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* Fixed - stays on screen */
.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}

/* Sticky - sticks when scrolled */
.sticky-nav {
    position: sticky;
    top: 0; /* REQUIRED - when to stick */
    background: white;
}

/* Z-index (stacking order) */
.bottom { z-index: 1; }
.middle { z-index: 10; }
.top { z-index: 100; }

/* Common issue: z-index not working */
.broken {
    z-index: 999; /* Doesn't work! */
}
.fixed {
    position: relative; /* Now z-index works */
    z-index: 999;
}</pre>`
    },

    "Flexbox": {
        concept: `<p><strong>Flexbox is 1-dimensional layout (row OR column).</strong></p>

<p><strong>Container Properties:</strong></p>
<ul>
<li><strong>display: flex</strong> - Enable flexbox</li>
<li><strong>flex-direction:</strong> row | row-reverse | column | column-reverse</li>
<li><strong>justify-content:</strong> Main axis (flex-start | flex-end | center | space-between | space-around | space-evenly)</li>
<li><strong>align-items:</strong> Cross axis (flex-start | flex-end | center | stretch | baseline)</li>
<li><strong>flex-wrap:</strong> nowrap | wrap | wrap-reverse</li>
<li><strong>gap:</strong> Space between items</li>
<li><strong>align-content:</strong> Multi-line alignment (when wrapped)</li>
</ul>

<p><strong>Item Properties:</strong></p>
<ul>
<li><strong>flex-grow:</strong> How much item grows (0 = don't grow)</li>
<li><strong>flex-shrink:</strong> How much item shrinks (0 = don't shrink)</li>
<li><strong>flex-basis:</strong> Initial size before grow/shrink</li>
<li><strong>flex:</strong> Shorthand (grow shrink basis)</li>
<li><strong>align-self:</strong> Override align-items for this item</li>
<li><strong>order:</strong> Visual order (default 0)</li>
</ul>

<p><strong>Interview Q: justify-content vs align-items?</strong></p>
<p>A: justify-content = MAIN axis (horizontal for row). align-items = CROSS axis (vertical for row). Think: "justify along the direction, align across it."</p>`,
        example: `<pre>/* Flex container */
.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

/* Center everything */
.center-all {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

/* Common flex values */
.item {
    flex: 1;          /* flex: 1 1 0% - grow equally */
}
.item-fixed {
    flex: 0 0 200px;  /* Don't grow, don't shrink, 200px */
}
.item-auto {
    flex: 1 1 auto;   /* Grow/shrink, use content as basis */
}

/* Navbar layout */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

/* Card grid */
.card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
.card {
    flex: 1 1 300px; /* Grow, shrink, min 300px */
    max-width: 400px;
}

/* Sidebar layout */
.layout {
    display: flex;
}
.sidebar { 
    flex: 0 0 250px; /* Fixed width */
}
.main { 
    flex: 1; /* Take remaining space */
}

/* Footer at bottom (sticky footer) */
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
main { flex: 1; } /* Push footer down */
footer { /* Stays at bottom */ }</pre>`
    },

    "CSS Grid": {
        concept: `<p><strong>CSS Grid is 2-dimensional layout (rows AND columns).</strong></p>

<p><strong>Container Properties:</strong></p>
<ul>
<li><strong>display: grid</strong> - Enable grid</li>
<li><strong>grid-template-columns:</strong> Define column sizes</li>
<li><strong>grid-template-rows:</strong> Define row sizes</li>
<li><strong>gap:</strong> Space between cells (or row-gap, column-gap)</li>
<li><strong>grid-template-areas:</strong> Named layout areas</li>
</ul>

<p><strong>Sizing Functions:</strong></p>
<ul>
<li><strong>fr unit:</strong> Fraction of free space</li>
<li><strong>repeat(n, size):</strong> Repeat pattern n times</li>
<li><strong>minmax(min, max):</strong> Set size range</li>
<li><strong>auto-fit:</strong> Fit as many as possible</li>
<li><strong>auto-fill:</strong> Fill with tracks (even empty)</li>
</ul>

<p><strong>Item Properties:</strong></p>
<ul>
<li><strong>grid-column:</strong> start / end (or span n)</li>
<li><strong>grid-row:</strong> start / end (or span n)</li>
<li><strong>grid-area:</strong> Place in named area</li>
</ul>

<p><strong>Interview Q: Flexbox vs Grid?</strong></p>
<p>A: Flexbox = 1D (row OR column). Grid = 2D (rows AND columns). Use Grid for page layouts, Flexbox for component alignment.</p>`,
        example: `<pre>/* Basic grid */
.grid {
    display: grid;
    grid-template-columns: 200px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    gap: 20px;
}

/* Using fr units */
.three-cols {
    grid-template-columns: 1fr 2fr 1fr; /* 25% 50% 25% */
}

/* Repeat function */
.four-equal {
    grid-template-columns: repeat(4, 1fr);
}

/* Responsive grid (NO media queries!) */
.responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

/* Named grid areas */
.page-layout {
    display: grid;
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }

/* Spanning items */
.item-wide {
    grid-column: 1 / 3;     /* Span columns 1-2 */
    grid-column: span 2;    /* Same thing */
}
.item-tall {
    grid-row: 1 / 4;        /* Span rows 1-3 */
}
.item-full {
    grid-column: 1 / -1;    /* Full width */
}

/* Center single item in grid */
.grid-center {
    display: grid;
    place-items: center;
    height: 100vh;
}</pre>`
    },

    "Media Queries & Responsiveness": {
        concept: `<p><strong>Media queries apply styles based on device characteristics.</strong></p>

<p><strong>Mobile-First Approach (Recommended):</strong></p>
<ul>
<li>Write mobile styles first (default)</li>
<li>Add larger screen styles with min-width</li>
<li>Results in simpler, smaller CSS</li>
</ul>

<p><strong>Common Breakpoints:</strong></p>
<ul>
<li>320px - Small phones</li>
<li>480px - Large phones</li>
<li>768px - Tablets</li>
<li>1024px - Small laptops</li>
<li>1200px - Desktops</li>
<li>1440px+ - Large screens</li>
</ul>

<p><strong>Media Query Features:</strong></p>
<ul>
<li>width, min-width, max-width</li>
<li>height, min-height, max-height</li>
<li>orientation: portrait | landscape</li>
<li>prefers-color-scheme: dark | light</li>
<li>prefers-reduced-motion</li>
</ul>

<p><strong>Interview Q: Mobile-first vs Desktop-first?</strong></p>
<p>A: Mobile-first: base styles for mobile, enhance for larger. Better for performance (mobile loads less CSS). Desktop-first: base for desktop, reduce for smaller. Often leads to bloated CSS.</p>`,
        example: `<pre>/* Mobile-first approach */
/* Base styles (mobile) */
.container {
    padding: 15px;
}

.grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
}

/* Tablet */
@media (min-width: 768px) {
    .container {
        padding: 30px;
        max-width: 720px;
        margin: 0 auto;
    }
    
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 960px;
    }
    
    .grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
    }
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
    :root {
        --bg-color: #1a1a1a;
        --text-color: #ffffff;
    }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
    * {
        animation: none !important;
        transition: none !important;
    }
}

/* Print styles */
@media print {
    .no-print { display: none; }
    body { font-size: 12pt; }
}

/* Orientation */
@media (orientation: landscape) {
    .sidebar { width: 30%; }
}

/* Combining conditions */
@media (min-width: 768px) and (max-width: 1024px) {
    /* Tablet only */
}

/* Using CSS Grid for responsive without media queries */
.auto-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}</pre>`
    },

    "Transitions & Transforms": {
        concept: `<p><strong>Transitions:</strong></p>
<p>Smooth animation between states (hover, focus, class change).</p>
<ul>
<li><strong>transition-property:</strong> What to animate (all, specific properties)</li>
<li><strong>transition-duration:</strong> How long (0.3s, 300ms)</li>
<li><strong>transition-timing-function:</strong> Speed curve (ease, linear, ease-in-out)</li>
<li><strong>transition-delay:</strong> Wait before starting</li>
</ul>

<p><strong>Transforms:</strong></p>
<p>Move, rotate, scale, skew elements without affecting layout.</p>
<ul>
<li><strong>translate(x, y):</strong> Move element</li>
<li><strong>rotate(angle):</strong> Rotate (deg, turn)</li>
<li><strong>scale(x, y):</strong> Resize</li>
<li><strong>skew(x, y):</strong> Tilt</li>
<li><strong>transform-origin:</strong> Pivot point</li>
</ul>

<p><strong>Performance Tip:</strong></p>
<p>Animate transform and opacity only - they're GPU accelerated. Avoid animating width, height, margin (cause layout recalculation).</p>`,
        example: `<pre>/* Transition shorthand */
.button {
    background: blue;
    transform: scale(1);
    transition: all 0.3s ease;
}

.button:hover {
    background: darkblue;
    transform: scale(1.05);
}

/* Specific properties (better performance) */
.card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Transform examples */
.translate {
    transform: translate(50px, 100px);
    transform: translateX(50px);
    transform: translateY(-20px);
}

.rotate {
    transform: rotate(45deg);
    transform: rotate(0.5turn);
}

.scale {
    transform: scale(1.5);       /* Both axes */
    transform: scale(2, 0.5);    /* X, Y separately */
}

.skew {
    transform: skew(10deg, 5deg);
}

/* Combining transforms */
.combined {
    transform: translateX(100px) rotate(45deg) scale(1.2);
}

/* Transform origin (pivot point) */
.rotate-corner {
    transform-origin: top left;
    transform: rotate(45deg);
}

/* 3D transforms */
.flip {
    transform: perspective(1000px) rotateY(180deg);
}

/* Transition timing functions */
.ease { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.custom { transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }</pre>`
    },

    "Animations & Keyframes": {
        concept: `<p><strong>CSS Animations:</strong></p>
<p>More complex animations than transitions, with full control over each step.</p>

<p><strong>Define with @keyframes:</strong></p>
<ul>
<li>Name the animation</li>
<li>Set states at percentages (0% to 100%)</li>
<li>Or use from/to for simple animations</li>
</ul>

<p><strong>Animation Properties:</strong></p>
<ul>
<li><strong>animation-name:</strong> Name of @keyframes</li>
<li><strong>animation-duration:</strong> How long one cycle takes</li>
<li><strong>animation-timing-function:</strong> Speed curve</li>
<li><strong>animation-delay:</strong> Wait before starting</li>
<li><strong>animation-iteration-count:</strong> How many times (number or infinite)</li>
<li><strong>animation-direction:</strong> normal | reverse | alternate</li>
<li><strong>animation-fill-mode:</strong> Style before/after (forwards, backwards, both)</li>
<li><strong>animation-play-state:</strong> running | paused</li>
</ul>

<p><strong>Interview Q: Transition vs Animation?</strong></p>
<p>A: Transition needs trigger (hover, class change), runs once, simple A→B. Animation can auto-start, loop, have multiple steps.</p>`,
        example: `<pre>/* Define keyframes */
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* Apply animations */
.fade-in {
    animation: fadeIn 0.5s ease-out;
}

.slide-in {
    animation: slideIn 0.5s ease-out forwards;
}

.bounce {
    animation: bounce 1s ease-in-out infinite;
}

/* Animation shorthand */
.animated {
    animation: pulse 2s ease-in-out 0.5s infinite alternate;
    /* name duration timing delay count direction */
}

/* Pause on hover */
.animated:hover {
    animation-play-state: paused;
}

/* Fill mode */
.fill-forwards {
    animation: fadeIn 1s forwards; /* Keeps end state */
}
.fill-backwards {
    animation: fadeIn 1s backwards; /* Applies 0% style immediately */
}

/* Loading spinner */
@keyframes spin {
    to { transform: rotate(360deg); }
}

.spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #ccc;
    border-top-color: #333;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}</pre>`
    },

    "Pseudo-Elements & Pseudo-Classes": {
        concept: `<p><strong>Pseudo-classes (:) - Select based on STATE:</strong></p>
<ul>
<li><strong>:hover</strong> - Mouse over</li>
<li><strong>:focus</strong> - Keyboard focused</li>
<li><strong>:active</strong> - Being clicked</li>
<li><strong>:visited</strong> - Visited link</li>
<li><strong>:first-child, :last-child</strong> - First/last sibling</li>
<li><strong>:nth-child(n)</strong> - Nth sibling</li>
<li><strong>:not(selector)</strong> - Negation</li>
<li><strong>:focus-visible</strong> - Keyboard focus only</li>
<li><strong>:disabled, :enabled, :checked</strong> - Form states</li>
</ul>

<p><strong>Pseudo-elements (::) - Select PARTS of element:</strong></p>
<ul>
<li><strong>::before</strong> - Insert before content</li>
<li><strong>::after</strong> - Insert after content</li>
<li><strong>::first-letter</strong> - First letter</li>
<li><strong>::first-line</strong> - First line</li>
<li><strong>::selection</strong> - Highlighted text</li>
<li><strong>::placeholder</strong> - Input placeholder</li>
</ul>

<p><strong>Key Rule:</strong> ::before and ::after REQUIRE content property (even if empty string).</p>`,
        example: `<pre>/* Pseudo-classes */
a:hover { color: blue; }
a:active { color: red; }
a:visited { color: purple; }

input:focus { outline: 2px solid blue; }
input:disabled { opacity: 0.5; }
input:checked + label { font-weight: bold; }

button:focus-visible { 
    outline: 2px solid blue; /* Only keyboard focus */
}

li:first-child { font-weight: bold; }
li:last-child { border-bottom: none; }
li:nth-child(odd) { background: #f5f5f5; }
li:nth-child(3n) { color: red; } /* Every 3rd */

/* :not() */
button:not(:disabled) { cursor: pointer; }
li:not(:last-child) { border-bottom: 1px solid #ccc; }

/* Pseudo-elements */
.quote::before {
    content: '"';
    font-size: 2em;
    color: gray;
}

.link::after {
    content: ' →';
}

/* Icon before text */
.external-link::after {
    content: '';
    display: inline-block;
    width: 12px;
    height: 12px;
    background: url(external-icon.svg);
    margin-left: 4px;
}

/* Decorative elements */
.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, blue, purple);
}

/* Custom selection color */
::selection {
    background: blue;
    color: white;
}

/* Custom placeholder */
input::placeholder {
    color: #999;
    font-style: italic;
}</pre>`
    },

    "CSS Variables (Custom Properties)": {
        concept: `<p><strong>CSS Variables (Custom Properties):</strong></p>
<p>Define reusable values that can be updated dynamically.</p>

<p><strong>Syntax:</strong></p>
<ul>
<li><strong>Define:</strong> --variable-name: value;</li>
<li><strong>Use:</strong> var(--variable-name)</li>
<li><strong>Fallback:</strong> var(--name, fallback-value)</li>
</ul>

<p><strong>Scope:</strong></p>
<ul>
<li>Variables inherit like any CSS property</li>
<li>Defined in :root = global</li>
<li>Defined in element = scoped to that element</li>
</ul>

<p><strong>Benefits:</strong></p>
<ul>
<li>Single source of truth (colors, spacing)</li>
<li>Can be changed with JavaScript</li>
<li>Enable theming (dark mode)</li>
<li>Responsive values (media queries)</li>
</ul>

<p><strong>Interview Q: CSS variables vs SCSS variables?</strong></p>
<p>A: CSS variables work at runtime (can change dynamically, use in JS). SCSS variables compile away (faster, but static). Use CSS variables for theming, SCSS for build-time calculations.</p>`,
        example: `<pre>/* Define global variables in :root */
:root {
    /* Colors */
    --primary: #3498db;
    --secondary: #2ecc71;
    --text: #333;
    --bg: #fff;
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 32px;
    
    /* Typography */
    --font-body: 'Inter', sans-serif;
    --font-heading: 'Poppins', sans-serif;
    
    /* Other */
    --border-radius: 8px;
    --shadow: 0 2px 10px rgba(0,0,0,0.1);
}

/* Use variables */
.button {
    background: var(--primary);
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius);
}

/* Fallback value */
.card {
    color: var(--text-color, #333);
}

/* Dark mode theme */
@media (prefers-color-scheme: dark) {
    :root {
        --text: #fff;
        --bg: #1a1a1a;
        --primary: #5dade2;
    }
}

/* Toggle with class (JS controlled) */
.dark-theme {
    --text: #fff;
    --bg: #1a1a1a;
}

/* Component-scoped variables */
.card {
    --card-padding: var(--spacing-md);
    padding: var(--card-padding);
}

.card.compact {
    --card-padding: var(--spacing-sm);
}

/* Update with JavaScript */
document.documentElement.style.setProperty('--primary', '#e74c3c');

/* Get value in JavaScript */
getComputedStyle(document.documentElement).getPropertyValue('--primary');</pre>`
    },

    "Units: em, rem, vh, vw": {
        concept: `<p><strong>Absolute Units:</strong></p>
<ul>
<li><strong>px</strong> - Pixels. Fixed, doesn't scale with user preferences.</li>
</ul>

<p><strong>Relative Units:</strong></p>
<ul>
<li><strong>em</strong> - Relative to parent's font-size. Compounds!</li>
<li><strong>rem</strong> - Relative to ROOT font-size. Predictable, recommended.</li>
<li><strong>%</strong> - Relative to parent's size</li>
<li><strong>vw</strong> - 1% of viewport width</li>
<li><strong>vh</strong> - 1% of viewport height</li>
<li><strong>vmin</strong> - Smaller of vw/vh</li>
<li><strong>vmax</strong> - Larger of vw/vh</li>
<li><strong>ch</strong> - Width of "0" character</li>
</ul>

<p><strong>When to use what:</strong></p>
<ul>
<li><strong>rem</strong> - Font sizes, spacing (scales with user preference)</li>
<li><strong>px</strong> - Borders, shadows, very small values</li>
<li><strong>%</strong> - Fluid widths relative to parent</li>
<li><strong>vw/vh</strong> - Full-screen sections, viewport-relative</li>
<li><strong>em</strong> - Component-relative spacing (buttons, paddings)</li>
</ul>

<p><strong>Interview Q: em vs rem?</strong></p>
<p>A: em compounds (1.2em in 1.2em parent = 1.44x). rem always from root (predictable). Use rem for global consistency, em for local scaling.</p>`,
        example: `<pre>/* Root font-size (default 16px) */
html {
    font-size: 16px;
}

/* rem - relative to root */
h1 { font-size: 2rem; }     /* 32px */
h2 { font-size: 1.5rem; }   /* 24px */
p { font-size: 1rem; }      /* 16px */

/* em - relative to parent */
.parent {
    font-size: 20px;
}
.child {
    font-size: 1.5em;  /* 30px (1.5 × 20) */
    padding: 1em;      /* 30px (1 × current font) */
}

/* em compounds - be careful! */
.outer { font-size: 1.2em; }   /* 1.2 × 16 = 19.2px */
.inner { font-size: 1.2em; }   /* 1.2 × 19.2 = 23px */

/* Viewport units */
.hero {
    height: 100vh;           /* Full viewport height */
    width: 100vw;            /* Full viewport width */
}

.sidebar {
    width: 25vw;             /* 25% of viewport width */
}

/* Full-screen with padding */
.section {
    min-height: calc(100vh - 80px);  /* Minus header */
}

/* Responsive font with clamp */
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
    /* min: 1.5rem, preferred: 5vw, max: 3rem */
}

/* Mobile viewport issue (address bar) */
.full-height {
    height: 100vh;           /* May cause issues on mobile */
    height: 100dvh;          /* Dynamic vh - better */
}

/* ch for readable line width */
p {
    max-width: 65ch;  /* ~65 characters per line */
}</pre>`
    },

    "CSS Interview Traps": {
        concept: `<p><strong>Q: Why doesn't margin: auto center my element?</strong></p>
<p>A: Element needs defined width AND display: block. For vertical centering, use flexbox.</p>

<p><strong>Q: Why does my z-index not work?</strong></p>
<p>A: Element must be positioned (not static). Also check parent stacking context.</p>

<p><strong>Q: Why do my margins collapse?</strong></p>
<p>A: Vertical margins collapse (larger wins). Only between adjacent blocks. Doesn't happen with padding, flex/grid, floats.</p>

<p><strong>Q: Why doesn't height: 100% work?</strong></p>
<p>A: Parent must have defined height. For viewport, use height: 100vh or set html, body { height: 100% }.</p>

<p><strong>Q: Why is my font size different than I set?</strong></p>
<p>A: User browser settings, rem inheritance, em compounding, or parent font-size override.</p>

<p><strong>Q: Why doesn't transform work on inline elements?</strong></p>
<p>A: Transform only works on block and inline-block elements. Set display: inline-block.</p>

<p><strong>Q: Why is inline-block leaving gaps?</strong></p>
<p>A: Whitespace in HTML becomes space between elements. Use flexbox, or set parent font-size: 0.</p>`,
        example: `<pre>/* Center horizontally - block element */
.center-block {
    width: 200px;        /* REQUIRED */
    margin: 0 auto;
}

/* Center with flexbox (any element) */
.parent {
    display: flex;
    justify-content: center;  /* horizontal */
    align-items: center;      /* vertical */
}

/* z-index fix */
.above {
    position: relative;  /* REQUIRED for z-index */
    z-index: 10;
}

/* Margin collapse - happens */
.box1 { margin-bottom: 20px; }
.box2 { margin-top: 30px; }
/* Gap between them = 30px (not 50px) */

/* Prevent margin collapse */
.parent {
    display: flex;        /* Flex context */
    flex-direction: column;
}
/* OR */
.parent {
    overflow: hidden;     /* New block formatting context */
}

/* height: 100% fix */
html, body {
    height: 100%;
    margin: 0;
}
.full-height {
    height: 100%;
}
/* OR just use */
.full-height {
    height: 100vh;
}

/* Transform on inline elements */
span {
    display: inline-block;  /* Now transform works */
    transform: rotate(10deg);
}

/* Inline-block gap fix */
.inline-block-items {
    display: flex;          /* Just use flexbox */
    gap: 10px;
}</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = cssData;
}
