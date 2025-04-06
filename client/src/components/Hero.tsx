import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Link } from 'wouter';

// Animated moving dots background
const MovingDots = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIG9wYWNpdHk9IjAuMSI+CiAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMiIgZmlsbD0iIzAwMCIvPgogIDwvZz4KPC9zdmc+')] [animation:grain_7s_steps(10)_infinite]"></div>
    </div>
  );
};

// Animated geometric shapes that float around
const ShapeElement = ({ shape, delay, duration, size, left, top, rotation = 0, className = "" }: any) => {
  let shapeContent;
  
  switch (shape) {
    case "circle":
      shapeContent = <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-500/5 to-purple-500/5"></div>;
      break;
    case "square":
      shapeContent = <div className="w-full h-full bg-gradient-to-tr from-blue-500/5 to-teal-500/5"></div>;
      break;
    case "triangle":
      shapeContent = <div className="w-0 h-0 border-l-[50px] border-r-[50px] border-b-[86px] border-l-transparent border-r-transparent border-b-purple-500/5"></div>;
      break;
    case "diamond":
      shapeContent = <div className="w-full h-full bg-gradient-to-tr from-yellow-500/5 to-orange-500/5 rotate-45"></div>;
      break;
    default:
      shapeContent = <div className="w-full h-full rounded-full bg-gradient-to-tr from-pink-500/5 to-purple-500/5"></div>;
  }

  return (
    <motion.div
      className={`absolute z-10 ${className}`}
      style={{ 
        width: size, 
        height: size, 
        left: `${left}%`, 
        top: `${top}%`,
        rotate: `${rotation}deg`
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 1, 0.5, 1],
        y: [0, -20, 10, 0],
        rotate: rotation + 5
      }}
      transition={{ 
        delay, 
        duration, 
        repeat: Infinity,
        repeatType: "reverse"
      }}
    >
      {shapeContent}
    </motion.div>
  );
};

// Animated floating bubbles effect
const FloatingElement = ({ delay, duration, size, left, top, color, className = "" }: any) => {
  return (
    <motion.div
      className={`absolute z-10 rounded-full ${className}`}
      style={{ 
        width: size, 
        height: size, 
        left: `${left}%`, 
        top: `${top}%`,
        background: color
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0, 0.2, 0.1, 0.2],
        y: [0, -30, 0, 30, 0],
        scale: [1, 1.05, 1, 0.95, 1]
      }}
      transition={{ 
        delay, 
        duration, 
        repeat: Infinity,
        repeatType: "reverse" 
      }}
    ></motion.div>
  );
};

