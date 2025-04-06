import { useState } from "react";
import { motion } from "framer-motion";
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
  { id: "minimalist", label: "Minimalist" },
  { id: "streetwear", label: "Streetwear" },
  { id: "bohemian", label: "Bohemian" },
  { id: "y2k", label: "Y2K" },
];

export default function SubscribeForm() {
  const { toast } = useToast();
  const { subscribe, isLoading } = useSubscribe();
  
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
        title: "Subscription Successful!",
        description: "Welcome to DripDial! You'll receive your first newsletter soon.",
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
    <section id="subscribe" className="py-16 md:py-24 bg-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-10">
                <h2 className="font-display text-3xl font-bold mb-3">Join DripDial Today</h2>
                <p className="opacity-80 mb-6">Stay ahead of fashion trends with AI-powered insights delivered weekly to your inbox.</p>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium mb-1">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your name" 
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="block text-sm font-medium mb-1">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              type="email"
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-plum focus:border-transparent" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div>
                      <FormLabel className="block text-sm font-medium mb-1">Fashion Style Preferences</FormLabel>
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
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  {option.label}
                                </FormLabel>
                              </FormItem>
                            )}
                          />
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-plum text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Subscribe - $5/month"}
                    </Button>
                    
                    <p className="text-xs text-center text-gray-500">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
                  </form>
                </Form>
              </div>

              <div className="md:w-1/2 bg-plum relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&h=900" 
                  alt="Fashion model with stylish outfit" 
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-10">
                  <span className="text-white font-medium mb-3 inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">FOUNDING MEMBER OFFER</span>
                  <h3 className="text-white font-display text-3xl font-bold mb-4">First 500 subscribers get exclusive perks</h3>
                  <ul className="text-white space-y-3">
                    <motion.li 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <i className="fas fa-check mr-3"></i>
                      <span>Founding member badge</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <i className="fas fa-check mr-3"></i>
                      <span>Locked-in $5/month pricing forever</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <i className="fas fa-check mr-3"></i>
                      <span>First access to AI Stylist feature</span>
                    </motion.li>
                    <motion.li 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <i className="fas fa-check mr-3"></i>
                      <span>Exclusive member-only content</span>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
