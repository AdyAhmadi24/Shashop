'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function LowerBodyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Header */}
      <header className="bg-blue-100/90 backdrop-blur-sm shadow-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-4xl">👖</div>
                <h1 className="text-2xl font-light bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Lower Body Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-700 hover:text-blue-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-cyan-600 font-light text-sm uppercase tracking-wide">Pants</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-light text-sm uppercase tracking-wide">Skirts</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-light text-sm uppercase tracking-wide">Shorts</a>
              <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors font-light text-sm uppercase tracking-wide">Leggings</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <button className="p-2 text-blue-700 hover:text-blue-900 transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button className="md:hidden p-2 text-blue-700 hover:text-blue-900 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-cyan-50 to-teal-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
            Lower Body Collection
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto font-light">
            Complete your look with our stylish selection of pants, skirts, and leggings.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
          </div>
        }>
          <LowerBodyCatalog />
        </Suspense>
      </main>
    </div>
  );
}

// Lower Body-specific catalog component
function LowerBodyCatalog() {
  const lowerBodyProducts = [
    { item_id: 1, item_name: 'High-Waisted Jeans', price: 94.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center' },
    { item_id: 2, item_name: 'Pleated Skirt', price: 67.50, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400&h=500&fit=crop&crop=center' },
    { item_id: 3, item_name: 'Yoga Leggings', price: 45.75, image: 'https://images.unsplash.com/photo-1506629905607-0b5ab9a9e21a?w=400&h=500&fit=crop&crop=center' },
    { item_id: 4, item_name: 'Tailored Trousers', price: 112.25, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center' },
    { item_id: 5, item_name: 'Denim Shorts', price: 54.99, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&crop=center' },
    { item_id: 6, item_name: 'Maxi Skirt', price: 78.50, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400&h=500&fit=crop&crop=center' },
    { item_id: 7, item_name: 'Cargo Pants', price: 89.99, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center' },
    { item_id: 8, item_name: 'Mini Skirt', price: 42.99, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400&h=500&fit=crop&crop=center' },
    { item_id: 9, item_name: 'Wide Leg Pants', price: 103.75, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=400&h=500&fit=crop&crop=center' },
    { item_id: 10, item_name: 'Athletic Shorts', price: 34.99, image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&crop=center' },
    { item_id: 11, item_name: 'Pencil Skirt', price: 69.25, image: 'https://images.unsplash.com/photo-1583496661160-fb5886a6aaaa?w=400&h=500&fit=crop&crop=center' },
    { item_id: 12, item_name: 'Joggers', price: 62.99, image: 'https://images.unsplash.com/photo-1506629905607-0b5ab9a9e21a?w=400&h=500&fit=crop&crop=center' },
  ];

  return <Catalog products={lowerBodyProducts} theme="blue" />;
}