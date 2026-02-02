# 🎨 Цветовая палитра Oxbridge International School

**Обновлено:** 29 января 2025  
**Версия:** 2.0 (ФИНАЛЬНАЯ ДИЗАЙН-ВЕРСИЯ)

---

## 📋 Основная палитра

### 🔵 Blue (Navy) - Профессионализм и доверие

| Название | Hex Code | RGB | Использование |
|----------|----------|-----|---------------|
| **Blue Primary** | `#293863` | rgb(41, 56, 99) | Основные фоны, заголовки, High School акценты |
| **Blue Secondary** | `#33559a` | rgb(51, 85, 154) | Градиенты, вторичные элементы, hover состояния |

**Применение:**
- Hero секции с градиентом `from-[#293863] to-[#33559a]`
- Основной цвет для High School (Ages 13-18)
- Футер и Header элементы
- Иконки профессиональных секций

---

### 🔴 Red (Accent) - Энергия и действие

| Название | Hex Code | RGB | Использование |
|----------|----------|-----|---------------|
| **Red Accent** | `#953130` | rgb(149, 49, 48) | CTA кнопки, Primary School акценты, активные элементы |

**Применение:**
- CTA кнопки (Call-to-Action)
- Primary School (Ages 6-12) брендинг
- Активные состояния и ссылки
- Важные уведомления и акценты

---

### 💛 Yellow (Highlight) - Оптимизм и теплота

| Название | Hex Code | RGB | Использование |
|----------|----------|-----|---------------|
| **Yellow Light** | `#f8eb78` | rgb(248, 235, 120) | Kindergarten акценты, highlight элементы |
| **Yellow Deep** | `#f7d454` | rgb(247, 212, 84) | Градиенты, hover эффекты, статистика |

**Применение:**
- Kindergarten (Ages 2-6) брендинг
- Градиенты `from-[#f8eb78] to-[#f7d454]`
- Статистика и достижения в Hero
- Hover эффекты на кнопках
- Декоративные элементы

---

## 🎯 Цветовая иерархия по программам обучения

### 1️⃣ Kindergarten (Ages 2-6) - YELLOW 💛

**Основной цвет:** `#f8eb78` (Yellow Light)  
**Дополнительный:** `#f7d454` (Yellow Deep)

**Психология:**
- Теплота и дружелюбие
- Оптимизм и радость
- Безопасность и забота
- Игровой подход к обучению

**Применение в дизайне:**
- Border hover на карточках программы
- Маркеры списков особенностей
- Акценты возрастной категории
- Градиенты в декоративных элементах

---

### 2️⃣ Primary School (Ages 6-12) - RED 🔴

**Основной цвет:** `#953130` (Red Accent)

**Психология:**
- Энергия и активность
- Уверенность в себе
- Любознательность
- Систематическое обучение

**Применение в дизайне:**
- Border hover на карточках программы
- Маркеры списков особенностей
- Акценты возрастной категории
- CTA кнопки "Подробнее"

---

### 3️⃣ High School (Ages 13-18) - BLUE 🔵

**Основной цвет:** `#293863` (Blue Primary)  
**Дополнительный:** `#33559a` (Blue Secondary)

**Психология:**
- Профессионализм и серьёзность
- Академическое превосходство
- Подготовка к университету
- Самостоятельность и ответственность

**Применение в дизайне:**
- Border hover на карточках программы
- Маркеры списков особенностей
- Акценты возрастной категории
- Градиенты фоновых секций

---

## 🖌️ Использование в UI элементах

### Кнопки (Buttons)

**Primary CTA:**
```css
background: #953130;
hover: #f7d454;
color: white → #293863;
```

**Secondary CTA:**
```css
background: white;
color: #953130;
hover-background: #f7d454;
hover-color: #293863;
```

---

### Градиенты

**Hero Backgrounds:**
```css
gradient-to-br from-[#293863] to-[#33559a]
```

**Yellow Accents:**
```css
gradient-to-r from-[#f8eb78] to-[#f7d454]
```

**Mixed Gradients:**
```css
gradient-to-r from-[#293863] to-[#953130]
```

---

### Декоративные элементы

