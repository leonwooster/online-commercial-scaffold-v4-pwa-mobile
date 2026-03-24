import type { UserRole } from '@/lib/types'

export const DEFAULT_ROLE: UserRole = 'admin'

export const PROTECTED_PREFIXES = ['/dashboard', '/inventory', '/orders', '/finance', '/marketing', '/reports', '/management']

export const roleLabels: Record<UserRole, string> = {
  admin: 'Admin',
  branch: 'Branch',
  dealer: 'Dealer',
  supplier: 'Supplier',
  customer: 'Customer',
}

export const routeAccess: Record<string, UserRole[]> = {
  '/dashboard': ['admin', 'branch', 'dealer', 'supplier', 'customer'],
  '/inventory': ['admin', 'branch', 'supplier'],
  '/orders': ['admin', 'branch', 'dealer', 'supplier', 'customer'],
  '/finance': ['admin', 'branch'],
  '/marketing': ['admin', 'branch', 'dealer', 'customer'],
  '/reports': ['admin', 'branch'],
  '/management': ['admin'],
}

export function getAllowedRoles(pathname: string): UserRole[] {
  const prefix = Object.keys(routeAccess).find((route) => pathname === route || pathname.startsWith(`${route}/`))
  return prefix ? routeAccess[prefix] : ['admin']
}

export function isAllowedRoute(role: string, pathname: string) {
  const allowedRoles = getAllowedRoles(pathname)
  return allowedRoles.includes(role as UserRole)
}
