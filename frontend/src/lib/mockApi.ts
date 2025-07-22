const MOCK_DELAY = 500; // Simulate network delay

export const mockProducts = [
  {
    id: 1,
    name_en: "Gentle Cleanser",
    price: 25.99,
    category: "cleanser",
    image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&h=300",
    description_en: "A gentle cleanser for all skin types"
  },
  {
    id: 2,
    name_en: "Hydrating Moisturizer",
    price: 35.99,
    category: "moisturizer",
    image_url: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=300&h=300",
    description_en: "Deep hydration for dry skin"
  },
  {
    id: 3,
    name_en: "Vitamin C Serum",
    price: 45.99,
    category: "serum",
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&h=300",
    description_en: "Brightening and antioxidant protection"
  },
  {
    id:4,
    name_en: "Retinol ",
    price: 5.99,
    category: "Medicine",
    image_url: "https://berichthailand.com/images/product/other/Acnetin-A_0025__10g_800x800.jpg",
    description_en: "Retinol is a vitamin A derivative that helps to reduce the appearance of fine lines and wrinkles, improve skin texture, and promote cell turnover. It is commonly used in anti-aging skincare products."
  },
  {
    id: 5,
    name_en: "Skinoren",
    price: 29.99,
    category: "Medicine",
    image_url: "https://www.binsina.ae/media/catalog/product/1/2/12300_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=600&width=600&canvas=600:600",
    description_en: "Skinoren is a topical medication used to treat acne and rosacea. It contains azelaic acid, which helps to reduce inflammation, unclog pores, and kill acne-causing bacteria."
  },
  {
    id: 6,
    name_en: "Sunscreen Anessa",
    price: 39.99,
    category: "Sunscreen",
    image_url: "https://princesscosmeticsqa.com/cdn/shop/files/shiseido-anessa-perfect-uv-sunscreen-skincare-milk-spf50-pa-60ml-shysydo-anysa-hlyb-alaanay-balbshr-aloaky-mn-alshms-balashaa-fok-albnfsjy-spf50-pa-60-ml-473043.jpg?v=1738160101&width=1946",
    description_en: "Anessa sunscreen is a popular Japanese sunscreen brand known for its high SPF protection and lightweight formula. It provides broad-spectrum protection against UVA and UVB rays, making it suitable for daily use."
  },
  {
    id: 7,
    name_en: "Ordinary Niacinamide",
    price: 19.99,
    category: "serum",
    image_url: "https://n.nordstrommedia.com/it/032c0fca-afb7-44a2-9a72-732cefc78538.jpeg?h=368&w=240&dpr=2",
    description_en: "The Ordinary Niacinamide 10% + Zinc 1% is a serum that helps to reduce the appearance of blemishes, control excess oil, and improve skin texture. It contains niacinamide, which is known for its anti-inflammatory properties."
  },
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
