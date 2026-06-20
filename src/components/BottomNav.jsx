import { NavLink } from 'react-router-dom';

const ICONS = {
  today: (
    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" />
  ),
  history: (
    <path d="M13 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3zm1 5h-2v6l5.2 3.1.8-1.3-4-2.4V8z" />
  ),
  spark: (
    <path d="M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.39.65l-.07.13C12.96 16.06 11 21 11 21z" />
  ),
};

const TABS = [
  { to: '/', key: 'today', label: 'Today' },
  { to: '/history', key: 'history', label: 'History' },
  { to: '/spark', key: 'spark', label: 'Spark' },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full z-50 -skew-y-1 border-t-4 border-on-background drop-shadow-[-4px_-4px_0px_rgba(0,0,0,1)] flex justify-around items-center px-4 pb-4 pt-2 bg-surface">
      {TABS.map((tab) => (
        <NavLink
          key={tab.key}
          to={tab.to}
          end={tab.to === '/'}
          className={({ isActive }) =>
            'skew-y-1 flex flex-col items-center justify-center p-2 transition-all duration-75 active:scale-95 ' +
            (isActive
              ? 'bg-primary text-on-secondary -skew-x-6 hard-shadow'
              : 'text-on-surface-variant')
          }
        >
          <svg className="icon mb-1" style={{ width: 22, height: 22 }} viewBox="0 0 24 24">
            {ICONS[tab.key]}
          </svg>
          <span className="font-mono text-xs italic">{tab.label.toUpperCase()}</span>
        </NavLink>
      ))}
    </nav>
  );
}
