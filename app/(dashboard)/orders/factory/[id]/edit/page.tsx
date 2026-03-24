import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextArea, TextInput } from '@/components/ui/form-field'
import { branches, getFactoryOrder } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function EditFactoryOrderPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/orders/factory')
  const { id } = await params
  const order = getFactoryOrder(id)
  if (!order) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Factory Orders', href: '/orders/factory' }, { label: order.id, href: `/orders/factory/${order.id}` }, { label: 'Edit' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Edit factory order</h1>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Supplier"><TextInput defaultValue={order.supplier} /></FormField>
          <FormField label="Requesting Branch"><SelectInput defaultValue={order.branchId}>{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Status"><SelectInput defaultValue={order.status}><option>Draft</option><option>Pending Approval</option><option>In Production</option><option>Shipped</option><option>Received</option></SelectInput></FormField>
          <FormField label="Expected Date"><TextInput defaultValue={order.expectedDate} /></FormField>
        </div>
        <div className="mt-4"><FormField label="Notes"><TextArea defaultValue="Update shipment status or revise amount after supplier confirmation." /></FormField></div>
        <div className="mt-6 flex gap-3"><Button type="button">Update Order</Button><Button variant="danger" type="button">Cancel Order</Button><ButtonLink href={`/orders/factory/${order.id}`} variant="secondary">Back</ButtonLink></div>
      </Card>
    </div>
  )
}
