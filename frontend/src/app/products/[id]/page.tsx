'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { mockApi, mockProducts, mockReviews } from '@/lib/mockApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

interface Product {
  id: number;
  name_en: string;
  name_th?: string;
  name_kh?: string;
  price: number;
  category: string;
  image_url: string;
  description_en: string;
  description_th?: string;
  description_km?: string;
  stock: number;
  skin_type: string;
  in_stock?: boolean;
  stock_count?: number;
  original_price?: number;
  rating?: number;
  reviews_count?: number;
  is_sale?: boolean;
  sale_percentage?: number;
}

interface Review {
  id: number;
  product_id: number;
  customer_name: string;
  rating: number;
  comment: string;
  status: string;
  created_at: string;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image_url: string;
}

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState('');
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const { user, isAuthenticated } = useAuth();
  const params = useParams();
  const router = useRouter();
  
  // Get product ID from URL params
  const productId = params?.id ? parseInt(Array.isArray(params.id) ? params.id[0] : params.id) : null;

  // Category configurations (matching homepage)
  const categoryConfig: Record<string, { icon: string; color: string }> = {
    'all': { icon: '🌟', color: 'from-slate-500 to-slate-600' },
    'cleanser': { icon: '🧼', color: 'from-blue-500 to-cyan-500' },
    'moisturizer': { icon: '💧', color: 'from-blue-400 to-teal-500' },
    'serum': { icon: '✨', color: 'from-purple-500 to-pink-500' },
    'sunscreen': { icon: '☀️', color: 'from-yellow-500 to-orange-500' },
    'toner': { icon: '🌿', color: 'from-green-500 to-emerald-500' },
    'mask': { icon: '🎭', color: 'from-indigo-500 to-purple-500' },
    'exfoliator': { icon: '🔄', color: 'from-red-500 to-pink-500' },
    'essence': { icon: '💎', color: 'from-cyan-500 to-blue-500' },
    'eye cream': { icon: '👁️', color: 'from-rose-500 to-pink-500' },
    'treatment': { icon: '🧴', color: 'from-violet-500 to-purple-500' },
    'medicine': { icon: '💊', color: 'from-red-400 to-rose-500' }
  };

  // Enhanced product data
  const enhanceProductData = (product: Product): Product => {
    return {
      ...product,
      in_stock: product.stock > 0,
      stock_count: product.stock,
      original_price: Math.random() > 0.7 ? product.price * 1.3 : undefined,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10,
      reviews_count: Math.floor(Math.random() * 200) + 10,
      is_sale: Math.random() > 0.7,
      sale_percentage: Math.random() > 0.7 ? Math.floor(Math.random() * 30) + 10 : undefined
    };
  };

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (!productId) {
      setError('Invalid product ID');
      setLoading(false);
      return;
    }

    const fetchProductData = async () => {
      try {
        // Get product details
        const response = await mockApi.getProducts();
        const foundProduct = response.data.find((p: Product) => p.id === productId);
        
        if (foundProduct) {
          const enhancedProduct = enhanceProductData(foundProduct);
          setProduct(enhancedProduct);
          
          // Get related products (same category, different product)
          const related = response.data
            .filter((p: Product) => p.category === foundProduct.category && p.id !== productId)
            .map(p => enhanceProductData(p))
            .slice(0, 4);
          setRelatedProducts(related);
          
          // Get product reviews
          const productReviews = mockReviews.filter(r => r.product_id === productId && r.status === 'approved');
          setReviews(productReviews);

          // Check if product is in favorites
          const savedFavorites = localStorage.getItem('favorites');
          if (savedFavorites) {
            const favorites = JSON.parse(savedFavorites);
            setIsFavorite(favorites.includes(productId));
          }
        } else {
          setError('Product not found');
        }
      } catch (error) {
        setError('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProductData();
  }, [productId, isAuthenticated, router]);

  const getProductName = (product: Product) => {
    if (user?.language === 'th' && product.name_th) return product.name_th;
    if (user?.language === 'km' && product.name_kh) return product.name_kh;
    return product.name_en;
  };

  const getProductDescription = (product: Product) => {
    if (user?.language === 'th' && product.description_th) return product.description_th;
    if (user?.language === 'km' && product.description_km) return product.description_km;
    return product.description_en;
  };

  const showNotificationMessage = (message: string) => {
    setShowSuccessMessage(message);
    setTimeout(() => setShowSuccessMessage(''), 3000);
  };

  const addToCart = (item: CartItem) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItemIndex = existingCart.findIndex((cartItem: CartItem) => cartItem.id === item.id);
    
    if (existingItemIndex > -1) {
      existingCart[existingItemIndex].quantity += item.quantity;
    } else {
      existingCart.push(item);
    }
    
    localStorage.setItem('cart', JSON.stringify(existingCart));
  };

  const handleAddToCart = async () => {
    if (!product || !product.in_stock) {
      showNotificationMessage('❌ Product is out of stock');
      return;
    }

    if (quantity > product.stock_count!) {
      showNotificationMessage('❌ Quantity exceeds available stock');
      return;
    }
    
    setIsAddingToCart(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const cartItem: CartItem = {
      id: product.id,
      name: getProductName(product),
      price: product.price,
      quantity: quantity,
      image_url: product.image_url
    };
    
    addToCart(cartItem);
    
    setIsAddingToCart(false);
    showNotificationMessage('✅ Added to cart successfully!');
  };

  const handleBuyNow = async () => {
    if (!product || !product.in_stock) {
      showNotificationMessage('❌ Product is out of stock');
      return;
    }

    if (quantity > product.stock_count!) {
      showNotificationMessage('❌ Quantity exceeds available stock');
      return;
    }
    
    // Add to cart first
    await handleAddToCart();
    
    // Navigate to cart page
    setTimeout(() => router.push('/cart'), 1000);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: number) => id !== productId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      showNotificationMessage('💔 Removed from favorites');
    } else {
      favorites.push(productId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setIsFavorite(true);
      showNotificationMessage('❤️ Added to favorites');
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product || !user) return;

    const review = {
      id: Date.now(),
      product_id: product.id,
      customer_name: `${user.first_name} ${user.last_name}`,
      rating: newReview.rating,
      comment: newReview.comment,
      status: 'pending',
      created_at: new Date().toISOString().split('T')[0]
    };

    setReviews([review as Review, ...reviews]);
    setNewReview({ rating: 5, comment: '' });
    setShowReviewForm(false);
    
    showNotificationMessage('✅ Review submitted! It will be visible after moderation.');
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : (product?.rating || 0);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        <div className="flex justify-center items-center min-h-[80vh] relative z-10">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-l-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDelay: '0.3s' }}></div>
            <div className="mt-6 text-center">
              <div className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Loading Product Details...
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Floating background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <Navbar />
        <div className="flex flex-col justify-center items-center min-h-[80vh] relative z-10">
          <div className="text-6xl mb-4">😔</div>
          <div className="text-2xl font-bold text-red-500 mb-2">{error}</div>
          <div className="text-gray-500 mb-6">Product could not be found</div>
          <button 
            onClick={() => router.push('/products')}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Back to Products
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Mock additional images for gallery
  const productImages = [
    product.image_url,
    product.image_url,
    product.image_url,
    product.image_url
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-sm border border-green-200 text-green-800 px-6 py-3 rounded-xl shadow-lg animate-pulse">
          {showSuccessMessage}
        </div>
      )}

      {/* Floating background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <Navbar />
      
      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm mb-8">
          <button 
            onClick={() => router.push('/')}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Home
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600 capitalize">{product.category}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-medium">{getProductName(product)}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/60 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={productImages[selectedImage]}
                alt={getProductName(product)}
                className="w-full h-full object-cover"
              />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className={`inline-flex items-center space-x-2 px-4 py-2 text-sm font-bold bg-gradient-to-r ${
                  categoryConfig[product.category.toLowerCase()]?.color || 'from-gray-500 to-gray-600'
                } text-white rounded-full backdrop-blur-sm capitalize shadow-lg`}>
                  <span>{categoryConfig[product.category.toLowerCase()]?.icon || '🧴'}</span>
                  <span>{product.category}</span>
                </span>
              </div>

              {/* Sale Badge */}
              {product.is_sale && product.sale_percentage && (
                <div className="absolute top-20 left-6 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  -{product.sale_percentage}% OFF
                </div>
              )}

              {/* Stock Status */}
              {!product.in_stock && (
                <div className="absolute top-6 left-6 right-6 bg-red-500/90 text-white text-center py-2 rounded-xl font-bold text-sm">
                  Out of Stock
                </div>
              )}

              {/* Favorite Button */}
              <button
                onClick={toggleFavorite}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 ${
                  isFavorite
                    ? 'bg-red-500 text-white shadow-lg shadow-red-200'
                    : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white hover:scale-110'
                }`}
              >
                <svg className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Image Thumbnails */}
            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-3 ring-blue-500 ring-offset-2 scale-105' 
                      : 'opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${getProductName(product)} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-800 mb-4 leading-tight">
                {getProductName(product)}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(averageRating))}
                  <span className="text-slate-600 ml-2 font-medium">
                    {averageRating > 0 ? averageRating.toFixed(1) : 'No rating'} ({product.reviews_count || reviews.length} reviews)
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                  ${product.price.toFixed(2)}
                </span>
                {product.original_price && (
                  <span className="text-xl text-slate-400 line-through">
                    ${product.original_price.toFixed(2)}
                  </span>
                )}
              </div>
              
              {/* Stock Status */}
              <div className="mb-6">
                {product.in_stock ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className={`font-semibold ${
                      (product.stock_count || 0) <= 5 ? 'text-orange-600' : 'text-green-600'
                    }`}>
                      {(product.stock_count || 0) <= 5 
                        ? `Only ${product.stock_count} left in stock!`
                        : `In Stock (${product.stock_count} available)`
                      }
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="font-semibold text-red-600">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Skin Type Compatibility */}
            {user?.skin_type && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">✨</span>
                  <span className="font-semibold text-slate-700">
                    {product.skin_type === 'all' || product.skin_type === user.skin_type 
                      ? `Perfect for your ${user.skin_type} skin type!`
                      : `Recommended for ${product.skin_type} skin (you have ${user.skin_type})`
                    }
                  </span>
                </div>
              </div>
            )}

            {/* Description */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Description</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {getProductDescription(product)}
              </p>
            </div>

            {/* Quantity Selector */}
            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white/70 backdrop-blur-sm border border-white/60 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-l-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="w-16 h-12 flex items-center justify-center font-semibold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock_count || 0, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-r-xl transition-colors"
                    disabled={quantity >= (product.stock_count || 0)}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                <span className="text-slate-500">Max: {product.stock_count || 0}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleBuyNow}
                disabled={!product.in_stock}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:grayscale"
              >
                {product.in_stock ? `Buy Now - $${(product.price * quantity).toFixed(2)}` : 'Out of Stock'}
              </button>
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || !product.in_stock}
                className="flex-1 bg-white/70 backdrop-blur-sm border-2 border-slate-200 text-slate-700 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent">
              Customer Reviews
            </h2>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            >
              Write a Review
            </button>
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="mb-8 bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60">
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-slate-700 font-semibold mb-3">Rating</label>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`text-3xl transition-transform duration-200 hover:scale-110 ${
                          star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-slate-700 font-semibold mb-3">Comment</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full p-4 border border-slate-300 rounded-xl resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your experience with this product..."
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-3 bg-slate-200 text-slate-700 rounded-xl hover:bg-slate-300 transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-16 bg-white/70 backdrop-blur-sm rounded-3xl border border-white/60">
                <div className="text-6xl mb-4">💬</div>
                <p className="text-2xl font-semibold text-slate-600 mb-2">No reviews yet</p>
                <p className="text-slate-500">Be the first to review this product!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/60 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{review.customer_name}</h4>
                      <div className="flex items-center space-x-3 mt-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-slate-500 text-sm">{review.created_at}</span>
                      </div>
                    </div>
                    {review.status === 'pending' && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        Pending Review
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed text-lg">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text text-transparent mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="group bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/60 hover:border-blue-200/80 shadow-lg hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                  onClick={() => router.push(`/products/${relatedProduct.id}`)}
                >
                  {/* Sale Badge */}
                  {relatedProduct.is_sale && relatedProduct.sale_percentage && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      -{relatedProduct.sale_percentage}%
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.image_url}
                      alt={relatedProduct.name_en}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 text-xs font-bold bg-gradient-to-r ${
                        categoryConfig[relatedProduct.category.toLowerCase()]?.color || 'from-gray-500 to-gray-600'
                      } text-white rounded-full backdrop-blur-sm capitalize`}>
                        <span>{categoryConfig[relatedProduct.category.toLowerCase()]?.icon || '🧴'}</span>
                        <span>{relatedProduct.category}</span>
                      </span>
                    </div>

                    {/* Stock Status */}
                    {!relatedProduct.in_stock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                      {relatedProduct.name_en}
                    </h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-sm ${
                              i < Math.floor(relatedProduct.rating || 0) ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          >
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-slate-600">
                        ({relatedProduct.reviews_count})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                        ${relatedProduct.price.toFixed(2)}
                      </span>
                      {relatedProduct.original_price && (
                        <span className="text-sm text-slate-400 line-through">
                          ${relatedProduct.original_price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Stock Info */}
                    {relatedProduct.in_stock && relatedProduct.stock_count && relatedProduct.stock_count <= 5 && (
                      <div className="text-xs text-orange-600 font-medium mb-3">
                        Only {relatedProduct.stock_count} left!
                      </div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/products/${relatedProduct.id}`);
                      }}
                      disabled={!relatedProduct.in_stock}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:grayscale"
                    >
                      {relatedProduct.in_stock ? 'View Product' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}