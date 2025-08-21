# 🏗️ Complete Skincare E-commerce Backend Structure & Database Design (FINAL ENHANCED VERSION)

## 📊 **Database Strategy for Machine Learning & Advanced Feedback System**

### 🔵 **PostgreSQL** - Primary Transactional Database
**Used for:** Core business data, structured relationships, source data
- ✅ Users, Products, Orders, Reviews, Coupons, Addresses
- ✅ **Enhanced Feedback System** - Detailed reviews, progress tracking, Q&A
- ✅ **ML Training Data Source** - Historical purchases, user preferences, ratings
- ✅ **Real-time ML Queries** - Current user data, product features
- ✅ **Comprehensive Review Analytics** - Multi-dimensional feedback data

### 🟢 **MongoDB** - Analytics & ML Data Lake + Feedback Intelligence
**Used for:** Unstructured ML data, analytics, recommendations, feedback insights
- ✅ **ML Model Storage** - Trained models, feature vectors, embeddings
- ✅ **User Behavior Analytics** - Clicks, views, session data, feedback patterns
- ✅ **Recommendation Results** - Pre-computed recommendations
- ✅ **Advanced Feedback Analytics** - Sentiment analysis, feedback intelligence
- ✅ **Real-time Feedback Processing** - Live feedback stream, moderation queue
- ✅ **Predictive Feedback Insights** - Customer satisfaction predictions

### 🔴 **Redis** - Caching & Real-time Data
**Used for:** Fast access data, sessions, temporary storage
- ✅ Sessions, JWT tokens, rate limiting
- ✅ **Real-time feedback notifications**
- ✅ **Feedback moderation queue** - Fast processing
- ✅ Shopping cart, wishlist caching

### 🔄 **Enhanced ML & Feedback Data Flow:**
```
PostgreSQL (Reviews + Orders) → ETL → MongoDB (Analytics + AI) → API → Real-time Insights
                ↓
Real-time Feedback → Redis → Processing → PostgreSQL + MongoDB
                ↓
Sentiment Analysis → ML Models → Recommendations → Cache → Serve
```

---

## 📁 Complete Project Directory Structure

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
│   │   │   │   │   ├── reviews.go                    # 🆕 Enhanced reviews
│   │   │   │   │   ├── feedback.go                   # 🆕 Advanced feedback system
│   │   │   │   │   ├── skincare_progress.go          # 🆕 Progress tracking
│   │   │   │   │   ├── product_qa.go                 # 🆕 Questions & Answers
│   │   │   │   │   ├── cart.go
│   │   │   │   │   ├── wishlist.go
│   │   │   │   │   ├── file_upload.go               # 🆕 File upload handler
│   │   │   │   │   ├── moderation.go                # 🆕 Content moderation
│   │   │   │   │   └── admin.go
│   │   │   │   ├── 📂 middleware/
│   │   │   │   │   ├── auth.go
│   │   │   │   │   ├── admin.go
│   │   │   │   │   ├── cors.go
│   │   │   │   │   ├── rate_limit.go
│   │   │   │   │   ├── validation.go
│   │   │   │   │   ├── file_upload.go               # 🆕 File upload middleware
│   │   │   │   │   ├── content_filter.go            # 🆕 Content filtering
│   │   │   │   │   └── logging.go
│   │   │   │   └── 📂 routes/
│   │   │   │       ├── api.go
│   │   │   │       ├── admin.go
│   │   │   │       ├── feedback.go                  # 🆕 Feedback routes
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
│   │   │   │   ├── review_service.go                # 🆕 Enhanced reviews
│   │   │   │   ├── feedback_service.go              # 🆕 Comprehensive feedback
│   │   │   │   ├── progress_service.go              # 🆕 Skincare progress
│   │   │   │   ├── qa_service.go                    # 🆕 Q&A service
│   │   │   │   ├── moderation_service.go            # 🆕 Content moderation
│   │   │   │   ├── notification_service.go          # 🆕 Feedback notifications
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
│   │   │   │   │   ├── review_repo.go               # 🆕 Enhanced reviews
│   │   │   │   │   ├── feedback_repo.go             # 🆕 Feedback repository
│   │   │   │   │   ├── progress_repo.go             # 🆕 Progress tracking
│   │   │   │   │   ├── qa_repo.go                   # 🆕 Questions & Answers
│   │   │   │   │   ├── cart_repo.go
│   │   │   │   │   └── wishlist_repo.go
│   │   │   │   ├── 📂 redis/
│   │   │   │   │   ├── session_repo.go
│   │   │   │   │   ├── cache_repo.go
│   │   │   │   │   ├── cart_cache_repo.go
│   │   │   │   │   ├── feedback_cache_repo.go       # 🆕 Feedback caching
│   │   │   │   │   └── notification_repo.go         # 🆕 Real-time notifications
│   │   │   │   └── 📂 mongodb/
│   │   │   │       ├── analytics_repo.go            # 🎯 ML Analytics
│   │   │   │       ├── recommendation_repo.go       # 🎯 ML Recommendations  
│   │   │   │       ├── ml_data_repo.go              # 🎯 ML Training Data
│   │   │   │       ├── feedback_analytics_repo.go   # 🆕 Feedback analytics
│   │   │   │       ├── sentiment_repo.go            # 🆕 Sentiment analysis
│   │   │   │       └── intelligence_repo.go         # 🆕 Product intelligence
│   │   │   ├── 📂 models/
│   │   │   │   ├── user.go                          # 🆕 Updated with profile_picture
│   │   │   │   ├── product.go
│   │   │   │   ├── category.go
│   │   │   │   ├── order.go
│   │   │   │   ├── coupon.go
│   │   │   │   ├── review.go                        # 🆕 Enhanced review model
│   │   │   │   ├── feedback.go                      # 🆕 Feedback models
│   │   │   │   ├── progress.go                      # 🆕 Progress tracking model
│   │   │   │   ├── qa.go                            # 🆕 Q&A models
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
│   │   │       ├── file_utils.go                    # 🆕 File handling utilities
│   │   │       ├── sentiment_analyzer.go            # 🆕 Basic sentiment analysis
│   │   │       ├── text_processor.go                # 🆕 Text processing
│   │   │       └── moderation_utils.go              # 🆕 Content moderation
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
│   │   │   ├── 010_create_reviews.sql               # 🆕 Enhanced reviews table
│   │   │   ├── 011_create_feedback_system.sql       # 🆕 Comprehensive feedback
│   │   │   ├── 012_create_progress_tracking.sql     # 🆕 Skincare progress
│   │   │   ├── 013_create_qa_system.sql             # 🆕 Questions & Answers
│   │   │   ├── 014_create_coupons.sql
│   │   │   ├── 015_create_coupon_usage.sql
│   │   │   ├── 016_create_wishlists.sql
│   │   │   ├── 017_create_indexes.sql               # 🆕 Enhanced indexes
│   │   │   ├── 018_create_views.sql                 # 🆕 ML & Analytics views
│   │   │   └── 019_seed_data.sql                    # 🆕 Enhanced seed data
│   │   ├── 📂 uploads/                               # 🆕 File storage directory
│   │   │   ├── 📂 profiles/                         # User profile pictures
│   │   │   ├── 📂 products/                         # Product images
│   │   │   ├── 📂 reviews/                          # 🆕 Review photos (before/after)
│   │   │   ├── 📂 progress/                         # 🆕 Progress photos
│   │   │   └── 📂 temp/                             # Temporary uploads
│   │   ├── 📂 tests/
│   │   │   ├── 📂 unit/
│   │   │   │   ├── 📂 services/
│   │   │   │   ├── 📂 handlers/
│   │   │   │   └── 📂 utils/
│   │   │   ├── 📂 integration/
│   │   │   │   ├── feedback_test.go                 # 🆕 Feedback system tests
│   │   │   │   ├── ml_integration_test.go           # 🆕 ML integration tests
│   │   │   │   └── api_test.go
│   │   │   └── 📂 fixtures/
│   │   │       ├── users.json
│   │   │       ├── products.json
│   │   │       └── reviews.json                     # 🆕 Review test data
│   │   ├── 📂 docs/
│   │   │   ├── api.yaml (OpenAPI/Swagger)          # 🆕 Updated with feedback APIs
│   │   │   ├── feedback_system.md                   # 🆕 Feedback system docs
│   │   │   ├── ml_integration.md                    # 🆕 ML integration guide
│   │   │   └── README.md
│   │   ├── go.mod
│   │   ├── go.sum
│   │   ├── .env.example
│   │   └── Dockerfile
│   ├── 📂 ml-service/ (Python) # 🎯 Enhanced ML Service
│   │   ├── 📂 app/
│   │   │   ├── 📂 api/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── recommendations.py               # Uses MongoDB recommendations
│   │   │   │   ├── analytics.py                     # Uses MongoDB analytics
│   │   │   │   ├── skin_analysis.py                 # Uses PostgreSQL user data
│   │   │   │   ├── feedback_intelligence.py         # 🆕 Feedback AI analysis
│   │   │   │   ├── sentiment_analysis.py            # 🆕 Review sentiment
│   │   │   │   └── predictive_insights.py           # 🆕 Predictive analytics
│   │   │   ├── 📂 models/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── recommendation_model.py          # 🎯 Trained on PostgreSQL data
│   │   │   │   ├── skin_analysis_model.py           # 🎯 Uses PostgreSQL user profiles
│   │   │   │   ├── collaborative_filtering.py       # 🎯 PostgreSQL orders/reviews
│   │   │   │   ├── content_based_model.py           # 🎯 PostgreSQL product features
│   │   │   │   ├── sentiment_model.py               # 🆕 Review sentiment analysis
│   │   │   │   ├── feedback_classifier.py           # 🆕 Feedback classification
│   │   │   │   └── satisfaction_predictor.py        # 🆕 Customer satisfaction prediction
│   │   │   ├── 📂 services/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── ml_service.py                    # Orchestrates both databases
│   │   │   │   ├── recommendation_service.py        # MongoDB cache + PostgreSQL data
│   │   │   │   ├── data_processor.py                # ETL: PostgreSQL → MongoDB
│   │   │   │   ├── model_trainer.py                 # 🎯 Trains on PostgreSQL data
│   │   │   │   ├── feedback_processor.py            # 🆕 Process feedback data
│   │   │   │   ├── sentiment_service.py             # 🆕 Sentiment analysis service
│   │   │   │   ├── intelligence_service.py          # 🆕 Product intelligence
│   │   │   │   └── prediction_service.py            # 🆕 Predictive analytics
│   │   │   ├── 📂 database/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── mongodb.py                       # 🎯 Analytics & ML results
│   │   │   │   ├── postgres_connector.py            # 🎯 Source data for training
│   │   │   │   └── dual_connector.py                # 🆕 Unified database access
│   │   │   ├── 📂 utils/
│   │   │   │   ├── __init__.py
│   │   │   │   ├── data_validation.py
│   │   │   │   ├── feature_extraction.py            # 🎯 Extract features from PostgreSQL
│   │   │   │   ├── model_utils.py
│   │   │   │   ├── text_processing.py               # 🆕 NLP utilities
│   │   │   │   ├── feedback_analyzer.py             # 🆕 Feedback analysis tools
│   │   │   │   └── visualization.py                 # 🆕 Data visualization
│   │   │   ├── main.py
│   │   │   └── config.py
│   │   ├── 📂 notebooks/                            # 🆕 Data science notebooks
│   │   │   ├── feedback_analysis.ipynb
│   │   │   ├── sentiment_model_training.ipynb
│   │   │   └── recommendation_evaluation.ipynb
│   │   ├── 📂 tests/
│   │   │   ├── test_feedback_processing.py          # 🆕 Feedback tests
│   │   │   ├── test_sentiment_analysis.py           # 🆕 Sentiment tests
│   │   │   └── test_ml_models.py
│   │   ├── requirements.txt
│   │   ├── .env.example
│   │   └── Dockerfile
│   └── 📂 feedback-processor/ (Node.js) # 🆕 Real-time Feedback Processing
│       ├── 📂 src/
│       │   ├── 📂 processors/
│       │   │   ├── review_processor.js
│       │   │   ├── sentiment_processor.js
│       │   │   ├── moderation_processor.js
│       │   │   └── notification_processor.js
│       │   ├── 📂 queues/
│       │   │   ├── feedback_queue.js
│       │   │   ├── moderation_queue.js
│       │   │   └── notification_queue.js
│       │   ├── 📂 services/
│       │   │   ├── redis_service.js
│       │   │   ├── mongodb_service.js
│       │   │   └── notification_service.js
│       │   ├── app.js
│       │   └── config.js
│       ├── package.json
│       └── Dockerfile
├── 📂 database/
│   ├── 📂 postgresql/
│   │   ├── init.sql
│   │   ├── schema.sql                               # 🆕 Enhanced schema with feedback
│   │   ├── seed_data.sql                            # 🆕 Enhanced seed data
│   │   └── views.sql                                # 🆕 ML & Analytics views
│   ├── 📂 mongodb/
│   │   ├── init.js
│   │   ├── collections.js                           # 🎯 ML + Feedback collections
│   │   ├── indexes.js                               # 🎯 Enhanced indexes
│   │   └── aggregations.js                          # 🆕 Feedback aggregation pipelines
│   └── 📂 redis/
│       ├── redis.conf
│       └── feedback_queues.conf                     # 🆕 Feedback queue configuration
├── 📂 scripts/
│   ├── setup.sh
│   ├── migrate.sh
│   ├── seed.sh
│   ├── ml_etl.sh                                    # 🎯 ETL script PostgreSQL → MongoDB
│   ├── feedback_migration.sh                       # 🆕 Feedback data migration
│   ├── sentiment_training.sh                       # 🆕 Train sentiment models
│   └── deploy.sh
├── 📂 infrastructure/                               # 🆕 Infrastructure as Code
│   ├── 📂 docker/
│   │   ├── docker-compose.yml
│   │   ├── docker-compose.dev.yml
│   │   ├── docker-compose.prod.yml
│   │   └── docker-compose.test.yml                  # 🆕 Testing environment
│   ├── 📂 kubernetes/                               # 🆕 K8s deployments
│   │   ├── api-server.yaml
│   │   ├── ml-service.yaml
│   │   ├── feedback-processor.yaml
│   │   └── databases.yaml
│   └── 📂 monitoring/                               # 🆕 Monitoring setup
│       ├── prometheus.yml
│       ├── grafana/
│       └── alerts.yml
├── 📂 docs/                                         # 🆕 Comprehensive documentation
│   ├── API_DOCUMENTATION.md
│   ├── FEEDBACK_SYSTEM.md
│   ├── ML_INTEGRATION.md
│   ├── DATABASE_SCHEMA.md
│   ├── DEPLOYMENT.md
│   └── TROUBLESHOOTING.md
└── README.md
```

## 🗄️ Enhanced PostgreSQL Database Schema with Comprehensive Feedback System

### Enhanced Schema with Advanced Feedback, Profile Pictures & Acne Support

```sql
-- =============================================
-- SKINCARE E-COMMERCE DATABASE SCHEMA (FINAL ENHANCED VERSION)
-- =============================================

