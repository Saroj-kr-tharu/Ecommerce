# 🛒 Ecommerce Backend API

A comprehensive Node.js REST API backend for an ecommerce platform built with Express.js, Sequelize ORM, and MySQL. This backend provides complete functionality for managing users, products, orders, and administrative operations with robust authentication and authorization.

## 🚀 **Recent Updates & Progress (November 2024)**

- ✅ **Docker Containerization** - Complete Docker setup with docker-compose for easy deployment
- ✅ **CI/CD Pipeline** - GitHub Actions workflow for automated deployment
- ✅ **Database Migrations** - All 5 core tables with proper relationships
- ✅ **OTP Authentication** - Enhanced security with email-based OTP verification
- ✅ **Role-based Authorization** - Admin, Customer, and User role management
- ✅ **Order Management System** - Complete order lifecycle with items tracking
- ✅ **Advanced Product Filtering** - Pagination, category, price, and brand filtering
- ✅ **Email Integration** - Nodemailer setup with custom templates
- ✅ **Error Handling** - Comprehensive error management system

## ✨ Features

- **🔐 Authentication & Authorization**
  - JWT-based authentication system
  - OTP-based login for enhanced security
  - Role-based access control (Admin, Customer, User)
  - Password encryption using bcrypt
  - Token verification and management

- **👑 Admin Management**
  - Complete product CRUD operations
  - Order management and status updates
  - Administrative dashboard capabilities
  - Protected admin routes with middleware

- **👥 Customer Features**
  - User registration and profile management
  - Product browsing with advanced filtering
  - Order placement and tracking
  - Customer-specific order history

- **📦 Product Management**
  - Full product lifecycle management
  - Category-based organization
  - Inventory tracking
  - Product search and filtering

- **🛍️ Order Processing**
  - Complete order management system
  - Order items tracking
  - Order status management
  - Customer order history

- **📧 Communication**
  - Email integration with Nodemailer
  - OTP email delivery
  - Custom email templates

- **🗄️ Database Management**
  - Sequelize ORM with MySQL
  - Database migrations for version control
  - Seeders for initial data setup
  - Model associations and relationships

## 🏗️ Project Architecture

This project follows a **layered architecture pattern** with clear separation of concerns and implements the **repository pattern** for clean data access:

