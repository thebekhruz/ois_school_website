# ПРОМПТ: Мобильный редизайн сайта Oxbridge International School

## 🎯 ЗАДАЧА
Полностью переработать мобильную версию сайта Oxbridge International School (375px viewport) с фокусом на **правильные пропорции**, **эффективное использование пространства** и **современный визуальный ритм**.

---

## ⚠️ ТЕКУЩИЕ ПРОБЛЕМЫ (что НЕ работает)

Анализируя текущий дизайн:

### 1. Проблемы с пропорциями
- ❌ Заголовки H1-H2 слишком крупные относительно viewport (занимают 30-40% экрана)
- ❌ Межстрочный интервал заголовков избыточный
- ❌ Карточки программ занимают весь экран (нет "воздуха")
- ❌ Badge с возрастом ("2-6 лет") непропорционально мелкий по отношению к заголовку карточки

### 2. Проблемы с ритмом
- ❌ Слишком большие вертикальные отступы между элементами
- ❌ Пользователь видит только 1 элемент на экране → теряет контекст
- ❌ Нет визуальной группировки связанных элементов
- ❌ Неэффективное использование вертикального пространства

### 3. Проблемы с визуальной иерархией
- ❌ Все элементы визуально "кричат" одинаково громко
- ❌ Нет чёткого разделения на первичную/вторичную информацию
- ❌ CTA кнопки теряются в общей массе контента

---

## 🎨 БРЕНДИНГ (ОБЯЗАТЕЛЬНО сохранить)

### Цвета
- **Navy Gradient**: `#293863` → `#33559a` (престижность)
- **Accent Red**: `#953130` (CTA, акценты)
- **Bright Yellow**: `#f8eb78` (теплые акценты), `#f7d454` (яркие элементы)
- **Neutrals**: white, gray-50, gray-100

### Типографика
- **Display**: Philosopher (легкий, элегантный)
- **Body**: Lora (читаемый serif)
- **UI**: Manrope (современный sans-serif)
- **Quote**: Cormorant Garamond
- **Accent**: Fraunces

### Философия бренда
- Баланс **престижности** (navy, структура) и **теплоты** (yellow, округлости)
- Современный минимализм с человечностью
- Визуальная иерархия через размер и цвет, не через сложность

---

## 📱 НОВЫЕ ПРАВИЛА ДИЗАЙНА

### 1. ПРОПОРЦИИ (Golden Ratio подход)

#### Viewport Division (375px height ≈ 667-812px)
```
┌─────────────────────┐
│ Header: 56px        │ ← 7% viewport
├─────────────────────┤
│                     │
│ Above fold:         │ ← 50-60% viewport
│ - Tag (mini)        │   (видно БЕЗ скролла)
│ - H1 (compact)      │
│ - Subtitle (tight)  │
│ - CTA buttons       │
│                     │
├─────────────────────┤
│                     │
│ Below fold:         │ ← 40-50% viewport
│ - Preview cards     │   (hint для скролла)
│                     │
└─────────────────────┘
```

**Правило**: На первом экране пользователь должен видеть:
- Полностью: заголовок + описание + CTA
- Частично: начало следующей секции (20-30%) → побуждает к скроллу

#### Соотношение размеров текста
```
H1 Section: 1.0 (базовый)
H2 Card: 0.75 от H1
H3 Subtitle: 0.6 от H1
Body: 0.5 от H1
Small: 0.4 от H1

Пример:
H1 = 28px → H2 = 21px → H3 = 17px → Body = 14px → Small = 11px
```

#### Отступы (модульная шкала 8px)
```
Micro gap (внутри компонента): 8px
Small gap (между элементами): 12px
Medium gap (между группами): 16px
Large gap (между секциями): 32px
XLarge gap (между major блоками): 48px
```

---

### 2. ВИЗУАЛЬНАЯ ПЛОТНОСТЬ

#### Информационная плотность
**Текущая проблема**: 1 карточка = 100% viewport height  
**Решение**: 1.3-1.5 элемента на экране (peek pattern)

