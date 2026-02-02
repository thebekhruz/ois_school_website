import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { DollarSign, Check, MapPin, CreditCard, Award, Sparkles, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

type ProgramType = 'earlyYears' | 'middle' | 'high' | null;

interface PriceData {
  tuition: number;
  registration: number;
  materials: number;
}

export function TuitionPage() {
  const { language } = useLanguage();
  const { openModal } = useEnrollModal();
  const [selectedCampus, setSelectedCampus] = useState<'tashkent' | 'samarkand'>('tashkent');
  const [selectedProgram, setSelectedProgram] = useState<ProgramType>(null);
  const [showExtras, setShowExtras] = useState({ lunch: false, transport: false, afterSchool: false });

  const { heroOpacity, heroScale } = useScrollProgress();

  const content = {
    ru: {
      title: 'Оплата и стоимость',
      subtitle: 'Прозрачное ценообразование для каждой семьи',
      calculator: { title: 'Калькулятор стоимости', step1: 'Выберите кампус', step2: 'Выберите программу' },
      campuses: {
        tashkent: { name: 'Ташкент Кампус', location: 'ул. Мустакиллик, 45' },
        samarkand: { name: 'Самарканд Кампус', location: 'пр. Амира Темура, 12' },
      },
      programs: { earlyYears: 'Детский сад', middle: 'Средняя школа', high: 'Старшая школа' },
      extras: { title: 'Дополнительно', lunch: 'Питание', transport: 'Транспорт', afterSchool: 'Продленка' },
      summary: {
        title: 'Итого за год', tuition: 'Обучение', registration: 'Регистрация', materials: 'Материалы',
        lunch: 'Питание', transport: 'Транспорт', afterSchool: 'Доп. занятия', total: 'Общая стоимость', perMonth: 'в месяц',
      },
      included: {
        title: 'Что включено',
        items: ['Обучение по программе', 'Учебники', 'Онлайн-платформы', 'Экскурсии', 'Спорт', 'Медобслуживание'],
      },
      payment: {
        title: 'Варианты оплаты',
        options: [
          { title: 'Полная оплата', discount: '5% скидка', description: 'Оплата за год' },
          { title: 'По семестрам', discount: '3% скидка', description: '2 платежа' },
          { title: 'Ежемесячно', discount: 'Без скидки', description: '10 платежей' },
        ],
      },
      scholarships: {
        title: 'Стипендии и скидки',
        items: [
          { title: 'Академическая стипендия', description: 'До 50%' },
          { title: 'Талант-стипендия', description: 'Для спортсменов и артистов' },
          { title: 'Семейная скидка', description: '10% на 2-го, 15% на 3-го' },
        ],
      },
      cta: { button: 'Записаться на экскурсию' },
    },
    uz: {
      title: "Ta'lim to'lovi",
      subtitle: 'Har bir oila uchun shaffof narxlar',
      calculator: { title: 'Narx kalkulyatori', step1: 'Kampusni tanlang', step2: 'Dasturni tanlang' },
      campuses: {
        tashkent: { name: 'Toshkent Kampus', location: 'Mustaqillik ko\'chasi, 45' },
        samarkand: { name: 'Samarqand Kampus', location: 'Amir Temur prospekti, 12' },
      },
      programs: { earlyYears: 'Bolalar bog\'chasi', middle: 'O\'rta', high: 'Yuqori' },
      extras: { title: 'Qo\'shimcha', lunch: 'Ovqat', transport: 'Transport', afterSchool: 'Mashg\'ulotlar' },
      summary: {
        title: 'Yillik jami', tuition: 'Ta\'lim', registration: 'Ro\'yxat', materials: 'Materiallar',
        lunch: 'Ovqat', transport: 'Transport', afterSchool: 'Qo\'shimcha', total: 'Jami', perMonth: 'oyiga',
      },
      included: {
        title: 'Nimalar kiradi',
        items: ['Dastur bo\'yicha ta\'lim', 'Darsliklar', 'Online platformalar', 'Ekskursiyalar', 'Sport', 'Tibbiyot'],
      },
      payment: {
        title: "To'lov variantlari",
        options: [
          { title: "To'liq to'lov", discount: '5% chegirma', description: 'Yillik to\'lov' },
          { title: 'Semestrlar', discount: '3% chegirma', description: '2 ta to\'lov' },
          { title: 'Oylik', discount: 'Chegirmasiz', description: '10 ta to\'lov' },
        ],
      },
      scholarships: {
        title: 'Stipendiyalar',
        items: [
          { title: 'Akademik stipendiya', description: '50% gacha' },
          { title: 'Iste\'dod stipendiyasi', description: 'Sportchilar uchun' },
          { title: 'Oilaviy chegirma', description: '2-bola 10%, 3-bola 15%' },
        ],
      },
      cta: { button: 'Ekskursiyaga yozilish' },
    },
    en: {
      title: 'Tuition & Payment',
      subtitle: 'Transparent pricing for every family',
      calculator: { title: 'Tuition Calculator', step1: 'Choose Campus', step2: 'Choose Program' },
      campuses: {
        tashkent: { name: 'Tashkent Campus', location: 'Mustaqillik St., 45' },
        samarkand: { name: 'Samarkand Campus', location: 'Amir Temur Ave., 12' },
      },
      programs: { earlyYears: 'Kindergarten', middle: 'Middle School', high: 'High School' },
      extras: { title: 'Additional', lunch: 'Meals', transport: 'Transport', afterSchool: 'After-school' },
      summary: {
        title: 'Annual Total', tuition: 'Tuition', registration: 'Registration', materials: 'Materials',
        lunch: 'Meals', transport: 'Transport', afterSchool: 'Extra Activities', total: 'Total', perMonth: 'per month',
      },
      included: {
        title: 'What\'s Included',
        items: ['Program education', 'Textbooks', 'Online platforms', 'Field trips', 'Sports', 'Medical support'],
      },
      payment: {
        title: 'Payment Options',
        options: [
          { title: 'Full Payment', discount: '5% discount', description: 'Pay for year' },
          { title: 'By Semester', discount: '3% discount', description: '2 payments' },
          { title: 'Monthly', discount: 'No discount', description: '10 payments' },
        ],
      },
      scholarships: {
        title: 'Scholarships & Discounts',
        items: [
          { title: 'Academic Scholarship', description: 'Up to 50%' },
          { title: 'Talent Scholarship', description: 'For athletes and artists' },
          { title: 'Family Discount', description: '10% for 2nd, 15% for 3rd' },
        ],
      },
      cta: { button: 'Book a Tour' },
    },
  };

  const t = content[language];

  const pricing: Record<'tashkent' | 'samarkand', Record<ProgramType, PriceData>> = {
    tashkent: {
      earlyYears: { tuition: 8000, registration: 1500, materials: 500 },
      middle: { tuition: 15000, registration: 2500, materials: 1000 },
      high: { tuition: 18000, registration: 3000, materials: 1200 },
    },
    samarkand: {
      earlyYears: { tuition: 7000, registration: 1200, materials: 400 },
      middle: { tuition: 13000, registration: 2200, materials: 900 },
      high: { tuition: 16000, registration: 2700, materials: 1100 },
    },
  };

  const extraCosts = { lunch: 1200, transport: 1500, afterSchool: 2000 };

  const calculateTotal = () => {
    if (!selectedCampus || !selectedProgram) return null;
    const basePrice = pricing[selectedCampus][selectedProgram];
    const extras = {
      lunch: showExtras.lunch ? extraCosts.lunch : 0,
      transport: showExtras.transport ? extraCosts.transport : 0,
      afterSchool: showExtras.afterSchool ? extraCosts.afterSchool : 0,
    };
    const total = basePrice.tuition + basePrice.registration + basePrice.materials + extras.lunch + extras.transport + extras.afterSchool;
    return { ...basePrice, ...extras, total };
  };

  const totals = calculateTotal();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section - Mobile-First Optimized */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white pt-20 pb-10 sm:pt-24 sm:pb-12 md:pt-28 md:pb-16 px-4 sm:px-6 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#f8eb78]/20 backdrop-blur-sm rounded-full mb-4 border border-[#f8eb78]/30"
          >
            <Sparkles className="w-4 h-4 text-[#f8eb78]" />
            <span className="font-ui font-semibold text-xs sm:text-sm">
              {language === 'ru' ? 'Прозрачное ценообразование' : language === 'uz' ? 'Shaffof narxlar' : 'Transparent Pricing'}
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[32px] sm:text-4xl md:text-5xl font-display font-normal leading-[1.1] mb-3 sm:mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg font-serif text-gray-200 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </motion.section>

      {/* Calculator Section - Compact Mobile */}
      <section className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#293863]/10 rounded-full mb-3">
              <Calculator className="w-4 h-4 text-[#293863]" />
              <span className="text-xs sm:text-sm font-ui font-semibold text-[#293863]">{t.calculator.title}</span>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Left: Selection */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {/* Step 1: Campus */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#293863] text-white flex items-center justify-center font-display font-normal text-base sm:text-lg">1</div>
                  <h3 className="text-[16px] sm:text-lg md:text-xl font-display font-normal text-[#293863]">{t.calculator.step1}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(t.campuses).map(([key, campus]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCampus(key as 'tashkent' | 'samarkand')}
                      className={`p-4 sm:p-5 rounded-xl sm:rounded-2xl border-2 text-left transition-all ${
                        selectedCampus === key ? 'border-[#293863] bg-[#293863]/5 shadow-lg' : 'border-gray-200'
                      }`}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ${selectedCampus === key ? 'text-[#293863]' : 'text-gray-400'}`} />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-display font-normal text-[15px] sm:text-base md:text-lg text-gray-900">{campus.name}</h4>
                          <p className="text-xs sm:text-sm font-ui text-gray-500 mt-0.5 sm:mt-1">{campus.location}</p>
                        </div>
                        {selectedCampus === key && <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#293863] flex-shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Program */}
              <div className={`bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 ${selectedCampus ? 'border-gray-100' : 'border-gray-100 opacity-50'}`}>
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${selectedCampus ? 'bg-[#293863]' : 'bg-gray-300'} text-white flex items-center justify-center font-display font-normal text-base sm:text-lg`}>2</div>
                  <h3 className="text-[16px] sm:text-lg md:text-xl font-display font-normal text-[#293863]">{t.calculator.step2}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                  {Object.entries(t.programs).map(([key, program]) => (
                    <button
                      key={key}
                      onClick={() => selectedCampus && setSelectedProgram(key as ProgramType)}
                      disabled={!selectedCampus}
                      className={`p-3 sm:p-4 rounded-xl border-2 text-center transition-all ${
                        selectedProgram === key ? 'border-[#953130] bg-[#953130]/5' : 'border-gray-200'
                      } ${!selectedCampus ? 'cursor-not-allowed' : ''}`}
                    >
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{key === 'earlyYears' ? '🎨' : key === 'middle' ? '📚' : '🎓'}</div>
                      <h4 className="font-display font-normal text-xs sm:text-sm text-gray-900">{program}</h4>
                      {selectedProgram === key && <Check className="w-4 h-4 text-[#953130] mx-auto mt-1 sm:mt-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              {totals && (
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-gray-100">
                  <h3 className="text-[16px] sm:text-lg font-display font-normal text-[#293863] mb-3 sm:mb-4">{t.extras.title}</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      { key: 'lunch', label: t.extras.lunch, cost: extraCosts.lunch },
                      { key: 'transport', label: t.extras.transport, cost: extraCosts.transport },
                      { key: 'afterSchool', label: t.extras.afterSchool, cost: extraCosts.afterSchool },
                    ].map((extra) => (
                      <label key={extra.key} className="flex items-center gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl border-2 border-gray-200 cursor-pointer hover:border-[#f8eb78] transition-all">
                        <input
                          type="checkbox"
                          checked={showExtras[extra.key as keyof typeof showExtras]}
                          onChange={(e) => setShowExtras({ ...showExtras, [extra.key]: e.target.checked })}
                          className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-ui font-semibold text-sm sm:text-base text-gray-900 break-words">{extra.label}</div>
                          <div className="text-xs sm:text-sm font-ui text-gray-500">+${extra.cost.toLocaleString()}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Summary - Compact Mobile */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 bg-gradient-to-br from-[#293863] to-[#1f2c50] rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 text-white">
                <h3 className="text-[16px] sm:text-lg md:text-xl font-display font-normal mb-4 sm:mb-6">{t.summary.title}</h3>
                {!totals ? (
                  <div className="text-center py-8 sm:py-12">
                    <DollarSign className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-white/30" />
                    <p className="text-white/70 text-xs sm:text-sm font-ui">
                      {language === 'ru' ? 'Выберите кампус и программу' : language === 'uz' ? 'Kampus va dasturni tanlang' : 'Select campus and program'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                      <h4 className="font-ui font-bold text-white mb-2 sm:mb-3 text-xs sm:text-sm">{t.included.title}</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {t.included.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-ui text-white/80">
                            <Check className="w-3 h-3 text-[#f8eb78] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2 sm:space-y-3 pb-3 sm:pb-4 border-b border-white/20">
                      {[
                        { label: t.summary.tuition, amount: totals.tuition },
                        { label: t.summary.registration, amount: totals.registration },
                        { label: t.summary.materials, amount: totals.materials },
                        ...(showExtras.lunch ? [{ label: t.summary.lunch, amount: totals.lunch }] : []),
                        ...(showExtras.transport ? [{ label: t.summary.transport, amount: totals.transport }] : []),
                        ...(showExtras.afterSchool ? [{ label: t.summary.afterSchool, amount: totals.afterSchool }] : []),
                      ].map((item) => (
                        <div key={item.label} className="flex justify-between text-xs sm:text-sm font-ui">
                          <span className="text-white/80">{item.label}</span>
                          <span className="font-semibold">${item.amount.toLocaleString()}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
                      <div className="flex justify-between items-center text-lg sm:text-xl font-display font-normal">
                        <span>{t.summary.total}</span>
                        <span className="text-[#f8eb78]">${totals.total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm font-ui text-white/70">
                        <span>{t.summary.perMonth}</span>
                        <span>${Math.round(totals.total / 12).toLocaleString()}</span>
                      </div>
                    </div>

                    <button
                      onClick={openModal}
                      className="w-full mt-4 sm:mt-6 px-4 sm:px-6 py-3 sm:py-4 bg-[#f8eb78] text-[#293863] rounded-lg sm:rounded-xl hover:bg-white transition-all shadow-lg font-ui font-bold text-sm sm:text-base md:text-lg min-h-[48px] sm:min-h-[56px]"
                    >
                      {t.cta.button}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options - Horizontal Scroll Mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-3xl md:text-4xl font-display font-normal text-[#293863] mb-6 sm:mb-8 md:mb-10 text-center leading-tight"
          >
            {t.payment.title}
          </motion.h2>
          <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 snap-x snap-mandatory scrollbar-hide">
            {t.payment.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-100 hover:border-[#f8eb78] hover:shadow-xl transition-all flex-1 min-w-0 snap-start"
              >
                <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-[#953130] mb-3 sm:mb-4" />
                <h3 className="text-[16px] sm:text-lg md:text-xl font-display font-normal text-[#293863] mb-2">{option.title}</h3>
                <div className="text-[#f8eb78] font-ui font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{option.discount}</div>
                <p className="text-gray-600 font-ui text-xs sm:text-sm">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships - Horizontal Scroll Mobile */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] sm:text-3xl md:text-4xl font-display font-normal mb-6 sm:mb-8 md:mb-10 text-center leading-tight"
          >
            {t.scholarships.title}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {t.scholarships.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/20"
              >
                <Award className="w-8 h-8 sm:w-10 sm:h-10 text-[#f8eb78] mb-3 sm:mb-4" />
                <h3 className="text-[16px] sm:text-lg md:text-xl font-display font-normal mb-2">{item.title}</h3>
                <p className="text-white/80 font-ui text-xs sm:text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}