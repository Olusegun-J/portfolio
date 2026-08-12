# 🩺 Jesuje Olusegun · Registered Nurse & Medical Virtual Assistant — Portfolio

A modern, immersive portfolio website for **Jesuje Olusegun** – a Registered Nurse, HIPAA‑trained Medical Virtual Assistant, EMR & Telehealth Specialist.  
The site showcases clinical expertise, administrative services, work samples, testimonials, and a seamless booking system.

🔗 **Live Demo:** [https://olusegun-j.github.io/portfolio/](https://olusegun-j.github.io/portfolio/)

---

## ✨ Features

- **Stunning Visual Design** – Royal purple gradient theme, morphing orbs, custom cursor, glow trail, and geometric shapes.
- **Interactive Elements** – Typewriter effect, 3D tilt cards, magnetic buttons, ripple animations, and continuous work‑sample carousel.
- **Fully Responsive** – Seamlessly adapts to desktops, tablets, and mobile devices.
- **Performance & UX** – Page loader, scroll progress bar, sticky navigation, back‑to‑top button, and smooth scroll.
- **Dynamic Content** – Case study modals, testimonial auto‑carousel, counter animations, and a working contact form (via Formspree).
- **Booking Integration** – Direct links to Calendly, WhatsApp, email, and resume download.

---

## 🛠️ Technologies Used

- **HTML5** – Semantic, accessible markup.
- **CSS3** – Custom properties, Flexbox, Grid, animations, glassmorphism, and media queries.
- **JavaScript (Vanilla)** – DOM manipulation, scroll events, animations, carousels, and interactive effects.
- **Font Awesome 6** – Icon library for visual enhancements.
- **Google Fonts** – Inter & Playfair Display for elegant typography.
- **Formspree** – Backend‑less contact form handling.

---

## 📁 Project Structure
portfolio/
├── index.html # Main HTML file
├── style.css # All styles (including responsive)
├── script.js # All JavaScript functionality
├── assets/ # Images, favicon, and resume PDF
│ ├── jesuje.jpg
│ ├── favicon.ico
│ ├── Jesuje_Resume.pdf
│ └── ... (work samples screenshots)
└── README.md # This file

text

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Olusegun-J/portfolio.git
cd portfolio
2. Open locally
Simply open index.html in your browser – no build tools required.

3. Customise
Replace ./assets/jesuje.jpg with your own profile picture.

Update the resume PDF link (./assets/Jesuje_Resume.pdf) with your file.

Modify the Formspree endpoint in the contact form (action="https://formspree.io/f/xljrbjvl") to your own Formspree ID.

Adjust the Calendly, WhatsApp, and email links in the booking section.

📦 Dependencies
All dependencies are loaded via CDN:

Font Awesome 6.5.0

Google Fonts (Inter & Playfair Display)

No npm or other package managers required.

📱 Responsive Breakpoints
≥ 1024px – Desktop layout (3‑column cards, full effects).

768px – 1023px – Tablet adjustments (2‑column cards, reduced effects).

< 768px – Mobile optimised (single‑column, simplified animations, hidden cursor/glow).

🧩 Key JavaScript Modules
Feature	Description
Page Loader	Fades out after page load.
Typewriter	Cycles through roles (Medical VA, EMR Specialist, etc.).
Glow Trail	Follows mouse with a soft glow.
Magnetic Buttons	Buttons move slightly toward the cursor for a tactile feel.
3D Tilt Cards	Images and cards rotate based on mouse position.
Counter Animation	Animated stats (years, connections, roles) on scroll.
Work Samples	Continuous, slow horizontal scroll (60s loop) with pause‑on‑hover.
Testimonials	Auto‑carousel (3s interval) with dot navigation.
Case Study Modal	Opens detailed case studies on click.
ECG Wave	Animated electrocardiogram line on canvas (sits at the bottom).
Particles	Floating healthcare icons in the hero background.
📧 Contact Form
The contact form uses Formspree to send messages directly to your email.
To use your own endpoint, replace the action attribute in the form:

html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
🎨 Customisation Tips
Colours – Edit the CSS variables in :root (e.g., --primary, --accent).

Typing phrases – Update the phrases array in script.js.

Work samples – Replace image paths and titles in the carousel.

Testimonials – Edit the content inside .testimonial-carousel-item.

📄 License
This project is open‑source and available under the MIT License.
Feel free to use it as a template for your own portfolio.

🙏 Credits
Design & Development – Jesuje Olusegun

Icons – Font Awesome

Fonts – Google Fonts

Form handling – Formspree

📬 Connect
GitHub: Olusegun-J

LinkedIn: Jesuje Olusegun

Email: Ojesuje@outlook.com

Calendly: Book a Call

Bringing calm and clarity to busy medical practices.
