# Search Functionality

This document describes the search functionality implemented for the library website.

## Overview

The search system provides comprehensive search capabilities across all library content including:
- Events (upcoming, past, featured)
- People (trustees, staff)
- Activities and programs
- About us content (values, awards, timeline)
- Quick links and navigation

## Components

### Core Search Engine (`lib/search.ts`)

**Main Functions:**
- `searchLibrary(query, category)` - Main search function
- `getSearchSuggestions(query)` - Get search suggestions
- `getSearchResultCount(query)` - Get result counts by category

**Search Categories:**
- `all` - Search across all content
- `events` - Events only
- `people` - Trustees and staff
- `activities` - Programs and activities
- `about` - About us content

### Search Components

1. **SearchBar** (`components/layout/SearchBar.tsx`)
   - Header search dropdown
   - Real-time search suggestions
   - Comprehensive search results
   - Category-based filtering

2. **SearchResults** (`components/ui/SearchResults.tsx`)
   - Displays search results with filtering
   - Category-based result organization
   - Rich result display with images and metadata

3. **Header Search Integration**
   - Search icon in header (desktop and mobile)
   - Toggle search functionality
   - Integrated with existing header design

## Search Features

### Real-time Search
- Debounced search (300ms delay)
- Instant suggestions as you type
- Loading states and error handling

### Smart Relevance Scoring
- Exact matches: 100 points
- Starts with: 50 points
- Contains: 25 points
- Word boundary matches: 10 points per word

### Search Suggestions
Popular search terms including:
- events, volunteer, donate
- book club, story time
- computer classes, yoga
- trustees, about us, contact

### Result Filtering
- Category-based filtering
- Result count display
- Relevance-based sorting

## Usage Examples

### Basic Search
```typescript
import { searchLibrary } from '@/lib/search'

const results = searchLibrary('summer reading')
console.log(results) // Array of SearchResult objects
```

### Category-Specific Search
```typescript
const eventResults = searchLibrary('workshop', 'events')
const peopleResults = searchLibrary('sarah', 'people')
```

### Get Suggestions
```typescript
import { getSearchSuggestions } from '@/lib/search'

const suggestions = getSearchSuggestions('book')
// Returns: ['book club', 'story time', ...]
```

## Search Result Types

```typescript
interface SearchResult {
  id: string
  type: 'event' | 'trustee' | 'activity' | 'value' | 'award' | 'timeline' | 'quicklink'
  title: string
  description: string
  url?: string
  date?: string
  category?: string
  image?: string
  relevance: number
}
```

## Integration Points

### Header Search
- Primary search interface via header search icon
- Comprehensive search results with filtering
- Real-time suggestions and results
- Accessible from all pages

### Search Icon Integration
- Desktop: Search icon in top-right header
- Mobile: Search icon next to menu button
- Consistent search experience across devices

## Performance Considerations

- Debounced search to prevent excessive API calls
- Limited results (20 max) for performance
- Client-side search for instant results
- Optimized relevance scoring algorithm

## Accessibility Features

- Keyboard navigation support
- Screen reader compatibility
- Focus management
- ARIA labels and roles
- Semantic HTML structure

## Future Enhancements

1. **Advanced Filtering**
   - Date range filtering
   - Location-based search
   - Tag-based filtering

2. **Search Analytics**
   - Popular search terms
   - Search result click-through rates
   - User search patterns

3. **Enhanced Relevance**
   - Machine learning-based scoring
   - User behavior-based ranking
   - Content freshness weighting

4. **Search Suggestions**
   - AI-powered suggestions
   - Contextual recommendations
   - Personalized search history 