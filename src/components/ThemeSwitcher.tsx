import React, { useEffect } from 'react';
import { useThemeStore } from '../store/theme';
import { Monitor, Cpu, Wind, ListFilter, Square } from 'lucide-react';
import { cn } from '../lib/utils';

const themes = [
  { id: 'modern', label: 'Modern', icon: Monitor },
  { id: 'machined', label: 'Machined', icon: Cpu },
  { id: 'aero', label: 'Aero', icon: Wind },
  { id: 'high-density', label: 'Density', icon: ListFilter },
  { id: 'brutalist', label: 'Brutalist', icon: Square },
] as const;

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  return (
    <div className="flex flex-wrap gap-2 p-4 border-b border-border bg-surface sticky top-0 z-50">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={cn(
            "btn flex items-center gap-2 text-sm transition-all",
            theme === t.id ? "bg-brand text-white border-brand" : "hover:bg-gray-100"
          )}
        >
          <t.icon size={16} />
          <span className="hidden sm:inline">{t.label}</span>
        </button>
      ))}
    </div>
  );
};
