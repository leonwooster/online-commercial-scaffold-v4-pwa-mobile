import Link from 'next/link'

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl border border-border bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Offline mode</p>
        <h1 className="mt-3 text-2xl font-semibold text-slate-900">You are viewing the mock without internet</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          This PWA mock keeps key routes cached so you can still preview the mobile experience after installation.
        </p>
        <Link href="/login" className="mt-6 inline-flex rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white">
          Back to login
        </Link>
      </div>
    </main>
  )
}
