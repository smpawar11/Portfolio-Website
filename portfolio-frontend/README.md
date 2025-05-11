# Portfolio Website Frontend

This is the frontend for a personal portfolio website built with React. It showcases projects, skills, and provides a contact form for potential clients or employers to get in touch.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean and professional interface
- **Animated Components**: Smooth animations using Framer Motion
- **Sections**:
  - Hero/Introduction
  - About Me
  - Skills & Services
  - Projects Showcase
  - Contact Form
  - Footer with Social Links
- **Form Validation**: Client-side validation for the contact form
- **API Integration**: Connected to a Node.js/MongoDB backend for form submissions

## Technologies Used

- **React**: Frontend library
- **SCSS**: For styling with variables and nesting
- **Framer Motion**: For animations
- **React Icons**: For various icons
- **Fetch API**: For backend communication

## Project Structure

```
portfolio-frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   └── Projects/
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   ├── styles/
│   │   └── main.scss
│   ├── App.js
│   └── index.js
└── package.json
```

## Installation and Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd portfolio-website/Portfolio-Website/portfolio-frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```
   This will run the app in development mode at [http://localhost:3000](http://localhost:3000)

4. For production build:
   ```
   npm run build
   ```

## Customization

### Personal Information
Update your personal information in the respective component files:

- `Hero.jsx`: Name, title, and introduction
- `About.jsx`: Detailed bio, skills, and services
- `Contact.jsx`: Contact information
- `Footer.jsx`: Social media links

### Projects
Add or modify your projects in the `Projects.jsx` file:

```javascript
const projects = [
  {
    id: 1,
    title: "Project Title",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project",
    liveDemo: "https://project-demo.com"
  },
  // More projects...
];
```

### Styling
The overall styling variables can be modified in `src/styles/main.scss`:

```scss
:root {
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  // More variables...
}
```

## Backend Connection

The contact form is set up to communicate with the backend API at `http://localhost:5000/api/contact`. 

If you deploy the application, make sure to update the API URL in the `Contact.jsx` component to point to your production backend.

## Deployment

The frontend can be deployed to services like:
- Netlify
- Vercel
- GitHub Pages
- AWS Amplify

Follow the respective platform's documentation for deployment instructions.

## License

This project is licensed under the MIT License.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
