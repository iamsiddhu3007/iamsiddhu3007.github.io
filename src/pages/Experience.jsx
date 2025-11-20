import { motion } from 'framer-motion';

const experiences = [
    {
        role: "SCAI Grader",
        company: "Arizona State University",
        period: "Aug 2025 – Present",
        location: "Tempe, Arizona, United States · Hybrid",
        points: [
            "Assisting Prof. Jaejong Baek in grading and managing coursework for CSE 469: Computer and Network Forensics and CSE 543: Information Assurance and Security"
        ]
    },
    {
        role: "Software Developer Intern",
        company: "Get SuperStars Inc.",
        period: "May 2025 – Aug 2025",
        location: "United States · Remote",
        points: [
            "Built cross-platform mobile application using Flutter and Dart, focusing on professional design and development workflow",
            "Implemented responsive front-end features and integrated with back-end services through RESTful APIs using Postman",
            "Took full ownership of a cross-platform mobile app development, architecting Flutter/Dart UI and RESTful API integration to absorb high-volume traffic spikes with no user-visible slowdowns",
            "Built and launched two customer-facing modules (Stories, Action Feed) in under six weeks by partnering with cross-functional teams, reducing runtime memory usage by 80% through allocation profiling and widget tree refactoring",
            "Implemented a three-stage GitHub Actions workflow: Code Analysis, Build Verification, and Configuration Validation, adding automatic PR checks and achieving near-zero rollbacks (CI/CD, GitHub Actions, Pull Request Checks)",
            "Participated in weekly sprint meetings to align on product strategy and development progress"
        ]
    },
    {
        role: "Business Technology Solutions Associate",
        company: "ZS Associates",
        period: "Jan 2024 – Jul 2024",
        location: "Gurugram, Haryana, India · On-site",
        points: [
            "Worked on large-scale data engineering project for a global pharmaceutical client, focusing on development of robust, multi-layered data warehouse architecture",
            "Designed and implemented end-to-end ETL pipelines using Informatica IICS to extract, transform, and load complex commercial datasets into Snowflake cloud data warehouse",
            "Developed 4 multi-layered data warehouse schemas (Staging, PSA, DWH, and DMT layers) to consolidate fragmented data sources and enable scalable storage and advanced analytics (SQL, Snowflake, Informatica IICS, Excel)",
            "Built and maintained end-to-end ETL pipelines to extract, transform, and load data from 70+ vendor datasets, ensuring data quality, consistency, and optimized processing (ETL, SQL, Snowflake, Informatica IICS)",
            "Led efforts to standardize and harmonize data from over 70 distinct vendor sources by aligning field names, formats, and schema structures",
            "Ensured data consistency, accuracy, and completeness through rigorous data quality checks and transformation logic implemented via SQL",
            "Contributed to creation of optimized SQL views for reporting layers, significantly improving data accessibility and performance for business teams",
            "Awarded 'Dashing Debut' award for outstanding performance and technical contributions as a new team member (H1'24 Rewards & Recognition)"
        ]
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
            <div style={{ maxWidth: '1000px' }}>
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.15 }}
                        className="glass"
                        style={{ padding: '2rem', marginBottom: '2rem' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                            {exp.role}
                        </h3>
                        <p style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 600 }}>
                            {exp.company}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                            {exp.period} | {exp.location}
                        </p>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            {exp.points.map((point, i) => (
                                <li key={i} style={{
                                    marginBottom: '0.7rem',
                                    paddingLeft: '1.5rem',
                                    position: 'relative',
                                    lineHeight: '1.6'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        left: 0,
                                        color: 'var(--accent)',
                                        fontWeight: 'bold'
                                    }}>▹</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
