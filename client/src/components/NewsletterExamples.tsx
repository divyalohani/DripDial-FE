import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const newsletterExamples = [
  {
    id: 1,
    title: "Summer's Hottest Accessory Trend",
    category: "TREND ALERT",
    date: "JUNE 12",
    description: "Our AI has spotted a 300% increase in oversized sunglasses across Instagram. Here's how to style them...",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=400",
    tags: ["#Y2KRevival", "#SummerStyle"]
  },
  {
    id: 2,
    title: "5 Complete Outfits Under $100",
    category: "BUDGET BUYS",
    date: "JUNE 5",
    description: "Our AI scoured thousands of retailers to find these complete looks that won't break the bank...",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&h=400",
    tags: ["#BudgetFashion", "#StyleDeals"]
  },
  {
    id: 3,
    title: "10 Ways to Style Your White Tee",
    category: "CLOSET HACKS",
    date: "MAY 29",
    description: "Transform this wardrobe basic into 10 completely different looks with these AI-generated styling ideas...",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=400",
    tags: ["#CapsulaWardrobe", "#StyleTips"]
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
    <section id="examples" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Newsletter Previews
          </motion.h2>
          <motion.p 
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get a taste of what lands in your inbox when you subscribe to DripDial. Each edition is thoughtfully curated with AI-powered insights.
          </motion.p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 md:flex hidden">
            <button 
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-plum hover:text-white transition-colors"
              onClick={prevSlide}
            >
              <i className="fas fa-chevron-left"></i>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 md:flex hidden">
            <button 
              className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:bg-plum hover:text-white transition-colors"
              onClick={nextSlide}
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletterExamples.map((newsletter, index) => (
              <motion.div 
                key={newsletter.id}
                className="newsletter-preview bg-white rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{
                  transform: "perspective(1000px) rotateY(-5deg)",
                  transition: "all 0.3s ease"
                }}
                whileHover={{
                  translateY: -5,
                  rotateY: 0,
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)"
                }}
              >
                <img 
                  src={newsletter.imageUrl} 
                  alt={newsletter.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className={`text-xs font-medium ${
                      newsletter.category === "TREND ALERT" ? "bg-plum" : 
                      newsletter.category === "BUDGET BUYS" ? "bg-green-600" : 
                      "bg-blue-600"
                    } text-white px-2 py-1 rounded-full`}>
                      {newsletter.category}
                    </span>
                    <span className="text-xs text-gray-500">{newsletter.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{newsletter.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{newsletter.description}</p>
                  <div className="flex space-x-2">
                    {newsletter.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-beige rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {newsletterExamples.map((_, index) => (
              <button 
                key={index}
                className={`w-2 h-2 rounded-full ${index === activeSlide ? 'bg-plum' : 'bg-gray-300'}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/newsletter-preview">
            <motion.a 
              className="inline-block bg-white text-plum border border-plum px-6 py-3 rounded-full font-medium hover:bg-plum hover:text-white transition-all mr-4"
              whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(66, 3, 44, 0.1)" }}
            >
              View Full Newsletters
            </motion.a>
          </Link>
          <Link href="#subscribe">
            <motion.a 
              className="inline-block bg-plum text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
              whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(66, 3, 44, 0.2)" }}
            >
              Get Weekly Fashion Intelligence
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
}
