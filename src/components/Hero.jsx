
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

const TypeWriter = ({ text, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 100);
      
      return () => clearInterval(intervalId);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span>{displayText}</span>;
};

const Cloud = ({ src, className = "", initialX, initialY }) => (
  <motion.img
    src={src}
    alt="cloud"
    className={`absolute w-32 h-auto opacity-20 ${className}`}
    initial={{ x: initialX, y: initialY }}
    animate={{
      x: initialX < 0 ? [initialX, 100, initialX] : [initialX, -100, initialX],
      y: [initialY, initialY + 30, initialY],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
  />
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      <CircleBackground />
      
      <Cloud src="cloud/cloud1.png" initialX={-200} initialY={100} />
      <Cloud src="cloud/cloud2.png" initialX={200} initialY={-150} />
      <Cloud src="cloud/cloud3.png" initialX={-150} initialY={-100} />
      <Cloud src="cloud/cloud4.png" initialX={300} initialY={200} />
      <Cloud src="cloud/cloud5.png" initialX={-300} initialY={0} />

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
          >
            <TypeWriter text="Let's create" delay={0} /><br/>
            <TypeWriter text="websites & design" delay={1500} />
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
