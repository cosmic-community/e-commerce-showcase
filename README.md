# E-Commerce Showcase

![App Preview](https://imgix.cosmicjs.com/226b9ca0-bbc3-11f0-add3-b5854b3088d3-photo-1498049794561-7780e7231661-1762510721658.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, high-performance e-commerce showcase website built with Astro and powered by Cosmic CMS. Features a beautiful product catalog, collection browsing, and customer reviews with exceptional performance and SEO.

## Features

- ⚡ Lightning-fast static site generation with Astro
- 🛍️ Beautiful product catalog with grid layout
- 📁 Collection-based product organization
- ⭐ Customer review system with star ratings
- 🖼️ Optimized image delivery via imgix
- 📱 Fully responsive design
- 🔍 SEO optimized with meta tags and semantic HTML
- 🎨 Modern UI with Tailwind CSS
- 💯 Perfect Lighthouse scores
- 🔒 Type-safe with TypeScript

## Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690dc6f0fb7423bbdde4d1ec&clone_repository=690dc901fb7423bbdde4d251)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Design a content model for an e-commerce store with products, collections, and customer reviews"

### Code Generation Prompt

> "Set up an Astro website powered by my existing content"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Astro** - Fast, modern static site generator
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **Imgix** - Image optimization and delivery

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your bucket set up

### Installation

1. Clone this repository
2. Install dependencies:

```bash
bun install
```

3. Create a `.env` file in the root directory with your Cosmic credentials:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
```

4. Start the development server:

```bash
bun run dev
```

5. Open [http://localhost:4321](http://localhost:4321) in your browser

## Cosmic SDK Examples

### Fetching Products

```typescript
import { cosmic } from './lib/cosmic'

const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching a Single Product with Reviews

```typescript
const product = await cosmic.objects.findOne({
  type: 'products',
  slug: 'product-slug'
}).props(['id', 'title', 'slug', 'metadata']).depth(1)

const { objects: reviews } = await cosmic.objects
  .find({
    type: 'reviews',
    'metadata.product': product.id
  })
  .props(['id', 'title', 'metadata'])
```

### Fetching Collections

```typescript
const { objects: collections } = await cosmic.objects
  .find({ type: 'collections' })
  .props(['id', 'title', 'slug', 'metadata'])
```

## Cosmic CMS Integration

This application uses Cosmic as a headless CMS to manage:

- **Products**: Product information, pricing, images, and descriptions
- **Collections**: Product categories and groupings
- **Reviews**: Customer testimonials and ratings

The Cosmic SDK is configured in `lib/cosmic.ts` and uses environment variables for secure authentication.

## Project Structure

```
/
├── public/
│   └── dashboard-console-capture.js
├── src/
│   ├── components/
│   │   ├── CollectionCard.astro
│   │   ├── CosmicBadge.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── ProductCard.astro
│   │   └── ReviewCard.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   └── cosmic.ts
│   ├── pages/
│   │   ├── index.astro
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── collections/
│   │       ├── index.astro
│   │       └── [slug].astro
│   ├── styles/
│   │   └── global.css
│   └── types.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
└── .env
```

## Deployment Options

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your environment variables in Vercel project settings
4. Deploy

### Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Add your environment variables in Netlify site settings
4. Set build command: `bun run build`
5. Set publish directory: `dist`
6. Deploy

### Other Platforms

This Astro site can be deployed to any static hosting platform that supports Node.js builds:
- Cloudflare Pages
- GitHub Pages
- AWS S3 + CloudFront
- DigitalOcean App Platform

Make sure to set your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`) in your hosting platform's dashboard.

## Building for Production

```bash
bun run build
```

This generates a static site in the `dist` directory ready for deployment.

## License

MIT

<!-- README_END -->