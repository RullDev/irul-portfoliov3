
import { motion } from 'framer-motion';

const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "JavaScript", icon: "🟨" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Node.js", icon: "🟢" },
  { name: "TailwindCSS", icon: "🎨" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "⬡" },
  { name: "Docker", icon: "🐳" },
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Tech Stack
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4">{tech.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
