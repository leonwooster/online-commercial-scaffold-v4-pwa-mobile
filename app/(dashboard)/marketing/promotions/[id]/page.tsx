import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { KeyValueList } from '@/components/ui/key-value-list'
import { StatusChip } from '@/components/ui/status-chip'
import { getPromotion } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function PromotionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/marketing')
  const { id } = await params
  const promotion = getPromotion(id)
  if (!promotion) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Marketing', href: '/marketing' }, { label: promotion.name }]} />
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">{promotion.id}</p>
            <h1 className="mt-1 text-2xl font-semibold">{promotion.name}</h1>
            <div className="mt-3"><StatusChip value={promotion.status} /></div>
          </div>
          <ButtonLink href={`/marketing/promotions/${promotion.id}/edit`}>Edit Promotion</ButtonLink>
        </div>
      </Card>
      <Card className="p-6">
        <KeyValueList items={[
          { label: 'Type', value: promotion.type },
          { label: 'Branches', value: promotion.branches },
          { label: 'Period', value: promotion.period },
          { label: 'Redemption Impact', value: 'Supports earned points and voucher redemption' },
        ]} />
      </Card>
    </div>
  )
}
