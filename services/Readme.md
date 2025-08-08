# 🏗️ Complete Backend Structure & Database Design

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
│   │   │   │   │   ├── orders.go
│   │   │   │   │   ├── customers.go
│   │   │   │   │   ├── coupons.go
│   │   │   │   │   ├── reviews.go
│   │   │   │   │   └── admin.go
│   │   │   │   ├── 📂 middleware/
│   │   │   │   │   ├── auth.go
│   │   │   │   │   ├── admin.go
│   │   │   │   │   ├── cors.go
│   │   │   │   │   └── rate_limit.go
│   │   │   │   └── 📂 routes/
│   │   │   │       ├── api.go
│   │   │   │       └── admin.go
│   │   │   ├── 📂 services/
│   │   │   │   ├── auth_service.go
│   │   │   │   ├── email_service.go
│   │   │   │   ├── password_reset_service.go
│   │   │   │   ├── product_service.go
│   │   │   │   ├── order_service.go
│   │   │   │   ├── customer_service.go
│   │   │   │   ├── coupon_service.go
│   │   │   │   └── review_service.go
│   │   │   ├── 📂 repository/
│   │   │   │   ├── interfaces.go
│   │   │   │   ├── postgres/
│   │   │   │   │   ├── user_repo.go
│   │   │   │   │   ├── product_repo.go
│   │   │   │   │   ├── order_repo.go
│   │   │   │   │   └── coupon_repo.go
│   │   │   │   ├── redis/
│   │   │   │   │   ├── session_repo.go
│   │   │   │   │   └── cart_repo.go
│   │   │   │   └── mongodb/
│   │   │   │       └── analytics_repo.go
│   │   │   ├── 📂 models/
│   │   │   │   ├── user.go
│   │   │   │   ├── product.go
│   │   │   │   ├── order.go
│   │   │   │   ├── coupon.go
│   │   │   │   └── review.go
│   │   │   ├── 📂 config/
│   │   │   │   └── config.go
│   │   │   └── 📂 utils/
│   │   │       ├── jwt.go
│   │   │       ├── password.go
│   │   │       ├── email.go
│   │   │       ├── tokens.go
│   │   │       └── validators.go
│   │   ├── 📂 migrations/
│   │   │   ├── 001_create_users.sql
│   │   │   ├── 002_create_products.sql
│   │   │   ├── 003_create_orders.sql
│   │   │   └── ...
│   │   ├── 📂 tests/
│   │   ├── go.mod
│   │   └── go.sum
│   └── 📂 ml-service/ (Python)
│       ├── 📂 app/
│       │   ├── 📂 api/
│       │   │   ├── __init__.py
│       │   │   ├── recommendations.py
│       │   │   └── analytics.py
│       │   ├── 📂 models/
│       │   │   ├── __init__.py
│       │   │   ├── recommendation_model.py
│       │   │   └── skin_analysis.py
│       │   ├── 📂 services/
│       │   │   ├── __init__.py
│       │   │   ├── ml_service.py
│       │   │   └── data_processor.py
│       │   ├── 📂 database/
│       │   │   ├── __init__.py
│       │   │   └── mongodb.py
│       │   ├── main.py
│       │   └── config.py
│       ├── 📂 tests/
│       ├── requirements.txt
│       └── Dockerfile
├── 📂 database/
│   ├── 📂 postgresql/
│   │   ├── init.sql
│   │   └── seed_data.sql
│   ├── 📂 mongodb/
│   │   └── init.js
│   └── 📂 redis/
│       └── redis.conf
├── docker-compose.yml
├── docker-compose.dev.yml
└── README.md
```

## 🗄️ PostgreSQL Database Schema

### 1. Users & Authentication Domain

```sql
-- Users table (matches your mockApi structure)
CREATE TYPE user_role AS ENUM ('customer', 'admin', 'moderator');
CREATE TYPE skin_type AS ENUM ('oily', 'dry', 'combination', 'sensitive', 'normal', 'all');

