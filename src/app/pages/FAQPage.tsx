import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function FAQPage() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Вопросы и ответы',
      subtitle: 'Ответы на популярные вопросы',
      searchPlaceholder: 'Поиск...',
      categories: { all: 'Все', admissions: 'Поступление', tuition: 'Оплата', programs: 'Программы', campus: 'Кампус', safety: 'Безопасность' },
      faqs: {
        admissions: [
          { q: 'Как записаться в школу?', a: 'Заполните онлайн-форму на сайте. Приемная комиссия назначит экскурсию и тестирование. Процесс занимает 1-2 недели.' },
          { q: 'Какие документы нужны?', a: 'Свидетельство о рождении, паспорта родителей, фото 3x4, медкарта, табель, справка о прививках.' },
          { q: 'С какого возраста принимаете?', a: 'С 2 лет в детский сад. Набор во все группы при наличии мест.' },
          { q: 'Есть ли вступительные экзамены?', a: 'С 7 лет — тесты по математике, английскому, русскому + собеседование. Для садика — игровая оценка.' },
        ],
        tuition: [
          { q: 'Стоимость обучения?', a: 'Садик $5-8K/год, средняя школа $7.5-12K, старшая $9.5-15K. Калькулятор на странице "Оплата".' },
          { q: 'Варианты оплаты?', a: 'Полная оплата за год (-5%), по семестрам (-3%), ежемесячно (10 платежей).' },
          { q: 'Что включено?', a: 'Обучение, материалы, учебники, онлайн-платформы, экскурсии, спорт, медобслуживание.' },
          { q: 'Скидки и стипендии?', a: 'Академические до 50%, талант-стипендии, семейные: 10% на 2-го, 15% на 3-го ребенка.' },
        ],
        programs: [
          { q: 'IB vs Русская программа?', a: 'IB — международная с углубленным английским и проектами. Русская — нацстандарт с сильной базой. IB дает международный диплом.' },
          { q: 'Переход между программами?', a: 'Возможен до 10 класса. После 10 — не рекомендуется.' },
          { q: 'Сколько учеников в классе?', a: 'Садик до 12, средняя до 15, старшая до 18 учеников.' },
          { q: 'Какие языки изучаются?', a: 'Английский обязательно. С 5 класса: немецкий, французский, испанский или китайский.' },
        ],
        campus: [
          { q: 'Разница между кампусами?', a: 'Одинаковые программы. Ташкент — центр, современное здание. Самарканд — больше территория, игровые площадки.' },
          { q: 'Школьный транспорт?', a: 'Да, несколько маршрутов. Автобусы с кондиционером, ремнями, GPS. $1,500/год.' },
          { q: 'Питание?', a: 'Да, столовая с 3-разовым питанием по меню диетолога. $1,200/год. Учитываем особенности.' },
        ],
        safety: [
          { q: 'Безопасность детей?', a: 'Охрана 24/7, видеонаблюдение, контроль доступа, медкабинет, оповещение родителей, тревожная кнопка.' },
          { q: 'Медперсонал?', a: 'Да, квалифицированная медсестра полный день в каждом кампусе + врач при необходимости.' },
        ],
      },
      noResults: 'Вопросы не найдены',
    },
    uz: {
      title: 'Savollar va javoblar', subtitle: 'Mashhur savollarga javoblar',
      searchPlaceholder: 'Qidirish...', categories: { all: 'Hammasi', admissions: 'Qabul', tuition: "To'lov", programs: 'Dasturlar', campus: 'Kampus', safety: 'Xavfsizlik' },
      faqs: {
        admissions: [
          { q: 'Qanday yozilish mumkin?', a: "Saytda onlayn ariza to'ldiring. Qabul komissiyasi ekskursiya va testni belgilaydi. 1-2 hafta." },
          { q: 'Qanday hujjatlar?', a: "Tug'ilganlik guvohnomasi, ota-ona pasportlari, 3x4 rasm, tibbiy karta, baholar, emlash ma'lumotnomasi." },
          { q: 'Necha yoshdan?', a: "2 yoshdan bog'chaga. Joylar bo'lganda barcha guruhlarga." },
          { q: 'Kirish imtihonlari?', a: "7 yoshdan - matematika, ingliz, rus testlari + suhbat. Bog'cha - o'yin baholash." },
        ],
        tuition: [
          { q: 'Narx?', a: "Bog'cha $5-8K/yil, boshlang'ich $7.5-12K, yuqori $9.5-15K. To'lov sahifasida kalkulyator." },
          { q: "To'lov variantlari?", a: 'Yil uchun to\'liq (-5%), semestrlar (-3%), oylik (10 to\'lov).' },
          { q: 'Nima kiradi?', a: "Ta'lim, materiallar, darsliklar, onlayn platformalar, ekskursiyalar, sport, tibbiy." },
          { q: 'Chegirmalar?', a: 'Akademik 50% gacha, iste\'dod stipendiyalari, oilaviy: 2-bola 10%, 3-bola 15%.' },
        ],
        programs: [
          { q: 'IB vs Rus dasturi?', a: "IB - xalqaro, chuqur ingliz va loyihalar. Rus - milliy standart, kuchli baza. IB xalqaro diplom." },
          { q: "Dasturlar orasida o'tish?", a: "10-sinfgacha mumkin. 10-dan keyin tavsiya etilmaydi." },
          { q: "Sinfda necha o'quvchi?", a: "Bog'cha 12 gacha, boshlang'ich 15 gacha, yuqori 18 gacha." },
          { q: 'Qaysi tillar?', a: "Ingliz majburiy. 5-sinfdan: nemis, fransuz, ispan yoki xitoy." },
        ],
        campus: [
          { q: 'Kampuslar farqi?', a: "Bir xil dasturlar. Toshkent - markaz, zamonaviy. Samarqand - katta hudud, o'yin maydonlari." },
          { q: 'Transport?', a: 'Ha, bir necha marshrut. Konditsioner, kamarlar, GPS. $1,500/yil.' },
          { q: 'Ovqatlanish?', a: 'Ha, oshxona 3 mahal, dietolog menyusi. $1,200/yil. Xususiyatlar hisobga olinadi.' },
        ],
        safety: [
          { q: 'Xavfsizlik?', a: "24/7 qo'riqlov, videokuzatuv, karta nazorati, tibbiy xona, ota-onalarga xabar, favqulodda tugma." },
          { q: 'Tibbiy xodimlar?', a: 'Ha, har kampusda to\'liq kunlik hamshira + zarurat bo\'ganda shifokor.' },
        ],
      },
      noResults: 'Savollar topilmadi',
    },
    en: {
      title: 'Questions & Answers', subtitle: 'Popular questions answered',
      searchPlaceholder: 'Search...', categories: { all: 'All', admissions: 'Admissions', tuition: 'Tuition', programs: 'Programs', campus: 'Campus', safety: 'Safety' },
      faqs: {
        admissions: [
          { q: 'How to enroll?', a: 'Fill online form. Admissions team schedules tour and assessment. Takes 1-2 weeks.' },
          { q: 'Required documents?', a: "Birth certificate, parents' passports, 3x4 photos, medical records, report card, vaccination certificate." },
          { q: 'Minimum age?', a: 'From age 2 for kindergarten. Enroll in all groups with availability.' },
          { q: 'Entrance exams?', a: 'From age 7 - math, English, Russian tests + interview. Kindergarten - play-based assessment.' },
        ],
        tuition: [
          { q: 'Cost?', a: 'Kindergarten $5-8K/year, primary $7.5-12K, high school $9.5-15K. Calculator on Tuition page.' },
          { q: 'Payment options?', a: 'Full year (-5%), semesters (-3%), monthly (10 payments).' },
          { q: "What's included?", a: 'Education, materials, textbooks, online platforms, excursions, sports, medical.' },
          { q: 'Scholarships?', a: 'Academic up to 50%, talent scholarships, family: 2nd child 10%, 3rd child 15%.' },
        ],
        programs: [
          { q: 'IB vs Russian?', a: 'IB - international, in-depth English and projects. Russian - national standard, strong foundation. IB gives international diploma.' },
          { q: 'Switch programs?', a: 'Possible until grade 10. After grade 10 not recommended.' },
          { q: 'Class size?', a: 'Kindergarten up to 12, primary up to 15, high school up to 18.' },
          { q: 'Languages taught?', a: 'English mandatory. From grade 5: German, French, Spanish, or Chinese.' },
        ],
        campus: [
          { q: 'Campus differences?', a: 'Same programs. Tashkent - city center, modern. Samarkand - larger territory, playgrounds.' },
          { q: 'School transport?', a: 'Yes, several routes. Buses with AC, seat belts, GPS. $1,500/year.' },
          { q: 'Meals?', a: 'Yes, cafeteria with 3 meals, nutritionist menu. $1,200/year. Dietary needs accommodated.' },
        ],
        safety: [
          { q: 'Student safety?', a: '24/7 security, video surveillance, card access, medical office, parent alerts, panic button.' },
          { q: 'Medical staff?', a: 'Yes, full-time nurse at each campus + doctor when needed.' },
        ],
      },
      noResults: 'No questions found',
    },
  };

  const t = content[language];

  const allFaqs = Object.entries(t.faqs).flatMap(([category, items]) =>
    items.map((item, index) => ({ ...item, category, id: `${category}-${index}` }))
  );

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || faq.a.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] to-[#1a2d4e] text-white px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#f8eb78]/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 border border-[#f8eb78]/30">
            <HelpCircle className="icon-secondary text-[#f8eb78]" />
            <span className="font-ui font-semibold text-badge md:text-sm">FAQ</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] mb-3 sm:mb-4 md:mb-5"
          >
            {t.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Search & Filter - Mobile Sticky */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto">
          {/* Search Input */}
          <div className="relative mb-4">
            <Search className="icon-secondary absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-small md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#293863] focus:border-transparent"
            />
          </div>

          {/* Category Pills - Mobile H-Scroll */}
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {Object.keys(t.categories).map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-caption sm:text-small font-semibold transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-[#293863] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t.categories[category]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion - Mobile Optimized */}
      <section className="content-section px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length === 0 ? (
            <div className="text-center compact-p bg-white rounded-2xl shadow-lg">
              <p className="text-small text-gray-600">{t.noResults}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-mobile-tight">
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-mobile compact-p bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-small sm:text-base font-bold text-[#293863] flex-1">{faq.q}</h3>
                    <ChevronDown
                      className={`icon-secondary text-gray-400 flex-shrink-0 transition-transform ${
                        openFaq === faq.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-caption sm:text-small text-gray-600 mt-3 pt-3 border-t border-gray-200">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}