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

const styleOptions = [
  { id: "minimalist", label: "Minimalist", icon: "fas fa-minus" },
  { id: "streetwear", label: "Streetwear", icon: "fas fa-tshirt" },
  { id: "bohemian", label: "Bohemian", icon: "fas fa-feather-alt" },
  { id: "y2k", label: "Y2K", icon: "fas fa-compact-disc" },
  { id: "luxury", label: "Luxury", icon: "fas fa-gem" },
  { id: "athleisure", label: "Athleisure", icon: "fas fa-running" },
];

export default function SubscribeForm() {
  const { toast } = useToast();
  const { subscribe, isLoading } = useSubscribe();
  const [remainingSpots, setRemainingSpots] = useState(89);
  const [showUrgencyMessage, setShowUrgencyMessage] = useState(false);
  const [recentSignups, setRecentSignups] = useState([
    { name: "Emma", location: "New York", time: "2 mins ago" },
    { name: "John", location: "London", time: "5 mins ago" },
    { name: "Sara", location: "Milan", time: "7 mins ago" }
  ]);
  
  // Simulated decreasing spots
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSpots(prev => {
        if (prev <= 50) return prev;
        return Math.max(50, prev - 1);
      });
    }, 30000); // Decrease by 1 every 30 seconds

    return () => clearInterval(timer);
  }, []);

  // Cycle through showing urgency message
  useEffect(() => {
    const timer = setInterval(() => {
      setShowUrgencyMessage(prev => !prev);
    }, 8000);

    return () => clearInterval(timer);
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
        title: "Subscription Successful! 🎉",
        description: "Welcome to DripDial's fashion elite! Your first AI-curated newsletter is on its way.",
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
    <section id="subscribe" className="py-16 md:py-24 bg-gradient-to-b from-[#f5efe6] to-amber-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white opacity-50"></div>
      <motion.div 
        className="absolute -top-12 -right-12 text-8xl"
        animate={{ 
          rotate: [0, 10, 0],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ✨
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block bg-amber-100 text-amber-800 px-4 py-1 rounded-full font-medium text-sm mb-4 shadow-sm border border-amber-200"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block animate-pulse mr-2">🔥</span>
              EXCLUSIVE FOUNDING MEMBER OFFER
            </motion.div>
            
            <motion.h2
              className="font-display text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500">
                Become a Fashion Insider
              </span>
            </motion.h2>
            
            <motion.p
              className="text-xl text-amber-900 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Join the <span className="font-semibold">elite community</span> of fashion-forward trendsetters who know what's next before everyone else.
            </motion.p>
          </div>
          
          {/* Limited spots counter */}
          <motion.div
            className="bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200 rounded-lg p-3 max-w-md mx-auto mb-8 flex items-center justify-center space-x-3 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            animate={{ 
              boxShadow: ["0 0 0 rgba(251, 191, 36, 0)", "0 0 10px rgba(251, 191, 36, 0.5)", "0 0 0 rgba(251, 191, 36, 0)"],
              transition: { 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 1
              }
            }}
          >
            <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center">
              <i className="fas fa-user-clock"></i>
            </div>
            <div>
              <span className="text-amber-900 font-semibold text-lg">Only {remainingSpots} founding member spots left</span><br/>
              <span className="text-amber-700 text-sm">at the introductory price of $5/month</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-amber-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-5">
              <div className="md:col-span-2 p-8 md:p-10 relative">
                <AnimatePresence>
                  {showUrgencyMessage && (
                    <motion.div 
                      className="absolute top-4 left-0 right-0 mx-auto bg-amber-50 border border-amber-200 p-2 rounded-lg max-w-[90%] shadow-sm"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start space-x-2">
                        <i className="fas fa-bolt text-amber-500 mt-1"></i>
                        <p className="text-sm text-amber-800">
                          <span className="font-semibold">High demand alert:</span> 6 people subscribed in the last 10 minutes!
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <h2 className="font-display text-3xl font-bold text-amber-900 mb-2 mt-8">Join DripDial Today</h2>
                <div className="flex items-center mb-6 space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img 
                        key={i}
                        src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i * 10}.jpg`} 
                        alt="Member" 
                        className="w-6 h-6 rounded-full border border-white"
                      />
                    ))}
                  </div>
                  <p className="text-amber-600 text-sm"><span className="font-medium">12,482 fashion-forward</span> members</p>
                </div>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-amber-900 font-medium">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-500" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-amber-900 font-medium">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              type="email"
                              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-amber-50/50" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-rose-500" />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <FormLabel className="text-amber-900 font-medium mb-2 block">Select Your Style Preferences</FormLabel>
                      <div className="grid grid-cols-2 gap-2">
                        {styleOptions.map((option) => (
                          <FormField
                            key={option.id}
                            control={form.control}
                            name="stylePreferences"
                            render={({ field }) => (
                              <FormItem className="flex items-center space-x-2">
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(option.id)}
                                    onCheckedChange={(checked) => {
                                      const updatedValue = checked
                                        ? [...(field.value || []), option.id]
                                        : field.value?.filter((value) => value !== option.id) || [];
                                      field.onChange(updatedValue);
                                    }}
                                    className="text-amber-600 border-amber-300"
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-medium text-amber-800 flex items-center">
                                  <i className={`${option.icon} text-amber-500 mr-1.5`}></i>
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="relative pt-2">
                      {/* Recent activity feed */}
                      <div className="mb-4 overflow-hidden relative h-10">
                        <AnimatePresence initial={false}>
                          {recentSignups.map((signup, index) => (
                            <motion.div
                              key={signup.name + signup.time}
                              className="absolute inset-0 flex items-center space-x-2 text-sm text-amber-700 bg-amber-50 px-3 py-2 rounded-md border border-amber-100"
                              initial={{ y: 40, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ y: -40, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ zIndex: recentSignups.length - index }}
                            >
                              <i className="fas fa-user-plus text-amber-500"></i>
                              <span>
                                <span className="font-medium">{signup.name}</span> from {signup.location} just subscribed {signup.time}
                              </span>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-6 h-auto rounded-xl font-medium hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-200/50 transition-all relative overflow-hidden"
                        disabled={isLoading}
                      >
                        <motion.span 
                          className="absolute top-0 left-0 right-0 h-full w-20 bg-white/20 skew-x-30"
                          animate={{ 
                            x: ["-100%", "200%"],
                          }}
                          transition={{ 
                            repeat: Infinity,
                            repeatDelay: 1,
                            duration: 1.5,
                            ease: "easeInOut"
                          }}
                        />
                        <span className="text-lg relative z-10">
                          {isLoading ? "Processing..." : "Subscribe Now — Just $5/month"}
                        </span>
                      </Button>
                      
                      <motion.div 
                        className="text-center mt-2 text-amber-600 text-sm font-medium"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity 
                        }}
                      >
                        <i className="fas fa-lock mr-1"></i> Risk-free 14-day money back guarantee
                      </motion.div>
                      
                      <p className="text-xs text-center text-amber-700/70 mt-4">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
                    </div>
                  </form>
                </Form>
              </div>

              <div className="md:col-span-3 bg-gradient-to-br from-amber-500 to-amber-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1000&h=900" 
                  alt="Fashion model on runway" 
                  className="w-full h-full object-cover mix-blend-overlay opacity-30"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 py-12">
                  <motion.div
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <motion.div
                      className="absolute -top-4 -right-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold border border-amber-200 shadow-sm"
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                      }}
                    >
                      Limited Time Offer
                    </motion.div>
                    
                    <h3 className="text-white font-display text-3xl font-bold mb-6">
                      Founding Member Exclusive Benefits
                    </h3>
                    
                    <ul className="text-white space-y-5">
                      {[
                        { icon: "fas fa-crown", text: "Premium founding member badge & status" },
                        { icon: "fas fa-shield-alt", text: "Lock in $5/month pricing forever (never increases)" },
                        { icon: "fas fa-bolt", text: "First access to our AI Personal Stylist tool ($200 value)" },
                        { icon: "fas fa-tag", text: "Exclusive brand discounts (up to 40% off)" },
                        { icon: "fas fa-comment-dots", text: "Direct access to fashion experts & stylists" },
                        { icon: "fas fa-calendar-check", text: "Invitation to virtual fashion week events" }
                      ].map((item, i) => (
                        <motion.li 
                          key={i}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          <motion.div 
                            className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-md"
                            whileHover={{ scale: 1.1, backgroundColor: "#f59e0b" }}
                          >
                            <i className={`${item.icon}`}></i>
                          </motion.div>
                          <span className="font-medium text-lg">{item.text}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div 
                      className="mt-8 bg-white/20 rounded-lg p-4 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 }}
                    >
                      <div className="flex items-center mb-2">
                        <img src="https://randomuser.me/api/portraits/women/32.jpg" alt="Testimonial" className="w-10 h-10 rounded-full mr-3 border-2 border-amber-300" />
                        <div>
                          <div className="text-white font-medium">Sophia Anderson</div>
                          <div className="text-amber-100 text-sm">Fashion Editor</div>
                        </div>
                      </div>
                      <p className="text-amber-50 italic">
                        "DripDial has completely transformed how I stay ahead of trends. I'm getting insights weeks before they hit the mainstream. Worth every penny!"
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Trust indicators */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-amber-900 mb-4 font-medium">TRUSTED BY PROFESSIONALS FROM</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-amber-400 text-3xl opacity-70">
              <i className="fab fa-vogue"></i>
              <span className="font-serif font-bold">ELLE</span>
              <i className="fab fa-instagram"></i>
              <span className="font-serif italic font-bold">Harper's</span>
              <i className="fab fa-tiktok"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
