import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextInput } from '@/components/ui/form-field'
import { branches, getUser } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function EditUserPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/management')
  const { id } = await params
  const user = getUser(id)
  if (!user) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Management', href: '/management' }, { label: user.name, href: `/management/users/${user.id}` }, { label: 'Edit' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Edit user</h1>
        <p className="mt-2 text-sm text-slate-600">Mock update screen for permission and branch assignment changes.</p>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Full Name"><TextInput defaultValue={user.name} /></FormField>
          <FormField label="Email"><TextInput defaultValue={user.email} /></FormField>
          <FormField label="Role"><SelectInput defaultValue={user.role}><option>admin</option><option>branch</option><option>dealer</option><option>supplier</option><option>customer</option></SelectInput></FormField>
          <FormField label="Branch"><SelectInput defaultValue={user.branchId ?? ''}><option value="">Unassigned</option>{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Status"><SelectInput defaultValue={user.status}><option>active</option><option>pending</option><option>inactive</option></SelectInput></FormField>
          <FormField label="Reset Password"><TextInput placeholder="Issue reset link or temp password" /></FormField>
        </div>
        <div className="mt-6 flex gap-3">
          <Button type="button">Update User</Button>
          <Button variant="danger" type="button">Deactivate User</Button>
          <ButtonLink href={`/management/users/${user.id}`} variant="secondary">Cancel</ButtonLink>
        </div>
      </Card>
    </div>
  )
}
