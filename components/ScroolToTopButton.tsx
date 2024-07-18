// components/ScrollToTopButton.tsx
import ScroolIcon from '@/icons/ScroolIcon';
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-16 right-8 p-3 rounded-full bg-blue-500 text-white shadow-lg ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-300`}
    >
      <ScroolIcon />
    </button>
  );
};

export default ScrollToTopButton;
