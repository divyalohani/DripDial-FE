import { motion } from "framer-motion";

export default function FeaturedIn() {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-gray-500 font-medium">Featured in</p>
        </div>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img 
            src="https://cdn.pixabay.com/photo/2017/01/19/13/22/vogue-1992347_960_720.png" 
            alt="Vogue" 
            className="h-6 md:h-8"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Elle_Logo.svg/1280px-Elle_Logo.svg.png" 
            alt="Elle" 
            className="h-6 md:h-8"
          />
          <img 
            src="https://1000logos.net/wp-content/uploads/2019/06/Cosmopolitan-Logo-1993.jpg" 
            alt="Cosmopolitan" 
            className="h-6 md:h-8"
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Harpers-Bazaar-Logo.svg" 
            alt="Harper's Bazaar" 
            className="h-6 md:h-8"
          />
          <img 
            src="https://1000logos.net/wp-content/uploads/2021/05/Glamour-logo.png" 
            alt="Glamour" 
            className="h-6 md:h-8"
          />
        </motion.div>
      </div>
    </section>
  );
}
