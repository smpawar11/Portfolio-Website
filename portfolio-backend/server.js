const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Define routes
app.use('/api/contact', require('./routes/contact'));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Portfolio API' });
});

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Set port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
