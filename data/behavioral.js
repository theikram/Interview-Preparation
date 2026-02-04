// BEHAVIORAL INTERVIEW - Comprehensive Prep
const behavioralData = {
    "Tell Me About Yourself": {
        concept: `<p><strong>This is usually the first question. Use it to set the tone!</strong></p>

<p><strong>Structure (Present-Past-Future):</strong></p>
<ol>
<li><strong>Present:</strong> Current role, what you do, key achievement</li>
<li><strong>Past:</strong> Relevant background, how you got here</li>
<li><strong>Future:</strong> Why you're interested in this role</li>
</ol>

<p><strong>Keep it:</strong></p>
<ul>
<li>60-90 seconds (not a life story)</li>
<li>Professional (not personal hobbies unless relevant)</li>
<li>Tailored to the job</li>
<li>Enthusiastic but not scripted</li>
</ul>

<p><strong>Don't:</strong></p>
<ul>
<li>Recite your entire resume</li>
<li>Say "I'm a hard worker" (show, don't tell)</li>
<li>Ask "What do you want to know?"</li>
<li>Go on for 5+ minutes</li>
</ul>`,
        example: `<pre>// EXAMPLE ANSWER:

"I'm currently a full-stack developer at XYZ Company, where I've 
been building React and Node.js applications for the past two 
years. Recently, I led the migration of our legacy system to a 
modern microservices architecture, which improved our deployment 
frequency by 10x.

Before this, I studied Computer Science at University and did 
internships at two startups where I learned to ship fast and 
iterate based on user feedback.

I'm excited about this role at [Company] because I'm looking to 
work on products at scale that impact millions of users. Your 
team's work on [specific product/tech] really resonates with 
my experience and interests."

// VARIATIONS:

For entry-level:
"I recently graduated with a degree in Computer Science where I 
focused on web development. During my studies, I built several 
projects including [project] using React and Python. I also 
completed an internship at [Company] where I contributed to 
their customer dashboard. I'm eager to join [Company] because 
of your focus on [something specific]."

For career changers:
"I spent 5 years as a data analyst, where I used Python and SQL 
daily. I transitioned to software development because I wanted 
to build the tools I was using. I completed a bootcamp and have 
since built [projects]. My analytical background helps me write 
more efficient, data-driven code."</pre>`
    },

    "Strengths & Weaknesses": {
        concept: `<p><strong>Strength - Pick something RELEVANT:</strong></p>
<ul>
<li>Choose strength that matters for the role</li>
<li>Provide specific example as evidence</li>
<li>Explain how it helped achieve results</li>
</ul>

<p><strong>Good strengths for developers:</strong></p>
<ul>
<li>Problem-solving / debugging skills</li>
<li>Learning quickly / adaptable</li>
<li>Attention to detail</li>
<li>Communication / explaining technical concepts</li>
<li>Collaboration / mentoring</li>
</ul>

<p><strong>Weakness - Show self-awareness:</strong></p>
<ul>
<li>Pick a REAL weakness (not "I work too hard")</li>
<li>Explain what you're doing to improve</li>
<li>Show progress you've made</li>
<li>Don't pick something critical for the job</li>
</ul>

<p><strong>Good weakness formula:</strong></p>
<p>"I used to struggle with [X]. I've been working on this by [specific action]. Recently, I [evidence of improvement]."</p>`,
        example: `<pre>// STRENGTH EXAMPLE:

"One of my key strengths is debugging complex issues. I 
genuinely enjoy digging into problems that others give up on. 

For example, we had a production issue where orders were 
randomly failing. Others had spent days on it. I methodically 
traced the request flow, set up detailed logging, and 
discovered it was a race condition in our payment processing. 

I not only fixed the bug but also added monitoring to catch 
similar issues early. It saved us an estimated $50k in lost 
orders that month."

// WEAKNESS EXAMPLE:

"I used to struggle with estimating how long tasks would take. 
I'd be optimistic and then miss deadlines, which frustrated 
my team.

I've been working on this by breaking tasks into smaller chunks 
and tracking my actual time. I also started adding buffer time 
for unexpected issues.

Now, my estimates are much more accurate. In our last sprint, 
I delivered all my stories on time, and my PM actually 
commented on the improvement."

// ANOTHER WEAKNESS EXAMPLE:

"Public speaking was something I avoided. Technical 
presentations made me nervous.

I've been actively working on this - I volunteered to lead 
our team's tech talks, joined Toastmasters, and practiced 
presenting to smaller groups first.

Last month, I presented our new API design to 50 engineers. 
I was nervous, but the feedback was positive, and I'm now 
much more comfortable."</pre>`
    },

    "STAR Method for Stories": {
        concept: `<p><strong>STAR Method structures behavioral answers:</strong></p>

<p><strong>S - Situation:</strong></p>
<ul>
<li>Set the scene briefly</li>
<li>When, where, what was the context</li>
<li>Keep it short (2-3 sentences)</li>
</ul>

<p><strong>T - Task:</strong></p>
<ul>
<li>What was YOUR responsibility or goal</li>
<li>What challenge did YOU face</li>
<li>Be specific about your role</li>
</ul>

<p><strong>A - Action:</strong></p>
<ul>
<li>What did YOU do (not the team)</li>
<li>This should be the longest part</li>
<li>Be specific about your decisions and steps</li>
</ul>

<p><strong>R - Result:</strong></p>
<ul>
<li>What was the outcome</li>
<li>Use numbers when possible</li>
<li>What did you learn</li>
</ul>

<p><strong>Prepare stories for:</strong></p>
<ul>
<li>Challenging project</li>
<li>Conflict with teammate</li>
<li>Leadership / initiative</li>
<li>Failure and what you learned</li>
<li>Working under pressure</li>
</ul>`,
        example: `<pre>// EXAMPLE: "Tell me about a challenging project"

SITUATION:
"At my previous company, our main application was becoming 
increasingly slow. Page loads took 5+ seconds, and we were 
getting customer complaints daily."

TASK:
"As the frontend lead, I was responsible for identifying the 
bottlenecks and improving performance by at least 50%."

ACTION:
"First, I set up performance monitoring with Lighthouse and 
custom metrics to identify the worst problems. I discovered 
three main issues: massive bundle size, unoptimized images, 
and redundant API calls.

I then prioritized fixes: implemented code splitting to reduce 
initial bundle by 60%, set up image lazy loading and WebP 
conversion, and added request caching.

I also created a performance budget and CI checks to prevent 
future regressions."

RESULT:
"Page load times dropped from 5.2 seconds to 1.8 seconds - a 
65% improvement. Customer complaints about speed dropped to 
nearly zero, and our conversion rate increased by 12% the 
following month. The CEO specifically called out the 
improvement in the all-hands meeting."

// EXAMPLE: "Tell me about a conflict with a coworker"

SITUATION:
"A senior developer and I disagreed strongly on whether to 
use a new framework for a project."

TASK:
"I needed to either convince them or find a compromise while 
maintaining a good working relationship."

ACTION:
"Instead of escalating, I asked to meet 1-on-1 to understand 
their concerns. They worried about team learning curve and 
maintenance burden. Valid points I hadn't fully considered.

I proposed a compromise: build a small prototype in both 
approaches and compare. We evaluated objectivity together 
based on agreed criteria."

RESULT:
"We ended up with a hybrid approach that addressed their 
concerns while getting some benefits I wanted. More 
importantly, we built mutual respect and collaborate well 
now on architecture decisions."</pre>`
    },

    "Why This Company/Role": {
        concept: `<p><strong>Show you've done research and have specific reasons.</strong></p>

<p><strong>Good answers mention:</strong></p>
<ul>
<li>Specific products/features you admire</li>
<li>Company mission/values that resonate</li>
<li>Technical challenges that excite you</li>
<li>Team/culture aspects you've heard about</li>
<li>Growth opportunities</li>
</ul>

<p><strong>How to research:</strong></p>
<ul>
<li>Company website, blog, engineering blog</li>
<li>Recent news, funding, product launches</li>
<li>LinkedIn - check interviewer profiles</li>
<li>Glassdoor, Blind for culture insights</li>
<li>Use the product if possible</li>
</ul>

<p><strong>Don't say:</strong></p>
<ul>
<li>"I need a job" (obvious)</li>
<li>"Good salary" (save for negotiation)</li>
<li>Generic statements about any company</li>
</ul>`,
        example: `<pre>// EXAMPLE ANSWER:

"I'm excited about [Company] for three reasons:

First, your product. I've been using [product] for my personal 
projects, and I love how [specific feature]. I'd love to 
contribute to making it even better.

Second, the technical challenges. I read your engineering blog 
post about how you handle [specific challenge], and that's 
exactly the scale I want to work at. Your approach to 
[technology/methodology] aligns with how I like to work.

Third, the team culture. I talked to [person] who works here, 
and they mentioned the emphasis on [specific value like code 
review, mentorship, innovation time]. That's the environment 
where I do my best work."

// ANOTHER EXAMPLE:

"I've been following [Company] since your Series A. What draws 
me is your mission to [mission statement]. That personally 
resonates with me because [personal connection].

From a technical perspective, I'm excited about your 
[technology stack]. I saw that you're using [specific tech] 
for [purpose], which is something I have experience with and 
want to deepen.

Also, I noticed your team values [value from job posting/
research]. In my current role, I've thrived in environments 
that prioritize this."

// QUESTIONS TO ASK THEM:
"What's the biggest challenge the team is facing right now?"
"What does success look like in this role at 6 months?"
"How do you approach technical debt vs new features?"
"What's the team culture like day-to-day?"
"What do you enjoy most about working here?"</pre>`
    },

    "Handling Failure Questions": {
        concept: `<p><strong>"Tell me about a time you failed"</strong></p>

<p><strong>They want to see:</strong></p>
<ul>
<li>Self-awareness and honesty</li>
<li>Ability to learn from mistakes</li>
<li>Resilience and growth mindset</li>
<li>That you won't make the same mistake again</li>
</ul>

<p><strong>Structure:</strong></p>
<ol>
<li>Describe the failure honestly</li>
<li>Take responsibility (no blame)</li>
<li>Explain what you learned</li>
<li>Show how you've applied that lesson</li>
</ol>

<p><strong>Choose a failure that:</strong></p>
<ul>
<li>Is significant but not catastrophic</li>
<li>Shows growth</li>
<li>Isn't too recent</li>
<li>Won't make them question hiring you</li>
</ul>`,
        example: `<pre>// EXAMPLE ANSWER:

"Early in my career, I was leading a feature and was confident 
I could finish it in two weeks. I didn't want to look 
inexperienced, so I didn't ask for help or flag issues.

Three weeks in, the feature was nowhere near done. I had 
underestimated the complexity, and by hiding my struggles, I 
made it worse. The project was delayed by a month.

What I learned was that asking for help early isn't weakness - 
it's being professional. I also learned to break down tasks 
more carefully and flag risks immediately.

Now, I'm proactive about raising blockers in standups. In my 
current role, I flagged a potential delay two days into a 
sprint. We reprioritized, and I actually delivered early. My 
manager specifically praised my communication."

// ANOTHER EXAMPLE:

"I once pushed code to production without proper testing 
because we were under deadline pressure. It caused a bug that 
affected 5% of users for 2 hours.

I felt terrible. I stayed late to fix it, wrote a detailed 
postmortem, and took full responsibility in the team meeting.

From that day, I became an advocate for our testing culture. 
I set up a pre-commit hook that runs tests, implemented a 
staging environment, and now I never skip testing no matter 
the pressure. 

We haven't had a similar incident since, and I lead our team's 
testing initiatives."</pre>`
    },

    "Questions to Ask Interviewers": {
        concept: `<p><strong>Always have questions ready. It shows genuine interest.</strong></p>

<p><strong>About the Role:</strong></p>
<ul>
<li>"What does a typical day look like?"</li>
<li>"What are the biggest challenges for this role?"</li>
<li>"What would success look like in the first 6 months?"</li>
<li>"What's the team structure?"</li>
</ul>

<p><strong>About Technology:</strong></p>
<ul>
<li>"What's your tech stack?"</li>
<li>"How do you handle technical debt?"</li>
<li>"What's your deployment/release process?"</li>
<li>"How do you approach code review?"</li>
</ul>

<p><strong>About Culture:</strong></p>
<ul>
<li>"What do you enjoy most about working here?"</li>
<li>"How does the team handle disagreements?"</li>
<li>"What's the approach to work-life balance?"</li>
<li>"Is there opportunity for learning/growth?"</li>
</ul>

<p><strong>Don't Ask First:</strong></p>
<ul>
<li>Salary (wait for offer stage)</li>
<li>How many vacation days</li>
<li>Things easily found on website</li>
</ul>`,
        example: `<pre>// GREAT QUESTIONS TO ASK:

"What's the biggest technical challenge the team is 
currently facing?"

"How do you balance shipping fast versus code quality?"

"Can you tell me about the team I'd be working with?"

"What does your development process look like? Agile, 
standups, how are tasks prioritized?"

"What opportunities are there for learning and professional 
development?"

"What's something you wish you knew before joining?"

"How do you measure success for this role?"

"What's the path for growth in this position?"

"How does the team handle production incidents?"

"What's your approach to code review and knowledge sharing?"

// BASED ON EARLIER CONVERSATION:
"You mentioned [X] earlier - can you tell me more about that?"

// SHOW ENTHUSIASM:
"I've been reading about [recent company news/product]. 
What was it like working on that?"

// FOR THE HIRING MANAGER:
"What would make someone exceptionally successful in this role 
versus just good?"

"What are your team's priorities for the next quarter?"

// END STRONG:
"Is there anything about my background that gives you pause 
that I could address?"

"What are the next steps in the process?"</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = behavioralData;
}
