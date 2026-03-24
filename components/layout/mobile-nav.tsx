'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, LayoutDashboard, Boxes, ShoppingCart, CreditCard, Megaphone, BarChart3, Users } from 'lucide-react'
import type { UserRole } from '@/lib/types'

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

export function MobileNav({ role }: { role: UserRole }) {
  const [open, setOpen] = useState(false)
  const visibleItems = items.filter((item) => item.roles.includes(role))

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation"
        className="rounded-2xl border border-border bg-white p-2.5"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50 bg-slate-950/40">
          <div className="absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-white p-5 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-semibold">Commercial Portal</p>
                <p className="text-sm text-slate-500 capitalize">{role} workspace</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close navigation"
                className="rounded-2xl border border-border bg-white p-2.5"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="space-y-1">
              {visibleItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  )
}
