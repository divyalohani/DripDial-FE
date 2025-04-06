import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "AI Trend Analysis",
    description: "Our AI scans millions of social posts, runway shows, and street style photos to identify emerging trends."
  },
  {
    number: "2",
    title: "Expert Curation",
    description: "Fashion professionals review AI findings and add context, styling tips, and exclusive insights."
  },
  {
    number: "3",
    title: "Personalized Delivery",
    description: "Receive your custom newsletter with trends, outfit ideas, and shopping picks tailored to your preferences."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="font-display text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How DripDial Works
          </motion.h2>
          <motion.p 
            className="text-lg opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI-powered fashion intelligence system works around the clock to keep you ahead of every trend.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div 
                className="w-16 h-16 bg-plum text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {step.number}
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="opacity-80">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
