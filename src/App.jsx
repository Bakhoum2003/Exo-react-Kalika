import {
  faBox,
  faGear,
  faHouse,
  faRightFromBracket,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/layout/Layout'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import SettingsPage from './pages/settings'

function App() {
  const menuItems = [
    { label: 'Accueil', path: '/', icon: faHouse },
    { label: 'Page 1', path: '/page1', icon: faUsers },
    { label: 'Page 2', path: '/page2', icon: faBox },
    { label: 'Paramètres', path: '/settings', icon: faGear },
    { label: 'Déconnexion', action: 'logout', icon: faRightFromBracket },
  ]

  return (
    <BrowserRouter>
      <Layout
        menuItems={menuItems}
        name="Mohamed BAKHOUM"
        role="Administrateur"
      >
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                welcomeMessage="Bienvenue dans votre espace d'administration."
                users={120}
                products={85}
                orders={42}
                revenue="1 250 000 FCFA"
              />
            }
          />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        <Footer year="2026" />
      </Layout>
    </BrowserRouter>
  )
}

export default App
