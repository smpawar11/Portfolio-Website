const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');
require('dotenv').config();

// @desc    Send contact form email and save to database
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create contact entry in the database
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // Configure email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Set up email data
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `Portfolio Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Contact Form Error:', error);
    
    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        error: messages
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get all contact form submissions
// @route   GET /api/contact
// @access  Private (In a real app, you would add authentication)
exports.getContactSubmissions = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });
  } catch (error) {
    console.error('Get Contacts Error:', error);
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};
