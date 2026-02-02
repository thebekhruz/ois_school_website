# 📱 МОБИЛЬНЫЕ СТИЛИ - ШПАРГАЛКА

## 🎯 БЫСТРЫЙ СТАРТ

### Hero секция
```tsx
<section className="hero-section hero-wrapper">
  <h1 className="hero-title text-hero-h1">Заголовок</h1>
  <p className="hero-subtitle">Подзаголовок</p>
  <button className="cta-button">Действие</button>
</section>
```

### Контентная секция
```tsx
<section className="content-section">
  <h2 className="text-section-h1">Секция</h2>
  <div className="grid-mobile-1 gap-mobile-normal">
    {/* карточки */}
  </div>
</section>
```

### Карточка
```tsx
<div className="card-mobile compact-p">
  <h3 className="text-card-h2">Заголовок</h3>
  <p className="text-small">Текст</p>
</div>
```

### Карусель
```tsx
<div className="carousel-mobile">
  {items.map((item) => (
    <div className="card-mobile">...</div>
  ))}
</div>
```

---

## 📐 РАЗМЕРЫ

| Элемент | Класс | Размер |
|---------|-------|--------|
| Hero H1 | `.text-hero-h1` | 32px |
| Section H1 | `.text-section-h1` | 26px |
| Card H2 | `.text-card-h2` | 20px |
| Card H3 | `.text-card-h3` | 16px |
| Body | `.text-body` | 15px |
| Small | `.text-small` | 13px |
| Badge | `.text-badge` | 11px |

---

## 🎨 КОМПОНЕНТЫ

### Кнопки
```tsx
<button className="cta-button">Текст</button>
// height: 48px, font-size: 15px
```

### Формы
```tsx
<input className="form-input-mobile" />
// height: 46px, font-size: 15px
```

### Иконки
```tsx
<Icon className="icon-primary" />   // 28px
<Icon className="icon-secondary" /> // 20px
<Icon className="icon-small" />     // 16px
```

---

## 📏 SPACING

| Класс | Gap/Padding |
|-------|-------------|
| `.compact-p` | 16px |
| `.gap-mobile-tight` | 12px |
| `.gap-mobile-normal` | 16px |
| `.gap-mobile-loose` | 20px |

---

## 🎲 GRID

```tsx
.grid-mobile-1  // 1 колонка
.grid-mobile-2  // 2 колонки
.grid-mobile-3  // 3 колонки
```

---

## 🎠 КАРУСЕЛЬ

```tsx
.carousel-mobile              // 280px (74%)
.carousel-mobile-wide         // 300px (80%)
.carousel-mobile-narrow       // 244px (65%)
```

---

## ✅ ЧЕКЛИСТ

- [ ] Hero → `.hero-section`, `.hero-wrapper`
- [ ] Hero H1 → `.text-hero-h1`
- [ ] Section H1 → `.text-section-h1`
- [ ] Card H2 → `.text-card-h2`
- [ ] Cards → `.card-mobile .compact-p`
- [ ] Buttons → `.cta-button`
- [ ] Forms → `.form-input-mobile`
- [ ] Touch targets → min 44px
