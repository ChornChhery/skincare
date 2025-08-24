package config

import (
	"os"
	"strconv"
	"strings"
	"time"
)

type Config struct {
	// Server Configuration
	Port        string
	Host        string
	AppName     string
	AppVersion  string
	Environment string

	// PostgreSQL Configuration
	PostgresHost               string
	PostgresPort               string
	PostgresDB                 string
	PostgresUser               string
	PostgresPassword           string
	PostgresSSLMode            string
	PostgresMaxConnections     int
	PostgresMaxIdleConnections int
	PostgresConnectionTimeout  time.Duration

	// MongoDB Configuration
	MongoDBHost        string
	MongoDBPort        string
	MongoDBDatabase    string
	MongoDBUsername    string
	MongoDBPassword    string
	MongoDBAuthSource  string
	MongoDBMaxPoolSize int
	MongoDBMinPoolSize int

	// Redis Configuration
	RedisHost      string
	RedisPort      string
	RedisPassword  string
	RedisDB        int
	RedisMaxConns  int
	RedisSessionDB int
	RedisCacheDB   int
	RedisQueueDB   int

	// JWT Configuration
	JWTSecret        string
	JWTExpiry        time.Duration
	JWTRefreshExpiry time.Duration
	JWTIssuer        string

	// Security Configuration
	BcryptRounds      int
	PasswordMinLength int
	SessionSecret     string
	RateLimitMaxReqs  int
	RateLimitWindow   time.Duration

	// Email Configuration
	SMTPHost      string
	SMTPPort      string
	SMTPUsername  string
	SMTPPassword  string
	SMTPFromEmail string
	SMTPFromName  string

	// File Upload Configuration
	UploadBasePath     string
	UploadMaxFileSize  int64
	UploadAllowedTypes []string
	UploadBaseURL      string
	ImageQuality       int
	EnableWebPConvert  bool
	CreateThumbnails   bool
	ThumbnailSizes     string

	// Cloud Storage
	CloudStorageProvider string
	AWSRegion            string
	AWSBucket            string
	AWSAccessKeyID       string
	AWSSecretAccessKey   string

	// Security Features
	EnableVirusScan bool
	ClamAVHost      string
	ClamAVPort      string

	// Content Moderation
	EnableAutoModeration bool
	ToxicityThreshold    float64
	SpamThreshold        float64
	NSFWThreshold        float64
	ModerationAPIKey     string

	// External Services
	MLServiceURL            string
	MLServiceAPIKey         string
	FeedbackProcessorURL    string
	EnableRecommendations   bool
	EnableSentimentAnalysis bool

	// Frontend Integration
	FrontendURL    string
	AllowedOrigins []string

	// Development & Testing
	EnableDebugMode  bool
	EnableSQLLogging bool
	SeedDatabase     bool
	MockExternalAPIs bool

	// Monitoring
	EnableSwagger    bool
	SwaggerHost      string
	SwaggerBasePath  string
	LogLevel         string
	EnableRequestLog bool

	// Maintenance
	EnableAutoCleanup  bool
	CleanupInterval    time.Duration
	TempFileExpiry     time.Duration
	OldFileCleanupDays int

	// Admin Configuration
	AdminEmail           string
	AdminDefaultPassword string
	EnableAdminReg       bool
}

