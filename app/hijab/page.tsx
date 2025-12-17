'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function HijabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-brown-50 to-orange-50">
      {/* Header */}
      <header className="bg-amber-100/90 backdrop-blur-sm shadow-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
               <div className="flex items-center space-x-2">      
                <h1 className="text-2xl font-light bg-gradient-to-r from-amber-600 to-brown-600 bg-clip-text text-transparent">
                  Hijab Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-brown-600 font-light text-sm uppercase tracking-wide">Hijab Styles</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Materials</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Care</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Guide</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-amber-700 hover:text-amber-900 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-amber-700 hover:text-amber-900 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <button className="p-2 text-amber-700 hover:text-amber-900 transition-colors">
                <User className="h-4 w-4" />
              </button>
              <button className="md:hidden p-2 text-amber-700 hover:text-amber-900 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-amber-100 via-brown-50 to-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-gray-800">
            Elegant Hijab Collection
          </h2>
          <p className="text-lg mb-6 text-gray-600 max-w-2xl mx-auto font-light">
            Discover our curated selection of premium hijabs, crafted with the finest materials for comfort and style.
          </p>
        </div>
      </section> */}

      {/* Catalog Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-400"></div>
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
    { item_id: 1, item_name: 'Phasmina Classic', price: 45.99, image: '/produk/phasmina.webp' },
    { item_id: 2, item_name: 'Phasmina Blue Denim', price: 48.50, image: '/produk/phasmina-bluedenim.webp' },
    { item_id: 3, item_name: 'Phasmina Brownie', price: 46.75, image: '/produk/phasmina-brownie.webp' },
    { item_id: 4, item_name: 'Phasmina Bubblegum', price: 44.25, image: '/produk/phasmina-bubblegum.webp' },
    { item_id: 5, item_name: 'Phasmina Butter', price: 47.99, image: '/produk/phasmina-butter.webp' },
    { item_id: 6, item_name: 'Phasmina Light Grey', price: 45.50, image: '/produk/phasmina-lightgrey.webp' },
    { item_id: 7, item_name: 'Phasmina Midnight Black', price: 49.75, image: '/produk/phasmina-midnightblack.webp' },
    { item_id: 8, item_name: 'Phasmina Milo', price: 46.99, image: '/produk/phasmina-milo.webp' },
    { item_id: 9, item_name: 'Phasmina Soft Blue', price: 47.25, image: '/produk/phasmina-softblue.webp' },
    { item_id: 10, item_name: 'Phasmina 2', price: 48.50, image: '/produk/phasmina2.webp' },
    { item_id: 11, item_name: 'Puspita Classic', price: 52.99, image: '/produk/puspita.webp' },
    { item_id: 12, item_name: 'Puspita Buttercups', price: 54.50, image: '/produk/puspita-buttercups.webp' },
    { item_id: 13, item_name: 'Puspita Midnight Black', price: 55.75, image: '/produk/puspita-midnightblack.webp' },
    { item_id: 14, item_name: 'Puspita Nerine', price: 53.25, image: '/produk/puspita-nerine.webp' },
    { item_id: 15, item_name: 'Puspita Orchid', price: 56.99, image: '/produk/puspita-orchid.webp' },
    { item_id: 16, item_name: 'Puspita Peony', price: 54.50, image: '/produk/puspita-peony.webp' },
    { item_id: 17, item_name: 'Puspita Rose', price: 57.75, image: '/produk/puspita-rose.webp' },
  ];

  return <Catalog products={hijabProducts} theme="amber" carousel={false} />;
}