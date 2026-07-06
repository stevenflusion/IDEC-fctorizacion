import type { Metadata } from "next";
import ProjectShowcase from "@/components/ui/ProjectShowcase";
import Link from "next/link";
import heroBg from "@/src/bg/herobackground_proyectos.png";

export const metadata: Metadata = {
  title: "Proyectos | IDEC Integral Solutions",
  description:
    "Proyectos recientes de IDEC en ingeniería civil, eléctrica y soluciones técnicas para operaciones críticas.",
};

const capabilitySignals = [
  "PLANIFICACIÓN INTEGRAL",
  "CABLEADO ELECTRICO",
  "SEGURIDAD INDUSTRIAL",
];

export default function ProyectosPage() {
  return (
    <div className="flex flex-col">
      <section
        className="relative flex flex-col gap-2 items-start justify-center px-16 w-full h-dvh bg-cover bg-center overflow-hidden"
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
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {capabilitySignals.map((signal) => (
            <span
              key={signal}
              className="inline-flex text-black/70 max-w-full border shadow-black items-center rounded-full bg-gray-300/60 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]"
            >
              {signal}
            </span>
          ))}
        </div>
      </section>

      <section
        id="proyectos-recientes"
        className="relative overflow-hidden px-4 py-12 scroll-mt-24 md:py-16"
      >
        <span className="inline-flex ml-16 text-black/70 max-w-full border shadow-black items-center rounded-full bg-gray-300/60 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
          Casos recientes
        </span>
        <div className="relative mx-auto w-full max-w-[1520px] px-[clamp(28px,5vw,96px)]">
          <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
            Dos intervenciones con necesidades técnicas distintas.
          </h1>
          <p className="relative text-gray-600 pb-10 z-10 mt-3 max-w-[32rem] text-[0.94rem] leading-6  sm:text-[1rem]">
            Cada intervención resume alcance, evidencia visual y criterio
            técnico aplicado en campo.
          </p>

          <ProjectShowcase />
        </div>
      </section>
    </div>
  );
}
