import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';

export function NotFoundPage() {
  const { language, getLocalizedPath } = useLanguage();

  const text = {
    ru: {
      title: '404',
      subtitle: 'Страница не найдена',
      description: 'К сожалению, страница, которую вы ищете, не существует.',
      backHome: 'Вернуться на главную',
    },
    uz: {
      title: '404',
      subtitle: 'Sahifa topilmadi',
      description: 'Afsuski, siz qidirayotgan sahifa mavjud emas.',
      backHome: 'Bosh sahifaga qaytish',
    },
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: 'Sorry, the page you are looking for does not exist.',
      backHome: 'Back to Home',
    },
  };

  const t = text[language];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#003A70] to-[#002550]">
      <div className="text-center text-white space-y-8 max-w-2xl">
        <h1 className="text-9xl font-light text-[#FFD700]">{t.title}</h1>
        <div className="space-y-4">
          <h2 className="text-4xl font-light">{t.subtitle}</h2>
          <p className="text-xl text-white/70">
            {t.description}
          </p>
        </div>
        <Link
          to={getLocalizedPath('')}
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#C41E3A] text-white rounded-full hover:bg-[#FFD700] hover:text-[#003A70] transition-all shadow-lg"
        >
          <ArrowLeft size={20} />
          {t.backHome}
        </Link>
      </div>
    </div>
  );
}