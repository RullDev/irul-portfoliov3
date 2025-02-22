
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
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-500">My Journey</h3>
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
  href="https://wa.me/6283899984688"
  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-white-500 text-white px-8 py-3 rounded-xl hover:outline outline-white opacity-90 transition-opacity"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="currentColor" // Use currentColor to inherit text color
    className="w-4 h-4 mr-2" // Adjust size and margin
  >
    <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376l0 103.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
  </svg>
  Contact Me
</a>
        </motion.div>
      </div>
    </section>
  );
}
