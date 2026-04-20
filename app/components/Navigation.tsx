import React from 'react';

const navItems = [
  { id: 'live', label: 'สด', icon: '📹', active: true },
  { id: 'slot', label: 'สล็อต', icon: '🎰' },
  { id: 'fish', label: 'ยิงปลา', icon: '🐠' },
  { id: 'lottery', label: 'ลอตเตอรี่', icon: '🎯' },
  { id: 'sports', label: 'กีฬา', icon: '⚽' },
  { id: 'esports', label: 'อีสปอร์ต', icon: '🎮' },
  { id: 'cards', label: 'ไพ่', icon: '🃏' },
  { id: 'animal', label: 'แข่งสัตว์', icon: '🐎' },
  { id: 'news', label: 'ข่าวกิจกรรม', icon: '📰' },
];

export default function Navigation() {
  return (
    <nav className="w-full bg-[#0a0a0a] border-b border-white/5 relative z-40 shadow-sm shadow-accent-gold-dark/10">
      <div className="max-w-[1200px] mx-auto hidden md:flex items-center justify-center py-2 px-4 gap-6 lg:gap-12">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group flex flex-col items-center justify-center gap-1.5 transition-all w-20 relative
              ${item.active ? 'text-accent-gold' : 'text-foreground/70 hover:text-accent-gold-light'}
            `}
          >
            {/* Pseudo-Icon container */}
            <div className="text-2xl opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-transform group-hover:scale-110">
               {item.icon}
            </div>
            <span className="text-sm font-medium tracking-wide">{item.label}</span>
            {item.active && (
              <div className="absolute -bottom-[9px] w-full h-[2px] bg-gradient-to-r from-transparent via-accent-gold to-transparent"></div>
            )}
          </a>
        ))}
      </div>

      {/* Mobile Navigation Scrollable */}
      <div className="md:hidden flex overflow-x-auto py-2 px-2 gap-4 snap-x hide-scrollbar">
        {navItems.map((item) => (
          <a
            key={item.id + '-mobile'}
            href={`#${item.id}`}
            className={`snap-center shrink-0 flex flex-col items-center justify-center p-2 rounded-lg min-w-[70px]
              ${item.active ? 'bg-accent-gold-dark/20 text-accent-gold border border-accent-gold/40' : 'text-foreground/70 bg-white/5'}
            `}
          >
            <div className="text-xl mb-1">{item.icon}</div>
            <span className="text-[10px] font-medium">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
