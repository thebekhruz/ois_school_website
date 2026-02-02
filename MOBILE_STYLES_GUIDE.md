# 📱 РУКОВОДСТВО ПО МОБИЛЬНЫМ СТИЛЯМ
## Oxbridge International School

---

## 🎯 ОБЗОР

Файл `/src/styles/mobile.css` содержит **универсальную систему мобильных стилей**, основанную на лучших практиках с главной страницы и страниц программ.

**Цели**:
- ✅ Консистентность дизайна на всех 26 страницах
- ✅ Решение проблем с крупными заголовками
- ✅ Оптимизация spacing для мобильных устройств
- ✅ Touch-friendly интерфейс (минимум 44px)
- ✅ Peek pattern для каруселей

---

## 📐 СИСТЕМА ТИПОГРАФИКИ

### Иерархия размеров

```css
/* Hero H1 - только для hero секций */
.text-hero-h1
→ 32px, line-height 1.2

/* Section H1 - заголовки секций */
.text-section-h1
→ 26px, line-height 1.25

/* Card H2 - заголовки карточек */
.text-card-h2
→ 20px, line-height 1.3

/* Card H3 - подзаголовки */
.text-card-h3
→ 16px, line-height 1.3

/* Body - основной текст */
.text-body
→ 15px, line-height 1.6

/* Small - второстепенный текст */
.text-small
→ 13px, line-height 1.5

/* Caption/Badge - метки и бейджи */
.text-caption, .text-badge
→ 11px, line-height 1.4
```

### Примеры использования

```tsx
// Hero секция
<section className="hero-section">
  <h1 className="text-hero-h1">Главный заголовок</h1>
  <p className="hero-subtitle">Подзаголовок</p>
</section>

// Секция контента
<section className="content-section">
  <h2 className="text-section-h1">Заголовок секции</h2>
  <p className="text-body">Основной текст</p>
</section>

// Карточка
<div className="card-mobile">
  <h3 className="text-card-h2">Заголовок карточки</h3>
  <p className="text-small">Описание</p>
  <span className="text-badge">Метка</span>
</div>
```

---

## 📏 СИСТЕМА SPACING

### Padding классы

```css
.compact-p     → padding: 16px (все стороны)
.compact-px    → padding: 0 16px (горизонтальный)
.compact-py    → padding: 16px 0 (вертикальный)
```

### Gap классы

```css
.gap-mobile-tight   → gap: 12px (элементы близко)
.gap-mobile-normal  → gap: 16px (стандартный)
.gap-mobile-loose   → gap: 20px (элементы далеко)
```

### Примеры

```tsx
// Карточка с компактным padding
<div className="card-mobile compact-p gap-mobile-tight">
  <h3>Заголовок</h3>
  <p>Текст</p>
</div>

// Контейнер с нормальным gap
<div className="flex flex-col gap-mobile-normal">
  {items.map(...)}
</div>
```

---

## 🎴 КАРТОЧКИ

### Базовые стили

```tsx
// Program card (программы)
<div className="program-card card-mobile compact-p gap-mobile-tight">
  {/* min-height: 220px, max-height: 240px */}
</div>

// Feature card (функции)
<div className="feature-card card-mobile compact-p">
  {/* max-height: 240px */}
</div>

// Content card (контент)
<div className="content-card card-mobile compact-p">
  {/* max-height: 280px */}
</div>
```

### Пример полной карточки программы

```tsx
<div className="program-card bg-white rounded-xl shadow-lg border-2 border-gray-100">
  <div className="flex flex-col gap-mobile-tight">
    {/* Header */}
    <div className="flex items-center justify-between">
      <span className="text-badge bg-[#293863]/10 text-[#293863] px-3 py-1 rounded-full">
        Возраст 2-6 лет
      </span>
      <ArrowRight className="icon-secondary text-gray-400" />
    </div>
    
    {/* Title */}
    <h3 className="text-card-h2 font-display font-normal text-[#293863]">
      Детский сад
    </h3>
    
    {/* Description */}
    <p className="text-small text-gray-600 truncate-2">
      Безопасная среда для развития вашего малыша
    </p>
    
    {/* Features */}
    <ul className="flex flex-col gap-2">
      <li className="text-small flex items-center gap-2">
        <Check className="icon-small text-[#953130]" />
        Методика Монтессори
      </li>
    </ul>
    
    {/* CTA */}
    <button className="cta-button bg-[#293863] text-white rounded-xl">
      Узнать больше
    </button>
  </div>
</div>
```