CREATE TYPE user_language AS ENUM ('en', 'kh');

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    date_of_birth DATE,
    gender VARCHAR(10),
    skin_type skin_type DEFAULT 'normal',
    language user_language DEFAULT 'en',
    role user_role DEFAULT 'customer',
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    email_verification_token VARCHAR(255),
    email_verified_at TIMESTAMP,
    password_reset_token VARCHAR(255),
    password_reset_expires TIMESTAMP,
    total_orders INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    avg_rating DECIMAL(3,2) DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE user_addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(20) DEFAULT 'shipping', -- 'shipping', 'billing'
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
```

### 2. Categories & Products Domain

```sql
CREATE TYPE product_status AS ENUM ('draft', 'active', 'archived');

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id INTEGER REFERENCES categories(id),
    image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255) NOT NULL,
    name_th VARCHAR(255),
    slug VARCHAR(255) UNIQUE NOT NULL,
    description_en TEXT,
    description_th TEXT,
    short_description TEXT,
    sku VARCHAR(100) UNIQUE NOT NULL,
    barcode VARCHAR(100),
    
    -- Pricing (matching your mockApi)
    price DECIMAL(10,2) NOT NULL,
    compare_at_price DECIMAL(10,2),
    cost_price DECIMAL(10,2),
    
    -- Inventory (matching your mockApi stock field)
    stock INTEGER DEFAULT 0,
    track_inventory BOOLEAN DEFAULT true,
    allow_backorders BOOLEAN DEFAULT false,
    
    -- Physical attributes
    weight DECIMAL(8,2),
    dimensions JSON,
    
    -- Skincare specific (matching your mockApi skin_type, category)
    skin_type skin_type DEFAULT 'all',
    category VARCHAR(50) NOT NULL, -- 'cleanser', 'moisturizer', 'serum', etc.
    skin_concerns TEXT[], -- ['acne', 'aging', 'dark_spots']
    ingredients JSONB,
    usage_instructions TEXT,
    
    -- Media (matching your mockApi image_url)
    image_url VARCHAR(500),
    
    -- SEO & Status (matching your mockApi status)
    meta_title VARCHAR(255),
    meta_description TEXT,
    status product_status DEFAULT 'active',
    is_featured BOOLEAN DEFAULT false,
    
    -- Timestamps (matching your mockApi created_at)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW(),
    published_at TIMESTAMP
);

CREATE TABLE product_categories (
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (product_id, category_id)
);

