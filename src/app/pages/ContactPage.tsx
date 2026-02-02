import { useLanguage } from '@/app/contexts/LanguageContext';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function ContactPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Свяжитесь с нами',
      subtitle: 'Мы всегда рады ответить на ваши вопросы',
      campuses: [
        {
          name: 'Ташкентский кампус',
          address: '123 University Street, Tashkent 100000, Uzbekistan',
          phone: '+998 71 123 4567',
          email: 'tashkent@oxbridge.uz',
          hours: 'Пн-Пт: 8:00-18:00, Сб: 9:00-14:00',
        },
        {
          name: 'Самаркандский кампус',
          address: '456 Education Avenue, Samarkand 140100, Uzbekistan',
          phone: '+998 66 234 5678',
          email: 'samarkand@oxbridge.uz',
          hours: 'Пн-Пт: 8:00-18:00, Сб: 9:00-14:00',
        },
      ],
      departments: {
        title: 'Отделы',
        items: [
          { name: 'Приемная комиссия', email: 'admissions@oxbridge.uz', phone: '+998 71 123 4567' },
          { name: 'Академический отдел', email: 'academic@oxbridge.uz', phone: '+998 71 123 4568' },
          { name: 'Финансовый отдел', email: 'finance@oxbridge.uz', phone: '+998 71 123 4569' },
        ],
      },
      cta: 'Записаться на экскурсию',
    },
    uz: {
      title: 'Biz bilan bog\'laning',
      subtitle: 'Biz har doim savollaringizga javob berishdan mamnunmiz',
      campuses: [
        {
          name: 'Toshkent kampusi',
          address: '123 University Street, Tashkent 100000, Uzbekistan',
          phone: '+998 71 123 4567',
          email: 'tashkent@oxbridge.uz',
          hours: 'Du-Ju: 8:00-18:00, Sh: 9:00-14:00',
        },
        {
          name: 'Samarqand kampusi',
          address: '456 Education Avenue, Samarkand 140100, Uzbekistan',
          phone: '+998 66 234 5678',
          email: 'samarkand@oxbridge.uz',
          hours: 'Du-Ju: 8:00-18:00, Sh: 9:00-14:00',
        },
      ],
      departments: {
        title: 'Bo\'limlar',
        items: [
          { name: 'Qabul komissiyasi', email: 'admissions@oxbridge.uz', phone: '+998 71 123 4567' },
          { name: 'Akademik bo\'lim', email: 'academic@oxbridge.uz', phone: '+998 71 123 4568' },
          { name: 'Moliya bo\'limi', email: 'finance@oxbridge.uz', phone: '+998 71 123 4569' },
        ],
      },
      cta: 'Ekskursiyaga yozilish',
    },
    en: {
      title: 'Get in Touch',
      subtitle: 'We are always happy to answer your questions',
      campuses: [
        {
          name: 'Tashkent Campus',
          address: '123 University Street, Tashkent 100000, Uzbekistan',
          phone: '+998 71 123 4567',
          email: 'tashkent@oxbridge.uz',
          hours: 'Mon-Fri: 8:00-18:00, Sat: 9:00-14:00',
        },
        {
          name: 'Samarkand Campus',
          address: '456 Education Avenue, Samarkand 140100, Uzbekistan',
          phone: '+998 66 234 5678',
          email: 'samarkand@oxbridge.uz',
          hours: 'Mon-Fri: 8:00-18:00, Sat: 9:00-14:00',
        },
      ],
      departments: {
        title: 'Departments',
        items: [
          { name: 'Admissions Office', email: 'admissions@oxbridge.uz', phone: '+998 71 123 4567' },
          { name: 'Academic Department', email: 'academic@oxbridge.uz', phone: '+998 71 123 4568' },
          { name: 'Finance Department', email: 'finance@oxbridge.uz', phone: '+998 71 123 4569' },
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
            className="hero-title text-hero-h1 font-display font-normal mb-3"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle font-serif text-white/90 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Campus Cards - Mobile Stack, Desktop Grid */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-mobile-normal">
          {t.campuses.map((campus, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-mobile compact-p bg-gradient-to-br from-[#293863] to-[#2d4775] text-white rounded-2xl shadow-lg"
            >
              <h3 className="text-card-h2 sm:text-2xl font-display font-normal mb-4 sm:mb-5">{campus.name}</h3>
              <div className="flex flex-col gap-mobile-tight">
                <div className="flex items-start gap-3">
                  <MapPin className="icon-secondary flex-shrink-0 mt-1" />
                  <span className="text-small sm:text-base font-ui">{campus.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="icon-secondary flex-shrink-0" />
                  <a 
                    href={`tel:${campus.phone}`} 
                    className="text-small sm:text-base font-ui hover:text-[#f8eb78] transition-colors touch-target"
                  >
                    {campus.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="icon-secondary flex-shrink-0" />
                  <a 
                    href={`mailto:${campus.email}`} 
                    className="text-small sm:text-base font-ui hover:text-[#f8eb78] transition-colors break-all touch-target"
                  >
                    {campus.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="icon-secondary flex-shrink-0" />
                  <span className="text-small sm:text-base font-ui">{campus.hours}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Departments - Mobile Stack, Desktop Grid */}
      <section className="content-section px-4 sm:px-6 bg-gradient-to-br from-[#293863]/5 to-[#953130]/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-6 sm:mb-8 text-center"
          >
            {t.departments.title}
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
            {t.departments.items.map((dept, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-mobile compact-p bg-white rounded-xl shadow-md"
              >
                <h3 className="text-card-h3 sm:text-lg font-display font-normal text-[#953130] mb-3">{dept.name}</h3>
                <div className="flex flex-col gap-mobile-tight">
                  <div className="flex items-center gap-2">
                    <Mail className="icon-small text-[#293863] flex-shrink-0" />
                    <a 
                      href={`mailto:${dept.email}`} 
                      className="text-gray-700 hover:text-[#953130] transition-colors text-small font-ui break-all touch-target"
                    >
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="icon-small text-[#293863] flex-shrink-0" />
                    <a 
                      href={`tel:${dept.phone}`} 
                      className="text-gray-700 hover:text-[#953130] transition-colors text-small font-ui touch-target"
                    >
                      {dept.phone}
                    </a>
                  </div>
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
          {language === 'ru' ? 'Посетите наш кампус' : language === 'uz' ? 'Kampusimizga tashrif buyuring' : 'Visit Our Campus'}
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