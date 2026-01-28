# Headless CMS Integration Plan

## Recommended CMS: Sanity.io

For a project like **Circolo ANSPI Don Primo Mazzolari** where low cost and ease of use for non-technical staff are paramount, Sanity.io is the recommended choice.

### Why Sanity.io?
1.  **Cost**: Their "Free Forever" tier is the most generous in the industry for small organizations. It includes 3 users, 100k API requests, and 10GB of assets.
2.  **Next.js Native**: It integrates seamlessly with Next.js. You can embed the entire CMS (Sanity Studio) as a route within your existing site (e.g., `/studio`), meaning editors never have to leave your site.
3.  **Non-Technical Friendly**: The interface is clean, customizable, and supports real-time collaborative editing.
4.  **No Infrastructure**: It is fully hosted, so you don't need to manage databases or servers.

---

### Step-by-Step Integration Guide

#### 1. Setup Sanity Project
1.  Create a free account at [sanity.io](https://www.sanity.io/).
2.  In your terminal, at the root of your project, install dependencies:
    ```bash
    npm install next-sanity @sanity/image-url @sanity/vision
    ```
3.  Create a Sanity project via their dashboard and get your `projectId` and `dataset` (usually "production").

#### 2. Configure Environment Variables
Create a `.env.local` file (and update your deployment platform like Vercel):
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
```

#### 3. Define Content Schemas
Create a folder `src/sanity/schemas`. For the "Eventi" section in `page.tsx`, create `event.ts`:
```typescript
// src/sanity/schemas/event.ts
export default {
  name: 'event',
  title: 'Eventi',
  type: 'document',
  fields: [
    { name: 'title', title: 'Titolo', type: 'string' },
    { name: 'date', title: 'Data', type: 'string', description: 'es: Sabato 15 Febbraio' },
    { name: 'description', title: 'Descrizione', type: 'text' },
  ],
}
```

#### 4. Embed the CMS (Sanity Studio)
Next.js allows you to host the CMS inside your app. Create a file at `src/app/studio/[[...index]]/page.tsx`:
```tsx
import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config' // Your Sanity config file

export default function StudioPage() {
  return <NextStudio config={config} />
}
```
*Non-technical users can now manage content by simply going to `yoursite.com/studio`.*

#### 5. Fetch Data in your Components
Create a client utility in `src/lib/sanity.ts`:
```typescript
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false, // Set to true for production
})
```

#### 6. Update the Homepage
Replace the hardcoded `eventi` array in `src/app/page.tsx` with a dynamic fetch:
```typescript
import { client } from "@/lib/sanity";

async function getEvents() {
  return await client.fetch(`*[_type == "event"] | order(_createdAt desc)`);
}

export default async function HomePage() {
  const eventi = await getEvents();
  // ... rest of your component mapping over eventi
}
```

---

### Alternatives Considered
*   **Decap CMS (formerly Netlify CMS)**: 100% free (Git-based), but the editing experience is less polished and requires a "commit" for every change.
*   **Contentful**: Very robust, but the free tier has strict limits on "Content Types".
*   **Strapi**: Excellent, but requires you to host a Node.js server and a database, adding cost and maintenance.
