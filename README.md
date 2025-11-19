# Ecommerce Backend API

A robust Node.js backend API for an ecommerce platform built with Express.js and Sequelize ORM.

## 🚀 Features

- **User Authentication & Authorization** - Secure login/register system
- **Admin Panel** - Administrative controls and management
- **Customer Management** - Customer registration and profile management
- **Product Management** - CRUD operations for products
- **Order Processing** - Complete order lifecycle management
- **Role-based Access Control** - Separate middlewares for admin, customer, and user roles
- **Database Migrations & Seeders** - Structured database setup and sample data

## 📁 Project Structure

```
src/
├── index.js                 # Application entry point
├── config/                  # Configuration files
│   ├── config.json         # Database configuration
│   ├── emailConfig.js      # Email service configuration
│   └── serverConfig.js     # Server settings
├── controllers/            # Request handlers
│   ├── adminControllers.js
│   ├── authControllers.js
│   ├── custumerControllers.js
│   └── index.js
├── middlewares/            # Custom middleware functions
│   ├── adminMiddlewares.js
│   ├── custumerMiddlewares.js
│   ├── userMiddlewares.js
│   └── index.js
├── models/                 # Sequelize models
├── migrations/             # Database migrations
├── seeders/               # Database seeders
├── repository/            # Data access layer
├── Routes/                # API route definitions
├── services/              # Business logic layer
└── utils/                 # Utility functions
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 01_Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```
   Configure your environment variables in `.env` file

4. **Database Setup**
   ```bash
   # Run migrations
   npx sequelize-cli db:migrate
   
   # Run seeders (optional)
   npx sequelize-cli db:seed:all
   ```

## ⚙️ Configuration

### Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecommerce_db
DB_USER=your_db_user
DB_PASS=your_db_password
JWT_SECRET=your_jwt_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

### Database Configuration
Update [`src/config/config.json`](src/config/config.json) with your database credentials.

## 🚦 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Admin Routes
- `GET /api/admin/users` - Get all users
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product

### Customer Routes
- `GET /api/customer/profile` - Get customer profile
- `PUT /api/customer/profile` - Update customer profile
- `POST /api/customer/orders` - Create order
- `GET /api/customer/orders` - Get customer orders

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID

## 🏃‍♂️ Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or your configured PORT).

## 📊 Database Models

- **User** - User authentication and profile data
- **Product** - Product information and inventory
- **Order** - Customer orders and order items

## 🔒 Security Features

- JWT-based authentication
- Role-based authorization middleware
- Password hashing
- Input validation and sanitization
- CORS protection

## 🧪 Testing

```bash
npm test
```

## 📝 API Documentation

API documentation is available at `/api/docs` when running in development mode.



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@ecommerce.com or create an issue in this repository.

## 🔄 Version History

- **v1.0.0** - Initial release with core ecommerce functionality
- User management and authentication
- Product and order management
- Admin panel features

---

Built with ❤️ using Node.js, Express.js, and Sequelize