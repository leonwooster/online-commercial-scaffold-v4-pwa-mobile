export function KeyValueList({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item.label} className="rounded-2xl border border-border p-4">
          <dt className="text-xs uppercase tracking-wide text-slate-500">{item.label}</dt>
          <dd className="mt-2 text-sm font-medium text-slate-900">{item.value}</dd>
        </div>
      ))}
    </dl>
  )
}
