import React, { useState } from 'react';
import { DashboardStats } from '../components/DashboardStats';
import { MeetingScheduler } from '../components/MeetingScheduler';
import { UpcomingMeetings } from '../components/UpcomingMeetings';
export function Dashboard() {
  const [meetings, setMeetings] = useState([{
    id: 1,
    title: 'Math Review Session',
    date: new Date(2024, 0, 15, 10, 0),
    students: ['Alice Johnson', 'Bob Smith', 'Carol White'],
    class: 'Grade 10A',
    duration: 60
  }, {
    id: 2,
    title: 'Science Lab Discussion',
    date: new Date(2024, 0, 16, 14, 0),
    students: ['David Brown', 'Emma Davis'],
    class: 'Grade 10B',
    duration: 45
  }]);
  const handleAddMeeting = meeting => {
    setMeetings([...meetings, {
      ...meeting,
      id: meetings.length + 1
    }]);
  };
  const handleDeleteMeeting = id => {
    setMeetings(meetings.filter(m => m.id !== id));
  };
  return <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600">
          Welcome back! Here's what's happening today.
        </p>
      </div>
      <DashboardStats meetings={meetings} />
      <div className="grid lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <MeetingScheduler onAddMeeting={handleAddMeeting} />
        </div>
        <div className="lg:col-span-1">
          <UpcomingMeetings meetings={meetings} onDeleteMeeting={handleDeleteMeeting} />
        </div>
      </div>
    </div>;
}