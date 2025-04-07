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
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, TrendingUp, ShoppingBag, Users, ExternalLink, Instagram } from "lucide-react";

const newsletterExamples = [
  {
    id: 1,
    title: "🔥 KENDALL'S VIRAL OUTFIT BROKE TIKTOK",
    category: "⚡️ TRENDING NOW",
    date: "2 HOURS AGO",
    description: "This 15-second clip hit 12M views in 2 hours! Our AI spotted the exact pieces + budget dupes inside...",
    imageUrl: "https://images.unsplash.com/photo-1618333262707-35a5505e8613?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/l0HlvFUHvDB9qWOGs/giphy.gif",
    tags: ["#KendalEffect", "#ViralFit", "#TikTokFashion"],
    stats: {
      likes: "1.7M",
      shares: "345K",
      saves: "890K",
      searchSpikes: ["NYC +455%", "LA +320%", "London +290%"]
    },
    locations: ["SoHo, NYC", "Downtown LA", "Miami Design District"],
    buyLinks: [
      {
        item: "Cargo Pants",
        brand: "Balenciaga",
        originalPrice: "$1,450",
        dupePrice: "$59",
        dupeStore: "H&M",
        dupeBuyLink: "https://hm.com/cargo-pants",
        shopNowLabel: "TRENDING NOW"
      },
      {
        item: "Cropped Tank",
        brand: "The Row",
        originalPrice: "$690",
        dupePrice: "$19",
        dupeStore: "Zara",
        dupeBuyLink: "https://zara.com/tops",
        shopNowLabel: "EDITOR'S PICK"
      },
      {
        item: "Chunky Loafers",
        brand: "Prada",
        originalPrice: "$1,200",
        dupePrice: "$69",
        dupeStore: "ASOS",
        dupeBuyLink: "https://asos.com/shoes",
        shopNowLabel: "ALMOST SOLD OUT"
      }
    ],
    content: `
      <div class="trending-alert bg-red-50 p-4 rounded-lg mb-6 animate-pulse">
        <span class="font-bold text-red-500">🚨 TRENDING ALERT</span>
        <p>This look is causing Zara crashes worldwide! Pieces selling out in minutes!</p>
      </div>

      <div class="outfit-breakdown grid gap-4">
        <div class="piece-card bg-white p-4 rounded-lg shadow-sm">
          <div class="flex items-center gap-3">
            <img src="https://images.unsplash.com/photo-1551489186-cf8726f514f8?w=100&h=100&fit=crop" class="w-20 h-20 object-cover rounded"/>
            <div>
              <h3 class="font-bold">The Viral Cargo Pants</h3>
              <p class="text-sm text-gray-600">+245% searches in last 2h</p>
              <div class="mt-2">
                <span class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">SELLING FAST</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="celeb-spots mt-6">
        <h3 class="font-bold mb-3">🎯 Also Spotted On</h3>
        <div class="flex gap-2">
          <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">Hailey Bieber</span>
          <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">Gigi Hadid</span>
          <span class="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm">+3 more</span>
        </div>
      </div>
    `
  },
  {
    id: 2,
    title: "✨ COASTAL GRANDMA IS OUT, WEIRD GIRL IS IN",
    category: "🎯 MICRO-TREND ALERT",
    date: "EXCLUSIVE",
    description: "The aesthetic that's taking over Fashion TikTok - our AI predicted this 3 weeks ago!",
    imageUrl: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/3oEduXsiOxVxONcmis/giphy.gif",
    tags: ["#WeirdGirlSummer", "#AestheticShift"],
    trendMetrics: {
      growth: "+378%",
      adoption: "Early Stage",
      prediction: "Peak in 2 weeks"
    },
    content: `
      <h1>Y2K Revival: Butterfly Clips, Low-Rise Jeans & Baby Tees Take Over</h1>
      <p>Fashion Futurists,</p>
      <p>The Y2K revival has reached fever pitch, but our proprietary trend analysis shows this isn't just nostalgia - it's a complete reinterpretation for Gen Z audiences.</p>
      
      <h2>Y2K Outfits Taking Over Social Media</h2>
      
      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <img src="https://images.unsplash.com/photo-1525171254930-643fc658b64e?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Low-Rise Jeans & Baby Tee Combo</h4>
          <p style="font-size: 0.875rem; color: #666;">The iconic low-rise baggy jeans paired with a fitted baby tee. Notice the visible underwear band and chunky platform sneakers completing the authentic Y2K silhouette.</p>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <img src="https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Butterfly Accessories Revival</h4>
          <p style="font-size: 0.875rem; color: #666;">Full Y2K fantasy with mini shoulder bag, butterfly clips, and tinted sunglasses. This look has seen a 342% increase in search volume over the past month.</p>
        </div>
      </div>
      
      <h2>Spotting the Differences</h2>
      <p>Unlike the original Y2K era, today's interpretation features:</p>
      <ul>
        <li><strong>Sustainability focus:</strong> Thrifted and upcycled pieces</li>
        <li><strong>Body inclusivity:</strong> Diverse models across sizes</li>
        <li><strong>Digital integration:</strong> Designed for social sharing</li>
      </ul>
      
      <div style="display: flex; gap: 1rem; margin: 1.5rem 0; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 260px;">
          <img src="https://images.unsplash.com/photo-1608312149553-d31a9ccd7324?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Modern Y2K Street Style</h4>
          <p style="font-size: 0.875rem; color: #666;">Chunky platform boots paired with a mini skirt and oversized jacket. The layered accessories and statement sunglasses complete this contemporary Y2K look.</p>
        </div>
        <div style="flex: 1; min-width: 260px;">
          <img src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Y2K Sportswear Aesthetic</h4>
          <p style="font-size: 0.875rem; color: #666;">Track pants with side snaps and a cropped athletic top. This sporty Y2K revival incorporates vintage-inspired logos and bright color blocking.</p>
        </div>
      </div>
      
      <h3>DripDial Exclusive: Demand Analysis</h3>
      <p>Our heat map shows key cities driving this trend:</p>
      <ul>
        <li>Tokyo (+455% in last 30 days)</li>
        <li>Los Angeles (+389%)</li>
        <li>Berlin (+276%)</li>
      </ul>
      
      <p>We've detected a 78% probability this trend will continue growing for the next 3-4 months before reaching saturation.</p>
    `
  },
  {
    id: 3,
    title: "💎 VINTAGE CARTIER WATCH PRICES SOARING",
    category: "💰 INVESTMENT PIECE",
    date: "MARKET INTEL",
    description: "The specific models seeing 40%+ value increase in 6 months - full analysis inside...",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/3o7btZ2VRVZxOaOikE/giphy.gif",
    tags: ["#WatchInvestment", "#VintageCartier"],
    marketData: {
      avgReturn: "+42%",
      timeframe: "6 months",
      confidence: "High"
    },
    content: `
      <div class="market-analysis bg-gradient-to-r from-amber-50 to-yellow-50 p-4 rounded-lg mb-6">
        <div class="flex items-center gap-2 mb-4">
          <span class="text-2xl">📈</span>
          <h3 class="font-bold">Price Trajectory</h3>
        </div>
        <div class="stats grid grid-cols-3 gap-4 text-center">
          <div class="stat p-2 bg-white rounded-lg">
            <p class="text-xs text-gray-500">6 MONTHS AGO</p>
            <p class="font-bold">$3,200</p>
          </div>
          <div class="stat p-2 bg-white rounded-lg">
            <p class="text-xs text-gray-500">NOW</p>
            <p class="font-bold text-green-500">$4,550</p>
          </div>
          <div class="stat p-2 bg-white rounded-lg">
            <p class="text-xs text-gray-500">PROJECTED</p>
            <p class="font-bold text-blue-500">$5,800</p>
          </div>
        </div>
      </div>

      <div class="buying-guide mb-6">
        <h3 class="font-bold mb-3">🎯 Where to Hunt</h3>
        <div class="grid gap-2">
          <div class="venue p-3 bg-white rounded-lg">
            <div class="flex justify-between items-center">
              <span class="font-medium">The RealReal</span>
              <span class="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">BEST PRICES</span>
            </div>
          </div>
          <div class="venue p-3 bg-white rounded-lg">
            <div class="flex justify-between items-center">
              <span class="font-medium">Vestiaire Collective</span>
              <span class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">MOST AUTHENTIC</span>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 4,
    title: "24 Hours with Bella: The Outfit That Broke Instagram",
    category: "CELEB STYLE",
    date: "EXCLUSIVE",
    description: "Bella Hadid's latest look caused search spikes across 3 continents. Full breakdown inside...",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=400",
    videoUrl: "https://media.giphy.com/media/xUPGcIUJUmnZNhSuY0/giphy.gif",
    tags: ["#BellaEffect", "#CelebStyle", "#MustHave"],
    stats: {
      likes: "2.3M",
      shares: "450K",
      saves: "890K",
      searchSpikes: ["NYC +540%", "Paris +320%", "London +290%"]
    },
    locations: ["SoHo, NYC", "West Village", "Paris 1st Arr."],
    buyLinks: [
      {
        item: "Vintage JPG Corset",
        brand: "Jean Paul Gaultier",
        originalPrice: "$3,200",
        dupePrice: "$89",
        dupeStore: "Zara",
        dupeBuyLink: "https://zara.com/corset",
        shopNowLabel: "SELLING FAST"
      },
      {
        item: "Leather Boots",
        brand: "The Row",
        originalPrice: "$1,590",
        dupePrice: "$129",
        dupeStore: "Mango",
        dupeBuyLink: "https://shop.mango.com/boots",
        shopNowLabel: "EDITOR'S PICK"
      },
      {
        item: "Re-Edition Bag",
        brand: "Prada",
        originalPrice: "$995",
        dupePrice: "$79",
        dupeStore: "JW PEI",
        dupeBuyLink: "https://jwpei.com/bags",
        shopNowLabel: "IN STOCK"
      }
    ],
    content: `
      <div class="p-6 bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl mb-8">
        <h1 class="text-3xl font-bold mb-3">24 Hours with Bella: The Outfit That Broke Instagram</h1>
        <p class="text-lg mb-2 font-medium text-gray-700">Fashion Insiders,</p>
        <p class="text-gray-700 mb-6">When Bella Hadid stepped out in NYC yesterday, our AI tracking system went into overdrive. Here's why this look matters and how to get it for less.</p>
        
        <div class="bg-white rounded-lg p-4 mb-6 shadow-sm">
          <div class="flex items-center gap-2 mb-3">
            <span class="text-pink-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 3L16.293 6.293L9.293 13.293L10.707 14.707L17.707 7.707L21 11V3H13Z" fill="currentColor"/><path d="M19 19H5V5H12L10 3H3V21H21V14L19 12V19Z" fill="currentColor"/></svg></span>
            <h2 class="font-bold">VIRAL IMPACT</h2>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="text-center">
              <div class="text-2xl font-bold text-pink-500">2.3M</div>
              <div class="text-sm text-gray-500">Likes in 24h</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-pink-500">450K</div>
              <div class="text-sm text-gray-500">Shares</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-pink-500">890K</div>
              <div class="text-sm text-gray-500">Saves</div>
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-6 mb-8">
          <div class="bg-white rounded-lg overflow-hidden shadow-sm">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&h=400" class="w-full h-48 object-cover" />
            <div class="p-4">
              <div class="text-sm font-medium text-gray-500 mb-1">THE ORIGINAL</div>
              <div class="font-bold mb-2">Bella in SoHo</div>
              <div class="flex gap-2 flex-wrap">
                <span class="inline-flex items-center text-xs bg-pink-100 text-pink-700 rounded-full px-2 py-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1"><path d="M9 11.5C9 12.8807 7.88071 14 6.5 14C5.11929 14 4 12.8807 4 11.5C4 10.1193 5.11929 9 6.5 9C7.88071 9 9 10.1193 9 11.5Z" fill="currentColor"/><path d="M20 11.5C20 12.8807 18.8807 14 17.5 14C16.1193 14 15 12.8807 15 11.5C15 10.1193 16.1193 9 17.5 9C18.8807 9 20 10.1193 20 11.5Z" fill="currentColor"/><path d="M12.9328 16.5138C13.7438 17.1393 13.6445 18.4143 12.7418 18.89C11.3435 19.6677 9.67618 20 8 20C6.32382 20 4.65648 19.6677 3.25818 18.89C2.35554 18.4143 2.25617 17.1393 3.06717 16.5138C4.7588 15.1531 6.45384 14 8 14C9.54616 14 11.2412 15.1531 12.9328 16.5138Z" fill="currentColor"/><path d="M20.7418 18.89C21.6445 18.4143 21.7438 17.1393 20.9328 16.5138C19.2412 15.1531 17.5462 14 16 14C14.4538 14 12.7588 15.1531 11.0672 16.5138C10.2562 17.1393 10.3555 18.4143 11.2582 18.89C12.6565 19.6677 14.3238 20 16 20C17.6762 20 19.3435 19.6677 20.7418 18.89Z" fill="currentColor"/></svg>+12.6K fans</span>
                <span class="inline-flex items-center text-xs bg-purple-100 text-purple-700 rounded-full px-2 py-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM13 12V7H11V14H17V12H13Z" fill="currentColor"/></svg>12h ago</span>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg overflow-hidden shadow-sm">
            <div class="h-48 w-full bg-black flex items-center justify-center">
              <video src="https://media.giphy.com/media/xUPGcIUJUmnZNhSuY0/giphy.mp4" autoplay loop muted class="h-full" />
            </div>
            <div class="p-4">
              <div class="text-sm font-medium text-gray-500 mb-1">SOCIAL REACTION</div>
              <div class="font-bold mb-2">TikTok & Instagram</div>
              <div class="flex gap-2 flex-wrap">
                <span class="inline-flex items-center text-xs bg-red-100 text-red-700 rounded-full px-2 py-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1"><path d="M15 4H21V10H19V6.41L11.4101 14L14.0001 16.59L12.5901 18L8.00006 13.41L2.41006 19L1.00006 17.59L8.00006 10.59L12.5901 15.17L16.59 11.17L13 11.17V9.17L19 9.17V4H15Z" fill="currentColor"/></svg>+314% growth</span>
                <span class="inline-flex items-center text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-1"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-1"><path d="M3 13H5V18H3V13ZM19 13H21V18H19V13ZM12 6C14.7614 6 17 8.23858 17 11H7C7 8.23858 9.23858 6 12 6ZM12 4C8.13401 4 5 7.13401 5 11H3C3 6.02944 7.02944 2 12 2C16.9706 2 21 6.02944 21 11H19C19 7.13401 15.866 4 12 4ZM8 14H16C17.1046 14 18 14.8954 18 16V19H17V21H15V19H9V21H7V19H6V16C6 14.8954 6.89543 14 8 14Z" fill="currentColor"/></svg>14.2K creators</span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg p-5 shadow-sm mb-8">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-pink-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5C2 3.89543 2.89543 3 4 3H20C21.1046 3 22 3.89543 22 5V19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V5ZM4 7V19H20V7H4Z" fill="currentColor"/><path d="M11 9H13V15H11V9Z" fill="currentColor"/><path d="M15 9H17V15H15V9Z" fill="currentColor"/><path d="M7 9H9V15H7V9Z" fill="currentColor"/></svg></span>
            <h2 class="font-bold">SHOP THE LOOK</h2>
          </div>
          
          <div class="grid gap-4">
            <div class="relative bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md">
              <div class="flex gap-4">
                <div class="w-20 h-20 rounded-md bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1590739292323-a5d779c1c9d9?w=300&h=300&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-bold">Vintage JPG Corset</h3>
                      <p class="text-sm text-gray-500">Jean Paul Gaultier</p>
                    </div>
                    <span class="text-sm font-bold text-gray-900">$3,200</span>
                  </div>
                  <div class="mt-2 flex justify-between items-center">
                    <div>
                      <div class="text-xs font-medium text-green-600">Our find: Zara, $89</div>
                      <div class="flex items-center mt-1">
                        <span class="inline-flex items-center text-xs bg-pink-100 text-pink-700 rounded-full px-2 py-0.5 mr-2">SELLING FAST</span>
                        <span class="text-xs text-gray-500">12 left</span>
                      </div>
                    </div>
                    <a href="#" class="text-xs bg-black text-white px-3 py-1.5 rounded-full font-medium inline-flex items-center">
                      Shop Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="currentColor"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md">
              <div class="flex gap-4">
                <div class="w-20 h-20 rounded-md bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=300&h=300&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-bold">Leather Boots</h3>
                      <p class="text-sm text-gray-500">The Row</p>
                    </div>
                    <span class="text-sm font-bold text-gray-900">$1,590</span>
                  </div>
                  <div class="mt-2 flex justify-between items-center">
                    <div>
                      <div class="text-xs font-medium text-green-600">Our find: Mango, $129</div>
                      <div class="flex items-center mt-1">
                        <span class="inline-flex items-center text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5 mr-2">EDITOR'S PICK</span>
                        <span class="text-xs text-gray-500">All sizes</span>
                      </div>
                    </div>
                    <a href="#" class="text-xs bg-black text-white px-3 py-1.5 rounded-full font-medium inline-flex items-center">
                      Shop Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="currentColor"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="relative bg-gray-50 rounded-lg p-4 transition-all hover:shadow-md">
              <div class="flex gap-4">
                <div class="w-20 h-20 rounded-md bg-gray-100 overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=300&h=300&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="flex-1">
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="font-bold">Re-Edition Bag</h3>
                      <p class="text-sm text-gray-500">Prada</p>
                    </div>
                    <span class="text-sm font-bold text-gray-900">$995</span>
                  </div>
                  <div class="mt-2 flex justify-between items-center">
                    <div>
                      <div class="text-xs font-medium text-green-600">Our find: JW PEI, $79</div>
                      <div class="flex items-center mt-1">
                        <span class="inline-flex items-center text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 mr-2">IN STOCK</span>
                        <span class="text-xs text-gray-500">Free shipping</span>
                      </div>
                    </div>
                    <a href="#" class="text-xs bg-black text-white px-3 py-1.5 rounded-full font-medium inline-flex items-center">
                      Shop Now
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ml-1"><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z" fill="currentColor"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-pink-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C16.97 2 21 6.03 21 11C21 15.97 16.97 20 12 20C7.03 20 3 15.97 3 11C3 9.56 3.33 8.19 3.92 6.97L5.59 8.64C5.22 9.37 5 10.17 5 11C5 14.86 8.14 18 12 18C15.86 18 19 14.86 19 11C19 7.14 15.86 4 12 4C10.34 4 8.84 4.65 7.76 5.73L9 7H3V1L4.93 2.93C6.41 1.43 8.56 0.491 10.91 0.142C11.27 0.0496 11.63 0 12 0C18.08 0 23 4.92 23 11C23 17.08 18.08 22 12 22C5.92 22 1 17.08 1 11C1 10.03 1.13 9.1 1.37 8.24C1.46 7.9 1.56 7.57 1.68 7.24L3.2 8.76C3.08 9.16 2.99 9.57 2.93 10L2.93 10C2.97 10.33 3 10.66 3 11H1C1 5.92 5.92 1 12 1V2Z" fill="currentColor"/></svg></span>
              <h2 class="font-bold">WHERE IT'S TRENDING</h2>
            </div>
            <div class="space-y-3">
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center justify-center w-8 h-8 bg-pink-100 text-pink-500 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="currentColor"/></svg></span>
                <div class="flex-1">
                  <div class="flex justify-between items-center">
                    <h3 class="font-medium">SoHo, NYC</h3>
                    <span class="text-xs font-bold text-green-500">+540%</span>
                  </div>
                  <div class="w-full h-1.5 bg-gray-100 rounded-full mt-1">
                    <div class="h-full bg-pink-500 rounded-full" style="width: 90%"></div>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center justify-center w-8 h-8 bg-pink-100 text-pink-500 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="currentColor"/></svg></span>
                <div class="flex-1">
                  <div class="flex justify-between items-center">
                    <h3 class="font-medium">West Village</h3>
                    <span class="text-xs font-bold text-green-500">+320%</span>
                  </div>
                  <div class="w-full h-1.5 bg-gray-100 rounded-full mt-1">
                    <div class="h-full bg-pink-500 rounded-full" style="width: 70%"></div>
                  </div>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <span class="inline-flex items-center justify-center w-8 h-8 bg-pink-100 text-pink-500 rounded-full"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="currentColor"/></svg></span>
                <div class="flex-1">
                  <div class="flex justify-between items-center">
                    <h3 class="font-medium">Paris 1st Arr.</h3>
                    <span class="text-xs font-bold text-green-500">+290%</span>
                  </div>
                  <div class="w-full h-1.5 bg-gray-100 rounded-full mt-1">
                    <div class="h-full bg-pink-500 rounded-full" style="width: 60%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-4 rounded-lg shadow-sm">
            <div class="flex items-center gap-2 mb-4">
              <span class="text-pink-500"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.2 6C15.2 7.9882 13.5882 9.6 11.6 9.6C9.61177 9.6 8 7.9882 8 6C8 4.0118 9.61177 2.4 11.6 2.4C13.5882 2.4 15.2 4.0118 15.2 6ZM17.6 6C17.6 9.31371 14.9137 12 11.6 12C8.28629 12 5.6 9.31371 5.6 6C5.6 2.68629 8.28629 0 11.6 0C14.9137 0 17.6 2.68629 17.6 6ZM14 13.6H9.2C5.43178 13.6 2.4 16.6318 2.4 20.4C2.4 21.2837 3.11634 22 4 22H19.2C20.0837 22 20.8 21.2837 20.8 20.4C20.8 16.6318 17.7682 13.6 14 13.6ZM0 20.4C0 15.3083 4.10837 11.2 9.2 11.2H14C19.0916 11.2 23.2 15.3083 23.2 20.4C23.2 22.6091 21.4091 24.4 19.2 24.4H4C1.79086 24.4 0 22.6091 0 20.4Z" fill="currentColor"/></svg></span>
              <h2 class="font-bold">ALSO SPOTTED ON</h2>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div class="relative">
                <div class="w-full h-24 rounded-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?w=200&h=200&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="absolute bottom-2 left-2 right-2">
                  <span class="text-xs text-white font-medium bg-black/70 px-2 py-0.5 rounded-sm">Hailey Bieber</span>
                </div>
              </div>
              
              <div class="relative">
                <div class="w-full h-24 rounded-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="absolute bottom-2 left-2 right-2">
                  <span class="text-xs text-white font-medium bg-black/70 px-2 py-0.5 rounded-sm">Gigi Hadid</span>
                </div>
              </div>
              
              <div class="relative">
                <div class="w-full h-24 rounded-md overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=200&h=200&fit=crop" class="w-full h-full object-cover" />
                </div>
                <div class="absolute bottom-2 left-2 right-2">
                  <span class="text-xs text-white font-medium bg-black/70 px-2 py-0.5 rounded-sm">Kylie Jenner</span>
                </div>
              </div>
            </div>
            
            <div class="mt-4 p-3 bg-pink-50 rounded-lg">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-pink-500"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.85 17.1L13.5 14.1L12.15 11.25L7.5 13.5V7.8H4.5V17.1M16.5 19.05L13.5 16.05L12.15 17.4L15.15 20.4L12.15 23.4L13.5 24.75L16.5 21.75L19.5 24.75L20.85 23.4L17.85 20.4L20.85 17.4L19.5 16.05M7.5 3H24V21H17.55L16.5 19.95V19.2L17.7 18L18.15 17.55L18.6 17.1L19.5 16.2V5.25H9.75V11.7L9 12L6 13.2V10.5H4.5V6H1.5V22.5H16.5V24H0V4.5H7.5V3Z" fill="currentColor"/></svg></span>
                <h3 class="font-medium text-sm">INSIDER INTEL</h3>
              </div>
              <p class="text-xs text-gray-700">Sources tell us this corset style will be heavily featured in Zara's upcoming Fall collection, hinting at a wider '90s revival trend.</p>
            </div>
          </div>
        </div>
        
        <div class="p-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg animate-pulse-slow">
          <div class="flex items-center gap-3">
            <span class="inline-flex items-center justify-center w-10 h-10 bg-white text-pink-600 rounded-full text-xl font-bold">!</span>
            <div>
              <h3 class="font-bold text-lg">TRENDING ALERT</h3>
              <p>This look has triggered a +245% surge in "vintage corset" searches across three continents in the last 3 hours!</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 5,
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

      <h2>This Week's Hottest Looks</h2>
      
      <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">The Relaxed Oversized Blazer</h4>
          <p style="font-size: 0.875rem; color: #666;">Cream oversized blazer paired with loose fit jeans and a structured white tee. Accessorized with a statement gold necklace and minimal hoop earrings.</p>
        </div>
        <div style="flex: 1; min-width: 300px;">
          <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Pop of Color Statement</h4>
          <p style="font-size: 0.875rem; color: #666;">Classic white button-down with vibrant emerald wide-leg trousers. The structured silhouette is balanced with minimal accessories and slicked-back hair.</p>
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

      <h2>Street Style Spotlight</h2>
      <div style="display: flex; gap: 1rem; margin: 1rem 0; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 260px;">
          <img src="https://images.unsplash.com/photo-1604336755604-65071bd79481?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Oversized Denim Evolution</h4>
          <p style="font-size: 0.875rem; color: #666;">Wide-leg jeans paired with a fitted crop top and chunky loafers. Note the structured shoulder bag as an accent piece.</p>
        </div>
        <div style="flex: 1; min-width: 260px;">
          <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=900&fit=crop" style="width: 100%; border-radius: 0.5rem; margin-bottom: 0.5rem;" />
          <h4 style="font-weight: bold; margin-bottom: 0.25rem;">Monochrome Reimagined</h4>
          <p style="font-size: 0.875rem; color: #666;">All-black ensemble with varying textures: leather pants, silk top, and structured wool coat. The clean silhouette elevates the monochrome look.</p>
        </div>
      </div>

      <div class="creator-spotlight">
        <h3>Rising Creator Alert</h3>
        <div class="creator" style="display: flex; align-items: center; gap: 1rem; margin-top: 0.5rem;">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop" style="width: 60px; height: 60px; border-radius: 9999px; object-fit: cover;" />
          <div>
            <span class="name" style="font-weight: bold; display: block;">@sophia.lee</span>
            <span class="stats" style="font-size: 0.875rem; color: #666; display: block;">2.1M new followers in 48h</span>
            <span class="prediction" style="font-size: 0.875rem; color: #8b5cf6; display: block;">Predicted to hit 5M by next week</span>
          </div>
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
            className="max-w-4xl mx-auto rounded-xl shadow-lg mb-12 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={selectedPreview.id}
          >
            {/* Premium Newsletter Header */}
            <div 
              className="relative p-6 text-white"
              style={{ 
                background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="bg-black/20 text-white border-white/20 mr-3">
                      {selectedPreview.category}
                    </Badge>
                    <span className="text-sm text-white/90">{selectedPreview.date}</span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold">{selectedPreview.title}</h2>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                  {selectedPreview.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-black/20 text-white hover:bg-black/30 transition-colors">
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
                  <TabsList className="h-12 bg-transparent mt-0 p-0 w-full justify-start space-x-2">
                    <TabsTrigger 
                      value="content" 
                      className="data-[state=active]:bg-[#f0ebe8] data-[state=active]:text-[var(--color-primary)] rounded-t-lg rounded-b-none px-4 h-12"
                    >
                      Newsletter Content
                    </TabsTrigger>
                    <TabsTrigger 
                      value="insights" 
                      className="data-[state=active]:bg-[#f0ebe8] data-[state=active]:text-[var(--color-primary)] rounded-t-lg rounded-b-none px-4 h-12"
                    >
                      AI Insights
                    </TabsTrigger>
                    <TabsTrigger 
                      value="shop" 
                      className="data-[state=active]:bg-[#f0ebe8] data-[state=active]:text-[var(--color-primary)] rounded-t-lg rounded-b-none px-4 h-12"
                    >
                      Shop The Look
                    </TabsTrigger>
                    <TabsTrigger 
                      value="social" 
                      className="data-[state=active]:bg-[#f0ebe8] data-[state=active]:text-[var(--color-primary)] rounded-t-lg rounded-b-none px-4 h-12"
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#f3e8ff] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="h-5 w-5 text-purple-600" />
                        <h3 className="font-bold">Growth Trajectory</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Instagram Engagement</span>
                          <span className="text-sm font-bold text-purple-700">+245%</span>
                        </div>
                        <div className="w-full h-1.5 bg-purple-100 rounded-full">
                          <div className="h-full bg-purple-600 rounded-full" style={{width: '80%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">TikTok Adoption</span>
                          <span className="text-sm font-bold text-purple-700">+367%</span>
                        </div>
                        <div className="w-full h-1.5 bg-purple-100 rounded-full">
                          <div className="h-full bg-purple-600 rounded-full" style={{width: '90%'}}></div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">Search Volume</span>
                          <span className="text-sm font-bold text-purple-700">+128%</span>
                        </div>
                        <div className="w-full h-1.5 bg-purple-100 rounded-full">
                          <div className="h-full bg-purple-600 rounded-full" style={{width: '60%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#fce7f3] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="h-5 w-5 text-pink-600" />
                        <h3 className="font-bold">Geographic Hotspots</h3>
                      </div>
                      <div className="space-y-3">
                        {selectedPreview.locations ? (
                          selectedPreview.locations.map((location, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="inline-flex items-center justify-center w-7 h-7 bg-pink-100 text-pink-600 rounded-full">
                                <MapPin className="h-3.5 w-3.5" />
                              </span>
                              <div className="flex-1">
                                <div className="flex justify-between items-center">
                                  <h3 className="text-sm font-medium">{location}</h3>
                                  <span className="text-xs font-bold text-pink-600">
                                    {selectedPreview.stats?.searchSpikes && selectedPreview.stats.searchSpikes[index] 
                                      ? selectedPreview.stats.searchSpikes[index]
                                      : "+200%"}
                                  </span>
                                </div>
                                <div className="w-full h-1.5 bg-pink-100 rounded-full mt-1">
                                  <div 
                                    className="h-full bg-pink-500 rounded-full" 
                                    style={{width: `${90 - (index * 15)}%`}}
                                  ></div>
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
                  
                  <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex gap-3">
                      <div className="text-purple-600 shrink-0 mt-1">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-purple-800 mb-1">AI-POWERED INSIGHT</h3>
                        <p className="text-xs text-purple-700">Our algorithms predict this trend will peak in 2 weeks, with 78% probability of mainstream adoption by major retailers within 45 days.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shop" className="p-0 m-0">
                <div className="p-6">
                  {selectedPreview.buyLinks ? (
                    <div className="grid gap-4">
                      {selectedPreview.buyLinks.map((item, index) => (
                        <div key={index} className="bg-[#f5f3ff] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                          <div className="md:flex">
                            <div className="md:w-1/4 bg-gray-100 md:h-auto h-32">
                              <img 
                                src={`https://source.unsplash.com/random/600x800/?fashion,${item.item.toLowerCase().replace(' ', '')}`} 
                                alt={item.item} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-4 md:w-3/4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <h3 className="font-bold text-lg">{item.item}</h3>
                                  <p className="text-xs text-gray-600">{item.brand}</p>
                                </div>
                                <Badge className="bg-purple-600 text-white hover:bg-purple-700">{item.shopNowLabel}</Badge>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-4 mb-3">
                                <div>
                                  <div className="text-xs text-gray-500">Original Price</div>
                                  <div className="text-lg font-bold">{item.originalPrice}</div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500">DripDial Price</div>
                                  <div className="text-lg font-bold text-purple-700">{item.dupePrice}</div>
                                  <div className="text-xs text-purple-700">Save {
                                    Math.round(
                                      (parseInt(item.originalPrice.replace('$', '').replace(',', '')) - 
                                      parseInt(item.dupePrice.replace('$', '').replace(',', ''))) /
                                      parseInt(item.originalPrice.replace('$', '').replace(',', '')) * 100
                                    )}%
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center">
                                <div className="text-xs">
                                  <span className="font-medium">Available at: </span>
                                  <span className="text-gray-600">{item.dupeStore}</span>
                                </div>
                                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 h-8">
                                  Shop Now
                                  <ExternalLink className="ml-1 h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-[#f5f3ff] rounded-lg p-6 text-center">
                      <ShoppingBag className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-2">No Shopping Links Available</h3>
                      <p className="text-sm text-gray-600 mb-3">This newsletter doesn't contain specific shopping recommendations.</p>
                      <Button size="sm" variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50">Browse Featured Items</Button>
                    </div>
                  )}
                </div>
              </TabsContent>
              
              <TabsContent value="social" className="p-0 m-0">
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                        <Instagram className="h-4 w-4 text-pink-600" />
                        Social Engagement
                      </h3>
                      
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        <div className="bg-[#fdf2f8] rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-pink-600">
                            {selectedPreview.stats?.likes || "1.2M"}
                          </div>
                          <div className="text-xs text-gray-500">Likes</div>
                        </div>
                        <div className="bg-[#fdf2f8] rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-pink-600">
                            {selectedPreview.stats?.shares || "230K"}
                          </div>
                          <div className="text-xs text-gray-500">Shares</div>
                        </div>
                        <div className="bg-[#fdf2f8] rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-pink-600">
                            {selectedPreview.stats?.saves || "450K"}
                          </div>
                          <div className="text-xs text-gray-500">Saves</div>
                        </div>
                      </div>
                      
                      <div className="bg-[#fdf2f8] p-3 rounded-lg">
                        <h4 className="text-sm font-medium mb-2">Content Performance</h4>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Engagement Rate</span>
                              <span className="font-medium">22.4%</span>
                            </div>
                            <div className="w-full h-1.5 bg-pink-100 rounded-full">
                              <div 
                                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" 
                                style={{width: '85%'}}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Viral Potential</span>
                              <span className="font-medium">High</span>
                            </div>
                            <div className="w-full h-1.5 bg-pink-100 rounded-full">
                              <div 
                                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" 
                                style={{width: '90%'}}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Creator Adoption</span>
                              <span className="font-medium">Growing</span>
                            </div>
                            <div className="w-full h-1.5 bg-pink-100 rounded-full">
                              <div 
                                className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" 
                                style={{width: '65%'}}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-bold mb-3 flex items-center gap-2">
                        <Users className="h-4 w-4 text-purple-600" />
                        Influencer Activity
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-[#f5f3ff] rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                            <img 
                              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" 
                              alt="Influencer" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="text-sm font-bold">Gigi Hadid</h4>
                              <div className="text-xs bg-purple-100 text-purple-600 rounded-full px-1.5 py-0.5">24h</div>
                            </div>
                            <p className="text-xs text-gray-600">Wore similar style at Paris Fashion Week</p>
                            <div className="text-xs text-pink-500">3.4M likes</div>
                          </div>
                        </div>
                        
                        <div className="bg-[#f5f3ff] rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                            <img 
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb" 
                              alt="Influencer" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="text-sm font-bold">Hailey Bieber</h4>
                              <div className="text-xs bg-purple-100 text-purple-600 rounded-full px-1.5 py-0.5">48h</div>
                            </div>
                            <p className="text-xs text-gray-600">Posted TikTok with vintage corset</p>
                            <div className="text-xs text-pink-500">2.1M likes</div>
                          </div>
                        </div>
                        
                        <div className="bg-[#f5f3ff] rounded-lg p-3 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
                            <img 
                              src="https://images.unsplash.com/photo-1517841905240-472988babdf9" 
                              alt="Influencer" 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h4 className="text-sm font-bold">Emma Chamberlain</h4>
                              <div className="text-xs bg-purple-100 text-purple-600 rounded-full px-1.5 py-0.5">3d</div>
                            </div>
                            <p className="text-xs text-gray-600">Featured in YouTube styling video</p>
                            <div className="text-xs text-pink-500">1.8M views</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>

          <div 
            className="max-w-4xl mx-auto rounded-xl text-center overflow-hidden mb-12"
            style={{ 
              background: "linear-gradient(to right, var(--color-primary), var(--color-secondary))",
            }}
          >
            <div className="p-6 text-white">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-white">Like What You See?</h3>
              <p className="mb-4 text-white/90 text-sm md:text-base">Subscribe to DripDial and get these premium fashion insights delivered directly to your inbox every week.</p>
              <Link href="/#subscribe">
                <Button className="bg-white text-[var(--color-primary)] hover:bg-white/90 px-6 py-2 rounded-full font-medium transition-all">
                  Subscribe Now - Just $10/month
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}