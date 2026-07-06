"use client"

import { useEffect, useRef, useState } from "react"

type SortValue = 'relevance' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'

const LABELS: Record<SortValue, string> = {
  relevance: 'Popularidad',
  'price-asc': 'Precio: menor a mayor',
  'price-desc': 'Precio: mayor a menor',
  'name-asc': 'Nombre: A - Z',
  'name-desc': 'Nombre: Z - A',
}

export default function SortDropdown({ value, onChange }: { value: SortValue; onChange: (v: SortValue) => void }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full inline-flex items-center justify-between gap-2 px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-background-dark text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>Ordenar por: {LABELS[value]}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-background-dark shadow-md overflow-hidden"
        >
          {(Object.keys(LABELS) as SortValue[]).map(opt => (
            <li key={opt} role="option" aria-selected={opt === value}>
              <button
                type="button"
                onClick={() => { onChange(opt); setOpen(false) }}
                className={`w-full text-left px-3 py-2 text-sm ${opt === value ? 'bg-amber-50 dark:bg-gray-800 font-semibold' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
              >
                {LABELS[opt]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

