"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProjectPhoto = {
  src: string;
  alt: string;
};

type ProjectItem = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  description: string[];
  scope: string[];
  location: string;
  cover: ProjectPhoto;
  photos: ProjectPhoto[];
};

const projects: ProjectItem[] = [
  {
    id: "muro-contencion",
    eyebrow: "Ingeniería civil",
    title: "Muro de contención con análisis geotécnico",
    summary:
      "Planificación integral, movimiento de tierras y construcción técnica para estabilizar el terreno.",
    description: [
      "Ejecutamos la planificación integral del proyecto, incluyendo el movimiento de tierras y retiro de escombros.",
      "La construcción del muro de contención fue respaldada por análisis geotécnico del suelo y evaluación técnica del terreno para garantizar estabilidad, seguridad y durabilidad en la obra.",
    ],
    scope: [
      "Movimiento de tierras",
      "Retiro de escombros",
      "Análisis geotécnico",
      "Muro de contención",
    ],
    location: "Proyecto civil",
    cover: {
      src: "/projects/muro-contencion/10.jpg",
      alt: "Muro de contención en construcción con acabado técnico de obra civil",
    },
    photos: [
      {
        src: "/projects/muro-contencion/10.jpg",
        alt: "Muro de contención en construcción",
      },
      {
        src: "/projects/muro-contencion/11.jpg",
        alt: "Vista lateral del muro de contención y formaleta",
      },
      {
        src: "/projects/muro-contencion/14.jpg",
        alt: "Maquinaria realizando movimiento de tierras",
      },
      {
        src: "/projects/muro-contencion/5.jpg",
        alt: "Personal técnico trabajando sobre el muro de contención",
      },
      {
        src: "/projects/muro-contencion/6.jpg",
        alt: "Avance de obra civil en el muro de contención",
      },
      {
        src: "/projects/muro-contencion/3.jpg",
        alt: "Preparación de materiales para la obra civil",
      },
      {
        src: "/projects/muro-contencion/4.jpg",
        alt: "Excavación y preparación del terreno",
      },
      {
        src: "/projects/muro-contencion/8.jpg",
        alt: "Área intervenida durante construcción del muro",
      },
      {
        src: "/projects/muro-contencion/9.jpg",
        alt: "Materiales organizados para el muro de contención",
      },
      {
        src: "/projects/muro-contencion/12.jpg",
        alt: "Muro de bloque levantado en terreno intervenido",
      },
      {
        src: "/projects/muro-contencion/13.jpg",
        alt: "Maquinaria y frente de trabajo en proyecto civil",
      },
      {
        src: "/projects/muro-contencion/15.jpg",
        alt: "Materiales de acero para refuerzo de obra",
      },
      {
        src: "/projects/muro-contencion/1.jpg",
        alt: "Terreno antes de la intervención civil",
      },
      {
        src: "/projects/muro-contencion/2.jpg",
        alt: "Retiro de vegetación y preparación inicial",
      },
      {
        src: "/projects/muro-contencion/7.jpg",
        alt: "Zona de trabajo preparada para el proyecto civil",
      },
    ],
  },
  {
    id: "campamento-petrolero",
    eyebrow: "Ingeniería eléctrica",
    title: "Modernización del sistema de iluminación para campamento petrolero",
    summary:
      "Tendido y adecuación de cableado eléctrico para renovar iluminación con seguridad operativa.",
    description: [
      "Ejecutamos el tendido y adecuación de cableado eléctrico para la renovación del sistema de iluminación en un campamento petrolero, garantizando el cumplimiento de estándares de seguridad, eficiencia y confiabilidad operativa.",
      "El proyecto fue desarrollado por personal técnico altamente capacitado, utilizando herramientas especializadas y procedimientos de trabajo seguros, asegurando una instalación eficiente y una mejora significativa en las condiciones de iluminación de las áreas intervenidas.",
    ],
    scope: [
      "Cableado eléctrico",
      "Iluminación operativa",
      "Seguridad industrial",
      "Campamento petrolero",
    ],
    location: "Sector petrolero",
    cover: {
      src: "/projects/petrolero/17.jpg",
      alt: "Técnico trabajando en altura durante modernización eléctrica",
    },
    photos: [
      {
        src: "/projects/petrolero/17.jpg",
        alt: "Técnico trabajando en altura sobre estructura eléctrica",
      },
      {
        src: "/projects/petrolero/20.jpg",
        alt: "Tablero eléctrico del sistema de iluminación renovado",
      },
      {
        src: "/projects/petrolero/16.jpg",
        alt: "Técnico realizando adecuación de cableado eléctrico",
      },
      {
        src: "/projects/petrolero/19.jpg",
        alt: "Instalación y revisión de cableado en campamento petrolero",
      },
      {
        src: "/projects/petrolero/18.jpg",
        alt: "Equipo técnico en campo para proyecto petrolero",
      },
    ],
  },
];

const getNextIndex = (currentIndex: number, total: number) =>
  currentIndex + 1 >= total ? 0 : currentIndex + 1;

