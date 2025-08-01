# Portfolio Website

A modern, responsive portfolio website built with React.js showcasing my work as a Full-Stack Developer.

🌐 **Live Demo:** [surajportfolio.site](https://surajportfolio.site/)

## 🛠️ Tech Stack

- React.js
- CSS3
- EmailJS
- Font Awesome Icons
- Hostinger (Hosting)

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/suraja9/portfolio-website.git

# Install dependencies
npm install

# Start development server
npm start
```

## 📧 Contact Form Setup

To enable the contact form, update EmailJS credentials in `App.js`:

```javascript
emailjs.sendForm(
  "your_service_id",     // Replace with your Service ID
  "your_template_id",    // Replace with your Template ID
  form.current,
  "your_public_key"      // Replace with your Public Key
)
```

## 📁 Project Structure

```
src/
  ├── components/
  │   └── NavBar.js
  ├── App.js           # Main component
  ├── App.css          # Styles
  └── index.js
public/
  └── Suraj.pdf        # Resume file
```

## 🌐 Deployment

Built for production and deployed on Hostinger:
```bash
npm run build
```

## 📞 Contact

**Suraj Ali** - [alisuraj998@gmail.com](mailto:alisuraj998@gmail.com)

GitHub: [@suraja9](https://github.com/suraja9) | LinkedIn: [suraj-ali](https://www.linkedin.com/in/suraj-ali-6894a024a/)
