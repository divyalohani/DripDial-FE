import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { RiVipCrownFill } from "react-icons/ri";
import { 
  CalendarIcon, 
  InfoIcon, 
  TrendingUpIcon, 
  ZapIcon, 
  ArrowUpIcon, 
  ExternalLinkIcon, 
  LinkIcon, 
  DollarSignIcon,
  CheckCircleIcon,
  ShoppingBagIcon
} from "lucide-react";
import { RiInstagramLine, RiTiktokFill } from "react-icons/ri";

type PreviewData = {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  tags: string[];
  category: string;
  content: string;
  marketInsights?: string[];
  trendStats?: {
    trendScore: number;
    growthRate: string;
    forecastedPeak: string;
    marketSaturation: string;
    currentPhase: string;
  };
  priceAnalysis?: {
    msrp: string;
    currentAvgPrice: string;
    priceChange: string;
    forecastDirection: "up" | "down" | "stable";
    forecastValue: string;
  };
  socialMetrics?: {
    tikTokViews: string;
    instagramHashtags: string;
    celebrityAdoption: string;
    redCarpetAppearances: number;
  };
  timelineData?: {
    emerging: string;
    growth: string;
    peak?: string;
    decline?: string;
  };
  buyLinks?: {
    item: string;
    brand: string;
    originalPrice: string;
    dupePrice: string;
    dupeStore: string;
    shopNowLabel: string;
  }[];
  celebSightings?: {
    name: string;
    event: string;
    timeAgo: string;
    description: string;
    likes: string;
    articles: string;
    image: string;
    badgeColor: string;
  }[];
  creatorImpacts?: {
    name: string;
    platform: string;
    followers: string;
    title: string;
    views: string;
    engagement: string;
    clickThrough: string;
    impactPercent: string;
    impactDescription: string;
  };
  hashtagMetrics?: {
    tags: {
      name: string;
      count: string;
      percent: string;
    }[];
  };
};

