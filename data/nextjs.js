// NEXT.JS - Comprehensive Interview Prep
const nextjsData = {
    "SSR vs SSG vs CSR vs ISR": {
        concept: `<p><strong>Rendering Strategies in Next.js:</strong></p>

<p><strong>CSR (Client-Side Rendering):</strong></p>
<ul>
<li>JavaScript renders page in browser</li>
<li>Initial load shows blank/loading state</li>
<li>Good for: Dashboards, user-specific content</li>
<li>Bad for: SEO, slow devices</li>
</ul>

<p><strong>SSR (Server-Side Rendering):</strong></p>
<ul>
<li>HTML generated on server for EACH request</li>
<li>Full HTML sent to browser, then hydrated</li>
<li>Good for: Dynamic content, SEO needed</li>
<li>Trade-off: Server load, TTFB latency</li>
</ul>

<p><strong>SSG (Static Site Generation):</strong></p>
<ul>
<li>HTML generated at BUILD time</li>
<li>Pages served from CDN (very fast)</li>
<li>Good for: Blogs, docs, marketing pages</li>
<li>Trade-off: Must rebuild to update</li>
</ul>

<p><strong>ISR (Incremental Static Regeneration):</strong></p>
<ul>
<li>SSG + automatic revalidation</li>
<li>Serves stale while regenerating</li>
<li>Best of both worlds</li>
</ul>

<p><strong>Interview Q: When to use each?</strong></p>
<p>A: Static content → SSG. Personalized/real-time → SSR/CSR. Static that changes → ISR.</p>`,
        example: `<pre>// CSR - useEffect + useState (no special Next.js)
'use client';
function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('/api/data').then(r => r.json()).then(setData);
  }, []);
  if (!data) return <Loading />;
  return <div>{data.value}</div>;
}

// SSR - App Router (Server Component by default)
// app/products/page.js
async function ProductsPage() {
  const data = await fetch('https://api.example.com/products', {
    cache: 'no-store'  // SSR - fetch on every request
  });
  const products = await data.json();
  return <ProductList products={products} />;
}

// SSG - Static with no dynamic data
// app/about/page.js
function AboutPage() {
  return <div>Static content</div>;
}

// SSG with Dynamic Params
// app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map(post => ({ slug: post.slug }));
}

async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  return <article>{post.content}</article>;
}

// ISR - Revalidate every 60 seconds
async function ProductsPage() {
  const data = await fetch('https://api.example.com/products', {
    next: { revalidate: 60 }  // ISR
  });
  return <ProductList products={await data.json()} />;
}

// On-demand revalidation
// app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  const { path } = await request.json();
  revalidatePath(path);
  return Response.json({ revalidated: true });
}</pre>`
    },

    "App Router & File Structure": {
        concept: `<p><strong>Next.js 13+ App Router</strong> uses file-system based routing with special files.</p>

<p><strong>Special Files:</strong></p>
<ul>
<li><strong>page.js:</strong> Unique UI, makes route accessible</li>
<li><strong>layout.js:</strong> Shared UI, wraps pages and child layouts</li>
<li><strong>loading.js:</strong> Loading UI (Suspense boundary)</li>
<li><strong>error.js:</strong> Error UI (Error boundary)</li>
<li><strong>not-found.js:</strong> 404 page</li>
<li><strong>route.js:</strong> API endpoint</li>
</ul>

<p><strong>Routing:</strong></p>
<ul>
<li>app/page.js → /</li>
<li>app/about/page.js → /about</li>
<li>app/blog/[slug]/page.js → /blog/:slug (dynamic)</li>
<li>app/(group)/page.js → Route group (no URL impact)</li>
<li>app/@modal/page.js → Parallel route</li>
</ul>

<p><strong>Interview Q: Difference between Pages and App Router?</strong></p>
<p>A: App Router uses React Server Components by default, has nested layouts, better data fetching. Pages Router is older, CSR-first, uses getServerSideProps/getStaticProps.</p>`,
        example: `<pre>// Folder structure
app/
├── layout.js       // Root layout (html, body)
├── page.js         // Home page (/)
├── globals.css
├── loading.js      // Global loading
├── error.js        // Global error
├── not-found.js    // Global 404
│
├── about/
│   └── page.js     // /about
│
├── blog/
│   ├── page.js     // /blog (list)
│   └── [slug]/
│       ├── page.js     // /blog/:slug
│       └── loading.js  // Loading for this route
│
├── api/
│   └── users/
│       └── route.js    // API: /api/users
│
└── (marketing)/    // Route group
    ├── layout.js   // Shared layout for group
    └── pricing/
        └── page.js // /pricing

// Root layout (required)
// app/layout.js
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav>...</nav>
        {children}
        <footer>...</footer>
      </body>
    </html>
  );
}

// Nested layout
// app/blog/layout.js
export default function BlogLayout({ children }) {
  return (
    <div className="blog-wrapper">
      <BlogSidebar />
      <main>{children}</main>
    </div>
  );
}

// Dynamic route
// app/products/[id]/page.js
export default function ProductPage({ params }) {
  return <h1>Product: {params.id}</h1>;
}

// Catch-all route
// app/docs/[...slug]/page.js
// Matches /docs/a, /docs/a/b, /docs/a/b/c
export default function DocsPage({ params }) {
  // params.slug = ['a', 'b', 'c']
}</pre>`
    },

    "Server & Client Components": {
        concept: `<p><strong>React Server Components (RSC):</strong></p>
<ul>
<li>Run ONLY on server, not in browser</li>
<li>Can directly access database, file system</li>
<li>Zero JavaScript sent to client for component</li>
<li>Cannot use useState, useEffect, onClick, etc.</li>
<li><strong>DEFAULT in App Router</strong></li>
</ul>

<p><strong>Client Components:</strong></p>
<ul>
<li>Run on client (and server for hydration)</li>
<li>Can use hooks, events, browser APIs</li>
<li>Add 'use client' directive at top</li>
</ul>

<p><strong>Best Practice:</strong></p>
<p>Keep components on server by default. Only use 'use client' when you need interactivity.</p>

<p><strong>Interview Q: Why use Server Components?</strong></p>
<p>A: Smaller JS bundle, direct data access, better security (API keys on server), faster initial load.</p>`,
        example: `<pre>// SERVER COMPONENT (default)
// app/products/page.js
import { db } from '@/lib/db';

async function ProductsPage() {
  // This runs on server only!
  const products = await db.query('SELECT * FROM products');
  
  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
      <AddToCartButton />  {/* Client component */}
    </div>
  );
}

// CLIENT COMPONENT
// components/AddToCartButton.js
'use client';  // Must be first line

import { useState } from 'react';

function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);
  
  const handleClick = async () => {
    setLoading(true);
    await addToCart(productId);
    setLoading(false);
  };
  
  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}

// Passing Server Component to Client
// This pattern works!
function ServerParent() {
  return (
    <ClientComponent>
      <ServerChild />  {/* Passed as children */}
    </ClientComponent>
  );
}

// Server Component can import Client
// Client Component CANNOT import Server directly
// Client can receive Server as children/props

// Fetching in Server Component
async function UserProfile({ userId }) {
  const user = await fetch(\`https://api.example.com/users/\${userId}\`);
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}

// Client Component for interactivity
'use client';
function SearchInput({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <input 
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && onSearch(query)}
    />
  );
}</pre>`
    },

    "API Routes": {
        concept: `<p><strong>API Routes in App Router:</strong></p>
<p>Create API endpoints using route.js files. Handle HTTP methods with exported functions.</p>

<p><strong>HTTP Methods:</strong></p>
<ul>
<li>export async function GET(request) { }</li>
<li>export async function POST(request) { }</li>
<li>export async function PUT(request) { }</li>
<li>export async function DELETE(request) { }</li>
<li>export async function PATCH(request) { }</li>
</ul>

<p><strong>Request Object:</strong></p>
<ul>
<li>request.json() - Parse JSON body</li>
<li>request.formData() - Parse form data</li>
<li>request.nextUrl.searchParams - Query params</li>
</ul>

<p><strong>Response:</strong></p>
<ul>
<li>Response.json(data, { status: 200 })</li>
<li>NextResponse for headers, cookies, redirects</li>
</ul>`,
        example: `<pre>// app/api/users/route.js
import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

// GET /api/users
export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const page = searchParams.get('page') || 1;
  
  const users = await db.users.findMany({
    skip: (page - 1) * 10,
    take: 10
  });
  
  return Response.json(users);
}

// POST /api/users
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email } = body;
    
    if (!name || !email) {
      return Response.json(
        { error: 'Name and email required' },
        { status: 400 }
      );
    }
    
    const user = await db.users.create({
      data: { name, email }
    });
    
    return Response.json(user, { status: 201 });
  } catch (error) {
    return Response.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// app/api/users/[id]/route.js
// GET /api/users/:id
export async function GET(request, { params }) {
  const user = await db.users.findUnique({
    where: { id: params.id }
  });
  
  if (!user) {
    return Response.json(
      { error: 'User not found' },
      { status: 404 }
    );
  }
  
  return Response.json(user);
}

// DELETE /api/users/:id
export async function DELETE(request, { params }) {
  await db.users.delete({ where: { id: params.id } });
  return new Response(null, { status: 204 });
}

// Using NextResponse for cookies/headers
export async function GET(request) {
  const response = NextResponse.json({ success: true });
  response.cookies.set('token', 'value', {
    httpOnly: true,
    secure: true
  });
  return response;
}</pre>`
    },

    "Data Fetching Patterns": {
        concept: `<p><strong>App Router Data Fetching:</strong></p>

<p><strong>1. Server Components (Recommended):</strong></p>
<ul>
<li>Fetch directly with async/await</li>
<li>Use native fetch with Next.js extensions</li>
<li>Caching is automatic and configurable</li>
</ul>

<p><strong>2. Client Components:</strong></p>
<ul>
<li>useEffect + fetch (manual)</li>
<li>SWR or React Query (recommended)</li>
</ul>

<p><strong>Caching Options:</strong></p>
<ul>
<li><strong>cache: 'force-cache'</strong> - Cache indefinitely (SSG)</li>
<li><strong>cache: 'no-store'</strong> - No caching (SSR)</li>
<li><strong>next: { revalidate: 60 }</strong> - ISR</li>
</ul>

<p><strong>Interview Q: Why fetch in Server Components?</strong></p>
<p>A: Data fetched on server, HTML sent to client. No client-side loading states, no exposed API endpoints, better performance.</p>`,
        example: `<pre>// Server Component - Direct fetch
async function ProductPage({ params }) {
  // SSG - cached forever
  const product = await fetch(
    \`https://api.example.com/products/\${params.id}\`,
    { cache: 'force-cache' }
  ).then(r => r.json());
  
  // SSR - fresh on every request
  const reviews = await fetch(
    \`https://api.example.com/reviews/\${params.id}\`,
    { cache: 'no-store' }
  ).then(r => r.json());
  
  // ISR - revalidate every 60 seconds
  const related = await fetch(
    \`https://api.example.com/related/\${params.id}\`,
    { next: { revalidate: 60 } }
  ).then(r => r.json());
  
  return (
    <div>
      <h1>{product.name}</h1>
      <Reviews data={reviews} />
      <Related products={related} />
    </div>
  );
}

// Parallel data fetching
async function Dashboard() {
  // Fetch in parallel (not waterfall)
  const [user, orders, stats] = await Promise.all([
    getUser(),
    getOrders(),
    getStats()
  ]);
  
  return ...;
}

// Client Component - SWR
'use client';
import useSWR from 'swr';

function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(
    \`/api/users/\${userId}\`,
    (url) => fetch(url).then(r => r.json())
  );
  
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  return <div>{data.name}</div>;
}

// Server Actions (Next.js 14+)
// Direct mutation without API routes
'use server';

async function addTodo(formData) {
  const title = formData.get('title');
  await db.todos.create({ data: { title } });
  revalidatePath('/todos');
}

// In component
<form action={addTodo}>
  <input name="title" />
  <button type="submit">Add</button>
</form></pre>`
    },

    "Next.js Interview Q&A": {
        concept: `<p><strong>Q: Next.js vs Create React App?</strong></p>
<p>A: CRA is pure client-side. Next.js adds SSR/SSG, routing, API routes, optimizations. Next.js for production, CRA for learning/SPAs.</p>

<p><strong>Q: What is hydration?</strong></p>
<p>A: Process where React attaches event handlers to server-rendered HTML. Makes static HTML interactive without re-rendering.</p>

<p><strong>Q: How does Next.js optimize images?</strong></p>
<p>A: next/image component provides: lazy loading, responsive sizes, modern formats (WebP), prevents layout shift.</p>

<p><strong>Q: What are Parallel Routes?</strong></p>
<p>A: @folder convention to render multiple pages in same layout simultaneously. Used for modals, dashboards with independent sections.</p>

<p><strong>Q: What are Intercepting Routes?</strong></p>
<p>A: (..) convention to show route as modal when navigated client-side, but as full page on direct URL. Instagram-style modals.</p>`,
        example: `<pre>// Image optimization
import Image from 'next/image';

&lt;Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority  // Load immediately (LCP)
  placeholder="blur"
  blurDataURL="..."
/&gt;

// Responsive image
&lt;Image
  src="/photo.jpg"
  alt=""
  fill  // Fill container
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: 'cover' }}
/&gt;

// Metadata for SEO
// app/page.js
export const metadata = {
  title: 'Home | My Site',
  description: 'Welcome to my site',
  openGraph: {
    title: 'Home | My Site',
    images: ['/og-image.jpg']
  }
};

// Dynamic metadata
export async function generateMetadata({ params }) {
  const product = await getProduct(params.id);
  return {
    title: product.name,
    description: product.description
  };
}

// Loading UI (Suspense)
// app/dashboard/loading.js
export default function Loading() {
  return <Skeleton />;
}

// Error handling
// app/dashboard/error.js
'use client';
export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={reset}>Try again</button>
    </div>
  );
}</pre>`
    }
};

if (typeof module !== 'undefined') {
    module.exports = nextjsData;
}
