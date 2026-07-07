import type { Metadata } from "next";
import ProjectShowcase from "@/components/ui/ProjectShowcase";

export const metadata: Metadata = {
  title: "Proyectos | IDEC Integral Solutions",
  description:
    "Proyectos recientes de IDEC en ingeniería civil, eléctrica y soluciones técnicas para operaciones críticas.",
};

const heroDesktopSrc = "/bg/hero-proyectos-desktop.webp";
const heroMobileSrc = "/bg/hero-proyectos-mobile.webp";

const capabilitySignals = [
  "PLANIFICACIÓN INTEGRAL",
  "CABLEADO ELECTRICO",
  "SEGURIDAD INDUSTRIAL",
];

export default function ProyectosPage() {
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
            alt="Obras reales con criterio técnico y ejecución en campo"
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

        <h1 className="theme-heading relative z-10 mt-36 xl:mt-4 text-center xl:text-start max-w-[13.5ch] break-words text-4xl font-extrabold leading-[1.02] tracking-normal xs:text-[2.4rem] sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          Obras reales con criterio técnico y ejecución en campo.
        </h1>
        <p className="theme-copy relative px-4 pb-48 xl:pb-0 text-center xl:text-start z-10 xl:mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
          Seleccionamos proyectos recientes que muestran cómo IDEC coordina
          ingeniería civil, eléctrica y soporte técnico para resolver
          necesidades concretas con seguridad, orden y continuidad operativa.
        </p>
        <div className="relative z-10 xl:mt-4 mt-28 flex xl:flex-col items-center justify-center xl:items-start sm:grid sm:grid-cols-3 gap-2 w-full sm:w-auto sm:items-stretch">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="theme-pill flex items-center justify-center rounded-full px-3 py-1.5 text-center xl:text-[0.58rem] text-[0.38rem] font-medium uppercase leading-4 tracking-[0.08em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      {/* ===================== PROYECTOS RECIENTES ===================== */}
      <section
        id="proyectos-recientes"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-16 py-12 scroll-mt-24 md:py-16"
      >
        <span className="theme-pill inline-flex border items-center rounded-full px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
          Casos recientes
        </span>
        <div className="relative mx-auto w-full max-w-[1520px]">
          <h2 className="theme-heading relative z-10 mt-4 max-w-[16ch] break-words text-[2rem] font-extrabold leading-[1.02] tracking-normal sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
            Dos intervenciones con necesidades técnicas distintas.
          </h2>
          <p className="theme-copy relative pb-10 z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6 sm:text-[1rem]">
            Cada intervención resume alcance, evidencia visual y criterio
            técnico aplicado en campo.
          </p>

          <ProjectShowcase />
        </div>
      </section>
    </div>
  );
}
