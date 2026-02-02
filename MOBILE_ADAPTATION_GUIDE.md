# Техническое задание: Мобильная адаптация Oxbridge International School
## Mobile-first адаптация для устройств 375px

---

## 🎨 Брендинг (ОБЯЗАТЕЛЬНО соблюдать)

### Цветовая палитра
- **Navy Gradient**: `#2A4578` → `#2F5DA1` (престижность, доверие)
- **Accent Red**: `#AD2D32` (призыв к действию, важные элементы)
- **Bright Yellow**: `#FCDA49` (теплота, акценты)
- **Light Blue**: `#D2E2F2` (легкие фоны, разделители)

### Типографика
- **Display** (заголовки): Philosopher
- **Body** (основной текст): Lora
- **UI** (интерфейс, кнопки): Manrope
- **Quote** (цитаты): Cormorant Garamond
- **Accent** (акценты): Fraunces

### Философия дизайна
- Баланс престижности и теплоты
- Современный минимализм с человечностью
- Визуальная иерархия через размер и цвет, не через сложность

---

## 1. 📱 НАВИГАЦИЯ

### 1.1 Структура мобильного меню

#### Header (Шапка)
```
Высота: 64px (фиксированная)
Фон: белый с тенью `shadow-sm`
z-index: 50
```

**Компоновка:**
```
[Logo] ─────────────── [Language] [Burger]
16px                                    16px
```

**Элементы:**
- **Logo**: 120px × 36px (уменьшено с десктопа)
- **Language switcher**: 
  - Иконка Globe (20px) + код языка (RU/EN/UZ)
  - Цвет: `#2A4578`
  - Выпадающий список прижат к правому краю
- **Burger icon**: 24px × 24px, цвет `#2A4578`

#### Burger Menu (Раскрытое состояние)

**Поведение:**
- Анимация slide-in справа (300ms ease-out)
- Затемнение фона (backdrop-blur + opacity 0.5)
- Блокировка скролла body

**Структура:**
```css
Ширина: 100% (до 375px)
Высота: 100vh
Фон: white
Padding: 24px 16px
Overflow-y: auto
```

**Меню-аккордеон:**
1. **Программы** ↓
   - Детский сад (2-6)
   - Начальная школа (6-12)
   - Старшая школа (13-18)
   - International Baccalaureate
   - Сравнить программы

2. **Поступление** ↓
   - Как поступить
   - Оплата и стоимость

3. **О школе** ↓
   - Почему Oxbridge
   - Наши кампусы
   - Студенческая жизнь
   - Поступление в ВУЗы
   - Наша команда
   - Работать с нами

4. **Контакты** ↓
   - Забронировать экскурсию
   - Связаться с нами

**CTA кнопка (в меню):**
```
Text: "Записаться на экскурсию"
Width: 100%
Height: 52px
Border-radius: 9999px (полный круг)
Bg: #AD2D32
Color: white
Font: Manrope, 16px, medium
Margin-top: 24px
```

---

## 2. 📐 СЕТКА И ОТСТУПЫ

### 2.1 Базовая сетка

```css
/* Контейнер */
max-width: 375px
padding-inline: 16px (боковые отступы)

/* Секции */
padding-block: 48px (между секциями)

/* Карточки */
gap: 16px (между элементами)
border-radius: 16px
```

### 2.2 Типографические отступы

```css
/* Заголовок секции */
margin-bottom: 24px

/* Подзаголовок после заголовка */
margin-top: 12px

/* Параграф после параграфа */
margin-top: 16px

/* Элементы списка */
gap: 12px
```

### 2.3 Line-height (межстрочный интервал)

```css
/* Заголовки */
H1: line-height: 1.15 (плотно, для эмоции)
H2: line-height: 1.2
H3: line-height: 1.3

/* Текст */
Body text: line-height: 1.6 (читаемость)
UI text: line-height: 1.5
Quotes: line-height: 1.65
```

---

