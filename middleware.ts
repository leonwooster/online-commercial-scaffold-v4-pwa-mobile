import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_ROLE, PROTECTED_PREFIXES, isAllowedRoute } from '@/lib/auth/rbac'

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  const isProtected = PROTECTED_PREFIXES.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`))
  if (!isProtected) return NextResponse.next()

  const role = request.cookies.get('ocp_role')?.value ?? DEFAULT_ROLE
  const isAuthed = request.cookies.get('ocp_user')?.value

  if (!isAuthed) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('next', pathname)
    return NextResponse.redirect(loginUrl)
  }

  if (!isAllowedRoute(role, pathname)) {
    const unauthorizedUrl = new URL('/unauthorized', request.url)
    unauthorizedUrl.searchParams.set('from', pathname)
    return NextResponse.redirect(unauthorizedUrl)
  }

  if (pathname === '/dashboard' && searchParams.get('role')) {
    const cleanUrl = request.nextUrl.clone()
    cleanUrl.searchParams.delete('role')
    return NextResponse.redirect(cleanUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/inventory/:path*', '/orders/:path*', '/finance/:path*', '/marketing/:path*', '/reports/:path*', '/management/:path*'],
}