func Load() *Config {
	return &Config{
		// Server Configuration
		Port:        getEnv("PORT", "8080"),
		Host:        getEnv("HOST", "localhost"),
		AppName:     getEnv("APP_NAME", "skincare-ecommerce-api"),
		AppVersion:  getEnv("APP_VERSION", "1.0.0"),
		Environment: getEnv("ENV", "development"),

		// PostgreSQL Configuration
		PostgresHost:               getEnv("POSTGRES_HOST", "localhost"),
		PostgresPort:               getEnv("POSTGRES_PORT", "5432"),
		PostgresDB:                 getEnv("POSTGRES_DB", "skincare_ecommerce"),
		PostgresUser:               getEnv("POSTGRES_USER", "postgres"),
		PostgresPassword:           getEnv("POSTGRES_PASSWORD", ""),
		PostgresSSLMode:            getEnv("POSTGRES_SSL_MODE", "disable"),
		PostgresMaxConnections:     getEnvAsInt("POSTGRES_MAX_CONNECTIONS", 25),
		PostgresMaxIdleConnections: getEnvAsInt("POSTGRES_MAX_IDLE_CONNECTIONS", 5),
		PostgresConnectionTimeout:  getEnvAsDuration("POSTGRES_CONNECTION_TIMEOUT", 30*time.Second),

		// MongoDB Configuration
		MongoDBHost:        getEnv("MONGODB_HOST", "localhost"),
		MongoDBPort:        getEnv("MONGODB_PORT", "27017"),
		MongoDBDatabase:    getEnv("MONGODB_DATABASE", "skincare_analytics"),
		MongoDBUsername:    getEnv("MONGODB_USERNAME", ""),
		MongoDBPassword:    getEnv("MONGODB_PASSWORD", ""),
		MongoDBAuthSource:  getEnv("MONGODB_AUTH_SOURCE", "admin"),
		MongoDBMaxPoolSize: getEnvAsInt("MONGODB_MAX_POOL_SIZE", 50),
		MongoDBMinPoolSize: getEnvAsInt("MONGODB_MIN_POOL_SIZE", 5),

		// Redis Configuration
		RedisHost:      getEnv("REDIS_HOST", "localhost"),
		RedisPort:      getEnv("REDIS_PORT", "6379"),
		RedisPassword:  getEnv("REDIS_PASSWORD", ""),
		RedisDB:        getEnvAsInt("REDIS_DB", 0),
		RedisMaxConns:  getEnvAsInt("REDIS_MAX_CONNECTIONS", 10),
		RedisSessionDB: getEnvAsInt("REDIS_SESSION_DB", 1),
		RedisCacheDB:   getEnvAsInt("REDIS_CACHE_DB", 2),
		RedisQueueDB:   getEnvAsInt("REDIS_QUEUE_DB", 3),

		// JWT Configuration
		JWTSecret:        getEnv("JWT_SECRET", "your-super-secret-jwt-key"),
		JWTExpiry:        getEnvAsDuration("JWT_EXPIRY", 24*time.Hour),
		JWTRefreshExpiry: getEnvAsDuration("JWT_REFRESH_EXPIRY", 7*24*time.Hour),
		JWTIssuer:        getEnv("JWT_ISSUER", "skincare-ecommerce"),

		// Security Configuration
		BcryptRounds:      getEnvAsInt("BCRYPT_ROUNDS", 12),
		PasswordMinLength: getEnvAsInt("PASSWORD_MIN_LENGTH", 8),
		SessionSecret:     getEnv("SESSION_SECRET", "your-session-secret-key"),
		RateLimitMaxReqs:  getEnvAsInt("RATE_LIMIT_MAX_REQUESTS", 100),
		RateLimitWindow:   getEnvAsDuration("RATE_LIMIT_WINDOW_MINUTES", 15*time.Minute),

		// Email Configuration
		SMTPHost:      getEnv("SMTP_HOST", "smtp.gmail.com"),
		SMTPPort:      getEnv("SMTP_PORT", "587"),
		SMTPUsername:  getEnv("SMTP_USERNAME", ""),
		SMTPPassword:  getEnv("SMTP_PASSWORD", ""),
		SMTPFromEmail: getEnv("SMTP_FROM_EMAIL", "noreply@yourdomain.com"),
		SMTPFromName:  getEnv("SMTP_FROM_NAME", "Skincare E-commerce"),

		// File Upload Configuration
		UploadBasePath:     getEnv("UPLOAD_BASE_PATH", "./uploads"),
		UploadMaxFileSize:  getEnvAsInt64("UPLOAD_MAX_FILE_SIZE", 20971520), // 20MB
		UploadAllowedTypes: getEnvAsSlice("UPLOAD_ALLOWED_TYPES", []string{"image/jpeg", "image/png", "image/gif", "image/webp"}),
		UploadBaseURL:      getEnv("UPLOAD_BASE_URL", "http://localhost:8080/uploads"),
		ImageQuality:       getEnvAsInt("IMAGE_QUALITY", 80),
		EnableWebPConvert:  getEnvAsBool("ENABLE_WEBP_CONVERSION", true),
		CreateThumbnails:   getEnvAsBool("CREATE_THUMBNAILS", true),
		ThumbnailSizes:     getEnv("THUMBNAIL_SIZES", "150x150,300x300,600x600"),

		// Cloud Storage
		CloudStorageProvider: getEnv("CLOUD_STORAGE_PROVIDER", "local"),
		AWSRegion:            getEnv("AWS_REGION", "us-east-1"),
		AWSBucket:            getEnv("AWS_BUCKET", ""),
		AWSAccessKeyID:       getEnv("AWS_ACCESS_KEY_ID", ""),
		AWSSecretAccessKey:   getEnv("AWS_SECRET_ACCESS_KEY", ""),

		// Security Features
		EnableVirusScan: getEnvAsBool("ENABLE_VIRUS_SCAN", false),
		ClamAVHost:      getEnv("CLAMAV_HOST", "localhost"),
		ClamAVPort:      getEnv("CLAMAV_PORT", "3310"),

		// Content Moderation
		EnableAutoModeration: getEnvAsBool("ENABLE_AUTO_MODERATION", true),
		ToxicityThreshold:    getEnvAsFloat("TOXICITY_THRESHOLD", 0.8),
		SpamThreshold:        getEnvAsFloat("SPAM_THRESHOLD", 0.7),
		NSFWThreshold:        getEnvAsFloat("NSFW_THRESHOLD", 0.8),
		ModerationAPIKey:     getEnv("MODERATION_API_KEY", ""),

		// External Services
		MLServiceURL:            getEnv("ML_SERVICE_URL", "http://localhost:8001"),
		MLServiceAPIKey:         getEnv("ML_SERVICE_API_KEY", ""),
		FeedbackProcessorURL:    getEnv("FEEDBACK_PROCESSOR_URL", "http://localhost:8002"),
		EnableRecommendations:   getEnvAsBool("ENABLE_RECOMMENDATIONS", true),
		EnableSentimentAnalysis: getEnvAsBool("ENABLE_SENTIMENT_ANALYSIS", true),

		// Frontend Integration
		FrontendURL:    getEnv("FRONTEND_URL", "http://localhost:3000"),
		AllowedOrigins: getEnvAsSlice("ALLOWED_ORIGINS", []string{"http://localhost:3000"}),

		// Development & Testing
		EnableDebugMode:  getEnvAsBool("ENABLE_DEBUG_MODE", true),
		EnableSQLLogging: getEnvAsBool("ENABLE_SQL_LOGGING", false),
		SeedDatabase:     getEnvAsBool("SEED_DATABASE", true),
		MockExternalAPIs: getEnvAsBool("MOCK_EXTERNAL_APIS", true),

		// Monitoring
		EnableSwagger:    getEnvAsBool("ENABLE_SWAGGER", true),
		SwaggerHost:      getEnv("SWAGGER_HOST", "localhost:8080"),
		SwaggerBasePath:  getEnv("SWAGGER_BASE_PATH", "/api"),
		LogLevel:         getEnv("LOG_LEVEL", "info"),
		EnableRequestLog: getEnvAsBool("ENABLE_REQUEST_LOGGING", true),

		// Maintenance
		EnableAutoCleanup:  getEnvAsBool("ENABLE_AUTO_CLEANUP", true),
		CleanupInterval:    getEnvAsDuration("CLEANUP_INTERVAL", 24*time.Hour),
		TempFileExpiry:     getEnvAsDuration("TEMP_FILE_EXPIRY", time.Hour),
		OldFileCleanupDays: getEnvAsInt("OLD_FILE_CLEANUP_DAYS", 30),

		// Admin Configuration
		AdminEmail:           getEnv("ADMIN_EMAIL", "admin@yourdomain.com"),
		AdminDefaultPassword: getEnv("ADMIN_DEFAULT_PASSWORD", "change-this-password"),
		EnableAdminReg:       getEnvAsBool("ENABLE_ADMIN_REGISTRATION", false),
	}
}

