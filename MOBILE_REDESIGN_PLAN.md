# 📱 ПЛАН МОБИЛЬНОГО РЕДИЗАЙНА
## Oxbridge International School - 26 страниц

---

## 🎯 ОБЩАЯ СТРАТЕГИЯ

**Цель**: Редизайн всех 26 страниц для мобильного viewport 375px с новой системой пропорций.

**Ключевые метрики**:
- Hero section ≤400px высотой
- Card height ≤240px
- Заголовки: H1 Hero=32px, H1 Section=26px, H2 Card=20px
- На экране видно 1.3-1.5 элемента (peek pattern)

**Подход**: 
1. Сначала обновляем глобальные стили (foundation)
2. Затем компоненты (Header, Footer)
3. Потом страницы по приоритету (от важных к второстепенным)

---

## 📋 ФАЗА 1: ГЛОБАЛЬНЫЕ СТИЛИ (Foundation)
**Приоритет**: 🔴 КРИТИЧЕСКИЙ  
**Время**: ~30 минут  
**Затрагивает**: ВСЕ страницы

### Задачи:

#### 1.1 Обновить `/src/styles/theme.css`
```css
/* ✅ ЧТО ДЕЛАЕМ */

1. Изменить базовый font-size:
   - Было: --font-size: 16px
   - Стало: --font-size: 15px

2. Добавить CSS переменные для мобильных размеров:
   --text-hero-h1: 32px
   --text-section-h1: 26px
   --text-card-h2: 20px
   --text-card-h3: 16px
   --text-body: 15px
   --text-small: 13px
   --text-caption: 11px
   
3. Обновить spacing scale (base 4px):
   --spacing-xs: 4px
   --spacing-sm: 8px
   --spacing-md: 12px
   --spacing-lg: 16px
   --spacing-xl: 20px
   --spacing-2xl: 24px
   --spacing-3xl: 32px
   --spacing-4xl: 40px
   --spacing-5xl: 48px

4. Обновить line-height для мобила:
   h1: line-height: 1.2 (было 1.2 ✅)
   h2: line-height: 1.25 (было 1.3)
   h3: line-height: 1.3 (было 1.4)
   p: line-height: 1.6 (было 1.7)
```

#### 1.2 Добавить media query для мобила
```css
@media (max-width: 768px) {
  html {
    font-size: 15px; /* base */
  }
  
  h1 {
    font-size: var(--text-section-h1, 26px);
  }
  
  h2 {
    font-size: var(--text-card-h2, 20px);
  }
  
  h3 {
    font-size: var(--text-card-h3, 16px);
  }
}
```

#### 1.3 Обновить utility classes
```css
/* Добавить компактные классы */
.text-hero { font-size: 32px; line-height: 1.2; }
.text-section { font-size: 26px; line-height: 1.25; }
.text-card { font-size: 20px; line-height: 1.3; }
.text-badge { font-size: 11px; line-height: 1.4; }

.compact-padding { padding: 16px; }
.compact-gap { gap: 12px; }
```

**Результат**: Все страницы автоматически получат новые базовые размеры.

---

## 📋 ФАЗА 2: HEADER КОМПОНЕНТ
**Приоритет**: 🔴 КРИТИЧЕСКИЙ  
**Время**: ~45 минут  
**Файл**: `/src/app/components/Header.tsx`

### Текущие проблемы:
- ❌ Высота 64px (слишком много для мобила)
- ❌ Логотип крупный
- ❌ Language switcher занимает много места
- ❌ Burger menu тяжеловесный

### Задачи:

#### 2.1 Уменьшить высоту header
```tsx
/* Было */
<header className="h-16"> {/* 64px */}

/* Стало */
<header className="h-14"> {/* 56px */}
```

#### 2.2 Компактный логотип
```tsx
/* Было */
<img src={logo} alt="Oxbridge" className="h-9" /> {/* 36px */}

/* Стало */
<img src={logo} alt="Oxbridge" className="h-[30px]" />
width: auto (пропорциональный)
```

