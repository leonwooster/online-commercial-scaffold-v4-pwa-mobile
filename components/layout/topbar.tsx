import Link from 'next/link'
import { Bell, Building2, ChevronDown, LogOut, Search } from 'lucide-react'
import { MobileNav } from '@/components/layout/mobile-nav'
import type { UserRole } from '@/lib/types'
import { roleLabels } from '@/lib/auth/rbac'
import { branches } from '@/lib/data/mock'

export function Topbar({ name, role, branchId }: { name: string; role: UserRole; branchId: string }) {
  const branch = branches.find((item) => item.id === branchId)

  return (
    <header className="flex flex-col gap-4 border-b border-border bg-white px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
      <div className="flex items-start gap-3">
        <MobileNav role={role} />
        <div>
        <h1 className="text-xl font-semibold tracking-tight md:text-2xl">Welcome back, {name}</h1>
        <p className="text-sm text-slate-600">
          {roleLabels[role]} view{branch ? ` · ${branch.name}` : ''}
        </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div className="hidden items-center gap-2 rounded-2xl border border-border bg-slate-50 px-3 py-2 text-sm text-slate-500 sm:flex">
          <Search className="h-4 w-4" /> Search inventory, orders, customers
        </div>
        <div className="hidden items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 text-sm text-slate-700 md:flex">
          <Building2 className="h-4 w-4" /> {branch?.name ?? 'All branches'}
        </div>
        <button className="rounded-2xl border border-border bg-white p-2.5">
          <Bell className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 text-sm font-medium">
          {roleLabels[role]} <ChevronDown className="h-4 w-4" />
        </div>
        <form action="/api/auth/logout" method="post">
          <button className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-3 py-2.5 text-sm font-medium text-slate-700">
            <LogOut className="h-4 w-4" /> Logout
          </button>
        </form>
        <Link href="/login" className="rounded-2xl bg-slate-900 px-3 py-2.5 text-sm font-medium text-white">
          Switch role
        </Link>
      </div>
    </header>
  )
}
