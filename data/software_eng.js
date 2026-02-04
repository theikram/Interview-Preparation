// Software Engineering - Interview Prep
const softwareEngData = {
    "SDLC Phases": {
        concept: `<p><strong>Software Development Life Cycle (SDLC):</strong></p>
<p>Framework for planning, creating, testing, and deploying software.</p>

<p><strong>Phases:</strong></p>
<ol>
<li><strong>Planning/Requirements</strong> - What needs to be built, scope, feasibility</li>
<li><strong>Design</strong> - Architecture, database design, UI mockups</li>
<li><strong>Development</strong> - Writing actual code</li>
<li><strong>Testing</strong> - Finding and fixing bugs</li>
<li><strong>Deployment</strong> - Release to production</li>
<li><strong>Maintenance</strong> - Updates, bug fixes, support</li>
</ol>

<p><strong>SDLC Models:</strong></p>
<ul>
<li><strong>Waterfall</strong> - Sequential, each phase completes before next</li>
<li><strong>Agile</strong> - Iterative, continuous delivery</li>
<li><strong>V-Model</strong> - Verification at each phase</li>
<li><strong>Spiral</strong> - Risk-driven iterations</li>
</ul>

<p><strong>Interview Q: Waterfall vs Agile?</strong></p>
<p>A: Waterfall is linear (finish phase before next), good for fixed requirements. Agile is iterative (continuous feedback), good for evolving requirements.</p>`,
        example: `<pre># SDLC in Practice

1. REQUIREMENTS
   - User stories ("As a user, I want to...")
   - Functional requirements (what system does)
   - Non-functional requirements (performance, security)
   - Acceptance criteria

2. DESIGN
   - System architecture diagrams
   - Database schema design
   - API contracts
   - UI/UX wireframes
   - Technology stack decisions

3. DEVELOPMENT
   - Set up development environment
   - Write code following standards
   - Code reviews
   - Version control (Git)
   - Documentation

4. TESTING
   - Unit tests (individual functions)
   - Integration tests (components together)
   - End-to-end tests (full user flows)
   - Performance testing
   - Security testing

5. DEPLOYMENT
   - Staging environment testing
   - Production deployment
   - Monitoring setup
   - Rollback plan

6. MAINTENANCE
   - Bug fixes
   - Feature updates
   - Performance optimization
   - Security patches

# Modern approach combines these iteratively:
# Sprint 1 → Plan → Design → Build → Test → Deploy
# Sprint 2 → Plan → Design → Build → Test → Deploy
# ... (continuous)</pre>`
    },

    "Agile & Scrum": {
        concept: `<p><strong>Agile Principles:</strong></p>
<ul>
<li>Individuals and interactions over processes</li>
<li>Working software over documentation</li>
<li>Customer collaboration over contracts</li>
<li>Responding to change over following a plan</li>
</ul>

<p><strong>Scrum Framework:</strong></p>
<ul>
<li><strong>Sprint</strong> - Fixed time period (1-4 weeks)</li>
<li><strong>Product Backlog</strong> - Prioritized list of features</li>
<li><strong>Sprint Backlog</strong> - Items for current sprint</li>
<li><strong>Daily Standup</strong> - Quick sync meeting</li>
<li><strong>Sprint Review</strong> - Demo completed work</li>
<li><strong>Sprint Retrospective</strong> - What to improve</li>
</ul>

<p><strong>Scrum Roles:</strong></p>
<ul>
<li><strong>Product Owner</strong> - Defines what to build, priorities</li>
<li><strong>Scrum Master</strong> - Facilitates process, removes blockers</li>
<li><strong>Development Team</strong> - Builds the product</li>
</ul>

<p><strong>Interview Q: What is a user story?</strong></p>
<p>A: "As a [user], I want [feature] so that [benefit]." Describes functionality from user perspective, includes acceptance criteria.</p>`,
        example: `<pre># User Story Format
As a [registered user]
I want to [reset my password]
So that [I can regain access if I forget it]

Acceptance Criteria:
- [ ] Email with reset link sent within 1 minute
- [ ] Link expires after 24 hours
- [ ] New password must be 8+ characters
- [ ] Success message shown after reset

# Sprint Planning
Story Points: Relative effort estimation
- 1 point: Simple, few hours
- 3 points: Half day to day
- 5 points: 1-2 days
- 8 points: Few days
- 13 points: Week or more (should split)

Velocity: Average points completed per sprint

# Daily Standup (15 min max)
Each person answers:
1. What did I do yesterday?
2. What will I do today?
3. Any blockers?

# Sprint Board (Kanban-style)
| To Do | In Progress | In Review | Done |
|-------|-------------|-----------|------|
| Story3| Story2      | Story1    |      |

# Sprint Retrospective
What went well?
- Good collaboration
- Met all commitments

What could improve?
- More testing time
- Better story refinement

Action items:
- Add testing buffer to estimates
- Hold refinement session mid-sprint</pre>`
    },

    "MVP Concept": {
        concept: `<p><strong>What is MVP?</strong></p>
<p>Minimum Viable Product - smallest version of product that delivers value and allows learning from real users.</p>

<p><strong>Purpose:</strong></p>
<ul>
<li>Validate idea with minimal investment</li>
<li>Get real user feedback early</li>
<li>Learn what customers actually want</li>
<li>Fail fast, pivot if needed</li>
</ul>

<p><strong>MVP Characteristics:</strong></p>
<ul>
<li>Core features only (no nice-to-haves)</li>
<li>Solves one problem well</li>
<li>Usable by real users</li>
<li>Built quickly (weeks, not months)</li>
</ul>

<p><strong>MVP Process:</strong></p>
<ol>
<li>Identify core problem</li>
<li>Define essential features</li>
<li>Build minimum solution</li>
<li>Release to early adopters</li>
<li>Gather feedback</li>
<li>Iterate or pivot</li>
</ol>

<p><strong>Interview Q: MVP example?</strong></p>
<p>A: Dropbox MVP was just a video showing the concept. Airbnb MVP was founders renting their own apartment. Test demand before building.</p>`,
        example: `<pre># MVP Feature Prioritization

MUST HAVE (MVP):
- [ ] User registration/login
- [ ] Core feature X
- [ ] Basic payment processing

SHOULD HAVE (v1.1):
- [ ] User profiles
- [ ] Email notifications
- [ ] Basic analytics

COULD HAVE (v2):
- [ ] Social sharing
- [ ] Advanced filters
- [ ] Mobile app

WON'T HAVE (future):
- [ ] AI recommendations
- [ ] Marketplace
- [ ] Multiple languages

# MVP Example: E-commerce

Full Vision:
- Multiple categories
- Reviews
- Wishlist
- Recommendations
- Chat support
- Multiple payment methods

MVP:
- One category of products
- Add to cart
- One payment method (Stripe)
- Order confirmation email
- Basic admin panel

# Validate before building more:
- Do people buy?
- What's the conversion rate?
- What do they ask for?
- What makes them leave?

# Lean Canvas (1-page business plan)
1. Problem
2. Solution
3. Unique Value Proposition
4. Key Metrics
5. Channels
6. Cost Structure
7. Revenue Streams
8. Unfair Advantage
9. Customer Segments</pre>`
    },

    "System Design Basics": {
        concept: `<p><strong>System Design focuses on:</strong></p>
<ul>
<li>High-level architecture</li>
<li>Component interaction</li>
<li>Scalability and reliability</li>
<li>Technology choices</li>
</ul>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Load Balancer</strong> - Distributes traffic across servers</li>
<li><strong>Database</strong> - SQL vs NoSQL, replication, sharding</li>
<li><strong>Cache</strong> - Fast data access (Redis, Memcached)</li>
<li><strong>CDN</strong> - Content delivery network (static files)</li>
<li><strong>Message Queue</strong> - Async processing (RabbitMQ, Redis)</li>
<li><strong>Microservices</strong> - Small, independent services</li>
</ul>

<p><strong>Design Process:</strong></p>
<ol>
<li>Clarify requirements and constraints</li>
<li>Estimate scale (users, data, requests)</li>
<li>Define high-level design</li>
<li>Deep dive into components</li>
<li>Address bottlenecks and failures</li>
</ol>`,
        example: `<pre># URL Shortener System Design (Interview Classic)

Requirements:
- Shorten long URLs
- Redirect short URL to original
- 100M URLs/month
- 10:1 read:write ratio

Estimates:
- 100M writes/month ≈ 40 writes/sec
- 1B reads/month ≈ 400 reads/sec
- 5 years = 6B URLs to store
- Each URL ~ 500 bytes = 3TB

High-Level Design:
┌─────────┐    ┌──────────────┐    ┌─────────┐
│ Client  │───>│ Load Balancer│───>│ Servers │
└─────────┘    └──────────────┘    └────┬────┘
                                        │
                   ┌────────────────────┼────────────┐
                   │                    │            │
              ┌────▼─────┐       ┌──────▼──┐   ┌─────▼────┐
              │  Cache   │       │ Database │   │Key Gen   │
              │ (Redis)  │       │ (NoSQL)  │   │Service   │
              └──────────┘       └──────────┘   └──────────┘

Database Schema:
{
  short_code: "abc123",
  original_url: "https://...",
  user_id: 12345,
  created_at: timestamp,
  clicks: 0
}

Key Generation:
- Base62 encoding (a-z, A-Z, 0-9)
- 6 chars = 62^6 = 56B combinations
- Pre-generate keys or generate on demand

API:
POST /shorten { url: "..." } → { short_url: "..." }
GET /{code} → 301 redirect to original

Caching:
- Cache popular URLs in Redis
- Cache hit ratio important (most clicks on few URLs)</pre>`
    },

    "Scalability Basics": {
        concept: `<p><strong>Types of Scaling:</strong></p>
<ul>
<li><strong>Vertical (Scale Up)</strong> - Bigger server (more CPU, RAM)</li>
<li><strong>Horizontal (Scale Out)</strong> - More servers</li>
</ul>

<p><strong>Horizontal is preferred because:</strong></p>
<ul>
<li>No upper limit (can keep adding)</li>
<li>Better fault tolerance</li>
<li>More cost-effective at scale</li>
<li>No single point of failure</li>
</ul>

<p><strong>Scalability Patterns:</strong></p>
<ul>
<li><strong>Load Balancing</strong> - Distribute requests</li>
<li><strong>Database Replication</strong> - Read replicas</li>
<li><strong>Database Sharding</strong> - Split data across DBs</li>
<li><strong>Caching</strong> - Reduce database load</li>
<li><strong>CDN</strong> - Serve static content</li>
<li><strong>Message Queues</strong> - Handle spikes async</li>
</ul>

<p><strong>Interview Q: How to handle millions of users?</strong></p>
<p>A: Load balancer + multiple servers, database read replicas, caching layer (Redis), CDN for static, queue for heavy tasks.</p>`,
        example: `<pre># Scaling Stages

Stage 1: Single Server
┌─────────────────────┐
│    Web Server       │
│    + Database       │
│    + Everything     │
└─────────────────────┘
Users: 0 - 1,000

Stage 2: Separate DB
┌─────────────┐    ┌─────────────┐
│ Web Server  │────│  Database   │
└─────────────┘    └─────────────┘
Users: 1,000 - 10,000

Stage 3: Load Balancer + Multiple Servers
            ┌─────────────┐
            │    Load     │
            │  Balancer   │
            └──────┬──────┘
        ┌──────────┼──────────┐
   ┌────▼─────┐ ┌──▼───┐ ┌────▼────┐
   │ Server 1 │ │ S2   │ │ Server 3│
   └──────────┘ └──────┘ └─────────┘
                   │
            ┌──────▼──────┐
            │  Database   │
            └─────────────┘
Users: 10,000 - 100,000

Stage 4: Add Caching + Read Replicas
            ┌─────────────┐
            │    Load     │
            │  Balancer   │
            └──────┬──────┘
                   │
            ┌──────▼──────┐
            │   Servers   │
            └──────┬──────┘
       ┌───────────┼───────────┐
  ┌────▼────┐ ┌────▼────┐ ┌────▼────┐
  │  Cache  │ │ Primary │ │ Read    │
  │ (Redis) │ │   DB    │ │ Replica │
  └─────────┘ └─────────┘ └─────────┘
Users: 100,000 - 1,000,000

Stage 5: Microservices + Sharding
For millions of users, split into services,
shard database, add CDN, queues, etc.</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = softwareEngData;
}
