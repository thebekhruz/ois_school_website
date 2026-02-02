import { Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';
import { translations } from '@/app/translations';
import logo from 'figma:asset/590b9da81888458344497f425d605da99f460037.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { language, setLanguage, getLocalizedPath } = useLanguage();
  const { openModal } = useEnrollModal();
  const t = translations[language];

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLangOpen(false);
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const languages = [
    { code: 'ru' as const, label: 'RU', name: 'Русский' },
    { code: 'uz' as const, label: 'UZ', name: "O'zbek" },
    { code: 'en' as const, label: 'EN', name: 'English' },
  ];

  const megaMenuItems = [
    {
      id: 'programs',
      label: t.nav.programs,
      sections: [
        {
          title: '',
          links: [
            { label: language === 'ru' ? 'Детский сад (2-6)' : language === 'uz' ? 'Bolalar bog\'chasi (2-6)' : 'Kindergarten (2-6)', href: 'programs/kindergarten' },
            { label: language === 'ru' ? 'Начальная школа (6-12)' : language === 'uz' ? 'Boshlang\'ich maktab (6-12)' : 'Primary School (6-12)', href: 'programs/middle-school' },
            { label: language === 'ru' ? 'Старшая школа (13-18)' : language === 'uz' ? 'Yuqori maktab (13-18)' : 'High School (13-18)', href: 'programs/high-school' },
            { label: 'International Baccalaureate', href: 'programs/ib' },
            { label: language === 'ru' ? 'Сравнить программы' : language === 'uz' ? 'Dasturlarni solishtirish' : 'Compare Programmes', href: 'programs/compare' },
          ],
        },
      ],
    },
    {
      id: 'admissions',
      label: language === 'ru' ? 'Поступление' : language === 'uz' ? 'Qabul' : 'Admissions',
      sections: [
        {
          title: '',
          links: [
            { label: language === 'ru' ? 'Как поступить' : language === 'uz' ? 'Qanday qabul qilinish' : 'How to Apply', href: 'admissions/apply' },
            { label: language === 'ru' ? 'Оплата и стоимость' : language === 'uz' ? 'To\'lov va narx' : 'Tuition & Payment', href: 'admissions/tuition' },
          ],
        },
      ],
    },
    {
      id: 'about',
      label: t.nav.about,
      sections: [
        {
          title: '',
          links: [
            { label: language === 'ru' ? 'Почему Oxbridge' : language === 'uz' ? 'Nega Oxbridge' : 'Why Oxbridge', href: 'about/why' },
            { label: language === 'ru' ? 'Наши кампусы' : language === 'uz' ? 'Bizning kampuslar' : 'Our Campuses', href: 'about/campuses' },
            { label: language === 'ru' ? 'Студенческая жизнь' : language === 'uz' ? 'Talaba hayoti' : 'Student Life', href: 'about/student-life' },
            { label: language === 'ru' ? 'Поступление в ВУЗы' : language === 'uz' ? 'Universitetlarga qabul' : 'University Outcomes', href: 'about/outcomes' },
            { label: language === 'ru' ? 'Наша команда' : language === 'uz' ? 'Bizning jamoa' : 'Our Team', href: 'team' },
            { label: language === 'ru' ? 'Работать с нами' : language === 'uz' ? 'Biz bilan ishlash' : 'Work with Us', href: 'careers' },
          ],
        },
      ],
    },
    {
      id: 'contact',
      label: t.nav.contact,
      sections: [
        {
          title: '',
          links: [
            { label: language === 'ru' ? 'Забронировать экскурсию' : language === 'uz' ? 'Ekskursiya buyurtma qilish' : 'Book Tour', href: 'contact/tour' },
            { label: language === 'ru' ? 'Связаться с нами' : language === 'uz' ? 'Biz bilan bog\'lanish' : 'Get in Touch', href: 'contact' },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm z-50 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2.5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to={getLocalizedPath('')} className="flex items-center gap-3">
              <img src={logo} alt="Oxbridge International School" className="h-[30px] w-[30px] object-contain" />
              <div>
                <div className="text-[#953130] tracking-tight" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                  OXBRIDGE
                </div>
                <div className="text-[#33559a] tracking-tight" style={{ fontSize: '0.75rem' }}>
                  INTERNATIONAL SCHOOL
                </div>
              </div>
            </Link>

            {/* Desktop Actions */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 text-gray-700 hover:text-[#953130] transition-colors"
                >
                  <Globe size={18} />
                  <span className="text-sm font-medium">{languages.find(l => l.code === language)?.label}</span>
                </button>
                
                {isLangOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setIsLangOpen(false)} />
                    <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[140px] z-20">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors ${
                            language === lang.code ? 'text-[#953130] bg-[#953130]/5' : 'text-gray-700'
                          }`}
                        >
                          <span className="font-medium">{lang.label}</span>
                          <span className="ml-2 text-sm opacity-60">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              
              <button
                onClick={openModal}
                className="hidden lg:block px-6 py-2.5 bg-[#953130] text-white rounded-full hover:bg-[#8B2327] transition-colors"
              >
                {t.nav.enroll}
              </button>

              {/* Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#953130] transition-colors"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Menu */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br from-[#33559a] via-[#1f3b6b] to-[#1a2d4e] backdrop-blur-sm transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 lg:px-12 lg:py-8">
              <Link 
                to={getLocalizedPath('')} 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
              >
                <img src={logo} alt="Oxbridge" className="h-12 w-12 lg:h-16 lg:w-16" />
                <div>
                  <div className="text-white text-base lg:text-lg" style={{ fontWeight: 600 }}>OXBRIDGE</div>
                  <div className="text-white/80 text-xs lg:text-sm">INTERNATIONAL SCHOOL</div>
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-white hover:text-[#f7d454] transition-colors text-xs lg:text-sm tracking-wide uppercase font-display"
                aria-label="Close menu"
              >
                Close
                <X size={20} className="lg:hidden" />
                <X size={24} className="hidden lg:block" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
                {/* Desktop: Side-by-side layout */}
                <div className="hidden lg:grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20">
                  {/* Left - Main Categories */}
                  <nav className="space-y-4">
                    {megaMenuItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
                        className={`block text-4xl lg:text-5xl transition-colors text-left font-display ${
                          activeCategory === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                        }`}
                        style={{ fontWeight: 300, lineHeight: 1.2 }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>

                  {/* Right - Submenu Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {activeCategory && megaMenuItems
                      .filter(item => item.id === activeCategory)
                      .map((item) => (
                        item.sections.map((section, idx) => (
                          <div key={idx} className="animate-fade-in">
                            <h3 className="text-white mb-4 text-lg font-ui" style={{ fontWeight: 600 }}>
                              {section.title}
                            </h3>
                            <ul className="space-y-3">
                              {section.links.map((link, linkIdx) => (
                                <li key={linkIdx}>
                                  <Link
                                    to={getLocalizedPath(link.href)}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white/70 hover:text-[#f7d454] transition-colors text-sm block leading-relaxed font-ui"
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))
                    ))}
                  </div>
                </div>

                {/* Mobile: Stacked layout with expandable sections */}
                <nav className="lg:hidden space-y-2">
                  {megaMenuItems.map((item) => (
                    <div key={item.id} className="border-b border-white/10 pb-2">
                      <button
                        onClick={() => setActiveCategory(activeCategory === item.id ? null : item.id)}
                        className={`block w-full text-4xl transition-colors text-left py-2 font-display ${
                          activeCategory === item.id ? 'text-white' : 'text-white/60 hover:text-white'
                        }`}
                        style={{ fontWeight: 300, lineHeight: 1.2 }}
                      >
                        {item.label}
                      </button>
                      
                      {/* Submenu that expands below the button */}
                      {activeCategory === item.id && (
                        <div className="mt-4 mb-2 pl-4 animate-fade-in">
                          {item.sections.map((section, idx) => (
                            <div key={idx}>
                              {section.title && (
                                <h3 className="text-white mb-3 text-lg font-ui" style={{ fontWeight: 600 }}>
                                  {section.title}
                                </h3>
                              )}
                              <ul className="space-y-2.5">
                                {section.links.map((link, linkIdx) => (
                                  <li key={linkIdx}>
                                    <Link
                                      to={getLocalizedPath(link.href)}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="text-white/70 hover:text-[#f7d454] transition-colors text-base block leading-relaxed font-ui"
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </div>

            {/* Sidebar Footer */}
            <div className="border-t border-white/10 p-4 sm:p-6 lg:px-12">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
                {/* Language Selector */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-white/60 text-xs sm:text-sm uppercase tracking-wide font-display" style={{ fontWeight: 500 }}>
                    {language === 'ru' ? 'Язык' : language === 'uz' ? 'Til' : 'Language'}
                  </span>
                  <div className="flex gap-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => setLanguage(lang.code)}
                        className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors font-display ${
                          language === lang.code
                            ? 'bg-[#953130] text-white'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <button
                  onClick={openModal}
                  className="h-12 px-8 bg-[#953130] text-white rounded-full hover:bg-[#f7d454] hover:text-[#33559a] transition-all shadow-lg flex items-center justify-center text-[15px] font-medium"
                >
                  {t.nav.enroll}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}