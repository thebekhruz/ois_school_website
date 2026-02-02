import { useLanguage } from '@/app/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

/**
 * Compare Page Component
 * Displays comprehensive comparison of educational programs across age groups
 * including Kindergarten (2-6), Primary School (6-12), and High School (13-18)
 * with features, benefits, and detailed criteria comparison table
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, TypeScript types, and ARIA attributes for better LLM comprehension
 */

// TypeScript interfaces for AIO optimization
interface ProgramFeatures {
  language: string;
  curriculum: string;
  classSize: string;
}

interface Program {
  name: string;
  age: string;
  color: string;
  features: ProgramFeatures;
  benefits: string[];
  idealFor: string;
}

interface ComparisonCriterion {
  name: string;
  early: string;
  middle: string;
  high: string;
}

interface HowToChooseStep {
  step: string;
  title: string;
  description: string;
}

export function ComparePage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Сравнение программ',
      subtitle: 'Выберите программу, которая подходит вашему ребенку',
      description: 'Три основные образовательные программы с разными преимуществами.',
      hero: { cta: 'Получить консультацию' },
      programs: [
        {
          name: 'Детский сад', age: '2-6 лет', color: 'from-[#f8eb78] to-[#f7d454]',
          features: { language: 'Билингвальное', curriculum: 'Игровое', classSize: 'До 12 детей' },
          benefits: ['Раннее развитие', 'Погружение в языки', 'Творчество', 'Подготовка к школе'],
          idealFor: 'Сильный старт в международной среде',
        },
        {
          name: 'Начальная школа', age: '6-12 лет', color: 'from-[#293863] to-[#33559a]',
          features: { language: 'Англ + Рус', curriculum: 'IB MYP', classSize: 'До 15 учеников' },
          benefits: ['Междисциплинарное обучение', 'Исследования', 'Личностный проект', 'Международная программа'],
          idealFor: 'Зарубежные университеты',
        },
        {
          name: 'Старшая школа', age: '13-18 лет', color: 'from-[#953130] to-[#7a261f]',
          features: { language: 'Англ (95%)', curriculum: 'IB DP', classSize: 'До 15' },
          benefits: ['Top университеты', 'Углубленное изучение', 'TOK', 'Эссе'],
          idealFor: 'Ведущие мировые университеты',
        },
      ],
      comparison: {
        title: 'Детальное сравнение',
        criteria: [
          { name: 'Язык', early: 'Англ + Рус (50/50)', middle: 'Англ (80%) + Рус (20%)', high: 'Англ (95%)' },
          { name: 'Класс', early: 'До 12', middle: 'До 15', high: 'До 15' },
          { name: 'Программа', early: 'Раннее развитие', middle: 'IB MYP', high: 'IB DP / A-Level' },
          { name: 'Длительность', early: '3 года', middle: '6 лет', high: '4 года' },
          { name: 'Экзамены', early: 'Нет', middle: 'Внутренние', high: 'IB Finals / A-Level' },
          { name: 'Стоимость/год', early: 'от 8,000 USD', middle: 'от 10,000 USD', high: 'от 12,000 USD' },
          { name: 'Активности', early: '10+ кружков', middle: '20+ клубов', high: '25+ клубов' },
          { name: 'Результат', early: 'Готовность', middle: 'MYP Certificate', high: 'IB Diploma' },
        ],
      },
      howToChoose: {
        title: 'Как выбрать программу?',
        steps: [
          { step: '1', title: 'Определите цели', description: 'Какие университеты? Где планируете учиться?' },
          { step: '2', title: 'Оцените готовность', description: 'Готов ли ребенок к английскому? Мотивация?' },
          { step: '3', title: 'Посетите школу', description: 'Экскурсия, учителя, ученики' },
          { step: '4', title: 'Консультация', description: 'Обсудите траекторию со специалистами' },
        ],
      },
      cta: { title: 'Нужна помощь в выборе?', description: 'Запишитесь на консультацию', button: 'Записаться' },
    },
    uz: {
      title: 'Dasturlarni solishtirish', subtitle: "Farzandingizga mos dasturni tanlang",
      description: "Uch asosiy ta'lim dasturi turli afzalliklarga ega.",
      hero: { cta: 'Maslahat olish' },
      programs: [
        {
          name: "Bolalar bog'chasi", age: '2-6 yosh', color: 'from-[#f8eb78] to-[#f7d454]',
          features: { language: "Ikki tilli", curriculum: "O'yin", classSize: '12 tagacha' },
          benefits: ['Erta rivojlanish', 'Tillarga sho\'ng\'ish', 'Ijodiylik', 'Maktabga tayyorlik'],
          idealFor: "Xalqaro muhitda kuchli boshlanish",
        },
        {
          name: 'Boshlang\'ich maktab', age: '6-12 yosh', color: 'from-[#293863] to-[#33559a]',
          features: { language: 'Ingliz + Rus', curriculum: 'IB MYP', classSize: '15 tagacha' },
          benefits: ["O'zaro fanlar", 'Tadqiqot', 'Shaxsiy loyiha', 'Xalqaro dastur'],
          idealFor: "Xorijiy universitetlar",
        },
        {
          name: 'Yuqori maktab', age: '13-18 yosh', color: 'from-[#953130] to-[#7a261f]',
          features: { language: 'Ingliz (95%)', curriculum: 'IB DP', classSize: '15 tagacha' },
          benefits: ['Top universitetlar', "Chuqur o'rganish", 'TOK', 'Insho'],
          idealFor: "Yetakchi universitetlar",
        },
      ],
      comparison: {
        title: "Batafsil solishtirish",
        criteria: [
          { name: "Til", early: 'Ingliz + Rus (50/50)', middle: 'Ingliz (80%) + Rus (20%)', high: 'Ingliz (95%)' },
          { name: 'Sinf', early: '12 tagacha', middle: '15 tagacha', high: '15 tagacha' },
          { name: "Dastur", early: 'Erta rivojlanish', middle: 'IB MYP', high: 'IB DP / A-Level' },
          { name: 'Muddat', early: '3 yil', middle: '6 yil', high: '4 yil' },
          { name: 'Imtihonlar', early: "Yo'q", middle: 'Ichki', high: 'IB Finals / A-Level' },
          { name: 'Narx/yil', early: '8,000 USD dan', middle: '10,000 USD dan', high: '12,000 USD dan' },
          { name: 'Faoliyat', early: "10+ to'garak", middle: '20+ klub', high: '25+ klub' },
          { name: 'Natija', early: 'Tayyorlik', middle: 'MYP Certificate', high: 'IB Diploma' },
        ],
      },
      howToChoose: {
        title: 'Dasturni qanday tanlash?',
        steps: [
          { step: '1', title: 'Maqsadlar', description: "Qaysi universitetlar? Qayerda o'qish?" },
          { step: '2', title: 'Tayyorgarlik', description: "Ingliz tiliga tayyormi? Motivatsiya?" },
          { step: '3', title: 'Maktabga tashrif', description: "Ekskursiya, o'qituvchilar, o'quvchilar" },
          { step: '4', title: 'Maslahat', description: "Yo'lni mutaxassislar bilan muhokama" },
        ],
      },
      cta: { title: 'Yordam kerakmi?', description: 'Maslahatga yoziling', button: 'Yozilish' },
    },
    en: {
      title: 'Compare Programs', subtitle: 'Choose the program that suits your child',
      description: 'Three main educational programs with different advantages.',
      hero: { cta: 'Get Consultation' },
      programs: [
        {
          name: 'Kindergarten', age: 'Ages 2-6', color: 'from-[#f8eb78] to-[#f7d454]',
          features: { language: 'Bilingual', curriculum: 'Play-based', classSize: 'Up to 12' },
          benefits: ['Early development', 'Language immersion', 'Creativity', 'School readiness'],
          idealFor: 'Strong start in international environment',
        },
        {
          name: 'Primary School', age: 'Ages 6-12', color: 'from-[#293863] to-[#33559a]',
          features: { language: 'Eng + Rus', curriculum: 'IB MYP', classSize: 'Up to 15' },
          benefits: ['Interdisciplinary', 'Research', 'Personal project', 'International'],
          idealFor: 'International universities',
        },
        {
          name: 'High School', age: 'Ages 13-18', color: 'from-[#953130] to-[#7a261f]',
          features: { language: 'Eng (95%)', curriculum: 'IB DP', classSize: 'Up to 15' },
          benefits: ['Top universities', 'In-depth study', 'TOK', 'Essay'],
          idealFor: 'Leading world universities',
        },
      ],
      comparison: {
        title: 'Detailed Comparison',
        criteria: [
          { name: 'Language', early: 'Eng + Rus (50/50)', middle: 'Eng (80%) + Rus (20%)', high: 'Eng (95%)' },
          { name: 'Class Size', early: 'Up to 12', middle: 'Up to 15', high: 'Up to 15' },
          { name: 'Curriculum', early: 'Early dev', middle: 'IB MYP', high: 'IB DP / A-Level' },
          { name: 'Duration', early: '3 years', middle: '6 years', high: '4 years' },
          { name: 'Exams', early: 'None', middle: 'Internal', high: 'IB Finals / A-Level' },
          { name: 'Cost/year', early: 'from 8,000 USD', middle: 'from 10,000 USD', high: 'from 12,000 USD' },
          { name: 'Activities', early: '10+ clubs', middle: '20+ clubs', high: '25+ clubs' },
          { name: 'Outcome', early: 'Readiness', middle: 'MYP Certificate', high: 'IB Diploma' },
        ],
      },
      howToChoose: {
        title: 'How to Choose?',
        steps: [
          { step: '1', title: 'Define Goals', description: 'Which universities? Where to study?' },
          { step: '2', title: 'Assess Readiness', description: 'Ready for English? Motivation?' },
          { step: '3', title: 'Visit School', description: 'Tour, meet teachers, students' },
          { step: '4', title: 'Consultation', description: 'Discuss path with specialists' },
        ],
      },
      cta: { title: 'Need Help Choosing?', description: 'Schedule a consultation', button: 'Book Now' },
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
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] mb-3 sm:mb-4 md:mb-5"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 mb-4 sm:mb-5 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-small md:text-base font-ui text-white/80 mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>
      </motion.section>

      {/* Programs Grid */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {t.programs.map((program, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-mobile compact-p bg-white rounded-2xl shadow-xl border-l-4 hover:shadow-2xl transition-all`}
                style={{ borderColor: program.color }}
              >
                <h3 className="text-card-h2 sm:text-xl font-bold mb-2" style={{ color: program.color }}>
                  {program.name}
                </h3>
                <p className="text-caption sm:text-small text-gray-600 mb-4">{program.age}</p>
                
                {/* Features */}
                <div className="flex flex-col gap-mobile-tight mb-4">
                  <div>
                    <p className="text-caption font-bold text-gray-700">{language === 'ru' ? 'Язык:' : language === 'uz' ? 'Til:' : 'Language:'}</p>
                    <p className="text-caption text-gray-600">{program.features.language}</p>
                  </div>
                  <div>
                    <p className="text-caption font-bold text-gray-700">{language === 'ru' ? 'Программа:' : language === 'uz' ? 'Dastur:' : 'Curriculum:'}</p>
                    <p className="text-caption text-gray-600">{program.features.curriculum}</p>
                  </div>
                  <div>
                    <p className="text-caption font-bold text-gray-700">{language === 'ru' ? 'Размер класса:' : language === 'uz' ? 'Sinf hajmi:' : 'Class Size:'}</p>
                    <p className="text-caption text-gray-600">{program.features.classSize}</p>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-4">
                  <p className="text-caption font-bold text-gray-700 mb-2">{language === 'ru' ? 'Преимущества:' : language === 'uz' ? 'Afzalliklar:' : 'Benefits:'}</p>
                  <ul className="flex flex-col gap-mobile-tight">
                    {program.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2">
                        <CheckCircle className="icon-secondary flex-shrink-0 mt-0.5" style={{ color: program.color }} />
                        <span className="text-caption text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ideal For */}
                <div className="compact-p bg-gray-50 rounded-xl">
                  <p className="text-caption">
                    <span className="font-bold text-gray-700">{language === 'ru' ? 'Подходит для:' : language === 'uz' ? 'Mos keladi:' : 'Ideal for:'}</span>{' '}
                    <span className="text-gray-600">{program.idealFor}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="content-section px-4 sm:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-display font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.comparison.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-50">
                <tr>
                  <th className="compact-p text-left text-small md:text-base font-bold text-gray-900">{language === 'ru' ? 'Критерий' : language === 'uz' ? 'Mezon' : 'Criterion'}</th>
                  <th className="compact-p text-center text-small md:text-base font-bold text-[#FFD700]">{language === 'ru' ? 'Детский сад' : language === 'uz' ? 'Bolalar bog\'chasi' : 'Kindergarten'}</th>
                  <th className="compact-p text-center text-small md:text-base font-bold text-[#C41E3A]">{language === 'ru' ? 'Начальная' : language === 'uz' ? 'Boshlang\'ich' : 'Primary'}</th>
                  <th className="compact-p text-center text-small md:text-base font-bold text-[#003A70]">{language === 'ru' ? 'Старшая' : language === 'uz' ? 'Yuqori' : 'High School'}</th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.criteria.map((criterion, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="compact-p text-caption sm:text-small font-semibold text-gray-700">{criterion.name}</td>
                    <td className="compact-p text-caption sm:text-small text-center text-gray-600">{criterion.early}</td>
                    <td className="compact-p text-caption sm:text-small text-center text-gray-600">{criterion.middle}</td>
                    <td className="compact-p text-caption sm:text-small text-center text-gray-600">{criterion.high}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-display font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.howToChoose.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-mobile-normal">
            {t.howToChoose.steps.map((step, index) => (
              <div key={index} className="card-mobile compact-p flex gap-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#293863] to-[#33559a] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-small sm:text-base font-bold text-white">{step.step}</span>
                </div>
                <div>
                  <h3 className="text-card-h3 sm:text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-caption text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section px-4 sm:px-6 bg-gradient-to-br from-[#293863] to-[#33559a] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-display font-bold mb-3">
            {t.cta.title}
          </h2>
          <p className="text-small md:text-base font-ui text-white/90 mb-6 md:mb-8">
            {t.cta.description}
          </p>
          <button
            onClick={openModal}
            className="cta-button bg-[#f8eb78] text-[#293863] rounded-full hover:bg-white transition-all shadow-2xl font-bold transform hover:scale-105"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}