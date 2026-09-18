import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const profiles = [
  { name: 'Mohamed BAKHOUM', role: 'Administrateur', email: 'mohamed@example.com' },
  { name: 'Abdou SOW', role: 'Administratrice', email: 'abdou@example.com' },
  { name: 'Aminata DIALLO', role: 'Responsable marketing', email: 'aminata@example.com' },
  { name: 'Ibrahima NDIAYE', role: 'Gestionnaire', email: 'ibrahima@example.com' },
  { name: 'Fatou FALL', role: 'Assistante administrative', email: 'fatou@example.com' },
]

function SettingsPage() {
  return (
    <main className="min-w-0 flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          title="Paramètres"
          description="Gérez les profils de votre espace d'administration."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {profiles.map((profile) => (
            <Card key={profile.email}>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cyan-50 text-2xl text-cyan-600">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-slate-900">{profile.name}</h2>
                <p className="mt-1 text-sm font-medium text-slate-600">{profile.role}</p>
                <p className="mt-2 text-sm text-slate-500">{profile.email}</p>
                {/* <button
                  type="button"
                  className="mt-5 rounded-lg border border-cyan-200 px-4 py-2 text-sm font-medium text-cyan-700 transition hover:border-cyan-400 hover:bg-cyan-50"
                >
                  Modifier le profil
                </button> */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

export default SettingsPage
