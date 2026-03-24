import { TrendingDown, TrendingUp } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { dashboardKpis } from '@/lib/data/mock'

export function KPIGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {dashboardKpis.map((item) => {
        const TrendIcon = item.trend === 'down' ? TrendingDown : TrendingUp
        const tone = item.trend === 'down' ? 'text-warning' : 'text-success'

        return (
          <Card key={item.title} className="p-5">
            <p className="text-sm text-slate-500">{item.title}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <div className="text-2xl font-semibold">{item.value}</div>
              <div className={`inline-flex items-center gap-1 text-sm font-medium ${tone}`}>
                <TrendIcon className="h-4 w-4" /> {item.delta}
              </div>
            </div>
          </Card>
        )
      })}
    </section>
  )
}
