import { 
  featuredEvents, 
  upcomingEvents, 
  pastEvents, 
  trustees, 
  activities, 
  values, 
  awards,
  timeline,
  quickLinks
} from './data'

// Define search result types
export interface SearchResult {
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

// Search categories
export const searchCategories = [
  { id: 'all', label: 'All Results', icon: '🔍' },
  { id: 'events', label: 'Events', icon: '📅' },
  { id: 'people', label: 'People', icon: '👥' },
  { id: 'activities', label: 'Activities', icon: '🎯' },
  { id: 'about', label: 'About Us', icon: 'ℹ️' },
]

// Search function
export function searchLibrary(query: string, category: string = 'all'): SearchResult[] {
  if (!query.trim()) return []
  
  const searchTerm = query.toLowerCase().trim()
  const results: SearchResult[] = []
  
  // Search events
  if (category === 'all' || category === 'events') {
    // Featured events
    featuredEvents.forEach((event, index) => {
      const relevance = calculateRelevance(searchTerm, [
        event.title,
        event.description,
        event.date,
        event.time
      ])
      if (relevance > 0) {
        results.push({
          id: `featured-event-${index}`,
          type: 'event',
          title: event.title,
          description: event.description,
          date: event.date,
          image: event.image,
          relevance
        })
      }
    })
    
    // Upcoming events
    upcomingEvents.forEach((event) => {
      const relevance = calculateRelevance(searchTerm, [
        event.title,
        event.description,
        event.date,
        event.time,
        event.location,
        event.category
      ])
      if (relevance > 0) {
        results.push({
          id: `upcoming-event-${event.id}`,
          type: 'event',
          title: event.title,
          description: event.description,
          date: event.date,
          category: event.category,
          image: event.image,
          url: `/events#event-${event.id}`,
          relevance
        })
      }
    })
    
    // Past events
    pastEvents.forEach((event) => {
      const relevance = calculateRelevance(searchTerm, [
        event.title,
        event.description,
        event.date
      ])
      if (relevance > 0) {
        results.push({
          id: `past-event-${event.id}`,
          type: 'event',
          title: event.title,
          description: event.description,
          date: event.date,
          image: event.image,
          url: `/events#past-event-${event.id}`,
          relevance
        })
      }
    })
  }
  
  // Search trustees/people
  if (category === 'all' || category === 'people') {
    trustees.forEach((trustee) => {
      const relevance = calculateRelevance(searchTerm, [
        trustee.name,
        trustee.role,
        trustee.bio
      ])
      if (relevance > 0) {
        results.push({
          id: `trustee-${trustee.id}`,
          type: 'trustee',
          title: trustee.name,
          description: `${trustee.role} - ${trustee.bio}`,
          image: trustee.image,
          url: `/about/trustees#trustee-${trustee.id}`,
          relevance
        })
      }
    })
  }
  
  // Search activities
  if (category === 'all' || category === 'activities') {
    activities.forEach((activity, index) => {
      const relevance = calculateRelevance(searchTerm, [
        activity.name,
        activity.description
      ])
      if (relevance > 0) {
        results.push({
          id: `activity-${index}`,
          type: 'activity',
          title: activity.name,
          description: activity.description,
          relevance
        })
      }
    })
  }
  
  // Search values
  if (category === 'all' || category === 'about') {
    values.forEach((value, index) => {
      const relevance = calculateRelevance(searchTerm, [
        value.title,
        value.description
      ])
      if (relevance > 0) {
        results.push({
          id: `value-${index}`,
          type: 'value',
          title: value.title,
          description: value.description,
          url: '/about#values',
          relevance
        })
      }
    })
  }
  
  // Search awards
  if (category === 'all' || category === 'about') {
    awards.forEach((award) => {
      const relevance = calculateRelevance(searchTerm, [
        award.title,
        award.description,
        award.date
      ])
      if (relevance > 0) {
        results.push({
          id: `award-${award.id}`,
          type: 'award',
          title: award.title,
          description: award.description,
          date: award.date,
          image: award.image,
          url: '/about#awards',
          relevance
        })
      }
    })
  }
  
  // Search timeline
  if (category === 'all' || category === 'about') {
    timeline.forEach((item, index) => {
      const relevance = calculateRelevance(searchTerm, [
        item.title,
        item.description,
        item.year
      ])
      if (relevance > 0) {
        results.push({
          id: `timeline-${index}`,
          type: 'timeline',
          title: `${item.year} - ${item.title}`,
          description: item.description,
          date: item.year,
          url: '/about#timeline',
          relevance
        })
      }
    })
  }
  
  // Search quick links
  if (category === 'all') {
    quickLinks.forEach((link, index) => {
      const relevance = calculateRelevance(searchTerm, [
        link.title,
        link.description
      ])
      if (relevance > 0) {
        results.push({
          id: `quicklink-${index}`,
          type: 'quicklink',
          title: link.title,
          description: link.description,
          url: link.href,
          relevance
        })
      }
    })
  }
  
  // Sort by relevance and return top results
  return results
    .sort((a, b) => b.relevance - a.relevance)
    .slice(0, 15) // Limit to top 15 results for header search
}

// Calculate relevance score based on search term matches
function calculateRelevance(searchTerm: string, searchableTexts: string[]): number {
  let relevance = 0
  
  searchableTexts.forEach(text => {
    const lowerText = text.toLowerCase()
    
    // Exact match gets highest score
    if (lowerText === searchTerm) {
      relevance += 100
    }
    // Starts with search term
    else if (lowerText.startsWith(searchTerm)) {
      relevance += 50
    }
    // Contains search term
    else if (lowerText.includes(searchTerm)) {
      relevance += 25
    }
    // Word boundary matches
    else {
      const words = searchTerm.split(' ')
      words.forEach(word => {
        if (word.length > 2 && lowerText.includes(word)) {
          relevance += 10
        }
      })
    }
  })
  
  return relevance
}

// Get search suggestions based on popular terms
export function getSearchSuggestions(query: string): string[] {
  const suggestions = [
    'events',
    'volunteer',
    'donate',
    'book club',
    'story time',
    'computer classes',
    'yoga',
    'trustees',
    'about us',
    'contact',
    'summer reading',
    'author meet',
    'children',
    'workshop',
    'community'
  ]
  
  if (!query.trim()) return suggestions.slice(0, 5)
  
  const searchTerm = query.toLowerCase()
  return suggestions
    .filter(suggestion => suggestion.includes(searchTerm))
    .slice(0, 5)
}

// Get search result count by category
export function getSearchResultCount(query: string): Record<string, number> {
  const allResults = searchLibrary(query)
  const counts: Record<string, number> = {
    all: allResults.length,
    events: 0,
    people: 0,
    activities: 0,
    about: 0
  }
  
  allResults.forEach(result => {
    if (result.type === 'event') counts.events++
    else if (result.type === 'trustee') counts.people++
    else if (result.type === 'activity') counts.activities++
    else if (['value', 'award', 'timeline'].includes(result.type)) counts.about++
  })
  
  return counts
} 