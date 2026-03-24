import { ReportCards } from '@/components/reports/report-cards'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { requireAccess } from '@/lib/auth/session'

export default async function ReportsPage() {
  await requireAccess('/reports')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <SectionHeader title="Reports" description="Operational and management reports for branch performance and supply planning." />
      </Card>
      <ReportCards />
    </div>
  )
}