## 3. 📦 КОНТЕНТНЫЕ БЛОКИ

### 3.1 Hero Section

**Трансформация:**
- Градиентный фон: сохраняем `from-[#2A4578] to-[#2F5DA1]`
- Декоративные элементы: уменьшаем opacity до 0.08
- Padding: 80px top (после header), 48px bottom

**Контент:**
```
[Tag] ← центр
↓ 16px
[H1 Title] ← 32-36px, Philosopher, light
↓ 16px
[Subtitle] ← 16px, Lora, opacity 0.9
↓ 24px
[CTA Stack] ← вертикальный стек, gap 12px
```

### 3.2 Карточки программ (3 штуки)

**Десктоп**: горизонтальный grid (3 колонки)  
**Мобайл**: вертикальный стек

```css
display: flex
flex-direction: column
gap: 16px
width: 100%

/* Каждая карточка */
padding: 20px
border: 2px solid #E5E7EB
border-radius: 16px
min-height: 200px

/* Hover на мобиле заменить на :active */
active:border-[#AD2D32]
active:shadow-lg
```

### 3.3 Статистика (3 блока)

**Десктоп**: grid 3 колонки  
**Мобайл**: вертикальный стек или горизонтальная прокрутка

**Вариант A** (рекомендуется):
```css
display: grid
grid-template-columns: repeat(3, 1fr)
gap: 12px
padding: 32px 16px
```

Каждый блок:
```
[Иконка] 32px, цвет #FCDA49
↓ 8px
[Значение] 28px, Philosopher, bold, navy
↓ 4px
[Label] 13px, Manrope, gray-600
```

### 3.4 Принципы подхода (5 карточек)

**Десктоп**: grid 2-3 колонки  
**Мобайл**: Drag-to-scroll карусель

```css
/* Container */
overflow-x: auto
scroll-snap-type: x mandatory
scrollbar-width: none /* скрыть */
gap: 16px
padding-inline: 16px

/* Карточка */
scroll-snap-align: center
min-width: 280px (80% viewport)
padding: 24px
background: linear-gradient(135deg, #F9FAFB 0%, white 100%)
border-left: 4px solid #FCDA49
```

**Прогресс-индикатор:**
```
Dots: 8px diameter
Active: #AD2D32
Inactive: #D2E2F2
Gap: 6px
Position: center, margin-top 16px
```

### 3.5 Campus Finder (поиск кампуса)

**Десктоп**: горизонтальная форма + результаты в 2 колонки  
**Мобайл**: вертикальный стек

```css
/* Инпут */
width: 100%
height: 48px
padding: 12px 16px
border-radius: 24px
font-size: 15px

/* Кнопки */
Stack vertical, gap 12px
Button width: 100%
```

**Результаты:**
- Карточки кампусов вертикально
- Gap 12px
- Border-left с цветом программы

---

## 4. ✍️ ТИПОГРАФИКА

### 4.1 Размеры заголовков (Mobile)

| Элемент | Десктоп | Мобайл | Font | Weight | Color |
|---------|---------|--------|------|--------|-------|
| **H1 Hero** | 56-72px | **32-36px** | Philosopher | 300 | white |
| **H1 Section** | 48-56px | **28-32px** | Philosopher | 400 | #2A4578 |
| **H2** | 36-40px | **24-28px** | Philosopher | 400 | #2A4578 |
| **H3 Card** | 24-28px | **20-24px** | Philosopher | 500 | #2A4578 |
| **H4 Subtitle** | 18-20px | **16-18px** | Manrope | 600 | gray-700 |
| **Body** | 16-18px | **15-16px** | Lora | 400 | gray-800 |
| **Small** | 14px | **13-14px** | Manrope | 400 | gray-600 |
| **Caption** | 12-13px | **12px** | Manrope | 400 | gray-500 |

### 4.2 Правила применения

**Уменьшение на мобиле:**
- Hero заголовки: -40% размера
- Section заголовки: -30% размера
- Текст: -10% размера

