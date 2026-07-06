'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { getBusinessConfig } from '@/lib/business-config'

type Props = {
  title: string
  description?: string
  imageUrl?: string
  className?: string
  id?: string
  slots?: string[]
  showTimeline?: boolean
  formTitle?: string
}

const timeline = [
  { title: 'Diagnóstico', detail: 'Leemos alcance, riesgos y prioridades antes de proponer.' },
  { title: 'Arquitectura', detail: 'Alineamos especialidades, cobertura y dependencias.' },
  { title: 'Despliegue', detail: 'Definimos fases, responsables y validación en campo.' },
  { title: 'Continuidad', detail: 'Sostenemos ajustes y acompañamiento operativo.' },
]

const interestOptions = [
  'Ingeniería civil',
  'Ingeniería mecánica',
  'Ingeniería eléctrica',
  'Automatización e IoT',
  'Telecomunicaciones',
  'Software aplicado',
  'Necesito orientación',
]

const whatsappNumber = getBusinessConfig().contact.whatsappNumber

export default function CampaignBanner({
  title,
  description,
  imageUrl,
  className = '',
  id,
  slots = [],
  showTimeline = false,
  formTitle,
}: Props) {
  const [fullName, setFullName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [interests, setInterests] = useState<string[]>([])
  const [message, setMessage] = useState('')
  const [slot, setSlot] = useState('')

  const toggleInterest = (value: string) => {
    setInterests((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const payload = useMemo(() => {
    const lines = [
      `Hola, soy ${fullName || 'un cliente'}.`,
      company ? `Empresa o proyecto: ${company}.` : null,
      email ? `Correo: ${email}.` : null,
      phone ? `Teléfono: ${phone}.` : null,
      interests.length ? `Intereses: ${interests.join(', ')}.` : null,
      slot ? `Disponibilidad: ${slot}.` : null,
      message ? `Notas: ${message}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const text = `${title}\n${lines}`
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
  }, [company, email, fullName, interests, message, phone, slot, title])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    window.open(payload, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id={id} className={`relative px-4 ${className}`}>
      <div className="mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#081120] shadow-[0_28px_72px_rgba(2,6,23,0.28)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.16),transparent_22%),linear-gradient(180deg,#081120_0%,#0b1628_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />
          {imageUrl && (
            <div className="absolute inset-y-0 left-0 hidden w-[48%] lg:block">
              <Image fill loading="lazy" src={imageUrl} alt={title} className="object-cover opacity-18" sizes="50vw" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,32,0.88)_10%,rgba(8,17,32,0.62)_60%,rgba(8,17,32,0.12)_100%)]" />
            </div>
          )}

          <div className="relative grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.9fr)] lg:px-10 xl:px-12">
            <div className="max-w-[36rem] text-white">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-blue-100/86 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.72)]" />
                Asesoría IDEC
              </div>
              <h3 className="font-display mt-5 max-w-[12ch] text-[clamp(2rem,3.8vw,3.25rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-white">
                {title}
              </h3>
              {description && <p className="mt-4 max-w-[34rem] text-[0.98rem] leading-7 text-white/70">{description}</p>}
              {showTimeline && (
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {timeline.map((step) => (
                    <div key={step.title} className="rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                      <p className="text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-blue-100/74">{step.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/66">{step.detail}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_20px_56px_rgba(2,6,23,0.24)] backdrop-blur-xl sm:p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
              <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-blue-100/74">
                {formTitle ?? 'Agenda una asesoría'}
              </p>
              <form className="mt-5 space-y-3 text-white" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Nombre y apellido"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  className="h-11 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm placeholder:text-white/42 focus:border-blue-400/40 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Empresa o proyecto"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="h-11 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm placeholder:text-white/42 focus:border-blue-400/40 focus:outline-none"
                />
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-11 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm placeholder:text-white/42 focus:border-blue-400/40 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    className="h-11 w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 text-sm placeholder:text-white/42 focus:border-blue-400/40 focus:outline-none"
                  />
                </div>
                <div>
                  <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-blue-100/72">Interés principal</p>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {interestOptions.map((option) => (
                      <label key={option} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/72 transition-colors hover:border-blue-400/35">
                        <input type="checkbox" className="accent-primary" checked={interests.includes(option)} onChange={() => toggleInterest(option)} />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <textarea
                  placeholder="Cuéntanos brevemente qué necesitas resolver."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm placeholder:text-white/42 focus:border-blue-400/40 focus:outline-none"
                  rows={4}
                />
                {slots.length > 0 && (
                  <div>
                    <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-blue-100/72">Disponibilidad</p>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {slots.map((slotOption) => (
                        <label key={slotOption} className="flex cursor-pointer items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-sm text-white/72 transition-colors hover:border-blue-400/35">
                          <input type="radio" name="slot" value={slotOption} className="accent-primary" checked={slot === slotOption} onChange={(event) => setSlot(event.target.value)} />
                          {slotOption}
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                <button type="submit" className="btn-primary min-h-[48px] w-full justify-center text-sm">
                  Enviar por WhatsApp
                </button>
              </form>
              <p className="mt-4 text-xs leading-6 text-white/52">
                Te responderemos para confirmar la conversación y preparar una propuesta alineada con tu contexto técnico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
