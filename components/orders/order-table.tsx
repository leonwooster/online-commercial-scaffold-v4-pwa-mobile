import { Card } from '@/components/ui/card'
import { currency } from '@/lib/utils'

export function OrderTable({
  title,
  columns,
  rows,
}: {
  title: string
  columns: string[]
  rows: Array<Record<string, any>>
}) {
  return (
    <Card className="overflow-hidden">
      <div className="border-b border-border px-5 py-4">
        <h3 className="font-semibold">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              {columns.map((column) => (
                <th key={column} className="px-5 py-4 font-medium">{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index} className="border-t border-border">
                {columns.map((column) => {
                  const raw = row[column]
                  const value = typeof raw === 'number' ? currency(raw) : String(raw)
                  return <td key={column} className="px-5 py-4">{value}</td>
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
