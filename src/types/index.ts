export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  projects: string[];
  totalRevenue: number;
  createdAt: Date;
  status: 'active' | 'inactive' | 'prospect';
  satisfactionScore: number;
  churnRisk: 'low' | 'medium' | 'high';
}

export interface Project {
  id: string;
  name: string;
  customerId: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  startDate: Date;
  endDate?: Date;
  budget: number;
  actualCost: number;
  assignedEmployees: string[];
  tasks: string[];
  progress: number;
  priority: 'low' | 'medium' | 'high';
  complexity: 'simple' | 'medium' | 'complex';
  riskLevel: 'low' | 'medium' | 'high';
  roi: number;
  template?: 'sap-implementation' | 'digital-transformation' | 'custom';
}

export interface Task {
  id: string;
  name: string;
  projectId: string;
  assignedTo: string;
  description: string;
  estimatedHours: number;
  actualHours: number;
  status: 'todo' | 'in-progress' | 'completed';
  dueDate: Date;
  createdAt: Date;
  hourlyRate: number;
  qualityScore: number;
  clientImpact: 'low' | 'medium' | 'high';
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  position: 'consultant' | 'developer' | 'manager';
  department: string;
  hourlyRate: number;
  skills: string[];
  projects: string[];
  totalHours: number;
  efficiency: number;
  rating: number;
  avatar?: string;
  status: 'active' | 'on-leave' | 'inactive';
  performanceMetrics: PerformanceEvaluation;
}

export interface TimeEntry {
  id: string;
  employeeId: string;
  projectId: string;
  taskId: string;
  date: Date;
  hours: number;
  description: string;
  hourlyRate: number;
  approved: boolean;
  taskComplexity: 'simple' | 'medium' | 'complex';
  qualityScore?: number;
  clientImpact: 'low' | 'medium' | 'high';
}

export interface KPIDefinition {
  id: string;
  name: string;
  category: 'quantitative' | 'qualitative';
  formula: string;
  weight: number;
  role: 'consultant' | 'developer' | 'manager' | 'all';
  description: string;
  gamingRisk: 'low' | 'medium' | 'high';
  targetValue?: number;
  unit?: string;
}

export interface PerformanceEvaluation {
  employeeId: string;
  period: string;
  quantitativeScore: number;
  qualitativeScore: number;
  overallRating: number;
  kpiEffectiveness: KPIEffectiveness[];
  warnings: string[];
  recommendations: string[];
  trend: 'improving' | 'stable' | 'declining';
}

export interface KPIEffectiveness {
  kpiId: string;
  correlationWithSuccess: number;
  gamingDetected: boolean;
  actualVsReported: {
    reported: number;
    actual: number;
    variance: number;
  };
}

export interface ConsultantMetrics {
  clientSatisfactionScore: number;
  projectComplexityHandled: number;
  innovationIndex: number;
  knowledgeSharing: number;
  businessDevelopment: number;
  qualityDeliverables: number;
}

export interface DeveloperMetrics {
  codeQualityScore: number;
  deliveryReliability: number;
  technicalInnovation: number;
  collaborationIndex: number;
  learningVelocity: number;
  bugResolutionRate: number;
}

export interface ManagerMetrics {
  teamPerformanceScore: number;
  budgetEfficiency: number;
  strategicImpact: number;
  talentDevelopment: number;
  stakeholderSatisfaction: number;
  projectSuccessRate: number;
}

export interface DashboardMetrics {
  totalCustomers: number;
  activeProjects: number;
  totalRevenue: number;
  totalCosts: number;
  profit: number;
  averageProjectValue: number;
  employeeCount: number;
  averageEfficiency: number;
  monthlyGrowth: number;
  kpiParadoxCount: number;
  riskProjects: number;
}

export interface KPIData {
  label: string;
  value: number | string;
  change?: number;
  changeType?: 'increase' | 'decrease';
  target?: number;
  unit?: string;
  gamingRisk?: 'low' | 'medium' | 'high';
  effectiveness?: number;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
  }[];
}

export interface ParadoxAlert {
  id: string;
  employeeId: string;
  kpiId: string;
  type: 'gaming' | 'ineffective' | 'misaligned';
  severity: 'low' | 'medium' | 'high';
  description: string;
  recommendation: string;
  detectedAt: Date;
}
