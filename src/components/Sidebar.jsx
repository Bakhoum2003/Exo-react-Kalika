import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar({ items }) {
  const mainItems = items.slice(0, -1)
  const logoutItem = items[items.length - 1]

  return (
    <aside className="fixed bottom-0 left-0 top-16 z-10 hidden w-64 flex-col overflow-y-auto bg-slate-950 px-4 py-6 text-slate-300 sm:flex">
      <div className="mb-8 flex items-center gap-3 px-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">A</div>
        <div>
          <h2 className="text-sm font-bold tracking-[0.16em] text-white">ADMIN PANEL</h2>
          <p className="mt-1 text-xs text-slate-500">Espace de gestion</p>
        </div>
      </div>

      <div className="mb-5 border-t border-slate-800" />
      <nav aria-label="Navigation principale">
        <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Navigation</p>
        <ul className="space-y-1">
          {mainItems.map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <FontAwesomeIcon icon={item.icon} className="text-base leading-none" />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto border-t border-slate-800 pt-5">
        <a href="#" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-slate-400 transition-colors duration-200 hover:bg-slate-900 hover:text-white">
          <FontAwesomeIcon icon={logoutItem.icon} className="text-base leading-none" />
          <span>{logoutItem.name}</span>
        </a>
      </div>
    </aside>
  )
}

export default Sidebar
