import { motion } from "framer-motion";
import { Link } from "wouter";

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
    <section id="pricing" className="py-16 md:py-24 bg-[#3D2C35] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Simple, Affordable Pricing
          </motion.h2>
          <motion.p 
            className="text-lg text-white/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fashion intelligence that won't break the bank. Cancel anytime.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-lg mx-auto bg-[#F8F6F3] text-[#1D1D1F] rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="p-8 md:p-10">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-display text-2xl font-bold mb-1 text-[#1D1D1F]">DripDial Newsletter</h3>
                <p className="text-[#8F8A95]">Weekly fashion intelligence</p>
              </div>
              <div className="ai-badge text-white px-3 py-1 rounded-full text-sm font-medium"
                   style={{ background: "linear-gradient(90deg, #3D2C35, #8F8A95)" }}>
                AI-Powered
              </div>
            </div>
            
            <div className="flex items-end mb-6">
              <span className="text-4xl font-display font-bold text-[#1D1D1F]">$5</span>
              <span className="text-[#8F8A95] ml-1">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8 text-[#8F8A95]">
              {features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <i className={`fas fa-check-circle text-[#C4B7BD] mt-1 mr-3 ${index === features.length - 1 ? 'opacity-60' : ''}`}></i>
                  <span className={index === features.length - 1 ? 'opacity-60' : ''}>{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            <Link href="#subscribe">
              <motion.a 
                className="block w-full bg-[#3D2C35] text-white text-center px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(61, 44, 53, 0.2)" }}
              >
                Subscribe Now
              </motion.a>
            </Link>
            
            <p className="text-center text-sm text-[#8F8A95] mt-4">No contracts. Cancel anytime.</p>
          </div>
          
          <div className="bg-[#C4B7BD]/20 px-8 py-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#C4B7BD] transform rotate-45 translate-x-8 -translate-y-8"></div>
            <div className="absolute top-2 right-2 text-white transform rotate-45 text-xs font-bold">NEW</div>
            
            <h4 className="font-display font-bold text-lg mb-2 text-[#1D1D1F]">Founding Member Offer</h4>
            <p className="text-sm text-[#8F8A95]">Join now to lock in current pricing forever and get priority access to the AI Stylist feature when it launches.</p>
            
            <motion.div 
              className="mt-4 inline-block px-3 py-1 bg-[#3D2C35] text-white text-sm font-bold rounded-full"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Limited Time Offer
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