```
📁 Project Structure
├── 📄 package.json                     # Dependencies and npm scripts
├── 📄 README.md                        # Comprehensive documentation
├── 📄 docker-compose.yml               # 🐳 Multi-container Docker setup
├── 📄 Dockerfile                       # 🐳 Node.js application container
├── 📁 .github/workflows/              # 🔄 CI/CD Pipeline
│   └── CiCDPipeline.yml               # GitHub Actions deployment workflow
└── 📁 src/                            # Source code directory
    ├── 📄 index.js                    # Application entry point & Express server
    │
    ├── 📁 config/                     # Configuration management
    │   ├── config.json                # Database configuration (MySQL)
    │   ├── docker-config.json         # Docker-specific database config
    │   ├── emailConfig.js             # Nodemailer email service setup
    │   └── serverConfig.js            # Server settings & environment variables
    │
    ├── 📁 controllers/                # 🎮 HTTP request handlers
    │   ├── adminControllers.js        # Admin operations (products, orders)
    │   ├── authControllers.js         # Authentication & OTP operations
    │   ├── custumerControllers.js     # Customer-specific operations
    │   └── index.js                   # Controller module exports
    │
    ├── 📁 middlewares/                # 🛡️ Custom middleware functions
    │   ├── adminMiddlewares.js        # Admin authentication & authorization
    │   ├── custumerMiddlewares.js     # Customer authentication middleware
    │   ├── userMiddlewares.js         # General user authentication
    │   └── index.js                   # Middleware module exports
    │
    ├── 📁 models/                     # 🗃️ Sequelize database models
    │   ├── user.js                    # User model with role management
    │   ├── product.js                 # Product model with inventory
    │   ├── order.js                   # Order model with status tracking
    │   ├── orderitem.js               # Order items for order details
    │   ├── otp.js                     # OTP model for 2FA verification
    │   └── index.js                   # Model associations & exports
    │
    ├── 📁 migrations/                 # 📊 Database schema migrations (v1.0)
    │   ├── 20251117070636-create-user.js      # User table with roles
    │   ├── 20251117161350-create-product.js   # Product catalog table
    │   ├── 20251118064421-create-order.js     # Order management table
    │   ├── 20251118083222-create-order-item.js # Order items relationship
    │   └── 20251119085224-create-otp.js       # OTP security table
    │
    ├── 📁 seeders/                    # 🌱 Database seed data
    │   └── 20251118052706-Products.js # Sample products for testing
    │
    ├── 📁 repository/                 # 📂 Data access layer (Repository Pattern)
    │   ├── curdRepo.js                # Generic CRUD operations base
    │   ├── userRepo.js                # User data access methods
    │   ├── productRepo.js             # Product data operations
    │   ├── ordersRepo.js              # Order data management
    │   ├── ordersItemRepo.js          # Order items data operations
    │   ├── otpRepo.js                 # OTP data access methods
    │   └── index.js                   # Repository module exports
    │
    ├── 📁 services/                   # 🏗️ Business logic layer
    │   ├── adminService.js            # Admin business operations
    │   ├── userService.js             # User business logic
    │   ├── custumerService.js         # Customer business operations
    │   ├── ordersService.js           # Order processing logic
    │   ├── ordersItemsService.js      # Order items business logic
    │   ├── otpService.js              # OTP generation & validation
    │   ├── curdService.js             # Generic CRUD service operations
    │   └── index.js                   # Service module exports
    │
    ├── 📁 Routes/                     # 🌐 API route definitions
    │   ├── index.js                   # Main Express router configuration
    │   └── 📁 routes/                 # Route modules
    │       └── index.js               # RESTful API endpoint definitions
    │
    └── 📁 utlis/                      # 🛠️ Utility functions and helpers
        ├── bcryptHelper.js            # Password hashing & validation
        ├── jwtHelper.js               # JWT token generation & verification
        ├── index.js                   # Utility module exports
        ├── 📁 Errors/                 # 🚨 Custom error handling system
        │   ├── AppErrors.js           # Application-specific error classes
        │   ├── https_codes.js         # HTTP status code constants
        │   ├── ServiceErrors.js       # Service layer error definitions
        │   └── ValidationErros.js     # Input validation error handling
        └── 📁 MailTemplate/           # 📧 Email template management
            └── otpTempalte.js         # OTP email HTML template
```

### 🔧 Architecture Layers

1. **🌐 Routes Layer** - Handles HTTP requests and routing
2. **🎮 Controllers Layer** - Processes requests and responses
3. **🏗️ Services Layer** - Contains business logic
4. **📊 Repository Layer** - Data access and database operations
5. **🗃️ Models Layer** - Database schema and relationships

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v14 or higher)
- **MySQL** (v8.0 or higher)
- **npm** or **yarn**

### 1. Clone the Repository
```bash
git clone https://github.com/Saroj-kr-tharu/Ecommerce.git
cd Ecommerce/01_Backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Configuration
PRIVATEJWT=your_super_secret_jwt_key_here

# Email Configuration
EMAIL_ID=your-email@gmail.com
EMAIL_PASS=your-app-password

# Database is configured in src/config/config.json
```

### 4. Database Setup

#### Configure Database
Update `src/config/config.json` with your MySQL credentials:
```json
{
  "development": {
    "username": "your_mysql_username",
    "password": "your_mysql_password", 
    "database": "ecommerce",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

#### Create Database
```bash
# Create the database
mysql -u root -p
CREATE DATABASE ecommerce;
exit;
```

#### Run Migrations
```bash
# Install Sequelize CLI globally (if not installed)
npm install -g sequelize-cli

# Run database migrations
npx sequelize-cli db:migrate
```

#### Seed Database (Optional)
```bash
# Run seeders to populate sample data
npx sequelize-cli db:seed:all
```

### 5. Start the Server

#### 🐳 Using Docker (Recommended for Production)
```bash
# Start all services (MySQL + Backend) with Docker Compose
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

**Docker Services:**
- **MySQL Database** - Runs on port `3308:3306`
- **Backend API** - Runs on port `8000:8000`
- **Automatic Setup** - Auto-creates database, runs migrations, and seeds data

