# MstryMessage - Real-Time Chat Application

Welcome to MstryMessage! This is a modern, full-stack real-time chat application that allows users to communicate instantly with secure authentication and real-time messaging capabilities. Built with the MERN stack and Socket.io for seamless real-time communication.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- 🔐 **Secure Authentication** - JWT-based authentication with encrypted passwords
- 💬 **Real-time Messaging** - Instant message delivery using Socket.io
- 👥 **User Management** - Search and view online users
- 🎨 **Modern UI** - Beautiful interface built with React, Tailwind CSS, and DaisyUI
- 🔔 **Real-time Notifications** - Get notified when new messages arrive
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🖼️ **Avatar Integration** - Automatic profile picture generation
- 🌙 **Multiple Themes** - Support for different UI themes
- 🔒 **Secure Cookies** - HTTP-only cookies for enhanced security
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast development and production builds

## Demo

A live demo of the application is available at: [Live Demo](https://mstrymessage.onrender.com)

## Screenshots

### Login Page
![Login Page](screenshots/login.png)

### Chat Interface
![Chat Interface](screenshots/chat.png)

### User List & Online Status
![User List](screenshots/userlist.png)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mrkeshav-05/MstryMessage.git
    cd MstryMessage
    ```

2. **Install Backend Dependencies:**
    ```sh
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies:**
    ```sh
    cd ../chat_app_frontend
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `backend` directory with the following variables:
    ```env
    # Server Configuration
    PORT=8000
    
    # Database Configuration
    # Replace with your MongoDB connection string
    # For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname
    # For local MongoDB: mongodb://localhost:27017/mstrymessage
    MONGO_DB_URL=your_mongodb_connection_string
    
    # JWT Configuration
    # Use a strong random secret key (at least 32 characters recommended)
    JWT_SECRET_KEY=your_super_secret_jwt_key_change_this
    
    # JWT token expiration (e.g., 15d = 15 days, 7d = 7 days, 24h = 24 hours)
    JWT_EXPIRATION=15d
    
    # Environment Mode
    NODE_ENV=development
    ```

5. **Start the Backend Server:**
    ```sh
    cd backend
    npm run server
    ```
    The backend server will start on `http://localhost:8000`

6. **Start the Frontend Development Server:**
    Open a new terminal window:
    ```sh
    cd chat_app_frontend
    npm run dev
    ```
    The frontend will start on `http://localhost:3000`

7. **Open your browser:**
    Navigate to `http://localhost:3000` to see the application in action.

## Usage

### Getting Started

1. **Register an Account:**
    - Click on "Sign Up" on the homepage
    - Fill in your details:
      - Full Name
      - Username (must be unique)
      - Password
      - Confirm Password
      - Gender (for avatar generation)
    - Click "Sign Up" to create your account

2. **Login:**
    - Enter your username and password
    - Click "Login" to access your account

3. **Start Chatting:**
    - Browse the list of users in the sidebar
    - Click on a user to start a conversation
    - Type your message in the input box at the bottom
    - Press Enter or click the send button to send your message
    - Messages are delivered in real-time!

4. **Search Users:**
    - Use the search bar at the top of the sidebar
    - Type a username to quickly find a user
    - Click on the user to start chatting

5. **View Online Status:**
    - Online users are indicated with a special marker
    - See who's available for real-time chat

6. **Logout:**
    - Click the logout button to safely sign out of your account

## Configuration

### MongoDB Setup

**Option 1: MongoDB Atlas (Cloud - Recommended)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Create a database user with a password
4. Whitelist your IP address (or use 0.0.0.0/0 for all IPs during development)
5. Get your connection string and replace it in the `.env` file

**Option 2: Local MongoDB**
1. Install MongoDB locally from [MongoDB Downloads](https://www.mongodb.com/try/download/community)
2. Start MongoDB service
3. Use `mongodb://localhost:27017/mstrymessage` in your `.env` file

### Environment Variables

All environment variables should be configured in the `backend/.env` file:

- **PORT**: Port number for the backend server (default: 8000)
- **MONGO_DB_URL**: MongoDB connection string
- **JWT_SECRET_KEY**: Secret key for JWT token generation (use a strong random string)
- **JWT_EXPIRATION**: Token expiration time (e.g., 15d, 7d, 24h)
- **NODE_ENV**: Environment mode (development/production)

### Security Considerations

- Never commit your `.env` file to version control
- Use strong, unique passwords for MongoDB
- Generate a strong JWT secret key (minimum 32 characters)
- In production, set `NODE_ENV` to "production"
- Use HTTPS in production environments

## Technologies Used

### Frontend
- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next-generation frontend tooling for fast development
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Socket.io-client** - Real-time bidirectional event-based communication
- **React Router DOM** - Declarative routing for React
- **Zustand** - Lightweight state management
- **React Hot Toast** - Beautiful notifications
- **React Icons** - Popular icon library
- **date-fns** - Modern JavaScript date utility library

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, unopinionated web framework
- **Socket.io** - Real-time communication engine
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT (jsonwebtoken)** - Secure authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie parsing middleware
- **dotenv** - Environment variable management
- **CORS** - Cross-Origin Resource Sharing

### Development Tools
- **Nodemon** - Automatic server restart during development
- **ESLint** - Code linting and quality
- **PostCSS** - CSS transformation
- **Autoprefixer** - CSS vendor prefixing

## Project Structure

```
MstryMessage/
├── backend/
│   ├── controllers/        # Request handlers
│   ├── db/                # Database connection
│   ├── middleware/        # Custom middleware
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── socket/            # Socket.io configuration
│   ├── utils/             # Utility functions
│   ├── server.js          # Entry point
│   └── .env               # Environment variables
│
└── chat_app_frontend/
    ├── src/
    │   ├── assets/        # Static assets
    │   ├── components/    # React components
    │   ├── context/       # React context
    │   ├── hooks/         # Custom hooks
    │   ├── pages/         # Page components
    │   ├── utils/         # Utility functions
    │   ├── zustand/       # State management
    │   ├── App.jsx        # Root component
    │   └── main.jsx       # Entry point
    └── vite.config.js     # Vite configuration
```

## API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /signup` - Register a new user
- `POST /login` - Login user
- `POST /logout` - Logout user

### Message Routes (`/api/messages`)
- `GET /:id` - Get messages with a specific user
- `POST /send/:id` - Send a message to a user

### User Routes (`/api/users`)
- `GET /` - Get all users for sidebar (authenticated)

## Contributing

Contributions are welcome! Here's how you can help:

### Steps to Contribute

1. **Fork the repository**
   ```sh
   Click the "Fork" button at the top right of this page
   ```

2. **Clone your fork**
   ```sh
   git clone https://github.com/your-username/MstryMessage.git
   cd MstryMessage
   ```

3. **Create a new branch**
   ```sh
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes thoroughly

5. **Commit your changes**
   ```sh
   git add .
   git commit -m 'Add some feature'
   ```

6. **Push to your branch**
   ```sh
   git push origin feature/your-feature-name
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Describe your changes in detail

### Contribution Guidelines

- Write clear, concise commit messages
- Update documentation as needed
- Ensure your code passes all tests
- Follow the existing code structure and naming conventions
- Be respectful and constructive in discussions

## Troubleshooting

### Common Issues

**Issue: MongoDB Connection Error**
- Solution: Check your MongoDB connection string in `.env`
- Ensure MongoDB service is running (for local installation)
- Check network connectivity for MongoDB Atlas

**Issue: Port Already in Use**
- Solution: Change the PORT in `.env` or kill the process using that port
- Find process: `lsof -i :8000` (Mac/Linux) or `netstat -ano | findstr :8000` (Windows)

**Issue: JWT Authentication Error**
- Solution: Ensure `JWT_SECRET_KEY` is set in `.env`
- Check if cookies are enabled in your browser

**Issue: Real-time Messages Not Working**
- Solution: Ensure both frontend and backend are running
- Check Socket.io connection in browser console
- Verify CORS settings

**Issue: E11000 Duplicate Key Error**
- Solution: Run the `fixDatabase.js` script to clean up old indexes
- ```sh
  cd backend
  node fixDatabase.js
  ```

## Deployment

### Backend Deployment (Render/Heroku)

1. Push your code to GitHub
2. Create a new web service on Render/Heroku
3. Set environment variables in the dashboard
4. Deploy from your GitHub repository

### Frontend Deployment (Vercel/Netlify)

1. Build the frontend:
   ```sh
   cd chat_app_frontend
   npm run build
   ```
2. Deploy the `dist` folder to Vercel/Netlify
3. Update API endpoints in your frontend code if needed

### Full-Stack Deployment

The backend includes a build script that serves the frontend from the backend:
```sh
npm run build
npm start
```

## License

This project is licensed under the ISC License.

## Acknowledgments

- Avatar API by [Avatar Placeholder Iran](https://avatar.iran.liara.run/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- UI Components by [DaisyUI](https://daisyui.com/)

## Contact

**Developer:** [@mrkeshav-05](https://github.com/mrkeshav-05)

**Project Link:** [https://github.com/mrkeshav-05/MstryMessage](https://github.com/mrkeshav-05/MstryMessage)

**Live Demo:** [https://mstrymessage.onrender.com](https://mstrymessage.onrender.com)

For any questions, issues, or feedback:
- Open an issue on GitHub
- Submit a pull request
- Contact via GitHub profile

---

⭐ **Star this repository if you find it helpful!**

Made with ❤️ by [Keshav](https://github.com/mrkeshav-05)