// This is a smaller trending now video for the last grid cell - styled after the screenshot
const TrendingNowVideo = () => {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full overflow-hidden rounded-xl shadow-lg bg-white relative">
        <div className="absolute -top-4 -right-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
          HOT!
        </div>
        <div className="p-3 flex flex-col h-full">
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 flex-shrink-0 rounded-md bg-purple-500 flex items-center justify-center text-white">
              <motion.i 
                className="fas fa-chart-line text-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h3 className="font-bold text-black text-sm">Trending Now</h3>
              <div className="text-xs text-gray-500">Updated 2 hours ago</div>
            </div>
          </div>
          
          <div className="space-y-2 mt-1">
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-pink-500 pl-2"
              whileHover={{ x: 5 }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.1, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-600">Linen Shirt</span>
              <motion.span 
                className="text-xs text-green-500 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +182%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-blue-500 pl-2"
              whileHover={{ x: 5 }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.2, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-600">Slip Skirt</span>
              <motion.span 
                className="text-xs text-green-500 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +145%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-purple-500 pl-2"
              whileHover={{ x: 5 }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.3, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-600">Platform Boots</span>
              <motion.span 
                className="text-xs text-green-500 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +165%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-blue-400 pl-2"
              whileHover={{ x: 5 }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.4, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-600">Cargo Pants</span>
              <motion.span 
                className="text-xs text-green-500 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +124%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-yellow-500 pl-2"
              whileHover={{ x: 5 }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-600">Baggy Jeans</span>
              <motion.span 
                className="text-xs text-green-500 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +98%
              </motion.span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// TikTok/Instagram video feed for the 3rd grid cell
const VideoFeedCell = () => {
  const videoItems = [
    { id: 1, duration: 6, delay: 0 },
    { id: 2, duration: 7, delay: 0.3 },
    { id: 3, duration: 8, delay: 0.6 }
  ];

  return (
    <motion.div 
      className="w-full h-full overflow-hidden rounded-xl shadow-xl relative"
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileDrag={{ scale: 1.02, zIndex: 40 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-full h-full bg-gradient-to-br from-gray-900 via-pink-900 to-black overflow-hidden rounded-xl relative">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-[10px]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <i className="fas fa-fire"></i>
            </motion.div>
            <span className="text-white text-xs font-bold">TrendFeed</span>
          </div>
          <div className="w-14 h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
        
        <div className="relative flex-1" style={{ height: "calc(100% - 60px)" }}>
          {videoItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute inset-0 overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ 
                y: [index === 0 ? "0%" : "100%", "0%", "-100%"],
                zIndex: [10 - index, 10 - index, 0]
              }}
              transition={{
                duration: item.duration,
                delay: index === 0 ? 0 : item.delay,
                repeat: Infinity,
                repeatDelay: 2,
                times: [0, 0.1, 1],
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full">
                <motion.div
                  className="absolute inset-0 opacity-90"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"]
                  }}
                  transition={{
                    duration: item.duration / 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                  style={{
                    backgroundImage: index % 2 === 0 ? 
                      "linear-gradient(45deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)" :
                      "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%)",
                    backgroundSize: "200% 200%"
                  }}
                />
                
                {/* Moving Fashion elements */}
                <motion.div
                  className="absolute w-8 h-8 rounded-full bg-pink-500/20 backdrop-blur-sm z-10"
                  style={{ top: '15%', left: '15%' }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    x: [0, 15, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <motion.div 
                    className="flex items-center space-x-1"
                    animate={{ y: [20, 0] }}
                    transition={{ duration: 0.3, delay: item.delay + 0.2 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex-shrink-0 flex items-center justify-center">
                      <motion.i 
                        className="fas fa-bolt text-[8px] text-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div className="text-xs truncate font-medium">fashion_trends</div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-[11px] mt-2 line-clamp-2 bg-black/30 backdrop-blur-sm p-2 rounded-md"
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 0.3, delay: item.delay + 0.3 }}
                  >
                    {index % 3 === 0 ? 
                      "OMG these cut-out dresses are EVERYTHING! 💖 #TrendAlert #MustHave" : 
                      index % 3 === 1 ? 
                      "Platform boots + baggy jeans = iconic combo!! 🔥 #StyleHack #OOTD" : 
                      "Obsessed with this color-block aesthetic! 🤩 #FashionTok #Viral"
                    }
                  </motion.div>
                  
                  {/* Animated hearts floating up */}
                  <div className="absolute left-[30%] bottom-16 h-20">
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={`heart-${i}`}
                        className="absolute text-pink-500 text-[8px]"
                        initial={{ opacity: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          y: -30,
                          x: Math.random() * 10 - 5
                        }}
                        transition={{ 
                          duration: 2,
                          delay: item.delay + i * 0.5,
                          repeat: Infinity,
                          repeatDelay: item.duration - 2
                        }}
                      >
                        <i className="fas fa-heart" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Animated likes, comments count */}
                <motion.div
                  className="absolute right-3 bottom-16 flex flex-col items-center space-y-4"
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.3, delay: item.delay + 0.4 }}
                >
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.2 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <i className="fas fa-heart text-pink-500 text-xs"></i>
                    </motion.div>
                    <span className="text-[10px] font-medium text-white mt-1">24.5k</span>
                  </motion.div>
                  
                  <motion.div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                      <i className="fas fa-share text-white text-xs"></i>
                    </div>
                    <span className="text-[10px] font-medium text-white mt-1">342</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
          
          {/* Feed scrolling indicator */}
          <motion.div
            className="absolute top-2 left-2 right-2 h-1.5 bg-gray-800 rounded-full overflow-hidden z-30"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        
        {/* App interface buttons at bottom */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-1.5 border-t border-gray-800">
          {["home", "search", "plus", "inbox", "user"].map((icon, i) => (
            <motion.div 
              key={icon}
              className="text-gray-500 text-xs"
              whileHover={{ scale: 1.2, color: "#fff" }}
              animate={icon === "home" ? { color: "#fff" } : {}}
            >
              <i className={`fas fa-${icon === "plus" ? "plus-square" : icon}`}></i>
            </motion.div>
          ))}
        </div>
        
        {/* Floating badge with "drag me" hint */}
        <motion.div
          className="absolute -top-6 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          exit={{ opacity: 0, y: 10 }}
        >
          Drag me! <i className="fas fa-arrows-alt ml-1"></i>
        </motion.div>
      </div>
    </motion.div>
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
      
      {/* No more floating fashion trends badge - moved to grid cell */}
      
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
              
              {/* Bottom right top - Video Feed Cell */}
              <div className="col-span-4 row-span-4 col-start-9 row-start-6 overflow-hidden rounded-xl shadow-xl relative z-20">
                <VideoFeedCell />
              </div>
              
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
              
              {/* Bottom right bottom - Trending Now Video */}
              <div className="col-span-4 row-span-3 col-start-9 row-start-10 overflow-hidden rounded-xl shadow-xl relative z-20">
                <TrendingNowVideo />
              </div>
              
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
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16 text-[#F8F8F9]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.44,118.92,130.09,111.31,186.84,99.57Z" className="fill-current"></path>
        </svg>
      </div>
    </section>
  );
}