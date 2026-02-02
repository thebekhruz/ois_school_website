import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { TrendingUp, Award, GraduationCap, Globe, MapPin, Star, Trophy, Sparkles, Zap, Users, Filter, X } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { StatsCard } from '@/app/components/StatsCard';

export function OutcomesPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  
  const { heroOpacity, heroScale } = useScrollProgress();

  // Mock university data
  const universities = [
    { id: 1, name: 'University of Cambridge', country: 'UK', region: 'Europe', ranking: 2, students: 15, category: 'STEM', logo: '' },
    { id: 2, name: 'Stanford University', country: 'USA', region: 'North America', ranking: 3, students: 12, category: 'STEM', logo: '' },
    { id: 3, name: 'MIT', country: 'USA', region: 'North America', ranking: 1, students: 18, category: 'STEM', logo: '' },
    { id: 4, name: 'University of Oxford', country: 'UK', region: 'Europe', ranking: 4, students: 14, category: 'Humanities', logo: '' },
    { id: 5, name: 'Harvard University', country: 'USA', region: 'North America', ranking: 5, students: 20, category: 'Business', logo: '' },
    { id: 6, name: 'ETH Zurich', country: 'Switzerland', region: 'Europe', ranking: 7, students: 8, category: 'STEM', logo: '' },
    { id: 7, name: 'University of Toronto', country: 'Canada', region: 'North America', ranking: 21, students: 10, category: 'Sciences', logo: '' },
    { id: 8, name: 'National University of Singapore', country: 'Singapore', region: 'Asia', ranking: 11, students: 9, category: 'STEM', logo: '' },
  ];

  const content = {
    ru: {
      hero: {
        badge: 'Мировое признание',
        title: 'Успех наших выпускников',
        subtitle: 'не знает границ',
        description: 'Присоединяйтесь к глобальному сообществу выпускников Oxbridge',
        stats: [
          { label: 'Поступление', value: '100%', desc: 'студентов поступают в вузы' },
          { label: 'Международные', value: '85%', desc: 'учатся за рубежом' },
          { label: 'Средний IB', value: '45+', desc: 'баллов в дипломе' },
          { label: 'Топ университеты', value: '', desc: 'в мировом рейтинге' },
        ],
      },
      stats: {
        admission: { label: 'Поступление', value: '100%', desc: 'студентов поступают в вузы' },
        international: { label: 'Международные', value: '85%', desc: 'учатся за рубежом' },
        ibScore: { label: 'Средний IB', value: '45+', desc: 'баллов в дипломе' },
        top100: { label: 'Топ университеты', value: '', desc: 'в мировом рейтинге' },
        countries: 'Стран',
        universities: 'Университетов',
        students: 'Студентов',
        avgRanking: 'Средний рейтинг',
      },
      filters: {
        category: 'Категория',
        region: 'Регион',
        all: 'Все',
        clear: 'Очистить',
      },
      university: {
        students: 'студентов',
        ranking: 'Рейтинг QS',
      },
      sections: {
        title: 'Наши партнерские университеты',
        showing: 'Показано университетов',
      },
    },
    uz: {
      hero: {
        badge: 'Jahon tan olishi',
        title: 'Bitiruvchilarimiz muvaffaqiyati',
        subtitle: 'chegara tanímaydi',
        description: 'Oxbridge bitiruvchilari jamoasiga qo\'shiling',
        stats: [
          { label: 'Kirish', value: '100%', desc: 'talabalar universitetga kiradi' },
          { label: 'Xalqaro', value: '85%', desc: 'chet elda o\'qiydi' },
          { label: 'O\'rtacha IB', value: '45+', desc: 'diplomada ball' },
          { label: 'Top universitetlar', value: '', desc: 'jahon reytingida' },
        ],
      },
      stats: {
        admission: { label: 'Kirish', value: '100%', desc: 'talabalar universitetga kiradi' },
        international: { label: 'Xalqaro', value: '85%', desc: 'chet elda o\'qiydi' },
        ibScore: { label: 'O\'rtacha IB', value: '45+', desc: 'diplomada ball' },
        top100: { label: 'Top universitetlar', value: '', desc: 'jahon reytingida' },
        countries: 'Mamlakat',
        universities: 'Universitet',
        students: 'Talaba',
        avgRanking: 'O\'rtacha reyting',
      },
      filters: {
        category: 'Kategoriya',
        region: 'Mintaqa',
        all: 'Hammasi',
        clear: 'Tozalash',
      },
      university: {
        students: 'talaba',
        ranking: 'QS reytingi',
      },
      sections: {
        title: 'Hamkor universitetlarimiz',
        showing: 'Ko\'rsatilgan universitetlar',
      },
    },
    en: {
      hero: {
        badge: 'Global Recognition',
        title: 'Success of our graduates',
        subtitle: 'knows no boundaries',
        description: 'Join the global community of Oxbridge graduates',
        stats: [
          { label: 'Admission', value: '100%', desc: 'students admitted' },
          { label: 'International', value: '85%', desc: 'study abroad' },
          { label: 'Average IB', value: '45+', desc: 'diploma score' },
          { label: 'Top Universities', value: '', desc: 'in world rankings' },
        ],
      },
      stats: {
        admission: { label: 'Admission', value: '100%', desc: 'students admitted' },
        international: { label: 'International', value: '85%', desc: 'study abroad' },
        ibScore: { label: 'Average IB', value: '45+', desc: 'diploma score' },
        top100: { label: 'Top Universities', value: '', desc: 'in world rankings' },
        countries: 'Countries',
        universities: 'Universities',
        students: 'Students',
        avgRanking: 'Avg. Ranking',
      },
      filters: {
        category: 'Category',
        region: 'Region',
        all: 'All',
        clear: 'Clear',
      },
      university: {
        students: 'students',
        ranking: 'QS Ranking',
      },
      sections: {
        title: 'Our Partner Universities',
        showing: 'Universities shown',
      },
    },
  };

  const t = content[language];

  // Filter universities
  const filteredUniversities = universities.filter(u => {
    if (selectedCategory !== 'all' && u.category !== selectedCategory) return false;
    if (selectedRegion !== 'all' && u.region !== selectedRegion) return false;
    return true;
  });

  // Calculate stats
  const totalCountries = new Set(filteredUniversities.map(u => u.country)).size;
  const totalUniversities = filteredUniversities.length;
  const totalStudents = filteredUniversities.reduce((sum, u) => sum + u.students, 0);
  const avgRanking = Math.round(
    filteredUniversities.reduce((sum, u) => sum + (u.ranking || 0), 0) / 
    filteredUniversities.filter(u => u.ranking).length
  );
  const top100Count = filteredUniversities.filter(u => u.ranking && u.ranking <= 100).length;

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedRegion('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedRegion !== 'all';

  const categories = Array.from(new Set(universities.map(u => u.category)));
  const regions = Array.from(new Set(universities.map(u => u.region)));

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale, position: 'relative' }}
        className="hero-section hero-wrapper flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] relative"
      >
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[200px] h-[200px] md:w-[600px] md:h-[600px] rounded-full bg-gradient-to-br from-[#f8eb78]/20 to-transparent blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 w-[250px] h-[250px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-tl from-[#953130]/20 to-transparent blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white/10 backdrop-blur-sm rounded-full text-badge md:text-sm font-semibold text-[#f8eb78] border border-white/20 mb-4 md:mb-5"
          >
            <Trophy className="icon-secondary" />
            {t.hero.badge}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] text-white mb-4 md:mb-5"
          >
            {t.hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 max-w-3xl mx-auto mb-8 md:mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Stats Grid - Mobile Stacked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-mobile-tight md:gap-mobile-normal max-w-5xl mx-auto"
          >
            {t.hero.stats.map((stat, index) => (
              <div key={index} className="card-mobile compact-p bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f8eb78] mb-1">
                  {stat.value}
                </div>
                <div className="text-caption sm:text-small text-white/90 font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Search & Filter Section */}
      <section className="py-6 sm:py-8 px-4 sm:px-6 bg-gray-50 sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-[clamp(1.75rem,6vw,3rem)] md:text-4xl lg:text-5xl font-display font-normal text-[#293863] mb-4">
              {t.sections.title}
            </h2>
          </motion.div>

          {/* Filters - Mobile Stack, Desktop Row */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-8">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#953130] bg-white font-ui text-sm sm:text-base"
            >
              <option value="all">{t.filters.category}: {t.filters.all}</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full sm:w-auto px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#953130] bg-white font-ui text-sm sm:text-base"
            >
              <option value="all">{t.filters.region}: {t.filters.all}</option>
              {regions.map(reg => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#953130] text-white rounded-2xl font-ui font-medium hover:bg-[#7a261f] transition-all min-h-[44px] text-sm sm:text-base"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.filters.clear}
              </button>
            )}

            <div className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#f8eb78]/20 border-2 border-[#f7d454]/30 rounded-2xl text-sm sm:text-base">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#293863]" />
              <span className="font-ui font-medium text-[#293863]">
                {filteredUniversities.length} {t.sections.showing}
              </span>
            </div>
          </div>

          {/* Universities Grid - Mobile H-Scroll, Desktop Grid */}
          <div className="md:hidden overflow-x-auto -mx-4 px-4 pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              {filteredUniversities.map((uni, idx) => (
                <motion.div
                  key={uni.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="w-[280px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden flex-shrink-0"
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#293863] to-[#33559a] rounded-xl flex items-center justify-center mb-4">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-display font-normal text-[#293863] mb-2 leading-tight">
                      {uni.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="w-4 h-4 text-[#953130]" />
                      <span className="text-sm font-ui text-gray-600">{uni.country}</span>
                    </div>
                    <div className="flex gap-2">
                      {uni.ranking && (
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#f8eb78] rounded-lg text-xs font-ui font-bold text-[#293863]">
                          <Award className="w-3 h-3" />
                          #{uni.ranking}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-lg text-xs font-ui text-gray-600">
                        <Users className="w-3 h-3" />
                        {uni.students}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUniversities.map((uni, idx) => (
              <motion.div
                key={uni.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#293863] to-[#33559a] rounded-xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-normal text-[#293863] mb-3 leading-tight">
                    {uni.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-[#953130]" />
                    <span className="text-sm font-ui text-gray-600">{uni.country}</span>
                  </div>
                  <div className="flex gap-2">
                    {uni.ranking && (
                      <span className="inline-flex items-center gap-1 px-3 py-2 bg-[#f8eb78] rounded-lg text-sm font-ui font-bold text-[#293863]">
                        <Award className="w-4 h-4" />
                        #{uni.ranking}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1 px-3 py-2 bg-gray-100 rounded-lg text-sm font-ui text-gray-600">
                      <Users className="w-4 h-4" />
                      {uni.students}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}