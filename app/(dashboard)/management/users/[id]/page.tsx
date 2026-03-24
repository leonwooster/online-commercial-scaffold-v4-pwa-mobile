import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { KeyValueList } from '@/components/ui/key-value-list'
import { StatusChip } from '@/components/ui/status-chip'
import { getBranchName, getUser } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function UserDetailPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/management')
  const { id } = await params
  const user = getUser(id)
  if (!user) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Management', href: '/management' }, { label: user.name }]} />
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-slate-500">{user.id}</p>
            <h1 className="mt-1 text-2xl font-semibold">{user.name}</h1>
            <div className="mt-3"><StatusChip value={user.status} /></div>
          </div>
          <ButtonLink href={`/management/users/${user.id}/edit`}>Edit User</ButtonLink>
        </div>
      </Card>
      <Card className="p-6">
        <KeyValueList items={[
          { label: 'Email', value: user.email },
          { label: 'Role', value: user.role },
          { label: 'Assigned Branch', value: getBranchName(user.branchId) },
          { label: 'Access Pattern', value: user.role === 'admin' ? 'Global access' : 'Scoped access' },
        ]} />
      </Card>
    </div>
  )
}
