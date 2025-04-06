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
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C4B7BD] via-[#3D2C35] to-[#8F8A95]"></div>
      
      {/* Decorative bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8F8A95] via-[#C4B7BD] to-[#3D2C35]"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-[5%] left-[5%] w-40 h-40 rounded-full bg-[#C4B7BD]/5 blur-3xl"></div>
      <div className="absolute bottom-[15%] right-[10%] w-56 h-56 rounded-full bg-[#3D2C35]/5 blur-3xl"></div>
      <div className="absolute top-[30%] right-[20%] w-32 h-32 rounded-full bg-[#8F8A95]/5 blur-3xl"></div>
      
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
          {/* Decorative elements */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] z-0">
            <svg height="2" width="100%" className="absolute top-0">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C4B7BD" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3D2C35" />
                  <stop offset="100%" stopColor="#C4B7BD" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path 
                d="M0,1 C150,1 150,1 300,0.5 S450,0 600,0.5 S750,1 900,1" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none" 
                strokeDasharray="8 4"
              />
            </svg>
            
            {/* Small decorative circles */}
            <div className="absolute top-[-4px] left-[25%] w-2 h-2 rounded-full bg-[#3D2C35]"></div>
            <div className="absolute top-[-4px] left-[50%] w-2 h-2 rounded-full bg-[#3D2C35]"></div>
            <div className="absolute top-[-4px] left-[75%] w-2 h-2 rounded-full bg-[#3D2C35]"></div>
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center relative z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-md border border-[#C4B7BD]/20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgb3BhY2l0eT0iMC4wNSI+PGRlZnM+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDUgQyAwIDMuOSAxLjQgMyAyLjUgMyBDIDMuNiAzIDUgMy45IDUgNSBDIDUgNi4xIDMuNiA3IDIuNSA3IEMgMS40IDcgMCA2LjEgMCA1IFoiIGZpbGw9ImN1cnJlbnRDb2xvciI+PC9wYXRoPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSI+PC9yZWN0Pjwvc3ZnPg==')]"
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
                className="w-24 h-24 relative mx-auto mb-6 transform -mt-16"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#C4B7BD] opacity-50 animate-[spin_20s_linear_infinite]"></div>
                
                {/* Background gradient circle */}
                <div className={`absolute inset-1 bg-gradient-to-br ${step.bgGradient} rounded-full shadow-lg flex items-center justify-center`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Small accent dot */}
                <div className="absolute top-1 right-2 w-3 h-3 bg-white rounded-full shadow-md"></div>
                
                {/* Step number badge */}
                <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-white text-[#3D2C35] rounded-full border-2 border-[#C4B7BD] flex items-center justify-center font-bold text-sm shadow-md">
                  {step.number}
                </div>
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#3D2C35]">{step.title}</h3>
              <p className="text-[#8F8A95] mb-6">{step.description}</p>
              
              <div className="pt-4 border-t border-dashed border-[#C4B7BD]/30">
                <motion.button 
                  className="inline-flex items-center justify-center gap-2 text-[#3D2C35] font-medium hover:text-[#3D2C35]/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="mr-1">Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
