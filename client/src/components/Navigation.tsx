import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <a className="text-plum font-display text-2xl font-bold">DripDial</a>
          </Link>
          <span className="ml-2 text-xs px-2 py-1 bg-plum text-white rounded-full">AI-Powered</span>
        </div>
        
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/#features">
            <a className="font-medium hover:text-plum transition-colors">Features</a>
          </Link>
          <Link href="/#examples">
            <a className="font-medium hover:text-plum transition-colors">Newsletter Examples</a>
          </Link>
          <Link href="/#pricing">
            <a className="font-medium hover:text-plum transition-colors">Pricing</a>
          </Link>
          <Link href="/#faq">
            <a className="font-medium hover:text-plum transition-colors">FAQ</a>
          </Link>
          <Link href="/#subscribe">
            <a className="bg-plum text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all">
              Subscribe Now
            </a>
          </Link>
        </div>
        
        <button 
          className="md:hidden text-plum"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-6">
              <Link href="/#features">
                <a 
                  className="font-medium hover:text-plum transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
              </Link>
              <Link href="/#examples">
                <a 
                  className="font-medium hover:text-plum transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Newsletter Examples
                </a>
              </Link>
              <Link href="/#pricing">
                <a 
                  className="font-medium hover:text-plum transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
              </Link>
              <Link href="/#faq">
                <a 
                  className="font-medium hover:text-plum transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </Link>
              <Link href="/#subscribe">
                <a 
                  className="bg-plum text-white px-5 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Subscribe Now
                </a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
