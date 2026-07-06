const plataformas = [
  "Cisco Meraki",
  "Ubiquiti UXG",
  "Siemens Desigo",
  "Crestron",
  "Matter / Thread",
  "AWS IoT Core",
  "Grafana",
  "Node-RED",
]

const differentiators = [
  {
    title: "Validación en escenarios reales",
    description: "Probamos soluciones antes de desplegar para reducir riesgo y afinar decisiones con evidencia.",
  },
  {
    title: "Indicadores compartidos",
    description: "Alineamos objetivos de disponibilidad, confort, eficiencia y continuidad desde el inicio.",
  },
  {
    title: "Equipo interno coordinado",
    description: "Obra, telecomunicaciones, software y operación de campo bajo una misma dirección técnica.",
  },
  {
    title: "Escalabilidad con criterio",
    description: "Diseñamos soluciones preparadas para crecer sin rehacer la base instalada.",
  },
]

const collaborationModel = [
  {
    badge: "ALINEACIÓN",
    title: "Definimos prioridades con el equipo correcto",
    detail: "Traducimos objetivos operativos en decisiones técnicas, dependencias y secuencia de trabajo.",
  },
  {
    badge: "INTEGRACIÓN",
    title: "Conectamos plataformas y especialidades",
    detail: "Aseguramos que infraestructura, conectividad y automatización funcionen como un solo sistema.",
  },
  {
    badge: "CONTINUIDAD",
    title: "Acompañamos la operación después del despliegue",
    detail: "Damos soporte, ajustes y lectura operativa para sostener el resultado con claridad.",
  },
]

export default function ClientsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative -mt-[var(--navbar-height)] min-h-[82vh] overflow-hidden bg-[#081120] pt-[var(--navbar-height)] text-white lg:min-h-[88vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.22),transparent_24%),linear-gradient(110deg,rgba(8,17,32,0.95)_18%,rgba(8,17,32,0.82)_52%,rgba(8,17,32,0.66)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:140px_140px] opacity-20" />
        <div className="absolute left-[-6rem] top-12 h-48 w-48 rounded-full bg-blue-500/14 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(82vh-var(--navbar-height))] w-full max-w-[1520px] items-center px-[clamp(32px,5vw,96px)] py-12 lg:min-h-[calc(88vh-var(--navbar-height))]">
          <div className="max-w-[46rem]">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-blue-100/86 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.85)]" />
              PROYECTOS Y ALIANZAS
            </div>
            <h1 className="font-display mt-5 max-w-[13ch] text-[clamp(2.7rem,4.6vw,4.2rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-white">
              Tecnología, aliados y criterio para escalar mejor.
            </h1>
            <p className="mt-4 max-w-[36rem] text-[0.98rem] leading-7 text-white/72 sm:text-[1.04rem]">
              Trabajamos con plataformas reconocidas y herramientas propias para que cada despliegue tenga soporte, continuidad y espacio real para crecer.
            </p>
          </div>
        </div>
      </section>

      <section id="clientes-ecosistema" className="relative overflow-hidden bg-[#eef2f7] px-4 py-14 scroll-mt-24 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_16%,rgba(59,130,246,0.10),transparent_18%),linear-gradient(180deg,#edf1f7_0%,#f3f6fb_100%)]" />
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Ecosistema tecnológico"
            title="Plataformas confiables más capas propias."
            description="Seleccionamos tecnologías probadas y las articulamos con nuestros flujos para asegurar control, soporte y escalabilidad."
            tone="light"
          />
          <div className="rounded-[1.9rem] border border-white/60 bg-white/55 p-8 shadow-[0_22px_56px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {plataformas.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-center text-sm font-semibold text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clientes-diferenciales" className="relative overflow-hidden bg-[#081120] px-4 py-16 scroll-mt-24 text-white md:py-22">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(59,130,246,0.16),transparent_22%),linear-gradient(180deg,#081120_0%,#0b1628_100%)]" />
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Diferenciales"
            title="Un modelo de trabajo pensado para continuidad y confianza."
            description="No solo desplegamos tecnología: la integramos con lectura operativa, coordinación técnica y acompañamiento real."
            tone="dark"
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => (
              <article key={item.title} className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/22">
                <div className="h-px w-12 bg-gradient-to-r from-blue-400/80 to-transparent" />
                <h3 className="font-display mt-5 text-[1.22rem] font-bold tracking-[-0.03em] text-white">{item.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-white/68">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clientes-modelo" className="relative overflow-hidden bg-[#f3f6fb] px-4 py-14 scroll-mt-24 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(59,130,246,0.10),transparent_18%),linear-gradient(180deg,#eef2f7_0%,#f3f6fb_100%)]" />
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Modelo de colaboración"
            title="Así trabajamos cuando un proyecto necesita escalar con orden."
            description="Alineamos objetivos, conectamos especialidades y acompañamos la operación para que el valor no se pierda al cerrar la instalación."
            tone="light"
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {collaborationModel.map((item) => (
              <article key={item.title} className="rounded-[1.65rem] border border-white/60 bg-white/52 p-7 shadow-[0_18px_44px_rgba(15,23,42,0.07)] backdrop-blur-xl">
                <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {item.badge}
                </span>
                <h3 className="font-display mt-5 text-[1.28rem] font-bold tracking-[-0.03em] text-[#081120]">{item.title}</h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.9rem] border border-white/70 bg-white/58 p-8 shadow-[0_24px_56px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10">
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-blue-700">Siguiente conversación</p>
            <h2 className="font-display mt-4 max-w-[15ch] text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
              Si necesitas un aliado técnico, conversemos con claridad desde el principio.
            </h2>
            <p className="mt-4 max-w-[38rem] text-[0.98rem] leading-7 text-slate-600">
              Te ayudamos a leer alcance, prioridades y dependencias antes de comprometer inversión y tiempo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

type SectionHeaderProps = {
  badge: string
  title: string
  description: string
  tone: "dark" | "light"
}

function SectionHeader({ badge, title, description, tone }: SectionHeaderProps) {
  const isDark = tone === "dark"

  return (
    <div className="mb-10 max-w-[46rem]">
      <div
        className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.64rem] font-semibold uppercase tracking-[0.24em] backdrop-blur-md ${
          isDark
            ? "border-white/10 bg-white/[0.04] text-blue-100/86"
            : "border-blue-200/70 bg-white/40 text-blue-700"
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${isDark ? "bg-blue-400" : "bg-blue-500"} shadow-[0_0_14px_rgba(59,130,246,0.45)]`} />
        {badge}
      </div>
      <h2 className={`font-display mt-5 max-w-[14ch] text-[clamp(2.05rem,3.8vw,3.45rem)] font-extrabold leading-[0.98] tracking-[-0.04em] ${isDark ? "text-white" : "text-[#081120]"}`}>
        {title}
      </h2>
      <p className={`mt-4 max-w-[40rem] text-[0.98rem] leading-7 ${isDark ? "text-white/70" : "text-slate-600"}`}>
        {description}
      </p>
    </div>
  )
}
