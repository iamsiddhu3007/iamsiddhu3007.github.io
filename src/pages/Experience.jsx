import { motion } from 'framer-motion';

const experiences = [
    {
        role: "SCAI Grader",
        company: "Arizona State University",
        period: "Aug 2025 – Present",
        location: "Tempe, AZ",
        points: [
            "Grader for CSE 469 (Computer & Network Forensics) and CSE 543",
            "Built Python sanity checks for hash/auth tasks"
        ]
    },
    {
        role: "Software Developer Intern",
        company: "Get SuperStars Inc.",
        period: "May 2025 – Aug 2025",
        location: "Remote",
        points: [
            "Shipped Stories & Action Feed modules in Flutter/Dart",
            "Profiled UI and optimized caching; strengthened CI via GitHub Actions"
        ]
    },
    {
        role: "BTS Associate Intern",
        company: "ZS Associates",
        period: "Jan 2024 – July 2024",
        location: "Gurugram, India",
        points: [
            "Designed multi-layer Snowflake DWH",
            "Developed IICS pipelines for 70+ vendor feeds"
        ]
    }
];

export default function Experience() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh' }}
        >
            <h1>Experience</h1>
            <div style={{ maxWidth: '900px' }}>
                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="glass"
                        style={{ padding: '2rem', marginBottom: '2rem' }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{exp.role}</h3>
                        <p style={{ color: 'var(--accent)', fontSize: '1.1rem' }}>@ {exp.company}</p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                            {exp.period} | {exp.location}
                        </p>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            {exp.points.map((point, i) => (
                                <li key={i} style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>▹</span>
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
