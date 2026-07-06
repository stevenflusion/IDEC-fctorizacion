import Link from "next/link";
import Image from "next/image";

const heroImage = {
  src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
  alt: "Centro de control industrial con automatización e inteligencia artificial",
};

const impactMetrics = [
  {
    value: "30+",
    label: "PROYECTOS EJECUTADOS",
    detail: "Infraestructura y coordinación.",
  },
  {
    value: "5 km",
    label: "REDES IMPLEMENTADAS",
    detail: "Fibra y conectividad empresarial.",
  },
  {
    value: "200+",
    label: "AUTOMATIZACIONES CON IA",
    detail: "Procesos, datos y asistentes inteligentes.",
  },
  {
    value: "10",
    label: "PLATAFORMAS DESARROLLADAS",
    detail: "Software de control.",
  },
];

const capabilitySignals = [
  "INGENIERÍA APLICADA",
  "AUTOMATIZACIÓN CON IA",
  "TELECOM Y CONECTIVIDAD",
];

const softwareShowcase = [
  {
    name: "IDEC Asiste",
    description:
      "Seguimiento de avances, fotos y pendientes desde una sola vista.",
    metric: "12 FRENTES EN TIEMPO REAL",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    cta: "Ver solución",
  },
  {
    name: "IDEC Conecta",
    description:
      "Redes, IoT y conectividad centralizadas en un panel operativo.",
    metric: "800+ DISPOSITIVOS GESTIONADOS",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    cta: "Conocer plataforma",
  },
  {
    name: "Flujo comercial",
    description: "Ventas, inventario y analítica para decisiones más rápidas.",
    metric: "+18% TICKET PROMEDIO",
    image:
      "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=900&q=80",
    cta: "Ver solución",
  },
];

