# 🏗️ Complete Skincare E-commerce Backend Structure & Database Design (Updated)

## 📊 **Database Strategy for Machine Learning**

### 🔵 **PostgreSQL** - Primary Transactional Database
**Used for:** Core business data, structured relationships
- ✅ Users, Products, Orders, Reviews, Coupons
- ✅ **ML Training Data Source** - Historical purchases, user preferences, ratings
- ✅ **Real-time ML Queries** - Current user data, product features

### 🟢 **MongoDB** - Analytics & ML Data Lake
**Used for:** Unstructured ML data, analytics, recommendations
- ✅ **ML Model Storage** - Trained models, feature vectors, embeddings
- ✅ **User Behavior Analytics** - Clicks, views, session data
- ✅ **Recommendation Results** - Pre-computed recommendations
- ✅ **Search Analytics** - Query patterns, result interactions

### 🔄 **ML Data Flow:**
PostgreSQL → (ETL) → MongoDB → ML Training → Models → MongoDB → API Recommendations

---

## 📁 Project Directory Structure

```
skincare-ecommerce-backend/
├── 📂 services/
│   ├── 📂 api-server/ (Go)
│   │   ├── 📂 cmd/
│   │   │   └── 📂 server/
│   │   │       └── main.go
│   │   ├── 📂 internal/
│   │   │   ├── 📂 api/
│   │   │   │   ├── 📂 handlers/
│   │   │   │   │   ├── auth.go
│   │   │   │   │   ├── password_reset.go
│   │   │   │   │   ├── profile.go                    # 🆕 Profile picture uploads
│   │   │   │   │   ├── products.go
│   │   │   │   │   ├── categories.go
│   │   │   │   │   ├── orders.go
│   │   │   │   │   ├── customers.go
│   │   │   │   │   ├── coupons.go
│   │   │   │   │   ├── reviews.go
│   │   │   │   │   ├── cart.go
│   │   │   │   │   ├── wishlist.go
│   │   │   │   │   ├── file_upload.go               # 🆕 File upload handler
│   │   │   │   │   └── admin.go
│   │   │   │   ├── 📂 middleware/
│   │   │   │   │   ├── auth.go
│   │   │   │   │   ├── admin.go
│   │   │   │   │   ├── cors.go
│   │   │   │   │   ├── rate_limit.go
│   │   │   │   │   ├── validation.go
│   │   │   │   │   ├── file_upload.go               # 🆕 File upload middleware
│   │   │   │   │   └── logging.go
│   │   │   │   └── 📂 routes/
│   │   │   │       ├── api.go
│   │   │   │       ├── admin.go
│   │   │   │       └── health.go
│   │   │   ├── 📂 services/
│   │   │   │   ├── auth_service.go
│   │   │   │   ├── email_service.go
│   │   │   │   ├── password_reset_service.go
│   │   │   │   ├── file_upload_service.go           # 🆕 File upload service
│   │   │   │   ├── product_service.go
│   │   │   │   ├── category_service.go
│   │   │   │   ├── order_service.go
│   │   │   │   ├── customer_service.go
│   │   │   │   ├── coupon_service.go
│   │   │   │   ├── review_service.go
│   │   │   │   ├── cart_service.go
│   │   │   │   └── wishlist_service.go
│   │   │   ├── 📂 repository/
│   │   │   │   ├── interfaces.go
│   │   │   │   ├── 📂 postgres/
│   │   │   │   │   ├── user_repo.go
│   │   │   │   │   ├── product_repo.go
│   │   │   │   │   ├── category_repo.go
│   │   │   │   │   ├── order_repo.go
│   │   │   │   │   ├── coupon_repo.go
│   │   │   │   │   ├── review_repo.go
│   │   │   │   │   ├── cart_repo.go
│   │   │   │   │   └── wishlist_repo.go
│   │   │   │   ├── 📂 redis/
│   │   │   │   │   ├── session_repo.go
│   │   │   │   │   ├── cache_repo.go
│   │   │   │   │   └── cart_cache_repo.go
│   │   │   │   └── 📂 mongodb/
│   │   │   │       ├── analytics_repo.go            # 🎯 ML Analytics
│   │   │   │       ├── recommendation_repo.go       # 🎯 ML Recommendations  
│   │   │   │       └── ml_data_repo.go              # 🎯 ML Training Data
│   │   │   ├── 📂 models/
│   │   │   │   ├── user.go                          # 🆕 Updated with profile_picture
│   │   │   │   ├── product.go
│   │   │   │   ├── category.go
│   │   │   │   ├── order.go
│   │   │   │   ├── coupon.go
│   │   │   │   ├── review.go
│   │   │   │   ├── cart.go
│   │   │   │   ├── wishlist.go
│   │   │   │   └── common.go
│   │   │   ├── 📂 config/
│   │   │   │   ├── config.go
│   │   │   │   ├── database.go
│   │   │   │   └── env.go
│   │   │   └── 📂 utils/
│   │   │       ├── jwt.go
│   │   │       ├── password.go
│   │   │       ├── email.go
│   │   │       ├── tokens.go
│   │   │       ├── validators.go
│   │   │       ├── response.go
│   │   │       ├── pagination.go
│   │   │       └── file_utils.go                    # 🆕 File handling utilities
│   │   ├── 📂 migrations/
│   │   │   ├── 001_create_enums.sql                 # 🆕 Updated with 'acne' skin_type
│   │   │   ├── 002_create_users.sql                 # 🆕 Updated with profile_picture
│   │   │   ├── 003_create_user_addresses.sql
│   │   │   ├── 004_create_categories.sql
│   │   │   ├── 005_create_products.sql
│   │   │   ├── 006_create_product_images.sql
│   │   │   ├── 007_create_orders.sql
│   │   │   ├── 008_create_order_items.sql
│   │   │   ├── 009_create_shopping_cart.sql
│   │   │   ├── 010_create_reviews.sql
│   │   │   ├── 011_create_coupons.sql
│   │   │   ├── 012_create_coupon_usage.sql
│   │   │   ├── 013_create_wishlists.sql
│   │   │   ├── 014_create_indexes.sql
│   │   │   └── 015_seed_data.sql
│   │   ├── 📂 uploads/                               # 🆕 File storage directory
│   │   │   ├── 📂 profiles/                         # User profile pictures
│   │   │   ├── 📂 products/                         # Product images
│   │   │   └── 📂 temp/                             # Temporary uploads
│   │   ├── 📂 tests/
│   │   │   ├── 📂 unit/
│   │   │   ├── 📂 integration/
│   │   │   └── 📂 fixtures/
│   │   ├── 📂 docs/
│   │   │   ├── api.yaml (OpenAPI/Swagger)
│   │   │   └── README.md
│   │   ├── go.mod
│   │   ├── go.sum
│   │   ├── .env.example
│   │   └── Dockerfile
│   └── 📂 ml-service/ (Python) # 🎯 Uses Both PostgreSQL + MongoDB
│       ├── 📂 app/
│       │   ├── 📂 api/
│       │   │   ├── __init__.py
│       │   │   ├── recommendations.py               # Uses MongoDB recommendations
│       │   │   ├── analytics.py                     # Uses MongoDB analytics
│       │   │   └── skin_analysis.py                 # Uses PostgreSQL user data
│       │   ├── 📂 models/
│       │   │   ├── __init__.py
│       │   │   ├── recommendation_model.py          # 🎯 Trained on PostgreSQL data
│       │   │   ├── skin_analysis_model.py           # 🎯 Uses PostgreSQL user profiles
│       │   │   ├── collaborative_filtering.py       # 🎯 PostgreSQL orders/reviews
│       │   │   └── content_based_model.py           # 🎯 PostgreSQL product features
│       │   ├── 📂 services/
│       │   │   ├── __init__.py
│       │   │   ├── ml_service.py                    # Orchestrates both databases
│       │   │   ├── recommendation_service.py        # MongoDB cache + PostgreSQL data
│       │   │   ├── data_processor.py                # ETL: PostgreSQL → MongoDB
│       │   │   └── model_trainer.py                 # 🎯 Trains on PostgreSQL data
│       │   ├── 📂 database/
│       │   │   ├── __init__.py
│       │   │   ├── mongodb.py                       # 🎯 Analytics & ML results
│       │   │   └── postgres_connector.py            # 🎯 Source data for training
│       │   ├── 📂 utils/
│       │   │   ├── __init__.py
│       │   │   ├── data_validation.py
│       │   │   ├── feature_extraction.py            # 🎯 Extract features from PostgreSQL
│       │   │   └── model_utils.py
│       │   ├── main.py
│       │   └── config.py
│       ├── 📂 tests/
│       ├── requirements.txt
│       ├── .env.example
│       └── Dockerfile
├── 📂 database/
│   ├── 📂 postgresql/
│   │   ├── init.sql
│   │   ├── schema.sql                               # 🆕 Updated schema
│   │   └── seed_data.sql
│   ├── 📂 mongodb/
│   │   ├── init.js
│   │   ├── collections.js                           # 🎯 ML-focused collections
│   │   └── indexes.js                               # 🎯 ML query optimization
│   └── 📂 redis/
│       └── redis.conf
├── 📂 scripts/
│   ├── setup.sh
│   ├── migrate.sh
│   ├── seed.sh
│   ├── ml_etl.sh                                    # 🎯 ETL script PostgreSQL → MongoDB
│   └── deploy.sh
├── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── README.md
```

