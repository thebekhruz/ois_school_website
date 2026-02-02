# 📋 ПЛАН ПРИМЕНЕНИЯ МОБИЛЬНЫХ СТИЛЕЙ

## 🎯 ОБЩАЯ ИНФОРМАЦИЯ

**Созданы файлы:**
- ✅ `/src/styles/mobile.css` - универсальная система стилей
- ✅ `/MOBILE_STYLES_GUIDE.md` - полное руководство
- ✅ `/MOBILE_QUICK_REFERENCE.md` - быстрая шпаргалка

**Файл автоматически подключен** через `/src/styles/index.css`

---

## 📊 СПИСОК ВСЕХ 26 СТРАНИЦ

### 🔴 Критичные (приоритет 1)
1. ✅ **HomePage.tsx** - главная страница (уже оптимизирована)
2. **ContactPage.tsx** - контактная страница
3. **ApplyPage.tsx** - поступление
4. **TuitionPage.tsx** - оплата (частично оптимизирована)

### 🟠 Высокий приоритет (приоритет 2)
5. **EarlyYearsPage.tsx** - детский сад (частично оптимизирована)
6. **PrimarySchoolPage.tsx** - начальная школа
7. **HighSchoolPage.tsx** - старшая школа
8. **IBProgramPage.tsx** - IB программа
9. **ComparePage.tsx** - сравнение программ
10. **WhyPage.tsx** - почему Oxbridge
11. **CampusesPage.tsx** - кампусы
12. **StudentLifePage.tsx** - студенческая жизнь
13. **OutcomesPage.tsx** - поступления в ВУЗы

### 🟡 Средний приоритет (приоритет 3)
14. **TourPage.tsx** - экскурсия
15. **AboutPage.tsx** - о школе
16. **AdmissionPage.tsx** - общая страница поступления
17. **BenefitsPage.tsx** - преимущества
18. **RussianSchoolPage.tsx** - русская программа

### 🟢 Низкий приоритет (приоритет 4)
19. **TeamPage.tsx** - команда
20. **CareersPage.tsx** - карьера
21. **NewsPage.tsx** - новости
22. **FAQPage.tsx** - часто задаваемые вопросы
23. **GalleryPage.tsx** - галерея
24. **PrivacyPage.tsx** - политика конфиденциальности
25. **TermsPage.tsx** - условия использования
26. **NotFoundPage.tsx** - 404 страница

---

## 🎨 ПАТТЕРНЫ ПРИМЕНЕНИЯ ПО ТИПАМ СТРАНИЦ

### 📄 Тип 1: Hero + Content Sections (большинство страниц)

**Структура:**
```tsx
<div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
  {/* Hero */}
  <section className="hero-section hero-wrapper bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white">
    <div className="max-w-5xl mx-auto px-4 text-center">
      <span className="hero-badge">Badge</span>
      <h1 className="hero-title text-hero-h1">Title</h1>
      <p className="hero-subtitle">Subtitle</p>
      <button className="cta-button">CTA</button>
    </div>
  </section>

  {/* Content */}
  <section className="content-section px-4">
    <h2 className="text-section-h1">Section</h2>
    <div className="grid-mobile-1 gap-mobile-normal">
      {/* Cards */}
    </div>
  </section>
</div>
```

**Применяется к:**
- EarlyYearsPage
- PrimarySchoolPage
- HighSchoolPage
- IBProgramPage
- WhyPage
- CampusesPage
- StudentLifePage
- OutcomesPage
- BenefitsPage
- RussianSchoolPage

---

### 📄 Тип 2: Form Pages (формы)

**Структура:**
```tsx
<section className="content-section px-4">
  <h2 className="text-section-h1 mb-6">Form Title</h2>
  
  <form className="max-w-2xl mx-auto">
    <div className="form-group-mobile">
      <label className="form-label-mobile">Name</label>
      <input className="form-input-mobile" />
      <span className="form-helper-mobile">Helper</span>
    </div>
    
    <button className="cta-button w-full">Submit</button>
  </form>
</section>
```

**Применяется к:**
- ApplyPage
- ContactPage
- TourPage

---

### 📄 Тип 3: Listing Pages (списки)