```css
/* Карточка программы */
height: auto (не фиксированная)
max-height: 65vh (пользователь видит ~1.5 карточки)
padding: 16px (не 24px)
gap: 10px (внутри карточки)
```

**Эффект**: 
- Пользователь сразу понимает, что есть ещё контент ниже
- Создаётся ощущение динамики, не статичной страницы

#### Принцип "Breathing Room"
```
Tight spaces (сжатые):
- Внутри карточки: line-height 1.4
- Внутри списка: gap 8px
- Badge padding: 6px 12px

Generous spaces (просторные):
- Между секциями: 40-48px
- Вокруг CTA: margin-top 20px
- Между карточками: gap 16px
```

---

### 3. ТИПОГРАФИКА (адаптивная шкала)

#### Базовый размер: 15px (не 16px)
**Почему**: На маленьких экранах 16px создаёт слишком крупные заголовки при использовании модульной шкалы.

#### Модульная шкала (1.25 - Major Third)
```
Base: 15px (body)
↓
Scale up:
  15 × 1.25 = 18.75 → 19px (H4)
  19 × 1.25 = 23.75 → 24px (H3)
  24 × 1.25 = 30px (H2)
  30 × 1.25 = 37.5 → 36px (H1)

Scale down:
  15 ÷ 1.25 = 12px (small)
  12 ÷ 1.25 = 9.6 → 10px (tiny)
```

#### Конкретные размеры для мобила (375px)

| Элемент | Size | Line-height | Font | Weight | Usage |
|---------|------|-------------|------|--------|-------|
| **Hero H1** | 32px | 1.2 (38px) | Philosopher | 300 | Главный заголовок страницы |
| **Section H1** | 26px | 1.25 (33px) | Philosopher | 400 | Заголовок секции |
| **H2 Card** | 20px | 1.3 (26px) | Philosopher | 500 | Заголовок карточки |
| **H3 Subtitle** | 16px | 1.4 (22px) | Manrope | 600 | Подзаголовки |
| **Body** | 15px | 1.6 (24px) | Lora | 400 | Основной текст |
| **Body UI** | 14px | 1.5 (21px) | Manrope | 400 | UI текст, формы |
| **Small** | 13px | 1.5 (19px) | Manrope | 400 | Вторичный текст |
| **Caption** | 11px | 1.4 (15px) | Manrope | 500 | Бейджи, метки |

#### Правило контраста
**Минимальная разница между уровнями: 4px**  
Если H2 = 20px, то H3 должно быть ≤16px (не 18px)

---

### 4. КОМПОНЕНТЫ (редизайн)

#### A. Header (56px фиксированная высота)
```
Layout:
[Logo 100×30px] ───── [RU ▼] [☰]
← 12px                          12px →

Background: white
Border-bottom: 1px solid rgba(0,0,0,0.06)
Shadow: 0 1px 3px rgba(0,0,0,0.04) (едва заметная)
```

#### B. Hero Section
```
Padding: 20px 16px 32px (экономия высоты!)

[Tag Badge]
11px text, 6px×12px padding, yellow bg

↓ 12px gap

[H1 Title]
32px, line-height 1.2
Max 3 строки
"Добро пожаловать в место, где ваш ребёнок раскрывает потенциал"

↓ 12px gap

[Subtitle]
14px, line-height 1.5, opacity 0.85
Max 2 строки

↓ 20px gap

[CTA Buttons Stack]
2 кнопки, gap 10px
Height 48px каждая (не 52px)
```

**Итого высота Hero**: ~350-400px (было ~500px)

#### C. Карточка программы (КЛЮЧЕВОЕ изменение)
```
Border: 1.5px solid #E5E7EB
Border-radius: 16px
Padding: 16px (было 20-24px)
Background: white

Layout:
┌──────────────────────┐
│ [Badge] [Arrow]      │ ← 10px height
│ ↓ 12px               │
│ [H2 Title]           │ ← 20px, 1-2 строки
│ ↓ 8px                │
│ [Description]        │ ← 14px, 2-3 строки
│ ↓ 12px               │
│ • Feature 1          │ ← 13px
│ • Feature 2          │   8px gap между
│ • Feature 3          │
│ ↓ 16px               │
│ [CTA Link →]         │ ← 14px, red
└──────────────────────┘

Total height: ~240px (было ~320px)
```