CREATE TABLE product_images (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    sort_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 3. Orders & Transactions Domain

```sql
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'partially_paid', 'refunded', 'partially_refunded', 'failed');
CREATE TYPE fulfillment_status AS ENUM ('unfulfilled', 'partial', 'fulfilled', 'shipped', 'delivered');

-- Orders table (matching your mockOrders structure)
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_number VARCHAR(50) UNIQUE NOT NULL,
    user_id INTEGER REFERENCES users(id),
    
    -- Customer info (matching your mockOrders)
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    
    -- Order totals (matching your mockOrders total field)
    subtotal DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    shipping_amount DECIMAL(10,2) DEFAULT 0,
    discount_amount DECIMAL(10,2) DEFAULT 0,
    total DECIMAL(10,2) NOT NULL,
    
    -- Status (matching your mockOrders status)
    status order_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    fulfillment_status fulfillment_status DEFAULT 'unfulfilled',
    
    -- Addresses (stored as JSONB)
    shipping_address JSONB,
    billing_address JSONB,
    
    -- Timestamps (matching your mockOrders created_at)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW(),
    shipped_at TIMESTAMP,
    delivered_at TIMESTAMP
);

-- Order items (matching your mockOrders items structure)
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id),
    
    -- Product snapshot (matching mockOrders items: product_name, quantity, price)
    product_name VARCHAR(255) NOT NULL,
    product_sku VARCHAR(100),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Shopping cart (temporary storage)
CREATE TABLE shopping_cart (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);
```

### 4. Reviews Domain

```sql
CREATE TYPE review_status AS ENUM ('pending', 'approved', 'rejected');

-- Reviews table (matching your mockReviews structure)
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    -- Review content (matching mockReviews: rating, comment)
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    comment TEXT,
    
    -- Customer info (matching mockReviews)
    customer_name VARCHAR(255),
    customer_email VARCHAR(255),
    
    -- Status (matching mockReviews status)
    status review_status DEFAULT 'pending',
    is_verified_purchase BOOLEAN DEFAULT false,
    helpful_count INTEGER DEFAULT 0,
    
    -- Timestamps (matching mockReviews created_at)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### 5. Coupons Domain

```sql
CREATE TYPE coupon_type AS ENUM ('percentage', 'fixed', 'free_shipping');
CREATE TYPE coupon_status AS ENUM ('active', 'inactive', 'expired');

-- Coupons table (matching your mockCoupons structure)
CREATE TABLE coupons (
    id SERIAL PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL, -- matching mockCoupons.code
    name VARCHAR(255) NOT NULL, -- matching mockCoupons.name
    description TEXT, -- matching mockCoupons.description
    
    -- Discount details (matching mockCoupons type, value)
    type coupon_type NOT NULL,
    value DECIMAL(10,2) NOT NULL,
    max_discount DECIMAL(10,2), -- matching mockCoupons.maxDiscount
    
    -- Usage limits (matching mockCoupons usage fields)
    usage_limit INTEGER, -- matching mockCoupons.usageLimit
    used_count INTEGER DEFAULT 0, -- matching mockCoupons.usedCount
    usage_limit_per_user INTEGER DEFAULT 1,
    
    -- Conditions (matching mockCoupons.minOrderValue)
    min_order_value DECIMAL(10,2), -- matching mockCoupons.minOrderValue
    applicable_products INTEGER[],
    applicable_categories TEXT[], -- matching mockCoupons.applicableCategories
    
    -- Status (matching mockCoupons.status)
    status coupon_status DEFAULT 'active',
    
    -- Special flags (matching mockCoupons.isFirstTimeOnly)
    is_first_time_only BOOLEAN DEFAULT false,
    
    -- Validity (matching mockCoupons startDate, endDate)
    start_date DATE, -- matching mockCoupons.startDate
    end_date DATE, -- matching mockCoupons.endDate
    
    -- Timestamps (matching mockCoupons.created_at)
    created_at DATE DEFAULT CURRENT_DATE,
    updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE coupon_usage (
    id SERIAL PRIMARY KEY,
    coupon_id INTEGER REFERENCES coupons(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    order_id INTEGER REFERENCES orders(id) ON DELETE SET NULL,
    discount_amount DECIMAL(10,2) NOT NULL,
    used_at TIMESTAMP DEFAULT NOW()
);
```

### 6. Wishlist Domain

```sql
CREATE TABLE wishlists (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(user_id, product_id)
);
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
    os: String
  },
  created_at: Date,
  updated_at: Date
}
```

### 2. Product Recommendations Collection
```javascript
// product_recommendations
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  recommendation_type: String, // 'collaborative', 'content_based', 'popular'
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
    preferred_brands: [String]
  },
  created_at: Date,
  expires_at: Date
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
    added_at: timestamp
  }
]
TTL: 7 days
```

### 3. API Response Cache
```
Key: api:products:page:{page}
Value: JSON response
TTL: 15 minutes
```

## 🔧 Go Models Structure

### User Model
```go
type User struct {
    ID                      uint      `json:"id" gorm:"primaryKey"`
    Email                   string    `json:"email" gorm:"unique;not null"`
    PasswordHash            string    `json:"-" gorm:"not null"`
    FirstName               string    `json:"first_name"`
    LastName                string    `json:"last_name"`
    Phone                   string    `json:"phone"`
    SkinType                string    `json:"skin_type" gorm:"type:skin_type;default:'normal'"`
    Language                string    `json:"language" gorm:"type:user_language;default:'en'"`
    Role                    string    `json:"role" gorm:"type:user_role;default:'customer'"`
    IsActive                bool      `json:"is_active" gorm:"default:true"`
    EmailVerified           bool      `json:"email_verified" gorm:"default:false"`
    EmailVerificationToken  string    `json:"-"`
    EmailVerifiedAt         *time.Time `json:"email_verified_at"`
    PasswordResetToken      string    `json:"-"`
    PasswordResetExpires    *time.Time `json:"-"`
    TotalOrders             int       `json:"total_orders" gorm:"default:0"`
    TotalSpent              float64   `json:"total_spent" gorm:"type:decimal(10,2);default:0"`
    AvgRating               float64   `json:"avg_rating" gorm:"type:decimal(3,2);default:0"`
    CreatedAt               time.Time `json:"created_at"`
    UpdatedAt               time.Time `json:"updated_at"`
}
```

### Product Model
```go
type Product struct {
    ID              uint            `json:"id" gorm:"primaryKey"`
    NameEn          string          `json:"name_en" gorm:"not null"`
    Price           float64         `json:"price" gorm:"type:decimal(10,2);not null"`
    Category        string          `json:"category" gorm:"not null"`
    ImageURL        string          `json:"image_url"`
    DescriptionEn   string          `json:"description_en" gorm:"type:text"`
    Stock           int             `json:"stock" gorm:"default:0"`
    Status          string          `json:"status" gorm:"type:product_status;default:'active'"`
    SkinType        string          `json:"skin_type" gorm:"type:skin_type;default:'all'"`
    CreatedAt       time.Time       `json:"created_at" gorm:"type:date"`
    UpdatedAt       time.Time       `json:"updated_at"`
}
```

## 🔄 API Endpoint Structure

### Customer API Endpoints
```go
// Authentication
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
GET    /api/auth/me
POST   /api/auth/verify-email
POST   /api/auth/resend-verification
POST   /api/auth/forgot-password
POST   /api/auth/reset-password
POST   /api/auth/change-password

