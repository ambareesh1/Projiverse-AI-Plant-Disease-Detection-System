import { Link, NavLink } from 'react-router-dom';
import { Leaf, LogIn, Menu, Sparkles, UserPlus, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Detect', to: '/detect' },
  { label: 'Diseases', to: '/diseases' },
  { label: 'AI Assistant', to: '/ai-assistant' },
  { label: 'Project', to: '/project-explanation' },
  { label: 'Dashboard', to: '/dashboard' },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-300 ${
    isActive
      ? 'bg-green-50 text-green-700'
      : 'text-slate-600 hover:bg-green-50 hover:text-green-700'
  }`;

export function HomeHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-3" aria-label="PlantCare AI home">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-green-600 text-white shadow-sm">
            <Leaf size={22} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-base font-bold leading-5 text-slate-950">PlantCare AI</span>
            <span className="flex items-center gap-1 text-xs font-medium text-green-700">
              <Sparkles size={12} aria-hidden="true" /> Projiverse ready
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl border border-green-200 bg-white px-4 py-2.5 text-sm font-semibold text-green-700 transition-all duration-300 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <LogIn className="mr-2" size={16} aria-hidden="true" />
            Login
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            <UserPlus className="mr-2" size={16} aria-hidden="true" />
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-green-100 bg-white text-slate-700 transition hover:bg-green-50 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-green-100 bg-white px-4 py-4 shadow-sm md:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} className={navLinkClass} onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-xl border border-green-200 bg-white px-4 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-50"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
