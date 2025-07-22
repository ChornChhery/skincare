'use client';

import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

interface Product {
  id: number;
  name_en: string;
  name_th: string;
  name_kh: string;
  price: number;
  category: string;
  image_url: string;
  description_en: string;
  description_th?: string;
  description_km?: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await mockApi.getProducts();
        setProducts(response.data);
      } catch (error) {
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const getProductName = (product: Product) => {
    if (user?.language === 'th') return product.name_th;
    if (user?.language === 'km') return product.name_kh;
    return product.name_en;
  };

  const handleProductClick = (productId: number) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    // TODO: Navigate to product detail page
    router.push(`/products/${productId}`);
  };

  const handleBuyNow = (productId: number) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    // TODO: Implement buy now functionality
    console.log('Buy now:', productId);
  };

  const handleAddToCart = (e: React.MouseEvent, productId: number) => {
    e.stopPropagation(); // Prevent triggering the card click
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', productId);
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl">Loading products...</div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center min-h-screen">
          <div className="text-xl text-red-600">{error}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            🧴 Skincare Products Store
          </h1>
          {isAuthenticated && user?.skin_type && (
            <p className="text-lg text-gray-600">
              Recommended for {user.skin_type} skin
            </p>
          )}
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => !isAuthenticated && router.push('/login')}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image_url}
                  alt={getProductName(product)}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-gray-800">
                  {getProductName(product)}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description_en}
                </p>
                
                {/* Price and Category */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                    {product.category}
                  </span>
                </div>

                {/* Action Buttons - Only show for authenticated users */}
                {isAuthenticated && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleBuyNow(product.id)}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Buy Now
                    </button>
                    <button
                      onClick={(e) => handleAddToCart(e, product.id)}
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}