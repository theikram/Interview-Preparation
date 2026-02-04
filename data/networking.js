// NETWORKING - Comprehensive Interview Prep
const networkingData = {
    "OSI Model": {
        concept: `<p><strong>What is OSI Model?</strong></p>
<p>The OSI (Open Systems Interconnection) model is a conceptual framework with 7 layers that describes how data travels from one computer to another over a network. Each layer has specific responsibilities and communicates only with adjacent layers.</p>

<p><strong>The 7 Layers (Remember: "Please Do Not Throw Sausage Pizza Away"):</strong></p>
<ul>
<li><strong>Layer 7 - Application:</strong> What users interact with (HTTP, FTP, SMTP, DNS). Provides network services directly to applications.</li>
<li><strong>Layer 6 - Presentation:</strong> Data formatting, encryption/decryption, compression. Translates data between formats (SSL/TLS happens here).</li>
<li><strong>Layer 5 - Session:</strong> Manages sessions/connections between applications. Handles authentication, reconnection.</li>
<li><strong>Layer 4 - Transport:</strong> End-to-end communication (TCP/UDP). Handles segmentation, flow control, error recovery.</li>
<li><strong>Layer 3 - Network:</strong> Logical addressing and routing (IP). Determines path for data packets.</li>
<li><strong>Layer 2 - Data Link:</strong> Physical addressing (MAC). Frames data for transmission, error detection.</li>
<li><strong>Layer 1 - Physical:</strong> Actual hardware - cables, signals, bits. Electrical/optical transmission.</li>
</ul>

<p><strong>Interview Q: What layer does a router operate at?</strong></p>
<p>A: Layer 3 (Network) - routers use IP addresses to route packets between networks.</p>

<p><strong>Interview Q: What layer does a switch operate at?</strong></p>
<p>A: Layer 2 (Data Link) - switches use MAC addresses to forward frames within a network.</p>`,
        example: `<pre>// Data flow example: You type google.com

Layer 7 (Application): Browser creates HTTP request
Layer 6 (Presentation): Data encrypted with TLS
Layer 5 (Session): Session established
Layer 4 (Transport): TCP breaks data into segments, adds port numbers
Layer 3 (Network): IP adds source/destination IP addresses
Layer 2 (Data Link): Adds MAC addresses, creates frames
Layer 1 (Physical): Converts to electrical signals, sends over wire

// At receiving end, process reverses from Layer 1 to 7

// Common protocols by layer:
Layer 7: HTTP, HTTPS, FTP, SMTP, DNS, SSH
Layer 6: SSL, TLS, JPEG, GIF, MPEG
Layer 5: NetBIOS, RPC
Layer 4: TCP, UDP
Layer 3: IP, ICMP, ARP
Layer 2: Ethernet, WiFi (802.11), PPP
Layer 1: Cables, Hubs, Fiber optics</pre>`
    },

    "TCP vs UDP": {
        concept: `<p><strong>TCP (Transmission Control Protocol):</strong></p>
<ul>
<li><strong>Connection-oriented:</strong> Establishes connection before data transfer (3-way handshake)</li>
<li><strong>Reliable:</strong> Guarantees delivery. Retransmits lost packets.</li>
<li><strong>Ordered:</strong> Data arrives in same order it was sent</li>
<li><strong>Flow control:</strong> Prevents sender from overwhelming receiver</li>
<li><strong>Slower:</strong> Due to overhead of reliability</li>
<li><strong>Use cases:</strong> Web browsing, email, file transfer, SSH</li>
</ul>

<p><strong>UDP (User Datagram Protocol):</strong></p>
<ul>
<li><strong>Connectionless:</strong> No connection setup, just sends</li>
<li><strong>Unreliable:</strong> No guarantee of delivery. No retransmission.</li>
<li><strong>Unordered:</strong> Packets may arrive out of order</li>
<li><strong>No flow control:</strong> App must handle this</li>
<li><strong>Faster:</strong> Less overhead, lower latency</li>
<li><strong>Use cases:</strong> Video streaming, gaming, VoIP, DNS queries</li>
</ul>

<p><strong>Interview Q: Why is UDP used for video streaming?</strong></p>
<p>A: Speed matters more than perfection. A few dropped frames won't ruin video, but waiting for retransmission would cause buffering. Real-time apps prefer speed over reliability.</p>

<p><strong>Interview Q: Can you implement reliability on top of UDP?</strong></p>
<p>A: Yes! Many games and streaming apps add their own reliability layer on UDP for specific needs while keeping low latency.</p>`,
        example: `<pre>// TCP 3-Way Handshake
Client → Server: SYN (Want to connect)
Server → Client: SYN-ACK (OK, I acknowledge)
Client → Server: ACK (Connection established)

// TCP Connection Close (4-Way)
Client → Server: FIN (Done sending)
Server → Client: ACK (OK)
Server → Client: FIN (I'm done too)
Client → Server: ACK (Closed)

// TCP Header (20+ bytes)
- Source Port, Destination Port
- Sequence Number, Acknowledgment Number
- Flags (SYN, ACK, FIN, RST)
- Window Size (flow control)
- Checksum

// UDP Header (8 bytes only!)
- Source Port
- Destination Port
- Length
- Checksum

// When to use what:
TCP: HTTP, HTTPS, SSH, FTP, SMTP, Database connections
UDP: DNS, DHCP, Video streaming, Online gaming, VoIP</pre>`
    },

    "DNS (Domain Name System)": {
        concept: `<p><strong>What is DNS?</strong></p>
<p>DNS is the "phonebook of the internet" - it translates human-readable domain names (google.com) into IP addresses (142.250.80.14) that computers use to communicate.</p>

<p><strong>How DNS Resolution Works:</strong></p>
<ol>
<li><strong>Browser Cache:</strong> Check if domain was recently visited</li>
<li><strong>OS Cache:</strong> Check operating system's DNS cache</li>
<li><strong>Recursive Resolver:</strong> Your ISP's DNS server</li>
<li><strong>Root Server:</strong> Knows where to find TLD servers (.com, .org, etc.)</li>
<li><strong>TLD Server:</strong> Knows authoritative servers for domain</li>
<li><strong>Authoritative Server:</strong> Has the actual IP address</li>
</ol>

<p><strong>DNS Record Types:</strong></p>
<ul>
<li><strong>A:</strong> Maps domain to IPv4 address</li>
<li><strong>AAAA:</strong> Maps domain to IPv6 address</li>
<li><strong>CNAME:</strong> Alias for another domain</li>
<li><strong>MX:</strong> Mail server for domain</li>
<li><strong>TXT:</strong> Text records (SPF, DKIM for email security)</li>
<li><strong>NS:</strong> Nameserver for the domain</li>
</ul>

<p><strong>Interview Q: What is DNS caching? Why is it important?</strong></p>
<p>A: DNS caching stores resolved IPs temporarily to avoid repeated lookups. Improves speed and reduces load on DNS servers. TTL (Time To Live) controls how long cache is valid.</p>`,
        example: `<pre>// DNS Query Flow
You type: www.google.com

1. Browser: "Do I have this cached?" → No
2. OS: "Do I have this cached?" → No
3. Recursive Resolver (ISP): "Let me find out"
4. Root Server: "For .com, ask 192.5.6.30"
5. TLD Server (.com): "For google.com, ask 216.239.34.10"
6. Authoritative (google.com): "The IP is 142.250.80.14"
7. IP returned to browser, cached for future use

// DNS Record Examples
; A Record
google.com.     IN  A     142.250.80.14

; CNAME (alias)
www.google.com. IN  CNAME google.com.

; MX Record (email)
google.com.     IN  MX    10 smtp.google.com.

// Command line tools
nslookup google.com    // Windows/Linux
dig google.com         // Linux/Mac
host google.com        // Linux/Mac

// Check DNS propagation
dig @8.8.8.8 yourdomain.com   // Query Google's DNS</pre>`
    },

    "HTTP vs HTTPS": {
        concept: `<p><strong>HTTP (HyperText Transfer Protocol):</strong></p>
<ul>
<li>Port 80 by default</li>
<li>Data sent in plain text - anyone can intercept and read</li>
<li>No encryption, no verification of server identity</li>
<li>Vulnerable to man-in-the-middle attacks</li>
</ul>

<p><strong>HTTPS (HTTP Secure):</strong></p>
<ul>
<li>Port 443 by default</li>
<li>HTTP + TLS/SSL encryption</li>
<li>Data encrypted - interceptors can't read</li>
<li>Server identity verified via certificate</li>
<li>Required for sensitive data (passwords, payments)</li>
</ul>

<p><strong>TLS Handshake Process:</strong></p>
<ol>
<li>Client Hello: "I support these encryption methods"</li>
<li>Server Hello: "Let's use this method, here's my certificate"</li>
<li>Client verifies certificate with CA (Certificate Authority)</li>
<li>Key exchange: Generate shared secret key</li>
<li>Encrypted communication begins</li>
</ol>

<p><strong>Interview Q: What is a TLS certificate?</strong></p>
<p>A: Digital document that proves server identity. Contains public key, domain name, issuing CA, expiry date. Browser checks if certificate is valid and trusted.</p>

<p><strong>Interview Q: What is HSTS?</strong></p>
<p>A: HTTP Strict Transport Security - header that tells browsers to ONLY use HTTPS. Prevents downgrade attacks.</p>`,
        example: `<pre>// HTTP Request (plain text - insecure!)
GET /login HTTP/1.1
Host: example.com
Cookie: session=abc123
// Anyone on network can see this!

// HTTPS encrypts everything after TLS handshake
// Interceptor sees only encrypted gibberish

// TLS Certificate Info
{
  "subject": "www.google.com",
  "issuer": "Google Trust Services",
  "valid_from": "2024-01-01",
  "valid_to": "2024-04-01",
  "public_key": "RSA 2048 bits"
}

// Express.js HTTPS server
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem')
};

https.createServer(options, app).listen(443);

// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (!req.secure) {
    return res.redirect('https://' + req.headers.host + req.url);
  }
  next();
});</pre>`
    },

    "HTTP Methods & Status Codes": {
        concept: `<p><strong>HTTP Methods (Verbs):</strong></p>
<ul>
<li><strong>GET:</strong> Retrieve data. No body. Cacheable. Safe & idempotent.</li>
<li><strong>POST:</strong> Create resource. Has body. NOT idempotent (multiple calls create multiple resources).</li>
<li><strong>PUT:</strong> Replace entire resource. Idempotent (same result if called multiple times).</li>
<li><strong>PATCH:</strong> Partial update. May not be idempotent.</li>
<li><strong>DELETE:</strong> Remove resource. Idempotent.</li>
<li><strong>HEAD:</strong> Like GET but no response body. Check if resource exists.</li>
<li><strong>OPTIONS:</strong> Get allowed methods for resource. Used in CORS preflight.</li>
</ul>

<p><strong>Status Code Categories:</strong></p>
<ul>
<li><strong>1xx Informational:</strong> 100 Continue, 101 Switching Protocols</li>
<li><strong>2xx Success:</strong> 200 OK, 201 Created, 204 No Content</li>
<li><strong>3xx Redirection:</strong> 301 Permanent, 302 Temporary, 304 Not Modified</li>
<li><strong>4xx Client Error:</strong> 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 422 Unprocessable</li>
<li><strong>5xx Server Error:</strong> 500 Internal Error, 502 Bad Gateway, 503 Service Unavailable</li>
</ul>

<p><strong>Interview Q: 401 vs 403?</strong></p>
<p>A: 401 = "Who are you?" (not authenticated). 403 = "I know who you are, but you can't access this" (not authorized).</p>

<p><strong>Interview Q: 301 vs 302?</strong></p>
<p>A: 301 = Permanent redirect (search engines update). 302 = Temporary redirect (original URL kept).</p>`,
        example: `<pre>// RESTful API Examples
GET    /users           → 200 OK + list of users
GET    /users/123       → 200 OK + user data
POST   /users           → 201 Created + new user
PUT    /users/123       → 200 OK + updated user
PATCH  /users/123       → 200 OK + partially updated
DELETE /users/123       → 204 No Content

// Error responses
GET    /users/999       → 404 Not Found
POST   /users {invalid} → 400 Bad Request
GET    /admin (no auth) → 401 Unauthorized
GET    /admin (no perm) → 403 Forbidden
POST   /users (server)  → 500 Internal Server Error

// Common status codes you MUST know:
200 - OK (success)
201 - Created (POST success)
204 - No Content (DELETE success)
400 - Bad Request (validation failed)
401 - Unauthorized (login required)
403 - Forbidden (no permission)
404 - Not Found
500 - Internal Server Error
503 - Service Unavailable</pre>`
    },

    "REST API Principles": {
        concept: `<p><strong>What is REST?</strong></p>
<p>REST (Representational State Transfer) is an architectural style for designing APIs. RESTful APIs are stateless, use standard HTTP methods, and treat everything as a resource.</p>

<p><strong>6 REST Constraints:</strong></p>
<ol>
<li><strong>Client-Server:</strong> Separation of concerns. Client handles UI, server handles data.</li>
<li><strong>Stateless:</strong> Each request contains all info needed. Server doesn't store client state between requests.</li>
<li><strong>Cacheable:</strong> Responses should indicate if they can be cached.</li>
<li><strong>Uniform Interface:</strong> Consistent resource identification, manipulation through representations.</li>
<li><strong>Layered System:</strong> Client can't tell if connected directly to server or intermediary.</li>
<li><strong>Code on Demand (optional):</strong> Server can send executable code to client.</li>
</ol>

<p><strong>Best Practices:</strong></p>
<ul>
<li>Use nouns for resources (/users, /posts), not verbs (/getUsers)</li>
<li>Use plural nouns (/users not /user)</li>
<li>Use nesting for relationships (/users/123/orders)</li>
<li>Version your API (/api/v1/users)</li>
<li>Use proper HTTP methods and status codes</li>
<li>Support filtering, sorting, pagination (?page=2&limit=10&sort=name)</li>
</ul>

<p><strong>Interview Q: Why is statelessness important?</strong></p>
<p>A: Enables horizontal scaling - any server can handle any request. No need for sticky sessions. Simpler architecture.</p>`,
        example: `<pre>// GOOD RESTful URLs
GET    /api/v1/users              # List all users
GET    /api/v1/users/123          # Get specific user
POST   /api/v1/users              # Create user
PUT    /api/v1/users/123          # Update user
DELETE /api/v1/users/123          # Delete user
GET    /api/v1/users/123/orders   # Get user's orders
GET    /api/v1/orders?status=pending&sort=-date

// BAD (not RESTful)
GET    /getUsers
POST   /createUser
GET    /getUserById?id=123
POST   /deleteUser

// Pagination response
{
  "data": [...],
  "meta": {
    "page": 2,
    "per_page": 10,
    "total": 100,
    "total_pages": 10
  },
  "links": {
    "first": "/users?page=1",
    "prev": "/users?page=1",
    "next": "/users?page=3",
    "last": "/users?page=10"
  }
}</pre>`
    },

    "WebSockets": {
        concept: `<p><strong>What are WebSockets?</strong></p>
<p>WebSockets provide full-duplex, bidirectional communication over a single TCP connection. Unlike HTTP (request-response), WebSocket keeps connection open for real-time data flow.</p>

<p><strong>HTTP vs WebSocket:</strong></p>
<ul>
<li><strong>HTTP:</strong> Client requests, server responds, connection closes. New request = new connection.</li>
<li><strong>WebSocket:</strong> Initial handshake, then persistent connection. Both can send anytime.</li>
</ul>

<p><strong>Use Cases:</strong></p>
<ul>
<li>Chat applications (real-time messages)</li>
<li>Live notifications</li>
<li>Stock tickers, sports scores</li>
<li>Multiplayer games</li>
<li>Collaborative editing (Google Docs)</li>
</ul>

<p><strong>Interview Q: When to use WebSocket vs HTTP polling?</strong></p>
<p>A: WebSocket when you need real-time, low-latency, bidirectional communication. Polling when updates are infrequent or you need simplicity.</p>

<p><strong>Interview Q: What is Socket.IO?</strong></p>
<p>A: Library that provides WebSocket-like API with fallbacks (long-polling) for older browsers, auto-reconnection, and rooms/namespaces.</p>`,
        example: `<pre>// Client-side WebSocket (vanilla JS)
const ws = new WebSocket('wss://example.com/chat');

ws.onopen = () => {
  console.log('Connected');
  ws.send(JSON.stringify({ type: 'join', room: 'general' }));
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received:', data);
};

ws.onclose = () => console.log('Disconnected');
ws.onerror = (error) => console.error('Error:', error);

// Server-side (Node.js with ws library)
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected');
  
  ws.on('message', (message) => {
    // Broadcast to all clients
    wss.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});

// Socket.IO example
const io = require('socket.io')(server);
io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // Broadcast to all
  });
});</pre>`
    },

    "CORS (Cross-Origin Resource Sharing)": {
        concept: `<p><strong>What is CORS?</strong></p>
<p>CORS is a security mechanism that restricts web pages from making requests to a different domain than the one serving the page. It prevents malicious sites from accessing data on other sites.</p>

<p><strong>Same-Origin Policy:</strong></p>
<p>By default, browsers block requests from page at origin A to origin B. Origins are "same" if protocol, domain, AND port match.</p>
<ul>
<li>http://example.com → https://example.com ❌ Different protocol</li>
<li>http://example.com → http://api.example.com ❌ Different subdomain</li>
<li>http://example.com:80 → http://example.com:3000 ❌ Different port</li>
</ul>

<p><strong>How CORS Works:</strong></p>
<ol>
<li>Browser sends request with Origin header</li>
<li>Server responds with Access-Control-Allow-Origin header</li>
<li>If origins match, browser allows response</li>
<li>For "unsafe" requests (non-GET, custom headers), browser sends preflight OPTIONS request first</li>
</ol>

<p><strong>Interview Q: What triggers a preflight request?</strong></p>
<p>A: Non-simple requests: PUT, DELETE methods; custom headers like Authorization; content-type other than form-data/text/json basics.</p>`,
        example: `<pre>// CORS Error (without proper headers)
// Browser blocks response:
"Access to fetch at 'https://api.example.com' from origin 
'https://mysite.com' has been blocked by CORS policy"

// Express CORS setup
const cors = require('cors');

// Allow all origins (not recommended for production)
app.use(cors());

// Allow specific origin
app.use(cors({
  origin: 'https://myapp.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true  // Allow cookies
}));

// Multiple origins
app.use(cors({
  origin: ['https://app1.com', 'https://app2.com']
}));

// CORS Headers explained
Access-Control-Allow-Origin: https://myapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Content-Type, Authorization
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 86400  // Cache preflight for 24h

// Preflight request
OPTIONS /api/users HTTP/1.1
Origin: https://myapp.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization</pre>`
    },

    "What Happens When You Type a URL": {
        concept: `<p><strong>The Complete Process:</strong></p>
<ol>
<li><strong>URL Parsing:</strong> Browser parses URL into protocol, domain, port, path</li>
<li><strong>DNS Resolution:</strong> Domain → IP address (check caches first)</li>
<li><strong>TCP Connection:</strong> 3-way handshake with server</li>
<li><strong>TLS Handshake:</strong> If HTTPS, establish encrypted connection</li>
<li><strong>HTTP Request:</strong> Send GET request with headers</li>
<li><strong>Server Processing:</strong> Server receives, processes, queries database</li>
<li><strong>HTTP Response:</strong> Server sends HTML response</li>
<li><strong>Browser Parsing:</strong> Parse HTML, discover CSS/JS/images</li>
<li><strong>Additional Requests:</strong> Fetch CSS, JS, images (parallel)</li>
<li><strong>DOM Construction:</strong> Build Document Object Model</li>
<li><strong>CSSOM Construction:</strong> Build CSS Object Model</li>
<li><strong>Render Tree:</strong> Combine DOM + CSSOM</li>
<li><strong>Layout:</strong> Calculate positions and sizes</li>
<li><strong>Paint:</strong> Fill in pixels</li>
<li><strong>Composite:</strong> Combine layers, display on screen</li>
</ol>

<p><strong>This is a VERY common interview question!</strong> Know each step.</p>`,
        example: `<pre>// Step-by-step: typing google.com

1. URL PARSING
   Protocol: https
   Domain: google.com
   Port: 443 (default for HTTPS)
   Path: /

2. DNS RESOLUTION
   Browser cache → OS cache → Router cache → ISP DNS
   → Root DNS → .com TLD → google.com authoritative
   Result: 142.250.80.14

3. TCP CONNECTION (3-way handshake)
   Client → Server: SYN
   Server → Client: SYN-ACK
   Client → Server: ACK

4. TLS HANDSHAKE
   Client Hello → Server Hello → Certificate
   → Key Exchange → Encrypted connection

5. HTTP REQUEST
   GET / HTTP/1.1
   Host: google.com
   User-Agent: Chrome/...
   Accept: text/html

6. SERVER RESPONSE
   HTTP/1.1 200 OK
   Content-Type: text/html
   [HTML content]

7. BROWSER RENDERING
   Parse HTML → Build DOM
   Parse CSS → Build CSSOM
   Combine → Render Tree
   Layout → Paint → Composite</pre>`
    },

    "Networking Interview Q&A": {
        concept: `<p><strong>Q: Explain TCP 3-way handshake</strong></p>
<p>A: 1) Client sends SYN with sequence number. 2) Server responds SYN-ACK with its sequence + acknowledging client's. 3) Client sends ACK. Connection established.</p>

<p><strong>Q: Why is DNS typically over UDP?</strong></p>
<p>A: DNS queries are small, fit in single packet. UDP is faster (no handshake). If response is too large (>512 bytes), switches to TCP.</p>

<p><strong>Q: What is a load balancer?</strong></p>
<p>A: Distributes incoming traffic across multiple servers. Algorithms: round-robin, least connections, IP hash. Can be L4 (TCP) or L7 (HTTP).</p>

<p><strong>Q: What is a CDN?</strong></p>
<p>A: Content Delivery Network - geographically distributed servers that cache content closer to users. Reduces latency, improves speed.</p>

<p><strong>Q: Explain the difference between forward proxy and reverse proxy</strong></p>
<p>A: Forward proxy sits in front of clients, makes requests on their behalf (VPN, bypass restrictions). Reverse proxy sits in front of servers, routes client requests (load balancing, caching).</p>

<p><strong>Q: What is NAT?</strong></p>
<p>A: Network Address Translation - maps private IPs to public IP. Allows multiple devices to share one public IP. Your home router does this.</p>`,
        example: `<pre>// Quick reference

PORT NUMBERS:
20, 21 - FTP
22 - SSH
23 - Telnet
25 - SMTP
53 - DNS
80 - HTTP
443 - HTTPS
3306 - MySQL
5432 - PostgreSQL
27017 - MongoDB

COMMON NETWORKING TOOLS:
ping      - Test connectivity (ICMP)
traceroute - Show hop path to destination
nslookup  - DNS lookup
dig       - Advanced DNS lookup
netstat   - Show network connections
curl      - HTTP client
telnet    - Test TCP connection

# Test if port is open
telnet google.com 443

# Check your public IP
curl ifconfig.me

# DNS lookup
nslookup google.com
dig google.com</pre>`
    }
};

// Export for use in main data file
if (typeof module !== 'undefined') {
    module.exports = networkingData;
}