**Структура:**
```tsx
<section className="content-section px-4">
  <h2 className="text-section-h1 mb-6">List Title</h2>
  
  {/* Filters */}
  <div className="flex gap-2 mb-6 overflow-x-auto">
    <button className="text-small px-4 py-2">Filter</button>
  </div>
  
  {/* Grid */}
  <div className="grid-mobile-1 gap-mobile-normal">
    {items.map((item) => (
      <div className="card-mobile compact-p">
        <h3 className="text-card-h2">{item.title}</h3>
        <p className="text-small">{item.description}</p>
      </div>
    ))}
  </div>
</section>
```

**Применяется к:**
- TeamPage
- NewsPage
- CareersPage
- GalleryPage

---

### 📄 Тип 4: Content Pages (текстовые)

**Структура:**
```tsx
<div className="min-h-screen bg-white">
  <section className="content-section px-4">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-section-h1 mb-6">Page Title</h1>
      
      <div className="space-y-6">
        <h2 className="text-card-h2">Section</h2>
        <p className="text-body">Content...</p>
        
        <ul className="space-y-2">
          <li className="text-small">Item</li>
        </ul>
      </div>
    </div>
  </section>
</div>
```

**Применяется к:**
- AboutPage
- AdmissionPage
- FAQPage
- PrivacyPage
- TermsPage

---

### 📄 Тип 5: Special Pages

**ComparePage** - таблица сравнения:
```tsx
<table className="table-mobile">
  <tbody>
    <tr>
      <td data-label="Program">Early Years</td>
      <td data-label="Age">2-6</td>
    </tr>
  </tbody>
</table>
```

**TuitionPage** - калькулятор стоимости:
```tsx
<div className="grid-mobile-1 gap-mobile-normal">
  {/* Calculator cards */}
  <div className="card-mobile compact-p">
    <h3 className="text-card-h2">Step 1</h3>
    {/* Content */}
  </div>
</div>
```

---

## ✅ ЧЕКЛИСТ ПРИМЕНЕНИЯ НА СТРАНИЦЕ

При оптимизации каждой страницы проверяйте:

### Hero Section
- [ ] Обернуть в `hero-section hero-wrapper`
- [ ] H1 → `hero-title text-hero-h1`
- [ ] Subtitle → `hero-subtitle`
- [ ] Badge → `hero-badge`
- [ ] CTA → `cta-button`
- [ ] Padding → автоматически из `hero-section`

### Content Sections
- [ ] Обернуть в `content-section`
- [ ] H2 → `text-section-h1`
- [ ] Body text → `text-body`
- [ ] Small text → `text-small`

### Cards
- [ ] Container → `grid-mobile-1` или `carousel-mobile`
- [ ] Card → `card-mobile compact-p`
- [ ] Card H3 → `text-card-h2`
- [ ] Card description → `text-small`
- [ ] Gap → `gap-mobile-normal`

### Forms
- [ ] Input → `form-input-mobile`
- [ ] Label → `form-label-mobile`
- [ ] Group → `form-group-mobile`
- [ ] Helper → `form-helper-mobile`
- [ ] Error → `form-error-mobile`

### Buttons
- [ ] CTA → `cta-button`
- [ ] Height → автоматически 48px
- [ ] Touch target → минимум 44px

### Images
- [ ] Full width → `responsive-mobile`
- [ ] Avatar → `avatar-mobile`
- [ ] Card image → `card-image-mobile`

### Stats
- [ ] Container → `stats-mobile`
- [ ] Item → `stat-item-mobile`
- [ ] Value → `stat-value-mobile`
- [ ] Label → `stat-label-mobile`
- [ ] Icon → `stat-icon-mobile`

### Tables
- [ ] Mobile table → `table-mobile`
- [ ] Data labels → `data-label` attribute

### Carousels
- [ ] Container → `carousel-mobile`
- [ ] Wide cards → `carousel-mobile-wide`
- [ ] Narrow cards → `carousel-mobile-narrow`

---

## 🚀 ПОРЯДОК ОПТИМИЗАЦИИ

### Этап 1: Критичные страницы (1-2 дня)
1. ✅ HomePage - готово
2. ContactPage - применить form pattern
3. ApplyPage - применить form pattern
4. ✅ TuitionPage - готово (частично)

### Этап 2: Программы (2-3 дня)
5. EarlyYearsPage - hero + content
6. PrimarySchoolPage - hero + content
7. HighSchoolPage - hero + content
8. IBProgramPage - hero + content
9. ComparePage - table pattern

