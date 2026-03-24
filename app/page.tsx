import Link from 'next/link'
import { ArrowRight, Building2, ChartColumn, Package, ReceiptText, ShoppingCart, Users } from 'lucide-react'
import { Card } from '@/components/ui/card'

const modules = [
  { title: 'Management', icon: Users, description: 'Roles, branches and user access control.' },
  { title: 'Inventory', icon: Package, description: 'Centralized stock visibility across all branches.' },
  { title: 'Ordering', icon: ShoppingCart, description: 'Factory ordering and customer ordering flows.' },
  { title: 'Finance', icon: ReceiptText, description: 'Payments, revenue and profit analytics.' },
  { title: 'Marketing', icon: Building2, description: 'Promotions and loyalty points handling.' },
  { title: 'Reporting', icon: ChartColumn, description: 'Operational and management dashboards.' },
]

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <section className="rounded-3xl bg-slate-900 p-8 text-white shadow-panel lg:p-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm">Next.js 15 App Router scaffold</span>
            <h1 className="text-4xl font-semibold tracking-tight">Online Commercial Platform</h1>
            <p className="text-slate-300">
              A starter frontend for multi-branch commerce operations covering inventory, ordering, finance, marketing and reporting.
            </p>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Open secure workspace <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <Card key={module.title} className="p-6">
                <div className="mb-4 inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">{module.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{module.description}</p>
              </Card>
            )
          })}
        </section>
      </div>
    </main>
  )
}
