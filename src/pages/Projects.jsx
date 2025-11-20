import { motion } from 'framer-motion';

const projects = [
    { name: "Attrition Prediction Using ML", tech: "Python, XGBoost, SMOTE", period: "Aug-Dec 2024", desc: "Predicted customer churn in e-commerce" },
    { name: "Financial Systems Blockchain Security", tech: "Blockchain, ML, Cryptography", period: "Aug-Dec 2024", desc: "Blockchain for financial data integrity" },
    { name: "AI-Powered Tic-Tac-Toe", tech: "Android, Kotlin, Minimax", period: "Sep-Oct 2024", desc: "AI game with Bluetooth multiplayer" },
    { name: "Context Monitoring App", tech: "Kotlin, CameraX, RealmDB", period: "Sep 2024", desc: "Health app with heart rate monitoring" },
    { name: "Promptly", tech: "React, Python, LLMs", period: "May-Jul 2025", desc: "Modular LLM agent framework with RAG" },
    { name: "Optimizers in Deep Models", tech: "Vision Transformers, TensorFlow", period: "Aug-Dec 2023", desc: "92.96% accuracy on CIFAR 10" },
    { name: "StockVision", tech: "Flask, React, Tailwind", period: "Jan-May 2023", desc: "Real-time stock analysis with AI forecasts", link: "https://github.com/cmdsiraj/stock_vision" },
    { name: "Tweet Classification", tech: "Python, NLP, Scikit-Learn", period: "Jan-May 2023", desc: "ML tweet classifier with ranking", link: "https://github.com/iamsiddhu3007/Information-retrieval-project" }
];

export default function Projects() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh' }}
        >
            <h1>Projects</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {projects.map((proj, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="glass"
                        style={{ padding: '1.5rem' }}
                    >
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{proj.name}</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.8rem' }}>{proj.period}</p>
                        <p style={{ marginBottom: '1rem' }}>{proj.desc}</p>
                        <p style={{ color: 'var(--accent)', fontSize: '0.85rem' }}>{proj.tech}</p>
                        {proj.link && (
                            <a href={proj.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', marginTop: '0.5rem', display: 'block' }}>
                                View Project →
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
