import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  FolderOpen,
  Plus,
  Filter,
  Search,
  TrendingUp,
  DollarSign,
  Activity,
  Users,
  Target
} from 'lucide-react';
import { mockProjects, mockCustomers, mockEmployees } from '../data/mockData';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [priorityFilter, setPriorityFilter] = useState<string>('all');
  const [customerFilter, setCustomerFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getCustomerName = (customerId: string) => {
    return mockCustomers.find(c => c.id === customerId)?.name || 'Unknown';
  };

  const getEmployeeNames = (employeeIds: string[]) => {
    return employeeIds.map(id => mockEmployees.find(e => e.id === id)?.name || '').filter(Boolean);
  };

  const totalBudget = mockProjects.reduce((sum, p) => sum + p.budget, 0);
  const totalSpent = mockProjects.reduce((sum, p) => sum + p.actualCost, 0);
  const avgProgress = Math.round(mockProjects.reduce((sum, p) => sum + p.progress, 0) / mockProjects.length);

  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesStatus = statusFilter === 'all' || project.status === statusFilter;
      const matchesPriority = priorityFilter === 'all' || project.priority === priorityFilter;
      const matchesCustomer = customerFilter === 'all' || project.customerId === customerFilter;
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesPriority && matchesCustomer && matchesSearch;
    });
  }, [statusFilter, priorityFilter, customerFilter, searchQuery]);

  const getStatusBadge = (status: string) => {
    const classes: Record<string, string> = {
      active: 'taiga-badge taiga-badge-success',
      planning: 'taiga-badge taiga-badge-warning',
      completed: 'taiga-badge taiga-badge-info',
      'on-hold': 'taiga-badge',
    };
    return classes[status] || 'taiga-badge';
  };

  const getPriorityBadge = (priority: string) => {
    const classes: Record<string, string> = {
      high: 'taiga-badge taiga-badge-danger',
      medium: 'taiga-badge taiga-badge-warning',
      low: 'taiga-badge taiga-badge-success',
    };
    return classes[priority] || 'taiga-badge';
  };

  const getRiskBadge = (risk: string) => {
    const classes: Record<string, string> = {
      high: 'taiga-badge taiga-badge-danger',
      medium: 'taiga-badge taiga-badge-warning',
      low: 'taiga-badge taiga-badge-success',
    };
    return classes[risk] || 'taiga-badge';
  };

  const getStatusLabel = (status: string) => {
    const labels: Record<string, string> = {
      active: t('projects.active'),
      planning: t('projects.planning'),
      completed: t('projects.completed'),
      'on-hold': t('projects.onHold'),
    };
    return labels[status] || status;
  };

  const getPriorityLabel = (priority: string) => {
    const labels: Record<string, string> = {
      high: t('common.high'),
      medium: t('common.medium'),
      low: t('common.low'),
    };
    return labels[priority] || priority;
  };

  const getComplexityLabel = (complexity: string) => {
    const labels: Record<string, string> = {
      complex: t('common.complex'),
      medium: t('common.medium'),
      simple: t('common.simple'),
    };
    return labels[complexity] || complexity;
  };

  const getRiskLabel = (risk: string) => {
    const labels: Record<string, string> = {
      high: t('projects.riskHigh'),
      medium: t('projects.riskMedium'),
      low: t('projects.riskLow'),
    };
    return labels[risk] || risk;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t('projects.title')}
          </h1>
          <p className="text-gray-600 mt-2">
            {t('projects.subtitle')}
          </p>
        </div>
        <button
          onClick={() => alert('Add Project functionality coming soon!')}
          className="taiga-btn taiga-btn-primary flex items-center space-x-2"
        >
          <Plus className="h-4 w-4" />
          <span>{t('projects.addProject')}</span>
        </button>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('projects.totalBudget')}</p>
              <p className="text-2xl font-bold text-gray-900">€{totalBudget.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('projects.totalSpent')}</p>
              <p className="text-2xl font-bold text-gray-900">€{totalSpent.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('projects.avgProgress')}</p>
              <p className="text-2xl font-bold text-gray-900">{avgProgress}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Target className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="taiga-metric-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{t('dashboard.activeProjects')}</p>
              <p className="text-2xl font-bold text-gray-900">{mockProjects.length}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <FolderOpen className="h-6 w-6 text-green-600" />
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
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="taiga-select"
              >
                <option value="all">{t('projects.allStatuses')}</option>
                <option value="active">{t('projects.active')}</option>
                <option value="planning">{t('projects.planning')}</option>
                <option value="completed">{t('projects.completed')}</option>
                <option value="on-hold">{t('projects.onHold')}</option>
              </select>
            </div>

            <select
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="taiga-select"
            >
              <option value="all">{t('projects.allPriorities')}</option>
              <option value="high">{t('common.high')}</option>
              <option value="medium">{t('common.medium')}</option>
              <option value="low">{t('common.low')}</option>
            </select>

            <select
              value={customerFilter}
              onChange={(e) => setCustomerFilter(e.target.value)}
              className="taiga-select"
            >
              <option value="all">{t('projects.allCustomers')}</option>
              {mockCustomers.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Projects Table */}
      {filteredProjects.length > 0 ? (
        <div className="taiga-card">
          <div className="overflow-x-auto">
            <table className="taiga-table">
              <thead>
                <tr>
                  <th className="taiga-table-header">{t('projects.projectName')}</th>
                  <th className="taiga-table-header">{t('projects.customer')}</th>
                  <th className="taiga-table-header">{t('projects.status')}</th>
                  <th className="taiga-table-header">{t('projects.progress')}</th>
                  <th className="taiga-table-header">{t('projects.priority')}</th>
                  <th className="taiga-table-header">{t('projects.riskLevel')}</th>
                  <th className="taiga-table-header">{t('projects.budget')}</th>
                  <th className="taiga-table-header">{t('projects.assignedTeam')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => (
                  <tr key={project.id} className="hover:bg-gray-50 transition-colors">
                    <td className="taiga-table-cell">
                      <div>
                        <p className="font-medium text-gray-900">{project.name}</p>
                        <p className="text-xs text-gray-500 mt-1">{getComplexityLabel(project.complexity)}</p>
                      </div>
                    </td>
                    <td className="taiga-table-cell">{getCustomerName(project.customerId)}</td>
                    <td className="taiga-table-cell">
                      <span className={getStatusBadge(project.status)}>
                        {getStatusLabel(project.status)}
                      </span>
                    </td>
                    <td className="taiga-table-cell">
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 taiga-progress w-24">
                          <div
                            className="taiga-progress-bar"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{project.progress}%</span>
                      </div>
                    </td>
                    <td className="taiga-table-cell">
                      <span className={getPriorityBadge(project.priority)}>
                        {getPriorityLabel(project.priority)}
                      </span>
                    </td>
                    <td className="taiga-table-cell">
                      <span className={getRiskBadge(project.riskLevel)}>
                        {getRiskLabel(project.riskLevel)}
                      </span>
                    </td>
                    <td className="taiga-table-cell">
                      <div>
                        <p className="font-medium text-gray-900">€{project.budget.toLocaleString()}</p>
                        <p className="text-xs text-gray-500">
                          €{project.actualCost.toLocaleString()} {t('dashboard.spent')}
                        </p>
                      </div>
                    </td>
                    <td className="taiga-table-cell">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">
                          {getEmployeeNames(project.assignedEmployees).length}
                        </span>
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
          <FolderOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-lg font-medium text-gray-900">{t('projects.noProjects')}</p>
          <p className="text-sm text-gray-500 mt-1">{t('projects.noProjectsDesc')}</p>
        </div>
      )}

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="taiga-card hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <span className={getStatusBadge(project.status)}>
                {getStatusLabel(project.status)}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.customer')}</span>
                <span className="font-medium text-gray-900">{getCustomerName(project.customerId)}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.progress')}</span>
                <span className="font-medium text-gray-900">{project.progress}%</span>
              </div>
              <div className="taiga-progress">
                <div
                  className={`taiga-progress-bar ${project.progress >= 70 ? 'bg-green-500' : project.progress >= 40 ? '' : 'bg-yellow-500'}`}
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.priority')}</span>
                <span className={getPriorityBadge(project.priority)}>
                  {getPriorityLabel(project.priority)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.riskLevel')}</span>
                <span className={getRiskBadge(project.riskLevel)}>
                  {getRiskLabel(project.riskLevel)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.budget')}</span>
                <span className="font-medium text-gray-900">€{project.budget.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">{t('projects.roi')}</span>
                <span className="font-medium text-green-600 flex items-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {project.roi}x
                </span>
              </div>

              <div className="flex items-center space-x-1 text-sm">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">
                  {getEmployeeNames(project.assignedEmployees).join(', ')}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
