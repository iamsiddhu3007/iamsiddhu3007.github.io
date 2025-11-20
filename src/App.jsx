import React from 'react'

function App() {
    return (
        <div className="container">
            <section className="section">
                <h1>Mohana Siddhartha Chivukula</h1>
                <p style={{ fontSize: '1.2rem', color: '#60a5fa' }}>Software Developer & Data Engineer</p>
                <p>
                    Hi, I'm Mohana Siddhartha Chivukula, a graduate student at Arizona State University,
                    pursuing a Master's degree in Computer Science. I build mobile apps, data pipelines,
                    and clean CI/CD. Passionate about creating efficient, scalable solutions.
                </p>
            </section>

            <section className="section">
                <h2>Experience</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>SCAI Grader @ Arizona State University</h3>
                    <p style={{ color: '#888' }}>Aug 2025 – Present | Tempe, AZ</p>
                    <p>Grader for CSE 469 and CSE 543. Built Python sanity checks for tasks.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Software Developer Intern @ Get SuperStars Inc.</h3>
                    <p style={{ color: '#888' }}>May 2025 – Aug 2025 | Remote</p>
                    <p>Shipped Stories & Action Feed modules in Flutter/Dart with REST integrations.</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>BTS Associate Intern @ ZS Associates</h3>
                    <p style={{ color: '#888' }}>Jan 2024 – July 2024 | Gurugram, India</p>
                    <p>Designed multi‑layer Snowflake DWH; developed IICS pipelines for 70+ vendor feeds.</p>
                </div>
            </section>

            <section className="section">
                <h2>Education</h2>
                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Arizona State University</h3>
                    <p style={{ color: '#888' }}>Master of Science Computer Science | GPA: 4/4 | Aug 2024 – May 2026</p>
                    <p><strong>Courses:</strong> Mobile Computing, Info Assurance & Security, Data Mining,
                        Software Verification/Test, Data Visualization, Knowledge Representation, Internship,
                        Data Processing at Scale, Applied Cryptography, Engr Blockchain Applications</p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ color: '#ffffff' }}>Shiv Nadar University</h3>
                    <p style={{ color: '#888' }}>B.Tech Computer Science | GPA: 7.61/10 | Aug 2020 – May 2024</p>
                </div>
            </section>

            <section className="section">
                <h2>Contact</h2>
                <p>Email: mohanasiddhartha.chivukula@gmail.com</p>
                <p>
                    <a href="https://www.linkedin.com/in/siddharthachivukula/"
                        style={{ color: '#60a5fa', marginRight: '1rem' }}>LinkedIn</a>
                    <a href="https://github.com/iamsiddhu3007"
                        style={{ color: '#60a5fa' }}>GitHub</a>
                </p>
            </section>
        </div>
    )
}

export default App
