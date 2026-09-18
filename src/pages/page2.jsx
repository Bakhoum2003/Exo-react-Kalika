import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCircleCheck, faClock, faFilter } from '@fortawesome/free-solid-svg-icons'

import Card from '../components/ui/Card'
import PageHeader from '../components/ui/PageHeader'

const products = [
	{ name: 'Pack découverte', category: 'Abonnement', status: 'Disponible', updatedAt: 'Aujourd’hui' },
	{ name: 'Formation avancée', category: 'Formation', status: 'En préparation', updatedAt: 'Hier' },
	{ name: 'Accompagnement premium', category: 'Service', status: 'Disponible', updatedAt: 'Il y a 3 jours' },
]

function Page2() {
	const [showAvailableOnly, setShowAvailableOnly] = useState(false)
	const visibleProducts = showAvailableOnly
		? products.filter((product) => product.status === 'Disponible')
		: products

	return (
		<main className="min-w-0 flex-1 overflow-y-auto bg-slate-50 p-6 lg:p-8">
			<div className="mx-auto max-w-7xl">
				<PageHeader
					title="Page 2"
					description="Consultez les éléments disponibles et suivez leur état en un coup d'œil."
				/>

				<div className="grid gap-5 lg:grid-cols-[1fr_1.5fr]">
					<Card>
						<div className="flex h-full flex-col justify-between gap-8">
							<div>
								<span className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
									<FontAwesomeIcon icon={faBox} />
								</span>
								<h2 className="mt-5 text-lg font-semibold text-slate-900">Catalogue de services</h2>
								<p className="mt-2 text-sm leading-6 text-slate-500">Retrouvez ici les offres suivies par votre équipe.</p>
							</div>
							<div>
								<p className="text-3xl font-bold text-slate-900">{products.length}</p>
								<p className="mt-1 text-sm text-slate-500">éléments enregistrés</p>
							</div>
						</div>
					</Card>

					<Card>
						<div className="flex flex-wrap items-center justify-between gap-3">
							<div>
								<h2 className="text-lg font-semibold text-slate-900">Liste des éléments</h2>
								<p className="mt-1 text-sm text-slate-500">Données de démonstration</p>
							</div>
							<button
								type="button"
								onClick={() => setShowAvailableOnly(!showAvailableOnly)}
								className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition ${
									showAvailableOnly
										? 'border-cyan-300 bg-cyan-50 text-cyan-700'
										: 'border-slate-200 text-slate-700 hover:border-cyan-300 hover:text-cyan-700'
								}`}
							>
								<FontAwesomeIcon icon={faFilter} />
								{showAvailableOnly ? 'Tous les éléments' : 'Disponibles uniquement'}
							</button>
						</div>
						<div className="mt-5 divide-y divide-slate-100">
							{visibleProducts.map((product) => (
								<div key={product.name} className="flex flex-wrap items-center justify-between gap-3 py-4 first:pt-0 last:pb-0">
									<div className="flex items-center gap-3">
										<span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
											<FontAwesomeIcon icon={product.status === 'Disponible' ? faCircleCheck : faClock} />
										</span>
										<div>
											<p className="text-sm font-semibold text-slate-800">{product.name}</p>
											<p className="mt-1 text-xs text-slate-500">{product.category} · {product.updatedAt}</p>
										</div>
									</div>
									<span className={`rounded-full px-2.5 py-1 text-xs font-medium ${product.status === 'Disponible' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}`}>
										{product.status}
									</span>
								</div>
							))}
						</div>
					</Card>
				</div>
			</div>
		</main>
	)
}

export default Page2
