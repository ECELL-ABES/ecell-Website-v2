import React, { useEffect, useState } from 'react';

const Cursor = () => {
  const [size, setSize] = useState(24); // Normal size of the cursor
  const [isClicked, setIsClicked] = useState(false); // Track if the cursor is clicked
  const [isVisible, setIsVisible] = useState(true); // Track cursor visibility
  let inactivityTimeout;

  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');

    // Function to move the cursor
    const moveCursor = (e) => {
      clearTimeout(inactivityTimeout); // Reset inactivity timer
      setIsVisible(true); // Show cursor on movement
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      startInactivityTimer(); // Start the timer again
    };

    // Function to handle mouse down event
    const handleMouseDown = () => {
      setIsClicked(true);
      setSize(22); // Decrease size on click
    };

    // Function to handle mouse up event
    const handleMouseUp = () => {
      setIsClicked(false);
      setSize(24); // Return to normal size on mouse up
    };

    const startInactivityTimer = () => {
      inactivityTimeout = setTimeout(() => {
        setIsVisible(false); // Hide the cursor after 5 seconds of inactivity
      }, 2000);
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Start the inactivity timer
    startInactivityTimer();

    // Clean up event listeners and timeout on unmount
    return () => {
      clearTimeout(inactivityTimeout);
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        position: 'fixed',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        backgroundColor: '#FFDE59',
        pointerEvents: 'none',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        transition: 'width 0.2s ease, height 0.2s ease, opacity 0.5s ease', // Smooth transition
        opacity: isVisible ? 1 : 0, // Control visibility with opacity
      }}
    />
  );
};

export default Cursor;