#### 🔧 Development Mode (Local)
```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

You should see:
```
Backend server start at 3000
```

## 🌐 API Endpoints

Base URL: `http://localhost:3000/api/v1`

### 🏥 Health Check
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/ping` | Server health check | ❌ No |

**Response:**
```json
{
  "message": "Auth Server is good to GO"
}
```

---

### 🔐 Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/auth/signup` | User registration | ❌ No |
| `POST` | `/auth/login` | User login | ❌ No |
| `GET` | `/auth/veriyToken` | Verify JWT token | 🔑 User Token |
| `POST` | `/auth/login/otp` | Request OTP for login | ❌ No |
| `POST` | `/auth/login/otp-verify` | Verify OTP and login | ❌ No |

#### Registration (GET `/auth/signup`)
**Query Parameters:**
```
name, email, password, role (optional)
```

#### Login (POST `/auth/login`)
**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

#### OTP Login (POST `/auth/login/otp`)
**Request Body:**
```json
{
  "email": "user@example.com"
}
```

#### Verify OTP (POST `/auth/login/otp-verify`)
**Request Body:**
```json
{
  "email": "user@example.com",
  "otp": "123456"
}
```

---

### 👑 Admin Endpoints (Admin Token Required)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/products/add` | Create new product | 🔑 Admin Token |
| `PATCH` | `/products/update` | Update product | 🔑 Admin Token |
| `DELETE` | `/products/delete` | Delete product | 🔑 Admin Token |
| `GET` | `/orders` | Get all orders | 🔑 Admin Token |
| `PATCH` | `/orders/update` | Update order status | 🔑 Admin Token |

#### Add Product (POST `/products/add`)
**Request Body:**
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "category": "Electronics",
  "price": 999.99,
  "stock": 100,
  "brand": "Brand Name"
}
```

#### Update Product (PATCH `/products/update`)
**Query Parameters:** `id=product_id`
**Request Body:** Fields to update

#### Update Order (PATCH `/orders/update`)
**Query Parameters:** `id=order_id`
**Request Body:**
```json
{
  "status": "shipped" // pending, processing, shipped, delivered, cancelled
}
```

---

### 🛒 Customer Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/products` | Get all products with filtering | ❌ No |
| `POST` | `/orders/addOrder` | Create new order | 🔑 Customer Token |
| `GET` | `/orders/getByUser` | Get customer's orders | 🔑 Customer Token |

#### Get Products (GET `/products`)
**Query Parameters (All Optional):**
```
page=1              # Page number for pagination
limit=10            # Items per page
category=Electronics # Filter by category
minPrice=100        # Minimum price filter
maxPrice=1000       # Maximum price filter
rating=4            # Minimum rating filter
brand=BrandName     # Filter by brand
```

**Example:**
```
GET /products?page=1&limit=5&category=Electronics&minPrice=100&maxPrice=500
```

#### Create Order (POST `/orders/addOrder`)
**Headers:**
```
Authorization: Bearer <customer_token>
```
**Request Body:**
```json
{
  "items": [
    {
      "productId": 1,
      "quantity": 2
    },
    {
      "productId": 2,
      "quantity": 1
    }
  ]
}
```

#### Get Customer Orders (GET `/orders/getByUser`)
**Headers:**
```
Authorization: Bearer <customer_token>
```

---

### 🔒 Authentication Headers

For protected routes, include the JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

### 📊 Response Format

All API responses follow this structure:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { /* response data */ }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error description",
  "error": { /* error details */ }
}
```

## 🏃‍♂️ Running the Application

### 🐳 Docker Mode (Recommended)
```bash
# Start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f ecommerce_backend_service

# Access API
curl http://localhost:8000/api/v1/ping
```

### 🔧 Development Mode
```bash
npm start
```
*Uses nodemon for automatic restarts on file changes*

### 🎛️ Manual Start
```bash
node src/index.js
```

### 📋 Available Scripts
```bash
npm start           # Start development server with nodemon
npm test            # Run tests (to be configured)
docker-compose up   # Start Docker environment
docker-compose down # Stop Docker environment
```

**Local Development:** `http://localhost:3000`  
**Docker Environment:** `http://localhost:8000`

