
import { motion } from 'framer-motion';

const Cloud = ({ delay = 0, duration = 20 }) => (
  <motion.div
    className="absolute w-32 h-32 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full filter blur-xl"
    animate={{
      x: ["0%", "100%", "0%"],
      y: [0, 50, 0],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay,
    }}
  />
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden">
        <Cloud delay={0} duration={15} />
        <Cloud delay={5} duration={20} />
        <Cloud delay={10} duration={18} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hello, I'm<br/>
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Your Name</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full"
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <div className="w-64 h-64 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-50" />
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://placekitten.com/400/400"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
