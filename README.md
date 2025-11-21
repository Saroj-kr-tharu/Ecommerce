# 🛒 Ecommerce Backend API

A production-ready Node.js REST API for modern ecommerce platforms. Built with Express.js, Sequelize ORM, and MySQL, this backend provides secure user authentication, product management, order processing, and more.

## 🚀 Features

- **JWT Authentication** with OTP-based two-factor authentication
- **Role-based Access Control** (Admin, Customer, User)
- **Complete Product Management** with advanced filtering
- **Order Management System** with status tracking
- **Secure Password Handling** with bcrypt
- **Email Integration** for OTP delivery
- **Docker Support** for easy deployment
- **CI/CD Pipeline** with GitHub Actions

## 🏗️ Project Structure

```
📁 src/
├── 📄 index.js                    # Application entry point
├── 📁 config/                     # Configuration files
│   ├── config.json                # Database configuration
│   ├── docker-config.json         # Docker database config
│   ├── emailConfig.js             # Email service setup
│   └── serverConfig.js            # Server settings
├── 📁 controllers/                # HTTP request handlers
├── 📁 middlewares/                # Authentication & authorization
├── 📁 models/                     # Sequelize database models
├── 📁 migrations/                 # Database schema migrations
├── 📁 repository/                 # Data access layer
├── 📁 services/                   # Business logic layer
├── 📁 Routes/                     # API route definitions
└── 📁 utlis/                      # Utilities and helpers
    ├── 📁 Errors/                 # Error handling
    └── 📁 MailTemplate/           # Email templates
```
## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Saroj-kr-tharu/Ecommerce.git
   cd Ecommerce/01_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   Create a `.env` file:
   ```env
   PORT=3000
   NODE_ENV=development
   PRIVATEJWT=your_jwt_secret_key
   EMAIL_ID=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Database setup**
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

5. **Run migrations**
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. **Start the server**
   ```bash
   npm start
   ```

### Docker Setup (Recommended)
```bash
# Start with Docker Compose
docker-compose up -d

# Server runs at http://localhost:8000
```

## 📋 API Documentation

Base URL: `http://localhost:3000/api/v1` (Local) or `http://localhost:8000/api/v1` (Docker)

### Authentication Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/auth/signup` | User registration |
| `POST` | `/auth/login` | User login |
| `POST` | `/auth/login/otp` | Request OTP for login |
| `POST` | `/auth/login/otp-verify` | Verify OTP |

### Product Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/products` | Get products with filters | No |
| `POST` | `/products/add` | Add new product | Admin |
| `PATCH` | `/products/update` | Update product | Admin |
| `DELETE` | `/products/delete` | Delete product | Admin |

### Order Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/orders/addOrder` | Place new order | Customer |
| `GET` | `/orders/getByUser` | Get user orders | Customer |
| `GET` | `/orders` | Get all orders | Admin |
| `PATCH` | `/orders/update` | Update order status | Admin |

## 🏃‍♂️ Running Your Application - Multiple Ways to Win

We've made it incredibly easy to run your ecommerce backend in any environment. Choose the approach that fits your workflow best!

### 🐳 Docker Mode - The Professional Choice (Recommended)

Why we love Docker: It gives you a complete, isolated environment that works exactly the same way on your laptop as it does in production. No more "it works on my machine" problems!

```bash
# Start everything with one command
docker-compose up -d

# Check if everything is running smoothly  
docker-compose ps

# Watch the logs in real-time (great for debugging)
docker-compose logs -f ecommerce_backend_service

# Quick health check
curl http://localhost:8000/api/v1/ping
```

**What you get automatically:**
- **MySQL Database** - Pre-configured and ready on port 3308
- **Backend API** - Your server running on port 8000
- **Data Persistence** - Your data survives container restarts
- **Network Isolation** - Services talk to each other securely

### 🔧 Development Mode - For Active Development

Perfect for when you're coding and want instant feedback on your changes:

```bash
npm start
```

*This uses nodemon, which automatically restarts your server whenever you save changes to your code. It's like having a development assistant that never sleeps!*

### 🎛️ Production Mode - For Manual Deployment

When you want full control over your environment:

```bash
node src/index.js
```




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

## 🚀 Deployment - From Development to Production

Taking your ecommerce backend from your laptop to serving real customers? We've got you covered with multiple deployment strategies that scale with your needs.

### 🐳 Docker Deployment - Container Magic

#### 🏠 Local Docker Setup
Perfect for replicating production environment on your development machine:

```bash
# Build and launch everything with one command
docker-compose up --build -d

# Verify all containers are healthy
docker-compose ps

# Monitor your application logs in real-time
docker-compose logs ecommerce_backend_service

# Scale your backend horizontally (when you're ready to handle more traffic!)
docker-compose up --scale ecommerce_backend_service=2
```

#### 🌐 Production Docker Deployment
Ready for the real world:

```bash
# Ensure you have the latest images
docker-compose pull

# Deploy with production optimizations
docker-compose -f docker-compose.yml up -d

# Keep an eye on your production logs
docker-compose logs -f
```

**Production Benefits:**
- **Consistent Environment** - Identical runtime from development to production
- **Easy Scaling** - Spin up additional containers as your user base grows
- **Resource Isolation** - Each service runs in its own secure container
- **Quick Rollbacks** - Deploy new versions with confidence, roll back instantly if needed

### 🔄 Automated CI/CD Pipeline - Deploy Like a Pro

We've included a **production-ready GitHub Actions workflow** that automates your entire deployment process:

**What happens automatically when you push code:**
✅ **Build Stage** - Creates optimized Docker images  
✅ **Test Stage** - Validates your API endpoints  
✅ **Publish Stage** - Pushes to Docker Hub (`sarojdockerworkspace/Ecommerce_Backend`)  
✅ **Deploy Stage** - Seamlessly updates your production server via SSH  
✅ **Health Check** - Verifies your deployment is successful  

**One-time Setup Required:**
Add these secrets to your GitHub repository settings:
```env
DOCKER_USER=your_docker_hub_username
DOCKER_PASS=your_docker_hub_password
VPS_HOST=your_production_server_ip
VPS_USER=your_server_username  
VPS_SSH_KEY=your_private_ssh_key
```

**Deployment Triggers:**
- 🚀 **Automatic** - Every push to the `main` branch
- 🎯 **Manual** - Use GitHub's workflow dispatch button

### 🌍 Production Environment Configuration

#### 🔐 Environment Variables for Production
```env
# Production server settings
NODE_ENV=production
PORT=8000

# Secure JWT secret (make this LONG and RANDOM!)
PRIVATEJWT=your_super_secure_production_jwt_secret_here_make_it_very_long

# Production email service
EMAIL_ID=noreply@yourdomain.com
EMAIL_PASS=your_production_email_password

# Production database (configure in src/config/config.json)
```

#### 🗄️ Production Database Setup
```bash
# Run migrations on your production database
NODE_ENV=production npx sequelize-cli db:migrate

# Optionally seed initial data (be careful with this in production!)
NODE_ENV=production npx sequelize-cli db:seed:all
```

### ☁️ Cloud Deployment Options

**Popular Cloud Platforms:**
- **AWS ECS/Fargate** - Managed container service
- **Google Cloud Run** - Serverless containers  
- **DigitalOcean App Platform** - Simple container deployment
- **Azure Container Instances** - Quick container hosting
- **Railway/Render** - Developer-friendly platforms

**VPS Deployment (Traditional):**
- **DigitalOcean Droplets** - Reliable and affordable
- **Linode** - Developer-focused cloud computing  
- **AWS EC2** - Maximum control and scalability

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
