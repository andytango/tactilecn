import React from 'react';
import { cn } from '../lib/utils';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-surface text-text">
      <nav className="sm:hidden p-4 border-b border-border">
        {/* Simple mobile nav placeholder */}
        <div className="font-bold">TACTILE.CN</div>
      </nav>
      <div className="flex flex-col sm:flex-row">
        <aside className="hidden sm:block w-64 h-screen sticky top-0 border-r border-border p-6">
          <div className="text-xl font-bold mb-8">TACTILE.CN</div>
          <ul className="space-y-4">
            <li className="font-medium opacity-60 uppercase text-[10px] tracking-widest">Showcase</li>
            <li><a href="#ecommerce" className="hover:text-brand transition-colors">E-commerce</a></li>
            <li><a href="#analytics" className="hover:text-brand transition-colors">Analytics</a></li>
            <li><a href="#console" className="hover:text-brand transition-colors">Console</a></li>
            <li><a href="#kitchen-sink" className="hover:text-brand transition-colors">Kitchen Sink</a></li>
          </ul>
        </aside>
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
};