-- Create ENUM types first (Updated with new file-related enums)
CREATE TYPE user_role AS ENUM ('customer', 'admin', 'moderator', 'expert');
CREATE TYPE user_language AS ENUM ('en', 'kh');
CREATE TYPE skin_type AS ENUM ('oily', 'dry', 'combination', 'sensitive', 'normal', 'acne', 'all');
CREATE TYPE product_status AS ENUM ('draft', 'active', 'archived');
CREATE TYPE order_status AS ENUM ('pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'refunded');
CREATE TYPE payment_status AS ENUM ('pending', 'paid', 'partially_paid', 'refunded', 'partially_refunded', 'failed');
CREATE TYPE fulfillment_status AS ENUM ('unfulfilled', 'partial', 'fulfilled', 'shipped', 'delivered');
CREATE TYPE review_status AS ENUM ('pending', 'approved', 'rejected', 'flagged');
CREATE TYPE coupon_type AS ENUM ('percentage', 'fixed', 'free_shipping');
CREATE TYPE coupon_status AS ENUM ('active', 'inactive', 'expired');
CREATE TYPE feedback_status AS ENUM ('pending', 'approved', 'rejected', 'flagged', 'hidden');
CREATE TYPE progress_status AS ENUM ('ongoing', 'completed', 'abandoned');
CREATE TYPE moderation_status AS ENUM ('pending', 'approved', 'rejected', 'needs_review');
CREATE TYPE usage_frequency AS ENUM ('daily', 'twice_daily', 'weekly', '2-3_times_week', 'as_needed');

-- 🆕 New file-related enums
CREATE TYPE file_status AS ENUM ('uploading', 'processing', 'active', 'deleted', 'failed');
CREATE TYPE media_type AS ENUM ('image', 'video', 'document', 'audio');
CREATE TYPE virus_scan_status AS ENUM ('pending', 'clean', 'infected', 'failed', 'skipped');

-- =============================================
-- ENHANCED FILE UPLOAD SYSTEM (CORE)
-- =============================================

-- 🆕 Centralized File Storage Table
CREATE TABLE uploaded_files (
    id SERIAL PRIMARY KEY,
    
    -- File identification
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,        -- Local file path or cloud storage key
    file_url VARCHAR(500) NOT NULL,         -- Public URL
    
    -- File metadata
    file_size BIGINT NOT NULL CHECK (file_size > 0),
    mime_type VARCHAR(100) NOT NULL,
    file_extension VARCHAR(10) NOT NULL,
    media_type media_type NOT NULL,
    
    -- Image-specific metadata (for images only)
    image_width INTEGER CHECK (image_width > 0),
    image_height INTEGER CHECK (image_height > 0),
    image_thumbnails JSONB,                 -- {"small": "thumb_small.jpg", "medium": "thumb_med.jpg"}
    dominant_colors JSONB,                  -- ["#FF5733", "#C70039"] for UI theming
    
    -- Upload context and relationships
    uploaded_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    upload_context VARCHAR(50) NOT NULL,    -- 'profile', 'product', 'review', 'progress', 'qa'
    related_entity_type VARCHAR(50),        -- 'user', 'product', 'review', 'progress', 'question', 'answer'
    related_entity_id INTEGER,
    
    -- File status and processing
    status file_status DEFAULT 'uploading',
    is_processed BOOLEAN DEFAULT false,     -- For image processing/resizing completion
    processing_error TEXT,                  -- Error message if processing failed
    is_public BOOLEAN DEFAULT true,
    is_temporary BOOLEAN DEFAULT false,     -- For temp uploads during multi-step processes
    
    -- Security and validation
    virus_scan_status virus_scan_status DEFAULT 'pending',
    virus_scan_result TEXT,                 -- Details from virus scanner
    content_hash VARCHAR(64) UNIQUE,        -- SHA-256 hash for duplicate detection
    
    -- Cloud storage integration (optional)
    cloud_provider VARCHAR(20),             -- 'aws', 'gcp', 'azure', 'local'
    cloud_bucket VARCHAR(100),
    cloud_region VARCHAR(50),
    
    -- Timestamps and expiration
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    processed_at TIMESTAMP,                 -- When file processing completed
    expires_at TIMESTAMP,                   -- For temporary files
    deleted_at TIMESTAMP                    -- Soft delete timestamp
);

-- 🆕 File Upload Configuration Table
CREATE TABLE file_upload_configs (
    id SERIAL PRIMARY KEY,
    
    -- Upload context
    context VARCHAR(50) UNIQUE NOT NULL,    -- 'profile', 'product', 'review', 'progress', 'qa'
    description TEXT,
    
    -- File restrictions
    max_file_size BIGINT NOT NULL,          -- Maximum file size in bytes
    allowed_mime_types TEXT[] NOT NULL,     -- ['image/jpeg', 'image/png', 'image/gif']
    allowed_extensions TEXT[] NOT NULL,     -- ['jpg', 'jpeg', 'png', 'gif']
    
    -- Image-specific restrictions
    max_width INTEGER,                      -- Maximum image width in pixels
    max_height INTEGER,                     -- Maximum image height in pixels
    min_width INTEGER,                      -- Minimum image width in pixels
    min_height INTEGER,                     -- Minimum image height in pixels
    aspect_ratio_restrictions JSONB,        -- {"min": 0.5, "max": 2.0} width/height ratio
    
    -- Upload limits per user/context
    max_files_per_upload INTEGER DEFAULT 1,
    max_files_per_user INTEGER,            -- Total files per user in this context
    max_total_size_per_user BIGINT,        -- Total storage limit per user
    
    -- Processing options
    create_thumbnails BOOLEAN DEFAULT true,
    thumbnail_sizes JSONB DEFAULT '{"small": [150,150], "medium": [300,300]}',
    compress_images BOOLEAN DEFAULT true,
    compression_quality INTEGER DEFAULT 80 CHECK (compression_quality BETWEEN 1 AND 100),
    convert_to_webp BOOLEAN DEFAULT false,  -- Convert images to WebP for better compression
    
    -- Storage and access options
    storage_path VARCHAR(255) NOT NULL,     -- Relative storage path
    is_public BOOLEAN DEFAULT true,
    require_authentication BOOLEAN DEFAULT false,
    enable_direct_upload BOOLEAN DEFAULT false, -- Allow direct upload to cloud storage
    
    -- Security and validation
    require_virus_scan BOOLEAN DEFAULT false,
    auto_approve BOOLEAN DEFAULT true,
    enable_watermark BOOLEAN DEFAULT false,
    watermark_text VARCHAR(100),
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 1. USERS & AUTHENTICATION DOMAIN (🆕 UPDATED)
-- =============================================

-- Main users table (Enhanced with file references)
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
    
    -- Enhanced Profile Media (File References + URL Fallback)
    profile_picture_file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    profile_banner_file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    profile_picture VARCHAR(500),           -- Fallback URL for external images
    bio TEXT,
    expertise_areas TEXT[],                 -- For expert users ["acne", "anti-aging"]
    
    -- Account status
    is_active BOOLEAN DEFAULT true,
    email_verified BOOLEAN DEFAULT false,
    email_verification_token VARCHAR(255),
    email_verified_at TIMESTAMP,
    
    -- Password reset
    password_reset_token VARCHAR(255),
    password_reset_expires TIMESTAMP,
    
    -- User statistics
    total_orders INTEGER DEFAULT 0,
    total_spent DECIMAL(10,2) DEFAULT 0,
    avg_rating DECIMAL(3,2) DEFAULT 0,
    
    -- Enhanced engagement and community stats
    reviews_written INTEGER DEFAULT 0,
    helpful_votes_received INTEGER DEFAULT 0,
    questions_asked INTEGER DEFAULT 0,
    answers_provided INTEGER DEFAULT 0,
    community_score INTEGER DEFAULT 0,
    files_uploaded INTEGER DEFAULT 0,       -- 🆕 Track file uploads
    storage_used BIGINT DEFAULT 0,          -- 🆕 Track storage usage in bytes
    
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
    address_line3 VARCHAR(255),
    address_line4 VARCHAR(255),
    address_line5 VARCHAR(255),
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
    
    -- Enhanced media support
    image_file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    image_url VARCHAR(500),                 -- Fallback URL
    banner_file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL, -- 🆕 Category banner
    
    is_active BOOLEAN DEFAULT true,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Main products table (Enhanced)
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
    
    -- Pricing
    price DECIMAL(10,2) NOT NULL CHECK (price > 0),
    compare_at_price DECIMAL(10,2) CHECK (compare_at_price IS NULL OR compare_at_price >= price),
    cost_price DECIMAL(10,2),
    
    -- Inventory
    stock INTEGER DEFAULT 0,
    track_inventory BOOLEAN DEFAULT true,
    allow_backorders BOOLEAN DEFAULT false,
    
    -- Physical attributes
    weight DECIMAL(8,2),
    dimensions JSONB,
    
    -- Skincare specific
    skin_type skin_type DEFAULT 'all',
    category VARCHAR(50) NOT NULL,
    skin_concerns TEXT[],
    ingredients JSONB,
    usage_instructions TEXT,
    key_benefits TEXT[],
    how_to_use TEXT,
    when_to_use TEXT,
    product_type VARCHAR(50),
    suitable_for_sensitive_skin BOOLEAN DEFAULT false,
    dermatologist_tested BOOLEAN DEFAULT false,
    cruelty_free BOOLEAN DEFAULT false,
    
    -- Enhanced Media (File Reference + URL Fallback)
    main_image_file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    image_url VARCHAR(500),                 -- Fallback URL for external images
    
    -- SEO & Marketing
    meta_title VARCHAR(255),
    meta_description TEXT,
    status product_status DEFAULT 'active',
    is_featured BOOLEAN DEFAULT false,
    
    -- Product analytics
    total_reviews INTEGER DEFAULT 0,
    avg_rating DECIMAL(3,2) DEFAULT 0,
    total_sales INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    
    -- Timestamps
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

-- 🆕 Enhanced Product Media (replaces simple product_images table)
CREATE TABLE product_media (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE CASCADE,
    
    -- Media classification
    media_purpose VARCHAR(30) DEFAULT 'gallery', -- 'main', 'gallery', 'variant', 'instruction', 'ingredient', 'before_after'
    variant_attributes JSONB,               -- {"color": "blue", "size": "50ml"} for product variants
    
    -- Display properties
    alt_text VARCHAR(255),
    caption TEXT,
    sort_order INTEGER DEFAULT 0,
    is_primary BOOLEAN DEFAULT false,
    
    -- Context and usage
    usage_context VARCHAR(50),              -- 'product_page', 'thumbnail', 'zoom', 'instruction'
    display_conditions JSONB,               -- Conditions when to show this media
    
    created_at TIMESTAMP DEFAULT NOW(),
    
    -- Ensure only one primary image per product
    CONSTRAINT unique_primary_per_product UNIQUE (product_id, is_primary) DEFERRABLE INITIALLY DEFERRED
);

-- Add constraint to allow only one primary image (with proper handling)
CREATE UNIQUE INDEX idx_product_media_primary_unique 
ON product_media(product_id) 
WHERE is_primary = true;

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
-- 4. ENHANCED REVIEWS & FEEDBACK SYSTEM
-- =============================================

-- 🆕 Enhanced Product Reviews with File Integration
CREATE TABLE product_reviews (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    order_item_id INTEGER REFERENCES order_items(id) ON DELETE SET NULL,
    
    -- Basic Review Data
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    title VARCHAR(255),
    review_text TEXT,
    
    -- Skincare-Specific Feedback
    skin_type_at_review skin_type,
    usage_duration INTEGER CHECK (usage_duration >= 0),
    visible_results BOOLEAN DEFAULT false,
    would_recommend BOOLEAN DEFAULT true,
    
    -- Detailed Skincare Ratings (1-5 scale each)
    effectiveness_rating INTEGER CHECK (effectiveness_rating BETWEEN 1 AND 5),
    texture_rating INTEGER CHECK (texture_rating BETWEEN 1 AND 5),
    scent_rating INTEGER CHECK (scent_rating BETWEEN 1 AND 5),
    packaging_rating INTEGER CHECK (packaging_rating BETWEEN 1 AND 5),
    value_for_money_rating INTEGER CHECK (value_for_money_rating BETWEEN 1 AND 5),
    
    -- Before/After Experience
    skin_condition_before TEXT,
    skin_condition_after TEXT,
    side_effects TEXT,
    
    -- Usage & Application
    how_often_used usage_frequency,
    application_method TEXT,
    used_with_other_products JSONB,
    
    -- Review Metadata
    is_verified_purchase BOOLEAN DEFAULT false,
    helpful_votes_count INTEGER DEFAULT 0,
    unhelpful_votes_count INTEGER DEFAULT 0,
    total_votes_count INTEGER DEFAULT 0,
    status review_status DEFAULT 'pending',
    
    -- 🆕 Media Support (now handled through separate table)
    has_photos BOOLEAN DEFAULT false,       -- Quick reference for queries
    has_video BOOLEAN DEFAULT false,        -- Quick reference for queries
    media_count INTEGER DEFAULT 0,          -- Quick reference for queries
    
    -- AI Analysis
    sentiment_score DECIMAL(3,2) CHECK (sentiment_score BETWEEN -1 AND 1),
    sentiment_label VARCHAR(20) CHECK (sentiment_label IN ('positive', 'negative', 'neutral')),
    extracted_topics JSONB,
    
    -- Timestamps
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 🆕 Review Media (handles review photos/videos with file references)
CREATE TABLE review_media (
    id SERIAL PRIMARY KEY,
    review_id INTEGER REFERENCES product_reviews(id) ON DELETE CASCADE,
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE CASCADE,
    
    -- Photo/Video context
    media_type VARCHAR(20) NOT NULL CHECK (media_type IN ('photo', 'video')),
    photo_type VARCHAR(20), -- 'before', 'after', 'during', 'product_shot', 'packaging', 'texture'
    photo_context TEXT,     -- Description: "After 4 weeks of use - morning light"
    
    -- Skincare specific context
    skin_area VARCHAR(30),  -- 'face', 'forehead', 'cheeks', 'full_face', 'problem_area', 'texture_closeup'
    lighting_condition VARCHAR(20), -- 'natural', 'indoor', 'flash', 'ring_light'
    timeline_context VARCHAR(50),   -- 'baseline', 'week_1', 'week_4', 'final_results'
    
    -- Timeline and usage
    days_of_usage INTEGER CHECK (days_of_usage >= 0),
    
    -- Display properties
    sort_order INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false,      -- Featured photo for the review
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Review Helpfulness Votes
CREATE TABLE review_votes (
    id SERIAL PRIMARY KEY,
    review_id INTEGER REFERENCES product_reviews(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    vote_type VARCHAR(10) CHECK (vote_type IN ('helpful', 'unhelpful')),
    created_at TIMESTAMP DEFAULT NOW(),
    UNIQUE(review_id, user_id)
);

-- 🆕 Enhanced Skincare Progress Tracking with File Integration
CREATE TABLE skincare_progress (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    
    -- Progress Timeline
    week_number INTEGER NOT NULL CHECK (week_number > 0 AND week_number <= 52),
    progress_date DATE DEFAULT CURRENT_DATE,
    
    -- Progress Notes and Observations
    skin_condition_notes TEXT,
    application_notes TEXT,                 -- How user applied the product this week
    lifestyle_factors TEXT,                 -- Diet, stress, other factors affecting skin
    
    -- Weekly Ratings
    overall_satisfaction INTEGER CHECK (overall_satisfaction BETWEEN 1 AND 5),
    skin_improvement INTEGER CHECK (skin_improvement BETWEEN 1 AND 5),
    side_effects_severity INTEGER CHECK (side_effects_severity BETWEEN 0 AND 5),
    product_experience INTEGER CHECK (product_experience BETWEEN 1 AND 5), -- Texture, application, etc.
    
    -- Specific Improvements (Boolean tracking)
    acne_reduced BOOLEAN DEFAULT false,
    skin_texture_improved BOOLEAN DEFAULT false,
    hydration_improved BOOLEAN DEFAULT false,
    redness_reduced BOOLEAN DEFAULT false,
    pores_minimized BOOLEAN DEFAULT false,
    brightness_improved BOOLEAN DEFAULT false,
    scarring_reduced BOOLEAN DEFAULT false,
    oil_control_improved BOOLEAN DEFAULT false,
    fine_lines_reduced BOOLEAN DEFAULT false, -- 🆕 Anti-aging tracking
    
    -- 🆕 Media Support (now handled through separate table)
    has_photos BOOLEAN DEFAULT false,
    photo_count INTEGER DEFAULT 0,
    
    -- Progress Status
    status progress_status DEFAULT 'ongoing',
    completion_notes TEXT,                  -- Final notes when marked complete
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    
    UNIQUE(user_id, product_id, week_number)
);

-- 🆕 Progress Media (handles progress photos with file references)
CREATE TABLE progress_media (
    id SERIAL PRIMARY KEY,
    progress_id INTEGER REFERENCES skincare_progress(id) ON DELETE CASCADE,
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE CASCADE,
    
    -- Progress Photo Context
    photo_type VARCHAR(20) DEFAULT 'progress' CHECK (photo_type IN ('progress', 'side_effect', 'baseline', 'comparison')),
    skin_area VARCHAR(30),     -- 'face', 'forehead', 'cheeks', 'chin', 'nose', 'under_eyes', 'full_face'
    angle VARCHAR(20),         -- 'front', 'left_side', 'right_side', 'closeup', 'wide'
    lighting_condition VARCHAR(20) CHECK (lighting_condition IN ('natural', 'indoor', 'flash', 'consistent_setup')),
    
    -- Photo Quality and Consistency (for better progress tracking)
    photo_quality_score INTEGER CHECK (photo_quality_score BETWEEN 1 AND 5), -- User self-assessment
    lighting_consistency BOOLEAN DEFAULT false, -- Whether lighting is consistent with previous photos
    angle_consistency BOOLEAN DEFAULT false,    -- Whether angle matches previous photos
    
    -- Notes and Context
    photo_notes TEXT,          -- User notes about this specific photo
    comparison_notes TEXT,     -- How this compares to previous photos
    
    -- Display properties
    sort_order INTEGER DEFAULT 0,
    is_featured BOOLEAN DEFAULT false, -- Featured photo for this week's progress
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- 🆕 Product Questions & Answers System (Enhanced)
CREATE TABLE product_questions (
    id SERIAL PRIMARY KEY,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    question TEXT NOT NULL,
    skin_type_context skin_type,
    age_range VARCHAR(20),     -- "25-30", "30-35", etc.
    skin_concerns_context TEXT[], -- Related skin concerns for context
    
    -- Question metadata
    is_answered BOOLEAN DEFAULT false,
    answer_count INTEGER DEFAULT 0,
    helpful_votes INTEGER DEFAULT 0,
    status feedback_status DEFAULT 'pending',
    
    -- AI Analysis and Categorization
    question_category VARCHAR(50), -- "ingredients", "usage", "results", "side_effects", "compatibility"
    urgency_level VARCHAR(10) DEFAULT 'normal' CHECK (urgency_level IN ('low', 'normal', 'high')),
    
    -- 🆕 Media Support for Questions (e.g., skin condition photos)
    has_media BOOLEAN DEFAULT false,
    media_count INTEGER DEFAULT 0,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 🆕 Question Media (for questions with photos/videos)
CREATE TABLE question_media (
    id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES product_questions(id) ON DELETE CASCADE,
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE CASCADE,
    
    -- Media context for questions
    media_purpose VARCHAR(30), -- 'skin_condition', 'current_routine', 'product_comparison', 'ingredient_check'
    description TEXT,          -- User description of what the media shows
    
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Product Question Answers (Enhanced)
CREATE TABLE product_answers (
    id SERIAL PRIMARY KEY,
    question_id INTEGER REFERENCES product_questions(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    answer TEXT NOT NULL,
    
    -- Answer quality and credibility
    is_from_verified_buyer BOOLEAN DEFAULT false,
    is_from_expert BOOLEAN DEFAULT false,
    expert_credentials TEXT,   -- Professional background if expert
    helpful_votes INTEGER DEFAULT 0,
    unhelpful_votes INTEGER DEFAULT 0,
    
    -- Answer verification
    is_verified_by_admin BOOLEAN DEFAULT false,
    verified_at TIMESTAMP,
    verified_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    verification_notes TEXT,
    
    -- 🆕 Media Support for Answers
    has_media BOOLEAN DEFAULT false,
    media_count INTEGER DEFAULT 0,
    
    status feedback_status DEFAULT 'pending',
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- 🆕 Answer Media (for answers with supporting photos/videos)
CREATE TABLE answer_media (
    id SERIAL PRIMARY KEY,
    answer_id INTEGER REFERENCES product_answers(id) ON DELETE CASCADE,
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE CASCADE,
    
    -- Media context for answers
    media_purpose VARCHAR(30), -- 'demonstration', 'comparison', 'result_example', 'application_technique'
    description TEXT,
    
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Product Feedback Forms (unchanged)
CREATE TABLE product_feedback_responses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    order_item_id INTEGER REFERENCES order_items(id) ON DELETE SET NULL,
    
    responses JSONB NOT NULL,
    overall_rating INTEGER CHECK (overall_rating BETWEEN 1 AND 5),
    
    allow_followup_contact BOOLEAN DEFAULT false,
    preferred_contact_method VARCHAR(20),
    processed_for_analytics BOOLEAN DEFAULT false,
    
    created_at TIMESTAMP DEFAULT NOW()
);

-- Wishlist Feedback (unchanged)
CREATE TABLE wishlist_feedback (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
    
    interest_reason TEXT,
    hesitation_reason TEXT,
    purchase_triggers JSONB,
    
    notify_on_sale BOOLEAN DEFAULT true,
    notify_on_reviews BOOLEAN DEFAULT true,
    notify_on_restock BOOLEAN DEFAULT true,
    
    created_at TIMESTAMP DEFAULT NOW(),
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
-- 7. 🆕 CONTENT MODERATION SYSTEM
-- =============================================

-- Content moderation queue (Enhanced for file content)
CREATE TABLE moderation_queue (
    id SERIAL PRIMARY KEY,
    content_type VARCHAR(50) NOT NULL, -- 'review', 'question', 'answer', 'progress_photo', 'review_photo', 'user_profile'
    content_id INTEGER NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    -- Content snapshot
    content_text TEXT,
    content_metadata JSONB,
    
    -- 🆕 File-specific moderation
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    contains_files BOOLEAN DEFAULT false,
    file_moderation_results JSONB, -- Results from image/video analysis
    
    -- Moderation flags and reasons
    flagged_reasons TEXT[], -- ['inappropriate_content', 'spam', 'medical_claims', 'inappropriate_image']
    auto_flagged BOOLEAN DEFAULT false,
    user_reported BOOLEAN DEFAULT false,
    reported_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    report_reason TEXT,
    
    -- AI Moderation Scores
    spam_probability DECIMAL(3,2) CHECK (spam_probability BETWEEN 0 AND 1),
    toxicity_score DECIMAL(3,2) CHECK (toxicity_score BETWEEN 0 AND 1),
    medical_claims_detected BOOLEAN DEFAULT false,
    inappropriate_content_detected BOOLEAN DEFAULT false,
    
    -- 🆕 Image/Video Moderation (for file content)
    nsfw_score DECIMAL(3,2) CHECK (nsfw_score BETWEEN 0 AND 1),
    violence_score DECIMAL(3,2) CHECK (violence_score BETWEEN 0 AND 1),
    has_faces BOOLEAN DEFAULT false,
    face_count INTEGER DEFAULT 0,
    image_quality_score DECIMAL(3,2),
    
    -- Review Status
    status moderation_status DEFAULT 'pending',
    reviewed_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    review_notes TEXT,
    reviewed_at TIMESTAMP,
    
    -- Priority and urgency
    priority_level INTEGER DEFAULT 3 CHECK (priority_level BETWEEN 1 AND 5), -- 1=highest, 5=lowest
    escalated BOOLEAN DEFAULT false,
    escalated_at TIMESTAMP,
    escalated_by INTEGER REFERENCES users(id) ON DELETE SET NULL,
    
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- =============================================
-- 8. 🆕 NOTIFICATION SYSTEM
-- =============================================

-- User notifications (Enhanced)
CREATE TABLE notifications (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    
    -- Notification content
    type VARCHAR(50) NOT NULL, -- 'review_response', 'question_answered', 'file_processed', 'moderation_result'
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    -- Rich notification data
    action_url VARCHAR(500),    -- URL to take action or view content
    thumbnail_url VARCHAR(500), -- Thumbnail for rich notifications
    action_buttons JSONB,       -- [{"text": "View", "url": "/reviews/123"}, {"text": "Dismiss", "action": "dismiss"}]
    
    -- Related content
    related_type VARCHAR(50),   -- 'product', 'review', 'question', 'file', 'order'
    related_id INTEGER,
    
    -- 🆕 File-related notifications
    file_id INTEGER REFERENCES uploaded_files(id) ON DELETE SET NULL,
    
    -- Notification metadata
    is_read BOOLEAN DEFAULT false,
    read_at TIMESTAMP,
    priority VARCHAR(10) DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
    
    -- Delivery preferences and status
    email_sent BOOLEAN DEFAULT false,
    email_sent_at TIMESTAMP,
    push_sent BOOLEAN DEFAULT false,
    push_sent_at TIMESTAMP,
    sms_sent BOOLEAN DEFAULT false,
    sms_sent_at TIMESTAMP,
    
    -- Notification lifecycle
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP,
    dismissed_at TIMESTAMP
);

-- =============================================
-- SEED FILE UPLOAD CONFIGURATIONS
-- =============================================

-- Insert file upload configurations
INSERT INTO file_upload_configs (
    context, description, max_file_size, allowed_mime_types, allowed_extensions, 
    max_width, max_height, min_width, min_height,
    max_files_per_upload, max_files_per_user, max_total_size_per_user,
    thumbnail_sizes, storage_path, require_virus_scan
) VALUES 
-- Profile pictures
('profile', 'User profile pictures and banners', 
 5242880, -- 5MB
 ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp'], 
 ARRAY['jpg', 'jpeg', 'png', 'gif', 'webp'], 
 2000, 2000, 100, 100, -- max_width, max_height, min_width, min_height
 2, 3, 52428800, -- max_files_per_upload, max_files_per_user, max_total_size (50MB)
 '{"small": [150, 150], "medium": [300, 300], "large": [600, 600]}', 
 'uploads/profiles/', true),

-- Product images  
('product', 'Product photos, videos, and media content', 
 20971520, -- 20MB
 ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'video/mp4', 'video/webm'], 
 ARRAY['jpg', 'jpeg', 'png', 'gif', 'webp', 'mp4', 'webm'], 
 4000, 4000, 300, 300,
 10, NULL, NULL, -- No user limits for product uploads (admin only)
 '{"thumbnail": [100, 100], "small": [300, 300], "medium": [600, 600], "large": [1200, 1200]}', 
 'uploads/products/', true),

-- Review photos (before/after skincare photos)
('review', 'Customer review photos and videos showing product results', 
 10485760, -- 10MB
 ARRAY['image/jpeg', 'image/png', 'image/webp'], 
 ARRAY['jpg', 'jpeg', 'png', 'webp'], 
 3000, 3000, 300, 300,
 8, 100, 209715200, -- 8 files per review, 100 total files, 200MB total
 '{"thumbnail": [150, 150], "small": [400, 400], "medium": [800, 800]}', 
 'uploads/reviews/', true),

-- Progress tracking photos
('progress', 'Skincare progress photos for tracking treatment results', 
 10485760, -- 10MB
 ARRAY['image/jpeg', 'image/png', 'image/webp'], 
 ARRAY['jpg', 'jpeg', 'png', 'webp'], 
 3000, 3000, 300, 300,
 5, 500, 524288000, -- 5 files per entry, 500 total, 500MB total (long-term tracking)
 '{"thumbnail": [150, 150], "small": [400, 400], "medium": [800, 800]}', 
 'uploads/progress/', true),

-- Q&A supporting media
('qa', 'Photos and videos for product questions and answers', 
 8388608, -- 8MB
 ARRAY['image/jpeg', 'image/png', 'image/webp', 'video/mp4'], 
 ARRAY['jpg', 'jpeg', 'png', 'webp', 'mp4'], 
 2500, 2500, 200, 200,
 3, 50, 104857600, -- 3 per Q/A, 50 total, 100MB total
 '{"thumbnail": [150, 150], "small": [300, 300]}', 
 'uploads/qa/', false);

-- =============================================
-- COMPREHENSIVE INDEXES FOR PERFORMANCE
-- =============================================

-- 🆕 File system indexes
CREATE INDEX idx_uploaded_files_upload_context ON uploaded_files(upload_context);
CREATE INDEX idx_uploaded_files_status ON uploaded_files(status) WHERE status = 'active';
CREATE INDEX idx_uploaded_files_uploaded_by ON uploaded_files(uploaded_by) WHERE uploaded_by IS NOT NULL;
CREATE INDEX idx_uploaded_files_related_entity ON uploaded_files(related_entity_type, related_entity_id) WHERE related_entity_type IS NOT NULL;
CREATE INDEX idx_uploaded_files_temporary ON uploaded_files(is_temporary, expires_at) WHERE is_temporary = true;
CREATE INDEX idx_uploaded_files_virus_scan ON uploaded_files(virus_scan_status) WHERE virus_scan_status = 'pending';
CREATE INDEX idx_uploaded_files_content_hash ON uploaded_files(content_hash) WHERE content_hash IS NOT NULL;
CREATE INDEX idx_uploaded_files_created_at ON uploaded_files(created_at);
CREATE INDEX idx_uploaded_files_cloud_provider ON uploaded_files(cloud_provider) WHERE cloud_provider IS NOT NULL;

-- User indexes (Enhanced)
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);
CREATE INDEX idx_users_skin_type ON users(skin_type);
CREATE INDEX idx_users_community_score ON users(community_score DESC) WHERE community_score > 0;
CREATE INDEX idx_users_profile_picture_file ON users(profile_picture_file_id) WHERE profile_picture_file_id IS NOT NULL;
CREATE INDEX idx_users_password_reset_token ON users(password_reset_token) WHERE password_reset_token IS NOT NULL;
CREATE INDEX idx_users_email_verification ON users(email_verification_token) WHERE email_verification_token IS NOT NULL;
CREATE INDEX idx_users_storage_usage ON users(storage_used DESC) WHERE storage_used > 0;

-- Product indexes (Enhanced)
CREATE INDEX idx_products_status ON products(status) WHERE status = 'active';
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_skin_type ON products(skin_type);
CREATE INDEX idx_products_skin_concerns ON products USING GIN(skin_concerns);
CREATE INDEX idx_products_featured ON products(is_featured) WHERE is_featured = true;
CREATE INDEX idx_products_avg_rating ON products(avg_rating DESC) WHERE avg_rating > 0;
CREATE INDEX idx_products_total_sales ON products(total_sales DESC) WHERE total_sales > 0;
CREATE INDEX idx_products_main_image_file ON products(main_image_file_id) WHERE main_image_file_id IS NOT NULL;
CREATE INDEX idx_products_price_range ON products(price) WHERE status = 'active';

-- 🆕 Product media indexes
CREATE INDEX idx_product_media_product_id ON product_media(product_id);
CREATE INDEX idx_product_media_file_id ON product_media(file_id);
CREATE INDEX idx_product_media_purpose ON product_media(media_purpose);
CREATE INDEX idx_product_media_sort_order ON product_media(product_id, sort_order);

-- Category indexes (Enhanced)
CREATE INDEX idx_categories_parent_id ON categories(parent_id) WHERE parent_id IS NOT NULL;
CREATE INDEX idx_categories_active ON categories(is_active) WHERE is_active = true;
CREATE INDEX idx_categories_sort_order ON categories(sort_order);
CREATE INDEX idx_categories_image_file ON categories(image_file_id) WHERE image_file_id IS NOT NULL;

-- Order indexes (Critical for ML training)
CREATE INDEX idx_orders_user_id ON orders(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_orders_payment_status ON orders(payment_status);

-- Order items indexes (Critical for collaborative filtering)
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_product_id ON order_items(product_id);
CREATE INDEX idx_order_items_user_product ON order_items(order_id, product_id);

-- 🆕 Enhanced Review indexes (Critical for feedback analytics)
CREATE INDEX idx_product_reviews_product_id ON product_reviews(product_id);
CREATE INDEX idx_product_reviews_user_id ON product_reviews(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_product_reviews_status ON product_reviews(status) WHERE status = 'approved';
CREATE INDEX idx_product_reviews_rating ON product_reviews(rating);
CREATE INDEX idx_product_reviews_skin_type ON product_reviews(skin_type_at_review) WHERE skin_type_at_review IS NOT NULL;
CREATE INDEX idx_product_reviews_verified ON product_reviews(is_verified_purchase) WHERE is_verified_purchase = true;
CREATE INDEX idx_product_reviews_visible_results ON product_reviews(visible_results) WHERE visible_results = true;
CREATE INDEX idx_product_reviews_sentiment ON product_reviews(sentiment_score) WHERE sentiment_score IS NOT NULL;
CREATE INDEX idx_product_reviews_has_media ON product_reviews(has_photos, has_video) WHERE has_photos = true OR has_video = true;
CREATE INDEX idx_product_reviews_helpful ON product_reviews(helpful_votes_count DESC) WHERE helpful_votes_count > 0;

-- 🆕 Review media indexes
CREATE INDEX idx_review_media_review_id ON review_media(review_id);
CREATE INDEX idx_review_media_file_id ON review_media(file_id);
CREATE INDEX idx_review_media_photo_type ON review_media(photo_type) WHERE photo_type IS NOT NULL;
CREATE INDEX idx_review_media_timeline ON review_media(timeline_context) WHERE timeline_context IS NOT NULL;
CREATE INDEX idx_review_media_featured ON review_media(is_featured) WHERE is_featured = true;

-- 🆕 Progress tracking indexes
CREATE INDEX idx_skincare_progress_user_product ON skincare_progress(user_id, product_id);
CREATE INDEX idx_skincare_progress_week ON skincare_progress(week_number);
CREATE INDEX idx_skincare_progress_satisfaction ON skincare_progress(overall_satisfaction) WHERE overall_satisfaction IS NOT NULL;
CREATE INDEX idx_skincare_progress_status ON skincare_progress(status);
CREATE INDEX idx_skincare_progress_has_photos ON skincare_progress(has_photos) WHERE has_photos = true;

-- 🆕 Progress media indexes
CREATE INDEX idx_progress_media_progress_id ON progress_media(progress_id);
CREATE INDEX idx_progress_media_file_id ON progress_media(file_id);
CREATE INDEX idx_progress_media_photo_type ON progress_media(photo_type);
CREATE INDEX idx_progress_media_featured ON progress_media(is_featured) WHERE is_featured = true;

-- 🆕 Q&A System indexes
CREATE INDEX idx_product_questions_product_id ON product_questions(product_id);
CREATE INDEX idx_product_questions_user_id ON product_questions(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_product_questions_status ON product_questions(status) WHERE status = 'approved';
CREATE INDEX idx_product_questions_answered ON product_questions(is_answered);
CREATE INDEX idx_product_questions_category ON product_questions(question_category) WHERE question_category IS NOT NULL;
CREATE INDEX idx_product_questions_has_media ON product_questions(has_media) WHERE has_media = true;

CREATE INDEX idx_product_answers_question_id ON product_answers(question_id);
CREATE INDEX idx_product_answers_user_id ON product_answers(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_product_answers_expert ON product_answers(is_from_expert) WHERE is_from_expert = true;
CREATE INDEX idx_product_answers_verified ON product_answers(is_verified_by_admin) WHERE is_verified_by_admin = true;
CREATE INDEX idx_product_answers_helpful ON product_answers(helpful_votes DESC) WHERE helpful_votes > 0;

-- 🆕 Q&A Media indexes
CREATE INDEX idx_question_media_question_id ON question_media(question_id);
CREATE INDEX idx_question_media_file_id ON question_media(file_id);
CREATE INDEX idx_answer_media_answer_id ON answer_media(answer_id);
CREATE INDEX idx_answer_media_file_id ON answer_media(file_id);

-- Review votes indexes
CREATE INDEX idx_review_votes_review_id ON review_votes(review_id);
CREATE INDEX idx_review_votes_user_id ON review_votes(user_id);
CREATE INDEX idx_review_votes_vote_type ON review_votes(vote_type);

-- Coupon indexes
CREATE INDEX idx_coupons_code ON coupons(code);
CREATE INDEX idx_coupons_status ON coupons(status) WHERE status = 'active';
CREATE INDEX idx_coupons_dates ON coupons(start_date, end_date) WHERE status = 'active';
CREATE INDEX idx_coupon_usage_coupon_id ON coupon_usage(coupon_id);
CREATE INDEX idx_coupon_usage_user_id ON coupon_usage(user_id) WHERE user_id IS NOT NULL;

-- Shopping cart indexes
CREATE INDEX idx_shopping_cart_user_id ON shopping_cart(user_id);
CREATE INDEX idx_shopping_cart_product_id ON shopping_cart(product_id);
CREATE INDEX idx_shopping_cart_updated_at ON shopping_cart(updated_at);

-- Wishlist indexes
CREATE INDEX idx_wishlists_user_id ON wishlists(user_id);
CREATE INDEX idx_wishlists_product_id ON wishlists(product_id);

-- 🆕 Moderation system indexes
CREATE INDEX idx_moderation_queue_status ON moderation_queue(status) WHERE status = 'pending';
CREATE INDEX idx_moderation_queue_content_type ON moderation_queue(content_type);
CREATE INDEX idx_moderation_queue_user_id ON moderation_queue(user_id) WHERE user_id IS NOT NULL;
CREATE INDEX idx_moderation_queue_auto_flagged ON moderation_queue(auto_flagged) WHERE auto_flagged = true;
CREATE INDEX idx_moderation_queue_file_id ON moderation_queue(file_id) WHERE file_id IS NOT NULL;
CREATE INDEX idx_moderation_queue_priority ON moderation_queue(priority_level, created_at);
CREATE INDEX idx_moderation_queue_escalated ON moderation_queue(escalated) WHERE escalated = true;

-- 🆕 Notification indexes
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_unread ON notifications(user_id, is_read, created_at DESC) WHERE is_read = false;
CREATE INDEX idx_notifications_type ON notifications(type);
CREATE INDEX idx_notifications_priority ON notifications(priority, created_at DESC) WHERE priority IN ('high', 'urgent');
CREATE INDEX idx_notifications_expires ON notifications(expires_at) WHERE expires_at IS NOT NULL AND expires_at > NOW();
CREATE INDEX idx_notifications_file_id ON notifications(file_id) WHERE file_id IS NOT NULL;

-- =============================================
-- ADDITIONAL CONSTRAINTS & VALIDATIONS
-- =============================================

-- Email format validation
ALTER TABLE users ADD CONSTRAINT valid_email 
CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,});

-- File upload constraints
ALTER TABLE uploaded_files ADD CONSTRAINT valid_file_extension 
CHECK (
    CASE 
        WHEN mime_type LIKE 'image/%' THEN file_extension IN ('jpg', 'jpeg', 'png', 'gif', 'webp', 'svg')
        WHEN mime_type LIKE 'video/%' THEN file_extension IN ('mp4', 'mov', 'avi', 'webm', 'mkv')
        WHEN mime_type LIKE 'audio/%' THEN file_extension IN ('mp3', 'wav', 'ogg', 'm4a')
        ELSE true -- Allow other types
    END
);

-- Review media constraints
ALTER TABLE review_media ADD CONSTRAINT valid_photo_type_for_media 
CHECK (
    (media_type = 'photo' AND photo_type IS NOT NULL) OR
    (media_type = 'video' AND photo_type IS NULL)
);

-- Progress constraints
ALTER TABLE skincare_progress ADD CONSTRAINT valid_progress_date 
CHECK (progress_date <= CURRENT_DATE);

-- Notification constraints
ALTER TABLE notifications ADD CONSTRAINT valid_notification_expiry 
CHECK (expires_at IS NULL OR expires_at > created_at);

-- =============================================
-- DATABASE FUNCTIONS & TRIGGERS
-- =============================================

-- 🆕 Function to update user storage usage
CREATE OR REPLACE FUNCTION update_user_storage()
RETURNS TRIGGER AS $
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE users 
        SET storage_used = storage_used + NEW.file_size,
            files_uploaded = files_uploaded + 1
        WHERE id = NEW.uploaded_by;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE users 
        SET storage_used = GREATEST(0, storage_used - OLD.file_size),
            files_uploaded = GREATEST(0, files_uploaded - 1)
        WHERE id = OLD.uploaded_by;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$ LANGUAGE plpgsql;

-- Trigger for user storage tracking
CREATE TRIGGER trigger_update_user_storage
    AFTER INSERT OR DELETE ON uploaded_files
    FOR EACH ROW EXECUTE FUNCTION update_user_storage();

-- 🆕 Function to update review media count
CREATE OR REPLACE FUNCTION update_review_media_count()
RETURNS TRIGGER AS $
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE product_reviews 
        SET media_count = media_count + 1,
            has_photos = CASE WHEN NEW.media_type = 'photo' THEN true ELSE has_photos END,
            has_video = CASE WHEN NEW.media_type = 'video' THEN true ELSE has_video END
        WHERE id = NEW.review_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE product_reviews 
        SET media_count = GREATEST(0, media_count - 1)
        WHERE id = OLD.review_id;
        
        -- Update has_photos and has_video flags
        UPDATE product_reviews 
        SET has_photos = EXISTS(SELECT 1 FROM review_media rm WHERE rm.review_id = OLD.review_id AND rm.media_type = 'photo'),
            has_video = EXISTS(SELECT 1 FROM review_media rm WHERE rm.review_id = OLD.review_id AND rm.media_type = 'video')
        WHERE id = OLD.review_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$ LANGUAGE plpgsql;

-- Trigger for review media count
CREATE TRIGGER trigger_update_review_media_count
    AFTER INSERT OR DELETE ON review_media
    FOR EACH ROW EXECUTE FUNCTION update_review_media_count();

-- 🆕 Function to update progress photo count
CREATE OR REPLACE FUNCTION update_progress_photo_count()
RETURNS TRIGGER AS $
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE skincare_progress 
        SET photo_count = photo_count + 1,
            has_photos = true
        WHERE id = NEW.progress_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE skincare_progress 
        SET photo_count = GREATEST(0, photo_count - 1)
        WHERE id = OLD.progress_id;
        
        -- Update has_photos flag
        UPDATE skincare_progress 
        SET has_photos = EXISTS(SELECT 1 FROM progress_media pm WHERE pm.progress_id = OLD.progress_id)
        WHERE id = OLD.progress_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$ LANGUAGE plpgsql;

-- Trigger for progress photo count
CREATE TRIGGER trigger_update_progress_photo_count
    AFTER INSERT OR DELETE ON progress_media
    FOR EACH ROW EXECUTE FUNCTION update_progress_photo_count();

-- 🆕 Function to clean up expired temporary files
CREATE OR REPLACE FUNCTION cleanup_expired_files()
RETURNS INTEGER AS $
DECLARE
    deleted_count INTEGER;
BEGIN
    -- Mark expired temporary files as deleted
    UPDATE uploaded_files 
    SET status = 'deleted',
        deleted_at = NOW()
    WHERE is_temporary = true 
      AND expires_at < NOW()
      AND status != 'deleted';
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    
    RETURN deleted_count;
END;
$ LANGUAGE plpgsql;

-- =============================================
-- ML-OPTIMIZED VIEWS (Enhanced with File Support)
-- =============================================

-- 🆕 Comprehensive User Purchase Behavior with Media Engagement
CREATE VIEW user_purchase_matrix AS
SELECT 
    u.id as user_id,
    u.skin_type,
    u.date_of_birth,
    EXTRACT(YEAR FROM AGE(u.date_of_birth)) as age,
    u.community_score,
    u.files_uploaded,
    u.storage_used,
    
    oi.product_id,
    p.category,
    p.skin_type as product_skin_type,
    p.skin_concerns,
    p.price,
    
    -- Purchase behavior
    COUNT(oi.id) as purchase_count,
    SUM(oi.quantity) as total_quantity,
    AVG(oi.unit_price) as avg_price,
    MAX(o.created_at) as last_purchase_date,
    MIN(o.created_at) as first_purchase_date,
    
    -- Review engagement with media
    COUNT(pr.id) as reviews_written,
    AVG(pr.rating) as avg_rating_given,
    AVG(CASE WHEN pr.visible_results THEN 1 ELSE 0 END) as results_rate,
    COUNT(CASE WHEN pr.has_photos THEN 1 END) as reviews_with_photos,
    COUNT(CASE WHEN pr.has_video THEN 1 END) as reviews_with_video,
    
    -- Progress tracking engagement
    COUNT(sp.id) as progress_entries,
    COUNT(CASE WHEN sp.has_photos THEN 1 END) as progress_with_photos,
    
    -- Q&A engagement
    COUNT(pq.id) as questions_asked,
    COUNT(CASE WHEN pq.has_media THEN 1 END) as questions_with_media
    
FROM users u
JOIN orders o ON u.id = o.user_id
JOIN order_items oi ON o.id = oi.order_id  
JOIN products p ON oi.product_id = p.id
LEFT JOIN product_reviews pr ON u.id = pr.user_id AND p.id = pr.product_id
LEFT JOIN skincare_progress sp ON u.id = sp.user_id AND p.id = sp.product_id
LEFT JOIN product_questions pq ON u.id = pq.user_id AND p.id = pq.product_id
WHERE o.status IN ('delivered', 'confirmed')
GROUP BY u.id, u.skin_type, u.date_of_birth, u.community_score, u.files_uploaded, u.storage_used,
         oi.product_id, p.category, p.skin_type, p.skin_concerns, p.price;

-- 🆕 Enhanced Product Rating Summary with Media Analysis
CREATE VIEW product_rating_summary AS
SELECT 
    p.id as product_id,
    p.category,
    p.skin_type,
    p.skin_concerns,
    p.price,
    p.key_benefits,
    
    -- Basic review stats
    COUNT(pr.id) as review_count,
    AVG(pr.rating) as avg_rating,
    COUNT(DISTINCT pr.user_id) as unique_reviewers,
    
    -- Media engagement stats
    COUNT(CASE WHEN pr.has_photos THEN 1 END) as reviews_with_photos,
    COUNT(CASE WHEN pr.has_video THEN 1 END) as reviews_with_video,
    AVG(pr.media_count) as avg_media_per_review,
    
    -- Before/after photo analysis
    COUNT(CASE WHEN EXISTS(
        SELECT 1 FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.photo_type = 'before'
    ) THEN 1 END) as reviews_with_before_photos,
    COUNT(CASE WHEN EXISTS(
        SELECT 1 FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.photo_type = 'after'
    ) THEN 1 END) as reviews_with_after_photos,
    
    -- Detailed rating breakdown
    AVG(pr.effectiveness_rating) as avg_effectiveness,
    AVG(pr.texture_rating) as avg_texture,
    AVG(pr.scent_rating) as avg_scent,
    AVG(pr.packaging_rating) as avg_packaging,
    AVG(pr.value_for_money_rating) as avg_value,
    
    -- Skin type performance with media
    COUNT(CASE WHEN pr.skin_type_at_review = 'acne' THEN 1 END) as acne_reviews,
    AVG(CASE WHEN pr.skin_type_at_review = 'acne' THEN pr.rating END) as acne_avg_rating,
    COUNT(CASE WHEN pr.skin_type_at_review = 'acne' AND pr.has_photos THEN 1 END) as acne_reviews_with_photos,
    
    -- Results and recommendations
    AVG(CASE WHEN pr.visible_results THEN 1 ELSE 0 END) as results_rate,
    AVG(CASE WHEN pr.would_recommend THEN 1 ELSE 0 END) as recommendation_rate,
    
    -- Sentiment analysis
    AVG(pr.sentiment_score) as avg_sentiment,
    COUNT(CASE WHEN pr.sentiment_label = 'positive' THEN 1 END) as positive_reviews,
    COUNT(CASE WHEN pr.sentiment_label = 'negative' THEN 1 END) as negative_reviews,
    
    -- Progress tracking with photos
    COUNT(DISTINCT sp.user_id) as users_tracking_progress,
    AVG(sp.overall_satisfaction) as avg_progress_satisfaction,
    COUNT(CASE WHEN sp.has_photos THEN 1 END) as progress_entries_with_photos,
    AVG(CASE WHEN sp.acne_reduced THEN 1 ELSE 0 END) as acne_improvement_rate
    
FROM products p
LEFT JOIN product_reviews pr ON p.id = pr.product_id AND pr.status = 'approved'
LEFT JOIN skincare_progress sp ON p.id = sp.product_id
WHERE p.status = 'active'
GROUP BY p.id, p.category, p.skin_type, p.skin_concerns, p.price, p.key_benefits;

-- 🆕 File Usage and Storage Summary
CREATE VIEW file_usage_summary AS
SELECT 
    uf.upload_context,
    COUNT(*) as total_files,
    COUNT(DISTINCT uf.uploaded_by) as unique_users,
    SUM(uf.file_size) as total_storage,
    AVG(uf.file_size) as avg_file_size,
    COUNT(CASE WHEN uf.status = 'active' THEN 1 END) as active_files,
    COUNT(CASE WHEN uf.is_temporary THEN 1 END) as temporary_files,
    COUNT(CASE WHEN uf.virus_scan_status = 'clean' THEN 1 END) as clean_files,
    COUNT(CASE WHEN uf.media_type = 'image' THEN 1 END) as image_files,
    COUNT(CASE WHEN uf.media_type = 'video' THEN 1 END) as video_files,
    
    -- Storage efficiency metrics
    ROUND(AVG(uf.file_size)::numeric / 1024 / 1024, 2) as avg_size_mb,
    ROUND(SUM(uf.file_size)::numeric / 1024 / 1024 / 1024, 2) as total_size_gb,
    
    -- Upload patterns
    DATE_TRUNC('month', MAX(uf.created_at)) as last_upload_month,
    COUNT(CASE WHEN uf.created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as uploads_last_30_days,
    
    -- Processing metrics
    AVG(EXTRACT(EPOCH FROM (uf.processed_at - uf.created_at))) as avg_processing_time_seconds,
    COUNT(CASE WHEN uf.processing_error IS NOT NULL THEN 1 END) as failed_processing_count
    
FROM uploaded_files uf
WHERE uf.deleted_at IS NULL
GROUP BY uf.upload_context
ORDER BY total_storage DESC;

-- 🆕 User Engagement with Media Content
CREATE VIEW user_media_engagement AS
SELECT 
    u.id as user_id,
    u.email,
    u.skin_type,
    u.community_score,
    
    -- File upload activity
    COUNT(uf.id) as total_files_uploaded,
    SUM(uf.file_size) as total_storage_used,
    COUNT(CASE WHEN uf.upload_context = 'profile' THEN 1 END) as profile_files,
    COUNT(CASE WHEN uf.upload_context = 'review' THEN 1 END) as review_files,
    COUNT(CASE WHEN uf.upload_context = 'progress' THEN 1 END) as progress_files,
    COUNT(CASE WHEN uf.upload_context = 'qa' THEN 1 END) as qa_files,
    
    -- Review engagement with media
    COUNT(pr.id) as total_reviews,
    COUNT(CASE WHEN pr.has_photos THEN 1 END) as reviews_with_photos,
    COUNT(CASE WHEN pr.has_video THEN 1 END) as reviews_with_videos,
    AVG(pr.media_count) as avg_media_per_review,
    
    -- Progress tracking with photos
    COUNT(sp.id) as progress_entries,
    COUNT(CASE WHEN sp.has_photos THEN 1 END) as progress_with_photos,
    AVG(sp.photo_count) as avg_photos_per_progress,
    
    -- Q&A with media
    COUNT(pq.id) as questions_asked,
    COUNT(CASE WHEN pq.has_media THEN 1 END) as questions_with_media,
    COUNT(pa.id) as answers_provided,
    COUNT(CASE WHEN pa.has_media THEN 1 END) as answers_with_media,
    
    -- Engagement quality metrics
    COALESCE(AVG(pr.helpful_votes_count), 0) as avg_helpful_votes_per_review,
    COALESCE(SUM(pr.helpful_votes_count), 0) as total_helpful_votes_received,
    
    -- Media engagement score (weighted)
    (
        COUNT(CASE WHEN pr.has_photos THEN 1 END) * 2 + 
        COUNT(CASE WHEN pr.has_video THEN 1 END) * 3 + 
        COUNT(CASE WHEN sp.has_photos THEN 1 END) * 1.5 +
        COUNT(CASE WHEN pq.has_media THEN 1 END) * 1 +
        COUNT(CASE WHEN pa.has_media THEN 1 END) * 1.5
    ) as media_engagement_score,
    
    -- Activity timeline
    MAX(uf.created_at) as last_upload_date,
    MAX(pr.created_at) as last_review_date,
    MAX(sp.created_at) as last_progress_date
    
FROM users u
LEFT JOIN uploaded_files uf ON u.id = uf.uploaded_by AND uf.deleted_at IS NULL
LEFT JOIN product_reviews pr ON u.id = pr.user_id
LEFT JOIN skincare_progress sp ON u.id = sp.user_id
LEFT JOIN product_questions pq ON u.id = pq.user_id
LEFT JOIN product_answers pa ON u.id = pa.user_id
GROUP BY u.id, u.email, u.skin_type, u.community_score
HAVING COUNT(uf.id) > 0 OR COUNT(pr.id) > 0 OR COUNT(sp.id) > 0 OR COUNT(pq.id) > 0 OR COUNT(pa.id) > 0
ORDER BY media_engagement_score DESC;

-- 🆕 Product Visual Content Summary
CREATE VIEW product_visual_content_summary AS
SELECT 
    p.id as product_id,
    p.name_en as product_name,
    p.category,
    p.skin_type as target_skin_type,
    
    -- Official product media
    COUNT(pm.id) as official_media_count,
    COUNT(CASE WHEN pm.media_purpose = 'main' THEN 1 END) as main_images,
    COUNT(CASE WHEN pm.media_purpose = 'gallery' THEN 1 END) as gallery_images,
    COUNT(CASE WHEN pm.media_purpose = 'instruction' THEN 1 END) as instruction_media,
    
    -- User-generated content from reviews
    COUNT(CASE WHEN pr.has_photos THEN 1 END) as reviews_with_photos,
    COUNT(CASE WHEN pr.has_video THEN 1 END) as reviews_with_videos,
    SUM(pr.media_count) as total_review_media,
    
    -- Before/after photo analysis
    COUNT(CASE WHEN EXISTS(
        SELECT 1 FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.photo_type = 'before'
    ) THEN 1 END) as before_photos_count,
    COUNT(CASE WHEN EXISTS(
        SELECT 1 FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.photo_type = 'after'
    ) THEN 1 END) as after_photos_count,
    
    -- Progress tracking photos
    COUNT(DISTINCT sp.user_id) as users_with_progress_photos,
    COALESCE(SUM(sp.photo_count), 0) as total_progress_photos,
    
    -- Timeline analysis of visual results
    AVG(CASE WHEN EXISTS(
        SELECT 1 FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.days_of_usage IS NOT NULL
    ) THEN (
        SELECT AVG(rm.days_of_usage) 
        FROM review_media rm 
        WHERE rm.review_id = pr.id AND rm.days_of_usage IS NOT NULL
    ) END) as avg_days_to_visible_results,
    
    -- Visual content engagement
    AVG(pr.helpful_votes_count) as avg_helpful_votes_visual_reviews,
    
    -- Content quality indicators
    COUNT(CASE WHEN rm.lighting_condition = 'natural' THEN 1 END) as natural_lighting_photos,
    COUNT(CASE WHEN rm.timeline_context IS NOT NULL THEN 1 END) as timeline_documented_photos,
    
    -- Skin type specific visual results
    COUNT(CASE WHEN pr.skin_type_at_review = 'acne' AND pr.has_photos THEN 1 END) as acne_visual_reviews,
    COUNT(CASE WHEN pr.skin_type_at_review = 'dry' AND pr.has_photos THEN 1 END) as dry_skin_visual_reviews,
    COUNT(CASE WHEN pr.skin_type_at_review = 'oily' AND pr.has_photos THEN 1 END) as oily_skin_visual_reviews,
    
    -- Visual content recency
    MAX(rm.created_at) as last_visual_content_date,
    COUNT(CASE WHEN rm.created_at >= NOW() - INTERVAL '30 days' THEN 1 END) as recent_visual_content
    
FROM products p
LEFT JOIN product_media pm ON p.id = pm.product_id
LEFT JOIN product_reviews pr ON p.id = pr.product_id AND pr.status = 'approved'
LEFT JOIN review_media rm ON pr.id = rm.review_id
LEFT JOIN skincare_progress sp ON p.id = sp.product_id AND sp.has_photos = true
WHERE p.status = 'active'
GROUP BY p.id, p.name_en, p.category, p.skin_type
ORDER BY total_review_media DESC, official_media_count DESC;

-- 🆕 Moderation Queue Summary with File Analysis
CREATE VIEW moderation_queue_summary AS
SELECT 
    mq.content_type,
    mq.status,
    COUNT(*) as queue_count,
    COUNT(CASE WHEN mq.contains_files THEN 1 END) as items_with_files,
    COUNT(CASE WHEN mq.auto_flagged THEN 1 END) as auto_flagged_count,
    COUNT(CASE WHEN mq.user_reported THEN 1 END) as user_reported_count,
    
    -- Priority distribution
    COUNT(CASE WHEN mq.priority_level = 1 THEN 1 END) as critical_priority,
    COUNT(CASE WHEN mq.priority_level = 2 THEN 1 END) as high_priority,
    COUNT(CASE WHEN mq.priority_level = 3 THEN 1 END) as normal_priority,
    COUNT(CASE WHEN mq.priority_level = 4 THEN 1 END) as low_priority,
    
    -- AI moderation insights
    AVG(mq.spam_probability) as avg_spam_score,
    AVG(mq.toxicity_score) as avg_toxicity_score,
    AVG(mq.nsfw_score) as avg_nsfw_score,
    COUNT(CASE WHEN mq.medical_claims_detected THEN 1 END) as medical_claims_count,
    COUNT(CASE WHEN mq.inappropriate_content_detected THEN 1 END) as inappropriate_content_count,
    
    -- Processing time analysis
    AVG(EXTRACT(EPOCH FROM (mq.reviewed_at - mq.created_at))) as avg_review_time_seconds,
    COUNT(CASE WHEN mq.escalated THEN 1 END) as escalated_count,
    
    -- Recent activity
    COUNT(CASE WHEN mq.created_at >= NOW() - INTERVAL '24 hours' THEN 1 END) as items_last_24h,
    COUNT(CASE WHEN mq.created_at >= NOW() - INTERVAL '7 days' THEN 1 END) as items_last_7_days,
    
    -- Oldest pending item
    MIN(CASE WHEN mq.status = 'pending' THEN mq.created_at END) as oldest_pending_date
    
FROM moderation_queue mq
GROUP BY mq.content_type, mq.status
ORDER BY mq.content_type, 
         CASE mq.status 
             WHEN 'pending' THEN 1 
             WHEN 'needs_review' THEN 2 
             WHEN 'approved' THEN 3 
             WHEN 'rejected' THEN 4 
         END;

-- =============================================
-- UTILITY FUNCTIONS AND MAINTENANCE
-- =============================================

-- 🆕 Function to get user storage quota and usage
CREATE OR REPLACE FUNCTION get_user_storage_info(user_id_param INTEGER)
RETURNS TABLE(
    user_id INTEGER,
    total_files INTEGER,
    total_storage_bytes BIGINT,
    total_storage_mb NUMERIC,
    profile_files INTEGER,
    review_files INTEGER,
    progress_files INTEGER,
    qa_files INTEGER,
    quota_mb NUMERIC,
    quota_percentage NUMERIC,
    storage_warning BOOLEAN
) AS $
BEGIN
    RETURN QUERY
    SELECT 
        u.id as user_id,
        u.files_uploaded as total_files,
        u.storage_used as total_storage_bytes,
        ROUND(u.storage_used::numeric / 1024 / 1024, 2) as total_storage_mb,
        
        COUNT(CASE WHEN uf.upload_context = 'profile' THEN 1 END)::INTEGER as profile_files,
        COUNT(CASE WHEN uf.upload_context = 'review' THEN 1 END)::INTEGER as review_files,
        COUNT(CASE WHEN uf.upload_context = 'progress' THEN 1 END)::INTEGER as progress_files,
        COUNT(CASE WHEN uf.upload_context = 'qa' THEN 1 END)::INTEGER as qa_files,
        
        -- Calculate quota based on user role (example quotas)
        CASE 
            WHEN u.role = 'expert' THEN 1000.0  -- 1GB for experts
            WHEN u.role = 'customer' AND u.community_score > 100 THEN 500.0  -- 500MB for active users
            ELSE 200.0  -- 200MB for regular users
        END as quota_mb,
        
        ROUND(
            (u.storage_used::numeric / 1024 / 1024) / 
            CASE 
                WHEN u.role = 'expert' THEN 1000.0
                WHEN u.role = 'customer' AND u.community_score > 100 THEN 500.0
                ELSE 200.0
            END * 100, 2
        ) as quota_percentage,
        
        -- Warning if over 80% of quota
        (u.storage_used::numeric / 1024 / 1024) / 
        CASE 
            WHEN u.role = 'expert' THEN 1000.0
            WHEN u.role = 'customer' AND u.community_score > 100 THEN 500.0
            ELSE 200.0
        END > 0.8 as storage_warning
        
    FROM users u
    LEFT JOIN uploaded_files uf ON u.id = uf.uploaded_by AND uf.deleted_at IS NULL
    WHERE u.id = user_id_param
    GROUP BY u.id, u.files_uploaded, u.storage_used, u.role, u.community_score;
END;
$ LANGUAGE plpgsql;

-- 🆕 Function to cleanup and optimize file storage
CREATE OR REPLACE FUNCTION cleanup_file_storage()
RETURNS TABLE(
    action VARCHAR,
    count INTEGER,
    storage_freed_mb NUMERIC
) AS $
DECLARE
    expired_files_freed BIGINT := 0;
    orphaned_files_freed BIGINT := 0;
    duplicate_files_freed BIGINT := 0;
BEGIN
    -- Clean up expired temporary files
    WITH expired_cleanup AS (
        UPDATE uploaded_files 
        SET status = 'deleted', deleted_at = NOW()
        WHERE is_temporary = true 
          AND expires_at < NOW() 
          AND status != 'deleted'
        RETURNING file_size
    )
    SELECT COALESCE(SUM(file_size), 0) INTO expired_files_freed FROM expired_cleanup;
    
    -- Find and mark orphaned files (files not referenced by any content)
    WITH orphaned_cleanup AS (
        UPDATE uploaded_files 
        SET status = 'deleted', deleted_at = NOW()
        WHERE status = 'active'
          AND NOT EXISTS (
              SELECT 1 FROM product_media pm WHERE pm.file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM review_media rm WHERE rm.file_id = uploaded_files.id
              UNION ALL  
              SELECT 1 FROM progress_media pgm WHERE pgm.file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM question_media qm WHERE qm.file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM answer_media am WHERE am.file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM users u WHERE u.profile_picture_file_id = uploaded_files.id OR u.profile_banner_file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM categories c WHERE c.image_file_id = uploaded_files.id OR c.banner_file_id = uploaded_files.id
              UNION ALL
              SELECT 1 FROM products p WHERE p.main_image_file_id = uploaded_files.id
          )
          AND created_at < NOW() - INTERVAL '7 days'  -- Only cleanup files older than 7 days
        RETURNING file_size
    )
    SELECT COALESCE(SUM(file_size), 0) INTO orphaned_files_freed FROM orphaned_cleanup;
    
    -- Return cleanup summary
    RETURN QUERY
    SELECT 'expired_files'::VARCHAR, 
           (SELECT COUNT(*) FROM uploaded_files WHERE status = 'deleted' AND deleted_at >= NOW() - INTERVAL '1 minute')::INTEGER,
           ROUND(expired_files_freed::numeric / 1024 / 1024, 2)
    UNION ALL
    SELECT 'orphaned_files'::VARCHAR, 
           (SELECT COUNT(*) FROM uploaded_files WHERE status = 'deleted' AND deleted_at >= NOW() - INTERVAL '1 minute')::INTEGER - 
           (SELECT COUNT(*) FROM uploaded_files WHERE status = 'deleted' AND deleted_at >= NOW() - INTERVAL '1 minute' AND is_temporary = true)::INTEGER,
           ROUND(orphaned_files_freed::numeric / 1024 / 1024, 2);
END;
$ LANGUAGE plpgsql;

-- 🆕 Function to generate file analytics report
CREATE OR REPLACE FUNCTION generate_file_analytics_report()
RETURNS TABLE(
    metric VARCHAR,
    value NUMERIC,
    unit VARCHAR,
    category VARCHAR
) AS $
BEGIN
    RETURN QUERY
    -- Storage metrics
    SELECT 'total_files'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'storage'::VARCHAR
    FROM uploaded_files WHERE deleted_at IS NULL
    UNION ALL
    SELECT 'total_storage_gb'::VARCHAR, ROUND(SUM(file_size)::NUMERIC / 1024 / 1024 / 1024, 2), 'GB'::VARCHAR, 'storage'::VARCHAR
    FROM uploaded_files WHERE deleted_at IS NULL
    UNION ALL
    SELECT 'active_users_with_files'::VARCHAR, COUNT(DISTINCT uploaded_by)::NUMERIC, 'users'::VARCHAR, 'engagement'::VARCHAR
    FROM uploaded_files WHERE deleted_at IS NULL AND uploaded_by IS NOT NULL
    UNION ALL
    -- File type distribution
    SELECT 'image_files'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'content_type'::VARCHAR
    FROM uploaded_files WHERE media_type = 'image' AND deleted_at IS NULL
    UNION ALL
    SELECT 'video_files'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'content_type'::VARCHAR
    FROM uploaded_files WHERE media_type = 'video' AND deleted_at IS NULL
    UNION ALL
    -- Upload context distribution
    SELECT ('files_' || upload_context)::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'context'::VARCHAR
    FROM uploaded_files WHERE deleted_at IS NULL
    GROUP BY upload_context
    UNION ALL
    -- Quality metrics
    SELECT 'avg_file_size_mb'::VARCHAR, ROUND(AVG(file_size)::NUMERIC / 1024 / 1024, 2), 'MB'::VARCHAR, 'quality'::VARCHAR
    FROM uploaded_files WHERE deleted_at IS NULL
    UNION ALL
    SELECT 'files_with_thumbnails'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'processing'::VARCHAR
    FROM uploaded_files WHERE image_thumbnails IS NOT NULL AND deleted_at IS NULL
    UNION ALL
    -- Recent activity
    SELECT 'uploads_last_7_days'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'activity'::VARCHAR
    FROM uploaded_files WHERE created_at >= NOW() - INTERVAL '7 days' AND deleted_at IS NULL
    UNION ALL
    SELECT 'uploads_last_30_days'::VARCHAR, COUNT(*)::NUMERIC, 'files'::VARCHAR, 'activity'::VARCHAR
    FROM uploaded_files WHERE created_at >= NOW() - INTERVAL '30 days' AND deleted_at IS NULL;
END;
$ LANGUAGE plpgsql;

-- =============================================
-- FINAL PERFORMANCE OPTIMIZATIONS
-- =============================================

-- 🆕 Partial indexes for better performance on large datasets
CREATE INDEX CONCURRENTLY idx_uploaded_files_active_by_context 
ON uploaded_files(upload_context, created_at DESC) 
WHERE status = 'active' AND deleted_at IS NULL;

CREATE INDEX CONCURRENTLY idx_uploaded_files_user_active 
ON uploaded_files(uploaded_by, upload_context, created_at DESC) 
WHERE status = 'active' AND deleted_at IS NULL;

CREATE INDEX CONCURRENTLY idx_review_media_timeline_analysis 
ON review_media(photo_type, days_of_usage, created_at) 
WHERE photo_type IN ('before', 'after') AND days_of_usage IS NOT NULL;

CREATE INDEX CONCURRENTLY idx_progress_media_comparison 
ON progress_media(progress_id, photo_type, sort_order) 
WHERE photo_type = 'progress';

-- 🆕 Composite indexes for common query patterns
CREATE INDEX CONCURRENTLY idx_product_reviews_media_rating 
ON product_reviews(product_id, has_photos, rating DESC, created_at DESC) 
WHERE status = 'approved';

CREATE INDEX CONCURRENTLY idx_users_storage_engagement 
ON users(storage_used DESC, community_score DESC, created_at) 
WHERE storage_used > 0;

```

## 🍃 Enhanced MongoDB Collections Schema (🎯 ML + Advanced Feedback)

### 1. Enhanced User Behavior Analytics (🎯 Primary ML + Feedback Data)
```javascript
// user_analytics - 🎯 Core ML training data + feedback patterns
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  session_id: String,
  
  // Enhanced skin profile
  skin_profile: {
    skin_type: String, // 'oily', 'dry', 'combination', 'sensitive', 'normal', 'acne', 'all'
    concerns: [String], // ['acne', 'aging', 'dark_spots', 'hydration', 'scarring']
    age_range: String,  // '18-25', '26-35', '36-45', '45+'
    skin_goals: [String], // ['clear_skin', 'anti_aging', 'hydration', 'acne_control']
    severity_levels: { // For specific concerns
      acne: String, // 'mild', 'moderate', 'severe'
      sensitivity: String,
      dryness: String
    }
  },
  
  // Enhanced event tracking
  events: [
    {
      event_type: String, // 'page_view', 'product_view', 'review_write', 'progress_update', 'question_ask'
      event_data: {
        product_id: Integer,
        category: String,
        page_url: String,
        search_query: String,
        skin_type_filter: String,
        price_range: {min: Number, max: Number},
        duration_seconds: Number,
        
        // 🆕 Feedback-specific event data
        review_rating: Number,
        feedback_type: String, // 'detailed_review', 'quick_rating', 'progress_photo'
        engagement_level: String, // 'low', 'medium', 'high'
        content_length: Number, // Length of review/question text
        
        timestamp: Date,
        metadata: Object
      }
    }
  ],
  
  // 🆕 Feedback behavior patterns
  feedback_patterns: {
    avg_review_length: Number,
    review_frequency: String, // 'frequent', 'occasional', 'rare'
    preferred_feedback_types: [String], // ['detailed_reviews', 'progress_photos', 'quick_ratings']
    engagement_score: Number, // 0-100
    helpful_reviewer_score: Number, // Based on helpful votes received
    
    // Skincare-specific patterns
    results_reporting_consistency: Number, // How often they report results
    progress_tracking_usage: Boolean,
    community_participation_level: String, // 'active', 'moderate', 'passive'
  },
  
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

// 2. Advanced Product Recommendations (🎯 Enhanced ML results)
// product_recommendations
{
  _id: ObjectId,
  user_id: Integer, // Links to PostgreSQL users.id
  recommendation_type: String, // 'collaborative', 'content_based', 'skin_based', 'feedback_enhanced', 'hybrid'
  
  recommended_products: [
    {
      product_id: Integer, // Links to PostgreSQL products.id
      score: Number, // 0.0 - 1.0 confidence score
      reason: String, // "Users with acne skin type and similar feedback patterns also loved this"
      algorithm_used: String, // 'collaborative_filtering', 'content_based', 'skin_analysis', 'feedback_similarity'
      
      // 🆕 Enhanced reasoning
      evidence: {
        similar_users_count: Number,
        similar_feedback_patterns: [String],
        skin_type_match_strength: Number,
        avg_rating_from_similar_users: Number,
        results_rate_for_similar_users: Number
      },
      
      // 🆕 Expected outcomes (based on similar users)
      predicted_satisfaction: Number, // 0.0 - 1.0
      predicted_results_likelihood: Number, // 0.0 - 1.0
      estimated_timeline_weeks: Number, // When to expect results
      
      generated_at: Date
    }
  ],
  
  // Enhanced user profile for ML
  user_profile: {
    skin_type: String, // Including 'acne' option
    concerns: [String],
    age_range: String,
    preferred_brands: [String],
    budget_range: {min: Number, max: Number},
    
    // 🆕 Feedback-based preferences
    feedback_preferences: {
      texture_preferences: [String], // ['lightweight', 'creamy', 'gel-based']
      scent_tolerance: String, // 'fragrance_free', 'light_fragrance', 'any'
      results_timeline_expectation: String, // 'immediate', '1_week', '1_month', 'long_term'
      side_effects_tolerance: String, // 'none', 'mild', 'moderate'
    },
    
    purchase_history_summary: {
      total_orders: Number,
      avg_order_value: Number,
      favorite_categories: [String],
      last_purchase_date: Date,
      repurchase_rate: Number // How often they repurchase products
    },
    
    // 🆕 Community engagement profile
    engagement_level: String, // 'high', 'medium', 'low'
    review_writing_likelihood: Number, // 0.0 - 1.0
    progress_tracking_likelihood: Number,
    influence_score: Number // How much their reviews influence others
  },
  
  model_version: String, // Track which ML model version generated this
  feedback_integration_version: String, // 🆕 Track feedback model version
  created_at: Date,
  expires_at: Date // TTL for cache invalidation
}

// 3. 🆕 Comprehensive Feedback Analytics
// feedback_analytics
{
  _id: ObjectId,
  product_id: Integer, // Links to PostgreSQL products.id
  analysis_date: Date,
  
  // Aggregated Feedback Metrics
  feedback_summary: {
    total_reviews: Number,
    avg_rating: Number,
    rating_distribution: {
      "5_star": Number,
      "4_star": Number,
      "3_star": Number,
      "2_star": Number,
      "1_star": Number
    },
    
    // 🆕 Enhanced Skincare-Specific Metrics
    effectiveness_scores: {
      avg_effectiveness: Number,
      avg_texture: Number,
      avg_scent: Number,
      avg_packaging: Number,
      avg_value: Number
    },
    
    // Results & Satisfaction
    results_rate: Number, // % of users who saw visible results
    recommendation_rate: Number, // % who would recommend
    repurchase_rate: Number, // % who bought again
    
    // 🆕 Usage patterns
    usage_patterns: {
      most_common_frequency: String, // 'daily', 'twice_daily', etc.
      avg_usage_duration_days: Number,
      completion_rate: Number, // % who used entire product
      
      // Application insights
      common_application_methods: [String],
      commonly_combined_with: [Integer] // Product IDs often used together
    },
    
    // 🆕 Enhanced Skin Type Performance
    skin_type_performance: {
      acne: {
        review_count: Number,
        avg_rating: Number,
        results_rate: Number,
        avg_satisfaction: Number,
        common_benefits: [String], // ["reduced_breakouts", "less_oily", "clearer_skin"]
        common_concerns: [String], // ["initial_dryness", "strong_scent"]
        avg_usage_duration: Number,
        side_effects_rate: Number
      },
      oily: {
        review_count: Number,
        avg_rating: Number,
        results_rate: Number,
        common_benefits: [String],
        common_concerns: [String]
      },
      dry: { /* similar structure */ },
      sensitive: { /* similar structure */ },
      combination: { /* similar structure */ },
      normal: { /* similar structure */ }
    }
  },
  
  // 🆕 Advanced Sentiment Analysis
  sentiment_analysis: {
    overall_sentiment_score: Number, // -1.0 to 1.0
    sentiment_distribution: {
      very_positive: Number, // 0.5 to 1.0
      positive: Number, // 0.1 to 0.5
      neutral: Number, // -0.1 to 0.1
      negative: Number, // -0.5 to -0.1
      very_negative: Number // -1.0 to -0.5
    },
    
    // Topic-based sentiment
    aspect_sentiments: {
      effectiveness: Number,
      texture: Number,
      scent: Number,
      packaging: Number,
      value: Number,
      results: Number,
      side_effects: Number
    },
    
    // Extracted themes
    positive_themes: [
      {
        theme: String, // "fast_results", "gentle_formula", "good_value"
        frequency: Number,
        avg_sentiment: Number,
        example_phrases: [String]
      }
    ],
    negative_themes: [
      {
        theme: String, // "too_expensive", "caused_irritation", "slow_results"
        frequency: Number,
        avg_sentiment: Number,
        example_phrases: [String]
      }
    ]
  },
  
  // 🆕 Temporal Feedback Patterns
  feedback_trends: {
    monthly_ratings: [
      {
        month: "2024-01",
        avg_rating: Number,
        review_count: Number,
        sentiment_score: Number,
        results_rate: Number
      }
    ],
    seasonal_patterns: {
      winter: {avg_rating: Number, common_feedback: [String], results_rate: Number},
      spring: {avg_rating: Number, common_feedback: [String], results_rate: Number},
      summer: {avg_rating: Number, common_feedback: [String], results_rate: Number},
      autumn: {avg_rating: Number, common_feedback: [String], results_rate: Number}
    },
    
    // 🆕 Lifecycle analysis
    product_lifecycle_stage: String, // "introduction", "growth", "maturity", "decline"
    trend_direction: String, // "improving", "stable", "declining"
    momentum_score: Number // Rate of change in satisfaction
  },
  
  // 🆕 Predictive Insights
  predictions: {
    // Predict future ratings based on current trends
    predicted_rating_next_month: Number,
    rating_confidence_interval: [Number, Number],
    
    // Risk Assessment
    customer_churn_risk: String, // "low", "medium", "high"
    negative_review_probability: Number,
    product_lifecycle_prediction: String,
    
    // Opportunity Assessment
    improvement_opportunities: [
      {
        area: String, // "packaging", "scent", "texture", "instructions"
        impact_potential: String, // "high", "medium", "low"
        estimated_rating_improvement: Number,
        confidence: Number
      }
    ]
  },
  
  last_updated: Date,
  model_version: String
}

// 4. 🆕 Real-time Feedback Processing Stream
// feedback_stream
{
  _id: ObjectId,
  event_type: String, // "review_submitted", "progress_updated", "question_asked", "answer_provided"
  
  // Event Data
  event_data: {
    user_id: Integer,
    product_id: Integer,
    content_id: Integer, // Review, question, or answer ID
    rating: Number,
    feedback_type: String, // "review", "progress", "question", "answer"
    
    // 🆕 Enhanced content analysis
    content_text: String,
    content_length: Number,
    language_detected: String,
    
    // AI-extracted insights
    sentiment: String, // "positive", "negative", "neutral"
    sentiment_score: Number, // -1 to 1
    confidence_score: Number, // How confident AI is in analysis
    
    key_topics: [String], // ["effectiveness", "texture", "results", "side_effects"]
    skin_concerns_mentioned: [String], // ["acne", "dryness", "sensitivity"]
    ingredients_mentioned: [String], // Extract mentioned ingredients
    
    // 🆕 Feedback quality indicators
    quality_score: Number, // 0-100, based on length, detail, helpfulness
    authenticity_score: Number, // 0-100, fake review detection
    expertise_level: String, // "beginner", "intermediate", "expert"
    
    // Context
    user_skin_type: String,
    usage_duration_days: Number,
    is_verified_purchase: Boolean,
    user_engagement_level: String
  },
  
  // 🆕 Processing pipeline status
  processing_status: {
    sentiment_processed: Boolean,
    topic_extraction_done: Boolean,
    quality_assessment_done: Boolean,
    moderation_passed: Boolean,
    analytics_updated: Boolean
  },
  
  // Real-time flags
  requires_immediate_attention: Boolean, // High negative sentiment or safety concerns
  moderation_flags: [String], // ["medical_claims", "spam", "inappropriate"]
  
  timestamp: Date,
  processed_at: Date
}

// 5. 🆕 User Feedback Journey & Intelligence
// user_feedback_journey
{
  _id: ObjectId,
  user_id: Integer,
  
  // Enhanced User Profile
  skin_profile: {
    skin_type: String,
    concerns: [String],
    age_range: String,
    skincare_experience: String, // "beginner", "intermediate", "expert"
    skin_sensitivity_level: String, // "none", "mild", "moderate", "severe"
    
    // 🆕 Skincare journey stage
    journey_stage: String, // "discovery", "experimentation", "routine_building", "maintenance"
    primary_goals: [String], // ["acne_control", "anti_aging", "hydration"]
    budget_consciousness: String // "budget_focused", "value_focused", "premium_willing"
  },
  
  // Comprehensive Feedback Timeline
  feedback_timeline: [
    {
      product_id: Integer,
      event_type: String, // "purchased", "first_review", "progress_update", "final_review", "repurchased"
      date: Date,
      
      // Detailed Feedback Information
      rating: Number,
      detailed_ratings: {
        effectiveness: Number,
        texture: Number,
        scent: Number,
        packaging: Number,
        value: Number
      },
      
      satisfaction_level: Number,
      key_benefits_experienced: [String],
      concerns_raised: [String],
      side_effects_mentioned: [String],
      
      // Progress & Results
      usage_duration_days: Number,
      visible_results: Boolean,
      skin_improvement_areas: [String],
      overall_experience: String, // "exceeded_expectations", "met_expectations", "below_expectations"
      
      // Behavioral indicators
      would_recommend: Boolean,
      would_repurchase: Boolean,
      continued_usage: Boolean,
      
      // 🆕 Content quality metrics
      review_helpfulness_score: Number,
      content_quality_score: Number,
      community_engagement: Number // Likes, comments, shares
    }
  ],
  
  // 🆕 Advanced User Intelligence
  user_intelligence: {
    // Feedback behavior patterns
    feedback_consistency: Number, // How consistent their ratings are
    detail_orientation: String, // "high", "medium", "low"
    result_reporting_accuracy: Number, // Based on progress tracking vs final reviews
    
    // Community influence
    review_influence_score: Number, // How much their reviews influence others
    expertise_recognition: String, // "community_expert", "trusted_reviewer", "new_member"
    helpfulness_ratio: Number, // Helpful votes / total reviews
    
    // 🆕 Skin journey insights
    skin_improvement_trajectory: String, // "improving", "stable", "worsening", "fluctuating"
    product_success_rate: Number, // % of products that worked for them
    routine_complexity_preference: String, // "simple", "moderate", "complex"
    ingredient_sensitivity_profile: [String], // Known problematic ingredients
    
    // Predictive preferences
    likely_product_preferences: {
      texture_types: [String],
      scent_preferences: [String],
      price_sensitivity: String,
      brand_loyalty_level: String,
      innovation_adoption: String // "early_adopter", "mainstream", "conservative"
    },
    
    // 🆕 Recommendation optimization
    optimal_recommendation_strategy: String, // "similar_users", "content_based", "expert_curated"
    feedback_trust_score: Number, // How much to trust their feedback for recommendations
    personalization_confidence: Number // How well we understand their preferences
  },
  
  // Engagement metrics
  engagement_summary: {
    total_reviews: Number,
    total_progress_entries: Number,
    questions_asked: Number,
    answers_provided: Number,
    community_interactions: Number,
    
    engagement_evolution: [
      {
        period: String, // "2024-Q1"
        activity_level: String,
        primary_activities: [String]
      }
    ]
  },
  
  created_at: Date,
  last_updated: Date
}

// 6. 🆕 Product Intelligence & Competitive Analysis
// product_intelligence
{
  _id: ObjectId,
  product_id: Integer,
  
  // AI-Powered Feedback Analysis
  intelligence_summary: {
    // Competitive positioning
    market_position: String, // "market_leader", "strong_contender", "niche_player", "underperformer"
    competitive_advantages: [
      {
        advantage: String, // "fast_results", "gentle_formula", "value_pricing"
        strength_score: Number, // 0-100
        evidence_count: Number, // Number of reviews supporting this
        confidence: Number
      }
    ],
    
    competitive_disadvantages: [
      {
        weakness: String, // "expensive", "strong_scent", "slow_results"
        severity_score: Number, // 0-100
        frequency_mentioned: Number,
        impact_on_rating: Number
      }
    ],
    
    // 🆕 Acne-specific analysis (if applicable)
    acne_performance_analysis: {
      effectiveness_for_acne: Number, // 0-100 score
      acne_type_suitability: {
        "comedonal": Number, // Blackheads/whiteheads
        "inflammatory": Number, // Red, inflamed acne
        "cystic": Number, // Deep, cystic acne
        "hormonal": Number // Hormonal acne
      },
      common_acne_benefits: [String],
      acne_side_effects_rate: Number,
      time_to_acne_improvement: Number // Average weeks
    }
  },
  
  // Customer segmentation insights
  customer_segments: [
    {
      segment_name: String, // "acne_beginners", "sensitive_skin_experts", "budget_conscious_teens"
      segment_size: Number,
      avg_satisfaction: Number,
      key_feedback_themes: [String],
      purchasing_behavior: {
        repurchase_rate: Number,
        avg_time_to_repurchase: Number,
        typical_order_value: Number
      },
      
      // Marketing insights
      preferred_communication_style: String,
      key_decision_factors: [String],
      price_sensitivity: String,
      recommended_messaging: [String]
    }
  ],
  
  // 🆕 Predictive Product Analytics
  predictive_insights: {
    // Future performance predictions
    predicted_rating_trajectory: {
      "1_month": Number,
      "3_months": Number,
      "6_months": Number
    },
    
    market_opportunity_score: Number, // 0-100
    innovation_gap_analysis: [
      {
        gap_area: String, // "texture_improvement", "scent_options", "packaging"
        opportunity_size: String, // "large", "medium", "small"
        difficulty_level: String, // "easy", "moderate", "difficult"
        potential_impact: Number // Expected rating improvement
      }
    ],
    
    // Risk assessment
    product_risks: [
      {
        risk_type: String, // "declining_satisfaction", "negative_trend", "competitor_threat"
        probability: Number, // 0-100
        potential_impact: String, // "high", "medium", "low"
        mitigation_suggestions: [String]
      }
    ]
  },
  
  // 🆕 Content generation
  generated_content: {
    // Auto-generated marketing copy from positive reviews
    product_highlights: [String],
    customer_testimonials: [
      {
        testimonial: String,
        customer_type: String, // "verified_buyer", "acne_sufferer", "sensitive_skin"
        authenticity_score: Number
      }
    ],
    
    // FAQ generation from Q&A
    common_questions_answers: [
      {
        question: String,
        answer: String,
        confidence: Number,
        source_reviews: [Integer] // Review IDs that support this answer
      }
    ],
    
    // Usage recommendations
    optimal_usage_guide: {
      recommended_frequency: String,
      best_application_method: String,
      complementary_products: [Integer], // Product IDs
      timeline_expectations: String
    }
  },
  
  analysis_date: Date,
  model_version: String,
  confidence_score: Number // Overall confidence in analysis
}

// 7. 🆕 Moderation & Safety Intelligence
// moderation_intelligence
{
  _id: ObjectId,
  content_type: String, // "review", "question", "answer", "progress_note"
  content_id: Integer,
  
  // AI-powered content analysis
  safety_analysis: {
    medical_claims_detected: Boolean,
    medical_claims_list: [String], // Specific claims found
    medical_severity: String, // "low", "medium", "high"
    
    inappropriate_content_score: Number, // 0-100
    spam_probability: Number, // 0-100
    fake_content_probability: Number, // 0-100
    
    // 🆕 Skincare-specific safety flags
    dangerous_advice_detected: Boolean,
    ingredient_misuse_mentioned: Boolean,
    allergic_reaction_warning: Boolean,
    
    harmful_diy_instructions: Boolean,
    unverified_medical_advice: Boolean
  },
  
  // Content quality assessment
  quality_metrics: {
    authenticity_score: Number, // 0-100
    helpfulness_prediction: Number, // 0-100
    expertise_level_detected: String, // "novice", "intermediate", "expert"
    
    content_depth: String, // "superficial", "moderate", "detailed"
    factual_accuracy_confidence: Number,
    bias_detection_score: Number // Potential promotional bias
  },
  
  // Moderation decisions
  moderation_decision: {
    automated_action: String, // "approve", "flag", "reject", "needs_human_review"
    confidence: Number,
    reasoning: [String], // Why this decision was made
    
    human_review_required: Boolean,
    priority_level: String, // "low", "medium", "high", "urgent"
    
    approved_at: Date,
    approved_by: String, // "ai" or user_id
    manual_override: Boolean
  },
  
  created_at: Date,
  expires_at: Date // For cleanup
}

// =============================================
// MONGODB INDEXES FOR ENHANCED FEEDBACK PERFORMANCE
// =============================================

// Enhanced Analytics Indexes
db.feedback_analytics.createIndex({"product_id": 1});
db.feedback_analytics.createIndex({"feedback_summary.avg_rating": -1});
db.feedback_analytics.createIndex({"feedback_summary.skin_type_performance.acne.avg_rating": -1});
db.feedback_analytics.createIndex({"sentiment_analysis.overall_sentiment_score": -1});
db.feedback_analytics.createIndex({"predictions.customer_churn_risk": 1});

// Real-time Stream Indexes
db.feedback_stream.createIndex({"timestamp": -1});
db.feedback_stream.createIndex({"event_data.product_id": 1, "timestamp": -1});
db.feedback_stream.createIndex({"event_data.user_skin_type": 1});
db.feedback_stream.createIndex({"processing_status.analytics_updated": 1});
db.feedback_stream.createIndex({"requires_immediate_attention": 1});
db.feedback_stream.createIndex({"event_data.sentiment_score": 1});

// User Intelligence Indexes
db.user_feedback_journey.createIndex({"user_id": 1});
db.user_feedback_journey.createIndex({"skin_profile.skin_type": 1});
db.user_feedback_journey.createIndex({"user_intelligence.review_influence_score": -1});
db.user_feedback_journey.createIndex({"user_intelligence.feedback_trust_score": -1});
db.user_feedback_journey.createIndex({"engagement_summary.total_reviews": -1});

// Product Intelligence Indexes
db.product_intelligence.createIndex({"product_id": 1});
db.product_intelligence.createIndex({"intelligence_summary.market_position": 1});
db.product_intelligence.createIndex({"predictive_insights.market_opportunity_score": -1});
db.product_intelligence.createIndex({"intelligence_summary.acne_performance_analysis.effectiveness_for_acne": -1});

// Moderation Intelligence Indexes
db.moderation_intelligence.createIndex({"content_type": 1, "content_id": 1});
db.moderation_intelligence.createIndex({"safety_analysis.medical_claims_detected": 1});
db.moderation_intelligence.createIndex({"moderation_decision.automated_action": 1});
db.moderation_intelligence.createIndex({"moderation_decision.human_review_required": 1});
db.moderation_intelligence.createIndex({"created_at": -1});

// Recommendation Indexes (Enhanced)
db.product_recommendations.createIndex({"user_id": 1});
db.product_recommendations.createIndex({"user_profile.skin_type": 1});
db.product_recommendations.createIndex({"user_profile.feedback_preferences.results_timeline_expectation": 1});
db.product_recommendations.createIndex({"expires_at": 1}); // TTL index
```

## 🔧 Enhanced Go Models with Complete Feedback System

### Updated Models with Profile Pictures & Advanced Feedback

```go
// internal/models/user.go (🆕 Enhanced with community features)
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
    Role                   string     `json:"role" gorm:"type:user_role;default:'customer'"` // 🆕 Supports 'expert'
    
    // 🆕 Enhanced Profile Fields
    ProfilePicture         string     `json:"profile_picture"` // URL to uploaded image
    Bio                    string     `json:"bio"`
    ExpertiseAreas         []string   `json:"expertise_areas" gorm:"type:text[]"`
    
    IsActive               bool       `json:"is_active" gorm:"default:true"`
    EmailVerified          bool       `json:"email_verified" gorm:"default:false"`
    EmailVerificationToken string     `json:"-"`
    EmailVerifiedAt        *time.Time `json:"email_verified_at"`
    PasswordResetToken     string     `json:"-"`
    PasswordResetExpires   *time.Time `json:"-"`
    
    // Enhanced User Statistics
    TotalOrders            int        `json:"total_orders" gorm:"default:0"`
    TotalSpent             float64    `json:"total_spent" gorm:"type:decimal(10,2);default:0"`
    AvgRating              float64    `json:"avg_rating" gorm:"type:decimal(3,2);default:0"`
    
    // 🆕 Community & Engagement Stats
    ReviewsWritten         int        `json:"reviews_written" gorm:"default:0"`
    HelpfulVotesReceived   int        `json:"helpful_votes_received" gorm:"default:0"`
    QuestionsAsked         int        `json:"questions_asked" gorm:"default:0"`
    AnswersProvided        int        `json:"answers_provided" gorm:"default:0"`
    CommunityScore         int        `json:"community_score" gorm:"default:0"`
    
    CreatedAt              time.Time  `json:"created_at"`
    UpdatedAt              time.Time  `json:"updated_at"`
    
    // Relationships
    Addresses    []UserAddress    `json:"addresses,omitempty" gorm:"foreignKey:UserID"`
    Orders       []Order          `json:"orders,omitempty" gorm:"foreignKey:UserID"`
    Reviews      []ProductReview  `json:"reviews,omitempty" gorm:"foreignKey:UserID"`
    CartItems    []ShoppingCart   `json:"cart_items,omitempty" gorm:"foreignKey:UserID"`
    Wishlists    []Wishlist       `json:"wishlists,omitempty" gorm:"foreignKey:UserID"`
    Questions    []ProductQuestion `json:"questions,omitempty" gorm:"foreignKey:UserID"`
    Answers      []ProductAnswer  `json:"answers,omitempty" gorm:"foreignKey:UserID"`
    ProgressEntries []SkincareProgress `json:"progress_entries,omitempty" gorm:"foreignKey:UserID"`
}

// 🆕 Enhanced Product Review Model
type ProductReview struct {
    ID                    uint      `json:"id" gorm:"primaryKey"`
    ProductID             uint      `json:"product_id" gorm:"not null"`
    UserID                *uint     `json:"user_id"`
    OrderItemID           *uint     `json:"order_item_id"`
    
    // Basic Review Data
    Rating                int       `json:"rating" gorm:"check:rating >= 1 AND rating <= 5"`
    Title                 string    `json:"title"`
    ReviewText            string    `json:"review_text"`
    
    // 🆕 Skincare-Specific Feedback
    SkinTypeAtReview      string    `json:"skin_type_at_review" gorm:"type:skin_type"`
    UsageDuration         *int      `json:"usage_duration"` // Days
    VisibleResults        bool      `json:"visible_results" gorm:"default:false"`
    WouldRecommend        bool      `json:"would_recommend" gorm:"default:true"`
    
    // 🆕 Detailed Ratings
    EffectivenessRating   *int      `json:"effectiveness_rating" gorm:"check:effectiveness_rating BETWEEN 1 AND 5"`
    TextureRating         *int      `json:"texture_rating" gorm:"check:texture_rating BETWEEN 1 AND 5"`
    ScentRating           *int      `json:"scent_rating" gorm:"check:scent_rating BETWEEN 1 AND 5"`
    PackagingRating       *int      `json:"packaging_rating" gorm:"check:packaging_rating BETWEEN 1 AND 5"`
    ValueForMoneyRating   *int      `json:"value_for_money_rating" gorm:"check:value_for_money_rating BETWEEN 1 AND 5"`
    
    // 🆕 Experience Details
    SkinConditionBefore   string    `json:"skin_condition_before"`
    SkinConditionAfter    string    `json:"skin_condition_after"`
    SideEffects           string    `json:"side_effects"`
    
    // 🆕 Usage Information
    HowOftenUsed          string    `json:"how_often_used" gorm:"type:usage_frequency"`
    ApplicationMethod     string    `json:"application_method"`
    UsedWithOtherProducts string    `json:"used_with_other_products" gorm:"type:jsonb"`
    
    // Review Metadata
    IsVerifiedPurchase    bool      `json:"is_verified_purchase" gorm:"default:false"`
    HelpfulVotesCount     int       `json:"helpful_votes_count" gorm:"default:0"`
    UnhelpfulVotesCount   int       `json:"unhelpful_votes_count" gorm:"default:0"`
    TotalVotesCount       int       `json:"total_votes_count" gorm:"default:0"`
    Status                string    `json:"status" gorm:"type:review_status;default:'pending'"`
    
    // 🆕 Media & AI Analysis
    Photos                string    `json:"photos" gorm:"type:jsonb"` // JSON array of photo URLs
    VideoURL              string    `json:"video_url"`
    SentimentScore        *float64  `json:"sentiment_score" gorm:"type:decimal(3,2)"`
    SentimentLabel        string    `json:"sentiment_label"`
    ExtractedTopics       string    `json:"extracted_topics" gorm:"type:jsonb"`
    
    CreatedAt             time.Time `json:"created_at"`
    UpdatedAt             time.Time `json:"updated_at"`
    
    // Relationships
    Product    Product      `json:"product,omitempty" gorm:"foreignKey:ProductID"`
    User       User         `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Votes      []ReviewVote `json:"votes,omitempty" gorm:"foreignKey:ReviewID"`
}

// 🆕 Skincare Progress Tracking Model
type SkincareProgress struct {
    ID                   uint    `json:"id" gorm:"primaryKey"`
    UserID               uint    `json:"user_id" gorm:"not null"`
    ProductID            uint    `json:"product_id" gorm:"not null"`
    
    WeekNumber           int     `json:"week_number" gorm:"not null"`
    ProgressPhoto        string  `json:"progress_photo"`
    SkinConditionNotes   string  `json:"skin_condition_notes"`
    
    // Weekly Ratings
    OverallSatisfaction  int     `json:"overall_satisfaction" gorm:"check:overall_satisfaction BETWEEN 1 AND 5"`
    SkinImprovement      int     `json:"skin_improvement" gorm:"check:skin_improvement BETWEEN 1 AND 5"`
    SideEffectsSeverity  int     `json:"side_effects_severity" gorm:"check:side_effects_severity BETWEEN 0 AND 5"`
    
    // Specific Improvements
    AcneReduced          bool    `json:"acne_reduced" gorm:"default:false"`
    SkinTextureImproved  bool    `json:"skin_texture_improved" gorm:"default:false"`
    HydrationImproved    bool    `json:"hydration_improved" gorm:"default:false"`
    RednessReduced       bool    `json:"redness_reduced" gorm:"default:false"`
    PoresMinimized       bool    `json:"pores_minimized" gorm:"default:false"`
    BrightnessImproved   bool    `json:"brightness_improved" gorm:"default:false"`
    ScarringReduced      bool    `json:"scarring_reduced" gorm:"default:false"`
    OilControlImproved   bool    `json:"oil_control_improved" gorm:"default:false"`
    
    Status               string  `json:"status" gorm:"type:progress_status;default:'ongoing'"`
    
    CreatedAt            time.Time `json:"created_at"`
    
    // Relationships
    User    User    `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Product Product `json:"product,omitempty" gorm:"foreignKey:ProductID"`
}

// 🆕 Product Questions Model
type ProductQuestion struct {
    ID                uint      `json:"id" gorm:"primaryKey"`
    ProductID         uint      `json:"product_id" gorm:"not null"`
    UserID            *uint     `json:"user_id"`
    
    Question          string    `json:"question" gorm:"not null"`
    SkinTypeContext   string    `json:"skin_type_context" gorm:"type:skin_type"`
    AgeRange          string    `json:"age_range"`
    
    IsAnswered        bool      `json:"is_answered" gorm:"default:false"`
    AnswerCount       int       `json:"answer_count" gorm:"default:0"`
    HelpfulVotes      int       `json:"helpful_votes" gorm:"default:0"`
    Status            string    `json:"status" gorm:"type:feedback_status;default:'pending'"`
    
    // 🆕 AI Analysis
    QuestionCategory  string    `json:"question_category"`
    UrgencyLevel      string    `json:"urgency_level" gorm:"default:'normal'"`
    
    CreatedAt         time.Time `json:"created_at"`
    UpdatedAt         time.Time `json:"updated_at"`
    
    // Relationships
    Product Product        `json:"product,omitempty" gorm:"foreignKey:ProductID"`
    User    User           `json:"user,omitempty" gorm:"foreignKey:UserID"`
    Answers []ProductAnswer `json:"answers,omitempty" gorm:"foreignKey:QuestionID"`
}

// 🆕 Product Answers Model
type ProductAnswer struct {
    ID                  uint      `json:"id" gorm:"primaryKey"`
    QuestionID          uint      `json:"question_id" gorm:"not null"`
    UserID              *uint     `json:"user_id"`
    
    Answer              string    `json:"answer" gorm:"not null"`
    
    IsFromVerifiedBuyer bool      `json:"is_from_verified_buyer" gorm:"default:false"`
    IsFromExpert        bool      `json:"is_from_expert" gorm:"default:false"`
    HelpfulVotes        int       `json:"helpful_votes" gorm:"default:0"`
    UnhelpfulVotes      int       `json:"unhelpful_votes" gorm:"default:0"`
    
    IsVerifiedByAdmin   bool      `json:"is_verified_by_admin" gorm:"default:false"`
    VerifiedAt          *time.Time `json:"verified_at"`
    VerifiedBy          *uint     `json:"verified_by"`
    
    Status              string    `json:"status" gorm:"type:feedback_status;default:'pending'"`
    
    CreatedAt           time.Time `json:"created_at"`
    UpdatedAt           time.Time `json:"updated_at"`
    
    // Relationships
    Question ProductQuestion `json:"question,omitempty" gorm:"foreignKey:QuestionID"`
    User     User            `json:"user,omitempty" gorm:"foreignKey:UserID"`
}

// 🆕 Review Votes Model
type ReviewVote struct {
    ID        uint      `json:"id" gorm:"primaryKey"`
    ReviewID  uint      `json:"review_id" gorm:"not null"`
    UserID    uint      `json:"user_id" gorm:"not null"`
    VoteType  string    `json:"vote_type" gorm:"check:vote_type IN ('helpful', 'unhelpful')"`
    CreatedAt time.Time `json:"created_at"`
    
    // Relationships
    Review ProductReview `json:"review,omitempty" gorm:"foreignKey:ReviewID"`
    User   User          `json:"user,omitempty" gorm:"foreignKey:UserID"`
}

// 🆕 Enhanced Product Model
type Product struct {
    ID                    uint      `json:"id" gorm:"primaryKey"`
    NameEn                string    `json:"name_en" gorm:"not null"`
    NameKh                string    `json:"name_kh"`
    Slug                  string    `json:"slug" gorm:"unique;not null"`
    DescriptionEn         string    `json:"description_en"`
    DescriptionKh         string    `json:"description_kh"`
    ShortDescription      string    `json:"short_description"`
    SKU                   string    `json:"sku" gorm:"unique;not null"`
    Barcode               string    `json:"barcode"`
    
    // Pricing
    Price                 float64   `json:"price" gorm:"type:decimal(10,2);not null"`
    CompareAtPrice        *float64  `json:"compare_at_price" gorm:"type:decimal(10,2)"`
    CostPrice             *float64  `json:"cost_price" gorm:"type:decimal(10,2)"`
    
    // Inventory
    Stock                 int       `json:"stock" gorm:"default:0"`
    TrackInventory        bool      `json:"track_inventory" gorm:"default:true"`
    AllowBackorders       bool      `json:"allow_backorders" gorm:"default:false"`
    
    // Physical attributes
    Weight                *float64  `json:"weight" gorm:"type:decimal(8,2)"`
    Dimensions            string    `json:"dimensions" gorm:"type:jsonb"`
    
    // 🆕 Enhanced Skincare Specific
    SkinType              string    `json:"skin_type" gorm:"type:skin_type;default:'all'"` // 🆕 Includes 'acne'
    Category              string    `json:"category" gorm:"not null"`
    SkinConcerns          []string  `json:"skin_concerns" gorm:"type:text[]"`
    Ingredients           string    `json:"ingredients" gorm:"type:jsonb"`
    UsageInstructions     string    `json:"usage_instructions"`
    
    // 🆕 Enhanced Product Information
    KeyBenefits           []string  `json:"key_benefits" gorm:"type:text[]"`
    HowToUse              string    `json:"how_to_use"`
    WhenToUse             string    `json:"when_to_use"`
    ProductType           string    `json:"product_type"`
    SuitableForSensitiveSkin bool   `json:"suitable_for_sensitive_skin" gorm:"default:false"`
    DermatologistTested   bool      `json:"dermatologist_tested" gorm:"default:false"`
    CrueltyFree           bool      `json:"cruelty_free" gorm:"default:false"`
    
    // Media
    ImageURL              string    `json:"image_url"`
    
    // SEO & Marketing
    MetaTitle             string    `json:"meta_title"`
    MetaDescription       string    `json:"meta_description"`
    Status                string    `json:"status" gorm:"type:product_status;default:'active'"`
    IsFeatured            bool      `json:"is_featured" gorm:"default:false"`
    
    // 🆕 Analytics (calculated fields updated by triggers)
    TotalReviews          int       `json:"total_reviews" gorm:"default:0"`
    AvgRating             float64   `json:"avg_rating" gorm:"type:decimal(3,2);default:0"`
    TotalSales            int       `json:"total_sales" gorm:"default:0"`
    ViewCount             int       `json:"view_count" gorm:"default:0"`
    
    CreatedAt             time.Time `json:"created_at"`
    UpdatedAt             time.Time `json:"updated_at"`
    PublishedAt           *time.Time `json:"published_at"`
    
    // Relationships
    Categories  []Category       `json:"categories,omitempty" gorm:"many2many:product_categories"`
    Images      []ProductImage   `json:"images,omitempty" gorm:"foreignKey:ProductID"`
    Reviews     []ProductReview  `json:"reviews,omitempty" gorm:"foreignKey:ProductID"`
    Questions   []ProductQuestion `json:"questions,omitempty" gorm:"foreignKey:ProductID"`
    OrderItems  []OrderItem      `json:"order_items,omitempty" gorm:"foreignKey:ProductID"`
    ProgressEntries []SkincareProgress `json:"progress_entries,omitempty" gorm:"foreignKey:ProductID"`
}

// 🆕 Notification Model
type Notification struct {
    ID           uint      `json:"id" gorm:"primaryKey"`
    UserID       uint      `json:"user_id" gorm:"not null"`
    
    Type         string    `json:"type" gorm:"not null"`
    Title        string    `json:"title" gorm:"not null"`
    Message      string    `json:"message" gorm:"not null"`
    
    RelatedType  string    `json:"related_type"`
    RelatedID    *uint     `json:"related_id"`
    
    IsRead       bool      `json:"is_read" gorm:"default:false"`
    ReadAt       *time.Time `json:"read_at"`
    
    EmailSent    bool      `json:"email_sent" gorm:"default:false"`
    PushSent     bool      `json:"push_sent" gorm:"default:false"`
    
    CreatedAt    time.Time `json:"created_at"`
    ExpiresAt    *time.Time `json:"expires_at"`
    
    // Relationships
    User User `json:"user,omitempty" gorm:"foreignKey:UserID"`
}

// 🆕 Feedback DTOs and Request/Response Models

// Enhanced Review Creation Request
type CreateReviewRequest struct {
    ProductID           uint     `json:"product_id" validate:"required"`
    Rating              int      `json:"rating" validate:"required,min=1,max=5"`
    Title               string   `json:"title" validate:"max=255"`
    ReviewText          string   `json:"review_text" validate:"max=2000"`
    
    // Skincare-specific fields
    SkinTypeAtReview    string   `json:"skin_type_at_review" validate:"omitempty,oneof=oily dry combination sensitive normal acne"`
    UsageDuration       *int     `json:"usage_duration" validate:"omitempty,min=0"`
    VisibleResults      bool     `json:"visible_results"`
    WouldRecommend      bool     `json:"would_recommend"`
    
    // Detailed ratings
    EffectivenessRating *int     `json:"effectiveness_rating" validate:"omitempty,min=1,max=5"`
    TextureRating       *int     `json:"texture_rating" validate:"omitempty,min=1,max=5"`
    ScentRating         *int     `json:"scent_rating" validate:"omitempty,min=1,max=5"`
    PackagingRating     *int     `json:"packaging_rating" validate:"omitempty,min=1,max=5"`
    ValueForMoneyRating *int     `json:"value_for_money_rating" validate:"omitempty,min=1,max=5"`
    
    // Experience details
    SkinConditionBefore string   `json:"skin_condition_before" validate:"max=500"`
    SkinConditionAfter  string   `json:"skin_condition_after" validate:"max=500"`
    SideEffects         string   `json:"side_effects" validate:"max=500"`
    
    // Usage details
    HowOftenUsed        string   `json:"how_often_used" validate:"omitempty,oneof=daily twice_daily weekly 2-3_times_week as_needed"`
    ApplicationMethod   string   `json:"application_method" validate:"max=300"`
    UsedWithOtherProducts []uint `json:"used_with_other_products"`
    
    // Media
    Photos              []string `json:"photos" validate:"max=5"`
    VideoURL            string   `json:"video_url" validate:"omitempty,url"`
}

// Progress Update Request
type ProgressUpdateRequest struct {
    ProductID             uint     `json:"product_id" validate:"required"`
    WeekNumber            int      `json:"week_number" validate:"required,min=1,max=52"`
    ProgressPhoto         string   `json:"progress_photo" validate:"omitempty,url"`
    SkinConditionNotes    string   `json:"skin_condition_notes" validate:"max=1000"`
    
    OverallSatisfaction   int      `json:"overall_satisfaction" validate:"required,min=1,max=5"`
    SkinImprovement       int      `json:"skin_improvement" validate:"required,min=1,max=5"`
    SideEffectsSeverity   int      `json:"side_effects_severity" validate:"min=0,max=5"`
    
    // Improvement flags
    AcneReduced           bool     `json:"acne_reduced"`
    SkinTextureImproved   bool     `json:"skin_texture_improved"`
    HydrationImproved     bool     `json:"hydration_improved"`
    RednessReduced        bool     `json:"redness_reduced"`
    PoresMinimized        bool     `json:"pores_minimized"`
    BrightnessImproved    bool     `json:"brightness_improved"`
    ScarringReduced       bool     `json:"scarring_reduced"`
    OilControlImproved    bool     `json:"oil_control_improved"`
}

// Enhanced Product Response with Feedback Summary
type ProductWithFeedback struct {
    Product
    
    // 🆕 Feedback Summary
    FeedbackSummary struct {
        TotalReviews        int     `json:"total_reviews"`
        AvgRating           float64 `json:"avg_rating"`
        ResultsRate         float64 `json:"results_rate"`
        RecommendationRate  float64 `json:"recommendation_rate"`
        
        // Detailed ratings breakdown
        AvgEffectiveness    float64 `json:"avg_effectiveness"`
        AvgTexture          float64 `json:"avg_texture"`
        AvgScent            float64 `json:"avg_scent"`
        AvgPackaging        float64 `json:"avg_packaging"`
        AvgValue            float64 `json:"avg_value"`
        
        // Skin type performance
        SkinTypeBreakdown   map[string]struct {
            Count       int     `json:"count"`
            AvgRating   float64 `json:"avg_rating"`
            ResultsRate float64 `json:"results_rate"`
        } `json:"skin_type_breakdown"`
        
        // Recent trends
        RecentTrend         string  `json:"recent_trend"` // "improving", "stable", "declining"
        SentimentScore      float64 `json:"sentiment_score"`
        
        // Community engagement
        QuestionsCount      int     `json:"questions_count"`
        ProgressTrackingUsers int   `json:"progress_tracking_users"`
    } `json:"feedback_summary"`
}
```

## 🔗 Complete API Endpoints with Advanced Feedback System

### 🆕 Enhanced Customer API Endpoints

```go
// =============================================
// ENHANCED FEEDBACK & REVIEW ENDPOINTS
// =============================================

// 1. Product Reviews (Enhanced)
POST   /api/v1/products/:id/reviews                    // 🆕 Submit comprehensive review
GET    /api/v1/products/:id/reviews                    // Get reviews with advanced filtering
GET    /api/v1/products/:id/reviews/summary            // 🆕 Get feedback analytics summary
PUT    /api/v1/reviews/:id                             // Update own review
DELETE /api/v1/reviews/:id                             // Delete own review
POST   /api/v1/reviews/:id/vote                        // Vote helpful/unhelpful
GET    /api/v1/reviews/:id/votes                       // Get vote statistics

// 2. 🆕 Skincare Progress Tracking
POST   /api/v1/progress/start/:product_id              // Start tracking progress
POST   /api/v1/progress/update                         // Submit weekly progress update
GET    /api/v1/progress/user/:user_id                  // Get user's progress entries
GET    /api/v1/progress/product/:product_id            // Get all progress for product
POST   /api/v1/progress/:id/photo                      // Upload progress photo
GET    /api/v1/progress/:id/timeline                   // Get progress timeline

// 3. 🆕 Product Q&A System
POST   /api/v1/products/:id/questions                  // Ask a question about product
GET    /api/v1/products/:id/questions                  // Get questions for product
POST   /api/v1/questions/:id/answers                   // Answer a question
GET    /api/v1/questions/:id/answers                   // Get answers for question
POST   /api/v1/questions/:id/vote                      // Vote on question helpfulness
POST   /api/v1/answers/:id/vote                        // Vote on answer helpfulness

// 4. Profile Management (Enhanced)
GET    /api/v1/auth/me                                 // Get current user profile
PUT    /api/v1/auth/profile                            // Update profile
POST   /api/v1/auth/profile/picture                    // 🆕 Upload profile picture
DELETE /api/v1/auth/profile/picture                    // 🆕 Remove profile picture
GET    /api/v1/auth/profile/picture                    // 🆕 Get profile picture URL

// 5. 🆕 User Feedback Dashboard
GET    /api/v1/user/feedback/dashboard                 // Comprehensive feedback dashboard
GET    /api/v1/user/feedback/stats                     // User's feedback statistics
GET    /api/v1/user/feedback/impact                    // How their feedback helped others
GET    /api/v1/user/feedback/reputation                // Community reputation score

// 6. 🆕 Notification System
GET    /api/v1/notifications                           // Get user notifications
PUT    /api/v1/notifications/:id/read                  // Mark notification as read
PUT    /api/v1/notifications/read-all                  // Mark all as read
GET    /api/v1/notifications/unread-count              // Get unread count
POST   /api/v1/notifications/preferences               // Update notification preferences

// 7. File Upload (Enhanced)
POST   /api/v1/upload/profile-picture                  // Profile picture upload
POST   /api/v1/upload/review-photo                     // 🆕 Review photo upload
POST   /api/v1/upload/progress-photo                   // 🆕 Progress photo upload
POST   /api/v1/upload/question-image                   // 🆕 Question image upload
DELETE /api/v1/upload/:type/:filename                  // Delete uploaded file

// =============================================
// ENHANCED ADMIN API ENDPOINTS
// =============================================

// 1. Advanced Review Management
GET    /api/v1/admin/reviews                           // All reviews with advanced filtering
GET    /api/v1/admin/reviews/pending                   // Reviews pending approval
POST   /api/v1/admin/reviews/:id/approve               // Approve review
POST   /api/v1/admin/reviews/:id/reject                // Reject review
POST   /api/v1/admin/reviews/:id/flag                  // Flag review for attention
GET    /api/v1/admin/reviews/analytics                 // 🆕 Review analytics dashboard

// 2. 🆕 Content Moderation
GET    /api/v1/admin/moderation/queue                  // Content moderation queue
POST   /api/v1/admin/moderation/:id/approve            // Approve flagged content
POST   /api/v1/admin/moderation/:id/reject             // Reject flagged content
GET    /api/v1/admin/moderation/stats                  // Moderation statistics
POST   /api/v1/admin/moderation/bulk-action            // Bulk moderation actions

// 3. 🆕 Product Feedback Intelligence
GET    /api/v1/admin/products/:id/feedback-intelligence // Comprehensive product feedback analysis
GET    /api/v1/admin/products/:id/sentiment-analysis   // Sentiment analysis for product
GET    /api/v1/admin/products/:id/competitive-analysis // Compare with similar products
GET    /api/v1/admin/products/feedback-trends          // Overall feedback trends
POST   /api/v1/admin/products/:id/feedback-insights   // Generate AI insights for product

// 4. 🆕 Community Management
GET    /api/v1/admin/users/community-leaders           // Top community contributors
GET    /api/v1/admin/users/:id/feedback-history        // User's complete feedback history
POST   /api/v1/admin/users/:id/promote-expert          // Promote user to expert status
POST   /api/v1/admin/users/:id/community-score         // Update community score
GET    /api/v1/admin/community/engagement-stats        // Community engagement metrics

// 5. Customer Management (Enhanced)
GET    /api/v1/admin/customers                         // All customers with feedback stats
GET    /api/v1/admin/customers/:id                     // Customer details with feedback
GET    /api/v1/admin/customers/:id/profile-picture     // 🆕 View customer profile picture
GET    /api/v1/admin/customers/:id/feedback-summary    // 🆕 Customer feedback summary
GET    /api/v1/admin/customers/:id/skin-journey        // 🆕 Customer's skincare journey

// 6. 🆕 Analytics & Reports
GET    /api/v1/admin/analytics/feedback-overview       // Overall feedback analytics
GET    /api/v1/admin/analytics/skin-type-insights      // Skin type performance insights
GET    /api/v1/admin/analytics/sentiment-dashboard     // Sentiment analysis dashboard
GET    /api/v1/admin/analytics/community-health        // Community engagement health
GET    /api/v1/admin/reports/feedback-export           // Export feedback data
GET    /api/v1/admin/reports/progress-tracking-insights // Progress tracking insights

// =============================================
// 🎯 ENHANCED ML SERVICE ENDPOINTS
// =============================================

// 1. Recommendations (Enhanced with Feedback)
GET    /ml/v1/recommendations/user/:user_id            // Personalized recommendations
POST   /ml/v1/recommendations/skin-type/acne           // 🆕 Acne-specific recommendations
POST   /ml/v1/recommendations/feedback-based           // 🆕 Feedback-pattern based recommendations
GET    /ml/v1/recommendations/trending/:skin_type      // Trending for specific skin types
POST   /ml/v1/recommendations/similar-users            // 🆕 Recommendations from similar user feedback

// 2. 🆕 Feedback Intelligence & Analytics
POST   /ml/v1/feedback/analyze-sentiment               // Analyze review sentiment
POST   /ml/v1/feedback/extract-insights                // Extract insights from feedback
GET    /ml/v1/feedback/user/:user_id/patterns          // User's feedback patterns
GET    /ml/v1/feedback/product/:id/intelligence        // Product feedback intelligence
POST   /ml/v1/feedback/predict-satisfaction            // Predict user satisfaction
GET    /ml/v1/feedback/community/influencers           // Identify community influencers

// 3. Skin Analysis (Enhanced)
POST   /ml/v1/skin-analysis/detect-acne                // 🆕 Acne-specific analysis
POST   /ml/v1/skin-analysis/progress-comparison        // 🆕 Compare progress photos
GET    /ml/v1/skin-analysis/acne-severity/:user_id     // 🆕 Track acne progress over time
POST   /ml/v1/skin-analysis/recommend-routine          // 🆕 Complete skincare routine
POST   /ml/v1/skin-analysis/ingredient-compatibility   // 🆕 Check ingredient compatibility

// 4. 🆕 Predictive Analytics
POST   /ml/v1/predictions/product-success              // Predict product success for user
POST   /ml/v1/predictions/user-satisfaction            // Predict user satisfaction
GET    /ml/v1/predictions/trending-concerns            // Predict trending skin concerns
POST   /ml/v1/predictions/repurchase-likelihood        // Predict repurchase likelihood
GET    /ml/v1/predictions/market-opportunities         // Identify market opportunities

// 5. Analytics & Insights (Enhanced)
POST   /ml/v1/analytics/track-event                    // Track user behavior event
GET    /ml/v1/analytics/user/:user_id/skin-journey     // Complete skin journey analysis
GET    /ml/v1/analytics/product/:id/performance        // Product performance analytics
GET    /ml/v1/analytics/feedback-trends                // 🆕 Feedback trend analysis
GET    /ml/v1/analytics/sentiment-evolution            // 🆕 Sentiment evolution over time

// =============================================
// 🆕 REAL-TIME FEEDBACK PROCESSING ENDPOINTS (Node.js Service)
// =============================================

// Webhook endpoints for real-time processing
POST   /webhook/review-submitted                       // Process new review
POST   /webhook/progress-updated                       // Process progress update
POST   /webhook/question-asked                         // Process new question
POST   /webhook/answer-provided                        // Process new answer

// Real-time notifications
POST   /realtime/notify-review-response                // Notify user of review response
POST   /realtime/notify-question-answered              // Notify when question is answered
POST   /realtime/notify-product-recommendation         // Real-time product recommendation
```

## 🚀 **Production-Ready Features & Enhancements**

### 🔒 **Security Enhancements**
- **Content Moderation**: AI-powered detection of spam, inappropriate content, and medical claims
- **Rate Limiting**: Advanced rate limiting for review submissions and API calls
- **Image Validation**: Secure image upload with virus scanning and content filtering
- **Privacy Protection**: GDPR-compliant data handling and user consent management

### ⚡ **Performance Optimizations**
- **Caching Strategy**: Multi-level caching with Redis for frequently accessed feedback data
- **Database Optimization**: Optimized indexes for complex feedback queries
- **CDN Integration**: Fast delivery of user-generated images (progress photos, reviews)
- **Async Processing**: Background processing for ML analysis and notifications

### 📊 **Advanced Analytics**
- **Real-time Dashboards**: Live feedback monitoring and sentiment tracking
- **Predictive Insights**: ML-powered predictions for product success and user satisfaction
- **Community Analytics**: Track engagement, influencers, and community health
- **Business Intelligence**: Comprehensive reporting for business decision-making

### 🔄 **Integration Capabilities**
- **Email Services**: Automated feedback request emails and notifications
- **Social Media**: Share reviews and progress photos on social platforms
- **CRM Integration**: Sync customer feedback data with external CRM systems
- **Analytics Tools**: Integration with Google Analytics, Mixpanel, and other tools

## 🎯 **Key Improvements & New Features**

### ✅ **1. Complete Feedback System**
- **Multi-dimensional Reviews** - Rating effectiveness, texture, scent, packaging, value
- **Progress Tracking** - Week-by-week skincare journey with photos
- **Q&A Community** - Questions and expert answers system
- **Sentiment Analysis** - AI-powered sentiment analysis of all feedback

### ✅ **2. Enhanced User Experience**
- **Profile Pictures** - Users and admins can upload profile photos
- **Community Features** - Expert users, community scores, reputation system
- **Smart Notifications** - Contextual notifications for feedback interactions
- **Personalized Dashboards** - Individual feedback impact and statistics

### ✅ **3. Advanced ML & AI**
- **Feedback-Enhanced Recommendations** - Use review patterns for better recommendations
- **Predictive Analytics** - Predict product success and user satisfaction
- **Content Intelligence** - Auto-generate product highlights from reviews
- **Acne-Specific Models** - Specialized ML models for acne skin type

### ✅ **4. Business Intelligence**
- **Product Intelligence** - Deep insights into product performance by skin type
- **Competitive Analysis** - Compare products based on feedback metrics
- **Market Opportunities** - Identify gaps and opportunities from feedback data
- **Risk Assessment** - Early warning system for product issues

### ✅ **5. Operational Excellence**
- **Content Moderation** - Automated and manual content moderation workflows
- **Real-time Processing** - Live feedback processing and notifications
- **Comprehensive Testing** - Unit, integration, and performance tests
- **Monitoring & Alerting** - Full observability with metrics and alerts

## 🏆 **System Architecture Benefits**

### **🔵 PostgreSQL Strengths:**
- **ACID Compliance** - Reliable transactional data for orders, users, reviews
- **Complex Queries** - Advanced SQL for ML training data extraction
- **Referential Integrity** - Consistent relationships between entities
- **Performance** - Optimized indexes for frequent ML and feedback queries

### **🟢 MongoDB Advantages:**
- **Flexible Schema** - Perfect for ML results and analytics data
- **Horizontal Scaling** - Handle large volumes of behavior and feedback data
- **Rich Queries** - Complex aggregations for feedback intelligence
- **Real-time Analytics** - Fast aggregations for dashboards and insights

### **🔴 Redis Benefits:**
- **Ultra-fast Access** - Sub-millisecond response for cached recommendations
- **Real-time Features** - Live notifications and feedback processing
- **Session Management** - Secure and scalable user sessions
- **Queue Processing** - Reliable background job processing

## 📈 **Scalability & Performance**

### **Database Scaling Strategy:**
1. **PostgreSQL**: Read replicas for ML training queries, partitioning for large tables
2. **MongoDB**: Sharding by user_id and product_id for analytics collections
3. **Redis**: Clustering for high availability and performance

### **Caching Strategy:**
- **L1 Cache**: Application-level caching for frequently accessed data
- **L2 Cache**: Redis caching for database query results
- **L3 Cache**: CDN caching for static assets and images

### **Monitoring & Observability:**
- **Metrics**: Database performance, API response times, ML model accuracy
- **Logs**: Structured logging for debugging and audit trails
- **Alerts**: Proactive alerts for system health and business metrics
- **Dashboards**: Real-time visibility into system performance and user behavior

## 🎯 **Final Summary**

This enhanced backend system provides:

**✅ Complete E-commerce Foundation** - Users, products, orders, payments, inventory
**✅ Advanced Feedback System** - Multi-dimensional reviews, progress tracking, Q&A
**✅ ML-Powered Intelligence** - Recommendations, sentiment analysis, predictive insights  
**✅ Skincare-Specific Features** - Acne support, skin type matching, progress photos
**✅ Community Features** - Expert users, reputation system, social proof
**✅ Admin Intelligence** - Business insights, competitive analysis, risk assessment
**✅ Production-Ready** - Security, performance, monitoring, scalability
**✅ Developer-Friendly** - Well-documented APIs, comprehensive testing, clean architecture

Your skincare e-commerce platform is now equipped with one of the most comprehensive feedback and intelligence systems possible, combining the reliability of PostgreSQL, the flexibility of MongoDB, and the speed of Redis with advanced ML capabilities and real-time processing! 🚀