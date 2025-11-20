import { motion } from 'framer-motion';
import resumePDF from '../assets/resume.pdf';
import './Resume.css';

export default function Resume() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="resume-page"
        >
            <div className="resume-header">
                <h1>Resume</h1>
                <motion.a
                    href={resumePDF}
                    download
                    className="download-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Download PDF
                </motion.a>
            </div>

            <div className="resume-viewer">
                <iframe
                    src={`${resumePDF}#toolbar=0`}
                    title="Resume PDF"
                    className="pdf-iframe"
                />
            </div>
        </motion.div>
    );
}
