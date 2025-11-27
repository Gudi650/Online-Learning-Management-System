import React from 'react';
import { BookOpen, Users, Clock, Plus } from 'lucide-react';
export function Courses() {
  const courses = [{
    id: 1,
    name: 'Advanced Mathematics',
    code: 'MATH-301',
    students: 24,
    schedule: 'Mon, Wed, Fri - 10:00 AM',
    duration: '60 min',
    color: 'bg-blue-500'
  }, {
    id: 2,
    name: 'Physics Laboratory',
    code: 'PHYS-201',
    students: 18,
    schedule: 'Tue, Thu - 2:00 PM',
    duration: '90 min',
    color: 'bg-purple-500'
  }, {
    id: 3,
    name: 'English Literature',
    code: 'ENG-401',
    students: 30,
    schedule: 'Mon, Wed - 1:00 PM',
    duration: '75 min',
    color: 'bg-emerald-500'
  }, {
    id: 4,
    name: 'Computer Science',
    code: 'CS-101',
    students: 22,
    schedule: 'Tue, Thu - 9:00 AM',
    duration: '90 min',
    color: 'bg-orange-500'
  }, {
    id: 5,
    name: 'Chemistry',
    code: 'CHEM-202',
    students: 20,
    schedule: 'Wed, Fri - 11:00 AM',
    duration: '60 min',
    color: 'bg-pink-500'
  }, {
    id: 6,
    name: 'History',
    code: 'HIST-301',
    students: 26,
    schedule: 'Mon, Thu - 3:00 PM',
    duration: '60 min',
    color: 'bg-indigo-500'
  }];
  return <div className="p-6 md:p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Courses</h1>
        <p className="text-slate-600">
          Manage your teaching courses and schedules
        </p>
      </div>
      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Courses</p>
              <p className="text-3xl font-bold text-slate-900">
                {courses.length}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <BookOpen className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Total Students</p>
              <p className="text-3xl font-bold text-slate-900">
                {courses.reduce((sum, course) => sum + course.students, 0)}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-600 mb-1">Avg. Class Size</p>
              <p className="text-3xl font-bold text-slate-900">
                {Math.round(courses.reduce((sum, course) => sum + course.students, 0) / courses.length)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Users className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
      </div>
      {/* Add Course Button */}
      <div className="mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Add New Course</span>
        </button>
      </div>
      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => <div key={course.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className={`${course.color} h-2`} />
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {course.name}
                </h3>
                <p className="text-sm text-slate-500">{course.code}</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-600">
                  <Users size={16} className="mr-2 text-blue-600" />
                  <span>{course.students} students enrolled</span>
                </div>
                <div className="flex items-center text-sm text-slate-600">
                  <Clock size={16} className="mr-2 text-blue-600" />
                  <span>{course.duration} per session</span>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <p className="text-sm text-slate-600">{course.schedule}</p>
                </div>
              </div>
              <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-2 rounded-lg transition-colors">
                View Details
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}