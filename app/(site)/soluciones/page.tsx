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

const heroDesktopSrc = "/bg/hero-soluciones-desktop.webp";
const heroMobileSrc = "/bg/hero-soluciones-mobile.webp";

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
      "Los workflows con IA son la nueva manera de resolver problemas en las empresas. ",
    image:
      "https://plus.unsplash.com/premium_photo-1680608979589-e9349ed066d5?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      {/* ===================== HERO ===================== */}
      <section className="relative flex flex-col gap-4 lg:gap-2 items-center lg:items-start justify-center px-4 sm:px-6 lg:px-16 w-full h-dvh overflow-hidden">
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
            alt="Infraestructura y tecnología para operar con precisión"
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

        <h1 className="theme-heading text-center lg:text-start relative z-10 mt-32 md:mt-20 lg:mt-4 max-w-[13.5ch] break-words text-4xl font-extrabold leading-[1.02] tracking-normal sm:max-w-[20ch] sm:text-[2.5rem] lg:text-[3.45rem] xl:text-[4rem]">
          Infraestructura y tecnología para operar con precisión.
        </h1>
        <p className="theme-copy relative px-4 pb-20 md:pb-0 md:text-start text-center z-10 md:mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
          Integramos ingeniería, automatización y conectividad para proyectos
          que requieren continuidad operativa real.
        </p>
        <div className="relative md:pb-0 md:mt-4 mt-32 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center w-full sm:w-auto">
          <Link
            href="/soluciones#soluciones-principales"
            className="bg-blue-500 text-white flex items-center justify-center gap-2 rounded-3xl py-3 w-full px-5 text-sm sm:w-auto"
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
            className="bg-white text-slate-700 border border-slate-300 flex items-center justify-center rounded-3xl py-2.5 w-full px-4 text-sm sm:w-auto text-center"
          >
            Hablar con un asesor
          </Link>
        </div>
        <div className="relative z-10 md:mt-4 flex md:gap-0 gap-2">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="theme-pill flex items-center rounded-full px-1 py-1 md:px-2.5 md:py-1.5 text-center text-[0.48rem] md:text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em] backdrop-blur-sm"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== NÚCLEO TÉCNICO ===================== */}
      <section
        id="soluciones-principales"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px]">
          <SectionHeader
            badge="Núcleo técnico"
            title="Tres capacidades para proyectos que no pueden improvisarse."
            description=""
          />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {coreSolutions.map((solution, i) => {
              const isLast = i === coreSolutions.length - 1;
              return (
                <article
                  key={solution.title}
                  className={`theme-card group relative overflow-hidden rounded-[1.75rem] border shadow p-6 ${isLast ? "sm:col-span-2 lg:col-span-1" : ""}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#081120] text-white shadow-[0_14px_34px_rgba(8,17,32,0.18)]">
                    <solution.icon size={26} />
                  </div>
                  <h3 className="theme-heading font-display mt-6 text-[1.38rem] font-bold tracking-[-0.03em]">
                    {solution.title}
                  </h3>
                  <p className="theme-copy mt-3 text-[0.95rem] leading-7">
                    {solution.description}
                  </p>
                  <ul className="theme-copy mt-5 space-y-2.5 text-sm">
                    {solution.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-2 h-1 w-1 rounded-full bg-blue-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== CAPAS COMPLEMENTARIAS ===================== */}
      <section
        id="soluciones-capas"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-16 scroll-mt-24 text-white md:py-22"
      >
        <div className="relative mx-auto w-full max-w-[1520px]">
          <SectionHeader
            badge="Capas complementarias"
            title="Tecnología aplicada para conectar y acelerar la operación."
            description="Telecomunicaciones, plataformas y automatización que amplifican cada despliegue físico con datos, visibilidad y control."
          />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {complementaryLayers.map((layer) => (
              <article
                key={layer.title}
                className="theme-card group relative overflow-hidden rounded-[1.75rem] border shadow"
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={layer.image}
                    alt={layer.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width:640px) 50vw, 100vw"
                  />

                  <div className="absolute left-5 top-5 inline-flex rounded-full border border-white/12 bg-[#081120]/72 px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.16em] text-blue-100/92 backdrop-blur-md">
                    {layer.metric}
                  </div>
                  <div className="absolute bottom-5 left-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.09] text-white backdrop-blur-md">
                    <layer.icon size={24} />
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="theme-heading font-display text-[1.36rem] font-bold tracking-[-0.03em]">
                    {layer.title}
                  </h3>
                  <p className="theme-copy mt-3 text-[0.95rem] leading-7">
                    {layer.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== MODELO DE TRABAJO ===================== */}
      <section
        id="soluciones-modelo"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1520px]">
          <SectionHeader
            badge="Modelo de trabajo"
            title="Una metodología clara para reducir tiempos de entrega y tomar mejores decisiones."
            description="Coordinamos alcance, especialidades y validación continua para que la ejecución avance con control desde el primer día."
          />
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            {deliveryModel.map((step) => (
              <article
                key={step.title}
                className="theme-card-soft relative overflow-hidden rounded-[1.55rem] border p-6 shadow-[0_20px_44px_rgba(15,23,42,0.07)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
                <span className="theme-eyebrow-pill inline-flex rounded-full border px-3 py-1.5 text-[0.61rem] font-semibold uppercase tracking-[0.18em]">
                  {step.badge}
                </span>
                <div className="mt-6 h-px w-14 bg-gradient-to-r from-blue-500/80 to-transparent" />
                <h3 className="theme-heading font-display mt-5 text-[1.22rem] font-bold tracking-[-0.03em]">
                  {step.title}
                </h3>
                <p className="theme-copy mt-3 text-[0.93rem] leading-7">
                  {step.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CASOS RECIENTES ===================== */}
      <section
        id="soluciones-casos"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-16 scroll-mt-24 md:py-24"
      >
        <div className="relative mx-auto w-full max-w-[1520px]">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-start">
            <div>
              <SectionHeader
                badge="Casos recientes"
                title="Resultados que se sienten en la operación."
                description="Compartimos avances, indicadores y decisiones con claridad para que cada proyecto sostenga continuidad, aprendizaje y confianza."
              />
              <Link
                href="#soluciones-diagnostico"
                className="theme-eyebrow inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-300"
              >
                Solicitar una propuesta
                <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="grid gap-4">
              {caseStudies.map((project) => (
                <article
                  key={project.name}
                  className="theme-card rounded-[1.45rem] border shadow p-6"
                >
                  <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                    {project.scope}
                  </span>
                  <h3 className="theme-heading relative z-10 mt-4 max-w-[13.5ch] break-words text-[1.8rem] font-extrabold leading-[1.02] tracking-normal sm:max-w-[16ch] sm:text-[2.4rem] lg:text-[2.45rem] xl:text-[2rem]">
                    {project.name}
                  </h3>
                  <p className="theme-copy relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
                    {project.impact}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================== DIAGNÓSTICO ===================== */}
      <section
        id="soluciones-diagnostico"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-14 scroll-mt-24 md:py-20"
      >
        <div className="relative mx-auto w-full max-w-[1240px]">
          <div className="theme-card-soft rounded-[2rem] border p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 md:p-10">
            <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
              Proximo paso
            </span>
            <h2 className="theme-heading relative z-10 mt-4 max-w-[16ch] break-words text-[2rem] font-extrabold leading-[1.02] tracking-normal sm:text-[3rem] lg:text-[3.45rem] xl:text-[3.5rem]">
              Agendemos un diagnóstico técnico sin costo.
            </h2>
            <p className="theme-copy relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
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
                className="btn-secondary min-h-[48px] px-6 text-sm"
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
