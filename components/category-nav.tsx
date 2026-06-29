'use client'

import { useRef, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CategoryNavProps {
  categories: string[]
  onCategoryClick: (category: string) => void
}

export function CategoryNav({ categories, onCategoryClick }: CategoryNavProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
    }

    return () => container?.removeEventListener('scroll', checkScroll)
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="sticky top-20 z-30 bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 relative">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gradient-to-r from-card to-transparent hover:from-card/80 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide py-4 px-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryClick(category)}
              className="flex-shrink-0 px-4 py-2 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-full font-medium transition-all duration-200 text-sm whitespace-nowrap border border-primary/30 hover:border-accent"
            >
              {category}
            </button>
          ))}
        </div>

        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-gradient-to-l from-card to-transparent hover:from-card/80 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