// Sample data for demonstration
const previewsData: PreviewData[] = [
  {
    id: 1,
    date: "April 7, 2025",
    title: "Y2K Comeback: The Ultimate Baggy Jeans Guide",
    subtitle: "The iconic low-rise, ultra-baggy silhouette is dominating social feeds again. Here's our complete guide to styling this revival trend.",
    category: "⚡️ TRENDING NOW",
    tags: ["Y2K", "Denim", "Gen Z", "TikTok"],
    content: `If you've scrolled through TikTok or Instagram lately, you've definitely noticed: Y2K baggy jeans are everywhere. What started as a niche Gen Z throwback has exploded into the dominant denim silhouette of 2025.

The trend initially gained momentum as a reaction to the skinny jean dominance of the 2010s. Our analysis shows search volume for "baggy jeans" has increased by 478% in just the last 3 months. The trend reached critical mass when Bella Hadid was spotted in vintage Diesel baggies in February, triggering a 6,200% spike in search traffic.

How to Style Y2K Baggy Jeans:
• Contrast with fitted tops - Balance the volume with something streamlined on top
• Layer with oversized pieces - For the full Y2K effect, pair with an oversized hoodie or vintage tee
• Chunky footwear is essential - Platform boots or chunky sneakers help balance the silhouette
• Don't forget Y2K accessories - Think butterfly clips, tinted sunglasses, and mini shoulder bags

Insider Tip: Vintage stores and thrift shops are the best places to find authentic Y2K pieces at a fraction of the designer revival cost. We've seen identical Diesel pairs from 2003 going for $40-60 in curated vintage shops.`,
    marketInsights: [
      "Baggy jeans searches have increased 478% in the last quarter",
      "Gen Z is leading the trend but Millennial adoption is accelerating",
      "Vintage Diesel and Levi's seeing unprecedented demand",
      "Most popular styling: cropped tops and chunky footwear"
    ],
    trendStats: {
      trendScore: 94,
      growthRate: "+37% YoY",
      forecastedPeak: "Late 2025",
      marketSaturation: "25%",
      currentPhase: "Growth"
    },
    priceAnalysis: {
      msrp: "$128.00",
      currentAvgPrice: "$150.00",
      priceChange: "+17.2% (6 months)",
      forecastDirection: "up",
      forecastValue: "+10-15% (12 months)"
    },
    socialMetrics: {
      tikTokViews: "3.7B",
      instagramHashtags: "5.2M posts",
      celebrityAdoption: "Very High",
      redCarpetAppearances: 8
    },
    timelineData: {
      emerging: "2023 - Initial TikTok revival",
      growth: "2024 - Celebrity adoption",
      peak: "Predicted 2025 - Mainstream adoption",
      decline: "2026+ - Potential decline as skinny fits return"
    },
    buyLinks: [
      {
        item: "Baggy Dad Jeans",
        brand: "Levi's",
        originalPrice: "$128.00",
        dupePrice: "$89.99",
        dupeStore: "Urban Outfitters",
        shopNowLabel: "TRENDING NOW"
      },
      {
        item: "90s Loose Fit",
        brand: "AGOLDE",
        originalPrice: "$228.00",
        dupePrice: "$104.50",
        dupeStore: "ASOS",
        shopNowLabel: "ALMOST SOLD OUT"
      },
      {
        item: "D-Macs Wide Leg",
        brand: "Diesel",
        originalPrice: "$295.00",
        dupePrice: "$139.99",
        dupeStore: "Nordstrom Rack",
        shopNowLabel: "EDITOR'S PICK"
      }
    ],
    celebSightings: [
      {
        name: "Bella Hadid",
        event: "Paris Street Style",
        timeAgo: "2 weeks ago",
        description: "Bella was photographed in vintage Diesel baggy jeans with a cropped white tank and platform sneakers, creating the ultimate Y2K revival look.",
        likes: "4.7M",
        articles: "352",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        badgeColor: "#FF4D4F"
      },
      {
        name: "Olivia Rodrigo",
        event: "Album Promotion Tour",
        timeAgo: "3 days ago",
        description: "Olivia embraced the Y2K aesthetic with ultra low-rise baggy jeans paired with a vintage band tee and chunky platform boots for her GMA appearance.",
        likes: "2.9M",
        articles: "187",
        image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
        badgeColor: "#722ED1"
      }
    ],
    creatorImpacts: {
      name: "Sophia Lee",
      platform: "TikTok",
      followers: "5.7M TikTok followers, 2.3M Instagram followers",
      title: "How to Style Baggy Jeans - 7 Looks",
      views: "9.8M",
      engagement: "14.2%",
      clickThrough: "4.8%",
      impactPercent: "+243%",
      impactDescription: "Sophia's viral styling video directly correlated with a massive spike in Ultra baggy jeans searches and purchases across Gen Z platforms."
    },
    hashtagMetrics: {
      tags: [
        {
          name: "#BaggyJeans",
          count: "197.3M",
          percent: "94%"
        },
        {
          name: "#Y2KStyle",
          count: "103.5M",
          percent: "75%"
        },
        {
          name: "#LooseFitJeans",
          count: "62.8M",
          percent: "48%"
        }
      ]
    }
  },
  {
    id: 2,
    date: "March 31, 2025",
    title: "Sculptural Heels: The New 'It' Shoe Silhouette",
    subtitle: "Abstract, architectural heels are replacing traditional stilettos on red carpets worldwide. Here's how this high-fashion trend is becoming more accessible.",
    category: "🎯 MICRO-TREND ALERT",
    tags: ["Footwear", "Luxury", "Red Carpet", "Designer"],
    content: "Sample content for newsletter 2...",
    marketInsights: ["Insight 1", "Insight 2"]
  },
  {
    id: 3,
    date: "March 25, 2025",
    title: "The Birkin Effect: Investment Bags in 2025",
    subtitle: "Forget real estate and stocks—Gen Z's alternative investment strategy focuses on ultra-luxury bags. Our comprehensive guide to handbag appreciating assets.",
    category: "💰 INVESTMENT PIECE",
    tags: ["Luxury", "Investment", "Accessories", "Hermès"],
    content: "Sample content for newsletter 3...",
    marketInsights: ["Insight 1", "Insight 2"]
  }
];

