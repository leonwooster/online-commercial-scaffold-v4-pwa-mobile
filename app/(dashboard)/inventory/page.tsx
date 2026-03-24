import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { ButtonLink } from '@/components/ui/button'
import { StatusChip } from '@/components/ui/status-chip'
import { products } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function InventoryPage() {
  const session = await requireAccess('/inventory')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <SectionHeader title="Inventory CRUD" description="Mock screens for product listing, create, detail and edit flows." />
            <p className="mt-3 text-sm text-slate-600">
              Current scope: <span className="font-medium">{session.role}</span>. Replace mock data with API loaders later.
            </p>
          </div>
          <ButtonLink href="/inventory/products/new">Create product</ButtonLink>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">SKU</th>
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Supplier</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.sku} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{product.sku}</td>
                  <td className="px-4 py-3">{product.name}</td>
                  <td className="px-4 py-3">{product.category}</td>
                  <td className="px-4 py-3">{product.supplier}</td>
                  <td className="px-4 py-3">{product.totalStock}</td>
                  <td className="px-4 py-3"><StatusChip value={product.status} /></td>
                  <td className="px-4 py-3">
                    <div className="flex gap-3">
                      <Link href={`/inventory/products/${product.sku}`} className="text-slate-900 underline">View</Link>
                      <Link href={`/inventory/products/${product.sku}/edit`} className="text-slate-600 underline">Edit</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
