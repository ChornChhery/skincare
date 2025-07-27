const MOCK_DELAY = 500; // Simulate network delay

export const mockProducts = [
  {
    id: 1,
    name_en: "Gentle Cleanser",
    price: 25.99,
    category: "cleanser",
    image_url: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=300&h=300",
    description_en: "A gentle cleanser suitable for all skin types. This pH-balanced formula effectively removes impurities while maintaining skin's natural moisture barrier."
  },
  {
    id: 2,
    name_en: "Hydrating Moisturizer",
    price: 35.99,
    category: "moisturizer",
    image_url: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=300&h=300",
    description_en: "Lightweight moisturizer that provides deep hydration without clogging pores. Enriched with hyaluronic acid and vitamin E for a radiant complexion."
  },
  {
    id: 3,
    name_en: "Vitamin C Serum",
    price: 45.99,
    category: "serum",
    image_url: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=300&h=300",
    description_en: "Brightening serum with 20% vitamin C to reduce dark spots and improve skin tone. Contains antioxidants to protect against environmental damage."
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
  {
    id: 8,
    name_en: "Soothing Toner",
    price: 18.99,
    category: "toner",
    image_url: "https://m.media-amazon.com/images/I/611Bq4XExoL._UF1000,1000_QL80_.jpg",
    description_en: "Alcohol-free toner with calming ingredients to soothe sensitive skin and prepare it for moisturizers or serums."
  },
  {
    id: 9,
    name_en: "Tea Tree Oil Spot Treatment",
    price: 14.99,
    category: "treatment",
    image_url: "https://www.jiomart.com/images/product/original/rvfx1vyfmt/youngtre-by-nature-tea-tree-oil-10ml-for-skin-hair-face-reduces-acne-promotes-blemish-free-skin-improves-hair-growth-product-images-orvfx1vyfmt-p606800558-0-202312191830.png?im=Resize=(420,420)",
    description_en: "Targeted spot treatment with natural tea tree oil to fight acne-causing bacteria and reduce redness."
  },
  {
    id: 10,
    name_en: "Aloe Vera Gel",
    price: 12.99,
    category: "moisturizer",
    image_url: "https://m.media-amazon.com/images/I/61zpo5fj6pL._UF350,350_QL80_.jpg",
    description_en: "Multi-purpose aloe vera gel that soothes sunburns, hydrates skin, and reduces irritation."
  },
  {
    id: 11,
    name_en: "Foaming Face Wash",
    price: 22.50,
    category: "cleanser",
    image_url: "https://m.media-amazon.com/images/I/61d8uQrW2hL._UF350,350_QL80_.jpg",
    description_en: "Gentle foaming cleanser that effectively removes dirt and makeup without stripping moisture."
  },
  {
    id: 12,
    name_en: "Hyaluronic Acid Serum",
    price: 28.75,
    category: "serum",
    image_url: "https://www.madiganspharmacy.ie/wp-content/uploads/2020/07/hyalu-serum.jpg",
    description_en: "Hydrating serum packed with hyaluronic acid to plump and moisturize skin deeply."
  },
  {
    id: 13,
    name_en: "Exfoliating Scrub",
    price: 16.99,
    category: "exfoliator",
    image_url: "https://i5.walmartimages.com/asr/5030bb99-dc5b-4e93-b116-bee61ce41393.301ed15e91d0294c7c8ec9c35f69c206.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
    description_en: "Natural exfoliating scrub that removes dead skin cells and reveals smoother, brighter skin."
  },
  {
    id: 14,
    name_en: "Charcoal Clay Mask",
    price: 21.49,
    category: "mask",
    image_url: "https://i.ebayimg.com/images/g/1p0AAOSw3YtmIOcl/s-l400.jpg",
    description_en: "Purifying clay mask with charcoal to detoxify pores and absorb excess oil."
  },
  {
    id: 15,
    name_en: "Rose Water Mist",
    price: 17.99,
    category: "toner",
    image_url: "https://m.media-amazon.com/images/I/91YkweNjvCL._UF1000,1000_QL80_.jpg",
    description_en: "Refreshing facial mist made with rose water to hydrate and revitalize tired skin."
  },
  {
    id: 16,
    name_en: "Ceramide Moisturizer",
    price: 32.99,
    category: "moisturizer",
    image_url: "https://mintyshopaus.com/cdn/shop/files/SKIN-CERE1.jpg?v=1724668758&width=1445",
    description_en: "Rich moisturizer with ceramides to restore skin barrier and lock in hydration."
  },
  {
    id: 17,
    name_en: "Peptide Eye Cream",
    price: 26.49,
    category: "eye cream",
    image_url: "https://beautepratique.co/cdn/shop/products/SnailEyeCream_01_720x_d8fcdd63-9779-47f0-8537-6de27c0b22f9_1024x1024.jpg?v=1663556763",
    description_en: "Nourishing eye cream with peptides to reduce dark circles, puffiness, and fine lines."
  },
  {
    id: 18,
    name_en: "Green Tea Gel Cleanser",
    price: 20.00,
    category: "cleanser",
    image_url: "https://s3.konvy.com/static/team/2024/1113/17314740795234.jpg",
    description_en: "Antioxidant-rich cleanser with green tea extract to soothe and refresh skin."
  },
  {
    id: 19,
    name_en: "SPF 50 Tinted Sunscreen",
    price: 37.99,
    category: "sunscreen",
    image_url: "https://www.spectrumdermatologyseattle.com/wp-content/uploads/2024/05/La-Roche-Posay-Anthelios-Sunscreen-SPF-50-Tinted-Mineral-50ml-Carton-and-Product.webp",
    description_en: "High-protection sunscreen with tint to even skin tone and defend against sun damage."
  },
  {
    id: 20,
    name_en: "Niacinamide Cream",
    price: 24.99,
    category: "treatment",
    image_url: "https://www.koreancosmetic.cy/cdn/shop/files/GlutathioneNiacinamideFacialCreambyAPLB-1.jpg?v=1733847876",
    description_en: "Brightening cream enriched with niacinamide to minimize pores and even skin tone."
  },
  {
    id: 21,
    name_en: "Azelaic Acid Suspension",
    price: 22.49,
    category: "treatment",
    image_url: "https://www.intomyshop.net/wp-content/uploads/2020/08/Azelaic-Acid-Suspension-1.jpg",
    description_en: "Azelaic acid helps reduce redness and improve skin clarity, great for rosacea and acne."
  },
  {
    id: 22,
    name_en: "Glycolic Acid Toner",
    price: 19.75,
    category: "toner",
    image_url: "https://skinplusbd.com/public/uploads/all/cxjcun5wecf8YTqz4zIVKVa7x0vtLOQxbDku95Ab.webp",
    description_en: "Exfoliating toner with glycolic acid to remove dead skin and reveal a radiant glow."
  },
  {
    id: 23,
    name_en: "Bakuchiol Serum",
    price: 34.90,
    category: "serum",
    image_url: "https://medias.watsons.co.th/publishing/WTCTH-316425-front-zoom.jpg?version=1740684777",
    description_en: "Natural alternative to retinol, bakuchiol helps improve texture and reduce fine lines."
  },
  {
    id: 24,
    name_en: "Centella Calming Cream",
    price: 23.95,
    category: "moisturizer",
    image_url: "https://yvescosmetic.com/upload/products/subproduct1_17052022-105612.jpeg",
    description_en: "Cream infused with Centella Asiatica to calm irritated and inflamed skin."
  },
  {
    id: 25,
    name_en: "Snail Mucin Essence",
    price: 29.99,
    category: "essence",
    image_url: "https://assets.tops.co.th/CROSRX-COSRXAdvancedSnail96MucinPowerEssence100ml-8809416470009-1",
    description_en: "Hydrating essence with snail mucin to promote skin repair and improve elasticity."
  },
  {
    id: 26,
    name_en: "Collagen Firming Mask",
    price: 27.99,
    category: "mask",
    image_url: "https://th-test-11.slatic.net/p/63ba10de8018de7e46e80198451fe2a0.jpg",
    description_en: "Overnight mask with collagen to firm skin and boost elasticity while you sleep."
  },
  {
    id: 27,
    name_en: "Cica Repair Balm",
    price: 21.99,
    category: "treatment",
    image_url: "https://m.media-amazon.com/images/I/51EBMhnaAQL.jpg",
    description_en: "Repairing balm for sensitive skin prone to redness, enriched with madecassoside."
  }
];

export const mockApi = {
  login: async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, MOCK_DELAY));
    
    // Simulate successful login
    if (email === "demo@example.com" && password === "demo12") {
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