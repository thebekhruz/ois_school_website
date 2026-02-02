import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LucideIcon, ChevronDown } from 'lucide-react';

interface PrincipleData {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

interface ApproachCardProps {
  principle: PrincipleData;
  index: number;
}

/**
 * Mobile Version: Icon Pills with inline expansion (accordion)
 */
function ApproachCardMobile({ principle, index }: ApproachCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = principle.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="overflow-hidden"
    >
      {/* Pill Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
          isExpanded
            ? 'bg-gradient-to-r from-[#33559a] to-[#293863] text-white shadow-lg'
            : 'bg-white border-2 border-gray-200 hover:border-[#f7d454] text-[#293863]'
        }`}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {/* Icon */}
          <div
            className={`w-10 h-10 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors ${
              isExpanded
                ? 'bg-[#f7d454]'
                : 'bg-gradient-to-br from-[#33559a] to-[#293863]'
            }`}
          >
            <Icon
              size={20}
              className={isExpanded ? 'text-[#293863]' : 'text-[#f7d454]'}
            />
          </div>

          {/* Text */}
          <div className="text-left min-w-0 flex-1">
            <div
              className={`text-[11px] font-display tracking-wide mb-0.5 truncate ${
                isExpanded ? 'text-[#f7d454]' : 'text-[#953130]'
              }`}
            >
              {principle.title}
            </div>
            <div className="text-[15px] font-display font-normal truncate">
              {principle.subtitle}
            </div>
          </div>
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
                {principle.description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * Desktop Version: Full card with hover effects
 */
function ApproachCardDesktop({ principle, index }: ApproachCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = principle.icon;

  return (
    <motion.div
      className="group relative p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#f7d454] hover:shadow-2xl transition-all duration-300 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#f8eb78]/10 to-[#f7d454]/10 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={false}
      />

      {/* Icon */}
      <motion.div
        className="relative w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#33559a] to-[#293863] flex items-center justify-center"
        animate={
          isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] } : {}
        }
        transition={{ duration: 0.5 }}
      >
        <Icon size={24} className="text-[#f7d454]" />
      </motion.div>

      {/* Title */}
      <div className="relative mb-3">
        <div className="text-sm text-[#953130] font-display tracking-wider mb-1">
          {principle.title}
        </div>
        <h3 className="text-xl text-[#293863] font-display font-normal">
          {principle.subtitle}
        </h3>
      </div>

      {/* Description */}
      <p className="relative text-gray-600 font-ui text-sm leading-relaxed">
        {principle.description}
      </p>
    </motion.div>
  );
}

/**
 * Adaptive Approach Card Component
 */
export function ApproachCard({ principle, index }: ApproachCardProps) {
  return (
    <>
      {/* Mobile Version: < 1024px */}
      <div className="lg:hidden">
        <ApproachCardMobile principle={principle} index={index} />
      </div>

      {/* Desktop Version: >= 1024px */}
      <div className="hidden lg:block">
        <ApproachCardDesktop principle={principle} index={index} />
      </div>
    </>
  );
}
