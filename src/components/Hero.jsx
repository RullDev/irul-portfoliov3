
import { motion } from 'framer-motion';

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

const FloatingCloud = ({ delay = 0, scale = 1, imagePath }) => (
  <motion.div
    className="absolute"
    initial={{ 
      x: -100, 
      y: Math.random() * 200 - 100,
      opacity: 0 
    }}
    animate={{
      x: ['-100%', '200%'],
      opacity: [0, 0.15, 0],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay,
      ease: "linear",
    }}
  >
    <img 
      src={imagePath} 
      alt="cloud"
      className="w-32 h-auto"
      style={{ transform: `scale(${scale})` }}
    />
  </motion.div>
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      <CircleBackground />
      
      <FloatingCloud imagePath="cloud/cloud1.png" delay={0} scale={1.2} />
      <FloatingCloud imagePath="cloud/cloud2.png" delay={4} scale={1.5} />
      <FloatingCloud imagePath="cloud/cloud3.png" delay={8} scale={1.3} />
      <FloatingCloud imagePath="cloud/cloud4.png" delay={12} scale={1.4} />
      <FloatingCloud imagePath="cloud/cloud5.png" delay={16} scale={1.6} />

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
            Let's create<br/>something amazing
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
