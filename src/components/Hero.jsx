import { motion } from 'framer-motion';

const Cloud = ({ delay = 0, duration = 20, scale = 1 }) => (
  <motion.div
    className="absolute w-16 h-8 bg-white/20 rounded-full filter blur-sm"
    animate={{
      x: ["0%", "100%", "0%"],
      y: [0, 20, 0],
      scale: [scale, scale * 1.2, scale],
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-blue-400 to-blue-600">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Cloud key={i} delay={i * 2} duration={15 + i * 2} scale={0.5 + i * 0.2} />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            className="w-32 h-32 mx-auto mb-8 relative"
            initial={{ y: 20 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <img
              src="https://avatars.githubusercontent.com/u/1234567?v=4"
              alt="Profile"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>

          <h1 className="text-5xl font-bold mb-4">
            Lets create<br/>websites
          </h1>
          <p className="text-xl opacity-90 mb-8">
            My name is John Doe. I am a Fullstack<br/>
            Developer with 5+ years experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}