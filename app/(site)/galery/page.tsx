"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const G = "/galery";
const img1 = `${G}/1.webp`;
const img2 = `${G}/2.webp`;
const img3 = `${G}/3.webp`;
const img4 = `${G}/4.webp`;
const img5 = `${G}/5.webp`;
const img6 = `${G}/6.webp`;
const img7 = `${G}/7.webp`;
const img8 = `${G}/8.webp`;
const img9 = `${G}/9.webp`;
const img10 = `${G}/10.webp`;
const img11 = `${G}/11.webp`;
const img12 = `${G}/12.webp`;
const img13 = `${G}/13.webp`;
const img14 = `${G}/14.webp`;
const img15 = `${G}/15.webp`;
const img16 = `${G}/16.webp`;
const img17 = `${G}/17.webp`;
const img18 = `${G}/18.webp`;
const img19 = `${G}/19.webp`;
const img20 = `${G}/20.webp`;

type Photo = { src: string; alt: string };

/* ---------- Carrusel con crossfade ---------- */
function Carousel({
  photos,
  interval = 3500,
  className = "",
}: {
  photos: Photo[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || photos.length <= 1) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % photos.length),
      interval,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, photos.length, interval]);

  return (
    <div
      className={`group/car relative overflow-hidden ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {photos.map((p, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-[opacity,transform] duration-700 ease-out"
          style={{
            opacity: i === index ? 1 : 0,
            transform: i === index ? "scale(1.04)" : "scale(1.12)",
          }}
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/car:opacity-100" />
      {photos.length > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {photos.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir a la imagen ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-white"
                  : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Tile base redondeado ---------- */
function Tile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl  ${className}`}>
      {children}
    </div>
  );
}

