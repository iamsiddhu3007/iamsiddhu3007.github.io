import { motion } from 'framer-motion';
import './Experience.css';

const experiences = [
    {
        role: "SCAI Grader",
        company: "Arizona State University",
        period: "Aug 2025 – Present",
        location: "Tempe, Arizona, United States",
        type: "Part-time",
        workMode: "Hybrid",
        responsibilities: [
            "Assisting Prof. Jaejong Baek in grading and managing coursework for CSE 469: Computer and Network Forensics and CSE 543: Information Assurance and Security"
        ],
        skills: ["Security", "Forensics", "Academic Support"]
    },
    {
        role: "Software Developer Intern",
        company: "Get SuperStars Inc.",
        period: "May 2025 – Aug 2025",
        location: "United States",
        type: "Internship",
        workMode: "Remote",
        responsibilities: [
            "Took full ownership of cross-platform mobile app development, architecting Flutter/Dart UI and RESTful API integration to handle high-volume traffic with zero slowdowns",
            "Built and launched Stories & Action Feed modules in 6 weeks, reducing memory usage by 80% through profiling and refactoring",
            "Implemented 3-stage GitHub Actions workflow with automatic PR checks, achieving near-zero rollbacks",
            "Participated in weekly sprints with product teams to align on strategy and development progress"
        ],
        skills: ["Flutter", "Dart", "REST APIs", "CI/CD", "GitHub Actions", "Mobile Dev"]
    },
    {
        role: "Business Technology Solutions Associate",
        company: "ZS Associates",
        period: "Jan 2024 – Jul 2024",
        location: "Gurugram, Haryana, India",
        type: "Full-time",
        workMode: "On-site",
        award: "Dashing Debut Award (H1'24)",
        responsibilities: [
            "Developed 4-layer data warehouse schemas (Staging, PSA, DWH, DMT) to consolidate fragmented data and enable scalable analytics",
            "Built end-to-end ETL pipelines for 70+ vendor datasets using Informatica IICS and Snowflake, ensuring data quality and consistency",
            "Led standardization efforts across 70+ vendor sources, aligning field names, formats, and schema structures",
            "Created optimized SQL views for reporting layers, improving data accessibility and performance for business teams"
        ],
        skills: ["Snowflake", "SQL", "Informatica IICS", "ETL", "Data Warehousing", "Excel"]
    }
];

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Professional Experience</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px' }}>
                My journey through software development, data engineering, and academic roles.
            </p>

            <div className="timeline-container">
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="experience-card">
                            <div className="exp-header">
                                <div className="exp-title-group">
                                    <h3>{exp.role}</h3>
                                    <p className="exp-company">{exp.company}</p>
                                </div>
                                <div className="exp-badges">
                                    <span className="exp-badge">{exp.type}</span>
                                    {exp.award && <span className="exp-badge award">Award</span>}
                                </div>
                            </div>

                            <div className="exp-meta">
                                <span>📅 {exp.period}</span>
                                <span>📍 {exp.location}</span>
                                <span>💼 {exp.workMode}</span>
                            </div>

                            {exp.award && (
                                <div style={{
                                    padding: '0.8rem 1.2rem',
                                    background: 'linear-gradient(135deg, rgba(250, 204, 21, 0.15), rgba(251, 191, 36, 0.08))',
                                    border: '1px solid rgba(250, 204, 21, 0.3)',
                                    borderRadius: '12px',
                                    color: '#fbbf24',
                                    fontSize: '0.95rem',
                                    fontWeight: 600,
                                    marginBottom: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}>
                                    ⭐ {exp.award}
                                </div>
                            )}

                            <div className="exp-responsibilities">
                                <h4>Key Achievements</h4>
                                <div className="responsibilities-grid">
                                    {exp.responsibilities.map((resp, i) => (
                                        <div key={i} className="responsibility-item">
                                            <p>{resp}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="exp-skills">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
