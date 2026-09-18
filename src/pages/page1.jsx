import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faCircleCheck, faEye, faEyeSlash, faUsers } from '@fortawesome/free-solid-svg-icons'

import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const statistics = [
	{ label: 'Visiteurs ce mois', value: '2 480', icon: faUsers, color: 'text-cyan-600 bg-cyan-50' },
	{ label: 'Taux de progression', value: '+18,4 %', icon: faChartLine, color: 'text-emerald-600 bg-emerald-50' },
	{ label: 'Objectifs atteints', value: '12', icon: faCircleCheck, color: 'text-amber-600 bg-amber-50' },
]

function Page1() {
	const [showDetails, setShowDetails] = useState(false)

	return (
		<main className="min-w-0 flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
			<div className="mx-auto max-w-7xl">
				<PageHeader
					title="Page 1"
					description="Suivez les indicateurs principaux et les dernières informations de votre activité."
				/>

				<div className="mb-6 grid gap-5 md:grid-cols-3">
					{statistics.map((statistic) => (
						<Card key={statistic.label}>
							<div className="flex items-center justify-between gap-4">
								<div>
									<p className="text-sm text-slate-500">{statistic.label}</p>
									<p className="mt-2 text-2xl font-bold text-slate-900">{statistic.value}</p>
								</div>
								<span className={`flex h-11 w-11 items-center justify-center rounded-xl ${statistic.color}`}>
									<FontAwesomeIcon icon={statistic.icon} />
								</span>
							</div>
						</Card>
					))}
				</div>

				<div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
					<Card>
						<div className="flex flex-wrap items-start justify-between gap-4">
							<div>
								<h2 className="text-lg font-semibold text-slate-900">Résumé de l'activité</h2>
								<p className="mt-1 text-sm text-slate-500">Une vue rapide des objectifs de cette semaine.</p>
							</div>
							<button
								type="button"
								onClick={() => setShowDetails(!showDetails)}
								className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:text-cyan-700"
							>
								<FontAwesomeIcon icon={showDetails ? faEyeSlash : faEye} />
								{showDetails ? 'Masquer les détails' : 'Voir les détails'}
							</button>
						</div>
						<div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-100">
							<div className="h-full w-[72%] rounded-full bg-cyan-400" />
						</div>
						<div className="mt-3 flex justify-between text-xs text-slate-500">
							<span>Progression globale</span>
							<span className="font-semibold text-slate-700">72 %</span>
						</div>
						{showDetails && (
							<div className="mt-5 border-t border-slate-100 pt-4 text-sm text-slate-600">
								La prochaine étape consiste à finaliser les 3 objectifs encore en attente.
							</div>
						)}
					</Card>

					<Card>
						<h2 className="text-lg font-semibold text-slate-900">Dernières activités</h2>
						<div className="mt-5 space-y-4">
							{['Rapport hebdomadaire créé', 'Nouvel objectif ajouté', 'Équipe mise à jour'].map((activity) => (
								<div key={activity} className="flex items-center gap-3 text-sm text-slate-600">
									<FontAwesomeIcon icon={faCircleCheck} className="text-emerald-500" />
									<span>{activity}</span>
								</div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</main>
	)
}

export default Page1
