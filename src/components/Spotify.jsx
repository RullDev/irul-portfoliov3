
import { motion } from 'framer-motion';

const MelodyBar = ({ delay }) => (
  <motion.div
    className="w-1 mx-[2px] bg-green-500"
    initial={{ height: 10 }}
    animate={{ 
      height: [10, 40, 10],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export default function Spotify() {
  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text"
        >
          My Favorite Songs
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="max-w-md mx-auto bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition-all"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Glimpse of Us</h3>
                <p className="text-gray-400">Joji</p>
              </div>
            </div>
            <div className="flex items-end h-12 space-x-[2px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <MelodyBar key={i} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
