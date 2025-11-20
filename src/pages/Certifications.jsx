import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
    {
        name: "Microsoft Azure AI Essentials",
        issuer: "Microsoft",
        date: "Sep 2025",
        link: "https://www.linkedin.com/learning/certificates/d99e7617be731ef17e007d63d00671bc07b406b884339980e15a25b79ce66099"
    },
    {
        name: "Docker Foundations Professional Certificate",
        issuer: "Docker, Inc",
        date: "Aug 2025",
        link: "https://www.linkedin.com/learning/certificates/87186bff9dc74ab2d328684167984eb878321ba2f0ed34535bd437a697fca073"
    },
    {
        name: "Goldman Sachs Software Engineering Job Simulation",
        issuer: "Forage",
        date: "Feb 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/MBA4MnZTNFEoJZGnk/NPdeQ43o8P9HJmJzg_MBA4MnZTNFEoJZGnk_F3AzhPLHSypc9DodE_1738691881332_completion_certificate.pdf"
    },
    {
        name: "Tellius Advanced Insights & Predictive",
        issuer: "Tellius",
        date: "Feb 2024",
        link: "https://www.linkedin.com/in/siddharthachivukula/details/certifications/1724801024742/single-media-viewer/?profileId=ACoAADP0W4cB52KY8_G87nFoj-ze3JIEOBWqP2I"
    },
    {
        name: "ThoughtSpot Professional Certification",
        issuer: "ThoughtSpot",
        date: "Feb 2024",
        link: "https://www.linkedin.com/in/siddharthachivukula/details/certifications/1724800805531/single-media-viewer/?profileId=ACoAADP0W4cB52KY8_G87nFoj-ze3JIEOBWqP2I"
    },
    {
        name: "Blockchain Revolution Specialization",
        issuer: "Coursera",
        date: "Sep 2022",
        link: "https://www.coursera.org/account/accomplishments/specialization/APBPRB9XY9HP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
    },
    {
        name: "Introduction to Android Mobile Application Development",
        issuer: "Meta (Coursera)",
        date: "Sep 2022",
        link: "https://www.coursera.org/account/accomplishments/specialization/APBPRB9XY9HP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
    },
    {
        name: "Introduction to Quantum Computing",
        issuer: "Udemy",
        date: "Sep 2022",
        link: "https://udemy-certificate.s3.amazonaws.com/image/UC-82826000-97d0-477f-9755-a61b781596db.jpg"
    },
    {
        name: "Getting Started With Figma",
        issuer: "Coursera",
        date: "Sep 2022",
        link: "https://www.coursera.org/account/accomplishments/verify/PEPRHG4H54YD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=project"
    },
    {
        name: "Big Data Integration and Processing",
        issuer: "Coursera",
        date: "Apr 2021",
        link: "https://www.coursera.org/account/accomplishments/certificate/43MT2H3S6SDA"
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
                maxWidth: '900px'
            }}>
                Professional certifications and courses completed to enhance technical skills and stay current with industry trends.
            </p>

            <div className="certifications-timeline">
                {certifications.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        className="cert-timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                    >
                        <div className="cert-timeline-marker">
                            <div className="cert-timeline-dot"></div>
                            <div className="cert-timeline-line"></div>
                        </div>

                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certification-card"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            <div className="cert-header">
                                <h3 className="cert-title">{cert.name}</h3>
                                <span className="cert-date-badge">📅 {cert.date}</span>
                            </div>

                            <p className="cert-issuer">{cert.issuer}</p>

                            <div className="cert-link-indicator">
                                View Certificate
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                            </div>
                        </motion.a>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