---

## 🗄️ Database Schema

### 👤 User Model
```sql
- id (Primary Key)
- name (String, Required)
- email (String, Required, Unique)
- password (String, Required, Encrypted)
- role (Enum: 'admin', 'customer', Default: 'customer')
- createdAt, updatedAt (Timestamps)
```

### 📦 Product Model  
```sql
- id (Primary Key)
- name (String, Required)
- description (Text, Required) 
- category (String, Required)
- price (Decimal, Required)
- stock (Integer, Required)
- brand (String, Required)
- imageUrl (String, Optional)
- rating (Float, Optional)
- createdAt, updatedAt (Timestamps)
```

### 🛍️ Order Model
```sql
- id (Primary Key)
- userId (Foreign Key → User.id)
- totalAmount (Decimal, Required)
- status (Enum: 'pending', 'processing', 'shipped', 'delivered', 'cancelled')
- orderDate (Date, Default: NOW)
- createdAt, updatedAt (Timestamps)
```

### 📝 OrderItem Model
```sql
- id (Primary Key) 
- orderId (Foreign Key → Order.id)
- productId (Foreign Key → Product.id)
- quantity (Integer, Required)
- price (Decimal, Required)
- createdAt, updatedAt (Timestamps)
```

### 🔑 OTP Model
```sql
- id (Primary Key)
- userId (Foreign Key → User.id) 
- otp (String, Required)
- expiresAt (Date, Required)
- isUsed (Boolean, Default: false)
- createdAt, updatedAt (Timestamps)
```

### 🔗 Model Relationships
- **User** → **Order**: One-to-Many (User can have multiple orders)
- **User** → **OTP**: One-to-Many (User can have multiple OTPs)
- **Order** → **OrderItem**: One-to-Many (Order can have multiple items)
- **Product** → **OrderItem**: One-to-Many (Product can be in multiple orders)

---

## 🛠️ Technologies & Dependencies

### 🎯 Core Technologies
- **Node.js 18** - JavaScript runtime environment (Alpine Linux)
- **Express.js 5.1.0** - Modern web application framework
- **MySQL 8.0** - Relational database management system
- **Sequelize 6.37.7** - Promise-based Node.js ORM

### 📦 Production Dependencies
```json
{
  "bcrypt": "^6.0.0",           // Secure password hashing & salt
  "body-parser": "^2.2.0",     // HTTP request body parsing middleware
  "dotenv": "^17.2.3",         // Environment variables management
  "express": "^5.1.0",         // Web framework with modern features
  "jsonwebtoken": "^9.0.2",    // JWT token generation & verification
  "mysql2": "^3.15.3",         // MySQL database driver with promises
  "nodemailer": "^7.0.10",     // Email sending with SMTP support
  "nodemon": "^3.1.11",        // Development auto-restart utility
  "sequelize": "^6.37.7",      // Object-Relational Mapping (ORM)
  "sequelize-cli": "^6.6.3"    // Database migrations & seeding CLI
}
```

### 🐳 Infrastructure & DevOps
- **Docker** - Application containerization
- **Docker Compose** - Multi-container orchestration
- **GitHub Actions** - CI/CD automation pipeline
- **MySQL Docker** - Containerized database with persistent storage

### 🔧 Development Tools
- **Nodemon** - File watching and automatic server restart
- **Sequelize CLI** - Database migration and seeding management
- **Docker Desktop** - Container development environment

### 🏗️ Architecture Patterns
- **Repository Pattern** - Clean data access layer separation
- **Service Layer** - Business logic encapsulation  
- **Middleware Pattern** - Request/response processing pipeline
- **MVC Architecture** - Model-View-Controller separation
- **RESTful API** - Resource-based API design

## 🔒 Security Features

### Authentication & Authorization
- **🔐 JWT-based Authentication** - Secure token-based user sessions
- **🛡️ Role-based Access Control** - Different permissions for Admin, Customer, and User roles
- **🔒 Password Encryption** - bcrypt hashing with salt for secure password storage
- **⏰ Token Verification** - Middleware to validate JWT tokens for protected routes

