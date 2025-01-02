import React, { useEffect, useState } from 'react';

function ScrollProgress() {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = (totalScroll / windowHeight) * 100;

        setScrollWidth(scroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-50">
            <div
                className="h-full bg-yellow-500 rounded-r-full transition-all duration-200"
                style={{ width: `${scrollWidth}%` }}
            ></div>
            <div
                className="absolute top-0 left-0 h-full bg-yellow-500 rounded-r-full blur-md opacity-50"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
}

export default ScrollProgress;
