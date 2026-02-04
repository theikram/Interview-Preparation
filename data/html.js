// HTML - Complete Interview Prep (Basics to Advanced)
const htmlData = {
    "HTML Structure": {
        concept: `<p><strong>Every HTML document follows this structure:</strong></p>
<ul>
<li><strong>&lt;!DOCTYPE html&gt;</strong> - Declaration telling browser this is HTML5. Without it, browser enters "quirks mode" with inconsistent rendering.</li>
<li><strong>&lt;html lang="en"&gt;</strong> - Root element. The lang attribute helps screen readers and search engines.</li>
<li><strong>&lt;head&gt;</strong> - Metadata container: title, meta tags, stylesheets, scripts. Not visible on page.</li>
<li><strong>&lt;body&gt;</strong> - All visible content goes here.</li>
</ul>

<p><strong>Essential Head Elements:</strong></p>
<ul>
<li><strong>&lt;meta charset="UTF-8"&gt;</strong> - Character encoding. Always include for proper text display.</li>
<li><strong>&lt;meta name="viewport"&gt;</strong> - CRITICAL for mobile. Controls page width and zoom.</li>
<li><strong>&lt;title&gt;</strong> - Browser tab title. Important for SEO.</li>
<li><strong>&lt;meta name="description"&gt;</strong> - Page description for search engines.</li>
<li><strong>&lt;link rel="stylesheet"&gt;</strong> - External CSS files.</li>
</ul>

<p><strong>Interview Q: What happens without DOCTYPE?</strong></p>
<p>A: Browser enters "quirks mode" - uses old, inconsistent rendering rules. Box model calculates differently, CSS behaves unexpectedly.</p>

<p><strong>Interview Q: Why is viewport meta tag important?</strong></p>
<p>A: Without it, mobile browsers render page at desktop width (~980px) then scale down. With it, page width matches device width for proper responsive design.</p>`,
        example: `<pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;!-- Character encoding (always first) --&gt;
    &lt;meta charset="UTF-8"&gt;
    
    &lt;!-- Mobile responsive (CRITICAL) --&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    
    &lt;!-- SEO meta tags --&gt;
    &lt;meta name="description" content="Page description for search engines"&gt;
    &lt;meta name="keywords" content="keywords, for, seo"&gt;
    &lt;meta name="author" content="Your Name"&gt;
    
    &lt;!-- Open Graph for social sharing --&gt;
    &lt;meta property="og:title" content="Page Title"&gt;
    &lt;meta property="og:description" content="Description for social"&gt;
    &lt;meta property="og:image" content="https://example.com/image.jpg"&gt;
    
    &lt;!-- Page title --&gt;
    &lt;title&gt;My Website&lt;/title&gt;
    
    &lt;!-- Favicon --&gt;
    &lt;link rel="icon" href="/favicon.ico"&gt;
    
    &lt;!-- External CSS --&gt;
    &lt;link rel="stylesheet" href="styles.css"&gt;
    
    &lt;!-- Google Fonts --&gt;
    &lt;link rel="preconnect" href="https://fonts.googleapis.com"&gt;
    &lt;link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- All visible content here --&gt;
    
    &lt;!-- Scripts at end for performance --&gt;
    &lt;script src="app.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>`
    },

    "Semantic HTML": {
        concept: `<p><strong>What is Semantic HTML?</strong></p>
<p>Using HTML elements that describe their MEANING and PURPOSE, not just appearance. Semantic = meaningful.</p>

<p><strong>Semantic Elements:</strong></p>
<ul>
<li><strong>&lt;header&gt;</strong> - Introductory content, typically logo + navigation</li>
<li><strong>&lt;nav&gt;</strong> - Navigation links. Can have multiple per page.</li>
<li><strong>&lt;main&gt;</strong> - Main unique content. ONE per page only.</li>
<li><strong>&lt;article&gt;</strong> - Self-contained content (blog post, news article, comment)</li>
<li><strong>&lt;section&gt;</strong> - Thematic grouping with a heading</li>
<li><strong>&lt;aside&gt;</strong> - Sidebar, tangentially related content, ads</li>
<li><strong>&lt;footer&gt;</strong> - Footer for page or section</li>
<li><strong>&lt;figure&gt; + &lt;figcaption&gt;</strong> - Image/diagram with caption</li>
<li><strong>&lt;time&gt;</strong> - Dates/times with machine-readable format</li>
<li><strong>&lt;address&gt;</strong> - Contact information</li>
<li><strong>&lt;mark&gt;</strong> - Highlighted text</li>
</ul>

<p><strong>Benefits of Semantic HTML:</strong></p>
<ul>
<li><strong>Accessibility:</strong> Screen readers understand page structure</li>
<li><strong>SEO:</strong> Search engines understand content hierarchy</li>
<li><strong>Maintainability:</strong> Easier for developers to read</li>
<li><strong>Consistency:</strong> Standardized meaning across browsers</li>
</ul>

<p><strong>Interview Q: &lt;div&gt; vs &lt;section&gt; vs &lt;article&gt;?</strong></p>
<p>A: &lt;div&gt; = no semantic meaning, generic container. &lt;section&gt; = thematic group WITH heading. &lt;article&gt; = self-contained, could be taken out and still make sense.</p>`,
        example: `<pre>&lt;!-- BAD: "Div soup" - no meaning --&gt;
&lt;div class="header"&gt;
    &lt;div class="nav"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="main"&gt;
    &lt;div class="article"&gt;...&lt;/div&gt;
    &lt;div class="sidebar"&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;div class="footer"&gt;...&lt;/div&gt;

&lt;!-- GOOD: Semantic structure --&gt;
&lt;header&gt;
    &lt;nav&gt;
        &lt;ul&gt;
            &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
    &lt;article&gt;
        &lt;header&gt;
            &lt;h1&gt;Article Title&lt;/h1&gt;
            &lt;time datetime="2024-01-15"&gt;January 15, 2024&lt;/time&gt;
        &lt;/header&gt;
        
        &lt;section&gt;
            &lt;h2&gt;Introduction&lt;/h2&gt;
            &lt;p&gt;Content...&lt;/p&gt;
        &lt;/section&gt;
        
        &lt;section&gt;
            &lt;h2&gt;Main Points&lt;/h2&gt;
            &lt;p&gt;Content...&lt;/p&gt;
        &lt;/section&gt;
        
        &lt;figure&gt;
            &lt;img src="chart.png" alt="Data chart showing trends"&gt;
            &lt;figcaption&gt;Figure 1: Trend analysis&lt;/figcaption&gt;
        &lt;/figure&gt;
    &lt;/article&gt;
    
    &lt;aside&gt;
        &lt;h2&gt;Related Articles&lt;/h2&gt;
        &lt;!-- Sidebar content --&gt;
    &lt;/aside&gt;
&lt;/main&gt;

&lt;footer&gt;
    &lt;address&gt;
        Contact: &lt;a href="mailto:info@example.com"&gt;info@example.com&lt;/a&gt;
    &lt;/address&gt;
    &lt;p&gt;&copy; 2024 Company Name&lt;/p&gt;
&lt;/footer&gt;</pre>`
    },

    "Lists: OL, UL, DL": {
        concept: `<p><strong>Three Types of Lists in HTML:</strong></p>

<p><strong>1. Unordered List (&lt;ul&gt;):</strong></p>
<ul>
<li>Bullet points, no specific order</li>
<li>Use for: navigation menus, feature lists, any non-sequential items</li>
</ul>

<p><strong>2. Ordered List (&lt;ol&gt;):</strong></p>
<ul>
<li>Numbered items, sequence matters</li>
<li>Use for: step-by-step instructions, rankings, procedures</li>
<li>Attributes: type (1, A, a, I, i), start, reversed</li>
</ul>

<p><strong>3. Description List (&lt;dl&gt;):</strong></p>
<ul>
<li>Term + description pairs</li>
<li>Use for: glossaries, FAQs, metadata, key-value pairs</li>
<li>&lt;dt&gt; = term, &lt;dd&gt; = description</li>
</ul>

<p><strong>Nesting:</strong> Lists can be nested inside other lists for sub-items.</p>

<p><strong>Interview Q: When use dl vs ul?</strong></p>
<p>A: Use &lt;dl&gt; when items have term-definition relationship (FAQ, glossary). Use &lt;ul&gt; for simple collections without that relationship.</p>`,
        example: `<pre>&lt;!-- Unordered List --&gt;
&lt;ul&gt;
    &lt;li&gt;First item&lt;/li&gt;
    &lt;li&gt;Second item
        &lt;ul&gt;
            &lt;li&gt;Nested item&lt;/li&gt;
            &lt;li&gt;Another nested&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Third item&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Ordered List with attributes --&gt;
&lt;ol type="1" start="5"&gt;  &lt;!-- Starts at 5 --&gt;
    &lt;li&gt;Step five&lt;/li&gt;
    &lt;li&gt;Step six&lt;/li&gt;
&lt;/ol&gt;

&lt;ol type="A"&gt;  &lt;!-- A, B, C --&gt;
    &lt;li&gt;Option A&lt;/li&gt;
    &lt;li&gt;Option B&lt;/li&gt;
&lt;/ol&gt;

&lt;ol reversed&gt;  &lt;!-- Countdown --&gt;
    &lt;li&gt;Third place&lt;/li&gt;
    &lt;li&gt;Second place&lt;/li&gt;
    &lt;li&gt;First place&lt;/li&gt;
&lt;/ol&gt;

&lt;!-- Description List (FAQ example) --&gt;
&lt;dl&gt;
    &lt;dt&gt;What is HTML?&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language - the standard language for web pages.&lt;/dd&gt;
    
    &lt;dt&gt;What is CSS?&lt;/dt&gt;
    &lt;dd&gt;Cascading Style Sheets - used for styling HTML elements.&lt;/dd&gt;
    
    &lt;!-- Multiple descriptions per term --&gt;
    &lt;dt&gt;JavaScript&lt;/dt&gt;
    &lt;dd&gt;A programming language for the web.&lt;/dd&gt;
    &lt;dd&gt;Can run in browser and on server (Node.js).&lt;/dd&gt;
&lt;/dl&gt;

&lt;!-- Navigation using list (common pattern) --&gt;
&lt;nav&gt;
    &lt;ul&gt;
        &lt;li&gt;&lt;a href="/"&gt;Home&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
        &lt;li&gt;&lt;a href="/contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
&lt;/nav&gt;</pre>`
    },

    "Tables Structure": {
        concept: `<p><strong>HTML Table Elements:</strong></p>
<ul>
<li><strong>&lt;table&gt;</strong> - Container for the table</li>
<li><strong>&lt;thead&gt;</strong> - Table header section (column titles)</li>
<li><strong>&lt;tbody&gt;</strong> - Table body (main data)</li>
<li><strong>&lt;tfoot&gt;</strong> - Table footer (summaries, totals)</li>
<li><strong>&lt;tr&gt;</strong> - Table row</li>
<li><strong>&lt;th&gt;</strong> - Header cell (bold, centered by default)</li>
<li><strong>&lt;td&gt;</strong> - Data cell</li>
</ul>

<p><strong>Spanning:</strong></p>
<ul>
<li><strong>colspan="n"</strong> - Cell spans n columns</li>
<li><strong>rowspan="n"</strong> - Cell spans n rows</li>
</ul>

<p><strong>Accessibility:</strong></p>
<ul>
<li>Use &lt;th scope="col"&gt; or scope="row" for headers</li>
<li>Add &lt;caption&gt; to describe table content</li>
</ul>

<p><strong>Interview Q: Why use thead/tbody/tfoot?</strong></p>
<p>A: Semantics (screen readers understand structure), styling (CSS can target sections), behavior (tbody can scroll while head fixed), printing (header repeated on each page).</p>`,
        example: `<pre>&lt;table&gt;
    &lt;caption&gt;Monthly Sales Report&lt;/caption&gt;
    
    &lt;thead&gt;
        &lt;tr&gt;
            &lt;th scope="col"&gt;Product&lt;/th&gt;
            &lt;th scope="col"&gt;Q1&lt;/th&gt;
            &lt;th scope="col"&gt;Q2&lt;/th&gt;
            &lt;th scope="col"&gt;Q3&lt;/th&gt;
            &lt;th scope="col"&gt;Q4&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;th scope="row"&gt;Laptops&lt;/th&gt;
            &lt;td&gt;$10,000&lt;/td&gt;
            &lt;td&gt;$12,000&lt;/td&gt;
            &lt;td&gt;$11,000&lt;/td&gt;
            &lt;td&gt;$15,000&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;th scope="row"&gt;Phones&lt;/th&gt;
            &lt;td&gt;$8,000&lt;/td&gt;
            &lt;td&gt;$9,000&lt;/td&gt;
            &lt;td&gt;$10,000&lt;/td&gt;
            &lt;td&gt;$12,000&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;th scope="row"&gt;Total&lt;/th&gt;
            &lt;td&gt;$18,000&lt;/td&gt;
            &lt;td&gt;$21,000&lt;/td&gt;
            &lt;td&gt;$21,000&lt;/td&gt;
            &lt;td&gt;$27,000&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;

&lt;!-- Spanning example --&gt;
&lt;table&gt;
    &lt;tr&gt;
        &lt;th colspan="2"&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;First&lt;/td&gt;
        &lt;td&gt;Last&lt;/td&gt;
        &lt;td rowspan="2"&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;John&lt;/td&gt;
        &lt;td&gt;Doe&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;</pre>`
    },

    "Forms: Action & Method": {
        concept: `<p><strong>Form Basics:</strong></p>
<p>Forms collect user input and send it to a server for processing.</p>

<p><strong>Key Attributes:</strong></p>
<ul>
<li><strong>action</strong> - URL where form data is sent</li>
<li><strong>method</strong> - HTTP method: GET or POST</li>
<li><strong>enctype</strong> - How data is encoded (important for file uploads)</li>
</ul>

<p><strong>GET vs POST:</strong></p>
<table>
<tr><th>GET</th><th>POST</th></tr>
<tr><td>Data in URL query string</td><td>Data in request body</td></tr>
<tr><td>Visible in browser history</td><td>Not visible in URL</td></tr>
<tr><td>Can be bookmarked</td><td>Cannot be bookmarked</td></tr>
<tr><td>Limited length (~2000 chars)</td><td>No size limit</td></tr>
<tr><td>Cached by browser</td><td>Not cached</td></tr>
<tr><td>Use for: search, filters</td><td>Use for: login, signup, sensitive data</td></tr>
</table>

<p><strong>enctype values:</strong></p>
<ul>
<li><strong>application/x-www-form-urlencoded</strong> - Default. Key=value pairs.</li>
<li><strong>multipart/form-data</strong> - Required for file uploads!</li>
<li><strong>text/plain</strong> - Rarely used.</li>
</ul>

<p><strong>Interview Q: When use GET vs POST?</strong></p>
<p>A: GET for idempotent operations (search, read). POST for state changes (create, update, delete) and sensitive data (passwords).</p>`,
        example: `<pre>&lt;!-- GET - Search form --&gt;
&lt;form action="/search" method="GET"&gt;
    &lt;input type="text" name="q" placeholder="Search..."&gt;
    &lt;button type="submit"&gt;Search&lt;/button&gt;
&lt;/form&gt;
&lt;!-- Submits to: /search?q=user+query --&gt;

&lt;!-- POST - Login form --&gt;
&lt;form action="/login" method="POST"&gt;
    &lt;input type="email" name="email" required&gt;
    &lt;input type="password" name="password" required&gt;
    &lt;button type="submit"&gt;Login&lt;/button&gt;
&lt;/form&gt;

&lt;!-- File upload - MUST use enctype --&gt;
&lt;form action="/upload" method="POST" enctype="multipart/form-data"&gt;
    &lt;input type="file" name="document" accept=".pdf,.doc"&gt;
    &lt;button type="submit"&gt;Upload&lt;/button&gt;
&lt;/form&gt;

&lt;!-- Form with all attributes --&gt;
&lt;form 
    action="/api/submit"
    method="POST"
    enctype="application/x-www-form-urlencoded"
    autocomplete="on"
    novalidate  &lt;!-- Disable browser validation --&gt;
    target="_blank"  &lt;!-- Open in new tab --&gt;
&gt;
    &lt;!-- form fields --&gt;
&lt;/form&gt;

&lt;!-- JavaScript form handling --&gt;
&lt;form id="myForm"&gt;
    &lt;input name="username"&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;

&lt;script&gt;
document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();  // Stop default submission
    const formData = new FormData(e.target);
    // Process with fetch API
    fetch('/api/submit', {
        method: 'POST',
        body: formData
    });
});
&lt;/script&gt;</pre>`
    },

    "Input Types": {
        concept: `<p><strong>HTML5 Input Types:</strong></p>

<p><strong>Text Inputs:</strong></p>
<ul>
<li><strong>text</strong> - Single line text</li>
<li><strong>password</strong> - Hidden characters</li>
<li><strong>email</strong> - Email with validation</li>
<li><strong>url</strong> - URL with validation</li>
<li><strong>tel</strong> - Phone number (no validation, shows numpad on mobile)</li>
<li><strong>search</strong> - Search field with clear button</li>
</ul>

<p><strong>Number/Date Inputs:</strong></p>
<ul>
<li><strong>number</strong> - Numeric with spinner</li>
<li><strong>range</strong> - Slider control</li>
<li><strong>date</strong> - Date picker</li>
<li><strong>time</strong> - Time picker</li>
<li><strong>datetime-local</strong> - Date and time</li>
<li><strong>month</strong> - Month/year</li>
<li><strong>week</strong> - Week number</li>
</ul>

<p><strong>Selection Inputs:</strong></p>
<ul>
<li><strong>checkbox</strong> - Multiple selections</li>
<li><strong>radio</strong> - Single selection from group</li>
<li><strong>file</strong> - File upload</li>
<li><strong>color</strong> - Color picker</li>
</ul>

<p><strong>Other:</strong></p>
<ul>
<li><strong>hidden</strong> - Not visible, for data submission</li>
<li><strong>submit</strong> - Submit button</li>
<li><strong>reset</strong> - Reset form</li>
<li><strong>button</strong> - Generic button (use with JS)</li>
</ul>`,
        example: `<pre>&lt;!-- Text inputs --&gt;
&lt;input type="text" placeholder="Enter name"&gt;
&lt;input type="password" placeholder="Password"&gt;
&lt;input type="email" placeholder="email@example.com"&gt;
&lt;input type="url" placeholder="https://..."&gt;
&lt;input type="tel" placeholder="Phone number"&gt;
&lt;input type="search" placeholder="Search..."&gt;

&lt;!-- Number and range --&gt;
&lt;input type="number" min="0" max="100" step="5" value="50"&gt;
&lt;input type="range" min="0" max="100" value="50"&gt;

&lt;!-- Date and time --&gt;
&lt;input type="date" min="2024-01-01" max="2024-12-31"&gt;
&lt;input type="time"&gt;
&lt;input type="datetime-local"&gt;
&lt;input type="month"&gt;

&lt;!-- Checkboxes (multiple selection) --&gt;
&lt;label&gt;&lt;input type="checkbox" name="skills" value="html"&gt; HTML&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="skills" value="css"&gt; CSS&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="skills" value="js"&gt; JavaScript&lt;/label&gt;

&lt;!-- Radio buttons (single selection) --&gt;
&lt;label&gt;&lt;input type="radio" name="gender" value="male"&gt; Male&lt;/label&gt;
&lt;label&gt;&lt;input type="radio" name="gender" value="female"&gt; Female&lt;/label&gt;

&lt;!-- File upload --&gt;
&lt;input type="file" accept="image/*"&gt;  &lt;!-- Images only --&gt;
&lt;input type="file" accept=".pdf,.doc" multiple&gt;  &lt;!-- Multiple files --&gt;

&lt;!-- Color picker --&gt;
&lt;input type="color" value="#ff0000"&gt;

&lt;!-- Hidden field --&gt;
&lt;input type="hidden" name="userId" value="12345"&gt;

&lt;!-- Buttons --&gt;
&lt;input type="submit" value="Submit Form"&gt;
&lt;input type="reset" value="Clear Form"&gt;
&lt;button type="button" onclick="doSomething()"&gt;Click Me&lt;/button&gt;</pre>`
    },

    "Labels & Accessibility": {
        concept: `<p><strong>Why Labels Matter:</strong></p>
<ul>
<li>Screen readers announce label when input is focused</li>
<li>Clicking label focuses/activates the input</li>
<li>Required for accessibility compliance (WCAG)</li>
</ul>

<p><strong>Two Ways to Associate Labels:</strong></p>
<ol>
<li><strong>for/id method:</strong> Label's for matches input's id</li>
<li><strong>Wrapping method:</strong> Input inside label element</li>
</ol>

<p><strong>Form Accessibility Best Practices:</strong></p>
<ul>
<li>Every input needs a label</li>
<li>Use fieldset/legend for groups (radio buttons)</li>
<li>Add aria-describedby for help text</li>
<li>Use aria-required or HTML required</li>
<li>Provide error messages accessibly</li>
<li>Ensure keyboard navigation works</li>
</ul>

<p><strong>Interview Q: Why use for attribute on labels?</strong></p>
<p>A: 1) Clicking label focuses input - better UX, especially for checkboxes. 2) Screen readers associate them - essential for accessibility. 3) Larger click target.</p>`,
        example: `<pre>&lt;!-- Method 1: for/id association --&gt;
&lt;label for="email"&gt;Email Address:&lt;/label&gt;
&lt;input type="email" id="email" name="email"&gt;

&lt;!-- Method 2: Wrapping --&gt;
&lt;label&gt;
    Email Address:
    &lt;input type="email" name="email"&gt;
&lt;/label&gt;

&lt;!-- With help text (aria-describedby) --&gt;
&lt;label for="password"&gt;Password:&lt;/label&gt;
&lt;input 
    type="password" 
    id="password" 
    aria-describedby="password-help"
    required
&gt;
&lt;small id="password-help"&gt;Must be at least 8 characters&lt;/small&gt;

&lt;!-- Fieldset for radio/checkbox groups --&gt;
&lt;fieldset&gt;
    &lt;legend&gt;Select your gender:&lt;/legend&gt;
    &lt;label&gt;&lt;input type="radio" name="gender" value="male"&gt; Male&lt;/label&gt;
    &lt;label&gt;&lt;input type="radio" name="gender" value="female"&gt; Female&lt;/label&gt;
    &lt;label&gt;&lt;input type="radio" name="gender" value="other"&gt; Other&lt;/label&gt;
&lt;/fieldset&gt;

&lt;!-- Accessible error messages --&gt;
&lt;label for="username"&gt;Username:&lt;/label&gt;
&lt;input 
    type="text" 
    id="username"
    aria-invalid="true"
    aria-describedby="username-error"
&gt;
&lt;span id="username-error" role="alert"&gt;Username is required&lt;/span&gt;

&lt;!-- Placeholder is NOT a label replacement! --&gt;
&lt;!-- BAD: only placeholder --&gt;
&lt;input type="email" placeholder="Enter email"&gt;

&lt;!-- GOOD: label + optional placeholder --&gt;
&lt;label for="email"&gt;Email:&lt;/label&gt;
&lt;input type="email" id="email" placeholder="you@example.com"&gt;</pre>`
    },

    "Form Validation": {
        concept: `<p><strong>HTML5 Built-in Validation:</strong></p>
<p>Browser provides validation without JavaScript. Good for basic cases.</p>

<p><strong>Validation Attributes:</strong></p>
<ul>
<li><strong>required</strong> - Field must be filled</li>
<li><strong>minlength / maxlength</strong> - Text length limits</li>
<li><strong>min / max</strong> - Number/date range</li>
<li><strong>pattern</strong> - Regex pattern to match</li>
<li><strong>type="email/url"</strong> - Built-in format validation</li>
<li><strong>step</strong> - Valid number increments</li>
</ul>

<p><strong>CSS Pseudo-classes:</strong></p>
<ul>
<li>:valid / :invalid - Based on validation state</li>
<li>:required / :optional</li>
<li>:in-range / :out-of-range (for numbers)</li>
</ul>

<p><strong>JavaScript Validation API:</strong></p>
<ul>
<li>checkValidity() - Returns boolean</li>
<li>reportValidity() - Shows validation message</li>
<li>setCustomValidity(msg) - Custom error message</li>
<li>validity object - Contains validation details</li>
</ul>

<p><strong>Interview Q: Client vs server validation?</strong></p>
<p>A: Client = better UX (instant feedback). Server = REQUIRED for security (client can be bypassed). Always do BOTH.</p>`,
        example: `<pre>&lt;form id="signup"&gt;
    &lt;!-- Required field --&gt;
    &lt;input type="text" name="name" required&gt;
    
    &lt;!-- Length limits --&gt;
    &lt;input type="text" name="username" minlength="3" maxlength="20" required&gt;
    
    &lt;!-- Number range --&gt;
    &lt;input type="number" name="age" min="18" max="120"&gt;
    
    &lt;!-- Pattern (regex) --&gt;
    &lt;input 
        type="text" 
        name="phone" 
        pattern="[0-9]{3}-[0-9]{4}"
        title="Format: 123-4567"
    &gt;
    
    &lt;!-- Strong password pattern --&gt;
    &lt;input 
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        title="Must include uppercase, lowercase, number, 8+ chars"
    &gt;
    
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;

&lt;!-- CSS for validation states --&gt;
&lt;style&gt;
input:valid { border-color: green; }
input:invalid { border-color: red; }
input:focus:invalid { outline-color: red; }
&lt;/style&gt;

&lt;!-- JavaScript custom validation --&gt;
&lt;script&gt;
const form = document.getElementById('signup');
const password = document.querySelector('[name="password"]');
const confirmPassword = document.querySelector('[name="confirm"]');

confirmPassword.addEventListener('input', () => {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match');
    } else {
        confirmPassword.setCustomValidity('');  // Clear error
    }
});

form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
    }
});
&lt;/script&gt;</pre>`
    },

    "Block vs Inline Elements": {
        concept: `<p><strong>Block Elements:</strong></p>
<ul>
<li>Take full width available</li>
<li>Start on a new line</li>
<li>Can set width, height, margin, padding</li>
<li>Examples: div, p, h1-h6, section, article, header, footer, ul, ol, li, form, table</li>
</ul>

<p><strong>Inline Elements:</strong></p>
<ul>
<li>Only take width of content</li>
<li>Flow with text, don't break line</li>
<li>Can't set width/height (use display: inline-block)</li>
<li>Vertical margin/padding doesn't affect layout</li>
<li>Examples: span, a, strong, em, img, input, label, button</li>
</ul>

<p><strong>Inline-Block:</strong></p>
<ul>
<li>Flows inline but CAN have width/height</li>
<li>Best of both worlds</li>
</ul>

<p><strong>Interview Q: Can you put block inside inline?</strong></p>
<p>A: Historically no. In HTML5, &lt;a&gt; can wrap block elements. But generally, block inside inline is invalid and causes issues.</p>`,
        example: `<pre>&lt;!-- Block elements --&gt;
&lt;div&gt;This takes full width&lt;/div&gt;
&lt;p&gt;Paragraph - also block&lt;/p&gt;
&lt;h1&gt;Heading - block&lt;/h1&gt;

&lt;!-- Inline elements --&gt;
&lt;span&gt;Inline&lt;/span&gt; &lt;span&gt;flows&lt;/span&gt; &lt;span&gt;together&lt;/span&gt;
&lt;p&gt;Text with &lt;strong&gt;bold&lt;/strong&gt; and &lt;em&gt;italic&lt;/em&gt;&lt;/p&gt;

&lt;!-- Images are inline but behave special --&gt;
&lt;img src="a.jpg"&gt; &lt;img src="b.jpg"&gt;

&lt;!-- Changing display with CSS --&gt;
&lt;style&gt;
/* Make inline behave as block */
span.block {
    display: block;
    width: 100%;
}

/* Make block behave as inline */
div.inline {
    display: inline;
}

/* Best of both */
span.inline-block {
    display: inline-block;
    width: 100px;
    height: 50px;
    background: blue;
}

/* Navigation example - li as inline */
nav ul li {
    display: inline-block;
    margin-right: 20px;
}
&lt;/style&gt;

&lt;!-- HTML5 allows block in anchor --&gt;
&lt;a href="/article"&gt;
    &lt;article&gt;
        &lt;h2&gt;Article Title&lt;/h2&gt;
        &lt;p&gt;Description...&lt;/p&gt;
    &lt;/article&gt;
&lt;/a&gt;</pre>`
    },

    "Data Attributes": {
        concept: `<p><strong>What are Data Attributes?</strong></p>
<p>Custom attributes to store extra information on elements. Prefix with data- followed by your name.</p>

<p><strong>Naming Rules:</strong></p>
<ul>
<li>Must start with data-</li>
<li>Only lowercase letters, numbers, hyphens</li>
<li>In JS, hyphens convert to camelCase</li>
</ul>

<p><strong>Accessing in JavaScript:</strong></p>
<ul>
<li><strong>element.dataset.propertyName</strong> - Recommended</li>
<li><strong>element.getAttribute('data-property-name')</strong> - Alternative</li>
</ul>

<p><strong>Use Cases:</strong></p>
<ul>
<li>Store configuration for JavaScript</li>
<li>Pass data to event handlers</li>
<li>CSS styling based on state</li>
<li>Framework bindings (React, Vue, etc.)</li>
</ul>

<p><strong>Interview Q: Are data attributes accessible?</strong></p>
<p>A: Screen readers don't automatically read them. They're for scripts, not content. Use proper attributes for accessibility.</p>`,
        example: `<pre>&lt;!-- Basic data attributes --&gt;
&lt;article 
    data-id="123"
    data-category="technology"
    data-author-name="John Doe"
&gt;
    &lt;h1&gt;Article Title&lt;/h1&gt;
&lt;/article&gt;

&lt;!-- Button with action data --&gt;
&lt;button 
    data-action="delete"
    data-user-id="456"
    data-confirm="Are you sure?"
&gt;
    Delete User
&lt;/button&gt;

&lt;!-- Access in JavaScript --&gt;
&lt;script&gt;
const article = document.querySelector('article');

// dataset method (recommended)
console.log(article.dataset.id);         // "123"
console.log(article.dataset.category);   // "technology"
console.log(article.dataset.authorName); // "John Doe" (camelCase!)

// getAttribute method
console.log(article.getAttribute('data-author-name')); // "John Doe"

// Set data attribute
article.dataset.views = "1000";

// Event delegation with data attributes
document.addEventListener('click', (e) => {
    if (e.target.dataset.action === 'delete') {
        const userId = e.target.dataset.userId;
        const message = e.target.dataset.confirm;
        if (confirm(message)) {
            deleteUser(userId);
        }
    }
});
&lt;/script&gt;

&lt;!-- CSS styling with data attributes --&gt;
&lt;style&gt;
[data-status="active"] { color: green; }
[data-status="inactive"] { color: red; }
[data-priority="high"] { font-weight: bold; }
&lt;/style&gt;

&lt;span data-status="active"&gt;Online&lt;/span&gt;
&lt;span data-status="inactive"&gt;Offline&lt;/span&gt;</pre>`
    },

    "HTML Interview Questions": {
        concept: `<p><strong>Q: What is doctype and why is it needed?</strong></p>
<p>A: Declaration that tells browser to use standards mode. Without it, browsers use quirks mode with inconsistent rendering.</p>

<p><strong>Q: What is semantic HTML?</strong></p>
<p>A: Using elements that describe their meaning (article, nav, aside) instead of generic divs. Benefits: accessibility, SEO, maintainability.</p>

<p><strong>Q: Difference between id and class?</strong></p>
<p>A: id = unique (one per page), higher specificity. class = reusable, can apply to many elements.</p>

<p><strong>Q: What are empty/void elements?</strong></p>
<p>A: Elements that can't have children: &lt;img&gt;, &lt;br&gt;, &lt;hr&gt;, &lt;input&gt;, &lt;meta&gt;, &lt;link&gt;. Self-closing.</p>

<p><strong>Q: async vs defer for scripts?</strong></p>
<p>A: Both download in parallel. async executes immediately when ready (any order). defer waits until HTML parsed (maintains order). Use defer for most scripts.</p>

<p><strong>Q: localStorage vs sessionStorage vs cookies?</strong></p>
<p>A: localStorage persists forever (~5MB). sessionStorage cleared on tab close (~5MB). Cookies sent with requests (~4KB), can set expiry.</p>

<p><strong>Q: What is accessibility (a11y)?</strong></p>
<p>A: Making websites usable by everyone, including people with disabilities. Use semantic HTML, proper labels, alt text, keyboard navigation.</p>`,
        example: `<pre>// async vs defer behavior

&lt;!-- No attribute: blocks HTML parsing --&gt;
&lt;script src="app.js"&gt;&lt;/script&gt;

&lt;!-- async: download parallel, execute when ready --&gt;
&lt;script async src="analytics.js"&gt;&lt;/script&gt;

&lt;!-- defer: download parallel, execute after HTML parsed --&gt;
&lt;script defer src="app.js"&gt;&lt;/script&gt;

// When to use:
// defer - for scripts that need DOM (most scripts)
// async - for independent scripts (analytics, ads)

// Storage comparison
localStorage.setItem('key', 'value');
localStorage.getItem('key');     // Persists forever
localStorage.removeItem('key');

sessionStorage.setItem('key', 'value');
// Cleared when tab closes

document.cookie = "name=value; expires=Fri, 31 Dec 2024 23:59:59 GMT";
// Sent with every request, limited size

// Common void elements
&lt;img src="photo.jpg" alt="Description"&gt;
&lt;br&gt;
&lt;hr&gt;
&lt;input type="text"&gt;
&lt;meta name="description" content="..."&gt;
&lt;link rel="stylesheet" href="style.css"&gt;

// Accessibility quick check:
// 1. All images have alt text
// 2. All form inputs have labels
// 3. Headings in proper order (h1, h2, h3)
// 4. Color contrast is sufficient
// 5. Site works with keyboard only</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = htmlData;
}
