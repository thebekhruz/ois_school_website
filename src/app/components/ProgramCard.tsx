import { useState } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { BottomSheet } from '@/app/components/BottomSheet';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface ProgramData {
  titleRu: string;
  title: string;
  age: string;
  description: string;
  features: string[];
  link: string;
  color: string;
  emoji?: string;
}

interface ProgramCardProps {
  program: ProgramData;
  index: number;
  backgroundImage?: string;
}

/**
 * Mobile Version: Compact icon-based button that opens BottomSheet
 */
function ProgramCardMobile({ program, index }: ProgramCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, getLocalizedPath } = useLanguage();

  // Define emoji for each program
  const emojis = ['🎨', '📚', '🎓'];
  const emoji = program.emoji || emojis[index] || '🎓';

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="w-full p-4 border-2 border-gray-200 rounded-2xl bg-white hover:border-[#953130] transition-all duration-300 hover:shadow-lg text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`w-14 h-14 flex-shrink-0 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl shadow-md`}>
            {emoji}
          </div>
          
          {/* Text */}
          <div className="flex-1 min-w-0">
            <h3 className="text-[18px] font-display font-light text-[#293863] mb-0.5 truncate">
              {program.titleRu}
            </h3>
            <p className="text-[13px] text-gray-500 font-display tracking-wide uppercase">
              {program.age}
            </p>
          </div>
          
          {/* Arrow */}
          <ChevronRight size={24} className="text-gray-400 flex-shrink-0" />
        </div>
      </motion.button>

      {/* Bottom Sheet Modal */}
      <BottomSheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={program.titleRu}
      >
        {/* Age Badge */}
        <div className={`inline-block px-4 py-2 bg-gradient-to-r ${program.color} text-white rounded-full text-sm font-display mb-4 shadow-sm`}>
          {program.age}
        </div>

        {/* English Title */}
        <div className="text-sm text-gray-500 font-display tracking-wider uppercase mb-4">
          {program.title}
        </div>

        {/* Description */}
        <p className="text-[15px] leading-relaxed text-gray-700 font-ui mb-6">
          {program.description}
        </p>

        {/* Divider */}
        <div className={`h-px bg-gradient-to-r ${program.color} mb-6 opacity-20`} />

        {/* Features */}
        <div className="mb-8">
          <h4 className="text-[15px] font-display font-semibold text-[#293863] mb-4">
            {language === 'ru' ? 'Ключевые особенности:' : language === 'uz' ? 'Asosiy xususiyatlar:' : 'Key Features:'}
          </h4>
          <ul className="space-y-3">
            {program.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-[14px] text-gray-700 font-ui">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color} mt-2 flex-shrink-0`} />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <Link
          to={getLocalizedPath(program.link)}
          onClick={() => setIsOpen(false)}
          className={`block w-full py-4 px-6 bg-gradient-to-r ${program.color} text-white text-center rounded-xl font-display font-semibold text-[15px] hover:shadow-xl transition-all duration-300 active:scale-[0.98]`}
        >
          <div className="flex items-center justify-center gap-2">
            <span>{language === 'ru' ? 'Узнать больше' : language === 'uz' ? 'Batafsil' : 'Learn More'}</span>
            <ArrowRight size={18} />
          </div>
        </Link>
      </BottomSheet>
    </>
  );
}

/**
 * Desktop Version: Full card with all details visible
 */
function ProgramCardDesktop({ program, index, backgroundImage }: ProgramCardProps) {
  const { language, getLocalizedPath } = useLanguage();

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={getLocalizedPath(program.link)}
        className="block h-full"
      >
        <div className="relative h-full min-h-[420px] p-6 border-2 border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#953130] transition-all duration-300 hover:shadow-xl">
          {/* Background Image with Overlay */}
          {backgroundImage && (
            <div className="absolute inset-0 z-0">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundImage: `url(${backgroundImage})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            </div>
          )}

          {/* Content */}
          <div className="relative z-10">
            {/* Age Badge */}
            <motion.div
              className={`inline-block px-4 py-1.5 bg-gradient-to-r ${program.color} text-white rounded-full text-sm font-display mb-4 shadow-sm`}
              whileHover={{ scale: 1.05 }}
            >
              {program.age}
            </motion.div>
            
            {/* Title */}
            <div className="mb-4">
              <h3 className="text-2xl text-[#293863] font-display font-light mb-2 tracking-tight group-hover:text-[#953130] transition-colors">
                {program.titleRu}
              </h3>
              <div className="text-sm text-gray-500 font-display tracking-wider uppercase">
                {program.title}
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 font-ui text-[15px] leading-relaxed mb-6">
              {program.description}
            </p>
            
            {/* Divider Line */}
            <div className={`h-px bg-gradient-to-r ${program.color} mb-4 opacity-20`} />
            
            {/* Features */}
            <ul className="space-y-3 mb-6">
              {program.features.map((feature, fIdx) => (
                <motion.li
                  key={fIdx}
                  className="flex items-start gap-3 text-[14px] text-gray-700 font-ui"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + fIdx * 0.1 }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color} mt-2 flex-shrink-0`} />
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </ul>
            
            {/* Link Arrow */}
            <div className="flex items-center gap-2 text-[#293863] group-hover:text-[#953130] group-hover:gap-3 transition-all font-display text-sm tracking-wider">
              <span>{language === 'ru' ? 'УЗНАТЬ БОЛЬШЕ' : language === 'uz' ? 'BATAFSIL' : 'LEARN MORE'}</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/**
 * Adaptive Program Card Component
 * Automatically switches between mobile and desktop versions
 */
export function ProgramCard({ program, index, backgroundImage }: ProgramCardProps) {
  return (
    <>
      {/* Mobile Version: < 1024px */}
      <div className="lg:hidden">
        <ProgramCardMobile program={program} index={index} />
      </div>

      {/* Desktop Version: >= 1024px */}
      <div className="hidden lg:block">
        <ProgramCardDesktop 
          program={program} 
          index={index} 
          backgroundImage={backgroundImage}
        />
      </div>
    </>
  );
}
