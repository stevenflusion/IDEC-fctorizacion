// components/ui/MainNavSite.tsx
"use client";

import Link from "next/link";
import Logo from "./Logo";
import SiteLinks from "./SiteLinks";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import ThemeSelect from "./ThemeSelect";
import ThemeToggle from "./ThemeToggle";

const homeAnchors = [
  { label: "Soluciones", href: "/soluciones#soluciones-principales" },
  { label: "Plataformas", href: "#plataformas" },
  { label: "Método", href: "#home-playbook" },
];

const anchorConfig: Record<string, { label: string; href: string }[]> = {
  "/": homeAnchors,
  "/home": homeAnchors,
  "/soluciones": [
    { label: "Soluciones clave", href: "#soluciones-principales" },
    { label: "Capas técnicas", href: "#soluciones-capas" },
    { label: "Metodología", href: "#soluciones-modelo" },
    { label: "Casos", href: "#soluciones-casos" },
    { label: "Diagnóstico", href: "#soluciones-diagnostico" },
  ],
  "/sobre-nosotros": [
    { label: "Historia", href: "#sobre-historia" },
    { label: "Pilares", href: "#sobre-pilares" },
    { label: "Trayectoria", href: "#sobre-trayectoria" },
    { label: "Laboratorio", href: "#sobre-laboratorio" },
    { label: "Testimonios", href: "#sobre-testimonios" },
  ],
  "/clients": [
    { label: "Ecosistema", href: "#clientes-ecosistema" },
    { label: "Diferenciales", href: "#clientes-diferenciales" },
    { label: "Modelo", href: "#clientes-modelo" },
  ],
  "/proyectos": [{ label: "Recientes", href: "#proyectos-recientes" }],
};

export default function MainNavSite() {
  const pathname = usePathname();
  const anchors =
    Object.entries(anchorConfig).find(([route]) =>
      route === "/" ? pathname === "/" : pathname?.startsWith(route),
    )?.[1] ?? [];

  return (
    <header className="theme-nav fixed inset-x-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[var(--navbar-height)] max-w-[90rem] items-center justify-between gap-3 px-4 sm:px-6 lg:gap-5 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Logo />
        </div>

        <nav className="hidden flex-1 items-center justify-center lg:flex">
          <SiteLinks />
        </nav>

        <Link href="/contact" className="hidden items-center gap-2 lg:flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </Link>

        <ThemeToggle />

        <div className="flex items-center gap-2 lg:hidden">
          <div className="hidden sm:block">
            <ThemeSelect compact />
          </div>
          <MobileMenu anchors={anchors} />
        </div>
      </div>
    </header>
  );
}
