// Courses & Certifications - Interview Prep
const coursesData = {
    "OCI Generative AI": {
        concept: `<p><strong>Oracle Cloud Infrastructure - Generative AI Certificate:</strong></p>

<p><strong>Topics Covered:</strong></p>
<ul>
<li>Introduction to Generative AI and LLMs</li>
<li>OCI Generative AI Service features</li>
<li>Prompt engineering fundamentals</li>
<li>Fine-tuning concepts</li>
<li>Responsible AI practices</li>
<li>Integration with OCI services</li>
</ul>

<p><strong>Key Concepts to Know:</strong></p>
<ul>
<li><strong>LLM:</strong> Large Language Model - neural network trained on text</li>
<li><strong>Tokens:</strong> Basic units of text processing</li>
<li><strong>Prompt:</strong> Input text given to model</li>
<li><strong>Fine-tuning:</strong> Training on specific data</li>
<li><strong>RAG:</strong> Retrieval-Augmented Generation</li>
<li><strong>Embeddings:</strong> Vector representations of text</li>
</ul>

<p><strong>OCI Specific:</strong></p>
<ul>
<li>Generation models (text generation)</li>
<li>Embedding models (semantic search)</li>
<li>Summarization capabilities</li>
</ul>`,
        example: `<pre># How to explain this in an interview:

"I completed the OCI Generative AI certification, which 
covered the fundamentals of large language models and how 
to use them in production systems.

The key topics included:
- How LLMs work (transformers, attention, tokens)
- Prompt engineering techniques
- When to use fine-tuning vs RAG
- Responsible AI considerations

I applied this knowledge in my [project name] where I 
implemented a RAG system using embeddings for semantic 
search and generation for responses.

One interesting thing I learned was the importance of 
prompt design - small changes in how you phrase prompts 
can significantly affect output quality."

# Key terms to know:
Temperature: Randomness in generation (0=deterministic)
Top-k/Top-p: Sampling strategies
Context window: Max tokens model can process
Hallucination: Model generating false information
Grounding: Connecting responses to real data (RAG)</pre>`
    },

    "Data Science Certification": {
        concept: `<p><strong>Data Science Fundamentals:</strong></p>

<p><strong>Core Skills:</strong></p>
<ul>
<li>Python programming (pandas, numpy)</li>
<li>Statistics and probability</li>
<li>Data visualization (matplotlib, seaborn)</li>
<li>Machine learning basics</li>
<li>SQL for data querying</li>
</ul>

<p><strong>ML Topics:</strong></p>
<ul>
<li>Supervised learning (classification, regression)</li>
<li>Unsupervised learning (clustering, PCA)</li>
<li>Model evaluation (accuracy, precision, recall)</li>
<li>Cross-validation</li>
<li>Feature engineering</li>
</ul>

<p><strong>Common Tools:</strong></p>
<ul>
<li>Jupyter Notebooks</li>
<li>Scikit-learn</li>
<li>Pandas for data manipulation</li>
<li>Matplotlib/Seaborn for visualization</li>
</ul>`,
        example: `<pre># How to explain in interview:

"My Data Science certification gave me a strong foundation 
in analyzing data and building machine learning models.

Key things I learned:
- Data cleaning and preprocessing (handling missing values,
  outliers, normalization)
- Exploratory data analysis with pandas and visualization
- Building and evaluating ML models with scikit-learn
- Feature engineering to improve model performance

In practice, I've used these skills to:
- Analyze user behavior data to find patterns
- Build a classification model for [use case]
- Create dashboards to visualize key metrics"

# Key concepts to demonstrate:

# Data cleaning
df.dropna()       # Handle missing
df.fillna(mean)   # Impute values

# Feature engineering
df['age_group'] = pd.cut(df['age'], bins=[0,18,35,60,100])

# Model training
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y)

model = RandomForestClassifier()
model.fit(X_train, y_train)
predictions = model.predict(X_test)

# Evaluation
from sklearn.metrics import accuracy_score, classification_report
print(accuracy_score(y_test, predictions))
print(classification_report(y_test, predictions))</pre>`
    },

    "How to Present Certifications": {
        concept: `<p><strong>Do's:</strong></p>
<ul>
<li>Connect cert to practical experience</li>
<li>Mention specific projects where you applied knowledge</li>
<li>Focus on what you LEARNED, not just that you passed</li>
<li>Be ready to answer questions on cert topics</li>
</ul>

<p><strong>Don'ts:</strong></p>
<ul>
<li>List certs without context</li>
<li>Claim expertise from just a cert</li>
<li>Include irrelevant/outdated certs</li>
<li>Be unable to explain cert content</li>
</ul>

<p><strong>On Resume:</strong></p>
<ul>
<li>Include cert name and issuer</li>
<li>Add date earned</li>
<li>Include credential ID if applicable</li>
<li>Place in dedicated Certifications section</li>
</ul>

<p><strong>In Interview:</strong></p>
<p>"I took [cert] because I wanted to deepen my understanding of [topic]. The most valuable part was [specific learning]. I applied this in [project/work] when I [specific application]."</p>`,
        example: `<pre># Resume Format

CERTIFICATIONS
─────────────────────────────────────────────
• OCI Generative AI Professional (2024)
  Oracle - Credential ID: ABC123
  
• AWS Cloud Practitioner (2024)
  Amazon Web Services

• Google Data Analytics Professional (2023)
  Coursera / Google


# Interview Answers

Q: "Tell me about your certifications."

WEAK ANSWER:
"I have an AWS cert and an OCI AI cert. I studied for 
a few weeks and passed the exams."

STRONG ANSWER:
"I pursued the OCI Generative AI certification because 
I was building a RAG-based chatbot and wanted to 
understand LLMs more deeply.

The certification covered how large language models 
work, prompt engineering, and RAG architectures. I 
directly applied the prompt engineering techniques 
to improve my chatbot's response quality - reducing 
hallucinations by about 30%.

For my AWS Cloud Practitioner, I focused on understanding 
cloud architecture fundamentals. This helped me when we 
migrated our Node.js backend to EC2 and set up proper 
IAM policies for our S3 storage."

# Tips:
# - Be specific about what you learned
# - Always connect to practical application
# - Know the material - they might quiz you
# - Mention if cert led to real improvements</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = coursesData;
}
