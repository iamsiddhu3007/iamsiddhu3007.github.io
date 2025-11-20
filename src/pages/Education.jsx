import { motion } from 'framer-motion';
import Card from '../components/Card';

const asuCourses = {
    "Fall 2024": [
        { code: "CSE 535", name: "Mobile Computing" },
        { code: "CSE 543", name: "Info Assurance & Security" },
        { code: "CSE 572", name: "Data Mining" }
    ],
    "Spring 2025": [
        { code: "CSE 565", name: "Software Verif/Validation/Test" },
        { code: "CSE 578", name: "Data Visualization" },
        { code: "CSE 579", name: "Knowledge Representation" }
    ],
    "Summer 2025": [
        { code: "CSE 584", name: "Internship - Curricular Practical Training" }
    ],
    "Fall 2025": [
        { code: "CSE 511", name: "Data Processing at Scale" },
        { code: "CSE 539", name: "Applied Cryptography" },
        { code: "CSE 548", name: "Engr Blockchain Applications" }
    ]
};

const snuCourses = {
    "Core Computer Science": [
        "Introduction to Computing and Programming",
        "Object Oriented Programming",
        "Discrete Mathematics",
        "Computer Organization and Architecture",
        "Introduction to Database Systems",
        "Design and Analysis of Algorithms",
        "Software Design Lab",
        "Applied Cryptography",
        "Introduction To Cyber Security Tools & Cyber Attacks",
        "Introduction to Artificial Intelligence",
        "Computer Networks",
        "Software Engineering",
        "Theory of Computation",
        "Compiler",
        "Information Retrieval",
        "Operating Systems",
        "Signals and Systems",
        "Applied Linear Algebra"
    ],
    "Data Science & AI": [
        "Big Data-Modelling, Integration and Processing",
        "Image Processing and Its Applications",
        "Introduction to Probability and Statistics",
        "A Gentle Introduction to Python",
        "Analysis and Business Modelling Using Excel",
        "Python For Data Science",
        "Data Mining and Warehousing",
        "Project-2/Internship"
    ],
    "Electrical & Engineering": [
        "Materials Science and Engineering",
        "Introduction to Physics I & II",
        "Introduction to Electrical Engineering",
        "Intro Dynamics for Teams",
        "Mathematical Methods I & II",
        "Engineering Science & Design"
    ],
    "General Education": [
        "Introduction to Psychology",
        "Public Speaking and Persuasion",
        "Evolution of life",
        "Introduction to Robotics",
        "The Brain",
        "The modern world--Global history since 1760",
        "Environmental Studies",
        "Data Structures",
        "Cancer, a Deadly Disease: Myths and facts",
        "Software Project Management - Planning, Execution, Evaluation And Control",
        "Ethical Hacking",
        "Principles of Management"
    ]
};

export default function Education() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Education</h1>

            {/* Arizona State University */}
            <Card delay={0.1} hover={false} style={{ marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', marginTop: 0, marginBottom: '0.5rem' }}>
                    Arizona State University
                </h2>
                <p style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                    Master of Science - Computer Science
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    Aug 2024 – May 2026 | GPA: 4.0/4.0
                </p>

                {Object.entries(asuCourses).map(([semester, courses], idx) => (
                    <div key={semester} style={{ marginBottom: '2rem' }}>
                        <h3 style={{
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            color: 'var(--accent)',
                            borderBottom: '2px solid var(--border)',
                            paddingBottom: '0.5rem'
                        }}>
                            {semester}
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.8rem' }}>
                            {courses.map((course, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    style={{
                                        padding: '0.8rem',
                                        background: 'rgba(96, 165, 250, 0.05)',
                                        borderRadius: '12px',
                                        border: '1px solid var(--border)',
                                        transition: 'all 0.3s ease'
                                    }}
                                    whileHover={{
                                        background: 'rgba(96, 165, 250, 0.1)',
                                        borderColor: 'var(--accent)'
                                    }}
                                >
                                    <span style={{
                                        color: 'var(--accent)',
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'block'
                                    }}>
                                        {course.code}
                                    </span>
                                    <p style={{ margin: '0.3rem 0 0 0', fontSize: '0.95rem' }}>
                                        {course.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </Card>

            {/* Shiv Nadar University */}
            <Card delay={0.2} hover={false}>
                <h2 style={{ fontSize: '2rem', marginTop: 0, marginBottom: '0.5rem' }}>
                    Shiv Nadar University
                </h2>
                <p style={{ color: 'var(--accent)', fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                    B.Tech - Computer Science & Engineering
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
                    Aug 2020 – May 2024 | GPA: 7.61/10
                </p>

                {Object.entries(snuCourses).map(([category, courses], idx) => (
                    <div key={category} style={{ marginBottom: '2rem' }}>
                        <h3 style={{
                            fontSize: '1.15rem',
                            marginBottom: '1rem',
                            color: 'var(--accent)',
                            borderBottom: '2px solid var(--border)',
                            paddingBottom: '0.5rem'
                        }}>
                            {category}
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '0.6rem' }}>
                            {courses.map((course, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.02 }}
                                    style={{
                                        padding: '0.6rem 0.8rem',
                                        fontSize: '0.92rem',
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <span style={{ color: 'var(--accent)', marginRight: '0.5rem' }}>▹</span>
                                    {course}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </Card>
        </motion.div>
    );
}
