import { useLanguage } from '@/app/contexts/LanguageContext';
import { ArrowRight, Target, Heart, Shield, Users2, Lightbulb, BookOpen, Sparkles, CheckCircle2, Award, MapPin, Star, Navigation, Locate, Car, Bus, School } from 'lucide-react';
import { Link } from 'react-router';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';
import { motion } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import logo from 'figma:asset/590b9da81888458344497f425d605da99f460037.png';
import '@/styles/infinite-carousel.css';
import { universities } from '@/data/universities';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ProgramCard } from '@/app/components/ProgramCard';
import { StatsCard } from '@/app/components/StatsCard';
import { ApproachCard } from '@/app/components/ApproachCard';

/**
 * Home Page Component
 * Main landing page for Oxbridge International School website
 * featuring hero section, programs overview, campus finder, stats, approach cards,
 * university admissions carousel, and call-to-action sections
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, TypeScript types, and ARIA attributes for better LLM comprehension
 */

// TypeScript interfaces for AIO optimization
interface Campus {
  name: string;
  programs: string;
  ageRange: string;
  distance: string;
  busAvailable: string;
}

interface ValueItem {
  icon: any;
  title: string;
  description: string;
}

interface ProgramInfo {
  title: string;
  age: string;
  description: string;
  href: string;
}

interface StatItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export function HomePage() {
  const { language, getLocalizedPath } = useLanguage();
  const { openModal } = useEnrollModal();
  const [activeValue, setActiveValue] = useState(0);
  const [address, setAddress] = useState('');
  const [userLocation, setUserLocation] = useState<string | null>(null);
  const [campusResults, setCampusResults] = useState<Array<{ name: string; distance: string; programs: string; ageRange: string; busAvailable: string }> | null>(null);
  const [activeCampusIndex, setActiveCampusIndex] = useState<number | null>(null);
  const [isLoadingMap, setIsLoadingMap] = useState(false);
  
  // Carousel drag state
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  
  // Gallery carousel drag state
  const galleryCarouselRef = useRef<HTMLDivElement>(null);
  const [isGalleryDragging, setIsGalleryDragging] = useState(false);
  const [galleryStartX, setGalleryStartX] = useState(0);
  const [galleryScrollLeft, setGalleryScrollLeft] = useState(0);

  // Smooth scroll function with offset - interruptible
  const smoothScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const headerOffset = 100; // Offset for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = offsetPosition - startPosition;
    const duration = 800; // ms
    let startTime: number | null = null;
    let animationId: number;
    let isCancelled = false;

    // Cancel animation on user interaction
    const cancelAnimation = () => {
      isCancelled = true;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      window.removeEventListener('wheel', cancelAnimation);
      window.removeEventListener('touchstart', cancelAnimation);
      window.removeEventListener('keydown', cancelAnimation);
    };

    // Listen for user scroll attempts
    window.addEventListener('wheel', cancelAnimation, { passive: true });
    window.addEventListener('touchstart', cancelAnimation, { passive: true });
    window.addEventListener('keydown', cancelAnimation);

    // Easing function for smooth animation
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animation = (currentTime: number) => {
      if (isCancelled) return;
      
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * ease);
      
