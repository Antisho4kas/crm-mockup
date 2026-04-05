import { Customer, Project, Employee, Task, TimeEntry, KPIDefinition, ParadoxAlert, DashboardMetrics } from '../types';

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Schmidt AG',
    company: 'Schmidt AG',
    email: 'contact@schmidt-ag.de',
    phone: '+49 30 12345678',
    address: 'Friedrichstraße 123, 10117 Berlin',
    projects: ['1', '2'],
    totalRevenue: 250000,
    createdAt: new Date('2023-01-15'),
    status: 'active',
    satisfactionScore: 4.2,
    churnRisk: 'low'
  },
  {
    id: '2',
    name: 'Müller GmbH',
    company: 'Müller GmbH',
    email: 'info@mueller-gmbh.de',
    phone: '+49 89 98765432',
    address: 'Leopoldstraße 45, 80802 München',
    projects: ['3'],
    totalRevenue: 180000,
    createdAt: new Date('2023-03-20'),
    status: 'active',
    satisfactionScore: 3.8,
    churnRisk: 'medium'
  },
  {
    id: '3',
    name: 'Weber & Co',
    company: 'Weber & Co',
    email: 'office@weber-co.de',
    phone: '+49 40 55566677',
    address: 'Mönckebergstraße 10, 20095 Hamburg',
    projects: [],
    totalRevenue: 0,
    createdAt: new Date('2023-11-10'),
    status: 'prospect',
    satisfactionScore: 0,
    churnRisk: 'high'
  }
];

export const mockProjects: Project[] = [
  {
    id: '1',
    name: 'SAP S/4HANA Migration',
    customerId: '1',
    description: 'Complete migration from SAP ECC to S/4HANA including data migration and process optimization',
    status: 'active',
    startDate: new Date('2023-06-01'),
    endDate: new Date('2023-12-31'),
    budget: 200000,
    actualCost: 145000,
    assignedEmployees: ['1', '2'],
    tasks: ['1', '2', '3'],
    progress: 65,
    priority: 'high',
    complexity: 'complex',
    riskLevel: 'medium',
    roi: 1.8,
    template: 'sap-implementation'
  },
  {
    id: '2',
    name: 'Digital Transformation Initiative',
    customerId: '1',
    description: 'Digital transformation of customer service processes with AI integration',
    status: 'active',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2024-03-31'),
    budget: 150000,
    actualCost: 85000,
    assignedEmployees: ['3'],
    tasks: ['4', '5'],
    progress: 45,
    priority: 'medium',
    complexity: 'complex',
    riskLevel: 'high',
    roi: 2.2,
    template: 'digital-transformation'
  },
  {
    id: '3',
    name: 'Process Optimization',
    customerId: '2',
    description: 'Optimization of supply chain processes and cost reduction initiatives',
    status: 'planning',
    startDate: new Date('2024-01-15'),
    budget: 80000,
    actualCost: 15000,
    assignedEmployees: ['1'],
    tasks: ['6'],
    progress: 15,
    priority: 'medium',
    complexity: 'medium',
    riskLevel: 'low',
    roi: 1.5,
    template: 'custom'
  }
];

