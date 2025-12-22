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
        { code: "CSE 584", name: "Internship - Curricular Practical Training (Get SuperStars Inc.)" }
    ],
    "Fall 2025": [
        { code: "CSE 511", name: "Data Processing at Scale" },
        { code: "CSE 539", name: "Applied Cryptography" },
        { code: "CSE 548", name: "Engr Blockchain Applications" }
    ],
    "Spring 2026": [
        { code: "CSE 575", name: "Statistical Machine Learning" }
    ]
};

const snuCourses = {
    "Programming Fundamentals": [
        { code: "CSD101", name: "Introduction to Computing and Programming" },
        { code: "CSD213", name: "Object Oriented Programming" },
        { code: "CCC634", name: "A Gentle Introduction to Python" }
    ],
    "Core Computer Science": [
        { code: "CSD201", name: "Data Structures" },
        { code: "CSD205", name: "Discrete Mathematics" },
        { code: "CSD211", name: "Computer Organization and Architecture" },
        { code: "CSD204", name: "Operating Systems" },
        { code: "CSD317", name: "Introduction to Database Systems" },
        { code: "CSD319", name: "Design and Analysis of Algorithms" },
        { code: "CSD345", name: "Software Design Lab" },
        { code: "CSD304", name: "Computer Networks" },
        { code: "CSD326", name: "Software Engineering" },
        { code: "CSD334", name: "Theory of Computation" },
        { code: "CSD346", name: "Seminar" }
    ],
    "Data Science & AI": [
        { code: "CCC662", name: "Big Data - Modelling, Integration and Processing" },
        { code: "CSD210", name: "Introduction to Probability and Statistics" },
        { code: "CSD357", name: "Image Processing and Its Applications" },
        { code: "CSD311", name: "Artificial Intelligence" },
        { code: "CCC805", name: "Analysis and Business Modelling Using Excel" },
        { code: "CSD358", name: "Information Retrieval" },
        { code: "CSD455", name: "Data Mining and Warehousing" },
        { code: "SWC605", name: "Python for Data Science" }
    ],
    "Security & Blockchain": [
        { code: "CCC673", name: "Introduction to Cyber Security Tools & Cyber Attacks" },
        { code: "CSD451", name: "Applied Cryptography" },
        { code: "SWM320", name: "Ethical Hacking" },
        { code: "CCC663", name: "Blockchain - Business Application and Analysis" }
    ],
    "Electrical & Electronics": [
        { code: "EED101", name: "Introduction to Electrical Engineering" },
        { code: "EED201", name: "Signals and Systems" },
        { code: "EED210", name: "Digital Electronics" },
        { code: "CCC515", name: "Introduction to Robotics" }
    ],
    "Engineering Fundamentals": [
        { code: "MAT103", name: "Mathematical Methods I" },
        { code: "MAT104", name: "Mathematical Methods II" },
        { code: "PHY101", name: "Introduction to Physics I" },
        { code: "PHY102", name: "Introduction to Physics II" },
        { code: "MAT161", name: "Applied Linear Algebra" },
        { code: "MED201", name: "Materials Science and Engineering" },
        { code: "ESD201", name: "Engineering Science & Design" },
        { code: "OHM401", name: "Group Dynamics for Teams" }
    ],
    "General Education & Management": [
        { code: "CCC518", name: "Introduction to Psychology" },
        { code: "CCC245", name: "The Modern World - Global History Since 1760" },
        { code: "CCC704", name: "Environmental Studies" },
        { code: "CCC343", name: "Public Speaking and Persuasion" },
        { code: "CCC435", name: "Evolution of Life" },
        { code: "CCC522", name: "The Brain" },
        { code: "CCC419", name: "Cancer, a Deadly Disease: Myths and Facts" },
        { code: "CCC416", name: "Science of Drug Addiction and Awareness" },
        { code: "SWE307", name: "Principles of Management" },
        { code: "SWE210", name: "Project Management: Planning, Execution, Evaluation and Control" }
    ],
    "Capstone Projects": [
        { code: "CSD493", name: "Project-1 (Optimizers in Deep Models)" },
        { code: "CSD494", name: "Project-2 / Internship (ZS Associates)" }
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
            courses: asuCourses
        },
        {
            school: "Shiv Nadar University",
            degree: "B.Tech - Computer Science & Engineering",
            period: "Aug 2020 – May 2024",
            location: "Greater Noida, Uttar Pradesh, India",
            gpa: "7.61/10",
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
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
