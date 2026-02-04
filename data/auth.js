// AUTH & SECURITY - Comprehensive Interview Prep
const authData = {
    "JWT (JSON Web Tokens)": {
        concept: `<p><strong>What is JWT?</strong></p>
<p>A compact, URL-safe token format for securely transmitting information between parties as a JSON object. Self-contained - contains all user info needed.</p>

<p><strong>Structure (3 parts separated by dots):</strong></p>
<ul>
<li><strong>Header:</strong> Algorithm (HS256) and token type (JWT)</li>
<li><strong>Payload:</strong> Claims - user data, expiration, issuer</li>
<li><strong>Signature:</strong> Verifies token wasn't tampered with</li>
</ul>

<p><strong>How it works:</strong></p>
<ol>
<li>User logs in with credentials</li>
<li>Server verifies, creates JWT with user info</li>
<li>JWT sent to client (stored in memory/cookie)</li>
<li>Client sends JWT with each request</li>
<li>Server verifies signature, extracts user info</li>
</ol>

<p><strong>IMPORTANT:</strong> JWT is SIGNED, not encrypted! Anyone can decode and read the payload. Never put secrets in it.</p>

<p><strong>Interview Q: JWT vs Session?</strong></p>
<p>A: Sessions store data on server (stateful). JWTs are self-contained (stateless). JWT scales better but can't be invalidated easily.</p>`,
        example: `<pre>// JWT Structure
// xxxxx.yyyyy.zzzzz
// Header.Payload.Signature

// Decoded Header
{
  "alg": "HS256",
  "typ": "JWT"
}

// Decoded Payload (claims)
{
  "sub": "1234567890",    // Subject (user ID)
  "name": "Ali",           // Custom claim
  "email": "ali@test.com", // Custom claim
  "role": "admin",         // Custom claim
  "iat": 1516239022,       // Issued at
  "exp": 1516242622        // Expiration
}

// Node.js - Create JWT
const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { userId: user.id, email: user.email },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Node.js - Verify JWT (middleware)
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Client - Send with requests
fetch('/api/profile', {
  headers: {
    'Authorization': 'Bearer ' + token
  }
});</pre>`
    },

    "Access & Refresh Tokens": {
        concept: `<p><strong>Two-Token Strategy for Better Security:</strong></p>

<p><strong>Access Token:</strong></p>
<ul>
<li>Short-lived (15 minutes - 1 hour)</li>
<li>Used to access protected resources</li>
<li>Stored in memory (JavaScript variable)</li>
<li>Sent with every API request</li>
</ul>

<p><strong>Refresh Token:</strong></p>
<ul>
<li>Long-lived (7 days - 30 days)</li>
<li>Used only to get new access token</li>
<li>Stored in httpOnly cookie (safer)</li>
<li>Sent only to /refresh endpoint</li>
</ul>

<p><strong>Flow:</strong></p>
<ol>
<li>Login → Get both tokens</li>
<li>Use access token for API calls</li>
<li>When access token expires, use refresh token to get new one</li>
<li>If refresh token invalid/expired, logout user</li>
</ol>

<p><strong>Interview Q: Why not just use long-lived access token?</strong></p>
<p>A: If stolen, attacker has long access. Short access + refresh limits damage - can revoke refresh tokens on server.</p>`,
        example: `<pre>// Login endpoint
app.post('/login', async (req, res) => {
  const user = await validateCredentials(req.body);
  
  const accessToken = jwt.sign(
    { userId: user.id },
    ACCESS_SECRET,
    { expiresIn: '15m' }
  );
  
  const refreshToken = jwt.sign(
    { userId: user.id },
    REFRESH_SECRET,
    { expiresIn: '7d' }
  );
  
  // Store refresh token hash in DB for revocation
  await saveRefreshToken(user.id, refreshToken);
  
  // Send refresh in httpOnly cookie
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });
  
  res.json({ accessToken });
});

// Refresh endpoint
app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.cookies;
  
  if (!refreshToken) return res.status(401).json({ error: 'No token' });
  
  try {
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
    
    // Verify token is in DB (not revoked)
    const valid = await isRefreshTokenValid(decoded.userId, refreshToken);
    if (!valid) throw new Error('Revoked');
    
    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      ACCESS_SECRET,
      { expiresIn: '15m' }
    );
    
    res.json({ accessToken: newAccessToken });
  } catch {
    res.clearCookie('refreshToken');
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
});

// Logout - revoke refresh token
app.post('/logout', async (req, res) => {
  const { refreshToken } = req.cookies;
  await revokeRefreshToken(refreshToken);
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
});</pre>`
    },

    "Password Hashing": {
        concept: `<p><strong>NEVER store plain text passwords!</strong></p>

<p><strong>Hashing:</strong> One-way function that converts password to fixed-length string. Can't be reversed.</p>

<p><strong>Salt:</strong> Random data added to password before hashing. Prevents rainbow table attacks.</p>

<p><strong>bcrypt:</strong> Industry standard. Automatically handles salt, configurable work factor (cost).</p>

<p><strong>Work Factor:</strong> How computationally expensive. Higher = slower = more secure. 10-12 is common.</p>

<p><strong>Process:</strong></p>
<ol>
<li>User registers: hash password with bcrypt, store hash</li>
<li>User logs in: hash attempt, compare with stored hash</li>
<li>bcrypt.compare handles timing-safe comparison</li>
</ol>

<p><strong>Interview Q: Why use bcrypt over SHA-256?</strong></p>
<p>A: SHA-256 is fast (bad for passwords - easy to brute force). bcrypt is deliberately slow, GPU-resistant, and includes salt.</p>`,
        example: `<pre>// Node.js with bcrypt
const bcrypt = require('bcrypt');

// Registration - hash password
async function register(email, password) {
  const saltRounds = 10;  // Work factor
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  
  // hashedPassword looks like:
  // $2b$10$N9qo8uLOickgx2ZMRZoMy.MqQJSWfqLNPKPDXCxQjhA0HQxiZ3C/a
  // $2b = bcrypt version
  // $10 = cost factor
  // Next 22 chars = salt
  // Rest = hash
  
  await db.users.create({
    email,
    password: hashedPassword
  });
}

// Login - verify password
async function login(email, password) {
  const user = await db.users.findOne({ email });
  
  if (!user) {
    throw new Error('User not found');
  }
  
  const validPassword = await bcrypt.compare(password, user.password);
  // compare() extracts salt from stored hash automatically
  
  if (!validPassword) {
    throw new Error('Invalid password');
  }
  
  return user;
}

// Python with passlib
from passlib.hash import bcrypt

# Hash
hashed = bcrypt.hash("password123")

# Verify
is_valid = bcrypt.verify("password123", hashed)

// Best practices:
// 1. Use bcrypt, argon2, or scrypt (not MD5, SHA)
// 2. Never log passwords (even hashed)
// 3. Use HTTPS for transmission
// 4. Implement rate limiting on login
// 5. Consider password strength requirements</pre>`
    },

    "OAuth 2.0": {
        concept: `<p><strong>What is OAuth 2.0?</strong></p>
<p>Authorization framework that allows third-party apps to access user's resources without sharing password. "Login with Google/GitHub/Facebook".</p>

<p><strong>Key Roles:</strong></p>
<ul>
<li><strong>Resource Owner:</strong> The user</li>
<li><strong>Client:</strong> Your application</li>
<li><strong>Authorization Server:</strong> Issues tokens (Google, GitHub)</li>
<li><strong>Resource Server:</strong> Has user's data (Google API)</li>
</ul>

<p><strong>Authorization Code Flow (most secure):</strong></p>
<ol>
<li>User clicks "Login with Google"</li>
<li>Redirect to Google's auth page</li>
<li>User grants permission</li>
<li>Google redirects back with authorization code</li>
<li>Your server exchanges code for access token</li>
<li>Use token to get user info from Google</li>
</ol>

<p><strong>Interview Q: OAuth vs JWT?</strong></p>
<p>A: Different things. OAuth is an authorization protocol (how to grant access). JWT is a token format (how to encode data). OAuth can use JWTs for tokens.</p>`,
        example: `<pre>// OAuth 2.0 Flow (Authorization Code)

// 1. Redirect user to provider
const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
googleAuthUrl.searchParams.set('client_id', CLIENT_ID);
googleAuthUrl.searchParams.set('redirect_uri', 'http://localhost:3000/callback');
googleAuthUrl.searchParams.set('response_type', 'code');
googleAuthUrl.searchParams.set('scope', 'email profile');
googleAuthUrl.searchParams.set('state', crypto.randomUUID()); // CSRF protection

res.redirect(googleAuthUrl.toString());

// 2. Handle callback
app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  
  // Verify state matches (CSRF protection)
  
  // 3. Exchange code for tokens
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: 'http://localhost:3000/callback',
      grant_type: 'authorization_code'
    })
  });
  
  const { access_token } = await tokenResponse.json();
  
  // 4. Get user info
  const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
    headers: { Authorization: 'Bearer ' + access_token }
  });
  
  const googleUser = await userResponse.json();
  // { id, email, name, picture }
  
  // 5. Create or login user in your system
  let user = await findUserByGoogleId(googleUser.id);
  if (!user) {
    user = await createUser({ googleId: googleUser.id, email: googleUser.email });
  }
  
  // 6. Issue your own JWT
  const token = jwt.sign({ userId: user.id }, SECRET);
  res.redirect('/app?token=' + token);
});</pre>`
    },

    "CORS & Security Headers": {
        concept: `<p><strong>CORS (Cross-Origin Resource Sharing):</strong></p>
<p>Browser security that restricts requests from different origins. Your frontend (localhost:3000) calling API (localhost:5000) = cross-origin.</p>

<p><strong>Essential Security Headers:</strong></p>
<ul>
<li><strong>Content-Security-Policy:</strong> Restrict resource sources</li>
<li><strong>X-Content-Type-Options:</strong> Prevent MIME sniffing</li>
<li><strong>X-Frame-Options:</strong> Prevent clickjacking</li>
<li><strong>Strict-Transport-Security:</strong> Force HTTPS</li>
<li><strong>X-XSS-Protection:</strong> XSS filter (legacy browsers)</li>
</ul>

<p><strong>Common Vulnerabilities to Prevent:</strong></p>
<ul>
<li><strong>XSS:</strong> Cross-Site Scripting - sanitize input, use CSP</li>
<li><strong>CSRF:</strong> Cross-Site Request Forgery - use tokens, SameSite cookies</li>
<li><strong>SQL Injection:</strong> Use parameterized queries</li>
</ul>`,
        example: `<pre>// Express CORS setup
const cors = require('cors');

app.use(cors({
  origin: ['https://myapp.com', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // Allow cookies
}));

// Security headers with helmet
const helmet = require('helmet');

app.use(helmet());  // Sets many headers

// Or configure individually
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
  }
}));

// CSRF Protection
const csrf = require('csurf');
app.use(csrf({ cookie: true }));

// Prevent SQL Injection - use parameterized queries
// BAD
db.query(\`SELECT * FROM users WHERE id = \${userId}\`);  // SQL Injection!

// GOOD
db.query('SELECT * FROM users WHERE id = $1', [userId]);

// Prevent XSS - sanitize input
const sanitizeHtml = require('sanitize-html');
const cleanInput = sanitizeHtml(userInput);

// Rate limiting
const rateLimit = require('express-rate-limit');
app.use('/api/login', rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 5  // 5 attempts
}));</pre>`
    },

    "Auth Interview Q&A": {
        concept: `<p><strong>Q: How do you handle password reset?</strong></p>
<p>A: Generate random token, store hash in DB with expiry, email link with token, verify token on reset page, update password, invalidate token.</p>

<p><strong>Q: What is session hijacking?</strong></p>
<p>A: Attacker steals session ID/token. Prevent with: HTTPS, httpOnly cookies, short expiry, IP/device binding, regenerate session on login.</p>

<p><strong>Q: Authentication vs Authorization?</strong></p>
<p>A: Authentication = WHO are you (login). Authorization = WHAT can you do (permissions).</p>

<p><strong>Q: How to implement "remember me"?</strong></p>
<p>A: Longer refresh token expiry, stored in secure httpOnly cookie. Still use short access tokens.</p>

<p><strong>Q: How to secure API keys?</strong></p>
<p>A: Environment variables, never commit to git, use secrets manager, rotate regularly, limit permissions.</p>`,
        example: `<pre>// Password reset flow
async function requestPasswordReset(email) {
  const user = await findUserByEmail(email);
  if (!user) return;  // Don't reveal if email exists
  
  const resetToken = crypto.randomBytes(32).toString('hex');
  const resetTokenHash = await bcrypt.hash(resetToken, 10);
  
  await db.users.update(user.id, {
    resetToken: resetTokenHash,
    resetTokenExpiry: Date.now() + 3600000  // 1 hour
  });
  
  await sendEmail(email, \`Reset link: /reset?token=\${resetToken}&email=\${email}\`);
}

async function resetPassword(email, token, newPassword) {
  const user = await findUserByEmail(email);
  
  if (!user || !user.resetToken || user.resetTokenExpiry < Date.now()) {
    throw new Error('Invalid or expired token');
  }
  
  const valid = await bcrypt.compare(token, user.resetToken);
  if (!valid) throw new Error('Invalid token');
  
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  
  await db.users.update(user.id, {
    password: hashedPassword,
    resetToken: null,
    resetTokenExpiry: null
  });
}

// Role-based authorization middleware
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

app.get('/admin', authMiddleware, requireRole('admin'), (req, res) => {
  // Only admins can access
});</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = authData;
}
