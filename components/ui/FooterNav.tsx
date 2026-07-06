"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterNav() {
  const pathname = usePathname();
  const base = "text-sm transition-colors hover:text-primary";
  const active = "font-semibold text-blue-400";

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname?.startsWith("/home");
    }
    return pathname?.startsWith(href);
  };

  const link = (href: string, label: string) => (
    <li>
      <Link
        href={href}
        className={`${base} ${isActive(href) ? active : "text-gray-400"}`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <ul className="mt-4 space-y-2">
      {link("/", "Inicio")}
      {link("/soluciones", "Soluciones")}
      {link("/proyectos", "Proyectos")}
      {link("/sobre-nosotros", "Sobre nosotros")}
      {link("/contact", "Contacto")}
      {link("/galery", "Galeria")}
    </ul>
  );
}
