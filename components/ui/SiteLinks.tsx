"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteLinks() {
  const pathname = usePathname();
  const base =
    "group relative inline-flex items-center whitespace-nowrap rounded-full border border-transparent px-3.5 py-2 text-[0.93rem] font-medium tracking-[0.02em] transition-all duration-300";
  const inactive = "text-gray-500 hover:text-blue-400";
  const active = "border-white/[0.18] bg-gray-200 border shadow text-gray-900 ";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname?.startsWith("/home");
    }
    return pathname?.startsWith(href);
  };

  return (
    <>
      <Link href="/" className={`${base} ${isActive("/") ? active : inactive}`}>
        Inicio
      </Link>
      <Link
        href="/soluciones"
        className={`${base} ${isActive("/soluciones") ? active : inactive}`}
      >
        Soluciones
      </Link>
      <Link
        href="/proyectos"
        className={`${base} ${isActive("/proyectos") ? active : inactive}`}
      >
        Proyectos
      </Link>
      <Link
        href="/sobre-nosotros"
        className={`${base} ${isActive("/sobre-nosotros") ? active : inactive}`}
      >
        Sobre nosotros
      </Link>
      <Link
        href="/galery"
        className={`${base} ${isActive("/galery") ? active : inactive}`}
      >
        Galeria
      </Link>
    </>
  );
}
