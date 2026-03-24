import { Card } from '@/components/ui/card'
import { loyaltySummary } from '@/lib/data/mock'

export function LoyaltyCards() {
  const items = [
    { label: 'Active Members', value: loyaltySummary.activeMembers.toLocaleString() },
    { label: 'Points Issued', value: loyaltySummary.pointsIssued.toLocaleString() },
    { label: 'Points Redeemed', value: loyaltySummary.pointsRedeemed.toLocaleString() },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <Card key={item.label} className="p-5">
          <p className="text-sm text-slate-500">{item.label}</p>
          <p className="mt-3 text-2xl font-semibold">{item.value}</p>
        </Card>
      ))}
    </div>
  )
}
