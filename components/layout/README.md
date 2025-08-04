# Header Components

This directory contains the refactored header components that have been split into smaller, more modular and maintainable pieces.

## Components

### Core Components

- **Header.tsx** - Main header component that composes all other components
- **Logo.tsx** - Handles logo rendering with optional animation and homepage link
- **NavLinks.tsx** - Contains navigation links with active states and ARIA roles

### Navigation Components

- **DesktopNavigation.tsx** - Desktop navigation with dropdown menus
- **MobileMenu.tsx** - Mobile hamburger menu and navigation
- **DropdownMenu.tsx** - Accessible dropdown component for submenus

### Action Components

- **HeaderActions.tsx** - Desktop CTA buttons and search
- **MobileActions.tsx** - Mobile search and menu toggle buttons
- **SearchBar.tsx** - Search input component with focus management

## Custom Hooks

- **useHeader.ts** - Custom hook for header state management (scroll effects, menu toggles, search)

## Data

- **navigation.ts** - Navigation configuration separated from components

## Usage

```tsx
import { Header } from '@/components/layout'

export default function Layout() {
  return <Header />
}
```

## Benefits of Refactoring

1. **Modularity**: Each component has a single responsibility
2. **Reusability**: Components can be reused in different contexts
3. **Maintainability**: Easier to debug and modify individual components
4. **Accessibility**: Each component handles its own accessibility concerns
5. **Type Safety**: Full TypeScript support with proper interfaces
6. **Performance**: Smaller components with focused re-renders

## Component Structure

```
Header
├── Logo
├── DesktopNavigation
│   ├── NavLinks (for simple links)
│   └── DropdownMenu (for submenus)
├── HeaderActions
│   ├── Search Button
│   └── CTA Button
├── MobileActions
│   ├── Search Button
│   └── Menu Toggle
├── SearchBar (mobile only)
└── MobileMenu
    └── Navigation items with submenus
```

## State Management

The `useHeader` hook manages:
- Scroll effects (background opacity, shadow)
- Menu open/close states
- Search open/close states
- Window resize handling
- Keyboard event handling (Escape key)

## Accessibility Features

- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- Semantic HTML structure 