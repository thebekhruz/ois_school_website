import { useLanguage } from '@/app/contexts/LanguageContext';
import { BookOpen, Award, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function RussianSchoolPage() {
  const { language, getLocalizedPath } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  return (
    <>
      {/* Hero Section - Mobile-First Optimized */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#C41E3A] to-[#A01830] px-4 sm:px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="hero-title text-hero-h1 md:text-4xl lg:text-5xl text-white mb-3 sm:mb-4 md:mb-5 font-display">
            {language === 'ru' ? 'Российская школьная программа' : language === 'uz' ? 'Rossiya maktab dasturi' : 'Russian School Program'}
          </h1>
          <p className="text-small sm:text-base md:text-lg text-white/90 font-serif">
            {language === 'ru' ? 'Качественное образование по стандартам РФ в Узбекистане' : language === 'uz' ? 'Rossiya standartlariga asoslangan sifatli ta\'lim' : 'Quality education based on Russian Federation standards'}
          </p>
        </motion.div>
      </motion.section>
    </>
  );
}