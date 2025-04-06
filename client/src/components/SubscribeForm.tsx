import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useSubscribe } from "@/hooks/useSubscribe";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  stylePreferences: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Expanded style options that are more trendy for Gen Z
const styleOptions = [
  { id: "streetwear", label: "Streetwear", emoji: "🏙️" },
  { id: "coquette", label: "Coquette", emoji: "🎀" },
  { id: "y2k", label: "Y2K", emoji: "💿" },
  { id: "minimal", label: "Minimal", emoji: "✨" },
  { id: "alt", label: "Alt/Grunge", emoji: "🖤" },
  { id: "academia", label: "Academia", emoji: "📚" },
];

// Recent subscriber names (for social proof)
const recentSubscribers = [
  { name: "Olivia", time: "2 mins ago", location: "NYC" },
  { name: "Sarah", time: "7 mins ago", location: "LA" },
  { name: "Emma", time: "13 mins ago", location: "Miami" },
  { name: "Ava", time: "24 mins ago", location: "Chicago" },
  { name: "Mia", time: "38 mins ago", location: "Atlanta" },
];

export default function SubscribeForm() {
  const { toast } = useToast();
  const { subscribe, isLoading } = useSubscribe();
  const [currentSubscriber, setCurrentSubscriber] = useState(0);
  const [remainingSpots, setRemainingSpots] = useState(137);
  const [isVisible, setIsVisible] = useState(false);

  // Rotate through recent subscribers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubscriber((prev) => (prev + 1) % recentSubscribers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Show notification after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Gradually reduce remaining spots
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSpots((prev) => {
        // Don't go below 100
        if (prev <= 100) return prev;
        // Random decrease by 1-3
        return prev - Math.floor(Math.random() * 3) - 1;
      });
    }, 15000);
    return () => clearInterval(interval);
  }, []);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      stylePreferences: [],
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      await subscribe(data);
      toast({
        title: "You're In! 🎉",
        description: "Welcome to DripDial! Your first newsletter drops next Monday.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="subscribe" className="py-16 md:py-24 bg-gradient-to-b from-white to-pink-50/30 relative overflow-hidden">
      {/* Floating elements for visual interest */}
      <div className="absolute w-64 h-64 bg-pink-200/20 rounded-full -top-20 -left-20 blur-3xl"></div>
      <div className="absolute w-80 h-80 bg-purple-200/20 rounded-full -bottom-40 -right-40 blur-3xl"></div>
      
      {/* Recent subscriber notification */}
      <AnimatePresence>
        {isVisible && (
          <motion.div 
            className="fixed bottom-5 left-5 bg-white rounded-lg shadow-lg p-3 z-50 max-w-[250px]"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center text-white font-bold">
                {recentSubscribers[currentSubscriber].name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-medium">
                  {recentSubscribers[currentSubscriber].name} from {recentSubscribers[currentSubscriber].location}
                </p>
                <p className="text-xs text-gray-500">
                  Just subscribed {recentSubscribers[currentSubscriber].time}
                </p>
              </div>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setIsVisible(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">Be First to Slay</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full mb-4"></div>
                  <p className="opacity-80 mb-3">Join 2,000+ trendsetters getting AI-powered style intel delivered weekly.</p>
                  
                  {/* Countdown animation */}
                  <div className="bg-pink-50 rounded-lg p-3 flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-bolt text-white"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Founding member spots are running out!</p>
                      <p className="text-xs font-bold text-pink-600">Only {remainingSpots} spots left at $5/month pricing</p>
                    </div>
                  </div>
                </motion.div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm font-medium mb-1">Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="What should we call you?" 
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="block text-sm font-medium mb-1">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Where should we send your fashion intel?" 
                                type="email"
                                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <FormLabel className="block text-sm font-medium mb-2">Your Vibe (Select all that match your style)</FormLabel>
                      <div className="grid grid-cols-2 gap-2">
                        {styleOptions.map((option, index) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="stylePreferences"
                            render={({ field }) => (
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                              >
                                <FormItem className="flex items-center space-x-2 bg-gray-50 hover:bg-pink-50 transition-colors p-2 rounded-lg">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(option.id)}
                                      onCheckedChange={(checked) => {
                                        const updatedValue = checked
                                          ? [...(field.value || []), option.id]
                                          : field.value?.filter((value) => value !== option.id) || [];
                                        field.onChange(updatedValue);
                                      }}
                                      className="text-pink-500 focus:ring-pink-500"
                                    />
                                  </FormControl>
                                  <FormLabel className="text-sm font-medium cursor-pointer flex items-center">
                                    <span className="mr-1">{option.emoji}</span> {option.label}
                                  </FormLabel>
                                </FormItem>
                              </motion.div>
                            )}
                          />
                        ))}
                      </div>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="pt-2"
                    >
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-plum to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:from-plum hover:to-plum transition-all shadow-md hover:shadow-lg"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Subscribe Now – Lock in $5/month 
                            <i className="fas fa-arrow-right ml-2"></i>
                          </span>
                        )}
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 mt-3">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
                    </motion.div>
                  </form>
                </Form>
              </div>

              <div className="md:w-1/2 bg-plum relative overflow-hidden">
                {/* Overlay gradient for better readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-plum/90 to-pink-900/90 z-10"></div>
                
                {/* Background image collage */}
                <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-40">
                  <img 
                    src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=400" 
                    alt="Fashion inspiration" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=400" 
                    alt="Fashion inspiration" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1566206091558-7f218b696731?auto=format&fit=crop&w=400" 
                    alt="Fashion inspiration" 
                    className="w-full h-full object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=400" 
                    alt="Fashion inspiration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10 z-20">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-white font-bold mb-3 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm">EXCLUSIVE FOUNDING OFFER</span>
                    <h3 className="text-white font-display text-3xl font-bold mb-6">Join our first 500 <br/>fashion insiders</h3>
                  </motion.div>
                  
                  <ul className="text-white space-y-4">
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="mt-0.5">
                        <i className="fas fa-check-circle text-pink-300 text-xl"></i>
                      </div>
                      <div>
                        <span className="font-medium">Founding member badge</span>
                        <p className="text-sm text-pink-200">Get recognized in our community</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <div className="mt-0.5">
                        <i className="fas fa-check-circle text-pink-300 text-xl"></i>
                      </div>
                      <div>
                        <span className="font-medium">$5/month forever pricing</span>
                        <p className="text-sm text-pink-200">Price goes to $9.99 after founding period</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <div className="mt-0.5">
                        <i className="fas fa-check-circle text-pink-300 text-xl"></i>
                      </div>
                      <div>
                        <span className="font-medium">First access to AI Stylist</span>
                        <p className="text-sm text-pink-200">Get personalized outfit feedback</p>
                      </div>
                    </motion.li>
                    <motion.li 
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <div className="mt-0.5">
                        <i className="fas fa-check-circle text-pink-300 text-xl"></i>
                      </div>
                      <div>
                        <span className="font-medium">Exclusive trend reports</span>
                        <p className="text-sm text-pink-200">Members-only deep-dives on emerging trends</p>
                      </div>
                    </motion.li>
                  </ul>
                  
                  {/* Social proof */}
                  <motion.div 
                    className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <div className="flex -space-x-2 mb-2">
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-pink-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-green-300"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-300 flex items-center justify-center text-xs font-bold">+</div>
                    </div>
                    <p className="text-sm text-white">
                      <span className="font-bold">137 new members</span> joined in the last 24 hours
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
