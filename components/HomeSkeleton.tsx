'use client';

export default function HomeSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header Skeleton */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              {/* Logo skeleton */}
              <div className="w-8 h-8 bg-rose-200 rounded animate-pulse"></div>
              {/* Title skeleton */}
              <div className="w-24 h-6 bg-rose-200 rounded animate-pulse"></div>
            </div>
            {/* Navigation skeleton */}
            <nav className="hidden md:flex space-x-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-20 h-4 bg-rose-200 rounded animate-pulse"></div>
              ))}
            </nav>
            {/* Action buttons skeleton */}
            <div className="flex items-center space-x-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-9 h-9 bg-rose-200 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-96 h-12 bg-rose-200 rounded animate-pulse mx-auto mb-6"></div>
          <div className="w-64 h-6 bg-rose-200 rounded animate-pulse mx-auto mb-8"></div>
          <div className="w-32 h-10 bg-rose-300 rounded-full animate-pulse mx-auto"></div>
        </div>
      </section>

      {/* Product Grid Skeleton */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="w-48 h-8 bg-rose-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="w-64 h-4 bg-rose-200 rounded animate-pulse mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-rose-50 overflow-hidden">
              {/* Product Image Skeleton */}
              <div className="w-full h-80 bg-rose-100 animate-pulse"></div>

              {/* Product Info Skeleton */}
              <div className="p-6 space-y-4">
                {/* Rating skeleton */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-3 h-3 bg-rose-200 rounded animate-pulse"></div>
                  ))}
                </div>

                {/* Product name skeleton */}
                <div className="w-3/4 h-4 bg-rose-200 rounded animate-pulse mx-auto"></div>

                {/* Price skeleton */}
                <div className="flex justify-between items-center">
                  <div className="w-16 h-5 bg-rose-300 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-rose-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Skeleton */}
      <footer className="bg-white border-t border-rose-100 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="w-24 h-6 bg-rose-200 rounded animate-pulse"></div>
                <div className="space-y-2">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="w-20 h-4 bg-rose-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}