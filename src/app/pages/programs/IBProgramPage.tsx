import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Award, Globe, BookOpen, Target, TrendingUp, Users, Sparkles, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';
import { FeatureCard } from '@/app/components/FeatureCard';

/**
 * IB Program Page Component
 * Displays comprehensive information about the International Baccalaureate program
 * including PYP, MYP, and DP curricula, learner profile attributes, and student results
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, and TypeScript types for better LLM comprehension
 */

// TypeScript types for AIO optimization
interface LearnerAttribute {
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

interface ProgramFeature {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export function IBProgramPage() {
  const { language, getLocalizedPath } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'International Baccalaureate',
      subtitle: 'Международная программа образования, признанная во всем мире',
      description: 'IB — это не просто программа обучения, это философия образования, направленная на развитие любознательных, знающих и заботливых молодых людей.',
      hero: {
        badge: 'IB World School',
        cta: 'Узнать больше',
      },
      why: {
        title: 'Почему IB?',
        items: [
          {
            icon: 'globe',
            title: 'Международное признание',
            description: 'IB признается более чем 5000 университетами в 100+ странах мира',
          },
          {
            icon: 'users',
            title: 'Целостное развитие',
            description: 'Развитие не только академических, но и социальных навыков',
          },
          {
            icon: 'award',
            title: 'Высокие стандарты',
            description: 'Строгие критерии качества и постоянная оценка',
          },
        ],
      },
      programs: {
        title: 'Программы IB',
        items: [
          {
            icon: 'book',
            title: 'PYP (Классы 1-6)',
            subtitle: 'Primary Years Programme',
            description: 'Программа начальных классов фокусируется на развитии ребенка как исследователя, как в классе, так и за его пределами.',
            features: [
              'Трансдисциплинарное обучение',
              'Развитие навыков исследования',
              'Международный контекст',
              'Развитие личности',
            ],
          },
          {
            icon: 'award',
            title: 'DP (11-12 sinflar)',
            subtitle: 'Diploma Programme',
            description: "Diplom dasturi - bu ikki yillik qat'iy universitet oldi ta'lim dasturi.",
            features: [
              '6 предметных групп',
              'Теория познания (TOK)',
              'Расширенное эссе (EE)',
              'Творчество, активность, служение (CAS)',
            ],
          },
        ],
      },
      learnerProfile: {
        title: 'Профиль IB учащегося',
        subtitle: 'Мы стремимся воспитать учащихся, которые являются:',
        attributes: [
          { title: 'Любознательными', description: 'Развивают природное любопытство' },
          { title: 'Знающими', description: 'Изучают концепции, идеи и проблемы' },
          { title: 'Мыслителями', description: 'Критически и творчески мыслят' },
          { title: 'Коммуникабельными', description: 'Уверенно выражают идеи' },
          { title: 'Принципиальными', description: 'Действуют честно и справедливо' },
          { title: 'Открытыми', description: 'Понимают собственную культуру и других' },
          { title: 'Заботливыми', description: 'Проявляют сострадание и уважение' },
          { title: 'Рискующими', description: 'Готовы к новым ситуациям' },
          { title: 'Гармоничными', description: 'Понимают важность баланса' },
          { title: 'Рефлексирующими', description: 'Размышляют о своем обучении' },
        ],
      },
      diploma: {
        title: 'Структра IB Diploma',
        core: {
          title: 'Ядро програмы',
          items: [
            {
              title: 'Theory of Knowledge (TOK)',
              description: 'Критический анализ знаний и способов познания',
            },
            {
              title: 'Extended Essay (EE)',
              description: 'Независимое исследование на 4000 слов',
            },
            {
              title: 'Creativity, Activity, Service (CAS)',
              description: 'Развитие через творчество, спорт и служение',
            },
          ],
        },
        subjects: {
          title: '6 предметных групп',
          groups: [
            'Язык и литература',
            'Изучение языка',
            'Индивид и общество',
            'Науки',
            'Математика',
            'Искусства',
          ],
        },
      },
      results: {
        title: 'Результаты наших студентов',
        stats: [
          { value: '45', label: 'Средний балл IB', suffix: '/45' },
          { value: '100%', label: 'Получение диплома' },
          { value: '90%', label: 'Зачисление в Top 100 ВУЗов' },
        ],
      },
      cta: {
        title: 'Станьте частью IB сообщества',
        description: 'Присоединяйтесь к нашей школе и откройте мир возможностей',
        button: 'Записаться на экскурсию',
      },
    },
    uz: {
      title: 'International Baccalaureate',
      subtitle: "Butun dunyoda tan olingan xalqaro ta'lim dasturi",
      description: "IB - bu shunchaki ta'lim dasturi emas, bu qiziquvchan, bilimdon va g'amxo'r yoshlarni tarbiyalashga qaratilgan ta'lim falsafasi.",
      hero: {
        badge: 'IB World School',
        cta: "Ko'proq bilish",
      },
      why: {
        title: 'Nega IB?',
        items: [
          {
            icon: 'globe',
            title: 'Xalqaro tan olinish',
            description: "IB 100+ mamlakatda 5000 dan ortiq universitetlar tomonidan tan olingan",
          },
          {
            icon: 'users',
            title: 'Yaxlit rivojlanish',
            description: "Nafaqat akademik, balki ijtimoiy ko'nikmalarni ham rivojlantirish",
          },
          {
            icon: 'award',
            title: 'Yuqori standartlar',
            description: "Qat'iy sifat mezonlari va doimiy baholash",
          },
        ],
      },
      programs: {
        title: 'IB dasturlari',
        items: [
          {
            icon: 'book',
            title: 'PYP (1-6 sinflar)',
            subtitle: 'Primary Years Programme',
            description: "Boshlang'ich sinflar dasturi bolani sinf ichida ham, tashqarisida ham tadqiqotchi sifatida rivojlantirishga qaratilgan.",
            features: [
              "Transdistsiplinar ta'lim",
              "Tadqiqot ko'nikmalarini rivojlantirish",
              'Xalqaro kontekst',
              'Shaxsiyat rivojlanishi',
            ],
          },
          {
            icon: 'award',
            title: 'DP (11-12 sinflar)',
            subtitle: 'Diploma Programme',
            description: "Diplom dasturi - bu ikki yillik qat'iy universitet oldi ta'lim dasturi.",
            features: [
              '6 ta fan guruhi',
              'Bilish nazariyasi (TOK)',
              'Kengaytirilgan insho (EE)',
              'Ijodkorlik, faollik, xizmat (CAS)',
            ],
          },
        ],
      },
      learnerProfile: {
        title: "IB o'quvchisi profili",
        subtitle: "Biz quyidagilarga ega bo'lgan o'quvchilarni tarbiyalashga intilamiz:",
        attributes: [
          { title: 'Qiziquvchan', description: "Tabiiy qiziqishni rivojlantiradilar" },
          { title: 'Bilimdon', description: "Konsepsiyalar, g'oyalar va muammolarni o'rganadilar" },
          { title: 'Fikrlovchi', description: 'Tanqidiy va ijodiy fikr yuritadilar' },
          { title: 'Kommunikativ', description: "G'oyalarni ishonch bilan ifodalaydilar" },
          { title: 'Prinsipial', description: 'Halol va adolatli harakat qiladilar' },
          { title: 'Ochiq', description: "O'z madaniyati va boshqalarni tushunadilar" },
          { title: 'G\'amxo\'r', description: 'Hamdardlik va hurmat ko\'rsatadilar' },
          { title: 'Xavf qiluvchi', description: 'Yangi vaziyatlarga tayyor' },
          { title: 'Uyg\'un', description: 'Balans muhimligini tushunadilar' },
          { title: 'Refleksiv', description: "O'rganishi haqida o'ylaydilar" },
        ],
      },
      diploma: {
        title: 'IB Diploma tuzilishi',
        core: {
          title: 'Dastur yadrosi',
          items: [
            {
              title: 'Theory of Knowledge (TOK)',
              description: 'Bilimlar va bilish usullarini tanqidiy tahlil qilish',
            },
            {
              title: 'Extended Essay (EE)',
              description: '4000 so\'zli mustaqil tadqiqot',
            },
            {
              title: 'Creativity, Activity, Service (CAS)',
              description: 'Ijodkorlik, sport va xizmat orqali rivojlanish',
            },
          ],
        },
        subjects: {
          title: '6 ta fan guruhi',
          groups: [
            'Til va adabiyot',
            'Til o\'rganish',
            'Shaxs va jamiyat',
            'Fanlar',
            'Matematika',
            "San'at",
          ],
        },
      },
      results: {
        title: "Talabalarimiz natijalari",
        stats: [
          { value: '45', label: "O'rtacha IB balli", suffix: '/45' },
          { value: '100%', label: 'Diplom olish' },
          { value: '90%', label: 'Top 100 OTMlarga kirish' },
        ],
      },
      cta: {
        title: 'IB jamiyatining bir qismi bo\'ling',
        description: "Maktabimizga qo'shiling va imkoniyatlar dunyosini oching",
        button: 'Ekskursiyaga yozilish',
      },
    },
    en: {
      title: 'International Baccalaureate',
      subtitle: 'An internationally recognized education program',
      description: 'IB is not just a curriculum, it is an educational philosophy aimed at developing inquiring, knowledgeable and caring young people.',
      hero: {
        badge: 'IB World School',
        cta: 'Learn More',
      },
      why: {
        title: 'Why IB?',
        items: [
          {
            icon: 'globe',
            title: 'International Recognition',
            description: 'IB is recognized by over 5000 universities in 100+ countries',
          },
          {
            icon: 'users',
            title: 'Holistic Development',
            description: 'Development of not only academic but also social skills',
          },
          {
            icon: 'award',
            title: 'High Standards',
            description: 'Rigorous quality criteria and continuous assessment',
          },
        ],
      },
      programs: {
        title: 'IB Programs',
        items: [
          {
            icon: 'book',
            title: 'PYP (Ages 3-11)',
            subtitle: 'Primary Years Programme',
            description: 'The Primary Years Programme focuses on developing the child as an inquirer, both in the classroom and beyond.',
            features: [
              'Transdisciplinary learning',
              'Development of inquiry skills',
              'International context',
              'Personal development',
            ],
          },
          {
            icon: 'award',
            title: 'DP (Grades 11-12)',
            subtitle: 'Diploma Programme',
            description: 'The Diploma Programme is a rigorous two-year pre-university education program.',
            features: [
              '6 subject groups',
              'Theory of Knowledge (TOK)',
              'Extended Essay (EE)',
              'Creativity, Activity, Service (CAS)',
            ],
          },
        ],
      },
      learnerProfile: {
        title: 'IB Learner Profile',
        subtitle: 'We strive to develop learners who are:',
        attributes: [
          { title: 'Inquirers', description: 'Develop their natural curiosity' },
          { title: 'Knowledgeable', description: 'Explore concepts, ideas and issues' },
          { title: 'Thinkers', description: 'Think critically and creatively' },
          { title: 'Communicators', description: 'Express ideas with confidence' },
          { title: 'Principled', description: 'Act with integrity and honesty' },
          { title: 'Open-minded', description: 'Understand their own cultures and others' },
          { title: 'Caring', description: 'Show empathy and respect' },
          { title: 'Risk-takers', description: 'Approach new situations' },
          { title: 'Balanced', description: 'Understand the importance of balance' },
          { title: 'Reflective', description: 'Give thoughtful consideration to learning' },
        ],
      },
      diploma: {
        title: 'IB Diploma Structure',
        core: {
          title: 'Core Components',
          items: [
            {
              title: 'Theory of Knowledge (TOK)',
              description: 'Critical analysis of knowledge and ways of knowing',
            },
            {
              title: 'Extended Essay (EE)',
              description: 'Independent research of 4000 words',
            },
            {
              title: 'Creativity, Activity, Service (CAS)',
              description: 'Development through creativity, sports and service',
            },
          ],
        },
        subjects: {
          title: '6 Subject Groups',
          groups: [
            'Language and Literature',
            'Language Acquisition',
            'Individuals and Societies',
            'Sciences',
            'Mathematics',
            'The Arts',
          ],
        },
      },
      results: {
        title: 'Our Students\' Results',
        stats: [
          { value: '45', label: 'Average IB Score', suffix: '/45' },
          { value: '100%', label: 'Diploma Achievement' },
          { value: '90%', label: 'Top 100 University Admission' },
        ],
      },
      cta: {
        title: 'Become Part of the IB Community',
        description: 'Join our school and open a world of opportunities',
        button: 'Book a Tour',
      },
    },
  };

