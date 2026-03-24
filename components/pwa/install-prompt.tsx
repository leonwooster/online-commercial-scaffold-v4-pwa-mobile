'use client'

import { useEffect, useState } from 'react'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [installed, setInstalled] = useState(false)

  useEffect(() => {
    const onBeforeInstallPrompt = (event: Event) => {
      event.preventDefault()
      setDeferredPrompt(event as BeforeInstallPromptEvent)
    }

    const onInstalled = () => {
      setInstalled(true)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onInstalled)
    }
  }, [])

  if (installed) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
        App installed successfully.
      </div>
    )
  }

  return (
    <div className="rounded-3xl border border-border bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Install mock app on mobile</p>
          <p className="text-sm text-slate-600">
            Android browsers can show an install button. On iPhone or iPad, use Share → Add to Home Screen.
          </p>
        </div>
        {deferredPrompt ? (
          <button
            type="button"
            onClick={async () => {
              await deferredPrompt.prompt()
              await deferredPrompt.userChoice
              setDeferredPrompt(null)
            }}
            className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white"
          >
            Install app
          </button>
        ) : (
          <div className="rounded-2xl bg-slate-100 px-4 py-2.5 text-sm text-slate-600">Use browser install option</div>
        )}
      </div>
    </div>
  )
}
