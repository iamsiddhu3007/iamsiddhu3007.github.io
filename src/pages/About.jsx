import { motion } from 'framer-motion';
import Card from '../components/Card';
import './About.css';

export default function About() {
    const skillCategories = [
        {
            title: "Programming",
            icon: "💻",
            skills: [
                { name: "Python", icon: "🐍" },
                { name: "Dart", icon: "🎯" },
                { name: "C/C++", icon: "⚡" },
                { name: "Java", icon: "☕" },
                { name: "Kotlin", icon: "🅺" },
                { name: "SQL", icon: "🗄️" },
                { name: "JavaScript", icon: "📜" },
            ]
        },
        {
            title: "Libraries & Frameworks",
            icon: "📚",
            skills: [
                { name: "NumPy", icon: "🔢" },
                { name: "Pandas", icon: "🐼" },
                { name: "Scikit-learn", icon: "🤖" },
                { name: "TensorFlow", icon: "🧠" },
                { name: "Flask", icon: "🌶️" },
                { name: "React", icon: "⚛️" },
            ]
        },
        {
            title: "Web & Databases",
            icon: "🌐",
            skills: [
                { name: "HTML/CSS", icon: "🎨" },
                { name: "Node.js", icon: "🟢" },
                { name: "MySQL", icon: "🐬" },
                { name: "PostgreSQL", icon: "🐘" },
                { name: "MongoDB", icon: "🍃" },
                { name: "Snowflake", icon: "❄️" },
            ]
        },
        {
            title: "Cloud & DevOps",
            icon: "☁️",
            skills: [
                { name: "AWS S3", icon: "📦" },
                { name: "AWS IAM", icon: "🔐" },
                { name: "AWS Redshift", icon: "📊" },
                { name: "AWS EC2", icon: "🖥️" },
                { name: "CI/CD", icon: "🔄" },
                { name: "Git", icon: "📝" },
            ]
        },
        {
            title: "Tools & Platforms",
            icon: "🛠️",
            skills: [
                { name: "Android Studio", icon: "📱" },
                { name: "Flutter", icon: "🦋" },
                { name: "Postman", icon: "📮" },
                { name: "RESTful APIs", icon: "🔌" },
                { name: "GraphQL", icon: "◈" },
                { name: "Jira", icon: "📋" },
            ]
        },
        {
            title: "Methodologies",
            icon: "📐",
            skills: [
                { name: "Agile", icon: "🏃" },
                { name: "Waterfall", icon: "💧" },
                { name: "Advanced Excel", icon: "📊" },
            ]
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container about-page"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>About Me</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px', lineHeight: '1.8' }}>
                I'm a graduate student at Arizona State University pursuing a Master's in Computer Science.
                I build mobile apps, data pipelines, and clean CI/CD systems. Passionate about creating efficient, scalable solutions.
            </p>

            <h2>Technical Skills</h2>

            <div className="skills-container">
                {skillCategories.map((category, catIdx) => (
                    <motion.div
                        key={category.title}
                        className="skill-category-section"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 }}
                    >
                        <div className="category-header-new">
                            <span className="category-icon-new">{category.icon}</span>
                            <h3 className="category-title-new">{category.title}</h3>
                        </div>
                        <div className="skills-list">
                            {category.skills.map((skill) => (
                                <motion.div
                                    key={skill.name}
                                    className="skill-badge"
                                    whileHover={{ scale: 1.08, y: -3 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span className="skill-badge-icon">{skill.icon}</span>
                                    <span className="skill-badge-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