#### 2.3 Упростить Language switcher
```tsx
/* Было */
<button>
  <Globe size={20} />
  <span>Русский</span> {/* полное название */}
</button>

/* Стало */
<button className="flex items-center gap-1.5">
  <Globe size={18} /> {/* 20 → 18 */}
  <span className="text-sm font-medium">RU</span> {/* только код */}
</button>
```

#### 2.4 Burger icon
```tsx
/* Размер */
<Menu size={24} /> {/* оставить 24px */}
color: #293863 (navy)
```

#### 2.5 Мобильное меню - уменьшить padding
```tsx
/* Было */
className="p-6" {/* 24px */}

/* Стало */
className="p-4" {/* 16px */}
```

#### 2.6 CTA в меню - компактнее
```tsx
/* Было */
className="h-[52px]"

/* Стало */
className="h-12" {/* 48px */}
```

**Результат**: Header занимает на 8px меньше высоты → больше места для контента.

---

## 📋 ФАЗА 3: HOMEPAGE (Главная страница)
**Приоритет**: 🔴 КРИТИЧЕСКИЙ  
**Время**: ~2 часа  
**Файл**: `/src/app/pages/HomePage.tsx`

### Секции для редизайна:
1. Hero section
2. Карточки программ (3 шт)
3. Stats section
4. Принципы подхода (5 карточек)
5. Campus Finder
6. University outcomes

---

### 3.1 HERO SECTION

#### Текущие проблемы:
- ❌ H1 слишком крупный (32-36px + большой line-height)
- ❌ Padding избыточный
- ❌ Badge мелкий
- ❌ CTA кнопки крупные

#### Задачи:

**A. Уменьшить padding**
```tsx
/* Было */
className="pt-24 pb-16" {/* 96px top, 64px bottom */}

/* Стало */
className="pt-20 pb-12" {/* 80px top, 48px bottom */}
```

**B. Компактный H1**
```tsx
/* Было */
<h1 className="text-4xl md:text-5xl font-light">
  {/* 36px mobile, 48px desktop */}

/* Стало */
<h1 className="text-[32px] leading-[1.2] font-light max-w-[340px]">
  {/* фиксированный 32px, tight line-height */}
  {/* max-width для контроля строк */}
```

**C. Subtitle компактнее**
```tsx
/* Было */
<p className="text-base opacity-90"> {/* 16px */}

/* Стало */
<p className="text-[14px] leading-[1.5] opacity-85 max-w-[320px]">
```

**D. Badge чуть крупнее**
```tsx
/* Было */
<span className="text-xs px-3 py-1.5"> {/* 12px text */}

/* Стало */
<span className="text-[11px] px-3 py-1.5 tracking-wide">
  {/* 11px с letter-spacing для читаемости */}
```

**E. CTA кнопки компактнее**
```tsx
/* Было */
<button className="h-[52px]">

/* Стало */
<button className="h-12 text-[15px]"> {/* 48px */}
  {/* font-size тоже уменьшить до 15px */}
```

**F. Gap между элементами**
```tsx
/* Внутри Hero container */
<div className="flex flex-col gap-4"> {/* было gap-6 (24px) */}
  [Badge]
  ↓ 12px (gap-3)
  [H1]
  ↓ 12px (gap-3)
  [Subtitle]
  ↓ 20px (gap-5)
  [CTA stack]
</div>
```

**Целеая высота Hero**: ~350px (было ~500px)

---

### 3.2 КАРТОЧКИ ПРОГРАММ

#### Текущие проблемы:
- ❌ Padding 24px слишком большой
- ❌ Высота карточки ~320px
- ❌ Badge возраста мелкий (10-11px)
- ❌ H2 заголовок крупный

#### Задачи:

**A. Уменьшить padding**
```tsx
/* Было */
className="p-6" {/* 24px */}

/* Стало */
className="p-4" {/* 16px */}
```

