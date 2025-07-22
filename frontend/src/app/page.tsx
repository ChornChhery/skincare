'use client';

import { useEffect, useState } from 'react';
import { mockApi } from '@/lib/mockApi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/contexts/AuthContext';

interface Product {
  id: number;
  name_en: string;
  name_th: string;
  name_km: string;
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
    if (user?.language === 'km') return product.name_km;
    return product.name_en;
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
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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
                
                {/* Language Variants */}
                {!isAuthenticated || user?.language === 'en' ? (
                  <>
                    <p className="text-gray-600 mb-1">🇹🇭 {product.name_th}</p>
                    <p className="text-gray-600 mb-4">🇰🇭 {product.name_km}</p>
                  </>
                ) : user?.language === 'th' ? (
                  <>
                    <p className="text-gray-600 mb-1">🇺🇸 {product.name_en}</p>
                    <p className="text-gray-600 mb-4">🇰🇭 {product.name_km}</p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 mb-1">🇺🇸 {product.name_en}</p>
                    <p className="text-gray-600 mb-4">🇹🇭 {product.name_th}</p>
                  </>
                )}
                
                {/* Price and Category */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                    {product.category}
                  </span>
                </div>
                
                {/* Add to Cart Button */}
                {isAuthenticated ? (
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                ) : (
                  <div className="text-center">
                    <p className="text-gray-500 mb-2">Please login to purchase</p>
                    <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg cursor-not-allowed">
                      Login Required
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
