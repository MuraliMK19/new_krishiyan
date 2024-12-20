import React, { useState, useEffect } from 'react';

function ScrollToTopArrow() {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowArrow(true);
            } else {
                setShowArrow(false);
            }
        });
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div
            className={`fixed bottom-4 right-4 rounded-full bg-[#3fc041] text-white flex items-center justify-center w-12 h-12 cursor-pointer opacity-0 transition-opacity duration-300 ease-in-out ${showArrow ? 'opacity-100' : ''}`}
            onClick={handleClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
        </div>
    );
}

export default ScrollToTopArrow;
