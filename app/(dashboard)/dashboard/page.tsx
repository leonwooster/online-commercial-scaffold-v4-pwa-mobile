import { KPIGrid } from '@/components/dashboard/kpi-grid'
import { OverviewPanels } from '@/components/dashboard/overview-panels'
import { Card } from '@/components/ui/card'
import { requireAccess } from '@/lib/auth/session'
import { roleLabels } from '@/lib/auth/rbac'

export default async function DashboardPage() {
  const session = await requireAccess('/dashboard')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-xl font-semibold tracking-tight">Operations overview</h2>
        <p className="mt-2 text-sm text-slate-600">
          You are currently previewing the <span className="font-medium">{roleLabels[session.role]}</span> experience.
          Connect this to your real identity provider and replace mock KPIs with live APIs.
        </p>
      </Card>
      <KPIGrid />
      <OverviewPanels />
    </div>
  )
}
