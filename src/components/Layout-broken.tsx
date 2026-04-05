import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  LayoutDashboard, 
  Users, 
  FolderOpen, 
  Clock, 
  BarChart3,
  Menu,
  X,
  Globe,
  Plus,
  Search,
  Bell,
  Settings,
  ChevronDown,
  Filter,
  Download
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigation = [
    {
      name: t('navigation.dashboard'),
      href: '/',
      icon: LayoutDashboard,
      current: location.pathname === '/'
    },
    {
      name: t('navigation.customers'),
      href: '/customers',
      icon: Users,
      current: location.pathname === '/customers'
    },
    {
      name: t('navigation.projects'),
      href: '/projects',
      icon: FolderOpen,
      current: location.pathname === '/projects'
    },
    {
      name: t('navigation.timeTracking'),
      href: '/time-tracking',
      icon: Clock,
      current: location.pathname === '/time-tracking'
    },
    {
      name: t('navigation.analytics'),
      href: '/analytics',
      icon: BarChart3,
      current: location.pathname === '/analytics'
    }
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'de' ? 'en' : 'de';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-25 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-64 taiga-sidebar transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CRM</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">
                  Advanced CRM
                </h1>
                <p className="text-xs text-gray-500">Intelligent Management</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {/* Quick Actions */}
          <div className="p-4 border-b border-gray-200">
            <button 
              onClick={() => alert('New Project functionality coming soon!')}
              className="w-full taiga-btn taiga-btn-primary flex items-center justify-center space-x-2"
            >
              <Plus className="h-4 w-4" />
              <span>New Project</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto taiga-scrollbar">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  taiga-nav-item ${item.current ? 'active' : ''}
                `}
                onClick={() => setSidebarOpen(false)}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={toggleLanguage}
              className="w-full taiga-nav-item justify-center"
            >
              <Globe className="mr-3 h-5 w-5" />
              {i18n.language === 'de' ? 'English' : 'Deutsch'}
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="h-5 w-5 text-gray-500" />
              </button>
              
              <div className="relative">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Search projects, customers, tasks..."
                  className="taiga-input pl-10 w-64"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-md hover:bg-gray-100 relative">
                <Bell className="h-5 w-5 text-gray-500" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AS</span>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </button>
                
                {userMenuOpen && (
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => alert('Filter functionality coming soon!')}
                      className="taiga-btn taiga-btn-secondary flex items-center space-x-2"
                    >
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                    <button 
                      onClick={() => alert('Export functionality coming soon!')}
                      className="taiga-btn taiga-btn-secondary flex items-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
