import { motion } from 'motion/react';
import { Heart, Target, Shield, Users, TrendingUp, Award } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function BenefitsPage() {
  const { language } = useLanguage();
  const { heroOpacity, heroScale } = useScrollProgress();
  
  const benefits = [
    { icon: Heart, title: 'Heart', description: 'Description of Heart benefit', emoji: '❤️' },
    { icon: Target, title: 'Target', description: 'Description of Target benefit', emoji: '🎯' },
    { icon: Shield, title: 'Shield', description: 'Description of Shield benefit', emoji: '🛡️' },
    { icon: Users, title: 'Users', description: 'Description of Users benefit', emoji: '👥' },
    { icon: TrendingUp, title: 'Trending Up', description: 'Description of Trending Up benefit', emoji: '📈' },
    { icon: Award, title: 'Award', description: 'Description of Award benefit', emoji: '🏆' },
  ];

  return (
    <>
      <motion.section 
        style={{ 
          opacity: heroOpacity, 
          scale: heroScale,
          position: 'relative'
        }}
        className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#003A70] to-[#001a3d]"
      >
        <div className="relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl text-white mb-4 leading-[1.1]" style={{ fontWeight: 700 }}
          >
            {language === 'ru' ? 'Преимущества' : language === 'uz' ? 'Afzalliklar' : 'Benefits'}
          </motion.h1>
        </div>
      </motion.section>

      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-mobile compact-p bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#953130] to-[#293863] rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="icon-primary text-[#f8eb78]" />
                </div>
                <div className="text-3xl mb-3">{benefit.emoji}</div>
                <h3 className="text-card-h2 font-bold text-[#293863] mb-2">{benefit.title}</h3>
                <p className="text-small text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}