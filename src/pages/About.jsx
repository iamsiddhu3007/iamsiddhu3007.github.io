import { motion } from 'framer-motion';

const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
};

export default function About() {
    const skills = [
        "Flutter/Dart", "Python", "Java", "C/C++", "SQL", "React", "Flask",
        "GitHub Actions", "Postman", "Snowflake", "Informatica IICS",
        "REST APIs", "Android Studio", "MongoDB", "MySQL"
    ];

    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh' }}
        >
            <h1>About Me</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '800px' }}>
                I'm a graduate student at Arizona State University pursuing a Master's in Computer Science.
                I build mobile apps, data pipelines, and clean CI/CD systems. Passionate about creating efficient, scalable solutions.
            </p>

            <h2>Skills</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass"
                        style={{ padding: '1rem', textAlign: 'center' }}
                    >
                        {skill}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
