import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
    <section id="examples" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10 text-[#1A1A1A]">See What You'll Get</span>
            <motion.div 
              className="absolute bottom-2 left-0 right-0 h-3 bg-[#B4B4A4]/30 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.h2>
          <motion.p 
            className="text-lg text-[#7A7A7A]"
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
                <div className="flex space-x-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#C6BEB2] flex items-center justify-center text-white">
                    {reaction.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm leading-tight mb-1 text-[#4F4F4F]">"{reaction.text}"</p>
                    <span className="text-xs text-[#7A7A7A] font-medium">{reaction.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative overflow-visible py-8">
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#6C5F5B] hover:text-white transition-colors md:flex hidden"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-[#6C5F5B] hover:text-white transition-colors md:flex hidden"
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-chevron-right"></i>
          </motion.button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsletterExamples.map((newsletter, index) => (
              <motion.div 
                key={newsletter.id}
                className="newsletter-preview bg-white rounded-xl overflow-hidden shadow-md border border-[#E0DED9]"
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
                  <div className="w-full h-48 bg-[#F4F2EE] flex items-center justify-center">
                    <img 
                      src={newsletter.imageUrl} 
                      alt={newsletter.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Clean overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-bold bg-[#6C5F5B] text-white px-2 py-1 rounded-full">
                        {newsletter.category}
                      </span>
                      <span className="text-xs text-white font-medium">{newsletter.date}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold mb-2 text-[#1A1A1A]">{newsletter.title}</h3>
                  <p className="text-sm text-[#7A7A7A] mb-3 line-clamp-2">{newsletter.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {newsletter.tags.slice(0, 1).map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-[#F4F2EE] text-[#4F4F4F] rounded-full">{tag}</span>
                    ))}
                    <span className="text-xs text-[#7A7A7A] ml-auto flex items-center">
                      <i className="fas fa-heart mr-1"></i> {newsletter.stats.saves}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            {newsletterExamples.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeSlide ? 'bg-[#6C5F5B]' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(108, 95, 91, 0.2)" }}
          >
            <Link href="/newsletter-preview" className="inline-block bg-white text-[#6C5F5B] border border-[#6C5F5B] px-6 py-3 rounded-full font-medium hover:bg-[#6C5F5B] hover:text-white transition-all mr-4">
              <i className="fas fa-envelope-open mr-2"></i>
              See More Newsletter Examples
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(108, 95, 91, 0.3)" }}
            className="inline-block"
          >
            <Link href="#subscribe" className="inline-block bg-[#6C5F5B] text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
              <i className="fas fa-arrow-right mr-2"></i>
              Subscribe Now – Join 2K+ Trendsetters
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
