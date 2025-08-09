# 🏗️ Complete Skincare E-commerce Backend Structure & Database Design

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
│   │   │   │   │   ├── products.go
│   │   │   │   │   ├── categories.go
│   │   │   │   │   ├── orders.go
│   │   │   │   │   ├── customers.go
│   │   │   │   │   ├── coupons.go
│   │   │   │   │   ├── reviews.go
│   │   │   │   │   ├── cart.go
│   │   │   │   │   ├── wishlist.go
│   │   │   │   │   └── admin.go
│   │   │   │   ├── 📂 middleware/
│   │   │   │   │   ├── auth.go
│   │   │   │   │   ├── admin.go
│   │   │   │   │   ├── cors.go
│   │   │   │   │   ├── rate_limit.go
│   │   │   │   │   ├── validation.go
│   │   │   │   │   └── logging.go
│   │   │   │   └── 📂 routes/
│   │   │   │       ├── api.go
│   │   │   │       ├── admin.go
│   │   │   │       └── health.go
│   │   │   ├── 📂 services/
│   │   │   │   ├── auth_service.go
│   │   │   │   ├── email_service.go
│   │   │   │   ├── password_reset_service.go
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
│   │   │   │       └── analytics_repo.go
│   │   │   ├── 📂 models/
│   │   │   │   ├── user.go
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
│   │   │       └── pagination.go
│   │   ├── 📂 migrations/
│   │   │   ├── 001_create_enums.sql
│   │   │   ├── 002_create_users.sql
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
│   └── 📂 ml-service/ (Python)
│       ├── 📂 app/
│       │   ├── 📂 api/
│       │   │   ├── __init__.py
│       │   │   ├── recommendations.py
│       │   │   ├── analytics.py
│       │   │   └── skin_analysis.py
│       │   ├── 📂 models/
│       │   │   ├── __init__.py
│       │   │   ├── recommendation_model.py
│       │   │   ├── skin_analysis_model.py
│       │   │   └── collaborative_filtering.py
│       │   ├── 📂 services/
│       │   │   ├── __init__.py
│       │   │   ├── ml_service.py
│       │   │   ├── recommendation_service.py
│       │   │   └── data_processor.py
│       │   ├── 📂 database/
│       │   │   ├── __init__.py
│       │   │   ├── mongodb.py
│       │   │   └── postgres_connector.py
│       │   ├── 📂 utils/
│       │   │   ├── __init__.py
│       │   │   ├── data_validation.py
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
│   │   ├── schema.sql (your complete schema)
│   │   └── seed_data.sql
│   ├── 📂 mongodb/
│   │   ├── init.js
│   │   └── collections.js
│   └── 📂 redis/
│       └── redis.conf
├── 📂 scripts/
│   ├── setup.sh
│   ├── migrate.sh
│   ├── seed.sh
│   └── deploy.sh
├── 📂 docs/
│   ├── API_DOCUMENTATION.md
│   ├── DATABASE_SCHEMA.md
│   └── DEPLOYMENT.md
├── docker-compose.yml
├── docker-compose.dev.yml
├── docker-compose.prod.yml
├── .gitignore
├── Makefile
└── README.md
```

## 🗄️ Complete Database Schema (PostgreSQL)

### Your Complete Production-Ready Schema

```sql
-- =============================================
-- SKINCARE E-COMMERCE DATABASE SCHEMA
-- =============================================

-- Create ENUM types first
CREATE TYPE user_role AS ENUM ('customer', 'admin', 'moderator');
CREATE TYPE user_language AS ENUM ('en', 'kh');
CREATE TYPE skin_type AS ENUM ('oily', 'dry', 'combination', 'sensitive', 'normal', 'all');
CREATE TYPE product_status AS ENUM ('draft', 'active', 'archived');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'partially_paid', 'refunded', 'partially_refunded', 'failed');
CREATE TYPE fulfillment_status AS ENUM ('unfulfilled', 'partial', 'fulfilled', 'shipped', 'delivered');
CREATE TYPE review_status AS ENUM ('pending', 'approved', 'rejected');
CREATE TYPE coupon_type AS ENUM ('percentage', 'fixed', 'free_shipping');
CREATE TYPE coupon_status AS ENUM ('active', 'inactive', 'expired');

-- =============================================
-- 1. USERS & AUTHENTICATION DOMAIN
-- =============================================

