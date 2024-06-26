# React Authentication Application

This project is a simple authentication application built using React for the front end and Node.js/Express for the back end. The application allows users to register, log in, and verify their authentication status. The front end is styled using Material-UI.

## Features

- User Registration
- User Login
- Token-based Authentication
- Protected Routes
- Logout Functionality

## Tech Stack

- **Front End**: React, Material-UI
- **Back End**: Node.js, Express
- **Authentication**: JWT (JSON Web Tokens)

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository**:

   git clone https://github.com/yourusername/react-auth-app.git
Install dependencies:
For the server:
Copy code
cd backend
node server.js

For the client:
Copy code
cd login_form
npm install

Running the Application: 
Start the back end server:
cd backend
node server.js
The server will run on http://localhost:3000.

Start the front end development server:
cd login_form
npm run dev
The client will run on http://localhost:5173.

**API Endpoints**
POST /api/auth/register: Register a new user
POST /api/auth/login: Log in a user
GET /api/auth/verify-token: Verify JWT token and get user information

**Environment Variables**
Create a .env file in the server directory with the following content:

PORT=3000
JWT_SECRET=your_jwt_secret_key

**Styling**
The front end uses Material-UI for styling. The styled utility from @mui/system is used to style components.

**Contributing**
Contributions are welcome! Please open an issue or submit a pull request for any changes.

**Acknowledgments**
Material-UI
React
Node.js
Express