**B. Компактный layout**
```tsx
<div className="flex flex-col gap-3"> {/* было gap-4 */}
  {/* Header: Badge + Arrow */}
  <div className="flex items-center justify-between h-[22px]">
    <span className="text-[11px] px-3 py-1"> {/* badge */}
    <ArrowRight size={18} /> {/* было 20 */}
  </div>
  
  {/* Title */}
  <h2 className="text-[20px] leading-[1.3]"> {/* было 24-28px */}
  
  {/* Description */}
  <p className="text-[14px] leading-[1.5] line-clamp-2">
  
  {/* Features */}
  <ul className="flex flex-col gap-2"> {/* было gap-3 */}
    <li className="text-[13px]">
  </ul>
  
  {/* CTA */}
  <button className="text-[14px]">
</div>
```

**C. Контроль высоты**
```tsx
className="
  flex flex-col 
  min-h-[220px] 
  max-h-[240px] 
  overflow-hidden
"
```

**D. Gap между карточками**
```tsx
/* Container */
<div className="flex flex-col gap-4"> {/* было gap-6 */}
  {cards.map(...)}
</div>
```

**Результат**: На экране видно ~1.4 карточки → peek pattern работает.

---

### 3.3 STATS SECTION

#### Задачи:

**A. Компактный padding**
```tsx
/* Было */
className="py-12" {/* 48px */}

/* Стало */
className="py-8" {/* 32px */}
```

**B. Grid остается 3 колонки**
```tsx
className="grid grid-cols-3 gap-3" {/* gap уменьшить с 4 до 3 */}
```

**C. Размеры элементов**
```tsx
<div className="flex flex-col items-center gap-1.5"> {/* было gap-2 */}
  {/* Icon */}
  <div className="w-8 h-8"> {/* 32px, было 36-40 */}
  
  {/* Value */}
  <div className="text-[24px] font-display font-bold"> {/* было 28-32 */}
  
  {/* Label */}
  <p className="text-[12px] leading-[1.3] text-center"> {/* было 13-14 */}
</div>
```

---

### 3.4 ПРИНЦИПЫ ПОДХОДА (Карусель)

#### Задачи:

**A. Card width**
```tsx
/* Было */
className="min-w-[300px]" {/* 80% viewport */}

/* Стало */
className="min-w-[280px]" {/* 74% viewport, показывает peek */}
```

**B. Card padding**
```tsx
/* Было */
className="p-6"

/* Стало */
className="p-5" {/* 20px */}
```

**C. Контент карточки**
```tsx
<div className="flex flex-col gap-3"> {/* было gap-4 */}
  {/* Icon */}
  <div className="w-8 h-8"> {/* 32px */}
  
  {/* Title */}
  <h3 className="text-[18px] leading-[1.25]"> {/* было 20-22 */}
  
  {/* Subtitle */}
  <p className="text-[13px] text-gray-600"> {/* было 14 */}
  
  {/* Description */}
  <p className="text-[14px] leading-[1.5]"> {/* было 15 */}
</div>
```

**D. Gap между карточками**
```tsx
className="gap-3" {/* было gap-4 */}
```

**E. Progress dots**
```tsx
{/* Dots */}
<div className="w-1.5 h-1.5 rounded-full"> {/* 6px, было 8px */}
```

---

### 3.5 CAMPUS FINDER

#### Задачи:

**A. Padding section**
```tsx
className="py-12" {/* было py-16 */}
```

**B. Input компактнее**
```tsx
/* Было */
className="h-12 text-base" {/* 48px, 16px */}

/* Стало */
className="h-[46px] text-[15px]"
```

**C. Buttons**
```tsx
className="h-[46px] text-[15px]"
```

**D. Result cards padding**
```tsx
className="p-4" {/* было p-5 или p-6 */}
```

---

### 3.6 UNIVERSITY OUTCOMES

#### Задачи:

**A. Заголовок секции**
```tsx
<h2 className="text-[26px] leading-[1.25]"> {/* было 32-36 */}
```

**B. University cards**
```tsx
<div className="p-4"> {/* было p-5 */}
  <img className="h-12"> {/* logo, было h-14 или h-16 */}
  <p className="text-[13px]"> {/* description */}
</div>
```