---

## 🎠 КАРУСЕЛИ (Horizontal Scroll)

### Базовая карусель

```tsx
<div className="carousel-mobile">
  {items.map((item) => (
    <div key={item.id} className="card-mobile bg-white rounded-xl shadow-lg">
      {/* Контент карточки */}
      {/* Автоматически: width 280px (74% viewport) */}
    </div>
  ))}
</div>
```

### Варианты ширины

```tsx
// Широкие карточки (80%)
<div className="carousel-mobile carousel-mobile-wide">
  {/* width: 300px */}
</div>

// Стандартные карточки (74%)
<div className="carousel-mobile">
  {/* width: 280px */}
</div>

// Узкие карточки (65%)
<div className="carousel-mobile carousel-mobile-narrow">
  {/* width: 244px */}
</div>
```

### Peek pattern

Карусель автоматически показывает часть следующей карточки (peek), создавая эффект "продолжения".

---

## 🎯 HERO СЕКЦИИ

### Структура hero

```tsx
<section className="hero-section hero-wrapper relative bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white">
  <div className="max-w-5xl mx-auto px-4 text-center">
    {/* Badge */}
    <div className="hero-badge inline-flex items-center gap-2 bg-[#f8eb78]/20 rounded-full mb-4">
      <Sparkles className="icon-small text-[#f8eb78]" />
      <span>Возраст 2-6 лет</span>
    </div>
    
    {/* Title */}
    <h1 className="hero-title text-hero-h1 font-display font-normal mb-3">
      Детский сад Oxbridge
    </h1>
    
    {/* Subtitle */}
    <p className="hero-subtitle text-gray-200 mb-5">
      Безопасная среда для роста и развития
    </p>
    
    {/* CTA */}
    <button className="cta-button bg-[#f8eb78] text-[#293863] rounded-xl font-ui font-bold">
      Записаться на экскурсию
    </button>
  </div>
</section>
```

### Ограничения

- **Высота**: 350-400px (min-height, max-height)
- **Padding**: pt-20 pb-12 (80px, 48px)
- **Title max-width**: 340px (контроль переносов)
- **Subtitle max-width**: 320px

---

## 🎲 GRID СИСТЕМЫ

### Мобильные сетки

```tsx
// Одна колонка (карточки, контент)
<div className="grid-mobile-1">
  {items.map(...)}
</div>

// Две колонки (компактные элементы)
<div className="grid-mobile-2">
  {items.map(...)}
</div>

// Три колонки (статистика, иконки)
<div className="grid-mobile-3">
  {items.map(...)}
</div>
```

### Примеры

```tsx
// Статистика (3 колонки)
<div className="stats-mobile">
  <div className="stat-item-mobile">
    <Trophy className="stat-icon-mobile text-[#f8eb78]" />
    <div className="stat-value-mobile font-display font-bold text-[#293863]">95%</div>
    <p className="stat-label-mobile text-gray-600">Поступление в топ ВУЗы</p>
  </div>
  {/* ... остальные */}
</div>

// Карточки программ (1 колонка)
<div className="grid-mobile-1">
  {programs.map((program) => (
    <div key={program.id} className="program-card">
      {/* ... */}
    </div>
  ))}
</div>
```

---

## 🔘 КНОПКИ И ФОРМЫ

### CTA кнопки

```tsx
// Стандартная CTA
<button className="cta-button w-full bg-[#293863] text-white rounded-xl font-ui font-bold">
  Записаться
</button>

// С иконкой
<button className="cta-button flex items-center justify-center gap-2">
  <Send className="icon-secondary" />
  Отправить
</button>
```

**Параметры**:
- Высота: 48px
- Font-size: 15px
- Min-height: 48px (touch-friendly)

### Формы

