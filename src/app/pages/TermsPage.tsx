import { useLanguage } from '@/app/contexts/LanguageContext';
import { FileText, CheckCircle, AlertCircle, Scale } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function TermsPage() {
  const { language } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Условия использования',
      subtitle: 'Обновлено: 28 января 2026',
      intro: 'Используя сайт Oxbridge International School, вы соглашаетесь с этими условиями.',
      sections: [
        {
          icon: FileText,
          title: 'Использование сайта',
          content:
            'Этот сайт предназначен для предоставления информации о Oxbridge International School. Вы можете использовать сайт только в законных целях и в соответствии с этими условиями.',
          items: [
            'Не пытайтесь получить несанкционированный доступ к сайту',
            'Не используйте сайт для распространения вредоносного ПО',
            'Не копируйте материалы сайта без разрешения',
            'Не используйте автоматизированные средства для доступа к сайту',
          ],
        },
        {
          icon: CheckCircle,
          title: 'Интеллектуальная собственность',
          content:
            'Все материалы на этом сайте, включая текст, изображения, логотипы и дизайн, являются собственностью Oxbridge International School и защищены законом об авторском праве.',
          items: [
            'Логотипы и товарные знаки принадлежат школе',
            'Фотографии учеников используются с согласия родителей',
            'Учебные материалы защищены авторским правом',
            'Контент не может быть воспроизведен без письменного разрешения',
          ],
        },
        {
          icon: Scale,
          title: 'Ответственность',
          content:
            'Школа не несет ответственности за любые убытки, возникшие в результате использования или невозможности использования этого сайта.',
          items: [
            'Информация на сайте предоставляется "как есть"',
            'Мы не гарантируем бесперебойную работу сайта',
            'Мы не несем ответственности за контент внешних ссылок',
            'Родители несут ответственность за безопасность своих учетных данных',
          ],
        },
        {
          icon: AlertCircle,
          title: 'Изменения в условиях',
          content:
            'Мы оставляем за собой право изменять эти условия в любое время. Продолжая использовать сайт после изменений, вы соглашаетесь с новыми условиями.',
          items: [
            'Изменения вступают в силу немедленно после публикации',
            'Мы рекомендуем регулярно проверять эту страницу',
            'Существенные изменения будут объявлены на сайте',
            'Продолжение использования означает согласие с изменениями',
          ],
        },
      ],
    },
    uz: {
      title: 'Foydalanish shartlari',
      subtitle: 'Yangilangan: 28 yanvar 2026',
      intro: "Oxbridge International School saytidan foydalanib, siz ushbu shartlarga rozilik bildirasiz.",
      sections: [
        {
          icon: FileText,
          title: 'Saytdan foydalanish',
          content:
            "Bu sayt Oxbridge International School haqida ma'lumot berish uchun mo'ljallangan. Saytdan faqat qonuniy maqsadlarda va ushbu shartlarga muvofiq foydalanishingiz mumkin.",
          items: [
            'Saytga ruxsatsiz kirishga urinmang',
            'Saytdan zararli dастuriy ta\'minotni tarqatish uchun foydalanmang',
            'Sayt materiallarini ruxsatsiz nusxalamang',
            'Saytga kirish uchun avtomatlashtirilgan vositalardan foydalanmang',
          ],
        },
        {
          icon: CheckCircle,
          title: 'Intellektual mulk',
          content:
            "Ushbu saytdagi barcha materiallar, jumladan matn, rasmlar, logotiplar va dizayn Oxbridge International School mulki hisoblanadi va mualliflik huquqi qonuni bilan himoyalangan.",
          items: [
            'Logotiplar va savdo belgilari maktabga tegishli',
            "O'quvchilar fotolari ota-onalar roziligida ishlatiladi",
            "O'quv materiallari mualliflik huquqi bilan himoyalangan",
            'Kontent yozma ruxsatsiz takrorlanishi mumkin emas',
          ],
        },
        {
          icon: Scale,
          title: 'Javobgarlik',
          content:
            "Maktab ushbu saytdan foydalanish yoki foydalana olmaslik natijasida yuzaga kelgan har qanday zarar uchun javobgar emas.",
          items: [
            "Saytdagi ma'lumotlar \"boricha\" taqdim etiladi",
            "Biz saytning uzluksiz ishlashiga kafolat bermaymiz",
            "Biz tashqi havolalar kontenti uchun javobgar emasmiz",
            "Ota-onalar o'z hisobvaraqlarining xavfsizligi uchun javobgardirlar",
          ],
        },
        {
          icon: AlertCircle,
          title: "Shartlardagi o'zgarishlar",
          content:
            "Biz ushbu shartlarni istalgan vaqtda o'zgartirish huquqini o'zimizda saqlaymiz. O'zgarishlardan keyin saytdan foydalanishni davom ettirib, siz yangi shartlarga rozilik bildirasiz.",
          items: [
            "O'zgarishlar e'lon qilingandan keyin darhol kучга kiradi",
            'Biz ushbu sahifani muntazam tekshirishni tavsiya qilamiz',
            "Muhim o'zgarishlar saytda e'lon qilinadi",
            "Foydalanishni davom ettirish o'zgarishlarga rozilikni bildiradi",
          ],
        },
      ],
    },
    en: {
      title: 'Terms of Service',
      subtitle: 'Updated: January 28, 2026',
      intro: 'By using the Oxbridge International School website, you agree to these terms.',
      sections: [
        {
          icon: FileText,
          title: 'Use of Website',
          content:
            'This website is intended to provide information about Oxbridge International School. You may use the site only for lawful purposes and in accordance with these terms.',
          items: [
            'Do not attempt to gain unauthorized access to the site',
            'Do not use the site to distribute malicious software',
            'Do not copy site materials without permission',
            'Do not use automated means to access the site',
          ],
        },
        {
          icon: CheckCircle,
          title: 'Intellectual Property',
          content:
            'All materials on this site, including text, images, logos, and design, are the property of Oxbridge International School and are protected by copyright law.',
          items: [
            'Logos and trademarks belong to the school',
            'Student photos are used with parental consent',
            'Educational materials are protected by copyright',
            'Content cannot be reproduced without written permission',
          ],
        },
        {
          icon: Scale,
          title: 'Liability',
          content:
            'The school is not liable for any losses arising from the use or inability to use this site.',
          items: [
            'Information on the site is provided "as is"',
            'We do not guarantee uninterrupted site operation',
            'We are not responsible for the content of external links',
            'Parents are responsible for the security of their credentials',
          ],
        },
        {
          icon: AlertCircle,
          title: 'Changes to Terms',
          content:
            'We reserve the right to change these terms at any time. By continuing to use the site after changes, you agree to the new terms.',
          items: [
            'Changes take effect immediately after publication',
            'We recommend regularly checking this page',
            'Significant changes will be announced on the site',
            'Continued use means agreement to changes',
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