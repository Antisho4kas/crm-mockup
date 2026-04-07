import React from 'react';
import { useTranslation } from 'react-i18next';
import { ParadoxAlert as ParadoxAlertType } from '../types';
import { AlertTriangle, AlertCircle, Info, X, ExternalLink } from 'lucide-react';

interface ParadoxAlertProps {
  alert: ParadoxAlertType;
  onDismiss?: () => void;
}

export const ParadoxAlert: React.FC<ParadoxAlertProps> = ({ alert, onDismiss }) => {
  const { t } = useTranslation();

  const getAlertIcon = () => {
    switch (alert.type) {
      case 'gaming':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      case 'ineffective':
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getAlertClass = () => {
    switch (alert.severity) {
      case 'high':
        return 'taiga-alert taiga-alert-danger';
      case 'medium':
        return 'taiga-alert taiga-alert-warning';
      default:
        return 'taiga-alert taiga-alert-info';
    }
  };

  const getSeverityBadge = () => {
    switch (alert.severity) {
      case 'high':
        return 'taiga-badge taiga-badge-danger';
      case 'medium':
        return 'taiga-badge taiga-badge-warning';
      default:
        return 'taiga-badge taiga-badge-info';
    }
  };

  return (
    <div className={`${getAlertClass()} taiga-fade-in`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {getAlertIcon()}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <h4 className="text-sm font-semibold text-gray-900">
                {alert.type === 'gaming' && t('kpi.gamingWarning')}
                {alert.type === 'ineffective' && t('kpi.ineffectiveMetrics')}
                {alert.type === 'misaligned' && 'Misaligned Metrics'}
              </h4>
              <span className={getSeverityBadge()}>
                {alert.severity.toUpperCase()}
              </span>
            </div>

            {onDismiss && (
              <button
                onClick={onDismiss}
                className="p-1 rounded hover:bg-gray-100 transition-colors"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>
            )}
          </div>

          <p className="text-sm text-gray-700 mb-3">
            {alert.description}
          </p>

          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <div className="flex items-center space-x-2 mb-1">
              <ExternalLink className="h-4 w-4 text-gray-500" />
              <span className="text-xs font-medium text-gray-700">{t('kpi.recommendations')}</span>
            </div>
            <p className="text-sm text-gray-800 font-medium">
              {alert.recommendation}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Detected: {alert.detectedAt.toLocaleDateString()}</span>
            <span>Employee ID: {alert.employeeId}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