// Helper functions for environment variable parsing
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

func getEnvAsInt(key string, defaultValue int) int {
	if value := os.Getenv(key); value != "" {
		if intValue, err := strconv.Atoi(value); err == nil {
			return intValue
		}
	}
	return defaultValue
}

func getEnvAsInt64(key string, defaultValue int64) int64 {
	if value := os.Getenv(key); value != "" {
		if intValue, err := strconv.ParseInt(value, 10, 64); err == nil {
			return intValue
		}
	}
	return defaultValue
}

func getEnvAsBool(key string, defaultValue bool) bool {
	if value := os.Getenv(key); value != "" {
		if boolValue, err := strconv.ParseBool(value); err == nil {
			return boolValue
		}
	}
	return defaultValue
}

func getEnvAsFloat(key string, defaultValue float64) float64 {
	if value := os.Getenv(key); value != "" {
		if floatValue, err := strconv.ParseFloat(value, 64); err == nil {
			return floatValue
		}
	}
	return defaultValue
}

func getEnvAsDuration(key string, defaultValue time.Duration) time.Duration {
	if value := os.Getenv(key); value != "" {
		if duration, err := time.ParseDuration(value); err == nil {
			return duration
		}
	}
	return defaultValue
}

func getEnvAsSlice(key string, defaultValue []string) []string {
	if value := os.Getenv(key); value != "" {
		return strings.Split(value, ",")
	}
	return defaultValue
}