-- Main users table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10) CHECK (gender IN ('male', 'female', 'other')),
    skin_type skin_type DEFAULT 'normal',
    language user_language DEFAULT 'en',
    role user_role DEFAULT 'customer',
    
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

-- User addresses
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

-- Main products table (matches mockApi perfectly)
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
    
    -- Skincare specific (matching mockApi)
    skin_type skin_type DEFAULT 'all',
    category VARCHAR(50) NOT NULL,
    skin_concerns TEXT[],
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
-- INDEXES FOR PERFORMANCE
-- =============================================

-- User indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_password_reset_token ON users(password_reset_token) WHERE password_reset_token IS NOT NULL;

-- Product indexes
CREATE INDEX idx_products_status ON products(status) WHERE status = 'active';
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_skin_type ON products(skin_type);
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_created_at ON products(created_at);

-- Order indexes
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_order_number ON orders(order_number);

-- Order items indexes
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);

-- Review indexes
CREATE INDEX idx_reviews_product_id ON reviews(product_id);
CREATE INDEX idx_reviews_status ON reviews(status) WHERE status = 'approved';
CREATE INDEX idx_reviews_user_id ON reviews(user_id);

-- Coupon indexes
CREATE INDEX idx_coupons_code ON coupons(code);
CREATE INDEX idx_coupons_status ON coupons(status) WHERE status = 'active';
CREATE INDEX idx_coupons_dates ON coupons(start_date, end_date);

-- Shopping cart indexes
CREATE INDEX idx_shopping_cart_user_id ON shopping_cart(user_id);
CREATE INDEX idx_shopping_cart_product_id ON shopping_cart(product_id);

