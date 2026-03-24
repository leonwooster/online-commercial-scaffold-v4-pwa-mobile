import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { ButtonLink } from '@/components/ui/button'
import { StatusChip } from '@/components/ui/status-chip'
import { LoyaltyCards } from '@/components/marketing/loyalty-cards'
import { promotions } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function MarketingPage() {
  await requireAccess('/marketing')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeader title="Promotions CRUD" description="Campaign listing, create, detail and edit patterns." />
          <ButtonLink href="/marketing/promotions/new">Create promotion</ButtonLink>
        </div>
      </Card>
      <LoyaltyCards />
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3 font-medium">Name</th><th className="px-4 py-3 font-medium">Type</th><th className="px-4 py-3 font-medium">Branches</th><th className="px-4 py-3 font-medium">Period</th><th className="px-4 py-3 font-medium">Status</th><th className="px-4 py-3 font-medium">Actions</th></tr></thead>
            <tbody>
              {promotions.map((promotion) => (
                <tr key={promotion.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{promotion.name}</td>
                  <td className="px-4 py-3">{promotion.type}</td>
                  <td className="px-4 py-3">{promotion.branches}</td>
                  <td className="px-4 py-3">{promotion.period}</td>
                  <td className="px-4 py-3"><StatusChip value={promotion.status} /></td>
                  <td className="px-4 py-3"><div className="flex gap-3"><Link href={`/marketing/promotions/${promotion.id}`} className="underline">View</Link><Link href={`/marketing/promotions/${promotion.id}/edit`} className="underline text-slate-600">Edit</Link></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