## 🗄️ Updated PostgreSQL Database Schema

### Updated Schema with Profile Pictures & Acne Skin Type

```sql
-- =============================================
-- SKINCARE E-COMMERCE DATABASE SCHEMA (UPDATED)
-- =============================================

-- Create ENUM types first (🆕 UPDATED with 'acne' skin type)
CREATE TYPE user_role AS ENUM ('customer', 'admin', 'moderator');
CREATE TYPE user_language AS ENUM ('en', 'kh');
CREATE TYPE skin_type AS ENUM ('oily', 'dry', 'combination', 'sensitive', 'normal', 'acne', 'all'); -- 🆕 Added 'acne'
CREATE TYPE product_status AS ENUM ('draft', 'active', 'archived');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'partially_paid', 'refunded', 'partially_refunded', 'failed');
CREATE TYPE fulfillment_status AS ENUM ('unfulfilled', 'partial', 'fulfilled', 'shipped', 'delivered');
CREATE TYPE review_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE coupon_type AS ENUM ('percentage', 'fixed', 'free_shipping');
CREATE TYPE coupon_status AS ENUM ('active', 'inactive', 'expired');

-- =============================================
-- 1. USERS & AUTHENTICATION DOMAIN (🆕 UPDATED)
-- =============================================

-- Main users table (🆕 Added profile_picture field)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    skin_type skin_type DEFAULT 'normal',                -- 🆕 Can now include 'acne'
    language user_language DEFAULT 'en',
    role user_role DEFAULT 'customer',
    
    -- 🆕 Profile Picture (for both users and admins)
    profile_picture VARCHAR(500),                        -- 🆕 URL to profile image
    
    -- Account status
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    email_verification_token VARCHAR(255),
    email_verified_at TIMESTAMP,
    
    -- Password reset (forgot password functionality)
    password_reset_token VARCHAR(255),
    password_reset_expires TIMESTAMP,
    
    -- User statistics (matching mockApi)
    total_orders INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    avg_rating DECIMAL(3,2) DEFAULT 0,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- User addresses (unchanged)
CREATE TABLE user_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) DEFAULT 'shipping' CHECK (type IN ('shipping', 'billing')),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    company VARCHAR(100),
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100),
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    is_default BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 2. CATEGORIES & PRODUCTS DOMAIN
-- =============================================

-- Product categories (hierarchical)
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INTEGER REFERENCES categories(id) ON DELETE SET NULL,
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Main products table (🆕 Updated to work with 'acne' skin type)
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_kh VARCHAR(255),
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_kh TEXT,
    short_description TEXT,
    sku VARCHAR(100) UNIQUE NOT NULL,
    barcode VARCHAR(100),
    
    -- Pricing (matching mockApi)
    price DECIMAL(10,2) NOT NULL,
    compare_at_price DECIMAL(10,2),
    cost_price DECIMAL(10,2),
    
    -- Inventory (matching mockApi stock field)
    stock INTEGER DEFAULT 0,
    track_inventory BOOLEAN DEFAULT true,
    allow_backorders BOOLEAN DEFAULT false,
    
    -- Physical attributes
    weight DECIMAL(8,2),
    dimensions JSONB,
    
    -- Skincare specific (🆕 Now supports 'acne' skin type)
    skin_type skin_type DEFAULT 'all',                   -- 🆕 Includes 'acne' option
    category VARCHAR(50) NOT NULL,
    skin_concerns TEXT[],                                -- 🆕 Can include 'acne' concern
    ingredients JSONB,
    usage_instructions TEXT,
    
    -- Media (matching mockApi)
    image_url VARCHAR(500),
    
    -- SEO & Marketing
    meta_title VARCHAR(255),
    meta_description TEXT,
    status product_status DEFAULT 'active',
    is_featured BOOLEAN DEFAULT false,
    
    -- Timestamps (matching mockApi)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW(),
    published_at TIMESTAMP
);

-- Product-Category relationship (many-to-many)
CREATE TABLE product_categories (
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);

-- Additional product images
CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 3. ORDERS & TRANSACTIONS DOMAIN
-- =============================================

-- Main orders table (matching mockOrders structure)
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    -- Customer info (matching mockOrders)
    customer_name VARCHAR(255),
    customer_email VARCHAR(255) NOT NULL,
    
    -- Order totals (matching mockOrders)
    subtotal DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    shipping_amount DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    
    -- Status (matching mockOrders)
    status order_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    fulfillment_status fulfillment_status DEFAULT 'unfulfilled',
    
    -- Addresses (stored as JSONB for flexibility)
    shipping_address JSONB,
    billing_address JSONB,
    
    -- Additional fields
    notes TEXT,
    tracking_number VARCHAR(100),
    
    -- Timestamps (matching mockOrders)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW(),
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP
);

-- Order items (matching mockOrders.items structure)
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE RESTRICT,
    
    -- Product snapshot (matching mockOrders items)
    product_name VARCHAR(255) NOT NULL,
    product_sku VARCHAR(100),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Shopping cart (temporary storage)
CREATE TABLE shopping_cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1 CHECK (quantity > 0),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- =============================================
-- 4. REVIEWS DOMAIN
-- =============================================

-- Product reviews (matching mockReviews structure)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    -- Review content (matching mockReviews)
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    
    -- Customer info (matching mockReviews)
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    
    -- Status & verification
    status review_status DEFAULT 'pending',
    is_verified_purchase BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    
    -- Timestamps (matching mockReviews)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 5. COUPONS DOMAIN
-- =============================================

-- Coupons/discount codes (matching mockCoupons structure)
CREATE TABLE coupons (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    
    -- Discount details (matching mockCoupons)
    type coupon_type NOT NULL,
    value DECIMAL(10,2) NOT NULL,
    max_discount DECIMAL(10,2),
    
    -- Usage limits (matching mockCoupons)
    usage_limit INTEGER,
    used_count INTEGER DEFAULT 0,
    usage_limit_per_user INTEGER DEFAULT 1,
    
    -- Conditions (matching mockCoupons)
    min_order_value DECIMAL(10,2),
    applicable_products INTEGER[],
    applicable_categories TEXT[],
    
    -- Status (matching mockCoupons)
    status coupon_status DEFAULT 'active',
    
    -- Special flags (matching mockCoupons)
    is_first_time_only BOOLEAN DEFAULT false,
    
    -- Validity (matching mockCoupons)
    start_date DATE,
    end_date DATE,
    
    -- Timestamps (matching mockCoupons)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Coupon usage tracking
CREATE TABLE coupon_usage (
    id SERIAL PRIMARY KEY,
    coupon_id INTEGER REFERENCES coupons(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    used_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 6. WISHLIST DOMAIN
-- =============================================

-- User wishlists
CREATE TABLE wishlists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);

-- =============================================
-- INDEXES FOR PERFORMANCE & ML QUERIES
-- =============================================

-- User indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_skin_type ON users(skin_type);                   -- 🎯 ML: Skin type analysis
CREATE INDEX idx_users_password_reset_token ON users(password_reset_token) WHERE password_reset_token IS NOT NULL;

-- Product indexes
CREATE INDEX idx_products_status ON products(status) WHERE status = 'active';
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_skin_type ON products(skin_type);            -- 🎯 ML: Product recommendations
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_created_at ON products(created_at);
CREATE INDEX idx_products_skin_concerns ON products USING GIN(skin_concerns); -- 🎯 ML: Concern-based matching

-- Order indexes (🎯 Critical for ML training)
CREATE INDEX idx_orders_user_id ON orders(user_id);                    -- 🎯 ML: User purchase history
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);              -- 🎯 ML: Temporal patterns
CREATE INDEX idx_orders_order_number ON orders(order_number);

-- Order items indexes (🎯 Critical for collaborative filtering)
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);    -- 🎯 ML: Product popularity
CREATE INDEX idx_order_items_user_product ON order_items(order_id, product_id); -- 🎯 ML: User-product matrix

-- Review indexes (🎯 Important for rating-based recommendations)
CREATE INDEX idx_reviews_product_id ON reviews(product_id);            -- 🎯 ML: Product ratings
CREATE INDEX idx_reviews_user_id ON reviews(user_id);                  -- 🎯 ML: User rating patterns
CREATE INDEX idx_reviews_status ON reviews(status) WHERE status = 'approved';
CREATE INDEX idx_reviews_rating ON reviews(rating);                    -- 🎯 ML: Rating distribution

-- Coupon indexes
CREATE INDEX idx_coupons_code ON coupons(code);
CREATE INDEX idx_coupons_status ON coupons(status) WHERE status = 'active';
CREATE INDEX idx_coupons_dates ON coupons(start_date, end_date);

-- Shopping cart indexes
CREATE INDEX idx_shopping_cart_user_id ON shopping_cart(user_id);
CREATE INDEX idx_shopping_cart_product_id ON shopping_cart(product_id);

-- Wishlist indexes (🎯 Useful for preference learning)
CREATE INDEX idx_wishlists_user_id ON wishlists(user_id);              -- 🎯 ML: User preferences
CREATE INDEX idx_wishlists_product_id ON wishlists(product_id);        -- 🎯 ML: Product wishlist frequency

-- =============================================
-- CONSTRAINTS & VALIDATIONS
-- =============================================

-- Email format validation
ALTER TABLE users ADD CONSTRAINT valid_email 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');

-- Price validations
ALTER TABLE products ADD CONSTRAINT positive_price CHECK (price > 0);
ALTER TABLE products ADD CONSTRAINT valid_compare_price 
CHECK (compare_at_price IS NULL OR compare_at_price >= price);

-- Order total calculations
ALTER TABLE orders ADD CONSTRAINT valid_total 
CHECK (total = subtotal + tax_amount + shipping_amount - discount_amount);

-- Coupon value validations
ALTER TABLE coupons ADD CONSTRAINT valid_coupon_value 
CHECK (
    (type = 'percentage' AND value >= 0 AND value <= 100) OR
    (type IN ('fixed', 'free_shipping') AND value >= 0)
);

-- Date validations
ALTER TABLE coupons ADD CONSTRAINT valid_coupon_dates 
CHECK (start_date IS NULL OR end_date IS NULL OR start_date <= end_date);

-- 🎯 ML-SPECIFIC VIEWS FOR TRAINING DATA
-- =============================================

-- User purchase behavior view (🎯 For collaborative filtering)
CREATE VIEW user_purchase_matrix AS
SELECT 
    u.id as user_id,
    u.skin_type,
    u.date_of_birth,
    oi.product_id,
    p.category,
    p.skin_type as product_skin_type,
    p.skin_concerns,
    COUNT(oi.id) as purchase_count,
    AVG(oi.unit_price) as avg_price,
    MAX(o.created_at) as last_purchase_date
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id  
JOIN products p ON oi.product_id = p.id
WHERE o.status IN ('delivered', 'confirmed')
GROUP BY u.id, u.skin_type, u.date_of_birth, oi.product_id, p.category, p.skin_type, p.skin_concerns;

-- Product rating summary view (🎯 For content-based recommendations)
CREATE VIEW product_rating_summary AS
SELECT 
    p.id as product_id,
    p.category,
    p.skin_type,
    p.skin_concerns,
    p.price,
    COUNT(r.id) as review_count,
    AVG(r.rating) as avg_rating,
    COUNT(DISTINCT r.user_id) as unique_reviewers
FROM products p
LEFT JOIN reviews r ON p.id = r.product_id AND r.status = 'approved'
WHERE p.status = 'active'
GROUP BY p.id, p.category, p.skin_type, p.skin_concerns, p.price;
```

