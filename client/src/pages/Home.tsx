import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import NewsletterExamples from "@/components/NewsletterExamples";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import SubscribeForm from "@/components/SubscribeForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-cream text-charcoal font-sans">
      <Navigation />
      <Hero />
      <Features />
      <NewsletterExamples />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <SubscribeForm />
      <Footer />
    </div>
  );
}