-- Wishlist indexes
CREATE INDEX idx_wishlists_user_id ON wishlists(user_id);
CREATE INDEX idx_wishlists_product_id ON wishlists(product_id);

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
```

## 🔧 Go Models Structure (Updated)

### Core Models Based on Your Schema

```go
// internal/models/user.go
type User struct {
    ID                     uint       `json:"id" gorm:"primaryKey"`
    Email                  string     `json:"email" gorm:"unique;not null"`
    Password               string     `json:"-" gorm:"not null"`
    FirstName              string     `json:"first_name"`
    LastName               string     `json:"last_name"`
    Phone                  string     `json:"phone"`
    DateOfBirth            *time.Time `json:"date_of_birth" gorm:"type:date"`
    Gender                 string     `json:"gender"`
    SkinType               string     `json:"skin_type" gorm:"type:skin_type;default:'normal'"`
    Language               string     `json:"language" gorm:"type:user_language;default:'en'"`
    Role                   string     `json:"role" gorm:"type:user_role;default:'customer'"`
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

// internal/models/product.go
type Product struct {
    ID                   uint       `json:"id" gorm:"primaryKey"`
    NameEn               string     `json:"name_en" gorm:"not null"`
    NameKh               string     `json:"name_kh"`
    Slug                 string     `json:"slug" gorm:"unique;not null"`
    DescriptionEn        string     `json:"description_en" gorm:"type:text"`
    DescriptionKh        string     `json:"description_kh" gorm:"type:text"`
    ShortDescription     string     `json:"short_description"`
    SKU                  string     `json:"sku" gorm:"unique;not null"`
    Barcode              string     `json:"barcode"`
    Price                float64    `json:"price" gorm:"type:decimal(10,2);not null"`
    CompareAtPrice       *float64   `json:"compare_at_price" gorm:"type:decimal(10,2)"`
    CostPrice            *float64   `json:"cost_price" gorm:"type:decimal(10,2)"`
    Stock                int        `json:"stock" gorm:"default:0"`
    TrackInventory       bool       `json:"track_inventory" gorm:"default:true"`
    AllowBackorders      bool       `json:"allow_backorders" gorm:"default:false"`
    Weight               *float64   `json:"weight" gorm:"type:decimal(8,2)"`
    Dimensions           string     `json:"dimensions" gorm:"type:jsonb"`
    SkinType             string     `json:"skin_type" gorm:"type:skin_type;default:'all'"`
    Category             string     `json:"category" gorm:"not null"`
    SkinConcerns         []string   `json:"skin_concerns" gorm:"type:text[]"`
    Ingredients          string     `json:"ingredients" gorm:"type:jsonb"`
    UsageInstructions    string     `json:"usage_instructions"`
    ImageURL             string     `json:"image_url"`
    MetaTitle            string     `json:"meta_title"`
    MetaDescription      string     `json:"meta_description"`
    Status               string     `json:"status" gorm:"type:product_status;default:'active'"`
    IsFeatured           bool       `json:"is_featured" gorm:"default:false"`
    CreatedAt            time.Time  `json:"created_at" gorm:"type:date"`
    UpdatedAt            time.Time  `json:"updated_at"`
    PublishedAt          *time.Time `json:"published_at"`
    
    // Relationships
    Images     []ProductImage    `json:"images,omitempty" gorm:"foreignKey:ProductID"`
    Categories []Category        `json:"categories,omitempty" gorm:"many2many:product_categories"`
    Reviews    []Review          `json:"reviews,omitempty" gorm:"foreignKey:ProductID"`
    OrderItems []OrderItem       `json:"order_items,omitempty" gorm:"foreignKey:ProductID"`
}

// internal/models/order.go
type Order struct {
    ID                uint       `json:"id" gorm:"primaryKey"`
    OrderNumber       string     `json:"order_number" gorm:"unique;not null"`
    UserID            *uint      `json:"user_id"`
    CustomerName      string     `json:"customer_name"`
    CustomerEmail     string     `json:"customer_email" gorm:"not null"`
    Subtotal          float64    `json:"subtotal" gorm:"type:decimal(10,2);not null"`
    TaxAmount         float64    `json:"tax_amount" gorm:"type:decimal(10,2);default:0"`
    ShippingAmount    float64    `json:"shipping_amount" gorm:"type:decimal(10,2);default:0"`
    DiscountAmount    float64    `json:"discount_amount" gorm:"type:decimal(10,2);default:0"`
    Total             float64    `json:"total" gorm:"type:decimal(10,2);not null"`
    Status            string     `json:"status" gorm:"type:order_status;default:'pending'"`
    PaymentStatus     string     `json:"payment_status" gorm:"type:payment_status;default:'pending'"`
    FulfillmentStatus string     `json:"fulfillment_status" gorm:"type:fulfillment_status;default:'unfulfilled'"`
    ShippingAddress   string     `json:"shipping_address" gorm:"type:jsonb"`
    BillingAddress    string     `json:"billing_address" gorm:"type:jsonb"`
    Notes             string     `json:"notes"`
    TrackingNumber    string     `json:"tracking_number"`
    CreatedAt         time.Time  `json:"created_at" gorm:"type:date"`
    UpdatedAt         time.Time  `json:"updated_at"`
    ShippedAt         *time.Time `json:"shipped_at"`
    DeliveredAt       *time.Time `json:"delivered_at"`
    
    // Relationships
    User       *User       `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Items      []OrderItem `json:"items,omitempty" gorm:"foreignKey:OrderID"`
}

// internal/models/order_item.go
type OrderItem struct {
    ID           uint      `json:"id" gorm:"primaryKey"`
    OrderID      uint      `json:"order_id" gorm:"not null"`
    ProductID    uint      `json:"product_id" gorm:"not null"`
    ProductName  string    `json:"product_name" gorm:"not null"`
    ProductSKU   string    `json:"product_sku"`
    Quantity     int       `json:"quantity" gorm:"not null"`
    UnitPrice    float64   `json:"unit_price" gorm:"type:decimal(10,2);not null"`
    TotalPrice   float64   `json:"total_price" gorm:"type:decimal(10,2);not null"`
    CreatedAt    time.Time `json:"created_at"`
    
    // Relationships
    Order   Order   `json:"order,omitempty" gorm:"foreignKey:OrderID"`
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
}

// internal/models/review.go
type Review struct {
    ID                  uint      `json:"id" gorm:"primaryKey"`
    ProductID           uint      `json:"product_id" gorm:"not null"`
    UserID              *uint     `json:"user_id"`
    Rating              int       `json:"rating" gorm:"not null;check:rating >= 1 AND rating <= 5"`
    Title               string    `json:"title"`
    Comment             string    `json:"comment"`
    CustomerName        string    `json:"customer_name"`
    CustomerEmail       string    `json:"customer_email"`
    Status              string    `json:"status" gorm:"type:review_status;default:'pending'"`
    IsVerifiedPurchase  bool      `json:"is_verified_purchase" gorm:"default:false"`
    HelpfulCount        int       `json:"helpful_count" gorm:"default:0"`
    CreatedAt           time.Time `json:"created_at" gorm:"type:date"`
    UpdatedAt           time.Time `json:"updated_at"`
    
    // Relationships
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
    User    *User   `json:"user,omitempty" gorm:"foreignKey:UserID"`
}

// internal/models/coupon.go
type Coupon struct {
    ID                   uint      `json:"id" gorm:"primaryKey"`
    Code                 string    `json:"code" gorm:"unique;not null"`
    Name                 string    `json:"name" gorm:"not null"`
    Description          string    `json:"description"`
    Type                 string    `json:"type" gorm:"type:coupon_type;not null"`
    Value                float64   `json:"value" gorm:"type:decimal(10,2);not null"`
    MaxDiscount          *float64  `json:"max_discount" gorm:"type:decimal(10,2)"`
    UsageLimit           *int      `json:"usage_limit"`
    UsedCount            int       `json:"used_count" gorm:"default:0"`
    UsageLimitPerUser    int       `json:"usage_limit_per_user" gorm:"default:1"`
    MinOrderValue        *float64  `json:"min_order_value" gorm:"type:decimal(10,2)"`
    ApplicableProducts   []int     `json:"applicable_products" gorm:"type:integer[]"`
    ApplicableCategories []string  `json:"applicable_categories" gorm:"type:text[]"`
    Status               string    `json:"status" gorm:"type:coupon_status;default:'active'"`
    IsFirstTimeOnly      bool      `json:"is_first_time_only" gorm:"default:false"`
    StartDate            *time.Time `json:"start_date" gorm:"type:date"`
    EndDate              *time.Time `json:"end_date" gorm:"type:date"`
    CreatedAt            time.Time `json:"created_at" gorm:"type:date"`
    UpdatedAt            time.Time `json:"updated_at"`
    
    // Relationships
    Usage []CouponUsage `json:"usage,omitempty" gorm:"foreignKey:CouponID"`
}

// internal/models/category.go
type Category struct {
    ID          uint      `json:"id" gorm:"primaryKey"`
    Name        string    `json:"name" gorm:"not null"`
    Slug        string    `json:"slug" gorm:"unique;not null"`
    Description string    `json:"description"`
    ParentID    *uint     `json:"parent_id"`
    ImageURL    string    `json:"image_url"`
    IsActive    bool      `json:"is_active" gorm:"default:true"`
    SortOrder   int       `json:"sort_order" gorm:"default:0"`
    CreatedAt   time.Time `json:"created_at"`
    UpdatedAt   time.Time `json:"updated_at"`
    
    // Relationships
    Parent     *Category  `json:"parent,omitempty" gorm:"foreignKey:ParentID"`
    Children   []Category `json:"children,omitempty" gorm:"foreignKey:ParentID"`
    Products   []Product  `json:"products,omitempty" gorm:"many2many:product_categories"`
}

// internal/models/cart.go
type ShoppingCart struct {
    ID        uint      `json:"id" gorm:"primaryKey"`
    UserID    uint      `json:"user_id" gorm:"not null"`
    ProductID uint      `json:"product_id" gorm:"not null"`
    Quantity  int       `json:"quantity" gorm:"not null;default:1"`
    CreatedAt time.Time `json:"created_at"`
    UpdatedAt time.Time `json:"updated_at"`
    
    // Relationships
    User    User    `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
}

// internal/models/wishlist.go
type Wishlist struct {
    ID        uint      `json:"id" gorm:"primaryKey"`
    UserID    uint      `json:"user_id" gorm:"not null"`
    ProductID uint      `json:"product_id" gorm:"not null"`
    CreatedAt time.Time `json:"created_at"`
    
    // Relationships
    User    User    `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
}

// internal/models/user_address.go
type UserAddress struct {
    ID           uint      `json:"id" gorm:"primaryKey"`
    UserID       uint      `json:"user_id" gorm:"not null"`
    Type         string    `json:"type" gorm:"default:'shipping'"`
    FirstName    string    `json:"first_name"`
    LastName     string    `json:"last_name"`
    Company      string    `json:"company"`
    AddressLine1 string    `json:"address_line1" gorm:"not null"`
    AddressLine2 string    `json:"address_line2"`
    City         string    `json:"city" gorm:"not null"`
    State        string    `json:"state"`
    PostalCode   string    `json:"postal_code" gorm:"not null"`
    Country      string    `json:"country" gorm:"not null"`
    Phone        string    `json:"phone"`
    IsDefault    bool      `json:"is_default" gorm:"default:false"`
    CreatedAt    time.Time `json:"created_at"`
    
    // Relationships
    User User `json:"user,omitempty" gorm:"foreignKey:UserID"`
}

// internal/models/product_image.go
type ProductImage struct {
    ID        uint      `json:"id" gorm:"primaryKey"`
    ProductID uint      `json:"product_id" gorm:"not null"`
    ImageURL  string    `json:"image_url" gorm:"not null"`
    AltText   string    `json:"alt_text"`
    SortOrder int       `json:"sort_order" gorm:"default:0"`
    IsPrimary bool      `json:"is_primary" gorm:"default:false"`
    CreatedAt time.Time `json:"created_at"`
    
    // Relationships
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
}

// internal/models/coupon_usage.go
type CouponUsage struct {
    ID             uint      `json:"id" gorm:"primaryKey"`
    CouponID       uint      `json:"coupon_id" gorm:"not null"`
    UserID         *uint     `json:"user_id"`
    OrderID        *uint     `json:"order_id"`
    DiscountAmount float64   `json:"discount_amount" gorm:"type:decimal(10,2);not null"`
    UsedAt         time.Time `json:"used_at"`
    
    // Relationships
    Coupon Coupon `json:"coupon,omitempty" gorm:"foreignKey:CouponID"`
    User   *User  `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Order  *Order `json:"order,omitempty" gorm:"foreignKey:OrderID"`
}

// internal/models/common.go
type PaginationRequest struct {
    Page     int    `json:"page" form:"page" validate:"min=1"`
    Limit    int    `json:"limit" form:"limit" validate:"min=1,max=100"`
    Sort     string `json:"sort" form:"sort"`
    Order    string `json:"order" form:"order" validate:"oneof=asc desc"`
    Search   string `json:"search" form:"search"`
    Category string `json:"category" form:"category"`
    Status   string `json:"status" form:"status"`
}

type PaginationResponse struct {
    Data         interface{} `json:"data"`
    CurrentPage  int         `json:"current_page"`
    PerPage      int         `json:"per_page"`
    TotalPages   int         `json:"total_pages"`
    TotalItems   int64       `json:"total_items"`
    HasNextPage  bool        `json:"has_next_page"`
    HasPrevPage  bool        `json:"has_prev_page"`
}

type APIResponse struct {
    Success bool        `json:"success"`
    Message string      `json:"message"`
    Data    interface{} `json:"data,omitempty"`
    Error   interface{} `json:"error,omitempty"`
}
```

## 🍃 MongoDB Collections Schema

### 1. User Analytics Collection
```javascript
// user_analytics
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  session_id: String,
  events: [
    {
      event_type: String, // 'page_view', 'product_view', 'cart_add', 'purchase'
      event_data: {
        product_id: Integer,
        category: String,
        page_url: String,
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

// product_recommendations
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  recommendation_type: String, // 'collaborative', 'content_based', 'popular', 'skin_based'
  recommended_products: [
    {
      product_id: Integer, // Links to PostgreSQL products.id
      score: Number,
      reason: String,
      generated_at: Date
    }
  ],
  skin_profile: {
    skin_type: String, // matches PostgreSQL skin_type enum
    concerns: [String],
    age_range: String,
    preferred_brands: [String],
    budget_range: {
      min: Number,
      max: Number
    }
  },
  created_at: Date,
  expires_at: Date
}

// search_analytics
{
  _id: ObjectId,
  user_id: Integer, // Optional, null for guest users
  search_query: String,
  filters_applied: {
    category: String,
    skin_type: String,
    price_range: {
      min: Number,
      max: Number
    },
    brands: [String]
  },
  results_count: Number,
  clicked_products: [Integer], // Product IDs that were clicked
  session_id: String,
  timestamp: Date,
  device_info: Object
}

// performance_metrics
{
  _id: ObjectId,
  date: Date,
  metrics: {
    total_users: Number,
    active_users: Number,
    new_registrations: Number,
    total_orders: Number,
    revenue: Number,
    avg_order_value: Number,
    popular_products: [
      {
        product_id: Integer,
        views: Number,
        purchases: Number
      }
    ],
    popular_categories: [
      {
        category: String,
        views: Number,
        purchases: Number
      }
    ]
  },
  created_at: Date
}
```

## 🚀 Redis Schema Design

### 1. User Sessions
```
Key: session:{session_id}
Value: {
  user_id: integer,
  email: string,
  role: string,
  last_activity: timestamp
}
TTL: 24 hours
```

### 2. Shopping Cart Cache
```
Key: cart:{user_id}
Value: [
  {
    product_id: integer,
    quantity: integer,
    added_at: timestamp,
    product_data: {
      name: string,
      price: number,
      image_url: string
    }
  }
]
TTL: 7 days
```

### 3. API Response Cache
```
Key: api:products:page:{page}:limit:{limit}:category:{category}
Value: JSON response
TTL: 15 minutes

Key: api:product:{product_id}
Value: JSON response
TTL: 30 minutes

Key: api:categories
Value: JSON response
TTL: 60 minutes
```

### 4. Rate Limiting
```
Key: rate_limit:api:{ip_address}
Value: request_count
TTL: 60 seconds

Key: rate_limit:login:{ip_address}
Value: attempt_count
TTL: 900 seconds (15 minutes)
```

## 🔄 Complete API Endpoint Structure

### Customer API Endpoints
```go
// Authentication & User Management
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
GET    /api/v1/auth/me
PUT    /api/v1/auth/profile
POST   /api/v1/auth/verify-email
POST   /api/v1/auth/resend-verification
POST   /api/v1/auth/forgot-password
POST   /api/v1/auth/reset-password
POST   /api/v1/auth/change-password

// User Addresses
GET    /api/v1/user/addresses
POST   /api/v1/user/addresses
PUT    /api/v1/user/addresses/:id
DELETE /api/v1/user/addresses/:id
POST   /api/v1/user/addresses/:id/default

// Products & Categories
GET    /api/v1/products
GET    /api/v1/products/search
GET    /api/v1/products/featured
GET    /api/v1/products/by-skin-type/:skin_type
GET    /api/v1/products/:id
GET    /api/v1/products/:id/reviews
GET    /api/v1/products/:id/related
GET    /api/v1/categories
GET    /api/v1/categories/:slug/products

// Shopping Cart
GET    /api/v1/cart
POST   /api/v1/cart/add
PUT    /api/v1/cart/update/:product_id
DELETE /api/v1/cart/remove/:product_id
DELETE /api/v1/cart/clear
POST   /api/v1/cart/apply-coupon
DELETE /api/v1/cart/remove-coupon

// Wishlist
GET    /api/v1/wishlist
POST   /api/v1/wishlist/add/:product_id
DELETE /api/v1/wishlist/remove/:product_id
DELETE /api/v1/wishlist/clear

// Orders
POST   /api/v1/orders
GET    /api/v1/orders
GET    /api/v1/orders/:id
POST   /api/v1/orders/:id/cancel

// Reviews
POST   /api/v1/reviews
PUT    /api/v1/reviews/:id
DELETE /api/v1/reviews/:id
GET    /api/v1/user/reviews

// Coupons
POST   /api/v1/coupons/validate
GET    /api/v1/coupons/available

// Recommendations (from ML service)
GET    /api/v1/recommendations/products
GET    /api/v1/recommendations/skin-analysis
```

### Admin API Endpoints
```go
// Admin Authentication
POST   /api/v1/admin/login
POST   /api/v1/admin/logout
GET    /api/v1/admin/me

// Dashboard & Analytics
GET    /api/v1/admin/dashboard/stats
GET    /api/v1/admin/dashboard/recent-orders
GET    /api/v1/admin/dashboard/top-products
GET    /api/v1/admin/analytics/sales
GET    /api/v1/admin/analytics/customers
GET    /api/v1/admin/analytics/products

// Product Management
GET    /api/v1/admin/products
POST   /api/v1/admin/products
GET    /api/v1/admin/products/:id
PUT    /api/v1/admin/products/:id
DELETE /api/v1/admin/products/:id
POST   /api/v1/admin/products/bulk-update
POST   /api/v1/admin/products/bulk-delete
POST   /api/v1/admin/products/:id/images
DELETE /api/v1/admin/products/:id/images/:image_id

// Category Management
GET    /api/v1/admin/categories
POST   /api/v1/admin/categories
GET    /api/v1/admin/categories/:id
PUT    /api/v1/admin/categories/:id
DELETE /api/v1/admin/categories/:id
POST   /api/v1/admin/categories/reorder

// Order Management
GET    /api/v1/admin/orders
GET    /api/v1/admin/orders/:id
PUT    /api/v1/admin/orders/:id/status
PUT    /api/v1/admin/orders/:id/payment-status
PUT    /api/v1/admin/orders/:id/fulfillment-status
POST   /api/v1/admin/orders/bulk-update
POST   /api/v1/admin/orders/:id/refund
POST   /api/v1/admin/orders/:id/ship

// Customer Management
GET    /api/v1/admin/customers
GET    /api/v1/admin/customers/:id
PUT    /api/v1/admin/customers/:id
DELETE /api/v1/admin/customers/:id
POST   /api/v1/admin/customers/:id/suspend
POST   /api/v1/admin/customers/:id/activate
GET    /api/v1/admin/customers/:id/orders
GET    /api/v1/admin/customers/:id/reviews

// Review Management
GET    /api/v1/admin/reviews
GET    /api/v1/admin/reviews/:id
PUT    /api/v1/admin/reviews/:id/status
DELETE /api/v1/admin/reviews/:id
POST   /api/v1/admin/reviews/bulk-update
POST   /api/v1/admin/reviews/bulk-approve
POST   /api/v1/admin/reviews/bulk-reject

// Coupon Management
GET    /api/v1/admin/coupons
POST   /api/v1/admin/coupons
GET    /api/v1/admin/coupons/:id
PUT    /api/v1/admin/coupons/:id
DELETE /api/v1/admin/coupons/:id
POST   /api/v1/admin/coupons/bulk-update
GET    /api/v1/admin/coupons/:id/usage
GET    /api/v1/admin/coupons/stats

// User Address Management
GET    /api/v1/admin/users/:id/addresses
POST   /api/v1/admin/users/:id/addresses
PUT    /api/v1/admin/users/:id/addresses/:address_id
DELETE /api/v1/admin/users/:id/addresses/:address_id
```

## 🐍 Python ML Service API

```python
# Recommendation endpoints
GET    /ml/v1/recommendations/user/:user_id
POST   /ml/v1/recommendations/user/:user_id/generate
GET    /ml/v1/recommendations/product/:product_id/similar
GET    /ml/v1/recommendations/popular
GET    /ml/v1/recommendations/trending
POST   /ml/v1/recommendations/skin-based

# Analytics endpoints
POST   /ml/v1/analytics/track-event
POST   /ml/v1/analytics/track-purchase
GET    /ml/v1/analytics/user/:user_id/insights
GET    /ml/v1/analytics/product/:product_id/stats
GET    /ml/v1/analytics/search-trends
GET    /ml/v1/analytics/performance-metrics

# Skin analysis
POST   /ml/v1/skin-analysis/analyze
GET    /ml/v1/skin-analysis/recommendations/:user_id
POST   /ml/v1/skin-analysis/feedback
GET    /ml/v1/skin-analysis/products-by-concern

# Search & Discovery
POST   /ml/v1/search/products
GET    /ml/v1/search/suggestions
POST   /ml/v1/search/track-query
GET    /ml/v1/search/trending-queries

# Health checks
GET    /ml/health
GET    /ml/metrics
```

## 🎯 Implementation Priority & Timeline

### Phase 1: Foundation (Week 1-2)
1. **✅ Database Setup**
   - PostgreSQL schema implementation
   - Redis configuration
   - MongoDB setup
   - Database migrations

2. **✅ Go API Core**
   - Project structure setup
   - Database connections (PostgreSQL, Redis, MongoDB)
   - Basic middleware (CORS, logging, validation)
   - User authentication (register, login, JWT)
   - Password reset functionality

3. **✅ Basic Product Management**
   - Product CRUD operations
   - Category management
   - Basic search functionality

### Phase 2: E-commerce Core (Week 3-4)
1. **✅ Shopping Features**
   - Shopping cart (Redis-backed)
   - Wishlist functionality
   - User address management
   - Order processing system

2. **✅ Review System**
   - Product reviews CRUD
   - Review moderation
   - Rating aggregation

3. **✅ Admin Foundation**
   - Admin authentication
   - Basic admin dashboard
   - Product management interface

### Phase 3: Advanced Features (Week 5-6)
1. **✅ Coupon System**
   - Coupon creation and validation
   - Usage tracking
   - Bulk operations

2. **✅ Admin Dashboard**
   - Analytics and reporting
   - Bulk operations for all entities
   - Advanced filtering and search

3. **✅ Performance & Caching**
   - Redis caching implementation
   - API response optimization
   - Database query optimization

### Phase 4: ML Integration (Week 7-8)
1. **✅ Python ML Service**
   - Service setup with FastAPI
   - MongoDB integration
   - Basic recommendation algorithms

2. **✅ Analytics System**
   - User behavior tracking
   - Performance metrics collection
   - Search analytics

3. **✅ Recommendations**
   - Collaborative filtering
   - Content-based recommendations
   - Skin type-based suggestions

## 🛠️ Development Commands & Scripts

```bash
# Database setup
make db-up          # Start databases (PostgreSQL, Redis, MongoDB)
make db-migrate     # Run database migrations
make db-seed        # Seed initial data
make db-reset       # Reset and reseed database

# Go service
make api-dev        # Run API server in development mode
make api-build      # Build API server binary
make api-test       # Run API tests
make api-lint       # Lint Go code

# Python ML service
make ml-dev         # Run ML service in development mode
make ml-test        # Run ML service tests
make ml-lint        # Lint Python code

# Docker
make docker-build   # Build all Docker images
make docker-up      # Start all services with Docker
make docker-logs    # View logs from all services

# Database operations
make migrate-up     # Run pending migrations
make migrate-down   # Rollback one migration
make migrate-create # Create new migration file

# Testing
make test-all       # Run all tests
make test-unit      # Run unit tests only
make test-integration # Run integration tests only

# Deployment
make deploy-staging # Deploy to staging
make deploy-prod    # Deploy to production
```

## 📋 Environment Configuration

### Go API Service (.env)
```bash
# Server
PORT=8080
ENV=development
API_VERSION=v1

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=skincare_ecommerce
DB_USER=postgres
DB_PASSWORD=password
DB_SSL_MODE=disable

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
REDIS_DB=0

# MongoDB
MONGO_URI=mongodb://localhost:27017
MONGO_DATABASE=skincare_analytics

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=24h
REFRESH_TOKEN_EXPIRES_IN=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
FROM_EMAIL=noreply@skincare.com
FROM_NAME=Skincare Store

# File Upload
MAX_FILE_SIZE=10MB
UPLOAD_PATH=./uploads
ALLOWED_FILE_TYPES=jpg,jpeg,png,webp

# Rate Limiting
RATE_LIMIT_REQUESTS=100
RATE_LIMIT_WINDOW=60s

# External Services
ML_SERVICE_URL=http://localhost:8001
PAYMENT_GATEWAY_URL=https://api.stripe.com
```

### Python ML Service (.env)
```bash
# Server
PORT=8001
ENV=development
DEBUG=true

# Database
POSTGRES_URI=postgresql://postgres:password@localhost:5432/skincare_ecommerce
MONGO_URI=mongodb://localhost:27017
MONGO_DATABASE=skincare_analytics

# Redis
REDIS_URL=redis://localhost:6379/1

# ML Models
MODEL_PATH=./models
RECOMMENDATION_MODEL_VERSION=1.0
SKIN_ANALYSIS_MODEL_VERSION=1.0

# API Keys
OPENAI_API_KEY=your-openai-key
GOOGLE_VISION_API_KEY=your-google-vision-key

# Performance
WORKER_PROCESSES=4
MAX_REQUESTS=1000
REQUEST_TIMEOUT=30
```

This complete backend structure provides:

✅ **Production-Ready Database Schema** - Matches your mockApi perfectly
✅ **Scalable Go API Server** - Clean architecture with proper separation of concerns  
✅ **Python ML Service** - For recommendations and analytics
✅ **Multi-Database Strategy** - PostgreSQL, Redis, MongoDB for optimal performance
✅ **Complete API Coverage** - Customer and admin endpoints
✅ **Development Tools** - Migrations, seeds, tests, Docker setup
✅ **Khmer Language Support** - Ready for your target market
✅ **Skincare-Specific Features** - Skin types, concerns, ingredients
✅ **E-commerce Complete** - Orders, carts, reviews, coupons, wishlists

The structure is ready for immediate implementation and can scale as your business grows!