**Длинный текст:**
- Максимум 3-4 строки для H1
- Используем `clamp()` для плавной адаптации:
  ```css
  font-size: clamp(28px, 8vw, 36px)
  ```

---

## 5. 🎯 CTA-КНОПКИ

### 5.1 Размеры и зоны касания

**Минимальная зона касания: 44px** (Apple HIG)  
**Рекомендуемая: 48-52px**

### 5.2 Типы кнопок

#### Primary CTA (главное действие)
```css
/* Записаться / Узнать больше */
width: 100%
height: 52px
padding: 14px 24px
border-radius: 9999px
background: #AD2D32
color: white
font: Manrope, 16px, medium
box-shadow: 0 4px 12px rgba(173, 45, 50, 0.25)

/* Active state */
active:bg-[#952428]
active:scale-[0.97]
transition: 150ms ease
```

#### Secondary CTA (второстепенное)
```css
width: 100%
height: 52px
border: 2px solid #2A4578
background: transparent
color: #2A4578
font: Manrope, 16px, medium
border-radius: 9999px
```

#### Text Link (inline действие)
```css
font: Manrope, 15px, medium
color: #AD2D32
text-decoration: underline
text-underline-offset: 4px
```

### 5.3 Расположение

**Hero Section:**
- Стек вертикальный (flex-col)
- Gap 12px
- Width 100%

**Внутри карточек:**
- Прижата к низу (mt-auto)
- Arrow icon справа (16px)

**Floating CTA** (опционально):
```css
position: fixed
bottom: 16px
left: 16px
right: 16px
z-index: 40
box-shadow: 0 8px 24px rgba(0,0,0,0.15)
```

### 5.4 Доступность большого пальца

**Зона комфортного нажатия:**
```
        [Difficult]
      ┌──────────┐
      │          │ ← top 30%
      │ [EASY]   │ ← middle 40%
      │          │
      └──────────┘ ← bottom 30% (thumb zone)
```

**Правило:** Основные CTA размещать в нижних 40% экрана.

---

## 6. 📊 ЧЕКЛИСТ АДАПТАЦИИ

### Общие требования
- [ ] Все кнопки ≥48px высоты
- [ ] Боковые отступы 16px
- [ ] Вертикальные отступы между секциями 48px
- [ ] Line-height текста ≥1.6
- [ ] Контраст текста ≥4.5:1 (WCAG AA)
- [ ] Touch targets ≥44px × 44px
- [ ] Анимации ≤300ms

### Навигация
- [ ] Burger menu справа
- [ ] Аккордеон для подменю
- [ ] CTA кнопка в меню (sticky bottom)
- [ ] Закрытие по overlay/swipe/escape

### Контент
- [ ] Hero заголовок не > 3 строк
- [ ] Карточки вертикально (не grid)
- [ ] Карусели с snap scroll
- [ ] Индикаторы прогресса для каруселей
- [ ] Изображения оптимизированы (WebP, <200kb)

### Типографика
- [ ] Заголовки -30-40% от десктопа
- [ ] Текст сохраняет читаемость
- [ ] Шрифты Philosopher/Lora/Manrope загружены
- [ ] Fallback шрифты: sans-serif для UI, serif для текста