  const t = content[language];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'globe':
        return <Globe className="w-8 h-8" />;
      case 'users':
        return <Users className="w-8 h-8" />;
      case 'award':
        return <Award className="w-8 h-8" />;
      case 'book':
        return <BookOpen className="w-8 h-8" />;
      default:
        return <BookOpen className="w-8 h-8" />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-[#003A70] text-white px-4 md:px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A70] to-[#001a3d]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded text-badge font-semibold mb-4 md:mb-5 border border-white/20"
              >
                {t.hero.badge}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hero-title text-hero-h1 sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 tracking-tight"
              >
                {t.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-card-h3 lg:text-xl text-gray-200 mb-4 md:mb-6 font-light"
              >
                {t.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-small md:text-base text-white/80 mb-6 md:mb-8"
              >
                {t.description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="cta-button bg-[#FFD700] text-[#003A70] rounded-full hover:bg-white transition-all shadow-2xl font-bold transform"
              >
                {t.hero.cta}
              </motion.button>
            </div>

            {/* Right - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBkaXZlcnNlJTIwY2xhc3Nyb29tJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3Njk2NzUxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={language === 'ru' ? 'IB студенты' : language === 'uz' ? 'IB talabalari' : 'IB Students'}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/30 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why IB Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.why.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {t.why.items.map((item, index) => (
              <div key={index} className="card-mobile compact-p text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#003A70] to-[#004d99] rounded-full flex items-center justify-center mx-auto mb-3">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-card-h2 sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-small text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IB Programs Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.programs.title}
          </h2>
          <div className="flex flex-col gap-mobile-normal">
            {t.programs.items.map((program, index) => (
              <div key={index} className="card-mobile compact-p bg-white rounded-2xl shadow-xl border-l-4 border-[#003A70]">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#003A70] to-[#004d99] rounded-lg flex items-center justify-center flex-shrink-0">
                    {getIcon(program.icon)}
                  </div>
                  <div>
                    <h3 className="text-card-h2 sm:text-xl font-bold text-[#003A70] mb-1">{program.title}</h3>
                    <p className="text-caption sm:text-small text-gray-500 italic">{program.subtitle}</p>
                  </div>
                </div>
                <p className="text-small text-gray-700 mb-4">{program.description}</p>
                <div className="grid md:grid-cols-2 gap-mobile-tight">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="icon-secondary text-[#003A70] flex-shrink-0 mt-0.5" />
                      <span className="text-caption sm:text-small text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learner Profile Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3 text-center">
            {t.learnerProfile.title}
          </h2>
          <p className="text-small md:text-base text-gray-600 text-center mb-8 md:mb-10">
            {t.learnerProfile.subtitle}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-mobile-tight">
            {t.learnerProfile.attributes.map((attribute, index) => (
              <div key={index} className="compact-p text-center bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-200">
                <h3 className="text-card-h3 sm:text-base font-bold text-[#003A70] mb-1">{attribute.title}</h3>
                <p className="text-caption text-gray-600">{attribute.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DP Core Section */}
      <section className="content-section px-6 bg-gradient-to-br from-[#003A70] to-[#004d99] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold mb-3 text-center">
            {t.dpCore.title}
          </h2>
          <p className="text-small md:text-base text-white/90 text-center mb-8 md:mb-10">
            {t.dpCore.subtitle}
          </p>
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {t.dpCore.components.map((component, index) => (
              <div key={index} className="compact-p bg-white/10 backdrop-blur-sm rounded-2xl border-2 border-white/20">
                <h3 className="text-card-h2 sm:text-lg font-bold text-[#FFD700] mb-2">{component.name}</h3>
                <p className="text-small text-white/90">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Groups Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.subjectGroups.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-mobile-tight">
            {t.subjectGroups.groups.map((group, index) => (
              <div key={index} className="compact-p text-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                <span className="text-small md:text-base font-semibold text-[#003A70]">{group}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.results.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {t.results.stats.map((stat, index) => (
              <div key={index} className="card-mobile compact-p text-center bg-gradient-to-br from-[#003A70] to-[#004d99] text-white rounded-2xl shadow-xl">
                <div className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 text-[#FFD700]">
                  {stat.value}{stat.suffix || ''}
                </div>
                <div className="text-caption sm:text-small font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="content-section px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3">
            {t.cta.title}
          </h2>
          <p className="text-small md:text-base text-gray-600 mb-6 md:mb-8">
            {t.cta.description}
          </p>
          <Link
            to={getLocalizedPath('/tour')}
            className="cta-button inline-block bg-gradient-to-r from-[#003A70] to-[#004d99] text-white px-8 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}