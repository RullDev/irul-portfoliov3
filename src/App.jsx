
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Stack from './components/Stack';
import Footer from './components/Footer';
import './App.css';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.5,
        y: isVisible ? 0 : 20
      }}
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all hover:scale-110 z-50"
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Portfolio />
      <Timeline />
      <Stack />
      <Footer />
    </div>
  );
}
