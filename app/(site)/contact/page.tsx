import Link from "next/link";
import ContactRequestForm from "@/components/contact/ContactRequestForm";
import { getBusinessConfig } from "@/lib/business-config";
import heroBg from "@/src/bg/herobackground_contact.png";

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
      {/* ── Hero oscuro ── */}
      <section
        className="relative flex flex-col gap-2 items-start justify-center px-16 w-full h-dvh bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        {/* Nube brillante celeste */}
        <div className="z-10 absolute top-1/4 left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 blur-[100px] opacity-20 pointer-events-none animate-float" />

        <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Hablemos de tu proyecto
        </h1>
        <p className="relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
          Cuéntanos qué necesitas y coordinamos el siguiente paso con claridad
          técnica y respuesta directa.
        </p>

        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex text-black/70 max-w-full items-center rounded-full bg-gray-300 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      {/* ── Formulario + info ── */}
      <section className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20">
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Canal directo"
            title="Enviá tu solicitud y te respondemos con el siguiente paso."
            description="Coordinamos una conversación técnica inicial para entender alcance, prioridades y dependencias."
            tone="light"
          />

          <div className="mt-2 grid gap-7 xl:grid-cols-[minmax(0,0.72fr)_minmax(420px,0.98fr)] xl:items-start">
            {/* Info cards */}
            <div className="rounded-3xl flex items-center justify-between p-6 border shadow">
              <div className="">
                <p className="text-3xl font-medium uppercase tracking-[0.22em]">
                  Datos de contacto
                </p>
                <div className="mt-4 divide-y divide-slate-200/70">
                  {contactPoints.map((item) => (
                    <div key={item.label} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {item.label}
                      </p>
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="mt-1.5 block text-[1rem] font-semibold text-[#081120] transition-colors hover:text-blue-600"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="mt-1.5 text-[1rem] font-semibold text-[#081120]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="">
                <span className="inline-flex text-gray-500 max-w-full items-center rounded-full bg-gray-200 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                  Confianza operativa
                </span>
                <p className="mt-3 max-w-[30rem] text-3xl text-gray-900">
                  Respuesta clara, diagnóstico inicial y acompañamiento técnico
                  para ordenar el siguiente paso.
                </p>
                <ul className="mt-4 space-y-6 text-sm text-slate-600">
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                    <span>Respuesta en menos de 24 horas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                    <span>Diagnóstico técnico sin costo inicial</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                    <span>Acompañamiento desde el primer contacto</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden px-4 py-16  md:py-22">
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="max-w-[46rem]">
            <div className="relative">
              <span className="inline-flex text-gray-500 max-w-full items-center rounded-full bg-gray-200 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                Siguiente conversación
              </span>
              <h2 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
                Si necesitás un aliado técnico, conversemos con claridad desde
                el principio.
              </h2>
              <p className="relative text-gray-500 z-10 mt-3 max-w-[32rem] leading-6 ">
                Te ayudamos a leer alcance, prioridades y dependencias antes de
                comprometer inversión y tiempo.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`https://wa.me/${businessProfile.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-3xl shadow bg-blue-500 flex items-center  px-6 text-sm"
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
                className="h-12 rounded-3xl border shadow flex items-center  px-6 text-sm"
              >
                Revisar soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-16">
        <ContactRequestForm />
      </section>
    </div>
  );
}

/* ── SectionHeader local (mismo patrón que clients/page.tsx) ── */
type SectionHeaderProps = {
  badge: string;
  title: string;
  description: string;
  tone: "dark" | "light";
};

function SectionHeader({
  badge,
  title,
  description,
  tone,
}: SectionHeaderProps) {
  const isDark = tone === "dark";

  return (
    <div className="mb-10 max-w-[46rem]">
      <span className="inline-flex text-gray-500 max-w-full items-center rounded-full bg-gray-200 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
        {badge}
      </span>
      <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
        {title}
      </h1>
      <p className="relative text-gray-500 z-10 mt-3 max-w-[32rem] leading-6 ">
        {description}
      </p>
    </div>
  );
}
