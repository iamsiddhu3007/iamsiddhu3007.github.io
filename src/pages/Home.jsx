import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import Card from '../components/Card';
import './Home.css';

const Counter = ({ end, duration = 2, suffix = '' }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime;
        let animationFrame;

        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
};

export default function Home() {
    const projectsData = [
        'Promptly', 'Attrition Prediction', 'Blockchain Financial Security',
        'AI Tic-Tac-Toe', 'Context Monitoring App', 'Vision Transformers',
        'StockVision', 'Tweet Classification', 'Sokoban Solver',
        'Holiday Destination', 'Library Management'
    ];

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
                                Software Developer & Data Engineer
                            </motion.p>
                            <motion.p
                                className="hero-description"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                Graduate student at Arizona State University, building mobile apps, data pipelines, and clean CI/CD.
                                Passionate about creating efficient, scalable solutions.
                            </motion.p>
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
                            const statsSection = document.querySelector('.stats-section');
                            statsSection?.scrollIntoView({ behavior: 'smooth' });
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

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <Card delay={0.1} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={2} />
                                </div>
                                <div className="stat-label">Internships</div>
                            </div>
                        </Card>
                        <Card delay={0.2} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={11} suffix="+" />
                                </div>
                                <div className="stat-label">Projects Completed</div>
                            </div>
                        </Card>
                        <Card delay={0.3} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">
                                    <Counter end={9} suffix="+" />
                                </div>
                                <div className="stat-label">Certifications</div>
                            </div>
                        </Card>
                        <Card delay={0.4} hover={false}>
                            <div className="stat-item">
                                <div className="stat-number">4.0</div>
                                <div className="stat-label">GPA at ASU</div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What I Do Section */}
            <section className="what-i-do-section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        What I Do
                    </motion.h2>
                    <div className="expertise-grid">
                        <Card delay={0.1}>
                            <div className="expertise-icon">📱</div>
                            <h3>Mobile Development</h3>
                            <p>Building cross-platform mobile applications with Flutter/Dart and Android. Focus on clean architecture and smooth user experiences.</p>
                            <div className="tech-tags">
                                <span>Flutter</span>
                                <span>Dart</span>
                                <span>Android</span>
                            </div>
                        </Card>
                        <Card delay={0.2}>
                            <div className="expertise-icon">🌐</div>
                            <h3>Full-Stack Development</h3>
                            <p>Creating responsive web applications with React frontends and robust backend APIs. Delivering end-to-end solutions.</p>
                            <div className="tech-tags">
                                <span>React</span>
                                <span>Flask</span>
                                <span>REST APIs</span>
                            </div>
                        </Card>
                        <Card delay={0.3}>
                            <div className="expertise-icon">⚙️</div>
                            <h3>Data Engineering</h3>
                            <p>Designing and implementing ETL pipelines, data warehouses, and cloud data solutions for large-scale analytics.</p>
                            <div className="tech-tags">
                                <span>Snowflake</span>
                                <span>Informatica</span>
                                <span>SQL</span>
                            </div>
                        </Card>
                        <Card delay={0.4}>
                            <div className="expertise-icon">🤖</div>
                            <h3>AI/ML</h3>
                            <p>Developing machine learning models, LLM applications, and intelligent systems for real-world problems.</p>
                            <div className="tech-tags">
                                <span>Python</span>
                                <span>LLMs</span>
                                <span>TensorFlow</span>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Featured Projects Carousel */}
            <section className="featured-projects-section">
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
            </section>

            {/* Recent Experience */}
            <section className="recent-experience-section">
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
                                Assisting Prof. Jaejong Baek in grading and managing coursework for CSE 469: Computer and Network Forensics
                                and CSE 543: Information Assurance and Security.
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
            </section>

            {/* Recommendations Section */}
            <section className="recommendations-section">
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
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <Card delay={0.1} hover={false}>
                        <div className="cta-content">
                            <h2>Let's Work Together</h2>
                            <p>I'm currently looking for new opportunities. Let's connect and build something amazing!</p>
                            <div className="cta-buttons">
                                <motion.a
                                    href="/contact"
                                    className="btn-primary"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get In Touch
                                </motion.a>
                                <motion.a
                                    href="https://www.linkedin.com/in/siddharthachivukula/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    LinkedIn
                                </motion.a>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

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
