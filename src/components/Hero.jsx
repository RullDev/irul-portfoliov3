
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

const Cloud = ({ className, imagePath, initialX, initialY, duration }) => (
  <motion.img
    src={imagePath}
    alt="cloud"
    className={`absolute w-32 h-auto opacity-20 ${className}`}
    initial={{ x: initialX, y: initialY }}
    animate={{
      x: initialX < 0 ? '120%' : '-120%',
      y: [initialY - 20, initialY + 20, initialY - 20],
    }}
    transition={{
      x: {
        duration,
        repeat: Infinity,
        repeatType: "loop",
      },
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
      }
    }}
  />
);

const TypeWriter = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timer);
    }
  }, [index, text, speed]);

  return <span>{displayText}</span>;
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <CircleBackground />
      
      <Cloud 
        imagePath="/cloud/cloud1.png"
        className="top-1/4"
        initialX={-100}
        initialY={50}
        duration={15}
      />
      <Cloud 
        imagePath="/cloud/cloud2.png"
        className="bottom-1/4"
        initialX={window.innerWidth}
        initialY={-80}
        duration={18}
      />
      <Cloud 
        imagePath="/cloud/cloud3.png"
        className="top-1/3"
        initialX={-150}
        initialY={150}
        duration={20}
      />
      <Cloud 
        imagePath="/cloud/cloud4.png"
        className="bottom-1/3"
        initialX={window.innerWidth}
        initialY={100}
        duration={17}
      />
      <Cloud 
        imagePath="/cloud/cloud5.png"
        className="top-2/3"
        initialX={-200}
        initialY={-100}
        duration={22}
      />

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

          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-500 text-transparent bg-clip-text">
            <TypeWriter text="Let's create" speed={150} />
            <br/>
            <TypeWriter text="something amazing" speed={150} />
          </h1>
          
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