## 🍃 MongoDB Collections Schema (🎯 ML-Optimized)

### 1. User Behavior Analytics (🎯 Primary ML Data Source)
```javascript
// user_analytics - 🎯 Core ML training data
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  session_id: String,
  skin_profile: {
    skin_type: String, // 'oily', 'dry', 'combination', 'sensitive', 'normal', 'acne', 'all'
    concerns: [String], // ['acne', 'aging', 'dark_spots', 'hydration']
    age_range: String,  // '18-25', '26-35', '36-45', '45+'
    skin_goals: [String] // ['clear_skin', 'anti_aging', 'hydration']
  },
  events: [
    {
      event_type: String, // 'page_view', 'product_view', 'cart_add', 'purchase', 'wishlist_add', 'search'
      event_data: {
        product_id: Integer,
        category: String,
        page_url: String,
        search_query: String,
        skin_type_filter: String,
        price_range: {min: Number, max: Number},
        duration_seconds: Number,
        timestamp: Date,
        metadata: Object
      }
    }
  ],
  device_info: {
    user_agent: String,
    ip_address: String,
    device_type: String, // 'mobile', 'desktop', 'tablet'
    browser: String,
    os: String,
    location: {
      country: String,
      city: String,
      coordinates: [Number] // [longitude, latitude]
    }
  },
  created_at: Date,
  updated_at: Date
}

// 2. ML Recommendations Cache (🎯 Pre-computed ML results)
// product_recommendations
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  recommendation_type: String, // 'collaborative', 'content_based', 'skin_based', 'hybrid'
  recommended_products: [
    {
      product_id: Integer, // Links to PostgreSQL products.id
      score: Number, // 0.0 - 1.0 confidence score
      reason: String, // "Users with acne skin type also bought", "Similar to your previous purchases"
      algorithm_used: String, // 'collaborative_filtering', 'content_based', 'skin_analysis'
      generated_at: Date
    }
  ],
  user_profile: {
    skin_type: String, // Including 'acne' option
    concerns: [String],
    age_range: String,
    preferred_brands: [String],
    budget_range: {
      min: Number,
      max: Number
    },
    purchase_history_summary: {
      total_orders: Number,
      avg_order_value: Number,
      favorite_categories: [String],
      last_purchase_date: Date
    }
  },
  model_version: String, // Track which ML model version generated this
  created_at: Date,
  expires_at: Date // TTL for cache invalidation
}

// 3. Product Similarity Matrix (🎯 Content-based recommendations)
// product_similarities  
{
  _id: ObjectId,
  product_id: Integer, // Source product
  similar_products: [
    {
      product_id: Integer,
      similarity_score: Number, // 0.0 - 1.0
      similarity_factors: {
        category_match: Number,
        skin_type_match: Number, 
        concern_overlap: Number,
        ingredient_similarity: Number,
        price_similarity: Number
      }
    }
  ],
  computed_at: Date,
  algorithm_version: String
}

// 4. User Purchase Patterns (🎯 Collaborative filtering data)
// user_purchase_patterns
{
  _id: ObjectId,
  user_id: Integer,
  skin_type: String, // Including 'acne'
  purchase_vector: {
    // Product categories purchased with frequency
    cleanser: Number,
    moisturizer: Number,  
    serum: Number,
    toner: Number,
    sunscreen: Number,
    treatment: Number // For acne treatments
  },
  concern_preferences: {
    acne: Number,        // 🆕 Acne concern weight
    aging: Number,
    hydration: Number,
    brightening: Number,
    sensitivity: Number
  },
  behavioral_features: {
    avg_order_value: Number,
    purchase_frequency_days: Number,
    brand_loyalty_score: Number,
    price_sensitivity: Number,
    seasonal_patterns: Object
  },
  last_updated: Date
}

// 5. Search Analytics (🎯 Query understanding & recommendation improvement)
// search_analytics
{
  _id: ObjectId,
  user_id: Integer, // Optional, null for guest users
  search_query: String,
  normalized_query: String, // Cleaned/stemmed version
  intent_classification: {
    category: String, // 'product_search', 'ingredient_search', 'concern_search'
    confidence: Number,
    extracted_entities: {
      skin_type: String,
      concerns: [String], 
      ingredients: [String],
      brands: [String],
      price_range: Object
    }
  },
  filters_applied: {
    category: String,
    skin_type: String, // Including 'acne'
    price_range: {min: Number, max: Number},
    brands: [String],
    concerns: [String]
  },
  results_count: Number,
  clicked_products: [
    {
      product_id: Integer,
      position: Number, // Position in search results
      clicked_at: Date
    }
  ],
  conversion_data: {
    added_to_cart: [Integer], // Product IDs
    purchased: [Integer]      // Product IDs  
  },
  session_id: String,
  timestamp: Date,
  device_info: Object
}

// 6. ML Model Performance Metrics (🎯 Model evaluation)
// model_performance
{
  _id: ObjectId,
  model_name: String, // 'collaborative_filter_v1', 'content_based_v2'
  model_version: String,
  evaluation_date: Date,
  metrics: {
    precision_at_k: {
      k5: Number,
      k10: Number,
      k20: Number
    },
    recall_at_k: {
      k5: Number, 
      k10: Number,
      k20: Number
    },
    ndcg_at_k: {
      k5: Number,
      k10: Number,
      k20: Number
    },
    auc_score: Number,
    coverage: Number,
    diversity: Number
  },
  test_data_stats: {
    total_users: Number,
    total_products: Number,
    total_interactions: Number,
    skin_type_distribution: {
      oily: Number,
      dry: Number,
      combination: Number, 
      sensitive: Number,
      normal: Number,
      acne: Number,       // 🆕 Acne skin type metrics
      all: Number
    }
  },
  training_params: Object,
  created_at: Date
}

// 7. Real-time Recommendation Events (🎯 Online learning feedback)
// recommendation_feedback
{
  _id: ObjectId,
  user_id: Integer,
  recommendation_id: ObjectId, // Links to product_recommendations
  product_id: Integer,
  interaction_type: String, // 'view', 'click', 'cart_add', 'purchase', 'ignore'
  feedback_score: Number, // Implicit feedback score
  context: {
    recommendation_position: Number,
    page_type: String, // 'homepage', 'product_page', 'search_results'
    session_id: String
  },
  timestamp: Date
}

// 8. Skin Analysis Results (🎯 Computer vision & skin recommendations)
// skin_analysis_results
{
  _id: ObjectId,
  user_id: Integer,
  analysis_id: String,
  uploaded_image_url: String,
  analysis_results: {
    detected_skin_type: String, // Including 'acne'
    confidence_score: Number,
    detected_concerns: [
      {
        concern: String, // 'acne', 'dark_spots', 'wrinkles', 'dryness'
        severity: String, // 'mild', 'moderate', 'severe'
        confidence: Number,
        affected_areas: [String] // ['forehead', 'cheeks', 'chin']
      }
    ],
    skin_tone: String,
    texture_analysis: Object,
    recommended_ingredients: [String],
    products_to_avoid: [String]
  },
  recommended_products: [
    {
      product_id: Integer,
      reason: String,
      priority: Number // 1 = highest priority
    }
  ],
  analysis_version: String,
  created_at: Date
}
```