// Products
GET    /api/products
GET    /api/products/:id
GET    /api/products/search
GET    /api/products/categories

// Cart & Wishlist
GET    /api/cart
POST   /api/cart/add
PUT    /api/cart/update
DELETE /api/cart/remove
GET    /api/wishlist
POST   /api/wishlist/add

// Orders
POST   /api/orders
GET    /api/orders
GET    /api/orders/:id

// Reviews
POST   /api/reviews
GET    /api/products/:id/reviews
```

### Admin API Endpoints
```go
// Admin Auth
POST   /api/admin/login
GET    /api/admin/dashboard/stats

// Product Management
GET    /api/admin/products
POST   /api/admin/products
PUT    /api/admin/products/:id
DELETE /api/admin/products/:id
POST   /api/admin/products/bulk-update

// Order Management
GET    /api/admin/orders
PUT    /api/admin/orders/:id/status
POST   /api/admin/orders/bulk-update

// Customer Management
GET    /api/admin/customers
GET    /api/admin/customers/:id

// Review Management
GET    /api/admin/reviews
PUT    /api/admin/reviews/:id/status
DELETE /api/admin/reviews/:id
POST   /api/admin/reviews/bulk-update

// Coupon Management
GET    /api/admin/coupons
POST   /api/admin/coupons
PUT    /api/admin/coupons/:id
DELETE /api/admin/coupons/:id
POST   /api/admin/coupons/bulk-update
GET    /api/admin/coupons/stats
```

## 🐍 Python ML Service API
```python
# Recommendation endpoints
POST   /ml/recommendations/user/:user_id
POST   /ml/recommendations/product/:product_id
POST   /ml/recommendations/popular

# Analytics endpoints
POST   /ml/analytics/track-event
GET    /ml/analytics/user/:user_id/insights
GET    /ml/analytics/product/:product_id/stats

# Skin analysis
POST   /ml/skin-analysis/analyze
GET    /ml/skin-analysis/recommendations/:user_id
```

## 🎯 Implementation Priority

### Phase 1: Core Backend (Week 1-2)
1. **Setup Go project structure**
2. **PostgreSQL connection & migrations**
3. **User authentication (login/register)**
4. **Product CRUD operations**
5. **Basic API endpoints**

### Phase 2: E-commerce Features (Week 3-4)
1. **Shopping cart (Redis integration)**
2. **Order processing**
3. **Admin authentication**
4. **Admin product management**
5. **Review system**

### Phase 3: Advanced Features (Week 5-6)
1. **Coupon system**
2. **Admin dashboard analytics**
3. **Bulk operations**
4. **Redis caching**
5. **API optimization**

### Phase 4: ML Integration (Week 7-8)
1. **Python ML service setup**
2. **MongoDB analytics collection**
3. **Recommendation system**
4. **Service communication**

## 🛠️ Development Setup Commands

```bash
# Database setup
docker-compose up -d postgres redis mongodb

# Go service
cd services/api-server
go mod init skincare-api
go run cmd/server/main.go

# Python ML service
cd services/ml-service
pip install -r requirements.txt
uvicorn app.main:app --reload

# Database migrations
migrate -path migrations -database postgres://user:pass@localhost/db up
```

This structure directly matches your mockApi data and provides a scalable foundation for your skincare e-commerce platform!