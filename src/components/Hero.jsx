
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="absolute w-full h-full">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/4 -left-32 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, 400, 0],
              y: [0, 300, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hello, I'm<br/>
              <span className="text-blue-600">Your Name</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Full Stack Developer
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">
              Contact Me
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 mt-10 md:mt-0"
          >
            <div className="w-64 h-64 mx-auto rounded-full overflow-hidden">
              <img
                src="https://placekitten.com/400/400"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
