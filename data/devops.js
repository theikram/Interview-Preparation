// DevOps & Cloud - Basics Interview Prep
const devopsData = {
    "Git Basics": {
        concept: `<p><strong>What is Git?</strong></p>
<p>Distributed version control system. Tracks changes, enables collaboration, maintains history.</p>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Repository</strong> - Project folder tracked by Git</li>
<li><strong>Commit</strong> - Snapshot of changes at a point in time</li>
<li><strong>Branch</strong> - Independent line of development</li>
<li><strong>Remote</strong> - Server copy (GitHub, GitLab, etc.)</li>
<li><strong>HEAD</strong> - Pointer to current commit/branch</li>
</ul>

<p><strong>Basic Workflow:</strong></p>
<ol>
<li>Make changes to files</li>
<li>Stage changes (git add)</li>
<li>Commit changes (git commit)</li>
<li>Push to remote (git push)</li>
</ol>

<p><strong>Git vs GitHub:</strong></p>
<p>Git is the tool (version control). GitHub is a hosting service for Git repos (like GitLab, Bitbucket).</p>`,
        example: `<pre># Initialize & Clone
git init                    # Create new repo
git clone [url]             # Clone existing repo

# Basic workflow
git status                  # Check status
git add .                   # Stage all changes
git add file.txt            # Stage specific file
git commit -m "message"     # Commit with message
git push origin main        # Push to remote

# Branching
git branch                  # List branches
git branch feature-x        # Create branch
git checkout feature-x      # Switch to branch
git checkout -b feature-x   # Create and switch
git switch -c feature-x     # Modern way

# Merging
git checkout main
git merge feature-x         # Merge feature into main
git branch -d feature-x     # Delete branch

# Remote
git remote -v               # List remotes
git fetch                   # Download changes (no merge)
git pull                    # Fetch + merge
git push                    # Upload changes

# History
git log                     # View commits
git log --oneline           # Compact view
git diff                    # View changes
git blame file.txt          # Who changed each line

# Undo
git restore file.txt        # Discard changes
git reset HEAD~1            # Undo last commit (keep changes)
git reset --hard HEAD~1     # Undo last commit (discard changes)
git revert [commit]         # Create opposite commit

# Stash
git stash                   # Save changes temporarily
git stash pop               # Restore stashed changes</pre>`
    },

    "Docker Basics": {
        concept: `<p><strong>What is Docker?</strong></p>
<p>Platform for developing, shipping, and running applications in containers. "Works on my machine" problem solved.</p>

<p><strong>Key Concepts:</strong></p>
<ul>
<li><strong>Image</strong> - Blueprint/template (like a class)</li>
<li><strong>Container</strong> - Running instance of image (like an object)</li>
<li><strong>Dockerfile</strong> - Instructions to build an image</li>
<li><strong>Docker Hub</strong> - Registry for sharing images</li>
</ul>

<p><strong>Container vs VM:</strong></p>
<ul>
<li>VMs virtualize hardware (heavy, full OS)</li>
<li>Containers virtualize OS (lightweight, share kernel)</li>
<li>Containers start in seconds, use less resources</li>
</ul>

<p><strong>Benefits:</strong></p>
<ul>
<li>Consistent environments (dev = prod)</li>
<li>Isolation between applications</li>
<li>Easy scaling and deployment</li>
</ul>`,
        example: `<pre># Basic Docker commands
docker pull node:18          # Download image
docker images                 # List images
docker run node:18            # Run container
docker ps                     # List running containers
docker ps -a                  # All containers
docker stop [container_id]    # Stop container
docker rm [container_id]      # Remove container
docker rmi [image_id]         # Remove image

# Run with options
docker run -d -p 3000:3000 --name myapp myimage
# -d = detached (background)
# -p = port mapping (host:container)
# --name = container name

# Dockerfile example (Node.js app)
FROM node:18-alpine

WORKDIR /app

# Copy package files first (layer caching)
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Environment variables
ENV NODE_ENV=production

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]

# Build and run
docker build -t myapp .          # Build image
docker run -p 3000:3000 myapp    # Run container

# Docker Compose (multi-container)
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mongo:latest
    volumes:
      - db-data:/data/db

volumes:
  db-data:

# Commands
docker-compose up -d         # Start all services
docker-compose down          # Stop all services
docker-compose logs -f       # View logs</pre>`
    },

    "CI/CD Overview": {
        concept: `<p><strong>CI - Continuous Integration:</strong></p>
<ul>
<li>Automatically build and test on every code change</li>
<li>Catch bugs early</li>
<li>Everyone integrates frequently (multiple times per day)</li>
</ul>

<p><strong>CD - Continuous Delivery/Deployment:</strong></p>
<ul>
<li><strong>Delivery:</strong> Automate release process, manual deploy trigger</li>
<li><strong>Deployment:</strong> Fully automated deploy to production</li>
</ul>

<p><strong>CI/CD Pipeline Stages:</strong></p>
<ol>
<li><strong>Source:</strong> Code push triggers pipeline</li>
<li><strong>Build:</strong> Compile, bundle code</li>
<li><strong>Test:</strong> Run automated tests</li>
<li><strong>Deploy:</strong> Push to staging/production</li>
</ol>

<p><strong>Popular Tools:</strong></p>
<ul>
<li>GitHub Actions, GitLab CI</li>
<li>Jenkins, CircleCI, Travis CI</li>
<li>AWS CodePipeline, Azure DevOps</li>
</ul>`,
        example: `<pre># GitHub Actions workflow (.github/workflows/ci.yml)
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Run linter
        run: npm run lint

  deploy:
    needs: test  # Only run if test passes
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'

# Typical pipeline stages:
# 1. Lint → Check code style
# 2. Test → Run unit/integration tests  
# 3. Build → Create production build
# 4. Deploy Staging → Deploy to staging env
# 5. E2E Tests → Run browser tests on staging
# 6. Deploy Prod → Deploy to production</pre>`
    },

    "AWS Basics": {
        concept: `<p><strong>Key AWS Services:</strong></p>

<p><strong>Compute:</strong></p>
<ul>
<li><strong>EC2</strong> - Virtual servers (instances)</li>
<li><strong>Lambda</strong> - Serverless functions (pay per execution)</li>
<li><strong>ECS/EKS</strong> - Container orchestration</li>
</ul>

<p><strong>Storage:</strong></p>
<ul>
<li><strong>S3</strong> - Object storage (files, images, backups)</li>
<li><strong>EBS</strong> - Block storage for EC2</li>
</ul>

<p><strong>Database:</strong></p>
<ul>
<li><strong>RDS</strong> - Managed relational (MySQL, PostgreSQL)</li>
<li><strong>DynamoDB</strong> - NoSQL database</li>
</ul>

<p><strong>Security:</strong></p>
<ul>
<li><strong>IAM</strong> - Identity and Access Management</li>
<li><strong>Security Groups</strong> - Virtual firewalls</li>
</ul>

<p><strong>Networking:</strong></p>
<ul>
<li><strong>VPC</strong> - Virtual Private Cloud</li>
<li><strong>Route 53</strong> - DNS service</li>
<li><strong>CloudFront</strong> - CDN</li>
</ul>`,
        example: `<pre># AWS CLI basics
aws configure                    # Set up credentials

# S3
aws s3 ls                        # List buckets
aws s3 cp file.txt s3://bucket/  # Upload file
aws s3 sync ./folder s3://bucket/  # Sync folder

# EC2
aws ec2 describe-instances       # List instances
aws ec2 start-instances --instance-ids i-xxx
aws ec2 stop-instances --instance-ids i-xxx

# IAM Policy example (JSON)
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": "arn:aws:s3:::my-bucket/*"
        }
    ]
}

# Common interview topics:
# - What is region vs availability zone?
#   Region = geographic area (us-east-1)
#   AZ = data center within region (us-east-1a)
#
# - VPC basics
#   Private network in cloud
#   Subnets, route tables, internet gateway
#
# - Security Groups vs NACLs
#   SG = instance level, stateful
#   NACL = subnet level, stateless
#
# - S3 storage classes
#   Standard, IA, Glacier for different access patterns</pre>`
    },

    "Linux Basic Commands": {
        concept: `<p><strong>Essential Linux Commands:</strong></p>

<p><strong>Navigation:</strong></p>
<ul>
<li><strong>pwd</strong> - Print working directory</li>
<li><strong>cd</strong> - Change directory</li>
<li><strong>ls</strong> - List files (-la for all with details)</li>
</ul>

<p><strong>Files:</strong></p>
<ul>
<li><strong>cat, less, head, tail</strong> - View file contents</li>
<li><strong>cp, mv, rm</strong> - Copy, move, remove</li>
<li><strong>mkdir, rmdir</strong> - Create/remove directory</li>
<li><strong>touch</strong> - Create empty file</li>
<li><strong>chmod, chown</strong> - Change permissions/ownership</li>
</ul>

<p><strong>Process:</strong></p>
<ul>
<li><strong>ps</strong> - List processes</li>
<li><strong>top, htop</strong> - System monitor</li>
<li><strong>kill</strong> - Terminate process</li>
</ul>

<p><strong>Network:</strong></p>
<ul>
<li><strong>curl, wget</strong> - Download files</li>
<li><strong>ssh</strong> - Remote login</li>
<li><strong>scp</strong> - Secure copy</li>
</ul>`,
        example: `<pre># Navigation
pwd                     # /home/user
cd /var/log             # Go to directory
cd ..                   # Go up one level
cd ~                    # Go to home directory
ls -la                  # List all with permissions

# Files
cat file.txt            # View entire file
head -n 10 file.txt     # First 10 lines
tail -f log.txt         # Follow log file (live)
cp file.txt backup.txt  # Copy file
mv old.txt new.txt      # Rename/move
rm file.txt             # Delete file
rm -rf folder/          # Delete folder (careful!)
mkdir -p a/b/c          # Create nested folders

# Permissions (chmod)
chmod 755 script.sh     # rwxr-xr-x
chmod +x script.sh      # Add execute permission
# 7=rwx, 6=rw-, 5=r-x, 4=r--

# Searching
find . -name "*.js"           # Find files by name
grep "error" log.txt          # Search in file
grep -r "TODO" ./src          # Search recursively

# Process management
ps aux                        # All processes
ps aux | grep node            # Filter by name
kill 1234                     # Kill by PID
kill -9 1234                  # Force kill
pkill node                    # Kill by name

# Network
curl https://api.example.com   # HTTP request
wget https://example.com/file  # Download file
ssh user@server                # Remote login
scp file.txt user@server:/path # Copy to remote

# Pipes and redirection
cat file.txt | grep error      # Pipe output
echo "hello" > file.txt        # Write (overwrite)
echo "hello" >> file.txt       # Append
command 2>&1 > log.txt         # Redirect stderr

# Package management (Ubuntu/Debian)
apt update                     # Update package list
apt install nginx              # Install package
apt remove nginx               # Remove package</pre>`
    },

    "Vercel & Deployment": {
        concept: `<p><strong>What is Vercel?</strong></p>
<p>Platform for frontend deployment and serverless functions. Optimized for Next.js but works with any framework.</p>

<p><strong>Features:</strong></p>
<ul>
<li>Automatic deployments from Git</li>
<li>Preview deployments for PRs</li>
<li>Serverless functions (API routes)</li>
<li>Edge network (global CDN)</li>
<li>Custom domains, SSL included</li>
</ul>

<p><strong>Deployment Options:</strong></p>
<ul>
<li><strong>Vercel</strong> - Best for Next.js, automatic</li>
<li><strong>Netlify</strong> - Similar, good for React/static</li>
<li><strong>Railway</strong> - Full-stack, databases included</li>
<li><strong>Render</strong> - Docker support, databases</li>
<li><strong>AWS Amplify</strong> - AWS ecosystem</li>
</ul>`,
        example: `<pre># Vercel CLI
npm i -g vercel         # Install CLI
vercel login            # Login
vercel                  # Deploy (interactive)
vercel --prod           # Deploy to production

# Environment variables
vercel env add          # Add env variable
# Or in vercel.json:
{
  "env": {
    "API_KEY": "@api-key-secret"
  }
}

# vercel.json configuration
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "nextjs",
  "regions": ["iad1"],
  "redirects": [
    { "source": "/old", "destination": "/new" }
  ],
  "headers": [
    {
      "source": "/api/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache" }
      ]
    }
  ]
}

# Serverless functions (Next.js)
// pages/api/hello.js or app/api/hello/route.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello' });
}

# Typical workflow:
# 1. Push to GitHub
# 2. Vercel automatically builds
# 3. Creates preview URL for branch/PR
# 4. Merge to main → deploys to production

# Preview deployments
# - Every push creates unique URL
# - Review changes before merging
# - Share with team for feedback</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = devopsData;
}
