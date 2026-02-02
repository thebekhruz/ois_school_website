import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Briefcase, Heart, Users, TrendingUp, CheckCircle, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function CareersPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      hero: { tag: 'Карьера', title: 'Работайте там, где ваша страсть меняет жизни', subtitle: 'Команда, строящая будущее образования в Узбекистане' },
      why: {
        title: 'Почему Oxbridge?',
        reasons: [
          { emoji: '💖', title: 'Культура заботы', description: '99% удовлетворённости. Среда для роста.' },
          { emoji: '👥', title: 'Сильная команда', description: 'Лучшие педагоги из разных стран.' },
          { emoji: '📈', title: 'Конкурентная зарплата', description: 'Справедливая оплата, бонусы, страховка.' },
          { emoji: '💼', title: 'Work-Life Balance', description: 'Разумная нагрузка, гибкий график.' },
        ],
      },
      positions: {
        title: 'Открытые вакансии',
        positions: [
          { title: 'IB DP Coordinator', department: 'Старшая школа', type: 'Полная', location: 'Ташкент', requirements: ['IB DP опыт', 'Английский', 'Лидерство', 'Uni applications'] },
          { title: 'Учитель математики (MYP)', department: 'Средняя', type: 'Полная', location: 'Ташкент', requirements: ['IB MYP', 'Математика', '3+ года', 'Английский'] },
          { title: 'Учитель начальных', department: 'Начальная', type: 'Полная', location: 'Ташкент', requirements: ['Опыт 6-12 лет', 'IB PYP', 'Билингв', 'Энтузиазм'] },
          { title: 'Психолог', department: 'Поддержка', type: 'Полная', location: 'Ташкент', requirements: ['Психология', 'Дети/подростки', 'Безопасность', 'Рус+англ'] },
        ],
      },
      benefits: { title: 'Что мы предлагаем', items: ['Конкурентная зарплата', 'Медстраховка', 'Проф. развитие', 'Бонусы', 'Гибкий график', 'Международная команда', 'Современный кампус', 'Обеды'] },
      cta: { title: 'Готовы присоединиться?', description: 'Отправьте резюме', button: 'Отправить резюме' },
    },
    uz: {
      hero: { tag: 'Karyera', title: "Ishtiyoqingiz hayotni o'zgartiradigan joyda ishlang", subtitle: "O'zbekistonda ta'lim kelajagini qurayotgan jamoa" },
      why: {
        title: 'Nega Oxbridge?',
        reasons: [
          { emoji: '💖', title: "G'amxo'rlik", description: "99% qoniqish. O'sish muhiti." },
          { emoji: '👥', title: 'Kuchli jamoa', description: 'Turli mamlakatlardan eng yaxshi pedagoglar.' },
          { emoji: '📈', title: 'Raqobatbardosh ish haqi', description: "Adolatli to'lov, bonuslar, sug'urta." },
          { emoji: '💼', title: 'Balans', description: "O'rtacha yuk, moslashuvchan jadval." },
        ],
      },
      positions: {
        title: "Ochiq bo'sh ish o'rinlari",
        positions: [
          { title: 'IB DP Koordinator', department: 'Yuqori', type: "To'liq", location: 'Toshkent', requirements: ['IB DP tajriba', 'Ingliz', 'Liderlik', 'Uni apps'] },
          { title: "Matematika o'qituvchisi", department: "O'rta", type: "To'liq", location: 'Toshkent', requirements: ['IB MYP', 'Matematika', '3+ yil', 'Ingliz'] },
          { title: "Boshlang'ich o'qituvchi", department: "Boshlang'ich", type: "To'liq", location: 'Toshkent', requirements: ['6-12 yosh tajriba', 'IB PYP', 'Ikki til', 'Ishtiyoq'] },
          { title: 'Psixolog', department: "Qo'llab-quvvatlash", type: "To'liq", location: 'Toshkent', requirements: ['Psixologiya', 'Bolalar', 'Xavfsizlik', 'Rus+ing'] },
        ],
      },
      benefits: { title: 'Nima taklif qilamiz', items: ['Raqobatbardosh maosh', "Sug'urta", 'Rivojlanish', 'Bonuslar', 'Moslashuvchan', 'Xalqaro jamoa', 'Zamonaviy kampus', 'Tushliklar'] },
      cta: { title: "Qo'shilishga tayyormisiz?", description: 'Rezyume yuboring', button: 'Yuborish' },
    },
    en: {
      hero: { tag: 'Careers', title: 'Work where your passion changes lives', subtitle: 'Building the future of education in Uzbekistan' },
      why: {
        title: 'Why Oxbridge?',
        reasons: [
          { emoji: '💖', title: 'Culture of Care', description: '99% satisfaction. Growth environment.' },
          { emoji: '👥', title: 'Strong Team', description: 'Best educators from different countries.' },
          { emoji: '📈', title: 'Competitive Salary', description: 'Fair pay, bonuses, insurance.' },
          { emoji: '💼', title: 'Work-Life Balance', description: 'Reasonable workload, flexible schedule.' },
        ],
      },
      positions: {
        title: 'Open Positions',
        positions: [
          { title: 'IB DP Coordinator', department: 'High School', type: 'Full-time', location: 'Tashkent', requirements: ['IB DP exp', 'English', 'Leadership', 'Uni apps'] },
          { title: 'Math Teacher (MYP)', department: 'Middle', type: 'Full-time', location: 'Tashkent', requirements: ['IB MYP', 'Math degree', '3+ years', 'English'] },
          { title: 'Primary Teacher', department: 'Primary', type: 'Full-time', location: 'Tashkent', requirements: ['Ages 6-12 exp', 'IB PYP', 'Bilingual', 'Enthusiasm'] },
          { title: 'Psychologist', department: 'Support', type: 'Full-time', location: 'Tashkent', requirements: ['Psychology', 'Children/teens', 'Safety', 'Rus+Eng'] },
        ],
      },
      benefits: { title: 'What We Offer', items: ['Competitive salary', 'Medical insurance', 'Prof. development', 'Bonuses', 'Flexible schedule', 'International team', 'Modern campus', 'Meals'] },
      cta: { title: 'Ready to Join?', description: 'Send your resume', button: 'Send Resume' },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#f8eb78]/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 border border-[#f8eb78]/30">
            <Briefcase className="icon-secondary text-[#f8eb78]" />
            <span className="font-ui font-semibold text-badge md:text-sm text-white">{t.hero.tag}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] text-white mb-3 sm:mb-4 md:mb-5"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Why Join - Mobile Stacked */}
      <section className="content-section bg-gray-50 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-display text-[#293863] text-center mb-8">
            {t.why.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-mobile-normal">
            {t.why.reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-mobile compact-p bg-white rounded-2xl shadow-lg text-center"
              >
                <div className="text-3xl mb-3">{reason.emoji}</div>
                <h3 className="text-card-h2 font-bold text-[#293863] mb-2">{reason.title}</h3>
                <p className="text-caption text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions - Mobile 1-Col */}
      <section className="content-section bg-white px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-display text-[#293863] text-center mb-8">
            {t.positions.title}
          </h2>
          <div className="flex flex-col gap-mobile-tight">
            {t.positions.positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="card-mobile compact-p bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-card-h2 sm:text-lg font-bold text-[#293863] mb-1">{position.title}</h3>
                    <div className="flex flex-wrap gap-2 text-caption text-gray-600">
                      <span className="flex items-center gap-1">
                        <Building className="icon-secondary" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="icon-secondary" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="icon-secondary" />
                        {position.location}
                      </span>
                    </div>
                  </div>
                  <button className="btn-mobile-compact bg-[#293863] text-white rounded-lg hover:bg-[#1f2a4a] transition-colors whitespace-nowrap">
                    Apply
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.map((req, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 text-caption text-gray-700 rounded-lg">
                      {req}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Mobile Grid */}
      <section className="content-section bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-display text-[#293863] text-center mb-8">
            {t.benefits.title}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-mobile-tight">
            {t.benefits.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="compact-p bg-white rounded-xl shadow-md text-center"
              >
                <CheckCircle className="icon-secondary text-[#953130] mx-auto mb-2" />
                <p className="text-caption sm:text-small font-semibold text-gray-700">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(1.75rem,6vw,3rem)] md:text-4xl font-display font-normal mb-4 sm:mb-6"
          >
            {t.cta.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-xl font-serif text-white/90 mb-8 sm:mb-10"
          >
            {t.cta.description}
          </motion.p>
          <motion.a
            href="mailto:careers@oxbridge.uz"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#953130] rounded-full hover:bg-[#f8eb78] hover:text-[#293863] transition-all shadow-lg text-base sm:text-lg font-ui font-semibold min-h-[44px]"
          >
            <Mail size={20} />
            {t.cta.button}
          </motion.a>
        </div>
      </section>
    </div>
  );
}