## 🔧 Updated Go Models with Profile Pictures

```go
// internal/models/user.go (🆕 Updated with profile_picture)
type User struct {
    ID                     uint       `json:"id" gorm:"primaryKey"`
    Email                  string     `json:"email" gorm:"unique;not null"`
    Password               string     `json:"-" gorm:"not null"`
    FirstName              string     `json:"first_name"`
    LastName               string     `json:"last_name"`
    Phone                  string     `json:"phone"`
    DateOfBirth            *time.Time `json:"date_of_birth" gorm:"type:date"`
    Gender                 string     `json:"gender"`
    SkinType               string     `json:"skin_type" gorm:"type:skin_type;default:'normal'"` // 🆕 Supports 'acne'
    Language               string     `json:"language" gorm:"type:user_language;default:'en'"`
    Role                   string     `json:"role" gorm:"type:user_role;default:'customer'"`
    
    // 🆕 Profile Picture Field
    ProfilePicture         string     `json:"profile_picture"` // URL to uploaded image
    
    IsActive               bool       `json:"is_active" gorm:"default:true"`
    EmailVerified          bool       `json:"email_verified" gorm:"default:false"`
    EmailVerificationToken string     `json:"-"`
    EmailVerifiedAt        *time.Time `json:"email_verified_at"`
    PasswordResetToken     string     `json:"-"`
    PasswordResetExpires   *time.Time `json:"-"`
    TotalOrders            int        `json:"total_orders" gorm:"default:0"`
    TotalSpent             float64    `json:"total_spent" gorm:"type:decimal(10,2);default:0"`
    AvgRating              float64    `json:"avg_rating" gorm:"type:decimal(3,2);default:0"`
    CreatedAt              time.Time  `json:"created_at"`
    UpdatedAt              time.Time  `json:"updated_at"`
    
    // Relationships
    Addresses    []UserAddress    `json:"addresses,omitempty" gorm:"foreignKey:UserID"`
    Orders       []Order          `json:"orders,omitempty" gorm:"foreignKey:UserID"`
    Reviews      []Review         `json:"reviews,omitempty" gorm:"foreignKey:UserID"`
    CartItems    []ShoppingCart   `json:"cart_items,omitempty" gorm:"foreignKey:UserID"`
    Wishlists    []Wishlist       `json:"wishlists,omitempty" gorm:"foreignKey:UserID"`
}

// DTO for profile picture upload
type ProfilePictureUpload struct {
    UserID uint   `json:"user_id" validate:"required"`
    File   []byte `json:"file" validate:"required"`
    FileExtension string `json:"file_extension" validate:"required,oneof=jpg jpeg png webp"`
}

type ProfilePictureResponse struct {
    ProfilePicture string `json:"profile_picture"`
    Message        string `json:"message"`
}
```

