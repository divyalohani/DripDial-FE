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
            <motion.span 
              className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm rounded-full font-medium border border-amber-200"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: 1.5 
              }}
            >
              <span className="mr-2">✨</span> AI-POWERED FASHION CURATION
            </motion.span>
            <motion.h1 
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your Stylish Future, <br/>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                Delivered Weekly
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-amber-900/70 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              First-access to emerging trends before they hit mainstream. <span className="font-medium">Be the trendsetter, not the follower.</span>
            </motion.p>
            
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <i className="fas fa-chart-line text-amber-700"></i>
                </div>
                <p className="text-lg"><span className="font-medium">97% accuracy</span> predicting viral fashion trends</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <i className="fas fa-tshirt text-amber-700"></i>
                </div>
                <p className="text-lg"><span className="font-medium">AI-curated</span> outfit inspiration for your unique style</p>
              </motion.div>
              
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <i className="fas fa-tag text-amber-700"></i>
                </div>
                <p className="text-lg"><span className="font-medium">Insider deals</span> on limited drops & collaborations</p>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="pt-6 flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link href="#subscribe">
                <motion.a 
                  className="bg-amber-600 text-white px-8 py-4 rounded-full font-medium text-center text-lg shadow-lg shadow-amber-300/50 hover:shadow-xl hover:shadow-amber-400/50 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center">
                    Subscribe Now 
                    <span className="ml-2 text-amber-200">$5/month</span>
                    <i className="fas fa-arrow-right ml-2"></i>
                  </span>
                </motion.a>
              </Link>
              
              <motion.div 
                className="flex items-center space-x-1 text-amber-700 bg-amber-100 px-4 py-2 rounded-full"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <span className="text-sm">Join 12,000+ trendsetters</span>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative grid grid-cols-4 grid-rows-3 gap-3 h-[550px]">
              {/* Image collage */}
              <motion.div 
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80" 
                  alt="Fashion model" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80" 
                  alt="Street fashion" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80" 
                  alt="Runway model" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&q=80" 
                  alt="Fashion outfit" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                className="col-span-4 row-span-1 rounded-2xl overflow-hidden shadow-lg"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80" 
                  alt="Fashion week" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg max-w-[220px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center">
                    <i className="fas fa-robot"></i>
                  </div>
                  <span className="font-medium text-amber-800">AI Trend Alert</span>
                </div>
                <p className="text-sm">Oversized blazers with statement shoulders are trending 243% this week!</p>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-amber-50 p-3 rounded-xl shadow-lg border border-amber-200"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <div className="flex items-center space-x-2">
                  <i className="fas fa-fire text-amber-500 text-lg"></i>
                  <div>
                    <div className="text-xs text-amber-600 font-medium">TRENDING NOW</div>
                    <div className="text-amber-800 font-medium">#Y2Krevival</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
