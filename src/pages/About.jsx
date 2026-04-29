import { motion } from 'framer-motion';
import './About.css';

export default function About() {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container about-page"
            style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <h1 style={{ fontSize: 'clamp(40px, 6vw, 72px)', marginBottom: '1.5rem' }}>
                    Software engineer building intelligent, secure, and scalable systems.
                </h1>
                <p style={{ fontSize: '19px', color: 'var(--text-secondary)', marginBottom: '4rem', maxWidth: '680px', lineHeight: '1.55' }}>
                    MS Computer Science @ Arizona State University graduating May 2026, with hands-on experience across distributed systems, mobile development, and AI infrastructure. I have built and shipped production systems at scale, from real-time streaming pipelines processing millions of records to multi-model AI platforms querying 14 LLMs in parallel. My work spans backend engineering, mobile applications, and machine learning, with a focus on building systems that are performant, scalable, and solve real problems. Currently seeking full-time Software Engineer roles starting June 2026.
                </p>
            </motion.div>

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', marginTop: '3rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>
                Open Source Contributions
            </h2>

            <motion.div
                className="glass"
                style={{ padding: '2rem', marginBottom: '3rem' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <h3 style={{ fontSize: '24px', marginBottom: '1rem', color: 'var(--accent-ocean)' }}>
                    LiteLLM - Pricing Entry for Gemini 3.1 Flash Lite
                </h3>
                <div style={{ marginBottom: '1rem' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '999px',
                        background: 'rgba(34, 197, 94, 0.15)',
                        color: '#16a34a',
                        fontSize: '13px',
                        fontWeight: '600',
                        marginRight: '0.5rem'
                    }}>
                        ✓ MERGED
                    </span>
                    <span style={{ color: 'var(--text-tertiary)', fontSize: '14px' }}>April 15, 2026</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1rem' }}>
                    Added pricing configuration for Gemini 3.1 Flash Lite Preview model via OpenRouter, including complete model specifications and regression testing. Enabled accurate cost calculation for LLM routing operations.
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {['Python', 'pytest', 'LiteLLM', 'API Integration'].map((tech) => (
                        <span key={tech} style={{
                            padding: '6px 11px',
                            borderRadius: '999px',
                            fontSize: '13px',
                            color: 'var(--text-secondary)',
                            background: 'rgba(255, 255, 255, 0.54)',
                            border: '1px solid var(--border-soft)'
                        }}>
                            {tech}
                        </span>
                    ))}
                </div>
                <a
                    href="https://github.com/BerriAI/litellm/pull/25610"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'var(--accent-ocean)',
                        fontSize: '14px',
                        fontWeight: '500',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}
                >
                    View Pull Request →
                </a>
            </motion.div>
        </motion.div>
    );
}
