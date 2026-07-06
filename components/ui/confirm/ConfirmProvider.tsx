"use client"

import { createContext, useContext, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'

type Options = {
  title?: string
  description?: string
  confirmText?: string
  cancelText?: string
  tone?: 'danger' | 'primary'
}

type ConfirmContextValue = (options?: Options) => Promise<boolean>

const ConfirmContext = createContext<ConfirmContextValue | null>(null)

export function useConfirm() {
  const ctx = useContext(ConfirmContext)
  if (!ctx) throw new Error('useConfirm must be used within ConfirmProvider')
  return ctx
}

export default function ConfirmProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{
    open: boolean
    options: Options
    resolve?: (v: boolean) => void
  }>({ open: false, options: {} })

  const confirm: ConfirmContextValue = useMemo(() => {
    return (options?: Options) => {
      return new Promise<boolean>((resolve) => {
        setState({ open: true, options: options ?? {}, resolve })
      })
    }
  }, [])

  const handleClose = (result: boolean) => {
    if (state.resolve) state.resolve(result)
    setState({ open: false, options: {} })
  }

  const { title = 'Confirmar acción', description, confirmText = 'Confirmar', cancelText = 'Cancelar', tone = 'primary' } = state.options

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      {state.open && createPortal(
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-xl">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            {description ? <p className="mt-2 text-sm text-gray-600">{description}</p> : null}
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => handleClose(false)}
              >{cancelText}</button>
              <button
                type="button"
                className={
                  tone === 'danger'
                    ? 'rounded-md px-4 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700'
                    : 'rounded-md px-4 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary/90'
                }
                onClick={() => handleClose(true)}
              >{confirmText}</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </ConfirmContext.Provider>
  )
}
