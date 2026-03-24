import { Card } from '@/components/ui/card'

const reports = [
  'Inventory distribution to each branch',
  'Best seller product',
  'Total ordering from factory',
  'Total sales by individual branch',
]

export function ReportCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {reports.map((report) => (
        <Card key={report} className="p-6">
          <p className="text-lg font-semibold">{report}</p>
          <p className="mt-2 text-sm text-slate-600">Ready for chart, table, export and schedule action.</p>
        </Card>
      ))}
    </div>
  )
}
