# Skincare E-commerce Platform

A multilingual skincare e-commerce platform with AI-powered recommendations supporting Thai, English, and Khmer languages.

## Tech Stack
- **Frontend**: Next.js + React + TypeScript
- **Backend**: Go (Microservices) + Python FastAPI (ML)
- **Databases**: PostgreSQL + MongoDB
- **Cache**: Redis

## Architecture
Microservices architecture with separate services for different concerns.

## Setup Instructions
See individual service README files for setup instructions.

## Development
1. Start databases: `docker-compose up -d`
2. Start services in separate terminals
3. Access frontend at http://localhost:3000
```

## Step 4: Frontend Setup (Next.js)

```bash
cd frontend
```

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir
```

```bash
npm install react-i18next i18next-browser-languagedetector i18next-http-backend
```

```bash
npm install @headlessui/react @heroicons/react axios zustand
```

```bash
npm install @types/node @types/react @types/react-dom
```

Create `frontend/README.md`:
```markdown
# Frontend - Skincare E-commerce

## Setup
```bash
npm install
npm run dev
```

## Features
- Multilingual support (Thai, English, Khmer)
- Responsive design
- Product catalog
- Shopping cart
- User authentication
```

## Step 5: API Gateway Setup (Go)

```bash
cd ..\services\api-gateway
```

```bash
go mod init github.com/yourusername/skincare-ecommerce/api-gateway
```

```bash
go get github.com/gin-gonic/gin
```

```bash
go get github.com/gin-contrib/cors
```

```bash
go get gorm.io/gorm gorm.io/driver/postgres
```

```bash
go get github.com/golang-jwt/jwt/v5
```

```bash
go get github.com/go-redis/redis/v8
```

## Step 6: Product Service Setup (Go)

```bash
cd ..\product-service
```

```bash
go mod init github.com/yourusername/skincare-ecommerce/product-service
```

```bash
go get github.com/gin-gonic/gin gorm.io/gorm gorm.io/driver/postgres
```

```bash
go get github.com/go-playground/validator/v10
```

```bash
go get github.com/google/uuid
```

## Step 7: Auth Service Setup (Go)

```bash
cd ..\auth-service
```

```bash
go mod init github.com/yourusername/skincare-ecommerce/auth-service
```

```bash
go get github.com/gin-gonic/gin gorm.io/gorm gorm.io/driver/postgres
```

```bash
go get golang.org/x/crypto/bcrypt
```

```bash
go get github.com/golang-jwt/jwt/v5
```

## Step 8: Order Service Setup (Go)

```bash
cd ..\order-service
```

```bash
go mod init github.com/yourusername/skincare-ecommerce/order-service
```

```bash
go get github.com/gin-gonic/gin gorm.io/gorm gorm.io/driver/postgres
```

## Step 9: ML Service Setup (Python)

```bash
cd ..\ml-service
```

```bash
python -m venv venv
```

```bash
venv\Scripts\activate
```

```bash
pip install fastapi uvicorn pymongo motor pandas scikit-learn
```

```bash
pip install python-multipart pydantic python-jose[cryptography]
```

```bash
pip freeze > requirements.txt
```

Create `services/ml-service/README.md`:
```markdown
# ML Service - Recommendation Engine

## Setup
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

## Features
- Product recommendations
- User behavior analysis
- Content-based filtering
- Collaborative filtering
```

## Step 10: Docker Setup

Create `docker-compose.yml` in root:
```yaml
version: '3.8'
services:
  postgres:
    image: postgres:15
    environment:
      POSTGRES_DB: skincare_db
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password123
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  mongodb:
    image: mongo:6
    environment:
      MONGO_INITDB_ROOT_USERNAME: admin
      MONGO_INITDB_ROOT_PASSWORD: password123
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  mongodb_data:
  redis_data:
```

## Step 11: VS Code Workspace Configuration

Create `.vscode/launch.json`:
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch API Gateway",
      "type": "go",
      "request": "launch",
      "mode": "auto",
      "program": "${workspaceFolder}/services/api-gateway",
      "cwd": "${workspaceFolder}/services/api-gateway"
    },
    {
      "name": "Launch Product Service",
      "type": "go",
      "request": "launch",
      "mode": "auto",
      "program": "${workspaceFolder}/services/product-service",
      "cwd": "${workspaceFolder}/services/product-service"
    }
  ]
}
```

Create `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Start Frontend",
      "type": "shell",
      "command": "npm run dev",
      "options": {
        "cwd": "${workspaceFolder}/frontend"
      },
      "group": "build"
    },
    {
      "label": "Start Databases",
      "type": "shell",
      "command": "docker-compose up -d",
      "options": {
        "cwd": "${workspaceFolder}"
      },
      "group": "build"
    }
  ]
}
```

## Step 12: Environment Files Setup

Create environment template files:

`frontend/.env.example`:
```
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_APP_NAME=Skincare Store
```

`services/api-gateway/.env.example`:
```
PORT=8080
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=password123
DB_NAME=skincare_products
JWT_SECRET=your-jwt-secret-key
REDIS_URL=redis://localhost:6379
```

## Step 13: GitHub Repository Setup

```bash
git add .
```

```bash
git commit -m "Initial project setup with microservices architecture"
```

Create repository on GitHub, then:

```bash
git remote add origin https://github.com/yourusername/skincare-ecommerce.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

## Step 14: Development Scripts

Create `package.json` in root for convenience:
```json
{
  "name": "skincare-ecommerce",
  "version": "1.0.0",
  "scripts": {
    "dev:frontend": "cd frontend && npm run dev",
    "dev:db": "docker-compose up -d",
    "dev:api": "cd services/api-gateway && go run main.go",
    "dev:ml": "cd services/ml-service && venv\\Scripts\\activate && uvicorn main:app --reload --port 8001",
    "install:frontend": "cd frontend && npm install",
    "install:ml": "cd services/ml-service && pip install -r requirements.txt"
  }
}
```

## Step 15: Database Setup with DBeaver

1. **Install DBeaver** from https://dbeaver.io/
2. **Start PostgreSQL**:
```bash
docker-compose up -d postgres
```

3. **Connect in DBeaver**:
   - Host: localhost
   - Port: 5432
   - Database: skincare_db
   - Username: postgres
   - Password: password123

## Development Workflow on Windows:

1. **Start databases**:
```bash
docker-compose up -d
```

2. **Start services** (in separate Command Prompt/PowerShell windows):
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - API Gateway
cd services\api-gateway
go run main.go

# Terminal 3 - ML Service
cd services\ml-service
venv\Scripts\activate
uvicorn main:app --reload --port 8001
```

## Git Workflow:
```bash
# Daily workflow
git pull origin main
# Make changes
git add .
git commit -m "Your commit message"
git push origin main