## 🔄 Updated API Endpoints with Profile Pictures

### Customer API Endpoints (🆕 Added profile picture endpoints)
```go
// Profile Management
GET    /api/v1/auth/me
PUT    /api/v1/auth/profile
POST   /api/v1/auth/profile/picture          // 🆕 Upload profile picture
DELETE /api/v1/auth/profile/picture          // 🆕 Remove profile picture
GET    /api/v1/auth/profile/picture          // 🆕 Get profile picture URL

// File Upload
POST   /api/v1/upload/profile-picture        // 🆕 Generic profile picture upload
POST   /api/v1/upload/product-image          // Admin: Product image upload
```

### Admin API Endpoints (🆕 Profile pictures for admins too)
```go
// Admin Profile Management  
GET    /api/v1/admin/profile
PUT    /api/v1/admin/profile
POST   /api/v1/admin/profile/picture         // 🆕 Admin profile picture
DELETE /api/v1/admin/profile/picture         // 🆕 Remove admin profile picture

// Customer Management (🆕 View customer profile pictures)
GET    /api/v1/admin/customers/:id/profile-picture
```

## 🐍 Updated Python ML Service (🎯 Dual Database Strategy)

### ML Service Database Usage Strategy
```python
# services/ml-service/app/database/dual_connector.py
class DualDatabaseConnector:
    """
    🎯 ML Service uses BOTH PostgreSQL and MongoDB strategically:
    
    PostgreSQL (Source of Truth):
    - User profiles, orders, products, reviews
    - Real-time queries for fresh data
    - Training data extraction
    
    MongoDB (ML Optimized):
    - Pre-computed recommendations
    - User behavior analytics  
    - Model results caching
    - Training data preprocessing
    """
    
    def __init__(self):
        self.postgres = PostgreSQLConnector()  # 🔵 Source data
        self.mongodb = MongoDBConnector()      # 🟢 ML results & analytics
    
    async def get_user_training_data(self, user_id: int):
        """🎯 Get training data from PostgreSQL"""
        return await self.postgres.get_user_purchase_history(user_id)
    
    async def cache_recommendations(self, user_id: int, recommendations: list):
        """🎯 Cache results in MongoDB"""
        return await self.mongodb.store_recommendations(user_id, recommendations)
    
    async def get_cached_recommendations(self, user_id: int):
        """🎯 Get cached results from MongoDB"""
        return await self.mongodb.get_recommendations(user_id)

# ML Training Pipeline (🎯 PostgreSQL → MongoDB)
class MLTrainingPipeline:
    async def extract_training_data(self):
        """Extract from PostgreSQL for training"""
        # Get user-product interactions
        users = await self.postgres.query("""
            SELECT u.id, u.skin_type, u.date_of_birth,
                   oi.product_id, oi.quantity, o.created_at
            FROM users u 
            JOIN orders o ON u.id = o.user_id
            JOIN order_items oi ON o.id = oi.order_id
            WHERE u.skin_type IN ('oily', 'dry', 'combination', 'sensitive', 'normal', 'acne')
            AND o.status = 'delivered'
        """)
        
        # Store processed training data in MongoDB
        await self.mongodb.store_training_data(users)
        
    async def train_skin_specific_model(self):
        """🆕 Train model specifically for acne skin type"""
        acne_users_data = await self.postgres.query("""
            SELECT * FROM user_purchase_matrix 
            WHERE skin_type = 'acne'
        """)
        
        # Train and cache in MongoDB
        model = self.train_collaborative_filter(acne_users_data)
        await self.mongodb.store_model('acne_recommendations_v1', model)
```