const playbookSteps = [
  {
    badge: "ETAPA 01",
    title: "Diagnóstico técnico",
    detail:
      "Identificamos riesgos, prioridades y puntos críticos antes de ejecutar.",
  },
  {
    badge: "ETAPA 02",
    title: "Diseño y validación",
    detail: "Definimos alcance, cobertura y arquitectura operativa.",
  },
  {
    badge: "ETAPA 03",
    title: "Implementación gradual",
    detail: "Desplegamos por fases con validación continua en campo.",
  },
  {
    badge: "ETAPA 04",
    title: "Soporte continuo",
    detail: "Monitoreo, ajustes y acompañamiento operativo permanente.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative -mt-[var(--navbar-height)] min-h-[100svh] overflow-hidden bg-[#081120] pt-[var(--navbar-height)] text-white">
        <div className="absolute inset-0">
          <Image
            fill
            priority
            src={heroImage.src}
            alt={heroImage.alt}
            className="object-cover object-center opacity-24"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.22),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(59,130,246,0.12),transparent_18%),linear-gradient(108deg,rgba(8,17,32,0.94)_18%,rgba(8,17,32,0.78)_52%,rgba(8,17,32,0.58)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />
        <div className="absolute left-[-8rem] top-16 h-48 w-48 rounded-full bg-blue-500/14 blur-3xl" />
        <div className="absolute right-[-5rem] top-[42%] h-56 w-56 rounded-full bg-blue-400/8 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100svh-var(--navbar-height))] w-full max-w-[1520px] flex-col px-[clamp(1.25rem,5vw,6rem)] pb-28 pt-6 sm:pb-28 sm:pt-7 lg:pb-28 lg:pt-5">
          <div className="grid flex-1 items-center justify-between gap-7 py-2 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.7fr)] lg:gap-7 lg:py-3 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.7fr)] xl:gap-8">
            <div className="max-w-[42rem] lg:pl-3 xl:pl-6">
              <div className="inline-flex max-w-full flex-wrap items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[0.61rem] font-semibold uppercase leading-4 tracking-[0.14em] text-blue-100/86 backdrop-blur-md sm:px-3.5 sm:tracking-[0.22em]">
                <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.85)]" />
                INGENIERÍA • IA • AUTOMATIZACIÓN
              </div>

              <h1 className="font-display mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal text-white sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
                Ingeniería, automatización e inteligencia artificial para
                operaciones críticas.
              </h1>

              <p className="mt-3 max-w-[32rem] text-[0.94rem] leading-6 text-white/72 sm:text-[1rem]">
                Integramos trabajos de automatización con inteligencia
                artificial, infraestructura, energía y conectividad para operar
                con mayor control.
              </p>

              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  href="/soluciones#soluciones-principales"
                  className="btn-primary min-h-[46px] w-full px-5 text-sm sm:w-auto"
                >
                  Explorar soluciones
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary min-h-[46px] w-full px-5 text-sm sm:w-auto"
                >
                  Hablar con un especialista
                </Link>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {capabilitySignals.map((signal) => (
                  <span
                    key={signal}
                    className="inline-flex max-w-full items-center rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] text-white/60 sm:px-3 sm:tracking-[0.1em]"
                  >
                    {signal}
                  </span>
                ))}
              </div>
            </div>

            <aside className="relative mx-auto hidden w-full max-w-[28rem] overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_22px_56px_rgba(2,6,23,0.32)] backdrop-blur-xl sm:p-5 lg:mx-0 lg:block lg:max-w-[27.5rem]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <p className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-blue-100/66">
                Ejecución IDEC
              </p>
              <div className="mt-4 space-y-3.5">
                <div>
                  <p className="font-display text-[1.7rem] font-extrabold tracking-[-0.04em] text-white sm:text-[1.9rem]">
                    01
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/54">
                    Dirección técnica
                  </p>
                  <p className="mt-1.5 max-w-[18rem] text-[0.84rem] leading-5 text-white/62">
                    Alcance, criterio y ejecución alineados.
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-display text-[1.7rem] font-extrabold tracking-[-0.04em] text-white sm:text-[1.9rem]">
                    02
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/54">
                    Infraestructura conectada
                  </p>
                  <p className="mt-1.5 max-w-[18rem] text-[0.84rem] leading-5 text-white/62">
                    Continuidad, visibilidad y control en una sola capa.
                  </p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <p className="font-display text-[1.7rem] font-extrabold tracking-[-0.04em] text-white sm:text-[1.9rem]">
                    03
                  </p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/54">
                    Automatización con IA
                  </p>
                  <p className="mt-1.5 max-w-[18rem] text-[0.84rem] leading-5 text-white/62">
                    Flujos inteligentes para responder, decidir y operar mejor.
                  </p>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-5 lg:mt-3">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {impactMetrics.map((metric) => (
                <article
                  key={metric.label}
                  className="group relative flex min-h-[8.25rem] flex-col overflow-hidden rounded-[1.15rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-[0_14px_34px_rgba(8,17,32,0.2)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.07] sm:min-h-[8rem] sm:p-5 xl:p-4"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-70" />
                  <span className="font-display text-[1.75rem] font-extrabold tracking-[-0.05em] text-white sm:text-[1.95rem]">
                    {metric.value}
                  </span>
                  <h3 className="mt-1.5 text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.08em] text-blue-100/82 sm:tracking-[0.12em]">
                    {metric.label}
                  </h3>
                  <p className="mt-2 max-w-[17rem] text-[0.75rem] leading-5 text-white/58">
                    {metric.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="plataformas"
        className="relative overflow-hidden bg-[#081120] px-4 py-18 scroll-mt-24 text-white md:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.22),transparent_20%),radial-gradient(circle_at_84%_18%,rgba(59,130,246,0.14),transparent_18%),linear-gradient(180deg,#081120_0%,#0b1628_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:128px_128px] opacity-20" />
        <div className="absolute left-[-6rem] top-12 h-48 w-48 rounded-full bg-blue-500/12 blur-3xl" />
        <div className="absolute right-[-5rem] top-24 h-56 w-56 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="max-w-[44rem]">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-blue-100/88 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.8)]" />
              SOFTWARE • ANALÍTICA • OPERACIÓN
            </div>
            <h2 className="font-display mt-5 max-w-[12ch] text-[clamp(2.2rem,4vw,3.7rem)] font-extrabold leading-[0.96] tracking-[-0.045em] text-white">
              Plataformas para operar con más control.
            </h2>
            <p className="mt-4 max-w-[42rem] text-[0.98rem] leading-7 text-white/70 sm:text-[1.04rem]">
              Herramientas desarrolladas para centralizar datos, automatizar
              procesos y mejorar la toma de decisiones.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {softwareShowcase.map((app) => (
              <article
                key={app.name}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.035))] shadow-[0_24px_64px_rgba(2,6,23,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/22 hover:shadow-[0_30px_80px_rgba(15,23,42,0.34)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent" />
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={app.image}
                    alt={app.name}
                    loading="lazy"
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,32,0.08)_0%,rgba(8,17,32,0.42)_46%,rgba(8,17,32,0.92)_100%)]" />
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#081120]/45 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/12 bg-[#081120]/72 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-blue-100/92 backdrop-blur-md">
                    {app.metric}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-[1.45rem] font-bold tracking-[-0.03em] text-white">
                    {app.name}
                  </h3>
                  <p className="mt-3 max-w-[28rem] text-[0.95rem] leading-7 text-white/68">
                    {app.description}
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/soluciones"
                      className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.02em] text-blue-300 transition-colors duration-300 hover:text-white"
                    >
                      {app.cta}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="home-playbook"
        className="relative overflow-hidden bg-[#eef2f7] px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(59,130,246,0.10),transparent_18%),radial-gradient(circle_at_82%_14%,rgba(37,99,235,0.08),transparent_16%),linear-gradient(180deg,#edf1f7_0%,#f3f6fb_48%,#eef2f7_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.03)_1px,transparent_1px)] bg-[size:120px_120px] opacity-50" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#dbe7fb]/60 to-transparent" />
        <div className="absolute left-[-5rem] top-10 h-44 w-44 rounded-full bg-blue-400/12 blur-3xl" />
        <div className="absolute right-[-4rem] bottom-10 h-52 w-52 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="max-w-[42rem]">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/70 bg-white/40 px-4 py-2 text-[0.63rem] font-semibold uppercase tracking-[0.22em] text-blue-700 shadow-[0_10px_30px_rgba(37,99,235,0.08)] backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(59,130,246,0.45)]" />
              MÉTODO IDEC
            </div>
            <h2 className="font-display mt-5 max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.55rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
              Una metodología clara de principio a fin
            </h2>
            <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]">
              Reducimos incertidumbre con etapas visibles, responsables claros y
              validación continua.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {playbookSteps.map((step) => (
              <article
                key={step.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/60 bg-white/45 p-6 shadow-[0_20px_48px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200/80 hover:bg-white/55 hover:shadow-[0_24px_56px_rgba(37,99,235,0.12)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
                <div className="absolute right-0 top-0 h-16 w-16 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_65%)]" />
                <div className="flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {step.badge}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-500/80 shadow-[0_0_14px_rgba(59,130,246,0.35)]" />
                </div>
                <div className="mt-6 h-px w-14 bg-gradient-to-r from-blue-500/80 to-transparent" />
                <h3 className="font-display mt-5 text-[1.28rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#0b1628]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-[18rem] text-[0.93rem] leading-7 text-slate-600">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
