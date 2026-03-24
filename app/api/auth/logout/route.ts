import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL('/login', request.url))
  response.cookies.set('ocp_user', '', { maxAge: 0, path: '/' })
  response.cookies.set('ocp_role', '', { maxAge: 0, path: '/' })
  response.cookies.set('ocp_branch', '', { maxAge: 0, path: '/' })
  return response
}
