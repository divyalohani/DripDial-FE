import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

// Animated floating elements with improved visual effects
const FloatingElement = ({ delay, duration, size, left, top, color, className }: any) => (
  <motion.div
    className={`absolute rounded-full backdrop-blur-md ${className}`}
    style={{ 
      width: size, 
      height: size,
      left: `${left}%`,
      top: `${top}%`,
      background: color || `linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))`,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.2)"
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.05, 1],
      opacity: [0.3, 0.5, 0.3],
      rotate: [0, 5, 0],
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

// Animated shapes that float in the background
const ShapeElement = ({ shape, delay, duration, size, left, top, rotation = 0, className }: any) => {
  const shapes = {
    circle: "rounded-full",
    square: "rounded-lg",
    triangle: "clip-path-triangle", // We'll create this with a clip-path
    diamond: "rotate-45 rounded-lg"
  };

  return (
    <motion.div
      className={`absolute ${shapes[shape]} ${className}`}
      style={{ 
        width: size, 
        height: size,
        left: `${left}%`,
        top: `${top}%`,
        background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))`,
        backdropFilter: "blur(5px)",
        transform: `rotate(${rotation}deg)`,
        clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none'
      }}
      animate={{
        y: [0, -15, 0],
        rotate: [rotation, rotation + 10, rotation],
        opacity: [0.15, 0.25, 0.15]
      }}
      transition={{
        repeat: Infinity,
        duration: duration,
        delay: delay,
        ease: "easeInOut"
      }}
    />
  );
};

// Moving dots in background
const MovingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{
            y: [0, -(Math.random() * 150 + 50)],
            opacity: [0, 0.7, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 10 + 10,
            delay: Math.random() * 10,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Animated fashion tag that floats in from the side
const FashionTag = ({ text, delay, left, top, color = "black" }: any) => (
  <motion.div
    className="absolute z-10"
    style={{ left: `${left}%`, top: `${top}%` }}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay }}
  >
    <div className="bg-white px-3 py-1 rounded-full shadow-lg flex items-center space-x-1 border border-gray-100">
      <div className={`w-2 h-2 rounded-full bg-${color}`}></div>
      <span className="text-xs font-medium">{text}</span>
    </div>
  </motion.div>
);

export default function Hero() {
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTitle = useAnimation();
  
  // Create parallax effect for images
  const y1 = useTransform(scrollY, [0, 500], [0, -50]);
  const y2 = useTransform(scrollY, [0, 500], [0, -30]);
  const y3 = useTransform(scrollY, [0, 500], [0, -70]);
  const y4 = useTransform(scrollY, [0, 500], [0, -40]);
  
  // Text highlight animation
  useEffect(() => {
    const sequence = async () => {
      await controlsTitle.start({ 
        backgroundSize: ["0% 6px", "100% 6px"],
        transition: { duration: 1, delay: 1.2 }
      });
    };
    sequence();
  }, [controlsTitle]);

  return (
    <section className="relative hero-gradient min-h-[85vh] flex items-center overflow-hidden pt-[35px] md:pt-[35px]" ref={containerRef}>
      {/* Enhanced background animation */}
      <MovingDots />
      
      {/* Animated geometric shapes */}
      <ShapeElement shape="circle" delay={0} duration={6} size="100px" left={8} top={20} className="hidden md:block" />
      <ShapeElement shape="square" delay={1.5} duration={8} size="120px" left={85} top={15} rotation={20} className="hidden md:block" />
      <ShapeElement shape="triangle" delay={0.8} duration={7} size="80px" left={75} top={65} rotation={10} className="hidden md:block" />
      <ShapeElement shape="diamond" delay={2} duration={9} size="70px" left={15} top={70} className="hidden md:block" />
      
      {/* Animated floating bubbles */}
      <FloatingElement delay={0.2} duration={7} size="150px" left={5} top={30} color="linear-gradient(135deg, rgba(61, 44, 53, 0.1), rgba(61, 44, 53, 0.05))" className="hidden md:block" />
      <FloatingElement delay={1.8} duration={9} size="200px" left={80} top={25} color="linear-gradient(135deg, rgba(196, 183, 189, 0.1), rgba(196, 183, 189, 0.05))" className="hidden md:block" />
      <FloatingElement delay={1.2} duration={8} size="120px" left={65} top={60} color="linear-gradient(135deg, rgba(143, 138, 149, 0.1), rgba(143, 138, 149, 0.05))" className="hidden md:block" />
      <FloatingElement delay={0.5} duration={10} size="180px" left={20} top={75} color="linear-gradient(135deg, rgba(61, 44, 53, 0.1), rgba(61, 44, 53, 0.05))" className="hidden md:block" />
      
      {/* Fashion floating tags */}
      <FashionTag text="Y2K Revival" delay={1.3} left={20} top={25} color="black" />
      <FashionTag text="Coastal Grandma" delay={1.5} left={75} top={45} color="black" />
      <FashionTag text="Dark Academia" delay={1.7} left={25} top={65} color="black" />
      <FashionTag text="Clean Girl Aesthetic" delay={1.9} left={70} top={15} color="black" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div 
            className="space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-flex space-x-2 items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="inline-block px-3 py-1.5 bg-black text-white text-sm font-semibold rounded-full flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <i className="fas fa-bolt text-xs mr-1.5"></i>
                <span>AI-POWERED FASHION INTEL</span>
              </motion.span>
              <motion.div 
                className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="text-xs">New issue every Monday</span>
              </motion.div>
            </motion.div>
            
            <div className="space-y-4">
              <motion.h1 
                className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Discover Trends 
                <br/>
                <motion.span
                  className="relative inline-block"
                  animate={controlsTitle}
                  style={{
                    backgroundImage: "linear-gradient(90deg, #000, #000)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "0 90%",
                    backgroundSize: "0% 6px",
                  }}
                >
                  Before They Explode
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                DripDial delivers TikTok & Instagram fashion insights, curated outfits, and style analysis - all powered by AI fashion intelligence.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm py-3 px-4 rounded-xl border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex -space-x-3">
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-400" 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-500" 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
                <motion.div 
                  className="w-8 h-8 rounded-full border-2 border-white bg-gray-600 flex items-center justify-center text-xs font-bold text-white" 
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  +
                </motion.div>
              </div>
              <div>
                <span className="font-semibold text-black">2,000+ trendsetters already subscribed</span>
                <div className="flex items-center">
                  <div className="text-yellow-500 text-xs">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <span className="text-xs text-gray-500 ml-1">125 reviews</span>
                </div>
              </div>
            </motion.div>
            
            <div className="space-y-4">
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <i className="fas fa-bolt text-white text-xs"></i>
                </div>
                <p className="text-gray-700">Weekly trend forecasts from TikTok & Instagram</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <i className="fas fa-tshirt text-white text-xs"></i>
                </div>
                <p className="text-gray-700">AI-curated outfit inspiration for your style</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ x: 5 }}
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <i className="fas fa-tags text-white text-xs"></i>
                </div>
                <p className="text-gray-700">Budget-friendly shopping picks under $30</p>
              </motion.div>
            </div>
            
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Link href="#subscribe">
                <motion.button
                  className="bg-black text-white px-8 py-4 rounded-full font-bold text-center shadow-lg inline-flex items-center space-x-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span>Subscribe Now – Be First to Slay</span>
                  <motion.i 
                    className="fas fa-arrow-right"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  ></motion.i>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative mx-auto max-w-full md:max-w-[95%] z-20"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Enhanced collage with parallax effect and improved layout */}
            <div className="relative grid grid-cols-12 grid-rows-12 gap-2 h-[550px] md:h-[650px]">
              {/* Main image - Contemporary chic */}
              <motion.div 
                className="col-span-8 row-span-8 col-start-1 row-start-1 overflow-hidden rounded-xl shadow-xl relative z-20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{ y: y1 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80" 
                  alt="Contemporary fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-6 flex flex-col justify-end"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-sm font-semibold mb-2 bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm w-fit"
                    whileHover={{ scale: 1.05 }}
                  >
                    CONTEMPORARY CHIC
                  </motion.span>
                  <motion.div 
                    className="text-white text-xs bg-black/20 backdrop-blur-sm rounded-md px-2 py-1 w-fit"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="text-white/90">Trending this week</span>
                  </motion.div>
                </motion.div>
              </motion.div>
              
              {/* Top right image - Y2K Aesthetic */}
              <motion.div 
                className="col-span-4 row-span-5 col-start-9 row-start-1 overflow-hidden rounded-xl shadow-xl relative z-10"
                whileHover={{ scale: 1.04, zIndex: 30 }}
                transition={{ duration: 0.3 }}
                style={{ y: y2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400&q=80" 
                  alt="Y2K fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    Y2K AESTHETIC
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Bottom right top - Street style */}
              <motion.div 
                className="col-span-4 row-span-4 col-start-9 row-start-6 overflow-hidden rounded-xl shadow-xl relative z-20"
                whileHover={{ scale: 1.04, zIndex: 30 }}
                transition={{ duration: 0.3 }}
                style={{ y: y3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=400&q=80" 
                  alt="Street style fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    STREET VIBES
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Bottom left image - Luxury inspired */}
              <motion.div 
                className="col-span-8 row-span-4 col-start-1 row-start-9 overflow-hidden rounded-xl shadow-xl relative z-10"
                whileHover={{ scale: 1.02, zIndex: 30 }}
                transition={{ duration: 0.3 }}
                style={{ y: y4 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    LUXURY INSPIRED
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Bottom right bottom - Minimalist */}
              <motion.div 
                className="col-span-4 row-span-3 col-start-9 row-start-10 overflow-hidden rounded-xl shadow-xl relative z-20"
                whileHover={{ scale: 1.04, zIndex: 30 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80" 
                  alt="Minimalist fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-3"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-xs font-semibold bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    MINIMALIST
                  </motion.span>
                </motion.div>
              </motion.div>
              
              {/* Animated trend alert badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl max-w-[240px] z-30"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1 }}
                whileHover={{ y: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              >
                <div className="flex space-x-3 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-bolt text-sm"></i>
                  </div>
                  <span className="font-bold text-black">AI Trend Alert</span>
                </div>
                <p className="text-sm text-gray-600">Cargo pants + crop tops trending on TikTok with +245% engagement this week!</p>
                <motion.div 
                  className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden"
                  initial={{ width: "100%" }}
                >
                  <motion.div 
                    className="h-full bg-black" 
                    initial={{ width: "0%" }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, delay: 1.2 }}
                  />
                </motion.div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-500">Last week</span>
                  <span className="text-[10px] font-medium text-black">This week</span>
                </div>
              </motion.div>
              
              {/* Animated style tip badge */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl max-w-[240px] z-30"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
                whileHover={{ y: 5, boxShadow: "0 15px 30px rgba(0,0,0,0.15)" }}
              >
                <div className="flex space-x-3 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-tshirt text-sm"></i>
                  </div>
                  <span className="font-bold text-black">Style Hack</span>
                </div>
                <p className="text-sm text-gray-600">Layer oversized blazers over mini dresses for instant fall transition vibes!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced wavy divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-16 z-10">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-[#F8F6F3]" style={{ transform: 'rotate(180deg)' }}>
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
