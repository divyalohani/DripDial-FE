import React from 'react';
import { motion } from 'framer-motion';

// Newsletter preview items - can be expanded
const previewItems = [
  {
    type: 'style-hack',
    title: 'Style Hack',
    content: 'Layer oversized blazers over mini dresses for instant fall transition vibes!',
    tag: 'CONTEMPORARY CHIC',
    trending: 'Trending this week'
  },
  {
    type: 'trend-alert', 
    title: 'AI Trend Alert',
    content: 'Cargo pants + crop tops trending on TikTok with +245% engagement this week!',
    stats: [
      { name: 'Linen Shirt', percent: '+182%' },
      { name: 'Slip Skirt', percent: '+96%' },
      { name: 'Platform Boots', percent: '+154%' }
    ] as Array<{name: string, percent: string}>
  },
  {
    type: 'budget-finds',
    title: 'Budget-friendly shopping picks under $30',
    content: 'This week\'s affordable fashion finds handpicked for your style'
  }
];

export default function MobileNewsletterPreview() {
  return (
    <div className="relative mx-auto max-w-[300px] h-auto">
      {/* Phone frame */}
      <div className="relative z-10 mx-auto">
        <div className="relative rounded-[40px] bg-black shadow-xl overflow-hidden">
          {/* Display and content area */}
          <div className="relative bg-white p-3 rounded-[32px] mx-[3px] my-[3px] shadow-inner overflow-hidden min-h-[540px]">
            {/* Content */}
            <div className="overflow-hidden">
              {/* Subscribe CTA */}
              <motion.div 
                className="bg-black text-white px-3 py-2 rounded-full mb-3 flex items-center justify-between"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm font-medium">Subscribe Now – Be First to Slay</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </motion.div>
              
              {/* Newsletter Content */}
              <div className="flex flex-col gap-3">
                {/* Style Hack Card */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#F5F5F5] to-white shadow-sm border border-[#E5E5E5]" 
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="aspect-[4/5]">
                    <img 
                      src="https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?q=80&w=1287&auto=format&fit=crop" 
                      alt="Style inspiration" 
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="text-xs font-bold text-white uppercase">{previewItems[0].tag}</div>
                      <div className="text-xs text-white/80">{previewItems[0].trending}</div>
                    </div>
                  </div>
                  
                  {/* Chat bubble with tip */}
                  <div className="p-3">
                    <div className="bg-[#F8F8F8] rounded-2xl p-3 shadow-sm">
                      <div className="flex gap-2 items-start">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                          <i className="fas fa-lightbulb text-white text-xs"></i>
                        </div>
                        <div>
                          <div className="font-medium text-sm mb-1">{previewItems[0].title}</div>
                          <div className="text-sm text-gray-700">{previewItems[0].content}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                {/* AI Trend Alert */}
                <motion.div 
                  className="bg-white rounded-2xl p-3 shadow-sm border border-[#E5E5E5]"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-2 mb-2">
                    <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-bolt text-white text-xs"></i>
                    </div>
                    <div className="font-medium">{previewItems[1].title}</div>
                  </div>
                  
                  <div className="flex gap-3 mb-3">
                    <div className="flex-1">
                      <p className="text-xs text-gray-700">{previewItems[1].content}</p>
                    </div>
                    <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1020&auto=format&fit=crop" 
                        alt="Trend" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="bg-[#F8F8F8] rounded-xl p-2">
                    <div className="text-xs font-medium mb-1">This week</div>
                    {previewItems[1].stats?.map((item, index) => (
                      <div key={index} className="flex justify-between items-center text-xs">
                        <span>{item.name}</span>
                        <span className="text-green-600">{item.percent}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Bottom phone navigation */}
              <motion.div 
                className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 border-t border-gray-200 bg-white"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="text-center">
                  <i className="fas fa-home text-black"></i>
                </div>
                <div className="text-center">
                  <i className="fas fa-search text-gray-400"></i>
                </div>
                <div className="text-center">
                  <i className="fas fa-bell text-gray-400"></i>
                </div>
                <div className="text-center">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 w-full flex justify-center py-2 pointer-events-none">
            <div className="bg-black w-24 h-5 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}