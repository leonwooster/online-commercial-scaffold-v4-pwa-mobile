import { Sidebar } from '@/components/layout/sidebar'
import { Topbar } from '@/components/layout/topbar'
import { getSession } from '@/lib/auth/session'
import { InstallPrompt } from '@/components/pwa/install-prompt'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar role={session.role} />
      <div className="flex min-h-screen flex-1 flex-col">
        <Topbar name={session.name} role={session.role} branchId={session.branchId} />
        <main className="flex-1 space-y-4 px-4 py-4 md:px-6 md:py-6">
          <InstallPrompt />
          {children}
        </main>
      </div>
    </div>
  )
}
