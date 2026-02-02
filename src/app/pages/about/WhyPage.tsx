import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Target, Heart, Shield, Users2, Lightbulb, Trophy, TrendingUp, CheckCircle, Award, Globe, Users } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';
import { ApproachCard } from '@/app/components/ApproachCard';

export function WhyPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const reasons = {
    ru: [
      { icon: Award, title: 'Академическое превосходство', description: 'Наши студенты стабильно показывают высокие результаты IB и поступают в топ-университеты мира' },
      { icon: Globe, title: 'Международная среда', description: 'Более 30 национальностей в нашем студенческом сообществе создают уникальный мультикультурный опыт' },
      { icon: Users, title: 'Малые классы', description: 'До 15 студентов в классе гарантируют индивидуальный подход к каждому ученику' },
      { icon: TrendingUp, title: '100% поступление', description: 'Все наши выпускники поступают в университеты, 85% - в зарубежные вузы' },
    ],
    uz: [
      { icon: Award, title: 'Akademik mukammallik', description: "Talabalarimiz doimiy ravishda yuqori IB natijalarini ko'rsatadilar va dunyoning eng yaxshi universitetlariga kiradilar" },
      { icon: Globe, title: 'Xalqaro muhit', description: "Talabalar jamiyatimizda 30 dan ortiq millat noyob multimadaniy tajriba yaratadi" },
      { icon: Users, title: 'Kichik sinflar', description: "Sinfda 15 tagacha talaba har bir o'quvchiga individual yondashuvni kafolatlaydi" },
      { icon: TrendingUp, title: '100% kirish', description: "Barcha bitiruvchilarimiz universitetlarga kiradi, 85% - xorijiy OTMlarga" },
    ],
    en: [
      { icon: Award, title: 'Academic Excellence', description: 'Our students consistently achieve high IB scores and gain admission to top universities worldwide' },
      { icon: Globe, title: 'International Environment', description: 'Over 30 nationalities in our student community create a unique multicultural experience' },
      { icon: Users, title: 'Small Classes', description: 'Up to 15 students per class ensures individual attention to each student' },
      { icon: TrendingUp, title: '100% University Admission', description: 'All our graduates are admitted to universities, 85% to international institutions' },
    ],
  };

  const title = language === 'ru' ? 'Почему Oxbridge' : language === 'uz' ? 'Nega Oxbridge' : 'Why Oxbridge';
  const subtitle = language === 'ru' ? 'Присоединяйтесь к ведущей международной школе Узбекистана' : language === 'uz' ? "O'zbekistonning yetakchi xalqaro maktabiga qo'shiling" : "Join Uzbekistan's Leading International School";

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-First Typography */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] text-white px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] mb-3 sm:mb-4 md:mb-5"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Reasons Grid - Mobile H-Scroll, Desktop Grid */}
      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {reasons[language].map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[280px] card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#293863] to-[#33559a] rounded-xl flex items-center justify-center mb-3">
                    <reason.icon className="icon-primary text-[#f8eb78]" />
                  </div>
                  <h3 className="text-card-h2 font-bold text-[#293863] mb-2">{reason.title}</h3>
                  <p className="text-caption text-gray-600">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-normal">
            {reasons[language].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#293863] to-[#33559a] rounded-xl flex items-center justify-center mb-4">
                  <reason.icon className="w-7 h-7 text-[#f8eb78]" />
                </div>
                <h3 className="text-lg font-bold text-[#293863] mb-3">{reason.title}</h3>
                <p className="text-small text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Typography */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.75rem,6vw,3rem)] md:text-4xl font-display font-normal mb-6 sm:mb-8"
        >
          {language === 'ru' ? 'Станьте частью Oxbridge' : language === 'uz' ? "Oxbridge bir qismi bo'ling" : 'Become Part of Oxbridge'}
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal} 
          className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#953130] rounded-full hover:bg-[#f8eb78] hover:text-[#293863] transition-all shadow-lg text-base sm:text-lg font-ui font-semibold min-h-[44px]"
        >
          {language === 'ru' ? 'Подать заявку' : language === 'uz' ? 'Ariza topshirish' : 'Apply Now'}
        </motion.button>
      </section>
    </div>
  );
}