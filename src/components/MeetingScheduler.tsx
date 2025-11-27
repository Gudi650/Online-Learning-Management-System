import React, { useState } from 'react';
import { Calendar, Clock, Users, BookOpen, Plus } from 'lucide-react';
export function MeetingScheduler({
  onAddMeeting
}) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    duration: '60',
    class: '',
    students: []
  });
  const classes = ['Grade 10A', 'Grade 10B', 'Grade 11A', 'Grade 11B', 'Grade 12A'];
  const studentsByClass = {
    'Grade 10A': ['Alice Johnson', 'Bob Smith', 'Carol White', 'David Brown'],
    'Grade 10B': ['Emma Davis', 'Frank Miller', 'Grace Lee', 'Henry Wilson'],
    'Grade 11A': ['Ivy Chen', 'Jack Taylor', 'Kate Anderson', 'Leo Martinez'],
    'Grade 11B': ['Maya Patel', 'Noah Garcia', 'Olivia Rodriguez', 'Peter Kim'],
    'Grade 12A': ['Quinn Thompson', 'Ryan Lopez', 'Sarah Clark', 'Tom Harris']
  };
  const availableStudents = formData.class ? studentsByClass[formData.class] : [];
  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.title || !formData.date || !formData.time || !formData.class || formData.students.length === 0) {
      alert('Please fill in all fields and select at least one student');
      return;
    }
    const [year, month, day] = formData.date.split('-').map(Number);
    const [hours, minutes] = formData.time.split(':').map(Number);
    const meetingDate = new Date(year, month - 1, day, hours, minutes);
    onAddMeeting({
      title: formData.title,
      date: meetingDate,
      students: formData.students,
      class: formData.class,
      duration: parseInt(formData.duration)
    });
    setFormData({
      title: '',
      date: '',
      time: '',
      duration: '60',
      class: '',
      students: []
    });
  };
  const toggleStudent = student => {
    setFormData(prev => ({
      ...prev,
      students: prev.students.includes(student) ? prev.students.filter(s => s !== student) : [...prev.students, student]
    }));
  };
  return <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">
          Schedule New Meeting
        </h2>
        <Plus className="text-blue-600" size={24} />
      </div>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Meeting Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Meeting Title
          </label>
          <input type="text" value={formData.title} onChange={e => setFormData({
          ...formData,
          title: e.target.value
        })} placeholder="e.g., Math Review Session" className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
        </div>
        {/* Date and Time */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Calendar className="inline mr-2" size={16} />
              Date
            </label>
            <input type="date" value={formData.date} onChange={e => setFormData({
            ...formData,
            date: e.target.value
          })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Clock className="inline mr-2" size={16} />
              Time
            </label>
            <input type="time" value={formData.time} onChange={e => setFormData({
            ...formData,
            time: e.target.value
          })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
          </div>
        </div>
        {/* Duration */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Duration (minutes)
          </label>
          <select value={formData.duration} onChange={e => setFormData({
          ...formData,
          duration: e.target.value
        })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">60 minutes</option>
            <option value="90">90 minutes</option>
            <option value="120">120 minutes</option>
          </select>
        </div>
        {/* Class Selection */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            <BookOpen className="inline mr-2" size={16} />
            Select Class
          </label>
          <select value={formData.class} onChange={e => setFormData({
          ...formData,
          class: e.target.value,
          students: []
        })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
            <option value="">Choose a class</option>
            {classes.map(cls => <option key={cls} value={cls}>
                {cls}
              </option>)}
          </select>
        </div>
        {/* Student Selection */}
        {formData.class && <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              <Users className="inline mr-2" size={16} />
              Select Students ({formData.students.length} selected)
            </label>
            <div className="border border-slate-200 rounded-lg p-4 max-h-48 overflow-y-auto">
              <div className="space-y-2">
                {availableStudents.map(student => <label key={student} className="flex items-center space-x-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition">
                    <input type="checkbox" checked={formData.students.includes(student)} onChange={() => toggleStudent(student)} className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
                    <span className="text-slate-700">{student}</span>
                  </label>)}
              </div>
            </div>
          </div>}
        {/* Submit Button */}
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <Plus size={20} />
          <span>Schedule Meeting</span>
        </button>
      </form>
    </div>;
}