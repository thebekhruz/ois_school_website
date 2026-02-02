import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Mail } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function TeamPage() {
  const { language } = useLanguage();
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      hero: { badge: 'Профессионалы', title: 'Наша команда', subtitle: 'Педагоги, меняющие жизни' },
      departments: { all: 'Все', leadership: 'Руководство', kindergarten: 'Садик', primary: 'Начальная', middle: 'Средняя', high: 'Старшая' },
      cta: { title: 'Присоединяйтесь', description: 'Ищем увлеченных педагогов', button: 'Отправить резюме' },
      team: [
        { name: 'Екатерина Волкова', role: 'Директор', department: 'leadership', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600', credentials: 'PhD, 20+ лет', bio: 'Безопасная среда обучения', email: 'e.volkova@oxbridge.uz' },
        { name: 'Мария Петрова', role: 'Руководитель садика', department: 'kindergarten', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600', credentials: 'IB PYP, Монтессори', bio: 'Создаем семью', email: 'm.petrova@oxbridge.uz' },
        { name: 'Жамила Каримова', role: 'Учитель начальных', department: 'kindergarten', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600', credentials: 'IB PYP, 12 лет', bio: 'Учу любить чтение', email: 'j.karimova@oxbridge.uz' },
        { name: 'Александр Смирнов', role: 'Координатор', department: 'primary', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600', credentials: 'IB PYP', bio: 'Поддержка без провала', email: 'a.smirnov@oxbridge.uz' },
        { name: 'Наргиза Ахмедова', role: 'Учитель английского', department: 'primary', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600', credentials: 'CELTA', bio: 'Прогресс = уверенность', email: 'n.ahmedova@oxbridge.uz' },
        { name: 'Дмитрий Орлов', role: 'Координатор MYP', department: 'middle', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', credentials: 'IB MYP', bio: 'Планирование, не выгорание', email: 'd.orlov@oxbridge.uz' },
        { name: 'Фарида Расулова', role: 'Учитель математики', department: 'middle', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600', credentials: 'IB MYP, 15 лет', bio: 'Все могут математику', email: 'f.rasulova@oxbridge.uz' },
        { name: 'Ирина Соколова', role: 'Координатор DP', department: 'high', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600', credentials: 'IB DP, TOK', bio: 'Готовим к самостоятельности', email: 'i.sokolova@oxbridge.uz' },
        { name: 'Марат Абдуллаев', role: 'University Counselor', department: 'high', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600', credentials: 'Counseling', bio: 'План A/B/C', email: 'm.abdullaev@oxbridge.uz' },
        { name: 'Елена Белова', role: 'Психолог', department: 'leadership', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600', credentials: 'Подростки', bio: '99% удовлетворенность', email: 'e.belova@oxbridge.uz' },
      ],
    },
    uz: {
      hero: { badge: 'Mutaxassislar', title: 'Jamoa', subtitle: "Hayotni o'zgartiruvchi o'qituvchilar" },
      departments: { all: 'Hammasi', leadership: 'Rahbariyat', kindergarten: "Bog'cha", primary: "Boshlang'ich", middle: "O'rta", high: 'Yuqori' },
      cta: { title: "Qo'shiling", description: "O'qituvchilar qidiramiz", button: 'Rezyume yuborish' },
      team: [
        { name: 'Yekaterina Volkova', role: 'Direktor', department: 'leadership', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600', credentials: 'PhD, 20+ yil', bio: 'Xavfsiz muhit', email: 'e.volkova@oxbridge.uz' },
        { name: 'Mariya Petrova', role: "Bog'cha rahbari", department: 'kindergarten', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600', credentials: 'IB PYP', bio: 'Oila yaratamiz', email: 'm.petrova@oxbridge.uz' },
        { name: 'Jamila Karimova', role: "O'qituvchi", department: 'kindergarten', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600', credentials: 'IB PYP', bio: "O'qishni sevish", email: 'j.karimova@oxbridge.uz' },
        { name: 'Aleksandr Smirnov', role: 'Koordinator', department: 'primary', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600', credentials: 'IB PYP', bio: "Qo'llab-quvvatlash", email: 'a.smirnov@oxbridge.uz' },
        { name: 'Nargiza Ahmedova', role: "Ingliz o'qituvchisi", department: 'primary', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600', credentials: 'CELTA', bio: 'Ishonch', email: 'n.ahmedova@oxbridge.uz' },
        { name: 'Dmitriy Orlov', role: 'MYP', department: 'middle', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', credentials: 'IB MYP', bio: 'Rejalashtirish', email: 'd.orlov@oxbridge.uz' },
        { name: 'Farida Rasulova', role: 'Matematika', department: 'middle', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600', credentials: 'IB MYP', bio: 'Hamma matematik', email: 'f.rasulova@oxbridge.uz' },
        { name: 'Irina Sokolova', role: 'DP', department: 'high', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600', credentials: 'IB DP', bio: 'Mustaqillik', email: 'i.sokolova@oxbridge.uz' },
        { name: 'Marat Abdullayev', role: 'Maslahatch', department: 'high', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600', credentials: 'Counseling', bio: 'A/B/C', email: 'm.abdullaev@oxbridge.uz' },
        { name: 'Yelena Belova', role: 'Psixolog', department: 'leadership', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600', credentials: "O'smirlar", bio: '99%', email: 'e.belova@oxbridge.uz' },
      ],
    },
    en: {
      hero: { badge: 'Professionals', title: 'Our Team', subtitle: 'Educators who change lives' },
      departments: { all: 'All', leadership: 'Leadership', kindergarten: 'Kindergarten', primary: 'Primary', middle: 'Middle', high: 'High' },
      cta: { title: 'Join Us', description: 'Looking for passionate educators', button: 'Send Resume' },
      team: [
        { name: 'Ekaterina Volkova', role: 'Director', department: 'leadership', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600', credentials: 'PhD, 20+ yrs', bio: 'Safe learning environment', email: 'e.volkova@oxbridge.uz' },
        { name: 'Maria Petrova', role: 'Kindergarten Head', department: 'kindergarten', image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600', credentials: 'IB PYP', bio: 'Create a family', email: 'm.petrova@oxbridge.uz' },
        { name: 'Jamila Karimova', role: 'Teacher', department: 'kindergarten', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600', credentials: 'IB PYP', bio: 'Love reading', email: 'j.karimova@oxbridge.uz' },
        { name: 'Alexander Smirnov', role: 'Coordinator', department: 'primary', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600', credentials: 'IB PYP', bio: 'Support system', email: 'a.smirnov@oxbridge.uz' },
        { name: 'Nargiza Ahmedova', role: 'English Teacher', department: 'primary', image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600', credentials: 'CELTA', bio: 'Progress = confidence', email: 'n.ahmedova@oxbridge.uz' },
        { name: 'Dmitry Orlov', role: 'MYP Coordinator', department: 'middle', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', credentials: 'IB MYP', bio: 'Planning, not burnout', email: 'd.orlov@oxbridge.uz' },
        { name: 'Farida Rasulova', role: 'Math Teacher', department: 'middle', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600', credentials: 'IB MYP', bio: 'Everyone can do math', email: 'f.rasulova@oxbridge.uz' },
        { name: 'Irina Sokolova', role: 'DP Coordinator', department: 'high', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600', credentials: 'IB DP', bio: 'Preparing independence', email: 'i.sokolova@oxbridge.uz' },
        { name: 'Marat Abdullaev', role: 'Counselor', department: 'high', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600', credentials: 'Counseling', bio: 'Plan A/B/C', email: 'm.abdullaev@oxbridge.uz' },
        { name: 'Elena Belova', role: 'Psychologist', department: 'leadership', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600', credentials: 'Adolescent', bio: '99% satisfaction', email: 'e.belova@oxbridge.uz' },
      ],
    },
  };

  const t = content[language];
  const filteredTeam = selectedDepartment === 'all' ? t.team : t.team.filter(m => m.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero - Mobile-First */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] px-4 sm:px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-[#f8eb78]/20 backdrop-blur-sm rounded-full mb-4 sm:mb-5 border border-[#f8eb78]/30">
            <span className="font-ui font-semibold text-badge md:text-sm text-white">{t.hero.badge}</span>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1] text-white mb-3 sm:mb-4 md:mb-5"
          >
            {t.hero.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-small sm:text-base md:text-lg font-serif text-white/90 max-w-3xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Department Filter - Mobile Sticky */}
      <section className="py-4 sm:py-6 px-4 sm:px-6 bg-gray-50 sticky top-0 z-40 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-2 min-w-max">
              {Object.keys(t.departments).map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-caption sm:text-small font-semibold transition-all whitespace-nowrap ${
                    selectedDepartment === dept
                      ? 'bg-[#293863] text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {t.departments[dept]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Grid - Mobile 1-Col, Desktop 3-Col */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="card-mobile compact-p bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-3 ring-4 ring-gray-100">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-card-h2 sm:text-lg font-bold text-[#293863] mb-1">{member.name}</h3>
                  <p className="text-caption sm:text-small text-gray-600 mb-1">{member.role}</p>
                  <p className="text-caption text-[#953130] font-semibold mb-2">{member.credentials}</p>
                  <p className="text-caption text-gray-500 italic mb-3">{member.bio}</p>
                  <a 
                    href={`mailto:${member.email}`} 
                    className="text-caption text-[#293863] hover:underline"
                  >
                    {member.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}