      if (progress < 1) {
        animationId = requestAnimationFrame(animation);
      } else {
        // Clean up listeners when animation completes
        cancelAnimation();
      }
    };

    animationId = requestAnimationFrame(animation);
  };

  // Campus Finder Functions
  const handleCampusFinder = () => {
    const campuses = [
      { 
        name: language === 'ru' ? 'Кампус 1' : language === 'uz' ? 'Kampus 1' : 'Campus 1',
        programs: language === 'ru' ? 'Детский сад и начальная школа' : language === 'uz' ? "Bolalar bog'chasi va boshlang'ich maktab" : 'Kindergarten & Primary School',
        ageRange: language === 'ru' ? 'Возраст 2-12' : language === 'uz' ? '2-12 yosh' : 'Ages 2-12',
        distance: '18',
        busAvailable: language === 'ru' ? 'скоро' : language === 'uz' ? 'tez orada' : 'soon',
      },
      { 
        name: language === 'ru' ? 'Кампус 2' : language === 'uz' ? 'Kampus 2' : 'Campus 2',
        programs: language === 'ru' ? 'Старшая школа' : language === 'uz' ? 'Yuqori maktab' : 'High School',
        ageRange: language === 'ru' ? 'Возраст 13-18' : language === 'uz' ? '13-18 yosh' : 'Ages 13-18',
        distance: '25',
        busAvailable: language === 'ru' ? 'скоро' : language === 'uz' ? 'tez orada' : 'soon',
      },
    ];
    
    if (address.trim()) {
      setUserLocation(address);
      setCampusResults(campuses);
    }
  };

  const handleUseLocation = () => {
    const mockLocation = language === 'ru' ? 'Юнусабад' : language === 'uz' ? 'Yunusobod' : 'Yunusabad district';
    setUserLocation(mockLocation);
    setAddress(mockLocation);
    
    const campuses = [
      { 
        name: language === 'ru' ? 'Кампус 1' : language === 'uz' ? 'Kampus 1' : 'Campus 1',
        programs: language === 'ru' ? 'Детский сад и начальная школа' : language === 'uz' ? 'Bolalar bog\'chasi va boshlang\'ich maktab' : 'Kindergarten & Primary School',
        ageRange: language === 'ru' ? 'Возраст 2-12' : language === 'uz' ? '2-12 yosh' : 'Ages 2-12',
        distance: '18',
        busAvailable: language === 'ru' ? 'скоро' : language === 'uz' ? 'tez orada' : 'soon',
      },
      { 
        name: language === 'ru' ? 'Кампус 2' : language === 'uz' ? 'Kampus 2' : 'Campus 2',
        programs: language === 'ru' ? 'Старшая школа' : language === 'uz' ? 'Yuqori maktab' : 'High School',
        ageRange: language === 'ru' ? 'Возраст 13-18' : language === 'uz' ? '13-18 yosh' : 'Ages 13-18',
        distance: '25',
        busAvailable: language === 'ru' ? 'скоро' : language === 'uz' ? 'tez orada' : 'soon',
      },
    ];
    
    setCampusResults(campuses);
  };

  // Drag-to-scroll for carousel
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Gallery carousel handlers
  const handleGalleryMouseDown = (e: React.MouseEvent) => {
    if (!galleryCarouselRef.current) return;
    setIsGalleryDragging(true);
    setGalleryStartX(e.pageX - galleryCarouselRef.current.offsetLeft);
    setGalleryScrollLeft(galleryCarouselRef.current.scrollLeft);
  };

  const handleGalleryMouseLeave = () => {
    setIsGalleryDragging(false);
  };

  const handleGalleryMouseUp = () => {
    setIsGalleryDragging(false);
  };

  const handleGalleryMouseMove = (e: React.MouseEvent) => {
    if (!isGalleryDragging || !galleryCarouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryCarouselRef.current.offsetLeft;
    const walk = (x - galleryStartX) * 2;
    galleryCarouselRef.current.scrollLeft = galleryScrollLeft - walk;
  };

  const handleGalleryTouchStart = (e: React.TouchEvent) => {
    if (!galleryCarouselRef.current) return;
    setIsGalleryDragging(true);
    setGalleryStartX(e.touches[0].pageX - galleryCarouselRef.current.offsetLeft);
    setGalleryScrollLeft(galleryCarouselRef.current.scrollLeft);
  };

  const handleGalleryTouchMove = (e: React.TouchEvent) => {
    if (!isGalleryDragging || !galleryCarouselRef.current) return;
    const x = e.touches[0].pageX - galleryCarouselRef.current.offsetLeft;
    const walk = (x - galleryStartX) * 2;
    galleryCarouselRef.current.scrollLeft = galleryScrollLeft - walk;
  };

  const handleGalleryTouchEnd = () => {
    setIsGalleryDragging(false);
  };

  const content = {
    ru: {
      hero: {
        tag: 'Международная школа',
        title: 'Добро пожаловать в место, где ваш ребёнок',
        titleAccent: 'раскрывает свой потенциал',
        titleEnd: 'и становится собой',
        subtitle: 'С любовью развиваем самостоятельность, критическое мышление и уверенность в себе у детей от 2 до 18 лет.',
        cta1: 'Познакомиться со школой',
        cta2: 'Наши программы',
      },
      campusFinder: {
        title: 'Найдите ближайший кампус',
        subtitle: 'Мы с радостью покажем вам наши кампусы — выберите тот, что ближе к дому',
        placeholder: 'Введите ваш адрес или район',
        findButton: 'Найти',
        useLocation: 'Использовать геолокацию',
        yourLocation: 'Ваше местоположение',
        busFooter: 'Мы предлагаем школьный автобус из большинства районов',
        seeBusRoutes: 'Посмотреть маршруты →',
      },
      stats: {
        title: 'Результаты, которыми мы гордимся',
        items: [
          { value: '98%', label: 'Поступления в топ-100', icon: Award },
          { value: '450+', label: 'Счастливых учеников', icon: Users2 },
          { value: '2', label: 'Уютных кампуса', icon: MapPin },
        ]
      },
      approach: {
        tag: 'Наш подход',
        title: 'Пять принципов, которые делают нас особенными',
        principles: [
          {
            icon: Target,
            title: 'Student Agency',
            subtitle: 'Самостоятельность ученика',
            description: 'С 2 лет дети учатся делать выбор, принимать решения и регулировать себя. Это не просто навыки — это фундамент счастливой и успешной жизни.',
          },
          {
            icon: Users2,
            title: 'Compete with Yourself',
            subtitle: 'Соревнуйся с собой',
            description: 'Никаких классных рейтингов. Никакого сравнения друг с другом. Каждый ребёнок ставит свои цели, отслеживает свой прогресс и празднует личные победы.',
          },
          {
            icon: Shield,
            title: 'Safe Environment',
            subtitle: 'Безопасная среда',
            description: '99% родителей довольны безопасностью. Для нас это не только охрана и медцентр — это среда, где можно ошибаться, задавать любые вопросы и быть собой.',
          },
          {
            icon: Heart,
            title: 'Individual Support',
            subtitle: 'Индивидуальная поддержка',
            description: 'Каждый ребёнок уникален. Мы используем трёхуровневую систему поддержки: общее обучение, целевая помощь и интенсивная поддержка — каждому по потребностям.',
          },
          {
            icon: Lightbulb,
            title: 'Plan A/B/C',
            subtitle: 'Подход Планов A/B/C',
            description: 'Мечта. Реальность. Безопасный вариант. Мы помогаем каждому студенту создать несколько путей к успеху — потому что жизнь полна возможностей.',
          },
        ]
      },
      programs: {
        tag: 'Программы обучения',
        title: 'Три этапа роста вашего ребёнка',
        items: [
          {
            age: '2-6 лет',
            title: 'Kindergarten',
            titleRu: 'Детский сад',
            description: 'Здесь маленькие сердца чувствуют заботу, а маленькие умы расцветают от любопытства',
            features: ['Первые шаги к самостоятельности', 'Тёплая и безопасная среда', 'Радость открытий каждый день'],
            link: 'programs/kindergarten',
            color: 'from-[#f8eb78] to-[#f7d454]'
          },
          {
            age: '6-12 лет',
            title: 'Primary School',
            titleRu: 'Начальная школа',
            description: 'Знания превращаются в увлекательные открытия',
            features: ['IB Primary Years', 'Поддержка на каждом шагу', 'Математика + Английский в игровой форме'],
            link: 'programs/primary-school',
            color: 'from-[#33559a] to-[#293863]'
          },
          {
            age: '13-18 лет',
            title: 'High School',
            titleRu: 'Старшая школа',
            description: 'Откройте себя настоящего и следуйте за своей мечтой',
            features: ['IB Diploma — признан в мире', 'Plan A/B/C для уверенности', 'Поддержка при поступлении'],
            link: 'programs/high-school',
            color: 'from-[#953130] to-[#7a2827]'
          },
        ]
      },
      universities: {
        tag: 'Университеты',
        title: 'Куда поступают наши выпускники',
        subtitle: 'Ведущие университеты мира с радостью принимают наших студентов',
      },
      cta: {
        title: 'Хотите увидеть нашу школу?',
        subtitle: 'Приходите на экскурсию — мы с удовольствием покажем, как учатся и растут наши дети',
        button: 'Записаться на экскурсию',
        note: 'Или позвоните нам: +998 71 123 4567'
      }
    },
    uz: {
      hero: {
        tag: 'Xalqaro maktab',
        title: 'Farzandingiz o\'z salohiyatini',
        titleAccent: 'ochib beradi',
        titleEnd: 'va o\'ziga aylanadigan joyga xush kelibsiz',
        subtitle: 'Mehr bilan 2 yoshdan 18 yoshgacha bolalarda mustaqillik, tanqidiy fikrlash va o\'ziga ishonchni rivojlantiramiz.',
        cta1: 'Maktab bilan tanishish',
        cta2: 'Bizning dasturlar',
      },
      campusFinder: {
        title: 'Eng yaqin kampusni toping',
        subtitle: 'Biz sizga kampuslarimizni mamnuniyat bilan ko\'rsatamiz — uyingizga yaqinini tanlang',
        placeholder: 'Manzilingiz yoki tumanni kiriting',
        findButton: 'Topish',
        useLocation: 'Joylashuvdan foydalanish',
        yourLocation: 'Sizning joylashuvingiz',
        busFooter: 'Biz ko\'pchilik tumanlardan maktab avtobusi xizmatini taqdim etamiz',
        seeBusRoutes: 'Marshrutlarni ko\'rish →',
      },
      stats: {
        title: 'Biz faxrlanadigan natijalar',
        items: [
          { value: '98%', label: 'Top-100ga qabul', icon: Award },
          { value: '450+', label: 'Baxtli o\'quvchilar', icon: Users2 },
          { value: '2', label: 'Qulay kampus', icon: MapPin },
        ]
      },
      approach: {
        tag: 'Bizning yondashuvimiz',
        title: 'Bizni o\'ziga xos qiladigan besh tamoyil',
        principles: [
          {
            icon: Target,
            title: 'Student Agency',
            subtitle: 'Talaba mustaqilligi',
            description: '2 yoshdan boshlab bolalar tanlov qilishni, qaror qabul qilishni va o\'zini boshqarishni o\'rganadilar. Bu shunchaki ko\'nikmalar emas — bu baxtli va muvaffaqiyatli hayot uchun asos.',
          },
          {
            icon: Users2,
            title: 'Compete with Yourself',
            subtitle: 'O\'zingiz bilan raqobatlashing',
            description: 'Sinf reytinglari yo\'q. Bir-biri bilan taqqoslash yo\'q. Har bir bola o\'z maqsadlarini qo\'yadi, o\'z taraqqiyotini kuzatadi va shaxsiy g\'alabalarni nishonlaydi.',
          },
          {
            icon: Shield,
            title: 'Safe Environment',
            subtitle: 'Xavfsiz muhit',
            description: '99% ota-onalar xavfsizlikdan mamnun. Biz uchun bu faqat xavfsizlik va tibbiy markaz emas — bu xato qilish, har qanday savol berish va o\'zingiz bo\'lish mumkin bo\'lgan muhit.',
          },
          {
            icon: Heart,
            title: 'Individual Support',
            subtitle: 'Individual qo\'llab-quvvatlash',
            description: 'Har bir bola noyobdir. Biz uch darajali qo\'llab-quvvatlash tizimidan foydalanamiz: umumiy ta\'lim, maqsadli yordam va intensiv qo\'llab-quvvatlash — har biriga ehtiyojiga ko\'ra.',
          },
          {
            icon: Lightbulb,
            title: 'Plan A/B/C',
            subtitle: 'A/B/C rejalar yondashuvi',
            description: 'Orzu. Haqiqat. Xavfsiz variant. Biz har bir talabaga muvaffaqiyatga erishishning bir necha yo\'lini yaratishda yordam beramiz — chunki hayot imkoniyatlarga to\'la.',
          },
        ]
      },
      programs: {
        tag: 'O\'quv dasturlari',
        title: 'Farzandingizning uch bosqichli o\'sishi',
        items: [
          {
            age: '2-6 yosh',
            title: 'Kindergarten',
            titleRu: 'Bolalar bog\'chasi',
            description: 'Kichkina yuraklar g\'amxo\'rlikni his qiladigan, kichkina onglar qiziquvchanlikdan gullaydi',
            features: ['Mustaqillikka birinchi qadamlar', 'Issiq va xavfsiz muhit', 'Har kuni kashfiyot quvonchi'],
            link: 'programs/kindergarten',
            color: 'from-[#f8eb78] to-[#f7d454]'
          },
          {
            age: '6-12 yosh',
            title: 'Primary School',
            titleRu: 'Boshlang\'ich maktab',
            description: 'Bilim qiziqarli kashfiyotlarga aylanadi',
            features: ['IB Primary Years', 'Har qadamda qo\'llab-quvvatlash', 'Matematika + Ingliz o\'yin shaklida'],
            link: 'programs/primary-school',
            color: 'from-[#33559a] to-[#293863]'
          },
          {
            age: '13-18 yosh',
            title: 'High School',
            titleRu: 'Yuqori maktab',
            description: 'Haqiqiy o\'zingizni oching va orzuingiz ortidan boring',
            features: ['IB Diploma — dunyoda tan olingan', 'Ishonch uchun A/B/C rejasi', 'Qabulda qo\'llab-quvvatlash'],
            link: 'programs/high-school',
            color: 'from-[#953130] to-[#7a2827]'
          },
        ]
      },
      universities: {
        tag: 'Universitetlar',
        title: 'Bitiruvchilarimiz qayerga kiradi',
        subtitle: 'Dunyoning yetakchi universitetlari bizning talabalarni mamnuniyat bilan qabul qiladi',
      },
      cta: {
        title: 'Maktabimizni ko\'rishni xohlaysizmi?',
        subtitle: 'Ekskursiyaga keling — bolalarimiz qanday o\'rganishi va o\'sishini mamnuniyat bilan ko\'rsatamiz',
        button: 'Ekskursiyaga yozilish',
        note: 'Yoki bizga qo\'ng\'iroq qiling: +998 71 123 4567'
      }
    },
    en: {
      hero: {
        tag: 'International School',
        title: 'Welcome to a place where your child',
        titleAccent: 'unlocks their potential',
        titleEnd: 'and becomes themselves',
        subtitle: 'With love, we develop independence, critical thinking, and self-confidence in children from age 2 to 18.',
        cta1: 'Meet Our School',
        cta2: 'Our Programs',
      },
      campusFinder: {
        title: 'Find Your Nearest Campus',
        subtitle: 'We\'d love to show you our campuses — choose the one closer to home',
        placeholder: 'Enter your address or district',
        findButton: 'Find',
        useLocation: 'Use my location',
        yourLocation: 'Your location',
        busFooter: 'We offer school bus service from most districts',
        seeBusRoutes: 'See bus routes →',
      },
      stats: {
        title: 'Results we\'re proud of',
        items: [
          { value: '98%', label: 'Admission to top-100', icon: Award },
          { value: '450+', label: 'Happy students', icon: Users2 },
          { value: '2', label: 'Welcoming campuses', icon: MapPin },
        ]
      },
      approach: {
        tag: 'Our Approach',
        title: 'Five principles that make us special',
        principles: [
          {
            icon: Target,
            title: 'Student Agency',
            subtitle: 'Student Independence',
            description: 'From age 2, children learn to make choices, decisions, and self-regulate. These aren\'t just skills — they\'re the foundation for a happy and successful life.',
          },
          {
            icon: Users2,
            title: 'Compete with Yourself',
            subtitle: 'Compete with Yourself',
            description: 'No class rankings. No comparing to others. Every child sets their own goals, tracks their progress, and celebrates personal victories.',
          },
          {
            icon: Shield,
            title: 'Safe Environment',
            subtitle: 'Safe Environment',
            description: '99% of parents are satisfied with safety. For us, it\'s not just security and medical center — it\'s an environment where you can make mistakes, ask any questions, and be yourself.',
          },
          {
            icon: Heart,
            title: 'Individual Support',
            subtitle: 'Individual Support',
            description: 'Every child is unique. We use a three-tier support system: general instruction, targeted help, and intensive support — tailored to each child\'s needs.',
          },
          {
            icon: Lightbulb,
            title: 'Plan A/B/C',
            subtitle: 'Plan A/B/C Approach',
            description: 'Dream. Realistic. Safe option. We help every student create multiple pathways to success — because life is full of opportunities.',
          },
        ]
      },
      programs: {
        tag: 'Our Programs',
        title: 'Three stages of your child\'s growth',
        items: [
          {
            age: 'Ages 2-6',
            title: 'Kindergarten',
            titleRu: 'Kindergarten',
            description: 'Where little hearts feel cared for and little minds bloom with curiosity',
            features: ['First steps to independence', 'Warm and safe environment', 'Joy of discovery every day'],
            link: 'programs/kindergarten',
            color: 'from-[#f8eb78] to-[#f7d454]'
          },
          {
            age: 'Ages 6-12',
            title: 'Primary School',
            titleRu: 'Primary School',
            description: 'Knowledge becomes exciting discoveries',
            features: ['IB Primary Years', 'Support every step of the way', 'Math + English through play'],
            link: 'programs/primary-school',
            color: 'from-[#33559a] to-[#293863]'
          },
          {
            age: 'Ages 13-18',
            title: 'High School',
            titleRu: 'High School',
            description: 'Discover your true self and follow your dreams',
            features: ['IB Diploma — recognized worldwide', 'Plan A/B/C for confidence', 'University admission support'],
            link: 'programs/high-school',
            color: 'from-[#953130] to-[#7a2827]'
          },
        ]
      },
      universities: {
        tag: 'Universities',
        title: 'Where Our Graduates Go',
        subtitle: 'Leading universities worldwide welcome our students',
      },
      cta: {
        title: 'Want to see our school?',
        subtitle: 'Come for a tour — we\'d love to show you how our children learn and grow',
        button: 'Book a Tour',
        note: 'Or call us: +998 71 123 4567'
      }
    }
  };

  const t = content[language];

  // Universities list
  const universities = [
    { name: 'Harvard', country: 'USA' },
    { name: 'Oxford', country: 'UK' },
    { name: 'Cambridge', country: 'UK' },
    { name: 'MIT', country: 'USA' },
    { name: 'Stanford', country: 'USA' },
    { name: 'Yale', country: 'USA' },
    { name: 'Princeton', country: 'USA' },
    { name: 'Tsinghua', country: 'China' },
    { name: 'Peking University', country: 'China' },
    { name: 'Imperial College', country: 'UK' },
    { name: 'UCL', country: 'UK' },
    { name: 'Columbia', country: 'USA' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with animations */}
      <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 px-4 md:px-6 bg-gradient-to-br from-[#293863] via-[#2d4275] to-[#33559a] overflow-hidden">
        {/* Animated background patterns */}
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-[#f8eb78] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-96 h-96 bg-[#f7d454] opacity-10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-3 md:mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Sparkles size={14} className="text-[#f7d454] md:w-4 md:h-4" />
              <span className="text-white/90 text-[11px] md:text-sm font-display tracking-wide">{t.hero.tag}</span>
            </div>
          </motion.div>

          {/* Main Title with stagger animation */}
          <div className="text-center space-y-3 md:space-y-6 mb-6 md:mb-10">
            <motion.h1
              className="font-display"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-[32px] leading-[1.2] sm:text-4xl md:text-5xl lg:text-6xl md:leading-tight text-white font-light mb-2 md:mb-3 max-w-[340px] sm:max-w-none mx-auto">
                {t.hero.title}{' '}
                <span className="relative inline-block">
                  <span className="text-[#f7d454] font-normal">{t.hero.titleAccent}</span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-[#953130] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                  />
                </span>
              </div>
              <div className="text-xl leading-[1.3] sm:text-2xl md:text-3xl lg:text-4xl md:leading-tight text-white/90 font-light max-w-[340px] sm:max-w-none mx-auto">
                {t.hero.titleEnd}
              </div>
            </motion.h1>
            <motion.p
              className="text-[14px] leading-[1.5] md:text-base lg:text-lg text-white/80 max-w-[320px] md:max-w-2xl lg:max-w-3xl mx-auto font-ui"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={openModal}
              className="h-12 px-6 md:px-8 bg-[#953130] text-white rounded-full hover:bg-[#8B2327] transition-all inline-flex items-center justify-center gap-2 group shadow-xl font-ui text-[15px] w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(149, 49, 48, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.hero.cta1}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => smoothScrollToSection('programs-section')}
                className="h-12 px-6 md:px-8 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transition-all border border-white/20 font-ui inline-flex items-center justify-center text-[15px] w-full sm:w-auto"
              >
                {t.hero.cta2}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Programs Section - Right after Hero */}
      <section id="programs-section" className="relative py-16 md:py-20 lg:py-24 px-4 md:px-6 bg-white">        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16 space-y-4 md:space-y-6">
            <motion.div
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-gray-50 rounded-full text-[#293863] text-[10px] md:text-xs font-display tracking-[0.2em] uppercase mb-3 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {t.programs.tag}
            </motion.div>
            <motion.h2
              className="text-[clamp(1.625rem,5vw,2rem)] sm:text-3xl md:text-4xl text-[#293863] font-display font-light tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.programs.title}
            </motion.h2>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {t.programs.items.map((program, idx) => {
              const backgroundImages = [
                'https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwa2luZGVyZ2FydGVuJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY5NzU0MjI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1769201153045-98827f62996b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVtZW50YXJ5JTIwc2Nob29sJTIwc3R1ZGVudHMlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzY5NzU0MjMwfDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1721702754494-fdd7189f946c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoJTIwc2Nob29sJTIwc3R1ZGVudHMlMjBzdHVkeWluZ3xlbnwxfHx8fDE3Njk3NTQyMzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
              ];
              
              return (
                <ProgramCard
                  key={idx}
                  program={program}
                  index={idx}
                  backgroundImage={backgroundImages[idx]}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* School Life Gallery Carousel */}
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="inline-block px-4 py-1.5 md:px-5 md:py-2 bg-[#f8eb78]/30 rounded-full text-[#293863] text-[10px] md:text-xs font-display tracking-[0.2em] uppercase mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {language === 'ru' ? 'Школьная жизнь' : language === 'uz' ? 'Maktab hayoti' : 'School Life'}
            </motion.div>
            <motion.h2
              className="text-[clamp(1.5rem,4.5vw,1.875rem)] sm:text-3xl md:text-4xl text-[#293863] font-display font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {language === 'ru' ? 'Моменты, которые создают будущее' : language === 'uz' ? 'Kelajakni yaratuvchi lahzalar' : 'Moments That Shape Tomorrow'}
            </motion.h2>
          </div>

          {/* Draggable Gallery Carousel */}
          <div 
            ref={galleryCarouselRef}
            className={`relative overflow-x-scroll scrollbar-hide ${isGalleryDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleGalleryMouseDown}
            onMouseLeave={handleGalleryMouseLeave}
            onMouseUp={handleGalleryMouseUp}
            onMouseMove={handleGalleryMouseMove}
            onTouchStart={handleGalleryTouchStart}
            onTouchMove={handleGalleryTouchMove}
            onTouchEnd={handleGalleryTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <motion.div 
              className={`flex gap-6 ${!isGalleryDragging ? 'animate-scroll-fast' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Triple the gallery for infinite effect */}
              {[
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Современные классы' : language === 'uz' ? 'Zamonaviy sinflar' : 'Modern Classrooms',
                },
                {
                  image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGtpZHN8ZW58MXx8fHwxNzY5NzYyNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Научная лаборатория' : language === 'uz' ? 'Ilmiy laboratoriya' : 'Science Lab',
                },
                {
                  image: 'https://images.unsplash.com/photo-1769720205882-9b00bf2c402a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBjbGFzcyUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Творческие занятия' : language === 'uz' ? 'Ijodiy darslar' : 'Creative Arts',
                },
                {
                  image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHMlMjByZWFkaW5nfGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Библиотека' : language === 'uz' ? 'Kutubxona' : 'Library',
                },
                {
                  image: 'https://images.unsplash.com/photo-1542899435-95e8b1563695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kJTIwa2lkc3xlbnwxfHx8fDE3Njk3NjI1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Спортивные площадки' : language === 'uz' ? 'Sport maydonlari' : 'Sports Facilities',
                },
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Интерактивное обучение' : language === 'uz' ? 'Interfaol ta\'lim' : 'Interactive Learning',
                },
              ].concat([
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Современные классы' : language === 'uz' ? 'Zamonaviy sinflar' : 'Modern Classrooms',
                },
                {
                  image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGtpZHN8ZW58MXx8fHwxNzY5NzYyNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Научная лаборатория' : language === 'uz' ? 'Ilmiy laboratoriya' : 'Science Lab',
                },
                {
                  image: 'https://images.unsplash.com/photo-1769720205882-9b00bf2c402a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBjbGFzcyUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Творческие занятия' : language === 'uz' ? 'Ijodiy darslar' : 'Creative Arts',
                },
                {
                  image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHMlMjByZWFkaW5nfGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Библиотека' : language === 'uz' ? 'Kutubxona' : 'Library',
                },
                {
                  image: 'https://images.unsplash.com/photo-1542899435-95e8b1563695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kJTIwa2lkc3xlbnwxfHx8fDE3Njk3NjI1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Спортивные площадки' : language === 'uz' ? 'Sport maydonlari' : 'Sports Facilities',
                },
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Интерактивное обучение' : language === 'uz' ? 'Interfaol ta\'lim' : 'Interactive Learning',
                },
              ]).concat([
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Современные классы' : language === 'uz' ? 'Zamonaviy sinflar' : 'Modern Classrooms',
                },
                {
                  image: 'https://images.unsplash.com/photo-1758685734153-132c8620c1bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwbGFib3JhdG9yeSUyMGtpZHN8ZW58MXx8fHwxNzY5NzYyNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Научная лаборатория' : language === 'uz' ? 'Ilmiy laboratoriya' : 'Science Lab',
                },
                {
                  image: 'https://images.unsplash.com/photo-1769720205882-9b00bf2c402a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBjbGFzcyUyMGNoaWxkcmVufGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Творческие занятия' : language === 'uz' ? 'Ijodiy darslar' : 'Creative Arts',
                },
                {
                  image: 'https://images.unsplash.com/photo-1602114324193-e1c1b41dcde5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZGVudHMlMjByZWFkaW5nfGVufDF8fHx8MTc2OTc2MjU2NHww&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Библиотека' : language === 'uz' ? 'Kutubxona' : 'Library',
                },
                {
                  image: 'https://images.unsplash.com/photo-1542899435-95e8b1563695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBwbGF5Z3JvdW5kJTIwa2lkc3xlbnwxfHx8fDE3Njk3NjI1NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Спортивные площадки' : language === 'uz' ? 'Sport maydonlari' : 'Sports Facilities',
                },
                {
                  image: 'https://images.unsplash.com/photo-1764720572930-eb63afd14b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBjbGFzc3Jvb20lMjBzdHVkZW50c3xlbnwxfHx8fDE3Njk2NzU4NTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  title: language === 'ru' ? 'Интерактивное обучение' : language === 'uz' ? 'Interfaol ta\'lim' : 'Interactive Learning',
                },
              ]).map((item, idx) => (
                <div key={idx} className="flex-shrink-0 w-[400px] md:w-[500px]">
                  <div className="relative group overflow-hidden rounded-2xl aspect-[16/10] bg-gray-100 select-none">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      draggable="false"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#293863]/90 via-[#293863]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-white font-display text-xl md:text-2xl font-light">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hint Text */}
          <motion.p
            className="text-center mt-8 text-sm text-gray-500 font-ui"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {language === 'ru' ? '← Перетащите, чтобы увидеть больше →' : language === 'uz' ? '← Ko\'proq ko\'rish uchun torting →' : '← Drag to see more →'}
          </motion.p>
        </div>
      </section>

      {/* Stats Section with counter animation */}
      <section className="py-8 md:py-12 px-4 md:px-6 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-center text-[26px] sm:text-2xl md:text-3xl text-[#293863] font-display font-light mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.stats.title}
          </motion.h2>
          <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8">
            {t.stats.items.map((stat, idx) => (
              <StatsCard key={idx} stat={stat} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section with hover interactions */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 space-y-3 md:space-y-4">
            <motion.div
              className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#f8eb78]/30 rounded-full text-[#293863] text-[11px] md:text-sm font-display font-normal mb-3 md:mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {t.approach.tag}
            </motion.div>
            <motion.h2
              className="text-[clamp(1.5rem,4.5vw,1.875rem)] sm:text-3xl md:text-4xl text-[#293863] font-display font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.approach.title}
            </motion.h2>
          </div>

          {/* Principles Grid/List */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 lg:gap-6">
            {t.approach.principles.map((principle, idx) => (
              <ApproachCard key={idx} principle={principle} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Campus Finder Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <motion.div
              className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#33559a]/10 rounded-full text-[#33559a] text-xs md:text-sm font-display font-normal mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {language === 'ru' ? 'Кампусы' : language === 'uz' ? 'Kampuslar' : 'Campuses'}
            </motion.div>
            <motion.h2
              className="text-[clamp(1.5rem,4.5vw,1.875rem)] sm:text-3xl md:text-4xl text-[#293863] font-display font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.campusFinder.title}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 font-ui"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.campusFinder.subtitle}
            </motion.p>
          </div>

          {/* Campus Finder Widget */}
          <motion.div
            className="bg-white/95 backdrop-blur-sm rounded-3xl p-4 md:p-8 lg:p-10 shadow-2xl border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 md:left-5 top-1/2 -translate-y-1/2 text-[#33559a] w-5 h-5 md:w-6 md:h-6" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      setIsLoadingMap(true);
                      handleCampusFinder();
                      setTimeout(() => setIsLoadingMap(false), 1000);
                    }
                  }}
                  placeholder={t.campusFinder.placeholder}
                  className="w-full pl-12 md:pl-14 pr-4 md:pr-6 py-3 md:py-5 rounded-2xl border-2 border-gray-200 focus:border-[#33559a] focus:outline-none text-sm md:text-lg transition-all"
                />
              </div>
              <button
                onClick={() => {
                  setIsLoadingMap(true);
                  handleUseLocation();
                  setTimeout(() => setIsLoadingMap(false), 1000);
                }}
                className="px-4 md:px-6 lg:px-8 py-3 md:py-5 bg-white border-2 border-gray-200 text-[#33559a] rounded-2xl hover:bg-gray-50 transition-all font-medium text-sm md:text-base lg:text-lg inline-flex items-center justify-center gap-2 group whitespace-nowrap"
              >
                <Locate size={18} className="group-hover:scale-110 transition-transform md:w-5 md:h-5" />
                <span className="hidden md:inline">{t.campusFinder.useLocation}</span>
                <span className="md:hidden">{language === 'ru' ? 'GPS' : language === 'uz' ? 'GPS' : 'GPS'}</span>
              </button>
              <button
                onClick={() => {
                  setIsLoadingMap(true);
                  handleCampusFinder();
                  setTimeout(() => setIsLoadingMap(false), 1000);
                }}
                className="px-6 md:px-8 lg:px-10 py-3 md:py-5 bg-[#953130] text-white rounded-2xl hover:bg-[#8B2327] transition-all font-medium text-sm md:text-base lg:text-lg inline-flex items-center justify-center gap-2 group"
              >
                <Navigation size={18} className="group-hover:rotate-45 transition-transform md:w-5 md:h-5" />
                {t.campusFinder.findButton}
              </button>
            </div>

            {/* Results Section */}
            {campusResults && (
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Your Location Header */}
                <div className="flex items-center gap-2 text-gray-700 pb-4 border-b border-gray-200">
                  <MapPin size={18} className="text-[#953130]" />
                  <span className="font-medium">{t.campusFinder.yourLocation}:</span>
                  <span>{userLocation}</span>
                </div>

                {/* Map + Campus List Layout */}
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left: Interactive Map */}
                  <div className="flex-1 lg:w-[65%] relative">
                    <div className="bg-gradient-to-br from-[#33559a]/5 to-[#f7d454]/5 rounded-2xl border-2 border-gray-200 overflow-hidden">
                      {isLoadingMap ? (
                        <div className="aspect-[16/10] flex items-center justify-center">
                          <div className="text-center space-y-4">
                            <div className="w-16 h-16 border-4 border-[#33559a]/20 border-t-[#33559a] rounded-full animate-spin mx-auto" />
                            <p className="text-gray-600 font-medium">
                              {language === 'ru' ? 'Построение маршрута...' : language === 'uz' ? 'Marshrut tuzilmoqda...' : 'Calculating route...'}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="aspect-[16/10] relative bg-gradient-to-br from-gray-50 to-gray-100">
                          <div className="absolute inset-0 p-8">
                            {/* User Location */}
                            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10">
                              <div className="relative">
                                <div className="w-6 h-6 bg-[#f7d454] rounded-full border-4 border-white shadow-lg animate-pulse" />
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-full text-xs font-medium shadow-md">
                                  {language === 'ru' ? 'Вы здесь' : language === 'uz' ? 'Siz shu yerdasiz' : 'You are here'}
                                </div>
                              </div>
                            </div>

                            {/* Campus 1 Marker */}
                            <div className="absolute top-[25%] left-[35%] z-10">
                              <div className="relative group cursor-pointer" onClick={() => setActiveCampusIndex(0)}>
                                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all ${activeCampusIndex === 0 ? 'bg-[#953130] scale-125' : 'bg-[#33559a]'}`}>
                                  <School className="w-4 h-4 text-white m-auto mt-1" />
                                </div>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#33559a] text-white px-3 py-1 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                  {campusResults[0].name} - {campusResults[0].distance}{language === 'ru' ? ' мин' : language === 'uz' ? ' daq' : ' min'}
                                </div>
                              </div>
                              <svg className="absolute pointer-events-none" style={{ width: '200px', height: '150px', top: '0', left: '0' }}>
                                <path d="M 40 40 Q 80 60, 120 100" stroke="#33559a" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.6" />
                              </svg>
                            </div>

                            {/* Campus 2 Marker */}
                            <div className="absolute top-[20%] right-[25%] z-10">
                              <div className="relative group cursor-pointer" onClick={() => setActiveCampusIndex(1)}>
                                <div className={`w-8 h-8 rounded-full border-4 border-white shadow-lg transition-all ${activeCampusIndex === 1 ? 'bg-[#953130] scale-125' : 'bg-[#33559a]'}`}>
                                  <School className="w-4 h-4 text-white m-auto mt-1" />
                                </div>
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#33559a] text-white px-3 py-1 rounded-lg text-xs font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
                                  {campusResults[1].name} - {campusResults[1].distance}{language === 'ru' ? ' мин' : language === 'uz' ? ' daq' : ' min'}
                                </div>
                              </div>
                              <svg className="absolute pointer-events-none" style={{ width: '250px', height: '180px', top: '0', left: '-50px' }}>
                                <path d="M 250 180 Q 200 120, 120 80" stroke="#953130" strokeWidth="3" fill="none" strokeDasharray="8,4" opacity="0.6" />
                              </svg>
                            </div>

                            {/* Legend */}
                            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg space-y-2 text-xs">
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-1 bg-[#33559a] rounded" />
                                <span className="text-gray-700">{campusResults[0].name}</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-1 bg-[#953130] rounded" />
                                <span className="text-gray-700">{campusResults[1].name}</span>
                              </div>
                            </div>

                            <div className="absolute bottom-4 right-4 text-xs text-gray-400">Interactive Map</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right: Campus List */}
                  <div className="lg:w-[35%] space-y-4">
                    <div className="text-sm font-medium text-gray-700 mb-4">
                      {language === 'ru' ? 'Кампусы поблизости' : language === 'uz' ? 'Yaqin atrofdagi kampuslar' : 'Nearby Campuses'}
                      <span className="text-gray-500 ml-2">({campusResults.length})</span>
                    </div>

                    {[...campusResults].sort((a, b) => parseInt(a.distance) - parseInt(b.distance)).map((campus, idx) => {
                      const originalIdx = campusResults.findIndex(c => c.name === campus.name);
                      const isActive = activeCampusIndex === originalIdx;
                      
                      return (
                        <div key={idx} onClick={() => setActiveCampusIndex(originalIdx)} className={`group cursor-pointer bg-gradient-to-br rounded-2xl p-5 border-2 transition-all hover:shadow-lg ${isActive ? 'from-[#33559a]/10 to-[#953130]/10 border-[#953130] shadow-md' : 'from-gray-50 to-white border-gray-200 hover:border-[#33559a]/30'}`}>
                          <div className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {idx === 0 && <span className="px-2 py-0.5 bg-[#f7d454] text-xs font-medium rounded-full text-gray-900">{language === 'ru' ? 'Ближайший' : language === 'uz' ? 'Eng yaqin' : 'Closest'}</span>}
                                </div>
                                <h4 className="text-lg font-medium text-gray-900">{campus.name}</h4>
                                <p className="text-sm text-gray-600 mt-1">{campus.programs}</p>
                                <p className="text-xs text-[#33559a] font-medium mt-0.5">{campus.ageRange}</p>
                              </div>
                              <div className={`p-2 rounded-full transition-colors ${isActive ? 'bg-[#953130]/10' : 'bg-gray-100 group-hover:bg-[#33559a]/10'}`}>
                                <School className={`${isActive ? 'text-[#953130]' : 'text-gray-600'}`} size={20} />
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full ${isActive ? 'bg-[#953130] text-white' : 'bg-[#33559a]/10 text-[#33559a]'}`}>
                                <Car size={14} />
                                <span className="text-sm font-medium">{campus.distance} {language === 'ru' ? 'мин' : language === 'uz' ? 'daq' : 'min'}</span>
                              </div>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 rounded-full">
                                <Bus size={14} className="text-gray-600" />
                                <span className="text-xs text-gray-600">{campus.busAvailable}</span>
                              </div>
                            </div>

                            <div className={`text-sm font-medium flex items-center gap-1 transition-all ${isActive ? 'text-[#953130]' : 'text-[#33559a] group-hover:gap-2'}`}>
                              {language === 'ru' ? 'Показать на карте' : language === 'uz' ? 'Xaritada ko\'rsatish' : 'Show on map'}
                              <ArrowRight size={16} />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bus Service Footer */}
                <div className="text-center pt-6 border-t border-gray-200">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <Bus className="text-[#33559a]" size={20} />
                    <p className="text-gray-700 font-medium">{t.campusFinder.busFooter}</p>
                  </div>
                  <div>
                    <Link to={getLocalizedPath('about/campuses')} className="text-[#953130] hover:text-[#33559a] font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                      {t.campusFinder.seeBusRoutes}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Universities Carousel */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-gradient-to-br from-[#293863] to-[#33559a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <motion.div
              className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full text-white text-xs md:text-sm font-display font-normal mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              {t.universities.tag}
            </motion.div>
            <motion.h2
              className="text-[clamp(1.5rem,4.5vw,1.875rem)] sm:text-3xl md:text-4xl text-white font-display font-light"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t.universities.title}
            </motion.h2>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/80 font-ui"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {t.universities.subtitle}
            </motion.p>
          </div>

          {/* Infinite Carousel */}
          <div 
            ref={carouselRef}
            className={`relative overflow-x-scroll scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className={`flex gap-0 ${!isDragging ? 'animate-scroll-fast' : ''}`}>
              {/* Дублируем массив университетов для бесконечной прокрутки */}
              {[...universities, ...universities, ...universities].map((uni, idx) => (
                <div key={idx} className="flex-shrink-0 w-64 px-3">
                  <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all text-center group select-none">
                    {uni.logo ? (
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-lg flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                        <ImageWithFallback 
                          src={uni.logo} 
                          alt={uni.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-[#f7d454] transition-colors">
                        <Award size={32} className="text-white" />
                      </div>
                    )}
                    <div className="text-white font-display font-normal text-lg mb-1">{uni.name}</div>
                    <div className="text-white/60 font-ui text-sm">{uni.country}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* View More Link */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to={getLocalizedPath('about/outcomes')}
              className="inline-flex items-center gap-2 text-[#f7d454] hover:text-white transition-colors font-ui"
            >
              <span>{language === 'ru' ? 'Посмотреть все университеты' : language === 'uz' ? 'Barcha universitetlarni ko\'rish' : 'View All Universities'}</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 lg:py-24 px-4 md:px-6 bg-white">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 p-6 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="w-20 h-20 mx-auto bg-gradient-to-br from-[#33559a] to-[#293863] rounded-2xl flex items-center justify-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <img src={logo} alt="Oxbridge" className="h-12 w-12" />
          </motion.div>
          <h2 className="text-[clamp(1.5rem,4.5vw,1.875rem)] sm:text-3xl md:text-4xl text-[#293863] font-display font-light">
            {t.cta.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-ui">
            {t.cta.subtitle}
          </p>
          <div className="space-y-4">
            <motion.button
              onClick={openModal}
              className="px-6 py-3 md:px-10 md:py-4 bg-[#953130] text-white rounded-full hover:bg-[#8B2327] transition-all inline-flex items-center gap-2 group shadow-xl font-ui text-sm md:text-base lg:text-lg w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(149, 49, 48, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t.cta.button}
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <div className="text-sm text-gray-500 font-ui">
              {t.cta.note}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}