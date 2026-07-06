import Image from "next/image";
import Link from "next/link";
import {
  IconBuilding,
  IconEye,
  IconStar,
  IconTarget,
} from "@/components/icons";
import heroBg from "@/src/bg/herobackground_sobre_nosotros.png";

const heroFacts = [
  {
    label: "Coordinación interna",
    detail: "Especialidades alineadas bajo una sola lectura técnica.",
  },
  {
    label: "Capacidad de ejecución",
    detail: "Obra, energía, conectividad y software dentro del mismo sistema.",
  },
  {
    label: "Visión operativa",
    detail:
      "Decisiones técnicas pensadas para sostener continuidad y crecimiento.",
  },
];

const pillars = [
  {
    title: "Quiénes somos",
    description:
      "Somos una empresa ecuatoriana que integra ingeniería, mantenimiento y tecnología para ejecutar proyectos con orden, calidad y visión de largo plazo.",
    points: [
      "Ingeniería y ejecución coordinadas",
      "Criterio técnico para operación crítica",
      "Capacidad para integrar disciplinas",
    ],
    icon: IconStar,
  },
  {
    title: "Misión",
    description:
      "Resolver retos técnicos con soluciones integrales que mejoren la operación de nuestros clientes y les permitan crecer con confianza.",
    points: [
      "Soluciones integrales",
      "Mejora continua",
      "Acompañamiento cercano",
    ],
    icon: IconTarget,
  },
  {
    title: "Visión",
    description:
      "Consolidarnos como un aliado referente en proyectos de ingeniería y tecnología aplicada por calidad, criterio y capacidad de respuesta.",
    points: [
      "Liderazgo con base técnica",
      "Calidad con enfoque operativo",
      "Servicios que evolucionan con el cliente",
    ],
    icon: IconEye,
  },
];

const storyBlocks = [
  {
    title: "Nuestra raíz técnica",
    detail:
      "IDEC nació resolviendo retos de obra, energía y mantenimiento en campo. Esa base nos dio criterio para coordinar proyectos más complejos sin perder control operativo.",
  },
  {
    title: "Cómo pensamos",
    detail:
      "Creemos en una ingeniería que no solo construye, sino que reduce fricción, ordena decisiones y deja capacidades instaladas para el futuro.",
  },
  {
    title: "Cómo trabajamos",
    detail:
      "Unimos cuadrillas, seguimiento, automatización y comunicación clara para entregar proyectos con visibilidad y trazabilidad desde el inicio.",
  },
];

const journey = [
  {
    year: "2022",
    title: "Base civil y mantenimiento",
    detail:
      "Arrancamos ejecutando obra, impermeabilización y refuerzo con control técnico.",
  },
  {
    year: "2022",
    title: "Capacidad eléctrica",
    detail:
      "Sumamos sistemas de potencia, tableros y protección para industria y salud.",
  },
  {
    year: "2023",
    title: "Especialidad mecánica",
    detail: "Integramos estructuras, fabricación metálica y soporte a equipos.",
  },
  {
    year: "2023",
    title: "Infraestructura conectada",
    detail:
      "Desplegamos fibra, enlaces inalámbricos y monitoreo para ganar visibilidad.",
  },
  {
    year: "2024",
    title: "Software aplicado",
    detail:
      "Desarrollamos herramientas para seguimiento de obra y control operativo.",
  },
  {
    year: "2025",
    title: "Ecosistema IDEC",
    detail:
      "Conectamos energía, conectividad y automatización dentro de una sola visión.",
  },
];

const labHighlights = [
  "Sala de pruebas para validar materiales, automatización y conectividad antes del despliegue.",
  "Escenarios reales para revisar interoperabilidad, sensores y control en campo.",
  "Espacios de co-diseño donde aterrizamos decisiones con clientes y aliados.",
];

const testimonials = [
  {
    quote:
      "IDEC convirtió nuestro proyecto en una operación más clara: hoy entendemos infraestructura, energía y datos como un solo sistema.",
    author: "Ángel Albuja · Jefe de Proyectos",
  },
  {
    quote:
      "Su mayor valor no fue solo ejecutar, sino ordenar decisiones técnicas y acompañar cada fase con criterio.",
    author: "Efraín Rojas · Director",
  },
];

