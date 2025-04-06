import { motion } from "framer-motion";
import { Link } from "wouter";

// Animated background elements
const FloatingElement = ({ delay, duration, size, left, top, className }: any) => (
  <motion.div
    className={`absolute rounded-full opacity-30 ${className}`}
    style={{ 
      width: size, 
      height: size,
      left: `${left}%`,
      top: `${top}%`,
      background: `linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))`,
      backdropFilter: "blur(5px)"
    }}
    animate={{
      y: [0, -15, 0],
      opacity: [0.2, 0.5, 0.2]
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      delay: delay,
      ease: "easeInOut"
    }}
  />
);

export default function Hero() {
  return (
    <section className="relative hero-gradient min-h-[85vh] flex items-center overflow-visible">
      {/* Animated background elements */}
      <FloatingElement delay={0} duration={5} size="120px" left={10} top={30} className="hidden md:block" />
      <FloatingElement delay={1} duration={7} size="180px" left={85} top={20} className="hidden md:block" />
      <FloatingElement delay={2} duration={6} size="100px" left={60} top={70} className="hidden md:block" />
      <FloatingElement delay={0.5} duration={8} size="150px" left={20} top={80} className="hidden md:block" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-[#3D2C35] text-white text-sm rounded-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              AI-Powered Fashion
            </motion.span>
            <motion.h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#1D1D1F]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Discover Trends Before They Go Viral
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-[#8F8A95]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              DripDial delivers TikTok & Instagram fashion trends, curated outfits, and style insights straight to your inbox every week.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-2 text-sm font-medium bg-[#F8F6F3]/70 backdrop-blur-sm py-2 px-3 rounded-lg border border-[#C4B7BD]/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="font-semibold text-[#3D2C35]">2,000+ trendsetters already subscribed</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#C4B7BD]/40"></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#C4B7BD]/60"></div>
                <div className="w-6 h-6 rounded-full border-2 border-white bg-[#C4B7BD]/80"></div>
              </div>
            </motion.div>
            
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <i className="fas fa-bolt text-[#8F8A95]"></i>
                <p className="text-[#8F8A95]">Weekly trend forecasts from TikTok & Instagram</p>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <i className="fas fa-tshirt text-[#8F8A95]"></i>
                <p className="text-[#8F8A95]">AI-curated outfit inspiration for your style</p>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <i className="fas fa-tags text-[#8F8A95]"></i>
                <p className="text-[#8F8A95]">Budget-friendly shopping picks under $30</p>
              </motion.div>
            </div>
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="#subscribe">
                <a className="bg-[#3D2C35] text-white px-8 py-4 rounded-full font-bold text-center hover:bg-opacity-90 transition-all hover:shadow-lg transform hover:-translate-y-1 inline-block">
                  Subscribe Now – Be First to Slay
                </a>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Top left image - Streetwear */}
              <motion.div 
                className="overflow-hidden rounded-xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Streetwear fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-xs font-semibold">street vibes</span>
                </div>
              </motion.div>
              
              {/* Top right image - Office chic */}
              <motion.div 
                className="overflow-hidden rounded-xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1603205319065-6c611f3c6e23?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Office chic fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-xs font-semibold">office chic</span>
                </div>
              </motion.div>
              
              {/* Bottom left image - Fall fits */}
              <motion.div 
                className="overflow-hidden rounded-xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Fall fits fashion inspiration" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-xs font-semibold">trend alert</span>
                </div>
              </motion.div>
              
              {/* Bottom right image - Runway inspired */}
              <motion.div 
                className="overflow-hidden rounded-xl shadow-xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800&q=80" 
                  alt="Runway inspired fashion" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <span className="text-white text-xs font-semibold">runway style</span>
                </div>
              </motion.div>
              
              {/* Floating badge 1 */}
              <motion.div 
                className="absolute -bottom-12 -left-6 bg-white p-3 rounded-xl shadow-xl max-w-[220px] z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#3D2C35] text-white flex items-center justify-center">
                    <i className="fas fa-bolt"></i>
                  </div>
                  <span className="font-medium text-[#1D1D1F]">AI Trend Alert</span>
                </div>
                <p className="text-sm text-[#8F8A95]">Cargo pants + crop tops trending on TikTok this week!</p>
              </motion.div>
              
              {/* Floating badge 2 */}
              <motion.div 
                className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-xl max-w-[220px] z-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#C4B7BD] text-[#3D2C35] flex items-center justify-center">
                    <i className="fas fa-tshirt"></i>
                  </div>
                  <span className="font-medium text-[#1D1D1F]">Style Tip</span>
                </div>
                <p className="text-sm text-[#8F8A95]">Layer oversized blazers over mini dresses for fall transition!</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Peeking element from next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-[#F8F6F3] rounded-t-[50px] shadow-lg"></div>
    </section>
  );
}
