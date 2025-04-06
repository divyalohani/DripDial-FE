import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqItems = [
  {
    question: "How often will I receive the newsletter?",
    answer: "DripDial is delivered once a week, typically every Monday morning. This gives you a head start on the week's fashion trends and outfit planning."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Absolutely! There are no contracts or commitments. You can cancel your subscription at any time with just a few clicks in your account settings."
  },
  {
    question: "How does the AI actually work?",
    answer: "Our proprietary AI system analyzes millions of data points from social media, fashion retailers, runway shows, and street style photography to identify emerging trends before they go mainstream. It can detect pattern shifts, color trends, and style movements with incredible accuracy."
  },
  {
    question: "Will this work for my personal style?",
    answer: "Yes! When you first subscribe, you'll complete a quick style quiz that helps our AI understand your preferences. Your newsletter will be personalized to your taste, whether you're into minimalist, bohemian, streetwear, or any other aesthetic."
  },
  {
    question: "What's the difference between DripDial and other fashion newsletters?",
    answer: "While other newsletters rely solely on human curation, DripDial combines AI technology with fashion expertise to identify trends earlier and more accurately. Our AI can process and analyze fashion data at a scale impossible for human editors, giving you truly cutting-edge insights."
  }
];

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Everything you need to know about DripDial's fashion intelligence newsletter.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto divide-y">
          {faqItems.map((item, index) => (
            <div key={index} className="py-6">
              <button 
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="font-display text-xl font-semibold">{item.question}</h3>
                <motion.i 
                  className={`fas ${openItem === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-plum`}
                  animate={{ rotate: openItem === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                ></motion.i>
              </button>
              <AnimatePresence>
                {openItem === index && (
                  <motion.div 
                    className="mt-4 opacity-80"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 0.8 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
