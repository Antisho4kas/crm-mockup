import React from 'react';
import { useTranslation } from 'react-i18next';

export const Analytics: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          {t('analytics.title')}
        </h1>
        <p className="text-muted-foreground mt-2">
          Dual performance system with qualitative vs quantitative metrics analysis
        </p>
      </div>

      <div className="kpi-card">
        <div className="text-center py-12">
          <div className="text-4xl mb-2">📈</div>
          <p className="text-lg font-medium">Advanced Analytics</p>
          <p className="text-sm text-muted-foreground mt-1">KPI effectiveness and insights</p>
        </div>
      </div>
    </div>
  );
};
