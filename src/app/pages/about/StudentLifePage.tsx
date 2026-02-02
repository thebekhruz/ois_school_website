import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Heart, Users, Sparkles, Trophy, Music, Palette, FlaskConical, Code } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function StudentLifePage() {
  const { language } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const activityImages = [
    "https://images.unsplash.com/photo-1765947389862-afcc9035ba12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMGNsYXNzJTIwcGFpbnRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3Njk1ODE4NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1761243839303-618ae0906300?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBtdXNpYyUyMGNsYXNzJTIwY2hpbGRyZW4lMjBpbnN0cnVtZW50c3xlbnwxfHx8fDE3Njk1ODE4NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1731673092066-cff4ea887d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwc3BvcnRzJTIwYWN0aXZpdGllcyUyMHBsYXlpbmclMjBzb2NjZXJ8ZW58MXx8fHwxNzY5NTgxODUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1758270705518-b61b40527e76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwc3R1ZGVudHMlMjB3b3JraW5nJTIgdG9nZXRoZXIlMjB0ZWFtd29ya3xlbnwxfHx8fDE3Njk1ODE4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const activities = {
    ru: [
      { icon: Palette, title: 'Искусства', description: 'Художественные студии, театр, кино' },
      { icon: Music, title: 'Музыка', description: 'Хор, оркестр, инструментальные классы' },
      { icon: Trophy, title: 'Спорт', description: 'Футбол, баскетбол, плавание, боевые искусства' },
      { icon: Users, title: 'Клубы', description: 'Робототехника, дебаты, Model UN, волонтерство' },
    ],
    uz: [
      { icon: Palette, title: "San'at", description: "San'at studiyalari, teatr, kino" },
      { icon: Music, title: 'Musiqa', description: 'Xor, orkestr, instrumental sinflar' },
      { icon: Trophy, title: 'Sport', description: 'Futbol, basketbol, suzish, jang san\'ati' },
      { icon: Users, title: 'Klublar', description: 'Robototexnika, munozaralar, Model UN, ko\'ngillilik' },
    ],
    en: [
      { icon: Palette, title: 'Arts', description: 'Art studios, theater, film' },
      { icon: Music, title: 'Music', description: 'Choir, orchestra, instrumental classes' },
      { icon: Trophy, title: 'Sports', description: 'Football, basketball, swimming, martial arts' },
      { icon: Users, title: 'Clubs', description: 'Robotics, debate, Model UN, volunteering' },
    ],
  };

  const title = language === 'ru' ? 'Студенческая жизнь' : language === 'uz' ? 'Talaba hayoti' : 'Student Life';

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
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1]"
          >
            {title}
          </motion.h1>
        </div>
      </motion.section>

      {/* Activities Section - Mobile H-Scroll, Desktop Grid */}
      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: Horizontal Scroll */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {activities[language].map((activity, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="w-[280px] card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#953130] to-[#293863] rounded-xl flex items-center justify-center mb-3">
                    <activity.icon className="icon-primary text-[#f8eb78]" />
                  </div>
                  <h3 className="text-card-h2 font-bold text-[#293863] mb-2">{activity.title}</h3>
                  <p className="text-caption text-gray-600">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-normal px-6">
            {activities[language].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#953130] to-[#293863] rounded-xl flex items-center justify-center mb-4">
                  <activity.icon className="w-7 h-7 text-[#f8eb78]" />
                </div>
                <h3 className="text-lg font-bold text-[#293863] mb-3">{activity.title}</h3>
                <p className="text-small text-gray-600">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery - Mobile 1-Column, Desktop Masonry */}
      <section className="content-section bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile: 1-Column */}
          <div className="md:hidden">
            <div className="space-y-4">
              {activityImages.map((image, index) => (
                <div key={index} className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Masonry */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {activityImages.map((image, index) => (
                <div key={index} className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`Activity ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}