```tsx
<div className="form-group-mobile">
  <label className="form-label-mobile">
    Ваше имя
  </label>
  <input
    type="text"
    className="form-input-mobile"
    placeholder="Введите имя"
  />
  <span className="form-helper-mobile">
    Как к вам обращаться?
  </span>
</div>

{/* С ошибкой */}
<div className="form-group-mobile">
  <label className="form-label-mobile">Email</label>
  <input
    type="email"
    className="form-input-mobile form-input-error"
  />
  <span className="form-error-mobile">
    Введите корректный email
  </span>
</div>
```

**Параметры input**:
- Высота: 46px
- Font-size: 15px
- Padding: 12px 16px
- Border-radius: 12px

---

## 🖼️ ИЗОБРАЖЕНИЯ

### Типы изображений

```tsx
// Полноширинное изображение
<img src={...} alt="..." className="responsive-mobile" />

// Аватар (круглое)
<img src={...} alt="..." className="avatar-mobile" />
{/* 48x48px, border-radius: 50% */}

// Изображение карточки
<img src={...} alt="..." className="card-image-mobile" />
{/* 100% ширина, 180px высота, rounded-xl */}
```

### Примеры

```tsx
// Hero изображение
<div className="relative overflow-hidden rounded-2xl">
  <img src={heroImage} alt="Campus" className="responsive-mobile" />
</div>

// Галерея
<div className="grid-mobile-2 gap-3">
  {photos.map((photo) => (
    <img
      key={photo.id}
      src={photo.url}
      alt={photo.alt}
      className="card-image-mobile"
    />
  ))}
</div>
```

---

## 📊 СПЕЦИАЛЬНЫЕ КОМПОНЕНТЫ

### Статистика

```tsx
<div className="stats-mobile">
  <div className="stat-item-mobile">
    <Award className="stat-icon-mobile text-[#953130]" />
    <div className="stat-value-mobile">500+</div>
    <p className="stat-label-mobile">Учеников</p>
  </div>
  {/* ... */}
</div>
```

### Таблицы (конвертация в карточки)

```tsx
<table className="table-mobile">
  <thead>
    <tr>
      <th>Программа</th>
      <th>Возраст</th>
      <th>Стоимость</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Программа">Детский сад</td>
      <td data-label="Возраст">2-6 лет</td>
      <td data-label="Стоимость">$8,000</td>
    </tr>
  </tbody>
</table>
```

На мобиле таблица автоматически превращается в карточки.

### Модальные окна

```tsx
<div role="dialog" className="modal-mobile">
  <div className="modal-header-mobile">
    <h3>Заголовок</h3>
    <button>✕</button>
  </div>
  <div className="modal-content-mobile">
    {/* Контент */}
  </div>
  <div className="modal-footer-mobile">
    <button className="cta-button">Сохранить</button>
  </div>
</div>
```

---

## 🎨 HEADER И NAVIGATION

### Header

```tsx
<header className="header-mobile fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
  <div className="flex items-center justify-between px-4">
    {/* Logo */}
    <img src={logo} alt="Oxbridge" className="h-[30px]" />
    
    {/* Language */}
    <button className="language-switcher flex items-center gap-1.5">
      <Globe size={18} />
      <span>RU</span>
    </button>
    
    {/* Menu */}
    <button className="touch-target">
      <Menu size={24} />
    </button>
  </div>
</header>
```

**Параметры**:
- Высота: 56px
- Logo: 30px
- Icons: 18-24px

### Мобильное меню

```tsx
<div className="mobile-menu">
  <nav>
    {menuItems.map((item) => (
      <div key={item.id} className="mobile-menu-item">
        <Link to={item.href} className="mobile-menu-link">
          {item.label}
          <ChevronRight className="icon-small" />
        </Link>
      </div>
    ))}
  </nav>
</div>
```

---

## ♿ ACCESSIBILITY

### Touch targets

Все интерактивные элементы автоматически имеют минимум **44x44px**:

```tsx
<button className="touch-target">
  <Heart className="icon-small" />
</button>
```

### Focus indicators

Автоматически применяются при фокусе:
- Outline: 2px solid #293863
- Offset: 2px

### Reduced motion

Пользователи с `prefers-reduced-motion` автоматически получают упрощенные анимации.

---

## 🚀 UTILITY КЛАССЫ

### Текст

