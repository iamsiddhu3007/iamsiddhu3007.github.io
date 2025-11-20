import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpg';
import resumePDF from '../assets/resume.pdf';

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}
        >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center', width: '100%' }}>
                <div>
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Mohana Siddhartha Chivukula
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ fontSize: '1.4rem', color: 'var(--accent)', marginBottom: '1.5rem' }}
                    >
                        Software Developer & Data Engineer
                    </motion.p>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '600px' }}
                    >
                        Graduate student at Arizona State University, building mobile apps, data pipelines, and clean CI/CD.
                        Passionate about creating efficient, scalable solutions.
                    </motion.p>
                    <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{ display: 'flex', gap: '1rem' }}
                    >
                        <a href={resumePDF} download className="glass" style={{
                            padding: '1rem 2rem',
                            display: 'inline-block',
                            fontWeight: 600
                        }}>Download Resume</a>
                        <a href="/contact" className="glass" style={{
                            padding: '1rem 2rem',
                            display: 'inline-block',
                            fontWeight: 600
                        }}>Contact Me</a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <img src={profilePic} alt="Profile" style={{
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid var(--accent)',
                        boxShadow: '0 0 50px rgba(96, 165, 250, 0.3)'
                    }} />
                </motion.div>
            </div>
        </motion.div>
    );
}