### Updated ML API Endpoints (🎯 Skin Type Specific)
```python
# Recommendation endpoints (🆕 Acne-specific)
GET    /ml/v1/recommendations/user/:user_id
POST   /ml/v1/recommendations/skin-type/acne      # 🆕 Acne-specific recommendations
POST   /ml/v1/recommendations/skin-analysis       # 🆕 Upload photo for skin analysis
GET    /ml/v1/recommendations/trending/acne       # 🆕 Trending acne products

# Analytics endpoints (🎯 Both databases)
POST   /ml/v1/analytics/track-event              # Stores in MongoDB
GET    /ml/v1/analytics/user/:user_id/skin-journey # PostgreSQL + MongoDB
GET    /ml/v1/analytics/acne-products-performance  # 🆕 Acne product analytics

# Skin analysis (🆕 Enhanced for acne detection)
POST   /ml/v1/skin-analysis/detect-acne          # 🆕 Acne-specific analysis
GET    /ml/v1/skin-analysis/acne-severity/:user_id # 🆕 Track acne progress
POST   /ml/v1/skin-analysis/recommend-routine     # 🆕 Complete skincare routine
```

## 🎯 ML Database Usage Summary

### 🔵 **PostgreSQL (Source Database for ML)**
```sql
-- 🎯 ML Training Queries Run on PostgreSQL:

-- 1. User-Product Interaction Matrix (Collaborative Filtering)
SELECT u.id, u.skin_type, oi.product_id, COUNT(*) as purchase_count
FROM users u 
JOIN orders o ON u.id = o.user_id  
JOIN order_items oi ON o.id = oi.order_id
WHERE u.skin_type = 'acne' AND o.status = 'delivered'
GROUP BY u.id, u.skin_type, oi.product_id;

-- 2. Product Features for Content-Based Filtering  
SELECT id, category, skin_type, skin_concerns, price, avg_rating
FROM product_rating_summary 
WHERE skin_type IN ('acne', 'all');

-- 3. User Skin Journey Analysis
SELECT u.id, u.skin_type, u.date_of_birth,
       MIN(o.created_at) as first_order,
       MAX(o.created_at) as last_order,
       COUNT(DISTINCT o.id) as total_orders
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE u.skin_type = 'acne'
GROUP BY u.id, u.skin_type, u.date_of_birth;
```

