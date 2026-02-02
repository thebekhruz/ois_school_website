import { useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { MapPin, Building2, Users, Award, Calendar, ArrowRight, Phone, Mail } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useEnrollModal } from '@/app/contexts/EnrollModalContext';

export function CampusesPage() {
  const { language } = useLanguage();
  const [selectedCampus, setSelectedCampus] = useState<'tashkent' | 'samarkand'>('tashkent');
  const { openModal } = useEnrollModal();
  
  const { heroOpacity, heroScale } = useScrollProgress();

  const campuses = [
    { name: 'Tashkent Campus', address: '123 University Street, Tashkent 100000', phone: '+998 71 123 4567', email: 'tashkent@oxbridge.uz' },
    { name: 'Samarkand Campus', address: '456 Education Avenue, Samarkand 140100', phone: '+998 66 234 5678', email: 'samarkand@oxbridge.uz' },
  ];

  const title = language === 'ru' ? 'Наши кампусы' : language === 'uz' ? 'Bizning kampuslar' : 'Our Campuses';

  return (
    <div className="min-h-screen">
      {/* Hero Section - Mobile-First Typography */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] via-[#2d4775] to-[#33559a] text-white px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-hero-h1 md:text-4xl lg:text-5xl font-display font-normal leading-[1.1]"
          >
            {title}
          </motion.h1>
        </div>
      </motion.section>

      {/* Campuses Section - Mobile Stacked, Desktop Grid */}
      <section className="content-section px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Mobile: Stacked Cards */}
          <div className="md:hidden flex flex-col gap-mobile-normal">
            {campuses.map((campus, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                {/* Campus Image */}
                <div className="aspect-video relative overflow-hidden">
                  <ImageWithFallback
                    src={index === 0 ? "https://images.unsplash.com/photo-1760111085279-6c4b6d831acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBvdXRkb29yJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTU4MTg1NHww&ixlib=rb-4.1.0&q=80&w=1080" : "https://images.unsplash.com/photo-1730106469498-a916bbf203e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk1MDE0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"}
                    alt={campus.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#293863]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 compact-p text-white">
                    <h3 className="text-card-h2 font-bold mb-1">{campus.name}</h3>
                    <p className="text-caption text-white/90 flex items-start gap-1">
                      <MapPin className="icon-secondary flex-shrink-0 mt-0.5" />
                      {campus.address}
                    </p>
                  </div>
                </div>
                {/* Campus Info */}
                <div className="compact-p flex flex-col gap-mobile-tight">
                  <div className="flex items-center gap-2">
                    <Phone className="icon-secondary text-[#293863]" />
                    <a href={`tel:${campus.phone}`} className="text-small text-gray-700 hover:text-[#293863]">{campus.phone}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="icon-secondary text-[#293863]" />
                    <a href={`mailto:${campus.email}`} className="text-small text-gray-700 hover:text-[#293863]">{campus.email}</a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-mobile-normal">
            {campuses.map((campus, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow"
              >
                {/* Campus Image */}
                <motion.div 
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={index === 0 ? "https://images.unsplash.com/photo-1760111085279-6c4b6d831acc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBjYW1wdXMlMjBvdXRkb29yJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc2OTU4MTg1NHww&ixlib=rb-4.1.0&q=80&w=1080" : "https://images.unsplash.com/photo-1730106469498-a916bbf203e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzY2hvb2wlMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3Njk1MDE0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"}
                    alt={campus.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#293863]/80 to-transparent" />
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="absolute bottom-6 left-6 text-3xl font-display font-normal text-white"
                  >
                    {campus.name}
                  </motion.h3>
                </motion.div>

                {/* Campus Info */}
                <div className="p-8 space-y-4 bg-gradient-to-br from-[#293863] to-[#2d4775] text-white">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                    className="flex items-start gap-3"
                  >
                    <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
                    <span className="text-white/90 font-ui">{campus.address}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    className="flex items-center gap-3"
                  >
                    <Phone className="w-6 h-6" />
                    <span className="text-white/90 font-ui">{campus.phone}</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    className="flex items-center gap-3"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="text-white/90 font-ui">{campus.email}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Typography */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#953130] to-[#7a261f] text-white text-center">
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={openModal} 
          className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#953130] rounded-full hover:bg-[#f8eb78] hover:text-[#293863] transition-all shadow-lg text-base sm:text-lg font-ui font-semibold min-h-[44px]"
        >
          {language === 'ru' ? 'Забронировать экскурсию' : language === 'uz' ? 'Ekskursiya buyurtma qilish' : 'Book a Tour'}
        </motion.button>
      </section>
    </div>
  );
}