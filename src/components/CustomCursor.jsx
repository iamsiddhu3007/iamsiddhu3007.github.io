import { useEffect, useState, useCallback } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    const updatePosition = useCallback((e) => {
        setPosition({ x: e.clientX, y: e.clientY });

        // Update CSS variables for background gradient
        const xPercent = (e.clientX / window.innerWidth) * 100;
        const yPercent = (e.clientY / window.innerHeight) * 100;
        document.documentElement.style.setProperty('--cursor-x', `${xPercent}%`);
        document.documentElement.style.setProperty('--cursor-y', `${yPercent}%`);
    }, []);

    const updateCursorType = useCallback((e) => {
        const target = e.target;
        setIsPointer(
            target.tagName === 'A' ||
            target.tagName === 'BUTTON' ||
            target.onclick != null ||
            window.getComputedStyle(target).cursor === 'pointer'
        );
    }, []);

    useEffect(() => {
        // Check if it's a touch device
        const checkTouchDevice = () => {
            return ('ontouchstart' in window) ||
                   (navigator.maxTouchPoints > 0) ||
                   (navigator.msMaxTouchPoints > 0) ||
                   (window.innerWidth <= 1024);
        };

        setIsTouchDevice(checkTouchDevice());

        if (!checkTouchDevice()) {
            window.addEventListener('mousemove', updatePosition, { passive: true });
            window.addEventListener('mouseover', updateCursorType, { passive: true });
        }

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, [updatePosition, updateCursorType]);

    // Don't render custom cursor on touch devices
    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            <div
                className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={`cursor-glow ${isPointer ? 'pointer' : ''}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    );
}