**Эффект**: на экране видно 1.5 карточки → понятно, что их несколько

#### D. Stats Section (компактная)
```
Grid: 3 columns
Gap: 8px (не 12-16px)
Padding: 24px 16px (не 32px)

Each stat:
[Icon 28px] ← navy yellow цвет
↓ 6px
[Value 24px] ← Philosopher, bold
↓ 4px
[Label 12px] ← Manrope, gray-600

Total height per stat: ~80px
```

#### E. Принципы подхода (карусель)
```
Carousel container:
padding-left: 16px
gap: 12px
scroll-snap-type: x mandatory

Card:
width: 280px (74% viewport)
padding: 20px 16px
min-height: 200px (не auto)
border-left: 3px solid yellow

Content:
[Icon 32px]
↓ 12px
[Title 18px] ← 1 строка
↓ 6px
[Subtitle 13px] ← gray
↓ 12px
[Description 14px] ← 3-4 строки, line-height 1.5
```

---

### 5. SPACING SYSTEM (модульная сетка)

#### Базовая единица: 4px
```
4px   = 0.25rem = xs
8px   = 0.5rem  = sm
12px  = 0.75rem = md
16px  = 1rem    = lg
20px  = 1.25rem = xl
24px  = 1.5rem  = 2xl
32px  = 2rem    = 3xl
40px  = 2.5rem  = 4xl
48px  = 3rem    = 5xl
```

#### Применение
```css
/* Внутри карточки */
gap: 12px (md)
padding: 16px (lg)

/* Между карточками */
gap: 16px (lg)

/* Между секциями */
margin-block: 40px (4xl)

/* Внутри списка */
gap: 8px (sm)
```

---

### 6. CTA КНОПКИ (редизайн)

#### Новые размеры
```css
/* Primary CTA */
height: 48px (было 52px) ← соответствует Apple HIG
padding: 12px 20px
border-radius: 24px (полукруг)
font-size: 15px (не 16px)
font-weight: 600 (не medium)
letter-spacing: 0.01em

/* Active state */
transform: scale(0.98)
transition: transform 100ms ease
```

#### Иконки в кнопках
```
Icon size: 18px (не 20px)
Gap от текста: 8px
Position: справа от текста
```

#### Layout в Hero
```
Stack vertical:
├─ Primary (red, 100% width)
├─ 10px gap (не 12px)
└─ Secondary (outline, 100% width)
```

---

### 7. VISUAL RHYTHM (вертикальный ритм)

#### Проблема: Монотонность
**Решение**: Чередование плотности

```
Dense section (плотная):
- Карточки программ
- Stats
- Pricing table
→ Padding 24px, tight gaps

Spacious section (просторная):
- Hero
- Testimonials
- CTA blocks
→ Padding 40px, generous gaps
```

#### Правило чередования
```
Hero (spacious)
  ↓ 40px
Programs (dense)
  ↓ 48px
Campus Finder (spacious)
  ↓ 40px
Stats (dense)
  ↓ 48px
Principles (dense carousel)
  ↓ 48px
Universities (spacious)
```

---

### 8. IMAGE OPTIMIZATION

#### Пропорции изображений
```
Hero background: 375×400 (portrait ratio)
Card images: 16:9 или 4:3
Avatar: 1:1 (square)
Logo: maintain aspect ratio
```

#### Responsive images
```html
<img 
  src="image-mobile.webp"
  srcset="image-mobile.webp 375w, image-tablet.webp 768w"
  sizes="100vw"
  loading="lazy"
/>
```

---

## 🎯 КОНКРЕТНЫЕ ЗАДАЧИ НА РЕДИЗАЙН

### 1. Header
- [ ] Уменьшить высоту до 56px
- [ ] Логотип 100×30px
- [ ] Language switcher минималистичный (только "RU ▼")
- [ ] Burger icon 24×24px
- [ ] Едва заметная тень