### OTP Security
- **📱 Two-Factor Authentication** - OTP-based login for enhanced security
- **📧 Email-based OTP** - Secure OTP delivery via email
- **⏳ Time-based Expiration** - OTP tokens expire after specified time period
- **🔄 One-time Use** - OTP tokens are invalidated after single use

### Middleware Protection
- **🚦 Route Protection** - Specific middleware for different user roles
- **🔍 Input Validation** - Request validation and sanitization
- **🛡️ Error Handling** - Comprehensive error handling and logging

### Data Security
- **🗄️ SQL Injection Prevention** - Sequelize ORM protects against SQL injection
- **🌐 CORS Protection** - Cross-origin resource sharing configuration
- **🔒 Secure Headers** - Security headers for API responses

---

## 🧪 Testing

### API Testing
You can test the API endpoints using tools like:

#### Using cURL
```bash
# Health check
curl http://localhost:3000/api/v1/ping

# User registration
curl -X GET "http://localhost:3000/api/v1/auth/signup?name=John&email=john@example.com&password=123456"

# User login
curl -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"123456"}'

# Get products (no auth required)
curl http://localhost:3000/api/v1/products
```

#### Using Postman
1. Import the API endpoints into Postman
2. Set base URL: `http://localhost:3000/api/v1`
3. For protected routes, add Authorization header: `Bearer <token>`



---

## 🚀 Deployment

### 🐳 Docker Deployment

#### Local Docker Setup
```bash
# Build and run with Docker Compose
docker-compose up --build -d

# Check container status
docker-compose ps

# View application logs
docker-compose logs ecommerce_backend_service

# Scale backend service (optional)
docker-compose up --scale ecommerce_backend_service=2
```

#### Production Docker Deployment
```bash
# Pull latest images
docker-compose pull

# Deploy with production configuration
docker-compose -f docker-compose.yml up -d

# Monitor services
docker-compose logs -f
```

### 🔄 CI/CD Pipeline

This project includes a **GitHub Actions workflow** for automated deployment:

**Pipeline Features:**
- ✅ Automated Docker image building
- ✅ Docker Hub integration (`sarojdockerworkspace/Ecommerce_Backend`)
- ✅ VPS deployment via SSH
- ✅ Production environment setup

**Workflow Triggers:**
- Push to `main` branch
- Manual workflow dispatch

**Setup CI/CD Secrets:**
```env
DOCKER_USER=your_docker_username
DOCKER_PASS=your_docker_password
VPS_HOST=your_server_ip
VPS_USER=your_server_username
VPS_SSH_KEY=your_private_ssh_key
```

### Environment Configuration
1. Set production environment variables
2. Configure production database
3. Update email service credentials
4. Set secure JWT secret

### Production Database Setup
```bash
# Production migration
NODE_ENV=production npx sequelize-cli db:migrate

# Production seeding (if needed)
NODE_ENV=production npx sequelize-cli db:seed:all
```



---

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code structure and patterns
- Add appropriate comments and documentation
- Test your changes thoroughly
- Update README if adding new features
- Follow naming conventions used in the project

---

## 🐛 Troubleshooting

### Common Issues

#### Database Connection Error
```bash
Error: connect ECONNREFUSED 127.0.0.1:3306
```
**Solution:** 
- Ensure MySQL is running
- Check database credentials in `config/config.json`
- Verify database exists

#### JWT Token Error
```bash
Error: JsonWebTokenError: invalid token
```
**Solution:**
- Check if `PRIVATEJWT` is set in `.env`
- Verify token format in Authorization header
- Ensure token hasn't expired

#### Email Service Error
```bash
Error: Invalid login: 535-5.7.8 Username and Password not accepted
```
**Solution:**
- Use app-specific password for Gmail
- Check `EMAIL_ID` and `EMAIL_PASS` in `.env`
- Enable 2-factor authentication and generate app password

#### Migration Error
```bash
Error: Sequelize CLI [Node: 18.x.x, CLI: 6.x.x, ORM: 6.x.x]
```
**Solution:**
- Install sequelize-cli globally: `npm install -g sequelize-cli`
- Check database connection and permissions
- Ensure migrations are in correct format

---

## 📚 API Documentation

