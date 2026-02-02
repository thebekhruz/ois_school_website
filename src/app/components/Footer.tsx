import { useLanguage } from '@/app/contexts/LanguageContext';
import { Link } from 'react-router';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Award, CheckCircle, ChevronDown } from 'lucide-react';
import logo from 'figma:asset/590b9da81888458344497f425d605da99f460037.png';
import { useState } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { language, getLocalizedPath } = useLanguage();

  const content = {
    ru: {
      description: 'Oxbridge International School - ведущая международная школа в Узбекистане, предлагающая программы IB и российское образование для детей 3-18 лет.',
      quickLinks: {
        title: 'Быстрые ссылки',
        about: 'О школе',
        programs: 'Программы',
        admissions: 'Поступление',
        tuition: 'Стоимость',
        contact: 'Контакты',
        faq: 'Вопросы и ответы',
      },
      programs: {
        title: 'Программы',
        kindergarten: 'Детский сад (2-6)',
        middle: 'Начальная школа (6-12)',
        high: 'Старшая школа (13-18)',
        ib: 'IB Programme',
        compare: 'Сравнить программы',
      },
      campuses: {
        title: 'Наши кампусы',
        tashkent: {
          name: 'Ташкент',
          address: 'ул. Мустакиллик, 45',
          phone: '+998 71 123 4567',
        },
        samarkand: {
          name: 'Самарканд',
          address: 'пр. Амира Темура, 12',
          phone: '+998 66 234 5678',
        },
        email: 'info@oxbridge.uz',
      },
      newsletter: {
        title: 'Подписаться на новости',
        description: 'Получайте последние новости и обновления о школе',
        placeholder: 'Ваш email',
        button: 'Подписаться',
        success: 'Спасибо за подписку!',
      },
      social: {
        title: 'Мы в социальных сетях',
        follow: 'Следите за нами',
      },
      accreditations: {
        title: 'Аккредитации и партнеры',
        items: ['IB World School', 'Cambridge Assessment', 'COBIS Member', 'UNESCO Associated'],
      },
      legal: {
        privacy: 'Политика конфиденциальности',
        terms: 'Условия использования',
        copyright: 'Все права защищены',
      },
    },
    uz: {
      description: "Oxbridge International School - O'zbekistondagi yetakchi xalqaro maktab, 3-18 yoshli bolalar uchun IB va rus ta'lim dasturlarini taklif qiladi.",
      quickLinks: {
        title: 'Tezkor havolalar',
        about: 'Maktab haqida',
        programs: 'Dasturlar',
        admissions: 'Qabul',
        tuition: 'Narx',
        contact: 'Aloqa',
        faq: 'Savollar',
      },
      programs: {
        title: 'Dasturlar',
        kindergarten: "Bolalar bog'chasi (2-6)",
        middle: "Boshlang'ich maktab (6-12)",
        high: 'Yuqori maktab (13-18)',
        ib: 'IB Dasturi',
        compare: 'Dasturlarni solishtirish',
      },
      campuses: {
        title: 'Bizning kampuslar',
        tashkent: {
          name: 'Toshkent',
          address: "Mustaqillik ko'chasi, 45",
          phone: '+998 71 123 4567',
        },
        samarkand: {
          name: 'Samarqand',
          address: 'Amir Temur prospekti, 12',
          phone: '+998 66 234 5678',
        },
        email: 'info@oxbridge.uz',
      },
      newsletter: {
        title: 'Yangiliklardan xabardor bo\'ling',
        description: 'Maktab haqida so\'nggi yangiliklar va yangiliklarni oling',
        placeholder: 'Sizning emailingiz',
        button: 'Obuna bo\'lish',
        success: "Obuna bo'lganingiz uchun rahmat!",
      },
      social: {
        title: 'Ijtimoiy tarmoqlarda',
        follow: 'Bizni kuzatib boring',
      },
      accreditations: {
        title: 'Akkreditatsiyalar va hamkorlar',
        items: ['IB World School', 'Cambridge Assessment', 'COBIS A\'zosi', 'UNESCO Hamkori'],
      },
      legal: {
        privacy: 'Maxfiylik siyosati',
        terms: 'Foydalanish shartlari',
        copyright: 'Barcha huquqlar himoyalangan',
      },
    },
    en: {
      description: 'Oxbridge International School - a leading international school in Uzbekistan, offering IB and Russian programs for children aged 3-18.',
      quickLinks: {
        title: 'Quick Links',
        about: 'About',
        programs: 'Programs',
        admissions: 'Admissions',
        tuition: 'Tuition',
        contact: 'Contact',
        faq: 'FAQ',
      },
      programs: {
        title: 'Programs',
        kindergarten: 'Kindergarten (2-6)',
        middle: 'Primary School (6-12)',
        high: 'High School (13-18)',
        ib: 'IB Programme',
        compare: 'Compare Programs',
      },
      campuses: {
        title: 'Our Campuses',
        tashkent: {
          name: 'Tashkent',
          address: 'Mustaqillik St., 45',
          phone: '+998 71 123 4567',
        },
        samarkand: {
          name: 'Samarkand',
          address: 'Amir Temur Ave., 12',
          phone: '+998 66 234 5678',
        },
        email: 'info@oxbridge.uz',
      },
      newsletter: {
        title: 'Subscribe to Newsletter',
        description: 'Get the latest news and updates about our school',
        placeholder: 'Your email',
        button: 'Subscribe',
        success: 'Thank you for subscribing!',
      },
      social: {
        title: 'Social Media',
        follow: 'Follow us',
      },
      accreditations: {
        title: 'Accreditations & Partners',
        items: ['IB World School', 'Cambridge Assessment', 'COBIS Member', 'UNESCO Associated'],
      },
      legal: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        copyright: 'All rights reserved',
      },
    },
  };

  const t = content[language];

  const [isNewsletterOpen, setNewsletterOpen] = useState(false);

  return (
    <footer className="bg-gradient-to-br from-[#293863] to-[#1a2d4e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Logo and Description - Larger Section */}
          <div className="lg:col-span-4">
            <Link to={getLocalizedPath('')} className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Oxbridge International School" className="h-14 w-14" />
              <div>
                <div className="text-white tracking-tight font-bold text-lg">OXBRIDGE</div>
                <div className="text-[#f7d454] tracking-tight text-xs font-semibold">INTERNATIONAL SCHOOL</div>
              </div>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.description}</p>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3 text-sm">{t.social.follow}</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f7d454] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f7d454] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f7d454] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#f7d454] flex items-center justify-center transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">{t.quickLinks.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to={getLocalizedPath('about/why')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('programs/kindergarten')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.programs}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('admissions/apply')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.admissions}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('admissions/tuition')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.tuition}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('contact')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.contact}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('faq')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.quickLinks.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold mb-4">{t.programs.title}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to={getLocalizedPath('programs/kindergarten')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.programs.kindergarten}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('programs/middle-school')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.programs.middle}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('programs/high-school')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.programs.high}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('programs/ib')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.programs.ib}
                </Link>
              </li>
              <li>
                <Link
                  to={getLocalizedPath('programs/compare')}
                  className="text-gray-300 hover:text-[#f7d454] transition-colors flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#f7d454] rounded-full"></span>
                  {t.programs.compare}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold mb-4">{t.campuses.title}</h3>
            
            {/* Tashkent Campus */}
            <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-[#f7d454] font-semibold mb-3">{t.campuses.tashkent.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f7d454]" />
                  <span>{t.campuses.tashkent.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#f7d454]" />
                  <a href={`tel:${t.campuses.tashkent.phone}`} className="hover:text-white transition-colors">
                    {t.campuses.tashkent.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Samarkand Campus */}
            <div className="mb-6 bg-white/5 rounded-xl p-4 border border-white/10">
              <h4 className="text-[#f7d454] font-semibold mb-3">{t.campuses.samarkand.name}</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#f7d454]" />
                  <span>{t.campuses.samarkand.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 flex-shrink-0 text-[#f7d454]" />
                  <a href={`tel:${t.campuses.samarkand.phone}`} className="hover:text-white transition-colors">
                    {t.campuses.samarkand.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* General Email */}
            <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Mail className="w-4 h-4 flex-shrink-0 text-[#f7d454]" />
              <a href={`mailto:${t.campuses.email}`} className="hover:text-white transition-colors">
                {t.campuses.email}
              </a>
            </div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <h4 className="text-center text-white font-semibold mb-6 flex items-center justify-center gap-2">
            <Award className="w-5 h-5 text-[#f7d454]" />
            {t.accreditations.title}
          </h4>
          <div className="flex flex-wrap justify-center gap-6">
            {t.accreditations.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10"
              >
                <CheckCircle className="w-4 h-4 text-[#f7d454]" />
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-400">
              © {currentYear} Oxbridge International School. {t.legal.copyright}
            </div>
            <div className="flex gap-6">
              <Link to={getLocalizedPath('privacy')} className="text-gray-400 hover:text-white transition-colors">
                {t.legal.privacy}
              </Link>
              <Link to={getLocalizedPath('terms')} className="text-gray-400 hover:text-white transition-colors">
                {t.legal.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}