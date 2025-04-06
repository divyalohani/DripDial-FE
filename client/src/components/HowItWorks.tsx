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

        <div className="grid md:grid-cols-3 gap-16 md:gap-12 relative">
          {/* Enhanced connecting elements */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] z-0">
            {/* Main connecting path */}
            <svg height="4" width="100%" className="absolute top-0">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C4B7BD" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#3D2C35" />
                  <stop offset="100%" stopColor="#C4B7BD" stopOpacity="0.4" />
                </linearGradient>
                
                {/* Moving dash animation */}
                <pattern id="moving-dash" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
                  <animateTransform 
                    attributeName="patternTransform"
                    type="translate"
                    from="0 0"
                    to="20 0"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <rect x="0" y="0" width="10" height="2" fill="#3D2C35" fillOpacity="0.3" />
                </pattern>
              </defs>
              
              {/* Base path */}
              <path 
                d="M0,2 C150,3 150,1 300,1.5 S450,2 600,1.5 S750,1 900,2" 
                stroke="url(#lineGradient)" 
                strokeWidth="1.5" 
                fill="none"
              />
              
              {/* Animated overlay */}
              <path 
                d="M0,2 C150,3 150,1 300,1.5 S450,2 600,1.5 S750,1 900,2" 
                stroke="url(#moving-dash)" 
                strokeWidth="1.5" 
                fill="none"
                strokeOpacity="0.6"
              />
            </svg>
            
            {/* Decorative animated dots/circles */}
            <motion.div 
              className="absolute top-[-5px] left-[25%] w-3 h-3 rounded-full bg-gradient-to-br from-[#C4B7BD] to-[#3D2C35] shadow-sm"
              animate={{ 
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 0 rgba(61, 44, 53, 0.2)",
                  "0 0 8px rgba(61, 44, 53, 0.4)",
                  "0 0 0 rgba(61, 44, 53, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.div 
              className="absolute top-[-5px] left-[50%] w-3 h-3 rounded-full bg-gradient-to-br from-[#3D2C35] to-[#8F8A95] shadow-sm"
              animate={{ 
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 0 rgba(61, 44, 53, 0.2)",
                  "0 0 8px rgba(61, 44, 53, 0.4)",
                  "0 0 0 rgba(61, 44, 53, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            
            <motion.div 
              className="absolute top-[-5px] left-[75%] w-3 h-3 rounded-full bg-gradient-to-br from-[#8F8A95] to-[#C4B7BD] shadow-sm"
              animate={{ 
                y: [0, -4, 0],
                boxShadow: [
                  "0 0 0 rgba(61, 44, 53, 0.2)",
                  "0 0 8px rgba(61, 44, 53, 0.4)",
                  "0 0 0 rgba(61, 44, 53, 0.2)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="text-center relative z-10 bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-8 pt-20 shadow-md border border-[#C4B7BD]/20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjAyIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1IiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDAgNSBDIDAgMy45IDEuNCAzIDIuNSAzIEMgMy42IDMgNSAzLjkgNSA1IEMgNSA2LjEgMy42IDcgMi41IDcgQyAxLjQgNyAwIDYuMSAwIDUgWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIj48L3JlY3Q+PC9zdmc+')]"
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
                className="w-28 h-28 relative mx-auto mb-12 transform -mt-20"
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Multiple decorative rings with different speeds */}
                <div className="absolute inset-[-10px] rounded-full border-[2.5px] border-dashed border-[#C4B7BD] opacity-40 animate-[spin_25s_linear_infinite]"></div>
                <div className="absolute inset-[-5px] rounded-full border-[1.5px] border-dotted border-[#3D2C35] opacity-30 animate-[spin_18s_linear_infinite_reverse]"></div>
                <div className="absolute inset-0 rounded-full border border-[#C4B7BD]/40 opacity-70 shadow-[0_0_15px_rgba(196,183,189,0.3)] animate-pulse"></div>
                
                {/* Outer glow effect */}
                <motion.div 
                  className="absolute inset-[1px] rounded-full bg-gradient-to-br from-white/50 to-transparent opacity-40 blur-[1px]"
                  animate={{ opacity: [0.4, 0.8, 0.4] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Sparkle elements */}
                <motion.div 
                  className="absolute w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)] top-[8%] right-[12%]"
                  animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <motion.div 
                  className="absolute w-2 h-2 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.7)] bottom-[18%] left-[10%]"
                  animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                
                <motion.div 
                  className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_3px_rgba(255,255,255,0.6)] top-[30%] left-[12%]"
                  animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.4, 0.9, 0.4] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                
                {/* Background gradient circle with enhanced pulse effect */}
                <motion.div
                  className={`absolute inset-3 bg-gradient-to-br ${step.bgGradient} rounded-full shadow-lg flex items-center justify-center overflow-hidden`}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 rgba(61, 44, 53, 0.3)", 
                      "0 0 15px rgba(61, 44, 53, 0.6)", 
                      "0 0 5px rgba(61, 44, 53, 0.4)",
                      "0 0 0 rgba(61, 44, 53, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Enhanced shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                    animate={{ x: ["-120%", "120%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  />
                  
                  {/* Secondary subtle radial highlights */}
                  <div className="absolute inset-0 bg-gradient-radial from-white/30 via-transparent to-transparent opacity-30"></div>
                  
                  {/* Icon with enhanced animation */}
                  <motion.div
                    animate={{ 
                      scale: [1, 1.06, 1, 1.03, 1], 
                      rotate: [0, -2, 0, 2, 0],
                      y: [0, -1, 0, 1, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10"
                  >
                    <step.icon className="w-10 h-10 text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.5)]" />
                  </motion.div>
                </motion.div>
                
                {/* Step number badge with enhanced animation */}
                <motion.div 
                  className="absolute -right-1 -bottom-1 w-9 h-9 bg-white text-[#3D2C35] rounded-full border-2 border-[#C4B7BD] flex items-center justify-center font-bold text-sm shadow-[0_4px_10px_rgba(61,44,53,0.2)]"
                  animate={{ 
                    y: [0, -3, 0, -2, 0], 
                    x: [0, 2, 0, -2, 0],
                    boxShadow: [
                      "0 4px 10px rgba(61, 44, 53, 0.2)",
                      "0 6px 15px rgba(61, 44, 53, 0.3)",
                      "0 4px 10px rgba(61, 44, 53, 0.2)"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {step.number}
                </motion.div>
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-3 text-[#3D2C35]">{step.title}</h3>
              <p className="text-[#8F8A95] mb-6">{step.description}</p>
              
              <div className="pt-4 border-t border-dashed border-[#C4B7BD]/30">
                <div className="flex items-center justify-center">
                  <div className="px-3 py-1 rounded-full bg-[#C4B7BD]/10 text-[#3D2C35] text-sm font-medium">
                    Step {index + 1} of 3
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
