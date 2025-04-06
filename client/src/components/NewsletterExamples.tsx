import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { HashLink } from "./Navigation";

// Enhanced newsletter examples with more Gen Z appeal
const newsletterExamples = [
  {
    id: 1,
    title: "TikTok's Viral Coquette Aesthetic",
    category: "TRENDING NOW",
    date: "THIS WEEK",
    description: "Our AI spotted this aesthetic growing 500% on TikTok. Here's how to nail the look with bows, lace, and soft pinks...",
    imageUrl: "https://images.unsplash.com/photo-1568252542512-9fe8fe6a8ce8?auto=format&fit=crop&w=600&h=400",
    stats: {
      views: "4.2M",
      saves: "215K"
    },
    tags: ["#CoquetteAesthetic", "#BowTrend"]
  },
  {
    id: 2,
    title: "5 Complete 'Fits Under $50",
    category: "BUDGET SLAY",
    date: "JUST DROPPED",
    description: "AI-curated complete looks from affordable stores that give major main character energy without breaking the bank...",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&h=400",
    stats: {
      views: "2.8M",
      saves: "143K"
    },
    tags: ["#BudgetFashion", "#ThriftFinds"]
  },
  {
    id: 3,
    title: "Transition Your Summer Pieces to Fall",
    category: "STYLE HACK",
    date: "AUTUMN PREP",
    description: "Don't pack away your fave summer pieces! Our AI stylist shows how to layer and mix them for the perfect fall transition...",
    imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=600&h=400",
    stats: {
      views: "3.5M",
      saves: "189K"
    },
    tags: ["#FallTransition", "#LayeringTips"]
  },
  {
    id: 4,
    title: "Closet Clean-Out: What to Keep & Toss",
    category: "CLOSET RESET",
    date: "SEASONAL GUIDE",
    description: "Our AI analyzed this season's trends to help you decide which pieces to keep, store, or donate for a fresh wardrobe...",
    imageUrl: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=600&h=400",
    stats: {
      views: "2.1M",
      saves: "95K"
    },
    tags: ["#ClosetCleanout", "#FreshStart"]
  }
];

// User testimonials/reactions
const reactions = [
  { 
    text: "the newsletter literally predicted the ballet flat comeback a month before it blew up on my fyp!", 
    name: "julia, 19",
    avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=150&h=150"
  },
  { 
    text: "finally a fashion newsletter that actually gets my style! the outfit inspo is fire 🔥", 
    name: "mia, 23",
    avatar: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&w=150&h=150"
  },
  { 
    text: "saved so much $ using the budget finds section last month!", 
    name: "zoe, 21",
    avatar: "https://images.unsplash.com/photo-1618641986557-1ecd230959aa?auto=format&fit=crop&w=150&h=150"
  }
];

