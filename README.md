# Advanced CRM System

Интеллектуальная CRM-система с системой обнаружения KPI-парадоксов для консалтинговых компаний.

## 🚀 Демо

[Live Demo](https://your-username.github.io/crm-mockup/)

##  Технологический стек

- **React 18** + **TypeScript**
- **Tailwind CSS** — стилизация с Taiga-inspired дизайн-системой
- **React Router 6** — маршрутизация
- **i18next** — мультиязычность (DE/EN)
- **Lucide React** — иконки
- **Chart.js** — графики (готовы для интеграции)

## ✨ Ключевые особенности

### 📊 Intelligent Dashboard
- KPI-метрики с трендами
- Система обнаружения KPI-парадоксов (gaming, неэффективность)
- Отслеживание активности и производительности команды
- Анализ проектов с бюджетом и прогрессом

### 🎯 Dual Performance System
- **Количественные метрики** — объём работы, скорость выполнения
- **Качественные метрики** — оценка качества, удовлетворённость клиентов
- **Ролевые метрики** — специфичные для консультантов, разработчиков, менеджеров

### 🌐 Мультиязычность
- Немецкий и английский языки
- Автоматическое определение языка браузера
- Переключение в реальном времени

## 📦 Установка

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/crm-mockup.git

# Перейти в директорию
cd crm-mockup

# Установить зависимости
npm install

# Запустить dev-сервер
npm start
```

Приложение откроется на **http://localhost:3000**

## 🏗 Структура проекта

```
crm-mockup/
├── src/
│   ├── components/       # Переиспользуемые компоненты
│   │   ├── Layout.tsx      # Оболочка: сайдбар, навигация, хедер
│   │   ├── KPICard.tsx     # Карточки метрик
│   │   ├── ParadoxAlert.tsx # Алерты KPI-парадоксов
│   │   └── PerformanceChart.tsx
│   ├── pages/            # Страницы
│   │   ├── Dashboard.tsx   # Главная панель (полностью реализована)
│   │   ├── Customers.tsx   # Управление клиентами
│   │   ├── Projects.tsx    # Управление проектами
│   │   ├── TimeTracking.tsx # Учёт времени
│   │   └── Analytics.tsx   # Аналитика
│   ├── data/
│   │   └── mockData.ts     # Mock-данные
│   ├── types/
│   │   └── index.ts        # TypeScript интерфейсы
│   ├── i18n/
│   │   └── index.ts        # Конфигурация локализации
│   ├── locales/
│   │   ├── de.json         # Немецкий
│   │   └── en.json         # Английский
│   └── App.tsx             # Главный компонент
└── public/
```

##  Скрипты

| Команда | Описание |
|---------|----------|
| `npm start` | Запуск dev-сервера |
| `npm run build` | Production сборка |
| `npm test` | Запуск тестов |

## 🎨 Дизайн-система

Проект использует кастомные Taiga-inspired CSS классы:
- `.taiga-card` — карточки
- `.taiga-btn` — кнопки
- `.taiga-alert` — алерты
- `.taiga-badge` — бейджи статусов
- `.taiga-progress` — прогресс-бары

## 📱 Адаптивный дизайн

- **Desktop** — фиксированный сайдбар слева
- **Mobile** — выдвижное меню с бургером

## 🔧 Как развернуть на GitHub Pages

```bash
# Установить gh-pages
npm install --save-dev gh-pages

# Добавить в package.json:
"homepage": "https://your-username.github.io/crm-mockup"

# В scripts добавить:
"predeploy": "npm run build",
"deploy": "gh-pages -d build"

# Развернуть
npm run deploy
```

## 📄 Лицензия

MIT
