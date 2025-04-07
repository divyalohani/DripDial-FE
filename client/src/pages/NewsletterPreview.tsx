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
              className="rounded-lg shadow-md overflow-hidden border border-gray-200"
              key={selectedPreview.id}
            >
              {/* Premium Newsletter Header */}
              <div 
                className="relative p-6 text-white"
                style={{ 
                  background: "#3D2C35",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
                {selectedPreview.category === "⚡️ TRENDING NOW" && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-[#FF4D4F] text-white border-none rounded-sm text-xs">HOT</Badge>
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      {selectedPreview.category === "⚡️ TRENDING NOW" && (
                        <Badge className="bg-[#FF4D4F] text-white border-none mr-2 text-xs px-2 rounded-sm">
                          TRENDING NOW
                        </Badge>
                      )}
                      {selectedPreview.category === "🎯 MICRO-TREND ALERT" && (
                        <Badge className="bg-[#722ED1] text-white border-none mr-2 text-xs px-2 rounded-sm">
                          MICRO-TREND ALERT
                        </Badge>
                      )}
                      {selectedPreview.category === "💰 INVESTMENT PIECE" && (
                        <Badge className="bg-[#FAAD14] text-black border-none mr-2 text-xs px-2 rounded-sm">
                          INVESTMENT PIECE
                        </Badge>
                      )}
                      <span className="text-xs text-white/80">{selectedPreview.date}</span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold">{selectedPreview.title}</h2>
                  </div>
                  <div className="hidden md:flex flex-wrap gap-1">
                    {selectedPreview.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-black/20 text-white border-none text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Newsletter Content */}
              <Tabs defaultValue="content" className="w-full bg-white">
                <div className="border-b border-gray-100">
                  <div className="px-2">
                    <TabsList className="h-10 bg-gray-50 mt-0 p-0 w-full justify-start">
                      <TabsTrigger 
                        value="content" 
                        className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow rounded-none px-4 h-10 text-gray-800 font-medium text-sm"
                      >
                        Newsletter Content
                      </TabsTrigger>
                      <TabsTrigger 
                        value="insights" 
                        className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow rounded-none px-4 h-10 text-gray-800 font-medium text-sm"
                      >
                        AI Insights
                      </TabsTrigger>
                      <TabsTrigger 
                        value="shop" 
                        className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow rounded-none px-4 h-10 text-gray-800 font-medium text-sm"
                      >
                        Shop The Look
                      </TabsTrigger>
                      <TabsTrigger 
                        value="social" 
                        className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:shadow rounded-none px-4 h-10 text-gray-800 font-medium text-sm"
                      >
                        Social Proof
                      </TabsTrigger>
                    </TabsList>
                  </div>
                </div>
                
                <TabsContent value="content" className="p-0 m-0">
                  <div className="p-6">
                    <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: selectedPreview.content }} />
                  </div>
                </TabsContent>
                
                <TabsContent value="insights" className="p-0 m-0">
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                          <TrendingUp className="h-4 w-4 text-[#722ED1]" />
                          <h3 className="font-semibold text-[var(--color-primary-font)] text-sm">Growth Trajectory</h3>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-medium text-gray-700">Instagram Engagement</span>
                              <span className="text-xs font-bold text-[#722ED1]">+245%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-sm">
                              <div className="h-full bg-[#722ED1] rounded-sm" style={{width: '80%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-medium text-gray-700">TikTok Adoption</span>
                              <span className="text-xs font-bold text-[#722ED1]">+367%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-sm">
                              <div className="h-full bg-[#722ED1] rounded-sm" style={{width: '90%'}}></div>
                            </div>
                          </div>
                          
                          <div>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-medium text-gray-700">Search Volume</span>
                              <span className="text-xs font-bold text-[#722ED1]">+128%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-100 rounded-sm">
                              <div className="h-full bg-[#722ED1] rounded-sm" style={{width: '60%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="h-4 w-4 text-[#FF4D4F]" />
                          <h3 className="font-semibold text-[var(--color-primary-font)] text-sm">Geographic Hotspots</h3>
                        </div>
                        <div className="space-y-3">
                          {selectedPreview.locations ? (
                            selectedPreview.locations.map((location, index) => (
                              <div key={index}>
                                <div className="flex items-center">
                                  <div className="flex-1">
                                    <div className="flex justify-between items-center">
                                      <h3 className="text-xs font-medium text-gray-700">{location}</h3>
                                      <span className="text-xs font-bold text-[#FF4D4F]">
                                        {selectedPreview.stats?.searchSpikes && selectedPreview.stats.searchSpikes[index] 
                                          ? selectedPreview.stats.searchSpikes[index]
                                          : "+200%"}
                                      </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-gray-100 rounded-sm mt-1">
                                      <div 
                                        className="h-full bg-[#FF4D4F] rounded-sm" 
                                        style={{width: `${90 - (index * 15)}%`}}
                                      ></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="text-center py-4 text-gray-500 text-xs">
                              No location data available
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-4 bg-[#F9F0FF] rounded-md">
                      <div className="flex gap-2">
                        <div className="shrink-0">
                          <InfoIcon className="h-4 w-4 text-[#722ED1] mt-0.5" />
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold text-gray-900 mb-1">AI-POWERED INSIGHT</h3>
                          <p className="text-xs text-gray-700">Our algorithms predict this trend will peak in 2 weeks, with 78% probability of mainstream adoption by major retailers within 45 days.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="shop" className="p-0 m-0">
                  <div className="p-6 bg-gradient-to-br from-white to-[var(--color-accent-3)]/5">
                    {selectedPreview.buyLinks ? (
                      <div>
                        <div className="mb-6 text-center">
                          <h3 className="text-2xl font-display font-bold mb-2">Shop The Look</h3>
                          <p className="text-[var(--color-secondary-font)]">DripDial exclusive deals on trending pieces</p>
                        </div>
                        <div className="grid gap-6">
                          {selectedPreview.buyLinks.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-[var(--color-accent-3)]/10">
                              <div className="md:flex">
                                <div className="md:w-1/3 bg-gray-50 md:h-auto h-48 relative overflow-hidden">
                                  <img 
                                    src={`https://source.unsplash.com/random/600x800/?fashion,${item.item.toLowerCase().replace(' ', '')}`} 
                                    alt={item.item} 
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                  />
                                  {item.shopNowLabel === "TRENDING NOW" && (
                                    <div className="absolute top-3 left-0 bg-[var(--color-accent-1)] text-white text-xs font-bold py-1 px-3 rounded-r-full">HOT ITEM</div>
                                  )}
                                  {item.shopNowLabel === "EDITOR'S PICK" && (
                                    <div className="absolute top-3 left-0 bg-[var(--color-accent-4)] text-white text-xs font-bold py-1 px-3 rounded-r-full">EDITOR'S PICK</div>
                                  )}
                                  {item.shopNowLabel === "ALMOST SOLD OUT" && (
                                    <div className="absolute top-3 left-0 bg-[var(--color-accent-2)] text-white text-xs font-bold py-1 px-3 rounded-r-full">SELLING FAST</div>
                                  )}
                                  {item.shopNowLabel === "IN STOCK" && (
                                    <div className="absolute top-3 left-0 bg-green-500 text-white text-xs font-bold py-1 px-3 rounded-r-full">IN STOCK</div>
                                  )}
                                  {item.shopNowLabel === "SELLING FAST" && (
                                    <div className="absolute top-3 left-0 bg-[var(--color-accent-2)] text-white text-xs font-bold py-1 px-3 rounded-r-full">SELLING FAST</div>
                                  )}
                                </div>
                                <div className="p-6 md:w-2/3">
                                  <div className="flex flex-col h-full">
                                    <div>
                                      <div className="flex justify-between items-start mb-3">
                                        <div>
                                          <h3 className="font-bold text-xl text-[var(--color-primary-font)]">{item.item}</h3>
                                          <p className="text-sm text-[var(--color-secondary-font)] font-medium">{item.brand}</p>
                                        </div>
                                      </div>
                                      
                                      <div className="grid md:grid-cols-2 gap-6 mb-5">
                                        <div className="bg-[var(--color-accent-3)]/5 p-3 rounded-lg">
                                          <div className="text-xs text-[var(--color-primary-font)] uppercase font-medium">Retail Price</div>
                                          <div className="text-xl font-bold text-[var(--color-primary-font)] line-through">{item.originalPrice}</div>
                                        </div>
                                        <div className="bg-[var(--color-accent-1)]/5 p-3 rounded-lg">
                                          <div className="text-xs text-[var(--color-accent-1)] uppercase font-medium">DripDial Price</div>
                                          <div className="text-xl font-bold text-[var(--color-accent-1)]">{item.dupePrice}</div>
                                          <div className="text-xs font-semibold bg-[var(--color-accent-1)] text-white px-2 py-1 rounded-full inline-block mt-1">Save {
                                            Math.round(
                                              (parseInt(item.originalPrice.replace('$', '').replace(',', '')) - 
                                              parseInt(item.dupePrice.replace('$', '').replace(',', ''))) /
                                              parseInt(item.originalPrice.replace('$', '').replace(',', '')) * 100
                                            )}%
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    <div className="flex justify-between items-center mt-auto">
                                      <div className="text-sm">
                                        <span className="font-medium">Exclusive at: </span>
                                        <span className="text-[var(--color-accent-4)] font-semibold">{item.dupeStore}</span>
                                      </div>
                                      <Button className="bg-[var(--color-accent-1)] hover:bg-[var(--color-accent-1)]/90">Shop Now</Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-10 text-gray-500">
                        No shopping options available for this edition
                      </div>
                    )}
                  </div>
                </TabsContent>
                
                <TabsContent value="social" className="p-0 m-0">
                  <div className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-display font-bold mb-2">Social Media Buzz</h3>
                      <p className="text-[var(--color-secondary-font)]">See how this trend is performing on social platforms</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gradient-to-r from-[var(--color-accent-1)]/5 to-[var(--color-accent-1)]/10 rounded-xl p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-300">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shadow-lg ring-2 ring-white">
                          <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                            alt="Influencer" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="text-base font-bold text-[var(--color-primary-font)]">Luka Sabbat</h4>
                            <div className="text-xs bg-[var(--color-accent-1)]/10 text-[var(--color-accent-1)] rounded-full px-2 py-1 font-medium">1d ago</div>
                          </div>
                          <p className="text-sm text-[var(--color-secondary-font)] my-1">Posted TikTok with vintage corset</p>
                          <div className="text-xs font-medium bg-[var(--color-accent-1)] text-white px-2 py-0.5 rounded-full inline-block">2.1M likes</div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-[var(--color-accent-4)]/5 to-[var(--color-accent-4)]/10 rounded-xl p-4 flex items-center gap-4 transition-transform hover:scale-[1.02] duration-300">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200 shadow-lg ring-2 ring-white">
                          <img 
                            src="https://images.unsplash.com/photo-1517841905240-472988babdf9" 
                            alt="Influencer" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <h4 className="text-base font-bold text-[var(--color-primary-font)]">Emma Chamberlain</h4>
                            <div className="text-xs bg-[var(--color-accent-4)]/10 text-[var(--color-accent-4)] rounded-full px-2 py-1 font-medium">3d ago</div>
                          </div>
                          <p className="text-sm text-[var(--color-secondary-font)] my-1">Featured in YouTube styling video</p>
                          <div className="text-xs font-medium bg-[var(--color-accent-4)] text-white px-2 py-0.5 rounded-full inline-block">1.8M views</div>
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