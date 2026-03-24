import Link from 'next/link'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { LoginForm } from '@/components/auth/login-form'

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6 py-12">
      <div className="grid w-full max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[2rem] bg-slate-900 p-8 text-white lg:p-10">
          <div className="inline-flex rounded-2xl bg-white/10 p-3">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">Role-based commercial workspace</h1>
          <p className="mt-4 max-w-xl text-slate-300">
            This upgraded scaffold adds a mock login, middleware-based route protection, and role-aware navigation for admin, branch,
            dealer, supplier, and customer users.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {[
              'Protected route middleware',
              'Mock cookie session',
              'Dynamic navigation by role',
              'Unauthorized state handling',
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <Link href="/" className="mt-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to landing page
          </Link>
        </section>

        <Card className="p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight">Sign in</h2>
            <p className="mt-2 text-sm text-slate-600">Choose a role to preview the portal experience.</p>
          </div>
          <LoginForm />
        </Card>
      </div>
    </main>
  )
}