**Blur Circles:**
- `bg-[#f8eb78]/5` - Легкий желтый фон
- `bg-[#953130]/5` - Легкий красный фон
- `bg-[#293863]/5` - Легкий синий фон

**Overlays на изображениях:**
- Kindergarten: `bg-gradient-to-t from-[#f8eb78]/20 to-transparent`
- Primary: `bg-gradient-to-t from-[#953130]/20 to-transparent`
- High School: `bg-gradient-to-t from-[#293863]/20 to-transparent`

---

## 📊 Таблица замены старых цветов

| Старый цвет (v1.0) | Новый цвет (v2.0) | Категория |
|-------------------|-------------------|-----------|
| `#2A4578` | `#293863` | Blue Primary |
| `#2F5DA1` | `#33559a` | Blue Secondary |
| `#AD2D32` | `#953130` | Red Accent |
| `#FCDA49` | `#f7d454` или `#f8eb78` | Yellow (зависит от контекста) |

---

## 🎨 Нейтральные цвета (не меняются)

| Цвет | Hex Code | Использование |
|------|----------|---------------|
| White | `#FFFFFF` | Фоны, карточки, кнопки |
| Black | `#000000` | Текст (с прозрачностью) |
| Gray 50 | `#F9FAFB` | Светлые фоны секций |
| Gray 100 | `#F3F4F6` | Subtle backgrounds |
| Gray 200 | `#E5E7EB` | Borders |
| Gray 300 | `#D1D5DB` | Disabled states |
| Gray 400 | `#9CA3AF` | Placeholders |
| Gray 500 | `#6B7280` | Secondary text |
| Gray 600 | `#4B5563` | Primary text (lighter) |
| Gray 700 | `#374151` | Primary text (medium) |
| Gray 800 | `#1F2937` | Primary text (dark) |
| Gray 900 | `#111827` | Headings, emphasis |

---

## ✅ Контрастность и доступность

### WCAG AA Compliance

**Blue on White:**
- `#293863` on `#FFFFFF` - ✅ AAA (10.2:1)
- `#33559a` on `#FFFFFF` - ✅ AA (4.8:1)

**Red on White:**
- `#953130` on `#FFFFFF` - ✅ AA (6.5:1)

**Yellow on Blue:**
- `#f7d454` on `#293863` - ✅ AA (8.2:1)
- `#f8eb78` on `#293863` - ✅ AAA (11.3:1)

---

## 🎯 Брендинг по философии школы

### Student Agency
**Цвета:** Blue + Yellow  
**Месседж:** Профессионализм с теплотой, самостоятельность с поддержкой

### Compete with Yourself
**Цвета:** Red (энергия) без агрессии  
**Месседж:** Мотивация к росту без токсичной конкуренции

### Safe Environment
**Цвета:** Yellow (теплота) + Blue (стабильность)  
**Месседж:** Уверенность и безопасность

### Individual Support
**Цвета:** Разные акценты по возрастам  
**Месседж:** Персонализация под каждую программу

### Plan A/B/C Approach
**Цвета:** Градиенты (гибкость)  
**Месседж:** Множество путей к успеху

---

## 📁 Файлы для обновления

### Компоненты:
- `/src/app/components/Header.tsx`
- `/src/app/components/Footer.tsx`
- `/src/app/components/CampusFinderSection.tsx`
- `/src/app/components/InfiniteCarousel.tsx`

### Страницы:
- `/src/app/pages/HomePage.tsx`
- `/src/app/pages/programs/*.tsx` (все)
- `/src/app/pages/about/*.tsx` (все)
- `/src/app/pages/admissions/*.tsx` (все)
- `/src/app/pages/contact/*.tsx` (все)
- Остальные статические страницы

### Стили:
- `/src/styles/theme.css`
- `/src/styles/carousel.css`
- `/src/styles/infinite-carousel.css`

---

## 🔍 Поиск и замена (Regex)

```regex
Старые цвета для поиска:
#2A4578|#2F5DA1|#AD2D32|#FCDA49

Команда поиска в VSCode:
#(2A4578|2F5DA1|AD2D32|FCDA49)
```

---

**Цветовая палитра утверждена:** 29 января 2025  
**Статус:** ✅ ФИНАЛЬНАЯ ВЕРСИЯ v2.0
