import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import Card from '../components/Card';
import './Home.css';

// Apple-style scroll section component
const ScrollSection = ({ children, className }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);
    const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [40, 0, 0, -40]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale, y }}
            transition={{ type: "spring", stiffness: 100, damping: 30 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default function Home() {
    const [expandedCategory, setExpandedCategory] = useState(null);

    const projectsData = [
        'Promptly', 'Attrition Prediction', 'Blockchain Financial Security',
        'AI Tic-Tac-Toe', 'Context Monitoring App', 'Vision Transformers',
        'StockVision', 'Tweet Classification', 'Sokoban Solver',
        'Holiday Destination', 'Library Management'
    ];

    // Projects mapped to categories with links to specific project sections
    const projectsByCategory = {
        'mobile': [
            { name: 'AI Game Engine', slug: 'ai-game-engine' },
            { name: 'Context Monitoring App', slug: 'context-monitoring-app' },
        ],
        'fullstack': [
            { name: 'Promptly', slug: 'promptly' },
            { name: 'StockVision', slug: 'stockvision' },
            { name: 'The Holiday Destination', slug: 'the-holiday-destination' },
            { name: 'Library Management System', slug: 'library-management-system' },
        ],
        'data': [
            { name: 'STREAM: Real-Time Analytics', slug: 'stream-scalable-real-time-event-and-analytics-machine' },
        ],
        'ai': [
            { name: 'Promptly (Multi-Model AI)', slug: 'promptly' },
            { name: 'Attrition Prediction', slug: 'attrition-prediction-using-machine-learning' },
            { name: 'Vision Transformers Research', slug: 'optimizers-in-deep-models' },
            { name: 'Tweet Classification', slug: 'tweet-search-and-classification' },
            { name: 'Sokoban Solver', slug: 'sokoban-solver' },
        ],
    };

    const handleCategoryClick = (category) => {
        setExpandedCategory(expandedCategory === category ? null : category);
    };

    return (
        <div className="home-page">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hero-section"
            >
                <div className="container">
                    <div className="hero-content">
                        <div className="hero-text">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                Mohana Siddhartha Chivukula
                            </motion.h1>
                            <motion.p
                                className="hero-subtitle"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Software Developer
                            </motion.p>
                            <motion.p
                                className="hero-description"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Graduate student at Arizona State University with experience in building production-level mobile applications for Android and cross-platform environments, full-stack web applications, designing data pipelines and ETL solutions, and developing AI-powered systems with LLMs and machine learning. Passionate about building scalable solutions to complex problems through clean code and thoughtful architecture.
                            </motion.p>
                            <motion.a
                                href="https://www.linkedin.com/in/siddharthachivukula/"
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    padding: '1rem 2rem',
                                    background: 'linear-gradient(135deg, #0077B6 0%, #48CAE4 100%)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontSize: '1rem',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 20px rgba(0, 119, 182, 0.3)',
                                    marginTop: '1.5rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                Connect on LinkedIn
                            </motion.a>
                        </div>
                        <motion.div
                            className="hero-image"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            <div className="profile-ring"></div>
                            <img src={profilePic} alt="Profile" />
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.button
                        className="scroll-indicator"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        onClick={() => {
                            const experienceSection = document.querySelector('.what-i-do-section');
                            experienceSection?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </motion.div>
                        <span className="scroll-text">Scroll to explore</span>
                    </motion.button>
                </div>
            </motion.section>

            {/* Experience Overview Section */}
            <ScrollSection className="what-i-do-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Experience Overview
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                        style={{ marginBottom: '2rem' }}
                    >
                        Click any category to explore related projects
                    </motion.p>
                    <div className="expertise-grid">
                        <motion.div
                            layout
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                layout
                                onClick={() => handleCategoryClick('mobile')}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card delay={0.1}>
                                    {!expandedCategory || expandedCategory !== 'mobile' ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h3>Mobile Development</h3>
                                            <p>Contributed to Flutter development at Get SuperStars Inc., delivering clean UI components and maintaining code review standards. Built Android apps at ASU including AI Tic-Tac-Toe with Minimax algorithm and a health monitoring app using camera/accelerometer sensors.</p>
                                            <div className="tech-tags">
                                                <span>Flutter</span>
                                                <span>Dart</span>
                                                <span>Android</span>
                                                <span>Kotlin</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <h3 style={{ marginBottom: '1.5rem' }}>Mobile Development Projects</h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                {projectsByCategory.mobile.map((project, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={`/projects#${project.slug}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.3 }}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                x: 4
                                                            }}
                                                            style={{
                                                                padding: '1.25rem 1.5rem',
                                                                background: 'rgba(255, 255, 255, 0.6)',
                                                                backdropFilter: 'blur(10px)',
                                                                border: '1px solid var(--border-soft)',
                                                                borderRadius: '12px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                        >
                                                            <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                                {project.name}
                                                            </span>
                                                            <span style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>View</span>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            layout
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                layout
                                onClick={() => handleCategoryClick('fullstack')}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card delay={0.2}>
                                    {!expandedCategory || expandedCategory !== 'fullstack' ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h3>Full-Stack Development</h3>
                                            <p>Built web applications like Promptly (LLM agent framework with RAG and vector-backed knowledge base) and StockVision (real-time stock analysis with AI-driven forecasting). Experience in developing responsive frontends with React and robust backend APIs with Flask.</p>
                                            <div className="tech-tags">
                                                <span>React</span>
                                                <span>Flask</span>
                                                <span>REST APIs</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <h3 style={{ marginBottom: '1.5rem' }}>Full-Stack Projects</h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                {projectsByCategory.fullstack.map((project, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={`/projects#${project.slug}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.3 }}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                x: 4
                                                            }}
                                                            style={{
                                                                padding: '1.25rem 1.5rem',
                                                                background: 'rgba(255, 255, 255, 0.6)',
                                                                backdropFilter: 'blur(10px)',
                                                                border: '1px solid var(--border-soft)',
                                                                borderRadius: '12px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                        >
                                                            <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                                {project.name}
                                                            </span>
                                                            <span style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>View</span>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            layout
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                layout
                                onClick={() => handleCategoryClick('data')}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card delay={0.3}>
                                    {!expandedCategory || expandedCategory !== 'data' ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h3>Data Engineering</h3>
                                            <p>Designed and optimized ETL pipelines, data warehouses, and cloud-based data solutions at ZS Associates. Worked extensively with Snowflake for data warehousing, Informatica for data integration, and SQL for complex data transformations. Experience in building scalable data architectures for large-scale analytics and business intelligence.</p>
                                            <div className="tech-tags">
                                                <span>Snowflake</span>
                                                <span>Informatica</span>
                                                <span>SQL</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <h3 style={{ marginBottom: '1.5rem' }}>Data Engineering Projects</h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                {projectsByCategory.data.map((project, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={`/projects#${project.slug}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.3 }}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                x: 4
                                                            }}
                                                            style={{
                                                                padding: '1.25rem 1.5rem',
                                                                background: 'rgba(255, 255, 255, 0.6)',
                                                                backdropFilter: 'blur(10px)',
                                                                border: '1px solid var(--border-soft)',
                                                                borderRadius: '12px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                        >
                                                            <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                                {project.name}
                                                            </span>
                                                            <span style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>View</span>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            layout
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                layout
                                onClick={() => handleCategoryClick('ai')}
                                style={{ cursor: 'pointer' }}
                            >
                                <Card delay={0.4}>
                                    {!expandedCategory || expandedCategory !== 'ai' ? (
                                        <motion.div
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <h3>AI/ML</h3>
                                            <p>Built LLM-powered applications with RAG and vector databases (Promptly), customer churn prediction models using XGBoost and Random Forest, and researched optimizer performance in Vision Transformers achieving 92.96% accuracy on CIFAR-10.</p>
                                            <div className="tech-tags">
                                                <span>Python</span>
                                                <span>LLMs</span>
                                                <span>TensorFlow</span>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.3, delay: 0.1 }}
                                        >
                                            <h3 style={{ marginBottom: '1.5rem' }}>AI/ML Projects</h3>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                                {projectsByCategory.ai.map((project, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to={`/projects#${project.slug}`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            window.scrollTo(0, 0);
                                                        }}
                                                        style={{ textDecoration: 'none' }}
                                                    >
                                                        <motion.div
                                                            initial={{ opacity: 0, y: 10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: idx * 0.1 + 0.2, duration: 0.3 }}
                                                            whileHover={{
                                                                scale: 1.02,
                                                                x: 4
                                                            }}
                                                            style={{
                                                                padding: '1.25rem 1.5rem',
                                                                background: 'rgba(255, 255, 255, 0.6)',
                                                                backdropFilter: 'blur(10px)',
                                                                border: '1px solid var(--border-soft)',
                                                                borderRadius: '12px',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'space-between',
                                                                transition: 'all 0.2s ease'
                                                            }}
                                                        >
                                                            <span style={{ fontSize: '15px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                                {project.name}
                                                            </span>
                                                            <span style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>View</span>
                                                        </motion.div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </Card>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </ScrollSection>

            {/* How I Work Section */}
            <ScrollSection className="how-i-work-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        How I Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        Collaboration, ownership, and delivering quality solutions
                    </motion.p>
                    <div className="work-approach-grid">
                        <Card delay={0.1}>
                            <div className="approach-icon">💬</div>
                            <h3>Clear Communication</h3>
                            <p>Collaborated with stakeholders and cross-functional teams at ZS Associates to define clear deliverables. Maintained comprehensive documentation of business and technical requirements, ensuring alignment across teams.</p>
                        </Card>
                        <Card delay={0.2}>
                            <div className="approach-icon">🎯</div>
                            <h3>End-to-End Ownership</h3>
                            <p>Consistently took full ownership of tasks from conception to delivery. Worked closely with testing teams to deliver high-quality solutions with minimal bugs, ensuring robust and reliable software.</p>
                        </Card>
                        <Card delay={0.3}>
                            <div className="approach-icon">🚀</div>
                            <h3>Process & Quality</h3>
                            <p>Created onboarding guides for new developers and maintained CI/CD pipelines at Get SuperStars Inc. Established code review standards and best practices to maintain code quality and team efficiency.</p>
                        </Card>
                    </div>
                </div>
            </ScrollSection>

            {/* Featured Projects Carousel */}
            <ScrollSection className="featured-projects-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        Click any project to explore more
                    </motion.p>
                    <div className="projects-carousel">
                        <motion.div
                            className="carousel-track"
                            animate={{ x: [0, -2000] }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...projectsData, ...projectsData].map((project, idx) => (
                                <Link
                                    key={idx}
                                    to="/projects"
                                    className="project-tag"
                                    onClick={() => window.scrollTo(0, 0)}
                                >
                                    {project}
                                </Link>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </ScrollSection>

            {/* Recent Experience */}
            <ScrollSection className="recent-experience-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Currently
                    </motion.h2>
                    <Card delay={0.1}>
                        <div className="experience-highlight">
                            <div className="exp-header">
                                <div>
                                    <h3>SCAI Grader</h3>
                                    <p className="exp-company">Arizona State University</p>
                                </div>
                                <span className="exp-badge">Current</span>
                            </div>
                            <p className="exp-period">Aug 2025 – Present | Tempe, Arizona</p>
                            <p className="exp-description">
                                Assisting Prof. Jaejong Baek in grading and managing coursework.<br/>
                                <strong>Fall 2025:</strong> CSE 469 (Computer and Network Forensics) and CSE 543 (Information Assurance and Security)<br/>
                                <strong>Spring 2026:</strong> CSE 535 (Mobile Computing), CSE 543 (Information Assurance and Security), and CSE 469 (Computer and Network Forensics)
                            </p>
                            <Link
                                to="/experience"
                                className="view-all-link"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                View All Experience →
                            </Link>
                        </div>
                    </Card>
                </div>
            </ScrollSection>

            {/* Recommendations Section */}
            <ScrollSection className="recommendations-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        Recommendations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="section-subtitle"
                    >
                        What colleagues say about working with me
                    </motion.p>

                    <div className="recommendations-grid">
                        <Card delay={0.1}>
                            <div className="recommendation-card">
                                <div className="quote-icon">"</div>
                                <p className="recommendation-text">
                                    Siddhartha brings unique perspective and sharp problem solving skills to the table.
                                    He is proactive, insightful and always brings energy and fresh ideas. I highly recommend
                                    Siddhartha for his strong analytics and computer science skills - anyone working on core
                                    technical problem should definitely consider him.
                                </p>
                                <div className="recommender-info">
                                    <div className="recommender-avatar">HA</div>
                                    <div className="recommender-details">
                                        <div className="recommender-name">Himanshu Aggarwal</div>
                                        <div className="recommender-title">Technology Associate @ ZS Associates</div>
                                        <div className="recommender-relation">Teammate at ZS Associates</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card delay={0.2}>
                            <div className="recommendation-card">
                                <div className="quote-icon">"</div>
                                <p className="recommendation-text">
                                    Siddhartha stood out because he combined strong frontend development skills with the same
                                    level of rigor in code review and version control that you'd expect from a backend engineer.
                                    He consistently delivered clean, scalable UI components while also playing a key role in
                                    reviewing PRs, maintaining repo standards, and helping the team align on best practices.
                                    Siddhartha is the kind of teammate who makes everyone's work better.
                                </p>
                                <div className="recommender-info">
                                    <div className="recommender-avatar">DP</div>
                                    <div className="recommender-details">
                                        <div className="recommender-name">Dhruvkumar Parmar</div>
                                        <div className="recommender-title">Software Developer | Flutter & Cross-Platform Apps</div>
                                        <div className="recommender-relation">Teammate at Get SuperStars Inc.</div>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        <Card delay={0.3}>
                            <div className="recommendation-card">
                                <div className="quote-icon">"</div>
                                <p className="recommendation-text">
                                    Sid demonstrated strong learning ability, quickly adapting to the team, SDLC practices,
                                    and CI/CD workflows. He consistently contributed solid technical work and was collaborative
                                    and supportive throughout the project. He is dependable, proactive, and a great teammate.
                                    I highly recommend him for any future software engineering role.
                                </p>
                                <div className="recommender-info">
                                    <div className="recommender-avatar">EE</div>
                                    <div className="recommender-details">
                                        <div className="recommender-name">Erdun E</div>
                                        <div className="recommender-title">CS Grad @ NEU | Ex-AWS SDE</div>
                                        <div className="recommender-relation">Intern Colleague at Get SuperStars Inc.</div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </ScrollSection>

            {/* Navigation CTA Section */}
            <ScrollSection className="cta-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                        style={{ marginBottom: '3rem' }}
                    >
                        Explore More
                    </motion.h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                        <Link to="/experience" onClick={() => window.scrollTo(0, 0)}>
                            <Card delay={0.1}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Work Experience</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                        Professional journey, opensource contributions, and achievements
                                    </p>
                                    <div style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>
                                        View Details
                                    </div>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>
                            <Card delay={0.2}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Projects</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                        Full portfolio of mobile, web, AI/ML, and data projects
                                    </p>
                                    <div style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>
                                        View Projects
                                    </div>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/resume" onClick={() => window.scrollTo(0, 0)}>
                            <Card delay={0.3}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Resume</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                        Download or view my complete resume
                                    </p>
                                    <div style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>
                                        View Resume
                                    </div>
                                </div>
                            </Card>
                        </Link>

                        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                            <Card delay={0.4}>
                                <div style={{ textAlign: 'center' }}>
                                    <h3 style={{ fontSize: '24px', marginBottom: '0.5rem' }}>Get In Touch</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                                        Let's connect and discuss opportunities
                                    </p>
                                    <div style={{ color: 'var(--accent-ocean)', fontSize: '14px', fontWeight: '600' }}>
                                        Contact Me
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
            </ScrollSection>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)}>
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </footer>
        </div>
    );
}
