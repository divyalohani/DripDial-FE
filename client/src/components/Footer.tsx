import { Link } from "wouter";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-plum font-display text-2xl font-bold mb-4">DripDial</h3>
            <p className="opacity-80 mb-4">The AI-powered fashion newsletter that keeps you ahead of every trend.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-plum hover:text-opacity-80 transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-plum hover:text-opacity-80 transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a href="#" className="text-plum hover:text-opacity-80 transition-colors">
                <i className="fab fa-pinterest text-xl"></i>
              </a>
              <a href="#" className="text-plum hover:text-opacity-80 transition-colors">
                <i className="far fa-envelope text-xl"></i>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-medium text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-80">
              <li>
                <Link href="/#features">
                  <a className="hover:text-plum transition-colors">Features</a>
                </Link>
              </li>
              <li>
                <Link href="/#examples">
                  <a className="hover:text-plum transition-colors">Newsletter Examples</a>
                </Link>
              </li>
              <li>
                <Link href="/#pricing">
                  <a className="hover:text-plum transition-colors">Pricing</a>
                </Link>
              </li>
              <li>
                <Link href="/#faq">
                  <a className="hover:text-plum transition-colors">FAQ</a>
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-medium text-lg mb-4">Legal</h4>
            <ul className="space-y-2 opacity-80">
              <li><a href="#" className="hover:text-plum transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-plum transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-plum transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-plum transition-colors">Cookie Policy</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-medium text-lg mb-4">Join Our Community</h4>
            <p className="opacity-80 mb-4">Get free style tips and be the first to know about special offers.</p>
            <div className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 rounded-r-none focus:z-10" 
              />
              <Button className="bg-plum text-white rounded-l-none hover:bg-plum/90">
                <i className="fas fa-arrow-right"></i>
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center opacity-70 text-sm">
          <p>&copy; {new Date().getFullYear()} DripDial. All rights reserved. AI-powered fashion intelligence.</p>
        </div>
      </div>
    </footer>
  );
}
