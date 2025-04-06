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
    <section id="examples" className="py-16 md:py-24 bg-gradient-to-b from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-5xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="relative z-10">See What You'll Get</span>
            <motion.div 
              className="absolute bottom-2 left-0 right-0 h-3 bg-amber-200/50 -z-10"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            ></motion.div>
          </motion.h2>
          <motion.p 
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Preview the exclusive fashion content that lands in your inbox every week — AI-curated trends, outfit inspo, and shopping picks before they go viral.
          </motion.p>
        </div>

        {/* TikTok-style reaction bubbles */}
        <motion.div 
          className="relative mb-12 hidden md:block" 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex justify-between max-w-5xl mx-auto">
            {reactions.map((reaction, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 max-w-[250px] relative"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (index * 0.2), duration: 0.5 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex space-x-3 items-start">
                  <img 
                    src={reaction.avatar} 
                    alt={reaction.name} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-amber-200"
                  />
                  <div>
                    <p className="text-sm leading-tight mb-1">{reaction.text}</p>
                    <span className="text-xs text-gray-500">{reaction.name}</span>
                  </div>
                </div>
                <div className="absolute -bottom-2 left-5 w-4 h-4 bg-white rotate-45 transform"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center hover:bg-amber-700 hover:text-white transition-colors md:flex hidden"
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <i className="fas fa-chevron-left"></i>
          </motion.button>
          
          <motion.button 
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm shadow-lg rounded-full flex items-center justify-center hover:bg-amber-700 hover:text-white transition-colors md:flex hidden"
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
                className="newsletter-preview bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative">
                  <img 
                    src={newsletter.imageUrl} 
                    alt={newsletter.title} 
                    className="w-full h-48 object-cover"
                  />
                  {/* TikTok-style overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-3">
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-bold ${
                        newsletter.category === "TRENDING NOW" ? "bg-amber-600" : 
                        newsletter.category === "BUDGET SLAY" ? "bg-green-600" : 
                        newsletter.category === "STYLE HACK" ? "bg-amber-800" :
                        "bg-amber-500"
                      } text-white px-2 py-1 rounded-full`}>
                        {newsletter.category}
                      </span>
                      <span className="text-xs text-white font-medium bg-black/40 px-2 py-1 rounded-full">{newsletter.date}</span>
                    </div>
                  </div>
                  
                  {/* TikTok-style engagement metrics */}
                  <div className="absolute right-3 top-3 flex flex-col space-y-2">
                    <div className="bg-black/40 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <i className="fas fa-heart"></i>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs font-medium text-center">
                      {newsletter.stats.saves}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold mb-2">{newsletter.title}</h3>
                  <p className="text-sm opacity-80 mb-3 line-clamp-2">{newsletter.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {newsletter.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-amber-100 text-amber-800 rounded-full whitespace-nowrap">{tag}</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 flex items-center">
                      <i className="fas fa-eye mr-1"></i> {newsletter.stats.views}
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
                className={`w-2 h-2 rounded-full ${index === activeSlide ? 'bg-amber-700' : 'bg-gray-300'}`}
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
          <Link href="/newsletter-preview">
            <motion.a 
              className="inline-block bg-white/80 backdrop-blur-sm text-amber-700 border border-amber-700 px-6 py-3 rounded-full font-medium hover:bg-amber-700 hover:text-white transition-all mr-4"
              whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(180, 83, 9, 0.2)" }}
            >
              <i className="fas fa-envelope-open mr-2"></i>
              See More Newsletter Examples
            </motion.a>
          </Link>
          <Link href="#subscribe">
            <motion.a 
              className="inline-block bg-amber-700 text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all"
              whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(180, 83, 9, 0.3)" }}
            >
              <i className="fas fa-arrow-right mr-2"></i>
              Subscribe Now – Join 2K+ Trendsetters
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