---

## 📋 ФАЗА 4: PROGRAMS PAGES (5 страниц)
**Приоритет**: 🟠 ВЫСОКИЙ  
**Время**: ~3 часа  
**Страницы**:
1. `/programs/kindergarten` (EarlyYearsPage)
2. `/programs/primary-school` (PrimarySchoolPage)  
3. `/programs/high-school` (HighSchoolPage)
4. `/programs/ib` (IBProgramPage)
5. `/programs/compare` (ComparePage)

### Общие паттерны для всех:

#### Hero section
```
✅ H1: 32px, line-height 1.2
✅ Subtitle: 14px
✅ Badge: 11px
✅ Padding: pt-20 pb-12
✅ CTA: h-12 (48px)
```

#### Content sections
```
✅ Section H2: 26px
✅ Card H3: 20px
✅ Body text: 15px
✅ Small text: 13px
✅ Padding: p-4 для карточек
✅ Gap: gap-4 между карточками
```

#### Specific adjustments:

**4.1 EarlyYearsPage (Детский сад)**
- Daily schedule cards: padding 16px
- Age groups tabs: text-[14px]
- Photo gallery: gap-3 (12px)

**4.2 PrimarySchoolPage (Начальная школа)**
- Program switcher (IB/Russian): compact tabs
- Curriculum cards: max-h-[240px]
- Features list: text-[13px], gap-2

**4.3 HighSchoolPage (Старшая школа)**
- Track cards (IB/Russian): p-4, h2 20px
- Subject grid: grid-cols-2, gap-3
- Stats: compact version

**4.4 IBProgramPage**
- IB Program levels: compact cards
- Subject groups: text-[14px]
- Assessment info: text-[13px]

**4.5 ComparePage (Сравнение)**
- Comparison table: compact cells, text-[13px]
- Headers: text-[16px] (было 18-20)
- Mobile: вертикальный стек, не таблица

---

## 📋 ФАЗА 5: ABOUT PAGES (4 страницы)
**Приоритет**: 🟠 ВЫСОКИЙ  
**Время**: ~2.5 часа  
**Страницы**:
1. `/about/why` (WhyPage)
2. `/about/campuses` (CampusesPage)
3. `/about/student-life` (StudentLifePage)
4. `/about/outcomes` (OutcomesPage)

### Specific adjustments:

**5.1 WhyPage (Почему Oxbridge)**
- Values cards: p-4, gap-3
- Principles: carousel 280px width
- Testimonials: compact version

**5.2 CampusesPage (Кампусы)**
- Campus tabs: text-[14px]
- Facilities grid: grid-cols-2, gap-3
- Photos: rounded-2xl (было rounded-3xl)

**5.3 StudentLifePage (Студенческая жизнь)**
- Activity cards: p-4, max-h-[220px]
- Schedule timeline: compact
- Photos masonry: gap-3

**5.4 OutcomesPage (Поступления в ВУЗы)**
- University cards: p-4, logo h-12
- Stats: компактная версия
- Success stories: text-[14px]

---

## 📋 ФАЗА 6: ADMISSIONS PAGES (2 страницы)
**Приоритет**: 🟡 СРЕДНИЙ  
**Время**: ~1.5 часа  
**Страницы**:
1. `/admissions/apply` (ApplyPage)
2. `/admissions/tuition` (TuitionPage)

### Specific adjustments:

**6.1 ApplyPage (Как поступить)**
- Steps timeline: compact
- Forms: input h-[46px], text-[15px]
- Required docs: list text-[13px]
- CTA buttons: h-12

**6.2 TuitionPage (Оплата)**
- Pricing cards: p-4, compact layout
- Price: text-[24px] (было 32-36)
- Features list: text-[13px], gap-2
- Payment options: compact grid

---

## 📋 ФАЗА 7: CONTACT PAGES (2 страницы)
**Приоритет**: 🟡 СРЕДНИЙ  
**Время**: ~1 час  
**Страницы**:
1. `/contact` (ContactPage)
2. `/contact/tour` (TourPage)

