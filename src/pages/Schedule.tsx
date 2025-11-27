import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
export function Schedule() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const meetings = [{
    id: 1,
    title: 'Math Review Session',
    date: new Date(2024, 0, 15, 10, 0),
    duration: 60,
    class: 'Grade 10A',
    students: 3
  }, {
    id: 2,
    title: 'Science Lab Discussion',
    date: new Date(2024, 0, 16, 14, 0),
    duration: 45,
    class: 'Grade 10B',
    students: 2
  }, {
    id: 3,
    title: 'English Literature',
    date: new Date(2024, 0, 17, 9, 0),
    duration: 90,
    class: 'Grade 11A',
    students: 4
  }];
  const getDaysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    return {
      daysInMonth,
      startingDayOfWeek
    };
  };
  const {
    daysInMonth,
    startingDayOfWeek
  } = getDaysInMonth(currentDate);
  const previousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };
  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };
  const monthName = currentDate.toLocaleString('default', {
    month: 'long',
    year: 'numeric'
  });
  const getMeetingsForDay = day => {
    return meetings.filter(meeting => {
      const meetingDate = new Date(meeting.date);
      return meetingDate.getDate() === day && meetingDate.getMonth() === currentDate.getMonth() && meetingDate.getFullYear() === currentDate.getFullYear();
    });
  };
  return <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Schedule</h1>
        <p className="text-slate-600">View and manage your meeting schedule</p>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{monthName}</h2>
          <div className="flex items-center space-x-2">
            <button onClick={previousMonth} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextMonth} className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {/* Day Headers */}
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day} className="text-center font-semibold text-slate-600 py-2">
              {day}
            </div>)}
          {/* Empty cells for days before month starts */}
          {Array.from({
          length: startingDayOfWeek
        }).map((_, index) => <div key={`empty-${index}`} className="aspect-square" />)}
          {/* Calendar days */}
          {Array.from({
          length: daysInMonth
        }).map((_, index) => {
          const day = index + 1;
          const dayMeetings = getMeetingsForDay(day);
          const isToday = new Date().getDate() === day && new Date().getMonth() === currentDate.getMonth() && new Date().getFullYear() === currentDate.getFullYear();
          return <div key={day} className={`aspect-square border border-slate-200 rounded-lg p-2 ${isToday ? 'bg-blue-50 border-blue-300' : 'hover:bg-slate-50'} transition-colors`}>
                <div className={`text-sm font-medium mb-1 ${isToday ? 'text-blue-700' : 'text-slate-700'}`}>
                  {day}
                </div>
                <div className="space-y-1">
                  {dayMeetings.slice(0, 2).map(meeting => <div key={meeting.id} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded truncate">
                      {meeting.title}
                    </div>)}
                  {dayMeetings.length > 2 && <div className="text-xs text-slate-500">
                      +{dayMeetings.length - 2} more
                    </div>}
                </div>
              </div>;
        })}
        </div>
      </div>
      {/* Upcoming Meetings List */}
      <div className="mt-6 bg-white rounded-xl shadow-sm border border-slate-100 p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          Upcoming Meetings
        </h3>
        <div className="space-y-3">
          {meetings.map(meeting => <div key={meeting.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-blue-300 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <CalendarIcon className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {meeting.title}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {meeting.date.toLocaleDateString()} at{' '}
                    {meeting.date.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit'
                })}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-slate-700">
                  {meeting.class}
                </p>
                <p className="text-xs text-slate-500">
                  {meeting.students} students • {meeting.duration} min
                </p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}