### Этап 3: О школе (1-2 дня)
10. WhyPage - hero + carousel
11. CampusesPage - hero + tabs
12. StudentLifePage - hero + gallery
13. OutcomesPage - hero + stats

### Этап 4: Остальные (2-3 дня)
14-26. Все остальные страницы

---

## 💡 ПРИМЕРЫ КОНКРЕТНЫХ ИЗМЕНЕНИЙ

### Пример 1: Hero Section

**До:**
```tsx
<section className="relative bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white pt-24 pb-16 px-4">
  <h1 className="text-4xl md:text-5xl font-display font-normal mb-4">
    Title
  </h1>
  <p className="text-base opacity-90">
    Subtitle
  </p>
</section>
```

**После:**
```tsx
<section className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white px-4">
  <div className="max-w-5xl mx-auto text-center">
    <h1 className="hero-title text-hero-h1 font-display font-normal">
      Title
    </h1>
    <p className="hero-subtitle">
      Subtitle
    </p>
  </div>
</section>
```

---

### Пример 2: Cards Grid

**До:**
```tsx
<div className="grid grid-cols-1 gap-6">
  <div className="bg-white p-6 rounded-2xl shadow-lg">
    <h3 className="text-2xl font-display mb-4">Card Title</h3>
    <p className="text-base text-gray-600">Description</p>
  </div>
</div>
```

**После:**
```tsx
<div className="grid-mobile-1 gap-mobile-normal">
  <div className="card-mobile compact-p bg-white rounded-2xl shadow-lg">
    <h3 className="text-card-h2 font-display">Card Title</h3>
    <p className="text-small text-gray-600">Description</p>
  </div>
</div>
```

---

### Пример 3: Form

**До:**
```tsx
<form>
  <div className="mb-6">
    <label className="block mb-2 font-semibold">Name</label>
    <input className="w-full h-12 px-4 border rounded-lg" />
  </div>
  <button className="w-full h-14 bg-[#293863] text-white rounded-xl">
    Submit
  </button>
</form>
```

**После:**
```tsx
<form>
  <div className="form-group-mobile">
    <label className="form-label-mobile">Name</label>
    <input className="form-input-mobile" />
  </div>
  <button className="cta-button w-full bg-[#293863] text-white rounded-xl">
    Submit
  </button>
</form>
```

---

### Пример 4: Stats Section

**До:**
```tsx
<div className="grid grid-cols-3 gap-4">
  <div className="text-center">
    <Trophy className="w-10 h-10 mx-auto mb-2" />
    <div className="text-3xl font-bold">95%</div>
    <p className="text-sm">Success Rate</p>
  </div>
</div>
```

**После:**
```tsx
<div className="stats-mobile">
  <div className="stat-item-mobile">
    <Trophy className="stat-icon-mobile" />
    <div className="stat-value-mobile">95%</div>
    <p className="stat-label-mobile">Success Rate</p>
  </div>
</div>
```

---

### Пример 5: Carousel

**До:**
```tsx
<div className="flex gap-4 overflow-x-auto">
  <div className="min-w-[300px] bg-white p-6 rounded-xl">
    <h3 className="text-xl mb-3">Item</h3>
  </div>
</div>
```

**После:**
```tsx
<div className="carousel-mobile">
  <div className="card-mobile compact-p bg-white rounded-xl">
    <h3 className="text-card-h2">Item</h3>
  </div>
</div>
```

---

## 🎯 МЕТРИКИ УСПЕХА

После применения стилей проверяйте:

1. **Hero высота** ≤ 400px на мобиле
2. **Card высота** ≤ 240px
3. **Typography** соответствует системе (32/26/20/16/15/13/11px)
4. **Spacing** кратен 4px
5. **Touch targets** ≥ 44px
6. **Peek pattern** работает в каруселях
7. **На первом экране** видно 1.3-1.5 элемента

---

## 📚 ПОЛЕЗНЫЕ ССЫЛКИ

- `/src/styles/mobile.css` - основной файл стилей
- `/MOBILE_STYLES_GUIDE.md` - подробная документация
- `/MOBILE_QUICK_REFERENCE.md` - быстрая шпаргалка
- `/MOBILE_REDESIGN_PLAN.md` - общий план редизайна

---

✅ **Готово к применению на всех 26 страницах!**
