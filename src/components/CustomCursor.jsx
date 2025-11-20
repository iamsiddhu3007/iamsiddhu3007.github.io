import { useEffect, useState, useCallback } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    const updatePosition = useCallback((e) => {
        // Update position immediately - no throttling
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
        window.addEventListener('mousemove', updatePosition, { passive: true });
        window.addEventListener('mouseover', updateCursorType, { passive: true });

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, [updatePosition, updateCursorType]);

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