### 🟢 **MongoDB (ML Results & Analytics)**
```javascript
// 🎯 ML Results Stored in MongoDB:

// 1. Store trained model predictions
db.product_recommendations.insertOne({
  user_id: 123,
  skin_type: "acne", 
  recommended_products: [
    {product_id: 456, score: 0.89, reason: "Other acne users loved this"},
    {product_id: 789, score: 0.82, reason: "Matches your skin concerns"}
  ],
  model_version: "acne_collaborative_v1"
});

// 2. Cache user behavior for real-time personalization
db.user_analytics.insertOne({
  user_id: 123,
  skin_profile: {skin_type: "acne", concerns: ["breakouts", "scarring"]},
  recent_events: [
    {event_type: "product_view", product_id: 456, timestamp: new Date()},
    {event_type: "cart_add", product_id: 789, timestamp: new Date()}
  ]
});

// 3. Store skin analysis results
db.skin_analysis_results.insertOne({
  user_id: 123,
  detected_skin_type: "acne",
  confidence: 0.94,
  detected_concerns: [
    {concern: "inflammatory_acne", severity: "moderate", confidence: 0.91},
    {concern: "post_acne_marks", severity: "mild", confidence: 0.76}
  ]
});
```

## 🏗️ **Final Architecture Summary**