```css
.truncate-2         /* Обрезка до 2 строк */
.truncate-3         /* Обрезка до 3 строк */
.no-break-words     /* Запрет переноса слов */
```

### Layout

```css
.will-animate       /* GPU acceleration */
```

### Примеры

```tsx
// Обрезка текста
<p className="text-body truncate-2">
  Длинный текст, который обрежется после второй строки...
</p>

// Запрет переноса
<h3 className="text-card-h2 no-break-words">
  Oxbridge International School
</h3>
```

---

## 📱 RESPONSIVE BREAKPOINTS

Все мобильные стили применяются при:

```css
@media (max-width: 768px) {
  /* Мобильные стили */
}
```

Для очень маленьких экранов (iPhone SE):

```css
@media (max-width: 375px) {
  /* Дополнительные оптимизации */
}
```

---

## ✅ ЧЕКЛИСТ ПРИМЕНЕНИЯ

При создании новой страницы:

- [ ] Hero section использует `.hero-section`, `.hero-wrapper`
- [ ] H1 в hero → `.text-hero-h1`
- [ ] H1 в секциях → `.text-section-h1`
- [ ] H2 в карточках → `.text-card-h2`
- [ ] Карточки → `.card-mobile .compact-p`
- [ ] Кнопки → `.cta-button`
- [ ] Формы → `.form-input-mobile`
- [ ] Grid → `.grid-mobile-1/2/3`
- [ ] Карусель → `.carousel-mobile`
- [ ] Статистика → `.stats-mobile`
- [ ] Touch targets → минимум 44px
- [ ] Images → `.responsive-mobile`

---

## 🎯 ПРИМЕРЫ СТРАНИЦ

### Простая контентная страница

```tsx
export function ContentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="hero-section hero-wrapper bg-gradient-to-br from-[#293863] to-[#1f2c50] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="hero-title text-hero-h1">Заголовок</h1>
          <p className="hero-subtitle">Подзаголовок</p>
        </div>
      </section>
      
      {/* Content */}
      <section className="content-section px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-section-h1 mb-4">Секция</h2>
          <p className="text-body mb-6">Текст...</p>
          
          {/* Cards Grid */}
          <div className="grid-mobile-1 gap-mobile-normal">
            {items.map((item) => (
              <div key={item.id} className="card-mobile compact-p bg-white rounded-xl shadow-lg">
                <h3 className="text-card-h2 mb-3">{item.title}</h3>
                <p className="text-small">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

### Страница с каруселью

```tsx
export function CarouselPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="content-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-section-h1 text-center mb-6">Наши программы</h2>
          
          <div className="carousel-mobile">
            {programs.map((program) => (
              <div key={program.id} className="program-card bg-white rounded-xl shadow-lg">
                <div className="flex flex-col gap-mobile-tight">
                  <span className="text-badge">{program.age}</span>
                  <h3 className="text-card-h2">{program.title}</h3>
                  <p className="text-small truncate-2">{program.description}</p>
                  <button className="cta-button">Подробнее</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## 🔧 КАСТОМИЗАЦИЯ

Если нужно переопределить стили:

```tsx
// ❌ Плохо - изменение глобальных стилей
<div className="card-mobile" style={{ padding: '24px' }}>

// ✅ Хорошо - добавление своих классов
<div className="card-mobile p-6">
  {/* Tailwind перезаписывает mobile.css */}
</div>
```

---

## 📚 СВЯЗАННЫЕ ФАЙЛЫ

- `/src/styles/mobile.css` - основной файл стилей
- `/src/styles/theme.css` - цвета и переменные
- `/src/styles/fonts.css` - шрифты
- `/MOBILE_REDESIGN_PLAN.md` - план редизайна

---

## 💡 BEST PRACTICES

1. **Используйте semantic классы** вместо inline стилей
2. **Следуйте иерархии типографики** (hero → section → card)
3. **Применяйте peek pattern** для каруселей
4. **Соблюдайте touch targets** (минимум 44px)
5. **Тестируйте на 375px viewport** (iPhone SE)
6. **Используйте готовые компоненты** (stats, cards, forms)
7. **Проверяйте accessibility** (focus, contrast, reduced-motion)

---

✅ **Все готово для применения на всех страницах сайта!**
