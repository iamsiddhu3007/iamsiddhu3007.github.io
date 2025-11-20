import { motion } from 'framer-motion';

const certifications = [
    {
        name: "Microsoft Azure AI Essentials",
        issuer: "Microsoft",
        date: "Sep 2025",
        link: "#"
    },
    {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        date: "Aug 2025",
        link: "#"
    },
    {
        name: "Goldman Sachs Software Engineering Job Simulation",
        issuer: "Forage",
        date: "Feb 2025",
        link: "#"
    },
    {
        name: "Tellius Advanced Insights & Predictive",
        issuer: "Tellius",
        date: "Feb 2024",
        link: "#"
    },
    {
        name: "ThoughtSpot Professional Certification",
        issuer: "ThoughtSpot",
        date: "Feb 2024",
        link: "#"
    },
    {
        name: "Blockchain Revolution Specialization",
        issuer: "Coursera",
        date: "Sep 2022",
        link: "#"
    },
    {
        name: "Android Mobile App Development",
        issuer: "Meta (Coursera)",
        date: "Sep 2022",
        link: "#"
    },
    {
        name: "Introduction to Quantum Computing",
        issuer: "Udemy",
        date: "Sep 2022",
        link: "#"
    },
    {
        name: "Big Data Integration and Processing",
        issuer: "Coursera",
        date: "Apr 2021",
        link: "#"
    }
];

export default function Certifications() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Certifications</h1>
            <p style={{
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                marginBottom: '2.5rem',
                maxWidth: '700px'
            }}>
                Professional certifications and courses completed to enhance technical skills and stay current with industry trends.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.8rem'
            }}>
                {certifications.map((cert, idx) => (
                    <motion.a
                        key={idx}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        className="glass"
                        style={{
                            padding: '1.8rem',
                            textDecoration: 'none',
                            display: 'block',
                            cursor: 'pointer'
                        }}
                    >
                        <h3 style={{
                            fontSize: '1.15rem',
                            marginBottom: '0.8rem',
                            color: 'var(--text-primary)',
                            lineHeight: '1.4'
                        }}>
                            {cert.name}
                        </h3>
                        <p style={{
                            color: 'var(--accent)',
                            marginBottom: '0.5rem',
                            fontWeight: 600,
                            fontSize: '1rem'
                        }}>
                            {cert.issuer}
                        </p>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.9rem'
                        }}>
                            {cert.date}
                        </p>
                    </motion.a>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                    marginTop: '3rem',
                    padding: '1.5rem',
                    background: 'var(--bg-glass)',
                    borderRadius: '12px',
                    border: '1px solid var(--border)',
                    textAlign: 'center'
                }}
            >
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <strong>Note:</strong> Certificate links are placeholders and will be updated with actual credential URLs.
                </p>
            </motion.div>
        </motion.div>
    );
}
