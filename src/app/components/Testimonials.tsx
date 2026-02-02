import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { motion } from 'motion/react';

interface TestimonialProps {
  ageGroup?: 'kindergarten' | 'primary' | 'high' | 'all';
}

export function Testimonials({ ageGroup = 'all' }: TestimonialProps) {
  const { language } = useLanguage();

  const testimonials = {
    ru: {
      title: 'Что говорят родители',
      subtitle: '99% родителей удовлетворены безопасностью и поддержкой',
      items: {
        kindergarten: [
          {
            name: 'Ольга Петрова',
            role: 'Мама Алисы, 4 года',
            text: 'Моя дочь каждое утро бежит в школу с радостью. Учителя действительно любят детей, а не просто работают с ними. Это чувствуется в каждой мелочи.',
            type: 'first-time',
          },
          {
            name: 'Джамиля Каримова',
            role: 'Мама Тимура, 5 лет',
            text: 'Я работающая мама и переживала, что не успеваю "развивать" сына дома. Но в Oxbridge мне сказали: "Ваша задача - любить и проводить качественное время. Академическое мы возьмем на себя." И они действительно взяли!',
            type: 'career-focused',
          },
          {
            name: 'Александр Иванов',
            role: 'Папа Марка, 3 года',
            text: 'Мой сын научился говорить "Мне не нравится, пожалуйста, перестань" - в 3 года! Это не просто детский сад, это место, где формируются будущие взрослые.',
            type: 'values-driven',
          },
        ],
        primary: [
          {
            name: 'Наргиза Ахмедова',
            role: 'Мама Али, 3 класс',
            text: 'Мой сын перешел из другой школы, где отставал по математике. Здесь его не стыдили, а спокойно включили в группу поддержки. Через 8 недель он догнал класс. Теперь математика - его любимый предмет!',
            type: 'anxious-transition',
          },
          {
            name: 'Елена Смирнова',
            role: 'Мама Софии, 5 класс',
            text: 'Дочь занимается керамикой, плаванием и робототехникой - и при этом отличная успеваемость. Школа научила ее планировать время. Это навык на всю жизнь.',
            type: 'holistic',
          },
          {
            name: 'Фарход Расулов',
            role: 'Папа Дияра, 2 класс',
            text: 'Учитель позвонил мне в октябре и сказал: "Дияр немного отстает по чтению, мы начали с ним дополнительные занятия." Я даже не знал о проблеме - они просто взяли и решили ее!',
            type: 'academic-focused',
          },
        ],
        high: [
          {
            name: 'Марина Волкова',
            role: 'Мама Артема, 11 класс (DP1)',
            text: 'Сын не поступил в свой первый выбор университета. Я была в панике, но университетский консультант спокойно достал "План B" - и это оказался идеальный вариант для Артема. Сейчас он на стипендии в Праге и счастлив!',
            type: 'anxious-achievement',
          },
          {
            name: 'Жахонгир Мирзаев',
            role: 'Папа Азизы, 12 класс (DP2)',
            text: 'Дочь выбрала предметы DP, которые ей интересны, а не те, которые "престижно". Результат? Она работает в два раза усерднее, потому что ей реально нравится то, что она изучает.',
            type: 'character-development',
          },
          {
            name: 'Анна Белова',
            role: 'Мама Даниила, 10 класс (MYP5)',
            text: 'Сын получает IB Diploma И Государственный сертификат. Это открывает двери и в европейские университеты, и в локальные. Максимум возможностей без стресса выбора "или-или".',
            type: 'university-focused',
          },
        ],
      },
    },
    uz: {
      title: 'Ota-onalar nima deydi',
      subtitle: 'Ota-onalarning 99% xavfsizlik va qo\'llab-quvvatlashdan mamnun',
      items: {
        kindergarten: [
          {
            name: 'Olga Petrova',
            role: 'Alisa onasi, 4 yosh',
            text: 'Qizim har kuni maktabga quvonch bilan yuguradi. O\'qituvchilar haqiqatan ham bolalarni yaxshi ko\'radilar, faqat ish bilan shug\'ullanmaydilar. Bu har bir mayda narsada seziladi.',
            type: 'first-time',
          },
          {
            name: 'Jamila Karimova',
            role: 'Temur onasi, 5 yosh',
            text: 'Men ishlaydigan onaman va o\'g\'limni uyda "rivojlantirish" uchun vaqtim yo\'qligidan xavotirlanardim. Lekin Oxbridgeda menga: "Sizning vazifangiz - sevish va sifatli vaqt o\'tkazish. Akademikni biz o\'zimiz qilamiz." dediler. Va ular haqiqatan ham qilishdi!',
            type: 'career-focused',
          },
          {
            name: 'Aleksandr Ivanov',
            role: 'Mark otasi, 3 yosh',
            text: 'O\'g\'lim "Menga yoqmayapti, iltimos to\'xtang" deyishni o\'rgandi - 3 yoshida! Bu oddiy bolalar bog\'chasi emas, bu kelajak kattalarni shakllantiradigan joy.',
            type: 'values-driven',
          },
        ],
        primary: [
          {
            name: 'Nargiza Ahmedova',
            role: 'Ali onasi, 3-sinf',
            text: 'O\'g\'lim matematikadan orqada qolgan boshqa maktabdan o\'tdi. Bu yerda uni uyaltirmadi, balki tinchgina qo\'llab-quvvatlash guruhiga kiritdi. 8 haftadan keyin u sinfni quvib yetdi. Endi matematika uning sevimli fani!',
            type: 'anxious-transition',
          },
          {
            name: 'Elena Smirnova',
            role: 'Sofia onasi, 5-sinf',
            text: 'Qizim kulolchilik, suzish va robototexnika bilan shug\'ullanadi - va shu bilan birga ajoyib o\'zlashtirish. Maktab unga vaqtni rejalashtirishni o\'rgatdi. Bu umr bo\'yi kerak bo\'ladigan ko\'nikma.',
            type: 'holistic',
          },
          {
            name: 'Farxod Rasulov',
            role: 'Diyar otasi, 2-sinf',
            text: 'O\'qituvchi oktyabrda menga qo\'ng\'iroq qilib: "Diyar o\'qishda biroz orqada, biz u bilan qo\'shimcha mashg\'ulotlar boshladik" dedi. Men muammo borligini ham bilmasdim - ular shunchaki olib, hal qilishdi!',
            type: 'academic-focused',
          },
        ],
        high: [
          {
            name: 'Marina Volkova',
            role: 'Artyom onasi, 11-sinf (DP1)',
            text: 'O\'g\'lim birinchi tanlov universitetga kira olmadi. Men vahimaga tushdim, lekin universitet maslahatchisi xotirjam "B Reja"ni olib chiqdi - va bu Artyom uchun ideal variant bo\'ldi. Hozir u Pragada stipendiyada va baxtli!',
            type: 'anxious-achievement',
          },
          {
            name: 'Jahongir Mirzayev',
            role: 'Aziza otasi, 12-sinf (DP2)',
            text: 'Qizim "nufuzli" fanlar emas, balki qiziqarli fanlarni tanladi. Natija? U ikki barobar ko\'proq ishlayapti, chunki u o\'rganayotgan narsasi unga haqiqatan yoqadi.',
            type: 'character-development',
          },
          {
            name: 'Anna Belova',
            role: 'Daniil onasi, 10-sinf (MYP5)',
            text: 'O\'g\'lim IB Diploma VA Davlat sertifikatini olmoqda. Bu Yevropa universitetlariga ham, mahalliy universitetlariga ham eshiklarni ochadi. "Yoki-yoki" tanlash stressisiz maksimal imkoniyatlar.',
            type: 'university-focused',
          },
        ],
      },
    },
    en: {
      title: 'What Parents Say',
      subtitle: '99% parent satisfaction on safety and support',
      items: {
        kindergarten: [
          {
            name: 'Olga Petrova',
            role: 'Mom of Alisa, age 4',
            text: 'My daughter runs to school with joy every morning. Teachers truly love children, not just work with them. You can feel it in every little thing.',
            type: 'first-time',
          },
          {
            name: 'Jamila Karimova',
            role: 'Mom of Timur, age 5',
            text: 'I\'m a working mom and worried I wasn\'t "developing" my son enough at home. But at Oxbridge they said: "Your job is to love and spend quality time. We\'ve got academics covered." And they really did!',
            type: 'career-focused',
          },
          {
            name: 'Alexander Ivanov',
            role: 'Dad of Mark, age 3',
            text: 'My son learned to say "I don\'t like that, please stop" - at age 3! This isn\'t just daycare, it\'s where future adults are formed.',
            type: 'values-driven',
          },
        ],
        primary: [
          {
            name: 'Nargiza Ahmedova',
            role: 'Mom of Ali, Grade 3',
            text: 'My son transferred from another school where he was behind in math. Here they didn\'t shame him - they calmly put him in a support group. After 8 weeks he caught up. Now math is his favorite subject!',
            type: 'anxious-transition',
          },
          {
            name: 'Elena Smirnova',
            role: 'Mom of Sofia, Grade 5',
            text: 'My daughter does ceramics, swimming, and robotics - while maintaining excellent grades. School taught her time management. That\'s a skill for life.',
            type: 'holistic',
          },
          {
            name: 'Farhod Rasulov',
            role: 'Dad of Diyar, Grade 2',
            text: 'Teacher called me in October and said: "Diyar is a bit behind in reading, we\'ve started extra sessions with him." I didn\'t even know there was a problem - they just took care of it!',
            type: 'academic-focused',
          },
        ],
        high: [
          {
            name: 'Marina Volkova',
            role: 'Mom of Artem, Grade 11 (DP1)',
            text: 'Son didn\'t get into his first-choice university. I panicked, but the counselor calmly pulled out "Plan B" - and it turned out to be perfect for Artem. Now he\'s on scholarship in Prague and thriving!',
            type: 'anxious-achievement',
          },
          {
            name: 'Jahongir Mirzaev',
            role: 'Dad of Aziza, Grade 12 (DP2)',
            text: 'Daughter chose DP subjects she\'s interested in, not what\'s "prestigious." Result? She works twice as hard because she genuinely loves what she\'s studying.',
            type: 'character-development',
          },
          {
            name: 'Anna Belova',
            role: 'Mom of Daniil, Grade 10 (MYP5)',
            text: 'Son is getting both IB Diploma AND State Certificate. This opens doors to European and local universities. Maximum options without the stress of choosing "either-or".',
            type: 'university-focused',
          },
        ],
      },
    },
  };

  const t = testimonials[language];
  const items = ageGroup === 'all' 
    ? [...t.items.kindergarten.slice(0, 1), ...t.items.primary.slice(0, 1), ...t.items.high.slice(0, 1)]
    : t.items[ageGroup];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16 px-6">
          <div className="inline-block px-4 py-1.5 bg-[#2F5DA1]/10 text-[#2F5DA1] rounded-full mb-4 md:mb-6 text-sm">
            {language === 'ru' ? 'Отзывы' : language === 'uz' ? 'Fikrlar' : 'Testimonials'}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 font-display font-light text-[#293863]">
            {t.title}
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex gap-4 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
            {items.map((testimonial, index) => (
              <motion.div
                key={index}
                className="min-w-[85vw] bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative snap-start"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Quote className="absolute top-4 right-4 text-[#FCDA49]/20" size={32} />
                
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#FCDA49] text-[#FCDA49]" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed italic relative z-10 line-clamp-6">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-gray-100 pt-3">
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-3 px-6">
            {language === 'ru' ? '← Листайте →' : language === 'uz' ? '← Aylantiring →' : '← Swipe →'}
          </p>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 px-6">
          {items.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 lg:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Quote className="absolute top-6 right-6 text-[#FCDA49]/20" size={48} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#FCDA49] text-[#FCDA49]" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic relative z-10 text-sm lg:text-base">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}