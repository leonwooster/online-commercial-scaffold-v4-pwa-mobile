import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { KeyValueList } from '@/components/ui/key-value-list'
import { StatusChip } from '@/components/ui/status-chip'
import { branches, getFactoryOrder } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function FactoryOrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/orders/factory')
  const { id } = await params
  const order = getFactoryOrder(id)
  if (!order) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Factory Orders', href: '/orders/factory' }, { label: order.id }]} />
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl font-semibold">{order.id}</h1>
            <div className="mt-3"><StatusChip value={order.status} /></div>
          </div>
          <ButtonLink href={`/orders/factory/${order.id}/edit`}>Edit Order</ButtonLink>
        </div>
      </Card>
      <Card className="p-6">
        <KeyValueList items={[
          { label: 'Supplier', value: order.supplier },
          { label: 'Branch', value: branches.find((branch) => branch.id === order.branchId)?.name ?? order.branchId },
          { label: 'Requested Date', value: order.requestedDate },
          { label: 'Expected Date', value: order.expectedDate },
          { label: 'Amount', value: `MYR ${order.amount.toLocaleString()}` },
          { label: 'Workflow', value: 'Draft → Approval → Production → Shipment → Receipt' },
        ]} />
      </Card>
    </div>
  )
}
