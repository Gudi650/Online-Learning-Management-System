import React from 'react';
import { Users, Calendar, TrendingUp, Clock } from 'lucide-react';
export function DashboardStats({
  meetings
}) {
  const totalStudents = new Set(meetings.flatMap(m => m.students)).size;
  const upcomingMeetings = meetings.filter(m => m.date > new Date()).length;
  const stats = [{
    label: 'Total Students',
    value: totalStudents.toString(),
    icon: Users,
    color: 'bg-blue-500',
    change: '+12%'
  }, {
    label: 'Upcoming Meetings',
    value: upcomingMeetings.toString(),
    icon: Calendar,
    color: 'bg-blue-500',
    change: '+5%'
  }, {
    label: 'Attendance Rate',
    value: '94%',
    icon: TrendingUp,
    color: 'bg-purple-500',
    change: '+3%'
  }, {
    label: 'Avg. Meeting Duration',
    value: '52 min',
    icon: Clock,
    color: 'bg-orange-500',
    change: '-8%'
  }];
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => <div key={stat.label} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="text-white" size={20} />
            </div>
            <span className="text-sm font-medium text-blue-600">
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-1">
            {stat.value}
          </h3>
          <p className="text-sm text-slate-500">{stat.label}</p>
        </div>)}
    </div>;
}