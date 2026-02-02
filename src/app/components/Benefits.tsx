import { BookOpen, Users, Globe, Award, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';

export function Benefits() {
  const { language } = useLanguage();
  const t = translations[language];

  const icons = [BookOpen, Globe, Users, Lightbulb, Award, Heart];

  return (
    <section id="benefits" className="py-16 md:py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#2F5DA1]/10 text-[#2F5DA1] rounded-full mb-6 text-sm">
            {t.benefits.badge}
          </div>
          <h2 className="text-5xl mb-6" style={{ fontWeight: 700, lineHeight: 1.2 }}>
            {t.benefits.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.benefits.items.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#AD2D32]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-[#AD2D32]" size={24} />
                </div>
                <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}