export const mockEmployees: Employee[] = [
  {
    id: '1',
    name: 'Dr. Anna Schmidt',
    email: 'anna.schmidt@crm-consulting.de',
    position: 'consultant',
    department: 'SAP Consulting',
    hourlyRate: 150,
    skills: ['SAP S/4HANA', 'Process Optimization', 'Change Management', 'Project Management'],
    projects: ['1', '3'],
    totalHours: 1240,
    efficiency: 92,
    rating: 4.6,
    status: 'active',
    performanceMetrics: {
      employeeId: '1',
      period: '2023-Q4',
      quantitativeScore: 88,
      qualitativeScore: 95,
      overallRating: 92,
      kpiEffectiveness: [],
      warnings: ['High workload detected'],
      recommendations: ['Consider workload redistribution'],
      trend: 'improving'
    }
  },
  {
    id: '2',
    name: 'Max Weber',
    email: 'max.weber@crm-consulting.de',
    position: 'developer',
    department: 'Technical Solutions',
    hourlyRate: 120,
    skills: ['React', 'TypeScript', 'Node.js', 'Cloud Architecture', 'DevOps'],
    projects: ['1'],
    totalHours: 980,
    efficiency: 89,
    rating: 4.4,
    status: 'active',
    performanceMetrics: {
      employeeId: '2',
      period: '2023-Q4',
      quantitativeScore: 91,
      qualitativeScore: 87,
      overallRating: 89,
      kpiEffectiveness: [],
      warnings: [],
      recommendations: ['Focus on code documentation'],
      trend: 'stable'
    }
  },
  {
    id: '3',
    name: 'Julia Müller',
    email: 'julia.mueller@crm-consulting.de',
    position: 'manager',
    department: 'Project Management',
    hourlyRate: 180,
    skills: ['Strategic Planning', 'Team Leadership', 'Stakeholder Management', 'Risk Assessment'],
    projects: ['2'],
    totalHours: 1100,
    efficiency: 87,
    rating: 4.3,
    status: 'active',
    performanceMetrics: {
      employeeId: '3',
      period: '2023-Q4',
      quantitativeScore: 85,
      qualitativeScore: 89,
      overallRating: 87,
      kpiEffectiveness: [],
      warnings: ['Budget variance increasing'],
      recommendations: ['Implement tighter budget controls'],
      trend: 'declining'
    }
  }
];

export const mockTasks: Task[] = [
  {
    id: '1',
    name: 'Data Migration Planning',
    projectId: '1',
    assignedTo: '1',
    description: 'Plan and execute data migration from ECC to S/4HANA',
    estimatedHours: 80,
    actualHours: 75,
    status: 'completed',
    dueDate: new Date('2023-08-15'),
    createdAt: new Date('2023-06-01'),
    hourlyRate: 150,
    qualityScore: 4.5,
    clientImpact: 'high'
  },
  {
    id: '2',
    name: 'Process Analysis',
    projectId: '1',
    assignedTo: '1',
    description: 'Analyze existing business processes and identify optimization opportunities',
    estimatedHours: 60,
    actualHours: 55,
    status: 'completed',
    dueDate: new Date('2023-09-30'),
    createdAt: new Date('2023-07-15'),
    hourlyRate: 150,
    qualityScore: 4.7,
    clientImpact: 'high'
  },
  {
    id: '3',
    name: 'Technical Implementation',
    projectId: '1',
    assignedTo: '2',
    description: 'Implement technical components of SAP migration',
    estimatedHours: 120,
    actualHours: 110,
    status: 'in-progress',
    dueDate: new Date('2023-12-15'),
    createdAt: new Date('2023-08-01'),
    hourlyRate: 120,
    qualityScore: 4.2,
    clientImpact: 'high'
  },
  {
    id: '4',
    name: 'AI Integration Design',
    projectId: '2',
    assignedTo: '3',
    description: 'Design AI integration strategy for customer service',
    estimatedHours: 40,
    actualHours: 35,
    status: 'completed',
    dueDate: new Date('2023-10-31'),
    createdAt: new Date('2023-09-01'),
    hourlyRate: 180,
    qualityScore: 4.8,
    clientImpact: 'medium'
  },
  {
    id: '5',
    name: 'Digital Roadmap Development',
    projectId: '2',
    assignedTo: '3',
    description: 'Create comprehensive digital transformation roadmap',
    estimatedHours: 60,
    actualHours: 50,
    status: 'in-progress',
    dueDate: new Date('2024-01-15'),
    createdAt: new Date('2023-09-15'),
    hourlyRate: 180,
    qualityScore: 4.6,
    clientImpact: 'high'
  },
  {
    id: '6',
    name: 'Supply Chain Analysis',
    projectId: '3',
    assignedTo: '1',
    description: 'Analyze supply chain processes and identify cost reduction opportunities',
    estimatedHours: 50,
    actualHours: 30,
    status: 'in-progress',
    dueDate: new Date('2024-02-28'),
    createdAt: new Date('2024-01-15'),
    hourlyRate: 150,
    qualityScore: 4.4,
    clientImpact: 'medium'
  }
];

