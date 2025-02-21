
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Let's Connect
            </h3>
            <p className="text-gray-400">Ready to start your next project?</p>
            <a href="mailto:email@example.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              email@example.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Social</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">LinkedIn</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Navigation</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#stack" className="block text-gray-400 hover:text-white transition-colors">Stack</a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold">Location</h3>
            <p className="text-gray-400">
              123 Tech Street<br />
              San Francisco, CA<br />
              United States
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          © 2024 All rights reserved
        </motion.div>
      </div>
    </footer>
  );
}
