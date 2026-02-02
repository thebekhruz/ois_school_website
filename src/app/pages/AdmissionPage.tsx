import { useLanguage } from '@/app/contexts/LanguageContext';
import { FileText, Users, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';

export function AdmissionPage() {
  const { language } = useLanguage();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const steps = [
    {
      icon: FileText,
      title: language === 'ru' ? 'Подача заявки' : language === 'uz' ? 'Ariza topshirish' : 'Application',
      description: language === 'ru' ? 'Заполните форму на сайте' : language === 'uz' ? 'Saytda arizani to\'ldiring' : 'Fill out the online form',
    },
    {
      icon: Users,
      title: language === 'ru' ? 'Собеседование' : language === 'uz' ? 'Suhbat' : 'Interview',
      description: language === 'ru' ? 'Встреча с администрацией' : language === 'uz' ? 'Administratsiya bilan uchrashuv' : 'Meeting with administration',
    },
    {
      icon: Calendar,
      title: language === 'ru' ? 'Зачисление' : language === 'uz' ? 'Qabul qilish' : 'Enrollment',
      description: language === 'ru' ? 'Оформление документов' : language === 'uz' ? 'Hujjatlarni rasmiylashtirish' : 'Document processing',
    },
  ];

  return (
    <>
      <section className="hero-section hero-wrapper relative flex items-center justify-center bg-gradient-to-br from-[#293863] to-[#33559a] overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#f8eb78] rounded-full blur-3xl"></div>
        </motion.div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6 font-display leading-[1.1]">
            {language === 'ru' ? 'Поступление' : language === 'uz' ? 'Qabul' : 'Admission'}
          </motion.h1>
        </div>
      </section>

      <section className="content-section bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-mobile-normal">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#953130] to-[#293863] rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="icon-primary sm:w-9 sm:h-9 text-[#f8eb78]" />
                </motion.div>
                <h3 className="text-card-h2 sm:text-xl mb-3 text-[#293863] font-display">{step.title}</h3>
                <p className="text-small text-gray-600 font-ui">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}