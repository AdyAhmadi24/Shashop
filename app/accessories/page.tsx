'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-green-50">
      {/* Header */}
      <header className="bg-emerald-100/90 backdrop-blur-sm shadow-sm border-b border-emerald-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-emerald-700 hover:text-emerald-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <div className="text-4xl">👜</div>
                <h1 className="text-2xl font-light bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Accessories Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-teal-600 font-light text-sm uppercase tracking-wide">Bags</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Jewelry</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Scarves</a>
              <a href="#" className="text-emerald-700 hover:text-emerald-900 transition-colors font-light text-sm uppercase tracking-wide">Hats</a>
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
      <section className="bg-gradient-to-r from-emerald-100 via-teal-50 to-green-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
            Accessories Collection
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto font-light">
            Complete your ensemble with our curated selection of bags, jewelry, and fashion accessories.
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
          <AccessoriesCatalog />
        </Suspense>
      </main>
    </div>
  );
}

// Accessories-specific catalog component
function AccessoriesCatalog() {
  const accessoriesProducts = [
    { item_id: 1, item_name: 'Leather Crossbody Bag', price: 156.25, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center' },
    { item_id: 2, item_name: 'Gold Necklace', price: 89.99, image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&crop=center' },
    { item_id: 3, item_name: 'Silk Scarf', price: 42.50, image: 'https://images.unsplash.com/photo-1601762603332-db5e4b90cc5d?w=400&h=500&fit=crop&crop=center' },
    { item_id: 4, item_name: 'Designer Sunglasses', price: 134.75, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop&crop=center' },
    { item_id: 5, item_name: 'Pearl Earrings', price: 67.99, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop&crop=center' },
    { item_id: 6, item_name: 'Wool Beret', price: 38.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center' },
    { item_id: 7, item_name: 'Tote Bag', price: 94.50, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&crop=center' },
    { item_id: 8, item_name: 'Silver Bracelet', price: 52.25, image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop&crop=center' },
    { item_id: 9, item_name: 'Leather Belt', price: 73.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center' },
    { item_id: 10, item_name: 'Beaded Clutch', price: 108.75, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop&crop=center' },
    { item_id: 11, item_name: 'Statement Ring', price: 145.50, image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop&crop=center' },
    { item_id: 12, item_name: 'Straw Hat', price: 46.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center' },
  ];

  return <Catalog products={accessoriesProducts} theme="emerald" />;
}