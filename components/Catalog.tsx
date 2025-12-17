'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, X, Plus, Minus } from 'lucide-react';

interface Product {
  item_id: number;
  item_name: string;
  price: number;
  image: string;
}

interface CatalogProps {
  products?: Product[];
  theme?: 'rose' | 'amber' | 'emerald' | 'purple' | 'blue';
  carousel?: boolean;
}

export default function Catalog({ products: propProducts, theme = 'rose', carousel = true }: CatalogProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [apiProducts, setApiProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setApiProducts(data);
        } else {
          console.warn('Failed to fetch products from API, using fallback data');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Use API products if available, otherwise use provided props or fallback
  const products: Product[] = apiProducts.length > 0 ? apiProducts : (propProducts || [
    { item_id: 1, item_name: 'Vintage Denim Jacket', price: 127.50, image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center' },
    { item_id: 2, item_name: 'Floral Maxi Dress', price: 89.99, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop&crop=center' },
    { item_id: 3, item_name: 'Classic White Blouse', price: 65.75, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d2807?w=400&h=500&fit=crop&crop=center' },
    { item_id: 4, item_name: 'Leather Crossbody Bag', price: 156.25, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop&crop=center' },
    { item_id: 5, item_name: 'High-Waisted Jeans', price: 94.99, image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&crop=center' },
    { item_id: 6, item_name: 'Silk Scarf Set', price: 42.50, image: 'https://images.unsplash.com/photo-1601762603332-db5e4b90cc5d?w=400&h=500&fit=crop&crop=center' },
    { item_id: 7, item_name: 'Knit Cardigan Sweater', price: 78.99, image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop&crop=center' },
    { item_id: 8, item_name: 'Platform Ankle Boots', price: 189.99, image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&crop=center' },
    { item_id: 9, item_name: 'Embroidered Kimono', price: 112.75, image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&crop=center' },
    { item_id: 10, item_name: 'Minimalist Watch', price: 234.99, image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=500&fit=crop&crop=center' },
    { item_id: 11, item_name: 'Linen Beach Dress', price: 73.25, image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&crop=center' },
    { item_id: 12, item_name: 'Wool Beret Hat', price: 38.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop&crop=center' },
  ]);

  // Calculate total slides once to avoid hydration mismatches
  const totalSlides = Math.ceil(products.length / 4);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Theme-based colors
  const themeColors = {
    rose: {
      bg: 'bg-rose-100',
      hoverBg: 'hover:bg-rose-200',
      text: 'text-rose-600',
      border: 'border-rose-50',
      hoverBorder: 'hover:border-rose-200',
      hoverText: 'hover:text-rose-600',
    },
    amber: {
      bg: 'bg-amber-100',
      hoverBg: 'hover:bg-amber-200',
      text: 'text-amber-600',
      border: 'border-amber-50',
      hoverBorder: 'hover:border-amber-200',
      hoverText: 'hover:text-amber-600',
    },
    emerald: {
      bg: 'bg-emerald-100',
      hoverBg: 'hover:bg-emerald-200',
      text: 'text-emerald-600',
      border: 'border-emerald-50',
      hoverBorder: 'hover:border-emerald-200',
      hoverText: 'hover:text-emerald-600',
    },
    purple: {
      bg: 'bg-purple-100',
      hoverBg: 'hover:bg-purple-200',
      text: 'text-purple-600',
      border: 'border-purple-50',
      hoverBorder: 'hover:border-purple-200',
      hoverText: 'hover:text-purple-600',
    },
    blue: {
      bg: 'bg-blue-100',
      hoverBg: 'hover:bg-blue-200',
      text: 'text-blue-600',
      border: 'border-blue-50',
      hoverBorder: 'hover:border-blue-200',
      hoverText: 'hover:text-blue-600',
    },
  };

  const colors = themeColors[theme];

  const visibleProducts = carousel ? products.slice(currentSlide * 4, (currentSlide + 1) * 4) : products;

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setQuantity(1);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Navigation Buttons - only show if carousel */}
      {carousel && (
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={prevSlide}
            className={`p-3 ${colors.bg} ${colors.hoverBg} rounded-full transition-colors duration-200 shadow-sm`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft className={`h-5 w-5 ${colors.text}`} />
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  i === currentSlide ? colors.text : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className={`p-3 ${colors.bg} ${colors.hoverBg} rounded-full transition-colors duration-200 shadow-sm`}
            disabled={currentSlide === totalSlides - 1}
          >
            <ChevronRight className={`h-5 w-5 ${colors.text}`} />
          </button>
        </div>
      )}

      {/* Product Cards */}
      {loading ? (
        <div className={`grid gap-6 ${carousel ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 animate-pulse">
              <div className="w-full h-64 bg-gray-200"></div>
              <div className="p-4 text-center">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto"></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={`grid gap-6 ${carousel ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
          {visibleProducts.map((product) => (
            <div
              key={product.item_id}
              className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border ${colors.border} cursor-pointer`}
              onClick={() => openModal(product)}
            >
              <div className="relative overflow-hidden">
                <Image
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                  alt={product.item_name}
                  width={300}
                  height={256}
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-50">
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-600" />
                </button>
              </div>
              <div className="p-4 text-center">
                <h3 className={`text-sm font-light text-gray-800 mb-2 line-clamp-2 group-hover:${colors.hoverText} transition-colors`}>
                  {product.item_name}
                </h3>
                <div className={`text-lg font-light ${colors.text}`}>
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row">
              {/* Product Image */}
              <div className="md:w-1/2 relative">
                <Image
                  className="w-full h-96 md:h-full object-cover"
                  src={selectedProduct.image}
                  alt={selectedProduct.item_name}
                  width={600}
                  height={600}
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-600" />
                </button>
              </div>

              {/* Product Details */}
              <div className="md:w-1/2 p-8">
                <div className="mb-6">
                  <h2 className="text-2xl font-light text-gray-800 mb-2">
                    {selectedProduct.item_name}
                  </h2>
                  <div className="flex items-center mb-4">
                    <div className="flex text-amber-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">(4.8) • 124 reviews</span>
                  </div>
                  <div className="text-3xl font-light text-amber-600 mb-4">
                    ${selectedProduct.price}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    Discover the perfect blend of style and comfort with this exquisite piece.
                    Crafted with premium materials and attention to detail, this item brings
                    elegance and sophistication to your wardrobe. Perfect for any occasion,
                    from casual outings to special events.
                  </p>
                </div>

                {/* Size Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Size</h3>
                  <div className="flex gap-2">
                    {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        className="px-4 py-2 border border-gray-200 rounded-lg hover:border-amber-400 hover:text-amber-600 transition-colors text-sm"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-800 mb-3">Quantity</h3>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={decreaseQuantity}
                      className="p-2 border border-gray-200 rounded-lg hover:border-amber-400 hover:text-amber-600 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-4 py-2 border border-gray-200 rounded-lg min-w-[60px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={increaseQuantity}
                      className="p-2 border border-gray-200 rounded-lg hover:border-amber-400 hover:text-amber-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white py-3 px-6 rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all duration-300 font-light">
                    Add to Cart
                  </button>
                  <button className="p-3 border border-gray-200 rounded-xl hover:border-amber-400 hover:text-amber-600 transition-colors">
                    <Heart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}