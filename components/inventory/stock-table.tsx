import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { stock } from '@/lib/data/mock'

const statusTone: Record<string, string> = {
  healthy: 'bg-success/10 text-success',
  low: 'bg-warning/10 text-warning',
  overstock: 'bg-primary/10 text-primary',
}

export function StockTable() {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-5 py-4 font-medium">SKU</th>
              <th className="px-5 py-4 font-medium">Product</th>
              <th className="px-5 py-4 font-medium">Category</th>
              <th className="px-5 py-4 font-medium">Supplier</th>
              <th className="px-5 py-4 font-medium">Total Stock</th>
              <th className="px-5 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((item) => (
              <tr key={item.sku} className="border-t border-border">
                <td className="px-5 py-4 font-medium">{item.sku}</td>
                <td className="px-5 py-4">{item.name}</td>
                <td className="px-5 py-4">{item.category}</td>
                <td className="px-5 py-4">{item.supplier}</td>
                <td className="px-5 py-4">{item.totalStock}</td>
                <td className="px-5 py-4"><Badge className={statusTone[item.status]}>{item.status}</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