### 2. Hero Section
- [ ] Уменьшить padding до 20px top / 32px bottom
- [ ] H1 = 32px, line-height 1.2, max 3 строки
- [ ] Subtitle = 14px, max 2 строки
- [ ] Badge = 11px, компактный padding
- [ ] CTA кнопки 48px высотой, gap 10px
- [ ] **Целевая высота Hero: 350-400px**

### 3. Programs Section
**Заголовок секции:**
- [ ] Tag badge 11px
- [ ] H1 "Три этапа роста" = 26px (не 32-36px!)
- [ ] Gap между tag и H1 = 12px

**Карточки программ:**
- [ ] Padding карточки = 16px
- [ ] H2 название = 20px
- [ ] Description = 14px, line-height 1.5
- [ ] Features list = 13px, gap 8px
- [ ] Badge возраста = 11px (увеличить от текущего!)
- [ ] Arrow icon = 18px
- [ ] **Целевая высота карточки: 240px**
- [ ] Gap между карточками = 16px
- [ ] На экране видно 1.3-1.5 карточки

### 4. Stats Section
- [ ] Grid 3 columns, gap 8px
- [ ] Icon = 28px
- [ ] Value = 24px, Philosopher bold
- [ ] Label = 12px, line-height 1.3
- [ ] Общий padding = 24px vertical

### 5. Principles Carousel
- [ ] Card width = 280px (74% viewport)
- [ ] Card padding = 20px 16px
- [ ] Gap между карточками = 12px
- [ ] Icon = 32px
- [ ] Title = 18px, 1 строка
- [ ] Description = 14px, line-height 1.5
- [ ] Dots indicator: 6px diameter, gap 6px

### 6. Campus Finder
- [ ] Input height = 46px (не 48px)
- [ ] Input font-size = 15px
- [ ] Button height = 46px
- [ ] Gap между элементами = 12px
- [ ] Result cards padding = 16px

### 7. Footer
- [ ] Компактный: padding 24px vertical
- [ ] Font-size = 13px
- [ ] Links gap = 16px vertical
- [ ] Social icons = 20px

---

## 📐 МАТЕМАТИКА ПРОПОРЦИЙ

### Viewport 375×667 (iPhone SE)

**Above the fold (667px height):**
```
Header: 56px (8.4%)
Hero content: 280px (42%)
CTA buttons: 106px (buttons + gaps) (16%)
Spacer: 20px (3%)
Section tag: 30px (4.5%)
Section title: 60px (9%)
Preview card (partial): 115px (17%)
─────────────────
Total: 667px (100%)
```

**Эффект**: 
- 66% = Hero + CTA (пользователь понимает суть сайта)
- 17% = Preview следующей секции (побуждает скроллить)

---

## 🎨 VISUAL EXAMPLES

### Before (текущий дизайн):
```
Viewport 375×667:
├─ Header: 64px (9.6%)
├─ Hero: 500px (75%!) ← ПРОБЛЕМА
└─ Ничего не видно ниже

Результат: статичная страница, нет динамики
```

### After (новый дизайн):
```
Viewport 375×667:
├─ Header: 56px (8.4%)
├─ Hero: 350px (52.5%)
├─ Programs tag+title: 90px (13.5%)
└─ Program card (partial): 171px (25.6%)

Результат: динамичная страница, понятна структура
```

---

## ✅ ЧЕКЛИСТ РЕДИЗАЙНА

### Typography
- [ ] Base font-size = 15px (не 16px)
- [ ] Модульная шкала 1.25
- [ ] Hero H1 = 32px
- [ ] Section H1 = 26px
- [ ] Card H2 = 20px
- [ ] Body = 15px
- [ ] Small = 13px
- [ ] Caption/Badge = 11px
- [ ] Line-height текста ≥1.5
- [ ] Line-height заголовков 1.2-1.3

### Spacing
- [ ] Base unit = 4px
- [ ] Card padding = 16px
- [ ] Section padding = 24-32px vertical
- [ ] Gap между секциями = 40-48px
- [ ] Gap между карточками = 16px
- [ ] Gap внутри карточки = 8-12px

