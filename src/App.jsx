import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import Home from './pages/Home'
import './index.css'

// Simplified placeholder pages for now
const About = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>About</h2><p>Coming soon...</p></div>
const Experience = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>Experience</h2><p>Coming soon...</p></div>
const Projects = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>Projects</h2><p>Coming soon...</p></div>
const Education = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>Education</h2><p>Coming soon...</p></div>
const Certifications = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>Certifications</h2><p>Coming soon...</p></div>
const Contact = () => <div className="container" style={{ paddingTop: '120px', minHeight: '100vh' }}><h2>Contact</h2><p>Coming soon...</p></div>

function App() {
    return (
        <BrowserRouter>
            <CustomCursor />
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default App
