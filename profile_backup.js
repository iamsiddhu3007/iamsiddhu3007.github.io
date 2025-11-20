import resumePDF from '../assets/Siddhartha_resume.pdf';
import profilePic from '../assets/750b0626-048d-4461-b072-28861900432d.JPG';

export const profile = {
    name: "Mohana Siddhartha Chivukula",
    alias: "Siddhartha",
    role: "Software Developer & Data Engineer",
    email: "mohanasiddhartha.chivukula@gmail.com",
    location: "Tempe, AZ, USA",
    profilePic: profilePic,
    resumeUrl: resumePDF,
    roles: ["Software Developer Intern @ Superstars", "BTS Data Engineering Intern @ ZS (2024)", "SCAI Grader @ ASU"],
    social: {
        linkedin: "https://www.linkedin.com/in/siddharthachivukula/",
        github: "https://github.com/iamsiddhu3007",
        resume: "/resume.pdf"
    },
    about: "Hi, I’m Mohana Siddhartha Chivukula, a graduate student at Arizona State University, pursuing a Master’s degree in Computer Science. I build mobile apps, data pipelines, and clean CI/CD. Passionate about creating efficient, scalable solutions.",
    skills: [
        "Flutter/Dart", "Python", "Java", "C/C++", "SQL",
        "React", "Flask", "GitHub Actions", "Postman",
        "Snowflake", "Informatica IICS", "REST APIs",
        "Android Studio", "MongoDB/Realm", "MySQL"
    ],
    experience: [
        {
            role: "SCAI Grader",
            company: "Arizona State University",
            location: "Tempe, AZ (Hybrid)",
            period: "Aug 2025 – Present",
            description: [
                "Grader for CSE 469 (Computer & Network Forensics) and CSE 543 (Information Assurance & Security).",
                "Built Python sanity checks for hash/auth tasks; standardized rubrics via Gradescope."
            ]
        },
        {
            role: "Software Developer Intern",
            company: "Get SuperStars Inc.",
            location: "Remote",
            period: "May 2025 – Aug 2025",
            description: [
                "Shipped Stories & Action Feed modules in Flutter/Dart with REST integrations.",
                "Profiled UI and optimized caching; strengthened CI via GitHub Actions + Postman tests."
            ]
        },
        {
            role: "Business Technology Solutions Associate Intern",
            company: "ZS Associates",
            location: "Gurugram, India",
            period: "Jan 2024 – July 2024",
            description: [
                "Designed multi‑layer Snowflake DWH; developed IICS pipelines for 70+ vendor feeds.",
                "Added SQL‑based DQ checks and reporting views; supported legacy→cloud migration."
            ]
        },

    ],
    education: [
        {
            school: "Arizona State University",
            degree: "Master of Science Computer Science",
            location: "Tempe, AZ",
            period: "Aug 2024 – May 2026",
            gpa: "4/4",
            courses: [
                "Mobile Computing", "Info Assurance & Security", "Data Mining",
                "Software Verification/Test", "Data Visualization", "Knowledge Representation",
                "Internship", "Data Processing at Scale", "Applied Cryptography", "Engr Blockchain Applications"
            ]
        },
        {
            school: "Shiv Nadar University",
            degree: "Bachelor of Technology Computer Science and Engineering",
            location: "Delhi NCR, India",
            period: "Aug 2020 – May 2024",
            gpa: "7.61/10",
            courses: {
                "Core CS": [
                    "Data Structures", "Design and Analysis of Algorithms", "Operating Systems",
                    "Database Systems", "Computer Networks", "Software Engineering",
                    "Object Oriented Programming", "Computer Organization and Architecture",
                    "Introduction to Computing and Programming"
                ],
                "AI & Data Science": [
                    "Artificial Intelligence", "Data Mining and Warehousing", "Big Data-Modelling, Integration and Processing",
                    "Information Retrieval", "Python For Data Science", "A Gentle Introduction to Python"
                ],
                "Security & Blockchain": [
                    "Introduction To Cyber Security Tools & Cyber Attacks", "Applied Cryptography",
                    "Ethical Hacking", "Blockchain-Business application and Analysis"
                ],
                "Math & Science": [
                    "Discrete Mathematics", "Introduction to Probability and Statistics", "Applied Linear Algebra",
                    "Mathematical Methods I", "Mathematical Methods II", "Introduction to Physics I", "Introduction to Physics II",
                    "Signals and Systems"
                ],
                "Electives & Business": [
                    "Principles of Management", "Project Management", "Public Speaking and Persuasion",
                    "Introduction to Psychology", "The modern world -Global history", "Environmental Studies",
                    "Science of Drug Addiction", "Group Dynamics for Teams"
                ]
            }
        }
    ],
    projects: [
        {
            name: "Attrition Prediction Using Machine Learning",
            tech: "Python, Scikit-Learn, XGBoost, SMOTE, Pandas",
            period: "Aug 2024 – Dec 2024",
            description: "Predicted customer churn in e-commerce using Random Forest and XGBoost. Conducted feature engineering and handled class imbalance with SMOTE. Developed visualizations to highlight churn predictors.",
            link: "#"
        },
        {
            name: "Financial Systems Blockchain Security",
            tech: "Blockchain, Machine Learning, Cryptography",
            period: "Aug 2024 – Dec 2024",
            description: "Investigated blockchain for financial data integrity and fraud prevention. Explored ML for transaction classification and proposed hybrid blockchain solutions for scalability.",
            link: "#"
        },
        {
            name: "AI-Powered Multiplayer Tic-Tac-Toe",
            tech: "Android, Java/Kotlin, Bluetooth, Minimax Algorithm",
            period: "Sep 2024 – Oct 2024",
            description: "Built an Android game with AI (Minimax + Alpha-Beta Pruning) and Bluetooth multiplayer. Implemented JSON-based communication for real-time synchronization.",
            link: "#"
        },
        {
            name: "Context Monitoring App",
            tech: "Kotlin, CameraX, RealmDB, Android Studio",
            period: "Sep 2024 – Sep 2024",
            description: "Developed a context-aware Android health app using CameraX for heart rate monitoring and accelerometer for respiratory tracking. Implemented RealmDB for local storage.",
            link: "#"
        },
        {
            name: "Promptly",
            tech: "React, Python, LLM APIs (Gemini, Groq), Ollama",
            period: "May 2025 – Jul 2025",
            description: "Designed a modular LLM agent framework with pluggable APIs, tool chaining, and a role-based system prompt. Implemented a vector-backed knowledge base enabling RAG.",
            link: "#"
        },
        {
            name: "Optimizers in Deep Models",
            tech: "Vision Transformers, Python, Tensorflow",
            period: "Aug 2023 – Dec 2023",
            description: "Analyzed optimizers (Adam, Radam, Adabelief, AdamW, SGD) on Vision Transformers. Achieved 92.96% accuracy on CIFAR 10 and 71.26% on CIFAR 100.",
            link: "#"
        },
        {
            name: "StockVision",
            tech: "Flask, React.js, Tailwind CSS, Python",
            period: "Jan 2023 – May 2023",
            description: "Real-time stock analysis web app with historical trends and AI-driven 7-day price forecasts for NASDAQ/NSE stocks.",
            link: "https://github.com/cmdsiraj/stock_vision"
        },
        {
            name: "Tweet Search and Classification",
            tech: "Python, Scikit-Learn, NLP",
            period: "Jan 2023 – May 2023",
            description: "Developed ML models (Logistic Regression, MNB) for tweet classification (spam/ham). Implemented a ranking system based on engagement metrics.",
            link: "https://github.com/iamsiddhu3007/Information-retrieval-project"
        },
        {
            name: "Sokoban Solver",
            tech: "Python, AI Search Algorithms",
            period: "Aug 2022 – Nov 2022",
            description: "Implemented advanced algorithms (A*, IDA*) and heuristics for solving complex Sokoban puzzles, optimizing for performance and memory.",
            link: "https://github.com/aaaa760/sokoban"
        },
        {
            name: "The Holiday Destination",
            tech: "PHP, MySQL, Tailwind CSS, HTML",
            period: "Aug 2022 – Nov 2022",
            description: "Full-stack travel booking application with a responsive design. Utilized PHP and MySQL for dynamic content and package management.",
            link: "https://github.com/Hemanth-Boyapati/HolidayDestination"
        },
        {
            name: "Library Management System",
            tech: "Java, OOP",
            period: "Aug 2021 – Nov 2021",
            description: "Designed a library management system with user account creation, book borrowing, and record-keeping functionalities.",
            link: "https://github.com/iamsiddhu3007/Library-Management-System"
        }
    ],
    certifications: [
        {
            name: "Microsoft Azure AI Essentials",
            issuer: "Microsoft",
            date: "Sep 2025",
            skills: "Azure AI Foundry, Machine Learning",
            link: "#"
        },
        {
            name: "Docker Foundations Professional Certificate",
            issuer: "Docker, Inc",
            date: "Aug 2025",
            skills: "Containerization, Docker",
            link: "#"
        },
        {
            name: "Goldman Sachs - Software Engineering Job Simulation",
            issuer: "Forage",
            date: "Feb 2025",
            id: "nnT7GQvvwTS7pKmCc",
            link: "#"
        },
        {
            name: "Tellius Advanced Insights & Predictive!",
            issuer: "Tellius",
            date: "Feb 2024",
            link: "#"
        },
        {
            name: "Tellius Search & Insights!",
            issuer: "Tellius",
            date: "Feb 2024",
            link: "#"
        },
        {
            name: "Tellius Search Ninja!",
            issuer: "Tellius",
            date: "Feb 2024",
            link: "#"
        },
        {
            name: "ThoughtSpot Professional Certification",
            issuer: "ThoughtSpot",
            date: "Feb 2024",
            link: "#"
        },
        {
            name: "Blockchain Revolution Specialization",
            issuer: "Coursera",
            date: "Sep 2022",
            id: "APBPRB9XY9HP",
            link: "#"
        },
        {
            name: "Introduction to Android Mobile Application Development",
            issuer: "Meta (Coursera)",
            date: "Sep 2022",
            id: "856ANZUS99UY",
            link: "#"
        },
        {
            name: "Introduction to Quantum Computing",
            issuer: "Udemy",
            date: "Sep 2022",
            id: "UC-82826000-97d0-477f-9755-a61b781596db",
            link: "#"
        },
        {
            name: "Big Data Integration and Processing",
            issuer: "Coursera",
            date: "Apr 2021",
            id: "43MT2H3S6SDA",
            link: "#"
        }
    ],
    recommendations: [
        {
            name: "Himanshu Aggarwal",
            role: "Technology Associate @ ZS",
            text: "Siddhartha brings unique perspective and sharp problem solving skills to the table. He is proactive, insightful and always brings energy and fresh ideas, I highly recommend Siddhartha for his strong analytics and computer science skills - anyone working on core technical problem should definitely consider him."
        },
        {
            name: "Dhruvkumar Parmar",
            role: "Software Developer @ Superstars",
            text: "I had the pleasure of working with Mohana Siddhartha Chivukula at Superstars... Siddhartha stood out because he combined strong frontend development skills with the same level of rigor in code review and version control that you’d expect from a backend engineer. He consistently delivered clean, scalable UI components while also playing a key role in reviewing PRs... I could always rely on his feedback to catch potential issues early."
        },
        {
            name: "Erdun E",
            role: "CS Grad @ NEU | Ex-AWS SDE",
            text: "I had the chance to work with Sid during our Summer 2025 internship at Superstars. He demonstrated strong learning ability, quickly adapting to the team, SDLC practices, and CI/CD workflows. Sid consistently contributed solid technical work and was collaborative and supportive throughout the project. He is dependable, proactive, and a great teammate."
        }
    ]
};
