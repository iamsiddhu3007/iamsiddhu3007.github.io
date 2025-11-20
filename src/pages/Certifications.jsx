import { motion } from 'framer-motion';
import Card from '../components/Card';

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
                fontSize: '1.2rem',
                color: 'var(--text-secondary)',
                marginBottom: '3rem',
                maxWidth: '800px',
                lineHeight: '1.7'
            }}>
                Professional certifications and courses completed to enhance technical skills and stay current with industry trends.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                gap: '2rem'
            }}>
                {certifications.map((cert, idx) => (
                    <motion.a
                        key={idx}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none', display: 'block' }}
                    >
                        <Card delay={idx * 0.06}>
                            <h3 style={{
                                fontSize: '1.2rem',
                                marginBottom: '0.9rem',
                                color: 'var(--text-primary)',
                                lineHeight: '1.4'
                            }}>
                                {cert.name}
                            </h3>
                            <p style={{
                                color: 'var(--accent)',
                                marginBottom: '0.6rem',
                                fontWeight: 600,
                                fontSize: '1.05rem'
                            }}>
                                {cert.issuer}
                            </p>
                            <p style={{
                                color: 'var(--text-secondary)',
                                fontSize: '0.95rem'
                            }}>
                                {cert.date}
                            </p>
                        </Card>
                    </motion.a>
                ))}
            </div>

            <Card delay={0.5} hover={false} style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                    <strong>Note:</strong> Certificate links are placeholders and will be updated with actual credential URLs.
                </p>
            </Card>
        </motion.div>
    );
}
