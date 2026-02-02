import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown } from 'lucide-react';

interface FeatureData {
  icon?: LucideIcon;
  emoji: string;
  title: string;
  description: string;
}

interface FeatureCardProps {
  feature: FeatureData;
  index: number;
  color?: string;
}

/**
 * Mobile Version: Compact accordion cards
 */
function FeatureCardMobile({ feature, index, color = 'from-[#f8eb78] to-[#f7d454]' }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden"
    >
      {/* Header Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between gap-3 p-4 rounded-2xl transition-all duration-300 ${
          isExpanded
            ? 'bg-gradient-to-r from-[#293863] to-[#33559a] text-white shadow-lg'
            : 'bg-white border-2 border-gray-200 hover:border-[#f7d454] shadow-sm'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Emoji */}
          <div className="text-3xl flex-shrink-0">{feature.emoji}</div>

          {/* Title */}
          <h3
            className={`text-[15px] font-display font-semibold text-left truncate ${
              isExpanded ? 'text-white' : 'text-[#293863]'
            }`}
          >
            {feature.title}
          </h3>
        </div>

        {/* Chevron */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown
            size={20}
            className={isExpanded ? 'text-[#f7d454]' : 'text-gray-400'}
          />
        </motion.div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-2 p-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100">
              <p className="text-gray-700 font-ui text-[14px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Tablet Version: 2 columns with compact cards
 */
function FeatureCardTablet({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-[#f7d454]"
    >
      <div className="text-5xl mb-3">{feature.emoji}</div>
      <h3 className="text-lg font-display font-semibold text-[#293863] mb-2">
        {feature.title}
      </h3>
      <p className="text-gray-700 font-ui text-[14px] leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

/**
 * Desktop Version: Full card with large content
 */
function FeatureCardDesktop({ feature, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all border-4 border-[#f7d454] hover:border-[#293863]"
    >
      <div className="text-6xl mb-4">{feature.emoji}</div>
      <h3 className="text-2xl font-display font-bold text-[#293863] mb-3">
        {feature.title}
      </h3>
      <p className="text-gray-700 font-ui text-[15px] leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

/**
 * Adaptive Feature Card Component
 * Mobile: Accordion list
 * Tablet: 2 columns
 * Desktop: 4 columns
 */
export function FeatureCard({ feature, index, color }: FeatureCardProps) {
  return (
    <>
      {/* Mobile Version: < 768px */}
      <div className="md:hidden">
        <FeatureCardMobile feature={feature} index={index} color={color} />
      </div>

      {/* Tablet Version: 768px - 1024px */}
      <div className="hidden md:block lg:hidden">
        <FeatureCardTablet feature={feature} index={index} />
      </div>

      {/* Desktop Version: >= 1024px */}
      <div className="hidden lg:block">
        <FeatureCardDesktop feature={feature} index={index} />
      </div>
    </>
  );
}
