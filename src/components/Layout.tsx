import React from 'react';
import { Sidebar } from './Sidebar';
export function Layout({
  children
}) {
  return <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>;
}