export default function NewsletterPreview() {
  const [selectedPreview, setSelectedPreview] = useState<PreviewData>(previewsData[0]);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f0f0]">
      <Navigation />
      
      <div className="flex-1 w-full max-w-6xl mx-auto p-4 md:p-6">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {previewsData.map((preview) => (
              <Button
                key={preview.id}
                onClick={() => setSelectedPreview(preview)}
                variant={selectedPreview.id === preview.id ? "default" : "outline"}
                className={`
                  ${selectedPreview.id === preview.id 
                    ? 'bg-[#3D2C35] hover:bg-[#3D2C35]/90' 
                    : 'hover:bg-gray-100 border border-gray-200'
                  }
                `}
              >
                {preview.date}
              </Button>
            ))}
          </div>
          
          {/* Email-style newsletter preview (no tabs) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Newsletter Header */}
            <div className="bg-[#3D2C35] text-white p-6 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute right-0 top-0 w-64 h-64 bg-[#C4B7BD]/10 blur-3xl rounded-full"></div>
              <div className="absolute left-0 bottom-0 w-48 h-48 bg-[#C4B7BD]/10 blur-3xl rounded-full"></div>
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <div className="font-bold text-xl mr-2">DripDial</div>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">PREMIUM</Badge>
                </div>
                <div className="text-sm text-white/70">{selectedPreview.date}</div>
              </div>
              
              <Badge className="mb-2 bg-[#FF4D4F] text-white border-none">{selectedPreview.category}</Badge>
              
              <h1 className="font-display text-2xl md:text-3xl font-bold mb-2">
                {selectedPreview.title}
              </h1>
              <p className="text-white/80 text-base md:text-lg">
                {selectedPreview.subtitle}
              </p>
              
              <div className="flex gap-2 flex-wrap mt-4">
                {selectedPreview.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="bg-white/10 hover:bg-white/20 text-gray-100 border-none">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Actual Newsletter Content - Everything in a single scrollable view */}
            <div className="newsletter-content">
              {/* Main Article Section */}
              <div className="p-6 border-b border-gray-100">
                <div className="prose prose-slate max-w-none">
                  {selectedPreview.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-[#3D2C35] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Stats & Analysis Section */}
              <div className="bg-[#F8F6F3] p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <ZapIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Trend Analysis</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Trend Score Card */}
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-sm text-[#8F8A95] uppercase mb-1">DripDial Trend Score™</h3>
                        <div className="text-3xl font-bold text-[#FF4D4F]">{selectedPreview.trendStats?.trendScore}</div>
                      </div>
                      <Badge className="bg-[#FF4D4F]/10 text-[#FF4D4F] border-[#FF4D4F]/20 hover:bg-[#FF4D4F]/20">
                        Very Strong
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <div className="text-xs text-[#8F8A95]">Growth Rate</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.trendStats?.growthRate}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#8F8A95]">Current Phase</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.trendStats?.currentPhase}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#8F8A95]">Forecasted Peak</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.trendStats?.forecastedPeak}</div>
                      </div>
                      <div>
                        <div className="text-xs text-[#8F8A95]">Market Saturation</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.trendStats?.marketSaturation}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Market Insights Card */}
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <h3 className="text-sm text-[#8F8A95] uppercase mb-3">Key Market Insights</h3>
                    <ul className="space-y-2">
                      {selectedPreview.marketInsights?.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircleIcon className="h-4 w-4 text-[#3D2C35] mt-0.5 shrink-0" />
                          <span className="text-sm text-[#3D2C35]">{insight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Price Analysis Card */}
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSignIcon className="h-4 w-4 text-[#3D2C35]" />
                      <h3 className="font-semibold text-[#3D2C35]">Price Analysis</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm text-[#8F8A95]">12-Month Forecast</div>
                        <div className="flex items-center gap-1 text-green-500 font-bold">
                          <ArrowUpIcon className="h-4 w-4" />
                          {selectedPreview.priceAnalysis?.forecastValue}
                        </div>
                      </div>
                      <div className="w-full bg-[#F8F6F3] h-2 rounded-full">
                        <div className="bg-green-500 h-full rounded-full w-[65%]"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3 bg-[#F8F6F3] rounded-lg">
                        <div className="text-xs text-[#8F8A95]">Retail MSRP</div>
                        <div className="text-base font-semibold text-[#3D2C35]/70 line-through">
                          {selectedPreview.priceAnalysis?.msrp}
                        </div>
                      </div>
                      <div className="p-3 bg-[#F8F6F3] rounded-lg">
                        <div className="text-xs text-[#8F8A95]">Current Value</div>
                        <div className="text-base font-semibold text-[#3D2C35]">
                          {selectedPreview.priceAnalysis?.currentAvgPrice}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-xs text-[#3D2C35]/70 mt-3">
                      {selectedPreview.timelineData?.growth}
                    </div>
                  </div>
                  
                  {/* Social Impact Card */}
                  <div className="bg-white rounded-lg p-5 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <TrendingUpIcon className="h-4 w-4 text-[#3D2C35]" />
                      <h3 className="font-semibold text-[#3D2C35]">Social Impact</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 p-3 bg-[#F8F6F3] rounded-lg">
                        <RiTiktokFill className="h-4 w-4 text-[#FF4D4F]" />
                        <div>
                          <div className="text-xs text-[#8F8A95]">TikTok Views</div>
                          <div className="text-base font-semibold text-[#3D2C35]">
                            {selectedPreview.socialMetrics?.tikTokViews}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-[#F8F6F3] rounded-lg">
                        <RiInstagramLine className="h-4 w-4 text-[#C4B7BD]" />
                        <div>
                          <div className="text-xs text-[#8F8A95]">Instagram</div>
                          <div className="text-base font-semibold text-[#3D2C35]">
                            {selectedPreview.socialMetrics?.instagramHashtags}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-sm mt-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="font-semibold text-[#3D2C35]">Celebrity Adoption:</div>
                        <div className="font-bold text-[#FF4D4F]">{selectedPreview.socialMetrics?.celebrityAdoption}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-[#3D2C35]">Red Carpet Appearances:</div>
                        <div className="font-bold text-[#C4B7BD]">{selectedPreview.socialMetrics?.redCarpetAppearances}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Celebrity Sightings Section */}
              <div className="bg-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <InfoIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Celebrity Sightings</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  {selectedPreview.celebSightings?.map((celeb, index) => (
                    <div key={index} className="p-4 border border-gray-100 rounded-lg shadow-sm">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-[#F8F6F3] ring-1 ring-[#C4B7BD] shrink-0">
                          <img 
                            src={celeb.image} 
                            alt={celeb.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-bold text-[#3D2C35]">{celeb.name}</h4>
                              <p className="text-xs text-[#8F8A95]">{celeb.event}</p>
                            </div>
                            <div className="text-xs text-[#8F8A95] px-2 py-0.5 rounded-full bg-[#F8F6F3]">
                              {celeb.timeAgo}
                            </div>
                          </div>
                          <p className="text-xs text-[#3D2C35] my-2 bg-[#F8F6F3] p-2 rounded">
                            "{celeb.description}"
                          </p>
                          <div className="flex gap-2">
                            <div className="text-xs font-medium bg-[#FF4D4F] text-white px-2 py-0.5 rounded-full">
                              {celeb.likes} likes
                            </div>
                            <div className="text-xs font-medium bg-[#3D2C35] text-white px-2 py-0.5 rounded-full">
                              {celeb.articles} articles
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Creator Impact Section */}
              <div className="bg-[#F8F6F3] p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUpIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Creator Impact</h2>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-[#3D2C35]">{selectedPreview.creatorImpacts?.name}</h4>
                        <p className="text-xs text-[#8F8A95]">{selectedPreview.creatorImpacts?.platform}</p>
                      </div>
                      <div className="text-xs bg-[#FF4D4F]/10 text-[#FF4D4F] px-2 py-1 rounded">
                        Creator Score: 92
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="font-medium text-[#3D2C35] mb-3">"{selectedPreview.creatorImpacts?.title}"</div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-[#F8F6F3] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Views</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.views}</div>
                      </div>
                      <div className="bg-[#F8F6F3] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Engagement</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.engagement}</div>
                      </div>
                      <div className="bg-[#F8F6F3] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Click-through</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.clickThrough}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="text-sm text-[#8F8A95]">Market Impact:</div>
                      <div className="ml-2 font-semibold text-[#FF4D4F]">{selectedPreview.creatorImpacts?.impactPercent}</div>
                    </div>
                    
                    <div className="text-xs text-[#3D2C35] bg-[#F8F6F3] p-2 rounded">
                      {selectedPreview.creatorImpacts?.impactDescription}
                    </div>
                  </div>
                </div>
                
                <div className="mt-5">
                  <h3 className="font-semibold text-[#3D2C35] mb-3">TikTok Hashtag Performance</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="space-y-3">
                      {selectedPreview.hashtagMetrics?.tags.map((tag, index) => (
                        <div key={index}>
                          <div className="flex justify-between mb-1">
                            <span className="text-xs font-medium text-[#3D2C35]">{tag.name}</span>
                            <span className="text-xs font-bold text-[#FF4D4F]">{tag.count}</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#F8F6F3] rounded-full">
                            <div 
                              className="h-full bg-[#FF4D4F] rounded-full" 
                              style={{width: tag.percent}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shop The Look Section */}
              <div className="bg-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-5">
                  <ShoppingBagIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Shop The Look</h2>
                </div>
                
                <div className="space-y-4">
                  {selectedPreview.buyLinks?.map((item, index) => (
                    <div key={index} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="md:flex">
                        <div className="md:w-1/3 bg-[#F8F6F3] relative overflow-hidden">
                          <img 
                            src={`https://source.unsplash.com/random/600x800/?fashion,${item.item.toLowerCase().replace(' ', '')}`} 
                            alt={item.item} 
                            className="w-full h-48 md:h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          
                          {/* Status indicator */}
                          {item.shopNowLabel && (
                            <div className="absolute top-3 left-0">
                              <div className="bg-[#FF4D4F] text-white text-xs font-bold py-1 px-3 rounded-r-full">
                                {item.shopNowLabel}
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <div className="p-4 md:w-2/3">
                          <div className="flex flex-col h-full">
                            <div>
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="font-bold text-lg text-[#3D2C35] mb-1">{item.item}</h3>
                                  <p className="text-sm text-[#8F8A95] font-medium">{item.brand}</p>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-4 my-3">
                                <div className="flex flex-col">
                                  <div className="text-xs text-[#8F8A95] uppercase">Retail Price</div>
                                  <div className="text-base font-semibold text-[#3D2C35]/60 line-through">{item.originalPrice}</div>
                                </div>
                                <div className="flex flex-col">
                                  <div className="text-xs text-[#FF4D4F] uppercase">DripDial Price</div>
                                  <div className="text-base font-semibold text-[#FF4D4F]">{item.dupePrice}</div>
                                </div>
                                <div className="ml-auto text-xs font-semibold bg-[#C4B7BD] text-white px-2 py-1 rounded-full">
                                  Save {
                                    Math.round(
                                      (parseInt(item.originalPrice.replace('$', '').replace(',', '')) - 
                                      parseInt(item.dupePrice.replace('$', '').replace(',', ''))) /
                                      parseInt(item.originalPrice.replace('$', '').replace(',', '')) * 100
                                    )}%
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center border-t border-gray-100 pt-3 mt-3">
                                <div className="text-sm">
                                  <span className="text-[#8F8A95]">Available at: </span>
                                  <span className="text-[#C4B7BD] font-semibold">{item.dupeStore}</span>
                                </div>
                                <Button className="bg-[#3D2C35] hover:bg-[#3D2C35]/90 text-white">
                                  <ExternalLinkIcon className="h-4 w-4 mr-1" /> Shop Now
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Premium Membership Footer */}
              <div className="bg-[#3D2C35] text-white p-6 rounded-b-xl">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Badge className="bg-white/20 text-white hover:bg-white/30 border-none">EXCLUSIVE OFFER</Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3">Unlock Premium Fashion Insights</h3>
                  <p className="mb-5 text-white/80 text-sm md:text-base max-w-2xl mx-auto">
                    Subscribe to DripDial Premium for exclusive, AI-powered fashion analysis and early access to emerging trends.
                  </p>
                  
                  <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">4x</div>
                      <div className="text-xs text-white/70">Monthly Newsletters</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">Early</div>
                      <div className="text-xs text-white/70">Trend Access</div>
                    </div>
                    <div className="bg-white/10 p-3 rounded-lg text-center">
                      <div className="text-lg font-bold">$$$</div>
                      <div className="text-xs text-white/70">Exclusive Deals</div>
                    </div>
                  </div>
                  
                  <Link href="/#subscribe">
                    <Button className="bg-white hover:bg-white/90 text-[#3D2C35] font-bold px-6 py-2 rounded-lg">
                      Subscribe Now - Just $10/month
                    </Button>
                  </Link>
                  <p className="text-xs text-white/50 mt-2">No commitment. Cancel anytime.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}