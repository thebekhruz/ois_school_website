# 🎓 Oxbridge International School - Website

Официальный веб-сайт частной школы Oxbridge International School в Ташкенте, Узбекистан.

---

## 🚀 Быстрый старт

### 1. Установите зависимости:
```bash
pnpm install
# или
npm install
```

### 2. Запустите dev-сервер:
```bash
pnpm dev
# или
npm run dev
```

### 3. Откройте браузер:
```
http://localhost:5173
```

🎉 **Готово!**

---

## 📋 Требования

- Node.js 18.0.0 или выше
- pnpm (рекомендуется) или npm

---

## 🛠️ Основные команды

| Команда | Описание |
|---------|----------|
| `pnpm dev` | Запуск dev-сервера |
| `pnpm build` | Сборка для продакшена |
| `pnpm preview` | Предпросмотр production сборки |
| `pnpm lint` | Проверка кода на ошибки |

---

## 📁 Структура проекта

```
oxbridge-website/
├── public/
│   └── university-logos/       # Логотипы университетов
├── src/
│   ├── app/
│   │   ├── components/         # React компоненты
│   │   ├── contexts/           # Контексты (язык, навигация)
│   │   ├── pages/              # Страницы сайта
│   │   └── App.tsx             # Главный компонент
│   ├── data/
│   │   └── universities.ts     # Данные университетов
│   ├── styles/
│   │   ├── theme.css           # Цвета и токены брендинга
│   │   ├── fonts.css           # Шрифты
│   │   └── index.css           # Общие стили
│   └── main.tsx                # Точка входа
├── INSTALLATION.md             # Подробная инструкция по установке
├── UNIVERSITIES_GUIDE.md       # Руководство по управлению университетами
└── UNIVERSITY_LOGOS_INSTRUCTIONS.md  # Инструкция по логотипам
```

---

## 🎨 Брендинг

### Цвета:
- **Navy Gradient:** `#2A4578` → `#2F5DA1`
- **Accent Red:** `#AD2D32`
- **Bright Yellow:** `#FCDA49`

### Шрифты:
- **Philosopher** - Заголовки
- **Lora** - Подзаголовки
- **Manrope** - UI элементы
- **Cormorant Garamond** - Акценты
- **Fraunces** - Специальные заголовки

### Языки:
- 🇷🇺 Русский
- 🇺🇿 Узбекский
- 🇬🇧 Английский

---

## 📚 Документация

### Для разработчиков:
- **[INSTALLATION.md](/INSTALLATION.md)** - Полная инструкция по установке и запуску проекта

### Для контент-менеджеров:
- **[UNIVERSITIES_GUIDE.md](/UNIVERSITIES_GUIDE.md)** - Как управлять данными университетов
- **[UNIVERSITY_LOGOS_INSTRUCTIONS.md](/UNIVERSITY_LOGOS_INSTRUCTIONS.md)** - Как добавлять логотипы

---

## 🌐 Основные страницы

### Главная страница
- Hero секция
- Программы обучения
- Преимущества школы

### О школе (`/about`)
- История и миссия
- Философия образования
- Поступление в ВУЗы (интерактивная карта)

### Программы (`/programs`)
- Kindergarten (2-6 лет)
- Primary School (6-12 лет)
- High School (13-18 лет)
  - IB Diploma Programme
  - Russian Programme

### Кампусы (`/campuses`)
- Кампус 1
- Кампус 2

### Поступление (`/admissions`)
- Процесс поступления
- Стоимость обучения
- Онлайн заявка

### Контакты (`/contacts`)
- Адреса кампусов
- Контактная информация
- Форма обратной связи

---

## 🔧 Редактирование контента

### Изменить данные университетов:
1. Откройте `/src/data/universities.ts`
2. Следуйте инструкциям в файле
3. См. подробное руководство: `/UNIVERSITIES_GUIDE.md`

### Добавить логотип университета:
1. Сохраните PNG/JPG в `/public/university-logos/`
2. Добавьте путь в `/src/data/universities.ts`
3. См. инструкцию: `/UNIVERSITY_LOGOS_INSTRUCTIONS.md`

### Изменить цвета и стили:
- Откройте `/src/styles/theme.css`

### Изменить тексты страниц:
- Откройте нужную страницу в `/src/app/pages/`

---

## 🏗️ Технологический стек

- **React** 18 - UI библиотека
- **TypeScript** - Типизация
- **Vite** - Сборщик и dev-сервер
- **Tailwind CSS v4** - Стили
- **React Router** - Маршрутизация
- **React Simple Maps** - Интерактивная карта
- **Lucide React** - Иконки
- **Recharts** - Графики и визуализация

---

## 📱 Адаптивность

Сайт полностью адаптирован для:
- 💻 Desktop (1920px+)
- 💻 Laptop (1024px - 1920px)
- 📱 Tablet (768px - 1024px)
- 📱 Mobile (320px - 768px)

---

## 🌍 Многоязычность

Контент доступен на трех языках. Переключение осуществляется через меню в header.

Языковой контекст: `/src/app/contexts/LanguageContext.tsx`

---

## 🚀 Production сборка

### Создать сборку:
```bash
pnpm build
```

### Предварительный просмотр:
```bash
pnpm preview
```

### Результат:
Папка `dist/` с готовыми файлами для хостинга.

---

## 🌐 Деплой

Проект готов к развертыванию на:
- [Vercel](https://vercel.com/) ⭐ Рекомендуется
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

---

## 🤝 Вклад в проект

1. Создайте ветку для вашей фичи
2. Внесите изменения
3. Создайте Pull Request

---

## 📄 Лицензия

© 2025 Oxbridge International School. Все права защищены.

---

## 📞 Контакты

**Oxbridge International School**
- 🌐 Website: [oxbridge.uz](https://oxbridge.uz)
- 📧 Email: info@oxbridge.uz
- 📱 Telegram: @oxbridge_school
- 📞 Телефон: +998 XX XXX XX XX

**Кампус 1:**
- 📍 Адрес: Ташкент, [Адрес кампуса 1]

**Кампус 2:**
- 📍 Адрес: Ташкент, [Адрес кампуса 2]

---

**Последнее обновление:** 29 января 2025
