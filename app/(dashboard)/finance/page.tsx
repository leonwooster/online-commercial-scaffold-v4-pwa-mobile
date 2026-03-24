import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { requireAccess } from '@/lib/auth/session'

export default async function FinancePage() {
  await requireAccess('/finance')

  const metrics = [
    { label: 'Monthly Revenue', value: 'MYR 428,000' },
    { label: 'Gross Profit', value: 'MYR 119,000' },
    { label: 'Payment Success Rate', value: '98.6%' },
  ]

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <SectionHeader title="Finance" description="Accounting, payment gateway status and monthly profit tracking." />
      </Card>
      <div className="grid gap-4 md:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.label} className="p-6">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-3 text-2xl font-semibold">{metric.value}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
