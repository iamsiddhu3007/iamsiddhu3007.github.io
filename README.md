# Mohana Siddhartha Chivukula - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Framer Motion. Features a glass morphism design with smooth animations and a custom cursor experience.

🌐 **Live Site:** [https://iamsiddhu3007.github.io](https://iamsiddhu3007.github.io)

---

## 👨‍💻 About Me

**Mohana Siddhartha Chivukula**
Software Developer | Graduate Student @ Arizona State University

I'm pursuing a Master's in Computer Science at ASU (GPA: 4.0/4.0) with expertise in mobile development, full-stack web applications, data engineering, and AI/ML. Looking for full-time SWE roles starting May 2026.

### 💼 Professional Experience

#### SCAI Grader - Arizona State University
**Aug 2025 – Present | Tempe, Arizona**
- Assisting Prof. Jaejong Baek in grading and managing coursework
- **Fall 2025:** CSE 469 (Computer and Network Forensics) and CSE 543 (Information Assurance and Security)
- **Spring 2026:** CSE 535 (Mobile Computing), CSE 543, and CSE 469

#### Software Developer Intern - Get SuperStars Inc.
**May 2025 – Aug 2025 | Remote**
- Architected Flutter/Dart UI and RESTful API integration for cross-platform mobile apps
- Built and launched Stories & Action Feed modules in 6 weeks, reducing memory usage by 80%
- Implemented 3-stage GitHub Actions workflow with automatic PR checks, achieving near-zero rollbacks
- Participated in weekly sprints with product teams

#### Business Technology Solutions Associate Intern - ZS Associates
**Jan 2024 – Jul 2024 | Gurugram, India**
- Developed 4-layer data warehouse schemas (Staging, PSA, DWH, DMT) for scalable analytics
- Built end-to-end ETL pipelines for 70+ vendor datasets using Informatica IICS and Snowflake
- Led standardization efforts across 70+ vendor sources
- Created optimized SQL views for reporting layers
- **Award:** Dashing Debut Award (H1'24)

### 🎓 Education

#### Arizona State University
**Master of Science - Computer Science**
**Aug 2024 – May 2026 | GPA: 4.0/4.0**

**Courses by Semester:**
- **Fall 2024:** CSE 535 (Mobile Computing), CSE 543 (Info Assurance & Security), CSE 572 (Data Mining)
- **Spring 2025:** CSE 565 (Software Verif/Validation/Test), CSE 578 (Data Visualization), CSE 579 (Knowledge Representation)
- **Summer 2025:** CSE 584 (Internship - Get SuperStars Inc.)
- **Fall 2025:** CSE 511 (Data Processing at Scale), CSE 539 (Applied Cryptography), CSE 548 (Engr Blockchain Applications)
- **Spring 2026:** CSE 575 (Statistical Machine Learning)

#### Shiv Nadar University
**B.Tech - Computer Science & Engineering**
**Aug 2020 – May 2024 | GPA: 7.61/10**

---

## 🚀 Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **Vite 7.2.2** - Build tool and dev server
- **Framer Motion 12.23.24** - Animation library
- **React Router DOM 7.9.6** - Client-side routing
- **React Icons 5.5.0** - Icon library

### Styling
- **CSS3** - Custom styles with CSS variables
- **Glass Morphism Design** - Modern UI with backdrop filters
- **Responsive Design** - Mobile-first approach with breakpoints (480px, 768px, 1024px)

### Deployment
- **GitHub Pages** - Static site hosting
- **gh-pages 6.3.0** - Deployment automation

---

## 📁 Project Structure

```
iamsiddhu3007.github.io/
├── src/
│   ├── assets/               # Static assets
│   │   ├── profile.jpg       # Profile picture
│   │   └── resume.pdf        # Resume PDF
│   │
│   ├── components/           # Reusable components
│   │   ├── Card.jsx          # Glass card component
│   │   ├── Card.css
│   │   ├── CustomCursor.jsx  # Custom cursor (desktop only)
│   │   ├── CustomCursor.css
│   │   ├── FloatingButtons.jsx  # Floating action buttons
│   │   ├── FloatingButtons.css
│   │   ├── Navbar.jsx        # Navigation with mobile menu
│   │   └── Navbar.css
│   │
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Landing page
│   │   ├── Home.css
│   │   ├── About.jsx         # About & skills page
│   │   ├── About.css
│   │   ├── Experience.jsx    # Work experience
│   │   ├── Experience.css
│   │   ├── Projects.jsx      # Project showcase
│   │   ├── Projects.css
│   │   ├── Education.jsx     # Education timeline
│   │   ├── Education.css
│   │   ├── Certifications.jsx  # Certifications list
│   │   ├── Certifications.css
│   │   ├── Resume.jsx        # Resume viewer
│   │   ├── Resume.css
│   │   ├── Contact.jsx       # Contact information
│   │   ├── Contact.css
│   │   ├── PrivacyPolicy.jsx # Privacy policy
│   │   └── PrivacyPolicy.css
│   │
│   ├── App.jsx               # Main app component with routing
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles & CSS variables
│
├── public/                   # Public assets
├── dist/                     # Build output (generated)
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

---

## 🎨 Components Guide

### Core Components

#### 1. **Navbar.jsx**
The main navigation component with responsive mobile menu.

**Features:**
- Glass morphism design with backdrop blur
- Desktop: Horizontal navigation with active indicators
- Mobile: Hamburger menu with slide-in drawer (< 768px)
- Theme toggle (Dark/Light mode)
- Smooth scroll effects

**Key Props:** None (uses React Router's `useLocation`)

**How to Update:**
```jsx
// Add a new navigation link
const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/your-new-page', label: 'New Page' },  // Add here
    // ...
];
```

#### 2. **Card.jsx**
Reusable glass card component with hover effects.

**Props:**
- `children` - Content to display
- `delay` - Animation delay (default: 0)
- `hover` - Enable hover effect (default: true)

**Usage:**
```jsx
<Card delay={0.1} hover={true}>
    <YourContent />
</Card>
```

#### 3. **CustomCursor.jsx**
Custom animated cursor for desktop users.

**Features:**
- Automatically disabled on mobile/tablet (≤ 1024px)
- Detects touch devices
- Cursor glow effect
- Pointer state for interactive elements

**How it Works:**
- Returns `null` on touch devices
- Updates position on `mousemove`
- Changes size/style on hover over clickable elements

#### 4. **FloatingButtons.jsx**
Floating action buttons for quick navigation.

**Features:**
- Back to top button
- Social media links
- Smooth scroll behavior

---

## 📄 Pages Guide

### Home.jsx
**Sections:**
1. **Hero** - Name, title, description, profile image
2. **Stats** - Animated counters (internships, projects, certifications, GPA)
3. **Experience Overview** - 4 expertise cards (Mobile, Full-Stack, Data Engineering, AI/ML)
4. **How I Work** - Soft skills showcase (Communication, Ownership, Quality)
5. **Featured Projects** - Animated carousel of all projects
6. **Currently** - Current SCAI Grader position
7. **Recommendations** - Testimonials from colleagues
8. **CTA** - Call to action for May 2026 roles

**How to Update:**
```jsx
// Update hero description (Home.jsx line 77)
<p className="hero-description">
    Your new description here
</p>

// Add a new project to carousel (Home.jsx line 38)
const projectsData = [
    'Promptly', 'Your New Project', ...
];
```

### About.jsx
Displays technical skills organized by categories.

**Skill Categories:**
1. Programming (Python, Dart, C/C++, Java, Kotlin, SQL, JavaScript)
2. Libraries & Frameworks (NumPy, Pandas, Scikit-learn, TensorFlow, Flask, React)
3. Web & Databases (HTML, CSS, Node.js, MySQL, PostgreSQL, MongoDB, Snowflake)
4. Cloud & DevOps (AWS services, CI/CD, Git)
5. Tools & Platforms (Android Studio, Flutter, Postman, APIs, Jira, Advanced Excel)
6. Methodologies (Agile, Waterfall)

**How to Add a Skill:**
```jsx
{
    title: "Your Category",
    icon: <YourIcon />,
    skills: [
        { name: "Skill Name", icon: <SkillIcon />, tech: "css-class" },
    ]
}
```

### Experience.jsx
Timeline of professional experiences.

**Data Structure:**
```jsx
{
    role: "Job Title",
    company: "Company Name",
    period: "Start – End",
    location: "City, State/Country",
    type: "Internship/Part-time/Full-time",
    workMode: "Remote/On-site/Hybrid",
    award: "Optional Award", // Optional
    responsibilities: [
        "Achievement 1",
        "Achievement 2"
    ],
    skills: ["Skill1", "Skill2"]
}
```

### Projects.jsx
Showcase of 11 major projects with descriptions.

**Project Fields:**
- `title` - Project name
- `period` - Development timeline
- `tech` - Technologies used
- `description` - Detailed description
- `skills` - Key skills demonstrated
- `university` - Institution (if academic)
- `github` - GitHub link (optional)

### Education.jsx
Education timeline with courses by semester.

**Institutions:**
1. Arizona State University (MS CS)
2. Shiv Nadar University (B.Tech CSE)

**How to Add a Course:**
```jsx
// For ASU
"Spring 2026": [
    { code: "CSE XXX", name: "Course Name" }
]

// For SNU (by category)
"Your Category": [
    { code: "XXX101", name: "Course Name" }
]
```

### Certifications.jsx
List of professional certifications with issuers and dates.

**How to Add:**
```jsx
{
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    link: "https://credential-url" // Optional
}
```

### Resume.jsx
PDF resume viewer with download button.

**How to Update Resume:**
1. Replace `/src/assets/resume.pdf` with new PDF
2. Keep filename as `resume.pdf` or update import in Resume.jsx

### Contact.jsx
Contact information and social links.

**How to Update:**
```jsx
// Update email (Contact.jsx)
<a href="mailto:your.email@example.com">your.email@example.com</a>

// Update social links
<a href="https://linkedin.com/in/your-profile" ...>
<a href="https://github.com/your-username" ...>
```

---

## 🎨 Theming & Styling

### CSS Variables (index.css)

The site uses CSS custom properties for theming:

**Light Mode:**
```css
--bg-primary: radial-gradient(...)
--text-primary: #0f172a
--text-secondary: #475569
--accent: #0284c7
--accent-secondary: #a78bfa
--border: rgba(2, 132, 199, 0.15)
```

**Dark Mode:**
```css
--bg-primary: radial-gradient(...)
--text-primary: #f8fafc
--text-secondary: #cbd5e1
--accent: #60a5fa
--accent-secondary: #a78bfa
--border: rgba(96, 165, 250, 0.15)
```

### Responsive Breakpoints

```css
/* Small phones */
@media (max-width: 480px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }
```

---

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/iamsiddhu3007/iamsiddhu3007.github.io.git
cd iamsiddhu3007.github.io
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

---

## 🚀 Deployment

### Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Deploy the `dist` folder to the `gh-pages` branch
3. Site will be live at `https://iamsiddhu3007.github.io`

### Manual Deployment

```bash
# Build the project
npm run build

# The dist folder contains the static files
# Upload dist/* to your hosting provider
```

---

## 📝 How to Update Content

### Update Personal Information

1. **Name & Title** - `src/pages/Home.jsx` (line 61, 69)
2. **Profile Picture** - Replace `src/assets/profile.jpg`
3. **Resume PDF** - Replace `src/assets/resume.pdf`
4. **Email** - `src/pages/Contact.jsx`
5. **Social Links** - `src/pages/Contact.jsx`

### Add New Experience

Edit `src/pages/Experience.jsx`:
```jsx
const experiences = [
    {
        role: "Your Role",
        company: "Company Name",
        period: "Month Year – Month Year",
        location: "City, State/Country",
        type: "Internship/Full-time/Part-time",
        workMode: "Remote/On-site/Hybrid",
        responsibilities: [
            "Achievement 1",
            "Achievement 2"
        ],
        skills: ["Skill1", "Skill2"]
    },
    // ... existing experiences
];
```

### Add New Project

Edit `src/pages/Projects.jsx`:
```jsx
const projects = [
    {
        title: "Project Name",
        period: "Month Year – Month Year",
        tech: "Tech Stack",
        description: "Detailed description",
        skills: ["Skill1", "Skill2"],
        github: "https://github.com/...", // Optional
        university: "Institution Name" // Optional
    },
    // ... existing projects
];
```

### Add New Course

Edit `src/pages/Education.jsx`:
```jsx
// For ASU
const asuCourses = {
    "Your Semester": [
        { code: "CSE XXX", name: "Course Name" }
    ],
    // ...
};

// For SNU
const snuCourses = {
    "Your Category": [
        { code: "XXX101", name: "Course Name" }
    ],
    // ...
};
```

### Add New Certification

Edit `src/pages/Certifications.jsx`:
```jsx
const certifications = [
    {
        title: "Certification Name",
        issuer: "Issuing Organization",
        date: "Month Year",
        link: "https://credential-url" // Optional
    },
    // ... existing certifications
];
```

---

## 🎯 Key Features

### ✅ Fully Responsive
- Mobile-first design with hamburger menu
- Optimized for all screen sizes (phones, tablets, desktops)
- Touch-friendly interface on mobile devices

### ✅ Modern Animations
- Framer Motion for smooth page transitions
- Scroll-triggered animations
- Hover effects and micro-interactions

### ✅ Glass Morphism Design
- Backdrop blur effects
- Translucent cards and components
- Gradient accents

### ✅ Custom Cursor (Desktop Only)
- Interactive cursor with glow effect
- Automatically disabled on mobile/tablet
- Smooth tracking and hover states

### ✅ Dark/Light Mode
- Theme toggle in navbar
- Persisted in localStorage
- Smooth theme transitions

### ✅ Performance Optimized
- Vite for fast builds and HMR
- Lazy loading for better performance
- Optimized images and assets

---

## 🔧 Troubleshooting

### Issue: Mobile menu not appearing
**Solution:** Ensure screen width is < 768px. Check browser dev tools mobile view.

### Issue: Custom cursor visible on mobile
**Solution:** Already fixed with CSS media query and component logic. Clear cache if persisting.

### Issue: Deployment fails
**Solution:**
```bash
# Clean and rebuild
rm -rf dist node_modules/.cache
npm install
npm run build
npm run deploy
```

### Issue: Theme not persisting
**Solution:** Check browser localStorage is enabled. Theme is saved in `localStorage.getItem('theme')`.

---

## 📚 Technologies & Libraries

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI Framework |
| Vite | 7.2.2 | Build Tool |
| Framer Motion | 12.23.24 | Animations |
| React Router | 7.9.6 | Routing |
| React Icons | 5.5.0 | Icon Library |
| gh-pages | 6.3.0 | Deployment |

---

## 📊 Statistics

- **2** Internships
- **11+** Projects Completed
- **9+** Certifications
- **4.0** GPA at ASU
- **10** Certifications Listed
- **40+** Courses Completed

---

## 📞 Contact

**Mohana Siddhartha Chivukula**

- 📧 Email: mohanasiddhartha.chivukula@gmail.com
- 🔗 LinkedIn: [linkedin.com/in/siddharthachivukula](https://linkedin.com/in/siddharthachivukula/)
- 💻 GitHub: [github.com/iamsiddhu3007](https://github.com/iamsiddhu3007)
- 🌐 Portfolio: [iamsiddhu3007.github.io](https://iamsiddhu3007.github.io)
- 📍 Location: Tempe, AZ, USA

---

## 📄 License

This project is open source and available for reference. Please do not copy content directly - use it as inspiration for your own portfolio.

---

## 🙏 Acknowledgments

- Built with React and Vite
- Icons from React Icons
- Animations powered by Framer Motion
- Hosted on GitHub Pages

---

**Last Updated:** December 2024

**Status:** Looking for full-time SWE roles starting May 2026
