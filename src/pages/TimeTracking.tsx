import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Clock,
  Plus,
  Filter,
  Search,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Calendar,
  Star,
  Target
} from 'lucide-react';
import { mockTimeEntries, mockEmployees, mockProjects, mockTasks } from '../data/mockData';

export const TimeTracking: React.FC = () => {
  const { t } = useTranslation();
  const [employeeFilter, setEmployeeFilter] = useState<string>('all');
  const [projectFilter, setProjectFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getEmployeeName = (employeeId: string) => {
    return mockEmployees.find(e => e.id === employeeId)?.name || 'Unknown';
  };

  const getProjectName = (projectId: string) => {
    return mockProjects.find(p => p.id === projectId)?.name || 'Unknown';
  };

  const getTaskName = (taskId: string) => {
    return mockTasks.find(task => task.id === taskId)?.name || 'Unknown';
  };

  const totalHours = mockTimeEntries.reduce((sum, e) => sum + e.hours, 0);
  const billableHours = mockTimeEntries.filter(e => e.approved).reduce((sum, e) => sum + e.hours, 0);
  const totalRevenue = mockTimeEntries.reduce((sum, e) => sum + (e.hours * e.hourlyRate), 0);
  const avgHourlyRate = Math.round(mockTimeEntries.reduce((sum, e) => sum + e.hourlyRate, 0) / mockTimeEntries.length);

  const filteredEntries = useMemo(() => {
    return mockTimeEntries.filter(entry => {
      const matchesEmployee = employeeFilter === 'all' || entry.employeeId === employeeFilter;
      const matchesProject = projectFilter === 'all' || entry.projectId === projectFilter;
      const matchesSearch = entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        getEmployeeName(entry.employeeId).toLowerCase().includes(searchQuery.toLowerCase());
      return matchesEmployee && matchesProject && matchesSearch;
    });
  }, [employeeFilter, projectFilter, searchQuery]);

  const getComplexityLabel = (complexity: string) => {
    const labels: Record<string, string> = {
      simple: t('timeTracking.complexitySimple'),
      medium: t('timeTracking.complexityMedium'),
      complex: t('timeTracking.complexityComplex'),
    };
    return labels[complexity] || complexity;
  };

  const getImpactLabel = (impact: string) => {
    const labels: Record<string, string> = {
      low: t('timeTracking.impactLow'),
      medium: t('timeTracking.impactMedium'),
      high: t('timeTracking.impactHigh'),
    };
    return labels[impact] || impact;
  };

  const getImpactBadge = (impact: string) => {
    const classes: Record<string, string> = {
      high: 'taiga-badge taiga-badge-danger',
      medium: 'taiga-badge taiga-badge-warning',
      low: 'taiga-badge taiga-badge-success',
    };
    return classes[impact] || 'taiga-badge';
  };

  const getComplexityBadge = (complexity: string) => {
    const classes: Record<string, string> = {
      complex: 'taiga-badge taiga-badge-danger',
      medium: 'taiga-badge taiga-badge-warning',
      simple: 'taiga-badge taiga-badge-success',
    };
    return classes[complexity] || 'taiga-badge';
  };

  const getQualityStars = (score: number) => {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 >= 0.5;
    return (
      <div className="flex items-center space-x-0.5">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={`full-${i}`} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalf && <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 opacity-50" />}
        <span className="text-xs text-gray-500 ml-1">{score}</span>
      </div>
    );
  };

  // Employee summary
  const employeeSummary = useMemo(() => {
    return mockEmployees.map(emp => {
      const empEntries = mockTimeEntries.filter(e => e.employeeId === emp.id);
      const hours = empEntries.reduce((sum, e) => sum + e.hours, 0);
      const revenue = empEntries.reduce((sum, e) => sum + (e.hours * e.hourlyRate), 0);
      const avgQuality = empEntries.length > 0
        ? empEntries.reduce((sum, e) => sum + (e.qualityScore || 0), 0) / empEntries.length
        : 0;
      return { ...emp, hours, revenue, avgQuality, entriesCount: empEntries.length };
    });
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t('timeTracking.title')}
          </h1>
          <p className="text-gray-600 mt-2">
            {t('timeTracking.subtitle')}
          </p>
        </div>
        <button
          onClick={() => alert('Add Entry functionality coming soon!')}
          className="taiga-btn taiga-btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>{t('timeTracking.addEntry')}</span>
        </button>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('timeTracking.totalHours')}</p>
              <p className="text-2xl font-bold text-gray-900">{totalHours}h</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('timeTracking.billableHours')}</p>
              <p className="text-2xl font-bold text-gray-900">{billableHours}h</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('timeTracking.totalRevenue')}</p>
              <p className="text-2xl font-bold text-gray-900">€{totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('timeTracking.avgHourlyRate')}</p>
              <p className="text-2xl font-bold text-gray-900">€{avgHourlyRate}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="taiga-card">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder={t('dashboard.searchPlaceholder') || 'Search...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="taiga-input pl-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3 flex-wrap">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={employeeFilter}
                onChange={(e) => setEmployeeFilter(e.target.value)}
                className="taiga-select"
              >
                <option value="all">{t('timeTracking.allEmployees')}</option>
                {mockEmployees.map(emp => (
                  <option key={emp.id} value={emp.id}>{emp.name}</option>
                ))}
              </select>
            </div>

            <select
              value={projectFilter}
              onChange={(e) => setProjectFilter(e.target.value)}
              className="taiga-select"
            >
              <option value="all">{t('timeTracking.allProjects')}</option>
              {mockProjects.map(proj => (
                <option key={proj.id} value={proj.id}>{proj.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Time Entries Table */}
      {filteredEntries.length > 0 ? (
        <div className="taiga-card">
          <div className="overflow-x-auto">
            <table className="taiga-table">
              <thead>
                <tr>
                  <th className="taiga-table-header">{t('timeTracking.employee')}</th>
                  <th className="taiga-table-header">{t('timeTracking.project')}</th>
                  <th className="taiga-table-header">{t('timeTracking.task')}</th>
                  <th className="taiga-table-header">{t('timeTracking.hours')}</th>
                  <th className="taiga-table-header">{t('timeTracking.hourlyRate')}</th>
                  <th className="taiga-table-header">{t('timeTracking.qualityScore')}</th>
                  <th className="taiga-table-header">{t('timeTracking.taskComplexity')}</th>
                  <th className="taiga-table-header">{t('timeTracking.clientImpact')}</th>
                  <th className="taiga-table-header">{t('timeTracking.date')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredEntries.map((entry) => (
                  <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                    <td className="taiga-table-cell">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">
                            {getEmployeeName(entry.employeeId).split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <span className="font-medium text-gray-900">{getEmployeeName(entry.employeeId)}</span>
                      </div>
                    </td>
                    <td className="taiga-table-cell">{getProjectName(entry.projectId)}</td>
                    <td className="taiga-table-cell">{getTaskName(entry.taskId)}</td>
                    <td className="taiga-table-cell">
                      <span className="font-medium">{entry.hours}h</span>
                    </td>
                    <td className="taiga-table-cell">€{entry.hourlyRate}</td>
                    <td className="taiga-table-cell">
                      {entry.qualityScore ? getQualityStars(entry.qualityScore) : '-'}
                    </td>
                    <td className="taiga-table-cell">
                      <span className={getComplexityBadge(entry.taskComplexity)}>
                        {getComplexityLabel(entry.taskComplexity)}
                      </span>
                    </td>
                    <td className="taiga-table-cell">
                      <span className={getImpactBadge(entry.clientImpact)}>
                        {getImpactLabel(entry.clientImpact)}
                      </span>
                    </td>
                    <td className="taiga-table-cell">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(entry.date).toLocaleDateString()}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="taiga-card text-center py-12">
          <Clock className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900">{t('timeTracking.noEntries')}</p>
          <p className="text-sm text-gray-500 mt-1">{t('timeTracking.noEntriesDesc')}</p>
        </div>
      )}

      {/* Employee Productivity Summary */}
      <div className="taiga-card">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <Target className="mr-2 h-5 w-5 text-gray-500" />
          {t('timeTracking.productivityAnalysis')}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {employeeSummary.map(emp => (
            <div key={emp.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {emp.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{emp.name}</h4>
                  <p className="text-xs text-gray-500">{emp.department}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t('timeTracking.hours')}</span>
                  <span className="font-medium">{emp.hours}h</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t('timeTracking.totalRevenue')}</span>
                  <span className="font-medium">€{emp.revenue.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t('timeTracking.qualityScore')}</span>
                  {emp.avgQuality > 0 ? getQualityStars(emp.avgQuality) : <span className="text-gray-400">-</span>}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t('timeTracking.hourlyRate')}</span>
                  <span className="font-medium">€{emp.hourlyRate}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">{t('dashboard.activeProjects')}</span>
                  <span className="font-medium">{emp.projects.length}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
