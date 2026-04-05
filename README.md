# Advanced CRM System

An intelligent CRM system with KPI paradox detection for consulting companies.

## Live Demo

[Live Demo on GitHub Pages](https://antisho4kas.github.io/crm-mockup/)

## Tech Stack

- **React 18** + **TypeScript**
- **Tailwind CSS** — Taiga-inspired design system
- **React Router 6** — client-side routing
- **i18next** — internationalization (DE/EN)
- **Lucide React** — icon library
- **Chart.js** — charting support (ready for integration)

## Features

### Intelligent Dashboard
- KPI metrics with trend indicators
- KPI paradox detection system (gaming, ineffective metrics)
- Activity feed and team performance tracking
- Project overview with budget and progress

### Dual Performance System
- **Quantitative metrics** — workload volume, completion speed
- **Qualitative metrics** — quality scores, client satisfaction
- **Role-specific metrics** — tailored for consultants, developers, and managers

### Internationalization
- German and English languages
- Automatic browser language detection
- Real-time language switching

## Installation

```bash
# Clone the repository
git clone https://github.com/Antisho4kas/crm-mockup.git

# Navigate to project directory
cd crm-mockup

# Install dependencies
npm install

# Start dev server
npm start
```

The app opens at **http://localhost:3000**

## Project Structure

```
crm-mockup/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout.tsx      # App shell: sidebar, navigation, header
│   │   ├── KPICard.tsx     # KPI metric cards
│   │   ├── ParadoxAlert.tsx # KPI paradox alerts
│   │   └── PerformanceChart.tsx
│   ├── pages/            # Page components
│   │   ├── Dashboard.tsx   # Main dashboard (fully implemented)
│   │   ├── Customers.tsx   # Customer management
│   │   ├── Projects.tsx    # Project management
│   │   ├── TimeTracking.tsx # Time tracking
│   │   └── Analytics.tsx   # Analytics & reports
│   ├── data/
│   │   └── mockData.ts     # Mock data
│   ├── types/
│   │   └── index.ts        # TypeScript interfaces
│   ├── i18n/
│   │   └── index.ts        # i18n configuration
│   ├── locales/
│   │   ├── de.json         # German translations
│   │   └── en.json         # English translations
│   └── App.tsx             # Root component
└── public/
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server |
| `npm run build` | Production build |
| `npm test` | Run tests |

## Design System

The project uses custom Taiga-inspired CSS classes:
- `.taiga-card` — content cards
- `.taiga-btn` — buttons
- `.taiga-alert` — alert banners
- `.taiga-badge` — status badges
- `.taiga-progress` — progress bars

## License

MIT
