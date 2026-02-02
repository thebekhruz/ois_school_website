import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function GalleryPage() {
  const { language } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  return (
    <>
      {/* Hero - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#293863] to-[#1a2d4e] px-4 sm:px-6"
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] text-white">
            {language === 'ru' ? 'Галерея' : language === 'uz' ? 'Galereya' : 'Gallery'}
          </h1>
        </motion.div>
      </motion.section>

      {/* Gallery Grid - Mobile 2-col, Desktop 4-col */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[...Array(12)].map((_, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}