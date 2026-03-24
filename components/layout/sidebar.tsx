import Link from 'next/link'
import { BarChart3, Boxes, ChartNoAxesColumn, CreditCard, LayoutDashboard, Megaphone, Settings, ShoppingCart, Users } from 'lucide-react'
import type { UserRole } from '@/lib/types'
import { roleLabels } from '@/lib/auth/rbac'

const items = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard, roles: ['admin', 'branch', 'dealer', 'supplier', 'customer'] as UserRole[] },
  { href: '/inventory', label: 'Inventory', icon: Boxes, roles: ['admin', 'branch', 'supplier'] as UserRole[] },
  { href: '/orders/factory', label: 'Factory Orders', icon: ShoppingCart, roles: ['admin', 'branch', 'supplier'] as UserRole[] },
  { href: '/orders/customer', label: 'Customer Orders', icon: ShoppingCart, roles: ['admin', 'branch', 'dealer', 'customer'] as UserRole[] },
  { href: '/finance', label: 'Finance', icon: CreditCard, roles: ['admin', 'branch'] as UserRole[] },
  { href: '/marketing', label: 'Marketing', icon: Megaphone, roles: ['admin', 'branch', 'dealer', 'customer'] as UserRole[] },
  { href: '/reports', label: 'Reports', icon: BarChart3, roles: ['admin', 'branch'] as UserRole[] },
  { href: '/management', label: 'Management', icon: Users, roles: ['admin'] as UserRole[] },
]

export function Sidebar({ role }: { role: UserRole }) {
  const visibleItems = items.filter((item) => item.roles.includes(role))

  return (
    <aside className="hidden w-72 shrink-0 border-r border-border bg-white p-5 lg:block">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="rounded-2xl bg-slate-900 p-2 text-white">
          <ChartNoAxesColumn className="h-5 w-5" />
        </div>
        <div>
          <p className="font-semibold">Commercial Portal</p>
          <p className="text-xs text-slate-500">{roleLabels[role]} workspace</p>
        </div>
      </div>
      <nav className="space-y-1">
        {visibleItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      <div className="mt-8 rounded-3xl bg-slate-50 p-4">
        <div className="mb-1 text-sm font-semibold">Quick note</div>
        <p className="text-sm text-slate-600">RBAC is enforced in both middleware and page-level access helpers.</p>
        <div className="mt-4 inline-flex items-center gap-2 text-sm text-slate-500">
          <Settings className="h-4 w-4" /> Ready for real auth provider wiring
        </div>
      </div>
    </aside>
  )
}