### **Database Roles:**
- **🔵 PostgreSQL**: Business logic, transactions, ML training data source
- **🟢 MongoDB**: ML results, analytics, behavior tracking, model storage  
- **🔴 Redis**: Sessions, caching, real-time cart data

### **ML Pipeline Flow:**
1. **Extract** training data from PostgreSQL (users, orders, products, reviews)
2. **Transform** data and train ML models (Python service)
3. **Load** model results into MongoDB (recommendations, analytics)
4. **Serve** recommendations from MongoDB cache (fast API responses)
5. **Update** PostgreSQL with user actions (purchases, ratings)
6. **Retrain** models periodically with fresh PostgreSQL data

### **Key Updates Made:**
✅ **Added 'acne' to skin_type enum** - Now supports 6 skin types  
✅ **Added profile_picture field** - Both users and admins can upload photos  
✅ **Enhanced MongoDB schema** - ML-optimized collections with acne-specific support  
✅ **Clarified database roles** - PostgreSQL for source data, MongoDB for ML results  
✅ **Added file upload system** - Complete image handling infrastructure  
✅ **ML-specific indexes** - Optimized for training queries and recommendations  

Your backend is now **fully equipped** for a skincare e-commerce platform with advanced ML capabilities and proper support for acne skin type and profile pictures! 🚀