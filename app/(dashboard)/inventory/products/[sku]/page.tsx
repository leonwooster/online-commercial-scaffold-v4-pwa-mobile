import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { KeyValueList } from '@/components/ui/key-value-list'
import { StatusChip } from '@/components/ui/status-chip'
import { getProduct, getBranchName } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function ProductDetailPage({ params }: { params: Promise<{ sku: string }> }) {
  await requireAccess('/inventory')
  const { sku } = await params
  const product = getProduct(sku)

  if (!product) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Inventory', href: '/inventory' }, { label: product.name }]} />
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">{product.sku}</p>
            <h1 className="mt-1 text-2xl font-semibold">{product.name}</h1>
            <div className="mt-3"><StatusChip value={product.status} /></div>
          </div>
          <div className="flex gap-3">
            <ButtonLink href={`/inventory/products/${product.sku}/edit`}>Edit Product</ButtonLink>
            <ButtonLink href="/inventory" variant="secondary">Back</ButtonLink>
          </div>
        </div>
      </Card>
      <Card className="p-6">
        <KeyValueList items={[
          { label: 'Category', value: product.category },
          { label: 'Supplier', value: product.supplier },
          { label: 'Unit Price', value: `MYR ${product.price}` },
          { label: 'Current Stock', value: `${product.totalStock}` },
          { label: 'Reorder Point', value: `${product.reorderPoint}` },
          { label: 'Available In', value: product.branchAvailability.map(getBranchName).join(', ') },
        ]} />
      </Card>
      <Card className="p-6">
        <h2 className="text-lg font-semibold">Delete pattern</h2>
        <p className="mt-2 text-sm text-slate-600">For destructive actions, route this to a confirmation modal with audit logging and soft delete.</p>
      </Card>
    </div>
  )
}