### CTA
- [ ] Primary кнопки красные (#AD2D32)
- [ ] Контраст 4.5:1 с фоном
- [ ] Active states (не hover)
- [ ] Визуальный feedback 150ms

---

## 7. 🎨 БРЕНДОВЫЕ ПАТТЕРНЫ

### Цветовые комбинации (ТОЛЬКО эти)

**Hero секция:**
- Фон: `linear-gradient(135deg, #2A4578 0%, #2F5DA1 100%)`
- Текст: white
- Акценты: #FCDA49

**Контентные секции:**
- Фон: white или #F9FAFB
- Заголовки: #2A4578
- Текст: gray-800
- Линии: #D2E2F2

**Карточки программ:**
- Детский сад: yellow gradient `from-[#FCDA49] to-[#FDC300]`
- Начальная школа: navy gradient `from-[#2F5DA1] to-[#2A4578]`
- Старшая школа: red gradient `from-[#AD2D32] to-[#952428]`

### Декоративные элементы

**Использовать умеренно:**
- Размытые круги (blur-3xl) с opacity 0.08
- Тонкие линии-разделители (#D2E2F2, 1px)
- Иконки из lucide-react
- Тени: `shadow-sm` или `shadow-md` (не больше)

**НЕ использовать:**
- Сложные паттерны
- Градиенты вне брендовых
- Яркие shadow/glow эффекты
- Анимации >300ms

---

## 8. 🚀 ПРИОРИТЕТЫ ОПТИМИЗАЦИИ

### Performance
1. **Critical CSS**: inline стили для above-the-fold
2. **Lazy loading**: изображения ниже первого экрана
3. **Font loading**: `font-display: swap`
4. **Минификация**: CSS/JS bundle <100kb

### User Experience
1. **Skeleton screens**: показывать структуру до загрузки
2. **Оптимистичный UI**: мгновенный feedback на действия
3. **Offline fallback**: сообщение при отсутствии сети
4. **Smooth scroll**: `scroll-behavior: smooth` + `scroll-snap`

### Accessibility
1. **Keyboard navigation**: tab order логичный
2. **Screen readers**: ARIA labels на интерактивных элементах
3. **Focus indicators**: видимый outline
4. **Color contrast**: минимум 4.5:1

---

## 📱 ПРИМЕР РЕАЛИЗАЦИИ

### Hero Section (mobile)

```tsx
<section className="relative pt-20 pb-12 px-4 bg-gradient-to-br from-[#2A4578] to-[#2F5DA1]">
  {/* Background decoration */}
  <div className="absolute top-10 right-10 w-48 h-48 bg-[#FCDA49] opacity-[0.08] rounded-full blur-3xl" />
  
  <div className="max-w-[375px] mx-auto relative z-10">
    {/* Tag */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
      <Sparkles size={14} className="text-[#FCDA49]" />
      <span className="text-white/90 text-xs font-display tracking-wide">
        Международная школа
      </span>
    </div>

    {/* Title */}
    <h1 className="text-[32px] leading-[1.15] text-white font-display font-light mb-4">
      Добро пожаловать в место, где ваш ребёнок{' '}
      <span className="text-[#FCDA49] font-normal">
        раскрывает свой потенциал
      </span>
    </h1>

    {/* Subtitle */}
    <p className="text-base text-white/80 font-body leading-[1.6] mb-6">
      С любовью развиваем самостоятельность, критическое мышление и уверенность в себе у детей от 2 до 18 лет.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col gap-3">
      <button className="w-full h-[52px] px-6 bg-[#AD2D32] text-white rounded-full font-ui font-medium active:bg-[#952428] active:scale-[0.97] transition-all shadow-lg">
        Познакомиться со школой
        <ArrowRight size={20} className="inline ml-2" />
      </button>
      <button className="w-full h-[52px] px-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-ui font-medium border border-white/20">
        Наши программы
      </button>
    </div>
  </div>
</section>
```

---

## ✅ ФИНАЛЬНАЯ ПРОВЕРКА

Перед релизом проверить на **реальных устройствах**:
- iPhone SE (375px) ← базовый размер
- iPhone 12/13/14 (390px)
- Samsung Galaxy S21 (360px)

**Тест-лист:**
1. Все тексты читаемы без zoom
2. Все кнопки нажимаются с первого раза
3. Скролл плавный, без лагов
4. Формы удобно заполнять
5. Меню открывается/закрывается за <300ms
6. Изображения не обрезаны
7. CTA видны без скролла (above the fold)

---

**Дата составления:** Январь 2026  
**Версия:** 1.0  
**Бренд:** Oxbridge International School  
**Целевой viewport:** 375px (mobile-first)
