import Image from "next/image";
import Link from "next/link";
import idecLogo from "@/components/icons/logo/idec-logo.png";

export default function Logo() {
  return (
    <Link href="/" className="group inline-flex items-center gap-2.5 transition-transform duration-300 hover:-translate-y-0.5">
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_10px_28px_rgba(37,99,235,0.14)] backdrop-blur-md">
        <Image
          src={idecLogo}
          alt="Logo IDEC"
          className="h-7 w-7 object-contain"
          priority
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.02rem] font-extrabold tracking-[0.14em] text-white transition-colors duration-300 group-hover:text-blue-200 sm:text-[1.08rem]">
          IDEC
        </span>
        <span className="mt-1 text-[0.62rem] font-medium uppercase tracking-[0.2em] text-white/[0.55] sm:text-[0.64rem]">
          Soluciones integrales
        </span>
      </span>
    </Link>
  );
}