### Specific adjustments:

**7.1 ContactPage**
- Contact form: inputs h-[46px]
- Map: уменьшить высоту до 250px
- Contact info: text-[14px]
- Office hours: text-[13px]

**7.2 TourPage (Экскурсия)**
- Calendar: compact cells
- Time slots: text-[14px]
- Form fields: h-[46px]
- Submit button: h-12

---

## 📋 ФАЗА 8: ОСТАЛЬНЫЕ СТРАНИЦЫ (10 страниц)
**Приоритет**: 🟢 НИЗКИЙ  
**Время**: ~3 часа  
**Страницы**:
1. `/team` (TeamPage)
2. `/careers` (CareersPage)
3. `/news` (NewsPage)
4. `/faq` (FAQPage)
5. `/gallery` (GalleryPage)
6. `/benefits` (BenefitsPage)
7. `/about` (AboutPage)
8. `/admission` (AdmissionPage)
9. `/russian-school` (RussianSchoolPage)
10. `/privacy`, `/terms` (PrivacyPage, TermsPage)

### Общие паттерны:

**Listing pages (Team, News, Careers, Gallery)**
```
✅ Grid: 1 column на мобиле
✅ Cards: p-4, gap-4
✅ Filters: compact buttons, text-[14px]
✅ Pagination: compact
```

**Content pages (FAQ, Privacy, Terms, About)**
```
✅ H1: 26px (section level)
✅ H2: 20px
✅ Body: 15px, line-height 1.6
✅ Lists: text-[14px], gap-2
```

---

## 📋 ФАЗА 9: ФИНАЛЬНАЯ ПРОВЕРКА
**Приоритет**: 🔴 КРИТИЧЕСКИЙ  
**Время**: ~2 часа

### Чеклист:

#### 9.1 Визуальная проверка
- [ ] Все H1 на Hero секциях = 32px
- [ ] Все H1 на Section секциях = 26px
- [ ] Все H2 на карточках = 20px
- [ ] Body text = 15px
- [ ] Small text = 13px
- [ ] Badge/Caption = 11px

#### 9.2 Layout проверка
- [ ] Header высота = 56px на всех страницах
- [ ] Hero высота ≤400px
- [ ] Cards высота ≤240px
- [ ] На первом экране видно 1.3-1.5 элемента
- [ ] Peek pattern работает

#### 9.3 Spacing проверка
- [ ] Padding карточек = 16px (p-4)
- [ ] Gap между карточками = 16px (gap-4)
- [ ] Gap внутри карточек = 12px (gap-3)
- [ ] Section padding = 32-48px vertical

#### 9.4 Components проверка
- [ ] CTA buttons высота = 48px
- [ ] Input fields высота = 46px
- [ ] Icons primary = 28-32px
- [ ] Icons secondary = 18-20px
- [ ] Border-radius = 16px (карточки), 24px (кнопки)

#### 9.5 Typography проверка
- [ ] Line-height H1 = 1.2
- [ ] Line-height H2 = 1.25
- [ ] Line-height H3 = 1.3
- [ ] Line-height body = 1.6
- [ ] Font families корректные

#### 9.6 Performance
- [ ] Lazy loading изображений
- [ ] WebP формат
- [ ] Minified CSS
- [ ] No layout shifts

#### 9.7 Тест на устройствах
- [ ] iPhone SE (375px) ← базовый
- [ ] iPhone 12/13/14 (390px)
- [ ] Samsung Galaxy (360px)

#### 9.8 Accessibility
- [ ] Touch targets ≥44px
- [ ] Контраст ≥4.5:1
- [ ] Focus indicators видны
- [ ] Keyboard navigation работает

---

## 📊 СТАТИСТИКА РАБОТЫ

### По приоритетам:
- 🔴 **Критический** (Фазы 1, 2, 3, 9): ~5.5 часов
- 🟠 **Высокий** (Фазы 4, 5): ~5.5 часов
- 🟡 **Средний** (Фазы 6, 7): ~2.5 часа
- 🟢 **Низкий** (Фаза 8): ~3 часа