### Components
- [ ] Header = 56px
- [ ] CTA buttons = 48px
- [ ] Input fields = 46px
- [ ] Icons primary = 28-32px
- [ ] Icons secondary = 18-20px
- [ ] Border-radius cards = 16px
- [ ] Border-radius buttons = 24px

### Layout
- [ ] Hero высота ≤400px
- [ ] Card высота ≤240px
- [ ] На экране видно 1.3-1.5 элемента (peek pattern)
- [ ] Above fold показывает preview следующей секции
- [ ] Боковые отступы = 16px
- [ ] Max-width контейнера = 375px

### Visual Hierarchy
- [ ] Минимум 4px разница между уровнями текста
- [ ] Primary CTA визуально доминирует
- [ ] Secondary информация приглушена (opacity/color)
- [ ] Чередование плотных/просторных секций
- [ ] Badge контрастируют по цвету и размеру

### Performance
- [ ] Шрифты: font-display: swap
- [ ] Images: WebP, lazy loading
- [ ] Critical CSS inline
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s

---

## 🚀 ПРИМЕР КОДА

### Карточка программы (НОВАЯ ВЕРСИЯ)

```tsx
<div className="flex flex-col gap-4 px-4">
  {programs.map((program) => (
    <Link
      to={program.link}
      key={program.id}
      className="
        block p-4 
        border-[1.5px] border-gray-200 rounded-2xl 
        bg-white
        active:border-[#953130] active:shadow-md
        transition-all duration-150
      "
      style={{ height: 'auto', maxHeight: '240px' }}
    >
      {/* Header: Badge + Arrow */}
      <div className="flex items-center justify-between mb-3">
        <span className="
          px-3 py-1.5 
          bg-gradient-to-r from-[#f8eb78] to-[#f7d454]
          text-[#293863] 
          rounded-full 
          text-[11px] font-display font-medium
          tracking-wide
        ">
          {program.age}
        </span>
        <ArrowRight size={18} className="text-gray-400" />
      </div>

      {/* Title */}
      <h2 className="
        text-[20px] leading-[1.3] 
        text-[#293863] 
        font-display font-medium
        mb-2
      ">
        {program.title}
      </h2>

      {/* Description */}
      <p className="
        text-[14px] leading-[1.5] 
        text-gray-700 
        font-body
        mb-3
        line-clamp-2
      ">
        {program.description}
      </p>

      {/* Features */}
      <ul className="flex flex-col gap-2 mb-4">
        {program.features.map((feature, idx) => (
          <li key={idx} className="
            flex items-start gap-2
            text-[13px] leading-[1.4]
            text-gray-600 font-ui
          ">
            <span className="
              w-1 h-1 rounded-full 
              bg-[#f7d454] 
              mt-[7px] flex-shrink-0
            " />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="
        text-[14px] font-ui font-semibold
        text-[#953130]
        inline-flex items-center gap-2
      ">
        Узнать больше
        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  ))}
</div>
```

---

## 🎯 ФИНАЛЬНАЯ ЦЕЛЬ

**До редизайна:**
- Пользователь видит 1 элемент → скучно, статично
- Заголовки слишком крупные → теряется контекст
- Много пустого пространства → неэффективно

**После редизайна:**
- Пользователь видит 1.5-2 элемента → динамично, понятна структура
- Заголовки пропорциональны → визуальная гармония
- Компактная вёрстка → больше информации, меньше скролла

**Главный принцип**: 
> "Каждый пиксель на счету. Каждый размер продуман. Каждый отступ имеет смысл."

---

**Метрики успеха:**
- Hero section ≤400px высотой
- Card height ≤240px
- На первом экране видно минимум 2.5 секции (Hero + Programs title + 1.5 cards)
- Time to Interactive <3s
- Визуальная гармония: все размеры кратны 4px

**Дата:** Январь 2026  
**Viewport:** 375px (mobile-first)  
**Бренд:** Oxbridge International School
