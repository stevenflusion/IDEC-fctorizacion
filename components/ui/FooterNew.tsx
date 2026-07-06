import Link from "next/link";
import Logo from "./Logo";
import { getBusinessConfig } from "@/lib/business-config";

const quickLinks = [
  { href: "/soluciones", label: "Soluciones" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contact", label: "Contacto" },
  { href: "/galery", label: "Galeria" },
];

const solutionLinks = [
  { href: "/soluciones#soluciones-principales", label: "Ingeniería civil" },
  { href: "/soluciones#soluciones-principales", label: "Ingeniería eléctrica" },
  { href: "/soluciones#soluciones-capas", label: "Automatización e IoT" },
  { href: "/soluciones#soluciones-capas", label: "Telecomunicaciones" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/idec.ec/",
    label: "Instagram",
    icon: (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.75a.88.88 0 1 1 0 1.75.88.88 0 0 1 0-1.75ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61580307625485",
    label: "Facebook",
    icon: (
      <svg
        aria-hidden="true"
        className="h-4 w-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.5 21v-7h2.3l.35-2.7H13.5V9.58c0-.78.22-1.3 1.34-1.3h1.43V5.86c-.25-.03-1.1-.11-2.08-.11-2.06 0-3.47 1.25-3.47 3.57v1.98H8.4V14h2.32v7h2.78Z" />
      </svg>
    ),
  },
];

const columnTitleClassName =
  "theme-footer-title text-[0.8rem] font-semibold uppercase tracking-[0.16em]";
const linkClassName =
  "theme-footer-link text-sm transition-colors duration-300";

export default function FooterNew() {
  const businessConfig = getBusinessConfig();

  return (
    <footer className="theme-footer relative overflow-hidden">
      <div className="theme-footer-glow absolute inset-0" />
      <div className="theme-footer-grid absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:160px_160px]" />

      <div className="relative mx-auto w-full max-w-[1360px] px-[clamp(32px,6vw,96px)] py-11 md:py-12">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[minmax(0,1.18fr)_0.78fr_0.98fr_0.9fr] md:gap-6 md:pb-9">
          <div className="max-w-[24rem]">
            <Logo />
            <p className="theme-footer-copy mt-4 text-[0.95rem] leading-7">
              Ingeniería, automatización y tecnología aplicada para operaciones
              que requieren continuidad, control y criterio técnico.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="theme-footer-social inline-flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 hover:border-blue-400/28 hover:bg-blue-500/[0.08] hover:text-blue-300"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className={columnTitleClassName}>Accesos clave</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={columnTitleClassName}>Contacto</h3>
            <div className="mt-4 space-y-3 text-sm leading-6">
              <p>
                <Link
                  href="mailto:administracion@idec.ec"
                  className={linkClassName}
                >
                  administracion@idec.ec
                </Link>
              </p>
              <p>
                <Link
                  href={`https://wa.me/${businessConfig.contact.whatsappNumber}`}
                  className={linkClassName}
                >
                  {businessConfig.contact.whatsappDisplay}
                </Link>
              </p>
              <p className="theme-footer-copy">
                {businessConfig.contact.location}
              </p>
            </div>
          </div>

          <div>
            <h3 className={columnTitleClassName}>Soluciones</h3>
            <ul className="mt-4 space-y-2.5">
              {solutionLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={linkClassName}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="theme-footer-copy pt-5 text-center text-[0.82rem]">
          © 2026 IDEC · Soluciones integrales de ingeniería y tecnología
        </div>
      </div>
    </footer>
  );
}