/* ---------- Foto con zoom al hover ---------- */
function ZoomPhoto({
  photo,
  className = "",
}: {
  photo: Photo;
  className?: string;
}) {
  return (
    <Tile className={`group/photo ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover/photo:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover/photo:opacity-100" />
    </Tile>
  );
}

/* ---------- Foto con caption que sube al hover ---------- */
function CaptionPhoto({
  photo,
  title,
  subtitle,
  className = "",
  priority = false,
}: {
  photo: Photo;
  title: string;
  subtitle?: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Tile className={`group/cap ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-[1100ms] ease-out group-hover/cap:scale-[1.08]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition-all duration-500 ease-out group-hover/cap:translate-y-0 group-hover/cap:opacity-100">
        <h3 className="font-display text-lg font-bold text-white drop-shadow-sm sm:text-xl">
          {title}
        </h3>
        {subtitle && <p className="mt-1 text-sm text-white/80">{subtitle}</p>}
      </div>
      <div className="absolute left-5 top-5 h-px w-8 bg-white/70 transition-all duration-500 group-hover/cap:w-16" />
    </Tile>
  );
}

/* ---------- Tile de texto / stat ---------- */
function TextTile({
  kicker,
  value,
  label,
  className = "",
}: {
  kicker?: string;
  value?: string;
  label?: string;
  className?: string;
}) {
  return (
    <Tile
      className={`col-span-2 sm:col-span-1 flex flex-col justify-between bg-gradient-to-br from-[#1193d4] to-[#0b5c7e] p-6 text-white ${className}`}
    >
      {kicker && (
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-white/70">
          {kicker}
        </span>
      )}
      {value && (
        <span className="font-display text-4xl font-extrabold leading-none sm:text-5xl">
          {value}
        </span>
      )}
      {label && (
        <span className="text-sm font-medium text-white/85">{label}</span>
      )}
    </Tile>
  );
}

/* ---------- Tile quote ---------- */
function QuoteTile({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <Tile
      className={`flex items-center bg-slate-900 p-6 text-white ${className}`}
    >
      <p className="font-display text-base font-semibold leading-snug text-white/90 sm:text-lg">
        <span className="mr-1 text-2xl text-[#1193d4]">“</span>
        {text}
        <span className="ml-1 text-2xl text-[#1193d4]">”</span>
      </p>
    </Tile>
  );
}

export default function GaleryPage() {
  return (
    <main className="w-full px-4 py-10 sm:px-6 lg:px-10">
      <header className="mx-auto mt-10 mb-8 max-w-6xl">
        <span className="inline-flex text-gray-500 max-w-full items-center rounded-full bg-gray-200 px-2.5 py-1.5 text-center text-[0.58rem] font-medium uppercase leading-4 tracking-[0.08em] sm:px-3 sm:tracking-[0.1em]">
          Galeria
        </span>
        <h1 className="relative z-10 mt-4 max-w-[13.5ch] break-words text-[2.15rem] font-extrabold leading-[0.98] tracking-normal sm:max-w-[16ch] sm:text-[3rem] lg:text-[3.45rem] xl:text-[4rem]">
          IDEC en acción
        </h1>
        <p className="relative z-10 mt-3 max-w-[32rem]  leading-6  text-gray-600">
          Integramos trabajos de automatización con inteligencia artificial,
          infraestructura, energía y conectividad.
        </p>
      </header>

      <section className="mx-auto grid max-w-6xl auto-rows-[180px] grid-flow-dense grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:auto-rows-[210px]">
        {/* Fila superior */}
        <CaptionPhoto
          photo={{ src: img1, alt: "Obra civil IDEC" }}
          title="Ingeniería aplicada"
          subtitle="Proyectos ejecutados en campo."
          className="col-span-2 row-span-2 lg:col-span-3"
          priority
        />
        <Carousel
          photos={[
            { src: img2, alt: "Instalación 2" },
            { src: img3, alt: "Instalación 3" },
            { src: img4, alt: "Instalación 4" },
            { src: img5, alt: "Instalación 5" },
          ]}
          className="col-span-1 row-span-3 lg:col-span-2"
        />
        <TextTile
          kicker="Trayectoria"
          value="30+"
          label="Proyectos ejecutados"
        />
        <CaptionPhoto
          photo={{ src: img7, alt: "Campo IDEC" }}
          title="Trabajo en campo"
          className="row-span-2"
        />

        {/* Centro */}
        <ZoomPhoto
          photo={{ src: img8, alt: "Instalación 8" }}
          className="col-span-2"
        />
        <TextTile kicker="Redes" value="5 km" label="Fibra y conectividad" />
        <Carousel
          photos={[
            { src: img9, alt: "Automatización 9" },
            { src: img10, alt: "Automatización 10" },
            { src: img11, alt: "Automatización 11" },
            { src: img12, alt: "Automatización 12" },
          ]}
          className="col-span-2 row-span-2 lg:col-span-4"
        />
        <CaptionPhoto
          photo={{ src: img13, alt: "Control 13" }}
          title="Control y monitoreo"
          subtitle="Plataformas operativas."
          className="col-span-2 row-span-2"
        />

        {/* Fila media */}
        <ZoomPhoto photo={{ src: img15, alt: "Detalle 15" }} />
        <ZoomPhoto photo={{ src: img16, alt: "Detalle 16" }} />
        <ZoomPhoto
          photo={{ src: img17, alt: "Detalle 17" }}
          className="col-span-2"
        />
        <QuoteTile
          text="Solidez técnica y compromiso en cada frente de obra."
          className="col-span-2"
        />

        {/* Cierre */}
        <CaptionPhoto
          photo={{ src: img18, alt: "Cierre de obra" }}
          title="Cierre de obra"
          subtitle="Entregas validadas en campo."
          className="col-span-2 row-span-2 lg:col-span-3"
        />
        <Carousel
          photos={[
            { src: img19, alt: "Galería 19" },
            { src: img20, alt: "Galería 20" },
            { src: img14, alt: "Galería 14" },
            { src: img6, alt: "Galería 6" },
          ]}
          className="col-span-2 row-span-2 lg:col-span-3"
        />
      </section>
    </main>
  );
}
