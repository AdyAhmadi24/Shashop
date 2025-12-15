'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function HijabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <header className="bg-emerald-100/90 backdrop-blur-sm shadow-sm border-b border-emerald-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-4xl">🧕</div>
                <h1 className="text-2xl font-light bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Hijab Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-teal-600 font-light text-sm uppercase tracking-wide">Hijab Styles</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Materials</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Care</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Guide</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <button className="p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button className="md:hidden p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-100 via-teal-50 to-cyan-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
            Elegant Hijab Collection
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto font-light">
            Discover our curated selection of premium hijabs, crafted with the finest materials for comfort and style.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
          </div>
        }>
          <HijabCatalog />
        </Suspense>
      </main>
    </div>
  );
}

// Hijab-specific catalog component
function HijabCatalog() {
  const hijabProducts = [
    { item_id: 1, item_name: 'Silk Chiffon Hijab', price: 45.99, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 2, item_name: 'Cotton Voile Hijab', price: 28.50, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
    { item_id: 3, item_name: 'Premium Jersey Hijab', price: 32.75, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 4, item_name: 'Satin Square Hijab', price: 38.25, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
    { item_id: 5, item_name: 'Modal Comfort Hijab', price: 42.99, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 6, item_name: 'Bamboo Hijab Set', price: 55.50, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
    { item_id: 7, item_name: 'Linen Blend Hijab', price: 39.75, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 8, item_name: 'Crinkled Chiffon', price: 48.99, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
    { item_id: 9, item_name: 'Waffle Knit Hijab', price: 44.25, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 10, item_name: 'Tulle Hijab', price: 52.50, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
    { item_id: 11, item_name: 'Active Wear Hijab', price: 36.75, image: 'https://images.unsplash.com/photo-1583845112203-29e0c3aba608?w=400&h=500&fit=crop&crop=center' },
    { item_id: 12, item_name: 'Luxury Pashmina', price: 89.99, image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=500&fit=crop&crop=center' },
  ];

  return <Catalog products={hijabProducts} theme="emerald" carousel={false} />;
}