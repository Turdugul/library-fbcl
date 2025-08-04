'use client'

import { useState, useRef, useEffect } from 'react'
import { Search, X, TrendingUp, Loader2 } from 'lucide-react'
import { searchLibrary, getSearchSuggestions, SearchResult } from '@/lib/search'
import SearchResults from '@/components/ui/SearchResults'

interface SearchBarProps {
  isOpen: boolean
  onClose: () => void
  className?: string
}

export default function SearchBar({ isOpen, onClose, className = '' }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && searchRef.current) {
      searchRef.current.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('')
      setSearchResults([])
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [isOpen])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (searchQuery.trim()) {
      setIsSearching(true)
      const timeoutId = setTimeout(() => {
        const results = searchLibrary(searchQuery)
        setSearchResults(results)
        setIsSearching(false)
      }, 300)

      return () => clearTimeout(timeoutId)
    } else {
      setSearchResults([])
      setSuggestions(getSearchSuggestions(''))
    }
  }, [searchQuery])

  useEffect(() => {
    if (searchQuery.trim()) {
      const newSuggestions = getSearchSuggestions(searchQuery)
      setSuggestions(newSuggestions)
      setShowSuggestions(newSuggestions.length > 0)
    } else {
      setSuggestions(getSearchSuggestions(''))
      setShowSuggestions(true)
    }
  }, [searchQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      const results = searchLibrary(searchQuery)
      setSearchResults(results)
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion)
    const results = searchLibrary(suggestion)
    setSearchResults(results)
    setShowSuggestions(false)
    searchRef.current?.focus()
  }

  const handleResultClick = () => {
    onClose()
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    searchRef.current?.focus()
  }

  if (!isOpen) return null

  return (
    <div className={`border-t border-gray-200/50 bg-white/95 backdrop-blur-sm animate-slide-down mobile-safe-area shadow-lg ${className}`}>
      <form onSubmit={handleSubmit} className="p-4 sm:p-6">
        <div className="relative group">
          <Search className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 h-5 w-5 sm:h-6 sm:w-6 text-gray-400 group-focus-within:text-secondary-400 transition-colors duration-200" />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search for events, people, activities, and more..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 sm:pl-14 pr-12 sm:pr-14 py-4 sm:py-5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-secondary-400 focus:border-transparent transition-all duration-200 text-base sm:text-lg touch-target shadow-sm focus:shadow-md"
            aria-label="Search website"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClearSearch}
              className="absolute right-4 sm:right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 active:text-gray-800 touch-target flex items-center justify-center transition-colors duration-200"
              aria-label="Clear search"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          )}
        </div>
      </form>

      {/* Enhanced Search Suggestions */}
      {showSuggestions && suggestions.length > 0 && !searchResults.length && (
        <div ref={suggestionsRef} className="px-4 sm:px-6 pb-4 sm:pb-6">
          <div className="flex items-center space-x-2 mb-4 text-sm sm:text-base text-gray-500">
            <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Popular searches</span>
          </div>
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="group w-full text-left px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-gray-700 hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-all duration-200 touch-target no-select shadow-sm hover:shadow-md"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-secondary-400 transition-colors duration-200" />
                  <span>{suggestion}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Search Results */}
      {searchResults.length > 0 && (
        <>
          <SearchResults
            results={searchResults}
            query={searchQuery}
            onResultClick={handleResultClick}
          />
        </>
      )}

      {/* Enhanced Loading State */}
      {isSearching && (
        <div className="px-4 sm:px-6 py-8 sm:py-10 text-center">
          <div className="flex items-center justify-center space-x-3">
            <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin text-secondary-500" />
            <p className="text-sm sm:text-base text-gray-500">Searching...</p>
          </div>
        </div>
      )}

      {/* Enhanced No Results */}
      {searchQuery.trim() && !isSearching && searchResults.length === 0 && (
        <div className="px-4 sm:px-6 py-8 sm:py-10 text-center">
          <Search className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-gray-400" />
          <p className="text-sm sm:text-base text-gray-500 mb-1">No results found for "{searchQuery}"</p>
          <p className="text-xs sm:text-sm text-gray-400">Try different keywords or browse our categories</p>
        </div>
      )}
    </div>
  )
} 