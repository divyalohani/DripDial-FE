import { motion } from "framer-motion";

export default function FeaturedIn() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-[#7A7A7A] font-medium uppercase tracking-wider text-sm">Featured in</p>
        </div>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <i className="fab fa-instagram text-4xl mx-auto text-[#1A1A1A]"></i>
            <span className="block mt-2 text-xs text-[#7A7A7A]">INSTAGRAM</span>
          </div>
          
          <div className="text-center">
            <i className="fab fa-tiktok text-4xl mx-auto text-[#1A1A1A]"></i>
            <span className="block mt-2 text-xs text-[#7A7A7A]">TIKTOK</span>
          </div>
          
          <div className="text-center">
            <i className="fab fa-twitter text-4xl mx-auto text-[#1A1A1A]"></i>
            <span className="block mt-2 text-xs text-[#7A7A7A]">TWITTER</span>
          </div>
          
          <div className="text-center">
            <i className="fab fa-pinterest text-4xl mx-auto text-[#1A1A1A]"></i>
            <span className="block mt-2 text-xs text-[#7A7A7A]">PINTEREST</span>
          </div>
          
          <div className="text-center">
            <i className="fab fa-youtube text-4xl mx-auto text-[#1A1A1A]"></i>
            <span className="block mt-2 text-xs text-[#7A7A7A]">YOUTUBE</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
