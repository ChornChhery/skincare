const MOCK_DELAY = 500; // Simulate network delay

export const mockProducts = [
  {
    id: 1,
    name_en: "Gentle Cleanser",
    name_th: "เจลล้างหน้าอ่อนโยน",
    name_km: "ក្រែមលាងមុខថ្នមៗ",
    price: 25.99,
    category: "cleanser",
    image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&h=300",
    description_en: "A gentle cleanser for all skin types"
  },
  {
    id: 2,
    name_en: "Hydrating Moisturizer",
    name_th: "ครีมบำรุงผิวเพิ่มความชุ่มชื้น",
    name_km: "ក្រែមបំប៉នសំណើម",
    price: 35.99,
    category: "moisturizer",
    image_url: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=300&h=300",
    description_en: "Deep hydration for dry skin"
  },
  {
    id: 3,
    name_en: "Vitamin C Serum",
    name_th: "เซรั่มวิตามินซี",
    name_km: "សៀរ៉ូមវីតាមីនC",
    price: 45.99,
    category: "serum",
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&h=300",
    description_en: "Brightening and antioxidant protection"
  },
  // Add more mock products...
];

export const mockApi = {
  login: async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    
    // Simulate successful login
    if (email === "demo@example.com" && password === "password123") {
      return {
        token: "mock-jwt-token",
        user: {
          id: "1",
          email,
          first_name: "Demo",
          last_name: "User",
          skin_type: "combination",
          language: "en",
        }
      };
    }
    throw new Error("Invalid credentials");
  },

  register: async (userData: any) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    return {
      token: "mock-jwt-token",
      user: {
        id: "2",
        ...userData,
      }
    };
  },

  getProducts: async () => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    return { data: mockProducts };
  },

  getProduct: async (id: number) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    const product = mockProducts.find(p => p.id === id);
    if (!product) throw new Error("Product not found");
    return { data: product };
  }
};
