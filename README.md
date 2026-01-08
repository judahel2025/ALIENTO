# 🍽️ ALIENTO - Food Blog Platform

A full-stack food blog platform with admin panel, built with Node.js, Express.js, and MongoDB. Create, manage, and publish delicious food content with ease!

![ALIENTO Logo](https://img.shields.io/badge/ALIENTO-Food%20Blog-orange)

## ✨ Features

### For Users
- 🎨 **Beautiful, Modern Design** - Vibrant teal, orange, and yellow color scheme
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- 📄 **Read Blog Posts** - Browse and read the latest food-related content
- 🔍 **Category Filtering** - Find posts by category (Salads, Mains, Desserts, etc.)
- 📧 **Newsletter Signup** - Subscribe to receive updates

### For Admins
- 🔐 **Secure Authentication** - JWT-based login system
- ✏️ **Create & Edit Posts** - Full CRUD operations for blog posts
- 📊 **Dashboard Statistics** - View post counts, views, and more
- 🗑️ **Delete Posts** - Manage your content easily
- 👤 **User Management** - Create admin accounts

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/aliento-food-blog.git
   cd aliento-food-blog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Make sure `.env` file exists with:
   ```env
   MONGODB_URI=mongodb://localhost:27017/aliento
   JWT_SECRET=your-secret-key
   PORT=3000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **Access the application**
   - Main blog: http://localhost:3000
   - Admin panel: http://localhost:3000/admin

6. **Create first admin**
   - Go to admin panel
   - Click "Create First Admin"
   - Set up your credentials

## 📖 Documentation

See [SETUP.md](SETUP.md) for detailed setup instructions and deployment guide.

## 🏗️ Project Structure

```
aliento-food-blog/
├── models/
│   ├── Post.js          # Blog post model
│   └── User.js           # User model
├── routes/
│   ├── auth.js          # Authentication routes
│   ├── posts.js         # Blog post routes
│   └── admin.js         # Admin routes
├── middleware/
│   └── auth.js          # JWT verification
├── public/
│   ├── index.html       # Main blog page
│   ├── admin.html       # Admin dashboard
│   ├── post.html        # Individual post page
│   ├── styles.css       # Styles
│   └── script.js       # Frontend JS
├── server.js            # Express server
├── package.json         # Dependencies
└── .env                 # Environment variables
```

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with modern design

## 📡 API Endpoints

### Public
- `GET /api/posts` - Get all published posts
- `GET /api/posts/:id` - Get single post

### Protected (Admin)
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/admin/posts` - Get all posts
- `GET /api/admin/stats` - Get statistics

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verify token

## 🎨 Design

Inspired by modern food blog aesthetics with:
- **Colors**: Teal (#1DB9A6), Orange (#FF6B35), Yellow (#FFD23F)
- **Typography**: Poppins font family
- **Layout**: Clean, minimal, vibrant

## 🌐 GitHub Integration

### Initial Setup
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/aliento-food-blog.git
git push -u origin main
```

### Regular Updates
```bash
git add .
git commit -m "Update: your changes"
git push
```

## 

## 


## 📝 License

ISC

## 👨‍💻 Development

For development with auto-reload:
```bash
npm install -g nodemon
npm run dev
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**© 2025 ALIENTO - Fresh Food Blog** 🌊
