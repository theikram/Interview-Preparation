// UI Logic for Interview Prep Hub

// State
let currentCategory = null;
let currentTopic = null;
let currentView = 'concept'; // 'concept' or 'example'

// DOM Elements
const navContainer = document.getElementById('navContainer');
const subTopicNav = document.getElementById('subTopicNav');
const contentArea = document.getElementById('contentArea');
const welcomeState = document.getElementById('welcomeState');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const topicTitle = document.getElementById('topicTitle');
const cardContent = document.getElementById('cardContent');
const btnConcept = document.getElementById('btnConcept');
const btnExample = document.getElementById('btnExample');
const categorySearch = document.getElementById('categorySearch');

// Initialize
function init() {
    console.log('Init called');
    console.log('interviewData:', typeof interviewData, interviewData);
    renderSidebar();
    setupEventListeners();
}

// Render Sidebar with all categories
function renderSidebar() {
    console.log('renderSidebar called');
    const categories = Object.keys(interviewData);
    console.log('Categories found:', categories.length, categories);
    navContainer.innerHTML = categories.map(cat => `
        <div class="nav-item" data-category="${cat}">
            ${cat}
        </div>
    `).join('');

    // Add click events
    navContainer.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => selectCategory(item.dataset.category));
    });
}

// Select a category
function selectCategory(category) {
    currentCategory = category;
    currentTopic = null;

    // Update sidebar active state
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.category === category);
    });

    // Update title
    currentCategoryTitle.textContent = category;

    // Show topic chips, hide welcome and content
    welcomeState.classList.add('hidden');
    contentArea.classList.add('hidden');
    subTopicNav.classList.remove('hidden');

    renderTopicChips(category);
}

// Render topic chips for selected category
function renderTopicChips(category) {
    const topics = Object.keys(interviewData[category]);

    subTopicNav.innerHTML = topics.map(topic => `
        <button class="topic-chip" data-topic="${topic}">
            ${topic}
        </button>
    `).join('');

    // Add click events
    subTopicNav.querySelectorAll('.topic-chip').forEach(chip => {
        chip.addEventListener('click', () => selectTopic(chip.dataset.topic));
    });
}

// Select a topic
function selectTopic(topic) {
    currentTopic = topic;
    currentView = 'concept';

    // Update chip active state
    document.querySelectorAll('.topic-chip').forEach(chip => {
        chip.classList.toggle('active', chip.dataset.topic === topic);
    });

    // Update view buttons
    btnConcept.classList.add('active');
    btnExample.classList.remove('active');

    // Show content area
    contentArea.classList.remove('hidden');

    renderContent();
}

// Render content card - Show concept content with embedded code
function renderContent() {
    if (!currentCategory || !currentTopic) return;

    const data = interviewData[currentCategory][currentTopic];

    // Use concept content (contains both explanation and code)
    // Fall back to example if concept doesn't exist
    const content = data.concept || data.example || '<p>No content available.</p>';

    topicTitle.textContent = currentTopic;
    cardContent.innerHTML = content;

    // Apply syntax highlighting with Prism.js
    // Add language class to all pre elements for proper highlighting
    const codeBlocks = cardContent.querySelectorAll('pre');
    codeBlocks.forEach(block => {
        // Detect language from content
        const code = block.textContent;
        let lang = 'javascript'; // default

        if (code.includes('def ') || code.includes('import ') && code.includes(':')) {
            lang = 'python';
        } else if (code.includes('SELECT') || code.includes('INSERT') || code.includes('CREATE TABLE')) {
            lang = 'sql';
        } else if (code.includes('npm ') || code.includes('node ') || code.includes('# ')) {
            lang = 'bash';
        }

        block.className = `language-${lang}`;

        // Wrap content in code tag if not already
        if (!block.querySelector('code')) {
            const codeEl = document.createElement('code');
            codeEl.className = `language-${lang}`;
            codeEl.textContent = block.textContent;
            block.textContent = '';
            block.appendChild(codeEl);
        }
    });

    // Apply Prism highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAllUnder(cardContent);
    }
}

// Setup event listeners
function setupEventListeners() {
    // View toggle buttons
    btnConcept.addEventListener('click', () => {
        if (currentView !== 'concept') {
            currentView = 'concept';
            btnConcept.classList.add('active');
            btnExample.classList.remove('active');
            renderContent();
        }
    });

    btnExample.addEventListener('click', () => {
        if (currentView !== 'example') {
            currentView = 'example';
            btnExample.classList.add('active');
            btnConcept.classList.remove('active');
            renderContent();
        }
    });

    // Category search/filter
    categorySearch.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        document.querySelectorAll('.nav-item').forEach(item => {
            const matches = item.dataset.category.toLowerCase().includes(term);
            item.style.display = matches ? 'block' : 'none';
        });
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!currentCategory) return;

        const chips = Array.from(document.querySelectorAll('.topic-chip'));
        const currentIndex = chips.findIndex(c => c.classList.contains('active'));

        if (e.key === 'ArrowRight' && currentIndex < chips.length - 1) {
            chips[currentIndex + 1].click();
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            chips[currentIndex - 1].click();
        } else if (e.key === 'Tab' && !e.shiftKey && currentView === 'concept') {
            e.preventDefault();
            btnExample.click();
        } else if (e.key === 'Tab' && e.shiftKey && currentView === 'example') {
            e.preventDefault();
            btnConcept.click();
        }
    });
}

// Start the app
init();
