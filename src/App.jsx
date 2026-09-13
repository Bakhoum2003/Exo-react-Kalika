import {
  faBox,
  faGauge,
  faGear,
  faRightFromBracket,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  const menuItems = [
    { name: 'Dashboard', icon: faGauge },
    { name: 'Utilisateurs', icon: faUsers },
    { name: 'Produits', icon: faBox },
    { name: 'Paramètres', icon: faGear },
    { name: 'Déconnexion', icon: faRightFromBracket },
  ]

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-gray-50 text-gray-900">
      <Header
        title="Tableau de bord"
        username="Administrateur"
      />
      <div className="relative flex min-h-0 flex-1">
        <Sidebar items={menuItems} />
        <div className="ml-0 flex min-h-0 min-w-0 flex-1 flex-col sm:ml-64">
          <Dashboard
            welcomeMessage="Bienvenue dans votre espace d'administration."
            users={120}
            products={85}
            orders={42}
            revenue="1 250 000 FCFA"
          />
          <Footer year="2026" />
        </div>
      </div>
    </div>
  )
}

export default App
