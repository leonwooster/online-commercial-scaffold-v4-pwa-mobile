import { NextResponse } from 'next/server'
import type { UserRole } from '@/lib/types'

export async function POST(request: Request) {
  const formData = await request.formData()
  const name = String(formData.get('name') ?? 'Leon')
  const role = String(formData.get('role') ?? 'admin') as UserRole
  const branchId = String(formData.get('branchId') ?? 'hq')
  const next = String(formData.get('next') ?? '/dashboard')

  const requestUrl = new URL(request.url)
  const redirectUrl = `${requestUrl.protocol}//${requestUrl.host}${next}`
  
  const response = NextResponse.redirect(redirectUrl)
  response.cookies.set('ocp_user', name, { httpOnly: false, path: '/' })
  response.cookies.set('ocp_role', role, { httpOnly: false, path: '/' })
  response.cookies.set('ocp_branch', branchId, { httpOnly: false, path: '/' })
  return response
}
