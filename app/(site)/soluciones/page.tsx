import Image from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconBuilding,
  IconElectric,
  IconHomeIoT,
  IconMechanical,
  IconRouter,
} from "@/components/icons";
import heroBg from "@/src/bg/herobackground_finanzas.png";

const coreSolutions = [
  {
    title: "Ingeniería civil",
    description:
      "Obras, remodelaciones y refuerzos pensados para espacios que deben operar sin fricción.",
    points: [
      "Impermeabilización y protección",
      "Acondicionamiento de espacios críticos",
      "Coordinación civil para despliegues técnicos",
    ],
    icon: IconBuilding,
    accent: "from-slate-900 via-slate-800 to-slate-700",
  },
  {
    title: "Ingeniería eléctrica",
    description:
      "Sistemas de potencia, control y protección para infraestructura que no puede detenerse.",
    points: [
      "Tableros de fuerza y control",
      "Puesta a tierra y protección atmosférica",
      "Eficiencia y continuidad energética",
    ],
    icon: IconElectric,
    accent: "from-blue-700 via-blue-600 to-cyan-500",
  },
  {
    title: "Ingeniería mecánica",
    description:
      "Fabricación, montaje y mantenimiento de estructuras y sistemas para operación industrial.",
    points: [
      "Estructuras metálicas y steelframing",
      "Montaje y soporte a equipos",
      "Tratamientos y protección anticorrosiva",
    ],
    icon: IconMechanical,
    accent: "from-emerald-700 via-emerald-600 to-teal-500",
  },
];

const complementaryLayers = [
  {
    title: "Telecomunicaciones",
    metric: "REDES LISTAS PARA ESCALAR",
    description:
      "Fibra, enlaces y cobertura administrada para continuidad operativa en sitio.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    icon: IconRouter,
  },
  {
    title: "Software aplicado",
    metric: "DATOS EN UNA SOLA CAPA",
    description:
      "Plataformas e integraciones que ordenan decisiones, procesos y reportería.",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?auto=format&fit=crop&w=1200&q=80",
    icon: IconArrowRight,
  },
  {
    title: "Automatización e IoT",
    metric: "CONTROL CON VISIÓN OPERATIVA",
    description:
      "Sensores, eficiencia y automatización conectados con la infraestructura real.",
    image:
      "https://images.unsplash.com/photo-1707733260992-73ff6dbed163?auto=format&fit=crop&w=1200&q=80",
    icon: IconHomeIoT,
  },
  {
    title: "Workflows con IA",
    metric: "DATOS EN UNA SOLA CAPA",
    description:
      "Plataformas e integraciones que ordenan decisiones, procesos y reportería.",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?auto=format&fit=crop&w=1200&q=80",
    icon: IconArrowRight,
  },
];

const deliveryModel = [
  {
    badge: "FASE 01",
    title: "Diagnóstico y alcance",
    detail:
      "Levantamos información, riesgos y dependencias para decidir con claridad antes de ejecutar.",
  },
  {
    badge: "FASE 02",
    title: "Diseño coordinado",
    detail:
      "Alineamos especialidades, cobertura, cronograma y prioridades bajo una misma arquitectura operativa.",
  },
  {
    badge: "FASE 03",
    title: "Ejecución por hitos",
    detail:
      "Desplegamos por fases con validación técnica, trazabilidad y control compartido.",
  },
  {
    badge: "FASE 04",
    title: "Soporte y continuidad",
    detail:
      "Monitoreamos, corregimos y acompañamos la operación para sostener el resultado en el tiempo.",
  },
];

const caseStudies = [
  {
    name: "Centro logístico Lumen",
    scope: "Infraestructura eléctrica y red operativa",
    impact:
      "Continuidad técnica y visibilidad centralizada para expansión por etapas.",
  },
  {
    name: "Parque corporativo Aurora",
    scope: "Obra civil, conectividad y control",
    impact:
      "Unificación de especialidades bajo una sola lectura de operación y mantenimiento.",
  },
  {
    name: "Complejo industrial Andina",
    scope: "Mecánica, automatización y telecom",
    impact:
      "Despliegue coordinado con validación en campo y menor fricción entre contratistas.",
  },
];

