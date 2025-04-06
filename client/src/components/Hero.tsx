import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-[#f5efe6] to-[#fdf8ee]">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block bg-gradient-to-r from-amber-100 to-rose-100 px-5 py-2 rounded-full border border-amber-200 shadow-sm relative overflow-hidden"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <motion.span 
                className="absolute top-0 left-0 w-full h-full bg-white/20"
                animate={{ 
                  x: ["0%", "100%"],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              />
              <span className="flex items-center font-medium text-amber-900">
                <span className="inline-block mr-2 animate-pulse">⚡</span> 
                <span className="text-sm tracking-wider">JUST LAUNCHED: AI FASHION ORACLE</span>
              </span>
            </motion.div>
            
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 via-amber-600 to-amber-500">
                Predict the Trends
              </span>
              <motion.div 
                className="mt-2 text-amber-800"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Before They Happen
              </motion.div>
            </motion.h1>
            
            <motion.div 
              className="relative bg-white/70 backdrop-blur-sm p-4 rounded-lg border border-amber-100 shadow-inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.div
                className="absolute -right-2 -top-2 bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                AI-Powered
              </motion.div>
              <p className="text-lg text-amber-900">
                <span className="font-semibold">DripDial</span> analyzes 10M+ social posts weekly 
                to predict trends with <span className="font-semibold text-amber-600">97.3% accuracy</span>, 
                helping you stay <span className="italic">weeks ahead</span> of mainstream fashion.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div 
                className="bg-white rounded-lg p-3 shadow-sm border border-amber-100 flex items-start space-x-2"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-bolt text-lg"></i>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-amber-900">Early Access</h3>
                  <p className="text-sm text-amber-700">2-4 weeks before trends hit mainstream</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg p-3 shadow-sm border border-amber-100 flex items-start space-x-2"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-palette text-lg"></i>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-amber-900">Style Matched</h3>
                  <p className="text-sm text-amber-700">Personalized to your aesthetic preferences</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg p-3 shadow-sm border border-amber-100 flex items-start space-x-2"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-shopping-bag text-lg"></i>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-amber-900">Smart Shopping</h3>
                  <p className="text-sm text-amber-700">Affordable finds under $30 for each trend</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-lg p-3 shadow-sm border border-amber-100 flex items-start space-x-2"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                <motion.div 
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className="fas fa-crown text-lg"></i>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-amber-900">Exclusive Deals</h3>
                  <p className="text-sm text-amber-700">Subscriber-only discounts and drops</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <Link href="#subscribe">
                <motion.a 
                  className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-full font-medium text-center text-lg shadow-lg relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 15px 30px -5px rgba(251, 191, 36, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.span 
                    className="absolute top-0 left-0 w-full h-full bg-white/20"
                    animate={{ 
                      x: ["0%", "100%"],
                      opacity: [0, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 0.5
                    }}
                  />
                  <span className="relative flex items-center justify-center">
                    Subscribe Now 
                    <span className="ml-2 bg-white/20 text-white px-2 py-0.5 rounded text-sm">$5/month</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </motion.a>
              </Link>
              
              <motion.div 
                className="flex items-center space-x-3 bg-gradient-to-r from-amber-50 to-white p-2 pr-4 rounded-full shadow-sm border border-amber-100"
                animate={{ 
                  boxShadow: ["0 0 0 rgba(251, 191, 36, 0)", "0 0 8px rgba(251, 191, 36, 0.5)", "0 0 0 rgba(251, 191, 36, 0)"]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 1
                }}
              >
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <div className="text-sm">
                  <span className="font-medium text-amber-900">12,482 trendsetters</span> <br/>
                  <span className="text-xs text-amber-700">joined this month</span>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              className="mt-4 bg-amber-100 rounded-lg p-3 border border-amber-200 flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <div className="flex items-center justify-center bg-amber-50 rounded-full h-8 w-8 text-amber-600">
                <i className="fas fa-clock text-sm"></i>
              </div>
              <div className="text-amber-800 text-sm flex-1">
                <span className="font-semibold mr-1">Limited time offer:</span> 
                Subscribe today and get free access to our AI Fashion Advisor feature
              </div>
            </motion.div>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="absolute -top-12 -left-12 md:-top-16 md:-left-16 text-6xl md:text-8xl z-10 opacity-30 text-amber-600"
              initial={{ rotate: -10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ✨
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-12 -right-12 md:-bottom-16 md:-right-16 text-6xl md:text-8xl z-10 opacity-30 text-amber-600"
              initial={{ rotate: 10, opacity: 0 }}
              animate={{ rotate: 0, opacity: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              ✨
            </motion.div>
            
            <motion.div 
              className="relative z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[600px]">
                {/* Main image */}
                <motion.div 
                  className="col-span-8 row-span-4 rounded-xl overflow-hidden shadow-lg"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80" 
                    alt="Fashion model with stylish outfit" 
                    className="w-full h-full object-cover"
                  />
                  
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 flex items-center justify-center bg-amber-500 text-white rounded-full">
                        <i className="fab fa-instagram"></i>
                      </div>
                      <div className="text-sm">
                        <div className="font-medium text-amber-900">@fashion_trendsetter</div>
                        <div className="text-xs text-amber-700">Trending this week</div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Instagram style posts */}
                <motion.div 
                  className="col-span-4 row-span-2 rounded-xl overflow-hidden shadow-lg relative group"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80" 
                    alt="TikTok fashion influencer" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div className="flex items-center space-x-1">
                      <div className="h-5 w-5 flex items-center justify-center bg-pink-500 text-white rounded-full">
                        <i className="fab fa-tiktok text-xs"></i>
                      </div>
                      <span className="text-xs text-white">@tiktok_style</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="col-span-4 row-span-2 rounded-xl overflow-hidden shadow-lg relative group"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" 
                    alt="Fashion model" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div className="flex items-center space-x-1">
                      <div className="h-5 w-5 flex items-center justify-center bg-gradient-to-br from-amber-400 to-rose-600 text-white rounded-full">
                        <i className="fab fa-instagram text-xs"></i>
                      </div>
                      <span className="text-xs text-white">@fashion_week</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="col-span-4 row-span-2 rounded-xl overflow-hidden shadow-lg"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80" 
                    alt="Runway model" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                    <div className="flex items-center space-x-1">
                      <div className="h-5 w-5 flex items-center justify-center bg-blue-500 text-white rounded-full">
                        <i className="fas fa-tag text-xs"></i>
                      </div>
                      <span className="text-xs text-white">Louis Vuitton SS23</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="col-span-8 row-span-2 rounded-xl overflow-hidden shadow-lg"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80" 
                    alt="Street fashion" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full py-1 px-3 text-xs font-medium text-amber-900 flex items-center space-x-1">
                    <i className="fas fa-fire text-amber-500"></i>
                    <span>Street style trend</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-lg max-w-[240px] border border-amber-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center shadow-md"
                    animate={{ 
                      boxShadow: ["0 0 0 rgba(251, 191, 36, 0)", "0 0 8px rgba(251, 191, 36, 0.5)", "0 0 0 rgba(251, 191, 36, 0)"]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                    }}
                  >
                    <i className="fas fa-robot"></i>
                  </motion.div>
                  <span className="font-semibold text-amber-900">AI Trend Prediction</span>
                </div>
                <p className="text-sm text-amber-800">
                  Y2K platform boots detected in 247% more posts this week. Expected to hit mainstream in 3 weeks!
                </p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 right-8 bg-gradient-to-r from-amber-100 to-rose-100 p-3 rounded-xl shadow-md border border-amber-200 max-w-[200px]"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2 mb-1">
                  <motion.i 
                    className="fas fa-fire text-amber-500 text-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity,
                    }}
                  />
                  <div className="font-medium text-amber-900">ALMOST SOLD OUT</div>
                </div>
                <p className="text-xs text-amber-800">
                  Only <span className="font-semibold text-amber-700">87 spots left</span> at the introductory $5/month price!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
