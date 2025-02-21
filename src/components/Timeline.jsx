
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, isLeft }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center w-full relative`}
  >
    <div className="w-5/12">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-blue-500/50 transition-all shadow-lg
          ${isLeft ? 'text-right' : 'text-left'}`}
      >
        <span className="text-blue-400 font-bold text-lg">{year}</span>
        <h3 className="text-xl font-bold mt-2 text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </motion.div>
    </div>
    
    <div className="w-2/12 flex justify-center relative">
      <div className="absolute w-1 bg-white/20 h-full"></div>
      <div className="absolute w-1 bg-gradient-to-b from-blue-500 to-red-500 h-full transform scale-y-0 origin-top animate-timeline"></div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-red-500 relative z-10 ring-2 ring-white/20 ring-offset-2 ring-offset-black"
      />
    </div>
    
    <div className="w-5/12"></div>
  </motion.div>
);

export default function Timeline() {
  const events = [
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Led development of enterprise applications using modern tech stack.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      description: 'Worked on various web applications and improved system architecture.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      description: 'Started career as a frontend developer focusing on React applications.'
    },
  ];

  return (
    <section id="timeline" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-red-500 text-transparent bg-clip-text"
        >
          Timeline
        </motion.h2>

        <div className="flex flex-col space-y-24 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
