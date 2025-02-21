
import { motion } from 'framer-motion';

const CircleBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <motion.div 
      className="absolute w-[800px] h-[800px] border-2 border-white/20 rounded-full left-1/2 top-1/2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity }}
      style={{ transform: 'translate(-50%, -50%)' }}
    />
  </div>
);

const FloatingCloud = ({ delay = 0, duration = 20 }) => (
  <motion.div
    className="absolute"
    initial={{ x: -100, opacity: 0 }}
    animate={{
      x: ['0vw', '100vw'],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  >
    <svg width="64" height="64" viewBox="0 0 64 64" fill="white" opacity="0.1">
      <path d="M55.5,25.5A13,13,0,0,0,42.8,15.5a16.5,16.5,0,0,0-31,4.2A11,11,0,0,0,13.5,41h42a11,11,0,0,0,0-22Z"/>
    </svg>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
      <CircleBackground />
      
      {[...Array(6)].map((_, i) => (
        <FloatingCloud 
          key={i} 
          delay={i * 4} 
          duration={25 + i * 5}
        />
      ))}

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
              src="https://avatars.githubusercontent.com/u/1234567?v=4"
              alt="Profile"
              className="w-full h-full object-cover rounded-full relative z-10 border-4 border-white/10"
            />
          </motion.div>

          <motion.h1 
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Let's create<br/>something amazing
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm John Doe. A passionate Fullstack Developer<br/>
            crafting digital experiences that matter.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
