# Portfolio Website

A complete portfolio website solution featuring a React frontend and Node.js/MongoDB backend. This project serves as a personal website to showcase skills, projects, and provide a contact method for potential clients or employers.

## Project Structure

The project is divided into two main parts:

```
Portfolio-Website/
├── portfolio-frontend/    # React-based frontend application
├── portfolio-backend/     # Node.js/Express backend API
└── README.md              # This file
```

## Features

- **Responsive Design**: Mobile-friendly interface that works on all devices
- **Modern UI**: Clean, professional design with animations
- **Interactive Sections**:
  - Navigation header
  - Hero/Introduction with personal image
  - About Me with skills and services
  - Projects showcase with filtering
  - Contact form with validation
  - Footer with social links
- **API Integration**: Backend for form processing and email sending
- **Database**: MongoDB for storing contact submissions

## Technologies Used

### Frontend
- React
- SCSS
- Framer Motion (for animations)
- React Icons

### Backend
- Node.js
- Express
- MongoDB with Mongoose
- Nodemailer (for email handling)
- CORS for cross-origin requests

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd Portfolio-Website
   ```

2. Set up the frontend:
   ```
   cd portfolio-frontend
   npm install
   npm start
   ```
   This will run the frontend on http://localhost:3000

3. Set up the backend:
   ```
   cd ../portfolio-backend
   npm install
   ```

4. Configure environment variables:
   Create a `.env` file in the backend directory with the following:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio_db
   NODE_ENV=development
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-email-password
   EMAIL_FROM=your-email@gmail.com
   EMAIL_TO=your-personal-email@gmail.com
   ```

5. Start the backend:
   ```
   npm run dev
   ```
   This will run the backend on http://localhost:5000

## Customization

### Personal Information
Update your information in the respective component files:

- Frontend components contain placeholders for personal details
- Update images in the assets directory
- Modify project details in the Projects component

### Styling
Main styling variables can be found in `portfolio-frontend/src/styles/main.scss`

## Deployment

### Frontend Deployment
The React frontend can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- AWS Amplify

### Backend Deployment
The Node.js backend can be deployed to:
- Heroku
- DigitalOcean
- AWS Elastic Beanstalk
- Render

Remember to update the API URL in the frontend to point to your deployed backend.

## Contribution

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
