import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Heart, Users, Sparkles, Brain, Palette, Music, Trophy, Star } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';
import { Testimonials } from '@/app/components/Testimonials';
import { FeatureCard } from '@/app/components/FeatureCard';

/**
 * Early Years (Kindergarten) Page Component
 * Displays information about the kindergarten program for ages 2-6
 * including Montessori methods, STEAM approach, bilingual immersion,
 * daily schedule, and learning outcomes
 * 
 * @component
 * @description Optimized for AI understanding (AIO) with semantic HTML structure,
 * clear data hierarchy, TypeScript types, and ARIA attributes for better LLM comprehension
 */

// TypeScript interfaces for AIO optimization
interface MethodItem {
  icon: any;
  title: string;
  description: string;
}

interface ActivityItem {
  emoji: string;
  title: string;
}

interface ScheduleSlot {
  time: string;
  emoji: string;
  activity: string;
}

interface FeatureItem {
  icon: any;
  emoji: string;
  title: string;
  description: string;
}

export function EarlyYearsPage() {
  const { language, getLocalizedPath } = useLanguage();
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Детский сад',
      subtitle: 'Где маленькие сердца чувствуют себя в безопасности, а маленькие умы начинают исследовать мир',
      description: 'Безопасная, любящая среда, где начинается student agency • Каждый ребёнок ценен таким, какой он есть • Жизненные навыки, социальная уверенность и настоящая радость обучения',
      hero: {
        badge: 'Возраст 2-6 лет',
        cta: 'Приходите в гости',
      },
      methods: {
        title: '🎓 Наши методики обучения',
        subtitle: 'Используем лучшие мировые практики для развития вашего ребенка',
        items: [
          {
            icon: Palette,
            title: 'Методика Монтессори',
            description: 'Развиваем самостоятельность и естественную любознательность через специально подготовленную среду',
          },
          {
            icon: Music,
            title: 'STEAM подход',
            description: 'Интегрируем науку, технологии, инженерию, искусство и математику в игровой форме',
          },
          {
            icon: Brain,
            title: 'Билингвальное погружение',
            description: 'Естественное освоение английского и русского языков через ежедневное общение и игры',
          },
          {
            icon: Heart,
            title: 'Эмоциональный интеллект',
            description: 'Учим понимать свои эмоции, управлять ими и развивать эмпатию к окружающим',
          },
        ],
      },
      features: {
        title: '🌈 Что мы делаем каждый день?',
        items: [
          {
            icon: Music,
            emoji: '🌍',
            title: 'Говорим на двух языках',
            description: 'Английский и русский через песни, игры и сказки!',
          },
          {
            icon: Palette,
            emoji: '🎨',
            title: 'Творим и создаем',
            description: 'Рисуем, лепим, танцуем и поем — каждый ребенок — маленький художник!',
          },
          {
            icon: Heart,
            emoji: '❤️',
            title: 'Дружим и играем',
            description: 'Учимся делиться, помогать друзьям и быть добрыми',
          },
          {
            icon: Star,
            emoji: '⭐',
            title: 'Готовимся к школе',
            description: 'Учим буквы, цифры и много интересного — но через игру!',
          },
        ],
      },
      activities: {
        title: '🎪 Наши веселые занятия',
        items: [
          { emoji: '📚', title: 'Сказки и истории' },
          { emoji: '🎵', title: 'Музыка и песни' },
          { emoji: '🎭', title: 'Театр и игры' },
          { emoji: '🌳', title: 'Прогулки и природа' },
          { emoji: '🔢', title: 'Цифры и формы' },
          { emoji: '🎨', title: 'Рисование' },
          { emoji: '⚽', title: 'Спорт и движение' },
          { emoji: '🧩', title: 'Логика и загадки' },
        ],
      },
      schedule: {
        title: '⏰ Наш веселый день',
        items: [
          { time: '8:30', emoji: '👋', activity: 'Доброе утро! Встречаемся с друзьями' },
          { time: '9:00', emoji: '📖', activity: 'Учимся играя - английский и русский' },
          { time: '10:30', emoji: '🍎', activity: 'Вкусный перекус и игры' },
          { time: '11:00', emoji: '🎨', activity: 'Творческие мастерские' },
          { time: '12:30', emoji: '🍽️', activity: 'Обед и тихий час' },
          { time: '14:00', emoji: '🎭', activity: 'Проекты и эксперименты' },
          { time: '15:30', emoji: '🎪', activity: 'Кружки: музыка, танцы, спорт' },
          { time: '16:30', emoji: '🏠', activity: 'До встречи! Идем домой к родителям' },
        ],
      },
      outcomes: {
        title: '🌟 Что умеет ваш малыш после детского сада',
        items: [
          '🗣️ Свободно говорит на английском и русском',
          '📚 Читает простые слова и считает',
          '🎨 Рисует, поет, танцует',
          '👫 Легко общается и дружит',
          '💡 Задает вопросы и любит учиться',
          '⭐ Готов к большой школе!',
        ],
      },
      cta: {
        title: '🎉 Присоединяйтесь к нашей дружной семье!',
        description: 'Приходите познакомиться с нами — посмотрите, как весело и уютно у нас!',
        button: '✨ Увидеть детский сад в действии',
      },
    },
    uz: {
      title: "Bolalar bog'chasi",
      subtitle: "Kichik qalblar xavfsizlikda his qiladi, kichik umollar dunyoni o'rganishni boshlaydi",
      description: "Xavfsiz, mehribon muhit, bu erda student agency boshlanadi • Har bir bolaga uning shakli bilan qarab qaror qilinadi • Hayotiy ko'nikmalar, ijtimoiy ishonch va haqiqiy o'rganish joyi",
      hero: {
        badge: '2-6 yosh',
        cta: "Biz bilan tanishing",
      },
      methods: {
        title: "🎓 Bizning ta'lim metodikalarimiz",
        subtitle: 'Bolangizni rivojlantirish uchun eng yaxshi jahon tajribasidan foydalanamiz',
        items: [
          {
            icon: Palette,
            title: 'Montessori metodikasi',
            description: 'Maxsus tayyorlangan muhit orqali mustaqillik va tabiiy qiziqishni rivojlantiramiz',
          },
          {
            icon: Music,
            title: 'STEAM yondashuvi',
            description: "Fan, texnologiya, muhandislik, san'at va matematikani o'yin shaklida birlashtiramiz",
          },
          {
            icon: Brain,
            title: "Ikki tilli ta'lim",
            description: "Ingliz va rus tillarini kundalik muloqot va o'yinlar orqali tabiiy o'zlashtiramiz",
          },
          {
            icon: Heart,
            title: 'Hissiy intellekt',
            description: "O'z hissiyotlarini tushunishni, boshqarishni va atrofdagilarga hamdardlik qilishni o'rgatamiz",
          },
        ],
      },
      features: {
        title: '🌈 Biz har kuni nima qilamiz?',
        items: [
          {
            icon: Music,
            emoji: '🌍',
            title: 'Ikki tilda gaplashamiz',
            description: "Ingliz va rus tillari qo'shiqlar, o'yinlar va ertaklar orqali!",
          },
          {
            icon: Palette,
            emoji: '🎨',
            title: 'Ijod qilamiz',
            description: "Chizamiz, yasaymiz, raqsga tushamiz va qo'shiq aytamiz - har bir bola kichik rassom!",
          },
          {
            icon: Heart,
            emoji: '❤️',
            title: "Do'stlashamiz",
            description: "Baham ko'rishni, do'stlarga yordam berishni va mehribon bo'lishni o'rganamiz",
          },
          {
            icon: Star,
            emoji: '⭐',
            title: 'Maktabga tayyorgarlik',
            description: "Harflar, raqamlarni o'rganamiz - lekin o'yin orqali!",
          },
        ],
      },
      activities: {
        title: "🎪 Bizning qiziqarli mashg'ulotlar",
        items: [
          { emoji: '📚', title: 'Ertaklar va hikoyalar' },
          { emoji: '🎵', title: "Musiqa va qo'shiqlar" },
          { emoji: '🎭', title: "Teatr va o'yinlar" },
          { emoji: '🌳', title: 'Sayr va tabiat' },
          { emoji: '🔢', title: 'Raqamlar va shakllar' },
          { emoji: '🎨', title: 'Rasm chizish' },
          { emoji: '⚽', title: 'Sport va harakat' },
          { emoji: '🧩', title: 'Mantiq va topishmoqlar' },
        ],
      },
      schedule: {
        title: '⏰ Bizning quvnoq kunimiz',
        items: [
          { time: '8:30', emoji: '👋', activity: "Xayrli tong! Do'stlar bilan uchrashamiz" },
          { time: '9:00', emoji: '📖', activity: "O'ynab o'rganamiz - ingliz va rus" },
          { time: '10:30', emoji: '🍎', activity: "Mazali gazak va o'yinlar" },
          { time: '11:00', emoji: '🎨', activity: 'Ijodiy ustaxonalar' },
          { time: '12:30', emoji: '🍽️', activity: 'Tushlik va tinch soat' },
          { time: '14:00', emoji: '🎭', activity: 'Loyihalar va tajribalar' },
          { time: '15:30', emoji: '🎪', activity: "To'garaklar: musiqa, raqslar, sport" },
          { time: '16:30', emoji: '🏠', activity: "Do'stlik! Uyga qaytish" },
        ],
      },
      outcomes: {
        title: "🌟 Bolalar bog'chasidan keyin bolangiz nima qila oladi",
        items: [
          '🗣️ Ingliz va rus tillarida erkin gaplashadi',
          '📚 Oddiy so\'zlarni o\'qiydi va sanaydi',
          '🎨 Chizadi, qo\'shiq aytadi, raqsga tushadi',
          '👫 Oson muloqot qiladi va do\'stlashadi',
          '💡 Savollar beradi va o\'rganishni yaxshi ko\'radi',
          '⭐ Katta maktabga tayyor!',
        ],
      },
      cta: {
        title: "🎉 Bizning do'stona oilamizga qo'shiling!",
        description: "Biz bilan tanishing — qanday qiziqarli va qulay ekanligini ko'ring!",
        button: "✨ Bolalar bog'chasini amalda ko'ring",
      },
    },
    en: {
      title: 'Kindergarten',
      subtitle: 'Where little hearts feel safe, and little minds begin to explore the world',
      description: 'A safe, loving environment where student agency begins • Every child is valued as they are • Life skills, social confidence, and genuine joy of learning',
      hero: {
        badge: 'Ages 2-6',
        cta: 'Come Visit Us',
      },
      methods: {
        title: '🎓 Our Teaching Methods',
        subtitle: 'Using world-class practices to develop your child',
        items: [
          {
            icon: Palette,
            title: 'Montessori Method',
            description: 'Developing independence and natural curiosity through specially prepared environments',
          },
          {
            icon: Music,
            title: 'STEAM Approach',
            description: 'Integrating Science, Technology, Engineering, Arts and Mathematics in playful ways',
          },
          {
            icon: Brain,
            title: 'Bilingual Immersion',
            description: 'Natural acquisition of English and Russian through daily communication and games',
          },
          {
            icon: Heart,
            title: 'Emotional Intelligence',
            description: 'Teaching children to understand their emotions, manage them and develop empathy',
          },
        ],
      },
      features: {
        title: '🌈 What We Do Every Day?',
        items: [
          {
            icon: Music,
            emoji: '🌍',
            title: 'Speak Two Languages',
            description: 'English and Russian through songs, games and stories!',
          },
          {
            icon: Palette,
            emoji: '🎨',
            title: 'Create and Make',
            description: 'Draw, sculpt, dance and sing - every child is a little artist!',
          },
          {
            icon: Heart,
            emoji: '❤️',
            title: 'Make Friends',
            description: 'Learn to share, help friends and be kind',
          },
          {
            icon: Star,
            emoji: '⭐',
            title: 'Get School Ready',
            description: 'Learn letters, numbers and so much more - through play!',
          },
        ],
      },
      activities: {
        title: '🎪 Our Fun Activities',
        items: [
          { emoji: '📚', title: 'Tales and Stories' },
          { emoji: '🎵', title: 'Music and Songs' },
          { emoji: '🎭', title: 'Theater and Games' },
          { emoji: '🌳', title: 'Walks and Nature' },
          { emoji: '🔢', title: 'Numbers and Shapes' },
          { emoji: '🎨', title: 'Drawing' },
          { emoji: '⚽', title: 'Sports and Movement' },
          { emoji: '🧩', title: 'Logic and Puzzles' },
        ],
      },
      schedule: {
        title: '⏰ Our Happy Day',
        items: [
          { time: '8:30', emoji: '👋', activity: 'Good morning! Meet with friends' },
          { time: '9:00', emoji: '📖', activity: 'Learning through play - English and Russian' },
          { time: '10:30', emoji: '🍎', activity: 'Yummy snack and games' },
          { time: '11:00', emoji: '🎨', activity: 'Creative workshops' },
          { time: '12:30', emoji: '🍽️', activity: 'Lunch and quiet time' },
          { time: '14:00', emoji: '🎭', activity: 'Projects and experiments' },
          { time: '15:30', emoji: '🎪', activity: 'Clubs: music, dance, sports' },
          { time: '16:30', emoji: '🏠', activity: 'Goodbye! Time to go home' },
        ],
      },
      outcomes: {
        title: '🌟 What Your Child Can Do After Kindergarten',
        items: [
          '🗣️ Speaks English and Russian fluently',
          '📚 Reads simple words and counts',
          '🎨 Draws, sings, dances',
          '👫 Communicates easily and makes friends',
          '💡 Asks questions and loves learning',
          '⭐ Ready for big school!',
        ],
      },
      cta: {
        title: '🎉 Join Our Friendly Family!',
        description: 'Come meet us — see how warm and welcoming we are!',
        button: '✨ See Kindergarten in Action',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Игривый, но в фирменных цветах */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#FFD700] to-[#FFC700] text-[#003A70] px-4 md:px-6 overflow-hidden"
      >
        {/* Декоративные круги */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-32 h-32 bg-white/30 rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-24 h-24 bg-white/20 rounded-full"
        />
        <motion.div 
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-[#C41E3A]/20 rounded-full"
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Text Content */}
            <div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-[#003A70] text-white rounded-full text-badge md:text-sm lg:text-base font-bold mb-3 md:mb-5"
              >
                {t.hero.badge}
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hero-title text-hero-h1 sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-5 max-w-[340px] sm:max-w-none" 
                style={{ textShadow: '3px 3px 0px rgba(0,58,112,0.1)' }}
              >
                {t.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-card-h3 sm:text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-5 text-[#003A70]"
              >
                {t.subtitle}
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-small sm:text-base md:text-lg lg:text-xl mb-5 md:mb-8 font-semibold text-[#003A70]/80 max-w-[320px] sm:max-w-none"
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
                className="cta-button md:h-14 lg:h-16 px-8 md:px-10 bg-[#C41E3A] text-white rounded-full hover:bg-[#003A70] transition-all shadow-xl font-black transform"
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
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1564429238817-393bd4286b2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGtpbmRlcmdhcnRlbiUyMGNoaWxkcmVuJTIwcGxheWluZyUyMGNvbG9yZnVsJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2OTU5MTcwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt={language === 'ru' ? 'Счастливые дети в детском саду' : language === 'uz' ? 'Baxtiyor bolalar bog\'chasida' : 'Happy children in kindergarten'}
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003A70]/20 to-transparent"></div>
              </div>
              {/* Декоративный акцент */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C41E3A]/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white/30 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Methods Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 sm:text-3xl md:text-4xl font-black text-center mb-2 md:mb-3 text-[#003A70]"
          >
            {t.methods.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-small sm:text-base md:text-lg text-center text-gray-600 mb-8 md:mb-10"
          >
            {t.methods.subtitle}
          </motion.p>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-mobile-tight md:gap-mobile-normal lg:gap-6">
            {t.methods.items.map((item, index) => (
              <FeatureCard
                key={index}
                feature={{
                  ...item,
                  emoji: index === 0 ? '🎨' : index === 1 ? '🔬' : index === 2 ? '🌍' : '❤️'
                }}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-section-h1 md:text-3xl font-black text-center mb-8 md:mb-10 text-[#003A70]"
          >
            {t.features.title}
          </motion.h2>
          <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-tight md:gap-mobile-normal lg:gap-6">
            {t.features.items.map((item, index) => (
              <FeatureCard
                key={index}
                feature={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Kindergarten */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-black text-center mb-3 text-[#003A70]">
            {language === 'ru' ? '📸 Как мы проводим день' : language === 'uz' ? '📸 Kunni qanday o\'tkazamiz' : '📸 A Day in Our Kindergarten'}
          </h2>
          <p className="text-small sm:text-base md:text-lg text-center text-gray-600 mb-8 md:mb-10">
            {language === 'ru' ? 'Загляните в наш яркий и веселый мир' : language === 'uz' ? 'Bizning yorqin va quvnoq dunyomizga qarash' : 'Peek into our bright and joyful world'}
          </p>

          {/* Photo Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-mobile-normal">
            {/* Photo 1 - Creative Arts */}
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1761604478724-13fe879468cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjaGlsZHJlbiUyMGNyZWF0aXZlJTIwYXJ0JTIwYWN0aXZpdHl8ZW58MXx8fHwxNzY5NTkwMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'ru' ? 'Творческие занятия' : language === 'uz' ? 'Ijodiy mashg\'ulotlar' : 'Creative Activities'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-[#003A70] font-black text-small sm:text-base md:text-lg p-4 sm:p-6">
                  {language === 'ru' ? '🎨 Творчество' : language === 'uz' ? '🎨 Ijodkorlik' : '🎨 Creative Arts'}
                </p>
              </div>
            </div>

            {/* Photo 2 - Outdoor Play */}
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694364196192-c749238fcca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBwbGF5Z3JvdW5kJTIwb3V0ZG9vciUyMGFjdGl2aXRpZXMlMjBraWRzfGVufDF8fHx8MTc2OTU5MDMyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'ru' ? 'Игры на свежем воздухе' : language === 'uz' ? 'Ochiq havoda o\'yinlar' : 'Outdoor Play'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#C41E3A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-black text-small sm:text-base md:text-lg p-4 sm:p-6">
                  {language === 'ru' ? '⚽ Активные игры' : language === 'uz' ? '⚽ Faol o\'yinlar' : '⚽ Active Play'}
                </p>
              </div>
            </div>

            {/* Photo 3 - Montessori Materials */}
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722962495636-86d05a8aa88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tJTIwbWF0ZXJpYWxzJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY5NTkwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'ru' ? 'Материалы Монтессори' : language === 'uz' ? 'Montessori materiallari' : 'Montessori Materials'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003A70]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-black text-small sm:text-base md:text-lg p-4 sm:p-6">
                  {language === 'ru' ? '🧩 Монтессори' : language === 'uz' ? '🧩 Montessori' : '🧩 Montessori'}
                </p>
              </div>
            </div>

            {/* Photo 4 - Story Time */}
            <div className="group relative aspect-square rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759977064094-840dfc694bee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjByZWFkaW5nJTIwc3RvcnklMjB0aW1lJTIwYm9va3N8ZW58MXx8fHwxNzY5NTkwMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'ru' ? 'Чтение сказок' : language === 'uz' ? 'Ertaklar o\'qish' : 'Story Time'}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-[#003A70] font-black text-small sm:text-base md:text-lg p-4 sm:p-6">
                  {language === 'ru' ? '📚 Сказки' : language === 'uz' ? '📚 Ertaklar' : '📚 Story Time'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-black text-center mb-8 md:mb-10 text-[#003A70]">
            {t.activities.title}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-mobile-normal">
            {t.activities.items.map((item, index) => (
              <div
                key={index}
                className="card-mobile compact-p bg-gradient-to-br from-[#FFD700] to-[#FFC700] rounded-2xl text-center hover:scale-110 transition-all cursor-pointer shadow-lg border-2 border-white"
              >
                <div className="text-4xl sm:text-5xl mb-2">{item.emoji}</div>
                <p className="text-small sm:text-base font-bold text-[#003A70]">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="content-section px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-black text-center mb-8 md:mb-10 text-[#003A70]">
            {t.schedule.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-mobile-normal">
            {t.schedule.items.map((slot, index) => {
              const images = [
                'https://images.unsplash.com/photo-1624623327915-f15709381438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBjaGlsZHJlbiUyMG1vcm5pbmclMjBjaXJjbGUlMjB0aW1lJTIwZ3JlZXRpbmd8ZW58MXx8fHwxNzY5NTkyODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1759678444821-565ff103465c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwYWxwaGFiZXQlMjByZWFkaW5nJTIwYm9va3N8ZW58MXx8fHwxNzY5NTkyODc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1761208663281-619e6532aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZWF0aW5nJTIwaGVhbHRoeSUyMHNuYWNrJTIwZnJ1aXQlMjBraW5kZXJnYXJ0ZW58ZW58MXx8fHwxNzY5NTkyODc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1615909340810-3ec0e50f9e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGFydCUyMGNyYWZ0JTIwcGFpbnRpbmclMjBjcmVhdGl2ZSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2OTU5Mjg3OHww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1578593139806-28d34e76f920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGx1bmNoJTIwdGFibGUlMjBlYXRpbmclMjB0b2dldGhlciUyMHNjaG9vbHxlbnwxfHx8fDE3Njk1OTI4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1761682753542-421c80ae8be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHNjaWVuY2UlMjBleHBlcmltZW50JTIwcHJlc2Nob29sJTIwZGlzY292ZXJ5fGVufDF8fHx8MTc2OTU5Mjg3OXww&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1617725803771-86ba03b50366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbXVzaWMlMjBkYW5jZSUyMGNsYXNzJTIwbW92ZW1lbnQlMjBhY3Rpdml0eXxlbnwxfHx8fDE3Njk1OTI4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080',
                'https://images.unsplash.com/photo-1677676462285-537565c77f0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdhdmluZyUyMGdvb2RieWUlMjBsZWF2aW5nJTIwc2Nob29sJTIwcGFyZW50cyUyMHBpY2t1cHxlbnwxfHx8fDE3Njk1OTMxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
              ];
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <ImageWithFallback
                      src={images[index]}
                      alt={slot.activity}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FFD700]/40 to-transparent"></div>
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-3xl sm:text-4xl md:text-5xl drop-shadow-lg">{slot.emoji}</div>
                  </div>
                  
                  {/* Content */}
                  <div className="compact-p border-l-8 border-[#FFD700] group-hover:border-[#C41E3A] transition-all">
                    <div className="text-card-h2 sm:text-2xl md:text-3xl font-black text-[#003A70] mb-1 sm:mb-2">{slot.time}</div>
                    <div className="text-small sm:text-base md:text-lg font-bold text-gray-700">{slot.activity}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="content-section px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-section-h1 md:text-3xl font-black text-center mb-8 md:mb-10 text-[#003A70]">
            {t.outcomes.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-mobile-normal">
            {t.outcomes.items.map((item, index) => (
              <div
                key={index}
                className="card-mobile compact-p flex items-center gap-3 bg-gradient-to-r from-[#FFD700]/20 to-white rounded-2xl border-2 border-[#FFD700] hover:border-[#003A70] transition-all shadow-md"
              >
                <span className="text-small sm:text-base md:text-lg font-black text-[#003A70]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials ageGroup="kindergarten" />

      {/* CTA Section */}
      <section className="content-section px-6 bg-gradient-to-br from-[#003A70] to-[#001a3d] text-white relative overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FFD700]/20 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#C41E3A]/20 rounded-full"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-section-h1 sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-5 md:mb-6">
            {t.cta.title}
          </h2>
          <p className="text-card-h3 sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 font-bold">
            {t.cta.description}
          </p>
          <button
            onClick={openModal}
            className="cta-button md:h-14 lg:h-16 px-10 md:px-12 bg-[#FFD700] text-[#003A70] rounded-full hover:bg-white transition-all shadow-2xl font-black transform hover:scale-105"
          >
            {t.cta.button}
          </button>
        </div>
      </section>
    </div>
  );
}