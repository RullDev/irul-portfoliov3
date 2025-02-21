import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    image: "https://picsum.photos/400/300",
    tags: ["React", "TailwindCSS", "Node.js"],
    link: "#"
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    image: "https://picsum.photos/400/301",
    tags: ["Vue", "Firebase", "SCSS"],
    link: "#"
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    image: "https://picsum.photos/400/302",
    tags: ["Next.js", "MongoDB", "TypeScript"],
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


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