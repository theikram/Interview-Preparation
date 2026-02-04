// Projects Section - Interview Breakdown
const projectsData = {
    "Drowsiness Detection System": {
        concept: `<p><strong>Project Overview:</strong></p>
<p>Real-time driver drowsiness detection using computer vision and deep learning to prevent accidents.</p>

<p><strong>Tech Stack:</strong></p>
<ul>
<li><strong>Python</strong> - Main programming language</li>
<li><strong>OpenCV</strong> - Computer vision, face detection</li>
<li><strong>dlib / MediaPipe</strong> - Facial landmark detection</li>
<li><strong>TensorFlow/PyTorch</strong> - Deep learning (optional CNN)</li>
<li><strong>Pygame/playsound</strong> - Alert sounds</li>
</ul>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Eye Aspect Ratio (EAR)</strong> - Ratio to detect eye openness</li>
<li><strong>Facial Landmarks</strong> - 68 points on face (eyes, mouth)</li>
<li><strong>Frame Processing</strong> - Real-time video analysis</li>
<li><strong>Threshold Tuning</strong> - Calibrating sensitivity</li>
</ul>

<p><strong>How it works:</strong></p>
<ol>
<li>Capture video frames from camera</li>
<li>Detect face in frame</li>
<li>Find eye landmarks (6 points per eye)</li>
<li>Calculate EAR</li>
<li>If EAR below threshold for X frames → alert</li>
</ol>`,
        example: `<pre># Eye Aspect Ratio (EAR) Formula
#
#      ||P2 - P6|| + ||P3 - P5||
# EAR = ─────────────────────────
#           2 * ||P1 - P4||
#
# P1-P6 are the 6 eye landmarks

import cv2
import dlib
from scipy.spatial import distance

def eye_aspect_ratio(eye):
    # Vertical distances
    A = distance.euclidean(eye[1], eye[5])
    B = distance.euclidean(eye[2], eye[4])
    # Horizontal distance
    C = distance.euclidean(eye[0], eye[3])
    
    ear = (A + B) / (2.0 * C)
    return ear

# Thresholds
EAR_THRESHOLD = 0.25
CONSEC_FRAMES = 20  # Frames eyes must be closed

# Initialize
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor("shape_predictor_68.dat")

# Main loop
while True:
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = detector(gray)
    
    for face in faces:
        landmarks = predictor(gray, face)
        left_eye = extract_eye(landmarks, LEFT_EYE_POINTS)
        right_eye = extract_eye(landmarks, RIGHT_EYE_POINTS)
        
        ear = (eye_aspect_ratio(left_eye) + 
               eye_aspect_ratio(right_eye)) / 2
        
        if ear < EAR_THRESHOLD:
            counter += 1
            if counter >= CONSEC_FRAMES:
                play_alert()  # Wake up!
        else:
            counter = 0

# Interview Questions:
# - Why EAR instead of just detecting closed eyes?
# - How handle different lighting conditions?
# - False positive handling strategies?
# - Real-time performance optimization?</pre>`
    },

    "AI Recommender System": {
        concept: `<p><strong>Project Overview:</strong></p>
<p>Full-stack AI-powered product/content recommendation system with vector similarity search.</p>

<p><strong>Architecture:</strong></p>
<ul>
<li><strong>Frontend:</strong> Next.js with React</li>
<li><strong>Backend API:</strong> Express.js (Node)</li>
<li><strong>Database:</strong> MongoDB (product/user data)</li>
<li><strong>AI Service:</strong> FastAPI (Python)</li>
<li><strong>Vector DB:</strong> FAISS for similarity</li>
<li><strong>LLM:</strong> Gemini AI for smart features</li>
</ul>

<p><strong>Data Flow:</strong></p>
<ol>
<li>User interacts (views, purchases, searches)</li>
<li>Events sent to Express backend</li>
<li>Backend stores in MongoDB, sends to AI service</li>
<li>AI service generates embeddings, stores in FAISS</li>
<li>Recommendations fetched via similarity search</li>
<li>LLM enhances with explanations</li>
</ol>

<p><strong>Types of Recommendations:</strong></p>
<ul>
<li><strong>Content-based:</strong> Similar to items user liked</li>
<li><strong>Collaborative:</strong> Similar users' preferences</li>
<li><strong>Hybrid:</strong> Combines both approaches</li>
</ul>`,
        example: `<pre># System Architecture
┌─────────────────────────────────────────────────┐
│                   Next.js Frontend              │
│  - Product listing   - User profile             │
│  - Search bar        - Recommendation cards     │
└──────────────────────┬──────────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────────┐
│              Express.js Backend                  │
│  - REST API        - Auth middleware             │
│  - Product CRUD    - User sessions               │
└──────────┬───────────────────────┬───────────────┘
           │                       │
           ▼                       ▼
┌──────────────────┐    ┌─────────────────────────┐
│    MongoDB       │    │    FastAPI AI Service   │
│  - Users         │    │  - Embedding generation │
│  - Products      │    │  - FAISS vector store   │
│  - Interactions  │    │  - Gemini integration   │
└──────────────────┘    └─────────────────────────┘

# Express route for recommendations
app.get('/api/recommendations/:userId', async (req, res) => {
    const user = await User.findById(req.params.userId);
    const history = await Interaction.find({ user: user._id });
    
    // Call AI service
    const recs = await axios.post('http://ai-service/recommend', {
        user_history: history,
        limit: 10
    });
    
    res.json(recs.data);
});

# FastAPI recommendation endpoint
@app.post("/recommend")
async def recommend(data: UserHistory):
    # Get user embedding from history
    user_embedding = generate_user_embedding(data.history)
    
    # Search FAISS for similar products
    distances, indices = faiss_index.search(user_embedding, k=10)
    
    # Get product details
    products = get_products_by_indices(indices)
    
    return {"recommendations": products}

# Interview Questions:
# - Cold start problem: new user/item, no data?
# - How to evaluate recommendation quality?
# - Real-time vs batch processing?
# - Privacy considerations?</pre>`
    },

    "Smart FAQ Bot (RAG)": {
        concept: `<p><strong>Project Overview:</strong></p>
<p>Intelligent FAQ chatbot using RAG (Retrieval-Augmented Generation) to answer questions from company documents.</p>

<p><strong>Architecture:</strong></p>
<ul>
<li><strong>Frontend:</strong> React + Vite (chat interface)</li>
<li><strong>Backend:</strong> Express.js (API, session)</li>
<li><strong>AI Service:</strong> Flask (RAG pipeline)</li>
<li><strong>Vector Store:</strong> FAISS / Chroma</li>
<li><strong>LLM:</strong> Gemini AI for generation</li>
</ul>

<p><strong>RAG Pipeline:</strong></p>
<ol>
<li><strong>Ingest:</strong> Load documents (PDFs, docs)</li>
<li><strong>Chunk:</strong> Split into smaller pieces</li>
<li><strong>Embed:</strong> Convert chunks to vectors</li>
<li><strong>Store:</strong> Save in vector database</li>
<li><strong>Query:</strong> User asks question</li>
<li><strong>Retrieve:</strong> Find relevant chunks</li>
<li><strong>Generate:</strong> LLM answers with context</li>
</ol>

<p><strong>Benefits over plain LLM:</strong></p>
<ul>
<li>Grounded in your actual documents</li>
<li>Can cite sources</li>
<li>Up-to-date (just update docs)</li>
<li>Reduced hallucinations</li>
</ul>`,
        example: `<pre># System Architecture
┌─────────────────────────────────────────┐
│         React + Vite Frontend           │
│  - Chat interface   - Message history   │
│  - Typing indicator - Source citations  │
└─────────────────────┬───────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────┐
│          Express.js Backend             │
│  - Chat API         - Session mgmt      │
│  - Rate limiting    - Auth              │
└─────────────────────┬───────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────┐
│          Flask AI Service               │
│  ┌─────────────────────────────────┐    │
│  │        RAG Pipeline             │    │
│  │  1. Query embedding             │    │
│  │  2. FAISS similarity search     │    │
│  │  3. Context assembly            │    │
│  │  4. Gemini generation           │    │
│  └─────────────────────────────────┘    │
│  ┌─────────────────────────────────┐    │
│  │   FAISS Vector Store            │    │
│  │   (FAQ embeddings)              │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘

# Flask RAG endpoint
@app.route('/chat', methods=['POST'])
def chat():
    query = request.json['message']
    
    # 1. Embed query
    query_embedding = embed_text(query)
    
    # 2. Search for relevant chunks
    distances, indices = index.search(query_embedding, k=3)
    relevant_chunks = [documents[i] for i in indices[0]]
    
    # 3. Build prompt with context
    context = "\\n\\n".join(relevant_chunks)
    prompt = f"""Answer based only on this context:

{context}

Question: {query}
Answer:"""
    
    # 4. Generate response
    response = gemini_model.generate_content(prompt)
    
    return jsonify({
        "answer": response.text,
        "sources": relevant_chunks
    })

# Interview Questions:
# - How handle questions outside document scope?
# - Chunking strategy and overlap?
# - How to improve retrieval accuracy?
# - Caching strategy for repeated questions?</pre>`
    },

    "Project Interview Tips": {
        concept: `<p><strong>How to Present Projects:</strong></p>

<p><strong>Structure (STAR-like):</strong></p>
<ol>
<li><strong>Context:</strong> What problem? Why built it?</li>
<li><strong>Role:</strong> Your specific contribution</li>
<li><strong>Technical:</strong> Stack, architecture decisions</li>
<li><strong>Challenges:</strong> Obstacles and solutions</li>
<li><strong>Results:</strong> Impact, metrics, learnings</li>
</ol>

<p><strong>Be Ready to Discuss:</strong></p>
<ul>
<li>Why you chose specific technologies</li>
<li>Trade-offs you considered</li>
<li>How you'd do it differently now</li>
<li>How it scales / production concerns</li>
<li>Testing and deployment approach</li>
</ul>

<p><strong>Common Follow-up Questions:</strong></p>
<ul>
<li>"What was the hardest part?"</li>
<li>"How did you handle [specific technical challenge]?"</li>
<li>"What would you add with more time?"</li>
<li>"How did you test this?"</li>
<li>"What did you learn?"</li>
</ul>`,
        example: `<pre># Example Project Walkthrough

INTERVIEWER: "Tell me about a project you're proud of."

YOU:
"I built an AI-powered FAQ bot for my team's internal 
documentation. We had hundreds of pages of docs, and people 
kept asking the same questions in Slack.

MY ROLE:
I designed and built the entire system - a React frontend, 
Express API, and Flask service for the RAG pipeline.

TECHNICAL DECISIONS:
I chose FAISS for the vector store because we didn't need 
a managed service, and it's fast for our document size. 
For the LLM, I used Gemini because of the generous free 
tier during development.

CHALLENGES:
The biggest challenge was chunking. Initially, I used 
fixed-size chunks, but answers were often cut off mid-
sentence. I switched to semantic chunking with overlap, 
which improved answer quality significantly.

RESULTS:
The bot now handles about 60% of common questions 
automatically. We saw a 40% reduction in Slack questions 
to the team leads.

LEARNINGS:
I learned that retrieval quality matters more than the 
LLM model. Garbage in, garbage out. I'd spend more time 
on chunking and retrieval tuning in future projects."

# Tips:
# - Use "I" not "we" for YOUR contributions
# - Have metrics ready (%, numbers)
# - Know the code deeply - they may drill down
# - Admit limitations honestly
# - Show enthusiasm for the work</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = projectsData;
}
