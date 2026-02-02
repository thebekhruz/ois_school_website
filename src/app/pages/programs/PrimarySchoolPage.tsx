import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { BookOpen, Users, Sparkles, Heart, Target, Trophy, CheckCircle, Award } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { FeatureCard } from '@/app/components/FeatureCard';

/**
 * Primary School Page Component
 * Displays information about primary school programs for ages 6-12
 * including IB Primary Years Programme (PYP) and Russian National Curriculum
 * with three-tier support system, subject details, and learning outcomes
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, TypeScript types, and ARIA attributes for better LLM comprehension
 */

// TypeScript interfaces for AIO optimization
type ProgramType = 'ib' | 'russian';

interface FeatureItem {
  icon: any;
  title: string;
  description: string;
}

interface SubjectGroup {
  title: string;
  icon: string;
  items: string[];
}

interface SupportTier {
  name: string;
  description: string;
  features: string[];
}

interface ProgramData {
  name: string;
  tagline: string;
  features: {
    title: string;
    items: FeatureItem[];
  };
  subjects: {
    title: string;
    groups: SubjectGroup[];
  };
  supportSystem?: {
    title: string;
    tiers: SupportTier[];
  };
  outcomes: string[];
}

export function PrimarySchoolPage() {
  const { language, getLocalizedPath } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>('ib');

  const content = {
    ru: {
      title: 'Начальная школа',
      subtitle: 'Где любопытство встречается со способностями',
      description: 'Системные знания встречаются с практическими открытиями • Индивидуальная поддержка на каждом уровне • Дети соревнуются сами с собой, а не друг с другом • Безопасно рисковать, ошибаться и расти',
      hero: {
        badge: 'Возраст 6-12 лет',
        cta: 'Узнать больше',
      },
      programSwitch: {
        ib: 'IB Primary Years',
        russian: 'Русская программа',
      },
      ib: {
        name: 'IB Primary Years Programme (PYP)',
        tagline: 'Создаём мыслителей, которые любят учиться',
        features: {
          title: 'Ключевые особенности IB PYP',
          items: [
            {
              icon: Sparkles,
              title: 'Исследование через темы',
              description: 'Шесть транс дисциплинарных тем связывают все предметы',
            },
            {
              icon: BookOpen,
              title: 'Математика + Английский',
              description: 'Двойной фундамент: эти предметы открывают всё будущее обучение',
            },
            {
              icon: Heart,
              title: 'Трёхуровневая поддержка',
              description: 'Никто не проваливается: класс, малые группы, индивидуально',
            },
            {
              icon: Target,
              title: 'Видимый прогресс',
              description: 'Студенты знают свой рост без сравнения с другими',
            },
          ],
        },
        subjects: {
          title: 'Что они изучают',
          groups: [
            {
              title: 'Математика',
              icon: '🔢',
              items: ['Решение проблем', 'Математическое мышление', 'Числовые паттерны', 'Геометрия'],
            },
            {
              title: 'Английский язык',
              icon: '📚',
              items: ['Чтение', 'Письмо', 'Говорение', 'Критическое мышление'],
            },
            {
              title: 'Науки',
              icon: '🔬',
              items: ['Эксперименты', 'Наблюдение', 'Научный метод', 'Окружающий мир'],
            },
            {
              title: 'Социальные науки',
              icon: '🌍',
              items: ['История', 'География', 'Культуры', 'Глобальные связи'],
            },
          ],
        },
        supportSystem: {
          title: 'Трёхуровневая система поддержки',
          tiers: [
            {
              name: 'Tier 1: Все студенты',
              description: 'Дифференцированное обучение в классе',
              features: ['Формирующее оценивание', 'Гибкие группы', 'Чёткие цели обучения'],
            },
            {
              name: 'Tier 2: Некоторые студенты',
              description: 'Целевая помощь в малых группах',
              features: ['Группы чтения', 'Математические мастерские', '6-8 недель интервенции'],
            },
            {
              name: 'Tier 3: Немного студентов',
              description: 'Интенсивная индивидуальная поддержка',
              features: ['Индивидуальное репетиторство', 'Особые потребности', 'Регулярная связь с родителями'],
            },
          ],
        },
        outcomes: [
          'Самостоятельность в обучении - дети тянутся вперёд сами',
          'Крепкая база математики и английского',
          'Привычки исследования - "Как устроен мир?"',
          'Управление временем и эмоциями',
          'Готовность к средней школе без страха',
        ],
      },
      russian: {
        name: 'Русская программа начальной школы',
        tagline: 'Советская глубина + IB методы исследования',
        features: {
          title: 'Ключевые особенности Русской программы',
          items: [
            {
              icon: BookOpen,
              title: 'Государственная программа',
              description: 'Интеграция с Узбекской/Российской государственной программой',
            },
            {
              icon: Sparkles,
              title: 'Усиленный английский',
              description: 'Билингвальное обучение: русский + английский',
            },
            {
              icon: Award,
              title: 'Системная программа',
              description: 'Глубина советской школы + методы исследования IB',
            },
            {
              icon: Heart,
              title: 'Индивидуальная поддержка',
              description: 'Та же трёхуровневая система помощи',
            },
          ],
        },
        subjects: {
          title: 'Предметы по государственной программе',
          groups: [
            {
              title: 'Основные предметы',
              icon: '📚',
              items: ['Русский язык', 'Литературное чтение', 'Математика', 'Окружающий мир'],
            },
            {
              title: 'Английский',
              icon: '🌍',
              items: ['Чтение на английском', 'Говорение', 'Письмо', 'Грамматика'],
            },
            {
              title: 'Творческие предметы',
              icon: '🎨',
              items: ['Изобразительное искусство', 'Музыка', 'Технология', 'Физкультура'],
            },
            {
              title: 'Узбекский язык',
              icon: '📖',
              items: ['Узбекский язык', 'Узбекская литература', 'История Узбекистана'],
            },
          ],
        },
        supportSystem: {
          title: 'Та же система поддержки',
          tiers: [
            {
              name: 'Tier 1: Все студенты',
              description: 'Дифференцированное обучение',
              features: ['Учителя отслеживают прогресс', 'Гибкие группы', 'Адаптация под темп'],
            },
            {
              name: 'Tier 2: Некоторые студенты',
              description: 'Дополнительные занятия',
              features: ['Математика и русский', 'Малые группы', 'Проактивная помощь'],
            },
            {
              name: 'Tier 3: Немного студентов',
              description: 'Интенсивная помощь',
              features: ['Индивидуальные сессии', 'Эмоциональная поддержка', 'Связь с родителями'],
            },
          ],
        },
        outcomes: [
          'Государственный аттестат + сильный английский',
          'Возможность перейти в IB или продолжить русскую программу',
          'Крепкая база математики и русского языка',
          'Та же самостоятельность и уверенность',
          'Готовы к любому пути в средней школе',
        ],
      },
      keyPrinciples: {
        title: 'Наши ключевые принципы',
        items: [
          {
            icon: Users,
            title: 'Соревнуйся с собой',
            description: 'Студенты ставят личные цели каждый семестр. Никаких классных рейтингов. Празднование усилий и роста.',
          },
          {
            icon: Heart,
            title: 'Безопасная среда',
            description: 'Безопасно ошибаться, задавать вопросы и быть собой. 99% родителей удовлетворены безопасностью и поддержкой.',
          },
          {
            icon: Heart,
            title: 'Индивидуальная поддержка',
            description: 'Трёхуровневая система: никто не останется без помощи. Студенты получают помощь ДО провала, а не после.',
          },
        ],
      },
      activities: {
        title: 'Внеклассные активности',
        description: 'Доступно для обеих программ',
        categories: [
          {
            title: 'Спорт',
            items: ['Футбол', 'Баскетбол', 'Плавание', 'Лёгкая атлетика'],
          },
          {
            title: 'Искусство',
            items: ['Рисование', 'Музыка', 'Театр', 'Танцы'],
          },
          {
            title: 'Академические',
            items: ['Math Club', 'Робототехника', 'Шахматы', 'Наука'],
          },
          {
            title: 'Языки',
            items: ['Дополнительный английский', 'Китайский', 'Французский'],
          },
        ],
      },
      transition: {
        title: 'Переход в среднюю школу',
        promise: '"К 6 классу вашему ребёнку не нужно будет, чтобы мы его подталкивали. Он будет двигаться вперёд сам — потому что мы построили внутреннюю мотивацию, которая длится."',
        building: [
          'Самостоятельность → Средняя школа требует самонаправленности',
          'Основные знания → Фундамент для всех будущих предметов',
          'Привычки исследования → Мышление проверки гипотез',
          'Управление временем → Несколько предметов и дедлайнов',
          'Самосознание → Понимание сильных/слабых сторон',
        ],
      },
      cta: {
        title: 'Выберите лучший путь для вашего ребёнка',
        description: 'Запишитесь на консультацию, чтобы узнать больше о каждой прогр��мме',
        button: 'Записаться на консультацию',
      },
    },
    uz: {
      title: 'Boshlang\'ich maktab',
      subtitle: 'Qiziquvchanlik qobiliyat bilan uchrashgan joy',
      description: 'Tizimli bilimlar amaliy kashfiyotlar bilan uchrashadi • Har bir darajada individual qo\'llab-quvvatlash • Bolalar o\'zlari bilan kurashishadi, boshqalar bilan emas • Xavfsizlik xatolar qilish, o\'rganish va o\'sish',
      hero: {
        badge: '6-12 yosh',
        cta: 'Ko\'proq bilish',
      },
      programSwitch: {
        ib: 'IB Primary Years',
        russian: 'Rus dasturi',
      },
      ib: {
        name: 'IB Primary Years Programme (PYP)',
        tagline: 'O\'rganishni yaxshi ko\'radigan fikrlovchilarni yaratamiz',
        features: {
          title: 'IB PYP ning asosiy xususiyatlari',
          items: [
            {
              icon: Sparkles,
              title: 'Mavzular orqali tadqiqot',
              description: 'Oltita transdisiplinar mavzu barcha fanlarni bog\'laydi',
            },
            {
              icon: BookOpen,
              title: 'Matematika + Ingliz tili',
              description: 'Ikki tomonlama asos: bu fanlar barcha kelajak ta\'limini ochadi',
            },
            {
              icon: Heart,
              title: 'Uch darajali qo\'llab-quvvatlash',
              description: 'Hech kim tushib ketmaydi: sinf, kichik guruhlar, individual',
            },
            {
              icon: Target,
              title: 'Ko\'rinadigan taraqqiyot',
              description: 'Talabalar boshqalar bilan taqqoslamasdan o\'z o\'sishini biladilar',
            },
          ],
        },
        subjects: {
          title: 'Ular nima o\'rganadilar',
          groups: [
            {
              title: 'Matematika',
              icon: '🔢',
              items: ['Muammolarni yechish', 'Matematik fikrlash', 'Raqamli naqshlar', 'Geometriya'],
            },
            {
              title: 'Ingliz tili',
              icon: '📚',
              items: ['O\'qish', 'Yozish', 'Gapirish', 'Tanqidiy fikrlash'],
            },
            {
              title: 'Fanlar',
              icon: '🔬',
              items: ['Tajribalar', 'Kuzatish', 'Ilmiy usul', 'Atrofdagi dunyo'],
            },
            {
              title: 'Ijtimoiy fanlar',
              icon: '🌍',
              items: ['Tarix', 'Geografiya', 'Madaniyatlar', 'Global aloqalar'],
            },
          ],
        },
        supportSystem: {
          title: 'Uch darajali qo\'llab-quvvatlash tizimi',
          tiers: [
            {
              name: 'Tier 1: Barcha talabalar',
              description: 'Sinfda differentsiallashtirilgan ta\'lim',
              features: ['Shakllanish bahosi', 'Moslashuvchan guruhlar', 'Aniq o\'qish maqsadlari'],
            },
            {
              name: 'Tier 2: Ba\'zi talabalar',
              description: 'Kichik guruhlarda maqsadli yordam',
              features: ['O\'qish guruhlari', 'Matematika ustaxonalari', '6-8 hafta aralashuv'],
            },
            {
              name: 'Tier 3: Kam sonli talabalar',
              description: 'Intensiv individual qo\'llab-quvvatlash',
              features: ['Individual repetitorlik', 'Maxsus ehtiyojlar', 'Ota-onalar bilan muntazam aloqa'],
            },
          ],
        },
        outcomes: [
          'Ta\'limda mustaqillik - bolalar o\'zlari oldinga intilishadi',
          'Matematika va ingliz tilida mustahkam asos',
          'Tadqiqot odatlari - "Dunyo qanday ishlaydi?"',
          'Vaqt va his-tuyg\'ularni boshqarish',
          'O\'rta maktabga qo\'rqmasdan tayyorlik',
        ],
      },
      russian: {
        name: 'Rus boshlang\'ich maktab dasturi',
        tagline: 'Sovet chuqurligi + IB tadqiqot usullari',
        features: {
          title: 'Rus dasturining asosiy xususiyatlari',
          items: [
            {
              icon: BookOpen,
              title: 'Davlat dasturi',
              description: 'O\'zbekiston/Rossiya davlat dasturi bilan integratsiya',
            },
            {
              icon: Sparkles,
              title: 'Kuchaytirilgan ingliz tili',
              description: 'Ikki tilli ta\'lim: rus + ingliz',
            },
            {
              icon: Award,
              title: 'Tizimli dastur',
              description: 'Sovet maktabining chuqurligi + IB tadqiqot usullari',
            },
            {
              icon: Heart,
              title: 'Individual qo\'llab-quvvatlash',
              description: 'Xuddi shunday uch darajali yordam tizimi',
            },
          ],
        },
        subjects: {
          title: 'Davlat dasturi bo\'yicha fanlar',
          groups: [
            {
              title: 'Asosiy fanlar',
              icon: '📚',
              items: ['Rus tili', 'Adabiy o\'qish', 'Matematika', 'Atrofdagi dunyo'],
            },
            {
              title: 'Ingliz tili',
              icon: '🌍',
              items: ['Ingliz tilida o\'qish', 'Gapirish', 'Yozish', 'Grammatika'],
            },
            {
              title: 'Ijodiy fanlar',
              icon: '🎨',
              items: ['Tasviriy san\'at', 'Musiqa', 'Texnologiya', 'Jismoniy tarbiya'],
            },
            {
              title: 'O\'zbek tili',
              icon: '📖',
              items: ['O\'zbek tili', 'O\'zbek adabiyoti', 'O\'zbekiston tarixi'],
            },
          ],
        },
        supportSystem: {
          title: 'Xuddi shunday qo\'llab-quvvatlash tizimi',
          tiers: [
            {
              name: 'Tier 1: Barcha talabalar',
              description: 'Differentsiallashtirilgan ta\'lim',
              features: ['O\'qituvchilar taraqqiyotni kuzatadilar', 'Moslashuvchan guruhlar', 'Sur\'atga moslash'],
            },
            {
              name: 'Tier 2: Ba\'zi talabalar',
              description: 'Qo\'shimcha darslar',
              features: ['Matematika va rus tili', 'Kichik guruhlar', 'Proaktiv yordam'],
            },
            {
              name: 'Tier 3: Kam sonli talabalar',
              description: 'Intensiv yordam',
              features: ['Individual sessiyalar', 'Hissiy qo\'llab-quvvatlash', 'Ota-onalar bilan aloqa'],
            },
          ],
        },
        outcomes: [
          'Davlat attestati + kuchli ingliz tili',
          'IB ga o\'tish yoki rus dasturini davom ettirish imkoniyati',
          'Matematika va rus tilida mustahkam asos',
          'Xuddi shunday mustaqillik va ishonch',
          'O\'rta maktabda har qanday yo\'lga tayyor',
        ],
      },
      keyPrinciples: {
        title: 'Bizning asosiy tamoyillarimiz',
        items: [
          {
            icon: Users,
            title: 'O\'zingiz bilan raqobatlashing',
            description: 'Talabalar har semestrda shaxsiy maqsadlar qo\'yadilar. Sinf reytinglari yo\'q. Harakat va o\'sishni nishonlash.',
          },
          {
            icon: Heart,
            title: 'Xavfsiz muhit',
            description: 'Xato qilish, savol berish va o\'zingiz bo\'lish xavfsiz. 99% ota-onalar xavfsizlik va qo\'llab-quvvatlashdan mamnun.',
          },
          {
            icon: Heart,
            title: 'Individual qo\'llab-quvvatlash',
            description: 'Uch darajali tizim: hech kim yordamsiz qolmaydi. Talabalar muvaffaqiyatsizlikdan oldin yordam oladilar.',
          },
        ],
      },
      activities: {
        title: 'Sinfdan tashqari faoliyatlar',
        description: 'Ikkala dastur uchun ham mavjud',
        categories: [
          {
            title: 'Sport',
            items: ['Futbol', 'Basketbol', 'Suzish', 'Yengil atletika'],
          },
          {
            title: 'San\'at',
            items: ['Rasm chizish', 'Musiqa', 'Teatr', 'Raqs'],
          },
          {
            title: 'Akademik',
            items: ['Math Club', 'Robototexnika', 'Shaxmat', 'Fan'],
          },
          {
            title: 'Tillar',
            items: ['Qo\'shimcha ingliz', 'Xitoy', 'Fransuz'],
          },
        ],
      },
      transition: {
        title: 'O\'rta maktabga o\'tish',
        promise: '"6-sinfga kelib, farzandingizga bizning turtki berishimiz kerak bo\'lmaydi. U o\'zi oldinga intiladi — chunki biz davom etadigan ichki motivatsiyani qurdik."',
        building: [
          'Mustaqillik → O\'rta maktab o\'z-o\'zini boshqarishni talab qiladi',
          'Asosiy bilimlar → Barcha kelajak fanlar uchun asos',
          'Tadqiqot odatlari → Gipoteza tekshirish fikrlash',
          'Vaqtni boshqarish → Bir nechta fanlar va muddatlar',
          'O\'zini anglash → Kuchli/zaif tomonlarni tushunish',
        ],
      },
      cta: {
        title: 'Farzandingiz uchun eng yaxshi yo\'lni tanlang',
        description: 'Har bir dastur haqida ko\'proq bilish uchun maslahatga yoziling',
        button: 'Maslahatge yozilish',
      },
    },
    en: {
      title: 'Primary School',
      subtitle: 'Where curiosity meets capability',
      description: 'Systematic knowledge meets hands-on discovery • Individual support at every level • Children compete with themselves, not each other • Safe to take risks, make mistakes, and grow',
      hero: {
        badge: 'Ages 6-12',
        cta: 'Learn More',
      },
      programSwitch: {
        ib: 'IB Primary Years',
        russian: 'Russian Programme',
      },
      ib: {
        name: 'IB Primary Years Programme (PYP)',
        tagline: 'Building thinkers who love to learn',
        features: {
          title: 'Key Features of IB PYP',
          items: [
            {
              icon: Sparkles,
              title: 'Inquiry Through Themes',
              description: 'Six transdisciplinary themes connect all subjects',
            },
            {
              icon: BookOpen,
              title: 'Math + English Foundation',
              description: 'Dual foundation: these subjects unlock all future learning',
            },
            {
              icon: Heart,
              title: 'Three-Tier Support',
              description: 'No one slips through: classroom, small groups, individual',
            },
            {
              icon: Target,
              title: 'Visible Progress',
              description: 'Students know their growth without comparing to peers',
            },
          ],
        },
        subjects: {
          title: 'What They Learn',
          groups: [
            {
              title: 'Mathematics',
              icon: '🔢',
              items: ['Problem Solving', 'Mathematical Thinking', 'Number Patterns', 'Geometry'],
            },
            {
              title: 'English Language',
              icon: '📚',
              items: ['Reading', 'Writing', 'Speaking', 'Critical Thinking'],
            },
            {
              title: 'Sciences',
              icon: '🔬',
              items: ['Experiments', 'Observation', 'Scientific Method', 'World Around Us'],
            },
            {
              title: 'Social Studies',
              icon: '🌍',
              items: ['History', 'Geography', 'Cultures', 'Global Connections'],
            },
          ],
        },
        supportSystem: {
          title: 'Three-Tier Support System',
          tiers: [
            {
              name: 'Tier 1: All Students',
              description: 'Differentiated instruction in classroom',
              features: ['Formative assessment', 'Flexible grouping', 'Clear learning objectives'],
            },
            {
              name: 'Tier 2: Some Students',
              description: 'Targeted help in small groups',
              features: ['Reading groups', 'Math workshops', '6-8 weeks intervention'],
            },
            {
              name: 'Tier 3: Few Students',
              description: 'Intensive individual support',
              features: ['Individual tutoring', 'Special needs', 'Regular parent communication'],
            },
          ],
        },
        outcomes: [
          'Independence in learning - children pull themselves forward',
          'Strong foundation in math and English',
          'Inquiry habits - "How does the world work?"',
          'Time and emotion management',
          'Ready for middle school without fear',
        ],
      },
      russian: {
        name: 'Russian Primary School Programme',
        tagline: 'Soviet depth + IB inquiry methods',
        features: {
          title: 'Key Features of Russian Programme',
          items: [
            {
              icon: BookOpen,
              title: 'State Programme',
              description: 'Integration with Uzbek/Russian state curriculum',
            },
            {
              icon: Sparkles,
              title: 'Enhanced English',
              description: 'Bilingual education: Russian + English',
            },
            {
              icon: Award,
              title: 'Systematic Programme',
              description: 'Soviet school depth + IB inquiry methods',
            },
            {
              icon: Heart,
              title: 'Individual Support',
              description: 'Same three-tier support system',
            },
          ],
        },
        subjects: {
          title: 'State Programme Subjects',
          groups: [
            {
              title: 'Core Subjects',
              icon: '📚',
              items: ['Russian Language', 'Literary Reading', 'Mathematics', 'World Around Us'],
            },
            {
              title: 'English',
              icon: '🌍',
              items: ['English Reading', 'Speaking', 'Writing', 'Grammar'],
            },
            {
              title: 'Creative Subjects',
              icon: '🎨',
              items: ['Visual Arts', 'Music', 'Technology', 'Physical Education'],
            },
            {
              title: 'Uzbek Language',
              icon: '📖',
              items: ['Uzbek Language', 'Uzbek Literature', 'History of Uzbekistan'],
            },
          ],
        },
        supportSystem: {
          title: 'Same Support System',
          tiers: [
            {
              name: 'Tier 1: All Students',
              description: 'Differentiated instruction',
              features: ['Teachers track progress', 'Flexible groups', 'Adapt to pace'],
            },
            {
              name: 'Tier 2: Some Students',
              description: 'Additional lessons',
              features: ['Math and Russian', 'Small groups', 'Proactive help'],
            },
            {
              name: 'Tier 3: Few Students',
              description: 'Intensive help',
              features: ['Individual sessions', 'Emotional support', 'Parent communication'],
            },
          ],
        },
        outcomes: [
          'State certificate + strong English',
          'Can transition to IB or continue Russian programme',
          'Strong foundation in math and Russian',
          'Same independence and confidence',
          'Ready for any path in middle school',
        ],
      },
      keyPrinciples: {
        title: 'Our Key Principles',
        items: [
          {
            icon: Users,
            title: 'Compete with Yourself',
            description: 'Students set personal goals each term. No class rankings. Celebration of effort and growth.',
          },
          {
            icon: Heart,
            title: 'Safe Environment',
            description: 'Safe to make mistakes, ask questions, and be yourself. 99% parent satisfaction on safety and support.',
          },
          {
            icon: Heart,
            title: 'Individual Support',
            description: 'Three-tier system: no one is left without help. Students get help BEFORE failing, not after.',
          },
        ],
      },
      activities: {
        title: 'Extracurricular Activities',
        description: 'Available for both programmes',
        categories: [
          {
            title: 'Sports',
            items: ['Football', 'Basketball', 'Swimming', 'Athletics'],
          },
          {
            title: 'Arts',
            items: ['Drawing', 'Music', 'Theater', 'Dance'],
          },
          {
            title: 'Academic',
            items: ['Math Club', 'Robotics', 'Chess', 'Science'],
          },
          {
            title: 'Languages',
            items: ['Additional English', 'Chinese', 'French'],
          },
        ],
      },
      transition: {
        title: 'Transition to Middle School',
        promise: '"By Grade 6, your child won\'t need us to push them. They\'ll pull themselves forward—because we\'ve built the internal drive that lasts."',
        building: [
          'Student agency → Middle school requires self-direction',
          'Core knowledge → Foundation for all future subjects',
          'Inquiry habits → Hypothesis-testing mindset',
          'Time management → Multiple subjects and deadlines',
          'Self-awareness → Understanding strengths/weaknesses',
        ],
      },
      cta: {
        title: 'Choose the Best Path for Your Child',
        description: 'Schedule a consultation to learn more about each programme',
        button: 'Schedule Consultation',
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
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#C41E3A] to-[#A01830] text-white px-4 md:px-6"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(45deg, #FFD700 25%, transparent 25%), linear-gradient(-45deg, #FFD700 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #FFD700 75%), linear-gradient(-45deg, transparent 75%, #FFD700 75%)', backgroundSize: '40px 40px', backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px' }}></div>
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
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/20 backdrop-blur-sm rounded-lg text-badge md:text-sm font-bold mb-4 md:mb-5 border-2 border-white/30"
              >
                {t.hero.badge}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-bold mb-4 md:mb-5"
              >
                {t.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-card-h3 lg:text-xl mb-4 md:mb-5 font-semibold"
              >
                {t.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-small md:text-base text-white/90 mb-6 md:mb-8"
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1596496356933-9b6e0b186b88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBzY2hvb2wlMjBzdHVkZW50cyUyMHNjaWVuY2UlMjBjb2xsYWJvcmF0ионufGVufDF8fHx8MTc2OTY3NDUzNHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={language === 'ru' ? 'Ученики начальной школы' : language === 'uz' ? 'Boshlang\'ich maktab o\'quvchilari' : 'Primary School Students'}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#C41E3A]/30 to-transparent"></div>
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

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="content-section px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center"
          >
            {programContent.features.title}
          </motion.h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-tight md:gap-mobile-normal">
            {programContent.features.items.map((item, index) => (
              <FeatureCard
                key={index}
                feature={{...item, emoji: index === 0 ? '🔍' : index === 1 ? '📚' : index === 2 ? '❤️' : '⭐'}}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Subjects Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {programContent.subjects.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-normal">
            {programContent.subjects.groups.map((group, index) => (
              <div
                key={index}
                className={`card-mobile compact-p bg-white rounded-xl shadow-md ${selectedProgram === 'ib' ? 'border-l-4 border-[#003A70]' : 'border-l-4 border-[#C41E3A]'} hover:shadow-xl transition-all`}
              >
                <div className="text-3xl sm:text-4xl mb-3">{group.icon}</div>
                <h3 className={`text-card-h2 sm:text-lg font-bold ${selectedProgram === 'ib' ? 'text-[#003A70]' : 'text-[#C41E3A]'} mb-3`}>
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-mobile-tight">
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle className={`icon-secondary ${selectedProgram === 'ib' ? 'text-[#003A70]' : 'text-[#C41E3A]'} flex-shrink-0 mt-0.5`} />
                      <span className="text-gray-700 text-caption sm:text-small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support System Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3 text-center">
            {programContent.supportSystem.title}
          </h2>
          <p className="text-small md:text-base text-gray-600 text-center mb-8 md:mb-10">
            {language === 'ru' ? 'Никто не проваливается сквозь щели' : language === 'uz' ? 'Hech kim tushib ketmaydi' : 'No one slips through the cracks'}
          </p>
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {programContent.supportSystem.tiers.map((tier, index) => (
              <div key={index} className="card-mobile compact-p bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-[#C41E3A] transition-all">
                <h3 className="text-card-h2 sm:text-lg font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-small text-gray-600 mb-4">{tier.description}</p>
                <ul className="flex flex-col gap-mobile-tight">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <CheckCircle className="icon-secondary text-[#C41E3A] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-small">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Principles Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {t.keyPrinciples.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-mobile-normal">
            {t.keyPrinciples.items.map((item, index) => (
              <div key={index} className="card-mobile compact-p bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#C41E3A] to-[#A01830] rounded-xl flex items-center justify-center mb-3">
                  <item.icon className="icon-primary text-white" />
                </div>
                <h3 className="text-card-h2 sm:text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-small text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-3 text-center">
            {t.activities.title}
          </h2>
          <p className="text-small md:text-base text-gray-600 text-center mb-8 md:mb-10">
            {t.activities.description}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-normal">
            {t.activities.categories.map((category, index) => (
              <div key={index} className="card-mobile compact-p bg-white rounded-xl shadow-md hover:shadow-xl transition-all">
                <h3 className="text-card-h3 sm:text-base font-bold text-gray-900 mb-3">{category.title}</h3>
                <ul className="flex flex-col gap-mobile-tight">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FFD700]" />
                      <span className="text-gray-700 text-caption sm:text-small">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-bold text-gray-900 mb-8 md:mb-10 text-center">
            {language === 'ru' ? 'Что строит начальная школа' : language === 'uz' ? 'Boshlang\'ich maktab nima quradi' : 'What Primary Builds'}
          </h2>
          <div className="flex flex-col gap-mobile-tight">
            {programContent.outcomes.map((outcome, index) => (
              <div key={index} className="card-mobile compact-p flex items-start gap-3 bg-gray-50 rounded-xl">
                <Award className={`icon-secondary ${selectedProgram === 'ib' ? 'text-[#003A70]' : 'text-[#C41E3A]'} flex-shrink-0 mt-1`} />
                <p className="text-small md:text-base text-gray-800">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition Promise Section */}
      <section className="content-section px-6 bg-gradient-to-br from-[#003A70] to-[#004d99] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section-h1 md:text-3xl font-bold mb-4 sm:mb-5">{t.transition.title}</h2>
          <p className="text-card-h3 sm:text-lg md:text-xl font-light italic mb-8 md:mb-10">{t.transition.promise}</p>
          <div className="grid md:grid-cols-2 gap-mobile-tight text-left">
            {t.transition.building.map((item, index) => (
              <div key={index} className="compact-p flex items-start gap-3 bg-white/10 rounded-lg">
                <Trophy className="icon-secondary text-[#FFD700] flex-shrink-0 mt-1" />
                <span className="text-white/90 text-small">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            className="cta-button inline-block bg-gradient-to-r from-[#C41E3A] to-[#A01830] text-white px-8 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            {t.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}