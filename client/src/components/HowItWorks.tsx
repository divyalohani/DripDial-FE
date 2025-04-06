import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, PenTool, Zap } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "AI Trend Analysis",
    description: "Our AI scans millions of social posts, runway shows, and street style photos to identify emerging trends.",
    icon: TrendingUp,
    bgGradient: "from-[#C4B7BD] to-[#3D2C35]"
  },
  {
    number: "2",
    title: "Expert Curation",
    description: "Fashion professionals review AI findings and add context, styling tips, and exclusive insights.",
    icon: PenTool,
    bgGradient: "from-[#3D2C35] to-[#8F8A95]"
  },
  {
    number: "3",
    title: "Personalized Delivery",
    description: "Receive your custom newsletter with trends, outfit ideas, and shopping picks tailored to your preferences.",
    icon: Zap,
    bgGradient: "from-[#8F8A95] to-[#C4B7BD]"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-28 bg-[#F8F6F3] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4B7BD] via-[#3D2C35] to-[#8F8A95]"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8F8A95] via-[#C4B7BD] to-[#3D2C35]"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#C4B7BD]/20 text-[#3D2C35] text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Our Process
          </motion.div>
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#1D1D1F]"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            How DripDial Works
          </motion.h2>
          <motion.p 
            className="text-lg text-[#8F8A95]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our AI-powered fashion intelligence system works around the clock to keep you ahead of every trend.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-16 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-[#C4B7BD] via-[#3D2C35] to-[#C4B7BD] z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center relative z-10 bg-white rounded-xl p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(61, 44, 53, 0.15)",
                transition: { duration: 0.2 }
              }}
            >
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${step.bgGradient} text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold shadow-lg transform -mt-14`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <step.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#3D2C35]">{step.title}</h3>
              <p className="text-[#8F8A95] mb-4">{step.description}</p>
              
              <div className="inline-flex items-center text-[#3D2C35] font-medium">
                <span className="mr-1">Step {step.number}</span>
                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