export const mockTimeEntries: TimeEntry[] = [
  {
    id: '1',
    employeeId: '1',
    projectId: '1',
    taskId: '1',
    date: new Date('2023-08-14'),
    hours: 8,
    description: 'Final data migration testing',
    hourlyRate: 150,
    approved: true,
    taskComplexity: 'complex',
    qualityScore: 4.5,
    clientImpact: 'high'
  },
  {
    id: '2',
    employeeId: '2',
    projectId: '1',
    taskId: '3',
    date: new Date('2023-11-20'),
    hours: 7.5,
    description: 'SAP configuration development',
    hourlyRate: 120,
    approved: true,
    taskComplexity: 'complex',
    qualityScore: 4.2,
    clientImpact: 'high'
  },
  {
    id: '3',
    employeeId: '3',
    projectId: '2',
    taskId: '4',
    date: new Date('2023-10-30'),
    hours: 6,
    description: 'AI strategy workshop preparation',
    hourlyRate: 180,
    approved: true,
    taskComplexity: 'medium',
    qualityScore: 4.8,
    clientImpact: 'medium'
  }
];

export const mockKPIDefinitions: KPIDefinition[] = [
  {
    id: '1',
    name: 'Task Completion Rate',
    category: 'quantitative',
    formula: '(completed_tasks / total_tasks) * 100',
    weight: 0.3,
    role: 'all',
    description: 'Percentage of tasks completed on time',
    gamingRisk: 'medium',
    targetValue: 85,
    unit: '%'
  },
  {
    id: '2',
    name: 'Client Satisfaction Score',
    category: 'qualitative',
    formula: 'average_client_rating',
    weight: 0.4,
    role: 'consultant',
    description: 'Average client satisfaction rating',
    gamingRisk: 'low',
    targetValue: 4.0,
    unit: 'points'
  },
  {
    id: '3',
    name: 'Code Quality Score',
    category: 'qualitative',
    formula: 'code_review_average',
    weight: 0.5,
    role: 'developer',
    description: 'Average code review score',
    gamingRisk: 'low',
    targetValue: 4.0,
    unit: 'points'
  },
  {
    id: '4',
    name: 'Budget Adherence',
    category: 'quantitative',
    formula: '(budget - actual_cost) / budget * 100',
    weight: 0.3,
    role: 'manager',
    description: 'Percentage of budget utilized',
    gamingRisk: 'high',
    targetValue: 95,
    unit: '%'
  }
];

export const mockParadoxAlerts: ParadoxAlert[] = [
  {
    id: '1',
    employeeId: '2',
    kpiId: '1',
    type: 'gaming',
    severity: 'medium',
    description: 'Employee completing tasks quickly but with low quality scores',
    recommendation: 'Review task complexity assessment and quality metrics',
    detectedAt: new Date('2023-11-15')
  },
  {
    id: '2',
    employeeId: '3',
    kpiId: '4',
    type: 'ineffective',
    severity: 'high',
    description: 'Budget adherence KPI shows good performance but project ROI is declining',
    recommendation: 'Reevaluate budget allocation and project selection criteria',
    detectedAt: new Date('2023-11-20')
  }
];

export const mockDashboardMetrics: DashboardMetrics = {
  totalCustomers: 3,
  activeProjects: 2,
  totalRevenue: 430000,
  totalCosts: 245000,
  profit: 185000,
  averageProjectValue: 143333,
  employeeCount: 3,
  averageEfficiency: 89.3,
  monthlyGrowth: 12.5,
  kpiParadoxCount: 2,
  riskProjects: 1
};
