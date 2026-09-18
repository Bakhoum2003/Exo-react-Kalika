import {
  faBagShopping,
  faChartLine,
  faCircleUser,
  faDollarSign,
  faPen,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Dashboard({ welcomeMessage, users, products, orders, revenue }) {
  return (
    <main className="min-w-0 flex-1 overflow-y-auto bg-gray-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:text-3xl">Tableau de bord</h2>
        <p className="mt-2 text-sm text-gray-500 lg:text-base">{welcomeMessage}</p>

        <div className="mb-8 mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Utilisateurs</h3>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-xl text-blue-600">
                <FontAwesomeIcon icon={faUserPlus} className="text-lg" />
              </span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-gray-900">{users}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Produits</h3>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-xl text-emerald-600">
                <FontAwesomeIcon icon={faBagShopping} className="text-lg" />
              </span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-gray-900">{products}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Commandes</h3>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50 text-xl text-amber-600">
                <FontAwesomeIcon icon={faChartLine} className="text-lg" />
              </span>
            </div>
            <p className="text-3xl font-bold tracking-tight text-gray-900">{orders}</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-500">Revenus</h3>
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-xl text-violet-600">
                <FontAwesomeIcon icon={faDollarSign} className="text-lg" />
              </span>
            </div>
            <p className="text-2xl font-bold tracking-tight text-gray-900">{revenue}</p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Activités récentes</h3>
          <div>
            <div className="flex items-center gap-4 border-b border-gray-100 py-4 first:pt-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-base text-blue-600">
                <FontAwesomeIcon icon={faCircleUser} className="text-sm" />
              </span>
              <div className="min-w-0 flex-1"><p className="text-sm font-medium text-gray-800">Nouvel utilisateur inscrit</p><p className="mt-1 text-xs text-gray-500">Il y a 2 heures</p></div>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-100 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-base text-emerald-600">
                <FontAwesomeIcon icon={faBagShopping} className="text-sm" />
              </span>
              <div className="min-w-0 flex-1"><p className="text-sm font-medium text-gray-800">Nouveau produit ajouté</p><p className="mt-1 text-xs text-gray-500">Il y a 4 heures</p></div>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-100 py-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-50 text-base text-amber-600">
                <FontAwesomeIcon icon={faChartLine} className="text-sm" />
              </span>
              <div className="min-w-0 flex-1"><p className="text-sm font-medium text-gray-800">Commande reçue</p><p className="mt-1 text-xs text-gray-500">Il y a 6 heures</p></div>
            </div>
            <div className="flex items-center gap-4 py-4 last:pb-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-base text-violet-600">
                <FontAwesomeIcon icon={faPen} className="text-sm" />
              </span>
              <div className="min-w-0 flex-1"><p className="text-sm font-medium text-gray-800">Produit modifié</p><p className="mt-1 text-xs text-gray-500">Il y a 8 heures</p></div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

export default Dashboard
