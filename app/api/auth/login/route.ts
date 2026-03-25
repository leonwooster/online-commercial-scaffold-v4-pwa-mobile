import { NextResponse } from 'next/server'
import type { UserRole } from '@/lib/types'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = String(formData.get('name') ?? 'Leon')
  const role = String(formData.get('role') ?? 'admin') as UserRole
  const branchId = String(formData.get('branchId') ?? 'hq')
  const next = String(formData.get('next') ?? '/dashboard')

  // Get the host from headers (works better behind proxies like Azure)
  const host = request.headers.get('host') || request.headers.get('x-forwarded-host')
  const protocol = request.headers.get('x-forwarded-proto') || 'https'
  const redirectUrl = `${protocol}://${host}${next}`
  
  const response = NextResponse.redirect(redirectUrl)
  response.cookies.set('ocp_user', name, { httpOnly: false, path: '/' })
  response.cookies.set('ocp_role', role, { httpOnly: false, path: '/' })
  response.cookies.set('ocp_branch', branchId, { httpOnly: false, path: '/' })
  return response
}