const getPreviousIndex = (currentIndex: number, total: number) =>
  currentIndex - 1 < 0 ? total - 1 : currentIndex - 1;

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!selectedProject) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedImageIndex((currentIndex) =>
          getNextIndex(currentIndex, selectedProject.photos.length),
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((currentIndex) =>
          getPreviousIndex(currentIndex, selectedProject.photos.length),
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const openProject = (project: ProjectItem) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
  };

  const selectedPhoto = selectedProject?.photos[selectedImageIndex];

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => openProject(project)}
            className="project-card group overflow-hidden rounded-3xl border shadow text-left "
          >
            <span className="relative block aspect-[16/11] overflow-hidden">
              <Image
                src={project.cover.src}
                alt={project.cover.alt}
                fill
                priority
                className="object-cover transition duration-500 group-hover:scale-[1.035]"
                sizes="(min-width:1024px) 46vw, 100vw"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,32,0.08)_0%,rgba(8,17,32,0.18)_48%,rgba(8,17,32,0.86)_100%)]" />
              <span className="absolute left-5 top-5 rounded-full border border-white/16 bg-[#081120]/72 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.16em] text-blue-100 backdrop-blur-md">
                {project.eyebrow}
              </span>
              <span className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <span>
                  <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gray-400">
                    {project.location}
                  </span>
                  <span className="font-display mt-2 block text-[1.45rem] font-bold leading-tight text-white">
                    {project.title}
                  </span>
                </span>
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/14 bg-white/10 text-xl text-white backdrop-blur-md transition group-hover:bg-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </span>
            </span>
            <span className="block p-6">
              <span className="theme-copy block text-[0.96rem] leading-7">
                {project.summary}
              </span>
              <span className="mt-5 flex flex-wrap gap-2">
                {project.scope.slice(0, 3).map((item) => (
                  <span
                    key={item}
                    className="project-tag text-xs rounded-full border px-3 py-1.5 font-medium uppercase tracking-[0.12em]"
                  >
                    {item}
                  </span>
                ))}
              </span>
            </span>
          </button>
        ))}
      </div>

      {selectedProject && selectedPhoto && (
        <div
          className="fixed inset-0 z-[180] flex items-center justify-center bg-black/40 p-3 text-white backdrop-blur-md sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProject.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedProject(null);
            }
          }}
        >
          <div className="relative grid max-h-[85dvh] w-full max-w-[1120px] grid-rows-[minmax(0,1fr)] overflow-hidden rounded-[1.1rem] border border-white/12 bg-[#081120] shadow-[0_34px_120px_rgba(0,0,0,0.52)] lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.75fr)]">
            <div className="relative min-h-[46vh]  lg:min-h-[78vh]">
              <Image
                key={selectedPhoto.src}
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-cover"
                sizes="(min-width:1024px) 62vw, 100vw"
                priority
              />
              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex((currentIndex) =>
                    getPreviousIndex(
                      currentIndex,
                      selectedProject.photos.length,
                    ),
                  )
                }
                className="absolute left-4 top-[50%] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/16 bg-[#081120]/70 text-2xl text-white backdrop-blur-md transition hover:bg-blue-600"
                aria-label="Imagen anterior"
                title="Imagen anterior"
              >
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
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedImageIndex((currentIndex) =>
                    getNextIndex(currentIndex, selectedProject.photos.length),
                  )
                }
                className="absolute right-4 top-[50%] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/16 bg-[#081120]/70 text-2xl text-white backdrop-blur-md transition hover:bg-blue-600"
                aria-label="Imagen siguiente"
                title="Imagen siguiente"
              >
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
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 rounded-full border border-white/14 bg-[#081120]/78 px-3 py-1.5 text-xs font-semibold text-white/86 backdrop-blur-md">
                {selectedImageIndex + 1} / {selectedProject.photos.length}
              </div>
            </div>

            <section className="flex h-full min-h-0 flex-col overflow-y-auto p-5 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-blue-200/78">
                    {selectedProject.eyebrow}
                  </p>
                  <h2 className="font-display mt-3 text-[1.65rem] font-bold leading-tight text-white">
                    {selectedProject.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/12 bg-white/[0.05] text-2xl text-white/82 transition hover:bg-white/10 hover:text-white"
                  aria-label="Cerrar proyecto"
                  title="Cerrar"
                >
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
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-5 space-y-4 text-[0.95rem] leading-7 text-gray-400">
                {selectedProject.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-blue-200/72">
                  Alcance
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.75rem] font-semibold text-white/82"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 border-t border-white/10 pt-5">
                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.2em] text-blue-200/72">
                  Galería
                </p>
                <div className="mt-3 grid grid-cols-5 gap-2">
                  {selectedProject.photos.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[4/5] overflow-hidden rounded-lg border transition ${
                        index === selectedImageIndex
                          ? "border-blue-300 ring-2 ring-blue-400/50"
                          : "border-white/10 opacity-72 hover:opacity-100"
                      }`}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      <Image
                        src={photo.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}
