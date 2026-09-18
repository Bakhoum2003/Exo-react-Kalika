import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

function Sidebar({ items, isOpen, onNavigate }) {
  const navigationItems = items.filter((item) => item.path)
  const logoutItem = items.find((item) => item.action === 'logout')

  return (
    <aside className={`fixed bottom-0 left-0 top-16 z-30 flex w-64 flex-col overflow-y-auto bg-[#0b1428] px-4 py-6 text-slate-300 transition-transform duration-300 sm:z-10 sm:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="mb-8 flex items-center gap-3 px-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400 text-sm font-bold text-[#0b1428]">
          M
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-white">MOHAMED</h2>
          <p className="mt-1 text-xs text-slate-500">Espace de gestion</p>
        </div>
      </div>

      <div className="mb-5 border-t border-slate-800" />
      <nav aria-label="Navigation principale">
        <ul className="space-y-2">
          {navigationItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === '/'}
                onClick={onNavigate}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'bg-cyan-400 text-[#0b1428] shadow-sm'
                      : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                <FontAwesomeIcon icon={item.icon} className="w-5 text-center text-base leading-none" />
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {logoutItem && (
        <div className="mt-auto border-t border-slate-800 pt-5">
          <button
            type="button"
            onClick={onNavigate}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-400 transition-colors duration-200 hover:bg-slate-900 hover:text-white"
          >
            <FontAwesomeIcon icon={logoutItem.icon} className="w-5 text-center text-base leading-none" />
            <span>{logoutItem.label}</span>
          </button>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
