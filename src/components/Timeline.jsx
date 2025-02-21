
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, isLeft, isFirst, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center w-full relative`}
  >
    <div className="w-5/12">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`p-8 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:border-blue-500/50 transition-all shadow-lg relative
          ${isLeft ? 'text-right' : 'text-left'}`}
      >
        <div className={`absolute top-1/2 -mt-1 ${isLeft ? '-right-10' : '-left-10'} w-10 h-[2px] bg-gradient-to-r ${isLeft ? 'from-transparent to-blue-500' : 'from-blue-500 to-transparent'}`} />
        <span className="text-blue-400 font-bold text-xl">{year}</span>
        <h3 className="text-2xl font-bold mt-3 text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{title}</h3>
        <p className="text-gray-400 mt-3 leading-relaxed">{description}</p>
      </motion.div>
    </div>
    
    <div className="w-2/12 flex justify-center relative">
      <div className="absolute w-[2px] bg-gradient-to-b from-blue-500 to-purple-500 h-full" 
           style={{
             clipPath: `inset(${isFirst ? '50%' : '0'} 0 ${isLast ? '50%' : '0'} 0)`
           }}
      />
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 relative z-10 ring-4 ring-blue-500/20 ring-offset-2 ring-offset-black shadow-lg shadow-blue-500/20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full bg-blue-500/30"
        />
      </motion.div>
    </div>
    
    <div className="w-5/12"></div>
  </motion.div>
);

export default function Timeline() {
  const events = [
    {
      year: '2023',
      title: 'Senior Developer',
      description: 'Led development of enterprise applications using modern tech stack and managed team projects with cutting-edge technologies.'
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      description: 'Worked on various web applications and improved system architecture while implementing best practices in development.'
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      description: 'Started career as a frontend developer focusing on React applications and modern UI/UX implementations.'
    },
  ];

  return (
    <section id="timeline" className="py-32 bg-black text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
        >
          Timeline
        </motion.h2>

        <div className="flex flex-col space-y-32 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              year={event.year}
              title={event.title}
              description={event.description}
              isLeft={index % 2 === 0}
              isFirst={index === 0}
              isLast={index === events.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
