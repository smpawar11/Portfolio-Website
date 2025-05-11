# Portfolio Website Backend

This is the backend for the portfolio website, handling the contact form submissions and other API requests.

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- Nodemailer
- Cors
- Dotenv

## Setup and Installation

1. Make sure you have Node.js and MongoDB installed on your system.

2. Clone the repository (if not already done):
   ```
   git clone <repository-url>
   cd portfolio-website/Portfolio-Website/portfolio-backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio_db
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-personal-email@gmail.com
   ```

   Note: For Gmail, you might need to use an App Password. See [Google's documentation](https://support.google.com/accounts/answer/185833) for more details.

5. Start MongoDB (if running locally):
   ```
   mongod
   ```

6. Start the server:
   ```
   npm run dev
   ```

   This will start the server in development mode with nodemon for auto-reloading.

## API Endpoints

### Contact Form

- **POST /api/contact** - Submit a new contact form
  - Body:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "I'd like to discuss a potential project with you."
    }
    ```
  - Success Response (201):
    ```json
    {
      "success": true,
      "data": { /* contact object */ },
      "message": "Your message has been sent successfully!"
    }
    ```

- **GET /api/contact** - Get all contact form submissions
  - Success Response (200):
    ```json
    {
      "success": true,
      "count": 5,
      "data": [ /* array of contact objects */ ]
    }
    ```

## Project Structure

```
portfolio-backend/
├── config/
│   └── db.js              # Database connection configuration
├── controllers/
│   └── contactController.js # Contact form handlers
├── models/
│   └── Contact.js         # Mongoose model for contact form
├── routes/
│   └── contact.js         # API routes for contact form
├── .env                   # Environment variables
├── package.json           # Project dependencies and scripts
└── server.js              # Main application entry point
```

## Production Deployment

For production deployment, make sure to:

1. Set `NODE_ENV=production` in your .env file or environment variables
2. Use a proper MongoDB connection string for production
3. Set up proper email credentials
4. Consider using a process manager like PM2 to keep the app running

## License

This project is licensed under the MIT License.
