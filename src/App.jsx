import React from 'react'
import profilePic from './assets/profile.jpg'
import resumePDF from './assets/resume.pdf'

const projects = [
    { name: "Attrition Prediction Using Machine Learning", tech: "Python, Scikit-Learn, XGBoost, SMOTE,Pandas", period: "Aug 2024 – Dec 2024", description: "Predicted customer churn in e-commerce using Random Forest and XGBoost.", link: "#" },
    { name: "Financial Systems Blockchain Security", tech: "Blockchain, Machine Learning, Cryptography", period: "Aug 2024 – Dec 2024", description: "Investigated blockchain for financial data integrity and fraud prevention.", link: "#" },
    { name: "AI-Powered Multiplayer Tic-Tac-Toe", tech: "Android, Java/Kotlin, Bluetooth", period: "Sep 2024 – Oct 2024", description: "Built an Android game with AI (Minimax + Alpha-Beta Pruning).", link: "#" },
    { name: "Context Monitoring App", tech: "Kotlin, CameraX, RealmDB", period: "Sep 2024", description: "Context-aware Android health app using CameraX for heart rate monitoring.", link: "#" },
    { name: "Promptly", tech: "React, Python, LLM APIs", period: "May 2025 – Jul 2025", description: "Modular LLM agent framework with tool chaining and RAG support.", link: "#" },
    { name: "Optimizers in Deep Models", tech: "Vision Transformers, Python, Tensorflow", period: "Aug 2023 – Dec 2023", description: "Analyzed optimizers on Vision Transformers. 92.96% accuracy on CIFAR 10.", link: "#" },
    { name: "StockVision", tech: "Flask, React.js, Tailwind CSS, Python", period: "Jan 2023 – May 2023", description: "Real-time stock analysis with AI-driven 7-day price forecasts.", link: "https://github.com/cmdsiraj/stock_vision" },
    { name: "Tweet Search and Classification", tech: "Python, Scikit-Learn, NLP", period: "Jan 2023 – May 2023", description: "ML models for tweet classification with ranking system.", link: "https://github.com/iamsiddhu3007/Information-retrieval-project" },
    { name: "Sokoban Solver", tech: "Python, AI Search Algorithms", period: "Aug 2022 – Nov 2022", description: "Advanced algorithms (A*, IDA*) for solving Sokoban puzzles.", link: "https://github.com/aaaa760/sokoban" },
    { name: "The Holiday Destination", tech: "PHP, MySQL, Tailwind CSS", period: "Aug 2022 – Nov 2022", description: "Full-stack travel booking application.", link: "https://github.com/Hemanth-Boyapati/HolidayDestination" },
    { name: "Library Management System", tech: "Java, OOP", period: "Aug 2021 – Nov 2021", description: "Library management with user accounts and book borrowing.", link: "https://github.com/iamsiddhu3007/Library-Management-System" }
]

