'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function UpperBodyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
      {/* Header */}
      <header className="bg-purple-100/90 backdrop-blur-sm shadow-sm border-b border-purple-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-purple-700 hover:text-purple-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-4xl">👕</div>
                <h1 className="text-2xl font-light bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Upper Body Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-purple-700 hover:text-purple-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-indigo-600 font-light text-sm uppercase tracking-wide">Tops</a>
              <a href="#" className="text-purple-700 hover:text-purple-900 transition-colors font-light text-sm uppercase tracking-wide">Dresses</a>
              <a href="#" className="text-purple-700 hover:text-purple-900 transition-colors font-light text-sm uppercase tracking-wide">Blouses</a>
              <a href="#" className="text-purple-700 hover:text-purple-900 transition-colors font-light text-sm uppercase tracking-wide">Jackets</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-purple-700 hover:text-purple-900 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-purple-700 hover:text-purple-900 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <button className="p-2 text-purple-700 hover:text-purple-900 transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button className="md:hidden p-2 text-purple-700 hover:text-purple-900 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-100 via-violet-50 to-indigo-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
            Upper Body Collection
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto font-light">
            Discover our elegant selection of tops, blouses, dresses, and jackets for every occasion.
          </p>
        </div>
      </section>

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
          </div>
        }>
          <UpperBodyCatalog />
        </Suspense>
      </main>
    </div>
  );
}

// Upper Body-specific catalog component
function UpperBodyCatalog() {
  const upperBodyProducts = [
    { item_id: 1, item_name: 'Silk Blouse', price: 89.99, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d2807?w=400&h=500&fit=crop&crop=center' },
    { item_id: 2, item_name: 'Cotton T-Shirt', price: 34.50, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center' },
    { item_id: 3, item_name: 'Lace Top', price: 67.75, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center' },
    { item_id: 4, item_name: 'Denim Jacket', price: 127.25, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center' },
    { item_id: 5, item_name: 'Sweater Cardigan', price: 94.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center' },
    { item_id: 6, item_name: 'Maxi Dress', price: 142.50, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&crop=center' },
    { item_id: 7, item_name: 'Turtleneck Sweater', price: 78.99, image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop&crop=center' },
    { item_id: 8, item_name: 'Evening Gown', price: 289.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center' },
    { item_id: 9, item_name: 'Crop Top', price: 42.75, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center' },
    { item_id: 10, item_name: 'Blazer', price: 184.99, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&crop=center' },
    { item_id: 11, item_name: 'Hoodie', price: 73.25, image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&crop=center' },
    { item_id: 12, item_name: 'Tank Top', price: 28.99, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop&crop=center' },
  ];

  return <Catalog products={upperBodyProducts} theme="purple" />;
}