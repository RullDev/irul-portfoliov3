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
          className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-purple-400">Passion & Skills</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a creative developer who thrives on turning complex problems into elegant solutions. 
                With expertise in modern web technologies, I craft digital experiences that leave lasting impressions.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-2xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                From coding enthusiast to professional developer, my journey has been driven by continuous learning 
                and a dedication to mastering the latest technologies in the ever-evolving digital landscape.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 text-center"
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Let's Connect
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}