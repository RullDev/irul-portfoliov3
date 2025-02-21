
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Stack from './components/Stack';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      >
        {darkMode ? '🌞' : '🌙'}
      </button>
      <Navbar />
      <Hero />
      <Portfolio />
      <Stack />
      <Footer />
    </div>
  );
}
