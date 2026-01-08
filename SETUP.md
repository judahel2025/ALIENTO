# ALIENTO Food Blog - Setup Instructions

## Prerequisites

Before running the application, make sure you have:
1. **Node.js** (v14 or higher) installed
2. **MongoDB** installed and running locally, OR
3. **MongoDB Atlas** account (cloud database)

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set up Environment Variables**
   
   Create a `.env` file in the root directory (already created):
   ```env
   MONGODB_URI=mongodb://localhost:27017/aliento
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   PORT=3000
   ```

3. **MongoDB Setup**
   
   **Option A - Local MongoDB:**
   - Install MongoDB Community Server
   - Start MongoDB service
   - The default connection string is already in `.env`

   **Option B - MongoDB Atlas (Cloud):**
   - Create account at https://www.mongodb.com/cloud/atlas
   - Create a new cluster
   - Get connection string and update `MONGODB_URI` in `.env`
   - Example: `mongodb+srv://username:password@cluster.mongodb.net/aliento`

## Running the Application

1. **Start the Server**
   ```bash
   npm start
   ```

   The server will start on http://localhost:3000

2. **Access the Application**
   - Main Blog: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin

3. **Create First Admin User**
   - Go to http://localhost:3000/admin
   - Click "Create First Admin" button
   - Enter:
     - Username: admin
     - Email: admin@aliento.com
     - Password: (choose a secure password)
   - Then login with these credentials

## Features

✅ **Blog Management**
- Create, edit, and delete blog posts
- View post statistics (views, published status)
- Category organization
- Rich text content editing

✅ **Admin Dashboard**
- Real-time statistics
- Post management interface
- Secure authentication

✅ **Responsive Design**
- Works on desktop, tablet, and mobile
- Modern, vibrant design

## GitHub Setup

To connect your project to GitHub:

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name it `aliento-food-blog`
   - Don't initialize with README (we already have one)

2. **Connect local repository**
   ```bash
   git remote add origin https://github.com/yourusername/aliento-food-blog.git
   git branch -M main
   git push -u origin main
   ```

3. **Future updates**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```

## API Endpoints

### Public Endpoints
- `GET /api/posts` - Get all published posts
- `GET /api/posts/:id` - Get single post

### Protected Endpoints (require authentication)
- `POST /api/posts` - Create new post
- `PUT /api/posts/:id` - Update post
- `DELETE /api/posts/:id` - Delete post
- `GET /api/admin/posts` - Get all posts (admin)
- `GET /api/admin/stats` - Get dashboard statistics

### Auth Endpoints
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login
- `GET /api/auth/verify` - Verify token

## Project Structure

```
aliento-food-blog/
├── models/           # MongoDB models
├── routes/           # Express routes
├── middleware/       # Custom middleware
├── public/          # Frontend files
│   ├── index.html   # Main blog page
│   ├── admin.html   # Admin panel
│   ├── post.html    # Individual post page
│   ├── styles.css    # Styles
│   └── script.js    # Frontend JS
├── server.js        # Express server
└── .env             # Environment variables
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Frontend**: HTML, CSS, JavaScript
- **Styling**: Custom CSS with vibrant color scheme

## Support

For issues or questions, please open an issue on GitHub.

© 2025 ALIENTO Food Blog

