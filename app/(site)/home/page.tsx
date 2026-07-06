"use client";

import heroBg from "@/src/bg/herobackground_claro.png";
import Strategy from "@/src/resource/strategie.jpg";
import Image from "next/image";
import Link from "next/link";

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

const serviceCards = [
  {
    id: "01/04",
    title: "Estrategia",
    description:
      "Conocemos a ti y a tu marca. Objetivos, audiencia, competencia. De eso viene la hoja de ruta en la que todo lo demás está.",
    tags: [
      "Briefing & Taller",
      "Análisis de Competidores",
      "Estrategia de marca",
      "Hoja de ruta",
    ],
    image: Strategy,
  },
  {
    id: "02/04",
    title: "Diseño UX/UI",
    description:
      "Diseñamos interfaces y experiencias que conectan con tu audiencia y potencian la usabilidad de tus plataformas.",
    tags: [
      "UX Research",
      "Arquitectura de la Información",
      "UI Design",
      "Prototipado",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "03/04",
    title: "Desarrollo",
    description:
      "Construimos software robusto y escalable con tecnologías modernas adaptadas a tus necesidades operativas.",
    tags: ["Frontend", "Backend", "APIs y Microservicios", "DevOps"],
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "04/04",
    title: "Operaciones",
    description:
      "Aseguramos el funcionamiento continuo con monitoreo, soporte y mejora constante de tus sistemas productivos.",
    tags: [
      "Monitoreo 24/7",
      "Soporte técnico",
      "Mantenimiento evolutivo",
      "Mejora continua",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
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
  {
    value: "15",
    label: "PLATAFORMAS DESARROLLADAS PLUS",
    detail: "Software de control.",
  },
  {
    value: "100+",
    label: "AUTOMATIZACIONES CON IA - GITHUB",
    detail: "Procesos, datos y asistentes inteligentes.",
  },
];

export default function HomePage() {
  return (
    <>
      <section
        className="relative flex flex-col gap-2 items-start justify-center px-16 w-full h-dvh bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      >
        {/* Nube brillante celeste */}
        <div className="z-10 absolute top-1/4 left-16 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 blur-[100px] opacity-20 pointer-events-none animate-float" />

        <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Ingeniería, automatización e inteligencia artificial para operaciones
          críticas.
        </h1>
        <p className="relative z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
          Integramos trabajos de automatización con inteligencia artificial,
          infraestructura, energía y conectividad.
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
      <div className="mt-5 lg:mt-16  w-full h-[25dvh] overflow-hidden">
        <div
          className="flex gap-6 animate-marquee"
          style={{ width: "fit-content" }}
        >
          {[...impactMetrics, ...impactMetrics].map((metric, i) => (
            <article
              key={`${metric.label}-${i}`}
              className="group h-[24dvh] w-[380px] shrink-0 relative flex flex-col overflow-hidden rounded-[1.15rem] border border-gray-200 bg-white transition-all duration-300 hover:border-blue-400/20 hover:shadow-md sm:p-5 xl:p-4"
            >
              <span className="font-display text-base font-extrabold">
                {metric.value}
              </span>
              <h3 className="font-display mt-5 max-w-[14ch] text-xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
                {metric.label}
              </h3>
              <p className="mt-4 max-w-[39rem] text-sm text-slate-600 sm:text-[1.04rem]">
                {metric.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
      <section className="relative px-16 w-full pt-20">
        <div className="relative mx-auto w-full max-w-[1520px] ">
          <h2 className="font-display mt-5 max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.55rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
            Plataformas para operar con más control
          </h2>
          <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]">
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
                <div className="absolute left-5 top-5 inline-flex rounded-full bg-white/20 px-3 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-blue-100/92 backdrop-blur-md">
                  {app.metric}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h2 className="font-display mt-5  text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
                  Plataformas para operar con más control
                  {app.name}
                </h2>
                <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]">
                  {app.description}
                </p>
                <div className="mt-6">
                  <Link
                    href="/soluciones"
                    className="mt-4 hover:text-blue-300 transition-all duration-300 ease-in-out max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]"
                  >
                    {app.cta}
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center px-16 pt-20">
        <div className="relative mx-auto w-full max-w-[1520px]">
          <h2 className="font-display mt-5 max-w-[14ch] text-[clamp(2.1rem,3.8vw,3.55rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
            Plataformas para operar con más control
          </h2>
          <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]">
            Herramientas desarrolladas para centralizar datos, automatizar
            procesos y mejorar la toma de decisiones.
          </p>
        </div>
      </section>
      <section className="relative -mt-16 h-[400vh]">
        {serviceCards.map((card) => (
          <div
            key={card.id}
            className="sticky top-0 h-dvh flex items-center justify-center px-16"
          >
            <div className="border bg-white flex items-center justify-between w-full max-w-[1520px] h-[50dvh]">
              <div className="relative flex-1 w-full h-full overflow-hidden">
                <Image
                  className="opacity-75 object-cover"
                  src={card.image}
                  alt=""
                  fill
                  sizes="50vw"
                />
              </div>
              <div className="px-16 flex flex-col flex-1">
                <div>
                  <span className="text-sm">{card.id}</span>
                  <h3 className="font-display mt-5 max-w-[14ch] text-[clamp(2.1rem,3vw,3.55rem)] font-extrabold leading-[0.98] tracking-[-0.04em] text-[#081120]">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-5 text-slate-600 sm:text-[0.9rem]">
                  {card.description}
                </p>
                <div className="flex gap-2 mt-4 text-black/70 max-w-full items-center rounded-full bg-white/20 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
                  {card.tags.map((tag) => (
                    <p key={tag}>° {tag}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
      <section className="relative overflow-hidden px-4 py-14 scroll-mt-24 md:py-20">
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(32px,5vw,96px)]">
          <div className="max-w-[42rem]">
            <h2 className="font-display mt-5 max-w-[16ch] text-[clamp(2.1rem,3.8vw,3.55rem)] font-extrabold leading-[4rem] tracking-[-0.04em] text-[#081120]">
              Una metodología clara de principio a fin
            </h2>
            <p className="mt-4 max-w-[39rem] text-[0.98rem] leading-7 text-slate-600 sm:text-[1.04rem]">
              Reducimos incertidumbre con etapas visibles, responsables claros y
              validación continua.
            </p>
          </div>

          <div className="mt-10 grid gap-5 grid-cols-2">
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
    </>
  );
}