const capabilitySignals = [
  "CORDINACIÓN INTERNA",
  "CAPACIDAD EN EJECUCIÓN",
  "VISIÓN OPERATIVA",
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex flex-col gap-4 items-start justify-center px-16 w-full h-dvh bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        {/* Nube brillante celeste */}
        <div className="z-10 absolute top-1/4 left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 blur-[100px] opacity-20 pointer-events-none animate-float" />

        <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Obras reales con criterio técnico y ejecución en campo.
        </h1>
        <p className="relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
          Seleccionamos proyectos recientes que muestran cómo IDEC coordina
          ingeniería civil, eléctrica y soporte técnico para resolver
          necesidades concretas con seguridad, orden y continuidad operativa.
        </p>
        <div className="relative z-10 mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/soluciones#soluciones-principales"
            className="bg-white flex items-center gap-2 rounded-3xl py-3 w-full px-5 text-sm  sm:w-auto"
          >
            Conocer IDEC
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
          <Link
            href="/contact"
            className="border border-gray-400 shadow rounded-3xl py-2 w-full px-4 text-sm sm:w-auto"
          >
            Ver soluciones
          </Link>
        </div>
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex text-gray-600 max-w-full items-center rounded-full bg-gray-300/50 border shadow px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section
        id="sobre-historia"
        className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Historia y criterio"
            title="Una empresa que combina oficio técnico y lectura operativa."
            description="Nuestro crecimiento se construyó conectando especialidades, entendiendo el campo y tomando decisiones con una visión más amplia que la del contratista tradicional."
            tone="light"
          />
          <div className="">
            <article className="grid gap-8 md:grid-cols-3">
              {storyBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-3xl shadow border p-6"
                >
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] text-gray-900">
                    {block.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {block.detail}
                  </p>
                </div>
              ))}
            </article>
            <aside className="mt-8 rounded-3xl shadow border p-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081120] text-white shadow-[0_14px_34px_rgba(8,17,32,0.16)]">
                <IconBuilding size={26} />
              </div>
              <h3 className="font-display mt-6 text-[1.35rem] font-bold tracking-[-0.03em] text-[#081120]">
                Lo que nos diferencia
              </h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                  <p>
                    Coordinamos varias disciplinas sin perder una sola
                    conversación técnica.
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                  <p>
                    Leemos el proyecto desde la operación, no solo desde la
                    instalación.
                  </p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                  <p>
                    Acompañamos la continuidad del resultado más allá de la
                    entrega.
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="sobre-pilares"
        className="relative overflow-hidden px-4 py-16 scroll-mt-24 md:py-22"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Pilares IDEC"
            title="Una identidad construida sobre misión, visión y ejecución."
            description="Nuestra forma de pensar se traduce en decisiones, prioridades y relaciones de largo plazo con cada cliente."
            tone="light"
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="relative overflow-hidden rounded-3xl border shadow"
              >
                <div className="relative flex h-full flex-col gap-4 p-7">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/14 text-white">
                    <pillar.icon size={26} />
                  </div>
                  <h3 className="relative z-10 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3rem]">
                    {pillar.title}
                  </h3>
                  <p
                    className="max-w-[39rem]
                   leading-7 text-gray-600"
                  >
                    {pillar.description}
                  </p>
                  <ul className="mt-2 space-y-2.5 text-sm text-white/92">
                    {pillar.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-700" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sobre-trayectoria"
        className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="grid gap-8">
            <div>
              <SectionHeader
                badge="Trayectoria"
                title="Evolucionamos sumando capacidad sin perder criterio."
                description="Cada etapa nos permitió integrar una nueva capa de especialidad para responder con más profundidad técnica."
                tone="light"
              />
              <div className="space-y-5 border-l border-blue-100 pl-6">
                {journey.map((item) => (
                  <article
                    key={`${item.year}-${item.title}`}
                    className="relative pl-4"
                  >
                    <span className="absolute -left-[29px] h-4 w-4 rounded-full border-4 border-[#f3f6fb] bg-blue-500 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]" />
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-blue-700">
                      {item.year}
                    </p>
                    <h3 className="font-display mt-2 text-[1.15rem] font-bold tracking-[-0.03em] text-[#081120]">
                      {item.title}
                    </h3>
                    <p className="text-[0.93rem] leading-7 text-gray-500">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside
              id="sobre-laboratorio"
              className="rounded-[1.85rem] border shadow p-8 mt-8"
            >
              <span className="inline-flex text-gray-600 max-w-full items-center rounded-full bg-gray-300/50 border shadow px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                {" "}
                Laboratorio IDEC{" "}
              </span>
              <h3 className="font-display mt-4 text-[1.5rem] font-bold tracking-[-0.03em] text-[#081120]">
                Validamos antes de desplegar.
              </h3>
              <p className="mt-3 text-[0.95rem] leading-7 text-slate-600">
                Probamos materiales, conectividad y automatización en escenarios
                reales para reducir riesgo, ajustar decisiones y ganar certeza
                antes de ejecutar.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {labHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-700 shadow-[0_0_12px_rgba(59,130,246,0.3)]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="sobre-testimonios"
        className="relative overflow-hidden px-4 py-16 scroll-mt-24 md:py-22"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Experiencia IDEC"
            title="Relaciones que se sostienen por claridad y resultados."
            description=""
            tone="light"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {testimonials.map((item) => (
              <article
                key={item.author}
                className="rounded-3xl border p-7 shadow"
              >
                <p className="leading-8 text-gray-700">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <p className="mt-6 text-xs font-medium text-blue-100/74">
                  {item.author}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border p-7 shadow">
            <span className="inline-flex text-gray-600 max-w-full items-center rounded-full bg-gray-300/50 border shadow px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
              Siguiente conversación
            </span>
            <h2 className="font-display mt-4 max-w-[16ch] text-[clamp(2rem,3.6vw,3.1rem)] font-extrabold leading-[0.98] tracking-[-0.04em]">
              Conversemos sobre el proyecto que necesitas coordinar mejor.
            </h2>
            <p className="mt-4 max-w-[38rem] leading-7 text-gray-600">
              Si tienes planos, alcances, ideas o frentes abiertos, te ayudamos
              a ordenarlos con una lectura técnica clara y accionable.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="bg-[#2560e2] rounded-3xl text-white flex items-center h-12 px-6 text-sm"
              >
                <span>Hablar con IDEC</span>
              </Link>
              <Link
                href="/soluciones"
                className="h-12 rounded-3xl flex items-center border px-6 text-sm"
              >
                <span>Revisar soluciones</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
  return (
    <div className="mb-10 max-w-[46rem]">
      <span
        key={badge}
        className="inline-flex text-gray-600 max-w-full items-center rounded-full bg-gray-300/50 border shadow px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]"
      >
        {badge}
      </span>
      <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
        {title}
      </h1>
      <p className="relative text-gray-500 z-10 mt-5 max-w-[32rem] leading-6">
        {description}
      </p>
    </div>
  );
}
