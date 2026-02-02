import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Calendar, Tag, Search, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { Link } from 'react-router';

export function NewsPage() {
  const { language, getLocalizedPath } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Новости школы',
      subtitle: 'События, достижения и объявления',
      searchPlaceholder: 'Поиск...',
      categories: {
        all: 'Все', events: 'События', achievements: 'Достижения',
        announcements: 'Объявления', community: 'Сообщество',
      },
      readMore: 'Читать',
      noResults: 'Новостей не найдено',
      news: [
        {
          id: 1, title: 'Первое место на IB олимпиаде',
          excerpt: 'Команда завоевала золото на региональной олимпиаде по математике и физике',
          date: '15 янв 2025', category: 'achievements',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
          tags: ['IB', 'Олимпиада'],
        },
        {
          id: 2, title: 'Новый научный центр',
          excerpt: 'Современная лаборатория с новейшим оборудованием',
          date: '10 янв 2025', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
          tags: ['Наука', 'Кампус'],
        },
        {
          id: 3, title: 'Winter Fest 2025',
          excerpt: 'Праздник культурного разнообразия школы',
          date: '5 янв 2025', category: 'events',
          image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
          tags: ['Мероприятие', 'Культура'],
        },
        {
          id: 4, title: 'История успеха Азизы',
          excerpt: 'Как "запасной" университет стал лучшим выбором',
          date: '28 дек 2024', category: 'community',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
          tags: ['Выпускники', 'Успех'],
        },
        {
          id: 5, title: 'Новый маршрут автобуса',
          excerpt: 'Юнусабад и Чиланзар с февраля 2025',
          date: '20 дек 2024', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
          tags: ['Транспорт'],
        },
        {
          id: 6, title: 'Model UN Conference',
          excerpt: 'Студенты обсуждали глобальные вопросы',
          date: '15 дек 2024', category: 'events',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
          tags: ['MYP', 'Лидерство'],
        },
      ],
    },
    uz: {
      title: 'Yangiliklar', subtitle: "Voqealar, yutuqlar, e'lonlar",
      searchPlaceholder: 'Qidirish...', categories: {
        all: 'Hammasi', events: 'Tadbirlar', achievements: 'Yutuqlar',
        announcements: "E'lonlar", community: 'Jamiyat',
      },
      readMore: "O'qish", noResults: 'Yangiliklar topilmadi', news: [
        {
          id: 1, title: "IB olimpiadasida birinchi o'rin",
          excerpt: "Jamoa matematika va fizika olimpiadasida oltin medal qo'lga kiritdi",
          date: '15 yanvar 2025', category: 'achievements',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
          tags: ['IB', 'Olimpiada'],
        },
        {
          id: 2, title: 'Yangi ilmiy markaz',
          excerpt: 'Zamonaviy jihozlar bilan laboratoriya',
          date: '10 yanvar 2025', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
          tags: ['Fan', 'Kampus'],
        },
        {
          id: 3, title: 'Winter Fest 2025',
          excerpt: 'Madaniy xilma-xillik bayrami',
          date: '5 yanvar 2025', category: 'events',
          image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
          tags: ['Tadbir', 'Madaniyat'],
        },
        {
          id: 4, title: 'Aziza muvaffaqiyati',
          excerpt: '"Zaxira" universitet eng yaxshi tanlov bo\'ldi',
          date: '28 dekabr 2024', category: 'community',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
          tags: ['Bitiruvchilar', 'Muvaffaqiyat'],
        },
        {
          id: 5, title: 'Yangi avtobus marshrutlari',
          excerpt: 'Yunusobod va Chilonzor 2025 fevraldan',
          date: '20 dekabr 2024', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
          tags: ['Transport'],
        },
        {
          id: 6, title: 'Model BMT konferensiyasi',
          excerpt: "Talabalar global masalalarni muhokama qildi",
          date: '15 dekabr 2024', category: 'events',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
          tags: ['MYP', 'Liderlik'],
        },
      ],
    },
    en: {
      title: 'School News', subtitle: 'Events, achievements, announcements',
      searchPlaceholder: 'Search...', categories: {
        all: 'All', events: 'Events', achievements: 'Achievements',
        announcements: 'Announcements', community: 'Community',
      },
      readMore: 'Read', noResults: 'No news found', news: [
        {
          id: 1, title: 'First Place at IB Olympiad',
          excerpt: 'Team secured gold in regional math and physics competition',
          date: 'Jan 15, 2025', category: 'achievements',
          image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
          tags: ['IB', 'Olympiad'],
        },
        {
          id: 2, title: 'New Science Center',
          excerpt: 'State-of-the-art lab with cutting-edge equipment',
          date: 'Jan 10, 2025', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800',
          tags: ['Science', 'Campus'],
        },
        {
          id: 3, title: 'Winter Fest 2025',
          excerpt: 'Festival celebrating cultural diversity',
          date: 'Jan 5, 2025', category: 'events',
          image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800',
          tags: ['Event', 'Culture'],
        },
        {
          id: 4, title: "Aziza's Success Story",
          excerpt: 'How "backup" university became best choice',
          date: 'Dec 28, 2024', category: 'community',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
          tags: ['Alumni', 'Success'],
        },
        {
          id: 5, title: 'New Bus Route',
          excerpt: 'Yunusabad and Chilanzar from Feb 2025',
          date: 'Dec 20, 2024', category: 'announcements',
          image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
          tags: ['Transport'],
        },
        {
          id: 6, title: 'Model UN Conference',
          excerpt: 'Students discussed global issues',
          date: 'Dec 15, 2024', category: 'events',
          image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
          tags: ['MYP', 'Leadership'],
        },
      ],
    },
  };

  const t = content[language];

  const filteredNews = t.news.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryColor = (category: string) => {
    const colors = {
      achievements: 'bg-[#f8eb78] text-gray-900',
      events: 'bg-[#33559a] text-white',
      announcements: 'bg-[#953130] text-white',
      community: 'bg-[#293863] text-white',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-200 text-gray-900';
  };

  return (
    <div className="min-h-screen bg-gray-50">
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
            className="text-small sm:text-base md:text-lg font-serif text-white/90"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Search & Filter Section - Mobile Sticky */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto">
          {/* Search */}
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

          {/* Category Filter - Mobile H-Scroll */}
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

      {/* News Grid - Mobile 1-Col, Desktop 3-Col */}
      <section className="content-section px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {filteredNews.length === 0 ? (
            <div className="text-center compact-p bg-white rounded-2xl shadow-lg">
              <p className="text-small text-gray-600">{t.noResults}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="card-mobile compact-p bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className={`inline-block px-2 py-1 rounded-lg text-caption font-semibold mb-3 ${getCategoryColor(item.category)}`}>
                    {t.categories[item.category]}
                  </div>
                  <h3 className="text-card-h2 sm:text-lg font-bold text-[#293863] mb-2">{item.title}</h3>
                  <p className="text-caption sm:text-small text-gray-600 mb-3">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-caption text-gray-500">
                    <Calendar className="icon-secondary" />
                    {item.date}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}