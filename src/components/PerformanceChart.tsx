import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { mockEmployees } from '../data/mockData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const PerformanceChart: React.FC = () => {
  const { t, i18n } = useTranslation();

  const labels = mockEmployees.map(e => e.name.split(' ').slice(1).join(' '));

  const quantitativeScores = mockEmployees.map(e => e.performanceMetrics.quantitativeScore);
  const qualitativeScores = mockEmployees.map(e => e.performanceMetrics.qualitativeScore);
  const overallRatings = mockEmployees.map(e => e.performanceMetrics.overallRating);

  const data = {
    labels,
    datasets: [
      {
        label: i18n.language === 'de' ? 'Quantitative Bewertung' : 'Quantitative Score',
        data: quantitativeScores,
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 2,
        borderRadius: 6,
        order: 2
      },
      {
        label: i18n.language === 'de' ? 'Qualitative Bewertung' : 'Qualitative Score',
        data: qualitativeScores,
        backgroundColor: 'rgba(16, 185, 129, 0.6)',
        borderColor: 'rgb(16, 185, 129)',
        borderWidth: 2,
        borderRadius: 6,
        order: 2
      },
      {
        label: i18n.language === 'de' ? 'Gesamtbewertung' : 'Overall Rating',
        data: overallRatings,
        type: 'line' as const,
        borderColor: 'rgb(168, 85, 247)',
        backgroundColor: 'rgba(168, 85, 247, 0.1)',
        borderWidth: 3,
        pointBackgroundColor: 'rgb(168, 85, 247)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.3,
        fill: true,
        order: 1
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12,
            weight: 500
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleFont: { size: 13, weight: 600 },
        bodyFont: { size: 12 },
        padding: 12,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          label: function(context: any) {
            return `${context.dataset.label}: ${context.parsed.y}%`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 70,
        max: 100,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
          drawBorder: false
        },
        ticks: {
          font: { size: 11 },
          callback: (value: number) => `${value}%`
        }
      },
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          font: { size: 11, weight: 500 }
        }
      }
    }
  };

  return (
    <div className="h-72">
      <Bar data={data} options={options} />
    </div>
  );
};
