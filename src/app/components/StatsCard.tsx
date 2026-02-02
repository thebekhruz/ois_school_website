import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface StatData {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface StatsCardProps {
  stat: StatData;
  index: number;
}

/**
 * Mobile Version: Large vertical card with icon on left
 */
function StatsCardMobile({ stat, index }: StatsCardProps) {
  const Icon = stat.icon;

  return (
    <motion.div
      className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-[#f7d454] transition-all group shadow-sm hover:shadow-md"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon */}
      <motion.div
        className="w-16 h-16 flex-shrink-0 bg-gradient-to-br from-[#f8eb78] to-[#f7d454] rounded-2xl flex items-center justify-center shadow-md"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={32} className="text-[#293863]" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 min-w-0 text-left">
        <div className="text-[32px] leading-none font-display font-light text-[#953130] mb-1">
          {stat.value}
        </div>
        <div className="text-gray-700 font-ui text-[15px] leading-tight">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Desktop Version: Centered card with icon on top
 */
function StatsCardDesktop({ stat, index }: StatsCardProps) {
  const Icon = stat.icon;

  return (
    <motion.div
      className="text-center space-y-4 p-6 lg:p-8 rounded-2xl hover:bg-gray-50 transition-all group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <motion.div
        className="w-16 h-16 mx-auto bg-gradient-to-br from-[#f8eb78] to-[#f7d454] rounded-2xl flex items-center justify-center"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon size={32} className="text-[#293863]" />
      </motion.div>
      <div className="text-4xl lg:text-5xl font-display font-light text-[#953130]">
        {stat.value}
      </div>
      <div className="text-gray-600 font-ui text-sm leading-relaxed">
        {stat.label}
      </div>
    </motion.div>
  );
}

/**
 * Adaptive Stats Card Component
 */
export function StatsCard({ stat, index }: StatsCardProps) {
  return (
    <>
      {/* Mobile Version: < 768px */}
      <div className="md:hidden">
        <StatsCardMobile stat={stat} index={index} />
      </div>

      {/* Desktop Version: >= 768px */}
      <div className="hidden md:block">
        <StatsCardDesktop stat={stat} index={index} />
      </div>
    </>
  );
}
