import { motion } from 'framer-motion';
import Card from '../components/Card';

export default function About() {
    const skills = [
        "Flutter/Dart", "Python", "Java", "C/C++", "SQL", "React", "Flask",
        "GitHub Actions", "Postman", "Snowflake", "Informatica IICS",
        "REST APIs", "Android Studio", "MongoDB", "MySQL"
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>About Me</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px', lineHeight: '1.8' }}>
                I'm a graduate student at Arizona State University pursuing a Master's in Computer Science.
                I build mobile apps, data pipelines, and clean CI/CD systems. Passionate about creating efficient, scalable solutions.
            </p>

            <h2>Skills & Technologies</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '1.2rem', marginTop: '2rem' }}>
                {skills.map((skill, idx) => (
                    <Card key={skill} delay={idx * 0.03}>
                        <div style={{ padding: '0.5rem', textAlign: 'center', fontSize: '1.05rem', fontWeight: 500 }}>
                            {skill}
                        </div>
                    </Card>
                ))}
            </div>
        </motion.div>
    );
}
