import { useLanguage } from '@/app/contexts/LanguageContext';
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function PrivacyPage() {
  const { language } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Политика конфиденциальности',
      subtitle: 'Обновлено: 28 января 2026',
      intro: 'Oxbridge International School уважает вашу конфиденциальность и стремится защитить ваши персональные данные.',
      sections: [
        {
          icon: FileText,
          title: 'Какую информацию мы собираем',
          items: [
            'Контактная информация (имя, email, телефон)',
            'Информация об ученике (имя, возраст, класс)',
            'Академические записи и достижения',
            'Медицинская информация (при необходимости)',
            'Фотографии и видео со школьных мероприятий',
          ],
        },
        {
          icon: Eye,
          title: 'Как мы используем информацию',
          items: [
            'Для предоставления образовательных услуг',
            'Для коммуникации с родителями и учениками',
            'Для улучшения качества образования',
            'Для обеспечения безопасности учеников',
            'Для выполнения юридических обязательств',
          ],
        },
        {
          icon: Lock,
          title: 'Как мы защищаем ваши данные',
          items: [
            'Шифрование данных при передаче',
            'Ограниченный доступ к персональным данным',
            'Регулярные проверки безопасности',
            'Обучение персонала защите данных',
            'Соответствие международным стандартам',
          ],
        },
        {
          icon: UserCheck,
          title: 'Ваши права',
          items: [
            'Право на доступ к вашим данным',
            'Право на исправление неточных данных',
            'Право на удаление ваших данных',
            'Право на ограничение обработки',
            'Право на возражение против обработки',
          ],
        },
      ],
    },
    uz: {
      title: 'Maxfiylik siyosati',
      subtitle: 'Yangilangan: 28 yanvar 2026',
      intro: "Oxbridge International School sizning maxfiyligingizni hurmat qiladi va shaxsiy ma'lumotlaringizni himoya qilishga intiladi.",
      sections: [
        {
          icon: FileText,
          title: "Qanday ma'lumotlarni yig'amiz",
          items: [
            "Aloqa ma'lumotlari (ism, email, telefon)",
            "O'quvchi haqida ma'lumot (ism, yosh, sinf)",
            'Akademik yozuvlar va yutuqlar',
            "Tibbiy ma'lumot (kerak bo'lganda)",
            'Maktab tadbirlaridan foto va videolar',
          ],
        },
        {
          icon: Eye,
          title: "Ma'lumotlardan qanday foydalanamiz",
          items: [
            "Ta'lim xizmatlarini taqdim etish uchun",
            "Ota-onalar va o'quvchilar bilan aloqa uchun",
            "Ta'lim sifatini yaxshilash uchun",
            "O'quvchilar xavfsizligini ta'minlash uchun",
            'Yuridik majburiyatlarni bajarish uchun',
          ],
        },
        {
          icon: Lock,
          title: "Ma'lumotlaringizni qanday himoya qilamiz",
          items: [
            "Ma'lumotlarni uzatishda shifrlash",
            "Shaxsiy ma'lumotlarga cheklangan kirish",
            'Muntazam xavfsizlik tekshiruvlari',
            "Xodimlarni ma'lumotlarni himoya qilishga o'rgatish",
            'Xalqaro standartlarga muvofiqlik',
          ],
        },
        {
          icon: UserCheck,
          title: 'Sizning huquqlaringiz',
          items: [
            "Ma'lumotlaringizga kirish huquqi",
            "Noto'g'ri ma'lumotlarni tuzatish huquqi",
            "Ma'lumotlaringizni o'chirish huquqi",
            'Qayta ishlashni cheklash huquqi',
            'Qayta ishlashga e\'tiroz bildirish huquqi',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      subtitle: 'Updated: January 28, 2026',
      intro: 'Oxbridge International School respects your privacy and is committed to protecting your personal data.',
      sections: [
        {
          icon: FileText,
          title: 'What information we collect',
          items: [
            'Contact information (name, email, phone)',
            'Student information (name, age, grade)',
            'Academic records and achievements',
            'Medical information (when necessary)',
            'Photos and videos from school events',
          ],
        },
        {
          icon: Eye,
          title: 'How we use information',
          items: [
            'To provide educational services',
            'To communicate with parents and students',
            'To improve the quality of education',
            'To ensure student safety',
            'To fulfill legal obligations',
          ],
        },
        {
          icon: Lock,
          title: 'How we protect your data',
          items: [
            'Data encryption during transmission',
            'Limited access to personal data',
            'Regular security audits',
            'Staff training on data protection',
            'Compliance with international standards',
          ],
        },
        {
          icon: UserCheck,
          title: 'Your rights',
          items: [
            'Right to access your data',
            'Right to correct inaccurate data',
            'Right to delete your data',
            'Right to restrict processing',
            'Right to object to processing',
          ],
        },
      ],
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="hero-section hero-wrapper relative bg-gradient-to-br from-[#003A70] to-[#001a3d] text-white px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle, #FFD700 1px, transparent 1px)',
              backgroundSize: '30px 30px',
            }}
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 leading-[1.1]">{t.title}</h1>
          <p className="text-small sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto">{t.intro}</p>
        </div>
      </section>

      {/* Content */}
      <section className="content-section px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-mobile-normal">
          {t.sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="card-mobile compact-p bg-white rounded-3xl shadow-lg border-2 border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#003A70]/10 flex items-center justify-center">
                    <Icon className="icon-primary text-[#003A70]" />
                  </div>
                  <h2 className="text-card-h2 sm:text-xl font-bold text-[#003A70]">{section.title}</h2>
                </div>
                <ul className="flex flex-col gap-mobile-tight">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3 text-small text-gray-700">
                      <CheckCircle className="icon-secondary text-[#003A70] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}