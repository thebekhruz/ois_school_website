import { useLanguage } from '@/app/contexts/LanguageContext';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function TourPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Забронировать экскурсию',
      subtitle: 'Посетите наш кампус и познакомьтесь со школой лично',
      description: 'Индивидуальная экскурсия — лучший способ понять, подходит ли Oxbridge вашей семье.',
      whatIncluded: {
        title: 'Что включено в экскурсию',
        items: [
          'Обзорная экскурсия по всему кампусу',
          'Посещение классов во время занятий',
          'Встреча с директором программы',
          'Знакомство с учителями',
          'Ответы на все ваши вопросы',
          'Информация о процессе поступления',
        ],
      },
      schedule: {
        title: 'Расписание экскурсий',
        note: 'Экскурсии проводятся в учебные дни',
        slots: [
          { day: 'Пн - Пт', time: '9:00, 11:00, 14:00', duration: '1.5 часа' },
          { day: 'Суббота', time: '10:00, 12:00', duration: '2 часа' },
        ],
      },
      cta: 'Забронировать экскурсию',
    },
    uz: {
      title: 'Ekskursiyaga yozilish',
      subtitle: 'Kampusimizga tashrif buyuring',
      description: "Shaxsiy ekskursiya Oxbridge oilangizga mos kelishini tushunishning eng yaxshi usuli.",
      whatIncluded: {
        title: 'Ekskursiyaga nima kiradi',
        items: [
          'Butun kampus bo\'ylab ekskursiya',
          'Darslar paytida sinflarni ziyorat',
          'Dastur direktori bilan uchrashuv',
          "O'qituvchilar bilan tanishuv",
          'Barcha savollarga javoblar',
          'Qabul jarayoni haqida ma\'lumot',
        ],
      },
      schedule: {
        title: 'Ekskursiya jadvali',
        note: "O'quv kunlarida ekskursiyalar o'tkaziladi",
        slots: [
          { day: 'Du - Ju', time: '9:00, 11:00, 14:00', duration: '1.5 soat' },
          { day: 'Shanba', time: '10:00, 12:00', duration: '2 soat' },
        ],
      },
      cta: 'Ekskursiyaga yozilish',
    },
    en: {
      title: 'Book a Tour',
      subtitle: 'Visit our campus and experience the school firsthand',
      description: 'A personalized school tour is the best way to understand if Oxbridge is right for your family.',
      whatIncluded: {
        title: "What's Included in the Tour",
        items: [
          'Comprehensive campus tour',
          'Classroom visits during lessons',
          'Meeting with program director',
          'Meet the teachers',
          'All your questions answered',
          'Admission process information',
        ],
      },
      schedule: {
        title: 'Tour Schedule',
        note: 'Tours are conducted on school days',
        slots: [
          { day: 'Mon - Fri', time: '9:00, 11:00, 14:00', duration: '1.5 hours' },
          { day: 'Saturday', time: '10:00, 12:00', duration: '2 hours' },
        ],
      },
      cta: 'Book a Tour',
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] text-white px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 font-display font-normal mb-3 sm:mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-subtitle font-serif text-white/90 mb-4 sm:mb-5 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-small md:text-base font-ui text-white/80 max-w-2xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </motion.section>

      {/* What's Included - Mobile Stack */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-6 sm:mb-8 text-center"
          >
            {t.whatIncluded.title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-mobile-tight sm:gap-mobile-normal">
            {t.whatIncluded.items.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-mobile compact-p flex items-start gap-3 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100"
              >
                <CheckCircle className="icon-secondary text-[#953130] flex-shrink-0 mt-0.5" />
                <span className="text-small sm:text-base font-ui text-gray-700">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section - Mobile Stack */}
      <section className="content-section px-4 sm:px-6 bg-gradient-to-br from-[#293863]/5 to-[#953130]/5">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-3 text-center"
          >
            {t.schedule.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-small sm:text-base font-ui text-gray-600 mb-6 sm:mb-8"
          >
            {t.schedule.note}
          </motion.p>
          
          <div className="grid sm:grid-cols-2 gap-mobile-normal">
            {t.schedule.slots.map((slot, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-mobile compact-p bg-white rounded-2xl shadow-md"
              >
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <Calendar className="icon-primary sm:w-9 sm:h-9 text-[#953130]" />
                  <h3 className="text-card-h2 sm:text-xl font-display font-normal text-[#293863]">{slot.day}</h3>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="icon-secondary text-[#293863]" />
                  <span className="text-small sm:text-base font-ui text-gray-700">{slot.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="icon-secondary text-[#293863]" />
                  <span className="text-small sm:text-base font-ui text-gray-700">{slot.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section px-4 sm:px-6 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-section-h1 md:text-3xl font-display font-normal mb-5 sm:mb-6"
        >
          {language === 'ru' ? 'Готовы посетить нас?' : language === 'uz' ? 'Bizga tashrif buyurishga tayyormisiz?' : 'Ready to Visit Us?'}
        </motion.h2>
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal} 
          className="cta-button px-8 sm:px-10 bg-white text-[#953130] rounded-full hover:bg-[#f8eb78] hover:text-[#293863] transition-all shadow-lg font-ui font-semibold"
        >
          {t.cta}
        </motion.button>
      </section>
    </div>
  );
}