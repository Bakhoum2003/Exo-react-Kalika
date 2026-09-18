import { useState } from 'react'
import Header from '../Header'
import Sidebar from './Sidebar'

function Layout({ children, menuItems, name, role }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 text-gray-900">
      <Header
        name={name}
        role={role}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
        isMenuOpen={isSidebarOpen}
      />
      <div className="relative flex min-h-0 flex-1">
        <Sidebar
          items={menuItems}
          isOpen={isSidebarOpen}
          onNavigate={() => setIsSidebarOpen(false)}
        />
        {isSidebarOpen && (
          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 top-16 z-20 bg-slate-950/50 sm:hidden"
          />
        )}
        <div className="ml-0 flex min-h-0 min-w-0 flex-1 flex-col sm:ml-64">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
