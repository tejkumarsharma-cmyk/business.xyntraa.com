'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Filter, Calendar, Tag, FileText, ArrowRight, X, Clock, TrendingUp, Globe2, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'

// Mock latest news data
const mockNews = [
  {
    id: '1',
    title: 'Breaking: Major Tech Partnership Announced at Global Summit',
    summary: 'Industry leaders come together to launch groundbreaking technology initiative that will reshape digital media landscape.',
    category: 'Breaking News',
    date: '2024-01-20',
    author: 'Tech Correspondent',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Tech', 'Partnership', 'Summit'],
    readTime: '4 min read',
    trending: true,
    priority: 'high'
  },
  {
    id: '2',
    title: 'Global Markets React to New Economic Policies',
    summary: 'Financial markets worldwide respond to recent policy changes with mixed reactions as analysts weigh long-term impacts.',
    category: 'Financial News',
    date: '2024-01-19',
    author: 'Financial Editor',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Markets', 'Economy', 'Policy'],
    readTime: '6 min read',
    trending: true,
    priority: 'high'
  },
  {
    id: '3',
    title: 'Healthcare Innovation: New Treatment Shows Promise',
    summary: 'Medical researchers announce breakthrough in treatment development with potential to help millions worldwide.',
    category: 'Healthcare',
    date: '2024-01-18',
    author: 'Health Reporter',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Healthcare', 'Innovation', 'Research'],
    readTime: '5 min read',
    trending: false,
    priority: 'medium'
  },
  {
    id: '4',
    title: 'Environmental Summit Reaches Historic Agreement',
    summary: 'World leaders commit to ambitious new targets for climate action in landmark international agreement.',
    category: 'Environment',
    date: '2024-01-17',
    author: 'Environmental Correspondent',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Environment', 'Climate', 'Summit'],
    readTime: '7 min read',
    trending: true,
    priority: 'high'
  },
  {
    id: '5',
    title: 'Sports: Underdog Team Makes Championship History',
    summary: 'In stunning upset, previously underestimated team claims championship title in dramatic final match.',
    category: 'Sports',
    date: '2024-01-16',
    author: 'Sports Reporter',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Sports', 'Championship', 'Underdog'],
    readTime: '3 min read',
    trending: false,
    priority: 'medium'
  },
  {
    id: '6',
    title: 'Entertainment Industry Embraces Digital Transformation',
    summary: 'Major entertainment companies announce strategic shifts toward digital-first approaches in response to changing consumer preferences.',
    category: 'Entertainment',
    date: '2024-01-15',
    author: 'Entertainment Editor',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Entertainment', 'Digital', 'Transformation'],
    readTime: '5 min read',
    trending: false,
    priority: 'medium'
  },
  {
    id: '7',
    title: 'Education Sector Adopts Revolutionary Learning Methods',
    summary: 'Educational institutions worldwide implement innovative teaching technologies that promise to transform learning experiences.',
    category: 'Education',
    date: '2024-01-14',
    author: 'Education Correspondent',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Education', 'Technology', 'Innovation'],
    readTime: '4 min read',
    trending: false,
    priority: 'low'
  },
  {
    id: '8',
    title: 'Retail Revolution: AI-Powered Shopping Experiences',
    summary: 'Leading retailers deploy artificial intelligence to create personalized shopping experiences and improve customer satisfaction.',
    category: 'Business',
    date: '2024-01-13',
    author: 'Business Reporter',
    image: '/placeholder.svg?height=400&width=600',
    tags: ['Retail', 'AI', 'Shopping'],
    readTime: '6 min read',
    trending: true,
    priority: 'high'
  }
]

const categories = ['All', 'Breaking News', 'Financial News', 'Healthcare', 'Environment', 'Sports', 'Entertainment', 'Education', 'Business']
const sortOptions = ['Latest', 'Trending', 'Most Read', 'Priority']

export default function LatestNewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('Latest')
  const [showFilters, setShowFilters] = useState(false)

  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         news.summary.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || news.category === selectedCategory
    return matchesSearch && matchesCategory
  }).sort((a, b) => {
    switch (sortBy) {
      case 'Trending':
        return (b.trending ? 1 : 0) - (a.trending ? 1 : 0)
      case 'Priority':
        const priorityOrder = { high: 3, medium: 2, low: 1 }
        return (priorityOrder[b.priority as keyof typeof priorityOrder] || 0) - (priorityOrder[a.priority as keyof typeof priorityOrder] || 0)
      case 'Most Read':
        return 0 // Would implement read count logic
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime()
    }
  })

  const trendingNews = mockNews.filter(news => news.trending).slice(0, 3)

  return (
    <div className="zorvixy-brand-body zorvixy-font min-h-screen">
      <NavbarShell />
      
      {/* Hero Section */}
      <section className="hero-section relative">
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Latest News
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl lg:text-2xl text-white/90">
              Stay informed with breaking news and updates from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Trending News Bar */}
      <section className="py-6 bg-accent/10 border-y border-accent/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-accent font-semibold">
              <TrendingUp className="h-5 w-5" />
              Trending Now
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {trendingNews.map((news, index) => (
                  <Link
                    key={index}
                    href={`/latest-news/${news.id}`}
                    className="flex-shrink-0 hover:text-primary transition-colors"
                  >
                    {news.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted" />
              <input
                type="text"
                placeholder="Search latest news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  Sort by {option}
                </option>
              ))}
            </select>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded-full hover:bg-primary/10 transition-colors"
            >
              <Filter className="h-4 w-4" />
              Filters
              {showFilters && <X className="h-4 w-4" />}
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-6 p-6 bg-white rounded-xl border border-primary/10">
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-muted">
              Showing {filteredNews.length} of {mockNews.length} news articles
            </p>
            <div className="flex items-center gap-4 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Globe2 className="h-4 w-4" />
                <span>Global Coverage</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Expert Reporters</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="news-grid">
              {filteredNews.map((news) => (
                <Link
                  key={news.id}
                  href={`/latest-news/${news.id}`}
                  className="news-item group relative"
                >
                  {news.priority === 'high' && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="bg-accent text-white text-xs font-bold px-2 py-1 rounded-full">
                        BREAKING
                      </span>
                    </div>
                  )}
                  {news.trending && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-accent text-white p-2 rounded-full">
                        <TrendingUp className="h-3 w-3" />
                      </div>
                    </div>
                  )}
                  {news.image && (
                    <div className="relative h-48 overflow-hidden">
                      <ContentImage src={news.image} alt={news.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  <div className="news-item-content">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="zorvixy-accent text-xs font-semibold uppercase tracking-wider">
                        {news.category}
                      </span>
                      <span className="text-xs text-muted">•</span>
                      <span className="text-xs text-muted">{news.readTime}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-sm text-muted line-clamp-3 mb-3">
                      {news.summary}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted">
                      <span>{news.author} • {news.date}</span>
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                    {news.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {news.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-primary/5 text-primary px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                        {news.tags.length > 3 && (
                          <span className="text-xs text-muted">+{news.tags.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-muted mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No news articles found</h3>
              <p className="text-muted mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                  setSortBy('Latest')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Stay Updated</h2>
          <p className="mt-4 text-lg text-muted">
            Get the latest news delivered directly to your inbox
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1 max-w-sm"
            />
            <button className="btn-primary">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
