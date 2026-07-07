import Link from "next/link";
import ContactRequestForm from "@/components/contact/ContactRequestForm";
import { getBusinessConfig } from "@/lib/business-config";

const heroDesktopSrc = "/bg/hero-contact-desktop.webp";
const heroMobileSrc = "/bg/hero-contact-mobile.webp";

export default function ContactPage() {
  const businessProfile = getBusinessConfig();

  const contactPoints = [
    {
      label: "WhatsApp",
      value: businessProfile.contact.whatsappDisplay,
      href: `https://wa.me/${businessProfile.contact.whatsappNumber}`,
    },
    {
      label: "Correo",
      value: businessProfile.contact.email,
      href: `mailto:${businessProfile.contact.email}`,
    },
    {
      label: "Cobertura",
      value: "Quito y despliegues en todo Ecuador",
    },
    {
      label: "Horario de atención",
      value: businessProfile.contact.businessHours,
    },
  ];

  const capabilitySignals = [
    "RESPUESTA CLARA",
    "DIAGNÓSTICO INICIAL",
    "ACOMPAÑAMIENTO TÉCNICO",
  ];

  return (
    <div className="flex flex-col">
      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col gap-2 xl:gap-2 items-center xl:items-start justify-center px-4 sm:px-6 lg:px-16 w-full h-dvh overflow-hidden">
        <picture className="absolute inset-0 -z-0 theme-hero-media">
          <source
            media="(max-width: 639px)"
            srcSet={heroMobileSrc}
            type="image/webp"
          />
          <source
            media="(min-width: 640px)"
            srcSet={heroDesktopSrc}
            type="image/webp"
          />
          <img
            src={heroDesktopSrc}
            alt="Hablemos de tu proyecto"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>

        {/* Layer de legibilidad */}
        <div
          aria-hidden
          className="absolute inset-0 -z-0 theme-hero-overlay bg-white/35 sm:bg-gradient-to-r sm:from-white/80 sm:via-white/40 sm:to-transparent"
        />

        {/* Nube brillante celeste */}
        <div className="z-10 absolute top-1/4 left-4 sm:left-16 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 blur-[80px] sm:blur-[100px] opacity-20 pointer-events-none animate-float" />

        <h1 className="theme-heading relative z-10 mt-28 xl:mt-4 text-center xl:text-start max-w-[13.5ch] break-words text-4xl font-extrabold leading-[1.02] tracking-normal xs:text-[2.4rem] sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Hablemos de tu proyecto
        </h1>
        <p className="theme-copy relative px-4 pb-32 xl:pb-0 text-center xl:text-start z-10 xl:mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
          Cuéntanos qué necesitas y coordinamos el siguiente paso con claridad
          técnica y respuesta directa.
        </p>

        <div className="relative z-10 xl:mt-4 mt-80 flex xl:flex-col items-center justify-center xl:items-start sm:grid sm:grid-cols-3 gap-2 w-full sm:w-auto sm:items-stretch">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="theme-pill flex items-center justify-center rounded-full border backdrop-blur-sm px-3 py-1.5 text-center text-[0.48rem] xl:text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== FORMULARIO + INFO ===================== */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-14 scroll-mt-24 md:py-20">
        <div className="relative mx-auto w-full max-w-[1520px]">
          <SectionHeader
            badge="Canal directo"
            title="Enviá tu solicitud y te respondemos con el siguiente paso."
            description="Coordinamos una conversación técnica inicial para entender alcance, prioridades y dependencias."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {/* Info cards */}
            <div className="theme-card rounded-3xl flex flex-col p-6 border shadow">
              <p className="theme-heading text-2xl sm:text-3xl font-medium uppercase tracking-[0.18em] sm:tracking-[0.22em]">
                Datos de contacto
              </p>
              <div className="theme-divider mt-4 divide-y divide-slate-200/70">
                {contactPoints.map((item) => (
                  <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                    <p className="theme-eyebrow text-[0.62rem] font-semibold uppercase tracking-[0.18em]">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="theme-heading mt-1.5 block text-[1rem] font-semibold transition-colors hover:text-blue-500"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="theme-heading mt-1.5 text-[1rem] font-semibold">
                        {item.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="theme-card rounded-3xl flex flex-col items-start p-6 border shadow">
              <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                Confianza operativa
              </span>
              <p className="theme-heading mt-3 max-w-[30rem] text-2xl sm:text-3xl leading-snug">
                Respuesta clara, diagnóstico inicial y acompañamiento técnico
                para ordenar el siguiente paso.
              </p>
              <ul className="theme-copy mt-4 space-y-4 sm:space-y-6 text-sm">
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Respuesta en menos de 24 horas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Diagnóstico técnico sin costo inicial</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                  <span>Acompañamiento desde el primer contacto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ===================== */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-16 md:py-22">
        <div className="relative mx-auto w-full max-w-[1520px]">
          <div className="max-w-[46rem]">
            <div className="relative">
              <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                Siguiente conversación
              </span>
              <h2 className="theme-heading relative z-10 mt-4 max-w-[16ch] break-words text-[2rem] font-extrabold leading-[1.02] tracking-normal sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
                Si necesitás un aliado técnico, conversemos con claridad desde
                el principio.
              </h2>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row w-full sm:w-auto">
              <Link
                href={`https://wa.me/${businessProfile.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-3xl bg-blue-500 text-white flex items-center justify-center px-6 text-sm w-full sm:w-auto"
              >
                <span>Escríbenos por WhatsApp</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
              <Link
                href="/soluciones"
                className="bg-white text-slate-700 border border-slate-300 h-12 rounded-3xl flex items-center justify-center px-6 text-sm w-full sm:w-auto"
              >
                Revisar soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FORMULARIO ===================== */}
      <section className="px-4 sm:px-6 lg:px-16 py-14 md:py-20">
        <div className="relative mx-auto w-full max-w-[1520px]">
          <ContactRequestForm />
        </div>
      </section>
    </div>
  );
}

/* ── SectionHeader local ── */
type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 max-w-[46rem]">
      <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
        {badge}
      </span>
      <h2 className="theme-heading relative z-10 mt-4 max-w-[16ch] break-words text-[2rem] font-extrabold leading-[1.02] tracking-normal sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
        {title}
      </h2>
      {description ? (
        <p className="theme-copy relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
