import { OrderTable } from '@/components/orders/order-table'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { customerOrders } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function CustomerOrdersPage() {
  await requireAccess('/orders/customer')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <SectionHeader title="Customer orders" description="External sales flow for customers, dealers and branches." />
      </Card>
      <OrderTable
        title="Latest customer orders"
        columns={['id', 'customer', 'branch', 'amount', 'status']}
        rows={customerOrders}
      />
    </div>
  )
}
