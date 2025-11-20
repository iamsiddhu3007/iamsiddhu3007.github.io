import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        name: "Promptly",
        tech: "React, Python, LLM APIs (Gemini, Groq), Ollama",
        period: "May 2025 – Jul 2025",
        desc: "Designed a modular LLM agent framework with pluggable APIs, tool chaining, and a role-based system prompt. Implemented a vector-backed knowledge base enabling multi-step learning, multi-shot execution, and contextual memory. Led the development of a web application and included a tool where the agent can create a downloadable pdf.",
        skills: ["React", "Python", "LLMs", "RAG"]
    },
    {
        name: "Attrition Prediction Using Machine Learning",
        tech: "Python, XGBoost, Random Forest, SMOTE",
        period: "Aug 2024 – Dec 2024",
        desc: "Predicted customer churn in e-commerce sector for Data Mining course at ASU. Implemented ML models including Random Forest and XGBoost. Conducted feature engineering, data preprocessing (handling missing values, outliers, class imbalance using SMOTE), and hyperparameter tuning. Developed data visualizations (heatmaps, scatter plots) to uncover customer behavior insights.",
        skills: ["Machine Learning", "Data Mining", "Python"],
        university: "Arizona State University"
    },
    {
        name: "Improve Data Integrity and Security in Financial Systems using Blockchain",
        tech: "Blockchain, ML (K-means, Random Forest), Cryptography",
        period: "Aug 2024 – Dec 2024",
        desc: "Investigated blockchain's potential to revolutionize financial systems for CSE 543: Information Assurance & Security. Conducted research on blockchain applications in financial data security, fraud detection, and DeFi. Explored integration of ML models for transaction classification and anomaly detection. Proposed hybrid blockchain solutions and documented advanced cryptographic techniques like homomorphic encryption and zero-knowledge proofs.",
        skills: ["Blockchain", "Security", "Cryptography"],
        university: "Arizona State University"
    },
    {
        name: "AI-Powered Multiplayer Tic-Tac-Toe Mobile Game",
        tech: "Android, Kotlin, Minimax, Alpha-Beta Pruning, Bluetooth",
        period: "Sep 2024 – Oct 2024",
        desc: "Built feature-rich Tic-Tac-Toe game for Android in Mobile Computing course. Implemented Minimax algorithm with Alpha-Beta Pruning across three difficulty levels (Easy, Medium, Hard). Enabled real-time Bluetooth multiplayer with JSON-based communication. Stored historical game data locally and designed intuitive UI for single-player and multiplayer modes.",
        skills: ["Android", "Kotlin", "AI Algorithms", "Bluetooth"],
        university: "Arizona State University"
    },
    {
        name: "Context Monitoring App",
        tech: "Kotlin, CameraX, RealmDB, Android Studio",
        period: "Sep 2024",
        desc: "Developed context-aware Android health monitoring app for Mobile Computing course. Implemented heart rate monitoring using camera/flash via CameraX library and respiratory rate tracking using accelerometer data. Created user feedback system with rating interface and local data storage using RealmDB for health metrics persistence.",
        skills: ["Android", "Sensors", "Health Tech"],
        university: "Arizona State University"
    },
    {
        name: "Optimizers in Deep Models",
        tech: "Vision Transformers, TensorFlow, Python",
        period: "Aug 2023 – Dec 2023",
        desc: "Conducted comprehensive experiments training Vision Transformers with diverse optimizers (Adam, AdamW, Adabelief, Adagrad, Adadelta, Radam, SGD). Achieved 92.96% accuracy on CIFAR-10 and 71.26% on CIFAR-100 using ViT with AdamW. Explored optimizer configurations and their impact on ViT performance across image recognition tasks.",
        skills: ["Deep Learning", "Computer Vision", "TensorFlow"],
        university: "Shiv Nadar University"
    },
    {
        name: "StockVision",
        tech: "Flask, React, Tailwind CSS, Python",
        period: "Jan 2023 – May 2023",
        desc: "Innovative web app for real-time stock analysis, precise historical trends, and AI-driven 7-day price forecasts for NASDAQ/NSE stocks. Developed full-stack solution empowering users with data-driven investment decisions. Integrated live stock prices using Yahoo Finance API and AI-driven sentiment analysis.",
        link: "https://github.com/cmdsiraj/stock_vision",
        skills: ["Flask", "React", "Tailwind CSS", "Python"],
        university: "Shiv Nadar University"
    },
    {
        name: "Tweet Search and Classification",
        tech: "Python, NLP, Scikit-Learn, Logistic Regression",
        period: "Jan 2023 – May 2023",
        desc: "Developed ML models using Logistic Regression and fine-tuned Multinomial Naive Bayes classifier for tweet classification (spam/ham) using Information Retrieval and NLP concepts. Implemented ranking system based on followers, likes, retweets, and post date for categorizing tweets and identifying spam messages.",
        link: "https://github.com/iamsiddhu3007/Information-retrieval-project",
        skills: ["NLP", "Machine Learning", "Python"],
        university: "Shiv Nadar University"
    },
    {
        name: "Sokoban Solver",
        tech: "Python, Search Algorithms, Heuristics",
        period: "Aug 2022 – Nov 2022",
        desc: "Developed and implemented advanced algorithms and heuristics for solving complex Sokoban puzzles. Optimized performance through informed search algorithms, heuristic design, and memory management. Explored diverse heuristics from academic research to enhance puzzle-solving efficiency.",
        link: "https://github.com/aaaa760/sokoban",
        skills: ["Python", "AI Algorithms"],
        university: "Shiv Nadar University"
    },
    {
        name: "The Holiday Destination",
        tech: "HTML, Tailwind CSS, PHP, MySQL",
        period: "Aug 2022 – Nov 2022",
        desc: "Developed full-stack web application for travel company. Created responsive layout enabling users to explore and book vacation packages. Utilized PHP to retrieve data from MySQL database and display travel package information with modern aesthetics.",
        link: "https://github.com/Hemanth-Boyapati/HolidayDestination",
        skills: ["PHP", "MySQL", "Web Development"],
        university: "Shiv Nadar University"
    },
    {
        name: "Library Management System",
        tech: "Java, OOP",
        period: "Aug 2021 – Nov 2021",
        desc: "Designed and developed user-friendly library management system utilizing object-oriented programming concepts. Implemented features like user account creation, book borrowing functionality, and librarian record-keeping.",
        link: "https://github.com/iamsiddhu3007/Library-Management-System",
        skills: ["Java", "OOP"],
        university: "Shiv Nadar University"
    }
];

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Projects</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px' }}>
                A collection of projects spanning mobile development, machine learning, blockchain, and full-stack applications.
            </p>

            <div className="timeline-container">
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="project-card">
                            <div className="project-header">
                                <div className="project-title-group">
                                    <h3>{proj.name}</h3>
                                    {proj.university && (
                                        <p className="project-university">{proj.university}</p>
                                    )}
                                </div>
                                <div className="project-badges">
                                    <span className="project-badge">📅 {proj.period}</span>
                                </div>
                            </div>

                            <div className="project-meta">
                                <span>🛠️ {proj.tech}</span>
                            </div>

                            <p className="project-description">{proj.desc}</p>

                            <div className="project-skills">
                                {proj.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>

                            {proj.link && (
                                <motion.a
                                    href={proj.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    View on GitHub
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                        <polyline points="15 3 21 3 21 9" />
                                        <line x1="10" y1="14" x2="21" y2="3" />
                                    </svg>
                                </motion.a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
