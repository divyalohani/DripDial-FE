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
    <div className="min-h-screen flex flex-col bg-[#F8F6F3]">
      <Navigation />
      
      <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-12">
        <div className="mb-16 mt-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-3 text-[#3D2C35]">
            Newsletter Previews
          </h1>
          <p className="text-base text-[#8F8A95] max-w-2xl mb-8">
            Get a taste of what lands in your inbox when you subscribe to DripDial. Each edition is thoughtfully curated with AI-powered insights.
          </p>
          
          {/* Newsletter selection cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {previewsData.map((preview) => (
              <div 
                key={preview.id}
                onClick={() => setSelectedPreview(preview)}
                className={`
                  cursor-pointer rounded-xl overflow-hidden border shadow-sm transition-all duration-300
                  ${selectedPreview.id === preview.id 
                    ? 'border-[#3D2C35] ring-2 ring-[#3D2C35] shadow-md' 
                    : 'border-gray-200 hover:border-[#C4B7BD] hover:shadow'
                  }
                `}
              >
                <div className="bg-gradient-to-r from-[#3D2C35] to-[#3D2C35]/90 p-3 text-white">
                  <div className="flex justify-between items-center">
                    <Badge className="bg-[#FF4D4F] text-white border-none text-xs">
                      {preview.category}
                    </Badge>
                    <div className="text-sm text-white/70">{preview.date}</div>
                  </div>
                </div>
                
                <div className="bg-white p-4">
                  <h3 className="font-bold text-[#3D2C35] text-lg line-clamp-2 mb-2">
                    {preview.title}
                  </h3>
                  <p className="text-[#8F8A95] text-sm line-clamp-3 mb-3">
                    {preview.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {preview.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-[#F8F6F3] text-[#8F8A95] text-xs border-none">
                        {tag}
                      </Badge>
                    ))}
                    {preview.tags.length > 3 && (
                      <Badge variant="outline" className="bg-[#F8F6F3] text-[#8F8A95] text-xs border-none">
                        +{preview.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Email-style newsletter preview (no tabs) */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Newsletter Header */}
            <div className="bg-gradient-to-br from-[#3D2C35]/10 via-[#F2EDE8] to-[#E8E0D8] text-[#3D2C35] p-8 pt-12 pb-14 relative overflow-hidden border-b border-[#E8E0D8]">
              {/* Enhanced background elements */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=2070')] opacity-[0.04] bg-cover bg-center mix-blend-overlay"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#3D2C35]/5 rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#3D2C35]/5 rounded-tl-full"></div>
              
              {/* Gradient blobs */}
              <div className="absolute right-0 top-0 w-72 h-72 bg-[#C4B7BD]/30 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4"></div>
              <div className="absolute left-0 bottom-0 w-72 h-72 bg-[#E8E0D8]/50 blur-3xl rounded-full transform -translate-x-1/4 translate-y-1/4"></div>
              <div className="absolute left-1/3 top-1/4 w-36 h-36 bg-[#FF4D4F]/5 blur-xl rounded-full animate-pulse"></div>
              <div className="absolute right-1/3 bottom-1/4 w-28 h-28 bg-[#3D2C35]/10 blur-xl rounded-full"></div>
              
              {/* Decorative pattern overlays */}
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')] opacity-[0.06] mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-[0.03] mix-blend-multiply"></div>
              
              {/* Subtle diagonal line decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="w-full h-full border-t-2 border-dashed border-[#3D2C35]/5 transform -rotate-3"></div>
                <div className="w-full h-full border-b-2 border-dashed border-[#3D2C35]/5 transform rotate-3"></div>
              </div>
              
              {/* Content with enhanced styling */}
              <div className="relative z-10">
                {/* Header with logo area */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="font-bold text-2xl font-display mr-2 text-[#3D2C35] tracking-tight relative">
                      DripDial
                      <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D4F]/70 via-[#FF4D4F] to-[#FF4D4F]/70 rounded-full transform"></span>
                    </div>
                    <Badge className="bg-[#3D2C35] text-white hover:bg-[#3D2C35]/90 border-none shadow-sm">PREMIUM</Badge>
                  </div>
                  <div className="text-sm text-[#3D2C35]/80 font-medium bg-white/50 px-3 py-1 rounded-full shadow-sm">
                    {selectedPreview.date}
                  </div>
                </div>
                
                {/* Category badge with enhanced styling */}
                <div className="mb-7 flex">
                  <Badge className="bg-[#3D2C35] text-white border-none px-4 py-1.5 rounded-full text-xs uppercase font-medium shadow-md relative overflow-hidden">
                    <span className="relative z-10">{selectedPreview.category.replace('💰 ', '').replace('🎯 ', '')}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#3D2C35] via-[#524950] to-[#3D2C35] mix-blend-overlay"></span>
                    <span className="absolute top-0 left-0 right-0 h-px bg-white/20"></span>
                  </Badge>
                  <div className="ml-3 h-px w-24 bg-gradient-to-r from-[#3D2C35]/40 to-transparent self-center"></div>
                </div>
                
                {/* Title with decorative elements */}
                <div className="relative">
                  <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight text-[#3D2C35] relative inline-block">
                    {selectedPreview.title}
                    <div className="absolute -right-3 -top-3 w-6 h-6 text-[#FF4D4F]/70 opacity-60">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9.42 4.3L10.5 1.9L11.58 4.3L14.28 4.62L12.4 6.44L12.77 9.14L10.5 7.87L8.23 9.14L8.6 6.44L6.72 4.62L9.42 4.3ZM16.94 11.8L18.35 8.67L19.76 11.8L23.21 12.22L20.79 14.58L21.29 18L18.35 16.38L15.41 18L15.92 14.58L13.5 12.22L16.94 11.8Z" />
                      </svg>
                    </div>
                  </h1>
                </div>
                
                {/* Subtitle with enhanced styling */}
                <p className="text-[#3D2C35]/90 text-lg max-w-3xl leading-relaxed mb-5 pl-1 border-l-2 border-[#FF4D4F]/30">
                  {selectedPreview.subtitle}
                </p>
                
                {/* Tags with enhanced styling */}
                <div className="flex gap-2 flex-wrap mt-6 pt-4 border-t border-dashed border-[#3D2C35]/10">
                  {selectedPreview.tags.map((tag, index) => (
                    <Badge 
                      key={index} 
                      className="bg-white/70 hover:bg-white/90 text-[#3D2C35] border border-[#3D2C35]/10 text-xs shadow-sm px-3 py-1"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Actual Newsletter Content - Everything in a single scrollable view */}
            <div className="newsletter-content">
              {/* Main Article Section */}
              <div className="p-8 pt-16 pb-16 border-b border-[#E8E0D8] relative overflow-hidden">
                {/* Enhanced pattern background with multiple layers */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-[0.07] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#F8F6F3]/70 via-white to-[#F8F6F3]/50"></div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 left-8 w-24 h-1 bg-gradient-to-r from-[#3D2C35]/20 to-transparent"></div>
                <div className="absolute top-4 right-8 w-24 h-1 bg-gradient-to-l from-[#3D2C35]/20 to-transparent"></div>
                
                {/* Feature Image Grid with enhanced styling */}
                <div className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
                    <div className="group">
                      <div className="relative rounded-lg shadow-md overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=3270&auto=format&fit=crop" 
                          alt="Model wearing Y2K style" 
                          className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                        <div className="absolute top-3 right-3">
                          <div className="bg-white/80 backdrop-blur-sm text-[#3D2C35] text-xs px-2 py-1 rounded shadow-sm">
                            FEATURED
                          </div>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-[#666] italic pl-2 border-l-2 border-[#FF4D4F]/30">
                        Influencer showcasing Y2K baggy jeans with a cropped top and vintage accessories
                      </p>
                    </div>
                    <div className="group">
                      <div className="relative rounded-lg shadow-md overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2C35]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=3387&auto=format&fit=crop" 
                          alt="Streetwear model" 
                          className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700"
                        />
                      </div>
                      <p className="mt-3 text-sm text-[#666] italic pl-2 border-l-2 border-[#FF4D4F]/30">
                        Street style: Y2K aesthetic with baggy denim and platform shoes
                      </p>
                    </div>
                  </div>
                
                  {/* Styled content with drop cap and enhanced typography */}
                  <div className="prose prose-slate max-w-4xl mx-auto relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF4D4F]/0 via-[#FF4D4F]/20 to-[#FF4D4F]/0"></div>
                    {selectedPreview.content.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={`mb-6 text-[#3D2C35] leading-relaxed text-base ${idx === 0 ? 'first-letter:text-3xl first-letter:font-bold first-letter:text-[#3D2C35] first-letter:mr-1 first-letter:float-left first-letter:leading-none' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                    <div className="flex justify-center mt-12 mb-4 opacity-30">
                      <div className="inline-flex items-center">
                        <div className="h-px w-12 bg-[#3D2C35]"></div>
                        <div className="mx-4">●</div>
                        <div className="h-px w-12 bg-[#3D2C35]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats & Analysis Section */}
              <div className="bg-gradient-to-br from-[#F8F5F2] to-[#F2EDE8] p-8 pt-14 pb-14 border-b border-[#E8E0D8] relative overflow-hidden">
                {/* Enhanced layered backgrounds */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')] opacity-[0.03] mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-[0.02] mix-blend-overlay"></div>
                
                {/* Decorative circular elements */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-gradient-to-br from-[#3D2C35]/5 to-transparent opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-gradient-to-tr from-[#3D2C35]/5 to-transparent opacity-50"></div>
                
                {/* Heading with enhanced styling */}
                <div className="flex items-center gap-3 mb-8 border-b border-dashed border-[#3D2C35]/10 pb-4 relative">
                  <div className="bg-[#3D2C35] rounded-full p-2 shadow-sm">
                    <ZapIcon className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#3D2C35] tracking-tight">Trend Analysis</h2>
                  <div className="ml-auto mr-2 bg-white px-3 py-1 rounded-full text-xs text-[#3D2C35] shadow-sm">
                    DripDial Exclusive
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Enhanced Trend Score Card */}
                  <div className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden group transition-all duration-300 hover:shadow-lg">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#FF4D4F]/5 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-[#3D2C35]/5 to-transparent rounded-tr-full"></div>
                    
                    <div className="flex justify-between items-start mb-5 relative">
                      <div className="relative">
                        <h3 className="text-sm text-[#8F8A95] uppercase mb-1 tracking-wide">DripDial Trend Score™</h3>
                        <div className="flex items-center gap-2">
                          <div className="text-4xl font-bold text-[#3D2C35] relative">
                            {selectedPreview.trendStats?.trendScore}
                            <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#FF4D4F]/0 via-[#FF4D4F]/70 to-[#FF4D4F]/0"></span>
                          </div>
                          <div className="text-sm text-[#8F8A95]">/10</div>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-[#3D2C35] to-[#524950] text-white border-none shadow-md uppercase tracking-wider px-3 py-1">
                        Very Strong
                      </Badge>
                    </div>
                    
                    <div className="relative">
                      {/* Progress indicator */}
                      <div className="w-full h-1 bg-[#F8F5F2] mb-6 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#3D2C35] to-[#FF4D4F] w-[85%] rounded-full"></div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#F8F5F2] p-3 rounded-lg group-hover:bg-[#F2EDE8] transition-colors duration-300">
                          <div className="text-xs text-[#8F8A95] uppercase tracking-wide mb-1">Growth Rate</div>
                          <div className="font-semibold text-[#3D2C35] flex items-center">
                            <span className="text-[#FF4D4F] mr-1">↗</span> {selectedPreview.trendStats?.growthRate}
                          </div>
                        </div>
                        <div className="bg-[#F8F5F2] p-3 rounded-lg group-hover:bg-[#F2EDE8] transition-colors duration-300">
                          <div className="text-xs text-[#8F8A95] uppercase tracking-wide mb-1">Current Phase</div>
                          <div className="font-semibold text-[#3D2C35]">
                            {selectedPreview.trendStats?.currentPhase}
                          </div>
                        </div>
                        <div className="bg-[#F8F5F2] p-3 rounded-lg group-hover:bg-[#F2EDE8] transition-colors duration-300">
                          <div className="text-xs text-[#8F8A95] uppercase tracking-wide mb-1">Forecasted Peak</div>
                          <div className="font-semibold text-[#3D2C35]">
                            {selectedPreview.trendStats?.forecastedPeak}
                          </div>
                        </div>
                        <div className="bg-[#F8F5F2] p-3 rounded-lg group-hover:bg-[#F2EDE8] transition-colors duration-300">
                          <div className="text-xs text-[#8F8A95] uppercase tracking-wide mb-1">Market Saturation</div>
                          <div className="font-semibold text-[#3D2C35]">
                            {selectedPreview.trendStats?.marketSaturation}
                          </div>
                        </div>
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
                        <RiTiktokFill className="h-4 w-4 text-[#3D2C35]" />
                        <div>
                          <div className="text-xs text-[#8F8A95]">TikTok Views</div>
                          <div className="text-base font-semibold text-[#3D2C35]">
                            {selectedPreview.socialMetrics?.tikTokViews}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-[#F8F6F3] rounded-lg">
                        <RiInstagramLine className="h-4 w-4 text-[#8F8A95]" />
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
                        <div className="font-bold text-[#3D2C35]">{selectedPreview.socialMetrics?.celebrityAdoption}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="font-semibold text-[#3D2C35]">Red Carpet Appearances:</div>
                        <div className="font-bold text-[#8F8A95]">{selectedPreview.socialMetrics?.redCarpetAppearances}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Celebrity Sightings Section */}
              <div className="bg-white p-6 border-b border-[#E8E0D8] relative overflow-hidden">
                {/* Added subtle noise pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="flex items-center gap-2 mb-5">
                  <InfoIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Celebrity Sightings</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  {selectedPreview.celebSightings?.map((celeb, index) => (
                    <div key={index} className="p-4 border border-[#E8E0D8]/50 rounded-lg shadow-sm">
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
                          <p className="text-xs text-[#3D2C35] my-2 bg-[#F8F5F2] p-2 rounded">
                            "{celeb.description}"
                          </p>
                          <div className="flex gap-2">
                            <div className="text-xs font-medium bg-[#C4B7BD] text-white px-2 py-0.5 rounded-full">
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
              <div className="bg-[#F8F5F2] p-6 border-b border-[#E8E0D8] relative overflow-hidden">
                {/* Added subtle geometric pattern background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-white-feathers.png')] opacity-[0.05] mix-blend-overlay"></div>
                <div className="flex items-center gap-2 mb-5">
                  <TrendingUpIcon className="h-5 w-5 text-[#3D2C35]" />
                  <h2 className="text-xl font-bold text-[#3D2C35]">Creator Impact</h2>
                </div>
                
                <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-[#E8E0D8]/50">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-bold text-[#3D2C35]">{selectedPreview.creatorImpacts?.name}</h4>
                        <p className="text-xs text-[#8F8A95]">{selectedPreview.creatorImpacts?.platform}</p>
                      </div>
                      <div className="text-xs bg-[#C4B7BD]/20 text-[#3D2C35] px-2 py-1 rounded shadow-sm">
                        Creator Score: 92
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="font-medium text-[#3D2C35] mb-3">"{selectedPreview.creatorImpacts?.title}"</div>
                    
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-[#F8F5F2] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Views</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.views}</div>
                      </div>
                      <div className="bg-[#F8F5F2] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Engagement</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.engagement}</div>
                      </div>
                      <div className="bg-[#F8F5F2] p-2 rounded">
                        <div className="text-xs text-[#8F8A95]">Click-through</div>
                        <div className="font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.clickThrough}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-2">
                      <div className="text-sm text-[#8F8A95]">Market Impact:</div>
                      <div className="ml-2 font-semibold text-[#3D2C35]">{selectedPreview.creatorImpacts?.impactPercent}</div>
                    </div>
                    
                    <div className="text-xs text-[#3D2C35] bg-[#F8F5F2] p-2 rounded">
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
                            <span className="text-xs font-bold text-[#3D2C35]">{tag.count}</span>
                          </div>
                          <div className="w-full h-1.5 bg-[#F8F5F2] rounded-full">
                            <div 
                              className="h-full bg-[#C4B7BD] rounded-full" 
                              style={{width: tag.percent}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Shop The Look Section - Made Smaller */}
              <div className="bg-gradient-to-r from-[#F8F5F2] to-[#F2EDE8] p-5 border-b border-[#E8E0D8] relative overflow-hidden">
                {/* Added subtle fabric pattern background */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/fabric-of-squares.png')] opacity-[0.04] mix-blend-overlay"></div>
                <div className="flex items-center gap-2 mb-3">
                  <ShoppingBagIcon className="h-4 w-4 text-[#3D2C35]" />
                  <h2 className="text-lg font-bold text-[#3D2C35]">Shop The Look</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedPreview.buyLinks?.slice(0, 2).map((item, index) => (
                    <div key={index} className="border border-[#E8E0D8] bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex">
                        <div className="w-1/3 relative overflow-hidden">
                          <img 
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&auto=format&fit=crop"
                            alt={`Model wearing ${item.item}`}
                            className="w-full h-[120px] object-cover transition-transform duration-700 hover:scale-105"
                          />
                          
                          {/* Price tag overlay */}
                          <div className="absolute top-2 right-2 bg-[#3D2C35] text-white px-1.5 py-0.5 text-xs rounded font-bold shadow-sm">
                            {item.dupePrice}
                          </div>
                        </div>
                        
                        <div className="p-3 w-2/3">
                          <div>
                            <div className="flex justify-between items-start mb-1">
                              <div>
                                <h3 className="font-bold text-sm text-[#3D2C35]">{item.item}</h3>
                                <p className="text-xs text-[#8F8A95]">{item.brand}</p>
                              </div>
                            </div>
                            
                            <div className="flex items-center gap-3 mb-2">
                              <div className="text-xs">
                                <span className="text-[#8F8A95]">Retail: </span>
                                <span className="text-[#3D2C35]/60 line-through">{item.originalPrice}</span>
                              </div>
                              <div className="text-xs">
                                <span className="text-[#8F8A95]">Our Price: </span>
                                <span className="text-[#3D2C35] font-semibold">{item.dupePrice}</span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <div className="text-xs text-[#8F8A95]">
                                {item.dupeStore}
                              </div>
                              <Button size="sm" variant="outline" className="h-7 text-xs border-[#3D2C35] text-[#3D2C35] hover:bg-[#3D2C35] hover:text-white">
                                Shop Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Premium Membership Footer */}
              <div className="bg-gradient-to-r from-[#F8F5F2] to-[#F2EDE8] text-[#3D2C35] p-8 md:p-10 rounded-b-xl relative overflow-hidden border-t border-[#E8E0D8]">
                {/* Added richer decorative elements and texture pattern */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-[0.07] mix-blend-overlay"></div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#C4B7BD]/20 to-transparent rounded-full blur-3xl -mr-20 -mt-20 z-0"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#3D2C35]/10 to-transparent rounded-full blur-3xl -ml-20 -mb-20 z-0"></div>
                <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-[#C4B7BD]/10 rounded-full blur-3xl z-0"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#3D2C35]/5 rounded-full blur-3xl z-0"></div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-block mb-4 bg-[#3D2C35] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                    EXCLUSIVE OFFER
                  </div>
                  
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-3 text-[#3D2C35]">
                    Elevate Your Style Game with DripDial Premium
                  </h3>
                  
                  <p className="mb-8 text-[#3D2C35]/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                    Get exclusive, AI-powered fashion insights delivered directly to your inbox each week. Stay ahead of trends and make informed style decisions with our premium newsletter.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-[#3D2C35]">4x</div>
                      <div className="text-sm text-[#3D2C35]/80 font-medium">Monthly Newsletters</div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-[#3D2C35]">Early</div>
                      <div className="text-sm text-[#3D2C35]/80 font-medium">Trend Access</div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-[#3D2C35]">$$$</div>
                      <div className="text-sm text-[#3D2C35]/80 font-medium">Exclusive Deals</div>
                    </div>
                  </div>
                  
                  <div>
                    <Link href="/#subscribe">
                      <Button className="bg-[#3D2C35] hover:bg-[#3D2C35]/90 text-white font-bold px-8 py-3 rounded-lg text-lg transition-all shadow-lg hover:shadow-xl">
                        Subscribe Now - Just $10/month
                      </Button>
                    </Link>
                    <p className="text-sm text-[#3D2C35]/70 mt-3 font-medium">No commitment. Cancel anytime.</p>
                  </div>
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