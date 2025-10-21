# Cybersecurity Portfolio Website

A modern, sleek, and eye-catching portfolio website designed for cybersecurity professionals. Features a glass-morphism design with AI-inspired aesthetics, dark/light mode toggle, and smooth animations.

## 🎨 Features

- **Modern Glass-Morphism Design**: Sleek, translucent UI elements with blur effects
- **Dark/Light Mode Toggle**: Seamless theme switching with persistent preferences
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Engaging Animations**: Smooth transitions, fade-ins, and interactive elements
- **CV/Resume Page**: Professional experience, education, and skills showcase
- **Projects Showcase**: Filterable project gallery with detailed descriptions
- **Contact Form**: Functional contact form with validation
- **FAQ Section**: Interactive accordion for frequently asked questions
- **Print-Friendly CV**: Optimized printing layout for the CV page

## 🎨 Color Palette

- **Primary Colors**: Black, White, Gray
- **Accent Color**: `#33a3f3` (Vibrant Blue)
- **Gradient Effects**: `#33a3f3` to `#6dd5fa`

## 📁 File Structure

```
cybersecurity-portfolio/
├── index.html          # Home page
├── cv.html            # CV/Resume page
├── projects.html      # Projects showcase
├── contact.html       # Contact form
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
└── README.md          # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
3. **Customize** the content with your own information

## ✏️ Customization Guide

### Personal Information

1. **Update Contact Details**:
   - Open `cv.html` and find the contact information section
   - Replace email, phone, and location with your details
   - Update the same information in `contact.html`

2. **Update Social Media Links**:
   - Find all social link sections (in footer and contact page)
   - Replace `#` with your actual profile URLs:
     ```html
     <a href="https://linkedin.com/in/yourprofile" class="social-link">
     <a href="https://github.com/yourusername" class="social-link">
     <a href="https://twitter.com/yourusername" class="social-link">
     ```

3. **Customize CV Content**:
   - Edit `cv.html` to update:
     - Professional experience
     - Education history
     - Skills and skill levels
     - Certifications
     - Achievements

4. **Update Projects**:
   - Edit `projects.html` to showcase your actual projects
   - Modify project titles, descriptions, tags, and technologies
   - Add project images or links

5. **Personalize Hero Section**:
   - Edit `index.html` hero section with your name and bio
   - Customize the typing animation texts in `js/main.js` (line 373)

### Theme Customization

To change colors, edit the CSS variables in `css/style.css`:

```css
:root {
    --accent-color: #33a3f3;  /* Change accent color */
    --bg-primary: #ffffff;     /* Light mode background */
    --text-primary: #1a1a1a;   /* Light mode text */
}

[data-theme="dark"] {
    --bg-primary: #0a0a0a;     /* Dark mode background */
    --text-primary: #ffffff;    /* Dark mode text */
}
```

### Adding New Sections

To add new pages or sections:

1. Create a new HTML file (e.g., `blog.html`)
2. Copy the structure from an existing page
3. Add a navigation link in all pages:
   ```html
   <li><a href="blog.html" class="nav-link">Blog</a></li>
   ```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. **Create a GitHub repository**
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Navigate to Pages section
   - Select branch (usually `main`)
   - Click Save
4. **Access your site** at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** your project folder
3. **Your site is live** with a custom URL
4. **Optional**: Connect a custom domain

### Option 3: Vercel (Free)

1. **Sign up** at [vercel.com](https://vercel.com)
2. **Import your repository** or drag and drop files
3. **Deploy** with one click
4. **Your site is live** instantly

### Option 4: Traditional Web Hosting

1. **Choose a hosting provider** (e.g., Bluehost, HostGator, SiteGround)
2. **Upload files** via FTP/SFTP
3. **Place files** in the public_html directory
4. **Access via** your domain name

## 📧 Contact Form Setup

The contact form currently displays a success message without actually sending emails. To make it functional:

### Using Formspree (Easiest):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form in `contact.html`:
   ```html
   <form class="contact-form glass-effect" id="contact-form" 
         action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the JavaScript form handler in `js/main.js` or modify it

### Using EmailJS:

1. Sign up at [emailjs.com](https://emailjs.com)
2. Set up your email service
3. Add EmailJS SDK to your HTML
4. Update the JavaScript in `js/main.js` to use EmailJS

### Backend API:

Create your own backend API to handle form submissions and integrate it with the existing JavaScript.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Optimization

The website is fully responsive with:
- Mobile-friendly navigation menu
- Touch-optimized interactions
- Optimized font sizes and spacing
- Responsive grid layouts

## 🎯 SEO Optimization

To improve SEO:

1. **Update meta descriptions** in all HTML files
2. **Add Open Graph tags** for social media sharing:
   ```html
   <meta property="og:title" content="Your Name - Cybersecurity Professional">
   <meta property="og:description" content="Your description">
   <meta property="og:image" content="link-to-your-image">
   ```
3. **Add a sitemap.xml** file
4. **Create a robots.txt** file
5. **Use descriptive image alt tags**

## 🔒 Security Best Practices

- Always validate and sanitize form inputs (implement server-side validation)
- Use HTTPS for your deployed site
- Keep dependencies updated
- Implement CSRF protection for forms
- Add rate limiting for form submissions

## 📄 License

This project is free to use for personal and commercial purposes. No attribution required, but appreciated!

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you create something awesome, share it!

## 💡 Inspiration

Design inspired by modern portfolio websites including:
- Timq.xyz
- Sergestudios.com
- Jackelder.design
- Thibaut.cool
- Rohithmanikkoth
- Bruno-simon

## 📞 Support

If you need help customizing this template, check the code comments or reach out through the contact form.

---

**Built with HTML, CSS, and JavaScript** - No frameworks, just clean code! 🚀