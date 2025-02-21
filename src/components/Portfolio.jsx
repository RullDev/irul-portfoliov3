
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            I'm a passionate developer who loves creating beautiful and functional web experiences. With a strong foundation in modern web technologies, I strive to build applications that make a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
              <p className="text-gray-400">Creating responsive and dynamic web applications</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-400">Crafting beautiful and intuitive user interfaces</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}