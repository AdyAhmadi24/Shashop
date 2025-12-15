'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import Catalog from '../../components/Catalog';
import { ShoppingBag, Search, User, Heart, Menu, ArrowLeft } from 'lucide-react';

export default function CataloguePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-brown-50">
      {/* Header */}
      <header className="bg-amber-100/90 backdrop-blur-sm shadow-sm border-b border-amber-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="p-2 text-amber-700 hover:text-amber-900 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Link>
              <div className="flex items-center space-x-2">
                <ShoppingBag className="h-8 w-8 text-amber-600" />
                <h1 className="text-2xl font-light bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Tsevire Collection
                </h1>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Home</Link>
              <a href="#" className="text-orange-600 font-light text-sm uppercase tracking-wide">Collection</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Styles</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">Trends</a>
              <a href="#" className="text-amber-700 hover:text-amber-900 transition-colors font-light text-sm uppercase tracking-wide">About</a>
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
      <section className="bg-gradient-to-r from-amber-100 via-orange-50 to-brown-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-amber-800">
            Discover Your Style
          </h2>
          <p className="text-lg mb-8 text-amber-700 max-w-2xl mx-auto font-light">
            Explore our curated collection of fashion essentials, designed to express your unique personality and elevate your wardrobe.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-amber-600 font-light">
            <span className="px-4 py-2 bg-amber-200/50 rounded-full">Casual Wear</span>
            <span className="px-4 py-2 bg-orange-200/50 rounded-full">Formal Attire</span>
            <span className="px-4 py-2 bg-amber-200/50 rounded-full">Accessories</span>
            <span className="px-4 py-2 bg-orange-200/50 rounded-full">Seasonal Trends</span>
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-light text-amber-800 mb-4">Complete Collection</h3>
          <p className="text-amber-600 max-w-xl mx-auto font-light text-lg">
            Handpicked pieces for every occasion and style preference
          </p>
        </div>
        <Suspense fallback={
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-400"></div>
          </div>
        }>
          <Catalog />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-amber-100 border-t border-amber-200 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-amber-600" />
                <span className="text-lg font-light text-amber-800">Tsevire</span>
              </div>
              <p className="text-amber-600 text-sm font-light">
                Curated fashion for the modern lifestyle.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-light text-amber-800 mb-4 uppercase tracking-wide">Browse</h4>
              <ul className="space-y-2 text-sm text-amber-600 font-light">
                <li><Link href="/" className="hover:text-amber-900 transition-colors">Home</Link></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">Sale Items</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-amber-800 mb-4 uppercase tracking-wide">Categories</h4>
              <ul className="space-y-2 text-sm text-amber-600 font-light">
                <li><a href="#" className="hover:text-amber-900 transition-colors">Tops & Blouses</a></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">Dresses</a></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">Pants & Skirts</a></li>
                <li><a href="#" className="hover:text-amber-900 transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-amber-800 mb-4 uppercase tracking-wide">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-amber-500 hover:text-amber-700 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-amber-500 hover:text-amber-700 transition-colors">
                  <span className="sr-only">Pinterest</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.747-1.378 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-200 mt-8 pt-8 text-center text-amber-600 text-sm font-light">
            <p>&copy; 2025 Tsevire Collection. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}