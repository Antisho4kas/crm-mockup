# Как вносить изменения в Advanced CRM

## 📋 Обзор структуры проекта

```
crm-mockup/
├── src/
│   ├── components/          # Переиспользуемые компоненты
│   │   ├── Layout.tsx         # Основная разметка и навигация
│   │   ├── KPICard.tsx         # Карточки метрик
│   │   ├── ParadoxAlert.tsx    # Алерты KPI парадоксов
│   │   └── PerformanceChart.tsx # Графики производительности
│   ├── pages/               # Страницы приложения
│   │   ├── Dashboard.tsx       # Главная панель
│   │   ├── Customers.tsx       # Управление клиентами
│   │   ├── Projects.tsx        # Управление проектами
│   │   ├── TimeTracking.tsx     # Учёт времени
│   │   └── Analytics.tsx       # Аналитика и отчёты
│   ├── data/                # Mock данные
│   │   └── mockData.ts         # Тестовые данные
│   ├── locales/              # Локализация
│   │   ├── de.json             # Немецкий язык
│   │   └── en.json             # Английский язык
│   ├── types/                # TypeScript типы
│   │   └── index.ts            # Интерфейсы данных
│   ├── i18n/                 # Конфигурация i18next
│   │   └── index.ts
│   ├── App.tsx               # Главный компонент
│   ├── index.tsx             # Точка входа
│   └── index.css             # Стили Tailwind CSS
├── public/                   # Статические файлы
└── package.json             # Зависимости и скрипты
```

## 🎯 Основные компоненты

### 1. Layout (`src/components/Layout.tsx`)
- **Назначение:** Основная разметка приложения, навигация, хедер
- **Особенности:** Taiga-стиль, адаптивный дизайн, мультиязычность
- **Как изменить:** 
  - Навигация - массив `navigation`
  - Стили - классы `taiga-*` в CSS
  - Локализация - через `useTranslation()`

### 2. Dashboard (`src/pages/Dashboard.tsx`)
- **Назначение:** Главная панель с KPI и алертами
- **Особенности:** KPI карточки, Paradox Alerts, таблицы проектов
- **Как изменить:**
  - Данные - в `src/data/mockData.ts`
  - KPI метрики - массив `kpiData`
  - Алерты - массив `recentActivities`

### 3. KPICard (`src/components/KPICard.tsx`)
- **Назначение:** Карточки метрик с трендами
- **Особенности:** Taiga-стиль, анимации, адаптивные цвета
- **Как изменить:**
  - Стили - классы `taiga-metric-card`
  - Иконки - через `lucide-react`
  - Цвета - динамические классы

## 📊 Работа с данными

### Mock данные (`src/data/mockData.ts`)
```typescript
// Добавление нового клиента
export const mockCustomers: Customer[] = [
  {
    id: '4',
    name: 'New Customer AG',
    company: 'New Customer AG',
    email: 'contact@new-customer.de',
    phone: '+49 40 12345678',
    address: 'Mönckebergstraße 1, 20095 Hamburg',
    projects: [],
    totalRevenue: 0,
    createdAt: new Date(),
    status: 'prospect',
    satisfactionScore: 0,
    churnRisk: 'medium'
  }
];

// Добавление нового проекта
export const mockProjects: Project[] = [
  {
    id: '4',
    name: 'New Digital Project',
    customerId: '1',
    description: 'New project description',
    status: 'planning',
    startDate: new Date(),
    budget: 100000,
    actualCost: 0,
    assignedEmployees: ['1'],
    tasks: [],
    progress: 0,
    priority: 'high',
    complexity: 'complex',
    riskLevel: 'medium',
    roi: 2.0,
    template: 'digital-transformation'
  }
];
```

### Типы данных (`src/types/index.ts`)
```typescript
// Добавление нового типа
export interface NewEntity {
  id: string;
  name: string;
  // ... другие поля
}
```

## 🎨 Работа со стилями

### Taiga CSS классы (`src/index.css`)
```css
/* Создание нового компонента */
.taiga-new-component {
  @apply bg-white rounded-lg shadow-sm border border-gray-200 p-6 transition-all duration-200 hover:shadow-md;
}

/* Создание новой кнопки */
.taiga-btn-new-style {
  @apply px-4 py-2 text-sm font-medium rounded-md transition-all duration-200;
  @apply bg-purple-500 text-white hover:bg-purple-600;
}
```

### Использование в компонентах
```typescript
// Применение стилей
<div className="taiga-new-component">
  <button className="taiga-btn taiga-btn-new-style">
    Button Text
  </button>
</div>
```

## 🌐 Локализация

### Добавление новых переводов (`src/locales/de.json`)
```json
{
  "navigation": {
    "newSection": "Neuer Bereich"
  },
  "newFeature": {
    "title": "Neue Funktion",
    "description": "Beschreibung der neuen Funktion"
  }
}
```

### Использование в компонентах
```typescript
import { useTranslation } from 'react-i18next';

const NewComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('newFeature.title')}</h1>
      <p>{t('newFeature.description')}</p>
    </div>
  );
};
```

## 🔄 Процесс добавления новой функциональности

