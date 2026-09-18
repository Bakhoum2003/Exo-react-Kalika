import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faGear,
  faMagnifyingGlass,
  faBars,
  faXmark,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

function Header({ name, role, onMenuClick, isMenuOpen }) {
  const [searchValue, setSearchValue] = useState('')
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)
  const actionsRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (actionsRef.current && !actionsRef.current.contains(event.target)) {
        setIsNotificationsOpen(false)
        setIsSettingsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  return (
    <header className="z-20 flex h-16 w-full shrink-0 items-center gap-4 bg-[#101d35] px-4 text-white shadow-lg sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        aria-expanded={isMenuOpen}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white sm:hidden"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
      </button>
      <div className="hidden min-w-32 shrink-0 items-center gap-2 lg:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 font-bold text-[#101d35]">
          M
        </span>
        <span className="text-sm font-semibold tracking-wide">MOHAMED</span>
      </div>

      <div className="min-w-0 flex-1">
        <label className="relative block max-w-xl">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Rechercher..."
            aria-label="Rechercher"
            className="h-10 w-full rounded-xl border border-transparent bg-slate-100 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/30"
          />
        </label>
      </div>

      <div ref={actionsRef} className="flex shrink-0 items-center gap-2 sm:gap-4">
        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsNotificationsOpen(!isNotificationsOpen)
              setIsSettingsOpen(false)
            }}
            aria-label="Notifications"
            aria-expanded={isNotificationsOpen}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="absolute right-1 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              5
            </span>
          </button>
          {isNotificationsOpen && (
            <div className="absolute right-0 top-12 w-72 rounded-xl bg-white p-4 text-slate-800 shadow-xl ring-1 ring-black/5">
              <p className="mb-3 text-sm font-semibold">Notifications</p>
              <div className="space-y-3 text-xs text-slate-500">
                <p className="border-b border-slate-100 pb-3">Nouvelle inscription utilisateur</p>
                <p className="border-b border-slate-100 pb-3">Le rapport mensuel est disponible</p>
                <p>Votre sauvegarde a été effectuée</p>
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={() => {
              setIsSettingsOpen(!isSettingsOpen)
              setIsNotificationsOpen(false)
            }}
            aria-label="Paramètres"
            aria-expanded={isSettingsOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
          >
            <FontAwesomeIcon icon={faGear} />
          </button>
          {isSettingsOpen && (
            <div className="absolute right-0 top-12 w-36 rounded-xl bg-white p-3 text-sm font-medium text-slate-700 shadow-xl ring-1 ring-black/5">
              Paramètres
            </div>
          )}
        </div>

        <div className="flex min-w-0 items-center gap-2 border-l border-white/15 pl-3 sm:gap-3 sm:pl-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-[#101d35]">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div className="hidden min-w-0 sm:block">
            <p className="truncate text-sm font-semibold">{name}</p>
            <p className="truncate text-xs text-slate-400">{role}</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
