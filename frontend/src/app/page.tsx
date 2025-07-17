'use client';

import { useEffect, useState } from 'react';
import { productApi } from '@/lib/api';

interface Product {
  id: number;
  name_en: string;
  name_th: string;
  name_km: string;
  price: number;
  category: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productApi.getProducts();
        setProducts(response.data.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        🧴 Skincare Products Store
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name_en}</h2>
            <p className="text-gray-600 mb-1">🇹🇭 {product.name_th}</p>
            <p className="text-gray-600 mb-4">🇰🇭 {product.name_km}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm capitalize">
                {product.category}
              </span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
