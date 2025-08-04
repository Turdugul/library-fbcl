'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, User, Target, Info, ExternalLink, MapPin, Clock, Search } from 'lucide-react'
import { SearchResult, searchCategories } from '@/lib/search'

interface SearchResultsProps {
  results: SearchResult[]
  query: string
  onResultClick?: () => void
  className?: string
}

export default function SearchResults({ results, query, onResultClick, className = '' }: SearchResultsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const filteredResults = selectedCategory === 'all' 
    ? results 
    : results.filter(result => {
        if (selectedCategory === 'events') return result.type === 'event'
        if (selectedCategory === 'people') return result.type === 'trustee'
        if (selectedCategory === 'activities') return result.type === 'activity'
        if (selectedCategory === 'about') return ['value', 'award', 'timeline'].includes(result.type)
        return true
      })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event': return Calendar
      case 'trustee': return User
      case 'activity': return Target
      case 'value':
      case 'award':
      case 'timeline': return Info
      default: return ExternalLink
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event': return 'text-blue-600 bg-blue-50'
      case 'trustee': return 'text-green-600 bg-green-50'
      case 'activity': return 'text-purple-600 bg-purple-50'
      case 'value':
      case 'award':
      case 'timeline': return 'text-orange-600 bg-orange-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  if (results.length === 0) {
    return (
      <div className={`p-6 text-center ${className}`}>
        <div className="text-gray-500 mb-4">
          <Search className="h-12 w-12 mx-auto mb-2 opacity-50" />
          <p className="text-lg font-semibold">No results found</p>
          <p className="text-sm">Try searching with different keywords</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-4 p-4 border-b border-gray-200">
        {searchCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-secondary-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <span className="mr-1">{category.icon}</span>
            {category.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="space-y-3 max-h-80 overflow-y-auto">
        {filteredResults.map((result) => {
          const Icon = getTypeIcon(result.type)
          const typeColor = getTypeColor(result.type)
          
          const ResultContent = () => (
            <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
              {/* Icon */}
              <div className={`p-2 rounded-lg ${typeColor} flex-shrink-0`}>
                <Icon className="h-4 w-4" />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {result.description}
                    </p>
                    
                    {/* Meta information */}
                    <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                      {result.date && (
                        <span className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {result.date}
                        </span>
                      )}
                      {result.category && (
                        <span className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {result.category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Image if available */}
                  {result.image && (
                    <div className="ml-3 flex-shrink-0">
                      <Image
                        src={result.image}
                        alt={result.title}
                        width={60}
                        height={40}
                        className="rounded object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          )

          if (result.url) {
            return (
              <Link
                key={result.id}
                href={result.url}
                onClick={onResultClick}
                className="block hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <ResultContent />
              </Link>
            )
          }

          return (
            <div key={result.id} className="block">
              <ResultContent />
            </div>
          )
        })}
      </div>

      {/* Results count */}
      <div className="p-4 border-t border-gray-200 text-sm text-gray-500">
        {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''} for "{query}"
      </div>
    </div>
  )
} 