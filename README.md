# Friern Barnet Community Library (FBCL)

A modern, accessible website for the  Friern Barnet Community Library built with Next.js 14, TypeScript, and Tailwind CSS.

## 🏗️ Project Structure

```
library-fbcl/
├── app/                    # Next.js App Router pages
│   ├── (routes)/          # Route groups for better organization
│   ├── globals.css        # Global styles and Tailwind imports
│   └── layout.tsx         # Root layout with metadata
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   └── ui/               # Reusable UI components
├── lib/
│   ├── data.ts           # Static data and content
│   └── utils.ts          # Utility functions
├── public/               # Static assets
└── types/               # TypeScript type definitions
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📋 Development Guidelines

### File Naming Conventions
- **Pages**: kebab-case (`about/page.tsx`)
- **Components**: PascalCase (`Header.tsx`)
- **Utilities**: camelCase (`utils.ts`)

### Component Organization
- Layout components in `components/layout/`
- Reusable UI components in `components/ui/`
- Page-specific components in `app/(route)/components/`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Custom components in `globals.css` with `@layer components`
- Responsive design with mobile-first approach

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Features

- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: Optimized meta tags and structured data
- **Performance**: Image optimization and lazy loading
- **Responsive**: Mobile-first design
- **TypeScript**: Full type safety

## 🎨 Design System

### Colors
- Primary: Slate gray scale
- Secondary: Orange accent
- Accent: Blue highlights
- Warm: Yellow/gold accents

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Accent: Crimson Text (serif)

## 📄 License

This project is maintained by the Friern Barnet Community Library.