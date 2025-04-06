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
    title: "Summer's Hottest Accessory Trend",
    category: "TREND ALERT",
    date: "JUNE 12",
    description: "Our AI has spotted a 300% increase in oversized sunglasses across Instagram. Here's how to style them...",
    imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&h=400",
    tags: ["#Y2KRevival", "#SummerStyle"],
    content: `
      <h1>Oversized Sunglasses: The Y2K Revival That's Taking Over</h1>
      <p>Dear fashion enthusiast,</p>
      <p>Our AI trend detection system has identified a significant surge in oversized sunglasses mentions and appearances across social platforms. With a 300% increase in the past month alone, this Y2K-inspired accessory is set to be summer's hottest trend.</p>
      <h2>Why They're Trending Now</h2>
      <p>Celebrity endorsements from Bella Hadid and Dua Lipa have catalyzed this revival, along with TikTok creators showcasing how versatile these statement pieces can be.</p>
      <h2>How to Style Them</h2>
      <ul>
        <li>Pair with mini dresses and platform sandals for full Y2K vibes</li>
        <li>Contrast with minimalist outfits for a focal statement piece</li>
        <li>Match with slicked-back hair for a polished, high-fashion look</li>
      </ul>
      <h2>Where to Shop</h2>
      <p>Budget-friendly options:</p>
      <ul>
        <li>ASOS - Oversized Rimless Sunglasses ($19.99)</li>
        <li>H&M - Rectangular Frame Sunglasses ($12.99)</li>
        <li>Zara - Shield Sunglasses with Colored Lenses ($25.90)</li>
      </ul>
      <p>Investment pieces:</p>
      <ul>
        <li>Le Specs - Outta Love ($79)</li>
        <li>Quay - After Hours ($65)</li>
        <li>Ray-Ban - State Street ($163)</li>
      </ul>
      <p>Stay ahead of the curve,</p>
      <p>The DripDial Team</p>
    `
  },
  {
    id: 2,
    title: "5 Complete Outfits Under $100",
    category: "BUDGET BUYS",
    date: "JUNE 5",
    description: "Our AI scoured thousands of retailers to find these complete looks that won't break the bank...",
    imageUrl: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=600&h=400",
    tags: ["#BudgetFashion", "#StyleDeals"],
    content: `
      <h1>Dress to Impress: 5 Complete Outfits Under $100</h1>
      <p>Dear budget-conscious fashionista,</p>
      <p>Who says style has to come with a hefty price tag? Our AI has analyzed thousands of products across dozens of retailers to curate these five complete outfits—each for less than $100 total.</p>
      <h2>Outfit 1: Office Chic</h2>
      <ul>
        <li>H&M Wide-leg Trousers - $29.99</li>
        <li>ASOS Short Sleeve Blouse - $22.00</li>
        <li>Amazon Ballet Flats - $24.99</li>
        <li>Accessory: Gold-tone Necklace - $12.99</li>
        <li>Total: $89.97</li>
      </ul>
      <h2>Outfit 2: Weekend Casual</h2>
      <ul>
        <li>Gap High-Rise Jeans - $39.95 (on sale)</li>
        <li>Target Striped Tee - $15.00</li>
        <li>Old Navy Canvas Sneakers - $24.99</li>
        <li>Accessory: Crossbody Bag - $19.99</li>
        <li>Total: $99.93</li>
      </ul>
      <h2>Outfit 3: Date Night</h2>
      <ul>
        <li>SHEIN Slip Dress - $18.99</li>
        <li>Forever 21 Cropped Cardigan - $19.99</li>
        <li>Amazon Block Heels - $39.99</li>
        <li>Accessory: Statement Earrings - $15.99</li>
        <li>Total: $94.96</li>
      </ul>
      <h2>Outfit 4: Athleisure</h2>
      <ul>
        <li>Amazon Leggings - $25.99</li>
        <li>Old Navy Sports Bra - $19.99</li>
        <li>Walmart Oversized Sweatshirt - $22.98</li>
        <li>Accessory: Baseball Cap - $12.99</li>
        <li>Total: $81.95</li>
      </ul>
      <h2>Outfit 5: Brunch Ready</h2>
      <ul>
        <li>SHEIN Floral Midi Skirt - $17.99</li>
        <li>H&M Crop Top - $12.99</li>
        <li>Amazon Strappy Sandals - $32.99</li>
        <li>Accessory: Woven Tote - $29.99</li>
        <li>Total: $93.96</li>
      </ul>
      <p>Happy shopping,</p>
      <p>The DripDial Team</p>
    `
  },
  {
    id: 3,
    title: "10 Ways to Style Your White Tee",
    category: "CLOSET HACKS",
    date: "MAY 29",
    description: "Transform this wardrobe basic into 10 completely different looks with these AI-generated styling ideas...",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=600&h=400",
    tags: ["#CapsulaWardrobe", "#StyleTips"],
    content: `
      <h1>10 Ways to Style Your Basic White Tee</h1>
      <p>Dear fashion enthusiast,</p>
      <p>The humble white t-shirt is perhaps the most versatile piece in your closet. Our AI stylist has generated 10 distinct outfits using this wardrobe staple as the foundation.</p>
      <h2>1. Business Casual</h2>
      <p>Tuck your white tee into high-waisted tailored trousers, add a blazer, and accessorize with a statement belt and loafers.</p>
      <h2>2. French Girl Chic</h2>
      <p>Pair with straight-leg jeans, a beret, delicate gold jewelry, and ballet flats for that effortless Parisian look.</p>
      <h2>3. '90s Nostalgia</h2>
      <p>Layer under a slip dress with chunky boots and add a choker necklace for peak '90s vibes.</p>
      <h2>4. Athleisure</h2>
      <p>Style with bike shorts, an oversized button-up shirt (worn open), white socks, and chunky sneakers.</p>
      <h2>5. Vacation Ready</h2>
      <p>Knot the front and pair with a flowy maxi skirt, straw hat, and sandals for a resort-worthy look.</p>
      <h2>6. Edgy Evening</h2>
      <p>Tuck into a leather midi skirt, add statement earrings, and finish with strappy heels.</p>
      <h2>7. Preppy Classic</h2>
      <p>Layer under a sweater vest with pleated shorts and loafers for scholarly style.</p>
      <h2>8. Street Style</h2>
      <p>Pair with cargo pants, a cropped puffer vest, chunky jewelry, and platform sneakers.</p>
      <h2>9. Boho Dream</h2>
      <p>Style with a tiered maxi skirt, lots of layered necklaces, and suede ankle boots.</p>
      <h2>10. Minimalist</h2>
      <p>Wear with wide-leg linen pants, simple slides, and a single delicate necklace for a clean, sophisticated look.</p>
      <p>Style endlessly,</p>
      <p>The DripDial Team</p>
    `
  }
];

export default function NewsletterPreview() {
  const [selectedPreview, setSelectedPreview] = useState(newsletterExamples[0]);

  return (
    <div className="bg-cream min-h-screen">
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
                className={`cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md ${selectedPreview.id === example.id ? 'ring-2 ring-plum' : ''}`}
                onClick={() => setSelectedPreview(example)}
              >
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={example.imageUrl} 
                    alt={example.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium bg-plum text-white px-2 py-1 rounded-full">{example.category}</span>
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
          
          <div className="bg-plum text-white p-8 rounded-xl text-center">
            <h3 className="font-display text-2xl font-semibold mb-4">Like What You See?</h3>
            <p className="mb-6">Subscribe to DripDial and get these insights delivered directly to your inbox every week.</p>
            <Link href="/#subscribe">
              <Button className="bg-white text-plum hover:bg-white/90 px-6 py-3 rounded-full font-medium transition-all">
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
