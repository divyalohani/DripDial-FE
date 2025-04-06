import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section for highlight in navigation
      const sections = ["features", "examples", "pricing", "faq", "subscribe"];
      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If section is in viewport and near top
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Helper to determine active link style
  const getLinkStyles = (section: string) => {
    let baseStyles = "font-medium transition-all relative py-2 px-1";
    if (activeSection === section) {
      return `${baseStyles} text-plum after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-plum after:rounded-full`;
    }
    return `${baseStyles} hover:text-plum`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div onClick={() => window.location.href = '/'} className="flex items-center cursor-pointer group">
            <div className="relative">
              <span className="text-plum font-display text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300 absolute">D</span>
              <span className="text-amber-700 font-display text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">D</span>
            </div>
            <div className="ml-[11px] relative">
              <span className="text-plum font-display text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300 absolute">ripDial</span>
              <span className="text-amber-700 font-display text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">ripDial</span>
            </div>
          </div>
          <div className="ml-2 relative overflow-hidden rounded-full bg-gradient-to-r from-amber-700 to-amber-500 p-0.5">
            <div className="px-2 py-0.5 text-xs font-medium text-white">
              AI-Powered
            </div>
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 shimmer"></div>
          </div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <motion.div 
            className="flex space-x-8 items-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href="/#features">
              <a className={getLinkStyles("features")}>Features</a>
            </Link>
            <Link href="/#examples">
              <a className={getLinkStyles("examples")}>Style Gallery</a>
            </Link>
            <Link href="/#pricing">
              <a className={getLinkStyles("pricing")}>Pricing</a>
            </Link>
            <Link href="/#faq">
              <a className={getLinkStyles("faq")}>FAQ</a>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/#subscribe">
              <a className="bg-gradient-to-r from-amber-700 to-amber-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md">
                <span className="flex items-center">
                  Subscribe Now <i className="fas fa-chevron-right ml-2 text-xs"></i>
                </span>
              </a>
            </Link>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-plum p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden bg-white/95 backdrop-blur-md absolute w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-6">
              <Link href="/#features">
                <a 
                  className="font-medium px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-star-half-alt mr-3 text-amber-600"></i>
                  Features
                </a>
              </Link>
              <Link href="/#examples">
                <a 
                  className="font-medium px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-tshirt mr-3 text-amber-600"></i>
                  Style Gallery
                </a>
              </Link>
              <Link href="/#pricing">
                <a 
                  className="font-medium px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-tag mr-3 text-amber-600"></i>
                  Pricing
                </a>
              </Link>
              <Link href="/#faq">
                <a 
                  className="font-medium px-4 py-3 hover:bg-amber-50 rounded-lg transition-colors flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <i className="fas fa-question-circle mr-3 text-amber-600"></i>
                  FAQ
                </a>
              </Link>
              <div className="pt-2">
                <Link href="/#subscribe">
                  <a 
                    className="bg-gradient-to-r from-amber-700 to-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-all w-full text-center block shadow-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center">
                      Subscribe Now <i className="fas fa-arrow-right ml-2"></i>
                    </span>
                  </a>
                </Link>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-gray-100">
                <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
                <a href="#" className="text-gray-500 hover:text-amber-600 transition-colors">
                  <i className="fab fa-pinterest text-xl"></i>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
