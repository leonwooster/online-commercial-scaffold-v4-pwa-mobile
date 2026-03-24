import Link from 'next/link'
import * as React from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100',
  danger: 'bg-red-600 text-white hover:bg-red-500',
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn('inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition', variants[variant], className)}
      {...props}
    />
  )
}

export function ButtonLink({ className, variant = 'primary', href, children }: { href: string; className?: string; variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; children: React.ReactNode }) {
  return (
    <Link href={href} className={cn('inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition', variants[variant], className)}>
      {children}
    </Link>
  )
}
