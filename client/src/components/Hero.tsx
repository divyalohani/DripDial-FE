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

// This is a smaller trending now video for the last grid cell - styled as a dark theme with moving elements
const TrendingNowVideo = () => {
  return (
    <motion.div 
      className="w-full h-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-full h-full overflow-hidden rounded-xl shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
        {/* Animated background effects */}
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(45,45,45,0.2)_0%,transparent_50%)]"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            opacity: [0.6, 0.2, 0.6]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        {/* Floating dots/sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-1.5 h-1.5 rounded-full bg-purple-500/70"
            style={{ 
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%` 
            }}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0],
              y: [0, -15, 0]
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        ))}
        
        <div className="absolute -top-4 -right-2 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-lg shadow-pink-500/30">
          HOT!
        </div>
        
        {/* Content container */}
        <div className="p-3 flex flex-col h-full backdrop-blur-sm relative z-10">
          <div className="flex items-center space-x-3 mb-2">
            <motion.div 
              className="w-8 h-8 flex-shrink-0 rounded-md bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/30"
              animate={{ 
                boxShadow: [
                  "0 0 0px rgba(168, 85, 247, 0.4)",
                  "0 0 15px rgba(168, 85, 247, 0.7)",
                  "0 0 0px rgba(168, 85, 247, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.i 
                className="fas fa-chart-line text-sm"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            <div>
              <h3 className="font-bold text-white text-sm">Trending Now</h3>
              <div className="text-xs text-gray-400">Updated 2 hours ago</div>
            </div>
          </div>
          
          {/* Animated line under the header */}
          <motion.div 
            className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-transparent mb-2.5"
            animate={{ 
              opacity: [0.5, 1, 0.5],
              backgroundPosition: ["0% 0%", "100% 0%"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          <div className="space-y-2 mt-1">
            {/* Moving pulse effect behind the first item */}
            <motion.div 
              className="absolute left-1 w-3/4 h-6 rounded-md bg-pink-500/10"
              animate={{ 
                y: [31, 31],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                repeatDelay: 6
              }}
            />
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-pink-500 pl-2 relative z-20"
              whileHover={{ x: 5, backgroundColor: "rgba(236, 72, 153, 0.1)" }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.1, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-300">Linen Shirt</span>
              <motion.span 
                className="text-xs text-green-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +182%
              </motion.span>
            </motion.div>
            
            {/* Moving pulse effect behind second item */}
            <motion.div 
              className="absolute left-1 w-3/4 h-6 rounded-md bg-blue-500/10"
              animate={{ 
                y: [60, 60],
                opacity: [0, 0.5, 0]
              }}
              transition={{ 
                duration: 3, 
                delay: 3,
                repeat: Infinity,
                repeatDelay: 6
              }}
            />
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-blue-500 pl-2 relative z-20"
              whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.2, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-300">Slip Skirt</span>
              <motion.span 
                className="text-xs text-green-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +145%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-purple-500 pl-2 relative z-20"
              whileHover={{ x: 5, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.3, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-300">Platform Boots</span>
              <motion.span 
                className="text-xs text-green-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +165%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-blue-400 pl-2 relative z-20"
              whileHover={{ x: 5, backgroundColor: "rgba(96, 165, 250, 0.1)" }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.4, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-300">Cargo Pants</span>
              <motion.span 
                className="text-xs text-green-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +124%
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="flex items-center justify-between space-x-2 border-l-2 border-yellow-500 pl-2 relative z-20"
              whileHover={{ x: 5, backgroundColor: "rgba(245, 158, 11, 0.1)" }}
              animate={{ y: [0, 2, 0] }}
              transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
            >
              <span className="text-xs font-medium text-gray-300">Baggy Jeans</span>
              <motion.span 
                className="text-xs text-green-400 font-bold"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                +98%
              </motion.span>
            </motion.div>
          </div>
          
          {/* Animated trend indicator */}
          <motion.div 
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full overflow-hidden border border-gray-700 shadow-inner"
            whileHover={{ scale: 1.2 }}
          >
            <motion.div 
              className="h-full w-full bg-gradient-to-t from-green-500 to-gray-800"
              animate={{ 
                y: ["50%", "0%"],
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-[8px] text-white font-semibold">
              RISING
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// TikTok/Instagram video feed for the 3rd grid cell - colorful vibrant fashion images
const VideoFeedCell = () => {
  // Using bright, colorful fashion images that stand out
  const influencerPosts = [
    { 
      id: 1, 
      duration: 10, 
      delay: 0,
      username: "style_queen",
      outfit: "Bold Colorblock Look",
      views: "1.5M",
      imageUrl: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=600&auto=format",
      location: "Paris",
      likes: "342.3k",
      comments: "8.7k"
    },
    { 
      id: 2, 
      duration: 12, 
      delay: 0.4,
      username: "fashion_forward",
      outfit: "Street Glam 2025",
      views: "872K",
      imageUrl: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&auto=format",
      location: "Tokyo",
      likes: "238.6k",
      comments: "5.2k"
    },
    { 
      id: 3, 
      duration: 15, 
      delay: 0.8,
      username: "trendsetter",
      outfit: "Urban Chic Collection",
      views: "968K",
      imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&auto=format",
      location: "London",
      likes: "176.4k",
      comments: "4.3k"
    },
    { 
      id: 4, 
      duration: 12, 
      delay: 1.2,
      username: "glamour_guru",
      outfit: "Evening Elegance",
      views: "756K",
      imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format",
      location: "Milan",
      likes: "198.4k",
      comments: "6.1k"
    },
    { 
      id: 5, 
      duration: 13, 
      delay: 1.6,
      username: "fashion_icon",
      outfit: "Summer Resort Wear",
      views: "1.1M",
      imageUrl: "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&auto=format",
      location: "Barcelona",
      likes: "287.9k",
      comments: "7.4k"
    }
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
      <div className="w-full h-full bg-black overflow-hidden rounded-xl relative">
        <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800 relative z-20">
          <div className="flex items-center space-x-2">
            <motion.div 
              className="w-5 h-5 rounded-full bg-pink-500 flex items-center justify-center text-white text-[10px] shadow-lg shadow-pink-500/30"
              animate={{ 
                scale: [1, 1.1, 1],
                boxShadow: [
                  "0 0 0px rgba(236, 72, 153, 0.3)",
                  "0 0 10px rgba(236, 72, 153, 0.6)",
                  "0 0 0px rgba(236, 72, 153, 0.3)"
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <i className="fas fa-fire"></i>
            </motion.div>
            <span className="text-white text-xs font-bold">StyleFeed</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <i className="fas fa-caret-down text-white text-[10px]"></i>
            <i className="fas fa-ellipsis-v text-white text-[10px]"></i>
          </div>
        </div>
        
        <div className="relative flex-1" style={{ height: "calc(100% - 60px)" }}>
          {influencerPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="absolute inset-0 overflow-hidden"
              initial={{ y: "100%" }}
              animate={{ 
                y: [index === 0 ? "0%" : "100%", "0%", "-100%"],
                zIndex: [10 - index, 10 - index, 0]
              }}
              transition={{
                duration: post.duration,
                delay: index === 0 ? 0 : post.delay,
                repeat: Infinity,
                repeatDelay: 2,
                times: [0, 0.1, 1],
                ease: "easeInOut"
              }}
            >
              <div className="w-full h-full">
                <img 
                  src={post.imageUrl} 
                  alt={post.outfit} 
                  className="w-full h-[90%] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500"></div>
                      <div className="text-xs font-semibold">{post.username}</div>
                      <i className="fas fa-check-circle text-[10px] text-blue-400"></i>
                    </div>
                    <div className="text-[10px] font-medium">
                      <i className="fas fa-map-marker-alt mr-0.5"></i>
                      {post.location}
                    </div>
                  </div>
                  
                  <div className="text-xs font-bold mb-1.5">{post.outfit}</div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2.5">
                      <div className="flex items-center space-x-1">
                        <motion.i 
                          className="fas fa-heart text-red-500 text-[10px]"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        ></motion.i>
                        <span className="text-[10px]">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <i className="fas fa-comment text-[10px]"></i>
                        <span className="text-[10px]">{post.comments}</span>
                      </div>
                    </div>
                    <div className="text-[10px]">
                      <i className="fas fa-play-circle mr-0.5"></i>
                      {post.views} views
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -50]);
  const y3 = useTransform(scrollY, [0, 500], [0, 200]);
  const y4 = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

  return (
    <section className="w-full min-h-screen bg-black text-white relative overflow-hidden" id="fashion-ai-newsletter">
      {/* Animated background elements */}
      <FloatingElement delay={0.2} duration={8} size="600px" left={-5} top={-10} color="radial-gradient(circle at center, rgba(236, 72, 153, 0.15), rgba(236, 72, 153, 0))" />
      <FloatingElement delay={0.5} duration={10} size="500px" left={60} top={50} color="radial-gradient(circle at center, rgba(167, 139, 250, 0.15), rgba(167, 139, 250, 0))" />
      <FloatingElement delay={0.8} duration={9} size="400px" left={80} top={10} color="radial-gradient(circle at center, rgba(251, 146, 60, 0.15), rgba(251, 146, 60, 0))" />
      <MovingDots />
      
      <div className="container mx-auto px-4 py-16 md:py-20 h-full relative z-20 flex flex-col">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative inline-block mb-3">
            <motion.span 
              className="inline-block px-3 py-1 rounded-full text-xs md:text-sm bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white font-semibold backdrop-blur-sm"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              AI-Powered Fashion Discovery
            </motion.span>
            <motion.span 
              className="absolute -right-2 -top-2 w-4 h-4 bg-pink-500 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0px rgba(236, 72, 153, 0.4)",
                  "0 0 8px rgba(236, 72, 153, 0.7)",
                  "0 0 0px rgba(236, 72, 153, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
          </div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block">Stay Ahead of the Curve with the</span>
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-transparent bg-clip-text">
              AI-Powered Fashion Newsletter
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover emerging trends before they explode. Get personalized style recommendations from our AI curators, delivered straight to your inbox every week.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="#subscribe">
              <motion.button
                className="px-6 py-3 rounded-xl bg-white text-black font-bold text-lg shadow-xl hover:shadow-white/20 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Now
              </motion.button>
            </Link>
            <motion.a 
              href="#newsletter-examples" 
              className="flex items-center text-gray-300 hover:text-white transition-colors"
              whileHover={{ x: 5 }}
            >
              <span>View Examples</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <div className="flex-1 flex items-center justify-center">
          <motion.div 
            className="w-full max-w-5xl mx-auto"
            style={{ scale, opacity }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Grid-based layout that adjusts based on screen size */}
            <div className="relative grid grid-cols-12 grid-rows-12 gap-2 h-[750px] sm:h-[700px] md:h-[550px] lg:h-[650px]">
              {/* Main image - Contemporary chic */}
              <motion.div 
                className="col-span-12 sm:col-span-8 row-span-6 sm:row-span-8 col-start-1 row-start-1 overflow-hidden rounded-xl shadow-xl relative z-20"
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
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 md:p-6 flex flex-col justify-end"
                  whileHover={{ opacity: 0.9 }}
                >
                  <motion.span 
                    className="text-white text-xs md:text-sm font-semibold mb-2 bg-black/30 px-2 py-1 rounded-md backdrop-blur-sm w-fit"
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
              
              {/* Y2K Aesthetic */}
              <motion.div 
                className="col-span-12 sm:col-span-4 row-span-3 sm:row-span-5 col-start-1 row-start-7 sm:col-start-9 sm:row-start-1 overflow-hidden rounded-xl shadow-xl relative z-10"
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
              
              {/* AI Trend Alert Badge - Mobile Grid Cell */}
              <div className="col-span-6 row-span-2 col-start-1 row-start-10 sm:hidden bg-white rounded-xl shadow-xl z-40 p-2 flex flex-col">
                <div className="flex space-x-1.5 items-center mb-1">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-bolt text-xs"></i>
                  </div>
                  <span className="font-bold text-black text-sm">AI Trend Alert</span>
                </div>
                <p className="text-xs text-gray-600">Cargo pants + crop tops trending on TikTok with +245% engagement this week!</p>
                <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-black w-[75%]"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-500">Last week</span>
                  <span className="text-[10px] font-medium text-black">This week</span>
                </div>
              </div>
              
              {/* Style Hack Badge - Mobile Grid Cell */}
              <div className="col-span-6 row-span-2 col-start-7 row-start-10 sm:hidden bg-white rounded-xl shadow-xl z-40 p-2 flex flex-col">
                <div className="flex space-x-1.5 items-center mb-1">
                  <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-tshirt text-xs"></i>
                  </div>
                  <span className="font-bold text-black text-sm">Style Hack</span>
                </div>
                <p className="text-xs text-gray-600">Layer oversized blazers over mini dresses for instant fall transition vibes!</p>
              </div>
              
              {/* Video Feed Cell */}
              <div className="col-span-12 sm:col-span-4 row-span-2 sm:row-span-4 col-start-1 row-start-12 sm:col-start-9 sm:row-start-6 overflow-hidden rounded-xl shadow-xl relative z-20">
                <VideoFeedCell />
              </div>
              
              {/* Luxury inspired - Desktop only */}
              <motion.div 
                className="hidden md:block col-span-8 row-span-4 col-start-1 row-start-9 overflow-hidden rounded-xl shadow-xl relative z-10"
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
              
              {/* Desktop trending video */}
              <div className="hidden md:block col-span-4 row-span-3 col-start-9 row-start-10 overflow-hidden rounded-xl shadow-xl relative z-20">
                <TrendingNowVideo />
              </div>
              
              {/* Style tip badge - desktop only (grid cell) */}
              <div className="hidden md:block col-span-2 row-span-2 col-start-11 row-start-1 bg-white rounded-xl shadow-xl z-30 p-4">
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-tshirt text-sm"></i>
                  </div>
                  <span className="font-bold text-black text-base">Style Hack</span>
                </div>
                <p className="text-sm text-gray-600">Layer oversized blazers over mini dresses for instant fall transition vibes!</p>
              </div>
              
              {/* Trend alert badge - desktop only (grid cell) */}
              <div className="hidden md:block col-span-2 row-span-2 col-start-1 row-start-11 bg-white rounded-xl shadow-xl z-30 p-4">
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center">
                    <i className="fas fa-bolt text-sm"></i>
                  </div>
                  <span className="font-bold text-black text-base">AI Trend Alert</span>
                </div>
                <p className="text-sm text-gray-600">Cargo pants + crop tops trending on TikTok with +245% engagement this week!</p>
                <div className="w-full bg-gray-200 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-black w-[75%]"></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-[10px] text-gray-500">Last week</span>
                  <span className="text-[10px] font-medium text-black">This week</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Gentle wave divider matching the screenshot */}
      <div className="absolute bottom-[-1px] left-0 right-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <path 
            d="M0,25 C320,90 480,10 720,30 C960,50 1120,75 1440,20 L1440,100 L0,100 Z" 
            fill="#F8F6F3"
          />
        </svg>
      </div>
    </section>
  );
}