import React from 'react';
import { useTranslation } from 'react-i18next';

export const TimeTracking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          {t('timeTracking.title')}
        </h1>
        <p className="text-muted-foreground mt-2">
          Smart time tracking with quality metrics and productivity analysis
        </p>
      </div>

      <div className="kpi-card">
        <div className="text-center py-12">
          <div className="text-4xl mb-2">⏰</div>
          <p className="text-lg font-medium">Time Tracking</p>
          <p className="text-sm text-muted-foreground mt-1">Quality-adjusted time management</p>
        </div>
      </div>
    </div>
  );
};
