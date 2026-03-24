import { cn } from '@/lib/utils'

const statusStyles: Record<string, string> = {
  active: 'bg-emerald-50 text-emerald-700',
  healthy: 'bg-emerald-50 text-emerald-700',
  paid: 'bg-emerald-50 text-emerald-700',
  shipped: 'bg-blue-50 text-blue-700',
  packed: 'bg-blue-50 text-blue-700',
  low: 'bg-amber-50 text-amber-700',
  pending: 'bg-amber-50 text-amber-700',
  'pending approval': 'bg-amber-50 text-amber-700',
  'awaiting payment': 'bg-amber-50 text-amber-700',
  'in production': 'bg-violet-50 text-violet-700',
  overstock: 'bg-cyan-50 text-cyan-700',
  draft: 'bg-slate-100 text-slate-700',
  inactive: 'bg-slate-100 text-slate-700',
  expired: 'bg-slate-100 text-slate-700',
  delivered: 'bg-emerald-50 text-emerald-700',
  received: 'bg-emerald-50 text-emerald-700',
}

export function StatusChip({ value }: { value: string }) {
  const key = value.toLowerCase()
  return <span className={cn('inline-flex rounded-full px-2.5 py-1 text-xs font-medium', statusStyles[key] ?? 'bg-slate-100 text-slate-700')}>{value}</span>
}
