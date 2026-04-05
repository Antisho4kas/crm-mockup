import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  TrendingUp, 
  Users, 
  FolderOpen, 
  AlertTriangle,
  DollarSign,
  Activity,
  Target,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  Download,
  Calendar,
  BarChart3,
  PieChart,
  Zap
} from 'lucide-react';
import { mockDashboardMetrics, mockParadoxAlerts } from '../data/mockData';
import { KPICard } from '../components/KPICard';
import { ParadoxAlert } from '../components/ParadoxAlert';
import { PerformanceChart } from '../components/PerformanceChart';

export const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const kpiData = [
    {
      title: t('dashboard.totalCustomers'),
      value: mockDashboardMetrics.totalCustomers,
      change: 12.5,
      changeType: 'increase' as const,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: t('dashboard.activeProjects'),
      value: mockDashboardMetrics.activeProjects,
      change: 8.3,
      changeType: 'increase' as const,
      icon: FolderOpen,
      color: 'text-green-600'
    },
    {
      title: t('dashboard.totalRevenue'),
      value: `€${mockDashboardMetrics.totalRevenue.toLocaleString()}`,
      change: 15.2,
      changeType: 'increase' as const,
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: t('dashboard.totalCosts'),
      value: `€${mockDashboardMetrics.totalCosts.toLocaleString()}`,
      change: -5.8,
      changeType: 'decrease' as const,
      icon: Activity,
      color: 'text-orange-600'
    },
    {
      title: t('dashboard.profit'),
      value: `€${mockDashboardMetrics.profit.toLocaleString()}`,
      change: 22.1,
      changeType: 'increase' as const,
      icon: TrendingUp,
      color: 'text-emerald-600'
    },
    {
      title: t('dashboard.averageEfficiency'),
      value: `${mockDashboardMetrics.averageEfficiency}%`,
      change: 3.4,
      changeType: 'increase' as const,
      icon: Target,
      color: 'text-indigo-600'
    }
  ];

  const criticalAlerts = mockParadoxAlerts.filter(alert => alert.severity === 'high');
  const mediumAlerts = mockParadoxAlerts.filter(alert => alert.severity === 'medium');

  const recentActivities = [
    {
      id: 1,
      type: 'alert',
      title: 'KPI Paradox detected for Max Weber',
      description: 'Potential gaming in task completion metrics',
      time: '2 hours ago',
      icon: AlertTriangle,
      color: 'text-red-500'
    },
    {
      id: 2,
      type: 'success',
      title: 'SAP Migration project ahead of schedule',
      description: 'Project completion rate improved by 15%',
      time: '5 hours ago',
      icon: CheckCircle,
      color: 'text-green-500'
    },
    {
      id: 3,
      type: 'info',
      title: 'New customer prospect: Weber & Co',
      description: 'Initial contact established',
      time: '1 day ago',
      icon: Users,
      color: 'text-blue-500'
    },
    {
      id: 4,
      type: 'warning',
      title: 'Budget variance increasing',
      description: 'Digital Transformation project showing 8% variance',
      time: '2 days ago',
      icon: AlertCircle,
      color: 'text-yellow-500'
    }
  ];

  const topProjects = [
    {
      id: 1,
      name: 'SAP S/4HANA Migration',
      customer: 'Schmidt AG',
      progress: 65,
      status: 'active',
      priority: 'high',
      budget: 200000,
      actualCost: 145000
    },
    {
      id: 2,
      name: 'Digital Transformation Initiative',
      customer: 'Schmidt AG',
      progress: 45,
      status: 'active',
      priority: 'medium',
      budget: 150000,
      actualCost: 85000
    },
    {
      id: 3,
      name: 'Process Optimization',
      customer: 'Müller GmbH',
      progress: 15,
      status: 'planning',
      priority: 'medium',
      budget: 80000,
      actualCost: 15000
    }
  ];

  const teamPerformance = [
    {
      id: 1,
      name: 'Dr. Anna Schmidt',
      role: 'Consultant',
      efficiency: 92,
      rating: 4.6,
      hours: 1240,
      tasks: 47,
      avatar: 'AS'
    },
    {
      id: 2,
      name: 'Max Weber',
      role: 'Developer',
      efficiency: 89,
      rating: 4.4,
      hours: 980,
      tasks: 62,
      avatar: 'MW'
    },
    {
      id: 3,
      name: 'Julia Müller',
      role: 'Manager',
      efficiency: 87,
      rating: 4.3,
      hours: 1100,
      tasks: 38,
      avatar: 'JM'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {t('dashboard.title')}
          </h1>
          <p className="text-gray-600 mt-2">
            {t('dashboard.subtitle')}
          </p>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="taiga-btn taiga-btn-secondary flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button className="taiga-btn taiga-btn-secondary flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </button>
          <button 
            onClick={() => alert('New Dashboard functionality coming soon!')}
            className="taiga-btn taiga-btn-primary flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>New Dashboard</span>
          </button>
        </div>
      </div>

      {/* KPI Paradox Alerts */}
      {(criticalAlerts.length > 0 || mediumAlerts.length > 0) && (
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900">
              {t('kpi.paradoxDetected')}
            </h2>
            <span className="taiga-badge taiga-badge-danger">
              {criticalAlerts.length + mediumAlerts.length}
            </span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {criticalAlerts.map(alert => (
              <ParadoxAlert key={alert.id} alert={alert} />
            ))}
            {mediumAlerts.map(alert => (
              <ParadoxAlert key={alert.id} alert={alert} />
            ))}
          </div>
        </div>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activities */}
        <div className="lg:col-span-2 space-y-6">
          <div className="taiga-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Clock className="mr-2 h-5 w-5 text-gray-500" />
                Recent Activities
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>
            
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center
                    ${activity.type === 'alert' ? 'bg-red-100' : ''}
                    ${activity.type === 'success' ? 'bg-green-100' : ''}
                    ${activity.type === 'info' ? 'bg-blue-100' : ''}
                    ${activity.type === 'warning' ? 'bg-yellow-100' : ''}
                  `}>
                    <activity.icon className={`h-5 w-5 ${activity.color}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-gray-900">
                      {activity.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Projects */}
          <div className="taiga-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <FolderOpen className="mr-2 h-5 w-5 text-gray-500" />
                Top Projects
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="taiga-table">
                <thead>
                  <tr>
                    <th className="taiga-table-header">Project</th>
                    <th className="taiga-table-header">Customer</th>
                    <th className="taiga-table-header">Progress</th>
                    <th className="taiga-table-header">Status</th>
                    <th className="taiga-table-header">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  {topProjects.map((project) => (
                    <tr key={project.id}>
                      <td className="taiga-table-cell">
                        <div>
                          <p className="font-medium text-gray-900">{project.name}</p>
                          <p className="text-xs text-gray-500">
                            {project.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                          </p>
                        </div>
                      </td>
                      <td className="taiga-table-cell">{project.customer}</td>
                      <td className="taiga-table-cell">
                        <div className="flex items-center space-x-2">
                          <div className="flex-1 taiga-progress">
                            <div 
                              className="taiga-progress-bar" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">{project.progress}%</span>
                        </div>
                      </td>
                      <td className="taiga-table-cell">
                        <span className={`
                          taiga-badge
                          ${project.status === 'active' ? 'taiga-badge-success' : ''}
                          ${project.status === 'planning' ? 'taiga-badge-warning' : ''}
                        `}>
                          {project.status}
                        </span>
                      </td>
                      <td className="taiga-table-cell">
                        <div>
                          <p className="font-medium text-gray-900">
                            €{project.budget.toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">
                            €{project.actualCost.toLocaleString()} spent
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Team Performance */}
          <div className="taiga-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-gray-500" />
                Team Performance
              </h3>
              <button className="text-sm text-blue-600 hover:text-blue-800">
                View All
              </button>
            </div>
            
            <div className="space-y-4">
              {teamPerformance.map((member) => (
                <div key={member.id} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{member.avatar}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-medium text-gray-900">
                        {member.name}
                      </h4>
                      <span className="text-xs text-gray-500">{member.role}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div>
                        <p className="text-xs text-gray-500">Efficiency</p>
                        <p className="text-sm font-medium text-gray-900">{member.efficiency}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Rating</p>
                        <p className="text-sm font-medium text-gray-900">{member.rating}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Hours</p>
                        <p className="text-sm font-medium text-gray-900">{member.hours}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Tasks</p>
                        <p className="text-sm font-medium text-gray-900">{member.tasks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="taiga-card">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <PieChart className="mr-2 h-5 w-5 text-gray-500" />
              Quick Stats
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Monthly Growth</span>
                <span className="text-sm font-medium text-green-600">+12.5%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Risk Projects</span>
                <span className="text-sm font-medium text-red-600">1</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Avg. Project Duration</span>
                <span className="text-sm font-medium text-gray-900">4.2 months</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Client Satisfaction</span>
                <span className="text-sm font-medium text-blue-600">4.2/5.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Chart */}
        <div className="taiga-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-gray-500" />
              {t('analytics.qualityVsQuantity')}
            </h3>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded hover:bg-gray-100">
                <Calendar className="h-4 w-4 text-gray-500" />
              </button>
              <button className="p-1 rounded hover:bg-gray-100">
                <Eye className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <PerformanceChart />
        </div>

        {/* KPI Effectiveness */}
        <div className="taiga-card">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Zap className="mr-2 h-5 w-5 text-gray-500" />
            {t('kpi.effectiveness')}
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Task Completion Rate</span>
                <span className="text-sm font-medium text-gray-900">87%</span>
              </div>
              <div className="taiga-progress">
                <div className="taiga-progress-bar" style={{ width: '87%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Quality Score</span>
                <span className="text-sm font-medium text-gray-900">4.3/5.0</span>
              </div>
              <div className="taiga-progress">
                <div className="taiga-progress-bar bg-green-500" style={{ width: '86%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Client Satisfaction</span>
                <span className="text-sm font-medium text-gray-900">4.1/5.0</span>
              </div>
              <div className="taiga-progress">
                <div className="taiga-progress-bar bg-blue-500" style={{ width: '82%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">KPI Paradox Detection</span>
                <span className="text-sm font-medium text-red-600">2 alerts</span>
              </div>
              <div className="taiga-progress">
                <div className="taiga-progress-bar bg-red-500" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
