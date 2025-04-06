import { motion } from "framer-motion";
import { HashLink } from "./Navigation";

const featuresData = [
  {
    icon: "fa-chart-line",
    title: "Trend Radar",
    description: "Real-time style updates pulled from TikTok, Instagram, Pinterest & runway shows, analyzed by our AI to spot emerging trends."
  },
  {
    icon: "fa-tshirt",
    title: "Outfit Inspiration",
    description: "Get curated looks with shoppable links, customized to your personal style preferences and budget constraints."
  },
  {
    icon: "fa-robot",
    title: "AI Style Forecasts",
    description: "Our AI analyzes millions of data points to predict which styles are about to explode in popularity."
  },
  {
    icon: "fa-magic",
    title: "Closet Hacks",
    description: "Learn how to style what you already own like a pro, with creative outfit combinations and seasonal updates."
  },
  {
    icon: "fa-tag",
    title: "Budget Buys",
    description: "Discover the perfect outfit under $30, with AI-curated affordable alternatives to designer looks."
  },
  {
    icon: "fa-user-alt",
    title: "Influencer Watch",
    description: "Stay connected with micro-influencers with big style energy, before they hit the mainstream."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-[#F8F6F3] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-72 h-72 rounded-full bg-gradient-to-br from-[#C4B7BD]/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-32 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-[#3D2C35]/5 to-transparent blur-3xl"></div>
      
      {/* Floating style elements */}
      <div className="hidden lg:block absolute top-40 right-[10%] w-24 h-24 rounded-full border border-dashed border-[#3D2C35]/20 animate-spin-slow"></div>
      <div className="hidden lg:block absolute bottom-40 left-[15%] w-16 h-16 rounded-full border border-dotted border-[#C4B7BD]/30 animate-spin-slow-reverse"></div>
      
      {/* Small decorative icons */}
      <div className="hidden lg:flex absolute top-1/4 left-[5%] w-10 h-10 rounded-full bg-white/80 shadow-sm items-center justify-center text-[#3D2C35]/70">
        <i className="fas fa-tshirt text-sm"></i>
      </div>
      <div className="hidden lg:flex absolute bottom-1/3 right-[8%] w-12 h-12 rounded-full bg-white/80 shadow-sm items-center justify-center text-[#3D2C35]/70">
        <i className="fas fa-shopping-bag text-sm"></i>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4 text-[#1D1D1F]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What You'll Get
          </motion.h2>
          <motion.p 
            className="text-lg text-[#8F8A95]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fashion moves fast. With DripDial, you'll move faster. Our AI-powered newsletter gives you the inside scoop on what's trending before it hits your feed.
          </motion.p>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-[#C4B7BD] bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <i className={`fas ${feature.icon} text-[#3D2C35] text-xl`}></i>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-[#1D1D1F]">{feature.title}</h3>
              <p className="text-[#8F8A95]">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 bg-[#3D2C35] text-white p-8 md:p-10 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex justify-between items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="flex items-center mb-3">
                <span className="bg-white text-[#3D2C35] text-xs font-bold px-3 py-1 rounded-full mr-3">COMING SOON</span>
                <h3 className="font-display text-2xl font-semibold text-white">AI Stylist Add-on</h3>
              </div>
              <p className="text-white text-opacity-90 mb-4">Send a photo of yourself or your outfit and get personalized feedback, suggestions, and styling tips from our AI stylist.</p>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm italic text-white">"Just like having a personal stylist in your pocket!"</p>
              </div>
            </div>
            <div>
              <HashLink href="/#subscribe" className="inline-block bg-white text-[#3D2C35] px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-md transform hover:-translate-y-1">
                Join Waitlist
              </HashLink>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
