'use client';

import { Suspense, useState } from 'react';
import Link from 'next/link';
import LoginModal from '../components/LoginModal';
import { ShoppingBag, Search, User, Heart, Menu, LogOut } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const handleLogin = (email: string, password: string, name?: string) => {
    // In a real app, this would make an API call
    setIsLoggedIn(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header */}
      <header className="bg-transparent backdrop-blur-sm shadow-sm border-b border-rose-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-light bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                Tsevire
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-rose-400 transition-colors font-light text-sm uppercase tracking-wide">New Arrivals</a>
              <a href="#" className="text-gray-600 hover:text-rose-400 transition-colors font-light text-sm uppercase tracking-wide">Collection</a>
              <a href="#" className="text-gray-600 hover:text-rose-400 transition-colors font-light text-sm uppercase tracking-wide">Sale</a>
              <a href="#" className="text-gray-600 hover:text-rose-400 transition-colors font-light text-sm uppercase tracking-wide">About</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-500 hover:text-rose-400 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-500 hover:text-rose-400 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <div className="relative">
                <button
                  onClick={() => isLoggedIn ? handleLogout() : setIsLoginModalOpen(true)}
                  className="p-2 text-gray-500 hover:text-rose-400 transition-colors flex items-center space-x-2"
                >
                  <User className="h-4 w-4" />
                  {isLoggedIn && (
                    <span className="hidden sm:block text-sm font-light text-gray-600">
                      {userEmail.split('@')[0]}
                    </span>
                  )}
                </button>
                {isLoggedIn && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-rose-100 py-2 z-10">
                    <div className="px-4 py-2 border-b border-rose-100">
                      <p className="text-sm font-light text-gray-600">{userEmail}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-rose-400 hover:bg-rose-50 transition-colors flex items-center space-x-2 font-light"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
              <button className="md:hidden p-2 text-gray-500 hover:text-rose-400 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Carousel */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative w-full h-full bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center">
              <img
                src="/carousel/carousel1.webp"
                alt="Elegant Collection"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* <div className="relative z-10 text-center text-white bg-black/50 p-8 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-6">
                  {isLoggedIn ? `Welcome back, ${userEmail.split('@')[0]}!` : 'Elegant Collection'}
                </h2>
                <p className="text-lg mb-8 max-w-xl mx-auto font-light">
                  {isLoggedIn
                    ? 'Discover your personalized recommendations and exclusive offers.'
                    : 'Discover our curated selection of premium clothing and accessories, designed for the modern woman.'
                  }
                </p>
                <Link href="/catalogue">
                  <button className="bg-rose-400 text-white px-8 py-3 rounded-full font-light hover:bg-rose-500 transition-colors shadow-sm">
                    {isLoggedIn ? 'Browse Collection' : 'Explore Collection'}
                  </button>
                </Link>
              </div> */}
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative w-full h-full bg-gradient-to-r from-purple-100 via-indigo-50 to-blue-100 flex items-center justify-center">
              <img
                src="/carousel/carousel2.webp"
                alt="New Arrivals"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* <div className="relative z-10 text-center text-white bg-black/50 p-8 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-6">New Arrivals</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto font-light">
                  Be the first to explore our latest fashion trends and exclusive pieces.
                </p>
                <Link href="/catalogue">
                  <button className="bg-purple-400 text-white px-8 py-3 rounded-full font-light hover:bg-purple-500 transition-colors shadow-sm">
                    Shop Now
                  </button>
                </Link>
              </div> */}
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full bg-gradient-to-r from-pink-100 via-rose-50 to-red-100 flex items-center justify-center">
              <img
                src="/carousel/carousel3.webp"
                alt="Special Offers"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              {/* <div className="relative z-10 text-center text-white bg-black/50 p-8 rounded-lg max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-light mb-6">Special Offers</h2>
                <p className="text-lg mb-8 max-w-xl mx-auto font-light">
                  Enjoy exclusive discounts on selected items. Limited time only!
                </p>
                <Link href="/catalogue">
                  <button className="bg-pink-400 text-white px-8 py-3 rounded-full font-light hover:bg-pink-500 transition-colors shadow-sm">
                    View Offers
                  </button>
                </Link>
              </div> */}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Category Cards Section */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-light text-gray-800 mb-4">
            {isLoggedIn ? 'Shop by Category' : 'Shop by Category'}
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto font-light">
            {isLoggedIn ? 'Explore our curated collections' : 'Find your perfect style in our specialized categories'}
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hijab Card */}
          <Link href="/hijab" className="group">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-rose-50 group-hover:border-rose-200">
              <div className="relative h-64 flex items-center justify-center">
                <img
                  src="/produk/phasmina-bubblegum.webp"
                  alt="Phasmina Bubblegum"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <img
                  src="/produk/phasmina-butter.webp"
                  alt="Phasmina Butter"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-light text-gray-800 mb-2 group-hover:text-rose-600 transition-colors">
                  Hijab Collection
                </h4>
                <p className="text-sm text-gray-500 font-light">
                  Elegant and modest hijab styles
                </p>
              </div>
            </div>
          </Link>

          {/* Upper Body Card */}
          <Link href="/upper-body" className="group">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-rose-50 group-hover:border-rose-200">
              <div className="relative h-64 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                <div className="text-6xl"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-light text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  dummy
                </h4>
                <p className="text-sm text-gray-500 font-light">
                  piupiu
                </p>
              </div>
            </div>
          </Link>

          {/* Lower Body Card */}
          <Link href="/lower-body" className="group">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-rose-50 group-hover:border-rose-200">
              <div className="relative h-64 bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center">
                <div className="text-6xl"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-light text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  dummy
                </h4>
                <p className="text-sm text-gray-500 font-light">
                  piupiu
                </p>
              </div>
            </div>
          </Link>

          {/* Accessories Card */}
          <Link href="/accessories" className="group">
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-rose-50 group-hover:border-rose-200">
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <div className="text-6xl"></div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
              </div>
              <div className="p-6 text-center">
                <h4 className="text-lg font-light text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                  dummy
                </h4>
                <p className="text-sm text-gray-500 font-light">
                  piupiu
                </p>
              </div>
            </div>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-rose-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-rose-400" />
                <span className="text-lg font-light">Tsevire</span>
              </div>
              <p className="text-gray-500 text-sm font-light">
                Premium fashion for every occasion.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li><a href="#" className="hover:text-rose-400 transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Collection</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Sale</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Gift Cards</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Support</h4>
              <ul className="space-y-2 text-sm text-gray-500 font-light">
                <li><a href="#" className="hover:text-rose-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Shipping</a></li>
                <li><a href="#" className="hover:text-rose-400 transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-rose-100 mt-8 pt-8 text-center text-gray-500 text-sm font-light">
            <p>&copy; 2025 Tsevire. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
