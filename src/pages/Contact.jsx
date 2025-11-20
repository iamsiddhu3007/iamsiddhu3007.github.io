import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <div style={{ textAlign: 'center', maxWidth: '600px' }}>
                <h1>Get In Touch</h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    I'll try my best to get back to you!
                </p>

                <div className="glass" style={{ padding: '2rem', marginBottom: '2rem' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Contact Information</h3>
                    <p style={{ marginBottom: '1rem' }}>
                        <strong>Email:</strong><br />
                        <a href="mailto:mohanasiddhartha.chivukula@gmail.com" style={{ fontSize: '1.1rem' }}>
                            mohanasiddhartha.chivukula@gmail.com
                        </a>
                    </p>
                    <p>
                        <strong>Location:</strong><br />
                        Tempe, AZ, USA
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href="https://www.linkedin.com/in/siddharthachivukula/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{ padding: '1rem 2rem', display: 'inline-block', fontWeight: 600 }}
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/iamsiddhu3007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass"
                        style={{ padding: '1rem 2rem', display: 'inline-block', fontWeight: 600 }}
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
