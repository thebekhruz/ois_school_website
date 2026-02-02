import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/translations';
import { Award, Target, Users, Building } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function AboutPage() {
  const { language } = useLanguage();
  const t = translations[language];

  const { heroOpacity, heroScale, heroY } = useScrollProgress();

  const values = [
    {
      icon: Award,
      title: language === 'ru' ? 'Академическое превосходство' : language === 'uz' ? 'Akademik mukammallik' : 'Academic Excellence',
      description: language === 'ru' ? 'Высокие стандарты образования и индивидуальный подход к каждому ученику' : language === 'uz' ? 'Yuqori ta\'lim standartlari va har bir o\'quvchiga individual yondashuv' : 'High educational standards and individual approach to each student',
    },
    {
      icon: Target,
      title: language === 'ru' ? 'Развитие личности' : language === 'uz' ? 'Shaxsni rivojlantirish' : 'Personal Development',
      description: language === 'ru' ? 'Формирование критического мышления, творческих способностей и лидерских качеств' : language === 'uz' ? 'Tanqidiy fikrlash, ijodiy qobiliyatlar va yetakchilik sifatlarini shakllantirish' : 'Development of critical thinking, creative abilities and leadership qualities',
    },
    {
      icon: Users,
      title: language === 'ru' ? 'Мультикультурность' : language === 'uz' ? 'Ko\'p madaniyatlilik' : 'Multiculturalism',
      description: language === 'ru' ? 'Уважение к разным культурам и воспитание глобального мировоззрения' : language === 'uz' ? 'Turli madaniyatlarga hurmat va global dunyoqarashni tarbiyalash' : 'Respect for different cultures and fostering a global worldview',
    },
    {
      icon: Building,
      title: language === 'ru' ? 'Современная инфраструктура' : language === 'uz' ? 'Zamonaviy infratuzilma' : 'Modern Infrastructure',
      description: language === 'ru' ? 'Оснащенные классы, научные лаборатории, спортивный комплекс и библиотека' : language === 'uz' ? 'Jihozlangan sinflar, ilmiy laboratoriyalar, sport majmuasi va kutubxona' : 'Equipped classrooms, scientific laboratories, sports complex and library',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#293863] to-[#33559a] overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#953130] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f8eb78] rounded-full blur-3xl"></div>
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl text-white mb-4 md:mb-5 font-display">
            {t.nav.about}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-small sm:text-base md:text-lg text-white/90 max-w-3xl mx-auto font-serif">
            {language === 'ru' ? 'Частная международная школа в Ташкенте, основанная в 2018 году' : language === 'uz' ? 'Toshkentdagi xususiy xalqaro maktab, 2018 yilda tashkil etilgan' : 'Private international school in Tashkent, founded in 2018'}
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}>
              <h2 className="text-section-h1 md:text-3xl mb-4 md:mb-5 text-[#293863] font-display">
                {language === 'ru' ? 'Наша миссия' : language === 'uz' ? 'Bizning missiyamiz' : 'Our Mission'}
              </h2>
              <div className="flex flex-col gap-mobile-tight text-small sm:text-base text-gray-700 font-ui">
                <p>
                  {language === 'ru' ? 'Oxbridge International School создает образовательную среду, где каждый ребенок может раскрыть свой потенциал и подготовиться к успешному будущему в глобальном мире.' : language === 'uz' ? 'Oxbridge International School har bir bola o\'z salohiyatini ochishi va global dunyoda muvaffaqiyatli kelajakka tayyorlanishi mumkin bo\'lgan ta\'lim muhitini yaratadi.' : 'Oxbridge International School creates an educational environment where every child can unlock their potential and prepare for a successful future in the global world.'}
                </p>
                <p>
                  {language === 'ru' ? 'Мы объединяем лучшие международные образовательные программы с глубоким уважением к местным традициям и ценностям.' : language === 'uz' ? 'Biz eng yaxshi xalqaro ta\'lim dasturlarini mahalliy an\'analarga va qadriyatlarga chuqur hurmat bilan birlashtiramiz.' : 'We combine the best international educational programs with deep respect for local traditions and values.'}
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-64 sm:h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730106469498-a916bbf203e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk1MDE0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt={language === 'ru' ? 'Современное здание школы' : language === 'uz' ? 'Zamonaviy maktab binosi' : 'Modern school building'}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="content-section bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-10">
            <h2 className="text-section-h1 md:text-3xl mb-3 text-[#293863] font-display">
              {language === 'ru' ? 'Наши ценности' : language === 'uz' ? 'Bizning qadriyatlarimiz' : 'Our Values'}
            </h2>
            <p className="text-small sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-serif">
              {language === 'ru' ? 'Принципы, которые определяют нашу работу каждый день' : language === 'uz' ? 'Har kuni ishimizni belgilaydigan tamoyillar' : 'Principles that define our work every day'}
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-mobile-normal">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-mobile compact-p bg-white rounded-2xl hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#953130] to-[#293863] rounded-2xl flex items-center justify-center mb-4">
                  <value.icon className="icon-primary sm:w-7 sm:h-7 text-[#f8eb78]" />
                </div>
                <h3 className="text-card-h2 sm:text-xl mb-3 text-[#293863] font-display">
                  {value.title}
                </h3>
                <p className="text-small text-gray-600 leading-relaxed font-ui">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-section-h1 md:text-3xl mb-6 md:mb-8 text-[#293863] font-display">
              {language === 'ru' ? 'История школы' : language === 'uz' ? 'Maktab tarixi' : 'School History'}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-mobile-tight text-small sm:text-base text-gray-700 font-ui">
              <p>
                {language === 'ru' ? 'Oxbridge International School была основана в 2018 году с целью создать образовательную среду мирового уровня в Узбекистане.' : language === 'uz' ? 'Oxbridge International School O\'zbekistonda jahon darajasidagi ta\'lim muhitini yaratish maqsadida 2018 yilda tashkil etilgan.' : 'Oxbridge International School was founded in 2018 with the goal of creating a world-class educational environment in Uzbekistan.'}
              </p>
              <p>
                {language === 'ru' ? 'За годы работы мы создали образовательное сообщество, объединяющее опытных преподавателей, талантливых учеников и вовлеченных родителей.' : language === 'uz' ? 'Yillar davomida biz tajribali o\'qituvchilar, iqtidorli o\'quvchilar va faol ota-onalarni birlashtirgan ta\'lim jamiyatini yaratdik.' : 'Over the years, we have created an educational community that brings together experienced teachers, talented students and engaged parents.'}
              </p>
              <p className="text-[#953130] font-display text-small sm:text-base md:text-lg">
                {language === 'ru' ? 'Сегодня мы гордимся нашими выпускниками, которые учатся в ведущих университетах мира!' : language === 'uz' ? 'Bugun biz dunyoning yetakchi universitetlarida o\'qiyotgan bitiruvchilarimiz bilan faxrlanamiz!' : 'Today we are proud of our graduates who study at the world\'s leading universities!'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}