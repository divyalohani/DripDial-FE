import React, { useState } from "react";
import { Link } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InfoIcon, MapPin, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Sample newsletter examples
const newsletterExamples = [
  {
    id: 1,
    title: "Y2K Comeback: The Ultimate Baggy Jeans Guide",
    date: "April 7, 2025",
    category: "⚡️ TRENDING NOW",
    image: "https://images.unsplash.com/photo-1475180098004-ca77a66827be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMGZhc2hpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    tags: ["Y2K", "Denim", "Gen Z", "TikTok"],
    excerpt: "The iconic low-rise, ultra-baggy silhouette is dominating social feeds again. Here's our complete guide to styling this revival trend.",
    popularity: 98,
    locations: ["Los Angeles", "New York", "London", "Seoul", "Tokyo"],
    stats: {
      searchSpikes: ["+267%", "+241%", "+189%", "+156%", "+142%"]
    },
    buyLinks: [
      {
        brand: "Levi's",
        item: "Baggy Dad Jeans",
        originalPrice: "$128.00",
        dupePrice: "$89.99",
        dupeStore: "Urban Outfitters",
        shopNowLabel: "TRENDING NOW"
      },
      {
        brand: "AGOLDE",
        item: "90s Loose Fit",
        originalPrice: "$228.00",
        dupePrice: "$104.50",
        dupeStore: "ASOS",
        shopNowLabel: "ALMOST SOLD OUT"
      },
      {
        brand: "Diesel",
        item: "D-Macs Wide Leg",
        originalPrice: "$295.00",
        dupePrice: "$139.99",
        dupeStore: "Nordstrom Rack",
        shopNowLabel: "EDITOR'S PICK"
      }
    ],
    content: `
      <div style="margin-bottom: 2rem;">
        <p style="font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.6;">
          If you've scrolled through TikTok or Instagram lately, you've definitely noticed: Y2K baggy jeans are <strong>everywhere</strong>. What started as a niche Gen Z throwback has exploded into the dominant denim silhouette of 2025.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
          <img src="https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZ3klMjBqZWFuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
          <img src="https://images.unsplash.com/photo-1608234807905-4466023792f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFnZ3klMjBqZWFuc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
        </div>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.75rem;">Why It's Taking Over</h3>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          The trend initially gained momentum as a reaction to the skinny jean dominance of the 2010s. Our analysis shows search volume for "baggy jeans" has increased by <span style="color: #8b5cf6; font-weight: bold;">478%</span> in just the last 3 months. The trend reached critical mass when Bella Hadid was spotted in vintage Diesel baggies in February, triggering a <span style="color: #8b5cf6; font-weight: bold;">6,200%</span> spike in search traffic.
        </p>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">How to Style Them</h3>
        <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.6;">
          <li><strong>Contrast with fitted tops</strong> - Balance the volume with something streamlined on top</li>
          <li><strong>Layer with oversized pieces</strong> - For the full Y2K effect, pair with an oversized hoodie or vintage tee</li>
          <li><strong>Chunky footwear is essential</strong> - Platform boots or chunky sneakers help balance the silhouette</li>
          <li><strong>Don't forget Y2K accessories</strong> - Think butterfly clips, tinted sunglasses, and mini shoulder bags</li>
        </ul>
        
        <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-top: 1.5rem;">
          <p style="font-weight: bold; margin-bottom: 0.5rem;">Insider Tip:</p>
          <p style="margin: 0; line-height: 1.6;">Vintage stores and thrift shops are the best places to find authentic Y2K pieces at a fraction of the designer revival cost. We've seen identical Diesel pairs from 2003 going for $40-60 in curated vintage shops.</p>
        </div>
      </div>
      
      <div style="background-color: #fef3c7; padding: 1rem; border-radius: 0.5rem; margin-top: 1.5rem;">
        <h3>Rising Creator Alert</h3>
        <div style="display: flex; align-items: center; gap: 1rem; margin-top: 0.5rem;">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" style="width: 60px; height: 60px; border-radius: 9999px; object-fit: cover;" />
          <div>
            <span style="font-weight: bold; display: block;">@sophia.lee</span>
            <span style="font-size: 0.875rem; color: #666; display: block;">2.1M new followers in 48h</span>
            <span style="font-size: 0.875rem; color: #8b5cf6; display: block;">Predicted to hit 5M by next week</span>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "Sculptural Heels: The New 'It' Shoe Silhouette",
    date: "April 1, 2025",
    category: "🎯 MICRO-TREND ALERT",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFzaGlvbiUyMHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tags: ["Footwear", "Luxury", "Red Carpet", "Designer"],
    excerpt: "Abstract, architectural heels are replacing traditional stilettos on red carpets worldwide. Here's how this high-fashion trend is becoming more accessible.",
    popularity: 87,
    locations: ["Paris", "Milan", "Tokyo", "Los Angeles", "London"],
    stats: {
      searchSpikes: ["+312%", "+287%", "+243%", "+176%", "+132%"]
    },
    buyLinks: [
      {
        brand: "Amina Muaddi",
        item: "Sculptural Glass Slingbacks",
        originalPrice: "$895.00",
        dupePrice: "$189.99",
        dupeStore: "ASOS Design",
        shopNowLabel: "EDITOR'S PICK"
      },
      {
        brand: "Jacquemus",
        item: "Les Sculptures Mules",
        originalPrice: "$750.00",
        dupePrice: "$129.99",
        dupeStore: "Zara",
        shopNowLabel: "SELLING FAST"
      },
      {
        brand: "Balenciaga",
        item: "Architectural Pump",
        originalPrice: "$1,250.00",
        dupePrice: "$245.00",
        dupeStore: "Mango",
        shopNowLabel: "IN STOCK"
      }
    ],
    content: `
      <div>
        <p style="font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.6;">
          While the fashion world is always in pursuit of the next big thing, sometimes a micro-trend emerges that feels genuinely fresh and exciting. Enter: sculptural heel shoes, the architectural footwear that's redefining luxury style in 2025.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
          <img src="https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbmVyJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
          <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbmVyJTIwc2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
        </div>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.75rem;">The Designer Vanguard</h3>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          What began on the S/S 2025 runways of Loewe, Jacquemus, and The Row has rapidly trickled down to contemporary brands. The defining characteristic? Heels that defy conventional shapes, instead opting for:
        </p>
        
        <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.6;">
          <li><strong>Glass-like or metal spheres</strong> as heel support</li>
          <li><strong>Geometric shapes</strong> like triangles and trapezoids</li>
          <li><strong>Asymmetrical placements</strong> that challenge balance expectations</li>
          <li><strong>Negative space designs</strong> that create optical illusions</li>
        </ul>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">Wearability Factor</h3>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          Despite their avant-garde appearance, many designers have prioritized comfort and stability, making these statement pieces surprisingly wearable. The height typically stays between 2-3 inches, with wider bases for support.
        </p>
        
        <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-top: 1.5rem;">
          <p style="font-weight: bold; margin-bottom: 0.5rem;">Insider Tip:</p>
          <p style="margin: 0; line-height: 1.6;">
            Zara's latest designer-inspired collection features nearly identical versions of Amina Muaddi's coveted glass heel slingbacks for just $89.90—a fraction of the $895 original. According to our sources, they'll hit stores next Tuesday.
          </p>
        </div>
      </div>
    `
  },
  {
    id: 3,
    title: "The Birkin Effect: Investment Bags in 2025",
    date: "March 25, 2025",
    category: "💰 INVESTMENT PIECE",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVybWVzJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    tags: ["Luxury", "Investment", "Accessories", "Hermès"],
    excerpt: "Forget real estate and stocks—Gen Z's alternative investment strategy focuses on ultra-luxury bags. Our comprehensive guide to handbag appreciating assets.",
    popularity: 95,
    locations: ["New York", "Hong Kong", "Paris", "Singapore", "Dubai"],
    stats: {
      searchSpikes: ["+198%", "+187%", "+175%", "+162%", "+149%"]
    },
    buyLinks: [
      {
        brand: "Hermès",
        item: "Birkin 25 (Vintage, 2010)",
        originalPrice: "$24,500.00",
        dupePrice: "$19,995.00",
        dupeStore: "Rebag",
        shopNowLabel: "INVESTMENT PIECE"
      },
      {
        brand: "Chanel",
        item: "Limited Edition Flap Bag",
        originalPrice: "$8,800.00",
        dupePrice: "$6,475.00",
        dupeStore: "Fashionphile",
        shopNowLabel: "HIGH RESALE VALUE"
      },
      {
        brand: "Bottega Veneta",
        item: "Cassette Bag (Padded)",
        originalPrice: "$4,500.00",
        dupePrice: "$3,250.00",
        dupeStore: "The RealReal",
        shopNowLabel: "TRENDING NOW"
      }
    ],
    content: `
      <div>
        <p style="font-size: 1.1rem; margin-bottom: 1rem; line-height: 1.6;">
          In a world of volatile crypto markets and sky-high real estate, Gen Z and Millennials are turning to an unexpected alternative investment: ultra-luxury handbags. Unlike traditional investments, these status symbols offer both financial returns and the prestige of carrying a coveted piece.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin: 1.5rem 0;">
          <img src="https://images.unsplash.com/photo-1590739293931-a28962e1afae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVybWVzJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
          <img src="https://images.unsplash.com/photo-1592122996090-e8c68c8abb6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbmVsJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width: 100%; height: auto; border-radius: 0.5rem;" />
        </div>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin-bottom: 0.75rem;">The Numbers Don't Lie</h3>
        <p style="margin-bottom: 1rem; line-height: 1.6;">
          According to Knight Frank's Luxury Investment Index, rare handbags have outperformed art, classic cars, and wine as investment assets. The data is compelling:
        </p>
        
        <ul style="padding-left: 1.5rem; margin-bottom: 1.5rem; line-height: 1.6;">
          <li>Hermès Birkins have appreciated <strong>500%</strong> in the past decade</li>
          <li>Certain limited Chanel editions show <strong>12-17% annual returns</strong></li>
          <li>Bottega Veneta's Daniel Lee designs have seen <strong>30% appreciation</strong> since his 2021 departure</li>
        </ul>
        
        <h3 style="font-weight: bold; font-size: 1.25rem; margin: 1.5rem 0 0.75rem;">What Makes a Bag Investment-Worthy?</h3>
        <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem;">
          <ul style="padding-left: 1.5rem; margin: 0; line-height: 1.6;">
            <li><strong>Scarcity</strong> - Limited production or discontinued styles</li>
            <li><strong>Heritage house</strong> - Established luxury brands with historical prestige</li>
            <li><strong>Unique attributes</strong> - Rare colors, materials, or hardware</li>
            <li><strong>Pristine condition</strong> - Original packaging and authenticity cards</li>
            <li><strong>Designer legacy</strong> - Final collections from departing creative directors</li>
          </ul>
        </div>
        
        <div style="background-color: #ede9fe; padding: 1rem; border-radius: 0.5rem; margin-top: 1.5rem;">
          <p style="font-weight: bold; margin-bottom: 0.5rem;">DripDial Investment Alert:</p>
          <p style="margin: 0; line-height: 1.6;">
            Our algorithm predicts Phoebe Philo's debut collection accessories will appreciate by <strong>40-60%</strong> within 18 months of release. Her history with Céline bag designs suggests these will become instant collector's items.
          </p>
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

      <div className="container mx-auto px-4 py-6 md:py-10">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4" size="sm">
              ← Back to Home
            </Button>
          </Link>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-[var(--color-primary-font)]">
            Newsletter Previews
          </h1>
          <p className="text-base text-[var(--color-secondary-font)] max-w-2xl">
            Get a taste of what lands in your inbox when you subscribe to DripDial. Each edition is thoughtfully curated with AI-powered insights.
          </p>
        </div>

        {/* Redesigned layout with side-by-side preview and selection */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left sidebar with newsletter selection - 4 columns on large screens */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-lg font-semibold mb-3 text-[var(--color-primary-font)]">
              Select a Newsletter Example
            </h2>
            
            <div className="space-y-3">
              {newsletterExamples.map((example) => (
                <Card 
                  key={example.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedPreview.id === example.id ? 'ring-2 ring-[var(--color-accent-1)]' : 'hover:bg-gray-50'}`}
                  onClick={() => setSelectedPreview(example)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 rounded-md overflow-hidden bg-gray-100 shrink-0">
                        <img src={example.image} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {example.category === "⚡️ TRENDING NOW" && (
                            <Badge className="bg-[#FF4D4F] text-white border-none text-xs px-2 rounded-sm">
                              TRENDING
                            </Badge>
                          )}
                          {example.category === "🎯 MICRO-TREND ALERT" && (
                            <Badge className="bg-[#722ED1] text-white border-none text-xs px-2 rounded-sm">
                              MICRO-TREND
                            </Badge>
                          )}
                          {example.category === "💰 INVESTMENT PIECE" && (
                            <Badge className="bg-[#FAAD14] text-black border-none text-xs px-2 rounded-sm">
                              INVESTMENT
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-semibold text-sm line-clamp-2 text-[var(--color-primary-font)]">
                          {example.title}
                        </h3>
                        <p className="text-xs text-[var(--color-secondary-font)] mt-1">
                          {example.date}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Main content area - 8 columns on large screens */}
          <div className="lg:col-span-8">
            <div 
              className="rounded-xl shadow-md overflow-hidden"
              key={selectedPreview.id}
            >
              {/* Premium Newsletter Header - Updated with darker background */}
              <div 
                className="relative p-8 text-white"
                style={{ 
                  background: "#2A2127",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center justify-between">
                    {/* Left side: Category badge and date */}
                    <div className="flex items-center space-x-3">
                      {selectedPreview.category === "⚡️ TRENDING NOW" && (
                        <Badge className="bg-[#FF4D4F] text-white hover:bg-[#FF4D4F]/90 border-none rounded-full text-xs px-3 py-1 uppercase font-semibold">
                          Trending Now
                        </Badge>
                      )}
                      {selectedPreview.category === "🎯 MICRO-TREND ALERT" && (
                        <Badge className="bg-[#722ED1] text-white hover:bg-[#722ED1]/90 border-none rounded-full text-xs px-3 py-1 uppercase font-semibold">
                          Micro-Trend Alert
                        </Badge>
                      )}
                      {selectedPreview.category === "💰 INVESTMENT PIECE" && (
                        <Badge className="bg-[#FAAD14] text-[#2A2127] hover:bg-[#FAAD14]/90 border-none rounded-full text-xs px-3 py-1 uppercase font-semibold">
                          Investment Piece
                        </Badge>
                      )}
                      <span className="text-sm text-white/80">{selectedPreview.date}</span>
                    </div>
                    
                    {/* Right side: Tags */}
                    <div className="hidden md:flex flex-wrap gap-1.5">
                      {selectedPreview.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-white/10 hover:bg-white/20 text-white border-none text-xs px-2.5 py-1 rounded-full">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Title with increased size and spacing */}
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-2">{selectedPreview.title}</h2>
                </div>
              </div>
              
              {/* Updated tabs with better styling */}
              <Tabs defaultValue="content" className="w-full bg-white">
                <div className="border-b border-gray-100">
                  <div className="px-0">
                    <TabsList className="h-12 bg-[#F8F6F3] mt-0 p-0 w-full justify-start">
                      <TabsTrigger 
                        value="content" 
                        className="data-[state=active]:bg-[#2A2127] data-[state=active]:text-white rounded-none px-6 h-12 text-[#2A2127] font-medium"
                      >
                        Newsletter Content
                      </TabsTrigger>
                      <TabsTrigger 
                        value="insights" 
                        className="data-[state=active]:bg-[#2A2127] data-[state=active]:text-white rounded-none px-6 h-12 text-[#2A2127] font-medium"
                      >
                        AI Insights
                      </TabsTrigger>
                      <TabsTrigger 
                        value="shop" 
                        className="data-[state=active]:bg-[#2A2127] data-[state=active]:text-white rounded-none px-6 h-12 text-[#2A2127] font-medium"
                      >
                        Shop The Look
                      </TabsTrigger>
                      <TabsTrigger 
                        value="social" 
                        className="data-[state=active]:bg-[#2A2127] data-[state=active]:text-white rounded-none px-6 h-12 text-[#2A2127] font-medium"
                      >
                        Social Proof
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
                
                <TabsContent value="content" className="p-0 m-0">
                  <div className="p-8 bg-[#F8F6F3]">
                    <article className="prose max-w-none prose-headings:font-display prose-headings:text-[#2A2127] prose-p:text-[#3D2C35] prose-p:text-base prose-strong:text-[#2A2127] prose-strong:font-semibold prose-li:text-[#3D2C35] prose-li:text-base">
                      <p className="text-lg mb-8 leading-relaxed">
                        In a world of volatile crypto markets and sky-high real estate, Gen Z and Millennials are turning to an unexpected alternative investment: ultra-luxury handbags. Unlike traditional investments, these status symbols offer both financial returns and the prestige of carrying a coveted piece.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                        <img 
                          src="https://images.unsplash.com/photo-1590739293931-a28962e1afae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVybWVzJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop" 
                          alt="Luxury handbag" 
                          className="rounded-lg w-full h-64 object-cover"
                        />
                        <img 
                          src="https://images.unsplash.com/photo-1592122996090-e8c68c8abb6e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbmVsJTIwYmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop" 
                          alt="Designer bag" 
                          className="rounded-lg w-full h-64 object-cover"
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold mt-10 mb-6">The Numbers Don't Lie</h3>
                      
                      <p className="mb-5">
                        According to Knight Frank's Luxury Investment Index, rare handbags have outperformed art, classic cars, and wine as investment assets. The data is compelling:
                      </p>
                      
                      <ul className="space-y-3 mt-4 mb-8 pl-6">
                        <li className="flex items-start">
                          <span className="text-[#FAAD14] mr-2">•</span>
                          <span>Hermès Birkins have appreciated <strong>500%</strong> in the past decade</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FAAD14] mr-2">•</span>
                          <span>Certain limited Chanel editions show <strong>12-17% annual returns</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-[#FAAD14] mr-2">•</span>
                          <span>Bottega Veneta's Daniel Lee designs have seen <strong>30% appreciation</strong> since his 2021 departure</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-2xl font-bold mt-10 mb-6">What Makes a Bag Investment-Worthy?</h3>
                      
                      <div className="bg-white rounded-xl p-6 shadow-sm mb-8 border border-gray-100">
                        <ul className="space-y-3 mb-0 pl-6">
                          <li className="flex items-start">
                            <span className="text-[#FAAD14] mr-2">•</span>
                            <div>
                              <strong className="block mb-1">Scarcity</strong>
                              <span className="text-[#8F8A95]">Limited production or discontinued styles</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FAAD14] mr-2">•</span>
                            <div>
                              <strong className="block mb-1">Heritage house</strong>
                              <span className="text-[#8F8A95]">Established luxury brands with historical prestige</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FAAD14] mr-2">•</span>
                            <div>
                              <strong className="block mb-1">Unique attributes</strong>
                              <span className="text-[#8F8A95]">Rare colors, materials, or hardware</span>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <span className="text-[#FAAD14] mr-2">•</span>
                            <div>
                              <strong className="block mb-1">Pristine condition</strong>
                              <span className="text-[#8F8A95]">Original packaging and authenticity cards</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-[#F9F0FF] rounded-xl p-6 mt-10">
                        <div className="flex gap-3">
                          <div className="shrink-0">
                            <InfoIcon className="h-5 w-5 text-[#722ED1] mt-0.5" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold text-[#2A2127] mb-1">DripDial Investment Alert</h4>
                            <p className="text-sm text-[#3D2C35] m-0">
                              Our algorithm predicts Phoebe Philo's debut collection accessories will appreciate by <strong>40-60%</strong> within 18 months of release. Her history with Céline bag designs suggests these will become instant collector's items.
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </TabsContent>
                
                <TabsContent value="insights" className="p-0 m-0">
                  <div className="p-8 bg-[#F8F6F3]">
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold font-display text-[#2A2127] mb-4">AI-Powered Market Analysis</h2>
                      <p className="text-[#3D2C35]">Our algorithms continuously analyze market trends and social signals to predict how this investment piece will perform.</p>
                    </div>
                  
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-[#722ED1]/10 p-2 rounded-full">
                            <TrendingUp className="h-5 w-5 text-[#722ED1]" />
                          </div>
                          <h3 className="font-bold text-[#2A2127] text-lg">Growth Trajectory</h3>
                        </div>
                        <div className="space-y-5">
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-[#3D2C35]">Instagram Engagement</span>
                              <span className="text-sm font-bold text-[#722ED1]">+245%</span>
                            </div>
                            <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                              <div className="h-full bg-[#722ED1] rounded-full" style={{width: '80%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-[#3D2C35]">TikTok Adoption</span>
                              <span className="text-sm font-bold text-[#722ED1]">+367%</span>
                            </div>
                            <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                              <div className="h-full bg-[#722ED1] rounded-full" style={{width: '90%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-[#3D2C35]">Search Volume</span>
                              <span className="text-sm font-bold text-[#722ED1]">+128%</span>
                            </div>
                            <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                              <div className="h-full bg-[#722ED1] rounded-full" style={{width: '60%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="bg-[#FAAD14]/10 p-2 rounded-full">
                            <MapPin className="h-5 w-5 text-[#FAAD14]" />
                          </div>
                          <h3 className="font-bold text-[#2A2127] text-lg">Geographic Hotspots</h3>
                        </div>
                        <div className="space-y-5">
                          {selectedPreview.locations ? (
                            selectedPreview.locations.map((location, index) => (
                              <div key={index}>
                                <div className="flex items-center">
                                  <div className="flex-1">
                                    <div className="flex justify-between items-center mb-2">
                                      <h3 className="text-sm font-medium text-[#3D2C35]">{location}</h3>
                                      <span className="text-sm font-bold text-[#FAAD14]">
                                        {selectedPreview.stats?.searchSpikes && selectedPreview.stats.searchSpikes[index] 
                                          ? selectedPreview.stats.searchSpikes[index]
                                          : "+200%"}
                                      </span>
                                    </div>
                                    <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                                      <div 
                                        className="h-full bg-[#FAAD14] rounded-full" 
                                        style={{width: `${90 - (index * 15)}%`}}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-4 text-gray-500 text-sm">
                              No location data available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-[#2A2127] text-lg mb-4">Price Forecast</h3>
                        <div className="space-y-5">
                          <div className="flex justify-between items-center bg-[#F8F6F3] p-3 rounded-lg">
                            <span className="text-sm font-medium text-[#3D2C35]">Current Value</span>
                            <span className="text-lg font-bold text-[#2A2127]">$19,995</span>
                          </div>
                          
                          <div className="flex justify-between items-center bg-[#F8F6F3] p-3 rounded-lg">
                            <span className="text-sm font-medium text-[#3D2C35]">6 Month Projection</span>
                            <span className="text-lg font-bold text-[#FAAD14]">$22,400</span>
                          </div>
                          
                          <div className="flex justify-between items-center bg-[#F8F6F3] p-3 rounded-lg">
                            <span className="text-sm font-medium text-[#3D2C35]">1 Year Projection</span>
                            <span className="text-lg font-bold text-[#FAAD14]">$26,800</span>
                          </div>
                          
                          <div className="bg-[#FAAD14]/10 p-4 rounded-lg">
                            <p className="text-sm text-[#3D2C35]">
                              <span className="font-bold text-[#FAAD14]">+34%</span> estimated appreciation over the next 12 months
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-[#2A2127] text-lg mb-4">Market Signals</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3 pb-3 border-b border-[#F8F6F3]">
                            <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2A2127] text-sm">Celebrity Endorsements</h4>
                              <p className="text-sm text-[#8F8A95]">Spotted on 3 A-list celebrities in past month</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 pb-3 border-b border-[#F8F6F3]">
                            <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2A2127] text-sm">Auction Performance</h4>
                              <p className="text-sm text-[#8F8A95]">Last 5 auctions closed above estimated value</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3 pb-3 border-b border-[#F8F6F3]">
                            <div className="bg-yellow-100 p-1.5 rounded-full mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2A2127] text-sm">Market Availability</h4>
                              <p className="text-sm text-[#8F8A95]">Moderate inventory levels at trusted resellers</p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="bg-green-100 p-1.5 rounded-full mt-0.5">
                              <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            </div>
                            <div>
                              <h4 className="font-bold text-[#2A2127] text-sm">Resale Velocity</h4>
                              <p className="text-sm text-[#8F8A95]">Average time to sell: 3.2 days (Very Fast)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-6 bg-[#F9F0FF] rounded-xl border border-[#722ED1]/20">
                      <div className="flex gap-4">
                        <div className="shrink-0">
                          <div className="bg-[#722ED1] p-2 rounded-full">
                            <InfoIcon className="h-5 w-5 text-white" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#2A2127] mb-2">AI-POWERED MARKET PREDICTION</h3>
                          <p className="text-[#3D2C35]">Our algorithms predict this Birkin model will experience an immediate 11% surge in market value following the upcoming Met Gala on May 6, 2025. We anticipate several A-list celebrities will showcase vintage Hermès pieces, driving significant social media interest and search volume. Consider this a strong BUY signal with a 6-month hold recommendation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="shop" className="p-0 m-0">
                  <div className="p-8 bg-[#F8F6F3]">
                    {selectedPreview.buyLinks ? (
                      <div>
                        <div className="mb-8 text-center">
                          <h2 className="text-2xl font-display font-bold mb-3 text-[#2A2127]">Shop The Look</h2>
                          <p className="text-[#8F8A95] max-w-2xl mx-auto">DripDial members get exclusive access to authenticated luxury pieces at preferred rates through our trusted partner network</p>
                        </div>
                        
                        <div className="grid gap-8">
                          {selectedPreview.buyLinks.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                              <div className="md:grid md:grid-cols-12">
                                <div className="md:col-span-4 bg-[#F8F6F3] relative overflow-hidden">
                                  <img 
                                    src={`https://source.unsplash.com/random/600x800/?fashion,${item.item.toLowerCase().replace(' ', '')}`} 
                                    alt={item.item} 
                                    className="w-full h-full object-cover md:h-[300px] transition-transform duration-700 hover:scale-105"
                                  />
                                  
                                  {/* Status indicator */}
                                  {item.shopNowLabel === "INVESTMENT PIECE" && (
                                    <div className="absolute top-4 left-0">
                                      <div className="bg-[#FAAD14] text-[#2A2127] text-xs font-bold py-1.5 px-4 rounded-r-full uppercase tracking-wide shadow-sm">Investment Piece</div>
                                    </div>
                                  )}
                                  {item.shopNowLabel === "HIGH RESALE VALUE" && (
                                    <div className="absolute top-4 left-0">
                                      <div className="bg-[#722ED1] text-white text-xs font-bold py-1.5 px-4 rounded-r-full uppercase tracking-wide shadow-sm">High Resale Value</div>
                                    </div>
                                  )}
                                  {item.shopNowLabel === "TRENDING NOW" && (
                                    <div className="absolute top-4 left-0">
                                      <div className="bg-[#FF4D4F] text-white text-xs font-bold py-1.5 px-4 rounded-r-full uppercase tracking-wide shadow-sm">Trending Now</div>
                                    </div>
                                  )}
                                </div>
                                
                                <div className="p-8 md:col-span-8">
                                  <div className="flex flex-col h-full">
                                    <div>
                                      <div className="flex flex-col space-y-1 mb-6">
                                        <h3 className="font-bold text-2xl text-[#2A2127]">{item.item}</h3>
                                        <p className="text-base text-[#8F8A95] font-medium">{item.brand}</p>
                                      </div>
                                      
                                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                                        <div className="bg-[#F8F6F3] p-4 rounded-xl">
                                          <div className="text-sm text-[#8F8A95] uppercase font-medium mb-1">Retail Price</div>
                                          <div className="text-2xl font-bold text-[#2A2127]/50 line-through">{item.originalPrice}</div>
                                        </div>
                                        <div className="bg-[#FAAD14]/5 p-4 rounded-xl">
                                          <div className="text-sm text-[#FAAD14] uppercase font-medium mb-1">DripDial Price</div>
                                          <div className="text-2xl font-bold text-[#FAAD14]">{item.dupePrice}</div>
                                          <div className="text-xs font-semibold bg-[#FAAD14] text-white px-2 py-1 rounded-full inline-block mt-2">Save {
                                            Math.round(
                                              (parseInt(item.originalPrice.replace('$', '').replace(',', '')) - 
                                              parseInt(item.dupePrice.replace('$', '').replace(',', ''))) /
                                              parseInt(item.originalPrice.replace('$', '').replace(',', '')) * 100
                                            )}%
                                          </div>
                                        </div>
                                      </div>
                                      
                                      <div className="mb-4">
                                        <div className="flex items-center mb-2">
                                          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                                          <span className="text-[#2A2127] font-medium">Authenticity guaranteed</span>
                                        </div>
                                        <div className="ml-6 text-sm text-[#8F8A95]">All items verified by our authentication team</div>
                                      </div>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-4 border-t border-gray-100">
                                      <div className="mb-4 sm:mb-0">
                                        <span className="text-[#8F8A95]">Available at: </span>
                                        <span className="text-[#722ED1] font-semibold">{item.dupeStore}</span>
                                      </div>
                                      <Button className="bg-[#2A2127] hover:bg-[#2A2127]/90 text-white px-8 py-2.5 rounded-lg shadow-sm transition-all hover:shadow">
                                        Shop Now
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-10 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                          <div className="flex items-start gap-4">
                            <div className="bg-[#FAAD14]/10 p-2 rounded-full shrink-0">
                              <InfoIcon className="h-5 w-5 text-[#FAAD14]" />
                            </div>
                            <div>
                              <h3 className="text-[#2A2127] font-bold text-lg mb-1">DripDial Members Only</h3>
                              <p className="text-[#8F8A95]">
                                As a DripDial premium member, you have exclusive access to our curated marketplace of authenticated luxury items. Each piece is thoroughly verified by our expert team and backed by our guarantee of authenticity.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-20 text-[#8F8A95]">
                        <div className="bg-white p-10 rounded-xl shadow-sm max-w-xl mx-auto">
                          <h3 className="text-xl font-bold text-[#2A2127] mb-3">No Shopping Options Available</h3>
                          <p>This exclusive edition doesn't have shopping options at this time.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="social" className="p-0 m-0">
                  <div className="p-8 bg-[#F8F6F3]">
                    <div className="mb-8">
                      <h2 className="text-2xl font-display font-bold mb-3 text-[#2A2127]">Social Media Influence</h2>
                      <p className="text-[#8F8A95] max-w-2xl">Track how this investment piece is performing across social platforms and celebrity appearances</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <h3 className="text-lg font-bold text-[#2A2127] mb-4">Celebrity Sightings</h3>
                        
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F8F6F3] shadow-md ring-2 ring-white shrink-0">
                              <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                                alt="Influencer" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="text-lg font-bold text-[#2A2127]">Kendall Jenner</h4>
                                  <p className="text-sm text-[#8F8A95] mb-3">Met Gala 2025 Afterparty</p>
                                </div>
                                <div className="bg-[#FF4D4F]/10 text-[#FF4D4F] text-xs font-medium px-2.5 py-1 rounded-full">2 days ago</div>
                              </div>
                              <div className="bg-[#F8F6F3] p-3 rounded-lg text-sm text-[#3D2C35]">
                                "Kendall was photographed carrying the vintage Hermès Kelly in black box leather, paired with a minimalist Prada evening dress. The bag is estimated to be from the early 2000s collection."
                              </div>
                              <div className="flex gap-2 mt-3">
                                <div className="text-xs font-medium bg-[#FF4D4F] text-white px-2.5 py-1 rounded-full">3.2M likes</div>
                                <div className="text-xs font-medium bg-[#3D2C35] text-white px-2.5 py-1 rounded-full">428 articles</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 transition-transform hover:scale-[1.01] duration-300">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-[#F8F6F3] shadow-md ring-2 ring-white shrink-0">
                              <img 
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6" 
                                alt="Celebrity" 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="text-lg font-bold text-[#2A2127]">Pharrell Williams</h4>
                                  <p className="text-sm text-[#8F8A95] mb-3">Paris Fashion Week Appearance</p>
                                </div>
                                <div className="bg-[#722ED1]/10 text-[#722ED1] text-xs font-medium px-2.5 py-1 rounded-full">1 week ago</div>
                              </div>
                              <div className="bg-[#F8F6F3] p-3 rounded-lg text-sm text-[#3D2C35]">
                                "Pharrell was seen front row at the Louis Vuitton show with a rare Hermès HAC (Haut à Courroies) bag in Barenia leather. The musician's personal style continues to influence luxury menswear trends."
                              </div>
                              <div className="flex gap-2 mt-3">
                                <div className="text-xs font-medium bg-[#722ED1] text-white px-2.5 py-1 rounded-full">1.4M likes</div>
                                <div className="text-xs font-medium bg-[#3D2C35] text-white px-2.5 py-1 rounded-full">216 articles</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-bold text-[#2A2127] mb-4">Creator Content Impact</h3>
                        
                        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                          <div className="p-5 border-b border-gray-100">
                            <div className="flex items-center justify-between">
                              <h4 className="font-bold text-[#2A2127]">Emma Chamberlain</h4>
                              <div className="flex gap-1 items-center">
                                <span className="text-[#8F8A95] text-sm">Creator Score:</span>
                                <span className="font-bold text-[#FF4D4F]">92</span>
                              </div>
                            </div>
                            <p className="text-sm text-[#8F8A95] mt-1">8.5M YouTube subscribers, 15.7M Instagram followers</p>
                          </div>
                          
                          <div className="grid grid-cols-2 divide-x divide-gray-100">
                            <div className="p-4">
                              <div className="text-xs text-[#8F8A95] uppercase font-medium mb-1">Video Title</div>
                              <div className="font-medium text-[#2A2127] mb-3">"My Luxury Bag Collection 2025"</div>
                              <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#8F8A95]">Views</span>
                                  <span className="font-semibold text-[#2A2127]">4.6M</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#8F8A95]">Engagement</span>
                                  <span className="font-semibold text-[#2A2127]">12.8%</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                  <span className="text-[#8F8A95]">Click-through</span>
                                  <span className="font-semibold text-[#2A2127]">3.2%</span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-4">
                              <div className="text-xs text-[#8F8A95] uppercase font-medium mb-1">Market Impact</div>
                              <div className="mb-3">
                                <div className="font-semibold text-[#722ED1] text-lg">+16.4%</div>
                                <div className="text-xs text-[#8F8A95]">Search volume increase</div>
                              </div>
                              
                              <div className="bg-[#F8F6F3] rounded-lg p-3 text-xs">
                                <p className="text-[#3D2C35]">
                                  Emma's video mentioning this Birkin model caused a significant spike in Rebag searches and an estimated 9 sales within 48 hours of publication.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                          <div className="grid grid-cols-2 divide-x divide-gray-100">
                            <div className="p-5">
                              <h4 className="font-bold text-[#2A2127] mb-1">TikTok Hashtag Metrics</h4>
                              <p className="text-xs text-[#8F8A95] mb-4">Last 30 days performance</p>
                              
                              <div className="space-y-4">
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#2A2127]">#BirkinBag</span>
                                    <span className="text-sm font-bold text-[#FF4D4F]">142.8M</span>
                                  </div>
                                  <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                                    <div className="h-full bg-[#FF4D4F] rounded-full" style={{width: '90%'}}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#2A2127]">#HermèsAuthentic</span>
                                    <span className="text-sm font-bold text-[#FF4D4F]">67.5M</span>
                                  </div>
                                  <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                                    <div className="h-full bg-[#FF4D4F] rounded-full" style={{width: '65%'}}></div>
                                  </div>
                                </div>
                                
                                <div>
                                  <div className="flex justify-between mb-1">
                                    <span className="text-sm font-medium text-[#2A2127]">#BagInvestment</span>
                                    <span className="text-sm font-bold text-[#FF4D4F]">44.2M</span>
                                  </div>
                                  <div className="w-full h-2 bg-[#F8F6F3] rounded-full">
                                    <div className="h-full bg-[#FF4D4F] rounded-full" style={{width: '42%'}}></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="p-5">
                              <h4 className="font-bold text-[#2A2127] mb-1">Instagram Engagement</h4>
                              <p className="text-xs text-[#8F8A95] mb-4">Compared to category average</p>
                              
                              <div className="bg-[#FAAD14]/10 p-4 rounded-lg space-y-2 mb-4">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-[#8F8A95]">Luxury Bag Average</span>
                                  <span className="text-sm font-bold text-[#2A2127]">2.3%</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm text-[#2A2127] font-semibold">Birkin Models</span>
                                  <span className="text-sm font-bold text-[#FAAD14]">7.8%</span>
                                </div>
                              </div>
                              
                              <div className="text-xs text-[#3D2C35] bg-[#F8F6F3] p-3 rounded-lg">
                                Posts featuring authentic Birkin bags receive 3.4x higher engagement than the luxury handbag category average.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Call to action banner */}
          <div className="col-span-12 rounded-2xl text-center overflow-hidden my-8 relative">
            {/* Background gradient with enhanced visual effects */}
            <div 
              className="absolute inset-0 z-0"
              style={{ 
                background: "linear-gradient(135deg, var(--color-accent-1), var(--color-accent-4))",
                opacity: 0.97
              }}
            ></div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl -ml-20 -mb-20 z-0"></div>
            
            <div className="relative z-10 p-8 md:p-10 text-white">
              <div className="mb-1">
                <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">EXCLUSIVE OFFER</Badge>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-white">Ready to Elevate Your Style Game?</h3>
              <p className="mb-6 text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Subscribe to DripDial Premium for exclusive, AI-curated fashion insights delivered directly to your inbox every week. Never miss a trend again!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 max-w-xs">
                  <div className="text-xl font-bold">4x</div>
                  <div className="text-sm text-white/80">Monthly Newsletters</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 max-w-xs">
                  <div className="text-xl font-bold">Early</div>
                  <div className="text-sm text-white/80">Trend Access</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl text-center flex-1 max-w-xs">
                  <div className="text-xl font-bold">$$$</div>
                  <div className="text-sm text-white/80">Exclusive Discounts</div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/#subscribe">
                  <Button className="bg-white hover:bg-white/90 text-[var(--color-accent-1)] font-bold px-8 py-6 rounded-xl text-lg transition-all shadow-xl hover:shadow-2xl group relative overflow-hidden">
                    <span className="relative z-10">Subscribe Now - Just $10/month</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-white to-white/90 group-hover:scale-105 transition-transform duration-300"></span>
                  </Button>
                </Link>
                <p className="text-xs text-white/70 mt-3">No commitment. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}