import {
  faBagShopping,
  faChartLine,
  faCircleUser,
  faDollarSign,
  faPen,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const revenueData = [
  { month: 'Janvier', revenue: 850000 },
  { month: 'Février', revenue: 920000 },
  { month: 'Mars', revenue: 1050000 },
  { month: 'Avril', revenue: 980000 },
  { month: 'Mai', revenue: 1150000 },
  { month: 'Juin', revenue: 1250000 },
]

const statisticsData = [
  { name: 'Utilisateurs', value: 120 },
  { name: 'Produits', value: 85 },
  { name: 'Commandes', value: 42 },
]

const formatCurrency = (value) => `${new Intl.NumberFormat('fr-FR').format(value)} FCFA`

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

        <div className="mb-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm xl:col-span-2">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-900">Évolution des revenus</h3>
              <p className="mt-1 text-sm text-gray-500">Données de démonstration en FCFA</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData} margin={{ top: 8, right: 8, left: 8, bottom: 8 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(value) => `${value / 1000000}M`} tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} width={42} />
                  <Tooltip formatter={(value) => [formatCurrency(value), 'Revenus']} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                  <Line type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={3} dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#ffffff' }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
              <h3 className="text-lg font-semibold text-gray-900">Statistiques</h3>
              <p className="mt-1 text-sm text-gray-500">Vue synthétique des données</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statisticsData} margin={{ top: 8, right: 8, left: -18, bottom: 8 }}>
                  <CartesianGrid stroke="#e5e7eb" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 11 }} tickLine={false} axisLine={false} />
                  <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} tickLine={false} axisLine={false} />
                  <Tooltip formatter={(value) => [value, 'Total']} contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb' }} />
                  <Bar dataKey="value" fill="#0f766e" radius={[5, 5, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>
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
