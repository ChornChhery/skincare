#!/bin/bash

# =============================================
# Database Setup Script for Skincare E-commerce
# =============================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Load environment variables
if [ -f .env ]; then
    echo -e "${BLUE}📄 Loading environment variables from .env${NC}"
    source .env
else
    echo -e "${YELLOW}⚠️  No .env file found, using defaults${NC}"
fi

# Database configuration with defaults
POSTGRES_HOST=${POSTGRES_HOST:-localhost}
POSTGRES_PORT=${POSTGRES_PORT:-5432}
POSTGRES_DB=${POSTGRES_DB:-skincare_ecommerce}
POSTGRES_USER=${POSTGRES_USER:-postgres}
POSTGRES_PASSWORD=${POSTGRES_PASSWORD:-}
POSTGRES_ADMIN_DB=${POSTGRES_ADMIN_DB:-postgres}

echo -e "${BLUE}🗄️  Database Setup for Skincare E-commerce${NC}"
echo -e "${BLUE}=====================================${NC}"

# Function to execute SQL command
execute_sql() {
    local sql_command="$1"
    local database="${2:-$POSTGRES_DB}"
    
    PGPASSWORD="$POSTGRES_PASSWORD" psql \
        -h "$POSTGRES_HOST" \
        -p "$POSTGRES_PORT" \
        -U "$POSTGRES_USER" \
        -d "$database" \
        -c "$sql_command"
}

# Function to execute SQL file
execute_sql_file() {
    local sql_file="$1"
    local database="${2:-$POSTGRES_DB}"
    
    echo -e "${BLUE}📝 Executing: $sql_file${NC}"
    
    PGPASSWORD="$POSTGRES_PASSWORD" psql \
        -h "$POSTGRES_HOST" \
        -p "$POSTGRES_PORT" \
        -U "$POSTGRES_USER" \
        -d "$database" \
        -f "$sql_file"
}

# Function to check if database exists
database_exists() {
    local db_name="$1"
    
    PGPASSWORD="$POSTGRES_PASSWORD" psql \
        -h "$POSTGRES_HOST" \
        -p "$POSTGRES_PORT" \
        -U "$POSTGRES_USER" \
        -d "$POSTGRES_ADMIN_DB" \
        -tAc "SELECT 1 FROM pg_database WHERE datname='$db_name';" | grep -q 1
}

# Function to check PostgreSQL connection
check_postgres_connection() {
    echo -e "${BLUE}🔍 Checking PostgreSQL connection...${NC}"
    
    if PGPASSWORD="$POSTGRES_PASSWORD" psql \
        -h "$POSTGRES_HOST" \
        -p "$POSTGRES_PORT" \
        -U "$POSTGRES_USER" \
        -d "$POSTGRES_ADMIN_DB" \
        -c "SELECT version();" > /dev/null 2>&1; then
        echo -e "${GREEN}✅ PostgreSQL connection successful${NC}"
        return 0
    else
        echo -e "${RED}❌ Failed to connect to PostgreSQL${NC}"
        echo -e "${YELLOW}Please check your database configuration:${NC}"
        echo -e "   Host: $POSTGRES_HOST"
        echo -e "   Port: $POSTGRES_PORT"
        echo -e "   User: $POSTGRES_USER"
        return 1
    fi
}

# Function to create database
create_database() {
    echo -e "${BLUE}🏗️  Creating database: $POSTGRES_DB${NC}"
    
    if database_exists "$POSTGRES_DB"; then
        echo -e "${YELLOW}⚠️  Database '$POSTGRES_DB' already exists${NC}"
        read -p "Do you want to recreate it? (y/N): " -n 1 -r
        echo
        
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${YELLOW}🗑️  Dropping existing database...${NC}"
            execute_sql "DROP DATABASE IF EXISTS $POSTGRES_DB;" "$POSTGRES_ADMIN_DB"
        else
            echo -e "${BLUE}📋 Using existing database${NC}"
            return 0
        fi
    fi
    
    execute_sql "CREATE DATABASE $POSTGRES_DB;" "$POSTGRES_ADMIN_DB"
    echo -e "${GREEN}✅ Database '$POSTGRES_DB' created successfully${NC}"
}

# Function to create upload directories
create_upload_directories() {
    echo -e "${BLUE}📁 Creating upload directories...${NC}"
    
    local base_path="${UPLOAD_BASE_PATH:-./uploads}"
    
    directories=(
        "$base_path"
        "$base_path/profiles"
        "$base_path/products"
        "$base_path/reviews"
        "$base_path/progress"
        "$base_path/qa"
        "$base_path/temp"
    )
    
    for dir in "${directories[@]}"; do
        if [ ! -d "$dir" ]; then
            mkdir -p "$dir"
            echo -e "${GREEN}✅ Created: $dir${NC}"
        else
            echo -e "${BLUE}📂 Exists: $dir${NC}"
        fi
    done
    
    # Set proper permissions
    chmod -R 755 "$base_path"
    echo -e "${GREEN}✅ Upload directories ready${NC}"
}

# Function to run migrations
run_migrations() {
    echo -e "${BLUE}🔄 Running database migrations...${NC}"
    
    local migrations_dir="services/api-server/migrations"
    
    if [ ! -d "$migrations_dir" ]; then
        echo -e "${YELLOW}⚠️  Migrations directory not found: $migrations_dir${NC}"
        return 1
    fi
    
    # Find all .sql files and sort them
    for migration_file in $(find "$migrations_dir" -name "*.sql" | sort); do
        echo -e "${BLUE}🔄 Running migration: $(basename "$migration_file")${NC}"
        
        if execute_sql_file "$migration_file"; then
            echo -e "${GREEN}✅ Migration completed: $(basename "$migration_file")${NC}"
        else
            echo -e "${RED}❌ Migration failed: $(basename "$migration_file")${NC}"
            return 1
        fi
    done
    
    echo -e "${GREEN}✅ All migrations completed successfully${NC}"
}

