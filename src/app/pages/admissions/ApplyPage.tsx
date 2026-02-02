import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { CheckCircle, FileText, Users, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function ApplyPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Как поступить',
      subtitle: 'Простой и прозрачный процесс зачисления',
      description: 'Мы стремимся сделать процесс поступления максимально комфортным для семей.',
      hero: { cta: 'Начать процесс' },
      steps: {
        title: 'Процесс поступления',
        items: [
          {
            step: '1', icon: FileText, title: 'Подача заявки',
            description: 'Заполните онлайн-форму заявки и предоставьте необходимые документы',
            duration: '1 день',
          },
          {
            step: '2', icon: Calendar, title: 'Экскурсия и встреча',
            description: 'Посетите нашу школу, познакомьтесь с учителями',
            duration: '1-2 дня',
          },
          {
            step: '3', icon: CheckCircle, title: 'Оценка уровня',
            description: 'Ваш ребенок пройдет возрастную оценку',
            duration: '2-3 часа',
          },
          {
            step: '4', icon: Users, title: 'Решение о зачислении',
            description: 'Получите решение о зачислении',
            duration: '3-5 дней',
          },
        ],
      },
      documents: {
        title: 'Необходимые документы',
        required: {
          title: 'Обязательные',
          items: [
            'Свидетельство о рождении ребенка',
            'Паспорта родителей',
            'Фотографии ребенка (3x4)',
            'Медицинская карта',
          ],
        },
        optional: {
          title: 'Дополнительные',
          items: [
            'Табели и аттестаты',
            'Рекомендательные письма',
            'Сертификаты и награды',
            'Портфолио работ',
          ],
        },
      },
      faq: {
        title: 'Часто задаваемые вопросы',
        items: [
          { question: 'Сколько стоит процесс поступления?', answer: 'Регистрационный взнос составляет 150 USD.' },
          { question: 'Можно ли поступить в течение учебного года?', answer: 'Да, при наличии свободных мест.' },
          { question: 'Нужно ли знание английского для детского сада?', answer: 'Нет, программа предназначена для билингвального погружения.' },
          { question: 'Предоставляются ли стипендии?', answer: 'Да, начиная с 6 класса.' },
        ],
      },
      cta: { title: 'Готовы начать?', button: 'Подать заявку' },
    },
    uz: {
      title: 'Qanday qabul qilinish',
      subtitle: 'Oddiy va shaffof qabul jarayoni',
      description: "Biz oilalar uchun qabul jarayonini qulay qilishga intilamiz.",
      hero: { cta: 'Jarayonni boshlash' },
      steps: {
        title: 'Qabul jarayoni',
        items: [
          {
            step: '1', icon: FileText, title: 'Ariza topshirish',
            description: "Onlayn ariza formasini to'ldiring",
            duration: '1 kun',
          },
          {
            step: '2', icon: Calendar, title: 'Ekskursiya',
            description: "Maktabga tashrif buyuring",
            duration: '1-2 kun',
          },
          {
            step: '3', icon: CheckCircle, title: 'Baholash',
            description: 'Farzandingiz baholashdan o\'tadi',
            duration: '2-3 soat',
          },
          {
            step: '4', icon: Users, title: 'Qabul qarori',
            description: "Qabul qarori haqida xabar oling",
            duration: '3-5 kun',
          },
        ],
      },
      documents: {
        title: 'Kerakli hujjatlar',
        required: {
          title: 'Majburiy',
          items: [
            "Bolaning tug'ilganlik guvohnomasi",
            'Ota-onalarning pasporti',
            'Bolaning fotosuratlari (3x4)',
            'Tibbiy karta',
          ],
        },
        optional: {
          title: "Qo'shimcha",
          items: [
            'Darslik va attestatlar',
            'Tavsiya xatlari',
            'Sertifikatlar',
            'Portfolio',
          ],
        },
      },
      faq: {
        title: 'Tez-tez beriladigan savollar',
        items: [
          { question: 'Qabul jarayoni qancha turadi?', answer: "Ro'yxatga olish to'lovi 150 USD." },
          { question: "O'quv yili davomida kirish mumkinmi?", answer: "Ha, bo'sh joylar mavjud bo'lganda." },
          { question: "Bolalar bog'chasi uchun ingliz tili kerakmi?", answer: "Yo'q, dastur ikki tilli sho'ng'ish uchun mo'ljallangan." },
          { question: 'Stipendiyalar berilarmiki?', answer: '6-sinfdan boshlab.' },
        ],
      },
      cta: { title: 'Boshlashga tayyormisiz?', button: 'Ariza topshirish' },
    },
    en: {
      title: 'How to Apply',
      subtitle: 'Simple and transparent admission process',
      description: 'We make the admission process comfortable for families.',
      hero: { cta: 'Start Process' },
      steps: {
        title: 'Admission Process',
        items: [
          {
            step: '1', icon: FileText, title: 'Submit Application',
            description: 'Fill out the online application form',
            duration: '1 day',
          },
          {
            step: '2', icon: Calendar, title: 'Tour and Meeting',
            description: 'Visit our school and meet teachers',
            duration: '1-2 days',
          },
          {
            step: '3', icon: CheckCircle, title: 'Assessment',
            description: 'Your child will undergo assessment',
            duration: '2-3 hours',
          },
          {
            step: '4', icon: Users, title: 'Admission Decision',
            description: 'Receive admission decision',
            duration: '3-5 days',
          },
        ],
      },
      documents: {
        title: 'Required Documents',
        required: {
          title: 'Mandatory',
          items: [
            "Child's birth certificate",
            "Parents' passports",
            'Child photos (3x4)',
            'Medical records',
          ],
        },
        optional: {
          title: 'Additional',
          items: [
            'Report cards',
            'Recommendation letters',
            'Certificates and awards',
            'Portfolio of work',
          ],
        },
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          { question: 'How much does the admission process cost?', answer: 'The registration fee is 150 USD.' },
          { question: 'Can I apply during the academic year?', answer: 'Yes, subject to availability.' },
          { question: 'Is English required for Kindergarten?', answer: 'No, designed for bilingual immersion.' },
          { question: 'Are scholarships available?', answer: 'Yes, starting from grade 6.' },
        ],
      },
      cta: { title: 'Ready to Start?', button: 'Apply Now' },
    },
  };

  const t = content[language];

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
            className="text-small md:text-base font-ui text-white/80 mb-5 sm:mb-6 max-w-3xl mx-auto"
          >
            {t.description}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openModal}
            className="cta-button px-8 sm:px-10 bg-[#953130] text-white rounded-full hover:bg-[#f8eb78] hover:text-[#293863] transition-all shadow-lg font-ui font-semibold"
          >
            {t.hero.cta}
          </motion.button>
        </div>
      </motion.section>

      {/* Steps Section - Mobile H-Scroll, Desktop Grid */}
      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-6 sm:mb-8 text-center"
          >
            {t.steps.title}
          </motion.h2>
          
          {/* Mobile: Horizontal Scroll with peek pattern */}
          <div className="lg:hidden carousel-mobile">
            {t.steps.items.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card-mobile compact-p relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 shadow-lg"
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white rounded-full flex items-center justify-center text-lg font-display font-normal shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="text-[#293863] mb-3 mt-2">
                    <Icon className="icon-primary" />
                  </div>
                  
                  <h3 className="text-card-h3 font-display font-normal text-[#293863] mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-small font-ui text-gray-600 mb-3">{step.description}</p>
                  
                  <div className="inline-block px-3 py-1 bg-[#f8eb78]/20 text-[#293863] rounded-full text-caption font-ui font-semibold">
                    {step.duration}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {t.steps.items.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="relative bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white rounded-full flex items-center justify-center text-2xl font-display font-normal shadow-lg">
                    {step.step}
                  </div>
                  
                  <div className="text-[#293863] mb-4 mt-4">
                    <Icon className="w-10 h-10" />
                  </div>
                  
                  <h3 className="text-xl font-display font-normal text-[#293863] mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 font-ui mb-4">{step.description}</p>
                  
                  <div className="inline-block px-3 py-1 bg-[#f8eb78]/20 text-[#293863] rounded-full text-sm font-ui font-semibold">
                    {step.duration}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documents Section - Mobile Stack, Desktop Grid */}
      <section className="content-section px-4 sm:px-6 bg-gradient-to-br from-[#293863]/5 to-[#953130]/5">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-6 sm:mb-8 text-center"
          >
            {t.documents.title}
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-mobile-normal">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-mobile compact-p bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-card-h2 sm:text-xl font-display font-normal text-[#953130] mb-4">
                {t.documents.required.title}
              </h3>
              <ul className="flex flex-col gap-mobile-tight">
                {t.documents.required.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="icon-secondary text-[#953130] flex-shrink-0 mt-0.5" />
                    <span className="text-small sm:text-base font-ui text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-mobile compact-p bg-white rounded-2xl shadow-md"
            >
              <h3 className="text-card-h2 sm:text-xl font-display font-normal text-[#293863] mb-4">
                {t.documents.optional.title}
              </h3>
              <ul className="flex flex-col gap-mobile-tight">
                {t.documents.optional.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="icon-secondary text-[#293863] flex-shrink-0 mt-0.5" />
                    <span className="text-small sm:text-base font-ui text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Mobile Accordion */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-display font-normal text-[#293863] mb-6 sm:mb-8 text-center"
          >
            {t.faq.title}
          </motion.h2>
          
          <div className="flex flex-col gap-mobile-tight">
            {t.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="touch-target w-full px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-small sm:text-base font-display font-normal text-[#293863] pr-4">
                    {item.question}
                  </span>
                  {expandedFaq === index ? (
                    <ChevronUp className="icon-secondary text-[#953130] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="icon-secondary text-gray-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-3 sm:px-6 sm:pb-4 text-small sm:text-base font-ui text-gray-600">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
          {t.cta.title}
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
          {t.cta.button}
        </motion.button>
      </section>
    </div>
  );
}