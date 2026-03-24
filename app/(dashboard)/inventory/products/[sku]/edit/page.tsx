import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextInput } from '@/components/ui/form-field'
import { branches, getProduct } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function EditProductPage({ params }: { params: Promise<{ sku: string }> }) {
  await requireAccess('/inventory')
  const { sku } = await params
  const product = getProduct(sku)
  if (!product) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Inventory', href: '/inventory' }, { label: product.name, href: `/inventory/products/${product.sku}` }, { label: 'Edit' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Edit product</h1>
        <p className="mt-2 text-sm text-slate-600">Mock update screen with prefilled values.</p>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="SKU"><TextInput defaultValue={product.sku} /></FormField>
          <FormField label="Product Name"><TextInput defaultValue={product.name} /></FormField>
          <FormField label="Category"><SelectInput defaultValue={product.category}><option>Passenger</option><option>SUV</option><option>Truck</option></SelectInput></FormField>
          <FormField label="Supplier"><TextInput defaultValue={product.supplier} /></FormField>
          <FormField label="Unit Price (MYR)"><TextInput defaultValue={String(product.price)} /></FormField>
          <FormField label="Reorder Point"><TextInput defaultValue={String(product.reorderPoint)} /></FormField>
          <FormField label="Default Branch"><SelectInput defaultValue={product.branchAvailability[0]}>{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Current Stock"><TextInput defaultValue={String(product.totalStock)} /></FormField>
        </div>
        <div className="mt-6 flex gap-3">
          <Button type="button">Update Product</Button>
          <Button variant="danger" type="button">Archive Product</Button>
          <ButtonLink href={`/inventory/products/${product.sku}`} variant="secondary">Cancel</ButtonLink>
        </div>
      </Card>
    </div>
  )
}