# Function to verify database setup
verify_database_setup() {
    echo -e "${BLUE}🔍 Verifying database setup...${NC}"
    
    # Check if key tables exist
    local tables=(
        "uploaded_files"
        "file_upload_configs" 
        "users"
        "user_addresses"
    )
    
    for table in "${tables[@]}"; do
        if execute_sql "SELECT 1 FROM information_schema.tables WHERE table_name = '$table';" | grep -q 1; then
            echo -e "${GREEN}✅ Table '$table' exists${NC}"
        else
            echo -e "${RED}❌ Table '$table' missing${NC}"
            return 1
        fi
    done
    
    # Check file upload configs
    local config_count=$(execute_sql "SELECT COUNT(*) FROM file_upload_configs;" | grep -o '[0-9]\+')
    if [ "$config_count" -gt 0 ]; then
        echo -e "${GREEN}✅ File upload configurations: $config_count${NC}"
    else
        echo -e "${YELLOW}⚠️  No file upload configurations found${NC}"
    fi
    
    echo -e "${GREEN}✅ Database verification completed${NC}"
}

# Function to create initial admin user
create_admin_user() {
    echo -e "${BLUE}👤 Creating initial admin user...${NC}"
    
    local admin_email="${ADMIN_EMAIL:-admin@yourdomain.com}"
    local admin_password="${ADMIN_DEFAULT_PASSWORD:-admin123}"
    
    # Check if admin user already exists
    local existing_admin=$(execute_sql "SELECT COUNT(*) FROM users WHERE email = '$admin_email' AND role = 'admin';" | grep -o '[0-9]\+')
    
    if [ "$existing_admin" -gt 0 ]; then
        echo -e "${YELLOW}⚠️  Admin user already exists: $admin_email${NC}"
        return 0
    fi
    
    # Hash the password (we'll use a simple approach for now)
    local password_hash='$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj3zV2kf2E5i' # 'admin123'
    
    execute_sql "
        INSERT INTO users (
            email, 
            password, 
            first_name, 
            last_name, 
            role, 
            is_active, 
            email_verified,
            created_at
        ) VALUES (
            '$admin_email',
            '$password_hash',
            'Admin',
            'User',
            'admin',
            true,
            true,
            NOW()
        );
    "
    
    echo -e "${GREEN}✅ Admin user created:${NC}"
    echo -e "   Email: $admin_email"
    echo -e "   Password: $admin_password"
    echo -e "${YELLOW}⚠️  Please change the password after first login!${NC}"
}

# Function to display completion summary
display_summary() {
    echo -e "\n${GREEN}🎉 Database Setup Complete!${NC}"
    echo -e "${GREEN}=============================${NC}"
    echo -e "${BLUE}Database Details:${NC}"
    echo -e "   Host: $POSTGRES_HOST:$POSTGRES_PORT"
    echo -e "   Database: $POSTGRES_DB"
    echo -e "   User: $POSTGRES_USER"
    echo -e ""
    echo -e "${BLUE}Next Steps:${NC}"
    echo -e "   1. Start your API server: cd services/api-server && go run cmd/server/main.go"
    echo -e "   2. Test the health endpoint: curl http://localhost:8080/health"
    echo -e "   3. Access admin panel: http://localhost:3000/admin"
    echo -e ""
    echo -e "${YELLOW}Important:${NC}"
    echo -e "   • Change the default admin password"
    echo -e "   • Configure your .env file properly"
    echo -e "   • Set up Redis and MongoDB for full functionality"
}

# Main execution flow
main() {
    echo -e "${BLUE}🚀 Starting database setup...${NC}\n"
    
    # Step 1: Check PostgreSQL connection
    if ! check_postgres_connection; then
        exit 1
    fi
    
    # Step 2: Create database
    create_database
    
    # Step 3: Create upload directories
    create_upload_directories
    
    # Step 4: Run migrations
    if ! run_migrations; then
        echo -e "${RED}❌ Migration failed. Please check the error messages above.${NC}"
        exit 1
    fi
    
    # Step 5: Verify setup
    if ! verify_database_setup; then
        echo -e "${RED}❌ Database verification failed.${NC}"
        exit 1
    fi
    
    # Step 6: Create admin user
    create_admin_user
    
    # Step 7: Display summary
    display_summary
}

# Handle script arguments
case "${1:-}" in
    "help"|"-h"|"--help")
        echo "Usage: $0 [options]"
        echo "Options:"
        echo "  help, -h, --help    Show this help message"
        echo "  clean               Clean up and recreate database"
        echo "  verify              Only verify existing setup"
        echo "  migrate             Only run migrations"
        exit 0
        ;;
    "clean")
        echo -e "${YELLOW}🧹 Cleaning up existing database...${NC}"
        check_postgres_connection
        execute_sql "DROP DATABASE IF EXISTS $POSTGRES_DB;" "$POSTGRES_ADMIN_DB"
        main
        ;;
    "verify")
        echo -e "${BLUE}🔍 Verifying database setup...${NC}"
        check_postgres_connection
        verify_database_setup
        ;;
    "migrate")
        echo -e "${BLUE}🔄 Running migrations only...${NC}"
        check_postgres_connection
        run_migrations
        ;;
    *)
        main
        ;;
esac