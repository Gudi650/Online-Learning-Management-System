import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, BookOpen, Settings, LogOut, Menu, X } from 'lucide-react';
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuItems = [{
    icon: LayoutDashboard,
    label: 'Dashboard',
    path: '/'
  }, {
    icon: Calendar,
    label: 'Schedule',
    path: '/schedule'
  }, {
    icon: Users,
    label: 'Students',
    path: '/students'
  }, {
    icon: BookOpen,
    label: 'Courses',
    path: '/courses'
  }, {
    icon: Settings,
    label: 'Settings',
    path: '/settings'
  }];
  return <>
      {/* Mobile Menu Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Overlay */}
      {isOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30" onClick={() => setIsOpen(false)} />}
      {/* Sidebar */}
      <aside className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-white border-r border-slate-200
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-blue-600">EduManage</h2>
            <p className="text-sm text-slate-500 mt-1">Teacher Portal</p>
          </div>
          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map(item => {
            const isActive = location.pathname === item.path;
            return <Link key={item.label} to={item.path} onClick={() => setIsOpen(false)} className={`
                    w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                    transition-colors duration-200
                    ${isActive ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}
                  `}>
                  <item.icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>;
          })}
          </nav>
          {/* User Profile */}
          <div className="p-4 border-t border-slate-200">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-700 font-semibold">JD</span>
              </div>
              <div className="flex-1">
                <p className="font-medium text-slate-900">John Doe</p>
                <p className="text-sm text-slate-500">Mathematics</p>
              </div>
            </div>
            <button className="w-full flex items-center space-x-3 px-4 py-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors">
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>;
}