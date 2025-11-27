import React, { useState } from 'react';
import { Search, Plus, Mail, Phone, MoreVertical } from 'lucide-react';
export function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const students = [{
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.johnson@school.edu',
    phone: '+1 (555) 123-4567',
    class: 'Grade 10A',
    attendance: 95,
    avatar: 'AJ'
  }, {
    id: 2,
    name: 'Bob Smith',
    email: 'bob.smith@school.edu',
    phone: '+1 (555) 234-5678',
    class: 'Grade 10A',
    attendance: 88,
    avatar: 'BS'
  }, {
    id: 3,
    name: 'Carol White',
    email: 'carol.white@school.edu',
    phone: '+1 (555) 345-6789',
    class: 'Grade 10A',
    attendance: 92,
    avatar: 'CW'
  }, {
    id: 4,
    name: 'David Brown',
    email: 'david.brown@school.edu',
    phone: '+1 (555) 456-7890',
    class: 'Grade 10B',
    attendance: 90,
    avatar: 'DB'
  }, {
    id: 5,
    name: 'Emma Davis',
    email: 'emma.davis@school.edu',
    phone: '+1 (555) 567-8901',
    class: 'Grade 10B',
    attendance: 97,
    avatar: 'ED'
  }, {
    id: 6,
    name: 'Frank Miller',
    email: 'frank.miller@school.edu',
    phone: '+1 (555) 678-9012',
    class: 'Grade 11A',
    attendance: 85,
    avatar: 'FM'
  }];
  const filteredStudents = students.filter(student => student.name.toLowerCase().includes(searchTerm.toLowerCase()) || student.class.toLowerCase().includes(searchTerm.toLowerCase()));
  return <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Students</h1>
        <p className="text-slate-600">Manage and view all your students</p>
      </div>
      {/* Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input type="text" placeholder="Search students by name or class..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <Plus size={20} />
          <span>Add Student</span>
        </button>
      </div>
      {/* Students Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudents.map(student => <div key={student.id} className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">
                    {student.avatar}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    {student.name}
                  </h3>
                  <p className="text-sm text-slate-500">{student.class}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                <MoreVertical size={20} />
              </button>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm text-slate-600">
                <Mail size={16} className="mr-2 text-blue-600" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <Phone size={16} className="mr-2 text-blue-600" />
                <span>{student.phone}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-600">Attendance</span>
                <span className="text-sm font-semibold text-blue-600">
                  {student.attendance}%
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{
              width: `${student.attendance}%`
            }} />
              </div>
            </div>
          </div>)}
      </div>
    </div>;
}