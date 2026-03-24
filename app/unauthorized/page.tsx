import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/card'

export default async function UnauthorizedPage({ searchParams }: { searchParams: Promise<{ from?: string }> }) {
  const params = await searchParams
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-10">
      <Card className="max-w-lg p-8 text-center">
        <div className="mx-auto inline-flex rounded-2xl bg-amber-100 p-3 text-amber-700">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold">Access restricted</h1>
        <p className="mt-3 text-sm text-slate-600">
          Your current role does not have permission to open <span className="font-medium">{params.from ?? 'this page'}</span>.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/dashboard" className="rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white">Go to dashboard</Link>
          <Link href="/login" className="rounded-2xl border border-border px-4 py-2.5 text-sm font-medium text-slate-700">Switch role</Link>
        </div>
      </Card>
    </main>
  )
}
