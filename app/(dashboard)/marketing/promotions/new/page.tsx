import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextArea, TextInput } from '@/components/ui/form-field'
import { requireAccess } from '@/lib/auth/session'

export default async function NewPromotionPage() {
  await requireAccess('/marketing')

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Marketing', href: '/marketing' }, { label: 'Create Promotion' }]} />
      <Card className="p-6"><h1 className="text-2xl font-semibold">Create promotion</h1><p className="mt-2 text-sm text-slate-600">Mock create screen for promotion and loyalty campaigns.</p></Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Campaign Name"><TextInput defaultValue="Mid-Year Fleet Saver" /></FormField>
          <FormField label="Type"><SelectInput defaultValue="Branch Promo"><option>Branch Promo</option><option>Customer Promo</option><option>Loyalty Campaign</option></SelectInput></FormField>
          <FormField label="Branches"><TextInput defaultValue="All branches" /></FormField>
          <FormField label="Period"><TextInput defaultValue="1 May - 31 May" /></FormField>
          <FormField label="Status"><SelectInput defaultValue="Draft"><option>Draft</option><option>Active</option><option>Expired</option></SelectInput></FormField>
        </div>
        <div className="mt-4"><FormField label="Mechanics"><TextArea defaultValue="10% off for fleet orders above MYR 5,000." /></FormField></div>
        <div className="mt-6 flex gap-3"><Button type="button">Save Promotion</Button><ButtonLink href="/marketing" variant="secondary">Cancel</ButtonLink></div>
      </Card>
    </div>
  )
}
