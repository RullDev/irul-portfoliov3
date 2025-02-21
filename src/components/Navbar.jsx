
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors block md:inline-block"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Portfolio
            </span>
          </motion.div>

          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="#home" onClick={handleLinkClick}>Home</NavLink>
            <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="#timeline" onClick={handleLinkClick}>Timeline</NavLink>
            <NavLink href="#stack" onClick={handleLinkClick}>Stack</NavLink>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 }
          }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#home" onClick={handleLinkClick}>Home</NavLink>
            <NavLink href="#about" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="#timeline" onClick={handleLinkClick}>Timeline</NavLink>
            <NavLink href="#stack" onClick={handleLinkClick}>Stack</NavLink>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}
