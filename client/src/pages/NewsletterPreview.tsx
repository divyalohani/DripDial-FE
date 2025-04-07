import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const newsletterExamples = [
  {
    id: 1,
    title: "Bella Hadid's Viral Street Style Decoded",
    category: "CELEBRITY INTEL",
    date: "24 HOURS AGO",
    description: "Our AI analyzed Bella's latest viral outfit that got 2.3M likes in just 24 hours. Here's how to recreate it...",
    imageUrl: "https://images.unsplash.com/photo-1618333262707-35a5505e8613?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGZhODIyMjZkMzA4NmRjMGJkNjE0YjY4NGQ0YTY5ZTI3NjI1YjNlNyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7btZ2VRVZxOaOikE/giphy.gif",
    tags: ["#BellaHadid", "#StreetStyle", "#24HourFashion"],
    stats: {
      likes: "2.3M",
      shares: "450K",
      saves: "890K"
    },
    content: `
      <h1>24 Hours with Bella: The Outfit That Broke Instagram</h1>
      <p>Fashion Insiders,</p>
      <p>When Bella Hadid stepped out in NYC yesterday, our AI tracking system went into overdrive. Here's why this look matters and how to get it for less.</p>

      <div class="stats-grid">
        <div class="stat-item">
          <span class="number">2.3M</span>
          <span class="label">Likes in 24h</span>
        </div>
        <div class="stat-item">
          <span class="number">450K</span>
          <span class="label">Shares</span>
        </div>
        <div class="stat-item">
          <span class="number">890K</span>
          <span class="label">Saves</span>
        </div>
      </div>

      <h2>The Breakdown</h2>
      <div class="outfit-breakdown">
        <div class="item">
          <span class="brand">Vintage Jean Paul Gaultier</span>
          <span class="price">$3,200</span>
          <span class="dupe">Our find: Zara, $89</span>
        </div>
        <div class="item">
          <span class="brand">The Row Boots</span>
          <span class="price">$1,590</span>
          <span class="dupe">Our find: Mango, $129</span>
        </div>
        <div class="item">
          <span class="brand">Prada Re-Edition</span>
          <span class="price">$995</span>
          <span class="dupe">Our find: JW PEI, $79</span>
        </div>
      </div>

      <div class="trending-alert">
        <span class="pulse"></span>
        <p>This look has triggered a +245% surge in "vintage corset" searches in the last 3 hours!</p>
      </div>
    `
  },
  {
    id: 2,
    title: "TikTok's Viral 'Clean Girl' Evolution",
    category: "TREND REPORT",
    date: "VIRAL NOW",
    description: "The aesthetic that got 1B views is shifting. Our AI spotted these key changes first...",
    imageUrl: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzM5MzAwYzU3YzU4NjM5MjM1OTM1ZWU4ZjQ5ODZhZTM4ZDUxZDU0OCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/3o7btZ2VRVZxOaOikE/giphy.gif",
    tags: ["#CleanGirl2.0", "#TikTokFashion"],
    viralStats: {
      views: "1B+",
      creators: "125K",
      avgEngagement: "22.4%"
    },
    content: `
      <h1>Clean Girl 2.0: The Evolution of TikTok's Biggest Aesthetic</h1>
      <p>Trend Spotters,</p>
      <p>The 'Clean Girl' aesthetic isn't just evolving - it's revolutionizing. Our AI detected these major shifts in the last 48 hours.</p>

      <div class="viral-metrics">
        <div class="metric">
          <span class="number">1B+</span>
          <span class="label">Views</span>
        </div>
        <div class="metric">
          <span class="number">125K</span>
          <span class="label">Creators</span>
        </div>
        <div class="metric">
          <span class="number">22.4%</span>
          <span class="label">Engagement</span>
        </div>
      </div>

      <h2>Key Changes Our AI Spotted</h2>
      <div class="trend-shifts">
        <div class="shift">
          <span class="old">Slick Bun → Soft Waves</span>
          <span class="growth">+156% Growth</span>
        </div>
        <div class="shift">
          <span class="old">Neutral Palette → Pop of Color</span>
          <span class="growth">+234% Growth</span>
        </div>
        <div class="shift">
          <span class="old">Mini Bags → XXL Totes</span>
          <span class="growth">+189% Growth</span>
        </div>
      </div>

      <div class="creator-spotlight">
        <h3>Rising Creator Alert</h3>
        <div class="creator">
          <span class="name">@sophia.lee</span>
          <span class="stats">2.1M new followers in 48h</span>
          <span class="prediction">Predicted to hit 5M by next week</span>
        </div>
      </div>
    `
  }
];

export default function NewsletterPreview() {
  const [selectedPreview, setSelectedPreview] = useState(newsletterExamples[0]);

  return (
    <div className="bg-[var(--color-background)] min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="mb-6">
                <i className="fas fa-arrow-left mr-2"></i> Back to Home
              </Button>
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Newsletter Previews</h1>
            <p className="text-lg opacity-80">
              Get a taste of what lands in your inbox when you subscribe to DripDial. Each edition is thoughtfully curated with AI-powered insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {newsletterExamples.map((example) => (
              <Card 
                key={example.id}
                className={`cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md ${selectedPreview.id === example.id ? 'ring-2 ring-[var(--color-primary)]' : ''}`}
                onClick={() => setSelectedPreview(example)}
              >
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={example.imageUrl} 
                    alt={example.title} 
                    className="w-full h-full object-cover"
                  />
                  {example.videoUrl && (
                    <video src={example.videoUrl} autoPlay loop muted className="w-full h-full object-cover" />
                  )}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium bg-[var(--color-primary)] text-white px-2 py-1 rounded-full">{example.category}</span>
                    <span className="text-xs text-gray-500">{example.date}</span>
                  </div>
                  <CardTitle className="text-xl mt-2">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{example.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <motion.div 
            className="bg-white p-8 rounded-xl shadow-md mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={selectedPreview.id}
          >
            <div className="md:flex md:items-center md:justify-between mb-6 pb-6 border-b">
              <div>
                <div className="flex items-center mb-2">
                  <span className="text-xs font-medium bg-plum text-white px-2 py-1 rounded-full mr-3">{selectedPreview.category}</span>
                  <span className="text-sm text-gray-500">{selectedPreview.date}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold">{selectedPreview.title}</h2>
              </div>
              <div className="flex mt-4 md:mt-0">
                {selectedPreview.tags.map((tag, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-beige rounded-full mr-2">{tag}</span>
                ))}
              </div>
            </div>

            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedPreview.content }} />
          </motion.div>

          <div className="bg-[var(--color-primary)] text-[var(--color-background)] p-8 rounded-xl text-center">
            <h3 className="font-display text-2xl font-semibold mb-4 text-[var(--color-background)]">Like What You See?</h3>
            <p className="mb-6 text-[var(--color-background)]">Subscribe to DripDial and get these insights delivered directly to your inbox every week.</p>
            <Link href="/#subscribe">
              <Button className="bg-[var(--color-background)] text-[var(--color-primary)] hover:bg-[var(--color-background)]/90 px-6 py-3 rounded-full font-medium transition-all">
                Subscribe Now - Just $5/month
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}