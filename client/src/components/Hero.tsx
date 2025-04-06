import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-plum text-white text-sm rounded-full">
              Fashion Newsletter
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Stay Ahead of the Curve with AI-Powered Fashion Intelligence
            </h1>
            <p className="text-lg md:text-xl opacity-80">
              DripDial delivers curated trends, real-time style insights, and personalized fashion recommendations straight to your inbox.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-plum"></i>
                <p>Weekly trend forecasts from across social platforms</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-plum"></i>
                <p>AI-curated outfit inspiration tailored to your style</p>
              </div>
              <div className="flex items-center space-x-2">
                <i className="fas fa-check-circle text-plum"></i>
                <p>Personalized shopping recommendations under $30</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href="#subscribe">
                <a className="bg-plum text-white px-6 py-3 rounded-full font-medium text-center hover:bg-opacity-90 transition-all hover:shadow-lg transform hover:-translate-y-1">
                  Subscribe Now - Just $5/month
                </a>
              </Link>
              <div className="flex items-center space-x-2 text-sm font-medium">
                <i className="fas fa-shield-alt text-plum"></i>
                <span>Cancel anytime</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&h=800" 
                alt="Fashion model showcasing trendy outfit" 
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white p-3 rounded-xl shadow-lg max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex space-x-2 items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-plum text-white flex items-center justify-center">
                    <i className="fas fa-robot"></i>
                  </div>
                  <span className="font-medium">AI Trend Alert</span>
                </div>
                <p className="text-sm">Ballet flats are trending again! Here's how to style them this season.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
