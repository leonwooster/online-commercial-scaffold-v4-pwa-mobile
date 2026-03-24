'use client'

import { useSearchParams } from 'next/navigation'
import { roleLabels } from '@/lib/auth/rbac'
import type { UserRole } from '@/lib/types'

const roles = Object.keys(roleLabels) as UserRole[]

export function LoginForm() {
  const searchParams = useSearchParams()
  const next = searchParams.get('next') ?? '/dashboard'

  return (
    <form action="/api/auth/login" method="post" className="space-y-5">
      <input type="hidden" name="next" value={next} />

      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-slate-700">Display name</label>
        <input
          id="name"
          name="name"
          defaultValue="Leon"
          className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none ring-0 transition focus:border-slate-400"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="role" className="text-sm font-medium text-slate-700">Sign in as</label>
        <select
          id="role"
          name="role"
          defaultValue="admin"
          className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
        >
          {roles.map((role) => (
            <option key={role} value={role}>{roleLabels[role]}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="branchId" className="text-sm font-medium text-slate-700">Branch context</label>
        <select
          id="branchId"
          name="branchId"
          defaultValue="hq"
          className="w-full rounded-2xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400"
        >
          <option value="hq">HQ Warehouse</option>
          <option value="pj">Petaling Jaya</option>
          <option value="jb">Johor Bahru</option>
          <option value="pg">Penang</option>
        </select>
      </div>

      <button className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
        Enter workspace
      </button>
    </form>
  )
}
