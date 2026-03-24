import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { bestSellers, branches, factoryOrders } from '@/lib/data/mock'
import { currency } from '@/lib/utils'

export function OverviewPanels() {
  return (
    <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
      <Card className="p-6">
        <SectionHeader title="Best seller products" description="Top performing products across branches." />
        <div className="mt-5 space-y-4">
          {bestSellers.map((item, index) => (
            <div key={item.name} className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
              <div>
                <p className="font-medium">#{index + 1} {item.name}</p>
                <p className="text-sm text-slate-500">Top branch: {item.branch}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{item.units} units</p>
                <p className="text-sm text-slate-500">Sold this month</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-4">
        <Card className="p-6">
          <SectionHeader title="Branch distribution" description="Current visible branches." />
          <div className="mt-4 space-y-3">
            {branches.map((branch) => (
              <div key={branch.id} className="flex items-center justify-between rounded-2xl border border-border px-4 py-3">
                <div>
                  <p className="font-medium">{branch.name}</p>
                  <p className="text-sm text-slate-500">{branch.city}</p>
                </div>
                <span className="text-sm text-slate-500">Manager: {branch.manager}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <SectionHeader title="Factory order summary" description="Latest purchase flow to suppliers." />
          <div className="mt-4 space-y-3">
            {factoryOrders.map((order) => (
              <div key={order.id} className="rounded-2xl bg-slate-50 px-4 py-3">
                <div className="flex items-center justify-between">
                  <p className="font-medium">{order.id}</p>
                  <p className="text-sm text-slate-500">{order.status}</p>
                </div>
                <p className="mt-1 text-sm text-slate-500">{order.supplier}</p>
                <p className="mt-2 font-semibold">{currency(order.amount)}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
