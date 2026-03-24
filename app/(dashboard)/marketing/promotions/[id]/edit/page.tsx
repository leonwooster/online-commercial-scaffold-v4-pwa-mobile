import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { Button, ButtonLink } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { FormField, SelectInput, TextArea, TextInput } from '@/components/ui/form-field'
import { getPromotion } from '@/lib/data/mock'
import { requireAccess } from '@/lib/auth/session'

export default async function EditPromotionPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAccess('/marketing')
  const { id } = await params
  const promotion = getPromotion(id)
  if (!promotion) notFound()

  return (
    <div className="space-y-6">
      <Breadcrumbs items={[{ label: 'Marketing', href: '/marketing' }, { label: promotion.name, href: `/marketing/promotions/${promotion.id}` }, { label: 'Edit' }]} />
      <Card className="p-6"><h1 className="text-2xl font-semibold">Edit promotion</h1></Card>
      <Card className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField label="Campaign Name"><TextInput defaultValue={promotion.name} /></FormField>
          <FormField label="Type"><SelectInput defaultValue={promotion.type}><option>Branch Promo</option><option>Customer Promo</option><option>Loyalty Campaign</option></SelectInput></FormField>
          <FormField label="Branches"><TextInput defaultValue={promotion.branches} /></FormField>
          <FormField label="Period"><TextInput defaultValue={promotion.period} /></FormField>
          <FormField label="Status"><SelectInput defaultValue={promotion.status}><option>Draft</option><option>Active</option><option>Expired</option></SelectInput></FormField>
        </div>
        <div className="mt-4"><FormField label="Mechanics"><TextArea defaultValue="Adjust campaign rules, reward points or discount mechanics here." /></FormField></div>
        <div className="mt-6 flex gap-3"><Button type="button">Update Promotion</Button><Button variant="danger" type="button">Disable Promotion</Button><ButtonLink href={`/marketing/promotions/${promotion.id}`} variant="secondary">Cancel</ButtonLink></div>
      </Card>
    </div>
  )
}
