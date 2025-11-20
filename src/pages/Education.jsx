import { motion } from 'framer-motion';
import './Education.css';

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
        "Data Structures",
        "Computer Organization and Architecture",
        "Introduction to Database Systems",
        "Design and Analysis of Algorithms",
        "Software Design Lab",
        "Applied Cryptography",
        "Introduction To Cyber Security Tools & Cyber Attacks",
        "Ethical Hacking",
        "Introduction to Artificial Intelligence",
        "Computer Networks",
        "Software Engineering",
        "Software Project Management - Planning, Execution, Evaluation And Control",
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
        "Engineering Science & Design",
        "Introduction to Robotics"
    ],
    "General Education": [
        "Introduction to Psychology",
        "Public Speaking and Persuasion",
        "Evolution of life",
        "The Brain",
        "The modern world--Global history since 1760",
        "Environmental Studies",
        "Cancer, a Deadly Disease: Myths and facts",
        "Principles of Management"
    ]
};

export default function Education() {
    const educationData = [
        {
            school: "Arizona State University",
            degree: "Master of Science - Computer Science",
            period: "Aug 2024 – May 2026",
            location: "Tempe, Arizona, United States",
            gpa: "4.0/4.0",
            type: "semester",
            courses: asuCourses
        },
        {
            school: "Shiv Nadar University",
            degree: "B.Tech - Computer Science & Engineering",
            period: "Aug 2020 – May 2024",
            location: "Greater Noida, Uttar Pradesh, India",
            gpa: "7.61/10",
            type: "category",
            courses: snuCourses
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container"
            style={{ paddingTop: '120px', minHeight: '100vh', paddingBottom: '3rem' }}
        >
            <h1>Education</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '900px' }}>
                My academic journey through graduate and undergraduate studies in Computer Science.
            </p>

            <div className="education-timeline">
                {educationData.map((edu, idx) => (
                    <motion.div
                        key={idx}
                        className="education-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="timeline-marker">
                            <div className="timeline-dot"></div>
                            <div className="timeline-line"></div>
                        </div>

                        <div className="education-card">
                            <div className="edu-header">
                                <h2>{edu.school}</h2>
                                <p className="edu-degree">{edu.degree}</p>
                            </div>

                            <div className="edu-meta">
                                <span>📅 {edu.period}</span>
                                <span>📍 {edu.location}</span>
                                <span className="gpa-badge">⭐ GPA: {edu.gpa}</span>
                            </div>

                            {Object.entries(edu.courses).map(([key, items], catIdx) => (
                                <div key={key} className="courses-section">
                                    <h3 className="course-category-title">{key}</h3>
                                    {edu.type === 'semester' ? (
                                        <div className="courses-grid">
                                            {items.map((course, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="course-card"
                                                    initial={{ opacity: 0, y: 10 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.03 }}
                                                >
                                                    <span className="course-code">{course.code}</span>
                                                    <p className="course-name">{course.name}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div>
                                            {items.map((course, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="course-item"
                                                    initial={{ opacity: 0 }}
                                                    whileInView={{ opacity: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: i * 0.02 }}
                                                >
                                                    {course}
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
