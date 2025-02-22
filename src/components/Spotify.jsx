
import { motion } from 'framer-motion';
import { useState, useRef } from 'react';

const MelodyBar = ({ delay }) => (
  <motion.div
    className="w-1 mx-[2px] bg-green-500"
    initial={{ height: 10 }}
    animate={{ 
      height: [5, 25, 5],
    }}
    transition={{
      duration: 1,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export default function Spotify() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  
  const handlePlay = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  };
  
  return (
    <div className="py-1 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-green-600 text-transparent bg-clip-text"
        >
          What song i listen to 
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          className="max-w-sm mx-auto bg-white/5 backdrop-blur-lg p-2 rounded-xl border border-white/10 hover:border-green-500/50 transition-all"
          onClick={handlePlay}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                 <motion.div
                   className={`w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center ${
                     isPlaying ? 'spin' : ''
                   }`}
                   animate={{
                     rotate: isPlaying ? 360 : 0,
                     transition: {
                       duration: 1,
                       ease: 'linear',
                       repeat: isPlaying ? Infinity : 0,
                     },
                   }}
                 >
  <img src="https://i.scdn.co/image/ab67616d0000b27316f48ac1e989d7acc028e9cf" alt="Songs" className="h-10 w-10 rounded-full flex" />
</motion.div>
              <div>
                <h3 className="text-base font-bold text-white">Something About You</h3>
                <p className="text-gray-400">Eyedress, Dent May</p>
              </div>
            </div>
            <div className="flex items-end h-12 space-x-[2px]">
              {[0, 1, 2, 3, 4].map((i) => (
                <MelodyBar key={i} delay={i * 0.2} />
              ))}
            </div>
          </div>
          <audio ref={audioRef} src="songs/song.mp3" />
        </motion.div>
      </div>
    </div>
  );
}
