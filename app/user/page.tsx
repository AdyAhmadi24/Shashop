'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Search, User, Heart, Menu, LogOut, ChevronDown, Package, CreditCard, MapPin, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function UserPage() {
  const { user, isLoggedIn, logout, isLoading } = useAuth();

  useEffect(() => {
    console.log('UserPage: Component mounted, auth state:', { isLoggedIn, isLoading, user: user?.email });

    // Additional auth check for this page
    const checkAuthOnPageLoad = async () => {
      const token = localStorage.getItem('token');
      if (token && !isLoggedIn && !isLoading) {
        console.log('UserPage: Token exists but not logged in, checking auth...');
        try {
          const response = await fetch('/api/user', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            // This would normally update context, but let's redirect for now
            console.log('UserPage: Auth check successful, reloading page...');
            window.location.reload();
          }
        } catch (error) {
          console.error('UserPage: Auth check failed:', error);
        }
      }
    };

    // Check auth after a short delay to allow context to initialize
    const timer = setTimeout(checkAuthOnPageLoad, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-600 font-light">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isLoggedIn || !user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-light text-gray-800 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-6">Please log in to access your account.</p>
          <Link href="/" className="text-pink-500 hover:text-pink-600 font-light">
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-light bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                Tsevire
              </h1>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <div className="relative">
                <button className="text-gray-700 hover:text-pink-500 transition-colors font-light text-sm uppercase tracking-wide flex items-center space-x-1">
                  <span>Categories</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
                <Search className="h-4 w-4" />
              </button>
              <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors">
                <Heart className="h-4 w-4" />
              </button>
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-pink-500 transition-colors flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:block text-sm font-light text-gray-700">
                    {user.email.split('@')[0]}
                  </span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-pink-100 py-2 z-10">
                  <div className="px-4 py-2 border-b border-pink-100">
                      <p className="text-sm font-light text-gray-700">{user.email}</p>
                  </div>
                  <Link href="/user" className="block px-4 py-2 text-sm text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors font-light">
                    My Account
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors flex items-center space-x-2 font-light"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
              <button className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors">
                <Menu className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-light text-gray-800 mb-2">My Account</h1>
          <p className="text-gray-600 font-light">Welcome back, {user.name || user.email.split('@')[0]}!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Profile Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-pink-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-pink-400" />
              <h3 className="text-lg font-light text-gray-800">Profile Information</h3>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600"><span className="font-medium">Name:</span> {user.name || 'Not set'}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Email:</span> {user.email}</p>
              <p className="text-sm text-gray-600"><span className="font-medium">Member since:</span> December 2025</p>
            </div>
            <button className="mt-4 text-pink-500 hover:text-pink-600 text-sm font-light transition-colors">
              Edit Profile
            </button>
          </div>

          {/* Order History */}
          <div className="bg-white rounded-2xl shadow-sm border border-purple-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Package className="h-6 w-6 text-purple-400" />
              <h3 className="text-lg font-light text-gray-800">Order History</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">You haven't placed any orders yet.</p>
            <Link href="/catalogue" className="text-purple-500 hover:text-purple-600 text-sm font-light transition-colors">
              Start Shopping
            </Link>
          </div>

          {/* Wishlist */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-blue-400" />
              <h3 className="text-lg font-light text-gray-800">Wishlist</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">Your wishlist is empty.</p>
            <Link href="/catalogue" className="text-blue-500 hover:text-blue-600 text-sm font-light transition-colors">
              Browse Products
            </Link>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CreditCard className="h-6 w-6 text-green-400" />
              <h3 className="text-lg font-light text-gray-800">Payment Methods</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">No payment methods saved.</p>
            <button className="text-green-500 hover:text-green-600 text-sm font-light transition-colors">
              Add Payment Method
            </button>
          </div>

          {/* Addresses */}
          <div className="bg-white rounded-2xl shadow-sm border border-yellow-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <MapPin className="h-6 w-6 text-yellow-400" />
              <h3 className="text-lg font-light text-gray-800">Addresses</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">No addresses saved.</p>
            <button className="text-yellow-500 hover:text-yellow-600 text-sm font-light transition-colors">
              Add Address
            </button>
          </div>

          {/* Account Settings */}
          <div className="bg-white rounded-2xl shadow-sm border border-indigo-100 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Settings className="h-6 w-6 text-indigo-400" />
              <h3 className="text-lg font-light text-gray-800">Account Settings</h3>
            </div>
            <div className="space-y-2">
              <button className="block text-indigo-500 hover:text-indigo-600 text-sm font-light transition-colors">
                Change Password
              </button>
              <button className="block text-indigo-500 hover:text-indigo-600 text-sm font-light transition-colors">
                Privacy Settings
              </button>
              <button className="block text-indigo-500 hover:text-indigo-600 text-sm font-light transition-colors">
                Notification Preferences
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-pink-100 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-pink-400" />
                <span className="text-lg font-light text-gray-800">Tsevire</span>
              </div>
              <p className="text-gray-600 text-sm font-light">
                Premium fashion for every occasion.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-light">
                <li><Link href="/catalogue" className="hover:text-pink-500 transition-colors">Catalogue</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600 font-light">
                <li><Link href="/contact" className="hover:text-pink-500 transition-colors">Contact Us</Link></li>
                <li><Link href="/size-guide" className="hover:text-pink-500 transition-colors">Size Guide</Link></li>
                <li><Link href="/shipping" className="hover:text-pink-500 transition-colors">Shipping</Link></li>
                <li><Link href="/returns" className="hover:text-pink-500 transition-colors">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-800 mb-4 uppercase tracking-wide">Connect</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/tsevire" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/tsevire" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400 text-sm font-light">
            <p>&copy; 2025 Tsevire. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}