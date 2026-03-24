import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { UserRole } from '@/lib/types'
import { DEFAULT_ROLE, isAllowedRoute } from '@/lib/auth/rbac'

export async function getSession() {
  const store = await cookies()
  const role = (store.get('ocp_role')?.value ?? DEFAULT_ROLE) as UserRole
  const name = store.get('ocp_user')?.value ?? 'Leon'
  const branchId = store.get('ocp_branch')?.value ?? 'hq'

  return { role, name, branchId }
}

export async function requireAccess(pathname: string) {
  const session = await getSession()
  if (!isAllowedRoute(session.role, pathname)) {
    redirect(`/unauthorized?from=${encodeURIComponent(pathname)}`)
  }
  return session
}
