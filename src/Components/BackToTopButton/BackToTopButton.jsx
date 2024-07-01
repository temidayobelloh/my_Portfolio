import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import './BackToTopButton.css';

const BackToTopButton = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTopButton(true);
            } else {
                setShowScrollTopButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            {showScrollTopButton && <FaAngleDoubleUp className='top-btn-position' onClick={scrollTop} />}
        </div>
    );
};

export default BackToTopButton;