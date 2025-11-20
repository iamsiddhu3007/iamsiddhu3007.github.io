import { motion } from 'framer-motion';

const certifications = [
    { name: "Microsoft Azure AI Essentials", issuer: "Microsoft", date: "Sep 2025" },
    { name: "Docker Foundations Professional Certificate", issuer: "Docker, Inc", date: "Aug 2025" },
    { name: "Goldman Sachs - Software Engineering Job Simulation", issuer: "Forage", date: "Feb 2025" },
    { name: "Tellius Advanced Insights & Predictive", issuer: "Tellius", date: "Feb 2024" },
    { name: "ThoughtSpot Professional Certification", issuer: "ThoughtSpot", date: "Feb 2024" },
    { name: "Blockchain Revolution Specialization", issuer: "Coursera", date: "Sep 2022" },
    { name: "Android Mobile App Development", issuer: "Meta (Coursera)", date: "Sep 2022" },
    { name: "Introduction to Quantum Computing", issuer: "Udemy", date: "Sep 2022" },
    { name: "Big Data Integration and Processing", issuer: "Coursera", date: "Apr 2021" }
];

export default function Certifications() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh' }}
        >
            <h1>Certifications</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.08 }}
                        whileHover={{ scale: 1.05 }}
                        className="glass"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{cert.name}</h3>
                        <p style={{ color: 'var(--accent)', marginBottom: '0.3rem' }}>{cert.issuer}</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.date}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