const certifications = [
    { name: "Microsoft Azure AI Essentials", issuer: "Microsoft", date: "Sep 2025" },
    { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc", date: "Aug 2025" },
    { name: "Goldman Sachs - Software Engineering Job Simulation", issuer: "Forage", date: "Feb 2025" },
    { name: "Tellius Advanced Insights & Predictive!", issuer: "Tellius", date: "Feb 2024" },
    { name: "Tellius Search & Insights!", issuer: "Tellius", date: "Feb 2024" },
    { name: "Tellius Search Ninja!", issuer: "Tellius", date: "Feb 2024" },
    { name: "ThoughtSpot Professional Certification", issuer: "ThoughtSpot", date: "Feb 2024" },
    { name: "Blockchain Revolution Specialization", issuer: "Coursera", date: "Sep 2022" },
    { name: "Introduction to Android Mobile Application Development", issuer: "Meta (Coursera)", date: "Sep 2022" },
    { name: "Introduction to Quantum Computing", issuer: "Udemy", date: "Sep 2022" },
    { name: "Big Data Integration and Processing", issuer: "Coursera", date: "Apr 2021" }
]

function App() {
    return (
        <div className="container">
            <section className="section" style={{ display: 'flex', gap: '3rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h1>Mohana Siddhartha Chivukula</h1>
                    <p style={{ fontSize: '1.2rem', color: '#60a5fa', marginBottom: '1rem' }}>
                        Software Developer & Data Engineer
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        Hi, I'm Mohana Siddhartha Chivukula, a graduate student at Arizona State University,
                        pursuing a Master's degree in Computer Science. I build mobile apps, data pipelines,
                        and clean CI/CD. Passionate about creating efficient, scalable solutions.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href={resumePDF} download style={{
                            backgroundColor: '#60a5fa',
                            color: '#0a0a0a',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            display: 'inline-block'
                        }}>Download Resume</a>
                        <a href="#contact" style={{
                            border: '2px solid #60a5fa',
                            color: '#60a5fa',
                            padding: '0.8rem 1.5rem',
                            borderRadius: '6px',
                            fontWeight: 600,
                            display: 'inline-block'
                        }}>Contact Me</a>
                    </div>
                </div>
                <div style={{ flex: '0 0 250px' }}>
                    <img src={profilePic} alt="Siddhartha Chivukula" style={{
                        width: '250px',
                        height: '250px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid #60a5fa',
                        boxShadow: '0 0 30px rgba(96, 165, 250, 0.3)'
                    }} />
                </div>
            </section>

            <section className="section">
                <h2>Experience</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>SCAI Grader @ Arizona State University</h3>
                    <p style={{ color: '#888' }}>Aug 2025 – Present | Tempe, AZ</p>
                    <p>Grader for CSE 469 and CSE 543. Built Python sanity checks for tasks.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Software Developer Intern @ Get SuperStars Inc.</h3>
                    <p style={{ color: '#888' }}>May 2025 – Aug 2025 | Remote</p>
                    <p>Shipped Stories & Action Feed modules in Flutter/Dart with REST integrations.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>BTS Associate Intern @ ZS Associates</h3>
                    <p style={{ color: '#888' }}>Jan 2024 – July 2024 | Gurugram, India</p>
                    <p>Designed multi‑layer Snowflake DWH; developed IICS pipelines for 70+ vendor feeds.</p>
                </div>
            </section>

            <section className="section">
                <h2>Projects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {projects.map((project, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#1a1a1a',
                            padding: '1.5rem',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>{project.name}</h3>
                            <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '0.5rem' }}>{project.period}</p>
                            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{project.description}</p>
                            <p style={{ color: '#60a5fa', fontSize: '0.85rem' }}>{project.tech}</p>
                            {project.link !== '#' && (
                                <a href={project.link} target="_blank" rel="noopener noreferrer"
                                    style={{ color: '#60a5fa', fontSize: '0.9rem' }}>View Project →</a>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2>Certifications</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                    {certifications.map((cert, idx) => (
                        <div key={idx} style={{
                            backgroundColor: '#1a1a1a',
                            padding: '1rem',
                            borderRadius: '8px',
                            border: '1px solid #333'
                        }}>
                            <h3 style={{ color: '#ffffff', fontSize: '1rem', marginBottom: '0.3rem' }}>{cert.name}</h3>
                            <p style={{ color: '#60a5fa', fontSize: '0.85rem' }}>{cert.issuer}</p>
                            <p style={{ color: '#888', fontSize: '0.8rem' }}>{cert.date}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2>Education</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Arizona State University</h3>
                    <p style={{ color: '#888' }}>Master of Science Computer Science | GPA: 4/4 | Aug 2024 – May 2026</p>
                    <p><strong>Courses:</strong> Mobile Computing, Info Assurance & Security, Data Mining,
                        Software Verification/Test, Data Visualization, Knowledge Representation, Internship,
                        Data Processing at Scale, Applied Cryptography, Engr Blockchain Applications</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Shiv Nadar University</h3>
                    <p style={{ color: '#888' }}>B.Tech Computer Science | GPA: 7.61/10 | Aug 2020 – May 2024</p>
                </div>
            </section>

            <section className="section">
                <h2>Contact</h2>
                <p>Email: mohanasiddhartha.chivukula@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/siddharthachivukula/"
                        style={{ color: '#60a5fa', marginRight: '1rem' }}>LinkedIn</a>
                    <a href="https://github.com/iamsiddhu3007"
                        style={{ color: '#60a5fa' }}>GitHub</a>
                </p>
            </section>
        </div>
    )
}

export default App
