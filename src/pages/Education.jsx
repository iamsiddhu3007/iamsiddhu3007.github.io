import { motion } from 'framer-motion';

export default function Education() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh' }}
        >
            <h1>Education</h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass"
                style={{ padding: '2rem', marginBottom: '2rem' }}
            >
                <h2 style={{ fontSize: '1.8rem', marginTop: 0 }}>Arizona State University</h2>
                <p style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>Master of Science - Computer Science</p>
                <p style={{ color: 'var(--text-secondary)' }}>Aug 2024 – May 2026 | GPA: 4.0/4.0</p>

                <h3 style={{ marginTop: '2rem', fontSize: '1.2rem' }}>Coursework:</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.5rem', marginTop: '1rem' }}>
                    {[
                        "Mobile Computing", "Info Assurance & Security", "Data Mining",
                        "Software Verification/Test", "Data Visualization", "Knowledge Representation",
                        "Internship", "Data Processing at Scale", "Applied Cryptography",
                        "Engineering Blockchain Applications"
                    ].map((course, idx) => (
                        <div key={idx} style={{ padding: '0.5rem' }}>
                            <span style={{ color: 'var(--accent)' }}>▹</span> {course}
                        </div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass"
                style={{ padding: '2rem' }}
            >
                <h2 style={{ fontSize: '1.8rem', marginTop: 0 }}>Shiv Nadar University</h2>
                <p style={{ color: 'var(--accent)', fontSize: '1.2rem' }}>B.Tech - Computer Science & Engineering</p>
                <p style={{ color: 'var(--text-secondary)' }}>Aug 2020 – May 2024 | GPA: 7.61/10</p>
            </motion.div>
        </motion.div>
    );
}
