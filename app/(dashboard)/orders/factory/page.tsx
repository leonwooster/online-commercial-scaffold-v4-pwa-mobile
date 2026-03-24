import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { ButtonLink } from '@/components/ui/button'
import { StatusChip } from '@/components/ui/status-chip'
import { branches, factoryOrders } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function FactoryOrdersPage() {
  await requireAccess('/orders/factory')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeader title="Factory Orders CRUD" description="Request, review and update supplier order records." />
          <ButtonLink href="/orders/factory/new">Create factory order</ButtonLink>
        </div>
      </Card>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500"><tr><th className="px-4 py-3 font-medium">Order ID</th><th className="px-4 py-3 font-medium">Supplier</th><th className="px-4 py-3 font-medium">Branch</th><th className="px-4 py-3 font-medium">Amount</th><th className="px-4 py-3 font-medium">Status</th><th className="px-4 py-3 font-medium">Actions</th></tr></thead>
            <tbody>
              {factoryOrders.map((order) => (
                <tr key={order.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.supplier}</td>
                  <td className="px-4 py-3">{branches.find((branch) => branch.id === order.branchId)?.name}</td>
                  <td className="px-4 py-3">MYR {order.amount.toLocaleString()}</td>
                  <td className="px-4 py-3"><StatusChip value={order.status} /></td>
                  <td className="px-4 py-3"><div className="flex gap-3"><Link href={`/orders/factory/${order.id}`} className="underline">View</Link><Link href={`/orders/factory/${order.id}/edit`} className="underline text-slate-600">Edit</Link></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