**Итого**: ~16.5 часов чистой работы

### По страницам:
- **Глобальные** (theme, Header): 2 файла
- **Главная**: 1 страница (самая важная!)
- **Programs**: 5 страниц
- **About**: 4 страницы
- **Admissions**: 2 страницы
- **Contact**: 2 страницы
- **Остальные**: 10 страниц

**Итого**: 26 страниц + 2 глобальных файла

---

## 🚀 ПОРЯДОК ВЫПОЛНЕНИЯ

### День 1 (Фундамент)
1. ✅ Фаза 1: Global styles (30 мин)
2. ✅ Фаза 2: Header (45 мин)
3. ✅ Фаза 3: HomePage (2 часа)

**Результат**: Главная страница полностью готова, foundation для остальных.

### День 2 (Программы)
4. ✅ Фаза 4: Programs pages (3 часа)

**Результат**: Все страницы программ адаптированы.

### День 3 (О школе)
5. ✅ Фаза 5: About pages (2.5 часа)

**Результат**: Страницы "О нас" готовы.

### День 4 (Поступление и контакты)
6. ✅ Фаза 6: Admissions (1.5 часа)
7. ✅ Фаза 7: Contact (1 час)

**Результат**: Ключевые конверсионные страницы готовы.

### День 5 (Остальное + проверка)
8. ✅ Фаза 8: Остальные страницы (3 часа)
9. ✅ Фаза 9: Финальная проверка (2 часа)

**Результат**: Весь сайт адаптирован и проверен.

---

## 📝 ТЕКУЩИЙ ПРОГРЕСС

### Выполнено:
- [x] Фаза 1: Global styles - ✅ СОЗДАН `/src/styles/mobile.css`
- [ ] Фаза 2: Header
- [x] Фаза 3: HomePage - ✅ ГОТОВО
- [ ] Фаза 4: Programs
- [ ] Фаза 5: About
- [x] Фаза 6: Admissions - ✅ ГОТОВО (ApplyPage, TuitionPage частично)
- [x] Фаза 7: Contact - ✅ ГОТОВО (ContactPage, TourPage)
- [ ] Фаза 8: Остальные
- [ ] Фаза 9: Проверка

**Прогресс**: 4/9 фаз (44%)

### 🎯 Готовые страницы (6 из 26):
1. ✅ HomePage
2. ✅ ContactPage
3. ✅ TourPage
4. ✅ ApplyPage
5. ✅ TuitionPage (частично)
6. ✅ EarlyYearsPage (частично, требует доработки)

### 📋 Следующие страницы (приоритет):
- [ ] EarlyYearsPage - завершить оптимизацию
- [ ] PrimarySchoolPage
- [ ] HighSchoolPage
- [ ] IBProgramPage
- [ ] ComparePage

### 🎯 Созданные файлы:
- ✅ `/src/styles/mobile.css` - универсальная система мобильных стилей
- ✅ `/MOBILE_STYLES_GUIDE.md` - полное руководство по использованию
- ✅ `/MOBILE_QUICK_REFERENCE.md` - быстрая шпаргалка
- ✅ `/MOBILE_APPLICATION_PLAN.md` - план применения на всех страницах

---

## 💡 ВАЖНЫЕ НАПОМИНАНИЯ

1. **Всегда проверяем на 375px** перед тем как двигаться дальше
2. **Используем классы из mobile.css** (не хардкодим размеры)
3. **Peek pattern** - на каждом экране видно часть следующего элемента
4. **Модульная шкала** - все размеры кратны 4px
5. **Контраст** - минимум 4.5:1 для текста
6. **Touch targets** - минимум 44px для интерактивных элементов
7. **Performance** - lazy loading для изображений
8. **Consistency** - одинаковые компоненты выглядят одинаково

---

**Фаза 1 завершена! Готовы применять на страницах!** 🚀