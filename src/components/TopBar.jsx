export default function TopBar() {
  return (
    <header className="bg-surface text-primary w-full -skew-y-1 border-b-4 border-on-background hard-shadow fixed top-0 left-0 z-50 px-4 flex items-center h-16">
      <div className="skew-y-1 flex items-center gap-2">
        <svg className="icon" style={{ width: 26, height: 26 }} viewBox="0 0 24 24">
          <path d="M12 2C7.5 2 4 5.5 4 10v8.5c0 .6.6 1 1.1.7l1.9-1.2 1.9 1.4c.4.3.9.3 1.2 0L12 17l1.9 1.4c.4.3.9.3 1.2 0l1.9-1.4 1.9 1.2c.5.3 1.1-.1 1.1-.7V10c0-4.5-3.5-8-8-8zm-2.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        <span
          className="font-display text-2xl -skew-x-2 drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
          style={{ fontSize: 21 }}
        >
          PHANTOM VISION
        </span>
      </div>
    </header>
  );
}
