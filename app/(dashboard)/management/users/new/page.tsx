import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextInput } from '@/components/ui/form-field'
import { branches } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function NewUserPage() {
  await requireAccess('/management')

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Management', href: '/management' }, { label: 'Invite User' }]} />
      <Card className="p-6">
        <h1 className="text-2xl font-semibold">Invite user</h1>
        <p className="mt-2 text-sm text-slate-600">Mock create screen for onboarding a new user.</p>
      </Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Full Name"><TextInput defaultValue="Nur Aqilah" /></FormField>
          <FormField label="Email"><TextInput defaultValue="aqilah@company.com" /></FormField>
          <FormField label="Role"><SelectInput defaultValue="branch"><option>admin</option><option>branch</option><option>dealer</option><option>supplier</option><option>customer</option></SelectInput></FormField>
          <FormField label="Branch"><SelectInput defaultValue="pg"><option value="">Unassigned</option>{branches.map((branch) => <option key={branch.id} value={branch.id}>{branch.name}</option>)}</SelectInput></FormField>
          <FormField label="Temporary Password"><TextInput defaultValue="Temp#2026" /></FormField>
          <FormField label="Status"><SelectInput defaultValue="pending"><option>active</option><option>pending</option><option>inactive</option></SelectInput></FormField>
        </div>
        <div className="mt-6 flex gap-3">
          <Button type="button">Create User</Button>
          <ButtonLink href="/management" variant="secondary">Cancel</ButtonLink>
        </div>
      </Card>
    </div>
  )
}
