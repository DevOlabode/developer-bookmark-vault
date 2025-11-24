# Developer Bookmark Vault

> **Your Personal Knowledge Management System for Development Resources**

A full-stack web application designed specifically for developers to save, organize, and manage their development bookmarks efficiently. Built with modern web technologies and security best practices.

![License](https://img.shields.io/badge/license-MIT-green.svg)
![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)
![Express](https://img.shields.io/badge/express-5.x-blue.svg)
![MongoDB](https://img.shields.io/badge/mongodb-5.x-green.svg)

##  Features

###  **User Management**
- Secure user registration and authentication
- Password hashing with bcrypt
- Session management with Passport.js
- User profile management

###  **Bookmark Management**
- Create, read, update, and delete bookmarks
- Rich bookmark details (title, URL, category, tags, notes)
- User-specific bookmark organization

###  **Collections System**
- Organize bookmarks into custom collections
- Collection descriptions and metadata
- Easy bookmark-to-collection assignment
- Collection-based browsing

###  **Tagging & Categorization**
- Custom tags for flexible organization
- Category-based filtering
- Tag cloud visualization
- Advanced search by tags and categories

###  **Responsive Design**
- Mobile-first responsive design
- Bootstrap 5 framework
- Cross-browser compatibility
- Touch-friendly interface

###  **User Experience**
- Flash messages for user feedback
- Intuitive navigation
- Loading states and error handling
- Clean, modern UI

##  Live Demo
[Live Demo](https://developer-bookmark-vault-5.onrender.com/) 
## Demo Account 
- **Username** - ola
- **Password** - ola

## Tech Stack

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Passport.js** - Authentication middleware
- **bcrypt** - Password hashing
- **Joi** - Input validation
- **connect-flash** - Flash messages

### **Frontend**
- **EJS** - Templating engine
- **Bootstrap 5** - CSS framework
- **Font Awesome** - Icons
- **Vanilla JavaScript** - Client-side functionality

### **Development Tools**
- **Nodemon** - Development server
- **ESLint** - Code linting
- **Prettier** - Code formatting

##  Getting Started

### Prerequisites
- Node.js (v14.0.0 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/DevOlabode/developer-bookmark-vault.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=mongodb://localhost:27017/developerBookmarks
   
   # Session
   SESSION_SECRET=your-super-secret-session-key-here
   
   # Server
   PORT=3000
   NODE_ENV=development
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on your system:
   ```bash
   # On macOS/Linux
   mongod
   
   # On Windows
   # MongoDB should start automatically as a service
   ```

5. **Run the application**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## Project Structure

```
developer-bookmark-vault/
├──  controllers/          # Route controllers
│   ├── bookmarks.js          # Bookmark CRUD operations
│   ├── collections.js        # Collection management
│   ├── collectionBookmarks.js # Collection-bookmark relationships
│   └── user.js              # User management
├──  models/               # Database models
│   ├── bookmark.js          # Bookmark schema
│   ├── collection.js        # Collection schema
│   └── user.js              # User schema
├──  routes/               # Express routes
│   ├── bookmark.js          # Bookmark routes
│   ├── collections.js       # Collection routes
│   ├── collectionBookmarks.js # Collection-bookmark routes
│   └── user.js              # User authentication routes
├──  views/                # EJS templates
│   ├── bookmark/            # Bookmark views
│   ├── collections/         # Collection views
│   ├── collectionBookmarks/ # Collection-bookmark views
│   ├── user/                # User views
│   ├── partials/            # Reusable components
│   └── layout/              # Layout templates
├──  public/               # Static assets
│   ├── css/                 # Stylesheets
│   ├── js/                  # Client-side JavaScript
│   └── images/              # Images and icons
├── 📁 utils/                # Utility functions
│   ├── catchAsync.js        # Async error handling
│   └── expressError.js      # Custom error class
├── 📁 middleware/           # Express middleware
│   └── validation.js        # Input validation
├── 📁 seeds/                # Database seeding
│   └── seed.js              # Sample data
├── .env.example             # Environment variables template
├── .gitignore               # Git ignore rules
├── index.js                 # Main application entry
├── package.json             # Dependencies and scripts
└── README.md                # This file
```

## 🔌 API Endpoints

### **Authentication**
- `POST /register` - User registration
- `POST /login` - User login
- `POST /logout` - User logout

### **Bookmarks**
- `GET /bookmark` - List all user bookmarks
- `GET /bookmark/new` - New bookmark form
- `POST /bookmark` - Create new bookmark
- `GET /bookmark/:id` - View bookmark details
- `GET /bookmark/:id/edit` - Edit bookmark form
- `PUT /bookmark/:id` - Update bookmark
- `DELETE /bookmark/:id` - Delete bookmark

### **Collections**
- `GET /collections` - List all user collections
- `GET /collections/new` - New collection form
- `POST /collections` - Create new collection
- `GET /collections/:id` - View collection details
- `GET /collections/:id/edit` - Edit collection form
- `PUT /collections/:id` - Update collection
- `DELETE /collections/:id` - Delete collection

### **Collection Bookmarks**
- `GET /collections/:id/bookmarks` - List bookmarks in collection
- `GET /collections/:id/bookmarks/new` - Add bookmark to collection form
- `POST /collections/:id/bookmarks` - Add bookmark to collection
- `DELETE /collections/:id/bookmarks/:bookmarkId` - Remove bookmark from collection

## 🧪 Testing

### Running Tests
*Testing setup coming soon...*

### Manual Testing
1. **User Registration**: Test creating new accounts
2. **Authentication**: Test login/logout functionality
3. **Bookmark CRUD**: Test creating, reading, updating, and deleting bookmarks
4. **Collections**: Test creating and managing collections
5. **Search**: Test search and filtering capabilities
6. **Responsive Design**: Test on mobile, tablet, and desktop

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Quick Start for Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and commit: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Bootstrap](https://getbootstrap.com/) for the CSS framework
- [Font Awesome](https://fontawesome.com/) for icons
- [MongoDB](https://www.mongodb.com/) for the database
- [Express.js](https://expressjs.com/) for the web framework
- [Passport.js](http://www.passportjs.org/) for authentication

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/yourusername/developer-bookmark-vault/issues) page
2. Create a new issue with detailed information
3. Join our community discussions

---

**Made with ❤️ by developers, for developers**
