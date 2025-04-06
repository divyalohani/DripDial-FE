import { motion } from "framer-motion";
import { Check, Shirt, ShoppingBag, Tag } from "lucide-react";
import { HashLink } from "./Navigation";

const features = [
  "Weekly trend forecasts and style predictions",
  "Outfit inspiration with shoppable links",
  "Budget-friendly finds under $30",
  "Closet organization and styling tips",
  "Exclusive deals and discounts",
  "AI Stylist add-on (Coming Soon)"
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-10 md:py-16 relative overflow-hidden">
      {/* Background color */}
      <div className="absolute inset-0 bg-[#FAFAFA] -z-10"></div>
      
      {/* More visible decorative gradient elements - with mobile adjustments */}
      <div className="absolute -top-[15%] -left-[15%] md:-top-[10%] md:-left-[10%] w-[80%] md:w-[60%] h-[50%] md:h-[70%] bg-[#C4B7BD]/15 rounded-full blur-[60px] md:blur-[80px]"></div>
      <div className="absolute -bottom-[15%] -right-[15%] md:-bottom-[10%] md:-right-[10%] w-[80%] md:w-[60%] h-[50%] md:h-[70%] bg-[#3D2C35]/10 rounded-full blur-[70px] md:blur-[100px]"></div>
      
      {/* More visible animated background elements - responsive sizing */}
      <motion.div 
        className="absolute left-[2%] top-[15%] w-[80vw] md:w-[500px] h-[80vw] md:h-[500px] bg-gradient-to-r from-[#C4B7BD]/20 to-transparent rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.3, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute right-[2%] bottom-[10%] w-[90vw] md:w-[500px] h-[90vw] md:h-[500px] bg-gradient-to-l from-[#3D2C35]/15 to-transparent rounded-full blur-[50px] md:blur-[70px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.25, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-4 text-[#3D2C35]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Affordable Pricing
          </motion.h2>
          <motion.p 
            className="text-lg text-[#8F8A95]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fashion intelligence that won't break the bank.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ 
            y: -3,
            boxShadow: "0 20px 40px -10px rgba(61, 44, 53, 0.12)",
            transition: { duration: 0.4 }
          }}
        >
          <div className="p-8 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-1 text-[#3D2C35]">DripDial Newsletter</h3>
                <p className="text-[#8F8A95]">Weekly fashion intelligence</p>
              </div>
              <div className="bg-[#3D2C35] text-white px-3 py-1 rounded-full text-xs font-medium">
                AI-Powered
              </div>
            </div>
            
            <div className="flex items-baseline mb-6">
              <span className="text-5xl font-display font-bold text-[#3D2C35]">$5</span>
              <span className="text-[#8F8A95] ml-2 text-lg">/month</span>
            </div>
            
            <div className="mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start py-2.5"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="mr-3 text-[#C4B7BD] mt-0.5">
                    <Check size={18} className={index === features.length - 1 ? 'opacity-60' : ''} />
                  </div>
                  <span className={`text-[#8F8A95] ${index === features.length - 1 ? 'opacity-70' : ''}`}>{feature}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <HashLink href="#subscribe" className="block w-full bg-[#3D2C35] text-white text-center px-6 py-4 rounded-lg font-semibold hover:bg-[#4A3641] transition-all">
                <motion.span 
                  initial={{ opacity: 1 }}
                  animate={{ 
                    opacity: [1, 0.8, 1],
                    scale: [1, 1.03, 1]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2,
                    ease: "easeInOut"
                  }}
                  className="inline-block"
                >
                  Subscribe Now
                </motion.span>
              </HashLink>
            </motion.div>
          </div>
          
          {/* Social proof */}
          <div className="border-t border-[#F0EEE9] px-8 py-4 flex items-center">
            <motion.div 
              className="flex -space-x-2 mr-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-7 h-7 rounded-full border-2 border-white bg-[#C4B7BD]/40"></div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-[#8F8A95]/40"></div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-[#3D2C35]/40"></div>
            </motion.div>
            <motion.p 
              className="text-xs text-[#8F8A95]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="font-medium">2,000+ trendsetters</span> already subscribed
            </motion.p>
          </div>
        </motion.div>
        
        {/* Limited time offer badge */}
        <motion.div
          className="absolute md:right-1/4 md:-bottom-3 bottom-2 right-1/2 transform translate-x-1/2 md:translate-x-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          animate={{ 
            y: [0, -8, 0],
            rotate: [-2, 2, -2]
          }}
          // Separate animation transition
          style={{ animationDuration: "6s", animationIterationCount: "infinite" }}
        >
          <div className="bg-[#3D2C35] text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#C4B7BD] animate-pulse"></div>
              <span>Limited Time Offer - Founding Members Only</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}