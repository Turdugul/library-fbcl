# 📚 FBCL Frontend - Friern Barnet Community Library

[![Next.js](https://img.shields.io/badge/Next.js-14.2.30-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A modern, responsive, and accessible frontend for the Friern Barnet Community Library website. Built with React 18, Next.js App Router, TypeScript, and Tailwind CSS.

## ✨ Features

### 🎯 Core Features
- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop
- **Accessibility Compliant** - WCAG 2.1 AA standards with proper ARIA roles, focus management, and keyboard navigation
- **Modern Animations** - Smooth page transitions and scroll-triggered animations
- **SEO Optimized** - Meta tags, structured data, and semantic HTML
- **Performance Optimized** - Fast loading times with Next.js optimizations

### 📄 Pages & Components
- **Home Page** - Hero section, stats, about section, featured events, testimonials
- **About Page** - Mission statement, timeline, impact stats
- **Events Page** - Upcoming and past events with filtering
- **Testimonials Page** - Community stories with ratings and avatars
- **Trustees Page** - Board member profiles and governance information
- **Volunteer Page** - Volunteer opportunities, roles, and application process
- **Hire Us Page** - Space rental information and booking system
- **Contact Page** - Contact form, map, and contact information

### 🧩 Global Components
- **Header** - Responsive navigation with hamburger menu
- **Footer** - Contact info, social links, and quick navigation
- **Layout System** - Consistent spacing and typography
- **Reusable Components** - Buttons, cards, forms, and modals

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Next.js](https://nextjs.org/) | 14.2.30 | React framework with App Router |
| [React](https://reactjs.org/) | 18.2.0 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.2.2 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 3.3.5 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | 0.292.0 | Icon library |
| [Headless UI](https://headlessui.com/) | 1.7.17 | Accessible UI components |

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Turdugul/library-fbcl.git
   cd library-fbcl
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
library-fbcl/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/             # About page and gallery
│   ├── catalogue/         # Catalogue pages
│   ├── events/            # Events page and gallery
│   ├── testimonials/      # Testimonials page
│   ├── trustees/          # Trustees page
│   ├── volunteer/         # Volunteer page and application
│   ├── hire-us/           # Hire Us page
│   └── contact/           # Contact page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   └── ui/               # UI components (Button, Card, etc.)
├── lib/                  # Utility functions
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── next.config.js        # Next.js configuration
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0ea5e9) - Main brand color
- **Secondary**: Yellow (#eab308) - Accent color
- **Accent**: Purple (#d946ef) - Highlight color
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Fluid typography scaling

### Components
- **Buttons**: Primary, secondary, and outline variants
- **Cards**: Consistent card design with hover effects
- **Forms**: Accessible form components with validation
- **Navigation**: Responsive navigation with mobile menu

## ♿ Accessibility Features

- **WCAG 2.1 AA Compliance** - Color contrast, focus indicators
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Support** - Proper ARIA labels and roles
- **Skip Links** - Quick navigation for assistive technology
- **Focus Management** - Visible focus indicators
- **Semantic HTML** - Proper heading hierarchy and landmarks

## 📱 Responsive Design

- **Mobile First** - Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible Layouts** - Grid and flexbox for responsive layouts
- **Touch Friendly** - Appropriate touch targets and spacing

## ⚡ Performance

- **Next.js Optimizations** - Automatic code splitting and optimization
- **Image Optimization** - Next.js Image component with lazy loading
- **Font Optimization** - Google Fonts with display=swap
- **Bundle Analysis** - Optimized bundle sizes
- **Lighthouse Score** - Targeting 90+ performance score

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Code Quality
- **ESLint** - Code linting and formatting
- **TypeScript** - Type checking and IntelliSense
- **Prettier** - Code formatting (via ESLint)

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Connect to Vercel** - Link your GitHub repository
2. **Automatic Deployment** - Deploys on every push to main
3. **Environment Variables** - Configure any necessary environment variables
4. **Custom Domain** - Add your custom domain in Vercel settings

### Build Commands
```bash
npm run build    # Build the application
npm run start    # Start the production server
```

## 📊 Analytics & SEO

- **Meta Tags** - Comprehensive meta tags for SEO
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD for search engines
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling instructions

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- **Email**: info@fbcl.org
- **Phone**: (555) 123-4567

## 🔮 Future Enhancements

- **CMS Integration** - Content management system for easy updates
- **Blog Section** - Library news and updates
- **Online Catalog** - Book search and availability
- **Event Registration** - Online event signup system
- **Donation Platform** - Online donation processing
- **Newsletter Integration** - Email marketing platform
- **Analytics Dashboard** - Visitor and engagement metrics
- **Multi-language Support** - Internationalization (i18n)

---

<div align="center">

Built with ❤️ for the Friern Barnet Community Library

[![GitHub stars](https://img.shields.io/github/stars/Turdugul/library-fbcl?style=social)](https://github.com/Turdugul/library-fbcl)
[![GitHub forks](https://img.shields.io/github/forks/Turdugul/library-fbcl?style=social)](https://github.com/Turdugul/library-fbcl)

</div>