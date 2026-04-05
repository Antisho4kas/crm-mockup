import React from 'react';
import { LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string | number;
  change?: number;
  changeType?: 'increase' | 'decrease';
  icon: LucideIcon;
  color: string;
}

export const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color
}) => {
  return (
    <div className="taiga-metric-card hover:scale-105 transition-transform duration-200">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <div className="flex items-center mt-2 space-x-1">
              {changeType === 'increase' ? (
                <TrendingUp className="h-4 w-4 text-green-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span className={`text-sm font-medium ${
                changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}>
                {changeType === 'increase' ? '+' : ''}{change}%
              </span>
            </div>
          )}
        </div>
        
        <div className={`
          w-12 h-12 rounded-lg flex items-center justify-center
          ${color.includes('blue') ? 'bg-blue-100' : ''}
          ${color.includes('green') ? 'bg-green-100' : ''}
          ${color.includes('purple') ? 'bg-purple-100' : ''}
          ${color.includes('orange') ? 'bg-orange-100' : ''}
          ${color.includes('emerald') ? 'bg-emerald-100' : ''}
          ${color.includes('indigo') ? 'bg-indigo-100' : ''}
        `}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </div>
  );
};
