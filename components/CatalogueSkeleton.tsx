'use client';

export default function CatalogueSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-brown-50">
      {/* Header Skeleton */}
      <header className="bg-amber-100/90 backdrop-blur-sm shadow-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              {/* Back button skeleton */}
              <div className="w-9 h-9 bg-amber-200 rounded-full animate-pulse"></div>
              <div className="flex items-center space-x-2">
                {/* Logo skeleton */}
                <div className="w-8 h-8 bg-amber-200 rounded animate-pulse"></div>
                {/* Title skeleton */}
                <div className="w-48 h-6 bg-amber-200 rounded animate-pulse"></div>
              </div>
            </div>
            {/* Navigation skeleton */}
            <nav className="hidden md:flex space-x-8">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-16 h-4 bg-amber-200 rounded animate-pulse"></div>
              ))}
            </nav>
            {/* Action buttons skeleton */}
            <div className="flex items-center space-x-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-9 h-9 bg-amber-200 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Controls Skeleton */}
        <div className="flex justify-between items-center mb-8">
          <div className="w-10 h-10 bg-amber-200 rounded-full animate-pulse"></div>
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
            ))}
          </div>
          <div className="w-10 h-10 bg-amber-200 rounded-full animate-pulse"></div>
        </div>

        {/* Product Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-amber-50 overflow-hidden">
              {/* Product Image Skeleton */}
              <div className="w-full h-64 bg-amber-100 animate-pulse"></div>

              {/* Product Info Skeleton */}
              <div className="p-4 text-center space-y-3">
                <div className="w-3/4 h-4 bg-amber-100 rounded animate-pulse mx-auto"></div>
                <div className="w-1/2 h-5 bg-amber-200 rounded animate-pulse mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}