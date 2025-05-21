// src/components/layout/service/cards/ContentCard.tsx
'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ContentCardProps {
  title: string;
  icon: LucideIcon;
  mainContent: {
    title: string;
    description: string;
  };
}

export const ContentCard = ({ title, icon: Icon, mainContent }: ContentCardProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white/5 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 w-full max-w-md mx-auto"
  >
    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-white">{title}</h3>
    <div className="space-y-2 sm:space-y-3">
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-purple-400" />
        </div>
        <div>
          <p className="text-gray-300 font-medium text-sm sm:text-base">{mainContent.title}</p>
          <p className="text-black-400 text-xs sm:text-sm">{mainContent.description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);