const capabilitySignals = [
  "ARQUITECTURA OPERATIVA",
  "EJECUCIÓN POR CAPAS",
  "CONECTIVIDAD E IA",
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex flex-col gap-4 items-start justify-center px-16 w-full h-dvh bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        {/* Nube brillante celeste */}
        <div className="z-10 absolute top-1/4 left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 blur-[100px] opacity-20 pointer-events-none animate-float" />

        <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Infraestructura y tecnología para operar con precisión.
        </h1>
        <p className="relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
          Integramos ingeniería, automatización y conectividad para proyectos
          que requieren continuidad operativa real.
        </p>
        <div className="relative z-10 mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center">
          <Link
            href="/soluciones#soluciones-principales"
            className="bg-white flex items-center gap-2 rounded-3xl py-3 w-full px-5 text-sm  sm:w-auto"
          >
            Explorar soluciones
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
            Hablar con un asesor
          </Link>
        </div>
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex text-black/70 max-w-full items-center rounded-full bg-white/20 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section
        id="soluciones-principales"
        className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Núcleo técnico"
            title="Tres capacidades para proyectos que no pueden improvisarse."
            description="Construimos la base física y operativa de cada despliegue con especialidades que se coordinan como un solo sistema."
            tone="light"
          />
          <div className="grid gap-5 xl:grid-cols-3">
            {coreSolutions.map((solution) => (
              <article
                key={solution.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-gray-300 shadow p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081120] text-white shadow-[0_14px_34px_rgba(8,17,32,0.18)]">
                  <solution.icon size={26} />
                </div>
                <h3 className="font-display mt-6 text-[1.38rem] font-bold tracking-[-0.03em] text-[#081120]">
                  {solution.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-7 text-gray-600">
                  {solution.description}
                </p>
                <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                  {solution.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 rounded-full bg-black/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="soluciones-capas"
        className="relative overflow-hidden  px-4 py-16 scroll-mt-24 text-white md:py-22"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Capas complementarias"
            title="Tecnología aplicada para conectar y acelerar la operación."
            description="Telecomunicaciones, plataformas y automatización que amplifican cada despliegue físico con datos, visibilidad y control."
            tone="light"
          />
          <div className="grid gap-5 grid-cols-2">
            {complementaryLayers.map((layer) => (
              <article
                key={layer.title}
                className="group relative overflow-hidden rounded-[1.75rem] border  shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={layer.image}
                    alt={layer.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
                  />

                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/12 bg-[#081120]/72 px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-blue-100/92 backdrop-blur-md">
                    {layer.metric}
                  </div>
                  <div className="absolute bottom-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.09] text-white backdrop-blur-md">
                    <layer.icon size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-gray-900 text-[1.36rem] font-bold tracking-[-0.03em]">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] text-gray-600 leading-7">
                    {layer.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="soluciones-modelo"
        className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <SectionHeader
            badge="Modelo de trabajo"
            title="Una metodología clara para reducir fricción y tomar mejores decisiones."
            description="Coordinamos alcance, especialidades y validación continua para que la ejecución avance con control desde el primer día."
            tone="light"
          />
          <div className="grid gap-5 grid-cols-2">
            {deliveryModel.map((step) => (
              <article
                key={step.title}
                className="relative overflow-hidden rounded-[1.55rem] border border-white/60 bg-white/50 p-6 shadow-[0_20px_44px_rgba(15,23,42,0.07)] backdrop-blur-xl"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
                <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/70 px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-blue-700">
                  {step.badge}
                </span>
                <div className="mt-6 h-px w-14 bg-gradient-to-r from-blue-500/80 to-transparent" />
                <h3 className="font-display mt-5 text-[1.22rem] font-bold tracking-[-0.03em] text-[#081120]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[0.93rem] leading-7 text-slate-600">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="soluciones-casos"
        className="relative overflow-hidden px-4 py-16 scroll-mt-24 text-white md:py-24"
      >
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <SectionHeader
                badge="Casos recientes"
                title="Resultados que se sienten en la operación."
                description="Compartimos avances, indicadores y decisiones con claridad para que cada proyecto sostenga continuidad, aprendizaje y confianza."
                tone="dark"
              />
              <Link
                href="#soluciones-diagnostico"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-gray-900"
              >
                Solicitar una propuesta
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid gap-4">
              {caseStudies.map((project) => (
                <article
                  key={project.name}
                  className="rounded-[1.45rem] border shadow p-6 "
                >
                  <span className="inline-flex border border-black/10 shadow text-black/70 items-center rounded-full bg-white/40 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                    {project.scope}
                  </span>
                  <h3 className="relative text-gray-900 z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[2.45rem] xl:text-[2rem]">
                    {project.name}
                  </h3>
                  <p className="relative text-gray-600 z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
                    {project.impact}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="soluciones-diagnostico"
        className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1240px] px-[clamp(32px,5vw,96px)]">
          <div className="rounded-[2rem] border bg-gray-200 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-10">
            <span className="inline-flex border border-black/10 shadow text-black/70 items-center rounded-full bg-white/40 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
              Proximo paso
            </span>
            <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
              Agendemos un diagnóstico técnico sin costo.
            </h1>
            <p className="relative text-gray-600 z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
              Cuéntanos tu reto y te ayudaremos a priorizar alcance,
              dependencias y decisiones para avanzar con una base técnica
              sólida.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="btn-primary min-h-[48px] px-6 text-sm"
              >
                Ir a contacto
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 ml-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </p>
              </Link>
              <Link
                href="/proyectos"
                className="btn-secondary min-h-[48px] px-6 text-sm !border-slate-300 !bg-slate-900/0 !text-slate-700 hover:!bg-slate-900/5"
              >
                Ver proyectos relacionados
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
      <span className="inline-flex border border-black/10 shadow text-black/70 items-center rounded-full bg-white/40 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
        {badge}
      </span>
      <h1 className="relative text-gray-900 z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
        {title}
      </h1>
      <p className="relative text-gray-500 z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
        {description}
      </p>
    </div>
  );
}
