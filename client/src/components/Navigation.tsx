import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define a HashLink component for smooth scrolling
export function HashLink({ href, children, className, onClick }: { href: string, children: React.ReactNode, className?: string, onClick?: () => void }) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Handle mobile menu closing first if onClick is provided
    if (onClick) {
      onClick();
    }
    
    // Extract ID from href and scroll to it
    const targetId = href.replace('/#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Small delay to allow mobile menu to close first
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, "", href);
      }, 100);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

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
  
  // Handle clicks outside the menu to close it
  useEffect(() => {
    if (!isMenuOpen) return;
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if click is outside the menu and not on the toggle button
      const isOutsideMenu = !target.closest('.mobile-menu') && !target.closest('.menu-toggle');
      
      if (isMenuOpen && isOutsideMenu) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Helper to determine active link style
  const getLinkStyles = (section: string) => {
    let baseStyles = "font-medium transition-all relative py-2 px-1";
    if (activeSection === section) {
      return `${baseStyles} text-[#3D2C35] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#3D2C35] after:rounded-full`;
    }
    return `${baseStyles} hover:text-[#3D2C35]`;
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#F8F6F3]/90 backdrop-blur-md shadow-md py-2" 
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
            <div className="flex items-center h-8">
              <div className="relative inline-block w-[1.5rem] h-[1.5rem] flex items-center justify-center">
                <span className="text-[#3D2C35] font-display text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300 absolute">D</span>
                <span className="text-[#C4B7BD] font-display text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">D</span>
              </div>
              <div className="relative inline-block h-[1.5rem] flex items-center">
                <span className="text-[#3D2C35] font-display text-2xl font-bold group-hover:opacity-0 transition-opacity duration-300 absolute">ripDial</span>
                <span className="text-[#C4B7BD] font-display text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute">ripDial</span>
              </div>
            </div>
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
            <HashLink href="/#features" className={getLinkStyles("features")}>
              Features
            </HashLink>
            <HashLink href="/#examples" className={getLinkStyles("examples")}>
              Style Gallery
            </HashLink>
            <HashLink href="/#pricing" className={getLinkStyles("pricing")}>
              Pricing
            </HashLink>
            <HashLink href="/#faq" className={getLinkStyles("faq")}>
              FAQ
            </HashLink>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <HashLink href="/#subscribe" className="bg-gradient-to-r from-[#3D2C35] to-[#8F8A95] text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-sm hover:shadow-md flex">
              <span className="flex items-center">
                Subscribe Now <i className="fas fa-chevron-right ml-2 text-xs"></i>
              </span>
            </HashLink>
          </motion.div>
        </div>
        
        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden text-[#3D2C35] p-2 menu-toggle"
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
            className="md:hidden bg-[#F8F6F3] backdrop-blur-xl fixed top-16 left-0 right-0 shadow-lg z-40 mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 p-6">
              <HashLink 
                href="/#features" 
                className="font-medium px-4 py-3 hover:bg-[#C4B7BD]/20 rounded-lg transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-star-half-alt mr-3 text-[#3D2C35]"></i>
                Features
              </HashLink>
              <HashLink 
                href="/#examples" 
                className="font-medium px-4 py-3 hover:bg-[#C4B7BD]/20 rounded-lg transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-tshirt mr-3 text-[#3D2C35]"></i>
                Style Gallery
              </HashLink>
              <HashLink 
                href="/#pricing" 
                className="font-medium px-4 py-3 hover:bg-[#C4B7BD]/20 rounded-lg transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-tag mr-3 text-[#3D2C35]"></i>
                Pricing
              </HashLink>
              <HashLink 
                href="/#faq" 
                className="font-medium px-4 py-3 hover:bg-[#C4B7BD]/20 rounded-lg transition-colors flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-question-circle mr-3 text-[#3D2C35]"></i>
                FAQ
              </HashLink>
              <div className="pt-2">
                <HashLink 
                  href="/#subscribe"
                  className="bg-gradient-to-r from-[#3D2C35] to-[#8F8A95] text-white px-6 py-3 rounded-lg font-medium transition-all w-full text-center flex justify-center shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center">
                    Subscribe Now <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </HashLink>
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center space-x-6 pt-4 border-t border-[#C4B7BD]/30">
                <a href="#" className="text-[#8F8A95] hover:text-[#3D2C35] transition-colors">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="text-[#8F8A95] hover:text-[#3D2C35] transition-colors">
                  <i className="fab fa-tiktok text-xl"></i>
                </a>
                <a href="#" className="text-[#8F8A95] hover:text-[#3D2C35] transition-colors">
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
