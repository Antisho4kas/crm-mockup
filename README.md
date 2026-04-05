# Smart Workforce CRM with Effort Analytics

## Overview

Smart Workforce CRM is a lightweight customer relationship and workforce analytics system designed to improve project transparency, employee performance tracking, and effort estimation.

The system focuses on solving a common problem in consulting and enterprise environments:
tracking real work effort (person-hours) and transforming it into actionable performance insights.

This project simulates integration with enterprise systems (e.g. SAP or internal time-tracking tools) and provides a clean, user-friendly interface for managing projects, employees, and workload efficiency.

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

The design system is inspired by [Taiga](https://taiga.io/), an open-source project management platform. Custom CSS classes follow Taiga's clean, professional aesthetic:
- `.taiga-card` — content cards
- `.taiga-btn` — buttons
- `.taiga-alert` — alert banners
- `.taiga-badge` — status badges
- `.taiga-progress` — progress bars

## License

MIT
