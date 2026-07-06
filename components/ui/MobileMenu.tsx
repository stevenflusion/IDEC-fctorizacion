"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ThemeSelect from "./ThemeSelect";

interface MobileMenuProps {
  anchors: { label: string; href: string }[];
}

export default function MobileMenu({ anchors }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname?.startsWith("/home");
    }
    return pathname?.startsWith(href);
  };

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(true)}
        className="theme-mobile-menu-button flex h-10 w-10 items-center justify-center rounded-xl border shadow-[0_10px_26px_rgba(8,17,32,0.18)] backdrop-blur-md transition-all duration-300 hover:border-blue-400/30"
        aria-label="Abrir menú"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex justify-end bg-[rgba(3,7,18,0.7)] backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="theme-mobile-menu-panel h-screen w-[85%] max-w-sm overflow-y-auto border-l p-6 shadow-[0_24px_72px_rgba(0,0,0,0.42)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Logo />
              <button
                onClick={() => setIsOpen(false)}
                className="theme-mobile-menu-icon rounded-full border p-2 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-5 sm:hidden">
              <ThemeSelect compact />
            </div>

            <nav className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/38">
                  Menú
                </p>
                <Link
                  href="/"
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive("/")
                      ? "border border-white/10 bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  Inicio
                </Link>
                <Link
                  href="/soluciones"
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive("/soluciones")
                      ? "border border-white/10 bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  Soluciones
                </Link>
                <Link
                  href="/proyectos"
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive("/proyectos")
                      ? "border border-white/10 bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  Proyectos
                </Link>
                <Link
                  href="/sobre-nosotros"
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive("/sobre-nosotros")
                      ? "border border-white/10 bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  Sobre nosotros
                </Link>
                <Link
                  href="/galery"
                  className={`block rounded-2xl px-4 py-3 text-base font-medium transition-all ${
                    isActive("/sobre-nosotros")
                      ? "border border-white/10 bg-white/[0.08] text-white"
                      : "text-white/70 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  Galeria
                </Link>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] px-4 py-3 text-sm font-semibold tracking-[0.02em] text-white transition-all duration-300 hover:border-blue-400/35 hover:bg-white/[0.1]"
              >
                Hablemos
              </Link>

              {anchors.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/38">
                    Secciones
                  </p>
                  {anchors.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-sm text-white/64 transition-all hover:bg-white/[0.05] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