### Postman Collection
Import our Postman collection for easy API testing:
[Download Postman Collection](link-to-postman-collection)



---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---



## 🙏 Acknowledgments

- **Node.js Community** for excellent runtime environment
- **Express.js Team** for the robust web framework
- **Sequelize Team** for the powerful ORM
- **MySQL** for reliable database management
- **Open Source Contributors** for various packages used

---

## 📈 Current Status & Future Roadmap

### ✅ **Completed Features (v1.0)**
- [x] **Core Authentication System** - JWT + OTP-based login
- [x] **User Management** - Registration, roles, profile management
- [x] **Product Catalog** - Full CRUD with advanced filtering
- [x] **Order Management** - Complete order lifecycle
- [x] **Database Design** - 5 core tables with proper relationships
- [x] **Email System** - OTP delivery with custom templates
- [x] **Docker Setup** - Production-ready containerization
- [x] **CI/CD Pipeline** - Automated deployment workflow
- [x] **Error Handling** - Comprehensive error management
- [x] **API Documentation** - Complete endpoint documentation

### 🚧 **In Progress**
- [ ] 🧪 **Unit Testing** - Jest/Mocha test suite implementation
- [ ] 📊 **API Analytics** - Request logging and performance metrics
- [ ] 🔍 **Advanced Search** - Product search with filters enhancement

### 🎯 **Upcoming Features (v2.0)**
- [ ] 💳 **Payment Integration** - Stripe/eSewa/Khalti gateway
- [ ] 📱 **Mobile API Optimization** - Response optimization for mobile apps
- [ ] 🔄 **Real-time Features** - WebSocket for live notifications
- [ ] 📈 **Admin Dashboard** - Analytics and reporting dashboard
- [ ] 🔍 **Elasticsearch** - Advanced product search capabilities
- [ ] 📦 **Inventory Management** - Stock tracking and alerts
- [ ] 🌍 **Multi-language Support** - Internationalization (i18n)

### 🛠️ **Technical Improvements**
- [ ] ⚡ **Performance Optimization** - Database query optimization
- [ ] 📈 **Monitoring** - Application performance monitoring (APM)
- [ ] 🔒 **Enhanced Security** - Rate limiting, input sanitization
- [ ] 📋 **API Versioning** - Versioned endpoints for backward compatibility
- [ ] 🗄️ **Database Optimization** - Indexing and query performance
- [ ] 🐳 **Kubernetes** - K8s deployment for scalability

---

<div align="center">

## 🌟 **Project Highlights**

![Node.js](https://img.shields.io/badge/Node.js-18-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-5.1-blue?style=for-the-badge&logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?style=for-the-badge&logo=mysql)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)
![GitHub Actions](https://img.shields.io/badge/CI%2FCD-Automated-green?style=for-the-badge&logo=github-actions)

**Built with ❤️ using Node.js, Express.js, Sequelize, and MySQL**

🚀 **Production Ready** • 🐳 **Dockerized** • 🔄 **CI/CD Enabled** • 🔒 **Secure**

⭐ **Star this repository if you found it helpful!** ⭐

</div>

---

## 📞 **Contact & Support**

- **Repository:** [Saroj-kr-tharu/Ecommerce](https://github.com/Saroj-kr-tharu/Ecommerce)
- **Issues:** [GitHub Issues](https://github.com/Saroj-kr-tharu/Ecommerce/issues)
- **Documentation:** [API Documentation](#-api-endpoints)

### 📈 **Project Statistics**
- **Lines of Code:** 5000+ (estimated)
- **API Endpoints:** 15+ RESTful endpoints
- **Database Tables:** 5 core tables with relationships
- **Authentication:** JWT + OTP (2FA)
- **Architecture:** 5-layer separation (Routes → Controllers → Services → Repository → Models)

---

## 📝 **Version History**

| Version | Date | Features | Status |
|---------|------|----------|---------|
| v1.0 | Nov 2024 | Core API, Docker, CI/CD | ✅ Complete |
| v2.0 | Q1 2025 | Payments, Testing, Analytics | 🚧 Planned |
| v3.0 | Q2 2025 | Mobile optimization, Real-time | 📋 Roadmap |