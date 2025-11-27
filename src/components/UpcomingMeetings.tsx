import React from 'react';
import { Calendar, Clock, Users, Trash2 } from 'lucide-react';
export function UpcomingMeetings({
  meetings,
  onDeleteMeeting
}) {
  const upcomingMeetings = meetings.filter(m => m.date > new Date()).sort((a, b) => a.date - b.date);
  const formatDate = date => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    }).format(date);
  };
  const formatTime = date => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };
  return <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Upcoming Meetings</h2>
        <span className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
          {upcomingMeetings.length} scheduled
        </span>
      </div>
      <div className="space-y-4 max-h-[600px] overflow-y-auto">
        {upcomingMeetings.length === 0 ? <div className="text-center py-8">
            <Calendar className="mx-auto text-slate-300 mb-3" size={48} />
            <p className="text-slate-500">No upcoming meetings</p>
            <p className="text-sm text-slate-400 mt-1">
              Schedule a new meeting to get started
            </p>
          </div> : upcomingMeetings.map(meeting => <div key={meeting.id} className="border border-slate-200 rounded-lg p-4 hover:border-blue-300 transition-colors group">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-slate-900">
                  {meeting.title}
                </h3>
                <button onClick={() => onDeleteMeeting(meeting.id)} className="text-slate-400 hover:text-red-600 transition-colors opacity-0 group-hover:opacity-100">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-slate-600">
                  <Calendar size={14} className="mr-2 text-blue-600" />
                  <span>{formatDate(meeting.date)}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock size={14} className="mr-2 text-blue-600" />
                  <span>
                    {formatTime(meeting.date)} ({meeting.duration} min)
                  </span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Users size={14} className="mr-2 text-blue-600" />
                  <span>
                    {meeting.students.length} student
                    {meeting.students.length !== 1 ? 's' : ''}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="inline-block bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                    {meeting.class}
                  </span>
                </div>
                <div className="pt-2">
                  <details className="text-xs text-slate-500">
                    <summary className="cursor-pointer hover:text-slate-700">
                      View students ({meeting.students.length})
                    </summary>
                    <ul className="mt-2 space-y-1 pl-4">
                      {meeting.students.map((student, idx) => <li key={idx}>• {student}</li>)}
                    </ul>
                  </details>
                </div>
              </div>
            </div>)}
      </div>
    </div>;
}