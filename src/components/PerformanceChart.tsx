import React from 'react';

export const PerformanceChart: React.FC = () => {
  return (
    <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted rounded-lg">
      <div className="text-center">
        <div className="text-4xl mb-2">📊</div>
        <p className="text-sm text-muted-foreground">Performance Chart</p>
        <p className="text-xs text-muted-foreground mt-1">Chart.js integration ready</p>
      </div>
    </div>
  );
};
