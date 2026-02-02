import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Award, TrendingUp, Globe, BookOpen, Users, Target, Sparkles, CheckCircle } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { FeatureCard } from '@/app/components/FeatureCard';
import { Testimonials } from '@/app/components/Testimonials';

/**
 * High School Page Component
 * Displays information about high school programs for ages 13-18
 * including IB Diploma Programme (DP) and Russian State Programme
 * with university counseling, subject groups, and admission outcomes
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, TypeScript types, and ARIA attributes for better LLM comprehension
 */

// TypeScript interfaces for AIO optimization
type ProgramType = 'ib' | 'russian';

interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

interface FeatureItem {
  icon: any;
  title: string;
  description: string;
}

interface CoreComponent {
  name: string;
  description: string;
}

interface SubjectGroup {
  group: string;
  subjects: string[];
}

interface UniversityData {
  name: string;
  country: string;
}

export function HighSchoolPage() {
  const { language, getLocalizedPath } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('ib');

  const content = {
    ru: {
      title: 'Старшая школа',
      subtitle: 'Откройте себя. Следуйте за тем, что вас вдохновляет. Будьте готовы к любому будущему.',
      description: 'Строгая академическая программа + индивидуальные пути • IB Diploma + Гос. аттестат • Университетское консультирование с планами A/B/C • 99% удовлетворённость безопасностью и поддержкой • Выпускники готовы к глобальным возможностям',
      hero: {
        badge: 'Возраст 13-18 лет',
      },
      programSwitch: {
        ib: 'IB Diploma',
        russian: 'Русская программа',
      },
      ib: {
        name: 'IB Diploma Programme',
        tagline: 'Золотой стандарт международного образования',
        stats: [
          { value: '45', label: 'Средний балл', suffix: '/45' },
          { value: '100%', label: 'Поступление в вузы' },
          { value: '85%', label: 'Зарубежные университеты' },
        ],
        features: {
          title: 'Почему IB Diploma',
          items: [
            {
              icon: Globe,
              title: 'Мировое признание',
              description: 'Признается топ-университетами США, UK, Европы и мира',
            },
            {
              icon: BookOpen,
              title: 'Глубокое изучение',
              description: '6 предметов + Core (TOK, EE, CAS) для всестороннего развития',
            },
            {
              icon: Users,
              title: 'Университетское консультирование',
              description: 'Персональный консультант от выбора до поступления',
            },
            {
              icon: Award,
              title: 'Высокие результаты',
              description: 'Наши выпускники поступают в Top 100 университетов мира',
            },
          ],
        },
        core: {
          title: 'Ядро программы IB',
          items: [
            {
              name: 'Theory of Knowledge (TOK)',
              description: 'Философия познания и критическое мышление',
            },
            {
              name: 'Extended Essay (EE)',
              description: 'Независимое исследование на 4000 слов',
            },
            {
              name: 'Creativity, Activity, Service (CAS)',
              description: 'Проекты творчества, спорта и служения обществу',
            },
          ],
        },
        subjects: {
          title: '6 предметных групп',
          groups: [
            { name: 'Language & Literature', examples: 'English A, Russian A' },
            { name: 'Language Acquisition', examples: 'English B, Spanish ab initio' },
            { name: 'Individuals & Societies', examples: 'History, Economics, Business' },
            { name: 'Sciences', examples: 'Physics, Chemistry, Biology' },
            { name: 'Mathematics', examples: 'Analysis & Approaches, Applications' },
            { name: 'The Arts', examples: 'Visual Arts, Music, Film' },
          ],
        },
        universities: ['Harvard', 'Oxford', 'Cambridge', 'MIT', 'Stanford', 'Imperial College', 'UCL', 'Toronto', 'НИУ ВШЭ', 'МГУ', 'МФТИ', 'СПбГУ'],
      },
      russian: {
        name: 'Российская программа',
        tagline: 'Подготовка к ЕГЭ и российским вузам',
        stats: [
          { value: '90+', label: 'Средний балл ЕГЭ' },
          { value: '100%', label: 'Сдача ЕГЭ' },
          { value: '80%', label: 'Бюджетные места' },
        ],
        features: {
          title: 'Почему Русская программа',
          items: [
            {
              icon: BookOpen,
              title: 'ФГОС РФ',
              description: 'Программа полностью соответствует российским стандартам',
            },
            {
              icon: Award,
              title: 'Подготовка к ЕГЭ',
              description: 'Системная подготовка к ЕГЭ по всем предметам',
            },
            {
              icon: Globe,
              title: 'Углубленный английский',
              description: 'Английский на уровне C1-C2 к выпуску',
            },
            {
              icon: Users,
              title: 'Профильное обучение',
              description: 'Выбор профиля: естественнонаучный, гуманитарный, технологический',
            },
          ],
        },
        profiles: {
          title: 'Профили обучения',
          items: [
            {
              name: 'Естественноначный',
              subjects: ['Математика (углубленная)', 'Физика', 'Химия', 'Биология'],
              for: 'Для поступления на медицину, инженерию, естественные науки',
            },
            {
              name: 'Гуманитарный',
              subjects: ['История', 'Обществознание', 'Литература', 'Иностранные языки'],
              for: 'Для поступления на юриспруденцию, журналистику, лингвистику',
            },
            {
              name: 'Технологический',
              subjects: ['Математика (углубленная)', 'Информатика', 'Физика'],
              for: 'Для поступления на IT, программирование, робототехнику',
            },
          ],
        },
        exams: {
          title: 'Подготовка к экзаменам',
          items: [
            'ЕГЭ по всем предметам (обязательные + по выбору)',
            'Пробные экзамены каждый семестр',
            'Индивидуальные консультации по предметам',
            'Олимпиады для льготного поступления',
          ],
        },
        universities: ['МГУ', 'СПбГУ', 'НИУ ВШЭ', 'МФТИ', 'МГТУ им. Баумана', 'МГИМО', 'РАНХиГС', 'Первый МГМУ', 'ИТМО', 'Университет Иннополис'],
      },
      comparison: {
        title: 'Сравнение программ',
        items: [
          { label: 'Язык обучения', ib: 'Английский (95%)', russian: 'Русский (80%) + Английский (20%)' },
          { label: 'Аттестат', ib: 'IB Diploma + Аттестат РФ', russian: 'Аттестат РФ' },
          { label: 'Экзамены', ib: 'IB Exams (май)', russian: 'ЕГЭ (июнь)' },
          { label: 'Университеты', ib: 'Мировые + Рссийские', russian: 'Российские + СНГ' },
          { label: 'Продолжительность', ib: '2 года (Grades 11-12)', russian: '2 года (10-11 класс)' },
        ],
      },
      cta: {
        title: 'Выберите путь к университету мечты',
        description: 'Запишитесь на консультацию с директором программы',
        button: 'Записаться',
      },
    },
    uz: {
      title: 'Yuqori maktab',
      subtitle: "Dunyoning yetakchi universitetlariga yo'l",
      description: "13-18 yoshli talabalar uchun qat'iy akademik dastur. Dasturni tanlang:",
      hero: {
        badge: '13-18 yosh',
      },
      programSwitch: {
        ib: 'IB Diploma',
        russian: 'Rus dasturi',
      },
      ib: {
        name: 'IB Diploma Programme',
        tagline: "Xalqaro ta'limning oltin standarti",
        stats: [
          { value: '45', label: "O'rtacha ball", suffix: '/45' },
          { value: '100%', label: 'OTMlarga kirish' },
          { value: '85%', label: 'Xorijiy universitetlar' },
        ],
        features: {
          title: 'Nega IB Diploma',
          items: [
            {
              icon: Globe,
              title: 'Jahon tan olinishi',
              description: 'AQSh, UK, Yevropa va dunyoning top-universitetlari tomonidan tan olingan',
            },
            {
              icon: BookOpen,
              title: "Chuqur o'rganish",
              description: "To'liq rivojlanish uchun 6 ta fan + Core (TOK, EE, CAS)",
            },
            {
              icon: Users,
              title: 'Universitet maslahati',
              description: "Tanlashdan qabulga qadar shaxsiy maslahatchi",
            },
            {
              icon: Award,
              title: 'Yuqori natijalar',
              description: 'Bitiruvchilarimiz dunyoning Top 100 universitetlariga kiradi',
            },
          ],
        },
        core: {
          title: 'IB dasturi yadrosi',
          items: [
            {
              name: 'Theory of Knowledge (TOK)',
              description: 'Bilish falsafasi va tanqidiy fikrlash',
            },
            {
              name: 'Extended Essay (EE)',
              description: "4000 so'zli mustaqil tadqiqot",
            },
            {
              name: 'Creativity, Activity, Service (CAS)',
              description: 'Ijodkorlik, sport va jamiyatga xizmat loyihalari',
            },
          ],
        },
        subjects: {
          title: '6 ta fan guruhi',
          groups: [
            { name: 'Til va adabiyot', examples: 'Ingliz A, Rus A' },
            { name: "Til o'rganish", examples: 'Ingliz B, Ispan ab initio' },
            { name: 'Shaxslar va jamiyat', examples: 'Tarix, Iqtisodiyot, Biznes' },
            { name: 'Fanlar', examples: 'Fizika, Kimyo, Biologiya' },
            { name: 'Matematika', examples: 'Tahlil va yondashuvlar, Qo\'llanmalar' },
            { name: "San'at", examples: "Vizual san'at, Musiqa, Kino" },
          ],
        },
        universities: ['Harvard', 'Oxford', 'Cambridge', 'MIT', 'Stanford', 'Imperial College', 'UCL', 'Toronto', 'NIU VShE', 'MGU', 'MFTI', 'SPbGU'],
      },
      russian: {
        name: "Rus dasturi yuqori maktab",
        tagline: 'EGE va rossiyalik OTMlarga kirishga tayyorgarlik',
        stats: [
          { value: '90+', label: "O'rtacha EGE balli" },
          { value: '100%', label: 'EGE topshirish' },
          { value: '80%', label: 'Byudjet o\'rinlari' },
        ],
        features: {
          title: 'Nega Rus dasturi',
          items: [
            {
              icon: BookOpen,
              title: 'FGOS RF',
              description: "Dastur to'liq rossiyalik standartlarga mos keladi",
            },
            {
              icon: Award,
              title: 'EGE ga tayyorgarlik',
              description: 'Barcha fanlar bo\'yicha EGE ga tizimli tayyorgarlik',
            },
            {
              icon: Globe,
              title: 'Chuqur ingliz tili',
              description: 'Bitiruv darajasiga qadar C1-C2 darajasida ingliz tili',
            },
            {
              icon: Users,
              title: "Profil ta'limi",
              description: "Profilni tanlash: tabiiy fanlar, gumanitar, texnologik",
            },
          ],
        },
        profiles: {
          title: "Ta'lim profillari",
          items: [
            {
              name: 'Tabiiy fanlar',
              subjects: ['Matematika (chuqur)', 'Fizika', 'Kimyo', 'Biologiya'],
              for: 'Tibbiyot, muhandislik, tabiiy fanlarga kirish uchun',
            },
            {
              name: 'Gumanitar',
              subjects: ['Tarix', 'Ijtimoiy fanlar', 'Adabiyot', 'Chet tillari'],
              for: 'Huquqshunoslik, jurnalistika, lingvistikaga kirish uchun',
            },
            {
              name: 'Texnologik',
              subjects: ['Matematika (chuqur)', 'Informatika', 'Fizika'],
              for: 'IT, dasturlash, robototexnikaga kirish uchun',
            },
          ],
        },
        exams: {
          title: 'Imtihonlarga tayyorgarlik',
          items: [
            'Barcha fanlarda EGE (majburiy + tanlovga ko\'ra)',
            'Har semestrda sinov imtihonlari',
            'Fanlar bo\'yicha individual konsultatsiyalar',
            'Imtiyozli kirish uchun olimpiadalar',
          ],
        },
        universities: ['MGU', 'SPbGU', 'NIU VShE', 'MFTI', 'MGTU Bauman nomi', 'MGIMO', 'RANXiGS', 'Birinchi MGMU', 'ITMO', 'Innopolis universiteti'],
      },
      comparison: {
        title: 'Dasturlarni solishtirish',
        items: [
          { label: "Ta'lim tili", ib: 'Ingliz (95%)', russian: 'Rus (80%) + Ingliz (20%)' },
          { label: 'Attestat', ib: 'IB Diploma + RF attestati', russian: 'RF attestati' },
          { label: 'Imtihonlar', ib: 'IB Exams (may)', russian: 'EGE (iyun)' },
          { label: 'Universitetlar', ib: 'Dunyo + Rossiya', russian: 'Rossiya + MDH' },
          { label: 'Davomiyligi', ib: '2 yil (11-12-sinflar)', russian: '2 yil (10-11-sinflar)' },
        ],
      },
      cta: {
        title: "Orzuingizdagi universitetga yo'lni tanlang",
        description: 'Dastur direktori bilan maslahatga yoziling',
        button: 'Yozilish',
      },
    },
    en: {
      title: 'High School',
      subtitle: "Pathway to the World's Leading Universities",
      description: 'Rigorous academic program for students ages 13-18. Choose your path:',
      hero: {
        badge: 'Ages 13-18',
      },
      programSwitch: {
        ib: 'IB Diploma',
        russian: 'Russian Programme',
      },
      ib: {
        name: 'IB Diploma Programme',
        tagline: 'The gold standard of international education',
        stats: [
          { value: '45', label: 'Average Score', suffix: '/45' },
          { value: '100%', label: 'University Admission' },
          { value: '85%', label: 'International Universities' },
        ],
        features: {
          title: 'Why IB Diploma',
          items: [
            {
              icon: Globe,
              title: 'World Recognition',
              description: 'Recognized by top universities in USA, UK, Europe and worldwide',
            },
            {
              icon: BookOpen,
              title: 'In-Depth Study',
              description: '6 subjects + Core (TOK, EE, CAS) for holistic development',
            },
            {
              icon: Users,
              title: 'University Counseling',
              description: 'Personal counselor from selection to admission',
            },
            {
              icon: Award,
              title: 'High Results',
              description: 'Our graduates enter Top 100 universities worldwide',
            },
          ],
        },
        core: {
          title: 'IB Programme Core',
          items: [
            {
              name: 'Theory of Knowledge (TOK)',
              description: 'Philosophy of knowledge and critical thinking',
            },
            {
              name: 'Extended Essay (EE)',
              description: 'Independent research of 4000 words',
            },
            {
              name: 'Creativity, Activity, Service (CAS)',
              description: 'Projects in creativity, sports and community service',
            },
          ],
        },
        subjects: {
          title: '6 Subject Groups',
          groups: [
            { name: 'Language & Literature', examples: 'English A, Russian A' },
            { name: 'Language Acquisition', examples: 'English B, Spanish ab initio' },
            { name: 'Individuals & Societies', examples: 'History, Economics, Business' },
            { name: 'Sciences', examples: 'Physics, Chemistry, Biology' },
            { name: 'Mathematics', examples: 'Analysis & Approaches, Applications' },
            { name: 'The Arts', examples: 'Visual Arts, Music, Film' },
          ],
        },
        universities: ['Harvard', 'Oxford', 'Cambridge', 'MIT', 'Stanford', 'Imperial College', 'UCL', 'Toronto', 'HSE University', 'Moscow State', 'MIPT', 'St. Petersburg State'],
      },
      russian: {
        name: 'Russian High School Programme',
        tagline: 'Preparation for EGE and admission to Russian universities',
        stats: [
          { value: '90+', label: 'Average EGE Score' },
          { value: '100%', label: 'EGE Pass Rate' },
          { value: '80%', label: 'Budget Places' },
        ],
        features: {
          title: 'Why Russian Programme',
          items: [
            {
              icon: BookOpen,
              title: 'FGOS RF',
              description: 'Programme fully complies with Russian standards',
            },
            {
              icon: Award,
              title: 'EGE Preparation',
              description: 'Systematic preparation for EGE in all subjects',
            },
            {
              icon: Globe,
              title: 'Advanced English',
              description: 'English at C1-C2 level by graduation',
            },
            {
              icon: Users,
              title: 'Profile Education',
              description: 'Choose profile: natural sciences, humanities, technological',
            },
          ],
        },
        profiles: {
          title: 'Education Profiles',
          items: [
            {
              name: 'Natural Sciences',
              subjects: ['Mathematics (advanced)', 'Physics', 'Chemistry', 'Biology'],
              for: 'For admission to medicine, engineering, natural sciences',
            },
            {
              name: 'Humanities',
              subjects: ['History', 'Social Studies', 'Literature', 'Foreign Languages'],
              for: 'For admission to law, journalism, linguistics',
            },
            {
              name: 'Technological',
              subjects: ['Mathematics (advanced)', 'Computer Science', 'Physics'],
              for: 'For admission to IT, programming, robotics',
            },
          ],
        },
        exams: {
          title: 'Exam Preparation',
          items: [
            'EGE in all subjects (mandatory + elective)',
            'Trial exams each semester',
            'Individual subject consultations',
            'Olympiads for preferential admission',
          ],
        },
        universities: ['Moscow State', 'St. Petersburg State', 'HSE University', 'MIPT', 'Bauman Moscow State Technical', 'MGIMO', 'RANEPA', 'First Moscow State Medical', 'ITMO', 'Innopolis University'],
      },
      comparison: {
        title: 'Programme Comparison',
        items: [
          { label: 'Language of instruction', ib: 'English (95%)', russian: 'Russian (80%) + English (20%)' },
          { label: 'Certificate', ib: 'IB Diploma + RF Certificate', russian: 'RF Certificate' },
          { label: 'Examinations', ib: 'IB Exams (May)', russian: 'EGE (June)' },
          { label: 'Universities', ib: 'Worldwide + Russian', russian: 'Russian + CIS' },
          { label: 'Duration', ib: '2 years (Grades 11-12)', russian: '2 years (Grades 10-11)' },
        ],
      },
      cta: {
        title: 'Choose Your Path to Your Dream University',
        description: 'Schedule a consultation with the programme director',
        button: 'Enroll',
      },
    },
  };

  const t = content[language];
  const programContent = selectedProgram === 'ib' ? t.ib : t.russian;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section 
        style={{ 
          opacity: heroOpacity, 
          scale: heroScale,
          position: 'relative'
        }}
        className="hero-section hero-wrapper relative bg-[#003A70] text-white px-4 md:px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#003A70] to-[#001a3d]"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded text-badge font-semibold mb-4 md:mb-5 border border-white/20"
              >
                {t.hero.badge}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5 tracking-tight"
              >
                {t.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-card-h3 lg:text-xl mb-4 md:mb-5 font-light text-gray-100"
              >
                {t.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-small md:text-base text-white/80 mb-6 md:mb-8"
              >
                {t.description}
              </motion.p>
            </motion.div>

            {/* Right - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnklMjBjb2xsZWdlJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzY5Njc0NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={language === 'ru' ? 'Ученики старшей школы' : language === 'uz' ? 'Yuqori maktab o\'quvchilari' : 'High School Students'}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FFD700]/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Switcher */}
      <section className="py-6 px-6 bg-gray-50 border-b-2 border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-2 shadow-lg flex gap-2">
            <button
              onClick={() => setSelectedProgram('ib')}
              className={`flex-1 py-3 px-4 md:py-4 md:px-6 rounded-lg font-bold text-small md:text-base transition-all ${
                selectedProgram === 'ib'
                  ? 'bg-gradient-to-r from-[#003A70] to-[#004d99] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t.programSwitch.ib}
            </button>
            <button
              onClick={() => setSelectedProgram('russian')}
              className={`flex-1 py-3 px-4 md:py-4 md:px-6 rounded-lg font-bold text-small md:text-base transition-all ${
                selectedProgram === 'russian'
                  ? 'bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {t.programSwitch.russian}
            </button>
          </div>
        </div>
      </section>

      {/* Programme Name & Tagline */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3">
            {programContent.name}
          </h2>
          <p className="text-small md:text-base text-gray-600">
            {programContent.tagline}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="content-section px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {programContent.stats.map((stat, index) => (
              <div key={index} className="card-mobile compact-p text-center bg-white rounded-2xl shadow-lg border-2 border-gray-200">
                <div className={`text-3xl sm:text-4xl md:text-5xl font-black mb-2 ${selectedProgram === 'ib' ? 'text-[#003A70]' : 'text-[#C41E3A]'}`}>
                  {stat.value}{stat.suffix || ''}
                </div>
                <div className="text-caption sm:text-small text-gray-600 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {programContent.features.title}
          </h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-tight md:gap-mobile-normal">
            {programContent.features.items.map((item, index) => (
              <FeatureCard
                key={index}
                feature={{...item, emoji: index === 0 ? '🌍' : index === 1 ? '📚' : index === 2 ? '👥' : '🏆'}}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Core/Subjects Section - different for IB and Russian */}
      {selectedProgram === 'ib' ? (
        <>
          {/* IB Core */}
          <section className="content-section px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
                {programContent.core.title}
              </h2>
              <div className="grid md:grid-cols-3 gap-mobile-normal">
                {programContent.core.items.map((item, index) => (
                  <div key={index} className="card-mobile compact-p bg-white rounded-2xl shadow-lg border-l-4 border-[#003A70]">
                    <h3 className="text-card-h2 sm:text-lg font-bold text-[#003A70] mb-2">{item.name}</h3>
                    <p className="text-small text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IB Subject Groups */}
          <section className="content-section px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
                {programContent.subjects.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
                {programContent.subjects.groups.map((group, index) => (
                  <div key={index} className="card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md hover:shadow-xl transition-all border-2 border-gray-200">
                    <h3 className="text-card-h3 sm:text-base font-bold text-[#003A70] mb-2">{group.name}</h3>
                    <p className="text-caption sm:text-small text-gray-600">{group.examples}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Russian Subjects */}
          <section className="content-section px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
                {programContent.subjects.title}
              </h2>
              <div className="flex flex-col gap-mobile-normal">
                {programContent.subjects.items.map((item, index) => (
                  <div key={index} className="card-mobile compact-p bg-white rounded-2xl shadow-lg border-l-4 border-[#C41E3A]">
                    <h3 className="text-card-h2 sm:text-lg font-bold text-[#C41E3A] mb-2">{item.name}</h3>
                    <p className="text-small text-gray-600 mb-3">{item.for}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, subIndex) => (
                        <span key={subIndex} className="px-2 py-1 bg-[#C41E3A]/10 text-[#C41E3A] rounded text-caption sm:text-small font-semibold">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Russian Exam Prep */}
          <section className="content-section px-6 bg-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
                {programContent.exams.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-mobile-tight">
                {programContent.exams.items.map((item, index) => (
                  <div key={index} className="compact-p flex items-start gap-3 bg-gray-50 rounded-xl">
                    <CheckCircle className="icon-secondary text-[#C41E3A] flex-shrink-0 mt-1" />
                    <span className="text-small md:text-base text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Universities Section */}
      <section className="content-section px-6 bg-gradient-to-br from-[#003A70] to-[#004d99] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-bold mb-8 md:mb-10">
            {language === 'ru' ? 'Куда поступают наши выпускники' : language === 'uz' ? 'Bizning bitiruvchilarimiz qayerga o\'qishga kirishadi' : 'Where Our Graduates Go'}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {programContent.universities.map((university, index) => (
              <span key={index} className="px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-lg text-caption sm:text-small font-semibold border border-white/20">
                {university}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Comparison */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.comparison.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-100 to-gray-50">
                <tr>
                  <th className="compact-p text-left text-small md:text-base font-bold text-gray-900"></th>
                  <th className="compact-p text-center text-small md:text-base font-bold text-[#003A70]">IB Diploma</th>
                  <th className="compact-p text-center text-small md:text-base font-bold text-[#C41E3A]">{language === 'ru' ? 'Русская программа' : language === 'uz' ? 'Rus dasturi' : 'Russian Programme'}</th>
                </tr>
              </thead>
              <tbody>
                {t.comparison.items.map((item, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="compact-p text-caption sm:text-small font-semibold text-gray-700">{item.label}</td>
                    <td className="compact-p text-caption sm:text-small text-center text-gray-600">{item.ib}</td>
                    <td className="compact-p text-caption sm:text-small text-center text-gray-600">{item.russian}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials ageGroup="high-school" />

      {/* CTA Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3">
            {t.cta.title}
          </h2>
          <p className="text-small md:text-base text-gray-600 mb-6 md:mb-8">
            {t.cta.description}
          </p>
          <Link
            to={getLocalizedPath('/enrollment')}
            className="cta-button inline-block bg-gradient-to-r from-[#003A70] to-[#004d99] text-white px-8 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}