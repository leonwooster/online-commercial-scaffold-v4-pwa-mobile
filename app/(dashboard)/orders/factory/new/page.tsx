import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextArea, TextInput } from '@/components/ui/form-field'
import { branches } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function NewFactoryOrderPage() {
  await requireAccess('/orders/factory')

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Factory Orders', href: '/orders/factory' }, { label: 'Create Order' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Create factory order</h1>
        <p className="mt-2 text-sm text-slate-600">Mock create screen for branch-to-factory procurement.</p>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Supplier"><TextInput defaultValue="Goodyear Supplier" /></FormField>
          <FormField label="Requesting Branch"><SelectInput defaultValue="pj">{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Expected Date"><TextInput defaultValue="2026-04-05" /></FormField>
          <FormField label="Estimated Amount (MYR)"><TextInput defaultValue="45000" /></FormField>
        </div>
        <div className="mt-4"><FormField label="Notes"><TextArea defaultValue="Urgent replenishment for upcoming promotion and low stock." /></FormField></div>
        <div className="mt-6 flex gap-3"><Button type="button">Submit Order</Button><ButtonLink href="/orders/factory" variant="secondary">Cancel</ButtonLink></div>
      </Card>
    </div>
  )
}
