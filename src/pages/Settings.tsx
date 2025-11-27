import React, { useState } from 'react';
import { User, Bell, Lock, Globe, Moon, Save } from 'lucide-react';
export function Settings() {
  const [settings, setSettings] = useState({
    name: 'John Doe',
    email: 'john.doe@school.edu',
    phone: '+1 (555) 123-4567',
    subject: 'Mathematics',
    emailNotifications: true,
    meetingReminders: true,
    darkMode: false,
    language: 'en'
  });
  const handleSave = () => {
    alert('Settings saved successfully!');
  };
  return <div className="p-6 md:p-8 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Settings</h1>
        <p className="text-slate-600">Manage your account and preferences</p>
      </div>
      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <User className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">
              Profile Information
            </h2>
          </div>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name
                </label>
                <input type="text" value={settings.name} onChange={e => setSettings({
                ...settings,
                name: e.target.value
              })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address
                </label>
                <input type="email" value={settings.email} onChange={e => setSettings({
                ...settings,
                email: e.target.value
              })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input type="tel" value={settings.phone} onChange={e => setSettings({
                ...settings,
                phone: e.target.value
              })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Subject
                </label>
                <input type="text" value={settings.subject} onChange={e => setSettings({
                ...settings,
                subject: e.target.value
              })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition" />
              </div>
            </div>
          </div>
        </div>
        {/* Notification Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-blue-100 p-2 rounded-lg">
              <Bell className="text-blue-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Notifications</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition">
              <div>
                <p className="font-medium text-slate-900">
                  Email Notifications
                </p>
                <p className="text-sm text-slate-500">
                  Receive email updates about your schedule
                </p>
              </div>
              <input type="checkbox" checked={settings.emailNotifications} onChange={e => setSettings({
              ...settings,
              emailNotifications: e.target.checked
            })} className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
            </label>
            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition">
              <div>
                <p className="font-medium text-slate-900">Meeting Reminders</p>
                <p className="text-sm text-slate-500">
                  Get reminders before scheduled meetings
                </p>
              </div>
              <input type="checkbox" checked={settings.meetingReminders} onChange={e => setSettings({
              ...settings,
              meetingReminders: e.target.checked
            })} className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
            </label>
          </div>
        </div>
        {/* Appearance Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Moon className="text-purple-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Appearance</h2>
          </div>
          <div className="space-y-4">
            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition">
              <div>
                <p className="font-medium text-slate-900">Dark Mode</p>
                <p className="text-sm text-slate-500">Switch to dark theme</p>
              </div>
              <input type="checkbox" checked={settings.darkMode} onChange={e => setSettings({
              ...settings,
              darkMode: e.target.checked
            })} className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500" />
            </label>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <Globe className="inline mr-2" size={16} />
                Language
              </label>
              <select value={settings.language} onChange={e => setSettings({
              ...settings,
              language: e.target.value
            })} className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
          </div>
        </div>
        {/* Security Settings */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Lock className="text-orange-600" size={20} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Security</h2>
          </div>
          <button className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium py-3 rounded-lg transition-colors">
            Change Password
          </button>
        </div>
        {/* Save Button */}
        <div className="flex justify-end">
          <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors flex items-center space-x-2">
            <Save size={20} />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>;
}