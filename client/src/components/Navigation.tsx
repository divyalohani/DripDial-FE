import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
        isScrolled 
          ? "bg-white/90 shadow-md" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <motion.a 
            className="flex items-center group"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <span className="font-display text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 mr-2">
              DripDial
            </span>
            <motion.span 
              className="text-xs px-2 py-1 bg-gradient-to-r from-amber-500 to-amber-400 text-white rounded-full font-medium"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              AI-Powered
            </motion.span>
          </motion.a>
        </Link>
        
        <div className="hidden md:flex space-x-6 items-center">
          {["Features", "Newsletter", "Pricing", "FAQ"].map((item, i) => (
            <Link key={item} href={`/#${item.toLowerCase()}`}>
              <motion.a 
                className="font-medium text-amber-900/80 hover:text-amber-600 transition-colors"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400,
                  duration: 0.3, 
                  delay: 0.1 * i
                }}
              >
                {item}
              </motion.a>
            </Link>
          ))}
          
          <Link href="/#subscribe">
            <motion.a 
              className="bg-amber-600 text-white px-5 py-2 rounded-full font-medium hover:bg-amber-500 shadow-md shadow-amber-200/50 transition-all flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <span>Subscribe</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </motion.a>
          </Link>
        </div>
        
        <motion.button 
          className="md:hidden text-amber-700"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-gradient-to-b from-white to-amber-50"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-5 p-6">
              {["Features", "Newsletter", "Pricing", "FAQ"].map((item, i) => (
                <Link key={item} href={`/#${item.toLowerCase()}`}>
                  <motion.a 
                    className="font-medium text-amber-900 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <i className={`fas fa-${
                      item === "Features" ? "star" : 
                      item === "Newsletter" ? "newspaper" :
                      item === "Pricing" ? "tag" : "question-circle"
                    } mr-2 text-amber-500`}></i>
                    {item}
                  </motion.a>
                </Link>
              ))}
              
              <Link href="/#subscribe">
                <motion.a 
                  className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-5 py-3 rounded-full font-medium hover:shadow-lg transition-all w-full text-center mt-2 flex items-center justify-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{ scale: 1.03 }}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span>Subscribe Now</span>
                  <i className="fas fa-arrow-right"></i>
                </motion.a>
              </Link>
              
              <motion.div 
                className="flex justify-center space-x-3 pt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a href="#" className="text-amber-800 hover:text-amber-600">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-amber-800 hover:text-amber-600">
                  <i className="fab fa-tiktok"></i>
                </a>
                <a href="#" className="text-amber-800 hover:text-amber-600">
                  <i className="fab fa-twitter"></i>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