### Шаг 1: Определение типов
```typescript
// src/types/index.ts
export interface NewFeature {
  id: string;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  createdAt: Date;
}
```

### Шаг 2: Добавление mock данных
```typescript
// src/data/mockData.ts
export const mockNewFeatures: NewFeature[] = [
  {
    id: '1',
    title: 'Sample Feature',
    description: 'Sample description',
    status: 'active',
    createdAt: new Date()
  }
];
```

### Шаг 3: Создание компонента
```typescript
// src/components/NewFeatureComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { mockNewFeatures } from '../data/mockData';

export const NewFeatureComponent: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="taiga-card">
      <h2>{t('newFeature.title')}</h2>
      {mockNewFeatures.map(feature => (
        <div key={feature.id} className="taiga-metric-card">
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};
```

### Шаг 4: Создание страницы
```typescript
// src/pages/NewFeaturePage.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NewFeatureComponent } from '../components/NewFeatureComponent';

export const NewFeaturePage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          {t('navigation.newSection')}
        </h1>
        <p className="text-gray-600 mt-2">
          {t('newFeature.description')}
        </p>
      </div>
      
      <NewFeatureComponent />
    </div>
  );
};
```

### Шаг 5: Добавление маршрутизации
```typescript
// src/App.tsx
import NewFeaturePage from './pages/NewFeaturePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* ... существующие маршруты */}
          <Route path="/new-feature" element={<NewFeaturePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
```

### Шаг 6: Обновление навигации
```typescript
// src/components/Layout.tsx
const navigation = [
  // ... существующие пункты
  {
    name: t('navigation.newSection'),
    href: '/new-feature',
    icon: NewIcon, // импортировать из lucide-react
    current: location.pathname === '/new-feature'
  }
];
```

## 🚀 Запуск и разработка

### Разработка
```bash
# Запуск dev сервера
npm start

# Сборка production версии
npm run build

# Запуск тестов
npm test
```

### Горячая перезагрузка
- Изменения в `.tsx`, `.ts`, `.css` файлах автоматически применяются
- Изменения в `package.json` требуют перезапуска
- Изменения в `tailwind.config.js` требуют перезапуска

## 📱 Адаптивный дизайн

### Taiga breakpoints
```css
/* Tailwind CSS классы */
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
```

### Пример адаптивного компонента
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Контент */}
</div>
```

## 🎨 Цветовая схема Taiga

### Основные цвета
```css
:root {
  --taiga-primary: #4db8ff;      /* Основной синий */
  --taiga-secondary: #6930c3;    /* Фиолетовый */
  --taiga-success: #5cb85c;      /* Зелёный */
  --taiga-warning: #f0ad4e;      /* Жёлтый */
  --taiga-danger: #d9534f;        /* Красный */
  --taiga-info: #5bc0de;         /* Информационный */
}
```

### Использование цветов
```typescript
<div className="bg-blue-500">     <!-- Основной цвет -->
<div className="bg-green-500">    <!-- Успех -->
<div className="bg-yellow-500">   <!-- Предупреждение -->
<div className="bg-red-500">      <!-- Ошибка -->
```

## 🔧 Расширение функциональности

### Добавление новых графиков
```typescript
// Установка Chart.js
npm install chart.js react-chartjs-2

// Использование в компоненте
import { Line, Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{
      label: 'Revenue',
      data: [1000, 1200, 1400],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }]
  };
  
  return <Line data={data} />;
};
```

### Интеграция с API
```typescript
// src/services/api.ts
export const api = {
  getCustomers: async () => {
    const response = await fetch('/api/customers');
    return response.json();
  },
  
  createProject: async (project: Project) => {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project)
    });
    return response.json();
  }
};
```

## 📝 Лучшие практики

### 1. TypeScript
- Всегда определяйте типы для props
- Используйте интерфейсы для структур данных
- Избегайте `any` типа

### 2. Компоненты
- Создавайте переиспользуемые компоненты
- Используйте Taiga CSS классы
- Следуйте принципу单一 ответственности

### 3. Стили
- Используйте Tailwind CSS классы
- Создавайте кастомные Taiga классы
- Следуйте консистентному дизайну

### 4. Локализация
- Всегда используйте `useTranslation()`
- Добавляйте переводы для всех текстов
- Поддерживайте German и English

## 🐛 Отладка

### Chrome DevTools
- Используйте React Developer Tools
- Проверяйте консоль на ошибки
- Анализируйте сетевые запросы

### Common ошибки
1. **Missing imports** - проверьте импорты компонентов
2. **Type errors** - проверьте типы props
3. **CSS conflicts** - проверьте классы Tailwind
4. **Route errors** - проверьте пути в App.tsx

---

## 🎯 Заключение

Этот CRM система построена с использованием:
- **React 18 + TypeScript** - Современный фронтенд
- **Tailwind CSS** - Утилитарные CSS
- **i18next** - Мультиязычность
- **Lucide React** - Иконки
- **Taiga Design** - Вдохновлённый дизайн

Следуйте этой документации для расширения функциональности и поддержания консистентного стиля кода.
