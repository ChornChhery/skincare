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
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 5, comment: '' });
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const { user, isAuthenticated } = useAuth();
  const params = useParams();
  const router = useRouter();
  
  // Get product ID from URL params
  const productId = params?.id ? parseInt(Array.isArray(params.id) ? params.id[0] : params.id) : null;

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
          setProduct(foundProduct);
          
          // Get related products (same category, different product)
          const related = response.data
            .filter((p: Product) => p.category === foundProduct.category && p.id !== productId)
            .slice(0, 4);
          setRelatedProducts(related);
          
          // Get product reviews
          const productReviews = mockReviews.filter(r => r.product_id === productId && r.status === 'approved');
          setReviews(productReviews);
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
    if (!product) return;
    
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
    setShowSuccessMessage(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const handleBuyNow = async () => {
    if (!product) return;
    
    // Add to cart first
    await handleAddToCart();
    
    // Navigate to cart page
    router.push('/cart');
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: number) => id !== productId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(productId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
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
    
    // Show success message
    alert('Review submitted! It will be visible after moderation.');
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
    : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <Navbar />
        <div className="flex justify-center items-center min-h-[80vh]">
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
        <Navbar />
        <div className="flex flex-col justify-center items-center min-h-[80vh]">
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
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-bounce">
          ✅ Added to cart successfully!
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
            onClick={() => router.push('/products')}
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
          >
            Products
          </button>
          <span className="text-slate-400">/</span>
          <span className="text-slate-600 capitalize">{product.category}</span>
          <span className="text-slate-400">/</span>
          <span className="text-slate-800 font-medium">{getProductName(product)}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden border border-white/60 shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={getProductName(product)}
                className="w-full h-full object-cover"
              />
              
              <div className="absolute top-6 left-6">
                <span className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-blue-500/90 to-purple-600/90 text-white rounded-full backdrop-blur-sm capitalize shadow-lg">
                  {product.category}
                </span>
              </div>

              <button
                onClick={toggleFavorite}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 ${
                  isFavorite
                    ? 'bg-red-500 text-white shadow-lg shadow-red-200'
                    : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                }`}
              >
                <svg className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            <div className="flex space-x-3">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-3 ring-blue-500 ring-offset-2' 
                      : 'opacity-70 hover:opacity-100'
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
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {renderStars(Math.round(averageRating))}
                  <span className="text-slate-600 ml-2 font-medium">
                    {averageRating > 0 ? averageRating.toFixed(1) : 'No rating'} ({reviews.length} reviews)
                  </span>
                </div>
              </div>

              <div className="text-4xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-6">
                ${product.price.toFixed(2)}
              </div>
              
              <div className="text-sm text-slate-600 mb-4">
                Stock: <span className="font-semibold text-green-600">{product.stock} available</span>
              </div>
            </div>

            {/* Skin Type Compatibility */}
            {user?.skin_type && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-2xl p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xl">✨</span>
                  <span className="font-semibold text-slate-700">
                    {product.skin_type === 'all' || product.skin_type === user.skin_type 
                      ? `Perfect for your ${user.skin_type} skin type`
                      : `Recommended for ${product.skin_type} skin (you have ${user.skin_type})`
                    }
                  </span>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Description</h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {getProductDescription(product)}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border border-slate-200 rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-l-xl transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 h-12 flex items-center justify-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-12 h-12 flex items-center justify-center text-slate-600 hover:bg-slate-50 rounded-r-xl transition-colors"
                  >
                    +
                  </button>
                </div>
                <span className="text-slate-500">Max: {product.stock}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-blue-200/50 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now - ${(product.price * quantity).toFixed(2)}
              </button>
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || product.stock === 0}
                className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 px-8 rounded-xl font-semibold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAddingToCart ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800">Customer Reviews</h2>
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Write a Review
            </button>
          </div>

          {showReviewForm && (
            <div className="mb-8 bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <form onSubmit={handleSubmitReview}>
                <div className="mb-4">
                  <label className="block text-slate-700 font-semibold mb-2">Rating</label>
                  <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating: star})}
                        className={`text-2xl ${star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-slate-700 font-semibold mb-2">Comment</label>
                  <textarea
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full p-3 border border-slate-300 rounded-lg resize-none h-24"
                    placeholder="Share your experience with this product..."
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          <div className="space-y-6">
            {reviews.length === 0 ? (
              <div className="text-center py-12 text-slate-500">
                <p className="text-xl">No reviews yet</p>
                <p>Be the first to review this product!</p>
              </div>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-800">{review.customer_name}</h4>
                      <div className="flex items-center space-x-2">
                        <div className="flex">{renderStars(review.rating)}</div>
                        <span className="text-slate-500 text-sm">{review.created_at}</span>
                      </div>
                    </div>
                    {review.status === 'pending' && (
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                        Pending Review
                      </span>
                    )}
                  </div>
                  <p className="text-slate-600 leading-relaxed">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                  <div className="aspect-square relative overflow-hidden">
                    <img
                      src={relatedProduct.image_url}
                      alt={relatedProduct.name_en}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-slate-800 mb-2 line-clamp-2">
                      {relatedProduct.name_en}
                    </h3>
                    <p className="text-2xl font-bold text-green-600 mb-3">
                      ${relatedProduct.price.toFixed(2)}
                    </p>
                    <button
                      onClick={() => router.push(`/products/${relatedProduct.id}`)}
                      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}