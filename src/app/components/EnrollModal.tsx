import { useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { Check, X, Send } from 'lucide-react';

interface EnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
  const { language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
      });
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Close modal after 3 seconds
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const content = {
    ru: {
      title: 'Записаться в школу',
      subtitle: 'Заполните форму, и мы свяжемся с вами в течение 24 часов',
      form: {
        name: 'ФИО родителя / опекуна',
        email: 'Email',
        phone: 'Телефон',
        submit: 'Отправить заявку',
        submitting: 'Отправка...',
      },
      success: {
        title: 'Спасибо за вашу заявку!',
        message: 'Мы получили вашу форму и свяжемся с вами в ближайшее время.',
      },
    },
    uz: {
      title: 'Maktabga yozilish',
      subtitle: 'Formani to\'ldiring va biz 24 soat ichida siz bilan bog\'lanamiz',
      form: {
        name: 'Ota-ona / vasiyning FISh',
        email: 'Email',
        phone: 'Telefon',
        submit: 'Arizani yuborish',
        submitting: 'Yuborilmoqda...',
      },
      success: {
        title: 'Arizangiz uchun rahmat!',
        message: 'Biz formani qabul qildik va tez orada siz bilan bog\'lanamiz.',
      },
    },
    en: {
      title: 'Enroll Now',
      subtitle: 'Fill out the form and we\'ll contact you within 24 hours',
      form: {
        name: 'Parent / Guardian Name',
        email: 'Email',
        phone: 'Phone',
        submit: 'Submit Application',
        submitting: 'Submitting...',
      },
      success: {
        title: 'Thank You for Your Application!',
        message: 'We\'ve received your form and will contact you shortly.',
      },
    },
  };

  const t = content[language];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-[#2F5DA1] to-[#1a2d4e] text-white px-8 py-6 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
            {t.title}
          </h2>
          <p className="text-white/80">
            {t.subtitle}
          </p>
        </div>

        {/* Content */}
        <div className="p-8">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-white" />
              </div>
              <h3 className="text-2xl mb-4" style={{ fontWeight: 600 }}>{t.success.title}</h3>
              <p className="text-gray-600 text-lg">{t.success.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Parent Information */}
              <div>
                <h3 className="text-lg mb-4 flex items-center gap-2" style={{ fontWeight: 600 }}>
                  {language === 'ru' ? 'Информация о родителе' : language === 'uz' ? 'Ota-ona ma\'lumoti' : 'Parent Information'}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                      {t.form.name} <span className="text-[#AD2D32]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AD2D32] focus:border-transparent"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                        {t.form.phone} <span className="text-[#AD2D32]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AD2D32] focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm mb-2 text-gray-700" style={{ fontWeight: 500 }}>
                        {t.form.email}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#AD2D32] focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#AD2D32] text-white rounded-full hover:bg-[#8B2327] transition-colors flex items-center justify-center gap-3 text-lg"
                style={{ fontWeight: 600 }}
              >
                <Send size={20} />
                {t.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}