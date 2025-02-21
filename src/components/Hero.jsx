
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const CircleBackground = () => (
  <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
    <motion.div 
      className="absolute w-[600px] h-[600px] border border-white/10 rounded-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.1, 0.8],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 8, repeat: Infinity }}
    />
    <motion.div 
      className="absolute w-[800px] h-[800px] border border-white/5 rounded-full"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 10, repeat: Infinity }}
    />
  </div>
);

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </motion.button>
  );
};

const TypeWriter = () => {
  const words = ["design", "websites"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const cursor = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursor);
  }, []);

  return (
    <span className="relative text-white">
      {words[index].substring(0, subIndex)}
      <span className={`absolute ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  );
};

const Cloud = ({ src, className = "", initialX, initialY }) => (
  <motion.img
    src={src}
    alt="cloud"
    className={`absolute w-32 h-auto opacity-20 ${className}`}
    initial={{ x: initialX, y: initialY }}
    animate={{
      x: [initialX, initialX + (initialX < 0 ? 200 : -200), initialX],
      y: [initialY, initialY + 50, initialY],
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.5, 1]
    }}
  />
);

export default function Hero() {
  return (
    <>
      <ScrollToTop />
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      <CircleBackground />
      
      <Cloud src="cloud/cloud1.png" initialX={-250} initialY={-150} />
      <Cloud src="cloud/cloud2.png" initialX={300} initialY={100} />
      <Cloud src="cloud/cloud3.png" initialX={-180} initialY={180} />
      <Cloud src="cloud/cloud4.png" initialX={200} initialY={-80} />
      <Cloud src="cloud/cloud5.png" initialX={-350} initialY={50} />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="w-40 h-40 mx-auto mb-8 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 260,
              damping: 20 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-xl" />
            <img
              src="profilepic.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10"
            />
          </motion.div>

          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >Let's create<br/>
            <TypeWriter />
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm Irul. A passionate Fullstack Developer<br/>
            crafting digital experiences that matter.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
