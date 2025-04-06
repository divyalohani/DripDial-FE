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
                {/* No overlay - pure video content */}
                
                {/* Top user profile bar - almost invisible */}
                <div className="absolute top-2 left-2 right-2 flex items-center space-x-2 bg-transparent p-1.5 rounded-lg z-20">
                  <motion.div 
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.username.charAt(0).toUpperCase()}
                  </motion.div>
                  <div className="flex-1">
                    <div className="text-white text-xs font-semibold flex items-center">
                      {post.username}
                      <motion.div 
                        className="ml-1 w-3 h-3 rounded-full bg-blue-500 flex items-center justify-center"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <i className="fas fa-check text-[6px] text-white"></i>
                      </motion.div>
                    </div>
                    <div className="text-[9px] text-gray-300">{post.location}</div>
                  </div>
                  <motion.button 
                    className="text-white bg-pink-500 text-[10px] px-2 py-0.5 rounded-full font-medium"
                    whileHover={{ scale: 1.05, backgroundColor: "#db2777" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Follow
                  </motion.button>
                </div>
                
                {/* Fashion model showcasing outfit - USING IMAGES INSTEAD OF VIDEOS */}
                <motion.div
                  className="absolute inset-0 overflow-hidden"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Using high-quality fashion images */}
                  <img 
                    className="absolute inset-0 w-full h-full object-cover"
                    src={post.imageUrl}
                    alt={post.outfit}
                    key={post.id}
                  />
                </motion.div>
                
                {/* Outfit tag label - very minimal */}
                <motion.div
                  className="absolute left-3 top-[75%] z-20 bg-black/10 px-3 py-1.5 rounded-lg border-l-2 border-pink-500"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 0.9, x: 0 }}
                  transition={{ delay: post.delay + 0.5, duration: 0.5 }}
                >
                  <div className="text-white text-sm font-bold">{post.outfit}</div>
                </motion.div>
                
                {/* LIVE indicator - very minimal */}
                <motion.div 
                  className="absolute top-3 right-3 flex items-center space-x-1 px-2 py-0.5 bg-transparent rounded-full z-20"
                  animate={{ opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div 
                    className="w-2 h-2 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <span className="text-white text-[10px] font-semibold text-shadow-sm">LIVE</span>
                </motion.div>
                
                {/* Username pill at bottom - even more transparent */}
                <motion.div 
                  className="absolute bottom-3 left-3 z-20 flex items-center space-x-2 bg-black/15 py-1.5 px-3 rounded-full"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.9, y: 0 }}
                  transition={{ delay: post.delay + 0.2 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    {post.username.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-white text-sm font-semibold text-shadow-sm">{post.username}</div>
                </motion.div>
                
                {/* Shop button - almost invisible */}
                <motion.div 
                  className="absolute bottom-3 right-3 bg-black/20 text-white px-3 py-1 rounded-full font-medium text-xs z-20 flex items-center space-x-1"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 0.7, y: 0 }}
                  transition={{ delay: post.delay + 0.4 }}
                >
                  <i className="fas fa-shopping-bag text-[10px]" />
                  <span className="text-shadow-sm">Shop</span>
                </motion.div>
                
                {/* Animated hearts/likes floating up */}
                <div className="absolute left-[20%] bottom-16 h-20">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={`heart-${post.id}-${i}`}
                      className="absolute text-pink-500 text-xs"
                      initial={{ opacity: 0, y: 0 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        y: -50,
                        x: Math.random() * 20 - 10
                      }}
                      transition={{ 
                        duration: 2,
                        delay: post.delay + i * 0.5,
                        repeat: Infinity,
                        repeatDelay: post.duration - 2
                      }}
                    >
                      <i className="fas fa-heart" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Feed scrolling indicator */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gray-700 overflow-hidden z-30"
            animate={{ opacity: [0, 1] }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-pink-500 to-purple-500"
              animate={{ width: ["0%", "100%"] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        
        {/* App interface buttons at bottom - almost invisible */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around items-center py-1 border-t border-gray-800/10 bg-black/15 z-20">
          {["home", "search", "plus", "inbox", "user"].map((icon, i) => (
            <motion.div 
              key={icon}
              className="text-gray-300 text-[10px]"
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