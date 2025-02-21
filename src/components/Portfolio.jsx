
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          {...fadeInUp}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege of working
              on diverse projects that have shaped my expertise. My passion lies in creating
              intuitive and performant applications that solve real-world problems.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-purple-400">What I Do</h3>
            <p className="text-gray-300 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies.
              From responsive front-end designs to scalable back-end architectures, I ensure
              each project meets the highest standards of quality and performance.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-white-500 text-white px-8 py-3 rounded-xl hover:opacity-90 transition-opacity outline outline-1 outline-white/60"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
}
