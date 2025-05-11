const express = require('express');
const router = express.Router();
const { submitContactForm, getContactSubmissions } = require('../controllers/contactController');

// Routes for contact form submissions
router.route('/')
  .post(submitContactForm)
  .get(getContactSubmissions);

module.exports = router;
