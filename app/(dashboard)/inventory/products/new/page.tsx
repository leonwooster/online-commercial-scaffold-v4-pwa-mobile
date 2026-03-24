import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextInput } from '@/components/ui/form-field'
import { requireAccess } from '@/lib/auth/session'
import { branches } from '@/lib/data/mock'

export default async function NewProductPage() {
  await requireAccess('/inventory')

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Inventory', href: '/inventory' }, { label: 'Create Product' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Create product</h1>
        <p className="mt-2 text-sm text-slate-600">Mock create screen for product onboarding.</p>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="SKU"><TextInput defaultValue="TYR-005" /></FormField>
          <FormField label="Product Name"><TextInput defaultValue="High Mileage E8" /></FormField>
          <FormField label="Category"><SelectInput defaultValue="Passenger"><option>Passenger</option><option>SUV</option><option>Truck</option></SelectInput></FormField>
          <FormField label="Supplier"><TextInput defaultValue="Michel Supplier" /></FormField>
          <FormField label="Unit Price (MYR)"><TextInput defaultValue="460" /></FormField>
          <FormField label="Reorder Point"><TextInput defaultValue="100" /></FormField>
          <FormField label="Default Branch"><SelectInput defaultValue="hq">{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Initial Stock"><TextInput defaultValue="220" /></FormField>
        </div>
        <div className="mt-6 flex gap-3">
          <Button type="button">Save Product</Button>
          <ButtonLink href="/inventory" variant="secondary">Cancel</ButtonLink>
        </div>
      </Card>
    </div>
  )
}