export default function NewsletterExamples() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === newsletterExamples.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? newsletterExamples.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section id="examples" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background color and gradient overlay */}
      <div className="absolute inset-0 bg-[#FAFAFA] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-[70%] bg-gradient-to-b from-white to-transparent -z-9"></div>
      
      {/* Large more visible gradient blobs - responsive sizing */}
      <div className="absolute -left-[15%] top-[5%] w-[80%] md:w-[70%] h-[40%] md:h-[50%] bg-[#C4B7BD]/15 rounded-full blur-[60px] md:blur-[80px] -z-5"></div>
      <div className="absolute -right-[15%] bottom-[5%] w-[80%] md:w-[70%] h-[40%] md:h-[50%] bg-[#3D2C35]/10 rounded-full blur-[60px] md:blur-[90px] -z-5"></div>
      
      {/* More visible animated gradient elements - responsive sizing */}
      <motion.div 
        className="absolute right-[5%] top-[15%] w-[80vw] md:w-[600px] h-[80vw] md:h-[600px] bg-gradient-to-tr from-[#C4B7BD]/20 to-transparent rounded-full blur-[50px] md:blur-[70px]"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.2, 0.35],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      
      <motion.div 
        className="absolute left-[2%] bottom-[10%] w-[85vw] md:w-[550px] h-[85vw] md:h-[550px] bg-gradient-to-bl from-[#3D2C35]/15 to-transparent rounded-full blur-[50px] md:blur-[70px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
      
      {/* Extra accent element - responsive sizing */}
      <motion.div
        className="absolute left-1/2 top-[30%] transform -translate-x-1/2 w-[100vw] md:w-[800px] h-[200px] md:h-[300px] bg-gradient-to-r from-[#C4B7BD]/5 via-[#3D2C35]/5 to-[#C4B7BD]/5 rounded-full blur-[80px] md:blur-[120px]"
        animate={{
          opacity: [0.2, 0.15, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-[#1D1D1F]">See What You'll Get</span>
            <motion.div 
              className="absolute bottom-2 left-0 right-0 h-3 bg-[#C4B7BD]/30 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#8F8A95]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Preview the exclusive fashion content that lands in your inbox every week — AI-curated trends, outfit inspo, and shopping picks before they go viral.
          </motion.p>
        </div>

        {/* Simplified reaction bubbles */}
        <motion.div 
          className="relative mb-10 hidden md:block" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-center gap-8 max-w-4xl mx-auto">
            {reactions.map((reaction, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-md p-4 max-w-[250px] border border-[#E0DED9]"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex gap-3 items-start">
                  <div className="min-w-8 w-8 h-8 rounded-full bg-[#C4B7BD]/90 flex items-center justify-center text-white shadow-sm">
                    {reaction.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm leading-tight mb-1 text-[#1D1D1F]">"{reaction.text}"</p>
                    <span className="text-xs text-[#8F8A95] font-medium">{reaction.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative overflow-visible py-8">
          {/* Mobile carousel nav buttons */}
          <div className="flex justify-between items-center mb-4 md:hidden">
            <motion.button 
              className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#3D2C35] hover:bg-[#3D2C35] hover:text-white transition-colors"
              onClick={prevSlide}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chevron-left"></i>
            </motion.button>
            
            <span className="text-xs font-medium text-[#8F8A95]">
              Swipe to explore
            </span>
            
            <motion.button 
              className="w-9 h-9 bg-white shadow-md rounded-full flex items-center justify-center text-[#3D2C35] hover:bg-[#3D2C35] hover:text-white transition-colors"
              onClick={nextSlide}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-chevron-right"></i>
            </motion.button>
          </div>
          
          {/* Desktop nav buttons */}
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#3D2C35] hover:text-white transition-colors md:flex hidden"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#3D2C35] hover:text-white transition-colors md:flex hidden"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>

          {/* Mobile horizontal scroll for cards */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 flex flex-nowrap overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-x-visible md:pb-0 snap-x snap-mandatory no-scrollbar">
            {newsletterExamples.map((newsletter, index) => (
              <motion.div 
                key={newsletter.id}
                className="newsletter-preview bg-white rounded-xl overflow-hidden shadow-md border border-[#E0DED9] flex-shrink-0 w-[85%] md:w-auto mr-4 md:mr-0 snap-start snap-always"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-[#C4B7BD]/40 to-[#F8F6F3] flex items-center justify-center overflow-hidden">
                    {/* Add stylish fallback content when image fails to load */}
                    <div className="absolute inset-0 flex items-center justify-center text-[#3D2C35]">
                      <div className="text-center px-4 bg-white/30 backdrop-blur-sm py-3 rounded-lg shadow-sm w-5/6">
                        <div className="text-xl font-bold mb-1 uppercase tracking-wider">{newsletter.category}</div>
                        <div className="text-sm font-medium">{newsletter.title}</div>
                      </div>
                    </div>
                    <img 
                      src={newsletter.imageUrl} 
                      alt={newsletter.title} 
                      className="w-full h-full object-cover relative z-10"
                      loading="lazy"
                      onError={(e) => {
                        // Hide the image on error and show the fallback content
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Clean overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold bg-[#3D2C35] text-white px-2 py-1 rounded-full">
                        {newsletter.category}
                      </span>
                      <span className="text-xs text-white font-medium">{newsletter.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold mb-2 text-[#1D1D1F]">{newsletter.title}</h3>
                  <p className="text-sm text-[#8F8A95] mb-3 line-clamp-2">{newsletter.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {newsletter.tags.slice(0, 1).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#F8F6F3] text-[#8F8A95] rounded-full">{tag}</span>
                    ))}
                    <span className="text-xs text-[#8F8A95] ml-auto flex items-center">
                      <i className="fas fa-heart mr-1"></i> {newsletter.stats.saves}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center space-x-2 mt-6 md:hidden">
            {newsletterExamples.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${index === activeSlide ? 'bg-[#3D2C35] w-4' : 'bg-[#C4B7BD]/50'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(61, 44, 53, 0.2)" }}
            className="w-full max-w-md"
          >
            <Link href="/newsletter-preview" className="flex items-center justify-center w-full bg-white text-[#3D2C35] border border-[#3D2C35] px-6 py-3 rounded-full font-medium hover:bg-[#3D2C35] hover:text-white transition-all">
              <i className="fas fa-envelope-open mr-2"></i>
              See More Newsletter Examples
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(61, 44, 53, 0.3)" }}
            className="w-full max-w-md"
          >
            <HashLink href="/#subscribe" className="flex items-center justify-center w-full bg-[#3D2C35] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              <i className="fas fa-arrow-right mr-2"></i>
              Subscribe Now – Join 2K+ Trendsetters
            </HashLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
