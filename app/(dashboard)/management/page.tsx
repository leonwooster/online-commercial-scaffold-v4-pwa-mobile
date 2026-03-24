import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { SectionHeader } from '@/components/ui/section-header'
import { ButtonLink } from '@/components/ui/button'
import { StatusChip } from '@/components/ui/status-chip'
import { getBranchName, users } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function ManagementPage() {
  await requireAccess('/management')

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <SectionHeader title="User Management CRUD" description="Admin mock screens for user list, create, detail and edit." />
          <ButtonLink href="/management/users/new">Invite user</ButtonLink>
        </div>
      </Card>
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Role</th>
                <th className="px-4 py-3 font-medium">Branch</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3 capitalize">{user.role}</td>
                  <td className="px-4 py-3">{getBranchName(user.branchId)}</td>
                  <td className="px-4 py-3"><StatusChip value={user.status} /></td>
                  <td className="px-4 py-3"><div className="flex gap-3"><Link href={`/management/users/${user.id}`} className="underline">View</Link><Link href={`/management/users/${user.id}/edit`} className="underline text-slate-600">Edit</Link></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
